import poverty from "./assets/poverty.svg.ico";
import Hunger from "./assets/Hunger.ico";
import Health from "./assets/Health.ico";
import education from "./assets/education.svg.ico";
import gender from "./assets/gender.svg.ico";
import goal6 from "./assets/goal6.svg.ico";
import goal7 from "./assets/goal7.png.ico";
import goal8 from "./assets/goal8.svg.ico";
import goal9 from "./assets/goal9.svg.ico";
import goal10 from "./assets/goal10.png.ico";
import goal11 from "./assets/goal11.svg.ico";
import goal12 from "./assets/goal12.svg.ico";
import goal13 from "./assets/goal13.svg.ico";
import goal14 from "./assets/goal14.svg.ico";
import goal15 from "./assets/goal15.svg.ico";
import goal16 from "./assets/goal16.svg.ico";
import goal17 from "./assets/goal17.svg.ico";

export const goalDetails = {
  1: {
    icon: poverty,
    title: "No Poverty",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MgHUfu0ELz0hIh7IKvz0YwEIv69MP1Vskw&s",
    
    overview: "Goal 1 aims to end poverty in all its forms everywhere. The number of people living in extreme poverty dropped by more than half between 1990 and 2015.",
    color: "#E5243B",
    background:"rgba(229, 34, 59, 0.1)",
    keyPoints: [
      "Eradicate extreme poverty",
      "Implement social protection systems",
      "Equal rights to economic resources",
      "Reduce exposure to climate disasters"
    ],
    videos: "X5zHBCsz42I",
    videos2:"WYGIpP2Nal0",
    resources: [
      { title: "UN SDG 1 Resources", uri: "https://sdgs.un.org/goals/goal1" }
    ]
  },
  2: {
    title: "Zero Hunger",
    image: "https://www.orfonline.org/public/uploads/posts/image/Malnutrition-in-india.jpg", 
    icon: Hunger,
    overview: "Goal 2 seeks sustainable solutions to end hunger, achieve food security and improved nutrition while promoting sustainable agriculture.",
    color: "#DDA63A",
    background:"rgba(221, 166, 58, 0.3)",
    keyPoints: [
      "End hunger and malnutrition",
      "Double agricultural productivity",
      "Ensure sustainable food production",
      "Maintain genetic diversity in food production"
    ],
    videos: "DNCL-1ASmNc",
    videos2: "dn-hLQk49eA",
    resources: [
      { title: "UN SDG 2 Resources", url: "https://sdgs.un.org/goals/goal2" }
    ]
  },
  3: {
    title: "Good Health and Well-Being",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgUIIXMFzajo1jrseUk6KaVo3QPQ5iO_2eA&s",
    icon: Health,
    overview: "Goal 3 ensures healthy lives and promotes well-being for all at all ages through improved healthcare and global health threat prevention.",
    color: "#4C9F38",
    background: "rgba(76, 159, 56, 0.3)", 
    keyPoints: [
      "Reduce maternal mortality",
      "End preventable child deaths",
      "Fight communicable diseases",
      "Universal access to healthcare"
    ],
    videos:"ZVqSC_hN2lk", 
    videos2:"z_jjX-i45hU", 
    resources: [
      { title: "UN SDG 3 Resources", url: "https://sdgs.un.org/goals/goal3" }
    ]
  },
  4: {
    title: "Quality Education",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG_W8FUogwzgoVJcI9DdPrAyiy68AMpOGgQ&s",
    icon: education,
    overview: "Goal 4 ensures inclusive and equitable quality education and promotes lifelong learning opportunities for all.",
    color: "#C5192D",
    background:"rgba(197, 25, 45, 0.3)",
    keyPoints: [
      "Free primary and secondary education",
      "Equal access to vocational training",
      "Universal literacy and numeracy",
      "Education for sustainable development"
    ],
    videos: "tlhp3K1veoQ",
    videos2:"7dzFbP2AgFo",
    resources: [
      { title: "UN SDG 4 Resources", url: "https://sdgs.un.org/goals/goal4" }
    ]
  },
  5: {
    title: "Gender Equality",
    image: "https://www.shutterstock.com/image-vector/sdg-goal-5-gender-equality-260nw-2553618401.jpg",
    icon: gender,
    overview: "Goal 5 aims to achieve gender equality and empower all women and girls through eliminating discrimination and violence.",
    color: "#FF3A21",
    background: "rgba(255, 58, 33, 0.3)",
    keyPoints: [
      "End discrimination against women",
      "Eliminate violence against women",
      "Equal opportunities for leadership",
      "Equal rights to economic resources"
    ],
    videos:"MsbAETRE7b4",
    videos2:"F-OURmsmEKo", 
    resources: [
      { title: "UN SDG 5 Resources", url: "https://sdgs.un.org/goals/goal5" }
    ]
  },
  6: {
    title: "Clean Water and Sanitation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyU24u5GglmnKjAzPfLeSyGVB6YD3LSYdVw&s",
    icon: goal6,
    overview: "Goal 6 ensures availability and sustainable management of water and sanitation for all through improved infrastructure and hygiene.",
    color: "#26BDE2",
    background: "rgba(38, 189, 226, 0.3)",
    
    keyPoints: [
      "Universal access to safe water",
      "Adequate sanitation and hygiene",
      "Improve water quality",
      "Water-use efficiency"
    ],
    videos: "FAuoxTHq_zw",
    videos2:"jcfoWx14lv0",
    resources: [
      { title: "UN SDG 6 Resources", url: "https://sdgs.un.org/goals/goal6" }
    ]
  },
  7: {
    title: "Affordable and Clean Energy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCrWwMAlT4zjqpSSd_nrR7eQOhpILgFs3yQ&s",
    icon: goal7,
    overview: "Goal 7 ensures access to affordable, reliable, sustainable and modern energy for all through renewable energy adoption.",
    color: "#FCC30B",
    background: "rgba(252, 195, 11, 0.3)",
    
    keyPoints: [
      "Universal access to modern energy",
      "Increase renewable energy",
      "Double energy efficiency",
      "International cooperation for clean energy"
    ],
    videos: "mmSbX1Rg2L0",
    videos2: "jhoa3OHivN8",
    resources: [
      { title: "UN SDG 7 Resources", url: "https://sdgs.un.org/goals/goal7" }
    ]
  },
  8: {
    title: "Decent Work and Economic Growth",
    image: "https://api.alumniportal-deutschland.org/api/image/sgesrc/SDG/Ziel_8/Header_SDG8_gettyimages_coffeekai_1324734861.jpg.webp",
    icon: goal8,
    overview: "Goal 8 promotes sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
    color: "#A21942",
    background:"rgba(143, 24, 56, 0.3)",
    keyPoints: [
      "Sustained economic growth",
      "Productive employment for all",
      "Protect labor rights",
      "Promote entrepreneurship and innovation"
    ],
    videos: "dylOM3GY9PY",
    videos2:"lj0JlrIWx2k",
    resources: [
      { title: "UN SDG 8 Resources", url: "https://sdgs.un.org/goals/goal8" }
    ]
  },
  9: {
    title: "Industry, Innovation, and Infrastructure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6yFvXi5lbeY7orqyQmn9WIhJTjHV4UFf1A&s",
    icon: goal9,
    overview: "Goal 9 focuses on building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation.",
    color: "#FD6925",
    background:"rgba(253, 105, 37, 0.3)",
    keyPoints: [
      "Develop sustainable infrastructure",
      "Promote inclusive industrialization",
      "Enhance scientific research",
      "Increase access to financial services"
    ],
    videos: "",
    resources: [
      { title: "UN SDG 9 Resources", url: "https://sdgs.un.org/goals/goal9" }
    ]
  },
  10: {
    title: "Reduced Inequality",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47wDC93gcLz8EIhSXyEUC4VNQXQCvC_7QrA&s",
    icon: goal10,
    overview: "Goal 10 aims to reduce inequality within and among countries through policies that empower disadvantaged groups.",
    color: "#DD1367",
    background:"rgba(221, 19, 103, 0.3)",
    keyPoints: [
      "Reduce income inequality",
      "Promote social, economic, and political inclusion",
      "Ensure equal opportunities",
      "Improve regulation of global financial markets"
    ],
    videos:"",
    resources: [
      { title: "UN SDG 10 Resources", url: "https://sdgs.un.org/goals/goal10" }
    ]
  },
  11: {
    title: "Sustainable Cities and Communities",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeeJbYIZpFfSxH9JnTTAEY9i5taldcYOZNw&s",
    icon: goal11,
    overview: "Goal 11 aims to make cities and human settlements inclusive, safe, resilient, and sustainable.",
    color: "#FD9D24",
    background:
    "rgba(253, 157, 36, 0.3)",
    keyPoints: [
      "Affordable housing",
      "Sustainable transport systems",
      "Inclusive urban planning",
      "Reduce disaster risk"
    ],
    videos: "",
    resources: [
      { title: "UN SDG 11 Resources", url: "https://sdgs.un.org/goals/goal11" }
    ]
  },
  12: {
    title: "Responsible Consumption and Production",
    image: "https://www.stewartinvestors.com/content/dam/stewartinvestors/images/article-headers/sdg-12.jpg",
    icon: goal12,
    overview: "Goal 12 aims to ensure sustainable consumption and production patterns.",
    color: "#BF8B2E",
    background:
    "rgba(191, 139, 46, 0.3)",
    keyPoints: [
      "Sustainable management of natural resources",
      "Reduce food waste",
      "Promote sustainable lifestyles",
      "Encourage companies to adopt sustainable practices"
    ],
    videos: "",
    resources: [
      { title: "UN SDG 12 Resources", url: "https://sdgs.un.org/goals/goal12" }
    ]
  },
  13: {
    title: "Climate Action",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJbBYWFyWpUFzss-KshcbFHSTZaRuvHNBIQ&s",
    icon: goal13,
    overview: "Goal 13 urges urgent action to combat climate change and its impacts.",
    color: "#3F7E44",
    background:
    "rgba(63, 126, 68, 0.3)",
    keyPoints: [
      "Integrate climate measures into national policies",
      "Improve education on climate change",
      "Strengthen resilience to climate-related disasters",
      "Reduce greenhouse gas emissions"
    ],
    videos: "",
    resources: [
      { title: "UN SDG 13 Resources", url: "https://sdgs.un.org/goals/goal13" }
    ]
  },
  14: {
    title: "Life Below Water",
    image: "https://www.undp.org/sites/g/files/zskgke326/files/styles/sdg_header_304_x_461_/public/2021-03/shutterstock-coral-turtle_786348760-SDG14-2.jpg?itok=lnp-ttd6",
    icon: goal14,
    overview: "Goal 14 aims to conserve and sustainably use the oceans, seas, and marine resources.",
    color: "#0A97D9",
    background:
    "rgba(10, 151, 217, 0.3)",
    keyPoints: [
      "Reduce marine pollution",
      "Protect marine ecosystems",
      "Regulate fishing practices",
      "Increase ocean conservation efforts"
    ],
    videos: "",
    resources: [
      { title: "UN SDG 14 Resources", url: "https://sdgs.un.org/goals/goal14" }
    ]
  },
  15: {
    title: "Life on Land",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AhBFU2wEr6y1yVYabAG05oUyNZH2AZQH9g&s",
    icon: goal15,
    overview: "Goal 15 seeks to protect, restore, and promote sustainable use of terrestrial ecosystems.",
    color: "#56C02B",
    background:
    "rgba(86, 192, 43, 0.3)",
    keyPoints: [
      "Combat desertification",
      "Sustainably manage forests",
      "Protect biodiversity",
      "Restore degraded land"
    ],
    videos:"",
    resources: [
      { title: "UN SDG 15 Resources", url: "https://sdgs.un.org/goals/goal15" }
    ]
  },
  16: {
    title: "Peace, Justice, and Strong Institutions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaj-KP1RUjn1P3U7TKWigJRS4KeKr8vOup8w&s",
    icon: goal16,
    overview: "Goal 16 aims to promote peaceful and inclusive societies, provide access to justice, and build effective institutions.",
    color: "#00689D",
    background:
    "rgba(0, 104, 157, 0.3)",
    keyPoints: [
      "Reduce violence and corruption",
      "Promote human rights",
      "Ensure access to justice",
      "Build accountable institutions"
    ],
    videos: "",
    resources: [
      { title: "UN SDG 16 Resources", url: "https://en.wikipedia.org/wiki/Sustainable_Development_Goals#Goal_1:_No_Poverty" }
    ]
  },
  17: {
    title: "Partnerships for the Goals",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWHVOSIKE_8Z-Yfpn8ceAx-1QLU2vtul5Fg&s",
    icon: goal17,
    overview: "Goal 17 focuses on strengthening global partnerships to support and achieve the ambitious targets of the 2030 Agenda for Sustainable Development.",
    color: "#19486A",
    background:
    "rgba(25, 72, 106, 0.3)",
    keyPoints: [
      "Enhance international cooperation",
      "Strengthen global trade",
      "Increase financial resources for developing countries",
      "Encourage technology and knowledge sharing"
    ],
    videos: [
      { title: "Understanding SDG 17", url: "https://example.com/sdg17-video" }
    ],
    resources: [
      { title: "UN SDG 17 Resources", url: "https://sdgs.un.org/goals/goal17" }
    ]
  }
};


  export default goalDetails;