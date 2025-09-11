// Image assets from Figma MCP
const imgGroup24 = "/assets/7fab271a5897065531b107ef280efe3173033bbd.png";
const imgGroup23 = "/assets/d2d68ea1ce0fa4f12bac8903da639812d8976351.png";
const imgVector = "/assets/3872ad762fe95539f6bb5fe0e1eda36575871062.svg";
const imgVector1 = "/assets/c130ce6d17d22ed1dbfc0b6cf407ede8a4f75160.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Layla13Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla13({ onContinueClick, onBackClick, onHomeClick }: Layla13Props) {
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

      {/* Header background */}
      <div 
        style={{ 
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '756px',
          height: '27px',
          background: 'linear-gradient(to right, #ec7624, #ffb061)',
          zIndex: 2
        }}
      />

      {/* Main title */}
      <div 
        data-enter
        data-enter-order="1"
        style={{ 
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
          zIndex: 6
        }}
      >
        Case Study: Layla
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
          height: '523px',
          zIndex: 1
        }}
      >
        {/* Treatment background */}
        <div 
          data-enter-swipe
          style={{ 
            position: 'absolute',
            left: '174px', // 246 - 72
            top: '0px', // 276 - 276
            width: '762px',
            height: '169px',
            backgroundColor: '#7ccada',
            zIndex: 2
          }}
        />

        {/* Treatment title */}
        <div 
          data-enter
          data-enter-order="3"
          style={{ 
            position: 'absolute',
            left: '411px', // 483 - 72
            top: '25px', // 301 - 276
            width: '486px',
            height: '124px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '51px',
            color: 'white',
            lineHeight: 'normal',
            whiteSpace: 'pre',
            zIndex: 3
          }}
        >
          <p style={{ margin: 0 }}>Patient response to</p>
          <p style={{ margin: 0 }}>ENHERTU</p>
        </div>

        {/* Patient image */}
        <div 
          data-enter
          data-enter-order="4"
          style={{ 
            position: 'absolute',
            left: '0px', // 72 - 72
            top: '0px', // 276 - 276
            width: '366px',
            height: '366px',
            zIndex: 4
          }}
        >
          <img 
            src={imgVector} 
            alt="Patient" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>

        {/* Treatment container */}
        <div 
          data-enter
          data-enter-order="5"
          style={{ 
            position: 'absolute',
            left: '0px', // 72 - 72
            top: '103px', // 379 - 276
            width: '937px',
            height: '420px',
            backgroundColor: '#d5eff4',
            borderTopLeftRadius: '93px',
            zIndex: 1
          }}
        />

        {/* Treatment text */}
        <div 
          data-enter
          data-enter-order="6"
          style={{ 
            position: 'absolute',
            left: '366px', // 438 - 72
            top: '191px', // 467 - 276
            width: '523px',
            height: '175px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '31px',
            color: 'black',
            lineHeight: '54px',
            zIndex: 6
          }}
        >
          <ul style={{ listStyleType: 'disc', marginLeft: '46.5px' }}>
            <li>
              There was a complete response after three cycles of treatment
            </li>
          </ul>
        </div>

        {/* Additional treatment text */}
        <div 
          data-enter
          data-enter-order="7"
          style={{ 
            position: 'absolute',
            left: '6px', // 78 - 72
            top: '388px', // 664 - 276
            width: '901px',
            height: '135px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '31px',
            color: 'black',
            lineHeight: '54px',
            zIndex: 6
          }}
        >
          <ul style={{ listStyleType: 'disc', marginLeft: '46.5px', marginBottom: 0 }}>
            <li>
              As of November 2023, treatment with ENHERTU is ongoing
            </li>
          </ul>
          <p style={{ lineHeight: '54px', margin: 0 }}>&nbsp;</p>
        </div>

        {/* Secondary image */}
        <div 
          data-enter
          data-enter-order="8"
          style={{ 
            position: 'absolute',
            left: '95.99px', // 167.99 - 72
            top: '83px', // 359 - 276
            width: '174.04px',
            height: '217.02px',
            zIndex: 5
          }}
        >
          <img 
            src={imgVector1} 
            alt="Treatment response" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
      </div>

      {/* Scan labels */}
      <div 
        data-enter
        data-enter-order="9"
        style={{ 
          position: 'absolute',
          left: '72px',
          top: '871px',
          width: '411px',
          height: '56px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>Scan showing breast tumor</p>
        <p style={{ margin: 0 }}>and skin thickness:</p>
      </div>

      <div 
        data-enter
        data-enter-order="10"
        style={{ 
          position: 'absolute',
          left: '597px',
          top: '871px',
          width: '411px',
          height: '56px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>Scan showing complete response:</p>
      </div>

      {/* Scan images */}
      <div 
        data-enter
        data-enter-order="11"
        style={{ 
          position: 'absolute',
          left: '72px',
          top: '922px',
          width: '415px',
          height: '387px',
          backgroundImage: `url(${imgGroup23})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'top left',
          zIndex: 4
        }}
      />

      <div 
        data-enter
        data-enter-order="12"
        style={{ 
          position: 'absolute',
          left: '540px',
          top: '955px',
          width: '540px',
          height: '354px',
          backgroundImage: `url(${imgGroup24})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'top left',
          zIndex: 4
        }}
      />

      {/* Scan dates */}
      <div 
        data-enter
        data-enter-order="13"
        style={{ 
          position: 'absolute',
          left: '71px',
          top: '1338px',
          width: '413px',
          height: '40px',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'italic',
          fontSize: '28px',
          color: '#5d6771',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 6
        }}
      >
        (Scans taken October 2018)
      </div>

      <div 
        data-enter
        data-enter-order="14"
        style={{ 
          position: 'absolute',
          left: '596px',
          top: '1338px',
          width: '412px',
          height: '40px',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'italic',
          fontSize: '28px',
          color: '#5d6771',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 6
        }}
      >
        (Scans taken June 2022)
      </div>

      {/* Main message */}
      <div 
        data-enter
        data-enter-order="15"
        style={{ 
          position: 'absolute',
          left: '78px',
          top: '1450px',
          width: '930px',
          height: '80px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '28px',
          color: '#ec7624',
          lineHeight: '40px',
          zIndex: 6
        }}
      >
        In DESTINY-Breast03, 21% of patients had a complete response with ENHERTU
      </div>

      {/* Continue button */}
      <div 
        data-enter
        data-enter-order="16"
        style={{ 
          position: 'absolute',
          left: '190px',
          top: '1615px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 6
        }}
        onClick={onContinueClick}
      >
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0.29%',
          right: '0px',
          top: '0.89%',
          width: '100%',
          height: '100%'
        }}>
          <img 
            src={img} 
            alt="Button background" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          right: '82.4%',
          top: '0px',
          width: '17.6%',
          height: '100%'
        }}>
          <img 
            src={img1} 
            alt="Button icon" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Push the Paradigm
        </div>
      </div>

      {/* Footer text */}
      <div 
        data-enter
        data-enter-order="17"
        style={{ 
          position: 'absolute',
          left: '76px',
          top: '1875px',
          width: '932px',
          height: '15px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'medium',
          fontSize: '12px',
          color: 'black',
          lineHeight: '15px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>
          Hurvitz SA, et al. Lancet. 2023;401:105–117.
        </p>
      </div>
    </div>
  );
}
