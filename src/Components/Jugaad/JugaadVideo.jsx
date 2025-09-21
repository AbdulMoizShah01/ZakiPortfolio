
import '../Jugaad/VideoSection.css';
const JugaadVideo = () => {

    return(
        <div class="jugaad-video-section">  
        
        <div class="jugaad-main-content">
            <div class="jugaad-animation-badge">Final Animation</div>
            
            <div class="jugaad-video-container">
            <div class="jugaad-video-frame">
                <iframe class="jugaad-video-iframe" 
                        src="https://www.youtube.com/embed/Gw6yD9HauUA"
                        title="JUGAAD - Robot Adventures"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            </div>
            <div class="screen-reflection"></div>
            </div>
        </div>
        
        </div>

    );

};

export default JugaadVideo;