function Investors() {
    return (
      <section id="investors" className="section" style={{ textAlign: 'center' }}>
        <h2 className="sectionTitle">
          Meet Investors Looking for the{' '}
          <span className="purpleText">Next Big Startup</span>
        </h2>
        <p className="sectionSubtitle">
          Angel investors, VCs, and micro-funds attend Karo Pitch events to discover promising startups from across India.
        </p>
  
        <div className="grid3" style={{ marginTop: '40px' }}>
          {[
            { icon: '👼', title: 'Angel Investors', desc: 'Individual investors backing early-stage ideas' },
            { icon: '🏦', title: 'Venture Capital', desc: 'VC firms looking for high-growth startups' },
            { icon: '🤝', title: 'Micro Funds', desc: 'Small funds supporting Bharat entrepreneurs' }
          ].map((inv, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{inv.icon}</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{inv.title}</h3>
              <p style={{ fontSize: '13px', color: '#a0a0b8', lineHeight: 1.6 }}>{inv.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Investors;