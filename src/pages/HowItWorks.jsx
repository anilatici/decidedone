const HowItWorks = () => {
    return (
        <main className="how-it-works container">
            <section className="science-hero reveal">
                <label className="mono uppercase">The Process</label>
                <h1>
                    From chaos to<br />
                    <span>one clear step.</span>
                </h1>
                <p>Decided isn't a chatbot. It's an engine designed to reduce the surface area of your choices until only the right one remains.</p>
            </section>

            <section className="timeline">
                {/* Step 1 */}
                <div className="step-row reveal">
                    <div className="step-visual">
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <div className="ui-element" style={{ marginTop: '40px' }}>
                                    <div className="ui-title" style={{ width: '80%' }}></div>
                                    <div className="ui-body"></div>
                                </div>
                                <div className="ui-btn" style={{ background: 'var(--border)' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="step-content">
                        <span className="step-label mono">STEP 01</span>
                        <h3>DUMP THE LOAD</h3>
                        <p>Tell the app what's on your mind. "What should I eat for dinner?", "What's my next task?", "Should I work out now?". No need to be formal — the AI handles the ambiguity.</p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="step-row reverse reveal">
                    <div className="step-visual">
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <div className="ui-element" style={{ borderColor: 'var(--accent)' }}>
                                    <div className="ui-title"></div>
                                </div>
                                <div className="ui-element">
                                    <div className="ui-title"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step-content">
                        <span className="step-label mono">STEP 02</span>
                        <h3>RAPID FILTERING</h3>
                        <p>The system asks 2–3 targeted questions to understand your current context. Energy level? Time available? Location? These are the same variables your brain usually struggles to weigh manually.</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="step-row reveal">
                    <div className="step-visual">
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <div className="ui-btn" style={{ marginTop: 'auto', transform: 'scale(1.1)', boxShadow: '0 0 30px var(--accent-glow)' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="step-content">
                        <span className="step-label mono">STEP 03</span>
                        <h3>THE SINGLE ANSWER</h3>
                        <p>No list. No options. No "maybe." Decided provides exactly one recommendation based on your profile and current context. The decision is made.</p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="step-row reverse reveal">
                    <div className="step-visual">
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <div className="ui-element" style={{ background: 'var(--accent)', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ color: '#000', fontSize: '10px', fontWeight: 'bold' }}>FIRST STEP: OPEN LAPTOP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step-content">
                        <span className="step-label mono">STEP 04</span>
                        <h3>IMMEDIATE ACTION</h3>
                        <p>Every decision comes with a specific, small "First Step." We don't just tell you what to do — we tell you how to start. Momentum is the antidote to fatigue.</p>
                    </div>
                </div>
            </section>

            {/* Autopilot Section */}
            <section className="autopilot-section">
                <div className="section-header">
                    <p className="label mono reveal">THE AUTOPILOT FLOW</p>
                    <h2 className="reveal">Let the app run your day.<br />You just run yours.</h2>
                    <p className="section-intro reveal">For the most disciplined users, Autopilot takes decision reduction to the extreme. Feed it your tasks, and it serves them back to you one-by-one, when you're most ready for them.</p>
                </div>

                <div className="comparison-container reveal">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Scenario</th>
                                <th>Standard Brain</th>
                                <th>Autopilot Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>9:00 AM Start</td>
                                <td>Stares at 14-item to-do list.</td>
                                <td>"First task: Project Alpha. Go."</td>
                            </tr>
                            <tr>
                                <td>Energy Slump</td>
                                <td>Scrolls social media for 20 mins.</td>
                                <td>"Drink water. 5-min walk. Next."</td>
                            </tr>
                            <tr>
                                <td>Lunch Choice</td>
                                <td>Browses UberEats for 15 mins.</td>
                                <td>"Chicken Salad. Order now."</td>
                            </tr>
                            <tr>
                                <td>Unexpected Delay</td>
                                <td>Frustration. Plan falls apart.</td>
                                <td>Recalculating... "New plan: Item B."</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA */}
            <section className="download-cta reveal" style={{ marginTop: '120px' }}>
                <h2 className="bebas">READY FOR AUTOPILOT?</h2>
                <p>The first decision is yours: Download and start doing.</p>
                <div className="btn-group">
                    <a
                        href="https://apps.apple.com/au/app/decided-ai-decision-maker/id6760539321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-accent"
                    >
                        Get Decided Now
                    </a>
                </div>
            </section>
        </main>
    );
};

export default HowItWorks;
