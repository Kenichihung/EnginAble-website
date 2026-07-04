import slideOne from "../assets/slide-1.svg";
import slideTwo from "../assets/slide-2.svg";
import slideThree from "../assets/slide-3.svg";
import slideFour from "../assets/slide-4.svg";
import schoolImage from "../assets/partner-school.svg";
import universityImage from "../assets/partner-university.svg";
import industryImage from "../assets/partner-industry.svg";
import nonprofitImage from "../assets/partner-nonprofit.svg";
import algomindLogo from "../assets/partners/algomind.png";
import cintaindoLogo from "../assets/partners/cintaindo.png";
import courtsForCauseLogo from "../assets/partners/courts-for-cause.png";
import dearYouForTeensLogo from "../assets/partners/dear-you-for-teens.png";
import herizenLogo from "../assets/partners/herizen.png";
import kisahTerlupakanLogo from "../assets/partners/kisah-terlupakan.png";
import stemboundLogo from "../assets/partners/stembound.png";

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
    text: "EnginAble is a team of students passionate about engineering, education, and community impact. We are driven by the belief that young people should have the opportunity to explore STEM beyond the classroom, regardless of their background or access to resources. As students ourselves, we understand how powerful it can be to learn through curiosity, creativity, and hands-on experiences. EnginAble was created to share that opportunity with more children and communities.",
  },
  {
    title: "What We Do",
    text: "EnginAble designs and leads interactive engineering-based workshops for children and young students. Our activities turn complex engineering concepts into simple, engaging, and practical challenges, such as building structures, exploring energy systems, designing solutions, and understanding how technology affects everyday life. We also collaborate with schools, orphanages, community centers, and other organizations to bring accessible STEM learning to more students. Beyond workshops, EnginAble creates educational materials and projects that connect engineering with real social and environmental issues.",
  },
  {
    title: "Why It Matters",
    text: "EnginAble started in Indonesia, a country where young people grow up surrounded by real challenges that require creative and practical problem-solving. These issues are not unique to Indonesia, but they shaped the way we see engineering: not just as a career path, but as a mindset for understanding problems and designing better solutions. Around the world, communities need people who can think critically, build creatively, test ideas, and improve what already exists. Yet for many students, engineering is introduced too late, too theoretically, or in a way that feels disconnected from everyday life. EnginAble exists to change that. By making engineering hands-on, accessible, and connected to real-world issues, we help young learners see STEM as something they can use to understand the world around them and create meaningful change.",
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

export const partnerLogoPages = [
  {
    id: "event-partners",
    title: "Event Partners",
    logos: [
      { name: "cintaindohq", image: cintaindoLogo },
      { name: "courts.for.cause", image: courtsForCauseLogo },
      { name: "stembound_org", image: stemboundLogo },
    ],
  },
  {
    id: "media-partners",
    title: "Media Partners",
    logos: [
      { name: "kisahterlupakan", image: kisahTerlupakanLogo },
      { name: "herizen.jkt", image: herizenLogo },
      { name: "dearyouforteens", image: dearYouForTeensLogo },
      { name: "algomnd", image: algomindLogo },
    ],
  },
];

export const contactCards = [
  {
    icon: "mail",
    title: "General Enquiries",
    primary: "enginable.global@gmail.com",
    secondary: "+62 817-6969-068 (Jocelyn, Head of Public Relations)",
  },
  {
    icon: "handshake",
    title: "Partnerships",
    primary: "enginable.global@gmail.com",
    secondary: "For schools, companies, and community collaborations.",
  },
  {
    icon: "photo_camera",
    title: "Instagram",
    primary: "@enginable.global",
    secondary: "Visit Instagram",
    button: true,
  },
];
