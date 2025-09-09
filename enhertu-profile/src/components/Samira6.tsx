// Image assets from Figma MCP
const imgGroup13 = "/assets/3f304a5d2077845a4fe4cb50cacb1c488435e2ff.png";
const imgGraph1 = "/assets/a4e2363bcdcacb0f9d385dd1cc38972a6c3b82db.png";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/154d389c8c393d5c4ba5824a2cf1bb42d4766fd5.svg";

interface Samira6Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onInternationalGuidanceClick: () => void;
}

export default function Samira6({ onBackClick, onHomeClick, onInternationalGuidanceClick }: Samira6Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: 'white' 
    }}>
      {/* Background */}
      <div style={{ position: 'absolute', backgroundColor: 'white', inset: 0, zIndex: 1 }} />
      
      {/* Header background */}
      <div style={{ 
        position: 'absolute', 
        backgroundImage: 'linear-gradient(to right, #ec7624, #ffb061)', 
        height: '27px', 
        left: 0, 
        top: 0, 
        width: '756px',
        zIndex: 2
      }} />
      
      {/* Back Button */}
      <div 
        style={{ 
          position: 'absolute',
          top: '50px',
          left: '50px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
      
      {/* Home Button */}
      <div 
        style={{ 
          position: 'absolute',
          top: '50px',
          right: '50px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
      
      {/* Main Title */}
      <div style={{ 
        position: 'absolute', 
        fontFamily: 'Inter, sans-serif', 
        fontWeight: 'bold', 
        height: '182px', 
        lineHeight: 'normal', 
        fontStyle: 'normal', 
        color: '#250858', 
        fontSize: '36px', 
        top: '74px', 
        width: '844px', 
        left: 'calc(50% - 421px)',
        zIndex: 3
      }} data-enter>
        <p style={{ margin: 0, lineHeight: 'normal', whiteSpace: 'pre-wrap' }}>
          In DESTINY-Breast03, ENHERTU delivered improved survival vs T-DM1 in 2L HER2-positive mBC1,2
        </p>
      </div>
      
      {/* Updated analyses header */}
      <div style={{ 
        position: 'absolute', 
        left: '118px', 
        top: '220px',
        zIndex: 2
      }} data-enter-group data-enter-order="2">
        <div style={{ 
          position: 'absolute', 
          height: '92.399px', 
          left: '0px', 
          top: '0px', 
          width: '332px',
          zIndex: 22
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
        </div>
        
        <div style={{ 
          position: 'absolute', 
          fontFamily: 'Inter, sans-serif', 
          fontWeight: 'bold', 
          height: '59px', 
          lineHeight: 'normal', 
          left: '33px', 
          fontStyle: 'normal', 
          fontSize: '25px', 
          color: 'white', 
          top: '12px', 
          width: '309px',
          zIndex: 22
        }}>
          <p style={{ margin: 0 }}>Updated analyses</p>
          <p style={{ margin: 0 }}>(July 2022)</p>
        </div>
      </div>
      
      {/* First Graph */}
      <div style={{ 
        position: 'absolute', 
        backgroundImage: `url('${imgGraph1}')`, 
        backgroundSize: '100% 100%', 
        backgroundPosition: 'top left', 
        height: '435px', 
        left: '78px', 
        top: '325px', 
        width: '868px',
        zIndex: 4
      }} data-enter-group data-enter-order="3" />
      
      {/* Consistent PFS container */}
      <div style={{ 
        position: 'absolute', 
        left: '74px', 
        top: '773px',
        zIndex: 1
      }} data-enter-group data-enter-order="4">
        <div style={{ 
          position: 'absolute', 
          backgroundColor: '#f3f7d9', 
          height: '152px', 
          left: '0px', 
          top: '0px', 
          width: '935px',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute', 
          backgroundColor: '#c0d72f', 
          height: '9px', 
          left: '0px', 
          top: '0px', 
          width: '935px',
          zIndex: 2
        }} />
        
        <div style={{ 
          position: 'absolute', 
          fontFamily: 'Inter, sans-serif', 
          fontWeight: 'normal', 
          lineHeight: '0', 
          left: '466.5px', 
          fontStyle: 'normal', 
          color: '#5d6771', 
          fontSize: '25px', 
          textAlign: 'center', 
          top: '28px', 
          transform: 'translateX(-50%)', 
          width: '935px',
          zIndex: 3
        }}>
          <p style={{ margin: 0, lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
            <span style={{ fontWeight: 'bold' }}>In the updated analysis (July 2022), consistent PFS was observed in all subgroups tested with ENHERTU,</span>
            <span> including patients with stable brain metastases at baseline, patients with baseline visceral disease, and patients with prior pertuzumab treatment1</span>
          </p>
        </div>
      </div>
      
      {/* Second Graph */}
      <div style={{ 
        position: 'absolute', 
        backgroundImage: `url('${imgGroup13}')`, 
        backgroundSize: '100% 100%', 
        backgroundPosition: 'top left', 
        height: '483px', 
        left: '71px', 
        top: '942px', 
        width: '868px',
        zIndex: 4
      }} data-enter-group data-enter-order="5" />
      
      {/* Updated analysis container */}
      <div style={{ 
        position: 'absolute', 
        left: '74px', 
        top: '1444px',
        zIndex: 1
      }} data-enter-group data-enter-order="6">
        <div style={{ 
          position: 'absolute', 
          backgroundColor: '#f3f7d9', 
          height: '133px', 
          left: '0px', 
          top: '0px', 
          width: '935px',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute', 
          backgroundColor: '#c0d72f', 
          height: '7.875px', 
          left: '0px', 
          top: '0px', 
          width: '935px',
          zIndex: 2
        }} />
        
        <div style={{ 
          position: 'absolute', 
          fontFamily: 'Inter, sans-serif', 
          fontWeight: 'normal', 
          lineHeight: '0', 
          left: '466.5px', 
          fontStyle: 'normal', 
          color: '#5d6771', 
          fontSize: '25px', 
          textAlign: 'center', 
          top: '28px', 
          transform: 'translateX(-50%)', 
          width: '935px',
          zIndex: 3
        }}>
          <p style={{ margin: 0, lineHeight: '28px', whiteSpace: 'pre-wrap' }}>
            <span style={{ fontWeight: 'bold' }}>ENHERTU reduced the risk of death by 36% vs T-DM1 (HR: 0.64; 95% CI: 0.47, 0.87; P=0.0037</span>
            <span>) In the updated analysis, mOS was not reached in either study arm NR (40.5–NE) vs NR (34.0–NE); ENHERTU vs T-DM1 respectively1</span>
          </p>
        </div>
      </div>
      
      {/* Initial analysis note */}
      <div style={{ 
        position: 'absolute', 
        fontFamily: 'Inter, sans-serif', 
        fontWeight: 'light', 
        lineHeight: '28px', 
        left: '74px', 
        fontStyle: 'normal', 
        fontSize: '19px', 
        color: 'black', 
        top: '1739px', 
        width: '927px',
        zIndex: 6
      }} data-enter data-enter-order="7">
        <p style={{ margin: 0 }}>In the initial analysis (May 2021), the primary endpoint was met with statistically significant PFS</p>
        <p style={{ margin: 0 }}>(HR=0.28 [95% CI 0.22–0.37, p&lt;0.001])2</p>
      </div>
      
      {/* Button */}
      <div 
        style={{ 
          position: 'absolute', 
          height: '112px', 
          top: '1615px', 
          transform: 'translateX(-50%)', 
          width: '699px', 
          left: 'calc(50% - 0.5px)',
          zIndex: 6,
          cursor: 'pointer'
        }} 
        data-enter 
        data-enter-order="8"
        onClick={onInternationalGuidanceClick}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div style={{ position: 'absolute', bottom: 0, left: '0.29%', right: 0, top: '0.89%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img} />
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: '82.4%', top: 0 }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img1} />
          </div>
          <div style={{ 
            position: 'absolute',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '31px',
            textAlign: 'center',
            color: 'white',
            top: '28.57%',
            left: '17.6%',
            right: '4.15%',
            bottom: '28.57%'
          }}>
            <p style={{ margin: 0, lineHeight: '54px' }}>AE Preventive measures</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ 
        position: 'absolute', 
        fontFamily: 'Inter, sans-serif', 
        fontWeight: 'bold', 
        lineHeight: '15px', 
        left: '73px', 
        fontStyle: 'normal', 
        fontSize: '12px', 
        color: 'black', 
        top: '1800px', 
        width: '927px',
        zIndex: 6
      }}>
        <p style={{ margin: 0 }}>Updated PFS analysis was not tested for statistical significance and not powered to show differences between treatment arms.1</p>
        <p style={{ margin: 0 }}>OS IA2 25 July 2022; median follow-up of 28.4 months in the ENHERTU arm, and 26.5 months in the T-DM1 arm.1</p>
        <p style={{ margin: 0 }}>BICR, Blinded Independent Central Review; CI, confidence interval; HER2, human epidermal growth factor receptor 2; HR, hazard ratio; IA, interim analysis; mBC, metastatic breast cancer; mPFS, median progression-free survival; NE, not estimable; NR, not reached; OS, overall survival; T-DM1, trastuzumab emtansine.</p>
        <p style={{ margin: 0 }}>1. Hurvitz SA, et al. Lancet. 2023;401:105–117; 2. Cortés J, et al. N Engl J Med. 2022;386:1143–1154.</p>
      </div>
    </div>
  );
}