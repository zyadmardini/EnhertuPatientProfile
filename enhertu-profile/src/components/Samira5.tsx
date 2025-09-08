// Image assets from Figma MCP
const imgButtonContainer = "http://localhost:3845/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIconContainer = "http://localhost:3845/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "http://localhost:3845/assets/aee53a0377d0b242aeb7d3a535bfb57a93635b99.svg";
const imgVector1 = "http://localhost:3845/assets/96ec5b8ed2fa23d37d3d1e8d9f908f1733bdf681.svg";

interface ButtonTreatmentProps {
  text?: string;
}

function ButtonTreatment({ text = "Treatment" }: ButtonTreatmentProps) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', bottom: 0, left: '0.29%', right: 0, top: '0.89%' }}>
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgButtonContainer} />
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: '82.4%', top: 0 }}>
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgIconContainer} />
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
        <p style={{ margin: 0, lineHeight: '54px' }}>{text}</p>
      </div>
    </div>
  );
}

interface Samira5Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Samira5({ onBackClick, onHomeClick, onContinueClick }: Samira5Props) {
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
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
      
      {/* Title */}
      <div style={{ 
        position: 'absolute', 
        fontFamily: 'Inter, sans-serif', 
        fontWeight: 'bold', 
        height: '80px', 
        lineHeight: 'normal', 
        fontStyle: 'normal', 
        color: '#5b6670', 
        fontSize: '50px', 
        top: '167px', 
        width: '656px', 
        left: 'calc(50% - 328px)',
        zIndex: 3
      }} data-enter>
        <p style={{ margin: 0 }}>Case Study: Samira</p>
      </div>
      
      {/* Content container */}
      <div style={{ 
        position: 'absolute', 
        left: '72px', 
        top: '276px',
        zIndex: 1
      }} data-enter-group data-enter-order="2">
        {/* Treatment background */}
        <div 
          data-enter-swipe
          data-enter-order="1"
          style={{ 
            position: 'absolute', 
            backgroundColor: '#58378a', 
            height: '169px', 
            left: '174px', 
            top: '0px', 
            width: '762px',
            zIndex: 2
          }} 
        />
        
        {/* Treatment title */}
        <div style={{ 
          position: 'absolute', 
          fontFamily: 'Inter, sans-serif', 
          fontWeight: 'bold', 
          lineHeight: 'normal', 
          left: '411px', 
          fontStyle: 'normal', 
          fontSize: '51px', 
          textAlign: 'center', 
          whiteSpace: 'pre', 
          color: 'white', 
          top: '54px',
          zIndex: 3
        }}>
          <p style={{ margin: 0 }}>2L treatment</p>
        </div>
        
        {/* Vector image */}
        <div style={{ 
          position: 'absolute', 
          left: '0px', 
          width: '366px', 
          height: '366px', 
          top: '0px',
          zIndex: 4
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
        </div>
        
        {/* Vector1 image */}
        <div style={{ 
          position: 'absolute', 
          height: '187.769px', 
          left: '129.76px', 
          top: '100.65px', 
          width: '128.1px',
          zIndex: 5
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector1} />
        </div>
        
        {/* Treatment container */}
        <div style={{ 
          position: 'absolute', 
          backgroundColor: '#dcd2ec', 
          height: '598px', 
          left: '0px', 
          borderRadius: '93px 0 0 0', 
          top: '103px', 
          width: '937px',
          zIndex: 1
        }} />
        
        {/* First treatment point */}
        <div style={{ 
          position: 'absolute', 
          fontFamily: 'Inter, sans-serif', 
          fontWeight: 'bold', 
          height: '175px', 
          lineHeight: 'normal', 
          left: '366px', 
          fontStyle: 'normal', 
          fontSize: '31px', 
          color: 'black', 
          top: '191px', 
          width: '523px',
          zIndex: 6
        }}>
          <ul style={{ margin: 0, paddingLeft: '46.5px' }}>
            <li style={{ listStyleType: 'disc' }}>
              <span style={{ lineHeight: '54px' }}>Patient received palliative radiotherapy at the start of November 2022</span>
            </li>
          </ul>
        </div>
        
        {/* Second treatment points */}
        <div style={{ 
          position: 'absolute', 
          fontFamily: 'Inter, sans-serif', 
          fontWeight: 'bold', 
          height: '303px', 
          lineHeight: 'normal', 
          left: '6px', 
          fontStyle: 'normal', 
          fontSize: '31px', 
          color: 'black', 
          top: '388px', 
          width: '901px',
          zIndex: 6
        }}>
          <ul style={{ margin: 0, paddingLeft: '46.5px' }}>
            <li style={{ listStyleType: 'disc', marginBottom: '0' }}>
              <span style={{ lineHeight: '54px' }}>ENHERTU (5.4 mg/kg) was then prescribed to the patient in November 2022</span>
            </li>
            <li style={{ listStyleType: 'disc' }}>
              <span style={{ lineHeight: '54px' }}>The decision to use ENHERTU vs. T-DM1 in the 2L setting was due the superior PFS data seen in DESTINY-Breast03*</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Key message */}
      <div style={{ 
        position: 'absolute', 
        fontFamily: 'Inter, sans-serif', 
        fontStyle: 'italic', 
        lineHeight: 'normal', 
        left: '543px', 
        color: '#ec7624', 
        fontSize: '28px', 
        textAlign: 'center', 
        top: '1020px', 
        transform: 'translateX(-50%)', 
        width: '930px',
        zIndex: 6
      }} data-enter data-enter-order="3">
        <p style={{ margin: 0, lineHeight: '40px' }}>Pivotal clinical studies demonstrate that attrition rates increase,</p>
        <p style={{ margin: 0, lineHeight: '40px' }}>
          <span>and efficacy decreases with each subsequent line of HER2-based therapy, </span>
          <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>highlighting the importance of using the most efficacious drug as early as possible1–5</span>
        </p>
      </div>
      
      {/* Button */}
      <div style={{ 
        position: 'absolute', 
        height: '112px', 
        top: '1615px', 
        transform: 'translateX(-50%)', 
        width: '699px', 
        left: 'calc(50% - 0.5px)',
        zIndex: 6,
        cursor: 'pointer'
      }} data-enter data-enter-order="4" onClick={onContinueClick}>
        <ButtonTreatment text="Push The Paradigm" />
      </div>
      
      {/* Footer */}
      <div style={{ 
        position: 'absolute', 
        fontFamily: 'Inter, sans-serif', 
        fontWeight: 'normal', 
        lineHeight: '15px', 
        left: '73px', 
        fontStyle: 'normal', 
        fontSize: '12px', 
        color: 'black', 
        top: '1815px', 
        width: '927px',
        zIndex: 6
      }}>
        <p style={{ fontWeight: 'bold', margin: 0 }}>*Primary PFS analysis (May 2021), HR: 0.28 (95% CI 0.22-0.37, p value&lt;0.001).6</p>
        <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>2L, second-line; PFS, progression-free survival;  T-DM1, trastuzumab emtansine.</p>
        <p style={{ margin: 0 }}>1. Yao M, et al. Chin Clin Oncol. 2018;7:27; 2. Swain SM, et al. N Engl J Med. 2015;372:724-734; 3. Verma S, et al. N Engl J Med. 2012;367:1783-1791; 4. Diéras V, et al. Lancet Oncol. 2017;18:732-742. 5. Larionov AA. Front Oncol. 2018;8:89;</p>
        <p style={{ margin: 0 }}>6. Cortés J, et al. N Engl J Med. 2022;386:1143-1154.</p>
      </div>
    </div>
  );
}
