import "./App.css";

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

      <section>
        <h2>Projects</h2>

        <article>
          <h3>Cattle Marketplace</h3>
          <p>
            A full-stack cattle marketplace built with Flutter and MERN,
            including authentication, listings, chat, administration, and
            AI-based cattle weight estimation.
          </p>
        </article>

        <article>
          <h3>Aspect-Based Sentiment Analysis</h3>
          <p>
            An NLP project focused on extracting product aspects and analyzing
            sentiment from customer reviews.
          </p>
        </article>

        <article>
          <h3>AI & Computer Vision Projects</h3>
          <p>
            Practical projects involving Machine Learning, Computer Vision,
            NLP, and intelligent systems.
          </p>
        </article>
      </section>

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

        <div className="buttons">
          <a href="mailto:qrrajarpnl@gmail.com">Email Me</a>

        <div className="buttons">
  <a
  href="/Qurban-Ali-CV.pdf"
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
        </div>
      </section>

      <footer>
        <p>© 2026 Qurban Ali Rajar</p>
      </footer>
    </div>
  );
}

export default App;