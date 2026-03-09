function AboutKaroStartup() {
    return (
      <section className="section" style={{
        background: 'rgba(168,85,247,0.05)', borderRadius: '20px',
        border: '1px solid rgba(168,85,247,0.1)'
      }}>
        <h2 className="sectionTitle">
          About <span className="purpleText">KaroStartup</span>
        </h2>
        <p style={{
          fontSize: '16px', color: '#a0a0b8', textAlign: 'center',
          maxWidth: '650px', margin: '0 auto 40px', lineHeight: 1.8
        }}>
          KaroStartup is one of India's largest startup media platforms. Over the past 5 years, we have published thousands of founder stories, built a community of lakhs of entrepreneurs, and inspired startups across 500+ cities in India.
        </p>
  
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[
            { num: '2000+', label: 'Startup Stories' },
            { num: '500K+', label: 'Monthly Readers' },
            { num: '100+', label: 'Contributors' },
            { num: '50+', label: 'Partners' }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '30px', fontWeight: 800, color: '#a855f7' }}>{s.num}</div>
              <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
  
        <div style={{ textAlign: 'center', marginTop: '30px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://karostartup.com" target="_blank" className="tag">🌐 Website</a>
          <a href="https://www.instagram.com/karo_startup_/" target="_blank" className="tag">📸 Instagram</a>
          <a href="https://www.linkedin.com/company/karo-startup/" target="_blank" className="tag">💼 LinkedIn</a>
          <a href="https://www.youtube.com/@karostartup/videos" target="_blank" className="tag">▶️ YouTube</a>
        </div>
      </section>
    )
}

export default AboutKaroStartup;