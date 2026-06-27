import instagramArduinoImage from "../assets/instagram-arduino.png";
import instagramSolarImage from "../assets/instagram-solar.png";
import instagramWaterImage from "../assets/instagram-water.png";

export const articleRecords = [
  {
    id: "article-water-filters-2026-01-12",
    slug: "how-do-water-filters-work",
    status: "published",
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    category: "Article",
    title: "How Do Water Filters Work?",
    excerpt:
      "A practical explainer on filtration systems, clean water access, and the engineering logic behind them.",
    coverImage: instagramWaterImage,
    body: [
      "Water filters work by guiding water through materials that capture, block, or neutralize unwanted particles. Depending on the design, a filter may target sediment, bacteria, odors, heavy metals, or chemical contaminants.",
      "A simple household filter often uses several stages. The first stage catches larger dirt and rust particles. Activated carbon then helps absorb chlorine, smells, and some dissolved compounds. More advanced systems may add membranes or ultraviolet treatment for stronger purification.",
      "Engineers think carefully about flow rate, pore size, maintenance, and cost. A filter must clean water effectively without slowing it too much or becoming difficult to replace. That balance is what turns a science concept into a useful public product.",
      "In outreach and education, water filtration is a strong example because it connects engineering directly to health, equity, and community impact. Students can quickly see how design decisions affect daily life.",
    ],
    relatedPosts: [
      {
        id: "ig-water-filters-main",
        title: "Related Instagram Post",
        url: "https://www.instagram.com/enginable.global/p/DWI5MGhEXz4/",
        image: instagramWaterImage,
        caption:
          "Clean water is one example where simple engineering concepts can make a difference, yet not everyone is given the opportunity to explore them. EnginAble is built on the idea that access to knowledge can lead to action.\n\nIf you’re interested in being inched, feel free to reach out via DM or starry tunes for upcoming opportunities. EnginAble is currently open for Founding Team members all year round—register in our bio!\n\n#engineering #studentopportunities #highschool",
        platform: "instagram",
      },
    ],
  },
  {
    id: "article-solar-panels-2026-02-08",
    slug: "the-physics-of-solar-panels",
    status: "published",
    publishedAt: "2026-02-08",
    updatedAt: "2026-02-08",
    category: "Article",
    title: "The Physics of Solar Panels",
    excerpt:
      "A clear introduction to how sunlight becomes electricity and why solar design matters so much today.",
    coverImage: instagramSolarImage,
    body: [
      "Solar panels convert sunlight into electricity through photovoltaic cells. When sunlight hits the semiconductor material inside a cell, it energizes electrons and creates an electric current.",
      "The physics matters because panel performance depends on angle, light intensity, temperature, and material quality. Engineers study how to maximize energy output while making systems durable enough for long-term outdoor use.",
      "A solar installation is more than just the panel surface. Wiring, inverters, battery storage, and structural supports all play a role. Each part must work together so sunlight can become reliable power for homes, schools, or larger infrastructure.",
      "For young learners, solar panels are a powerful entry point into engineering because they connect physics, sustainability, and real-world design into one visible technology.",
    ],
    relatedPosts: [
      {
        id: "ig-solar-panels-main",
        title: "Related Instagram Post",
        url: "https://www.instagram.com/enginable.global/p/DWsM_kQksX5/",
        image: instagramSolarImage,
        caption:
          "Ever wondered the science behind solar panels and how they can provide energy for our households? Swipe along to find out!\n\nEnginAble helps convert concepts like these into simple visualizations to make engineering knowledge accessible for everyone!\n\n#engineering #solarpanels #highschool",
        platform: "instagram",
      },
    ],
  },
  {
    id: "article-arduino-2026-03-04",
    slug: "arduino-101-getting-started",
    status: "published",
    publishedAt: "2026-03-04",
    updatedAt: "2026-03-04",
    category: "Article",
    title: "Arduino 101: Getting Started",
    excerpt:
      "A beginner-friendly stepping stone into circuits, prototyping, and playful engineering experimentation.",
    coverImage: instagramArduinoImage,
    body: [
      "Arduino gives beginners a practical way to enter engineering by combining simple electronics with code. A starter project might blink an LED, read a sensor, or control a buzzer or motor.",
      "What makes Arduino useful is how quickly an idea can become a prototype. Students can test concepts, notice mistakes, revise their setup, and learn through direct feedback instead of only theory.",
      "Engineering confidence often grows through this small-cycle experimentation. Wiring a circuit, uploading a sketch, and seeing a real response helps abstract technical ideas feel more approachable.",
      "As a teaching tool, Arduino also supports collaboration. Teams can split roles across coding, physical assembly, troubleshooting, and presentation, which mirrors real engineering workflows in a manageable way.",
    ],
    relatedPosts: [
      {
        id: "ig-arduino-main",
        title: "Related Instagram Post",
        url: "https://www.instagram.com/enginable.global/p/DYl__XEkUe-/",
        image: instagramArduinoImage,
        caption:
          "A quick read on the mechanics behind Arduino — truly an incredible platform that any engineer would benefit from knowing!! 👨‍🔧👩‍🔧\n\nEnginable is excited to simplify many other tools like this for engineers alike ⭐️\n\n#arduino #engineering #studentopportunities",
        platform: "instagram",
      },
    ],
  },
];
