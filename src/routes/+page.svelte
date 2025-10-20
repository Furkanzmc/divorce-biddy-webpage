<script>
  // Placeholder for any Svelte logic
</script>

<main>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>One-pass divorce intake. Clients answer. You get a clean PDF. That's it.</h1>
        <p class="tagline">Built exclusively for family law. We collect facts, structure them into a PDF, and stop.</p>
        <button class="primary-button">Take the 2-Minute Survey</button>
        <p class="cta-subtext">5 questions. First 25 get early access.</p>
        <p class="ai-disclaimer">AI produces a client-ready summary with citations to existing cases/statutes—no advice, no analysis.</p>
      </div>
    </div>
    <div class="hero-image-section">
      <div class="hero-bg-visual"></div>
    </div>
  </section>

  <section class="statement section-padding">
    <div class="container">
      <h2>How it works</h2>
      <div class="workflow-steps">
        <div class="workflow-step">
          <h3>Client Q&A</h3>
          <p>The client answers guided questions once.</p>
        </div>
        <div class="workflow-step">
          <h3>Instant PDF</h3>
          <p>A clean, structured summary with statute/case references.</p>
        </div>
        <div class="workflow-step">
          <h3>You review</h3>
          <p>You receive the PDF; our part ends here.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="features section-padding">
    <div class="container">
      <h2>Why it helps</h2>
      <div class="feature-item">
        <div class="feature-visual">
          <img src="https://www.svgrepo.com/show/472877/documents-folder.svg" alt="Documents icon" class="feature-icon"/>
        </div>
        <div class="feature-content">
          <h3>Cut 30-minute free consults to 5</h3>
          <p>Pre-qualified, structured, and ready.</p>
        </div>
      </div>

      <div class="feature-item reverse">
        <div class="feature-visual">
          <img src="https://www.svgrepo.com/show/472879/lawyer.svg" alt="Checklist icon" class="feature-icon"/>
        </div>
        <div class="feature-content">
          <h3>Real, consult-ready clients</h3>
          <p>No marketing blasts—just serious prospects.</p>
        </div>
      </div>

      <div class="feature-item">
        <div class="feature-visual">
          <img src="https://www.svgrepo.com/show/472880/shield.svg" alt="Shield icon" class="feature-icon"/>
        </div>
        <div class="feature-content">
          <h3>Family-law intake in one step</h3>
          <p>No portals, no follow-ups.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="privacy section-padding">
    <div class="container">
      <h2>Trust & Compliance</h2>
      <div class="privacy-points">
        <div class="privacy-point">
          <h3>No Legal Advice</h3>
          <p>We do not provide legal advice. We reference public family-law sources and existing cases to organize facts.</p>
        </div>
        <div class="privacy-point">
          <h3>Currently Ontario-focused</h3>
          <p>Built with input from practicing family lawyers in Ontario.</p>
        </div>
        <div class="privacy-point">
          <h3>Confidential & Secure</h3>
          <p>Survey responses are confidential and secure. No client-identifying data is collected.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="call-to-action-section">
    <div class="container">
      <div class="cta-content">
        <h2>Help us build the right solution</h2>
        <button class="secondary-button">Take the 2-Minute Survey</button>
        <p class="cta-subtext">5 questions. First 25 get early access. Survey responses are confidential and secure.</p>
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
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </div>
    </div>
    <div class="footer-copyright">
      <p>&copy; 2024 Divorce Buddy. A platform designed exclusively for family lawyers.</p>
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
    font-size: 4rem;
    text-align: center;
    margin-bottom: 0.8em;
    margin-top: 0.5em;
    color: var(--text-primary);
    line-height: 1.1;
  }

  h2 {
    font-size: 2.6rem;
    text-align: center;
    margin-bottom: 1.2em;
    margin-top: 0.5em;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 1.5em;
  }

  /* Hero Section */
  .hero {
    padding: 80px 0 60px 0;
    margin-bottom: 60px;
  }

  .hero-content {
    text-align: center;
    margin-bottom: 50px;
    padding: 20px 0;
  }

  .hero h1 {
    font-size: 4rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.8em;
    margin-top: 0.5em;
  }

  .hero .tagline {
    font-size: 1.5rem;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5em;
    margin-top: 1em;
    color: var(--text-secondary);
    line-height: 1.6;
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

  .ai-disclaimer {
    font-size: 0.95rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
    color: var(--text-secondary);
    font-style: italic;
    opacity: 0.8;
  }


  .workflow-steps {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .workflow-step {
    flex: 1;
    min-width: 200px;
    max-width: 250px;
    text-align: center;
    padding: 20px;
  }

  .workflow-step h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5em;
    color: var(--text-primary);
    font-weight: 600;
  }

  .workflow-step p {
    font-size: 1rem;
    margin-bottom: 0;
    color: var(--text-secondary);
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
    background-color: #4A90E2;
    color: #FFFFFF;
    border: none;
    padding: 24px 48px;
    font-size: 1.4rem;
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 700;
    letter-spacing: 0.02em;
    box-shadow: 0 10px 30px rgba(74, 144, 226, 0.4);
    position: relative;
    z-index: 1;
    margin: 2em auto;
    text-align: center;
    display: block;
    width: fit-content;
    min-width: 280px;
  }

  .primary-button:hover {
    background-color: #357ABD;
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(74, 144, 226, 0.5);
  }


  /* Statement Section */
  .statement {
    padding: 100px 0;
    background-color: #FEFEFE;
    text-align: center;
    border-radius: 60px;
    margin-bottom: 60px;
    box-shadow: 0 6px 25px var(--shadow-light);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .statement p {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Features Section */
  .features {
    padding: 120px 0;
    background-color: #FCFCFC;
    border-radius: 60px;
    margin-bottom: 60px;
    box-shadow: 0 6px 25px var(--shadow-light);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .feature-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-bottom: 80px;
  }

  .feature-item:last-child {
    margin-bottom: 0;
  }

  .feature-item.reverse {
    flex-direction: row-reverse;
  }

  .feature-item.reverse .feature-visual {
    margin-right: 0;
    margin-left: 20px;
  }

  .feature-visual {
    min-width: 300px;
    max-width: 400px;
    height: 250px;
    background-color: var(--bg-color);
    border-radius: 12px;
    box-shadow: 0 4px 15px var(--shadow-light);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
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

  .feature-content h3 {
    text-align: left;
    margin-top: 0;
    margin-bottom: 0.8em;
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  /* Privacy Section */
  .privacy {
    background-color: #FAFAFA;
    padding: 120px 0;
    border-radius: 60px;
    margin-bottom: 60px;
    box-shadow: 0 6px 25px var(--shadow-light);
    border: 1px solid rgba(0, 0, 0, 0.05);
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
    margin-top: 30px;
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
    padding: 120px 0;
    text-align: center;
    color: var(--footer-text);
    border-radius: 60px; 
    margin-bottom: 60px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .call-to-action-section .container {
    max-width: 800px;
  }

  .cta-content h2 {
    color: var(--white-color);
    margin-bottom: 0.8em;
  }

  .secondary-button {
    background-color: #4A90E2;
    color: #FFFFFF;
    border: none;
    padding: 20px 40px;
    font-size: 1.3rem;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 700;
    margin-top: 30px;
    box-shadow: 0 8px 25px rgba(74, 144, 226, 0.4);
    min-width: 260px;
  }

  .secondary-button:hover {
    background-color: #357ABD;
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(74, 144, 226, 0.5);
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

  .footer-links {
    display: flex;
    gap: 20px;
  }

  .footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
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

        .feature-content h3 {
          text-align: center;
        }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.2rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .hero {
      padding: 60px 0 40px 0;
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

    .footer-links {
      gap: 15px;
    }

    .feature-icon {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 2.8rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    .hero {
      padding: 50px 0 30px 0;
    }

    .hero-image-section {
      /* width: 100%; */
      aspect-ratio: 16/9;
    }

    .hero .tagline {
      font-size: 1.2rem;
    }


    .workflow-steps {
      flex-direction: column;
      gap: 20px;
    }

    .workflow-step {
      max-width: 100%;
    }

    .primary-button {
      padding: 20px 36px;
      font-size: 1.2rem;
      width: 100%;
      max-width: 320px;
      min-width: 280px;
    }


    .statement,
    .features,
    .privacy {
      padding: 40px 0;
    }

    .feature-item {
      margin-bottom: 50px;
    }

    .call-to-action-section {
      padding: 60px 15px;
      margin: 0 10px 30px 10px;
    }

    .secondary-button {
      padding: 18px 32px;
      font-size: 1.1rem;
      width: 100%;
      max-width: 300px;
      min-width: 260px;
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
