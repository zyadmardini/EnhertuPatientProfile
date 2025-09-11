// Image assets from Figma MCP
const imgGraph041 = "/assets/95760392f6554694d2368c57ec2f6d040b244858.png";
const imgVector = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";

interface Layla14Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onEndClick: () => void;
}

export default function Layla14({ onBackClick, onHomeClick, onEndClick }: Layla14Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: 'white'
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
        style={{ 
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '756px',
          height: '27px',
          background: 'linear-gradient(to right, #ec7624, #ffb061)',
          zIndex: 2
        }}
      />

      {/* Main title */}
      <div 
        data-enter
        data-enter-order="1"
        style={{ 
          position: 'absolute',
          left: '75px',
          top: '171px',
          width: '929px',
          height: '149px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '41px',
          color: '#250858',
          lineHeight: 'normal',
          zIndex: 6
        }}
      >
        <span>~4 out of 5 patients demonstrated a response and 1 out of 5 had a </span>
        <span style={{ color: '#ee7623' }}>complete response</span>
        <span> with ENHERTU </span>
      </div>

      {/* ENHERTU ORR box */}
      <div 
        data-enter
        data-enter-order="2"
        style={{ 
          position: 'absolute',
          left: '71px',
          top: '556px',
          width: '197px',
          height: '197px',
          backgroundColor: '#ee7623',
          zIndex: 5
        }}
      />

      {/* ENHERTU ORR text */}
      <div 
        data-enter
        data-enter-order="3"
        style={{ 
          position: 'absolute',
          left: '51px',
          top: '589px',
          width: '236px',
          height: '131px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '42px',
          color: 'white',
          textAlign: 'center',
          lineHeight: '42.5px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0, fontSize: '42px', lineHeight: '42.5px' }}>79%</p>
        <p style={{ margin: 0 }}>
          <span style={{ fontSize: '42px', lineHeight: '42.5px' }}>ORR </span>
          <br />
          <span style={{ fontSize: '26px', lineHeight: '27.5px' }}>
            <br />
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'medium', fontSize: '26px', lineHeight: '27.5px' }}>with ENHERTU</span>
        </p>
        <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'medium', fontSize: '26px', lineHeight: '27.5px' }}>(n=205/261)</p>
      </div>

      {/* T-DM1 ORR box */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          left: '71px',
          top: '824px',
          width: '197px',
          height: '197px',
          backgroundColor: '#5d6771',
          zIndex: 5
        }}
      />

      {/* T-DM1 ORR text */}
      <div 
        data-enter
        data-enter-order="5"
        style={{ 
          position: 'absolute',
          left: '51px',
          top: '857px',
          width: '236px',
          height: '131px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '42px',
          color: 'white',
          textAlign: 'center',
          lineHeight: '42.5px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0, fontSize: '42px', lineHeight: '42.5px' }}>35%</p>
        <p style={{ margin: 0 }}>
          <span style={{ fontSize: '42px', lineHeight: '42.5px' }}>ORR </span>
          <br />
          <span style={{ fontSize: '26px', lineHeight: '27.5px' }}>
            <br />
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'medium', fontSize: '26px', lineHeight: '27.5px' }}>with T-DM1</span>
        </p>
        <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'medium', fontSize: '26px', lineHeight: '27.5px' }}>(n=92/263)</p>
      </div>

      {/* Graph image */}
      <div 
        data-enter
        data-enter-order="6"
        style={{ 
          position: 'absolute',
          left: '326px',
          top: '489px',
          width: '683px',
          height: '540px',
          backgroundImage: `url(${imgGraph041})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }}
      />

      {/* Footer text */}
      <div 
        data-enter
        data-enter-order="7"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1845px',
          width: '927px',
          height: '45px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '12px',
          color: 'black',
          lineHeight: '15px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>
          Median duration of study follow-up was 28.4 months with ENHERTU and 26.5 months with T-DM1.
        </p>
        <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'medium' }}>
          CR, complete response; ORR, objective response rate; T-DM1, trastuzumab emtansine.
        </p>
        <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 'medium' }}>
          Hurvitz SA, et al. Lancet. 2023;401:105–117.
        </p>
      </div>

      {/* Continue to End Page Button - Icon */}
      <div 
        data-enter
        data-enter-order="8"
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
        onClick={onEndClick}
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
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
          </div>
          <div style={{ 
            position: 'absolute',
            bottom: '7.92%',
            left: '0px',
            right: '30.68%',
            top: '7.02%',
            zIndex: 2
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgGroup} />
          </div>
        </div>
      </div>
    </div>
  );
}
