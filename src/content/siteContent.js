import slideOne from "../assets/slide-1.svg";
import slideTwo from "../assets/slide-2.svg";
import slideThree from "../assets/slide-3.svg";
import slideFour from "../assets/slide-4.svg";
import schoolImage from "../assets/partner-school.svg";
import universityImage from "../assets/partner-university.svg";
import industryImage from "../assets/partner-industry.svg";
import nonprofitImage from "../assets/partner-nonprofit.svg";

export const heroPhrases = [
  "Making engineering accessible and empowering for young people to use STEM to change the world.",
  "Provide hands-on engineering education through workshops, community outreach, and creative learning.",
];

export const navItems = [
  { label: "Information", href: "#information" },
  { label: "Articles", href: "#articles" },
  { label: "Events", href: "#events" },
  { label: "Partners", href: "#partners" },
];

export const slides = [
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

export const infoBlocks = [
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

export const eventCards = [
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

export const partnerCards = [
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

export const partnerTypes = [
  { title: "Schools", icon: "school", image: schoolImage },
  { title: "Universities", icon: "account_balance", image: universityImage },
  { title: "Industry", icon: "factory", image: industryImage },
  { title: "Nonprofits", icon: "volunteer_activism", image: nonprofitImage },
];

export const contactCards = [
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
