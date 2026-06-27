import React, { useEffect, useRef, useState } from "react";
import logo from "./assets/enginable-header-logo.png";
import slideOne from "./assets/slide-1.svg";
import slideTwo from "./assets/slide-2.svg";
import slideThree from "./assets/slide-3.svg";
import slideFour from "./assets/slide-4.svg";
import heroBackground from "./assets/hero-background.png";
import waterFilterImage from "./assets/article-water.svg";
import solarImage from "./assets/article-solar.svg";
import arduinoImage from "./assets/article-arduino.svg";
import schoolImage from "./assets/partner-school.svg";
import universityImage from "./assets/partner-university.svg";
import industryImage from "./assets/partner-industry.svg";
import nonprofitImage from "./assets/partner-nonprofit.svg";

const heroPhrases = [
  "Opening more doors into engineering through stories, programs, and community.",
  "Opening clearer pathways into engineering through mentorship, ideas, and action.",
];

const navItems = [
  { label: "Information", href: "#information" },
  { label: "Articles", href: "#articles" },
  { label: "Events", href: "#events" },
  { label: "Partners", href: "#partners" },
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

const articleCards = [
  {
    slug: "how-do-water-filters-work",
    publishedAt: "2026-01-12",
    category: "Article",
    title: "How Do Water Filters Work?",
    text: "A practical explainer on filtration systems, clean water access, and the engineering logic behind them.",
    image: waterFilterImage,
    content: [
      "Water filters work by guiding water through materials that capture, block, or neutralize unwanted particles. Depending on the design, a filter may target sediment, bacteria, odors, heavy metals, or chemical contaminants.",
      "A simple household filter often uses several stages. The first stage catches larger dirt and rust particles. Activated carbon then helps absorb chlorine, smells, and some dissolved compounds. More advanced systems may add membranes or ultraviolet treatment for stronger purification.",
      "Engineers think carefully about flow rate, pore size, maintenance, and cost. A filter must clean water effectively without slowing it too much or becoming difficult to replace. That balance is what turns a science concept into a useful public product.",
      "In outreach and education, water filtration is a strong example because it connects engineering directly to health, equity, and community impact. Students can quickly see how design decisions affect daily life.",
    ],
    instagramPosts: [
      {
        title: "Related Instagram Post",
        url: "https://www.instagram.com/enginable.global/p/DWI5MGhEXz4/",
      },
      {
        title: "Related Instagram Post",
        url: "https://www.instagram.com/enginable.global/p/DZFf2CFEvOw/",
      },
    ],
  },
  {
    slug: "the-physics-of-solar-panels",
    publishedAt: "2026-02-08",
    category: "Article",
    title: "The Physics of Solar Panels",
    text: "A clear introduction to how sunlight becomes electricity and why solar design matters so much today.",
    image: solarImage,
    content: [
      "Solar panels convert sunlight into electricity through photovoltaic cells. When sunlight hits the semiconductor material inside a cell, it energizes electrons and creates an electric current.",
      "The physics matters because panel performance depends on angle, light intensity, temperature, and material quality. Engineers study how to maximize energy output while making systems durable enough for long-term outdoor use.",
      "A solar installation is more than just the panel surface. Wiring, inverters, battery storage, and structural supports all play a role. Each part must work together so sunlight can become reliable power for homes, schools, or larger infrastructure.",
      "For young learners, solar panels are a powerful entry point into engineering because they connect physics, sustainability, and real-world design into one visible technology.",
    ],
    instagramPosts: [
      {
        title: "Related Instagram Post",
        url: "https://www.instagram.com/enginable.global/p/DWsM_kQksX5/",
      },
    ],
  },
  {
    slug: "arduino-101-getting-started",
    publishedAt: "2026-03-04",
    category: "Article",
    title: "Arduino 101: Getting Started",
    text: "A beginner-friendly stepping stone into circuits, prototyping, and playful engineering experimentation.",
    image: arduinoImage,
    content: [
      "Arduino gives beginners a practical way to enter engineering by combining simple electronics with code. A starter project might blink an LED, read a sensor, or control a buzzer or motor.",
      "What makes Arduino useful is how quickly an idea can become a prototype. Students can test concepts, notice mistakes, revise their setup, and learn through direct feedback instead of only theory.",
      "Engineering confidence often grows through this small-cycle experimentation. Wiring a circuit, uploading a sketch, and seeing a real response helps abstract technical ideas feel more approachable.",
      "As a teaching tool, Arduino also supports collaboration. Teams can split roles across coding, physical assembly, troubleshooting, and presentation, which mirrors real engineering workflows in a manageable way.",
    ],
    instagramPosts: [
      {
        title: "Related Instagram Post",
        url: "https://www.instagram.com/enginable.global/p/DYl__XEkUe-/",
      },
    ],
  },
];

const sortedArticles = [...articleCards].sort(
  (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
);

const infoBlocks = [
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

const eventCards = [
  {
    icon: "lightbulb",
    title: "Engineering Discovery Day",
    text: "A school-facing event format with speakers, demos, and hands-on stations for students and families.",
    image: slideOne,
  },
  {
    icon: "forum",
    title: "Mentor Circles",
    text: "Small-group conversations between learners and engineering professionals across disciplines.",
    image: slideTwo,
  },
  {
    icon: "handshake",
    title: "Partner Showcase Forum",
    text: "A presentation space for universities, companies, and community organizations to share opportunities.",
    image: slideThree,
  },
];

const partnerCards = [
  {
    title: "Education Partners",
    text: "Program hosts, student communities, academic institutions.",
    image: schoolImage,
  },
  {
    title: "Industry Partners",
    text: "Companies supporting outreach, mentorship, and applied learning.",
    image: industryImage,
  },
  {
    title: "Community Partners",
    text: "Organisations advocating for inclusion, access, and local impact.",
    image: nonprofitImage,
  },
];

const partnerTypes = [
  { title: "Schools", icon: "school", image: schoolImage },
  { title: "Universities", icon: "account_balance", image: universityImage },
  { title: "Industry", icon: "factory", image: industryImage },
  { title: "Nonprofits", icon: "volunteer_activism", image: nonprofitImage },
];

const contactCards = [
  {
    icon: "mail",
    title: "General Enquiries",
    primary: "hello@enginable.global",
    secondary: "+62 000 0000 0000",
  },
  {
    icon: "handshake",
    title: "Partnerships",
    primary: "partners@enginable.global",
    secondary: "For schools, companies, and community collaborations.",
  },
  {
    icon: "description",
    title: "Editorial",
    primary: "stories@enginable.global",
    secondary: "For article pitches, interviews, and spotlight opportunities.",
  },
  {
    icon: "photo_camera",
    title: "Instagram",
    primary: "@enginable.global",
    secondary: "Visit Instagram",
    button: true,
  },
];

function readArticleSlugFromHash() {
  const hash = window.location.hash || "";

  if (!hash.startsWith("#article/")) {
    return null;
  }

  return hash.replace("#article/", "");
}

function isAllArticlesHash() {
  return (window.location.hash || "") === "#articles/all";
}

function Icon({ name, className = "site-icon" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  const icons = {
    mail: (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 7L12 12L18.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    handshake: (
      <svg {...commonProps}>
        <path d="M8 12L11 9C12.2 7.8 14.2 7.8 15.4 9L18 11.6C19.2 12.8 19.2 14.8 18 16L16.5 17.5C15.7 18.3 14.4 18.3 13.6 17.5L10.5 14.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 14.5L7.7 16.3C6.8 17.2 5.4 17.2 4.5 16.3L4 15.8C3.1 14.9 3.1 13.5 4 12.6L8.6 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: (
      <svg {...commonProps}>
        <rect x="5" y="3.5" width="14" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 16H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    photo_camera: (
      <svg {...commonProps}>
        <path d="M5 8.5H7.5L9 6.5H15L16.5 8.5H19C20.1 8.5 21 9.4 21 10.5V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V10.5C3 9.4 3.9 8.5 5 8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="13.5" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    lightbulb: (
      <svg {...commonProps}>
        <path d="M9 18H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 21H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.5 15.5C7 14.4 6 12.6 6 10.5C6 7.46 8.46 5 11.5 5H12.5C15.54 5 18 7.46 18 10.5C18 12.6 17 14.4 15.5 15.5L14.8 17H9.2L8.5 15.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    forum: (
      <svg {...commonProps}>
        <path d="M5 6H14C15.1 6 16 6.9 16 8V13C16 14.1 15.1 15 14 15H9L5 18V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 9H19C20.1 9 21 9.9 21 11V18L17.5 15H17" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    school: (
      <svg {...commonProps}>
        <path d="M3 9L12 5L21 9L12 13L3 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7 11.5V15.5C7 17.2 9.24 18.5 12 18.5C14.76 18.5 17 17.2 17 15.5V11.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    account_balance: (
      <svg {...commonProps}>
        <path d="M3 9H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5 9V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 9V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 9V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19 9V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M2 20H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 4L3 8H21L12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    factory: (
      <svg {...commonProps}>
        <path d="M3 20V10L10 13V10L17 13V7L21 9.5V20H3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7 20V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    volunteer_activism: (
      <svg {...commonProps}>
        <path d="M12 20C9.5 18.2 5 14.8 5 10.8C5 8.7 6.6 7 8.6 7C10 7 11 7.7 12 8.9C13 7.7 14 7 15.4 7C17.4 7 19 8.7 19 10.8C19 14.8 14.5 18.2 12 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    arrow_back: (
      <svg {...commonProps}>
        <path d="M10 6L4 12L10 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    arrow_forward: (
      <svg {...commonProps}>
        <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#information");
  const [activeArticleSlug, setActiveArticleSlug] = useState(() => readArticleSlugFromHash());
  const [showAllArticlesPage, setShowAllArticlesPage] = useState(() => isAllArticlesHash());
  const [activeSlide, setActiveSlide] = useState(0);
  const [typedHeadline, setTypedHeadline] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isDeletingHeadline, setIsDeletingHeadline] = useState(false);
  const [reservedHeadlineHeight, setReservedHeadlineHeight] = useState(0);
  const measureRef = useRef(null);

  useEffect(() => {
    const slideIntervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(slideIntervalId);
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
        measureElement.textContent = phrase;
        tallestHeight = Math.max(tallestHeight, measureElement.getBoundingClientRect().height);
      });

      measureElement.textContent = heroPhrases[0];
      setReservedHeadlineHeight(Math.ceil(tallestHeight));
    }

    measureHeadlineHeight();
    window.addEventListener("resize", measureHeadlineHeight);

    return () => window.removeEventListener("resize", measureHeadlineHeight);
  }, []);

  useEffect(() => {
    function syncRoutesFromHash() {
      setActiveArticleSlug(readArticleSlugFromHash());
      setShowAllArticlesPage(isAllArticlesHash());
    }

    syncRoutesFromHash();
    window.addEventListener("hashchange", syncRoutesFromHash);

    return () => window.removeEventListener("hashchange", syncRoutesFromHash);
  }, []);

  useEffect(() => {
    if (activeArticleSlug || showAllArticlesPage) {
      return undefined;
    }

    const sectionIds = ["#information", "#articles", "#events", "#partners"];
    const sections = sectionIds
      .map((sectionId) => document.querySelector(sectionId))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        const informationSection = document.querySelector("#information");

        if (informationSection) {
          const infoTop = informationSection.getBoundingClientRect().top;

          if (infoTop > 140) {
            setActiveNav("");
            return;
          }
        }

        entries.forEach((entry) => {
          const sectionId = `#${entry.target.id}`;

          if (entry.isIntersecting) {
            visibleSections.set(sectionId, entry.intersectionRatio);
          } else {
            visibleSections.delete(sectionId);
          }
        });

        if (!visibleSections.size) {
          return;
        }

        let nextActiveNav = activeNav;
        let bestRatio = -1;

        visibleSections.forEach((ratio, sectionId) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            nextActiveNav = sectionId;
          }
        });

        setActiveNav(nextActiveNav);
      },
      {
        rootMargin: "-18% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeArticleSlug, activeNav, showAllArticlesPage]);

  function goToSlide(index) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  function scrollToSectionByHref(href, behavior = "smooth") {
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    const headerOffset = 92;
    const top = window.scrollY + target.getBoundingClientRect().top - headerOffset;

    window.history.replaceState(null, "", href);
    window.scrollTo({
      top,
      behavior,
    });
  }

  function scrollToSection(event, href) {
    event.preventDefault();

    if (activeArticleSlug || showAllArticlesPage) {
      setActiveArticleSlug(null);
      setShowAllArticlesPage(false);
      window.history.replaceState(null, "", href);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          scrollToSectionByHref(href);
        });
      });
      return;
    }

    scrollToSectionByHref(href);
  }

  function openArticle(slug) {
    setActiveArticleSlug(slug);
    setShowAllArticlesPage(false);
    window.history.pushState(null, "", `#article/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeArticle() {
    setActiveArticleSlug(null);
    setShowAllArticlesPage(false);
    window.history.replaceState(null, "", "#articles");

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToSectionByHref("#articles", "auto");
      });
    });
  }

  function openAllArticlesPage(event) {
    event.preventDefault();
    setActiveArticleSlug(null);
    setShowAllArticlesPage(true);
    window.history.pushState(null, "", "#articles/all");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeAllArticlesPage() {
    setShowAllArticlesPage(false);
    window.history.replaceState(null, "", "#articles");
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToSectionByHref("#articles", "auto");
      });
    });
  }

  const activeArticle = sortedArticles.find((card) => card.slug === activeArticleSlug) ?? null;
  const latestArticles = sortedArticles.slice(0, 3);

  return (
    <div className="academic-shell">
      <div className="academic-blobs" aria-hidden="true">
        <div className="blob blob-one"></div>
        <div className="blob blob-two"></div>
        <div className="blob blob-three"></div>
      </div>

      <header className="academic-topbar">
        <div className="academic-topbar-inner">
          <div className="brand-cluster">
            {activeArticle ? (
              <button type="button" className="back-button" onClick={closeArticle} aria-label="Back to articles">
                <Icon name="arrow_back" className="site-icon site-icon-small" />
                <span>Back</span>
              </button>
            ) : null}

            {showAllArticlesPage ? (
              <button type="button" className="back-button" onClick={closeAllArticlesPage} aria-label="Back to homepage articles">
                <Icon name="arrow_back" className="site-icon site-icon-small" />
                <span>Back</span>
              </button>
            ) : null}

            <a
              href={activeArticle || showAllArticlesPage ? "#articles" : "#home"}
              className="brand-link"
              aria-label="EnginAble Global home"
              onClick={
                activeArticle
                  ? (event) => {
                      event.preventDefault();
                      closeArticle();
                    }
                  : showAllArticlesPage
                    ? (event) => {
                        event.preventDefault();
                        closeAllArticlesPage();
                      }
                    : undefined
              }
            >
              <img src={logo} alt="EnginAble Global logo" className="brand-logo-wide" />
            </a>
          </div>

          {activeArticle || showAllArticlesPage ? null : (
            <>
              <button
                className="menu-button"
                type="button"
                aria-expanded={menuOpen}
                aria-controls="site-navigation"
                onClick={() => setMenuOpen((open) => !open)}
              >
                Menu
              </button>

              <nav id="site-navigation" className={`academic-nav ${menuOpen ? "is-open" : ""}`}>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={activeNav === item.href ? "is-active" : ""}
                    onClick={(event) => {
                      scrollToSection(event, item.href);
                      setActiveNav(item.href);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="nav-pill nav-pill-outline"
                  onClick={(event) => {
                    scrollToSection(event, "#contact");
                    setMenuOpen(false);
                  }}
                >
                  Contact Us
                </a>
                <a
                  href="#partners"
                  className="nav-pill nav-pill-solid"
                  onClick={(event) => {
                    scrollToSection(event, "#partners");
                    setActiveNav("#partners");
                    setMenuOpen(false);
                  }}
                >
                  Join
                </a>
              </nav>
            </>
          )}
        </div>
      </header>

      {activeArticle ? (
        <main className="page-main article-page-shell">
          <section className="section article-page-section">
            <div className="article-page-layout">
              <div className="article-page-hero">
                <span className="article-category">{activeArticle.category}</span>
                <h1 className="article-page-title">{activeArticle.title}</h1>
                <p className="article-page-intro">{activeArticle.text}</p>
              </div>

              <div className="article-page-image-wrap">
                <img src={activeArticle.image} alt={activeArticle.title} className="article-page-image" />
              </div>

              <article className="glass-card article-page-card">
                {activeArticle.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>

              {activeArticle.instagramPosts?.length ? (
                <section className="article-instagram-section">
                  <div className="section-head section-head-carousel">
                    <h2 className="section-title">Related Instagram Posts</h2>
                  </div>

                  <div className="instagram-grid">
                    {activeArticle.instagramPosts.map((post) => (
                      <article key={post.url} className="glass-card instagram-card">
                        <iframe
                          src={`${post.url}embed/captioned/`}
                          title={post.title}
                          className="instagram-embed"
                          loading="lazy"
                          allowTransparency="true"
                        ></iframe>
                        <a href={post.url} target="_blank" rel="noreferrer" className="primary-button instagram-post-button">
                          View Full Post
                        </a>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </section>
        </main>
      ) : showAllArticlesPage ? (
        <main className="page-main article-page-shell">
          <section className="section article-page-section">
            <div className="article-page-layout">
              <div className="article-page-hero">
                <span className="article-category">Archive</span>
                <h1 className="article-page-title">All Articles</h1>
                <p className="article-page-intro">
                  Browse the full article collection. The homepage shows only the three most recently
                  published articles, while this page lists the entire archive.
                </p>
              </div>

              <div className="feature-card-grid all-articles-grid">
                {sortedArticles.map((card) => (
                  <article
                    key={card.slug}
                    className="glass-card article-card article-card-hover"
                    onClick={() => openArticle(card.slug)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openArticle(card.slug);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                  >
                    <div className="article-image-frame">
                      <div className="article-image-tint"></div>
                      <img src={card.image} alt={card.title} className="article-image" />
                    </div>
                    <div className="article-copy">
                      <span className="article-category">{card.category}</span>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main id="home" className="page-main">
          <section
            className="hero-section section"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(47, 98, 159, 0.58), rgba(47, 98, 159, 0.66)), url(${heroBackground})`,
            }}
          >
            <div className="hero-layout">
              <div className="hero-copy">
                <h1
                  className="hero-title typewriter-heading"
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
                <p className="hero-description">
                  EnginAble Global is a modern platform for aspiring engineers, educators, and industry
                  allies. We spotlight opportunities, publish ideas, and connect people with meaningful
                  events and partnerships.
                </p>
                <div className="hero-actions">
                  <a href="#events" className="primary-button">
                    Explore Events
                  </a>
                  <a href="#articles" className="secondary-button">
                    Read Articles
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="information" className="section">
            <div className="section-head">
              <h2 className="section-title">
                Clear pathways into EnginAble&apos;s mission, approach, and public value.
              </h2>
            </div>

            <div className="editorial-grid">
              <div className="editorial-column">
                {infoBlocks.map((block) => (
                  <article key={block.title} className="editorial-text-block">
                    <h2 className="section-title section-title-small">{block.title}</h2>
                    <p>{block.text}</p>
                  </article>
                ))}
              </div>

              <article className="glass-card-dark feature-essay">
                <h2 className="section-title section-title-light">
                  How engineering communities can make opportunity feel visible.
                </h2>
                <p>
                  A flagship long-form article slot for interviews, opinion pieces, or thought
                  leadership from educators, practitioners, and young innovators.
                </p>
                <a href="#contact" className="essay-button">
                  Pitch future stories
                </a>
              </article>
            </div>
          </section>

          <section id="articles" className="section section-wide">
            <div className="section-head">
              <h2 className="section-title">Articles</h2>
              <a href="#articles/all" className="section-link" onClick={openAllArticlesPage}>
                View All
              </a>
            </div>

            <div className="feature-card-grid">
              {latestArticles.map((card) => (
                <article
                  key={card.slug}
                  className="glass-card article-card article-card-hover"
                  onClick={() => openArticle(card.slug)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openArticle(card.slug);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                >
                  <div className="article-image-frame">
                    <div className="article-image-tint"></div>
                    <img src={card.image} alt={card.title} className="article-image" />
                  </div>
                  <div className="article-copy">
                    <span className="article-category">{card.category}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="events" className="section section-centered">
            <h2 className="section-title section-title-centered">
              Programs built for exposure, participation, and real connection.
            </h2>

            <div className="program-grid">
              {eventCards.map((card) => (
                <article key={card.title} className="glass-card program-card program-card-hover">
                  <div className="program-image-wrap">
                    <img src={card.image} alt={card.title} className="program-image" />
                  </div>
                  <div className="program-icon-wrap">
                    <Icon name={card.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>

            <div className="events-carousel-block">
              <div className="section-head section-head-carousel">
                <h2 className="section-title">Past Events</h2>
              </div>

              <div className="carousel-shell">
                <button
                  className="carousel-control-square"
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => goToSlide(activeSlide - 1)}
                >
                  <Icon name="arrow_back" />
                </button>

                <div className="carousel-stage">
                  {slides.map((slide, index) => (
                    <article key={slide.title} className={`carousel-panel ${index === activeSlide ? "active" : ""}`}>
                      <div
                        className="carousel-media"
                        style={{
                          backgroundImage: `linear-gradient(${slide.overlay}, ${slide.overlay}), url(${slide.image})`,
                        }}
                      ></div>
                      <div className="carousel-copy">
                        <h3>{slide.title}</h3>
                      </div>
                    </article>
                  ))}
                </div>

                <button
                  className="carousel-control-square"
                  type="button"
                  aria-label="Next slide"
                  onClick={() => goToSlide(activeSlide + 1)}
                >
                  <Icon name="arrow_forward" />
                </button>
              </div>

              <div className="carousel-dots">
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
            </div>
          </section>

          <section id="partners" className="section">
            <div className="section-head">
              <h2 className="section-title">
                Built to welcome schools, industry, and mission-aligned collaborators.
              </h2>
            </div>

            <div className="collab-grid">
              <div>
                <p className="section-intro">
                  This section can grow into a proper partner directory, sponsorship showcase, or
                  collaboration page. For now it introduces the relationship model and the types of
                  organisations EnginAble works with.
                </p>
                <div className="stack-list">
                  {partnerCards.map((card) => (
                    <article key={card.title} className="glass-card partner-list-card partner-list-card-hover">
                      <img src={card.image} alt={card.title} className="partner-list-image" />
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="section-title section-title-small">
                  The types of organisations that EnginAble works with:
                </h2>
                <div className="icon-grid">
                  {partnerTypes.map((card) => (
                    <article key={card.title} className="glass-card icon-card icon-card-photo">
                      <div className="icon-card-media">
                        <img src={card.image} alt={card.title} className="icon-card-image" />
                      </div>
                      <div className="icon-badge">
                        <Icon name={card.icon} />
                      </div>
                      <h3>{card.title}</h3>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="section section-centered">
            <h2 className="section-title section-title-centered">
              Start a conversation about content, events, or collaboration.
            </h2>
            <div className="contact-grid">
              {contactCards.map((card) => (
                <article key={card.title} className="glass-card contact-card-academic">
                  <div className="icon-badge">
                    <Icon name={card.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p className="contact-primary">{card.primary}</p>
                  {card.button ? (
                    <a
                      href="https://www.instagram.com/enginable.global/"
                      className="secondary-button secondary-button-small"
                    >
                      {card.secondary}
                    </a>
                  ) : (
                    <p className="contact-secondary">{card.secondary}</p>
                  )}
                </article>
              ))}
            </div>
          </section>
        </main>
      )}

      <footer className="academic-footer">
        <div className="academic-footer-inner">
          <div className="footer-brand">
            <img src={logo} alt="EnginAble Global logo" className="footer-brand-logo" />
            <div>
              <div className="brand-wordmark brand-wordmark-footer">EnginAble Global</div>
              <p>Promoting engineering through information, stories, events, and partnerships.</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
            <a href="#articles">Press Kit</a>
            <a href="#partners">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
