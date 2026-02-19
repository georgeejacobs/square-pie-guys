export default function Footer() {
  return (
    <section data-section-theme="white" aria-label="Cookie banner" className="gdpr-cookie-banner BOTTOM_LEFT white popup full-styling">
      <p className="disclaimer-text sqs-cookie-banner-v2-text">By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.</p>
      <div className="button-group sqs-cookie-banner-v2-cta-container">
        <button className="accept sqs-button-element--primary sqs-cookie-banner-v2-accept sqs-cookie-banner-v2-cta">
          <span>Accept</span>
        </button>
        <button className="decline sqs-button-element--secondary sqs-cookie-banner-v2-deny sqs-cookie-banner-v2-cta">
          <span>Decline</span>
        </button>
        <button className="manage sqs-button-element--tertiary">
          <span>Manage cookies</span>
        </button>
      </div>
    </section>
  )
}