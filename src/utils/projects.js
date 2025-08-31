import aeris1 from '../assets/aeris1.png'
import aeris2 from '../assets/aeris4.png'
import aeris3 from '../assets/aeris2.png'
import aeris4 from '../assets/aeris3.png'

import sonexa1 from '../assets/sonexa1.png'
import sonexa2 from '../assets/sonexa2.png'
import sonexa3 from '../assets/sonexa3.png'
import sonexa4 from '../assets/sonexa4.png'

import expensely1 from '../assets/expensely1.png';
import expensely2 from '../assets/expensely2.png';
import expensely3 from '../assets/expensely3.png';
import expensely4 from '../assets/expensely4.png';

import yovo1 from '../assets/yovo1.png';
import yovo2 from '../assets/yovo2.png';
import yovo3 from '../assets/yovo3.png';
import yovo4 from '../assets/yovo4.png';
import yovo5 from '../assets/yovo5.png';



export const projects = [
    {
        title: "Aeris - Your weather companion",
        description: "Designed for clarity and precision, Aeris helps you stay ahead of the weather with smart location services and accurate multi-source forecasts.",
        liveLink: "https://aeris-lemon.vercel.app",
        codeLink: "https://github.com/pranjul-jangra/Aeris",
        images: [aeris1, aeris2, aeris3, aeris4],
        stacks: ["React.js", "Redux", "React router", "Tailwind CSS", "Axios", "Recharts", "Leaflet"],
        type: "Frontend"
    },
    {
        title: "Sonexa — Your Sonic Universe",
        description: "Sonexa delivers music with impact — featuring smart playlists, category filters, user-based grouping, and a beautiful UI built for all devices.",
        liveLink: "https://sonexa-chi.vercel.app/home",
        codeLink: "https://github.com/pranjul-jangra/Sonexa",
        images: [sonexa1, sonexa2, sonexa3, sonexa4],
        stacks: ["React.js", "Redux", "Tailwind CSS", "Axios", "Headless UI", "Motion", "Express.js", "Mongoose ODM", "Cloudinary", "JWT", "Nodemailer"],
        type: "MERN"
    },
    {
        title: "Expensely — Smarter Money Management",
        description: "Track, analyze, and manage your finances effortlessly. Expensely brings filtering, real-time insights, and an intuitive UI to help you take control of your spending.",
        liveLink: "https://expensely-blue.vercel.app",
        codeLink: "https://github.com/pranjul-jangra/Expensely",
        images: [expensely1, expensely2, expensely3, expensely4],
        stacks: ["React.js", "Redux", "Tailwind CSS", "Axios", "Chart.js", "Motion", "Lenis", "Express.js", "Mongoose ODM", "Cloudinary", "JWT", "Nodemailer", "Zod"],
        type: "MERN"
    },
    {
        title: "Yovo — Social Media Website",
        description: "A full-stack social media platform where users can connect, share content, and communicate in real-time. Yovo includes media posting, likes, comments, shares, follows, messaging, profile management, and an explore page — all with a modern responsive UI.",
        liveLink: "https://yovo.vercel.app/",
        codeLink: "https://github.com/pranjul-jangra/yovo",
        images: [yovo1, yovo2, yovo3, yovo4, yovo5],
        stacks: [
            "React.js", "Zustand", "Tailwind CSS", "Axios", "Socket.io",
            "Motion", "Lenis", "Sonner", "React Router", "Node.js", "Express.js", "Mongoose ODM",
            "Cloudinary", "Multer", "JWT", "Bcrypt", "Nodemailer",
            "UA-Parser", "Express-Rate-Limit"
        ],
        type: "MERN"
    },
]