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
import { Bar, Doughnut, Line } from 'react-chartjs-2';

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

const Home = () => {
  const handleTryWebClick = (event) => {
    event.preventDefault();

    const link = event.currentTarget;
    const href = link.href;

    link.style.transform = 'scale(0.97)';

    window.setTimeout(() => {
      link.style.transform = '';
      window.open(href, '_blank', 'noopener,noreferrer');
    }, 150);
  };

  // Chart 1: Parole Board
  const paroleData = {
    labels: ["1st case", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th+"],
    datasets: [{
      label: 'Favorable Ruling Rate',
      data: [65, 58, 48, 38, 25, 15, 7, 3],
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, '#F87171');
        gradient.addColorStop(0.5, '#FBBF24');
        gradient.addColorStop(1, '#C9F231');
        return gradient;
      },
      borderWidth: 0,
      borderRadius: 4,
    }]
  };

  const paroleOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: '#222220' },
        ticks: { color: '#7A7A72', callback: (value) => value + '%' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#7A7A72' }
      }
    }
  };

  // Chart 2: Daily Decisions
  const decisionsData = {
    labels: ['Food & Eating', 'Work & Tasks', 'Health & Body', 'Social & Communication', 'Time & Schedule', 'Other'],
    datasets: [{
      data: [226, 4800, 3200, 6000, 8000, 12774],
      backgroundColor: ['#C9F231', '#8DB319', '#FBBF24', '#F59E0B', '#7A7A72', '#3A3A36'],
      borderWidth: 0,
    }]
  };

  const decisionsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#7A7A72', padding: 20, font: { size: 10 } }
      }
    },
    cutout: '70%',
  };

  // Chart 3: Energy Curve
  const energyData = {
    labels: ["6am", "8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm"],
    datasets: [
      {
        label: 'Without help',
        data: [90, 85, 78, 65, 52, 42, 35, 30],
        borderColor: '#F87171',
        backgroundColor: 'rgba(248, 113, 113, 0.08)',
        fill: true,
        borderDash: [5, 5],
        tension: 0.4
      },
      {
        label: 'With Decided',
        data: [90, 88, 86, 84, 82, 80, 79, 78],
        borderColor: '#C9F231',
        backgroundColor: 'rgba(201, 242, 49, 0.08)',
        fill: true,
        borderWidth: 3,
        tension: 0.4
      }
    ]
  };

  const energyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#7A7A72' }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: '#222220' },
        ticks: { color: '#7A7A72' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#7A7A72' }
      }
    }
  };

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="watermark bebas">35,000</div>
        <div className="container hero-content">
          <p className="eyebrow mono reveal">35,000 DECISIONS. ONE DAY. YOUR BRAIN IS TIRED.</p>
          <h1 className="hero-headline reveal">Stop<br /><span>deciding.</span><br />Start<br />doing.</h1>
          <p className="hero-subheadline reveal">Decided is an AI assistant that turns everyday decisions into instant, clear actions — so your mental energy goes where it matters.</p>
          <div className="hero-cta reveal">
            <button className="btn-pill btn-accent">Download for iOS</button>
            <button className="btn-pill btn-dark">Download for Android</button>
          </div>
          <div className="hero-stats reveal">
            <div className="stat-item mono">⚡ &lt; 30 sec avg. decision time</div>
            <div className="stat-item mono">🎯 1 answer. Always.</div>
            <div className="stat-item mono">🧠 Learns your preferences</div>
          </div>
        </div>
        <div className="scroll-indicator"><span className="chevron"></span></div>
      </section>

      {/* Section 0.5 — Try on Web */}
      <section className="try-web" id="try-web">
        <div className="container">
          <div className="try-web-grid">
            <div className="try-web-copy reveal">
              <p className="try-web-eyebrow mono">NO DOWNLOAD REQUIRED</p>
              {/*
              Variant B:
              <p className="try-web-eyebrow mono">AVAILABLE IN YOUR BROWSER</p>
              */}

              <h2 className="try-web-headline">
                Try Decided
                <span>right now.</span>
              </h2>
              {/*
              Variant B:
              <h2 className="try-web-headline">
                Your first decision
                <span>is 30 seconds away.</span>
              </h2>
              */}

              <p className="try-web-body">
                The full Decided experience — instant decisions, Autopilot Day,
                and preference learning — available in your browser. No app
                store. No install. Just open and decide.
              </p>
              {/*
              Variant B:
              <p className="try-web-body">
                The full Decided experience lives at app.decided.one. Open it
                now and make your first decision for free.
              </p>
              */}

              <div className="try-web-actions">
                <a
                  href="https://app.decided.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="try-web-cta"
                  onClick={handleTryWebClick}
                >
                  Open Web App <span aria-hidden="true">→</span>
                </a>
                {/*
                Variant B:
                <a
                  href="https://app.decided.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="try-web-cta"
                  onClick={handleTryWebClick}
                >
                  Start Deciding <span aria-hidden="true">→</span>
                </a>
                */}

                <p className="try-web-sublabel">
                  Free to start · Works on any browser · Syncs with mobile
                </p>
              </div>
            </div>

            <div className="try-web-visual-wrap reveal" aria-hidden="true">
              <div className="try-web-browser">
                <div className="try-web-browser-chrome">
                  <div className="try-web-browser-dots">
                    <span></span>
                    <span className="is-large"></span>
                    <span></span>
                  </div>
                  <div className="try-web-url mono">app.decided.one</div>
                  <div className="try-web-bolt">⚡</div>
                </div>

                <div className="try-web-browser-body">
                  <div className="try-web-app-bar bebas">DECIDED.</div>
                  <div className="try-web-preview-card">
                    <p className="try-web-preview-kicker mono">⚡ DECIDED</p>
                    <h3 className="bebas">HIT THE GYM</h3>
                    <div className="try-web-preview-divider"></div>
                    <div className="try-web-placeholder-lines">
                      <span></span>
                      <span></span>
                    </div>
                    <p className="try-web-preview-next mono">YOUR NEXT STEP →</p>
                    <p className="try-web-preview-action mono">
                      Pack your bag and leave by 6:10 PM.
                    </p>
                    <div className="try-web-progress-block">
                      <div className="try-web-progress-track">
                        <span></span>
                      </div>
                      <p className="try-web-progress-label mono">87% match</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="problem" id="problem">
        <div className="container">
          <div className="section-header">
            <p className="label mono reveal">THE PROBLEM</p>
            <h2 className="reveal">Your brain makes 35,000 decisions every day.<br />It was never built for that.</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-card reveal">
              <div className="card-icon">⋮⋮⋮</div>
              <h3>Choice Overload</h3>
              <p>More options don't help — they paralyze.</p>
              <cite className="mono">(Iyengar & Lepper, 2000)</cite>
            </div>
            <div className="problem-card reveal">
              <div className="card-icon">🔋</div>
              <h3>Cognitive Drain</h3>
              <p>Decision quality drops as the day goes on.</p>
              <cite className="mono">(Danziger et al., 2011)</cite>
            </div>
            <div className="problem-card reveal">
              <div className="card-icon">🔄</div>
              <h3>Paralysis</h3>
              <p>Fatigue leads to avoidance, not action.</p>
              <cite className="mono">(Vohs et al., 2008)</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="data-section">
        <div className="container">
          <div className="section-header">
            <p className="label mono reveal">DECISION FATIGUE BY THE NUMBERS</p>
            <h2 className="reveal">The data doesn't lie.<br />Deciding is exhausting.</h2>
          </div>

          <div className="chart-row reveal">
            <div className="chart-content">
              <h3 className="stat-callout bebas">65% → ~0%</h3>
              <p className="stat-label">Drop in favorable judicial rulings across a single session</p>
              <cite className="chart-source mono">Danziger, Levav & Avnaim-Pesso (2011)</cite>
              <p className="insight-line">"Same crime. Same judge. Different outcome — just because of when the case was heard."</p>
            </div>
            <div className="chart-container-inner"><div style={{ height: '300px' }}><Bar data={paroleData} options={paroleOptions} /></div></div>
          </div>

          <div className="chart-row reveal">
            <div className="chart-container-inner">
              <div style={{ height: '350px', position: 'relative' }}>
                <Doughnut data={decisionsData} options={decisionsOptions} />
                <div style={{ position: 'absolute', top: '44%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none' }}>
                  <div className="bebas" style={{ fontSize: '32px', color: 'var(--accent)' }}>35,000</div>
                  <div className="mono" style={{ fontSize: '10px', color: 'var(--text-dim)' }}>DECISIONS / DAY</div>
                </div>
              </div>
            </div>
            <div className="chart-content">
              <h3 className="stat-callout bebas">35,000</h3>
              <p className="stat-label">Estimated decisions an average adult makes per day</p>
              <cite className="chart-source mono">Sollisch, 2016 | Wansink & Sobal, 2007</cite>
              <p className="insight-line">"You make more food decisions before lunch than most people make important choices in a week."</p>
            </div>
          </div>

          <div className="chart-row reveal">
            <div className="chart-content">
              <h3 className="stat-callout bebas">↓ 40%</h3>
              <p className="stat-label">Estimated decline in decision quality by end of a typical workday</p>
              <cite className="chart-source mono">Global Council for Behavioral Science, 2025</cite>
              <p className="insight-line">"The gap between a sharp mind and a depleted one starts earlier than you think."</p>
            </div>
            <div className="chart-container-inner"><div style={{ height: '300px' }}><Line data={energyData} options={energyOptions} /></div></div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="proof-strip reveal">
        <div className="container proof-inner">
          <div className="proof-item"><span className="proof-val bebas">1,112</span><span className="proof-label mono">rulings analyzed</span></div>
          <div className="proof-item"><span className="proof-val bebas">226.7</span><span className="proof-label mono">food decisions</span></div>
          <div className="proof-item"><span className="proof-val bebas">10×</span><span className="proof-label mono">more purchases</span></div>
          <div className="proof-item"><span className="proof-val bebas">65% → ~0%</span><span className="proof-label mono">quality drop</span></div>
        </div>
      </section>

      {/* Section 1.5 — What Decided Does */}
      <section className="solution" id="solution">
        <div className="container">
          <div className="section-header">
            <p className="label mono reveal">THE SOLUTION</p>
            <h2 className="reveal">One question in. One answer out. Done.</h2>
          </div>

          {/* Feature 1 */}
          <div className="feature-row reveal">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ui-element"><div className="ui-title"></div><div className="ui-body"></div></div>
                <div className="ui-element"><div className="ui-title"></div><div className="ui-body"></div></div>
                <div className="ui-btn"></div>
              </div>
            </div>
            <div className="feature-content">
              <span className="feature-tag mono">⚡ Avg. decision time: 23 seconds</span>
              <h3>ASK. ANSWER. ACT.</h3>
              <p>Type what you're stuck on. Answer 2–3 quick context questions. Get one clear recommendation with a specific first step — in under 30 seconds.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-row reverse reveal">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ui-element" style={{ height: '80%' }}><div className="ui-title"></div><div className="ui-body" style={{ height: '20px' }}></div></div>
              </div>
            </div>
            <div className="feature-content">
              <span className="feature-tag mono">🤖 Powered by schedule + energy level</span>
              <h3>YOUR DAY. ALREADY DECIDED.</h3>
              <p>Tell Decided your tasks, energy level, and when you want to finish. It builds your entire day — then shows you one thing at a time.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-row reveal">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ui-element" style={{ flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--border)' }}></div>
                </div>
              </div>
            </div>
            <div className="feature-content">
              <span className="feature-tag mono">🧠 Personalization that doesn't overfit</span>
              <h3>GETS SMARTER EVERY DAY.</h3>
              <p>After a few decisions, Decided starts to understand your patterns — how you prefer to work, rest, eat, and move. Future recommendations feel like a friend who knows you well.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1.7 — CTA */}
      <section className="download-cta reveal">
        <div className="container">
          <h2 className="bebas">STOP OVERTHINKING.</h2>
          <p>Download Decided. Make your first decision in 30 seconds.</p>
          <div className="btn-group">
            <button className="btn-pill">↓ App Store</button>
            <button className="btn-pill">↓ Google Play</button>
          </div>
          <p style={{ marginTop: '32px', fontSize: '13px', opacity: 0.6 }}>Free to start. No account required.</p>
        </div>
      </section>

      {/* Section 1.8 — Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <p className="label mono reveal">WHAT PEOPLE ARE SAYING</p>
            <h2 className="reveal">Finally. Someone just told me what to do.</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <p className="testimonial-quote">"I used to spend 20 minutes deciding what to work on next. Now I just ask Decided. It's embarrassingly useful."</p>
              <p className="testimonial-author">— Jamie K., Product Manager</p>
            </div>
            <div className="testimonial-card reveal">
              <p className="testimonial-quote">"The Autopilot Day feature alone is worth it. I haven't opened my task manager since I started using it."</p>
              <p className="testimonial-author">— Marcus T., Freelance Designer</p>
            </div>
            <div className="testimonial-card reveal">
              <p className="testimonial-quote">"I didn't realize how much energy I was burning on tiny decisions until I stopped. This app gave me hours back."</p>
              <p className="testimonial-author">— Priya N., Software Engineer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
