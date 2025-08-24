import '../Kosher/Contribution.css'

const TDContribution = () => {
  return (
    <div className="contribution-section">
      <div className="section-header">
        <h3>My Contribution</h3>
      </div>
      
      <ul className="contribution-list">
        <li>Concept Development</li>
        <li>Illustration & Digital Painting</li>
        <li>Color Pallete & Composition</li>
        <li>Cultural Styling & Symbolism</li>
      </ul>

      <div className="section-header">
        <h3>Softwares Used</h3>
      </div>

      <div className="software-icons">
        <div className="software-icon ps-icon">
          <span>Ps</span>
        </div>
      </div>

    </div>
  );
};

export default TDContribution;