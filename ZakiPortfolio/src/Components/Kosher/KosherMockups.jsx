import React from 'react';

const KosherMockups = () => {
  return (
    <div className="mockup-showcase">
      <div className="designlabel">Mock-Ups</div>
      
      <div className="mockup-container">
        {/* Left Container */}
        <div className="container left-container">
          <div className="mobile-frame">
            <img src='/Kosher/cover11.png' alt="Mobile app screen" />
          </div>
          <div className="instagram-post">
            <img src='/Kosher/cover13.png' alt="Instagram post" />
          </div>
        </div>

        {/* Right Container */}
        <div className="container right-container">
          <div className="mobile-frame">
            <img src='/Kosher/cover12.png' alt="Mobile app screen" />
          </div>
          <div className="instagram-post">
            <img src='/Kosher/cover14.png' alt="Instagram post" />
          </div>
        </div>

        {/* Bottom Container */}
        <div className="container bottom-container">
          <div className="hand-phone-section">
            <img src='/Kosher/cover15.png' alt="Hand holding phone" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .mockup-showcase {
        max-width: 900px;
        margin: 10rem auto;
     
        position: relative;
        
        border: 4px solid #000000;
        border-radius: 30px;

        background: #ffffffff;
        }

        .designlabel {
            position: absolute;
            top: -12px;
            left: 50px;
            background: #fafafa;
            color: #000000;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 1px;
            padding: 1px 8px;
            border: 2px solid #000000;
            border-radius: 6px;
        }

        .mockup-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 100px;
        }

        .container {
          display: flex;
          flex-direction: column;
          gap: 100px;
        }

        .left-container {
          margin: auto 10px;
          grid-column: 1;
          grid-row: 1;
        }

        .right-container {
          margin-top: 150px;
          grid-column: 2;
          grid-row: 1;
        }

        .bottom-container {
          grid-column: 1 / span 2;
          grid-row: 2;
        }

        .mobile-frame {
          background: #ffffffff;
          border-radius: 25px;
          padding: 8px;
   
        }

        .instagram-post {
          background: white;
          border: 1px solid #dbdbdb;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .hand-phone-section {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .mobile-frame img,
        .instagram-post img,
        .hand-phone-section img {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 768px) {
          .mockup-showcase {
            max-width: 100%;
            margin: 0 10px;
            padding: 20px;
          }

          .mockup-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
          }

          .left-container,
          .right-container {
            grid-column: 1;
          }

          .left-container {
            grid-row: 1;
          }

          .right-container {
            grid-row: 2;
          }

          .bottom-container {
            grid-column: 1;
            grid-row: 3;
          }
        }
      `}</style>
    </div>
  );
};

export default KosherMockups;