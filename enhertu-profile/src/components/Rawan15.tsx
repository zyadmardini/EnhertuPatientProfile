
// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgImage8 = "/assets/43fb4fef8cf99b8b9e16e30a595bfcf7ffc228e3.png";
const imgEllipse1 = "/assets/db308337d318d47455cdd2ec15957a37c39e11c5.svg";
const imgVector = "/assets/c343137d4b321d504a93961d0d6e86df4accb4ed.svg";
const imgOrangeArrow = "/assets/449687bc227799e152eb96fdc69677fa8e91bc43.svg";
const imgEllipse3 = "/assets/5074d8c1d2f2a69f48812317ed1417116c392ebd.svg";
const img4L = "/assets/89ef69d582f50df0c9de6ce7e4825870d4f881f3.svg";
const imgNextButton = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgNextButtonGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";

interface Rawan15Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan15({ onBackClick, onHomeClick, onContinueClick }: Rawan15Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px',
      backgroundColor: '#ffffff'
    }} data-name="Rawan15" data-node-id="52:1937">
      
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
        data-node-id="52:1943" 
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
        data-node-id="52:1938" 
      />

      {/* Title */}
      <div 
        style={{ 
          position: 'absolute',
          top: '167px',
          left: '73px',
          width: '656px',
          height: '80px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '50px',
          color: '#5b6670',
          lineHeight: 'normal',
          zIndex: 6
        }} 
        data-node-id="52:1939"
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>Case Study: Rawan</p>
      </div>

      {/* Ellipse background */}
      <div 
        style={{ 
          position: 'absolute',
          top: '276px',
          left: '73px',
          width: '440px',
          height: '440px',
          zIndex: 4
        }} 
        data-node-id="52:1940"
      >
        <img 
          alt="" 
          style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
          src={imgEllipse1} 
        />
      </div>

      {/* Patient image */}
      <div 
        style={{ 
          position: 'absolute',
          top: '301px',
          left: '95px',
          width: '396px',
          height: '390px',
          zIndex: 5
        }} 
        data-name="Rawan" 
        data-node-id="52:1942"
      >
        <img 
          alt="" 
          style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
          src={imgRawan} 
        />
      </div>

      {/* Section title */}
      <div 
        style={{ 
          position: 'absolute',
          top: '301px',
          left: '534px',
          width: '495px',
          height: '390px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '45px',
          color: '#250858',
          lineHeight: 'normal',
          whiteSpace: 'pre-wrap',
          zIndex: 6
        }} 
        data-node-id="52:1941"
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>
          Nausea and vomiting were successfully managed with a 3‑drug antiemetic regimen, allowing the patient to remain
          <br />
          on ENHERTU
        </p>
      </div>

      {/* Treatment timeline containers */}
      <div 
        style={{ 
          position: 'absolute',
          top: '805px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#d9d9d9',
          zIndex: 1
        }} 
        data-node-id="52:1946"
      />

      <div 
        style={{ 
          position: 'absolute',
          top: '930px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} 
        data-node-id="52:1948"
      />

      <div 
        style={{ 
          position: 'absolute',
          top: '1055px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} 
        data-node-id="52:1949"
      />

      <div 
        style={{ 
          position: 'absolute',
          top: '1180px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} 
        data-node-id="52:1984"
      />

      {/* Treatment timeline icons */}
      <div 
        style={{ 
          position: 'absolute',
          top: '805px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#5d6771',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} 
        data-node-id="52:1947"
      />

      <div 
        style={{ 
          position: 'absolute',
          top: '930px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ee7623',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} 
        data-node-id="52:1985"
      />

      <div 
        style={{ 
          position: 'absolute',
          top: '1055px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ffb061',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} 
        data-node-id="52:1991"
      />

      <div 
        style={{ 
          position: 'absolute',
          top: '1180px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ffb061',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} 
        data-node-id="52:1992"
      />

      {/* Treatment timeline vectors */}
      <div 
        style={{ 
          position: 'absolute',
          top: '815px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 3
        }} 
        data-name="Vector" 
        data-node-id="140:870"
      >
        <img 
          alt="" 
          style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
          src={imgVector} 
        />
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '940px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 3
        }} 
        data-name="Vector" 
        data-node-id="140:871"
      >
        <img 
          alt="" 
          style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
          src={img4L} 
        />
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '1064px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 3
        }} 
        data-node-id="52:2016"
      >
        <img 
          alt="" 
          style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
          src={imgEllipse3} 
        />
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '1078px',
          left: '185px',
          width: '47px',
          height: '47px',
          backgroundImage: `url('${imgImage8}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }} 
        data-name="image 8" 
        data-node-id="52:2017"
      />

      <div 
        style={{ 
          position: 'absolute',
          top: '1189px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 3
        }} 
        data-node-id="52:2025"
      >
        <img 
          alt="" 
          style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
          src={imgOrangeArrow} 
        />
      </div>

      {/* Treatment timeline text */}
      <div 
        style={{ 
          position: 'absolute',
          top: '812px',
          left: '268px',
          width: '812px',
          height: '85px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }} 
        data-node-id="52:1950"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>
          <span>1L treatment (24 mo): </span>
          <span style={{ fontWeight: '500' }}>Letrozole + ribociclib + denosumab</span>
        </p>
        <p style={{ margin: 0, lineHeight: '28px' }}>
          <span>2L treatment (8 mo): </span>
          <span style={{ fontWeight: '500' }}>Fulvestrant + alpelisib</span>
        </p>
        <p style={{ margin: 0, lineHeight: '28px' }}>
          <span>3L treatment (12 mo): </span>
          <span style={{ fontWeight: '500' }}>Capecitabine + bevacizumab</span>
        </p>
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '965px',
          left: '268px',
          width: '812px',
          height: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '24px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }} 
        data-node-id="52:1988"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>
          <span style={{ fontWeight: 'bold' }}>4L treatment:</span>
          <span> ENHERTU + two-drug antiemetic prophylactic regimen</span>
        </p>
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '1075px',
          left: '268px',
          width: '812px',
          height: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '24px',
          color: '#5d6771',
          lineHeight: '28px',
          whiteSpace: 'pre-wrap',
          zIndex: 6
        }} 
        data-node-id="52:1989"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>
          Grade 2 nausea and vomiting resolved following escalation to a three‑drug antiemetic regimen
        </p>
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '1199px',
          left: '268px',
          width: '812px',
          height: '57px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '24px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }} 
        data-node-id="52:1990"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>
          <span style={{ fontWeight: 'bold' }}>CT (3 mo):</span>
          <span> Partial response (liver), stable disease (lymph nodes,</span>
        </p>
        <p style={{ margin: 0, lineHeight: '28px' }}>
          lung and bone)
        </p>
      </div>

      {/* Footer text */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1853px',
          left: '105px',
          width: '953px',
          height: '30px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '12px',
          color: '#000000',
          lineHeight: '15px',
          zIndex: 6
        }} 
        data-node-id="52:1944"
      >
        <p style={{ margin: 0, lineHeight: '15px' }}>
          Hypothetical case built with input from Dr Simon Gampenrieder, University Hospital Salzburg, Austria.
        </p>
        <p style={{ margin: 0, lineHeight: '15px' }}>
          1–3L, first to third line; 4L, fourth line; mo, months CT, computed tomography.
        </p>
      </div>

      {/* Next Button - Icon */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          left: '467px',
          top: '1574px',
          width: '123px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 100,
          transition: 'all 0.3s ease'
        }}
        onClick={onContinueClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0px) scale(1)';
        }}
      >
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '100%'
        }}>
          <div style={{ 
            position: 'absolute',
            bottom: '0px',
            left: '1.03%',
            right: '7.47%',
            top: '0px',
            zIndex: 1
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgNextButton} />
          </div>
          <div style={{ 
            position: 'absolute',
            bottom: '7.92%',
            left: '0px',
            right: '30.68%',
            top: '7.02%',
            zIndex: 2
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgNextButtonGroup} />
          </div>
        </div>
      </div>
    </div>
  );
}