// Image assets from Figma MCP
const imgIconContainer = "/assets/43ba1e0bdfe468eb32cc2cab2ff27bb778dff46c.svg";
const img = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const img1 = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";

interface Layla6Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onOptionClick: (option: string) => void;
}

export default function Layla6({ onBackClick, onHomeClick, onOptionClick }: Layla6Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: '#ffffff'
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
          left: '76px',
          top: '166px',
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
        Interactive Question
      </div>

      {/* Icon Container */}
      <div 
        data-enter
        data-enter-order="3"
        style={{ 
          position: 'absolute',
          left: '74px',
          top: '362px',
          width: '927px',
          height: '176px',
          zIndex: 1
        }}
      >
        <img 
          src={imgIconContainer} 
          alt="Icon Container"
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Icon */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          left: '74px',
          top: '361px',
          width: '123px',
          height: '112px',
          zIndex: 4
        }}
      >
        <div style={{ 
          position: 'absolute',
          left: '1.03%',
          right: '7.47%',
          top: '0%',
          bottom: '0%'
        }}>
          <img 
            src={img} 
            alt="Vector"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
        <div style={{ 
          position: 'absolute',
          left: '0%',
          right: '30.68%',
          top: '7.02%',
          bottom: '7.92%'
        }}>
          <img 
            src={img1} 
            alt="Group"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div 
        data-enter
        data-enter-order="5"
        style={{ 
          position: 'absolute',
          left: '244px',
          top: '395px',
          width: '691px',
          height: '123px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '38px',
          color: '#250858',
          lineHeight: '54px',
          zIndex: 6
        }}
      >
        What would be your choice for her treatment at this stage?
      </div>

      {/* Option 1 - Paclitaxel + Trastuzumab */}
      <div 
        data-enter
        data-enter-order="6"
        style={{ 
          position: 'absolute',
          left: '222px',
          top: '653px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 1
        }}
        onClick={() => onOptionClick('Paclitaxel + Trastuzumab')}
      >
        <div style={{ 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '38px',
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: '54px',
          whiteSpace: 'nowrap',
          zIndex: 6
        }}>
          Paclitaxel + Trastuzumab
        </div>
      </div>

      {/* Option 2 - T-DM1 */}
      <div 
        data-enter
        data-enter-order="7"
        style={{ 
          position: 'absolute',
          left: '222px',
          top: '845px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 1
        }}
        onClick={() => onOptionClick('T-DM1')}
      >
        <div style={{ 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '38px',
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: '54px',
          whiteSpace: 'nowrap',
          zIndex: 6
        }}>
          T-DM1
        </div>
      </div>

      {/* Option 3 - Lapatinib + capecitabine */}
      <div 
        data-enter
        data-enter-order="8"
        style={{ 
          position: 'absolute',
          left: '222px',
          top: '1037px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 1
        }}
        onClick={() => onOptionClick('Lapatinib + capecitabine')}
      >
        <div style={{ 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '38px',
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: '54px',
          whiteSpace: 'nowrap',
          zIndex: 6
        }}>
          Lapatinib + capecitabine
        </div>
      </div>

      {/* Option 4 - T-Dxd */}
      <div 
        data-enter
        data-enter-order="9"
        style={{ 
          position: 'absolute',
          left: '222px',
          top: '1229px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 1
        }}
        onClick={() => onOptionClick('T-Dxd')}
      >
        <div style={{ 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '38px',
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: '54px',
          whiteSpace: 'nowrap',
          zIndex: 6
        }}>
          T-Dxd
        </div>
      </div>
    </div>
  );
}
