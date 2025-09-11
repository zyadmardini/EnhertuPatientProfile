// Image assets from Figma MCP
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/fd146c4fe67459a60e7417374eecc063a3b335e8.svg";

interface Hala9Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala9({ onContinueClick, onBackClick, onHomeClick }: Hala9Props) {
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
        data-enter-delay="0.1"
        style={{ 
          position: 'absolute',
          left: '222px',
          top: '104px',
          width: '782px',
          height: '182px',
          fontSize: '41px',
          fontWeight: 'bold',
          color: '#250858',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.2',
          zIndex: 3
        }}
      >
        <span>Exploratory subgroup analyses show </span>
        <span style={{ color: '#ee7623' }}>consistent ENHERTU efficacy</span>
        <span> in patients with HR– / HER2‑low mBC</span>
      </div>

      {/* HR- Label */}
      <div 
        data-enter
        data-enter-delay="0.2"
        style={{ 
          position: 'absolute',
          left: '96px',
          top: '74px',
          width: '97px',
          height: '59px',
          fontSize: '38px',
          fontWeight: 'bold',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.2',
          zIndex: 3
        }}
      >
        HR-
      </div>

      {/* Vector Background */}
      <div 
        data-enter
        data-enter-delay="0.3"
        style={{ 
          position: 'absolute',
          left: '61px',
          top: '27px',
          width: '138px',
          height: '346px',
          zIndex: 1
        }}
      >
        <div 
          style={{ 
            transform: 'rotate(90deg)',
            width: '346px',
            height: '138px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transformOrigin: 'center',
            transform: 'translate(-50%, -50%) rotate(90deg)'
          }}
        >
          <img 
            src={imgVector} 
            alt="Vector background" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
      </div>

      {/* Info Box */}
      <div 
        data-enter
        data-enter-delay="0.4"
        style={{ 
          position: 'absolute',
          left: '75px',
          top: '960px',
          width: '934px',
          height: '116px',
          backgroundColor: '#f3f7d9',
          border: '4px solid #c5d752',
          zIndex: 1
        }}
      >
        <div 
          style={{ 
            position: 'absolute',
            left: '9px',
            top: '26px',
            width: '916px',
            height: '110px',
            fontSize: '24px',
            fontWeight: '500',
            color: '#5d6771',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.2',
            zIndex: 6
          }}
        >
          Nausea, vomiting, fatigue and alopecia were the most common ENHERTU-related AEs observed in DESTINY-Breast04
        </div>
      </div>

      {/* Treatment Button */}
      <div 
        data-enter
        data-enter-delay="0.8"
        style={{ 
          position: 'absolute',
          left: '190px',
          top: '1615px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 100
        }}
        onClick={onContinueClick}
      >
        <img 
          src={imgButton} 
          alt="Treatment button" 
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain'
          }} 
        />
        <div 
          style={{ 
            position: 'absolute',
            left: '123px',
            top: '32px',
            width: '453px',
            height: '48px',
            fontSize: '31px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            lineHeight: '54px',
            zIndex: 101
          }}
        >
          Tolerability data
        </div>
        <div 
          style={{ 
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '115px',
            height: '112px',
            zIndex: 101
          }}
        >
          <img 
            src={imgIcon} 
            alt="Button icon" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
      </div>

      {/* Footer Text */}
      <div 
        data-enter
        data-enter-delay="0.9"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1815px',
          width: '927px',
          height: '75px',
          fontSize: '12px',
          fontWeight: '500',
          color: 'black',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.25',
          zIndex: 6
        }}
      >
        <div style={{ marginBottom: '4px' }}>
          For efficacy in the hormone receptor–negative cohort, hormone receptor status is based on data from the electronic data capture corrected for misstratification.
        </div>
        <div style={{ marginBottom: '4px' }}>
          CI, confidence interval; CR, controlled release; HER2, human epidermal growth factor receptor 2; HR, hormone receptor; mBC, metastatic breast cancer; mDOR, median duration of response; (m)OS, (median) overall survival; (m)PFS, (median) progression-free survival; NE, not evaluable; cORR, confirmed overall response rate; PR, partial response.
        </div>
        <div>
          Modi S, et al. N Engl J Med. 2022;387:9-20. doi:10.1056/NEJMoa2203690.
        </div>
      </div>
    </div>
  );
}
