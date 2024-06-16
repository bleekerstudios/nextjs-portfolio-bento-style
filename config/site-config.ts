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
        title: "Integrations",
        link: "/",
      },
      {
        title: "Software Development",
        link: "/",
      },
      {
        title: "Film & Design",
        link: "/",
      },
      {
        title: "Business Development",
        link: "/",
      },
      {
        title: "Technical Support",
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
    buttonLink: "https://bleeckerstudios.retool.com/form/6b525eec-ad3a-41b7-aaad-ea0373b68570",
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
        title: "1,021 API Integrations Completed",
        link: "",
      },
      {
        title: "245 Hours Saved A Week Per Organization",
        link: "",
      }
      
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
      "https://bleeckerstudios.retool.com/form/6b525eec-ad3a-41b7-aaad-ea0373b68570",
  },

  {
    layout: "2x4",
    type: "equipment",
    title: "Blog  ",
    image: "/linework.svg",
    equipments: [
      {
        title: "Customer Stories ↗",
        link: "https://bleeckerstudios.retool.com/form/6b525eec-ad3a-41b7-aaad-ea0373b68570",
      }
      
      
    
    ],
  },
 
  
  {
    layout: "1x2",
    type: "social",
    title: "LinkedIn",
    icon: "discord",
    username: "@bleeckerstudios",
    buttonTitle: "Visit ↗",
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
    buttonTitle: "Go ↗",
    buttonLink: "https://www.youtube.com/channel/UCv9uMGMbekuE7d904ZZ4mtQ",
    buttonSecondaryText: "",
    color: "#FF0000",
    description:
      "",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Certifications, Partnerships, & Technology",
    image: "/timesaver.svg",
    equipments: [
      {
        title: "Learn More ↗",
        link: "",
      }
      
      
    
    ],
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
    "https://www.google.com/search?q=bleecker+studios+google+business+page&rlz=1C5CHFA_enUS1003US1010&oq=bleecker+studios+google+business&gs_lcrp=EgZjaHJvbWUqBwgCECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRirAjIHCAQQIRirAtIBCTIzNDM2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
  email: "info@bleecker-studios.com",
  items: GridItems,
} as const;
