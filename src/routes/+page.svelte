<script>
  // Placeholder for any Svelte logic
</script>

<main>
  <section class="hero">
    <div class="container">
      <div class="hero-header">
        <!-- Optional small logo/icon placeholder here -->
      </div>
      <h1>Reduce consultation time by 80%.</h1>
      <p class="tagline">Divorce Buddy pre-qualifies clients and structures their information, so you can focus on what matters most—providing expert legal counsel.</p>
      <button class="primary-button">Join Early Access</button>
      <div class="hero-bg-visual"></div>
    </div>
  </section>

  <section class="statement section-padding">
    <div class="container">
      <h2>Stop wasting time on unqualified consultations.</h2>
      <p>Traditional 30-minute free consultations are expensive and inefficient. Divorce Buddy eliminates this burden by pre-screening clients and providing you with structured, lawyer-ready case summaries before you even meet.</p>
    </div>
  </section>

  <section class="features section-padding">
    <div class="container">
      <div class="feature-item">
        <div class="feature-visual">
          <img src="https://www.svgrepo.com/show/472877/documents-folder.svg" alt="Documents icon" class="feature-icon"/>
        </div>
        <div class="feature-content">
          <h2>Pre-structured case files.</h2>
          <p>Every client comes to you with a comprehensive, AI-generated case summary that includes all relevant details, legal considerations, and potential issues. No more spending 20 minutes gathering basic information—jump straight into strategic legal advice.</p>
        </div>
      </div>

      <div class="feature-item reverse">
        <div class="feature-visual">
          <img src="https://www.svgrepo.com/show/472879/lawyer.svg" alt="Lawyer icon" class="feature-icon"/>
        </div>
        <div class="feature-content">
          <h2>Higher quality clients.</h2>
          <p>Our AI pre-screens clients based on case complexity, urgency, and budget. You only meet with clients who are serious about proceeding and have cases worth your time. No more tire-kickers or unrealistic expectations.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="call-to-action-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to transform your practice?</h2>
        <button class="secondary-button">Get Early Access</button>
        <p class="cta-subtext">Join the waitlist for early access and help shape the future of legal client intake.</p>
      </div>
    </div>
  </section>
</main>

<footer class="main-footer">
  <div class="container">
    <div class="footer-content">
      <span class="footer-logo">Divorce Buddy</span>
      <div class="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
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
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* --- Navigation (removed, will re-evaluate if needed) --- */
  /* nav {
    display: none; 
  } */

  main {
    padding-top: 0;
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
    text-align: center;
    padding: 100px 0 60px 0;
    position: relative;
    overflow: hidden;
  }

  .hero-header {
    height: 40px; /* Space for a small logo/icon if desired */
    margin-bottom: 40px;
  }

  .hero h1 {
    font-size: 3.5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero .tagline {
    font-size: 1.4rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5em;
    color: var(--text-secondary);
  }

  .primary-button {
    background-color: var(--button-primary-bg);
    color: var(--button-primary-text);
    border: none;
    padding: 16px 32px;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    font-weight: 500;
    letter-spacing: 0.02em;
    box-shadow: 0 4px 15px var(--shadow-medium);
  }

  .primary-button:hover {
    background-color: #333333;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--shadow-medium);
  }

  .hero-bg-visual {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background: linear-gradient(to top, rgba(224, 240, 255, 0.8), rgba(224, 240, 255, 0));
    border-radius: 12px;
    z-index: -1;
    opacity: 0.6; /* Subtle effect */
  }

  /* Statement Section */
  .statement {
    padding: 80px 0;
    background-color: var(--white-color);
    text-align: center;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }

  .statement p {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Features Section */
  .features {
    padding: 100px 0;
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

  /* Call to Action Section */
  .call-to-action-section {
    background-color: var(--footer-bg);
    padding: 100px 0;
    text-align: center;
    color: var(--footer-text);
    border-radius: 12px; 
    margin: 60px 24px;
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
    padding: 14px 28px;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-weight: 500;
    margin-top: 20px;
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
      padding: 80px 0 40px 0;
    }

    .hero-bg-visual {
      height: 200px;
    }

    .statement,
    .features {
      padding: 60px 0;
    }

    .call-to-action-section {
      padding: 80px 20px;
      margin: 40px 15px;
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

  @media (max-width: 480px) {
    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .hero {
      padding: 60px 0 30px 0;
    }

    .hero .tagline {
      font-size: 1.2rem;
    }

    .primary-button {
      padding: 12px 24px;
      font-size: 1rem;
    }

    .hero-bg-visual {
      height: 150px;
    }

    .statement,
    .features {
      padding: 40px 0;
    }

    .feature-item {
      margin-bottom: 60px;
    }

    .call-to-action-section {
      padding: 60px 15px;
      margin: 30px 10px;
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
