import '../Kosher/Contribution.css';

const KAContribution = () => {
  return (
    <div className="contribution-section" style={{marginTop:"10px"}}>
      <div className="section-header">
        <h3>My Role</h3>
      </div>
      
      <ul className="contribution-list">
        <li>Logo Preparation</li>
        <li>Glitch Animation & Effects</li>
        <li>Motion Design</li>
        <li>Sound Design & Final Export</li>
      </ul>

      <div className="section-header">
        <h3>Softwares Used</h3>
      </div>

      <div className="software-icons">

        <div className="software-icon ai-icon">
          <span>Ae</span>
        </div>

      </div>

    </div>
  );
};

export default KAContribution;