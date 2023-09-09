export const navLinks = [
    {
		id: "skills",
		title: "Skills",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id:"projects",
        title: "Projects",
    },
    {
        id:"testimonials",
        title: "Testimonials",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const skills = [
    {
      name: "JavaScript",
      icon: '/assets/skills/javascript.png',
    },
    {
      name: "TypeScript",
      icon: '/assets/skills/typescript.png',
    },
    {
      name: "React JS",
      icon: '/assets/skills/reactjs.png',
    },
    {
      name: 'Next Js',
      icon: '/assets/skills/next.png',
    },
    {
        name: "Sql",
        icon: '/assets/skills/sql.png',
    },
    {
        name: "Vite JS",
        icon: '/assets/skills/vite.png',
      },
    {
      name: "HTML 5",
      icon: '/assets/skills/html.png',
    },
    {
      name: "CSS 3",
      icon: '/assets/skills/css.png',
    },
    {
      name: "Redux Toolkit",
      icon: '/assets/skills/redux.png',
    },
    {
      name: "Tailwind CSS",
      icon: '/assets/skills/tailwind.png',
    },
    {
      name: "Node JS",
      icon: '/assets/skills/nodejs.png',
    },
    {
      name: "MongoDB",
      icon: '/assets/skills/mongodb.png',
    },
    {
      name: "git",
      icon: '/assets/skills/github.png',
    },
	{
		name: "python",
        icon: '/assets/skills/python.png',
	},
	{
		name: "sanity",
        icon: '/assets/skills/sanity.webp',
	},
	{
		name: "sass",
        icon: '/assets/skills/sass.png',
	},
    {
        name: "mui",
        icon: '/assets/skills/mui.png'
    },
    {
        name: "motion",
        icon: '/assets/skills/motion.png'
    }

];

export const education = [
	{
		name:'The University of Texas at Austin',
		major: 'BS Mathematics',
		year:'2021',
		icon: '/assets/ut.png',
		points: [
			"Mathematical Modeling in Science and Engineering",
			"Mathematical Statistics",
			"Probability",
			"Calculus",
			"Partial Differential Equations",
			"Linear Algebra",
			"Discrete Mathematics",
		  ],
	}, 
	{
		name:'The University of Texas at Austin',
		major: 'Minor Computer Science',
		year:'2021',
		icon: '/assets/ut.png',
		points: [
			"Web Development",
			"Software Engineering",
			"Software Design",
			"Scientific computation in Number Analysis",
			"Computer Programming",
			"Assembly",
			"Data Science",
		  ],
	},
	{
		name:'Texas',
		major: 'Javascript Mastery',
		year:'2023',
		icon: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://file-uploads.teachablecdn.com/6a04843730254526a1c15d3b88b6cae1/be6610c8fbf341729201abce9af92c9b",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		  ],
	},
]

export const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: '/assets/projects/carrent.png',
      source_code_link: "https://github.com/",
      deployed_link: 'https://morerent.vercel.app/'
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: '/assets/projects/jobit.png',
      source_code_link: "https://github.com/",
      deployed_link: 'https://jobit-dd.vercel.app/'
    },
    {
      name: "Filmpire",
      description:
      "An online movie database using React, HTML, MUI, and JavaScript, providing users with a comprehensive source of movie information including cast, reviews, and movie recommendations.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        },
      ],
      image: '/assets/projects/filmpire.png',
      source_code_link: "https://github.com/",
      deployed_link: 'https://filmpiregm.netlify.app/'

    },
    {
        name: "Car Hub",
        description:
         "Online car database utilizing the new Next 13.4 update. View your favorite vehicles and their specifications based on car type, fuel, manufacturers, and models.",
        tags: [
          {
            name: "next",
            color: "blue-text-gradient",
          },
          {
            name: "restapi",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
        ],
        image: '/assets/projects/carhub.png',
        source_code_link: "https://github.com/medrano123/showcase",
          deployed_link: 'https://showcase-gm.vercel.app/'
      },
      {
        name: "Promptia",
        description:
         "MERN full stack AI prompt sharing application",
        tags: [
          {
            name: "next",
            color: "blue-text-gradient",
          },
          {
            name: "restapi",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
        ],
        image: '/assets/projects/promptia.png',
        source_code_link: "https://github.com/medrano123/promptia",
          deployed_link: 'https://promptia-gm.vercel.app/'
      },
      {
        name: "Article Summarizer",
        description:
         "Lets be honest you don't want to read the entire article...",
        tags: [
          {
            name: "next",
            color: "blue-text-gradient",
          },
          {
            name: "restapi",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
        ],
        image: '/assets/projects/summarizer.png',
        source_code_link: "https://github.com/medrano123/article_summarizer",
          deployed_link: 'https://article-summarizer-gm.vercel.app/'
      },
    {
      name: "Yariga",
      description:
        "Yariga is a MERN full stack property management application!",
      tags: [
        {
          name: "refine",
          color: "blue-text-gradient",
        },
        {
          name: "mongo",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: '/assets/projects/yariga.png',
      source_code_link: "https://github.com/medrano123/yariga_mern_property_management",
      deployed_link: 'https://yariga-managent.netlify.app/'

    },
    {
      name: "ShareMe",
      description:
        "A dynamic and fully interactive social media application that enables users to share images and animated GIFs with others",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: '/assets/projects/shareme.png',
      source_code_link: "https://github.com/medrano123/PictureSharingApp",
      deployed_link: 'https://sharemehm.netlify.app/'

    },
    {
      name: "T-Shirt-Generator",
      description:
        "Ai generated custom t-shirts!",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: '/assets/projects/t-shirt.png',
      source_code_link: "https://github.com/medrano123/ai_tshirt_generator",
      deployed_link: 'https://ai-tshirt-generator.netlify.app/'

    },
    {
      name: "AI Image Generator",
      description:
      "A MERN application that creates AI images based on your prompts",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "mongo",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: '/assets/projects/ai-imaging.png',
      source_code_link: "https://github.com/medrano123/ai_imaging_mern",
      deployed_link: 'https://ai-imaging-mern.vercel.app/'

    },
    {
      name: "Giovanni's Gym",
      description:
        "Fitness app utilizing exerciseDB and YoutubeDb",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        },
      ],
      image: '/assets/projects/gym.png',
      source_code_link: "https://github.com/medrano123/fitnessapp",
      deployed_link: 'https://gm-fitness.netlify.app/'

    },
    {
      name: "Full Stack Eccomerce Store",
      description:
        "E-commerce website with valid payment processing",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        },
      ],
      image: '/assets/projects/eccomerce.png',
      source_code_link: "https://github.com/medrano123/eCommerce",
      deployed_link: 'https://e-commerce-tau-murex.vercel.app/'
    },
];