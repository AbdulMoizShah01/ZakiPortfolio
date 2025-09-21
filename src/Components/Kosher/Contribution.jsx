import '../Kosher/Contribution.css'

const ContributionSection = () => {
  return (
    <div className="contribution-section">
      <div className="section-header">
        <h3>My Contribution</h3>
      </div>
      
      <ul className="contribution-list">
        <li>Social Media Strategy & Visual Direction</li>
        <li>Post & Story Design Templates</li>
        <li>Product Highlight Posts</li>
        <li>Halal-Focused, Culturally Inclusive Design</li>
      </ul>

      <div className="section-header">
        <h3>Softwares Used</h3>
      </div>

      <div className="software-icons">
        <div className="software-icon ps-icon">
          <span>Ps</span>
        </div>
        <div className="software-icon ai-icon">
          <span>Ai</span>
        </div>
      </div>

    </div>
  );
};

export default ContributionSection;