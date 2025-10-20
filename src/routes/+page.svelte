<script>
  // Placeholder for any Svelte logic
</script>

<main>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Streamline Divorce Client Intake—Save Time, Qualify Faster</h1>
        <p class="tagline">Answer a few quick questions and help us build an intake platform that works for you.</p>
        <button class="primary-button">Take the 2-Minute Survey</button>
        <p class="cta-subtext">Help shape a platform designed to reduce repetitive free consultations and deliver better-qualified divorce clients.</p>
        <div class="testimonial">
          <p class="testimonial-quote">"Built by lawyers, for lawyers. We understand your daily challenges."</p>
          <p class="testimonial-author">— Family Law Practice Team</p>
        </div>
      </div>
    </div>
    <div class="hero-image-section">
      <div class="hero-bg-visual"></div>
    </div>
  </section>

  <section class="statement section-padding">
    <div class="container">
      <h2>What's in it for You?</h2>
      <p>Your feedback ensures our solution is effective, affordable, and lawyer-friendly. We're building this platform specifically to address the pain points you face daily in client intake.</p>
      <div class="survey-details">
        <p><strong>Quick 2-minute survey:</strong> 5 simple questions about your current intake process</p>
        <p><strong>Early access:</strong> First 25 respondents get beta invites</p>
      </div>
    </div>
  </section>

  <section class="features section-padding">
    <div class="container">
      <div class="feature-item">
        <div class="feature-visual">
          <img src="https://www.svgrepo.com/show/472877/documents-folder.svg" alt="Documents icon" class="feature-icon"/>
        </div>
        <div class="feature-content">
          <h2>Easy Case Summaries</h2>
          <p>Get comprehensive client summaries in clean PDF format. All the key details you need to assess a case before investing time in consultations.</p>
        </div>
      </div>

      <div class="feature-item reverse">
        <div class="feature-visual">
          <img src="https://www.svgrepo.com/show/472879/lawyer.svg" alt="Checklist icon" class="feature-icon"/>
        </div>
        <div class="feature-content">
          <h2>Client Info Up Front</h2>
          <p>Know budget, timeline, and case complexity before the first call. Focus your time on clients who are serious and ready to move forward.</p>
        </div>
      </div>

      <div class="feature-item">
        <div class="feature-visual">
          <img src="https://www.svgrepo.com/show/472880/shield.svg" alt="Shield icon" class="feature-icon"/>
        </div>
        <div class="feature-content">
          <h2>Referral, Not Spam</h2>
          <p>We connect qualified clients with the right lawyers. No cold outreach, no spam—just quality referrals that convert to paying clients.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="privacy section-padding">
    <div class="container">
      <h2>We Want to Hear from Legal Professionals!</h2>
      <p>What do you need most in a client intake tool?</p>
      <div class="privacy-points">
        <div class="privacy-point">
          <h3>Confidential & Secure</h3>
          <p>Your responses are private. We never share your information with third parties.</p>
        </div>
        <div class="privacy-point">
          <h3>Shape the Solution</h3>
          <p>Help us build features that actually solve your daily challenges in client intake.</p>
        </div>
        <div class="privacy-point">
          <h3>Early Access</h3>
          <p>First 25 respondents get early beta invites when we launch the platform.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="call-to-action-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Share Your Feedback?</h2>
        <button class="secondary-button">Take the 2-Minute Survey</button>
        <p class="cta-subtext">You'll be redirected to our short form (5 questions, 2 minutes). After submission, you may be invited to early access or notified when we launch.</p>
      </div>
    </div>
  </section>
</main>

<footer class="main-footer">
  <div class="container">
    <div class="footer-content">
      <span class="footer-logo">Divorce Buddy</span>
      <div class="footer-links">
        <a href="mailto:feedback@divorcebuddy.com">Contact Us</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
    <div class="footer-copyright">
      <p>&copy; 2024 Divorce Buddy. Building better client intake for family lawyers.</p>
    </div>
  </div>
</footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  :root {
    --bg-color: #F7F7F7; /* Light Gray */
    --text-primary: #1A1A1A; /* Dark Gray */
    --text-secondary: #5C5C5C; /* Medium Gray */
    --accent-color: #4A90E2; /* Muted Blue */
    --button-primary-bg: #1A1A1A;
    --button-primary-text: #FFFFFF;
    --button-secondary-bg: #E0E0E0;
    --button-secondary-text: #1A1A1A;
    --footer-bg: #1A1A1A;
    --footer-text: #E0E0E0;
    --border-color: #E0E0E0;
    --shadow-light: rgba(0, 0, 0, 0.05);
    --shadow-medium: rgba(0, 0, 0, 0.1);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-color);
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* --- Navigation (removed, will re-evaluate if needed) --- */
  /* nav {
    display: none; 
  } */

  main {
    padding: 40px 0;
  }

  h1, h2, h3 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
  }

  h1 {
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 0.5em;
    color: var(--text-primary);
  }

  h2 {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 1em;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 1.5em;
  }

  /* Hero Section */
  .hero {
    padding: 60px 0 40px 0;
    margin-bottom: 40px;
  }

  .hero-content {
    text-align: center;
    margin-bottom: 40px;
  }

  .hero h1 {
    font-size: 3.5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.5em;
  }

  .hero .tagline {
    font-size: 1.4rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    color: var(--text-secondary);
  }

  .hero .cta-subtext {
    font-size: 1rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5em;
    color: var(--text-secondary);
    font-style: italic;
  }

  .testimonial {
    margin-top: 2em;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    border-left: 4px solid var(--accent-color);
  }

  .testimonial-quote {
    font-size: 1.1rem;
    font-style: italic;
    color: var(--text-primary);
    margin-bottom: 0.5em;
    font-weight: 500;
  }

  .testimonial-author {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0;
    text-align: right;
  }

  .survey-details {
    margin-top: 2em;
    padding: 20px;
    background-color: rgba(74, 144, 226, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(74, 144, 226, 0.2);
  }

  .survey-details p {
    margin-bottom: 0.5em;
    font-size: 1rem;
  }

  .survey-details p:last-child {
    margin-bottom: 0;
  }

  .hero-image-section {
    position: relative;
    width: 90%;
    margin: 0 auto;
    aspect-ratio: 16/9;
    border-radius: 60px;
    overflow: hidden;
  }

  .hero-bg-visual {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/hero-background.jpg');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    opacity: 0.4;
  }

  .hero-bg-visual::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.6) 70%, rgba(255, 255, 255, 0.9) 100%);
    border-radius: 60px;
  }

  .primary-button {
    background-color: var(--button-primary-bg);
    color: var(--button-primary-text);
    border: none;
    padding: 18px 36px;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    font-weight: 600;
    letter-spacing: 0.02em;
    box-shadow: 0 6px 20px var(--shadow-medium);
    position: relative;
    z-index: 1;
    margin: 1em 0;
  }

  .primary-button:hover {
    background-color: #333333;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--shadow-medium);
  }


  /* Statement Section */
  .statement {
    padding: 80px 0;
    background-color: #FEFEFE;
    text-align: center;
    border-radius: 60px;
    margin-bottom: 40px;
    box-shadow: 0 4px 20px var(--shadow-light);
  }

  .statement p {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Features Section */
  .features {
    padding: 100px 0;
    background-color: #FCFCFC;
    border-radius: 60px;
    margin-bottom: 40px;
    box-shadow: 0 4px 20px var(--shadow-light);
  }

  .feature-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-bottom: 100px;
  }

  .feature-item:last-child {
    margin-bottom: 0;
  }

  .feature-item.reverse {
    flex-direction: row-reverse;
  }

  .feature-visual {
    min-width: 300px;
    max-width: 400px;
    height: 250px;
    background-color: var(--bg-color); /* Matches page background for a floating effect */
    border-radius: 12px;
    box-shadow: 0 4px 15px var(--shadow-light);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .feature-icon {
    width: 100px;
    height: 100px;
    color: var(--accent-color);
  }

  .feature-content {
    flex: 1;
    text-align: left;
  }

  .feature-content h2 {
    text-align: left;
    margin-top: 0;
    margin-bottom: 0.8em;
  }

  /* Privacy Section */
  .privacy {
    background-color: #FAFAFA;
    padding: 100px 0;
    border-radius: 60px;
    margin-bottom: 40px;
    box-shadow: 0 4px 20px var(--shadow-light);
  }

  .privacy h2 {
    text-align: center;
    margin-bottom: 1em;
  }

  .privacy > .container > p {
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3em;
  }

  .privacy-points {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .privacy-point {
    flex: 1;
    min-width: 250px;
    max-width: 300px;
    text-align: center;
    padding: 30px 20px;
    background-color: var(--bg-color);
    border-radius: 8px;
    box-shadow: 0 2px 10px var(--shadow-light);
  }

  .privacy-point h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5em;
    color: var(--text-primary);
  }

  .privacy-point p {
    font-size: 0.95rem;
    margin-bottom: 0;
    color: var(--text-secondary);
  }

  /* Call to Action Section */
  .call-to-action-section {
    background-color: var(--footer-bg);
    padding: 100px 0;
    text-align: center;
    color: var(--footer-text);
    border-radius: 60px; 
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .call-to-action-section .container {
    max-width: 800px;
  }

  .cta-content h2 {
    color: var(--white-color);
    margin-bottom: 0.8em;
  }

  .secondary-button {
    background-color: var(--button-secondary-bg);
    color: var(--button-secondary-text);
    border: none;
    padding: 16px 32px;
    font-size: 1.1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-weight: 600;
    margin-top: 20px;
    box-shadow: 0 4px 15px var(--shadow-medium);
  }

  .secondary-button:hover {
    background-color: #CCCCCC;
    transform: translateY(-1px);
  }

  .cta-subtext {
    font-size: 0.9em;
    color: var(--footer-text);
    margin-top: 20px;
    opacity: 0.7;
  }

  /* Footer */
  .main-footer {
    padding: 40px 0;
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.9em;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .footer-copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
  }

  .footer-copyright p {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .footer-logo {
    font-weight: 700;
    color: var(--text-primary);
  }

  .footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: var(--text-primary);
  }

  /* Responsive Design */
  @media (max-width: 992px) {
    .feature-item {
      flex-direction: column;
      text-align: center;
    }

    .feature-item.reverse {
      flex-direction: column; 
    }

    .feature-visual {
      min-width: unset;
      width: 80%;
      height: 200px;
      margin-bottom: 40px;
    }

    .feature-content {
      text-align: center;
    }

    .feature-content h2 {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }

    .hero {
      padding: 40px 0 30px 0;
    }

    .hero-image-section {
      width: 100%;
      aspect-ratio: 16/9;
    }


    .statement,
    .features,
    .privacy {
      padding: 60px 0;
    }

    .privacy-points {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .privacy-point {
      max-width: 90%;
    }

    .call-to-action-section {
      padding: 80px 20px;
      margin: 0 15px 40px 15px;
    }

    .footer-content {
      flex-direction: column;
      gap: 15px;
    }

    .footer-links a {
      margin: 0 10px;
    }

    .feature-icon {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .hero {
      padding: 30px 0 20px 0;
    }

    .hero-image-section {
      /* width: 100%; */
      aspect-ratio: 16/9;
    }

    .hero .tagline {
      font-size: 1.2rem;
    }

    .testimonial {
      margin-top: 1.5em;
      padding: 15px;
    }

    .testimonial-quote {
      font-size: 1rem;
    }

    .survey-details {
      margin-top: 1.5em;
      padding: 15px;
    }

    .primary-button {
      padding: 12px 24px;
      font-size: 1rem;
    }


    .statement,
    .features,
    .privacy {
      padding: 40px 0;
    }

    .feature-item {
      margin-bottom: 60px;
    }

    .call-to-action-section {
      padding: 60px 15px;
      margin: 0 10px 30px 10px;
    }

    .secondary-button {
      padding: 10px 20px;
      font-size: 0.9rem;
    }

    .site-title {
      font-size: 1.5em;
    }

    .feature-icon {
      width: 60px;
      height: 60px;
    }
  }
</style>
