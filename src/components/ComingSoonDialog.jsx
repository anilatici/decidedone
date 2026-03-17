import { useEffect } from 'react';

const ComingSoonDialog = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="coming-soon-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="coming-soon-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="coming-soon-title"
        aria-describedby="coming-soon-description"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="coming-soon-close"
          onClick={onClose}
          aria-label="Close coming soon dialog"
        >
          ×
        </button>

        <div className="coming-soon-badge mono">iOS APP</div>
        <h2 id="coming-soon-title" className="coming-soon-title">
          Coming soon.
        </h2>
        <p id="coming-soon-description" className="coming-soon-description">
          The iOS app is on the way. For now, you can use Decided in your
          browser.
        </p>

        <div className="coming-soon-actions">
          <a
            href="https://app.decided.one"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-accent"
          >
            Open Web App
          </a>
          <button
            type="button"
            className="btn-pill btn-dark"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonDialog;
