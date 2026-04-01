

const About = () => {

    return (
        <main className="about container">
            <section className="about-hero reveal">
                <label className="mono uppercase">Our Mission</label>
                <h1>
                    Building the antidote to<br />
                    <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>decision fatigue.</span>
                </h1>
            </section>

            <section className="mission-statement reveal">
                <h2>WE BELIEVE CHOICE IS A BURDEN.</h2>
                <p>In an age of infinite options, the most valuable thing we can offer is a single, correct answer. Decided exists to reclaim the mental energy lost to the trivial, so you can spend it on the vital.</p>
            </section>

            <div className="section-header">
                <p className="label mono reveal">CORE PRINCIPLES</p>
                <h2 className="reveal">The philosophy behind the code.</h2>
            </div>

            <section className="values-grid">
                <div className="value-card reveal">
                    <h3>01. One Answer.</h3>
                    <p>We don't give you a list of 5 options. We give you one. If we've done our job correctly, it's the only one you need.</p>
                </div>
                <div className="value-card reveal">
                    <h3>02. Radical Context.</h3>
                    <p>A decision without context is a guess. We weigh your schedule, energy, and history to ensure every recommendation is grounded in reality.</p>
                </div>
                <div className="value-card reveal">
                    <h3>03. Momentum First.</h3>
                    <p>The goal isn't just to decide — it's to do. Every answer comes with a clear, tiny first step to get you moving.</p>
                </div>
                <div className="value-card reveal">
                    <h3>04. Privacy by Design.</h3>
                    <p>Your choices are your own. We learn your patterns to serve you better, but your data never leaves your control.</p>
                </div>
            </section>

            <section className="bibliography reveal">
                <div className="section-header">
                    <p className="label mono">BIBLIOGRAPHY & SOURCES</p>
                    <h2>Research that built Decided.</h2>
                </div>
                <div className="citation-list mono" style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: '2' }}>
                    <p>Danziger, S., Levav, J., & Avnaim-Pesso, L. (2011). Extraneous factors in judicial decisions. PNAS.</p>
                    <p>Iyengar, S. S., & Lepper, M. R. (2000). When choice is demotivating. JPSP.</p>
                    <p>Vohs, K. D., et al. (2008). Making choices impairs subsequent self-control. JPSP.</p>
                    <p>Wansink, B., & Sobal, J. (2007). Mindless Eating: The 200 Daily Food Decisions. Environment and Behavior.</p>
                    <p>Baumeister, R. F., & Tierney, J. (2011). Willpower: Rediscovering the Greatest Human Strength.</p>
                </div>
            </section>

            {/* CTA */}
            <section className="download-cta reveal" style={{ marginTop: '120px' }}>
                <h2 className="bebas">JOIN THE MOVEMENT.</h2>
                <p>Stop choosing. Start living. Decided is free to start.</p>
                <div className="btn-group">
                    <a
                        href="https://apps.apple.com/au/app/decided-ai-decision-maker/id6760539321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-accent"
                    >
                        Download for iOS →
                    </a>
                </div>
            </section>

        </main>
    );
};

export default About;
