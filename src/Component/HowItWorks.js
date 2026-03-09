function HowItWorks() {
    const steps = [
      { num: '1', icon: '📄', title: 'Apply with Your Pitch Deck', desc: 'Submit your startup details and pitch deck through our simple application form.' },
      { num: '2', icon: '✅', title: 'Get Shortlisted', desc: 'Our team at KaroStartup reviews and shortlists promising startups.' },
      { num: '3', icon: '🎙️', title: 'Pitch Live to Investors', desc: 'Present your business directly to a panel of interested investors.' },
      { num: '4', icon: '💰', title: 'Raise Funding & Scale', desc: 'Connect with investors, raise capital, and grow your business.' }
    ]
  
    return (
      <section id="how" className="section" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
        <h2 className="sectionTitle">
          How <span className="purpleText">It Works</span>
        </h2>
        <p className="sectionSubtitle">
          A simple 4-step process to go from application to funding.
        </p>
  
        <div className="grid4">
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{
                width: '70px', height: '70px', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))',
                border: '2px solid rgba(168,85,247,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '30px', margin: '0 auto 16px'
              }}>
                {step.icon}
              </div>
              <div style={{
                fontSize: '12px', color: '#a855f7', fontWeight: 700, marginBottom: '8px'
              }}>
                STEP {step.num}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ fontSize: '13px', color: '#a0a0b8', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
}

export default HowItWorks;