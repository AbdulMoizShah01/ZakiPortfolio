import '../Kosher/Contribution.css';

const JojoContribution = () => {
  return (
    <div className="contribution-section" style={{marginTop:"10%"}}>
      <div className="section-header">
        <h3>My Role</h3>
      </div>
      
      <ul className="contribution-list">
        <li>Created the full boxing animation using 2D frame-by-frame techniques</li>
        <li>Designed the club's logo with subtle boxing references</li>
        <li>Composited the animation in After Effects</li>
        <li>Directed the pacing and flow of the visual story</li>
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

export default JojoContribution;