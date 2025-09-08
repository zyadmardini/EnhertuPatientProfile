// Image assets from Figma MCP
const imgButtonContainer = "http://localhost:3845/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIconContainer = "http://localhost:3845/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "http://localhost:3845/assets/3872ad762fe95539f6bb5fe0e1eda36575871062.svg";
const imgVector1 = "http://localhost:3845/assets/c96892880fc45d921df62ae70aad2d9529eb52f5.svg";

interface Samira9Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onAdverseEventsClick: () => void;
}

export default function Samira9({ onBackClick, onHomeClick, onAdverseEventsClick }: Samira9Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: 'white'
    }}>
      {/* Header background */}
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
      <div 
        data-enter
        data-enter-order="1"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 468px)',
          top: '167px',
          width: '656px',
          height: '80px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '50px',
          color: '#5b6670',
          lineHeight: 'normal',
          zIndex: 3
        }}>
        <p style={{ margin: 0 }}>Case Study: Samira</p>
      </div>

      {/* Content container */}
      <div 
        data-enter-group
        data-enter-order="2"
        style={{ 
          position: 'absolute',
          left: '72px',
          top: '276px',
          width: '937px',
          height: '500px',
          zIndex: 1
        }}>
        
        {/* Treatment background */}
        <div 
          data-enter-swipe
          style={{ 
            position: 'absolute',
            left: '174px',
            top: '0px',
            width: '762px',
            height: '169px',
            backgroundColor: '#7ccada',
            zIndex: 2
          }} />

        {/* Treatment title */}
        <div style={{ 
          position: 'absolute',
          left: '411px',
          top: '25px',
          width: 'auto',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '51px',
          color: 'white',
          lineHeight: 'normal',
          zIndex: 3
        }}>
          <p style={{ margin: 0 }}>Patient response to</p>
          <p style={{ margin: 0 }}>ENHERTU</p>
        </div>

        {/* Vector image */}
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

        {/* Vector1 image overlay */}
        <div style={{
          position: 'absolute',
          left: '87px',
          top: '75px',
          width: '203px',
          height: '226px',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: '1',
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector1} />
        </div>

        {/* Treatment container */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '103px',
          width: '937px',
          height: '397px',
          backgroundColor: '#d5eff4',
          borderTopLeftRadius: '93px',
          zIndex: 1
        }} />

        {/* Treatment content */}
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
            <li style={{ listStyleType: 'disc' }}>
              At the first disease reassessment in January 2023, there was evidence of partial response in the hepatic and breast lesions
            </li>
          </ul>
        </div>
      </div>

      {/* Adverse Events Button */}
      <div 
        data-enter
        data-enter-order="3"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 349.5px)',
          top: '1615px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 6
        }}
        onClick={() => {
          console.log('Adverse Events button clicked - navigating to Samira10');
          onAdverseEventsClick();
        }}
      >
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '2.03px',
          right: '0px',
          top: '1px',
          zIndex: 1
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgButtonContainer} />
        </div>
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          right: '576.4px',
          top: '0px',
          zIndex: 2
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgIconContainer} />
        </div>
        <div style={{ 
          position: 'absolute',
          top: '32px',
          left: '123.2px',
          right: '29px',
          bottom: '32px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '31px',
          color: 'white',
          textAlign: 'center',
          lineHeight: '54px',
          zIndex: 3
        }}>
          <p style={{ margin: 0 }}>Adverse Events management</p>
        </div>
      </div>

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
    </div>
  );
}
