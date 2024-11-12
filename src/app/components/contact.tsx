import "../styles/contact.css";

export default function Contact () {
    return (
        <div id="Contact">
        <section className="contact-section">
        <div className="contact-container">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-description">Have questions or want to book a service? Fill out the form below, and our team will get back to you as soon as possible.</p>

            <form action="#" method="POST" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="Your Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="cta-button">Send Message</button>
            </form>
        </div>
    </section>
    </div>
    )
}
