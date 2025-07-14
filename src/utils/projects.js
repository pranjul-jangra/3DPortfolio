import aeris1 from '../assets/aeris1.png'
import aeris2 from '../assets/aeris4.png'
import aeris3 from '../assets/aeris2.png'
import aeris4 from '../assets/aeris3.png'

import sonexa1 from '../assets/sonexa1.png'
import sonexa2 from '../assets/sonexa2.png'
import sonexa3 from '../assets/sonexa3.png'
import sonexa4 from '../assets/sonexa4.png'



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
        stacks: ["React.js", "Tailwind CSS", "Axios", "Headless UI", "Motion", "Node.js", "Express.js", "Mongoose ODM", "Cloudinary", "JWT", "Nodemailer"],
        type: "MERN"
    },
]