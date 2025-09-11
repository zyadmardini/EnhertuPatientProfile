// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgEllipse1 = "/assets/4298bae82b56e0e6f3ac600c0f7ea72cbd3cf8ca.svg";
const imgVector = "/assets/f53a2a7cb2464c8a73ce991a95546d995905d661.svg";
const imgArrow = "/assets/d14039ca8b9aa1ecdb57c4b396d6a3640f644835.svg";
const imgVector2 = "/assets/95597fef952e173248e8f7194c413c03e4c664d2.svg";

interface Hala15Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala15({ onContinueClick, onBackClick, onHomeClick }: Hala15Props) {
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

      {/* Case Study title */}
      <div 
        data-enter
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
      >
        Case Study: Hala
      </div>

      {/* Patient photo container */}
      <div 
        data-enter
        data-enter-delay="0.1"
        style={{
          position: 'absolute',
          top: '247px',
          left: '73px',
          width: '440px',
          height: '440px',
          zIndex: 4
        }}
      >
        <img 
          alt="" 
          style={{ 
            display: 'block', 
            maxWidth: 'none', 
            width: '100%', 
            height: '100%' 
          }} 
          src={imgEllipse1} 
        />
      </div>

      {/* Patient photo */}
      <div 
        data-enter
        data-enter-delay="0.1"
        style={{
          position: 'absolute',
          top: '271px',
          left: '98px',
          width: '396px',
          height: '390px',
          backgroundImage: `url('${imgHala}')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }}
      />

      {/* Section title */}
      <div 
        data-enter
        data-enter-delay="0.2"
        style={{
          position: 'absolute',
          top: '338px',
          left: '534px',
          width: '481px',
          height: '235px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '39px',
          color: '#250858',
          lineHeight: 'normal',
          zIndex: 6
        }}
      >
        ENHERTU was successfully rechallenged after full resolution of Grade 1 ILD/pneumonitis recurrence
      </div>

      {/* Timeline - First treatment */}
      <div 
        data-enter
        data-enter-delay="0.3"
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
      />

      <div 
        data-enter
        data-enter-delay="0.3"
        style={{
          position: 'absolute',
          top: '815px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 4
        }}
      >
        <img 
          alt="" 
          style={{ 
            display: 'block', 
            maxWidth: 'none', 
            width: '100%', 
            height: '100%' 
          }} 
          src={imgVector} 
        />
      </div>

      <div 
        data-enter
        data-enter-delay="0.3"
        style={{
          position: 'absolute',
          top: '805px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#d9d9d9',
          zIndex: 1
        }}
      />

      <div 
        data-enter
        data-enter-delay="0.3"
        style={{
          position: 'absolute',
          top: '827px',
          left: '268px',
          width: '812px',
          height: '51px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0, marginBottom: '0px' }}>
          <span>1L treatment: </span>
          <span style={{ fontWeight: '500' }}>Paclitaxel + pembrolizumab</span>
        </p>
        <p style={{ margin: 0 }}>
          <span>2L treatment: </span>
          <span style={{ fontWeight: '500' }}>ENHERTU</span>
        </p>
      </div>

      {/* Timeline - Second treatment */}
      <div 
        data-enter
        data-enter-delay="0.4"
        style={{
          position: 'absolute',
          top: '930px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#58378a',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }}
      />

      <div 
        data-enter
        data-enter-delay="0.4"
        style={{
          position: 'absolute',
          top: '939px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 4
        }}
      >
        <img 
          alt="" 
          style={{ 
            display: 'block', 
            maxWidth: 'none', 
            width: '100%', 
            height: '100%' 
          }} 
          src={imgArrow} 
        />
      </div>

      <div 
        data-enter
        data-enter-delay="0.4"
        style={{
          position: 'absolute',
          top: '930px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#dcd2ec',
          zIndex: 1
        }}
      />

      <div 
        data-enter
        data-enter-delay="0.4"
        style={{
          position: 'absolute',
          top: '955px',
          left: '268px',
          width: '812px',
          height: '57px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0, marginBottom: '0px' }}>
          <span>CT (2 mo): </span>
          <span style={{ fontWeight: '500' }}>Partial response (lymph nodes, skin, liver) but </span>
          <span>right</span>
        </p>
        <p style={{ margin: 0 }}>upper lobe pneumonitis</p>
      </div>

      {/* Timeline - Third treatment */}
      <div 
        data-enter
        data-enter-delay="0.5"
        style={{
          position: 'absolute',
          top: '1055px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#8c66c6',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }}
      />

      <div 
        data-enter
        data-enter-delay="0.5"
        style={{
          position: 'absolute',
          top: '1064px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 4
        }}
      >
        <img 
          alt="" 
          style={{ 
            display: 'block', 
            maxWidth: 'none', 
            width: '100%', 
            height: '100%' 
          }} 
          src={imgArrow} 
        />
      </div>

      <div 
        data-enter
        data-enter-delay="0.5"
        style={{
          position: 'absolute',
          top: '1055px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#dcd2ec',
          zIndex: 1
        }}
      />

      <div 
        data-enter
        data-enter-delay="0.5"
        style={{
          position: 'absolute',
          top: '1089px',
          left: '268px',
          width: '812px',
          height: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }}
      >
        Grade 1 pneumonitis had resolved to Grade 0
      </div>

      {/* Timeline - Fourth treatment */}
      <div 
        data-enter
        data-enter-delay="0.6"
        style={{
          position: 'absolute',
          top: '1180px',
          left: '73px',
          width: '186px',
          height: '96px',
          backgroundColor: '#58378a',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }}
      />

      <div 
        data-enter
        data-enter-delay="0.6"
        style={{
          position: 'absolute',
          top: '1189px',
          left: '170px',
          width: '78px',
          height: '78px',
          zIndex: 4
        }}
      >
        <img 
          alt="" 
          style={{ 
            display: 'block', 
            maxWidth: 'none', 
            width: '100%', 
            height: '100%' 
          }} 
          src={imgVector2} 
        />
      </div>

      <div 
        data-enter
        data-enter-delay="0.6"
        style={{
          position: 'absolute',
          top: '1180px',
          left: '207px',
          width: '873px',
          height: '96px',
          backgroundColor: '#dcd2ec',
          zIndex: 1
        }}
      />

      <div 
        data-enter
        data-enter-delay="0.6"
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
      >
        <p style={{ margin: 0, marginBottom: '0px' }}>ENHERTU rechallenged with 1 dose level reduction (4.4 mg/kg)</p>
        <p style={{ margin: 0 }}>with close monitoring</p>
      </div>

      {/* Continue button */}
      <div 
        data-enter
        data-enter-delay="0.7"
        style={{
          position: 'absolute',
          top: '1615px',
          left: '191px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 100
        }}
        onClick={onContinueClick}
      >
        <div 
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '2px',
            right: '0px',
            top: '1px'
          }}
        >
          <img 
            alt="" 
            style={{ 
              display: 'block', 
              maxWidth: 'none', 
              width: '100%', 
              height: '100%' 
            }} 
            src="/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg" 
          />
        </div>
        <div 
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            right: '82.4%',
            top: '0px'
          }}
        >
          <img 
            alt="" 
            style={{ 
              display: 'block', 
              maxWidth: 'none', 
              width: '100%', 
              height: '100%' 
            }} 
            src="/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg" 
          />
        </div>
        <div 
          style={{
            position: 'absolute',
            top: '32px',
            right: '29px',
            bottom: '32px',
            left: '123px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '31px',
            color: 'white',
            textAlign: 'center',
            lineHeight: '54px'
          }}
        >
          Continue
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
          color: 'black',
          lineHeight: '15px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0, marginBottom: '0px' }}>
          Hypothetical case built with input from Dr Simon Gampenrieder, University Hospital Salzburg, Austria.
        </p>
        <p style={{ margin: 0 }}>1/2L, first/second-line; CT, computed tomography.</p>
      </div>
    </div>
  );
}