// Image assets from Figma MCP
const imgLayla = "/assets/79478245b2eb932aea067aead4415c7e229164ad.png";
const imgEllipse1 = "/assets/b5e1855b59335aea6be52c1e450d97f243cb25a3.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgButtonIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Layla2Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla2({ onContinueClick, onBackClick, onHomeClick }: Layla2Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: 'white'
    }}>
      {/* Navigation Buttons */}
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
      <div 
        data-enter
        data-enter-order="1"
        style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '756px',
          height: '27px',
          background: 'linear-gradient(to right, #ec7624, #ffb061)',
          zIndex: 2
        }}
      />

      {/* Title */}
      <div 
        data-enter
        data-enter-order="2"
        style={{ 
          position: 'absolute',
          left: '100px',
          top: '167px',
          width: '656px',
          height: '80px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '50px',
          color: '#5b6670',
          lineHeight: 'normal',
          zIndex: 3
        }}
      >
        <p style={{ margin: '0', lineHeight: 'normal' }}>Case Study: Layla</p>
      </div>

      {/* Ellipse Background */}
      <div 
        data-enter
        data-enter-order="3"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '276px',
          width: '440px',
          height: '440px',
          zIndex: 1
        }}
      >
        <img 
          alt="" 
          style={{ 
            display: 'block', 
            maxWidth: 'none', 
            width: '100%', 
            height: '100%' 
          }} 
          src={imgEllipse1} 
        />
      </div>

      {/* Treatment Background */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          left: '293px',
          top: '276px',
          width: '787px',
          height: '169px',
          backgroundColor: '#ec7624',
          zIndex: 2
        }}
      />

      {/* Patient Image */}
      <div 
        data-enter
        data-enter-order="5"
        style={{ 
          position: 'absolute',
          left: '94px',
          top: '301px',
          width: '397px',
          height: '391px',
          backgroundImage: `url('${imgLayla}')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }}
      />

      {/* Section Title */}
      <div 
        data-enter
        data-enter-order="6"
        style={{ 
          position: 'absolute',
          left: '534px',
          top: '300px',
          width: '449px',
          height: '108px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '45px',
          color: 'white',
          lineHeight: 'normal',
          whiteSpace: 'pre',
          zIndex: 3
        }}
      >
        <p style={{ margin: '0', lineHeight: 'normal' }}>Patient presentation</p>
        <p style={{ margin: '0', lineHeight: 'normal' }}>at diagnosis</p>
      </div>

      {/* Patient Details */}
      <div 
        data-enter
        data-enter-order="7"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '807px',
          width: '759px',
          height: '920px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '31px',
          color: 'black',
          lineHeight: '54px',
          zIndex: 6
        }}
      >
        <ul style={{ 
          listStyleType: 'disc', 
          margin: '0', 
          paddingLeft: '46.5px' 
        }}>
          <li style={{ marginBottom: '0' }}>
            <span>68 year-old postmenopausal Caucasian woman living in Spain</span>
          </li>
          <li style={{ marginBottom: '0' }}>
            <span>No comorbidities</span>
          </li>
          <li style={{ marginBottom: '0' }}>
            <span>Diagnosed with Stage IV HER2-positive BC in September 2018</span>
          </li>
          <li style={{ marginBottom: '0' }}>
            <span>ER-/PR-/HER2-positive (IHC3+)</span>
          </li>
          <li style={{ marginBottom: '0' }}>
            <span>ECOG PS 0</span>
          </li>
          <li>
            <span>T4N0M1 (two small lung nodules and two bone metastases)</span>
          </li>
        </ul>
      </div>

      {/* Footer Text */}
      <div 
        data-enter
        data-enter-order="8"
        style={{ 
          position: 'absolute',
          left: '105px',
          top: '1853px',
          width: '920px',
          height: '30px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '12px',
          color: 'black',
          lineHeight: '15px',
          whiteSpace: 'pre',
          zIndex: 6
        }}
      >
        <p style={{ margin: '0', lineHeight: '15px' }}>BC, breast cancer; ECOG PS, Eastern Cooperative Oncology Group performance status; ER, estrogen receptor; HER2, human epidermal growth factor receptor 2;</p>
        <p style={{ margin: '0', lineHeight: '15px' }}>IHC, immunohistochemistry; M, metastases; N, node; V, intravenous; PR, progesterone receptor; T, tumor.</p>
      </div>

      {/* Treatment Button */}
      <div 
        data-enter
        data-enter-order="9"
        style={{ 
          position: 'absolute',
          left: '191px',
          top: '1615px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 100
        }}
        onClick={onContinueClick}
      >
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0.29%',
          right: '0px',
          top: '0.89%',
          zIndex: 1
        }}>
          <img 
            alt="" 
            style={{ 
              display: 'block', 
              maxWidth: 'none', 
              width: '100%', 
              height: '100%' 
            }} 
            src={imgButton} 
          />
        </div>
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          right: '82.4%',
          top: '0px',
          zIndex: 2
        }}>
          <img 
            alt="" 
            style={{ 
              display: 'block', 
              maxWidth: 'none', 
              width: '100%', 
              height: '100%' 
            }} 
            src={imgButtonIcon} 
          />
        </div>
        <div style={{ 
          position: 'absolute',
          top: '28.57%',
          right: '4.15%',
          bottom: '28.57%',
          left: '17.6%',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '31px',
          color: 'white',
          textAlign: 'center',
          lineHeight: '54px',
          zIndex: 3
        }}>
          <p style={{ margin: '0', lineHeight: '54px' }}>Treatment</p>
        </div>
      </div>
    </div>
  );
}