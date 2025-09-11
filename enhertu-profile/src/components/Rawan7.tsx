// Image assets from Figma MCP
const imgGraph05 = "/assets/215c0cf32140ddb042160fc8f8da6aa31bf7d8de.png";
const imgGraph06 = "/assets/6ac2c10d37996e97584a54e38510425aeaeff3a7.png";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/fd146c4fe67459a60e7417374eecc063a3b335e8.svg";

interface Rawan7Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan7({ onBackClick, onHomeClick, onContinueClick }: Rawan7Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px',
      backgroundColor: '#ffffff'
    }} data-name="Rawan7" data-node-id="52:768">
      
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
        data-name="Header background" 
        data-node-id="52:773" 
      />

      {/* Background */}
      <div 
        style={{ 
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '1080px',
          height: '1920px',
          backgroundColor: '#ffffff',
          zIndex: 1
        }} 
        data-node-id="52:770" 
      />

      {/* Main title */}
      <div 
        style={{ 
          position: 'absolute',
          top: '104px',
          left: '222px',
          width: '782px',
          height: '182px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '41px',
          color: '#250858',
          lineHeight: 'normal',
          zIndex: 6
        }} 
        data-node-id="52:771"
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>
          <span>ENHERTU nearly </span>
          <span style={{ color: '#ee7623' }}>doubled mPFS and extended mOS</span>
          <span> by 6 months vs. chemotherapy in HR+ / HER2-low mBC</span>
        </p>
      </div>

      {/* Vector icon */}
      <div 
        style={{ 
          position: 'absolute',
          top: '27px',
          left: '61px',
          width: '0px',
          height: '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3
        }}
      >
        <div style={{ transform: 'rotate(90deg)' }}>
          <div 
            style={{ 
              width: '346px',
              height: '138px',
              position: 'relative'
            }} 
            data-name="Vector" 
            data-node-id="52:774"
          >
            <img 
              alt="" 
              style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
              src={imgVector} 
            />
          </div>
        </div>
      </div>

      {/* HR+ label */}
      <div 
        style={{ 
          position: 'absolute',
          top: '74px',
          left: '96px',
          width: '97px',
          height: '59px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '38px',
          color: '#ffffff',
          lineHeight: 'normal',
          zIndex: 6
        }} 
        data-node-id="52:775"
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>HR+</p>
      </div>

      {/* Graph 1 - PFS */}
      <div 
        style={{ 
          position: 'absolute',
          top: '362px',
          left: '158px',
          width: '759px',
          height: '582px',
          backgroundImage: `url('${imgGraph06}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }} 
        data-name="Graph-06" 
        data-node-id="52:1529"
      />

      {/* Graph 2 - OS */}
      <div 
        style={{ 
          position: 'absolute',
          top: '967px',
          left: '155px',
          width: '764px',
          height: '597px',
          backgroundImage: `url('${imgGraph05}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }} 
        data-name="Graph-05" 
        data-node-id="52:1528"
      />

      {/* Continue Button */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1615px',
          left: '190.5px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 100
        }} 
        data-node-id="52:772"
        onClick={onContinueClick}
      >
        <div 
          style={{ 
            position: 'absolute',
            bottom: '0',
            left: '0.29%',
            right: '0',
            top: '0.89%',
            zIndex: 1
          }} 
          data-name="Button container"
        >
          <img 
            alt="" 
            style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
            src={img} 
          />
        </div>
        <div 
          style={{ 
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '82.4%',
            top: '0',
            zIndex: 2
          }} 
          data-name="Icon container"
        >
          <img 
            alt="" 
            style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
            src={img1} 
          />
        </div>
        <div 
          style={{ 
            position: 'absolute',
            top: '28.57%',
            left: '17.6%',
            right: '4.15%',
            bottom: '28.57%',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '31px',
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: '54px',
            zIndex: 3
          }}
        >
          <p style={{ margin: 0, lineHeight: '54px' }}>ORR</p>
        </div>
      </div>

      {/* Footer text */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1830px',
          left: '73px',
          width: '927px',
          height: '60px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '12px',
          color: '#000000',
          lineHeight: '15px',
          zIndex: 6
        }} 
        data-node-id="52:776"
      >
        <p style={{ margin: 0, lineHeight: '15px' }}>
          Based on derived data, which includes protocol deviations.
        </p>
        <p style={{ margin: 0, lineHeight: '15px' }}>
          CI, confidence interval; HER2, human epidermal growth factor receptor 2; HR, hormone receptor; mBC, metastatic breast cancer; mo, months; (m)OS, (median) overall survival; (m)PFS, (median) progression-free survival.
        </p>
        <p style={{ margin: 0, lineHeight: '15px' }}>
          Modi S, et al. Presented at ASCO 2022. Abstract LBA3.
        </p>
      </div>
    </div>
  );
}