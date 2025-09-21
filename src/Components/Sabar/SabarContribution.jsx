import '../Kosher/Contribution.css';

const SabarContribution = () => {
  return (
    <div className="contribution-section" style={{marginTop:"10%"}}>
      <div className="section-header">
        <h3>My Role</h3>
      </div>
      
      <ul className="contribution-list">
        <li>Concept & Direction</li>
        <li>Character Design</li>
        <li>Frame-by-frame Animation</li>
        <li>Compositing & Sound</li>
      </ul>

      <div className="section-header">
        <h3>Softwares Used</h3>
      </div>

      <div className="software-icons">
        <div className="software-icon ps-icon">
          <span>Pr</span>
        </div>

        <div className="software-icon ai-icon">
          <span>Ae</span>
        </div>

         <div className="software-icon ai-icon">
          <span>An</span>
        </div>

      </div>

    </div>
  );
};

export default SabarContribution;