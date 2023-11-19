export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  

  
  {
    layout: "2x2",
    type: "social",
    title: "Technical Services, At Your Pace",
    icon: "",
    username: "We design, develop, and deploy technology solutions.",
    description:
      "Our Goal: Make Technology Work For You.",
    color: "#424339",
    buttonTitle: "What We Do",
    buttonLink: "",
    buttonSecondaryText: "",
  },

 
  {
    layout: "2x4",
    type: "equipment",
    title: "How We Work",
    image: "/finalpink.svg",
    equipments: [
      {
        title: "Phase 1: Evaluate Current State",
        link: "",
      },
      {
        title: "Phase 2: Solution Design",
        link: "/",
      },
      {
        title: "Phase 3: Develop + Integrate",
        link: "/",
      },
      {
        title: "Phase 4: Deploy & Educate",
        link: "/",
      },
    ],
  },

  {
    layout: "2x2",
    type: "social",
    title: "Flexible, By Design",
    icon: "",
    username: "We can modify one, or many components of your technology ecosystem.",
    buttonTitle: "Our Approach",
    buttonLink: "/",
    buttonSecondaryText: "",
    color: "#8391A5",
    description:
      "",
  },
  
  {
    layout: "2x4",
    type: "equipment",
    title: "Services",
    image: "/pattern_04.svg",
    equipments: [
      {
        title: "Application Customization & Integrations",
        link: "/",
      },
      {
        title: "Promotional Services",
        link: "/",
      },
      {
        title: "Software Development",
        link: "/",
      },
      {
        title: "Business Development",
        link: "/",
      },
      {
        title: "Professional Services & Technical Support",
        link: "/",
      },
      
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Click Here To Get Started",
    icon: "",
    username: "We solve your problems, improve operational efficiency, and optimize resource utilization.",
    buttonTitle: "Get Started  ↗",
    buttonLink: "https://www.bleeckerstudios-docs.com/getstarted",
    buttonSecondaryText: "",
    color: "#62475D",
    description:
      "Looking Forward To Connecting.",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Our Results",
    image: "/mini.svg",
    equipments: [
      {
        title: "40% Reduction in Annual Technology Costs",
        link: "",
      },
      {
        title: "245 Hours Saved A Week Per Organization",
        link: "",
      },
      {
        title: "20% Reduction in Touchpoints with End Clients",
        link: "",
      },
      
    ],
  },
  
  
  
  {
    layout: "2x2",
    type: "social",
    title: "Check Out Our Docs",
    username: "",
    description:
      "Our documentation dives deep into how we work, our services, and other helpful resources.",
    icon: "",
    buttonTitle: "Learn More  ↗",
    buttonSecondaryText: "",
    buttonLink:
      "https://www.bleeckerstudios-docs.com/",
  },

  {
    layout: "2x4",
    type: "equipment",
    title: "Blog  ",
    image: "/linework.svg",
    equipments: [
      {
        title: "Design; The Most Imporant Piece of The Puzzle  ↗",
        link: "",
      },
      {
        title: "Why You Shouldn'y Overpay For Engineering Services  ↗",
        link: "",
      },
      {
        title: "The New Frontier of Software Development  ↗",
        link: "",
      },
      {
        title: "4 Ways To Avoid Vendor Lock-in  ↗",
        link: "",
      },
    ],
  },
 
  
  {
    layout: "1x2",
    type: "social",
    title: "LinkedIn",
    icon: "discord",
    username: "@bleeckerstudios",
    buttonTitle: "View Page",
    buttonLink: "https://www.linkedin.com/company/bleeckerstudios",
    buttonSecondaryText: "",
    color: "#0077b5",
    description:
      "",
  },
  {
    layout: "1x2",
    type: "social",
    title: "YouTube",
    icon: "youtube",
    username: "@bleeckerstudios",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@Bleeckerstudios",
    buttonSecondaryText: "",
    color: "#FF0000",
    description:
      "",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "About",
    image: "/vortex.svg",
    equipments: [
      {
        title: "We simplify technology implementations. Our ethos is straightforward: Learn, build, and deploy. We streamline the journey from concept to realization, making collaboration effortless. Excited for the opportunity to partner with you.",
        link: "",
      },
      
      
      
    ],
  },
  
  
];

export const siteConfig = {
  creator: "Bleecker Studios",
  title: "",
  bio: "Everyone Has Ideas, We Bring Them To Life",
  location: "New York, NY",
  locationLink:
    "",
  email: "info@bleecker-studios.com",
  items: GridItems,
} as const;
