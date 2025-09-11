// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgEllipse1 = "/assets/adcaf288b3552b47e9a3f82d04a05faf637e433f.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Hala2Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala2({ onContinueClick, onBackClick, onHomeClick }: Hala2Props) {
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
          top: '370px',
          width: '481px',
          height: '162px',
          fontSize: '45px',
          fontWeight: 'bold',
          color: '#250858',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.2',
          zIndex: 3
        }}
      >
        Patient presents with<br />
        de novo HR– / HER2-low mBC
      </div>

      {/* Treatment Timeline */}
      <div 
        data-enter-group
        data-enter-delay="0.4"
        data-enter-stagger="0.1"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '699px',
          width: '1007px',
          height: '875px',
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
              top: '20px',
              width: '812px',
              height: '57px',
              fontSize: '24px',
              fontWeight: '500',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.2',
              zIndex: 6
            }}
          >
            52-year-old women with De novo mTNBC of the right breast and no<br />
            significant comorbidities
          </div>
        </div>

        {/* Row 2 */}
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
              top: '34px',
              width: '812px',
              height: '29px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              zIndex: 6
            }}
          >
            <span style={{ fontWeight: 'bold' }}>Initial presentation: </span>
            <span style={{ fontWeight: '500' }}>cT3 cN2 cM1 (lymph nodes, skin, liver)</span>
          </div>
        </div>

        {/* Row 3 */}
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
              top: '34px',
              width: '812px',
              height: '28px',
              fontSize: '24px',
              fontWeight: '500',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              zIndex: 6
            }}
          >
            <span style={{ fontWeight: 'bold' }}>HR status: </span>
            <span>Negative (ER-negative [0%], PR-negative [0%])</span>
          </div>
        </div>

        {/* Row 4 */}
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
              top: '20px',
              width: '812px',
              height: '57px',
              fontSize: '24px',
              fontWeight: '500',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.2',
              zIndex: 6
            }}
          >
            <span style={{ fontWeight: 'bold' }}>HER2 status: </span>
            <span>HER2 low (primary: IHC 1+, liver metastases: IHC 1+)</span>
          </div>
        </div>

        {/* Row 5 */}
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
              top: '20px',
              width: '812px',
              height: '57px',
              fontSize: '24px',
              fontWeight: '500',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.2',
              zIndex: 6
            }}
          >
            <span style={{ fontWeight: 'bold' }}>Ki-67: </span>
            <span>40%, Grade 3</span>
          </div>
        </div>

        {/* Row 6 */}
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
              top: '20px',
              width: '812px',
              height: '57px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.2',
              zIndex: 6
            }}
          >
            <span>PD-L1-mutation: </span>
            <span style={{ fontWeight: '500' }}>Positive (CPS 12; 22C3)</span>
          </div>
        </div>

        {/* Row 7 */}
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
              top: '20px',
              width: '812px',
              height: '57px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.2',
              zIndex: 6
            }}
          >
            <span>gBRCA‑analysis: </span>
            <span style={{ fontWeight: '500' }}>No mutation</span>
          </div>
        </div>

        {/* Row 8 */}
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
              top: '20px',
              width: '812px',
              height: '57px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#5d6771',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.2',
              zIndex: 6
            }}
          >
            <span>TMB (NGS): </span>
            <span style={{ fontWeight: '500' }}>15 mut/Mb</span>
          </div>
        </div>
      </div>

      {/* Treatment Button */}
      <div 
        data-enter
        data-enter-delay="0.8"
        style={{ 
          position: 'absolute',
          left: '191px',
          top: '1688px',
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
          Treatment
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
          top: '1823px',
          width: '953px',
          height: '60px',
          fontSize: '12px',
          fontWeight: '500',
          color: 'black',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.25',
          zIndex: 6
        }}
      >
        Hypothetical case built with input from Dr Simon Gampenrieder, University Hospital Salzburg, Austria. CPS, combined positive score; ER, estrogen receptor; gBRCA, germline BRCA; HER2, human epidermal growth factor receptor 2; HR, hormone receptor; IHC, immunohistochemistry; mut/Mb, mutations per megabase; NGS, next-generation sequencing; PD-L1, programmed death-ligand 1; PR, progesterone receptor; TMB, tumor mutational burden; mTNBC, metastatic triple-negative breast cancer.
      </div>
    </div>
  );
}
