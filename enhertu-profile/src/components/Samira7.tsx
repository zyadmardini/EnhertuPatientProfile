// Image assets from Figma MCP
const imgVector = "http://localhost:3845/assets/1cb37998c0178ed5bb98118e77902f2b56b5161e.svg";
const imgVector1 = "http://localhost:3845/assets/96ec5b8ed2fa23d37d3d1e8d9f908f1733bdf681.svg";
const imgButton = "http://localhost:3845/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgButtonIcon = "http://localhost:3845/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Samira7Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onInternationalGuidanceClick: () => void;
}

export default function Samira7({ onBackClick, onHomeClick, onInternationalGuidanceClick }: Samira7Props) {
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
          fontWeight: '700',
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
          height: '400px'
        }}>
        {/* Treatment background */}
        <div 
          data-enter-swipe
          data-enter-order="1"
          style={{ 
            position: 'absolute',
            left: '177px',
            top: '0px',
            width: '762px',
            height: '169px',
            backgroundColor: '#58378a',
            zIndex: 2
          }} 
        />

        {/* Treatment title */}
        <div style={{ 
          position: 'absolute',
          left: '483px',
          top: '54px',
          width: 'auto',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '51px',
          color: 'white',
          whiteSpace: 'nowrap',
          zIndex: 3
        }}>
          <p style={{ margin: 0 }}>2L treatment</p>
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

        {/* Vector1 image */}
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

        {/* Treatment container */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '103px',
          width: '937px',
          height: '400px',
          backgroundColor: '#dcd2ec',
          borderRadius: '93px 0px 0px 0px',
          zIndex: 1
        }} />

        {/* Treatment text */}
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
          zIndex: 6
        }}>
          <ul style={{ margin: 0, paddingLeft: '46.5px' }}>
            <li style={{ listStyleType: 'disc', lineHeight: '54px' }}>
              Prophylactic antiemetics (NK1 receptor antagonist + 5HT3 receptor antagonist + corticosteroids) were given to prevent nausea and vomiting
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimer text */}
      <div 
        data-enter
        data-enter-order="3"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 465px)',
          top: '817px',
          width: '930px',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'italic',
          fontSize: '28px',
          color: '#ec7624',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 6
        }}>
        <p style={{ margin: 0 }}>ENHERTU is emetogenic, which includes delayed nausea</p>
        <p style={{ margin: 0 }}>
          and/or vomiting.
          <br />
          Prior to each dose of ENHERTU, patients should be premedicated with a combination regimen of two or three medicinal products
        </p>
      </div>

      {/* Footer text */}
      <div style={{ 
        position: 'absolute',
        left: '73px',
        top: '1854px',
        width: '927px',
        height: 'auto',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
        fontSize: '12px',
        color: 'black',
        lineHeight: '15px',
        zIndex: 6
      }}>
        <p style={{ margin: 0 }}>2L, second-line; NK1, Neurokinin 1.</p>
        <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
          EMA. ENHERTU® SmPC. Available at: https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf. Accessed February 2024.
        </p>
      </div>

      {/* International Guidance Button */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 349.5px)',
          top: '1615px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 6
        }}
        onClick={onInternationalGuidanceClick}
      >
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '2.03px',
          right: '0px',
          top: '1px',
          zIndex: 1
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgButton} />
        </div>
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          right: '576.4px',
          top: '0px',
          zIndex: 2
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgButtonIcon} />
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
          <p style={{ margin: 0 }}>International Guidance</p>
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
