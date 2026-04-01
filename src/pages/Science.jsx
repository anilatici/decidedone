import { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Science = () => {
    const [activeCard, setActiveCard] = useState(0);

    const researchData = [
        {
            title: "The Parole Board Study",
            source: "Danziger, Levav & Avnaim-Pesso — PNAS, 2011",
            summary: "In a study of 1,112 consecutive parole hearings by 8 experienced Israeli judges over 50 days, researchers found that the likelihood of a favorable ruling started at ~65% and declined to near 0% by the end of each decision session — resetting fully after each break.",
            expanded: (
                <div className="expanded-inner">
                    <p>The researchers followed eight judges in Israel as they ruled on over 1,000 applications for parole. The judges' decisions were tracked throughout the day. At the start of the day, the chance of a prisoner being granted parole was about 65%. As the day wore on and the judges became more tired from making decisions, the chance of parole being granted dropped to nearly 0%.</p>
                    <div style={{ height: '300px', margin: '20px 0' }}>
                        <Bar
                            data={{
                                labels: ["1st case", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th+"],
                                datasets: [{
                                    label: 'Favorable Ruling Rate',
                                    data: [65, 58, 48, 38, 25, 15, 7, 3],
                                    backgroundColor: '#C9F231',
                                    borderRadius: 4,
                                }]
                            }}
                            options={{ maintainAspectRatio: false }}
                        />
                    </div>
                    <p>After a lunch break, the parole rate jumped back up to 65% before declining again. This indicates that the mental effort of making and justifying decisions led to a measurable decline in decision quality and a tendency to choose the "default" (denial) as fatigue set in.</p>
                </div>
            )
        },
        {
            title: "The Jam Paradox (Choice Overload)",
            source: "Iyengar & Lepper — Columbia University, 2000",
            summary: "When shoppers at an upscale food market were shown 24 varieties of jam, only 3% made a purchase. When shown just 6 varieties, 30% bought. More options produced 10× fewer decisions.",
            expanded: (
                <div className="expanded-inner">
                    <h4>The Paradox of Choice</h4>
                    <p>Standard economic theory suggests that more choices should be better for consumers. However, this study showed that while a larger display attracted more attention, it also led to significantly lower conversion rates. The mental effort of comparing 24 jams created "choice paralysis," leading customers to walk away without making any decision at all.</p>
                    <p>In our digital lives, this effect is magnified by thousands of options on streaming platforms, delivery menus, and email inboxes. Decided solves this by reducing choice, which is the problem, not the solution.</p>
                </div>
            )
        },
        {
            title: "Food Decisions (You Won't Believe This Number)",
            source: "Wansink & Sobal — Cornell University, 2007",
            summary: "Cornell researchers found that the average person makes approximately 226.7 food-related decisions per day — most of them below conscious awareness. This doesn't include work tasks or communication.",
            expanded: (
                <div className="expanded-inner">
                    <h4>Micro-decisions, Macro-drain</h4>
                    <p>Most of the 35,000 decisions we make each day are invisible. "Should I have another sip of coffee?", "Do I need more salt?", "Should I check my phone now?". Each one of these, although trivial, consumes a tiny amount of the same "cognitive fuel" as making an important business decision.</p>
                    <p>By the time most people face their most important tasks of the day, they have already burned through a significant portion of their daily decision budget on unconscious micro-decisions.</p>
                </div>
            )
        },
        {
            title: "Ego Depletion & Procrastination",
            source: "Vohs, Baumeister et al., 2008 | Sjastad & Baumeister",
            summary: "Research by Vohs et al. found that making decisions was directly associated with increased procrastination tendencies. A fatigued brain avoids choosing — which means tasks pile up.",
            expanded: (
                <div className="expanded-inner">
                    <h4>The Neurobiology of Fatigue</h4>
                    <p>The prefrontal cortex, the part of the brain responsible for executive function and decision-making, has a limited capacity. As it becomes depleted (a state known as "ego depletion"), the brain naturally seeks the path of least resistance. This is often mistake for laziness, but it's actually biological resource management.</p>
                    <p>Decided acts as a "second brain" that offloads these decisions to an external system, preserving your prefrontal cortex's fuel for the most impactful work of your life.</p>
                </div>
            )
        }
    ];

    return (
        <main className="science container">
            <section className="science-hero reveal">
                <label className="mono uppercase">Peer-Reviewed. Real-World. Alarming.</label>
                <h1>
                    Decision fatigue isn't<br />
                    <span>just a buzzword.</span><br />
                    It's what's draining you.
                </h1>
                <p>A growing body of research from psychology, behavioral economics, and neuroscience shows that making choices — even trivial ones — consumes real cognitive resources. Here's what the science says.</p>
            </section>

            <section className="research-grid">
                {researchData.map((card, index) => (
                    <div
                        key={index}
                        className={`research-card reveal ${activeCard === index ? 'active' : ''}`}
                        onClick={() => setActiveCard(activeCard === index ? -1 : index)}
                    >
                        <div className="research-header">
                            <span className="source-tag mono">{card.source}</span>
                            <h3>{card.title}</h3>
                        </div>
                        {!activeCard === index && <p className="summary">{card.summary}</p>}
                        <div className="research-expanded">
                            {card.expanded}
                        </div>
                    </div>
                ))}
            </section>

            <section className="famous-section">
                <div className="section-header">
                    <p className="label mono reveal">THE OPTIMIZERS</p>
                    <h2 className="reveal">The world's sharpest minds solved this the hard way.<br />You don't have to.</h2>
                </div>

                <div className="famous-grid">
                    <div className="famous-card reveal">
                        <div className="famous-header">
                            <div className="famous-avatar">B</div>
                            <div className="famous-info"><h4>Barack Obama</h4></div>
                        </div>
                        <blockquote>"I'm trying to pare down decisions. I don't want to make decisions about what I'm eating or wearing. Because I have too many other decisions to make."</blockquote>
                    </div>
                    <div className="famous-card reveal">
                        <div className="famous-header">
                            <div className="famous-avatar">S</div>
                            <div className="famous-info"><h4>Steve Jobs</h4></div>
                        </div>
                        <blockquote>His famous black turtleneck + jeans uniform was designed to eliminate one category of decisions entirely, freeing cognitive bandwidth for product decisions.</blockquote>
                    </div>
                    <div className="famous-card reveal">
                        <div className="famous-header">
                            <div className="famous-avatar">M</div>
                            <div className="famous-info"><h4>Mark Zuckerberg</h4></div>
                        </div>
                        <blockquote>"I really want to clear my life to make it so that I have to make as few decisions as possible about anything except how to best serve this community."</blockquote>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="download-cta reveal" style={{ marginTop: '120px' }}>
                <h2 className="bebas">LET AI CARRY THE COGNITIVE LOAD.</h2>
                <p>Decided does for your daily choices what these leaders did manually — removes the small decisions so you can show up fully for the big ones.</p>
                <div className="btn-group">
                    <a
                        href="https://apps.apple.com/au/app/decided-ai-decision-maker/id6760539321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-accent"
                    >
                        Download Decided →
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Science;
