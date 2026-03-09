function Hero() {
    return (
      <section style={{
        paddingTop: '160px', paddingBottom: '80px', textAlign: 'center',
        maxWidth: '800px', margin: '0 auto', padding: '160px 20px 80px'
      }}>
        <span className="tag" style={{ marginBottom: '20px', display: 'inline-block' }}>
          India's Startup Pitch Platform
        </span>
  
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15, marginTop: '16px' }}>
          Pitch Your Startup to{' '}
          <span className="purpleText">India's Top Investors</span>
        </h1>
  
        <p style={{ fontSize: '18px', color: '#a0a0b8', marginTop: '20px', lineHeight: 1.7, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Karo Pitch is a platform where founders from across India — especially Tier-2 and Tier-3 cities — can pitch their startups directly to investors, get mentorship, and raise funding.
        </p>
  
        <div className="hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap' }}>
          <button className="primaryButton">Apply to Pitch</button>
          <button className="buttonOutline">Explore Startups</button>
        </div>
  
        
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '60px',
          flexWrap: 'wrap', padding: '24px', background: 'rgba(255,255,255,0.03)',
          borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)'
        }}>
          {[
            { num: '5000+', label: 'Startup Stories' },
            { num: '500+', label: 'Founders' },
            { num: '100+', label: 'Cities' },
            { num: '50+', label: 'Investors' }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#a855f7' }}>{s.num}</div>
              <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Hero;