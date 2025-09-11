// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgVector = "/assets/d1beffc4288bed37603d9dfbdd38ef2183acde9d.svg";
const imgGreyArrow = "/assets/6e6bd3d09036d7e74769c2af4739e9895e07ecac.svg";
const imgVector1 = "/assets/1d72af2dfa819cbcd374ebfe2c0ce37b6820e638.svg";
const imgVector2 = "/assets/495bc9a3efd9cb4f7641c6939d99a1ba8441b41e.svg";
const imgOrangeArrow = "/assets/449687bc227799e152eb96fdc69677fa8e91bc43.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgButtonIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Rawan4Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Rawan4({ onContinueClick, onBackClick, onHomeClick }: Rawan4Props) {
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

      {/* Case Study Title */}
      <div 
        data-enter
        data-enter-order="1"
        style={{ 
          position: 'absolute',
          top: '167px',
          left: '50px',
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
          src={imgRawan} 
          alt="Rawan"
          style={{ 
            width: '100%', 
            height: '100%',
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
          top: '409px',
          left: '534px',
          width: '495px',
          height: '173px',
          fontSize: '45px',
          fontWeight: 'bold',
          color: '#250858',
          fontFamily: 'Inter, sans-serif',
          zIndex: 3
        }}
      >
        Disease progresses following 3L capecitabine + bevacizumab
      </div>

      {/* Treatment Timeline Container */}
      <div 
        data-enter-group
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          top: '805px',
          left: '73px',
          width: '1007px',
          height: '750px',
          zIndex: 1
        }}
      >
        {/* Row 1 - 1L Treatment */}
        <div style={{ 
          position: 'absolute',
          top: '0px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#e3e3e3',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#5d6771',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} />
        <div style={{ 
          position: 'absolute',
          top: '20px',
          left: '195px',
          width: '812px',
          height: '57px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#5d6771',
          fontFamily: 'Inter, sans-serif',
          zIndex: 6
        }}>
          <span style={{ fontWeight: 'bold' }}>1L treatment:</span> Letrozole + ribociclib + denosumab
        </div>

        {/* Row 2 - CT 24 mo */}
        <div style={{ 
          position: 'absolute',
          top: '125px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#e3e3e3',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '125px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#5d6771',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} />
        <div style={{ 
          position: 'absolute',
          top: '145px',
          left: '195px',
          width: '812px',
          height: '57px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#5d6771',
          fontFamily: 'Inter, sans-serif',
          zIndex: 6
        }}>
          <span style={{ fontWeight: 'bold' }}>CT (24 mo):</span> Progressive disease (lymph nodes, liver, lung)
        </div>

        {/* Row 3 - 2L Treatment */}
        <div style={{ 
          position: 'absolute',
          top: '250px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#e3e3e3',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '250px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#5d6771',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
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
          <span style={{ fontWeight: 'bold' }}>2L treatment:</span> Fulvestrant + alpelisib
        </div>

        {/* Row 4 - CT 8 mo */}
        <div style={{ 
          position: 'absolute',
          top: '375px',
          left: '134px',
          width: '873px',
          height: '96px',
          backgroundColor: '#e3e3e3',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '375px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#5d6771',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
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
          <span style={{ fontWeight: 'bold' }}>CT (8 mo):</span> Progressive disease (liver)
        </div>

        {/* Row 5 - 3L Treatment */}
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
          top: '500px',
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
          <span style={{ fontWeight: 'bold' }}>3L treatment:</span> Capecitabine + bevacizumab
        </div>

        {/* Row 6 - Best response */}
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
          top: '625px',
          left: '0px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ffb061',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
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
          <span style={{ fontWeight: 'bold' }}>Best response:</span> Stable disease
        </div>

        {/* Row 7 - CT 12 mo */}
        <div style={{ 
          position: 'absolute',
          top: '750px',
          left: '129px',
          width: '873px',
          height: '96px',
          backgroundColor: '#ffd2a9',
          zIndex: 1
        }} />
        <div style={{ 
          position: 'absolute',
          top: '750px',
          left: '-5px',
          width: '186px',
          height: '96px',
          backgroundColor: '#ffb061',
          borderTopRightRadius: '60px',
          borderBottomRightRadius: '60px',
          zIndex: 2
        }} />
        <div style={{ 
          position: 'absolute',
          top: '784px',
          left: '195px',
          width: '812px',
          height: '57px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#5d6771',
          fontFamily: 'Inter, sans-serif',
          zIndex: 6
        }}>
          <span style={{ fontWeight: 'bold' }}>CT (12 mo):</span> Progressive disease (liver and lung)
        </div>

        {/* Icons */}
        <div style={{ 
          position: 'absolute',
          top: '10px',
          left: '97px',
          width: '78px',
          height: '78px',
          zIndex: 10
        }}>
          <img 
            src={imgVector} 
            alt="1L icon"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <div style={{ 
          position: 'absolute',
          top: '134px',
          left: '97px',
          width: '78px',
          height: '78px',
          zIndex: 10
        }}>
          <img 
            src={imgGreyArrow} 
            alt="CT arrow"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <div style={{ 
          position: 'absolute',
          top: '259px',
          left: '97px',
          width: '78px',
          height: '78px',
          zIndex: 10
        }}>
          <img 
            src={imgVector1} 
            alt="2L icon"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <div style={{ 
          position: 'absolute',
          top: '384px',
          left: '97px',
          width: '78px',
          height: '78px',
          zIndex: 10
        }}>
          <img 
            src={imgGreyArrow} 
            alt="CT arrow"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <div style={{ 
          position: 'absolute',
          top: '509px',
          left: '97px',
          width: '78px',
          height: '78px',
          zIndex: 10
        }}>
          <img 
            src={imgVector2} 
            alt="3L icon"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <div style={{ 
          position: 'absolute',
          top: '634px',
          left: '97px',
          width: '78px',
          height: '78px',
          zIndex: 10
        }}>
          <img 
            src={imgOrangeArrow} 
            alt="Response icon"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <div style={{ 
          position: 'absolute',
          top: '759px',
          left: '97px',
          width: '78px',
          height: '78px',
          zIndex: 10
        }}>
          <img 
            src={imgOrangeArrow} 
            alt="CT 12 mo icon"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Next Treatment Options Button */}
      <div 
        data-enter
        data-enter-order="5"
        style={{ 
          position: 'absolute',
          top: '1740px',
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
          alt="Next treatment options button"
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
          Next treatment options
        </div>
      </div>

      {/* Footer Text */}
      <div 
        data-enter
        data-enter-order="6"
        style={{ 
          position: 'absolute',
          top: '1878px',
          left: '105px',
          width: '953px',
          height: '30px',
          fontSize: '12px',
          fontWeight: '500',
          color: '#000000',
          fontFamily: 'Inter, sans-serif',
          zIndex: 3
        }}
      >
        <div>Hypothetical case built with input from Dr Simon Gampenrieder, University Hospital Salzburg, Austria.</div>
        <div>1/2/3L, first/second/third-line; CT, computed tomography; mo, month.</div>
      </div>
    </div>
  );
}