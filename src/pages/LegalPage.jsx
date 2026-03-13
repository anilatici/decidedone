import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EXTERNAL_LINK_ICON = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M14 5h5v5M10 14L19 5M19 14v5h-14v-14h5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const JumpToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      className={`legal-jump-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Jump to top"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 18V6M12 6l-5 5M12 6l5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const TextBlock = ({ children, className = '' }) => (
  <p className={`legal-copy ${className}`.trim()}>{children}</p>
);

const BulletList = ({ items }) => (
  <ul className="legal-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const ThirdPartyCards = ({ items }) => (
  <div className="legal-card-grid">
    {items.map((item) => (
      <article className="legal-card" key={item.name}>
        <h4>{item.name}</h4>
        <p>
          <strong>Purpose:</strong> {item.purpose}
        </p>
        <p>
          <strong>Data:</strong> {item.data}
        </p>
        <p>
          <strong>Location:</strong> {item.location}
        </p>
        <a href={item.policyHref} target="_blank" rel="noreferrer">
          Policy link
          {EXTERNAL_LINK_ICON}
        </a>
      </article>
    ))}
  </div>
);

const RightsGroups = ({ groups }) => (
  <div className="rights-groups">
    {groups.map((group) => (
      <div className="rights-group" key={group.label}>
        <p className="rights-group-label mono">{group.label}</p>
        <div className="rights-list">
          {group.items.map((item) => (
            <div className="rights-row" key={item.title}>
              <span className="rights-check" aria-hidden="true">
                ✓
              </span>
              <div>
                <p className="rights-title">{item.title}</p>
                <p className="rights-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const renderBlock = (block) => {
  switch (block.type) {
    case 'paragraph':
      return <TextBlock>{block.text}</TextBlock>;
    case 'paragraphs':
      return block.texts.map((text) => <TextBlock key={text}>{text}</TextBlock>);
    case 'subheading':
      return <h4 className="legal-subheading">{block.text}</h4>;
    case 'list':
      return <BulletList items={block.items} />;
    case 'note':
      return <TextBlock className="legal-note">{block.text}</TextBlock>;
    case 'cards':
      return <ThirdPartyCards items={block.items} />;
    case 'rights':
      return <RightsGroups groups={block.groups} />;
    default:
      return null;
  }
};

const LegalPage = ({
  title,
  intro,
  updatedDate,
  version,
  sections,
  crossLink,
  footerNote,
}) => {
  return (
    <>
      <main className="legal-page">
        <section className="legal-shell">
          <div className="legal-header reveal visible">
            <p className="legal-eyebrow mono">LEGAL</p>
            <h1 className="legal-title bebas">{title}</h1>
            <p className="legal-meta mono">
              Last updated: {updatedDate} <span aria-hidden="true">·</span> Version {version}
            </p>
            <p className="legal-intro">{intro}</p>
          </div>

          <nav className="legal-toc reveal visible" aria-label={`${title} table of contents`}>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    {section.number}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-sections">
            {sections.map((section) => (
              <article className="legal-section reveal visible" id={section.id} key={section.id}>
                <div className="legal-divider" />
                <p className="legal-section-number bebas">{section.number}</p>
                <h2 className="legal-section-title bebas">{section.title}</h2>
                <div className="legal-section-body">
                  {section.blocks.map((block, index) => (
                    <div key={`${section.id}-${block.type}-${index}`}>{renderBlock(block)}</div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="legal-cross-link">
            <Link to={crossLink.href}>{crossLink.label} →</Link>
          </div>

          <div className="legal-bottom-note">
            <p>{footerNote}</p>
          </div>
        </section>
      </main>
      <JumpToTopButton />
    </>
  );
};

export default LegalPage;
