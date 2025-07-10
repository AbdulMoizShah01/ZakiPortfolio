import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const PowerUpSelector = () => {
  const [selectedSkill, setSelectedSkill] = useState('default');
  const [dots, setDots] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev === '...' ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedSkill !== 'default') {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [selectedSkill]);

  const skills = {
    'default': {
        name: 'Default',
        title: 'Default',
        avatar: {
          imageUrl: '/avatar1.png',
          alt: 'Default Zakria Avatar',
          personality: [
            'Versatile creative professional',
            'Adapts to any creative challenge',
            'Multi-skilled problem solver',
            'Ready for any project',
            'Eager to learn new skills',
            'Creative generalist'
          ]
        },
        tagline: "Choose a skill to see the power-up!",
        softwareIcons: []
      },
      'graphic-design': {
        name: 'Graphic Design',
        title: 'Graphic Designer',
        avatar: {
          imageUrl: '/avatar2.png',
          alt: 'Graphic Designer Avatar',
          personality: [
            'Master of visual aesthetics',
            'Creates stunning brand identities',
            'Color theory wizard',
            'Typography perfectionist',
            'Always pixel-perfect',
            'Thinks in RGB and CMYK'
          ]
        },
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="icon">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
              <path d="M8 21L9.5 16.5L13 18L9.5 19.5L8 21Z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
            </svg>
        ),
        tagline: "Crafting visual stories that captivate and inspire.",
        softwareIcons: [
            <svg key="photoshop" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="Adobe Photoshop"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 7.21c-.24-.13-.53-.19-.83-.19-.55 0-1.07.22-1.46.63l-1.07 1.07c-.1.1-.15.22-.15.35v3.54c0 .28.22.5.5.5h2.5c.28 0 .5-.22.5-.5v-2.5c0-.66-.26-1.29-.74-1.76zM8.5 7h3c.28 0 .5.22.5.5V10c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5V7.5c0-.28.22-.5.5-.5z" /></svg>,
            <svg key="illustrator" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="Adobe Illustrator"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 15h-3v-9h3v9zm-6-4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z" /></svg>,
            <svg key="indesign" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="Adobe InDesign"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-8h2v8zm4 0h-2v-8h2v8z" /></svg>
        ]
      },
      'video-editing': {
        name: 'Video Editing/VFX',
        title: 'Video Editor',
        avatar: {
          imageUrl: '/avatar3.png',
          alt: 'Video Editor Avatar',
          personality: [
            'Cinematic storyteller',
            'Motion graphics maestro',
            'Frame-by-frame perfectionist',
            'Sound design savant',
            'Visual effects wizard',
            'Timeline organization expert'
          ]
        },
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="icon">
              <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
              <rect x="6" y="10" width="4" height="4" fill="currentColor"/>
              <rect x="14" y="10" width="4" height="4" fill="currentColor"/>
            </svg>
        ),
        tagline: "Bringing ideas to life, one frame at a time.",
        softwareIcons: [
            <svg key="premiere" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="Adobe Premiere Pro"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>,
            <svg key="aftereffects" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="Adobe After Effects"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13.5l-3-6h2l1 2 1-2h2l-3 6zm7-1.5h-4v-2h4v-2h-4V8h4V6H9v12h10v-2z" /></svg>,
            <svg key="davinci" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="DaVinci Resolve"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2v-8zm-4 4h2v4h-2v-4zm8 0h2v4h-2v-4z" /></svg>
        ]
      },
      'photography': {
        name: 'Illustrated Photography',
        title: 'Photographer',
        avatar: {
          imageUrl: '/avatar4.png',
          alt: 'Photographer Avatar',
          personality: [
            'Light composition master',
            'Moment capture specialist',
            'Digital darkroom expert',
            'Visual storyteller',
            'Lens collection enthusiast',
            'Golden hour hunter'
          ]
        },
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="icon">
              <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17" cy="9" r="1" fill="currentColor"/>
              <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2"/>
            </svg>
        ),
        tagline: "Capturing the beauty of the moment, forever.",
        softwareIcons: [
            <svg key="lightroom" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="Adobe Lightroom"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 16.17L4.83 12l1.41-1.41L9 13.34l7.76-7.76L18.17 7 9 16.17z" /></svg>,
            <svg key="captureone" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="Capture One"><path d="M21 3H3C1.9 3 1 3.9 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-4-5c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z" /></svg>
        ]
      },
      'animation': {
        name: 'Animation',
        title: 'Animator',
        avatar: {
          imageUrl: '/avatar5.png',
          alt: 'Animator Avatar',
          personality: [
            'Brings static to life',
            'Timing and spacing guru',
            'Character movement expert',
            'Keyframe perfectionist',
            'Storytelling through motion',
            'Frame rate obsessed'
          ]
        },
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="icon">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2"/>
              <path d="M1 12h6m6 0h6" stroke="currentColor" strokeWidth="2"/>
              <path d="M4.22 4.22l4.24 4.24m7.07 0l4.24-4.24" stroke="currentColor" strokeWidth="2"/>
              <path d="M4.22 19.78l4.24-4.24m7.07 0l4.24 4.24" stroke="currentColor" strokeWidth="2"/>
            </svg>
        ),
        tagline: "Creating fluid motion that tells a compelling story.",
        softwareIcons: [
            <svg key="toonboom" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="Toon Boom Harmony"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.21 14.21c-1.17-1.17-1.17-3.07 0-4.24l4.24-4.24c1.17-1.17 3.07-1.17 4.24 0s1.17 3.07 0 4.24l-4.24 4.24c-1.17 1.17-3.07 1.17-4.24 0z" /></svg>,
            <svg key="tvpaint" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="TVPaint Animation"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm3-4H6v-2h12v2zm0-4H6V8h12v2z" /></svg>
        ]
      },
      '3d': {
        name: '3D',
        title: '3D Artist',
        avatar: {
          imageUrl: '/avatar6.png',
          alt: '3D Artist Avatar',
          personality: [
            'Dimensional thinking master',
            'Polygon mesh sculptor',
            'Lighting setup wizard',
            'Texture painting artist',
            'Render queue optimizer',
            'Z-axis navigation expert'
          ]
        },
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="icon">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 12L2 7" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 12v10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 12L22 7" stroke="currentColor" strokeWidth="2"/>
            </svg>
        ),
        tagline: "Building immersive worlds, one polygon at a time.",
        softwareIcons: [
            <svg key="blender" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="Blender"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" /></svg>,
            <svg key="zbrush" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" title="ZBrush"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.9V15c0-.55-.45-1-1-1s-1 .45-1 1v1.9c-1.16-.41-2-1.52-2-2.9 0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.38-.84 2.49-2 2.9zm-1-8.4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
        ]
      }
  };

  const DefaultAvatar = () => (
    <AvatarContainer>
      <AvatarImage 
        src="/avatar1.png" 
        alt="Default Zakria Avatar"
        $animating={false}
      />
    </AvatarContainer>
  );

  const Avatar = ({ skill }) => {
    if (skill === 'default') return <DefaultAvatar />;
   
    const data = skills[skill];
    return (
      <AvatarContainer>
        <AvatarImage 
          src={data.avatar.imageUrl} 
          alt={data.avatar.alt}
          $animating={isAnimating}
        />
      </AvatarContainer>
    );
  };

  const getDisplayTitle = () => {
    return skills[selectedSkill].title;
  };

  const selectedSkillData = skills[selectedSkill];

  return (
    <Container>
      <Header>
        <Title>SELECT YOUR</Title>
        <PowerUpTitle>
          POWER-UP<LoadingDots>{dots}</LoadingDots>
        </PowerUpTitle>
      </Header>

      <ContentWrapper>
        <SkillsGrid onClick={(e) => e.stopPropagation()}>
          {Object.entries(skills).filter(([key]) => key !== 'default').map(([key, skill]) => (
            <SkillCard 
              key={key}
              $selected={selectedSkill === key}
              onClick={() => setSelectedSkill(key)}
            >
              <IconWrapper $selected={selectedSkill === key}>
                {skill.icon}
              </IconWrapper>
              <SkillName $selected={selectedSkill === key}>
                {skill.name}
              </SkillName>
             
              {selectedSkill === key && (
                <SelectedBadge>
                  <svg className="check" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </SelectedBadge>
              )}
            </SkillCard>
          ))}
        </SkillsGrid>

        <CharacterProfile onClick={(e) => e.stopPropagation()}>
          <AvatarContainer>
            <Avatar skill={selectedSkill} />
          </AvatarContainer>
         
          <Stats>
            <StatTitle>{getDisplayTitle()}</StatTitle>
            <PersonalityList>
              {selectedSkillData?.avatar?.personality?.map((trait, index) => (
                <PersonalityItem key={index}>
                  <Bullet>•</Bullet>
                  <span>{trait}</span>
                </PersonalityItem>
              ))}
            </PersonalityList>
          </Stats>
        </CharacterProfile>
      </ContentWrapper>
      
      <BottomSection>
        {selectedSkill !== 'default' && (
          <>
            <SkillsHead>Skills</SkillsHead>
            <SoftwareIcons>
              {selectedSkillData.softwareIcons.map((icon, index) => (
                <SoftwareIconWrapper key={index}>{icon}</SoftwareIconWrapper>
              ))}
            </SoftwareIcons>
            <Tagline>{selectedSkillData.tagline}</Tagline>
          
          </>
        )}

        <CallToAction onClick={(e) => e.stopPropagation()}>
          <CallToActionText>
            Need a creative power-up for your Brand or Project?
          </CallToActionText>
          <CreateButton>
            Let's Create
          </CreateButton>
        </CallToAction>
      </BottomSection>
    </Container>
  );
};

// ... (Animations and most styled-components remain the same)

// Animations
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const scaleIn = keyframes`
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
`;

const jiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  75% { transform: rotate(-2deg); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Styled components
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 40px;
  max-width: 800px;
`;

const Title = styled.h1`
  margin-left: 5%;
  font-size: 3.5rem;
  font-weight: 900;
  color: #1e293b;
  margin-bottom: -5%;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PowerUpTitle = styled.h2`
  margin-left: 5%;
  font-size: 3.5rem;
  font-weight: 900;
  color: rgb(0, 0, 0);
  position: relative;
  display: inline-block;
 
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LoadingDots = styled.span`
  position: absolute;
  right: -40px;
  bottom: 10px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  width: 30px;
  display: inline-block;
  text-align: left;
`;

const ContentWrapper = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 90px;
  width: 80%;
  margin-bottom: 2px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;

const SkillCard = styled.div`
  background: ${props => props.$selected ? '#dbeafe' : 'white'};
  border: 3px solid ${props => props.$selected ? '#3b82f6' : '#cbd5e1'};
  height:150px;
  border-radius: 16px;
  padding: 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
 
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
    border-color: ${props => props.$selected ? '#3b82f6' : '#94a3b8'};
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
 
  .icon {
    width: 40px;
    height: 40px;
    color: ${props => props.$selected ? '#3b82f6' : '#475569'};
    transition: all 0.3s ease;
  }
`;

const SkillName = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  color: ${props => props.$selected ? '#1e40af' : '#334155'};
  transition: all 0.3s ease;
`;

const SelectedBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 10px;
  height: 30px;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${scaleIn} 0.3s ease-out;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
 
  .check {
    width: 16px;
    height: 16px;
    color: white;
  }
`;

const CharacterProfile = styled.div`
  background: white;
  border-radius: 24px;
  padding: 1px;
  display: flex;
  flex-direction: row;
  height: fit-content;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AvatarImage = styled.img`
  width: 300px;
  height: 550px;
  padding-right:20px;
  border-radius: 20px;
  object-fit: contain;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 250px;
    height: auto;
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const Stats = styled.div`
  width: 40%;
  background: rgb(2, 2, 2);
  border-radius: 16px;
  padding: 20px;
`;

const StatTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 30px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const PersonalityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PersonalityItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  color: #e2e8f0;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Bullet = styled.span`
  color: rgb(255, 255, 255);
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 5px;
`;

const BottomSection = styled.div`
  margin-top:-1%;
  margin-left: 55%;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 30%;
  gap: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SkillsHead = styled.h2`
color: black;
font-size:2.5rem;
margin-bottom: 0;
`;

const Tagline = styled.p`
  color: #1e293b;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: left;
  animation: ${fadeIn} 0.5s ease;
`;

const SoftwareIcons = styled.div`
  display: flex;
  justify-content: left;
  gap: 20px;
  animation: ${fadeIn} 0.5s ease 0.2s;
  animation-fill-mode: both;
`;

const SoftwareIconWrapper = styled.div`
  color: #475569;
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6;
  }
`;

const CallToAction = styled.div`
  text-align: left;
  width: 100%;
  padding: 1px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CallToActionText = styled.p`
  color: #475569;
  margin-bottom: 20px;
  font-size: 1.05rem;
  line-height: 1.5;
`;

const CreateButton = styled.button`
  
  color: black;
  border: solid;
  border-radius: 12px;
  padding: 14px 5px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  width:40%;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  
 
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    animation:none;
  }
`;

export default PowerUpSelector;