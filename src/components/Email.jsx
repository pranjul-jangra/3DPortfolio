import { useRef, useState } from 'react'
import { toast } from 'sonner';
import emailjs from "emailjs-com";
import './components.scss'
import { Send } from 'lucide-react';
import useThemeStyles from '../hooks/useThemeStyles';

export default function Email() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const { inputsBorderColor, grayText } = useThemeStyles();

    const sendEmail = async (e) => {
        setTimeout(() => {}, 2000);
        e.preventDefault();
        const formData = new FormData(form.current);

        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const message = formData.get("message")?.trim();
        if (!name || !email || !message) return toast.error("Please fill in all the fields.");

        try {
            setIsSending(true);

            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            );
            toast.success("Thanks for reaching out! Your message was sent successfully.");
            form.current.reset();

        } catch (error) {
            console.log("Error sending mail:", error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form ref={form} noValidate onSubmit={sendEmail} className="space-y-4 w-full">
            <div>
                <label htmlFor="name" className='text-sm'>Name</label>
                <input id='name' type="text" name="name" required className={`w-full p-2 ${grayText} border-b outline-0 focus-visible:border-teal-700/80 ${inputsBorderColor} transition-colors duration-150`} />
            </div>

            <div>
                <label htmlFor="email" className='text-sm'>Email</label>
                <input id='email' type="email" name="email" required className={`w-full p-2 ${grayText} border-b outline-0 focus-visible:border-teal-700/80 ${inputsBorderColor} transition-colors duration-150`} />
            </div>

            <div>
                <label htmlFor="message" className='text-sm'>Message</label>
                <textarea id='message' name="message" rows="5" required className={`w-full p-2 ${grayText} border-b outline-0 focus-visible:border-teal-700/80 ${inputsBorderColor} transition-colors duration-150`} />
            </div>

            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <button disabled={isSending} type="submit" className="bg-teal-700/80 hover:bg-gradient-to-r hover:from-teal-700/90 hover:to-teal-800 text-white border-0 outline-0 focus:outline focus:outline-teal-700 outline-offset-2 font-semibold w-full rounded-md cursor-pointer transition-colors duration-300">
                {isSending ? <div className='py-2.5'>Sending...</div> : <div className='w-full py-2.5 flex gap-1 items-center justify-center group'><Send className="w-5 h-5 group-hover:-translate-x-0.5 group-hover:rotate-45 transition-all duration-300" /><p className='group-hover:translate-x-1 transition-all duration-300'>Send Message</p></div>}
            </button>

            <div className="flex justify-center mt-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"></div>
            </div>
        </form>
    )
}
