import LegalPage from './LegalPage';

const updatedDate = 'March 13, 2026';

const sections = [
  {
    id: 'acceptance-of-terms',
    number: '01',
    title: 'Acceptance of Terms',
    blocks: [
      {
        type: 'paragraph',
        text: 'By accessing or using Decided (the "Service"), including the mobile app on iOS and Android and the web app at app.decided.one, you agree to these Terms of Service ("Terms") and our Privacy Policy. If you do not agree, do not use the Service. These Terms constitute a legally binding agreement between you and Decided ("we", "us", "our").',
      },
    ],
  },
  {
    id: 'description-of-service',
    number: '02',
    title: 'Description of Service',
    blocks: [
      {
        type: 'paragraph',
        text: 'Decided is an AI-powered decision assistant that helps users make everyday decisions through AI-generated recommendations, daily planning features including Autopilot Day, and personalized preference learning. The Service is available as a mobile app and web application. Features are divided between a free tier and a paid Pro subscription.',
      },
    ],
  },
  {
    id: 'accounts-registration',
    number: '03',
    title: 'Accounts & Registration',
    blocks: [
      {
        type: 'list',
        items: [
          'You must be at least 13 years old to use the Service, or 16 in the EU/UK.',
          'You must provide a valid email address.',
          'You are responsible for keeping your credentials secure.',
          'You are responsible for all activity under your account.',
          'You may not share your account with others.',
          'One account is permitted per person.',
          'We reserve the right to suspend accounts that violate these Terms.',
        ],
      },
    ],
  },
  {
    id: 'subscription-billing',
    number: '04',
    title: 'Subscription & Billing',
    blocks: [
      { type: 'subheading', text: 'Decided Pro billing cycles' },
      {
        type: 'list',
        items: [
          'Weekly: $2.99 per week.',
          'Monthly: $7.99 per month.',
          'Yearly: $49.99 per year.',
        ],
      },
      {
        type: 'list',
        items: [
          'Subscriptions are billed in advance on a recurring basis.',
          'Payment is processed through the App Store (iOS), Google Play (Android), or Stripe (web), depending on where the subscription was initiated.',
          'Prices are in USD and may vary by region because of local taxes and currency conversion.',
          'We reserve the right to change pricing with 30 days notice to existing subscribers.',
          'Your subscription renews automatically unless cancelled at least 24 hours before the end of the current billing period.',
          'You can manage and cancel your subscription through your device subscription settings or through the customer portal at app.decided.one/profile.',
        ],
      },
    ],
  },
  {
    id: 'free-trial',
    number: '05',
    title: 'Free Trial',
    blocks: [
      {
        type: 'list',
        items: [
          'A 7-day free trial is available on the Yearly plan for new subscribers.',
          'You will not be charged during the trial period.',
          'Your payment method will be charged at the end of the trial unless you cancel before it ends.',
          'Only one free trial is available per user for the lifetime of the Service.',
          'We reserve the right to modify or discontinue free trial offers at any time.',
        ],
      },
    ],
  },
  {
    id: 'cancellation-refunds',
    number: '06',
    title: 'Cancellation & Refunds',
    blocks: [
      {
        type: 'list',
        items: [
          'You may cancel your subscription at any time.',
          'Cancellation takes effect at the end of the current billing period, and you retain access to Pro features until then.',
          'We do not offer refunds for partial billing periods except where required by applicable law, including EU/UK consumer protection regulations.',
          'For iOS and Android purchases, refund requests must be made through Apple or Google. We do not control their refund decisions.',
          'For web purchases processed by Stripe, first-time subscribers may submit refund requests to hello@decided.one within 14 days of the charge.',
        ],
      },
    ],
  },
  {
    id: 'acceptable-use',
    number: '07',
    title: 'Acceptable Use',
    blocks: [
      { type: 'paragraph', text: 'You agree not to use Decided to do any of the following:' },
      {
        type: 'list',
        items: [
          'Violate any applicable laws or regulations.',
          'Generate content that is harmful, threatening, abusive, or illegal.',
          'Attempt to circumvent AI safety filters or paywall features.',
          'Reverse engineer, decompile, or attempt to extract source code.',
          'Use the Service for commercial purposes without our written consent.',
          'Scrape, crawl, or systematically extract data from the Service.',
          'Impersonate another person or entity.',
          'Attempt to gain unauthorized access to any part of the Service.',
        ],
      },
      {
        type: 'note',
        text: 'We reserve the right to terminate accounts that violate these rules without notice or refund.',
      },
    ],
  },
  {
    id: 'ai-generated-content',
    number: '08',
    title: 'AI-Generated Content',
    blocks: [
      { type: 'note', text: 'Important: Decided uses AI to generate decision recommendations. Read this section carefully.' },
      {
        type: 'list',
        items: [
          'Decided uses OpenAI GPT models to generate recommendations.',
          'All AI-generated content is provided for informational and entertainment purposes only.',
          'Recommendations are not medical, legal, financial, psychological, or other professional advice.',
          'Do not rely solely on Decided for decisions with serious consequences. Consult a qualified professional when appropriate.',
          'We do not guarantee the accuracy, completeness, or suitability of AI-generated content.',
          'AI outputs can be incorrect, biased, or inappropriate despite our safety measures. Use your own judgment.',
          'By using the Service, you acknowledge and accept these limitations.',
        ],
      },
    ],
  },
  {
    id: 'intellectual-property',
    number: '09',
    title: 'Intellectual Property',
    blocks: [
      {
        type: 'list',
        items: [
          'The Decided name, logo, app design, and all original content are owned by Decided and protected by intellectual property laws.',
          'You retain ownership of content you input into the Service.',
          'By using the Service, you grant us a limited license to process your inputs for the purpose of generating recommendations.',
          'We do not use your personal decision inputs to train AI models.',
          'You may not use our branding, name, or visual identity without written permission.',
        ],
      },
    ],
  },
  {
    id: 'privacy',
    number: '10',
    title: 'Privacy',
    blocks: [
      {
        type: 'paragraph',
        text: 'Your use of the Service is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you agree to the collection and use of your data as described in the Privacy Policy. See decided.one/privacy.',
      },
    ],
  },
  {
    id: 'disclaimers-limitation-of-liability',
    number: '11',
    title: 'Disclaimers & Limitation of Liability',
    blocks: [
      { type: 'note', text: 'The Service is provided "as is" without warranties of any kind, express or implied.' },
      { type: 'subheading', text: 'To the maximum extent permitted by law' },
      {
        type: 'list',
        items: [
          'We do not warrant that the Service will be uninterrupted or error-free.',
          'We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.',
          'Our total liability to you for any claims arising from these Terms shall not exceed the amount you paid us in the 3 months preceding the claim.',
          'Nothing in these Terms limits liability that cannot be excluded by law, including liability for death or personal injury caused by negligence.',
        ],
      },
      {
        type: 'paragraph',
        text: 'For EU and UK users, nothing in these Terms affects your statutory consumer rights.',
      },
    ],
  },
  {
    id: 'indemnification',
    number: '12',
    title: 'Indemnification',
    blocks: [
      {
        type: 'paragraph',
        text: 'You agree to indemnify and hold harmless Decided, its officers, directors, and employees from any claims, damages, or expenses, including legal fees, arising from your violation of these Terms or misuse of the Service.',
      },
    ],
  },
  {
    id: 'termination',
    number: '13',
    title: 'Termination',
    blocks: [
      {
        type: 'list',
        items: [
          'We may suspend or terminate your account at any time for violations of these Terms.',
          'You may delete your account at any time through the Profile screen.',
          'On termination, your right to use the Service ceases immediately.',
          'Sections 8, 9, 11, and 12 survive termination.',
        ],
      },
    ],
  },
  {
    id: 'changes-to-terms',
    number: '14',
    title: 'Changes to Terms',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may update these Terms from time to time. If we make material changes, we will notify you by email or through the app at least 14 days before the changes take effect. Continued use of the Service after the effective date of updated Terms constitutes acceptance of the new Terms.',
      },
    ],
  },
  {
    id: 'governing-law',
    number: '15',
    title: 'Governing Law',
    blocks: [
      {
        type: 'paragraph',
        text: 'These Terms are governed by the laws of Australia. Any disputes shall be resolved in the courts of Australia. If you are an EU consumer, you may also benefit from the mandatory consumer protection laws of your country of residence.',
      },
    ],
  },
  {
    id: 'contact',
    number: '16',
    title: 'Contact',
    blocks: [
      {
        type: 'paragraphs',
        texts: [
          'For questions about these Terms, email hello@decided.one.',
          'You can also contact us through decided.one/contact.',
        ],
      },
    ],
  },
];

const Terms = () => (
  <LegalPage
    title="Terms & Conditions"
    intro="Please read these Terms carefully before using Decided. By creating an account or using the app, you agree to be bound by these Terms."
    updatedDate={updatedDate}
    version="1.0"
    sections={sections}
    crossLink={{ href: '/privacy', label: 'Read our Privacy Policy' }}
    footerNote={`© 2026 Decided. All rights reserved. These terms were last reviewed on ${updatedDate}. This document does not constitute legal advice. Consult a qualified lawyer for your specific situation.`}
  />
);

export default Terms;
