function FeaturedStartups() {
    const startups = [
      { name: 'FreshBasket', category: 'D2C', desc: 'Farm-to-door organic grocery delivery in Tier-2 cities.' },
      { name: 'SkillBridge', category: 'SaaS', desc: 'Vernacular e-learning platform for rural youth.' },
      { name: 'CraftLoom', category: 'MSME', desc: 'Connecting Indian artisans to global marketplaces.' },
      { name: 'MediConnect', category: 'Consumer', desc: 'Affordable telemedicine for small-town India.' },
      { name: 'KisanDirect', category: 'Bharat', desc: 'Fair-price marketplace for farmers to sell produce.' },
      { name: 'PackRight', category: 'Manufacturing', desc: 'Eco-friendly packaging solutions for D2C brands.' }
    ]
  
    return (
      <section id="startups" className="section">
        <h2 className="sectionTitle">
          Featured <span className="purpleText">Startups</span>
        </h2>
        <p className="sectionSubtitle">
          Some of the exciting startups on our platform.
        </p>
  
        <div className="grid3">
          {startups.map((s, i) => (
            <div key={i} className="card">
              <div style={{
                width: '50px', height: '50px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #7c3aed, #f97316)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '14px'
              }}>
                {s.name[0]}
              </div>
              <span className="tag">{s.category}</span>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '10px', marginBottom: '6px' }}>{s.name}</h3>
              <p style={{ fontSize: '13px', color: '#a0a0b8', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
}

export default FeaturedStartups;