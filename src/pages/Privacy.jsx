import LegalPage from './LegalPage';

const updatedDate = 'March 13, 2026';

const sections = [
  {
    id: 'who-we-are',
    number: '01',
    title: 'Who We Are',
    blocks: [
      {
        type: 'paragraphs',
        texts: [
          'Decided ("we", "us", "our") operates the Decided app and website at decided.one and app.decided.one.',
          'We are the data controller for personal data collected through the Service. Contact: hello@decided.one.',
        ],
      },
    ],
  },
  {
    id: 'what-data-we-collect',
    number: '02',
    title: 'What Data We Collect',
    blocks: [
      { type: 'subheading', text: 'Data you provide directly' },
      {
        type: 'list',
        items: [
          'Email address required for account creation.',
          'Display name, which is optional and can be set in Profile.',
          'Decision inputs, including the text you type when asking for a decision.',
          'Clarifying question answers.',
          'Feedback on recommendations, including likes and dislikes.',
          'Autopilot Day task lists and schedule preferences.',
        ],
      },
      { type: 'subheading', text: 'Data collected automatically' },
      {
        type: 'list',
        items: [
          'Account creation date and last login time.',
          'Subscription status and billing history through Stripe, the App Store, or Google Play.',
          'Decision count per day stored locally on your device, not on our servers.',
          'Streak data stored locally on your device.',
          'App version and platform, including iOS, Android, or web.',
        ],
      },
      { type: 'subheading', text: 'Data we do not collect' },
      {
        type: 'list',
        items: [
          'We do not collect your location.',
          'We do not collect device contacts, camera, or microphone data.',
          'We do not collect biometric data.',
          'We do not build advertising profiles.',
          'We do not sell your data to third parties.',
        ],
      },
    ],
  },
  {
    id: 'how-we-use-your-data',
    number: '03',
    title: 'How We Use Your Data',
    blocks: [
      { type: 'paragraph', text: 'We use your data to:' },
      {
        type: 'list',
        items: [
          'Create and manage your account.',
          'Generate AI-powered decision recommendations.',
          'Provide and improve the Decided service.',
          'Send transactional emails such as account verification, password reset, and subscription receipts. We do not send marketing emails without opt-in.',
          'Process subscription payments through Stripe.',
          'Comply with legal obligations.',
          'Detect and prevent fraud or abuse.',
        ],
      },
      { type: 'subheading', text: 'Legal basis under GDPR' },
      {
        type: 'list',
        items: [
          'Contract performance for providing the Service you signed up for.',
          'Legitimate interests for service improvement and fraud prevention.',
          'Legal obligation for compliance with applicable laws.',
          'Consent where explicitly requested, such as marketing communications.',
        ],
      },
    ],
  },
  {
    id: 'ai-your-decision-data',
    number: '04',
    title: 'AI & Your Decision Data',
    blocks: [
      { type: 'note', text: 'Important: this section explains how your decision inputs are handled.' },
      {
        type: 'cards',
        items: [
          {
            name: 'OpenAI',
            purpose: 'Generate clarifying questions and decision recommendations using gpt-4o-mini.',
            data: 'Decision input text and clarifying answers.',
            location: 'United States.',
            policyHref: 'https://openai.com/privacy',
          },
          {
            name: 'Decided Storage',
            purpose: 'Store your decision history and preference profile so you can access history and receive better personalized recommendations.',
            data: 'Decision text, preference profile summary, and related account linkage.',
            location: 'Supabase project region, currently to be confirmed before publishing.',
            policyHref: 'https://supabase.com/privacy',
          },
        ],
      },
      {
        type: 'list',
        items: [
          'We have enabled the no-training option with OpenAI, so your inputs are not used to train OpenAI models.',
          'Your preference profile is used only to improve your personal recommendations and is not shared for advertising or profiling.',
          'You can delete your decision history and preference profile from the Profile screen.',
        ],
      },
    ],
  },
  {
    id: 'data-sharing-third-parties',
    number: '05',
    title: 'Data Sharing & Third Parties',
    blocks: [
      {
        type: 'paragraph',
        text: 'We share data only with service providers needed to operate the Service. We do not sell your data, share it with advertisers, or use it for ad targeting.',
      },
      {
        type: 'cards',
        items: [
          {
            name: 'Supabase',
            purpose: 'Database, authentication, and storage.',
            data: 'Account information, decision history, and preference profile.',
            location: 'EU or US depending on your selected region.',
            policyHref: 'https://supabase.com/privacy',
          },
          {
            name: 'OpenAI',
            purpose: 'AI-generated decision recommendations.',
            data: 'Decision input text and clarifying answers.',
            location: 'United States.',
            policyHref: 'https://openai.com/privacy',
          },
          {
            name: 'Stripe',
            purpose: 'Payment processing for web subscriptions.',
            data: 'Email and payment details. We do not receive raw card numbers.',
            location: 'United States and EU.',
            policyHref: 'https://stripe.com/privacy',
          },
          {
            name: 'Apple App Store / Google Play',
            purpose: 'Mobile subscription billing.',
            data: 'Subscription status only. Apple and Google handle payment details directly.',
            location: 'Varies by platform and region.',
            policyHref: 'https://www.apple.com/legal/privacy',
          },
          {
            name: 'RevenueCat',
            purpose: 'Mobile subscription management.',
            data: 'Subscription status and device identifiers.',
            location: 'United States.',
            policyHref: 'https://www.revenuecat.com/privacy',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'Google Play privacy details are available at policies.google.com/privacy.',
      },
    ],
  },
  {
    id: 'data-storage-security',
    number: '06',
    title: 'Data Storage & Security',
    blocks: [
      {
        type: 'list',
        items: [
          'Your data is stored on Supabase servers.',
          'All data is encrypted in transit using TLS 1.2 or higher.',
          'Database data is encrypted at rest using AES-256.',
          'Access to your data is protected by Row Level Security so only you can read and write your own records.',
          'We use industry-standard security practices, but no system is 100% secure.',
          'If a data breach affects your rights, we will notify you within 72 hours where required by applicable law.',
        ],
      },
    ],
  },
  {
    id: 'data-retention',
    number: '07',
    title: 'Data Retention',
    blocks: [
      {
        type: 'list',
        items: [
          'Account data is retained while your account is active.',
          'Decision history is retained while your account is active and deleted within 30 days of account deletion.',
          'Preference profile is deleted on account deletion or on your request from the Profile screen.',
          'Subscription records are retained for 7 years for tax and legal compliance.',
          'Anonymized usage statistics may be retained indefinitely.',
          'You can request deletion of all personal data by emailing hello@decided.one, and we will action the request within 30 days.',
        ],
      },
    ],
  },
  {
    id: 'your-rights',
    number: '08',
    title: 'Your Rights',
    blocks: [
      {
        type: 'rights',
        groups: [
          {
            label: 'All Users',
            items: [
              { title: 'Access', description: 'Request a copy of your personal data.' },
              { title: 'Deletion', description: 'Request deletion of your account and personal data.' },
              { title: 'Correction', description: 'Update incorrect profile data through the Profile screen.' },
              { title: 'Portability', description: 'Request your data in a machine-readable format.' },
            ],
          },
          {
            label: 'EU / UK Users',
            items: [
              { title: 'Restriction', description: 'Ask us to limit how we process your data.' },
              { title: 'Objection', description: 'Object to processing based on legitimate interests.' },
              { title: 'Withdraw Consent', description: 'Withdraw consent at any time where consent is the legal basis.' },
              { title: 'Lodge a Complaint', description: 'Contact your local data protection authority if needed.' },
            ],
          },
          {
            label: 'California Users',
            items: [
              { title: 'Know', description: 'Know what personal information is collected.' },
              { title: 'Disclosure', description: 'Know whether personal information is sold or disclosed. It is not sold.' },
              { title: 'Opt Out', description: 'Opt out of the sale of personal information. We do not sell data.' },
              { title: 'Non-Discrimination', description: 'Receive equal service when exercising your privacy rights.' },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'To exercise any of these rights, email hello@decided.one. We will respond within 30 days, or within 1 month for EU and UK requests.',
      },
    ],
  },
  {
    id: 'childrens-privacy',
    number: '09',
    title: "Children's Privacy",
    blocks: [
      {
        type: 'paragraph',
        text: 'The Service is not directed at children under 13, or under 16 in the EU/UK. We do not knowingly collect personal data from children under these ages. If you believe a child has provided us with personal data, contact hello@decided.one and we will delete it promptly.',
      },
    ],
  },
  {
    id: 'cookies-tracking',
    number: '10',
    title: 'Cookies & Tracking',
    blocks: [
      { type: 'subheading', text: 'The web app uses essential cookies only' },
      {
        type: 'list',
        items: [
          'Supabase auth session cookie to keep you logged in.',
          'CSRF protection token.',
        ],
      },
      { type: 'subheading', text: 'We do not use' },
      {
        type: 'list',
        items: [
          'Advertising or tracking cookies.',
          'Third-party analytics cookies such as Google Analytics.',
          'Social media tracking pixels.',
          'Fingerprinting or behavioral tracking.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The mobile app does not use cookies. It uses local device storage such as SharedPreferences or Hive for session data only.',
      },
    ],
  },
  {
    id: 'changes-to-this-policy',
    number: '11',
    title: 'Changes to This Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may update this Privacy Policy from time to time. If we make material changes to how we handle personal data, we will notify you by email at least 14 days before the changes take effect. The Last updated date at the top of this page reflects the most recent version.',
      },
    ],
  },
  {
    id: 'contact-data-requests',
    number: '12',
    title: 'Contact & Data Requests',
    blocks: [
      {
        type: 'paragraphs',
        texts: [
          'Data controller: Decided.',
          'Email: hello@decided.one.',
          'Website: decided.one/contact.',
          'For EU and UK users, if you are not satisfied with our response to a privacy request, you may lodge a complaint with your local supervisory authority, including the ICO in the UK or your national DPA in the EU.',
        ],
      },
    ],
  },
];

const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    intro="Your privacy matters to us. This policy explains what data we collect, why we collect it, how we use it, and what rights you have over it. We've written it in plain language on purpose."
    updatedDate={updatedDate}
    version="1.0"
    sections={sections}
    crossLink={{ href: '/terms', label: 'Read our Terms & Conditions' }}
    footerNote={`© 2026 Decided. All rights reserved. This policy was last reviewed on ${updatedDate}. This document does not constitute legal advice. Consult a qualified lawyer for your specific situation.`}
  />
);

export default Privacy;
