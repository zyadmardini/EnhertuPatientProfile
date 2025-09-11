// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgImage3 = "/assets/9456fde2da51c16c376c031d8c6e92e84050f67c.jpg";
const imgEllipse1 = "/assets/db308337d318d47455cdd2ec15957a37c39e11c5.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgButtonIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Rawan2Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Rawan2({ onContinueClick, onBackClick, onHomeClick }: Rawan2Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: '#ffffff'
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
        data-enter
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

      {/* Main background */}
      <div 
        data-enter
        style={{ 
          position: 'absolute',
          top: '27px',
          left: '0px',
          width: '1080px',
          height: '1920px',
          backgroundColor: '#ffffff',
          zIndex: 1
        }}
      />

      {/* Case Study Title */}
      <div 
        data-enter
        data-enter-order="1"
        style={{ 
          position: 'absolute',
          top: '167px',
          left: '73px',
          width: '656px',
          height: '80px',
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#5b6670',
          fontFamily: 'Inter, sans-serif',
          zIndex: 3
        }}
      >
        Case Study: Rawan
      </div>

      {/* Patient Image Container */}
      <div 
        data-enter
        data-enter-order="2"
        style={{ 
          position: 'absolute',
          top: '276px',
          left: '73px',
          width: '440px',
          height: '440px',
          zIndex: 4
        }}
      >
        <img 
          src={imgEllipse1} 
          alt="Patient background"
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <img 
          src={imgRawan} 
          alt="Rawan"
          style={{ 
            position: 'absolute',
            top: '25px',
            left: '22px',
            width: '396px',
            height: '390px',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Section Title */}
      <div 
        data-enter
        data-enter-order="3"
        style={{ 
          position: 'absolute',
          top: '276px',
          left: '534px',
          width: '470px',
          height: '108px',
          fontSize: '45px',
          fontWeight: 'bold',
          color: '#250858',
          fontFamily: 'Inter, sans-serif',
          zIndex: 3
        }}
      >
        <div>Patient presents with</div>
        <div>HR+ / HER2-low mBC</div>
      </div>

      {/* Treatment Info Box */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          top: '630px',
          left: '541px',
          width: '462px',
          height: '240px',
          fontSize: '28px',
          fontStyle: 'italic',
          color: '#ec7624',
          fontFamily: 'Inter, sans-serif',
          zIndex: 3
        }}
      >
        ENHERTU demonstrated a clinically meaningful and statistically significant improvement in PFS vs. T-DM1 in DESTINY-Breast031
      </div>

      {/* Treatment Image */}
      <div 
        data-enter
        data-enter-order="5"
        style={{ 
          position: 'absolute',
          top: '420px',
          left: '540px',
          width: '243px',
          height: '174px',
          backgroundImage: `url(${imgImage3})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'top left',
          zIndex: 4
        }}
      />

      {/* Patient Details Container */}
      <div 
        data-enter-group
        data-enter-order="6"
        style={{ 
          position: 'absolute',
          top: '862px',
          left: '73px',
          width: '1007px',
          height: '625px',
          zIndex: 1
        }}
      >
        {/* Row 1 */}
        <div style={{ 
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ee7623',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} />
        <div style={{ 
          position: 'absolute',
          top: '0px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '22px',
          left: '195px',
          width: '812px',
          height: '57px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#5d6771',
          fontFamily: 'Inter, sans-serif',
          zIndex: 6
        }}>
          71-year-old woman from Spain with invasive ductal carcinoma of the right breast
        </div>

        {/* Row 2 */}
        <div style={{ 
          position: 'absolute',
          top: '125px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ee7623',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '125px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '147px',
          left: '195px',
          width: '812px',
          height: '57px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#5d6771',
          fontFamily: 'Inter, sans-serif',
          zIndex: 6
        }}>
          <span style={{ fontWeight: 'bold' }}>Initial presentation:</span> cT4b (27mm) cNx M1 (pleural, lymph nodes, bone, suspected liver metastases)
        </div>

        {/* Row 3 */}
        <div style={{ 
          position: 'absolute',
          top: '250px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ee7623',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '250px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '282px',
          left: '195px',
          width: '812px',
          height: '28px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#5d6771',
          fontFamily: 'Inter, sans-serif',
          zIndex: 6
        }}>
          <span style={{ fontWeight: 'bold' }}>HR status:</span> Positive (ER [100%], PR [70%])
        </div>

        {/* Row 4 */}
        <div style={{ 
          position: 'absolute',
          top: '375px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ee7623',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '375px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '408px',
          left: '195px',
          width: '812px',
          height: '57px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#5d6771',
          fontFamily: 'Inter, sans-serif',
          zIndex: 6
        }}>
          <span style={{ fontWeight: 'bold' }}>HER2 status:</span> HER2-low (IHC 1+)
        </div>

        {/* Row 5 */}
        <div style={{ 
          position: 'absolute',
          top: '500px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ee7623',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '500px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '533px',
          left: '195px',
          width: '812px',
          height: '57px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#5d6771',
          fontFamily: 'Inter, sans-serif',
          zIndex: 6
        }}>
          <span style={{ fontWeight: 'bold' }}>Ki-67:</span> 40%, Grade 2
        </div>

        {/* Row 6 */}
        <div style={{ 
          position: 'absolute',
          top: '625px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ee7623',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '625px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '658px',
          left: '195px',
          width: '812px',
          height: '57px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#5d6771',
          fontFamily: 'Inter, sans-serif',
          zIndex: 6
        }}>
          <span style={{ fontWeight: 'bold' }}>PIK3CA-mutation:</span> Exon 10
        </div>
      </div>

      {/* Treatment Button */}
      <div 
        data-enter
        data-enter-order="7"
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
        <img 
          src={imgButton} 
          alt="Treatment button"
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <img 
          src={imgButtonIcon} 
          alt="Button icon"
          style={{ 
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '115px',
            height: '112px',
            objectFit: 'cover'
          }}
        />
        <div style={{ 
          position: 'absolute',
          top: '32px',
          left: '123px',
          right: '29px',
          bottom: '32px',
          fontSize: '31px',
          fontWeight: 'bold',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          Treatment
        </div>
      </div>

      {/* Footer Text */}
      <div 
        data-enter
        data-enter-order="8"
        style={{ 
          position: 'absolute',
          top: '1838px',
          left: '105px',
          width: '953px',
          height: '45px',
          fontSize: '12px',
          fontWeight: '500',
          color: '#000000',
          fontFamily: 'Inter, sans-serif',
          zIndex: 3
        }}
      >
        <div>Hypothetical case built with input from Dr Simon Gampenrieder, University Hospital Salzburg, Austria.</div>
        <div>ER, estrogen receptor; HER2, human epidermal growth factor receptor 2; IHC, immunohistochemistry; PIK3CA, phosphatidylinositol-4,5-bisphosphate 3-kinase catalytic subunit alpha; PR, progesterone receptor</div>
      </div>
    </div>
  );
}