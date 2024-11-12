import "../styles/service.css";


export default function Service () {
    return (
        
    <section id="services" className="services-section">
        <div className="services-container">
            <h2 className="services-title">Our Expert Car Services</h2>
            <p className="service-description">
                At <b>"CAR SERVICE"</b>, we understand how important your car is to you. That's why we offer a wide range of services to ensure it runs smoothly and safely. Here are some of the top services we provide:
            </p>
            <div className="service-list">
                <div className="service-item">
                    <h3>Oil Change & Filter Replacement</h3>
                    <p>Regular oil changes are essential for maintaining your engine's performance. Our oil change service includes a full oil flush, new oil filter, and top-quality motor oil to keep your engine running at its best.</p>
                </div>
                <div className="service-item">
                    <h3>Tire Rotation & Replacement</h3>
                    <p>Worn-out tires can affect your car's performance and safety. We offer tire rotation services to extend the life of your tires and also provide tire replacement for any tire that needs to be changed for better traction and safety.</p>
                </div>
                <div className="service-item">
                    <h3>Brake Inspection & Repair</h3>
                    <p>Your brakes are one of the most important safety features of your vehicle. Our certified technicians will inspect your brake pads, rotors, and other components, ensuring they're in optimal working condition.</p>
                </div>
                <div className="service-item">
                    <h3>Engine Diagnostics</h3>
                    <p>If your check engine light comes on, don't ignore it! We use advanced diagnostic tools to identify and fix engine issues, from minor sensor problems to more complex engine repairs, ensuring your car runs smoothly.</p>
                </div>
                <div className="service-item">
                    <h3>Battery Testing & Replacement</h3>
                    <p>Don't get stuck with a dead battery. We provide battery testing and replacement to ensure your car starts reliably every time. Our technicians will check battery life and replace it with a high-quality option when needed.</p>
                </div>
                <div className="service-item">
                    <h3>AC & Heater Service</h3>
                    <p>Stay comfortable in any season with our comprehensive air conditioning and heater services. We inspect and repair your vehicle's HVAC system, ensuring you stay cool in the summer and warm in the winter.</p>
                </div>
            </div>
        </div>
    </section>
    )
}