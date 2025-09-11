// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgEllipse1 = "/assets/4298bae82b56e0e6f3ac600c0f7ea72cbd3cf8ca.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgEllipse3 = "/assets/5074d8c1d2f2a69f48812317ed1417116c392ebd.svg";
const imgEllipse9 = "/assets/a947a2dc0e331bf8e80392950dea86a9c3ab32b6.svg";
const imgImage13 = "/assets/37dc348c1b12fb1b6c174225bc77567c243e74cd.png";
const imgImage12 = "/assets/bda9be24ca577095994136511735681979b3b606.png";
const imgImage14 = "/assets/5000dd7237725db7519d67dcb0fc2e30ebe0215c.png";

interface Hala6Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala6({ onContinueClick, onBackClick, onHomeClick }: Hala6Props) {
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
          left: '0px',
          top: '0px',
          width: '756px',
          height: '27px',
          background: 'linear-gradient(to right, #ec7624, #ffb061)',
          zIndex: 2
        }}
      />

      {/* Case Study Title */}
      <div 
        data-enter
        data-enter-delay="0.1"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '167px',
          width: '656px',
          height: '80px',
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#5b6670',
          fontFamily: 'Inter, sans-serif',
          zIndex: 3
        }}
      >
        Case Study: Hala
      </div>

      {/* Patient Image Container */}
      <div 
        data-enter
        data-enter-delay="0.2"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '247px',
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
            objectFit: 'contain'
          }} 
        />
        <div 
          style={{ 
            position: 'absolute',
            left: '25px',
            top: '25px',
            width: '388px',
            height: '390px',
            backgroundImage: `url('${imgHala}')`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'top left',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Section Title */}
      <div 
        data-enter
        data-enter-delay="0.3"
        style={{ 
          position: 'absolute',
          left: '534px',
          top: '412px',
          width: '481px',
          height: '108px',
          fontSize: '45px',
          fontWeight: 'bold',
          color: '#250858',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.2',
          zIndex: 3
        }}
      >
        Patient starts ENHERTU treatment
      </div>

      {/* Treatment Timeline */}
      <div 
        data-enter-group
        data-enter-delay="0.4"
        data-enter-stagger="0.1"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '805px',
          width: '1007px',
          height: '125px',
          zIndex: 1
        }}
      >
        {/* Row 1 */}
        <div style={{ position: 'relative', width: '100%', height: '96px', marginBottom: '29px' }}>
          <div 
            style={{ 
              position: 'absolute',
              left: '0px',
              top: '0px',
              width: '186px',
              height: '96px',
              backgroundColor: '#58378a',
              borderTopRightRadius: '60px',
              borderBottomRightRadius: '60px',
              zIndex: 2
            }}
          />
          <div 
            style={{ 
              position: 'absolute',
              left: '134px',
              top: '0px',
              width: '873px',
              height: '96px',
              backgroundColor: '#dcd2ec',
              zIndex: 1
            }}
          />
          <div 
            style={{ 
              position: 'absolute',
              left: '195px',
              top: '35px',
              width: '812px',
              height: '29px',
              fontSize: '24px',
              fontWeight: '500',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              zIndex: 6
            }}
          >
            Post‑chemotherapy treatment considerations
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ position: 'relative', width: '100%', height: '96px' }}>
          <div 
            style={{ 
              position: 'absolute',
              left: '0px',
              top: '0px',
              width: '186px',
              height: '96px',
              backgroundColor: '#58378a',
              borderTopRightRadius: '60px',
              borderBottomRightRadius: '60px',
              zIndex: 2
            }}
          />
          <div 
            style={{ 
              position: 'absolute',
              left: '134px',
              top: '0px',
              width: '873px',
              height: '96px',
              backgroundColor: '#dcd2ec',
              zIndex: 1
            }}
          />
          <div 
            style={{ 
              position: 'absolute',
              left: '195px',
              top: '34px',
              width: '767px',
              height: '28px',
              fontSize: '21px',
              fontWeight: '500',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              zIndex: 6
            }}
          >
            Discussing ENHERTU treatment with the patient
          </div>
          <div 
            style={{ 
              position: 'absolute',
              left: '97px',
              top: '9px',
              width: '78px',
              height: '78px',
              zIndex: 5
            }}
          >
            <img 
              src={imgEllipse3} 
              alt="Treatment icon" 
              style={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'contain'
              }} 
            />
            <div 
              style={{ 
                position: 'absolute',
                left: '15px',
                top: '15px',
                width: '47px',
                height: '47px',
                backgroundImage: `url('${imgImage13}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        </div>
      </div>

      {/* Patient Counselling Box */}
      <div 
        data-enter
        data-enter-delay="0.6"
        style={{ 
          position: 'absolute',
          left: '193px',
          top: '1116px',
          width: '822px',
          height: '238px',
          backgroundColor: '#f3f7d9',
          zIndex: 1
        }}
      >
        <div 
          style={{ 
            position: 'absolute',
            left: '155px',
            top: '16px',
            width: '652px',
            height: '206px',
            fontSize: '24px',
            fontWeight: '500',
            color: '#5d6771',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.2',
            zIndex: 6
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
            Patient counselling:
          </div>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              Includes a discussion on the risk of associated side effects of ENHERTU including but not limited to nausea, vomiting, neutropenia, and ILD/pneumonitis¹
            </li>
            <li>
              Empowers patients to actively participate in the management of their disease, establishes treatment expectation and supports AE management
            </li>
          </ul>
        </div>
      </div>

      {/* Treatment Icons */}
      <div 
        data-enter
        data-enter-delay="0.5"
        style={{ 
          position: 'absolute',
          left: '97px',
          top: '8px',
          width: '78px',
          height: '78px',
          zIndex: 5
        }}
      >
        <img 
          src={imgEllipse3} 
          alt="Treatment icon" 
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain'
          }} 
        />
        <div 
          style={{ 
            position: 'absolute',
            left: '15px',
            top: '15px',
            width: '48px',
            height: '48px',
            backgroundImage: `url('${imgImage12}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Large Patient Image */}
      <div 
        data-enter
        data-enter-delay="0.7"
        style={{ 
          position: 'absolute',
          left: '63px',
          top: '1105px',
          width: '260px',
          height: '260px',
          zIndex: 4
        }}
      >
        <img 
          src={imgEllipse9} 
          alt="Patient image background" 
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain'
          }} 
        />
        <div 
          style={{ 
            position: 'absolute',
            left: '11px',
            top: '10px',
            width: '236px',
            height: '240px',
            backgroundImage: `url('${imgImage14}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Treatment Button */}
      <div 
        data-enter
        data-enter-delay="0.8"
        style={{ 
          position: 'absolute',
          left: '191px',
          top: '1615px',
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
            objectFit: 'contain'
          }} 
        />
        <div 
          style={{ 
            position: 'absolute',
            left: '123px',
            top: '32px',
            width: '453px',
            height: '48px',
            fontSize: '31px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            lineHeight: '54px',
            zIndex: 101
          }}
        >
          Decision
        </div>
        <div 
          style={{ 
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '115px',
            height: '112px',
            zIndex: 101
          }}
        >
          <img 
            src={imgIcon} 
            alt="Button icon" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
      </div>

      {/* Footer Text */}
      <div 
        data-enter
        data-enter-delay="0.9"
        style={{ 
          position: 'absolute',
          left: '105px',
          top: '1838px',
          width: '953px',
          height: '45px',
          fontSize: '12px',
          fontWeight: '500',
          color: 'black',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.25',
          zIndex: 6
        }}
      >
        Hypothetical case built with input from Dr Simon Gampenrieder, University Hospital Salzburg, Austria. AE, adverse event. 1. Bardia, A. et al. The Oncologist, 2022, 1–9.
      </div>
    </div>
  );
}
