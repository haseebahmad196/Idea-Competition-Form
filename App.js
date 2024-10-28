import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const IdeaSubmissionForm = () => {
  const [progress, setProgress] = useState(0);
  const [remainingChars, setRemainingChars] = useState(500);

  useEffect(() => {
    // Adding dynamic style using React useEffect
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleInputChange = () => {
    const filledFields = document.querySelectorAll('input:required:valid, textarea:required:valid').length;
    const totalFields = document.querySelectorAll('input:required, textarea:required').length;
    const newProgress = Math.round((filledFields / totalFields) * 100);
    setProgress(newProgress);
  };

  const handleDescriptionChange = (e) => {
    const currentLength = e.target.value.length;
    setRemainingChars(500 - currentLength);
    handleInputChange();
  };

  return (
    <div className="background-image-container d-flex flex-column flex-lg-row justify-content-between align-items-start min-vh-100">
      {/* Left Sidebar Content */}
      <div className="sidebar-content">
        <Card className="engage-card mb-4 shadow-sm">
          <Card.Body>
            <h5 className="sidebar-title">Participant Goals</h5>
            <ul className="sidebar-list">
              <li>Opportunities to <strong>win prizes</strong>.</li>
              <li>Collaborate with <strong>startups in Germany</strong>.</li>
              <li>Gain <strong>international exposure</strong>.</li>
              <li>Access to <strong>mentorship from industry experts</strong>.</li>
              <li>Build a <strong>strong professional network</strong> with peers and industry leaders.</li>
              <li>Receive <strong>constructive feedback</strong> to improve your idea.</li>
              <li>Get the opportunity to <strong>showcase your idea</strong> on a global platform.</li>
            </ul>
          </Card.Body>
        </Card>

        <Card className="engage-card mb-4 shadow-sm">
          <Card.Body>
            <h5 className="sidebar-title">Evaluation Criteria</h5>
            <p className="sidebar-text">
              This competition is evaluated on a <strong>total of 100 points</strong>. Each section of the form is assigned specific points, and BugXTech will assess your submission based on the marks given for each part. Make sure to provide comprehensive and detailed responses to maximize your score.
            </p>
            <ul className="sidebar-list">
              <li>Personal Information: <strong>20 points</strong></li>
              <li>Idea Information: <strong>50 points</strong></li>
              <li>Collaboration: <strong>30 points</strong></li>
            </ul>
          </Card.Body>
        </Card>
      </div>

      {/* Main Form Container */}
      <Container className="form-container shadow rounded p-5">
        {/* Moving Greeting Section */}
        <div className="moving-banner mb-4">
          <h1 className="moving-title">Welcome to the BugXTech Idea Competition!</h1>
        </div>

        {/* Form Section */}
        <h2 className="text-center mb-4 form-title dynamic-title">BugXTech Idea Submission Form</h2>
        <ProgressBar now={progress} label={`${progress}% Complete`} className="mb-4 progress-bar-custom" />

        {/* Personal Information Section */}
        <h3 className="section-title dynamic-hover">1. Personal Information <span className="points-highlight-section">(20 points)</span></h3>
        <Form>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="name">
                <Form.Label className="form-label dynamic-hover">Name <span className="points-highlight-field">(5 points)</span></Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required className="form-input dynamic-hover" onChange={handleInputChange} />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="email">
                <Form.Label className="form-label dynamic-hover">Email Address <span className="points-highlight-field">(5 points)</span></Form.Label>
                <Form.Control type="email" placeholder="Enter your email address" required className="form-input dynamic-hover" onChange={handleInputChange} />
              </Form.Group>
            </Col>
          </Row>

          {/* Idea Information Section */}
          <h3 className="section-title dynamic-hover mt-5">2. Idea Information <span className="points-highlight-section">(50 points)</span></h3>
          <Form.Group controlId="ideaTitle" className="mt-4">
            <Form.Label className="form-label dynamic-hover">Idea Title <span className="points-highlight-field">(5 points)</span></Form.Label>
            <Form.Control type="text" placeholder="Enter your idea title" required className="form-input dynamic-hover" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="ideaDescription" className="mt-4">
            <Form.Label className="form-label dynamic-hover">Idea Description <span className="points-highlight-field">(15 points)</span></Form.Label>
            <div className="character-count dynamic-hover" id="idea-description-counter" style={{ textAlign: 'right', fontSize: '0.9rem', color: '#6c757d' }}>
              Remaining characters: {remainingChars}
            </div>
            <Form.Control
              as="textarea"
              rows={3}
              maxLength={500}
              placeholder="Describe your idea in detail (Max 500 characters)"
              required
              className="form-textarea dynamic-hover"
              onChange={handleDescriptionChange}
            />
          </Form.Group>

          <Form.Group controlId="targetAudience" className="mt-4">
            <Form.Label className="form-label dynamic-hover">Target Audience <span className="points-highlight-field">(10 points)</span></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Who are the customers for this idea?" required className="form-input dynamic-hover" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="problemStatement" className="mt-4">
            <Form.Label className="form-label dynamic-hover">Problem Statement <span className="points-highlight-field">(10 points)</span></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="What problem does this idea solve for the customers?" required className="form-textarea dynamic-hover" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="potentialImpact" className="mt-4">
            <Form.Label className="form-label dynamic-hover">Potential Impact <span className="points-highlight-field">(5 points)</span></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="How will this idea impact the customers?" required className="form-textarea dynamic-hover" onChange={handleInputChange} />
          </Form.Group>

          {/* Collaboration Section */}
          <h3 className="section-title dynamic-hover mt-5">3. Collaboration <span className="points-highlight-section">(30 points)</span></h3>
          <Form.Group controlId="collaborationInterest" className="mt-4">
            <Form.Label className="form-label dynamic-hover">Collaboration Interest <span className="points-highlight-field">(10 points)</span></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Are you interested in collaborating with others on this idea?" className="form-textarea dynamic-hover" onChange={handleInputChange} />
          </Form.Group>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="linkedin" className="mt-4">
                <Form.Label className="form-label dynamic-hover">LinkedIn Profile Links (optional) <span className="points-highlight-field">(0 points)</span></Form.Label>
                <Form.Control type="text" placeholder="Enter your LinkedIn profile link" className="form-input dynamic-hover" onChange={handleInputChange} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="hashtagUsage" className="mt-4">
                <Form.Label className="form-label dynamic-hover">Hashtag Usage <span className="points-highlight-field">(10 points)</span></Form.Label>
                <Form.Control type="text" placeholder="Show your support by using the BugXTech competition hashtag on your LinkedIn profile." required className="form-input dynamic-hover" onChange={handleInputChange} />
              </Form.Group>
            </Col>
          </Row>

          {/* LinkedIn Share Section */}
          <Form.Group controlId="linkedinShare" className="mt-4">
            <Form.Label className="form-label dynamic-hover">LinkedIn Share Confirmation <span className="points-highlight-field">(10 points)</span></Form.Label>
            <div className="form-check-group dynamic-hover">
              <Form.Check 
                type="radio"
                label="Yes, I confirm I will like a post from BugXTech on LinkedIn and share it to my network, tagging BugXTech."
                name="linkedinShareOptions"
                className="form-check dynamic-hover"
                onChange={handleInputChange}
              />
              <Form.Check 
                type="radio"
                label="No, I do not wish to share on LinkedIn (Optional, though sharing is encouraged for broader engagement)."
                name="linkedinShareOptions"
                className="form-check dynamic-hover"
                onChange={handleInputChange}
              />
            </div>
          </Form.Group>

          {/* Trust Factor */}
          <div className="mt-5">
            <p className="text-muted trust-text dynamic-hover" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              We value your privacy. Rest assured that your idea will not be shared with any third parties and will only be used internally for evaluation and collaboration.
            </p>
          </div>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-4 submit-button dynamic-hover">Submit Your Idea</Button>
        </Form>
      </Container>
    </div>
  );
};

export default IdeaSubmissionForm;

/* Inline CSS */
const styles = `
  body, html {
    height: 100%;
    margin: 0;
  }

  .background-image-container {
    background-image: url('https://images.unsplash.com/photo-1496180727794-817822f65950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGlkZWF8ZW58MHx8fHwxNjE2Mzk5NjE0&ixlib=rb-1.2.1&q=80&w=1080');
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .form-container {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 30px;
    max-width: 800px;
    margin: auto;
  }

  .sidebar-content {
    width: 100%;
    padding: 20px;
  }

  .engage-card {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .sidebar-title {
    font-size: 1.2rem;
    color: #0d6efd;
    font-weight: bold;
  }

  .sidebar-text {
    font-size: 1rem;
    color: #343a40;
  }

  .sidebar-list {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 1rem;
  }

  /* Moving Banner */
  .moving-banner {
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
  }

  .moving-title {
    display: inline-block;
    padding-left: 100%;
    animation: moveText 10s linear infinite;
    font-size: 2rem;
    color: #0d6efd;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }

  @keyframes moveText {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  /* Dynamic Hover Effects */
  .dynamic-hover {
    color: #0d6efd;
    transition: color 0.3s, transform 0.3s;
    cursor: pointer;
    font-size: 1.1rem;
  }

  .dynamic-hover:hover {
    color: #007bff;
    transform: scale(1.05);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .greeting-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    color: #343a40;
  }

  .form-title {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #0d6efd;
  }

  .section-title {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #343a40;
    margin-top: 40px;
  }

  .form-label {
    font-weight: bold;
    color: #343a40;
  }

  .points-highlight-section {
    color: #17a2b8;
    font-weight: bold;
  }

  .points-highlight-field {
    color: #28a745;
    font-weight: bold;
  }

  .form-input,
  .form-textarea {
    border-radius: 5px;
    border: 1px solid #ced4da;
    padding: 10px;
  }

  .form-input:focus,
  .form-textarea:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 5px rgba(13, 110, 253, 0.5);
  }

  .form-check {
    margin-top: 10px;
  }

  .form-check-group {
    margin-top: 10px;
  }

  .trust-text {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .submit-button {
    background-color: #0d6efd;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .submit-button:hover {
    background-color: #0b5ed7;
  }

  .progress-bar-custom {
    height: 20px;
    border-radius: 5px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .form-container {
      padding: 20px;
    }

    .moving-title {
      font-size: 1.5rem;
    }

    .form-title {
      font-size: 1.5rem;
    }

    .form-label {
      font-size: 1rem;
    }

    .section-title {
      font-size: 1.2rem;
    }

    .sidebar-content {
      width: 100%;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);