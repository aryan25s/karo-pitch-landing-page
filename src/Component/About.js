function About() {
    return (
      <section id="about" className="section">
        <h2 className="sectionTitle">
          What is <span className="purpleText">Karo Pitch</span>?
        </h2>
        <p className="sectionSubtitle">
          Thousands of founders are building amazing businesses but lack access to investors. Karo Pitch connects these founders with investors through curated pitch events and a discovery platform.
        </p>
  
        <div className="grid2">
          {[
            { icon: '🌉', title: 'Bridging the Gap', desc: 'Connecting Bharat founders with top investors who are looking for real businesses.' },
            { icon: '🇮🇳', title: 'Built for Bharat', desc: 'Focused on Tier-2, Tier-3 cities where real innovation is happening every day.' },
            { icon: '🎤', title: 'Curated Pitch Events', desc: 'Structured pitch sessions like closed-room investor meets for selected startups.' },
            { icon: '🔍', title: 'Discovery Platform', desc: 'A place where investors can discover and connect with high-potential startups.' }
          ].map((item, i) => (
            <div key={i} className="card">
              <div style={{ fontSize: '36px', marginBottom: '14px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#a0a0b8', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
}

export default About;
  