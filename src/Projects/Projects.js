const projectArray = [
    {
        title: 'GSAP Artist 🎨',
        description: "An engaging, fully responsive animation website built using GSAP, Next.js, etc. Every interaction, transition, and detail was crafted to bring the design to life!",
        techStack: ['Next.js', 'GSAP', 'TailwindCSS'],
        codeLink: 'https://github.com/prajilk/gsap-artist',
        demoLink: 'https://gsap-artist.vercel.app',
        imgPath: 'gsap-artist.webp',
        scrollable: false
    },
    {
        title: 'WorkLoop 💼',
        description: "A MERN stack platform for job seekers and freelancers to find, post jobs, and connect. Features include chat and notifications for seamless communication.",
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Framer motion', 'TailwindCSS'],
        codeLink: 'https://github.com/prajilk?tab=repositories',
        demoLink: 'https://workloop.vercel.app',
        imgPath: 'workloop.webp',
        scrollable: true
    },
    {
        title: 'Linear Website Clone ⚫',
        description: "A stunning landing page design inspired by Linear! Developed using Next.js and Tailwind CSS, this sleek interface captures the essence of Linear's modern aesthetic.",
        techStack: ['NextJS', 'Typescript', 'Framer motion', 'TailwindCSS'],
        codeLink: 'https://github.com/prajilk/linear-clone',
        demoLink: 'https://linear-clone-v1.vercel.app',
        imgPath: 'linear-clone.webp',
        scrollable: true
    },
    {
        title: 'Diagram Website Clone ⚫',
        description: "An exact replica of the Diagram website using Next.js and Tailwind CSS. Enjoy the same sleek design and user-friendly features in this clone. Explore the demo to see it in action!",
        techStack: ['NextJS', 'Typescript', 'Framer motion', 'TailwindCSS'],
        codeLink: 'https://github.com/prajilk/diagram-clone',
        demoLink: 'https://diagram-clone.vercel.app',
        imgPath: 'diagram-clone.webp',
        scrollable: true
    },
    {
        title: 'IRCTC Redesign 🚇',
        description: "The IRCTC Redesign Landing Page is a modern interpretation of the IRCTC website's landing page. Developed with NextJS based on design inspirations from UX designer Alok's Figma prototypes.",
        techStack: ['NextJS', 'Typescript', 'TailwindCSS'],
        codeLink: 'https://github.com/prajilk/irctc-redesign',
        demoLink: 'https://irctc-redesign.vercel.app',
        imgPath: 'irctc-redesign.webp',
        scrollable: true
    },
    {
        title: 'GadgeXhub 🛒',
        description: 'I create eCommerce web app using Next.js, powered by PostgreSQL for robust data management. Seamlessly integrated with Razorpay for secure payments, the apps come with a user-friendly admin dashboard for full control. Fast, reliable, and tailored to your business needs.',
        techStack: ['NextJS', 'Typescript', 'PostgreSQL', 'RazorPay', 'TailwindCSS'],
        codeLink: 'https://github.com/prajilk/gadgexhub-nextjs',
        demoLink: 'https://gadgexhub.vercel.app',
        imgPath: 'gadgexhub.webp',
        scrollable: true
    },
    {
        title: 'GadgeXhub Admin Dashboard 🛒',
        description: 'The GadgexHub Admin Dashboard Web App is a purpose-built eCommerce management solution, developed with Next.js and powered by PostgreSQL. It offers a fast, reliable interface for product management and order tracking.',
        techStack: ['NextJS', 'Typescript', 'PostgreSQL', 'ReCharts', 'TailwindCSS'],
        codeLink: 'https://github.com/prajilk/admin.gadgexhub',
        demoLink: 'https://admin-gadgexhub.vercel.app',
        imgPath: 'admin-gadgexhub.webp',
        scrollable: true
    },
    {
        title: 'Gaming Space 🎮',
        description: "I'm thrilled to share my latest project - the React version of this amazing Game Live Streaming Platform design by Rina Grim on Dribbble.",
        techStack: ['ReactJS', 'Typescript', 'TailwindCSS'],
        codeLink: 'https://github.com/prajilk/gaming-space',
        demoLink: 'https://gaming-space-react.vercel.app/',
        imgPath: 'gaming-space.webp',
        scrollable: false
    },
    {
        title: 'install-tailwindcss 📥',
        description: 'Picture a world without the need for copying commands, configuring files, or manually add utility classes to your stylesheets. "install-tailwindcss" makes this a reality. This NPM package automates the process, saving you time and letting you focus on creating exceptional web experiences.',
        techStack: ['Javascript', 'NPM', 'TailwindCSS'],
        codeLink: 'https://github.com/prajilk/install-tailwindcss',
        demoLink: 'https://www.npmjs.com/package/install-tailwindcss',
        imgPath: 'install-tailwind.webp',
        scrollable: false
    },
    {
        title: 'CloudPix 🖼️',
        description: "This web app empowers users to store and manage large image collections effortlessly. With the Tus protocol, Express, and Node.js, uploading large image files becomes efficient, ensuring a seamless experience. Each image gets a unique link, enabling precise sharing for users.",
        techStack: ['ReactJS', 'Tailwind CSS', 'Uppy', 'Tus', 'NodeJS', 'ExpressJS', 'Firebase', 'MongoDB'],
        codeLink: 'https://github.com/prajilk?tab=repositories',
        demoLink: 'https://cloudpix.vercel.app',
        imgPath: 'cloudpix.webp',
        scrollable: false
    },
    {
        title: 'Formease 📄',
        description: "It's a web application that offers a free API service specifically designed for static web developers.The platform provides a convenient and secure way to manage and store form details by assigning a unique URL for form actions.With this service, developers can focus on front-end development without the need to worry about setting up a backend or managing databases.",
        techStack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Material UI'],
        codeLink: 'https://github.com/prajilk?tab=repositories',
        demoLink: 'https://formease.vercel.app',
        imgPath: 'formease.webp',
        scrollable: true
    },
    {
        title: 'mMessenger 💬',
        description: 'This project demonstrates my proficiency in developing a responsive chat app using ReactJS, MongoDB, ExpressJS, NodeJS, and socket.io. It showcases my skills in data storage, server-side requests, and real-time communication.',
        techStack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Socket.io', 'Bootstrap'],
        codeLink: 'https://github.com/prajilk?tab=repositories',
        demoLink: 'https://mern-mmessenger.onrender.com',
        imgPath: 'mMessenger.webp',
        scrollable: false
    }
]

export default projectArray;