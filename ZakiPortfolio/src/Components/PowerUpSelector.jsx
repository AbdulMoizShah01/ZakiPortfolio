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
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 21.1795C28 22.9884 27.2814 24.7232 26.0023 26.0023C24.7232 27.2814 22.9884 28 21.1795 28H6.82051C5.0116 28 3.27678 27.2814 1.99768 26.0023C0.718588 24.7232 0 22.9884 0 21.1795V6.82051C0 5.0116 0.718588 3.27678 1.99768 1.99768C3.27678 0.718588 5.0116 0 6.82051 0H21.1795C22.9884 0 24.7232 0.718588 26.0023 1.99768C27.2814 3.27678 28 5.0116 28 6.82051V21.1795ZM6.82051 20.8205C6.5349 20.8205 6.26098 20.7071 6.05901 20.5051C5.85705 20.3031 5.74359 20.0292 5.74359 19.7436V8.25641C5.74359 7.97079 5.85705 7.69687 6.05901 7.49491C6.26098 7.29295 6.5349 7.17949 6.82051 7.17949H9.69231C10.7396 7.17949 11.7439 7.59551 12.4845 8.33604C13.225 9.07657 13.641 10.0809 13.641 11.1282C13.641 12.1755 13.225 13.1798 12.4845 13.9204C11.7439 14.6609 10.7396 15.0769 9.69231 15.0769H7.89744V19.7436C7.89744 20.0292 7.78397 20.3031 7.58201 20.5051C7.38005 20.7071 7.10613 20.8205 6.82051 20.8205ZM7.89744 12.9231H9.69231C10.1683 12.9231 10.6249 12.734 10.9615 12.3974C11.2981 12.0608 11.4872 11.6042 11.4872 11.1282C11.4872 10.6522 11.2981 10.1956 10.9615 9.85904C10.6249 9.52244 10.1683 9.33333 9.69231 9.33333H7.89744V12.9231ZM20.216 13.0451C20.2785 13.1728 20.3656 13.2868 20.4724 13.3806C20.5792 13.4744 20.7035 13.5462 20.8381 13.5917C20.9727 13.6373 21.115 13.6557 21.2568 13.646C21.3986 13.6363 21.5371 13.5986 21.6643 13.5351C21.7914 13.4716 21.9048 13.3836 21.9977 13.2761C22.0907 13.1686 22.1615 13.0438 22.206 12.9088C22.2505 12.7738 22.2678 12.6313 22.257 12.4896C22.2462 12.3479 22.2074 12.2097 22.143 12.0831C21.8376 11.4725 21.3683 10.959 20.7875 10.6001C20.2067 10.2412 19.5375 10.0512 18.8548 10.0513H18.3077C17.4508 10.0513 16.6291 10.3917 16.0232 10.9976C15.4173 11.6034 15.0769 12.4252 15.0769 13.2821C15.0769 14.1389 15.4173 14.9607 16.0232 15.5666C16.6291 16.1724 17.4508 16.5128 18.3077 16.5128H19.0256C19.3113 16.5128 19.5852 16.6263 19.7871 16.8282C19.9891 17.0302 20.1026 17.3041 20.1026 17.5897C20.1026 17.8754 19.9891 18.1493 19.7871 18.3512C19.5852 18.5532 19.3113 18.6667 19.0256 18.6667H18.4771C18.1949 18.6665 17.9182 18.5879 17.6781 18.4395C17.438 18.2912 17.2438 18.079 17.1173 17.8267C16.9884 17.5734 16.7647 17.3814 16.4948 17.2924C16.2249 17.2034 15.9308 17.2247 15.6765 17.3517C15.4223 17.4786 15.2285 17.7009 15.1375 17.9701C15.0464 18.2392 15.0654 18.5335 15.1904 18.7887C15.4956 19.3991 15.9647 19.9125 16.5452 20.2713C17.1257 20.6302 17.7947 20.8203 18.4771 20.8205H19.0256C19.8825 20.8205 20.7043 20.4801 21.3101 19.8742C21.916 19.2684 22.2564 18.4466 22.2564 17.5897C22.2564 16.7329 21.916 15.9111 21.3101 15.3052C20.7043 14.6994 19.8825 14.359 19.0256 14.359H19.0256C18.0221 14.359 17.7482 14.2455 17.5462 14.0436C17.3442 13.8416 17.2308 13.5677 17.2308 13.2821C17.2308 12.9964 17.3442 12.7225 17.5462 12.5206C17.7482 12.3186 18.0221 12.2051 18.3077 12.2051H18.8562C19.4306 12.2051 19.959 12.5311 20.216 13.0451Z" fill="black"/>
</svg>,
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8983 12.1555L11.002 15.0169H13.984L13.0704 12.1555C12.8886 11.5836 12.7304 10.9552 12.5846 10.3801L12.4844 9.98364H12.4499C12.3914 10.2156 12.3318 10.4584 12.2712 10.7123C12.1553 11.1981 12.0346 11.7027 11.8983 12.1555Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.20855 0.45256C11.6556 -0.150853 17.1525 -0.150853 22.5996 0.45256C25.5753 0.784768 27.9744 3.12746 28.3239 6.1142C28.9694 11.6374 28.9694 17.217 28.3239 22.7403C27.9744 25.727 25.5753 28.0697 22.6011 28.4035C17.1536 29.007 11.6561 29.007 6.20855 28.4035C3.23278 28.0697 0.833675 25.727 0.48423 22.7418C-0.16141 17.2181 -0.16141 11.6379 0.48423 6.1142C0.833675 3.12746 3.23278 0.784768 6.20855 0.45256ZM20.5656 11.5173V19.9118H18.4282V11.5173H20.5656ZM18.3091 9.17302C18.3091 8.518 18.7901 8.01812 19.4969 8.01812C20.2224 8.01812 20.6706 8.518 20.6878 9.17302C20.6878 9.81079 20.2208 10.3107 19.4812 10.3107C18.7745 10.3107 18.3091 9.81079 18.3091 9.17302ZM15.3975 19.9118L14.3461 16.6195H10.6573L9.65755 19.9118H7.46843L11.1917 8.29392H13.8979L17.6729 19.9118H15.3975Z" fill="black"/>
</svg>
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
    

      <MainContent>
        <LeftColumn>
            <Header>
        <Title>SELECT YOUR</Title>
        <PowerUpTitle>
          POWER-UP<LoadingDots>{dots}</LoadingDots>
        </PowerUpTitle>
      </Header>
          <SkillsGrid>
            {Object.entries(skills).filter(([key]) => key !== 'default').map(([key, skill]) => (
              <SkillItem key={key}>
                <SkillCard 
                  $selected={selectedSkill === key}
                  onClick={() => setSelectedSkill(key)}
                >
                  <IconWrapper $selected={selectedSkill === key}>
                    {skill.icon}
                  </IconWrapper>
                  {selectedSkill === key && (
                    <SelectedBadge>
                      <svg className="check" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </SelectedBadge>
                  )}
                </SkillCard>
                <SkillName $selected={selectedSkill === key}>
                  {skill.name}
                </SkillName>
              </SkillItem>
            ))}
          </SkillsGrid>
        </LeftColumn>

        <CenterColumn>
          <AvatarContainer>
            <Avatar skill={selectedSkill} />
          </AvatarContainer>
        </CenterColumn>

        <RightColumn>
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

            <CallToAction>
              <CallToActionText>
                Need a creative power-up for your Brand or Project?
              </CallToActionText>
              <CreateButton>
                Let's Create
              </CreateButton>
            </CallToAction>
          </BottomSection>
        </RightColumn>
      </MainContent>
    </Container>
  );
};

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
  margin-top: 2rem;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  background-color: #ffffffff;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 40px;
  max-width: 100%;
  padding: 0 5%;
`;

const MainContent = styled.div`
  display: flex;
  padding: 0 5%;
  gap: 40px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #1e293b;
  margin-bottom: -7%;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PowerUpTitle = styled.h2`
  font-size: 3rem;
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

const LeftColumn = styled.div`
  flex: 0 0 30%;
  
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const CenterColumn = styled.div`
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 1200px) {
    order: -1;
    margin-bottom: 40px;
  }
`;

const RightColumn = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillCard = styled.div`
  background: ${props => props.$selected ? '#dbeafe' : 'white'};
  border: 3px solid ${props => props.$selected ? '#000000ff' : '#cbd5e1'};
  height: 120px;
  width: 120px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
 
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: ${props => props.$selected ? '#000000ff' : '#000000ff'};
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
 
  .icon {
    width: 100px;
    height: 100px;
    color: ${props => props.$selected ? '#000000ff' : '#000000ff'};
    transition: all 0.3s ease;
  }
`;

const SkillName = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  color: ${props => props.$selected ? '#000000ff' : '#000000ff'};
  transition: all 0.3s ease;
  padding: 10px 0;
  width: 100%;
`;

const SelectedBadge = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background: #000000ff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;


const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AvatarImage = styled.img`
  width: 300px;
  height: 600px;
  object-fit: contain;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 250px;
    height: auto;
  }
`;

const Stats = styled.div`
  width: 450px;
  height: fit-content;
  flex: 1;
  background: rgb(2, 2, 2);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 4px;
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
  gap: 20px;
  margin-bottom: 10px;
  color: #e2e8f0;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Bullet = styled.span`
  color: rgb(255, 255, 255);
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 1px;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

const SkillsHead = styled.h2`
  color: black;
  font-size: 2.5rem;
  margin-bottom: 5px;
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
  margin-bottom: 5px;
  animation: ${fadeIn} 0.5s ease 0.2s;
  animation-fill-mode: both;
`;

const SoftwareIconWrapper = styled.div`
  color: #475569;
  transition: color 0.3s ease;

  &:hover {
    color: #000000ff;
  }
`;

const CallToAction = styled.div`
  text-align: left;
  width: 100%;
  padding: 2px;
  background: white;
  border-radius: 24px;
  margin-top: 20px;
`;

const CallToActionText = styled.p`
  color: #475569;
  margin-bottom: 5px;
  font-size: 1.05rem;
  line-height: 1.5;
`;

const CreateButton = styled.button`
  background: transparent;
  color: black;
  border: 3px solid black;
  border-radius: 12px;
  padding: 14px 30px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background: black;
    color: white;
  }
`;

export default PowerUpSelector;