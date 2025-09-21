import '../Kosher/Contribution.css';

const JugaadContribution = () => {
  return (
    <div className="contribution-section">
      <div className="section-header">
        <h3>My Contribution</h3>
      </div>
      
      <ul className="contribution-list">
        <li>Concept, modeling & texturing</li>
        <li>Animation & rig setup</li>
        <li>Lighting, camera work & rendering</li>
        <li>Compositing in After Effects</li>
      </ul>

      <div className="section-header">
        <h3>Softwares Used</h3>
      </div>

      <div className="software-icons">
        <div className="software-icon ps-icon">
          <span>Pr</span>
        </div>
        <div style={{height:'10px'}}>
          <span><svg width="40" height="45" viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.8965 12.4293L28.2325 0.580147C27.2066 -0.195798 25.4826 -0.192336 24.3561 0.584283C23.2153 1.36898 23.0838 2.66982 24.0976 3.49011L30.6119 8.71175H10.7221C9.08018 8.71243 7.50186 9.79531 7.19043 11.137C6.86846 12.5031 7.98291 13.6233 9.69004 13.6285H19.7565L1.72188 27.2627C0.0270562 28.5401 -0.519916 30.6665 0.547564 32.0109C1.63008 33.3795 3.93448 33.3821 5.64688 32.0186L15.4521 24.1152C15.4521 24.1152 15.3082 25.1814 15.3196 25.8218C15.6145 31.2279 19.7989 36.2395 24.9801 38.459C33.9078 42.3539 45.9614 38.7884 49.3509 28.638C50.9628 23.3135 49.7271 16.982 43.8964 12.4294M27.2913 31.3029C20.2402 27.6677 20.2401 18.5304 27.2913 14.8952C34.3425 11.26 43.2042 15.8287 43.2042 23.099C43.2042 30.3694 34.3425 34.9381 27.2913 31.3029ZM29.4387 28.0315C24.9411 25.7146 24.9411 19.8909 29.4387 17.574C33.9362 15.2571 39.5886 18.1689 39.5886 22.8028C39.5886 27.4366 33.9361 30.3485 29.4387 28.0315Z" fill="black"/>
</svg>
</span>
        </div>
        <div className="software-icon ai-icon">
          <span>Ae</span>
        </div>
      </div>

    </div>
  );
};

export default JugaadContribution;