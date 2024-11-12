import "../styles/hero.css";


export default function Hero () {
    return (
    <section className="intro-section">
    <div className="overlay"></div>
    <div className="intro-content">
        <h1 className="intro-title">Keeping You On The Road With Service You Can Trust! </h1>
        <p className="intro-text">At <b>"Car Service"</b>, we offer top-notch car maintenance and repair services. From oil changes to full engine diagnostics, our team of certified experts is here to keep your vehicle in peak condition.</p>
        <a href="#services" className="cta-button">Explore Our Services</a>
    </div>
</section>
    )
}