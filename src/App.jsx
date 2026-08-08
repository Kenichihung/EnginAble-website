import React, { startTransition, useEffect, useRef, useState } from "react";
import logo from "./assets/enginable-header-logo.png";
import heroBackground from "./assets/hero-background.png";
import earthTexture from "./assets/earth-day.jpg";
import gearSpace from "./assets/gear-space.svg";
import workWorkshop from "./assets/work-workshop-wide.jpg";
import workHandsOn from "./assets/work-hands-on.jpg";
import workTeaching from "./assets/work-teaching-group.jpg";
import mosaicMentoring from "./assets/mosaic-mentoring.jpg";
import mosaicCommunity from "./assets/mosaic-community-helping.jpg";
import mosaicOverhead from "./assets/mosaic-activity-overhead.jpg";
import {
  contactCards,
  heroPhrasesMobile,
  infoBlocks,
  navItems,
  partnerLogoPages,
} from "./content/siteContent";
import { articleRepository } from "./lib/articleRepository";
import { eventRepository } from "./lib/eventRepository";

const heroDescriptionText =
  "EnginAble is a youth-led organization dedicated to making engineering education more accessible, creative, and meaningful for young learners. Through hands-on workshops, community projects, and educational resources, we introduce students to engineering as a way to solve real-world problems and create a positive change. We believe engineering should not feel distant, intimidating, or limited to textbooks. Instead, it should be something students can experience, question, build, and use to understand the world around them.";

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

const IntroHeadline = React.memo(function IntroHeadline({ phrases }) {
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reservedHeight, setReservedHeight] = useState(0);
  const measureRef = useRef(null);

  useEffect(() => {
    const currentPhrase = phrases[index];
    const isPhraseComplete = typed === currentPhrase;
    const isPhraseEmpty = typed === "";
    let timeoutId;

    if (!deleting && isPhraseComplete) {
      timeoutId = window.setTimeout(() => {
        setDeleting(true);
      }, 3000);
    } else if (deleting && isPhraseEmpty) {
      timeoutId = window.setTimeout(() => {
        setDeleting(false);
        setIndex((current) => (current + 1) % phrases.length);
      }, 250);
    } else {
      timeoutId = window.setTimeout(() => {
        setTyped((current) =>
          deleting
            ? currentPhrase.slice(0, current.length - 1)
            : currentPhrase.slice(0, current.length + 1),
        );
      }, deleting ? 18 : 34);
    }

    return () => window.clearTimeout(timeoutId);
  }, [typed, index, deleting, phrases]);

  useEffect(() => {
    function measureHeadlineHeight() {
      const measureElement = measureRef.current;

      if (!measureElement) {
        return;
      }

      let tallestHeight = 0;

      phrases.forEach((phrase) => {
        measureElement.textContent = phrase;
        tallestHeight = Math.max(tallestHeight, measureElement.getBoundingClientRect().height);
      });

      measureElement.textContent = phrases[0];
      setReservedHeight(Math.ceil(tallestHeight));
    }

    measureHeadlineHeight();
    // Re-measure once webfonts arrive - Inter 800 is wider than the
    // fallback font, and measuring too early made the headline overlap
    // the paragraph below it on slow connections.
    document.fonts?.ready?.then(measureHeadlineHeight);
    window.addEventListener("resize", measureHeadlineHeight);

    return () => window.removeEventListener("resize", measureHeadlineHeight);
  }, [phrases]);

  return (
    <>
      <p className="intro-eyebrow">{index === 0 ? "Our Vision" : "Our Mission"}</p>
      <h1
        className="intro-headline typewriter-heading"
        style={reservedHeight ? { minHeight: `${reservedHeight}px` } : undefined}
      >
        <span ref={measureRef} className="typewriter-ghost" aria-hidden="true">
          {phrases[0]}
        </span>
        <span className="typewriter-live">
          <span>{typed}</span>
          <span className="typewriter-cursor" aria-hidden="true"></span>
        </span>
      </h1>
    </>
  );
});

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#information");
  const [activeArticleSlug, setActiveArticleSlug] = useState(() => readArticleSlugFromHash());
  const [activeEventSlug, setActiveEventSlug] = useState(() => readEventSlugFromHash());
  const [showAllArticlesPage, setShowAllArticlesPage] = useState(() => isAllArticlesHash());
  const [activeUpcomingSlide, setActiveUpcomingSlide] = useState(0);
  const [activePastSlide, setActivePastSlide] = useState(0);
  const [activePartnerPage, setActivePartnerPage] = useState(0);
  const [activeEventGallerySlide, setActiveEventGallerySlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroSectionRef = useRef(null);
  const introCopyRef = useRef(null);
  const workBoardRef = useRef(null);
  const earthRef = useRef(null);
  const [articles, setArticles] = useState([]);
  const [articlesLoaded, setArticlesLoaded] = useState(false);
  const [pastEvents, setPastEvents] = useState([]);
  const [eventsLoaded, setEventsLoaded] = useState(false);
  const pendingNavRef = useRef(null);
  const navScrollTimeoutRef = useRef(null);
  const navScrollCleanupRef = useRef(null);
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
      if (window.matchMedia("(max-width: 860px)").matches) {
        return;
      }

      setActiveUpcomingSlide((current) => (current + 1) % upcomingEvents.length);
    }, 5000);

    return () => window.clearInterval(slideIntervalId);
  }, [upcomingEvents.length]);

  useEffect(() => {
    if (!pastEventArchive.length) {
      return undefined;
    }

    const slideIntervalId = window.setInterval(() => {
      if (window.matchMedia("(max-width: 860px)").matches) {
        return;
      }

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

  // The space intro uses the short phrases at every size; the long
  // originals live on in the intro description paragraph.
  const activeHeroPhrases = heroPhrasesMobile;

  useEffect(() => {
    function syncScrolledHeader() {
      setIsScrolled(window.scrollY > 28);
    }

    syncScrolledHeader();
    window.addEventListener("scroll", syncScrolledHeader, { passive: true });

    return () => window.removeEventListener("scroll", syncScrolledHeader);
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = heroSectionRef.current;

    if (!finePointer || prefersReducedMotion || !section) {
      return undefined;
    }

    function trackPointer(event) {
      const mx = (event.clientX / window.innerWidth - 0.5) * 2;
      const my = (event.clientY / window.innerHeight - 0.5) * 2;
      section.style.setProperty("--mx", mx.toFixed(3));
      section.style.setProperty("--my", my.toFixed(3));
    }

    window.addEventListener("pointermove", trackPointer, { passive: true });

    return () => window.removeEventListener("pointermove", trackPointer);
  }, [activeArticleSlug, activeEventSlug, showAllArticlesPage]);

  // Drives the whole intro cinematic with direct DOM writes so scrolling
  // never re-renders the React tree (important for low-end devices).
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = heroSectionRef.current;

    if (!section) {
      return undefined;
    }

    if (prefersReducedMotion) {
      section.style.setProperty("--p", "0");
      return undefined;
    }

    function updateHeroReveal() {
      const scrubRange = section.offsetHeight - window.innerHeight;
      const progress =
        scrubRange <= 0
          ? 1
          : Math.min(1, Math.max(0, -section.getBoundingClientRect().top / scrubRange));

      section.style.setProperty("--p", progress.toFixed(3));

      const isPastCopy = progress > 0.42;
      introCopyRef.current?.classList.toggle("is-gone", isPastCopy);
      workBoardRef.current?.classList.toggle("is-gone", isPastCopy);
    }

    updateHeroReveal();
    window.addEventListener("scroll", updateHeroReveal, { passive: true });
    window.addEventListener("resize", updateHeroReveal);

    return () => {
      window.removeEventListener("scroll", updateHeroReveal);
      window.removeEventListener("resize", updateHeroReveal);
    };
  }, [activeArticleSlug, activeEventSlug, showAllArticlesPage]);

  // One sliding underline that glides between the active desktop nav links
  // instead of each link's own underline popping in and out.
  useEffect(() => {
    function positionNavUnderline() {
      const nav = document.querySelector(".academic-nav");
      const underline = nav?.querySelector(".nav-underline");

      if (!nav || !underline) {
        return;
      }

      const active = nav.querySelector("a.is-active:not(.nav-pill)");

      if (!active || window.matchMedia("(max-width: 860px)").matches) {
        underline.style.opacity = "0";
        return;
      }

      underline.style.opacity = "1";
      underline.style.top = `${active.offsetTop + active.offsetHeight + 5}px`;
      underline.style.transform = `translateX(${active.offsetLeft}px)`;
      underline.style.width = `${active.offsetWidth}px`;
    }

    positionNavUnderline();
    window.addEventListener("resize", positionNavUnderline);

    return () => window.removeEventListener("resize", positionNavUnderline);
  }, [activeNav, activeArticleSlug, activeEventSlug, showAllArticlesPage]);

  // Pointer-follow tilt + glow for cards marked data-tilt (fine pointers only).
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || prefersReducedMotion) {
      return undefined;
    }

    function onTiltMove(event) {
      const card = event.target.closest?.("[data-tilt]");

      if (!card) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--tilt-x", `${((py - 0.5) * -7).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${((px - 0.5) * 9).toFixed(2)}deg`);
      card.style.setProperty("--glow-x", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--glow-y", `${(py * 100).toFixed(1)}%`);
    }

    function onTiltLeave(event) {
      const card = event.target.closest?.("[data-tilt]");

      if (card && !card.contains(event.relatedTarget)) {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      }
    }

    document.addEventListener("pointermove", onTiltMove, { passive: true });
    document.addEventListener("pointerout", onTiltLeave, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onTiltMove);
      document.removeEventListener("pointerout", onTiltLeave);
    };
  }, []);

  // Drag the earth to spin it; it eases back home to Jakarta on release.
  useEffect(() => {
    const earth = earthRef.current;

    if (!earth) {
      return undefined;
    }

    let dragging = false;
    let startX = 0;

    function onDown(event) {
      dragging = true;
      startX = event.clientX;
      earth.classList.remove("is-settling");
      earth.classList.add("is-grabbed");

      try {
        earth.setPointerCapture(event.pointerId);
      } catch {
        /* pointer capture is best-effort */
      }
    }

    function onMove(event) {
      if (!dragging) {
        return;
      }

      earth.style.backgroundPositionX = `calc(96% + ${(event.clientX - startX) * 1.4}px)`;
    }

    function onUp() {
      if (!dragging) {
        return;
      }

      dragging = false;
      earth.classList.remove("is-grabbed");
      earth.classList.add("is-settling");
      earth.style.backgroundPositionX = "96%";
      window.setTimeout(() => earth.classList.remove("is-settling"), 750);
    }

    earth.addEventListener("pointerdown", onDown);
    earth.addEventListener("pointermove", onMove);
    earth.addEventListener("pointerup", onUp);
    earth.addEventListener("pointercancel", onUp);

    return () => {
      earth.removeEventListener("pointerdown", onDown);
      earth.removeEventListener("pointermove", onMove);
      earth.removeEventListener("pointerup", onUp);
      earth.removeEventListener("pointercancel", onUp);
    };
  }, [activeArticleSlug, activeEventSlug, showAllArticlesPage]);

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
    if (!activeArticleSlug && !activeEventSlug && !showAllArticlesPage) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });
  }, [activeArticleSlug, activeEventSlug, showAllArticlesPage]);

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
        if (pendingNavRef.current) {
          return;
        }

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

        let nextActiveNav = "";
        let bestRatio = -1;

        visibleSections.forEach((ratio, sectionId) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            nextActiveNav = sectionId;
          }
        });

        setActiveNav((current) => (current === nextActiveNav ? current : nextActiveNav));
      },
      {
        rootMargin: "-18% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeArticleSlug, activeEventSlug, showAllArticlesPage]);

  function goToSlide(index, items, setSlide) {
    if (!items.length) {
      return;
    }

    setSlide((index + items.length) % items.length);
  }

  function syncSlideFromScroll(event, items, setSlide) {
    const stage = event.currentTarget;
    const maxScroll = stage.scrollWidth - stage.clientWidth;

    if (maxScroll <= 0 || items.length < 2) {
      return;
    }

    setSlide(Math.round((stage.scrollLeft / maxScroll) * (items.length - 1)));
  }

  function scrollStageToIndex(target, index, items) {
    if (!window.matchMedia("(max-width: 860px)").matches) {
      return;
    }

    const stage = target.closest(".events-carousel-block")?.querySelector(".carousel-stage");

    if (!stage || items.length < 2) {
      return;
    }

    const maxScroll = stage.scrollWidth - stage.clientWidth;
    const wrappedIndex = (index + items.length) % items.length;
    stage.scrollTo({ left: (wrappedIndex / (items.length - 1)) * maxScroll, behavior: "smooth" });
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

    const isTrackedNavSection = navItems.some((item) => item.href === href);

    if (isTrackedNavSection) {
      pendingNavRef.current = href;
      setActiveNav(href);
      window.clearTimeout(navScrollTimeoutRef.current);
      navScrollCleanupRef.current?.();
    }

    const headerOffset = 92;
    const top = window.scrollY + target.getBoundingClientRect().top - headerOffset;

    window.history.replaceState(null, "", href);
    window.scrollTo({
      top,
      behavior,
    });

    if (isTrackedNavSection) {
      let didReleasePendingNav = false;

      let cleanupPendingNavScroll;

      const releasePendingNav = () => {
        if (didReleasePendingNav) {
          return;
        }

        didReleasePendingNav = true;

        if (pendingNavRef.current === href) {
          pendingNavRef.current = null;
        }

        if (navScrollCleanupRef.current === cleanupPendingNavScroll) {
          navScrollCleanupRef.current();
        }
      };

      if (behavior === "smooth" && "onscrollend" in window) {
        window.addEventListener("scrollend", releasePendingNav, { once: true });
      }

      const cancelPendingNavScroll = () => {
        if (pendingNavRef.current !== href) {
          return;
        }

        window.scrollTo({
          top: window.scrollY,
          left: window.scrollX,
          behavior: "auto",
        });

        releasePendingNav();
      };

      cleanupPendingNavScroll = () => {
        window.removeEventListener("wheel", cancelPendingNavScroll);
        window.removeEventListener("touchstart", cancelPendingNavScroll);
        window.removeEventListener("keydown", cancelPendingNavScroll);
        navScrollCleanupRef.current = null;
      };

      navScrollCleanupRef.current = cleanupPendingNavScroll;

      if (behavior === "smooth") {
        window.addEventListener("wheel", cancelPendingNavScroll, { once: true, passive: true });
        window.addEventListener("touchstart", cancelPendingNavScroll, { once: true, passive: true });
        window.addEventListener("keydown", cancelPendingNavScroll, { once: true });
      }

      navScrollTimeoutRef.current = window.setTimeout(releasePendingNav, behavior === "smooth" ? 450 : 0);
    }
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
  const hasDetailTopbar = isArticleRoute || isEventRoute || showAllArticlesPage;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const revealSelectors = [
      ".section-head",
      ".editorial-text-block",
      ".article-card",
      ".events-carousel-block",
      ".partner-portfolio",
      ".contact-card-academic",
      ".instagram-card",
      ".article-page-hero",
      ".article-page-card",
    ].join(", ");
    const revealTargets = [...document.querySelectorAll(revealSelectors)];

    revealTargets.forEach((target) => target.classList.add("reveal-init"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));

    return () => revealObserver.disconnect();
  }, [activeArticleSlug, activeEventSlug, showAllArticlesPage, articlesLoaded, eventsLoaded]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const mobileNavQuery = window.matchMedia("(max-width: 860px)");

    function closeMenuOnDesktop(event) {
      if (!event.matches) {
        setMenuOpen(false);
      }
    }

    document.body.classList.add("menu-locked");
    mobileNavQuery.addEventListener("change", closeMenuOnDesktop);

    return () => {
      document.body.classList.remove("menu-locked");
      mobileNavQuery.removeEventListener("change", closeMenuOnDesktop);
    };
  }, [menuOpen]);

  function renderEventCarousel(title, items, activeIndex, setSlide) {
    if (!items.length) {
      return null;
    }

    return (
      <div className="events-carousel-block">
        <div className="section-head section-head-carousel">
          <div>
            <p className="section-eyebrow">What&apos;s happening</p>
            <h2 className="section-title">{title}</h2>
          </div>
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

          <div
            className="carousel-stage"
            onScroll={(event) => syncSlideFromScroll(event, items, setSlide)}
          >
            {items.map((eventItem, index) => (
              <article
                key={eventItem.slug}
                className={`carousel-panel ${index === activeIndex ? "active" : ""}`}
                data-tilt="true"
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
              onClick={(event) => {
                goToSlide(index, items, setSlide);
                scrollStageToIndex(event.currentTarget, index, items);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="academic-shell">
      <div className="academic-blobs" aria-hidden="true">
        <div className="light-grid"></div>
        <div className="blob blob-one"></div>
        <div className="blob blob-two"></div>
        <div className="blob blob-three"></div>
        <div className="blob blob-four"></div>
        <div className="gear-float gear-float-one"></div>
        <div className="gear-float gear-float-two"></div>
      </div>

      <header className={`academic-topbar ${isScrolled || hasDetailTopbar ? "is-pill" : ""}`}>
        <div className="academic-topbar-inner">
          <div className={`brand-cluster ${hasDetailTopbar ? "brand-cluster-detail" : ""}`}>
            <div className={`topbar-back-slot ${hasDetailTopbar ? "is-visible" : ""}`}>
            </div>

            <a
              href={hasDetailTopbar ? "#articles" : "#home"}
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

          <div className={`topbar-nav-area ${hasDetailTopbar ? "is-hidden" : ""}`}>
            <button
              className={`menu-button ${menuOpen ? "is-open" : ""}`}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="menu-icon" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <div
              className={`mobile-nav-backdrop ${menuOpen ? "is-open" : ""}`}
              role="presentation"
              onClick={() => setMenuOpen(false)}
            ></div>

            <nav id="site-navigation" className={`academic-nav ${menuOpen ? "is-open" : ""}`}>
              <span className="nav-underline" aria-hidden="true"></span>
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
          </div>
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
                  <div className="article-page-header">
                    <button
                      type="button"
                      className="back-button detail-back-button"
                      onClick={closeArticle}
                      aria-label="Back to articles"
                    >
                      <Icon name="arrow_back" className="site-icon site-icon-small" />
                      <span>Back</span>
                    </button>
                    <div className="article-page-hero">
                      <span className="article-category">{activeArticle.category}</span>
                      <h1 className="article-page-title">{activeArticle.title}</h1>
                      <p className="article-page-intro">{activeArticle.text}</p>
                    </div>
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
                            <img src={post.image} alt={post.title} className="instagram-custom-image" loading="lazy" decoding="async" />
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
            <div className="article-page-layout article-page-layout-event">
              {!eventsLoaded ? (
                <article className="glass-card article-page-card">
                  <p>Loading event...</p>
                </article>
              ) : activeEvent ? (
                <>
                  <div className="article-page-header article-page-header-event">
                    <button
                      type="button"
                      className="back-button detail-back-button"
                      onClick={closeEvent}
                      aria-label="Back to events"
                    >
                      <Icon name="arrow_back" className="site-icon site-icon-small" />
                      <span>Back</span>
                    </button>
                    <div className="article-page-hero article-page-hero-event">
                      <div className="article-page-event-copy">
                        <span className="article-category article-category-event">{activeEvent.category}</span>
                        <h1 className="article-page-title">{activeEvent.title}</h1>
                        <p className="article-page-intro">{activeEvent.text}</p>
                      </div>
                    </div>
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
                                loading="lazy"
                                decoding="async"
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
                    {activeEvent.registrationUrl ? (
                      <a
                        href={activeEvent.registrationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="primary-button event-registration-button"
                      >
                        Register Now
                      </a>
                    ) : null}
                  </article>

                  {activeEvent.instagramPosts?.length ? (
                    <section className="article-instagram-section">
                      <div className="section-head section-head-carousel">
                        <h2 className="section-title">Related Instagram Posts</h2>
                      </div>

                      <div className="instagram-grid">
                        {activeEvent.instagramPosts.map((post) => (
                          <article key={post.url} className="glass-card instagram-card">
                            <img src={post.image} alt={post.title} className="instagram-custom-image" loading="lazy" decoding="async" />
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
              <div className="article-page-header">
                <button
                  type="button"
                  className="back-button detail-back-button"
                  onClick={closeAllArticlesPage}
                  aria-label="Back to homepage articles"
                >
                  <Icon name="arrow_back" className="site-icon site-icon-small" />
                  <span>Back</span>
                </button>
                <div className="article-page-hero">
                  <span className="article-category">Archive</span>
                  <h1 className="article-page-title">All Articles</h1>
                  <p className="article-page-intro">
                    Browse the full article collection. The homepage shows only the three most recently
                    published articles, while this page lists the entire archive.
                  </p>
                </div>
              </div>

              <div className="feature-card-grid all-articles-grid">
                {articles.map((card) => (
                  <article
                    key={card.slug}
                    className="glass-card article-card article-card-hover"
                    data-tilt="true"
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
                      <img src={card.image} alt={card.title} className="article-image" loading="lazy" decoding="async" />
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
          <section ref={heroSectionRef} className="space-intro">
            <div className="space-intro-sticky">
              <div className="space-intro-dark" aria-hidden="true">
                <div className="space-intro-stars"></div>
                <div className="space-intro-grid"></div>
                <div className="space-aurora space-aurora-one"></div>
                <div className="space-aurora space-aurora-two"></div>
                <div className="intro-mosaic">
                  <img src={mosaicMentoring} alt="" className="intro-mosaic-img intro-mosaic-a" />
                  <img src={mosaicCommunity} alt="" className="intro-mosaic-img intro-mosaic-b" />
                  <img src={mosaicOverhead} alt="" className="intro-mosaic-img intro-mosaic-c" />
                </div>
              </div>

              <div className="intro-gear intro-gear-one" aria-hidden="true">
                <img src={gearSpace} alt="" className="intro-gear-spin" />
              </div>
              <div className="intro-gear intro-gear-two" aria-hidden="true">
                <img src={gearSpace} alt="" className="intro-gear-spin intro-gear-spin-reverse" />
              </div>

              <div ref={introCopyRef} className="intro-copy">
                <IntroHeadline phrases={activeHeroPhrases} />
                <p className="intro-description">{heroDescriptionText}</p>
                <div className="intro-actions">
                  <a href="#events" className="intro-button-primary">
                    Explore Events
                  </a>
                  <a href="#articles" className="intro-button-ghost">
                    Read Articles
                  </a>
                </div>
              </div>

              <a
                ref={workBoardRef}
                className="intro-work-board"
                href="#events"
                aria-label="See our past events"
              >
                <span className="intro-work-tag">
                  Our work in the field
                  <svg className="intro-work-arrow" viewBox="0 0 90 60" aria-hidden="true">
                    <path
                      d="M6 8 C 30 18, 48 34, 66 46"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeDasharray="1 7"
                    />
                    <path
                      d="M56 46 L 68 48 L 62 37"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="intro-work-photos">
                  <figure className="intro-photo intro-photo-one">
                    <img src={workWorkshop} alt="Students building at an EnginAble workshop" />
                    <figcaption>Workshops</figcaption>
                  </figure>
                  <figure className="intro-photo intro-photo-two">
                    <img src={workHandsOn} alt="Hands-on engineering activity" />
                    <figcaption>Hands-on</figcaption>
                  </figure>
                  <figure className="intro-photo intro-photo-three">
                    <img src={workTeaching} alt="EnginAble team teaching a class" />
                    <figcaption>Community</figcaption>
                  </figure>
                </div>
              </a>

              <div className="intro-earth-scene" aria-hidden="true">
                <div
                  ref={earthRef}
                  className="intro-earth"
                  style={{ backgroundImage: `url(${earthTexture})` }}
                >
                  <span className="intro-pin">
                    <span className="intro-pin-ring"></span>
                    <span className="intro-pin-dot"></span>
                  </span>
                </div>
              </div>

              <div className="intro-earth-copy">
                <p className="intro-eyebrow">From Jakarta to the world</p>
                <h2 className="intro-earth-title">
                  Born in <span className="intro-hl-yellow">Jakarta Selatan</span>, Indonesia
                  &mdash; built for <span className="intro-hl-gradient">young learners everywhere</span>.
                </h2>
                <p className="intro-earth-text">
                  Workshops, community projects, and educational resources that turn engineering
                  into something you can experience, question, and build.
                </p>
              </div>

              <div className="intro-scroll-hint" aria-hidden="true">
                <span className="intro-scroll-pill">
                  <span className="intro-scroll-dot"></span>
                </span>
              </div>
            </div>
          </section>

          <section id="information" className="section">
            <div className="info-photo-frame">
              <img
                src={heroBackground}
                alt="EnginAble volunteers with students at a community workshop"
                className="info-photo"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="section-head">
              <div>
                <p className="section-eyebrow">Who we are</p>
                <h2 className="section-title">
                  Clear pathways into EnginAble&apos;s mission, approach, and public value.
                </h2>
              </div>
            </div>

            <div className="editorial-grid">
              <div className="editorial-column">
                {infoBlocks.map((block) => (
                  <article key={block.title} className="editorial-text-block">
                    <h2 className="section-title section-title-small editorial-title">
                      <span className="editorial-title-script">{block.title.charAt(0)}</span>
                      <span>{block.title.slice(1)}</span>
                    </h2>
                    <p>{block.summary}</p>
                  </article>
                ))}
              </div>
            </div>

            <a
              href="#about"
              className="secondary-button info-more-button"
              onClick={(event) => scrollToSection(event, "#about")}
            >
              Learn more about us
            </a>
          </section>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <React.Fragment key={copy}>
                  <span>Hands-on workshops</span>
                  <span className="marquee-star">&#10038;</span>
                  <span>Community outreach</span>
                  <span className="marquee-star">&#10038;</span>
                  <span>Creative learning</span>
                  <span className="marquee-star">&#10038;</span>
                  <span>Jakarta &rarr; the world</span>
                  <span className="marquee-star">&#10038;</span>
                  <span>STEM for everyone</span>
                  <span className="marquee-star">&#10038;</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <section id="articles" className="section section-wide">
            <div className="section-head">
              <div>
                <p className="section-eyebrow">Read &amp; learn</p>
                <h2 className="section-title">Articles</h2>
              </div>
              <a href="#articles/all" className="section-link" onClick={openAllArticlesPage}>
                View All
              </a>
            </div>

            <div className="feature-card-grid">
              {latestArticles.map((card) => (
                <article
                  key={card.slug}
                  className="glass-card article-card article-card-hover"
                  data-tilt="true"
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
                    <img src={card.image} alt={card.title} className="article-image" loading="lazy" decoding="async" />
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
              <div>
                <p className="section-eyebrow">Side by side</p>
                <h2 className="section-title">
                  Our Partners and Collaborators
                </h2>
              </div>
            </div>

            <div className="partner-portfolio">
              <div className="partner-portfolio-stage">
                {partnerLogoPages.map((page, pageIndex) => (
                  <div
                    key={page.id}
                    className={`partner-logo-page ${pageIndex === activePartnerPage ? "active" : ""}`}
                    aria-hidden={pageIndex !== activePartnerPage}
                  >
                    <h3 className="partner-logo-page-title">{page.title}</h3>

                    <div className="partner-logo-grid">
                      {page.logos.map((logo) => (
                        <article key={logo.name} className="partner-logo-item">
                          <img src={logo.image} alt={logo.name} className="partner-logo-image" loading="lazy" decoding="async" />
                          <span>{logo.name}</span>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="partner-portfolio-controls">
                <button
                  type="button"
                  className="partner-portfolio-arrow"
                  aria-label="Previous partner logo page"
                  onClick={() => goToSlide(activePartnerPage - 1, partnerLogoPages, setActivePartnerPage)}
                >
                  <Icon name="arrow_back" className="site-icon site-icon-small" />
                </button>

                <div className="partner-portfolio-dashes">
                  {partnerLogoPages.map((page, pageIndex) => (
                    <button
                      key={page.id}
                      type="button"
                      className={`partner-portfolio-dash ${pageIndex === activePartnerPage ? "active" : ""}`}
                      aria-label={`Partner logo page ${pageIndex + 1}`}
                      onClick={() => goToSlide(pageIndex, partnerLogoPages, setActivePartnerPage)}
                    ></button>
                  ))}
                </div>

                <button
                  type="button"
                  className="partner-portfolio-arrow"
                  aria-label="Next partner logo page"
                  onClick={() => goToSlide(activePartnerPage + 1, partnerLogoPages, setActivePartnerPage)}
                >
                  <Icon name="arrow_forward" className="site-icon site-icon-small" />
                </button>
              </div>
            </div>
          </section>

          <section id="about" className="section section-wide">
            <div className="section-head">
              <div>
                <p className="section-eyebrow">The full story</p>
                <h2 className="section-title">More about EnginAble</h2>
              </div>
            </div>

            <div className="about-full-grid">
              {infoBlocks.map((block) => (
                <article key={block.title} className="glass-card about-full-card" data-tilt="true">
                  <h3>
                    <span className="editorial-title-script">{block.title.charAt(0)}</span>
                    <span>{block.title.slice(1)}</span>
                  </h3>
                  <p>{block.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section section-centered">
            <p className="section-eyebrow">Get in touch</p>
            <h2 className="section-title section-title-centered">
              Start a conversation about content, events, or collaboration.
            </h2>
            <div className="contact-grid">
              {contactCards.map((card) => (
                <article key={card.title} className="glass-card contact-card-academic" data-tilt="true">
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
            <img src={logo} alt="EnginAble Global logo" className="footer-brand-logo" loading="lazy" decoding="async" />
            <div>
              <div className="brand-wordmark brand-wordmark-footer">EnginAble Global</div>
              <p>Promoting engineering through information, stories, events, and partnerships.</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#articles">Articles</a>
            <a href="#events">Events</a>
            <a href="#contact">Contact</a>
            <a href="https://www.instagram.com/enginable.global/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
