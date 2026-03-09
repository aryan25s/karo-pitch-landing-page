
function Navbar(){

    return (
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: 'rgba(15,15,26,0.95)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '22px', fontWeight: 800 }}>
            <span style={{ color: '#a855f7' }}>Karo</span> Pitch
          </div>
    
          <div className="nav-links" style={{ display: 'flex', gap: '28px', fontSize: '14px', color: '#ccc' }}>
            <a href="#about">About</a>
            <a href="#how">How It Works</a>
            <a href="#apply">Who Can Apply</a>
            <a href="#startups">Startups</a>
            <a href="#contact">Contact</a>
          </div>
    
          <button className="primaryButton" style={{ padding: '10px 22px', fontSize: '14px' }}>
            Apply to Pitch
          </button>
        </nav>
      )

}




export default Navbar;