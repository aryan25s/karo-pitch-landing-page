function WhoCanApply() {
    const categories = [
      { icon: '🛍️', name: 'D2C Brands', desc: 'Direct-to-consumer product companies' },
      { icon: '📱', name: 'Consumer Startups', desc: 'Apps and services for everyday consumers' },
      { icon: '🏭', name: 'MSMEs', desc: 'Micro, small & medium enterprises' },
      { icon: '💻', name: 'SaaS Startups', desc: 'Software-as-a-Service businesses' },
      { icon: '⚙️', name: 'Manufacturing', desc: 'Manufacturing and industrial startups' },
      { icon: '🌾', name: 'Bharat-Focused', desc: 'Startups solving problems for rural India' }
    ]
  
    return (
      <section id="apply" className="section">

        <h2 className="sectionTitle">
          Who Can <span className="purpleText">Apply</span>?
        </h2>

        <p className="sectionSubtitle">
          Early-stage founders building real businesses across these categories.
        </p>
  
        <div className="grid3">
          {categories.map((cat, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{cat.icon}</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>{cat.name}</h3>
              <p style={{ fontSize: '13px', color: '#a0a0b8' }}>{cat.desc}</p>
            </div>
          ))}

        </div>

      </section>
    )
}

export default WhoCanApply;