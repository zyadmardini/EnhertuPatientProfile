// Image assets from Figma MCP
const imgRectangle = "http://localhost:3845/assets/3e9970ddda17ebf235d24396df2b7b4d600d4466.png";
const imgRectangle1 = "http://localhost:3845/assets/e092922d4f4e41aa6af343efbbec9d76d019f1c0.svg";

interface EndPageProps {
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function EndPage({ onBackClick, onHomeClick }: EndPageProps) {
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

      {/* Main content text */}
      <div 
        data-enter
        data-enter-order="1"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 468px)',
          top: '167px',
          width: '961px',
          height: '666px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '38px',
          color: '#5b6670',
          lineHeight: 'normal',
          zIndex: 6
        }}>
        <p style={{ margin: 0 }}>For any adverse event report, product quality complaint or medical information request related to AZ products, you can complete the web-based form accessible 24/7 via the URL</p>
        <p style={{ margin: 0 }}> http://contactazmedical.astrazeneca.com </p>
        <p style={{ margin: 0 }}>&nbsp;</p>
        <p style={{ margin: 0 }}>For medical information requests, you can alternatively send to: medinfo-ne@astrazeneca.com</p>
        <p style={{ margin: 0 }}>&nbsp;</p>
        <p style={{ margin: 0 }}>For adverse events reporting, you can alternatively </p>
        <p style={{ margin: 0 }}>send directly to: Patientsafety.ne@astrazeneca.com</p>
        <p style={{ margin: 0 }}>&nbsp;</p>
        <p style={{ margin: 0 }}>Or Contact our office</p>
        <p style={{ margin: 0 }}>on Tel: +96265827580 or +9611385534. </p>
      </div>

      {/* Enhertu Full Prescribing Information */}
      <div 
        data-enter
        data-enter-order="2"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 468px)',
          top: '1061px',
          width: '961px',
          height: '46px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '300',
          fontSize: '38px',
          color: '#5b6670',
          lineHeight: 'normal',
          zIndex: 6
        }}>
        <p style={{ margin: 0 }}>Enhertu® Full Prescribing Information</p>
        <p style={{ margin: 0 }}>&nbsp;</p>
      </div>

      {/* Document reference */}
      <div 
        data-enter
        data-enter-order="3"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 468px)',
          top: '1499px',
          width: '961px',
          height: '46px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '300',
          fontSize: '38px',
          color: '#5b6670',
          lineHeight: 'normal',
          zIndex: 6
        }}>
        <p style={{ margin: 0 }}>ENH-19-SK-0624-0626-NE</p>
        <p style={{ margin: 0 }}>&nbsp;</p>
      </div>

      {/* Address information */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 468px)',
          top: '1699px',
          width: '961px',
          height: '184px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '38px',
          color: '#5b6670',
          lineHeight: 'normal',
          zIndex: 6
        }}>
        <p style={{ margin: 0 }}>AstraZeneca Near East Sweifieh, BLDG 19 Abdelraheem Al-Haj Mohammad street, P.O. Box: 17788, Zip Code 11195 Amman-Jordan;</p>
        <p style={{ margin: 0 }}>Tel: +96265827580</p>
      </div>

      {/* Logo/Image section */}
      <div 
        data-enter
        data-enter-order="5"
        style={{ 
          position: 'absolute',
          left: '58.7%',
          top: '58.7%',
          width: '372px',
          height: '372px',
          zIndex: 4
        }}>
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '100%'
        }}>
          <div style={{ 
            position: 'absolute',
            inset: '0px',
            backgroundImage: `url('${imgRectangle}')`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'top left',
            backgroundRepeat: 'no-repeat',
            maskImage: `url('${imgRectangle1}')`,
            maskSize: '372px 372px',
            maskPosition: '0px',
            maskRepeat: 'no-repeat',
            zIndex: 1
          }} />
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
