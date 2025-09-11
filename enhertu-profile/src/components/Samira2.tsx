// Image assets from Figma MCP
const imgSamira = "/assets/e1a3109de4a4f7b0a552c8c024e8fcfed309a2dd.png";
const imgButtonContainer = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIconContainer = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgEllipse1 = "/assets/b5e1855b59335aea6be52c1e450d97f243cb25a3.svg";

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

interface Samira2Props {
  onBackClick: () => void;
  onContinueClick: () => void;
  onHomeClick: () => void;
}

export default function Samira2({ onBackClick, onContinueClick, onHomeClick }: Samira2Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px' 
    }}>
      {/* Background */}
      <div style={{ position: 'absolute', backgroundColor: 'white', bottom: 0, left: 0, right: '0.09%', top: 0 }} />
      
      {/* Back Button */}
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

      {/* Home Button */}
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
      
      {/* Title */}
      <div style={{ 
        position: 'absolute',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '50px',
        color: '#5b6670',
        top: '167px',
        left: 'calc(50% - 441px)',
        width: '656px',
        height: '80px'
      }} data-enter>
        <p style={{ margin: 0, lineHeight: 'normal' }}>Case Study: Samira</p>
      </div>
      
      {/* Hero Section */}
      <div data-enter-group data-enter-order="2">
        {/* Ellipse background */}
        <div style={{ position: 'absolute', left: '73px', top: '276px', width: '440px', height: '440px' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgEllipse1} />
        </div>
        
        {/* Treatment background */}
        <div style={{ position: 'absolute', backgroundColor: '#ec7624', left: '293px', top: '287px', width: '787px', height: '169px' }} data-enter-swipe />
        
        {/* Samira image */}
        <div style={{ 
          position: 'absolute',
          backgroundImage: `url('${imgSamira}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'top left',
          top: '15.66%',
          left: '8.33%',
          right: '54.82%',
          bottom: '63.97%'
        }} />
        
        {/* Patient presentation text */}
        <div style={{ 
          position: 'absolute',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '45px',
          color: 'white',
          left: '534px',
          top: '300px',
          whiteSpace: 'pre'
        }}>
          <p style={{ margin: 0 }}>Patient presentation</p>
          <p style={{ margin: 0 }}>at diagnosis</p>
        </div>
      </div>
      
      {/* Header background gradient */}
      <div style={{ 
        position: 'absolute',
        background: 'linear-gradient(to right, #ec7624, #ffb061)',
        height: '27px',
        left: 0,
        top: 0,
        width: '756px'
      }} />
      
      {/* Case study content */}
      <div style={{
        position: 'absolute',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fontSize: '31px',
        color: 'black',
        left: '87px',
        top: '751px',
        width: '759px',
        height: '920px'
      }} data-enter-group data-enter-order="3">
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '46.5px',
          margin: 0
        }}>
          <li style={{ marginBottom: 0, marginLeft: '46.5px' }}>
            <span style={{ lineHeight: '54px' }}>71-year-old postmenopausal woman</span>
          </li>
          <li style={{ marginBottom: 0, marginLeft: '46.5px' }}>
            <span style={{ lineHeight: '54px' }}>History of hypertension</span>
          </li>
          <li style={{ marginBottom: 0, marginLeft: '46.5px' }}>
            <span style={{ lineHeight: '54px' }}>ECOG PS 1</span>
          </li>
          <li style={{ marginBottom: 0, marginLeft: '46.5px' }}>
            <span style={{ lineHeight: '54px' }}>Regular screening with mammography, -alongside bilateral
              breast ultrasound, identified an area of irregular
              parenchymal thickening with microcalcifications</span>
          </li>
          <li style={{ marginBottom: 0, marginLeft: '46.5px' }}>
            <span style={{ lineHeight: '54px' }}>Breast ultrasound showed a 41 mm solid nodule, and
              axillary lymphadenopathies with preserved morphology and
              structure were observed</span>
          </li>
          <li style={{ marginBottom: 0, marginLeft: '46.5px' }}>
            <span style={{ lineHeight: '54px' }}>Diagnosed with HER2-positive infiltrating ductal
              carcinoma in May 2021</span>
          </li>
          <li style={{ marginBottom: 0, marginLeft: '46.5px' }}>
            <span style={{ lineHeight: '54px' }}>ER-positive/PR-positive/HER2-positive (IHC2+/FISH
              amplified)</span>
          </li>
          <li style={{ marginLeft: '46.5px' }}>
            <span style={{ lineHeight: '54px' }}>Metastasis in the liver identified in July 2021</span>
          </li>
        </ul>
      </div>
      
      {/* Footer disclaimer */}
      <div style={{ 
        position: 'absolute',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
        fontSize: '12px',
        color: 'black',
        left: '105px',
        top: '1875px',
        whiteSpace: 'pre'
      }}>
        <p style={{ margin: 0, lineHeight: '15px' }}>ECOG PS, Eastern Cooperative Oncology Group Performance Status; ER, estrogen receptor; FISH, fluorescence in situ hybridisation; HER2,</p>
        <p style={{ margin: 0, lineHeight: '15px' }}>human epidermal growth factor receptor 2; IHC, immunohistochemistry; PR, progesterone receptor.</p>
      </div>
      
      {/* Treatment button */}
      <div 
        style={{ position: 'absolute', left: '191px', top: '1727px', width: '699px', height: '112px', cursor: 'pointer', zIndex: 100 }}
        onClick={onContinueClick}
        data-enter
        data-enter-order="4"
      >
        <ButtonTreatment />
      </div>
    </div>
  );
}
