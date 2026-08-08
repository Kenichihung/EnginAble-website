import cintaindoEventImage from "../assets/event-cintaindo.png";
import cintaindoGalleryOne from "../assets/event-cintaindo-gallery-1.jpg";
import cintaindoGalleryTwo from "../assets/event-cintaindo-gallery-2.png";
import cintaindoGalleryThree from "../assets/event-cintaindo-gallery-3.png";
import cintaindoGalleryFour from "../assets/event-cintaindo-gallery-4.jpg";

export const eventRecords = [
  {
    id: "event-collaboration-2026-01",
    slug: "cintaindo-yayasan-alpha-visit-recap",
    status: "published",
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    category: "Past Event",
    title: "CintaIndo x EnginAble Visit Recap",
    excerpt:
      "A heart-led collaboration with CintaIndo that brought young volunteers, shared activities, and EnginAble's first event milestone into one meaningful visit.",
    coverImage: cintaindoEventImage,
    body: [
      "This visit recap highlights EnginAble Global's collaboration with CintaIndo during a Yayasan Alpha visit. It captures a first-event milestone for the organisation while showing the kind of volunteering experience that connects engineering-minded young people with real community engagement.",
      "The event brought together group activities, conversations, and shared moments with children on-site. Rather than framing outreach as something distant, the collaboration made service feel immediate, personal, and memorable for the volunteers involved.",
      "As EnginAble grows, event records like this help document not only what happened, but also the kind of values the organisation wants to build around: contribution, visibility, and meaningful participation.",
    ],
    galleryImages: [
      {
        id: "cintaindo-gallery-1",
        image: cintaindoGalleryOne,
        alt: "EnginAble team facilitating an activity with children during the CintaIndo visit.",
      },
      {
        id: "cintaindo-gallery-2",
        image: cintaindoGalleryTwo,
        alt: "A hands-on water filtration demonstration during the CintaIndo visit.",
      },
      {
        id: "cintaindo-gallery-3",
        image: cintaindoGalleryThree,
        alt: "A volunteer presenting materials to the children during the CintaIndo visit.",
      },
      {
        id: "cintaindo-gallery-4",
        image: cintaindoGalleryFour,
        alt: "A group photo moment from the CintaIndo collaboration visit.",
      },
    ],
    relatedPosts: [
      {
        id: "ig-event-collaboration-one",
        title: "Instagram Collaboration Post",
        url: "https://www.instagram.com/enginable.global/p/DXJhWipEZNd/",
        image: cintaindoEventImage,
        caption:
          "Yayasan Alpha Visit - 6 April 2026 - Recap 💗 with @cintaindo_org\n\nCore memory unlocked 🔓🧠 + First ever EnginAble event! Interested in volunteering opportunities like this? Come check our page!\n\n#engineering #studentopportunities",
        platform: "instagram",
      },
    ],
  },
];
