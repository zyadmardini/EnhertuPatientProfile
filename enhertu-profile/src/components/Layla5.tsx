// Image assets from Figma MCP
const imgGroup19 = "/assets/cd1685d54710cc02c1a2d76c3a651206fc0aec95.png";
const imgGroup20 = "/assets/5cacd1e4fdc42282cbb7afba37ff9f27335b3180.png";
const imgGroup21 = "/assets/66cbb2fc1ad06044a502043bc6acd5754f901aab.png";
const imgButtonContainer = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIconContainer = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/f74766b67109569552a5a61be5a8cfb9605d8c13.svg";
const imgVector1 = "/assets/0a8f93ce89120f39f92a645ee9cb2f0b34eb570c.svg";
const imgArrow1 = "/assets/f6e2bb773eb10d316a581d62a956882e5fcfd317.svg";

interface Layla5Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla5({ onContinueClick, onBackClick, onHomeClick }: Layla5Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: 'white'
    }}>
      {/* Back Button - Top Left */}
      <div 
        style={{ 
          position: 'absolute',
          top: '50px',
          left: '50px',
          width: '60px',
          height: '60px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#5b6670',
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}
        onClick={onBackClick}
      >
        ←
      </div>

      {/* Home Button - Top Right */}
      <div 
        style={{ 
          position: 'absolute',
          top: '50px',
          right: '50px',
          width: '60px',
          height: '60px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#5b6670',
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}
        onClick={onHomeClick}
      >
        ⌂
      </div>

      {/* Header Background */}
      <div style={{ 
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '756px',
        height: '27px',
        background: 'linear-gradient(to right, #ec7624, #ffb061)',
        zIndex: 2
      }} />
      
      {/* Title */}
      <div style={{ 
        position: 'absolute',
        left: '72px',
        top: '167px',
        width: '656px',
        height: '80px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '50px',
        color: '#5b6670',
        lineHeight: 'normal',
        zIndex: 3
      }} data-enter data-enter-order="1">
        <p style={{ margin: 0 }}>Case Study: Layla</p>
      </div>

      {/* Content Container */}
      <div style={{ 
        position: 'absolute',
        left: '72px',
        top: '276px',
        width: '937px',
        height: '805px'
      }} data-enter-group data-enter-order="2">
        {/* Treatment Container - Background layer */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '103px',
          width: '937px',
          height: '424px',
          backgroundColor: '#f3f7d9',
          borderTopLeftRadius: '93px',
          zIndex: 1
        }} />
        
        {/* Treatment Background */}
        <div style={{ 
          position: 'absolute',
          left: '174px',
          top: '0px',
          width: '762px',
          height: '169px',
          backgroundColor: '#c5d752',
          zIndex: 2
        }} data-enter-swipe data-enter-order="4" />
        
        {/* Treatment Title */}
        <div style={{ 
          position: 'absolute',
          left: '411px',
          top: '54px',
          width: '314px',
          height: '62px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '51px',
          color: 'white',
          lineHeight: 'normal',
          whiteSpace: 'pre',
          zIndex: 3
        }}>
          <p style={{ margin: 0 }}>1L treatment</p>
        </div>
        
        {/* Patient Image */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '366px',
          height: '366px',
          zIndex: 4
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
        </div>
        
        {/* Patient Image Overlay */}
        <div style={{ 
          position: 'absolute',
          left: '129.76px',
          top: '100.65px',
          width: '128.1px',
          height: '187.769px',
          zIndex: 5
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector1} />
        </div>
        
        {/* Treatment Details */}
        <div style={{ 
          position: 'absolute',
          left: '366px',
          top: '191px',
          width: '523px',
          height: '175px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '31px',
          color: 'black',
          lineHeight: '54px',
          zIndex: 6
        }}>
          <ul style={{ margin: 0, paddingLeft: '46.5px' }}>
            <li style={{ marginBottom: 0 }}>
              <span>There was local and progressive disease in the lungs in February 2022</span>
            </li>
          </ul>
        </div>
        
        {/* Treatment Summary */}
        <div style={{ 
          position: 'absolute',
          left: '6px',
          top: '388px',
          width: '901px',
          height: '139px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '31px',
          color: 'black',
          lineHeight: '54px',
          zIndex: 6
        }}>
          <ul style={{ margin: 0, paddingLeft: '46.5px' }}>
            <li style={{ marginBottom: 0 }}>
              <span>1L therapy was given for more than three years and four months (September 2018–February 2022)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Scan Description */}
      <div style={{ 
        position: 'absolute',
        left: '111.5px',
        top: '838px',
        width: '930px',
        height: '40px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '28px',
        color: '#5d6771',
        lineHeight: '40px',
        zIndex: 3
      }} data-enter data-enter-order="3">
        <p style={{ margin: 0 }}>Scans showing progressive disease in the lungs:</p>
      </div>

      {/* Scan Images Container */}
      <div style={{ 
        position: 'absolute',
        left: '79px',
        top: '913px',
        width: '930px',
        height: '814px'
      }} data-enter-group data-enter-order="4">
        {/* Arrow */}
        <div style={{ 
          position: 'absolute',
          left: '245.5px',
          top: '0px',
          width: '439px',
          height: '623px',
          zIndex: 1
        }}>
          <div style={{
            position: 'absolute',
            left: '-310px',
            top: '313px',
            transform: 'rotate(90deg)',
            width: '623px',
            height: '0px'
          }}>
            <div style={{ 
              position: 'absolute',
              bottom: '-14.73px',
              left: '0px',
              right: '-0.32%',
              top: '-14.73px'
            }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgArrow1} />
            </div>
          </div>
        </div>
        
        {/* Scan Images */}
        <div style={{ 
          position: 'absolute',
          left: '323.5px',
          top: '0px',
          width: '361px',
          height: '627px',
          display: 'flex',
          flexDirection: 'column',
          gap: '51.5px',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          zIndex: 2
        }}>
          {/* First Scan */}
          <div style={{ 
            width: '360px',
            height: '174px',
            backgroundImage: `url('${imgGroup19}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundPosition: 'top left',
            flexShrink: 0
          }} />
          
          {/* Second Scan */}
          <div style={{ 
            width: '361px',
            height: '175px',
            backgroundImage: `url('${imgGroup20}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundPosition: 'top left',
            flexShrink: 0
          }} />
          
          {/* Third Scan */}
          <div style={{ 
            width: '361px',
            height: '175px',
            backgroundImage: `url('${imgGroup21}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundPosition: 'top left',
            flexShrink: 0
          }} />
        </div>
        
        {/* Scan Date */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '644.5px',
          width: '930px',
          height: '40px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'normal',
          fontStyle: 'italic',
          fontSize: '28px',
          color: '#5d6771',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 3
        }}>
          <p style={{ margin: 0 }}>(Scans taken February 2022)</p>
        </div>
      </div>

      {/* Button Treatment */}
      <div 
        style={{ 
          position: 'absolute',
          left: '194.5px',
          top: '1615px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 100
        }} 
        onClick={onContinueClick} 
        data-enter 
        data-enter-order="5"
      >
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '2.03px',
          right: '0px',
          top: '1px'
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgButtonContainer} />
        </div>
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          right: '82.4%',
          top: '0px'
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgIconContainer} />
        </div>
        <div style={{ 
          position: 'absolute',
          top: '32px',
          right: '29px',
          bottom: '32px',
          left: '123px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '31px',
          color: 'white',
          textAlign: 'center',
          lineHeight: '54px'
        }}>
          <p style={{ margin: 0 }}>Next treatment options</p>
        </div>
      </div>

      {/* Footer Note */}
      <div style={{ 
        position: 'absolute',
        left: 'calc(50% - 483px)',
        top: '1885px',
        width: '967px',
        height: '15px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
        fontSize: '12px',
        color: 'black',
        lineHeight: '15px',
        zIndex: 3
      }}>
        <p style={{ margin: 0 }}>1L, first-line.</p>
      </div>
    </div>
  );
}
