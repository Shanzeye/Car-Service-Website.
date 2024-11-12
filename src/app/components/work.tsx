import "../styles/work.css";

export default function Work () {
    return (
        <section className="work-section">
        <h2 className="section-title">Our Work</h2>
        <p className="section-description">Take a look at some of the high-quality services we've provided to our customers. We pride ourselves on delivering excellent results!</p>

        <div className="gallery">
            <div className="gallery-item">
                <img src="https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Car Repair 1"/>
                <div className="overlay">
                    <span>Car Repair - Engine Overhaul</span>
                </div>
            </div>
            <div className="gallery-item">
                <img src="https://images.pexels.com/photos/5572265/pexels-photo-5572265.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Car Repair 2"/>
                <div className="overlay">
                    <span>Car Service - Full Tune-up</span>
                </div>
            </div>
            <div className="gallery-item">
                <img src="https://images.pexels.com/photos/20695251/pexels-photo-20695251/free-photo-of-dashboard-of-acura-tlx-type-s.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Car Repair 3"/>
                <div className="overlay">
                    <span>Transmission Repair</span>
                </div>
            </div>
            <div className="gallery-item">
                <img src="https://images.pexels.com/photos/18845869/pexels-photo-18845869/free-photo-of-wheel-with-brake-caliper.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Car Repair 4"/>
                <div className="overlay">
                    <span>Brake Repair and Maintenance</span>
                </div>
            </div>
            <div className="gallery-item">
                <img src="https://images.pexels.com/photos/28921453/pexels-photo-28921453/free-photo-of-sleek-white-sports-car-in-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Car Repair 5"/>
                <div className="overlay">
                    <span>Suspension Work</span>
                </div>
            </div>
            <div className="gallery-item">
                <img src="https://images.pexels.com/photos/28794445/pexels-photo-28794445/free-photo-of-blue-sports-car-at-night-with-neon-lights.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Car Repair 6"/>
                <div className="overlay">
                    <span>Custom Car Modification</span>
                </div>
            </div>

            <div className="gallery-item">
                <img src="https://images.pexels.com/photos/20710361/pexels-photo-20710361/free-photo-of-a-car-engine.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Car Repair 7"/>
                <div className="overlay">
                    <span>Turbo Car Modification</span>
                </div>
            </div>

            <div className="gallery-item">
                <img src="https://images.pexels.com/photos/244279/pexels-photo-244279.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Car Repair 8"/>
                <div className="overlay">
                    <span>Car Exhaust Pipe Modification</span>
                </div>
            </div>
        </div>
    </section>

    )
}