import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const GetInTouch = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
        .sendForm(
            "service_yfb0gav",   // from EmailJS dashboard
            "template_grq3puc",  // from EmailJS dashboard
            formRef.current,
            "exvvRUpLuusp4M_Fp"    // from EmailJS dashboard
        )
        .then(
            (result) => {
            console.log("Success:", result.text);
            alert("✅ Message sent successfully!");
            formRef.current?.reset();
            },
            (error) => {
            console.log("Error:", error.text);
            alert("❌ Failed to send message. Please try again later.");
            }
        );
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-10 left-20 w-40 h-40 shape-circle" />
        <div className="absolute bottom-20 right-20 w-60 h-60 shape-square" />

        <div className="container-modern relative z-10">
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
            >
            <h2 className="text-display text-4xl md:text-6xl text-gradient-primary mb-4">
                Get In Touch
            </h2>
            <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
                Have an idea or a project in mind? Let’s connect and build something
                extraordinary together.
            </p>
            </motion.div>

            {/* Contact Card */}
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-modern max-w-3xl mx-auto"
            >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none"
                    required
                />
                </div>
                <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none"
                required
                />
                <button type="submit" className="btn-primary w-full md:w-auto">
                Send Message
                </button>
            </form>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-8">
                <a
                href="https://github.com/lexmarvin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition"
                >
                <FaGithub />
                </a>
                <a
                href="https://www.linkedin.com/in/lex-gustilo-72153a325/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition"
                >
                <FaLinkedin />
                </a>
                <a
                href="https://www.instagram.com/lex.mrvin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition"
                >
                <FaInstagram />
                </a>
                <a
                href="mailto:lexgustilo6@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition"
                >
                <MdEmail />
                </a>
            </div>
            </motion.div>
        </div>
        </section>
    );
};

export default GetInTouch;

