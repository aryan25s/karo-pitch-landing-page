function FinalCTA() {
    return (
      <section id="contact" className="section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px' }}>
          Ready to <span className="purpleText">Pitch Your Startup</span>?
        </h2>
        <p style={{ fontSize: '17px', color: '#a0a0b8', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          Join hundreds of founders who are taking the leap. Apply now or partner with us to support India's startup ecosystem.
        </p>
  
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="primaryButton">Apply Now</button>
          <button className="buttonOutline">Partner With Us</button>
        </div>
  
        <div style={{ marginTop: '40px', fontSize: '14px', color: '#888' }}>
          <p>📧 business@karostartup.com &nbsp;|&nbsp; 📞 +91 9315194393</p>
        </div> 
      </section>
    )
}

export default FinalCTA;