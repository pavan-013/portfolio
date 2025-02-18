import "../styles/Contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef(null); 
    const [status, setStatus] = useState(""); 

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current) {
            console.error("Form reference is null!");
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus("✅ Message sent successfully!");
            
            setTimeout(() => {
                console.log("Resetting form...");
                form.current.reset(); // Ensure form resets after success
            }, 100);
        })
        .catch((error) => {
            console.error("❌ Error sending message:", error);
            setStatus("❌ Error sending message. Try again.");
        });
    };

    return (
        <section className="contact">
            <div className="contacth">
                <span>Contact</span>
            </div>
            <div className="form">
                <div className="form-fields">
                    <p>Hey you, I am very much interested in speaking with you, Feel free to contact me</p>
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <input type="text" placeholder="Your Name" name="name" required />
                        <br />
                        <input type="email" placeholder="Your Email" name="email" required />
                        <br />
                        <input type="text" placeholder="Subject" name="subject" required />
                        <br />
                        <textarea name="message" cols={40} rows={10} placeholder="Message" required></textarea>
                        <br />
                        <button type="submit">Send Message</button>
                    </form>
                    {status && <p className="status-message">{status}</p>}
                </div>
            </div>
            <div className="copy">
                <span> &copy;Designed by pavankumar chikoti</span>
            </div>
        </section>
    );
};

export default Contact;
