// Image assets from Figma MCP
const imgSamira = "http://localhost:3845/assets/e1a3109de4a4f7b0a552c8c024e8fcfed309a2dd.png";
const imgVector = "http://localhost:3845/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgGroup = "http://localhost:3845/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";
const imgVector1 = "http://localhost:3845/assets/ea6d40caed0cc5e3efe1b564ac1374474ea0738b.svg";
const imgVector2 = "http://localhost:3845/assets/341d48a0c7406ac7cf7f218af5a5994c573e0fea.svg";

interface Samira1Props {
  onContinueClick: () => void;
  onBackClick: () => void;
}

export default function Samira1({ onContinueClick, onBackClick }: Samira1Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: '#f5ad7b',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start',
      paddingTop: '338.953px',
      paddingBottom: '168px',
      paddingLeft: '69.939px',
      paddingRight: '105px',
      gap: '85px'
    }}>
      {/* Back Button */}
      <div 
        style={{ 
          position: 'absolute',
          top: '50px',
          left: '50px',
          width: '60px',
          height: '60px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#5b6670',
          zIndex: 100
        }}
        onClick={onBackClick}
      >
        ←
      </div>

      {/* Main Container */}
      <div style={{ 
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '68.021px'
      }}>
        {/* Image Container */}
        <div data-enter-group data-enter-order="0" style={{ 
          position: 'relative',
          width: '100%',
          height: '658.026px',
          overflow: 'hidden'
        }}>
          {/* Vector 1 */}
          <div style={{ 
            position: 'absolute',
            height: '658.026px',
            right: '273.61px',
            top: '0px',
            width: '630.454px'
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector1} />
          </div>
          
          {/* Vector 2 */}
          <div style={{ 
            position: 'absolute',
            height: '474.429px',
            right: '-0.17px',
            top: '91.45px',
            width: '454.619px'
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector2} />
          </div>
          
          {/* Samira's Image */}
          <div style={{ 
            position: 'absolute',
            height: '391px',
            left: '35.06px',
            top: '145.05px',
            width: '398px',
            backgroundImage: `url('${imgSamira}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundPosition: 'top left'
          }} />
        </div>

        {/* Patient Name */}
        <div data-enter data-enter-order="1" style={{ 
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '36px',
          color: '#5b6670',
          height: '79px',
          width: '416px'
        }}>
          <p style={{ margin: 0 }}>Samira,</p>
          <p style={{ margin: 0 }}>71 years old.</p>
        </div>
      </div>

      {/* Text Container */}
      <div data-enter-group data-enter-order="2" style={{ 
        position: 'relative',
        width: '841px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '106px'
      }}>
        {/* Disclaimer Text Box */}
        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: '17px',
          padding: '38px 34px 18px 43px',
          width: '100%',
          overflow: 'hidden'
        }}>
          <div style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '27px',
            color: 'black',
            height: '249px',
            width: '764px',
            lineHeight: 'normal'
          }}>
            <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {`Real-world patients per HCP-reported case experience, not enrolled in DESTINY-Breast Clinical Trials Program. These  anonymized case studies are representative only and individual patient responses may vary. The following case study was  provided by Professor Matteo Lambertini. The opinions expressed  herein represent Professor Matteo Lambertini's personal views  and experiences.`}
            </p>
          </div>
        </div>

        {/* Bottom Logo */}
        <div 
          style={{ 
            position: 'relative',
            height: '112px',
            width: '123px',
            cursor: 'pointer'
          }}
          onClick={onContinueClick}
        >
          <div style={{ position: 'absolute', bottom: 0, left: '1.03%', right: '7.47%', top: 0 }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
          </div>
          <div style={{ position: 'absolute', bottom: '7.92%', left: 0, right: '30.68%', top: '7.02%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgGroup} />
          </div>
        </div>
      </div>
    </div>
  );
}
