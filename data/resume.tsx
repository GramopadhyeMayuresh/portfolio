import { Icons } from "@/components/icons";

export const DATA = {
  name: "Mayuresh Gramopadhye",
  initials: "MG",
  url: "https://portfolio-eight-nu-96.vercel.app/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
      "Software Engineer | PHP | Laravel | Golang(GO) | ReactJS | NextJS | ElectronJS | SQL | AWS at Tech9",
  summary:
      "With over 10 years of software development experience, I am a Senior Software Engineer at Tech9, a leading provider of innovative and scalable solutions for clients across various industries. I have a strong expertise in web and cloud technologies, such as PHP, ReactJS, SQL, AWS, Laravel, and Go, and I have completed multiple certifications to enhance my knowledge and proficiency.\n" +
      "\n" +
      "At Tech9, I work with diverse and talented teams to deliver high-quality products that meet client satisfaction and expectations. I apply my skills and creativity to solve complex problems and develop user-friendly and secure applications. I am also passionate about learning new skills and technologies, and I constantly seek opportunities to improve myself and the products I work on. I enjoy working in a fast-paced and dynamic environment, where I can contribute to the company's mission and vision.",
  avatarUrl: "/me.png",
  contact: {
    email: "mayuresh3@gmail.com",
    tel: "+91 9637895433",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GramopadhyeMayuresh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mayureshgramopadhye/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tech9",
      href: "https://www.tech9.com/",
      title: "Senior Software Engineer",
      start: "January 2020",
      end: "Present"
    },
    {
      company: "GivingForce",
      href: "https://www.givingforce.com/",
      title: "Senior Software Engineer",
      start: "November 2016",
      end: "January 2020",
    },
    {
      company: "OAB Studios",
      href: "#",
      title: "Software Engineer",
      start: "August 2015",
      end: "October 2016",
    },
    {
      company: "Xpertrix IT Solutions",
      href: "#",
      title: "Freelance Software Engineer",
      start: "September 2014",
      end: "August 2015",
    },
    {
      company: "DB xento system",
      href: "#",
      title: "Software Engineer",
      start: "October 2012",
      end: "August 2014",
    },
  ],
  // education: [
  //   {
  //     school: "Buildspace",
  //     href: "https://buildspace.so",
  //     degree: "s3, s4, sf1, s5",
  //     logoUrl: "/buildspace.jpg",
  //     start: "2023",
  //     end: "2024",
  //   },
  //   {
  //     school: "University of Waterloo",
  //     href: "https://uwaterloo.ca",
  //     degree: "Bachelor's Degree of Computer Science (BCS)",
  //     logoUrl: "/waterloo.png",
  //     start: "2016",
  //     end: "2021",
  //   },
  //   {
  //     school: "Wilfrid Laurier University",
  //     href: "https://wlu.ca",
  //     degree: "Bachelor's Degree of Business Administration (BBA)",
  //     logoUrl: "/laurier.png",
  //     start: "2016",
  //     end: "2021",
  //   },
  //   {
  //     school: "International Baccalaureate",
  //     href: "https://ibo.org",
  //     degree: "IB Diploma",
  //     logoUrl: "/ib.png",
  //     start: "2012",
  //     end: "2016",
  //   },
  // ],
  projects: [
    {
      title: "SuitePeach",
      description:
          "I worked as a full-stack developer on this startup project for 2 years. Edtech for dance.",
      tags: ["PHP(Laravel)", "Go", "React", "Node.js", "Electron.js", "Aws", "sass", "Aws-chimes"],
      imageUrl: "images/projects/suitepeach.png",
      link: "https://app.suitepeach.com/"
    },
    {
      title: "Lashbrook",
      description:
          "Worked as a front-end developer on this project. E-commerce website for custom jewellery builder.",
      tags: ["React","tailwind","redux"],
      imageUrl: "/images/projects/lashbrook.png",
      link: "https://www.lashbrookdesigns.com"
    },
  ],
} as const;
