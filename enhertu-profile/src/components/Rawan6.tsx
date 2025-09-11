// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgImage4 = "/assets/065b5b274e01bd7b17016641bdbff3ba148b8cf5.png";
const imgImage5 = "/assets/940eb79c1bb28dd66faab04aa10b11fef4a38332.png";
const imgEllipse1 = "/assets/db308337d318d47455cdd2ec15957a37c39e11c5.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/89ef69d582f50df0c9de6ce7e4825870d4f881f3.svg";
const imgOrangeArrow = "/assets/449687bc227799e152eb96fdc69677fa8e91bc43.svg";

interface Rawan6Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan6({ onBackClick, onHomeClick, onContinueClick }: Rawan6Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px',
      backgroundColor: '#ffffff'
    }} data-name="Rawan6" data-node-id="52:673">
      
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
        data-node-id="52:679" 
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
        data-node-id="52:674" 
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
        data-node-id="52:675"
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
        data-node-id="52:676"
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
        data-node-id="52:678"
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
          top: '361px',
          left: '534px',
          width: '495px',
          height: '270px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '45px',
          color: '#250858',
          lineHeight: 'normal',
          whiteSpace: 'pre',
          zIndex: 6
        }} 
        data-node-id="52:677"
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>Patient starts ENHERTU</p>
        <p style={{ margin: 0, lineHeight: 'normal' }}>after prophylactic</p>
        <p style={{ margin: 0, lineHeight: 'normal' }}>antiemetics and</p>
        <p style={{ margin: 0, lineHeight: 'normal' }}>ILD/pneumonitis risk</p>
        <p style={{ margin: 0, lineHeight: 'normal' }}>is assessed</p>
      </div>

      {/* Treatment timeline containers */}
      {/* Container 1 */}
      <div 
        style={{ 
          position: 'absolute',
          top: '756px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} 
        data-node-id="52:713"
      />

      {/* Container 2 */}
      <div 
        style={{ 
          position: 'absolute',
          top: '881px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} 
        data-node-id="52:714"
      />

      {/* Container 3 */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1006px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} 
        data-node-id="52:727"
      />

      {/* Treatment timeline icons */}
      {/* Icon 1 */}
      <div 
        style={{ 
          position: 'absolute',
          top: '756px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ffb061',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} 
        data-node-id="52:716"
      />

      {/* Icon 2 */}
      <div 
        style={{ 
          position: 'absolute',
          top: '881px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ee7623',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} 
        data-node-id="52:717"
      />

      {/* Icon 3 */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1006px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ee7623',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} 
        data-node-id="52:728"
      />

      {/* Treatment timeline vectors */}
      <div 
        style={{ 
          position: 'absolute',
          top: '765px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 3
        }} 
        data-node-id="52:722"
      >
        <img 
          alt="" 
          style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
          src={imgOrangeArrow} 
        />
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '1015px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 3
        }} 
        data-name="Vector" 
        data-node-id="140:856"
      >
        <img 
          alt="" 
          style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
          src={imgVector} 
        />
      </div>

      {/* Treatment timeline text */}
      <div 
        style={{ 
          position: 'absolute',
          top: '788px',
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
        data-node-id="52:715"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>
          <span style={{ fontWeight: 'bold' }}>HR status:</span>
          <span> Positive (ER [100%], PR [70%])</span>
        </p>
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '915px',
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
        data-node-id="52:733"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>
          <span style={{ fontWeight: 'bold' }}>HR status:</span>
          <span> Positive (ER [100%], PR [70%])</span>
        </p>
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '1040px',
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
        data-node-id="52:734"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>
          <span style={{ fontWeight: 'bold' }}>HR status:</span>
          <span> Positive (ER [100%], PR [70%])</span>
        </p>
      </div>

      {/* Image labels */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1124px',
          left: '75px',
          width: '411px',
          height: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }} 
        data-node-id="52:743"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>Pre-ENHERTU initiation CT</p>
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '1124px',
          left: '598px',
          width: '411px',
          height: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }} 
        data-node-id="52:745"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>Pre-ENHERTU initiation Ca15-3 [U/ml]</p>
      </div>

      {/* Images */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1190px',
          left: '75px',
          width: '326px',
          height: '280px',
          backgroundImage: `url('${imgImage4}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }} 
        data-name="image 4" 
        data-node-id="52:736"
      />

      <div 
        style={{ 
          position: 'absolute',
          top: '1202px',
          left: '598px',
          width: '376px',
          height: '248px',
          backgroundImage: `url('${imgImage5}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }} 
        data-name="image 5" 
        data-node-id="52:766"
      />

      {/* Warning box */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1480px',
          left: '75px',
          width: '934px',
          height: '116px',
          backgroundColor: '#f3f7d9',
          border: '4px solid #c5d752',
          zIndex: 1
        }} 
        data-node-id="52:1596"
      >
        <div 
          style={{ 
            position: 'absolute',
            top: '11px',
            left: '0px',
            width: '934px',
            height: '110px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '500',
            fontSize: '24px',
            color: '#5d6771',
            lineHeight: '28px',
            zIndex: 6
          }} 
          data-node-id="52:739"
        >
          <p style={{ margin: 0, lineHeight: '28px' }}>
            Patients with a history of ILD/pneumonitis or patients with moderate or severe renal impairment may be at increased risk of developing ILD/pneumonitis and should be monitored carefully
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1615px',
          left: '191px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 100
        }} 
        data-name="Button Treatment" 
        data-node-id="52:681"
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
          <p style={{ margin: 0, lineHeight: '54px' }}>Push the Paradigm</p>
        </div>
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
        data-node-id="52:680"
      >
        <p style={{ margin: 0, lineHeight: '15px' }}>
          Hypothetical case built with input from Dr Simon Gampenrieder, University Hospital Salzburg, Austria.
        </p>
        <p style={{ margin: 0, lineHeight: '15px' }}>
          4L, forth‑line; CT, computed tomography; ILD, interstitial lung disease; U/ml, units per milliliter.
        </p>
      </div>
    </div>
  );
}