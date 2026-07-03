import React, { startTransition, useEffect, useRef, useState } from "react";
import logo from "./assets/enginable-header-logo.png";
import heroBackground from "./assets/hero-background.png";
import {
  contactCards,
  heroPhrases,
  infoBlocks,
  navItems,
  partnerCards,
  partnerTypes,
} from "./content/siteContent";
import { articleRepository } from "./lib/articleRepository";
import { eventRepository } from "./lib/eventRepository";

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

function readEventSlugFromHash() {
  const hash = window.location.hash || "";

  if (!hash.startsWith("#event/")) {
    return null;
  }

  return hash.replace("#event/", "");
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
  const [activeEventSlug, setActiveEventSlug] = useState(() => readEventSlugFromHash());
  const [showAllArticlesPage, setShowAllArticlesPage] = useState(() => isAllArticlesHash());
  const [activeUpcomingSlide, setActiveUpcomingSlide] = useState(0);
  const [activePastSlide, setActivePastSlide] = useState(0);
  const [activeEventGallerySlide, setActiveEventGallerySlide] = useState(0);
  const [showUpcomingPopup, setShowUpcomingPopup] = useState(true);
  const [typedHeadline, setTypedHeadline] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isDeletingHeadline, setIsDeletingHeadline] = useState(false);
  const [reservedHeadlineHeight, setReservedHeadlineHeight] = useState(0);
  const [articles, setArticles] = useState([]);
  const [articlesLoaded, setArticlesLoaded] = useState(false);
  const [pastEvents, setPastEvents] = useState([]);
  const [eventsLoaded, setEventsLoaded] = useState(false);
  const measureRef = useRef(null);
  const isEventRoute = Boolean(activeEventSlug);
  const upcomingEvents = pastEvents.filter((eventItem) => eventItem.category === "Upcoming Event");
  const pastEventArchive = pastEvents.filter((eventItem) => eventItem.category === "Past Event");
  const activeEventPreview = pastEvents.find((card) => card.slug === activeEventSlug) ?? null;
  const activeEventGallery = activeEventPreview
    ? [
        {
          id: `${activeEventPreview.id}-cover`,
          image: activeEventPreview.image,
          alt: activeEventPreview.title,
        },
        ...(activeEventPreview.galleryImages ?? []),
      ]
    : [];

  useEffect(() => {
    let isCancelled = false;

    articleRepository.listPublished().then((records) => {
      if (isCancelled) {
        return;
      }

      startTransition(() => {
        setArticles(records);
        setArticlesLoaded(true);
      });
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!upcomingEvents.length) {
      return undefined;
    }

    const slideIntervalId = window.setInterval(() => {
      setActiveUpcomingSlide((current) => (current + 1) % upcomingEvents.length);
    }, 5000);

    return () => window.clearInterval(slideIntervalId);
  }, [upcomingEvents.length]);

  useEffect(() => {
    if (!pastEventArchive.length) {
      return undefined;
    }

    const slideIntervalId = window.setInterval(() => {
      setActivePastSlide((current) => (current + 1) % pastEventArchive.length);
    }, 5000);

    return () => window.clearInterval(slideIntervalId);
  }, [pastEventArchive.length]);

  useEffect(() => {
    let isCancelled = false;

    eventRepository.listPublished().then((records) => {
      if (isCancelled) {
        return;
      }

      startTransition(() => {
        setPastEvents(records);
        setEventsLoaded(true);
      });
    });

    return () => {
      isCancelled = true;
    };
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
      setActiveEventSlug(readEventSlugFromHash());
      setShowAllArticlesPage(isAllArticlesHash());
    }

    syncRoutesFromHash();
    window.addEventListener("hashchange", syncRoutesFromHash);

    return () => window.removeEventListener("hashchange", syncRoutesFromHash);
  }, []);

  useEffect(() => {
    setActiveEventGallerySlide(0);
  }, [activeEventSlug]);

  useEffect(() => {
    if (!isEventRoute || activeEventGallery.length < 2) {
      return undefined;
    }

    const slideIntervalId = window.setInterval(() => {
      setActiveEventGallerySlide((current) => (current + 1) % activeEventGallery.length);
    }, 4200);

    return () => window.clearInterval(slideIntervalId);
  }, [activeEventGallery.length, isEventRoute]);

  useEffect(() => {
    if (activeArticleSlug || activeEventSlug || showAllArticlesPage) {
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
  }, [activeArticleSlug, activeEventSlug, activeNav, showAllArticlesPage]);

  function goToSlide(index, items, setSlide) {
    if (!items.length) {
      return;
    }

    setSlide((index + items.length) % items.length);
  }

  function goToEventGallerySlide(index, items) {
    if (!items.length) {
      return;
    }

    setActiveEventGallerySlide((index + items.length) % items.length);
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

    if (activeArticleSlug || activeEventSlug || showAllArticlesPage) {
      setActiveArticleSlug(null);
      setActiveEventSlug(null);
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
    setActiveEventSlug(null);
    setShowAllArticlesPage(false);
    window.history.pushState(null, "", `#article/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeArticle() {
    setActiveArticleSlug(null);
    setActiveEventSlug(null);
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
    setActiveEventSlug(null);
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

  function openEvent(slug) {
    setActiveArticleSlug(null);
    setActiveEventSlug(slug);
    setShowAllArticlesPage(false);
    window.history.pushState(null, "", `#event/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeEvent() {
    setActiveArticleSlug(null);
    setActiveEventSlug(null);
    setShowAllArticlesPage(false);
    window.history.replaceState(null, "", "#events");

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToSectionByHref("#events", "auto");
      });
    });
  }

  const isArticleRoute = Boolean(activeArticleSlug);
  const activeArticle = articles.find((card) => card.slug === activeArticleSlug) ?? null;
  const activeEvent = activeEventPreview;
  const latestArticles = articles.slice(0, 3);
  const activeUpcomingEvent = upcomingEvents[activeUpcomingSlide] ?? upcomingEvents[0] ?? null;
  const shouldShowUpcomingPopup =
    showUpcomingPopup && !isArticleRoute && !isEventRoute && !showAllArticlesPage && Boolean(activeUpcomingEvent);

  function renderEventCarousel(title, items, activeIndex, setSlide) {
    if (!items.length) {
      return null;
    }

    return (
      <div className="events-carousel-block">
        <div className="section-head section-head-carousel">
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="carousel-shell">
          <button
            className="carousel-control-square"
            type="button"
            aria-label={`Previous ${title.toLowerCase()} slide`}
            onClick={() => goToSlide(activeIndex - 1, items, setSlide)}
          >
            <Icon name="arrow_back" />
          </button>

          <div className="carousel-stage">
            {items.map((eventItem, index) => (
              <article
                key={eventItem.slug}
                className={`carousel-panel ${index === activeIndex ? "active" : ""}`}
                onClick={() => openEvent(eventItem.slug)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openEvent(eventItem.slug);
                  }
                }}
                tabIndex={0}
                role="button"
              >
                <div
                  className="carousel-media"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 60, 131, 0.16), rgba(0, 60, 131, 0.16)), url(${eventItem.image})`,
                  }}
                ></div>
                <div className="carousel-copy">
                  <div>
                    <span className="article-category">{eventItem.category}</span>
                    <h3>{eventItem.title}</h3>
                    <p>{eventItem.text}</p>
                    <span className="carousel-link-hint">View event details</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            className="carousel-control-square"
            type="button"
            aria-label={`Next ${title.toLowerCase()} slide`}
            onClick={() => goToSlide(activeIndex + 1, items, setSlide)}
          >
            <Icon name="arrow_forward" />
          </button>
        </div>

        <div className="carousel-dots">
          {items.map((eventItem, index) => (
            <button
              key={eventItem.slug}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              type="button"
              aria-label={`${title} slide ${index + 1}`}
              onClick={() => goToSlide(index, items, setSlide)}
            ></button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="academic-shell">
      <div className="academic-blobs" aria-hidden="true">
        <div className="blob blob-one"></div>
        <div className="blob blob-two"></div>
        <div className="blob blob-three"></div>
      </div>

      {shouldShowUpcomingPopup ? (
        <div className="upcoming-popup-backdrop" role="presentation">
          <aside
            className="upcoming-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="upcoming-popup-title"
          >
            <button
              type="button"
              className="upcoming-popup-close"
              aria-label="Close upcoming event popup"
              onClick={() => setShowUpcomingPopup(false)}
            >
              <span aria-hidden="true">×</span>
            </button>

            <div className="upcoming-popup-media-wrap">
              <img
                src={activeUpcomingEvent.image}
                alt={activeUpcomingEvent.title}
                className="upcoming-popup-media"
              />
            </div>

            <div className="upcoming-popup-copy">
              <span className="article-category">{activeUpcomingEvent.category}</span>
              <h2 id="upcoming-popup-title">{activeUpcomingEvent.title}</h2>
              <p>{activeUpcomingEvent.text}</p>
            </div>

            {upcomingEvents.length > 1 ? (
              <div className="upcoming-popup-controls" aria-label="Upcoming event carousel controls">
                <button
                  type="button"
                  className="upcoming-popup-arrow"
                  aria-label="Previous upcoming event"
                  onClick={() => goToSlide(activeUpcomingSlide - 1, upcomingEvents, setActiveUpcomingSlide)}
                >
                  <Icon name="arrow_back" className="site-icon site-icon-small" />
                </button>
                <div className="carousel-dots upcoming-popup-dots">
                  {upcomingEvents.map((eventItem, index) => (
                    <button
                      key={eventItem.slug}
                      className={`dot ${index === activeUpcomingSlide ? "active" : ""}`}
                      type="button"
                      aria-label={`Upcoming event slide ${index + 1}`}
                      onClick={() => goToSlide(index, upcomingEvents, setActiveUpcomingSlide)}
                    ></button>
                  ))}
                </div>
                <button
                  type="button"
                  className="upcoming-popup-arrow"
                  aria-label="Next upcoming event"
                  onClick={() => goToSlide(activeUpcomingSlide + 1, upcomingEvents, setActiveUpcomingSlide)}
                >
                  <Icon name="arrow_forward" className="site-icon site-icon-small" />
                </button>
              </div>
            ) : null}

            <div className="upcoming-popup-actions">
              <button
                type="button"
                className="secondary-button secondary-button-popup"
                onClick={() => {
                  setShowUpcomingPopup(false);
                  openEvent(activeUpcomingEvent.slug);
                }}
              >
                Event Details
              </button>
              <a
                href={activeUpcomingEvent.registrationUrl || "#contact"}
                className="primary-button primary-button-popup"
                target={activeUpcomingEvent.registrationUrl ? "_blank" : undefined}
                rel={activeUpcomingEvent.registrationUrl ? "noreferrer" : undefined}
              >
                Sign Up
              </a>
            </div>
          </aside>
        </div>
      ) : null}

      <header className="academic-topbar">
        <div className="academic-topbar-inner">
          <div className="brand-cluster">
            {isArticleRoute ? (
              <button type="button" className="back-button" onClick={closeArticle} aria-label="Back to articles">
                <Icon name="arrow_back" className="site-icon site-icon-small" />
                <span>Back</span>
              </button>
            ) : null}

            {isEventRoute ? (
              <button type="button" className="back-button" onClick={closeEvent} aria-label="Back to events">
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
              href={isArticleRoute || isEventRoute || showAllArticlesPage ? "#articles" : "#home"}
              className="brand-link"
              aria-label="EnginAble Global home"
              onClick={
                isArticleRoute
                  ? (event) => {
                      event.preventDefault();
                      closeArticle();
                    }
                  : isEventRoute
                    ? (event) => {
                        event.preventDefault();
                        closeEvent();
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

          {isArticleRoute || isEventRoute || showAllArticlesPage ? null : (
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

      {isArticleRoute ? (
        <main className="page-main article-page-shell">
          <section className="section article-page-section">
            <div className="article-page-layout">
              {!articlesLoaded ? (
                <article className="glass-card article-page-card">
                  <p>Loading article...</p>
                </article>
              ) : activeArticle ? (
                <>
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
                            <img src={post.image} alt={post.title} className="instagram-custom-image" />
                            <div className="instagram-caption-block">
                              {post.caption.split("\n\n").map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                              <a
                                href={post.url}
                                target="_blank"
                                rel="noreferrer"
                                className="primary-button instagram-post-button"
                              >
                                Visit Post
                              </a>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  ) : null}
                </>
              ) : (
                <article className="glass-card article-page-card">
                  <p>That article could not be found.</p>
                </article>
              )}
            </div>
          </section>
        </main>
      ) : isEventRoute ? (
        <main className="page-main article-page-shell">
          <section className="section article-page-section">
            <div className="article-page-layout">
              {!eventsLoaded ? (
                <article className="glass-card article-page-card">
                  <p>Loading event...</p>
                </article>
              ) : activeEvent ? (
                <>
                  <div className="article-page-hero">
                    <span className="article-category">{activeEvent.category}</span>
                    <h1 className="article-page-title">{activeEvent.title}</h1>
                    <p className="article-page-intro">{activeEvent.text}</p>
                  </div>

                  <div className={`article-page-image-wrap ${activeEventGallery.length ? "article-page-image-wrap-gallery" : ""}`}>
                    {activeEventGallery.length ? (
                      <>
                        <div className="event-gallery-stage event-gallery-stage-inline">
                          {activeEventGallery.map((galleryItem, index) => (
                            <figure
                              key={galleryItem.id}
                              className={`event-gallery-frame ${index === activeEventGallerySlide ? "active" : ""}`}
                            >
                              <img
                                src={galleryItem.image}
                                alt={galleryItem.alt}
                                className="event-gallery-image"
                              />
                            </figure>
                          ))}
                        </div>

                        <button
                          type="button"
                          className="event-gallery-control event-gallery-control-left event-gallery-control-outside"
                          aria-label="Previous gallery image"
                          onClick={() => goToEventGallerySlide(activeEventGallerySlide - 1, activeEventGallery)}
                        >
                          <Icon name="arrow_back" className="site-icon site-icon-small" />
                        </button>

                        <button
                          type="button"
                          className="event-gallery-control event-gallery-control-right event-gallery-control-outside"
                          aria-label="Next gallery image"
                          onClick={() => goToEventGallerySlide(activeEventGallerySlide + 1, activeEventGallery)}
                        >
                          <Icon name="arrow_forward" className="site-icon site-icon-small" />
                        </button>

                        <div className="event-gallery-dots">
                          {activeEventGallery.map((galleryItem, index) => (
                            <button
                              key={galleryItem.id}
                              type="button"
                              className={`dot ${index === activeEventGallerySlide ? "active" : ""}`}
                              aria-label={`View gallery image ${index + 1}`}
                              onClick={() => goToEventGallerySlide(index, activeEventGallery)}
                            ></button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <img src={activeEvent.image} alt={activeEvent.title} className="article-page-image" />
                    )}
                  </div>

                  <article className="glass-card article-page-card">
                    {activeEvent.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </article>

                  {activeEvent.instagramPosts?.length ? (
                    <section className="article-instagram-section">
                      <div className="section-head section-head-carousel">
                        <h2 className="section-title">Related Instagram Posts</h2>
                      </div>

                      <div className="instagram-grid">
                        {activeEvent.instagramPosts.map((post) => (
                          <article key={post.url} className="glass-card instagram-card">
                            <img src={post.image} alt={post.title} className="instagram-custom-image" />
                            <div className="instagram-caption-block">
                              {post.caption.split("\n\n").map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                              <a
                                href={post.url}
                                target="_blank"
                                rel="noreferrer"
                                className="primary-button instagram-post-button"
                              >
                                Visit Post
                              </a>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  ) : null}
                </>
              ) : (
                <article className="glass-card article-page-card">
                  <p>That event could not be found.</p>
                </article>
              )}
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
                {articles.map((card) => (
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
                    <h2 className="section-title section-title-small editorial-title">
                      <span className="editorial-title-script">{block.title.charAt(0)}</span>
                      <span>{block.title.slice(1)}</span>
                    </h2>
                    <p>{block.text}</p>
                  </article>
                ))}
              </div>

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

          <section id="events" className="section section-centered events-section">
            {renderEventCarousel("Upcoming Public Events", upcomingEvents, activeUpcomingSlide, setActiveUpcomingSlide)}
            {renderEventCarousel("Past Events", pastEventArchive, activePastSlide, setActivePastSlide)}
          </section>

          <section id="partners" className="section">
            <div className="section-head">
              <h2 className="section-title">
                Our Partners and Collaborators
              </h2>
            </div>

            <div className="partners-showcase">
              <article className="glass-card partners-feature">
                <div className="partners-feature-copy">
                  <span className="article-category">Collaboration Model</span>
                  <h3>Built for schools, communities, and mission-aligned organisations.</h3>
                  <p>
                    EnginAble partnerships are designed to feel active, visible, and practical. We
                    work with organisations that want to host events, open doors for students, and
                    create more accessible entry points into engineering.
                  </p>
                </div>

                <div className="partners-feature-stack">
                  {partnerCards.map((card) => (
                    <article key={card.title} className="partners-mini-card">
                      <img src={card.image} alt={card.title} className="partner-list-image" />
                      <div>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </article>

              <div className="partners-type-block">
                <div className="partners-type-head">
                  <span className="article-category">Who We Work With</span>
                  <h3 className="section-title section-title-small">Partnership pathways across education, industry, and impact work.</h3>
                </div>

                <div className="partners-type-grid">
                  {partnerTypes.map((card) => (
                    <article key={card.title} className="glass-card partners-type-card icon-card-photo">
                      <div className="partners-type-image-wrap">
                        <img src={card.image} alt={card.title} className="icon-card-image" />
                      </div>
                      <div className="partners-type-copy">
                        <div className="icon-badge">
                          <Icon name={card.icon} />
                        </div>
                        <h3>{card.title}</h3>
                      </div>
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
