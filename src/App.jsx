import "./App.css";
import ContactForm from "./ContactForm";
import Projects from "./Projects";

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <p className="eyebrow">Software Engineer • AI/ML Enthusiast</p>

        <h1>Qurban Ali Rajar</h1>

        <p className="hero-text">
          Computer Science graduate passionate about Artificial Intelligence,
          Machine Learning, Computer Vision, NLP, Flutter, and full-stack
          development.
        </p>

        <div className="buttons">
          <a
            href="https://github.com/qurban-12"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/qurban-ali-deveploer-researcher/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="#contact">Contact</a>
        </div>
      </header>

      <section>
        <h2>About Me</h2>

        <p>
          I am a Computer Science graduate from Sukkur IBA University,
          Pakistan. I enjoy building practical software and AI solutions,
          with interests in Machine Learning, Computer Vision, NLP, and
          intelligent applications.
        </p>
      </section>

      <section>
        <h2>Skills</h2>

        <div className="skills">
          <span>Python</span>
          <span>JavaScript</span>
          <span>Dart</span>
          <span>React</span>
          <span>Flutter</span>
          <span>MERN</span>
          <span>TensorFlow</span>
          <span>Scikit-learn</span>
          <span>OpenCV</span>
          <span>NLP</span>
          <span>Computer Vision</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      <Projects />

      <section>
        <h2>Experience</h2>

        <article>
          <h3>DevelopersHub Corporation</h3>
          <p>Frontend Developer Intern</p>
        </article>

        <article>
          <h3>FlyRank</h3>
          <p>AI / Backend AI Engineer Intern</p>
        </article>
      </section>

      <section>
        <h2>Future Work</h2>

        <p>
          This space will be used for future technical articles, research
          projects, and my FlyRank capstone work.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>

        <p>
          Interested in working together or discussing an AI/ML project?
        </p>

        <ContactForm />

        <div className="buttons">
          <a href="mailto:qrrajarpnl@gmail.com">Email Me</a>

          <a
            href="/Qurban_Ali_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>

          <a
            href="https://github.com/qurban-12"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/qurban-ali-deveploer-researcher/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://calendly.com/qrrajarpnl/30min"
            target="_blank"
            rel="noreferrer"
          >
            Book a Meeting
          </a>

          <a href="#contact">Contact</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <p>© 2026 Qurban Ali Rajar</p>

          <a
            href="https://internship.flyrank.ai/verify?id=FR-D1-T668H-R789R&amp;first_name=Qurban"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify Qurban Ali's FlyRank AI Internship credential FR-D1-T668H-R789R"
            style={{
              boxSizing: "border-box",
              margin: 0,
              padding: 0,
              border: 0,
              background: "none",
              textDecoration: "none",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              fontStyle: "normal",
              lineHeight: 1.25,
              textTransform: "none",
              float: "none",
              WebkitFontSmoothing: "antialiased",
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px 18px",
              background: "#FFFFFF",
              border: "1px solid #DDE4E7",
              borderRadius: "20px",
              boxShadow: "0 1px 2px rgba(5,31,33,0.05)",
              maxWidth: "100%",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              style={{ display: "block", flex: "none", opacity: 1, transform: "none", maxWidth: "none" }}
            >
              <rect width="96" height="96" rx="22" fill="#051F21" />
              <path d="M28.2354 74.2202V67.9039C29.6419 68.4369 31.3724 68.7055 33.4311 68.7055C35.3235 68.7055 36.8153 68.2396 37.8979 67.3079C38.9805 66.3762 39.9566 64.8695 40.8218 62.792L42.6887 58.3139L29.8976 29.2879C35.0038 29.2879 39.6028 32.3307 41.5294 36.9893L47.0746 50.3985L56.0126 28.6038C57.9221 23.9452 62.5168 20.894 67.6187 20.894L50.0795 63.5936C48.4556 67.5933 46.5205 70.5102 44.2743 72.3484C42.0281 74.1867 39.1169 75.1058 35.5451 75.1058C32.6212 75.1058 30.1875 74.812 28.2354 74.2244V74.2202Z" fill="#54E399" />
            </svg>
            <span
              style={{
                margin: 0,
                padding: 0,
                border: 0,
                background: "none",
                color: "inherit",
                fontWeight: 400,
                fontStyle: "normal",
                letterSpacing: "normal",
                textTransform: "none",
                textDecoration: "none",
                whiteSpace: "normal",
                float: "none",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                minWidth: 0,
              }}
            >
              <span
                style={{
                  margin: 0,
                  padding: 0,
                  border: 0,
                  background: "none",
                  color: "inherit",
                  fontWeight: 700,
                  fontStyle: "normal",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  whiteSpace: "normal",
                  float: "none",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                  fontSize: "9px",
                  color: "rgba(5,31,33,0.5)",
                }}
              >
                FlyRank AI Internship
              </span>
              <span
                style={{
                  margin: 0,
                  padding: 0,
                  border: 0,
                  background: "none",
                  color: "inherit",
                  fontWeight: 600,
                  fontStyle: "normal",
                  letterSpacing: "-0.01em",
                  textTransform: "none",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  float: "none",
                  fontSize: "15px",
                  color: "#051F21",
                }}
              >
                Verified credential
              </span>
              <span
                style={{
                  margin: 0,
                  padding: 0,
                  border: 0,
                  background: "none",
                  color: "inherit",
                  fontWeight: 400,
                  fontStyle: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  whiteSpace: "normal",
                  float: "none",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                  fontSize: "11px",
                  color: "#1A7A4A",
                }}
              >
                FR-D1-T668H-R789R
              </span>
            </span>
            <span
              style={{
                margin: 0,
                padding: 0,
                border: 0,
                background: "none",
                color: "inherit",
                fontWeight: 600,
                fontStyle: "normal",
                letterSpacing: "normal",
                textTransform: "none",
                textDecoration: "none",
                whiteSpace: "normal",
                float: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginLeft: "8px",
                padding: "6px 12px",
                background: "rgba(84,227,153,0.12)",
                border: "1px solid rgba(84,227,153,0.28)",
                borderRadius: "9999px",
                fontSize: "12px",
                color: "#1A7A4A",
                flex: "none",
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                style={{ display: "block", flex: "none", opacity: 1, transform: "none", maxWidth: "none" }}
              >
                <circle cx="12" cy="12" r="10" stroke="#1A7A4A" strokeWidth="1.5" />
                <path d="M7.9 12.3l2.8 2.8 5.4-5.8" stroke="#1A7A4A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Verify
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;