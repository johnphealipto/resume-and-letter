/* eslint-disable react-refresh/only-export-components */
import {
  EnvelopeIcon,
  // LinkIcon,
  LocationIcon,
  PhoneIcon,
} from "./assets/icons";

export const CONTACTS = [
  { detail: "(234) 816-583-6582", icon: PhoneIcon },
  {
    detail: "vera.okongwuigwe@gmail.com",
    icon: EnvelopeIcon,
  },
  // {
  //   detail: "https://johnadibe.vercel.app",
  //   icon: LinkIcon,
  // },
  {
    detail: "Anambra, Nigeria.",
    icon: LocationIcon,
  },
];

export const EXPERIENCES = [
  {
    title: "HR and Safety Manager",
    company: "Pinnatech Engineering Nigeria LTD",
    location: "Anambra, Nigeria.",
    start: "March 2020",
    end: "present",
    description: [
      "HR Planning and workforce management, talent acquisition and recruitment.",
      "Risk Assessment and Hazard Prevention.",
      "Training and Safety Awareness.",
      // "Asphalt production assistant supervisor and general supervision",
    ],
  },
  // {
  //   title: "Client Service Executive",
  //   company: "AD-Tonic Int'l",
  //   location: "Anambra, Nigeria.",
  //   start: "2020",
  //   end: "2023",
  //   description: [
  //     "Build and manage client relationships and identify opportunity for new contracts.",
  //     "Ensure all client concerns and complaints are satisfactorily handled.",
  //     "Maintain accurate and up-to-date records of all contacts with clients.",
  //     "Providing product and service information.",
  //     "Resolving product and service problems.",
  //   ],
  // },
  {
    title: "Trainee Engineer",
    company: "Skyway Aviation Handling Company PLC",
    location: "Lagos.",
    start: "2018",
    end: "2019",
    description: [
      "Field Engineer",
      "Servicing and schedule maintance on aviation ground equipments.",
    ],
  },
  {
    title: "Trainee Engineer",
    company: "Livy.O. Plastic Industry Limited",
    location: "Onitsha, Anambra.",
    start: "2016",
    end: "2018",
    description: ["Machine operator.", "Machine monitoring and servicing."],
  },
  // {
  //   title: "Physic Teacher",
  //   company: "Bendav Model School",
  //   location: "Abuja",
  //   start: "2011",
  //   end: "2012",
  //   description: [],
  // },
];

export const EDUCATIONS = [
  {
    certificate: "B.Eng / Mechanical and Production Engineering",
    school: "Enugu State University of Science and Technology",
    duration: "2012 - 2017",
    location: "Enugu",
    grade: "",
    project: "",
  },
  {
    certificate: "West African Senior School Certificate Examination (WASSCE)",
    school: "Regina Pacis Model Secondary School, Anambra",
    duration: "2005 - 2011",
    location: "Onitsha, Anambra State",
    grade: "",
    project: "",
  },
  {
    certificate: "First School Leaving Certificate (FSLC)",
    school: "Bethroot Model School, Anambra",
    duration: "1999 - 2005",
    location: "Onitsha, Anambra State",
    grade: "",
    project: "",
  },
];

export const SKILLS = [
  // "HSE 123",
  "Attention to detail",
  "Creative problem-solving",
  "Logical thinking",
  "Communication skills",
  "Technical skills",
  "Adaptability",
  "Continuous learning",
];

export const CERTIFICATIONS = [
  {
    title: "Professional Engineer (R.Eng.)",
    institute: "Council for the Regulation of Engineering in Nigeria (COREN)",
    issued: "Jan 2025",
  },
  {
    title: "Human Resource Management (HRM)",
    institute: "Onshore and Offshore Safety Institute",
    issued: "Sep 2024",
  },
  {
    title: "Safety 1, 2, 3",
    institute: "Onshore and Offshore Safety Institute",
    issued: "Nov 2024",
  },
];
