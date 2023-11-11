import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    sass,
    firebase,
    gatsby,
    next,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    enugutech,
    carrent,
    jobit,
    tripguide,
    governor,
    map,
    mygit,
    emart,
    comfySlot,
    calculator,
    country,
    game,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    // {
    //     name: "HTML 5",
    //     icon: html,
    // },
    // {
    //     name: "CSS 3",
    //     icon: css,
    // },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "Sass",
    //     icon: sass,
    // },
    {
        name: "Firebase",
        icon: firebase,
    },
    // {
    //     name: "Gatsby",
    //     icon: gatsby,
    // },
    // {
    //     name: "Next",
    //     icon: next,
    // },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "ENUGU STATE TECH HUB",
        icon: enugutech,
        iconBg: "#383E56",
        date: "October 2022 - April 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Chibuife proved me wrong.",
        name: "Favour Max-Oti",
        designation: "Team Lead",
        company: "ESTHUB",
        portifolio: "https://www.favourmax-oti.com/",
        image: "https://avatars.githubusercontent.com/u/29720486?v=4",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Chibuife does.",
        name: "anonymous",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Chibuife optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "anonymous",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Comfy Slot",
        description:
            "Web application that enables customers to browse and purchase items, make payments, and track their orders.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "laravel",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: comfySlot,
        source_code_link: "https://comfy-slot.vercel.app/",
    },
    {
        name: "Governor's Appreciation",
        description:
            "An appreciation project to acknowledge and recognize governor for their contributions, efforts, or achievements.",
        tags: [
            {
                name: "next",
                color: "blue-text-gradient",
            },
            {
                name: "cloudinary",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: governor,
        source_code_link: "https://ifeanyiugwuanyi.vercel.app/",
    },
    {
        name: "Map API",
        description:
            "Uses your device IP to get your info and location on the map",
        tags: [
            {
                name: "JS",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
        ],
        image: map,
        source_code_link: "https://ip-address-chibuife.vercel.app/",
    },
    {
        name: "Git-Hub Users",
        description:
            "Git-hub users app is an application that allows users to search and explore GitHub users and their profiles.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
        ],
        image: mygit,
        source_code_link: "https://git-user-pi.vercel.app/",
    },
    {
        name: "Calculator",
        description:
            "Calculator is a web application that allows users to perform various mathematical calculations online. It is built using web technologies such as HTML, CSS, and JavaScript, and it is designed to be responsive and user-friendly.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: calculator,
        source_code_link: "https://calculator-sandy-tau.vercel.app/",
    },
    {
        name: "Search Country",
        description:
            "Search country web app is a web application that allows users to search for information about countries. It is built using web technologies such as HTML, CSS, and JavaScript, and it is designed to be responsive and user-friendly.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: country,
        source_code_link: "https://countries-site-five.vercel.app/index.html",
    },
    {
        name: "Rock Paper Scissors",
        description:
            "A Rock Paper Scissors web game is a web game that is played on a web browser. It is built using web technologies such as HTML, CSS, and JavaScript.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: game,
        source_code_link: "https://rock-paper-scissors-beta-orpin.vercel.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };