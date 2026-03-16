import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SUPPORT_EMAIL = 'hello@decided.one';
const CANONICAL_URL = 'https://decided.one/support';
const DESCRIPTION = 'Get help with Decided. Find answers about your account, subscription, billing, and app issues. Contact us at hello@decided.one.';

const EnvelopeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M3.75 6.75h16.5v10.5H3.75zM4.5 7.5l7.5 6 7.5-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm-6 7.5a6 6 0 0 1 12 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CardIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M3.75 6.75h16.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Zm-1.5 3.75h19.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M8.25 2.25h7.5A2.25 2.25 0 0 1 18 4.5v15a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 6 19.5v-15A2.25 2.25 0 0 1 8.25 2.25ZM11 18.75h2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg className={open ? 'open' : ''} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="m6 9 6 6 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const quickLinks = [
  {
    href: '#account',
    label: 'Account & Login',
    subtext: 'Password reset, email change, deleting your account',
    icon: PersonIcon,
  },
  {
    href: '#billing',
    label: 'Billing & Pro',
    subtext: 'Managing your subscription, cancellations, refunds',
    icon: CardIcon,
  },
  {
    href: '#app',
    label: 'App Issues',
    subtext: 'Installation, crashes, sync problems',
    icon: PhoneIcon,
  },
];

const faqGroups = [
  {
    id: 'account',
    label: 'Account & Login',
    items: [
      {
        id: 'reset-password',
        question: 'How do I reset my password?',
        answer: "Tap 'Forgot password?' on the login screen and enter your email address. You'll receive a reset link within a few minutes. Check your spam folder if you don't see it.",
      },
      {
        id: 'change-email',
        question: 'How do I change my email address?',
        answer: "Go to Profile, tap your email address, and enter your new one. You'll need to verify the new address before the change takes effect.",
      },
      {
        id: 'delete-account',
        question: 'How do I delete my account?',
        answer: "Go to Profile, scroll to the bottom, and tap 'Delete Account.' This will permanently remove your account and all your data. Note: deleting your account does not automatically cancel an active subscription. Please cancel your subscription separately before deleting your account.",
      },
      {
        id: 'cant-log-in',
        question: "I can't log in. What should I do?",
        answer: `Try resetting your password first. If you signed up with a magic link (no password), use the 'Email me a login link' option on the login screen. If you're still having trouble, email us at ${SUPPORT_EMAIL} and we'll sort it out.`,
      },
      {
        id: 'multiple-devices',
        question: 'Can I use Decided on multiple devices?',
        answer: 'Yes. Your account, decision history, and preferences sync automatically across iPhone, iPad, and the web app at app.decided.one. Just sign in with the same account.',
      },
    ],
  },
  {
    id: 'billing',
    label: 'Billing & Pro',
    items: [
      {
        id: 'pro-includes',
        question: "What's included in Decided Pro?",
        answer: 'Decided Pro unlocks unlimited decisions per day, full Autopilot Day with unlimited tasks, preference learning (likes and dislikes), and your complete decision history. Available weekly, monthly, or yearly.',
      },
      {
        id: 'cancel-subscription',
        question: 'How do I cancel my subscription?',
        answer: "iOS: Go to Settings > Apple ID > Subscriptions > Decided > Cancel. Android: Open the Play Store > tap your profile > Subscriptions > Decided > Cancel. Web: Go to Profile in the app and tap 'Manage Subscription.' Cancellation takes effect at the end of your current billing period. You keep Pro access until then.",
      },
      {
        id: 'refund',
        question: 'Can I get a refund?',
        answer: `For iOS and Android purchases, refund requests must be made through Apple or Google directly as we do not process those payments. Apple: reportaproblem.apple.com. Google: play.google.com/store/account/subscriptions. For web purchases via Stripe, email ${SUPPORT_EMAIL} within 14 days of your first charge and we will review your request.`,
      },
      {
        id: 'free-trial',
        question: 'How does the free trial work?',
        answer: 'A 7-day free trial is available on the yearly plan for new subscribers. You will not be charged during the trial. Your payment method is charged at the end of the trial unless you cancel before it ends. Only one free trial per account.',
      },
      {
        id: 'charged-no-pro',
        question: 'I was charged but Pro is not active.',
        answer: `Go to Profile and tap 'Restore Purchases.' This re-syncs your subscription status. If the issue persists, email us at ${SUPPORT_EMAIL} with your purchase receipt and we will fix it within 24 hours.`,
      },
      {
        id: 'deleting-app-cancel',
        question: 'Does deleting the app cancel my subscription?',
        answer: 'No. Deleting the app does not cancel your subscription. You must cancel through your device subscription settings (see cancellation instructions above).',
      },
    ],
  },
  {
    id: 'app',
    label: 'App Issues',
    items: [
      {
        id: 'app-crashing',
        question: 'The app keeps crashing. What should I do?',
        answer: `First, make sure you are on the latest version of the app. Go to the App Store or Play Store and check for updates. If the issue continues, try deleting and reinstalling the app. Your account data is saved to the cloud so nothing will be lost. If it still crashes, email ${SUPPORT_EMAIL} with your device model and iOS/Android version.`,
      },
      {
        id: 'syncing',
        question: 'My decisions are not syncing between devices.',
        answer: 'Make sure you are signed in to the same account on both devices. Pull down to refresh on the History screen to force a sync. If the issue continues, sign out and back in on the affected device.',
      },
      {
        id: 'recommendations',
        question: 'The AI is not giving me good recommendations.',
        answer: 'The quality of recommendations improves the more context you give. Try being more specific in your decision input, and answer the clarifying questions as honestly as possible. If you are a Pro user, using the like and dislike buttons trains the AI to match your preferences over time.',
      },
      {
        id: 'free-plan-limit',
        question: 'Why do I only get 5 decisions per day on the free plan?',
        answer: 'The free plan includes 5 decisions per day, which resets at midnight. Upgrade to Decided Pro for unlimited decisions.',
      },
      {
        id: 'android',
        question: 'Is Decided available on Android?',
        answer: 'Yes. Decided is available on both iOS and Android. It is also available as a web app at app.decided.one.',
      },
      {
        id: 'data-disappeared',
        question: 'My data disappeared after reinstalling.',
        answer: 'Your decisions and preferences are saved to your account in the cloud. Sign back in with your existing account and your data will be restored automatically.',
      },
    ],
  },
];

const Support = () => {
  const location = useLocation();
  const hashToItemId = useMemo(
    () =>
      faqGroups.reduce((accumulator, group) => {
        group.items.forEach((item) => {
          accumulator[`#${item.id}`] = item.id;
        });
        return accumulator;
      }, {}),
    []
  );

  const [openItemId, setOpenItemId] = useState('reset-password');

  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') ?? null;
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href') ?? null;

    document.title = 'Support | Decided';

    let descriptionTag = metaDescription;
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', DESCRIPTION);

    let canonicalTag = canonical;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', CANONICAL_URL);

    return () => {
      document.title = previousTitle;

      if (descriptionTag) {
        if (previousDescription === null) {
          descriptionTag.remove();
        } else {
          descriptionTag.setAttribute('content', previousDescription);
        }
      }

      if (canonicalTag) {
        if (previousCanonical === null) {
          canonicalTag.remove();
        } else {
          canonicalTag.setAttribute('href', previousCanonical);
        }
      }
    };
  }, []);

  useEffect(() => {
    const itemFromHash = hashToItemId[location.hash];
    if (itemFromHash) {
      setOpenItemId(itemFromHash);
    }
  }, [hashToItemId, location.hash]);

  return (
    <main className="support-page">
      <section className="support-shell">
        <header className="support-header reveal visible">
          <p className="support-eyebrow mono">SUPPORT</p>
          <h1 className="support-title bebas">How Can We Help?</h1>
          <p className="support-subtitle">
            Find answers below or reach out directly. We&apos;re a small team and we read every
            message.
          </p>
        </header>

        <section className="support-contact-card reveal visible" aria-labelledby="support-email">
          <div className="support-contact-top">
            <div className="support-contact-main">
              <div className="support-contact-icon">
                <EnvelopeIcon />
              </div>
              <h2 className="support-contact-title bebas" id="support-email">
                Email Support
              </h2>
              <a className="support-contact-address" href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
              </a>
              <p className="support-contact-copy">We aim to respond within 24 hours.</p>
            </div>

            <div className="support-response-badge mono">Avg. response: under 24hrs</div>
          </div>

          <a className="support-primary-button" href={`mailto:${SUPPORT_EMAIL}`}>
            Send Us an Email
          </a>
        </section>

        <section className="support-quick-links reveal visible" aria-label="Quick links">
          {quickLinks.map(({ href, label, subtext, icon: Icon }) => (
            <a className="support-link-tile" href={href} key={label}>
              <div className="support-link-icon">
                <Icon />
              </div>
              <p className="support-link-label">{label}</p>
              <p className="support-link-copy">{subtext}</p>
            </a>
          ))}
        </section>

        <section className="support-faq reveal visible" aria-labelledby="support-faq-heading">
          <p className="support-faq-eyebrow mono" id="support-faq-heading">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <div className="support-faq-groups">
            {faqGroups.map((group) => (
              <section className="support-faq-group" id={group.id} key={group.id}>
                <h2 className="support-faq-group-title bebas">{group.label}</h2>

                <div className="support-accordion">
                  {group.items.map((item) => {
                    const isOpen = openItemId === item.id;

                    return (
                      <article className="support-accordion-item" id={item.id} key={item.id}>
                        <button
                          type="button"
                          className="support-accordion-trigger"
                          onClick={() => setOpenItemId(isOpen ? null : item.id)}
                          aria-expanded={isOpen}
                          aria-controls={`${item.id}-panel`}
                        >
                          <span>{item.question}</span>
                          <ChevronIcon open={isOpen} />
                        </button>

                        <div
                          className={`support-accordion-panel ${isOpen ? 'open' : ''}`}
                          id={`${item.id}-panel`}
                        >
                          <div className="support-accordion-answer">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="support-cta reveal visible">
          <h2 className="support-cta-title bebas">Still Need Help?</h2>
          <p className="support-cta-copy">
            We&apos;re a small team and we actually read every message. Describe your issue and
            we&apos;ll get back to you as soon as possible.
          </p>
          <a
            className="support-primary-button support-cta-button"
            href={`mailto:${SUPPORT_EMAIL}?subject=Decided%20Support%20Request`}
          >
            Email {SUPPORT_EMAIL}
          </a>
          <p className="support-cta-meta mono">We aim to respond within 24 hours.</p>
        </section>

        <nav className="support-policy-links" aria-label="Support policies">
          <Link to="/privacy">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link to="/terms">Terms &amp; Conditions</Link>
          <span aria-hidden="true">·</span>
          <a href="/support#delete-account">Delete My Account</a>
        </nav>
      </section>
    </main>
  );
};

export default Support;
