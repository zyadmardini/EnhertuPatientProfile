// Image assets from Figma MCP
const imgGraph0021 = "/assets/7a68e790cf9b9e93cc842f74cf8bfc1bd65ba7c6.png";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/154d389c8c393d5c4ba5824a2cf1bb42d4766fd5.svg";

interface Layla8Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Layla8({ onBackClick, onHomeClick, onContinueClick }: Layla8Props) {
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
          background: 'linear-gradient(90deg, #ec7624 0%, #ffb061 100%)',
          zIndex: 2
        }}
      />

      {/* Main content background */}
      <div 
        style={{ 
          position: 'absolute',
          left: '0px',
          top: '27px',
          width: '1080px',
          height: '1893px',
          backgroundColor: '#ffffff',
          zIndex: 1
        }}
      />

      {/* Main title */}
      <div 
        data-enter
        data-enter-delay="0.1"
        style={{ 
          position: 'absolute',
          left: '75px',
          top: '171px',
          width: '929px',
          height: '182px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '41px',
          lineHeight: 'normal',
          color: '#250858',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>
          <span>In DESTINY-Breast03, ENHERTU delivered </span>
          <span style={{ color: '#ee7623' }}>more than 2 years</span>
          <span> improvement in mPFS (28.8 months) vs. T-DM1 (6.8 months)</span>
          <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>1</span>
        </p>
      </div>

      {/* Updated analyses vector background */}
      <div 
        data-enter
        data-enter-delay="0.2"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '343px',
          width: '332px',
          height: '92px',
          zIndex: 4
        }}
      >
        <img 
          src={imgVector} 
          alt="Updated analyses background"
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Updated analyses title */}
      <div 
        data-enter
        data-enter-delay="0.3"
        style={{ 
          position: 'absolute',
          left: '106px',
          top: '355px',
          width: '309px',
          height: '59px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          lineHeight: 'normal',
          color: '#ffffff',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>Updated analyses</p>
        <p style={{ margin: 0 }}>(July 2022)</p>
      </div>

      {/* Initial analysis text */}
      <div 
        data-enter
        data-enter-delay="0.4"
        style={{ 
          position: 'absolute',
          left: '74px',
          top: '463px',
          width: '844px',
          height: '56px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '300',
          fontSize: '19px',
          lineHeight: '28px',
          color: '#000000',
          whiteSpace: 'pre-line',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>In the initial analysis (May 2021), the primary endpoint was met with statistically significant PFS</p>
        <p style={{ margin: 0 }}>(HR=0.28 [95% CI 0.22–0.37, p&lt;0.001])</p>
        <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>2</span>
      </div>

      {/* Graph image */}
      <div 
        data-enter
        data-enter-delay="0.5"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '560px',
          width: '936px',
          height: '383px',
          zIndex: 4
        }}
      >
        <img 
          src={imgGraph0021} 
          alt="PFS improvement graph"
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Consistent PFS container */}
      <div 
        data-enter-group
        data-enter-delay="0.6"
        style={{ 
          position: 'absolute',
          left: '72px',
          top: '984px',
          width: '935px',
          height: '152px',
          zIndex: 1
        }}
      >
        {/* Consistent PFS top border */}
        <div 
          style={{ 
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '935px',
            height: '9px',
            backgroundColor: '#c0d72f',
            zIndex: 2
          }}
        />
        
        {/* Consistent PFS background */}
        <div 
          style={{ 
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '935px',
            height: '152px',
            backgroundColor: '#f3f7d9',
            zIndex: 1
          }}
        />
      </div>

      {/* Consistent PFS text */}
      <div 
        data-enter
        data-enter-delay="0.7"
        style={{ 
          position: 'absolute',
          left: '67px',
          top: '1011px',
          width: '935px',
          height: '112px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'normal',
          fontSize: '25px',
          lineHeight: '28px',
          color: '#5d6771',
          textAlign: 'center',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>
          In the updated analysis (July 2022), consistent PFS was observed in all subgroups tested with ENHERTU,
        </p>
        <p style={{ margin: 0 }}>
          including patients with stable brain metastases at baseline, patients with baseline visceral disease, and patients with prior pertuzumab treatment
        </p>
        <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>1</span>
      </div>

      {/* Continue button */}
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
          zIndex: 6
        }}
        onClick={onContinueClick}
      >
        {/* Button background */}
        <div 
          style={{ 
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '699px',
            height: '112px',
            zIndex: 1
          }}
        >
          <img 
            src={imgButton} 
            alt="Continue button"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
        
        {/* Button icon */}
        <div 
          style={{ 
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '115px',
            height: '112px',
            zIndex: 2
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
        
        {/* Button text */}
        <div 
          style={{ 
            position: 'absolute',
            left: '123px',
            top: '32px',
            width: '453px',
            height: '48px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '31px',
            lineHeight: '54px',
            color: '#ffffff',
            textAlign: 'center',
            zIndex: 3
          }}
        >
          AE Preventive measures
        </div>
      </div>

      {/* Footer text */}
      <div 
        data-enter
        data-enter-delay="0.9"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1800px',
          width: '927px',
          height: '90px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '12px',
          lineHeight: '15px',
          color: '#000000',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>
          Updated PFS analysis was not tested for statistical significance and not powered to show differences between treatment arms.
        </p>
        <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>1</span>
        <p style={{ margin: 0 }}>
          OS IA2 25 July 2022; median follow-up of 28.4 months in the ENHERTU arm, and 26.5 months in the T-DM1 arm.
        </p>
        <span style={{ verticalAlign: 'super', fontSize: '0.7em' }}>1</span>
        <p style={{ margin: 0 }}>
          BICR, Blinded Independent Central Review; CI, confidence interval; HER2, human epidermal growth factor receptor 2; HR, hazard ratio; IA, interim analysis; mBC, metastatic breast cancer; mPFS, median progression-free survival; NE, not estimable; NR, not reached; OS, overall survival; T-DM1, trastuzumab emtansine.
        </p>
        <p style={{ margin: 0 }}>
          1. Hurvitz SA, et al. Lancet. 2023;401:105–117; 2. Cortés J, et al. N Engl J Med. 2022;386:1143–1154.
        </p>
      </div>
    </div>
  );
}