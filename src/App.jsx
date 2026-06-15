import React, { useEffect, useState } from "react";
import logo from "./assets/Logo.png";
import slideOne from "./assets/slide-1.svg";
import slideTwo from "./assets/slide-2.svg";
import slideThree from "./assets/slide-3.svg";
import slideFour from "./assets/slide-4.svg";

const heroPhrases = [
  "Opening more doors into engineering through stories, programs, and community.",
  "Opening clearer pathways into engineering through mentorship, ideas, and action.",
];

const navItems = [
  { label: "Information", href: "#information" },
  { label: "Articles", href: "#articles" },
  { label: "Events", href: "#events" },
  { label: "Partners", href: "#partners" },
  { label: "Contact Us", href: "#contact" },
];

const slides = [
  {
    title: "Engineering talks that feel welcoming, practical, and ambitious.",
    image: slideOne,
    overlay: "rgba(7, 22, 52, 0.16)",
  },
  {
    title: "Hands-on workshops designed to spark confidence and curiosity.",
    image: slideTwo,
    overlay: "rgba(11, 36, 87, 0.16)",
  },
  {
    title: "Partnerships that bridge schools, industry, and future talent.",
    image: slideThree,
    overlay: "rgba(16, 54, 125, 0.16)",
  },
  {
    title: "Stories that show engineering as creative, global, and impactful.",
    image: slideFour,
    overlay: "rgba(13, 25, 56, 0.18)",
  },
];

const infoCards = [
  {
    title: "Who We Are",
    text: "A promoting-engineering organisation focused on widening access, sharing knowledge, and celebrating talent across different communities.",
  },
  {
    title: "What We Do",
    text: "We curate articles, host events, strengthen partnerships, and create visible entry points for people exploring engineering futures.",
  },
  {
    title: "Why It Matters",
    text: "Engineering becomes more innovative when more people can see themselves in it and access the guidance needed to participate.",
  },
];

const articleCards = [
  {
    title: "Building confidence before technical mastery",
    text: "Early encouragement can be the difference between interest and action.",
  },
  {
    title: "Engineering role models from different paths",
    text: "Career journeys that make the field feel broad, human, and attainable.",
  },
  {
    title: "What a strong outreach event actually looks like",
    text: "Practical ingredients for high-impact sessions that people remember.",
  },
];

const eventCards = [
  {
    title: "Engineering Discovery Day",
    text: "A school-facing event format with speakers, demos, and hands-on stations for students and families.",
  },
  {
    title: "Mentor Circles",
    text: "Small-group conversations between learners and engineering professionals across disciplines.",
  },
  {
    title: "Partner Showcase Forum",
    text: "A presentation space for universities, companies, and community organizations to share opportunities.",
  },
];

const partnerCards = [
  {
    title: "Education Partners",
    text: "Program hosts, student communities, academic institutions.",
  },
  {
    title: "Industry Partners",
    text: "Companies supporting outreach, mentorship, and applied learning.",
  },
  {
    title: "Community Partners",
    text: "Organisations advocating for inclusion, access, and local impact.",
  },
];

const contactCards = [
  {
    title: "General Enquiries",
    lines: ["hello@enginable.global", "+62 000 0000 0000"],
  },
  {
    title: "Partnerships",
    lines: ["partners@enginable.global", "For schools, companies, and community collaborations."],
  },
  {
    title: "Editorial",
    lines: ["stories@enginable.global", "For article pitches, interviews, and spotlight opportunities."],
  },
  {
    title: "Instagram",
    lines: ["@enginable.global", "https://www.instagram.com/enginable.global/"],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [typedHeadline, setTypedHeadline] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isDeletingHeadline, setIsDeletingHeadline] = useState(false);
  const [reservedHeadlineHeight, setReservedHeadlineHeight] = useState(0);
  const measureRef = React.useRef(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const currentPhrase = heroPhrases[headlineIndex];
    const isPhraseComplete = typedHeadline === currentPhrase;
    const isPhraseEmpty = typedHeadline === "";
    let timeoutId;

    if (!isDeletingHeadline && isPhraseComplete) {
      timeoutId = window.setTimeout(() => {
        setIsDeletingHeadline(true);
      }, 3000);
    } else if (isDeletingHeadline && isPhraseEmpty) {
      timeoutId = window.setTimeout(() => {
        setIsDeletingHeadline(false);
        setHeadlineIndex((current) => (current + 1) % heroPhrases.length);
      }, 250);
    } else {
      timeoutId = window.setTimeout(() => {
        setTypedHeadline((current) =>
          isDeletingHeadline
            ? currentPhrase.slice(0, current.length - 1)
            : currentPhrase.slice(0, current.length + 1),
        );
      }, isDeletingHeadline ? 18 : 34);
    }

    return () => window.clearTimeout(timeoutId);
  }, [typedHeadline, headlineIndex, isDeletingHeadline]);

  useEffect(() => {
    function measureHeadlineHeight() {
      const measureElement = measureRef.current;

      if (!measureElement) {
        return;
      }

      let tallestHeight = 0;

      heroPhrases.forEach((phrase) => {
        measureElement.textContent = `${phrase}\u00A0`;
        tallestHeight = Math.max(tallestHeight, measureElement.getBoundingClientRect().height);
      });

      measureElement.textContent = `${heroPhrases[0]}\u00A0`;
      setReservedHeadlineHeight(Math.ceil(tallestHeight));
    }

    measureHeadlineHeight();
    window.addEventListener("resize", measureHeadlineHeight);

    return () => window.removeEventListener("resize", measureHeadlineHeight);
  }, []);

  function goToSlide(index) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <img src={logo} alt="EnginAble Global logo" className="brand-logo" />
          <div>
            <a href="#home" className="brand-name">
              EnginAble Global
            </a>
            <p className="brand-subtitle">Promoting engineering for everyone</p>
          </div>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <nav id="site-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy reveal">
            <h1
              className="typewriter-heading"
              style={reservedHeadlineHeight ? { minHeight: `${reservedHeadlineHeight}px` } : undefined}
            >
              <span ref={measureRef} className="typewriter-ghost" aria-hidden="true">
                {heroPhrases[0]}
              </span>
              <span className="typewriter-live">
                <span>{typedHeadline}</span>
                <span className="typewriter-cursor" aria-hidden="true"></span>
              </span>
            </h1>
            <p className="hero-text">
              EnginAble Global is a modern platform for aspiring engineers, educators, and industry
              allies. We spotlight opportunities, publish ideas, and connect people with meaningful
              events and partnerships.
            </p>
            <div className="hero-actions">
              <a href="#events" className="button button-primary">
                Explore Events
              </a>
              <a href="#articles" className="button button-secondary">
                Read Articles
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>12+</dt>
                <dd>program ideas ready to scale</dd>
              </div>
              <div>
                <dt>4</dt>
                <dd>core content pillars</dd>
              </div>
              <div>
                <dt>1</dt>
                <dd>shared mission: engineering for all</dd>
              </div>
            </dl>
          </div>

          <aside className="hero-panel reveal delay-1">
            <div className="panel-card panel-highlight">
              <h2>Future-ready engineering communities start with belonging.</h2>
              <p>
                Build a public-facing presence for initiatives, thought leadership, and partner
                activations in one place.
              </p>
            </div>
            <div className="panel-grid">
              <article className="panel-card">
                <h3>Career Pathways</h3>
                <p>Profiles, explainers, and engineering journeys that feel practical and inspiring.</p>
              </article>
              <article className="panel-card">
                <h3>Mentor Studio</h3>
                <p>Live sessions that bring professionals, students, and institutions together.</p>
              </article>
            </div>
          </aside>
        </section>

        <section className="carousel-section reveal delay-2" aria-labelledby="carousel-heading">
          <div className="section-heading">
            <h2 id="carousel-heading">A mock carousel for future campaign visuals</h2>
            <p>Four rotating placeholders ready for future campaigns, program photos, or event highlights.</p>
          </div>

          <div className="carousel" aria-roledescription="carousel">
            <button className="carousel-control prev" type="button" aria-label="Previous slide" onClick={() => goToSlide(activeSlide - 1)}>
              &#8592;
            </button>
            <div className="carousel-track">
              {slides.map((slide, index) => (
                <article key={slide.title} className={`carousel-slide ${index === activeSlide ? "active" : ""}`}>
                  <div
                    className="slide-media"
                    style={{
                      backgroundImage: `linear-gradient(${slide.overlay}, ${slide.overlay}), url(${slide.image})`,
                    }}
                  ></div>
                  <div className="slide-copy">
                    <h3>{slide.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <button className="carousel-control next" type="button" aria-label="Next slide" onClick={() => goToSlide(activeSlide + 1)}>
              &#8594;
            </button>
          </div>

          <div className="carousel-dots" aria-label="Carousel navigation">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={`dot ${index === activeSlide ? "active" : ""}`}
                type="button"
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </section>

        <section id="information" className="content-section">
          <div className="section-heading reveal">
            <h2>Clear pathways into EnginAble's mission, approach, and public value.</h2>
          </div>
          <div className="info-grid">
            {infoCards.map((card, index) => (
              <article key={card.title} className={`info-card reveal ${index > 0 ? `delay-${index}` : ""}`}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="articles" className="content-section alt-section">
          <div className="section-heading reveal">
            <h2>Editorial content for discovery, reflection, and momentum.</h2>
          </div>
          <div className="feature-layout">
            <article className="feature-story reveal">
              <h3>How engineering communities can make opportunity feel visible.</h3>
              <p>
                A flagship long-form article slot for interviews, opinion pieces, or thought
                leadership from educators, practitioners, and young innovators.
              </p>
              <a href="#contact" className="text-link">
                Pitch future stories
              </a>
            </article>
            <div className="article-list">
              {articleCards.map((card, index) => (
                <article key={card.title} className={`article-card reveal delay-${index + 1}`}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="content-section">
          <div className="section-heading reveal">
            <h2>Programs built for exposure, participation, and real connection.</h2>
          </div>
          <div className="event-grid">
            {eventCards.map((card, index) => (
              <article key={card.title} className={`event-card reveal ${index > 0 ? `delay-${index}` : ""}`}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="partners" className="content-section alt-section">
          <div className="section-heading reveal">
            <h2>Built to welcome schools, industry, and mission-aligned collaborators.</h2>
          </div>
          <div className="partners-layout">
            <div className="partner-copy reveal">
              <p>
                This section can grow into a proper partner directory, sponsorship showcase, or
                collaboration page. For now it introduces the relationship model and the types of
                organisations EnginAble works with.
              </p>
              <div className="partner-tags">
                <span>Schools</span>
                <span>Universities</span>
                <span>Industry</span>
                <span>Nonprofits</span>
              </div>
            </div>
            <div className="partner-grid">
              {partnerCards.map((card, index) => (
                <article key={card.title} className={`partner-card reveal delay-${index + 1}`}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="section-heading reveal">
            <h2>Start a conversation about content, events, or collaboration.</h2>
          </div>
          <div className="contact-layout">
            {contactCards.map((card, index) => (
              <article key={card.title} className={`contact-card reveal ${index > 0 ? `delay-${index}` : ""}`}>
                <h3>{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line}>
                    {line.startsWith("https://") ? (
                      <a className="contact-link-button" href={line} target="_blank" rel="noreferrer">
                        Visit Instagram
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>EnginAble Global</p>
        <p>Promoting engineering through information, stories, events, and partnerships.</p>
      </footer>
    </div>
  );
}
