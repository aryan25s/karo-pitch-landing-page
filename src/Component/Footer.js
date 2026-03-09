function Footer() {
    return (
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '40px 20px', textAlign: 'center'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>
          <span style={{ color: '#a855f7' }}>Karo</span> Pitch
        </div>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px' }}>
          A KaroStartup Initiative — India's Startup Pitch Platform
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', fontSize: '13px', color: '#888', flexWrap: 'wrap' }}>
          <a href="https://karostartup.com" target="_blank" className="foot">KaroStartup</a>
          <a href="https://www.instagram.com/karopitch/" target="_blank" className="foot">Instagram</a>
          <a href="https://www.linkedin.com/company/karo-startup/" target="_blank" className="foot">LinkedIn</a>
          <a href="https://x.com/karo_startup" target="_blank" className="foot">Twitter</a>
          <a href="https://www.facebook.com/karostartup" target="_blank" className="foot">Facebook</a>
        </div>
        <p style={{ fontSize: '12px', color: '#444', marginTop: '24px' }}>
          © 2025 KaroStartup. All rights reserved.
        </p>
      </footer>
    )
}

export default Footer;