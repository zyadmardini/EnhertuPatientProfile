// Image assets from Figma MCP
const imgImage1 = "/assets/1d44abcb1be0cbf5ca97aee6788fa99fe95d7dea.png";
const imgImage2 = "/assets/7077dd0d804f0a6752ff102d05f0327e811949f8.png";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Layla12Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla12({ onContinueClick, onBackClick, onHomeClick }: Layla12Props) {
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
        <span>DESTINY-Breast03 demonstrated </span>
        <span style={{ color: '#ee7623' }}>a positive benefit:risk profile</span>
        <span> with ENHERTU, with the majority of AEs being Grade 1 or 2<sup>1</sup></span>
      </div>

      {/* Subtitle */}
      <div 
        data-enter
        data-enter-order="2"
        style={{ 
          position: 'absolute',
          left: '72px',
          top: '404px',
          width: '935px',
          height: '56px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }}
      >
        The most common TEAEs in the ENHERTU arm of the DESTINY-Breast03 trial were nausea, vomiting and alopecia<sup>1</sup>
      </div>

      {/* TEAEs subtitle */}
      <div 
        data-enter
        data-enter-order="3"
        style={{ 
          position: 'absolute',
          left: '67px',
          top: '512px',
          width: '935px',
          height: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'medium',
          fontSize: '25px',
          color: 'black',
          textAlign: 'center',
          lineHeight: '28px',
          zIndex: 6
        }}
      >
        TEAEs (occurring in ≥20% of patients)
      </div>

      {/* Left chart image */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          left: '224px',
          top: '586px',
          width: '574px',
          height: '560px',
          backgroundImage: `url(${imgImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }}
      />

      {/* Right chart image */}
      <div 
        data-enter
        data-enter-order="5"
        style={{ 
          position: 'absolute',
          left: '704px',
          top: '592px',
          width: '584px',
          height: '560px',
          backgroundImage: `url(${imgImage1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }}
      />

      {/* Left chart title */}
      <div 
        data-enter
        data-enter-order="6"
        style={{ 
          position: 'absolute',
          left: '72px',
          top: '1198px',
          width: '241px',
          height: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }}
      >
        ENHERTU (n=257)
      </div>

      {/* Right chart title */}
      <div 
        data-enter
        data-enter-order="7"
        style={{ 
          position: 'absolute',
          left: '703px',
          top: '1198px',
          width: '304px',
          height: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }}
      >
        T-DM1 (n=261)
      </div>

      {/* Left legend - Any grade */}
      <div 
        data-enter
        data-enter-order="8"
        style={{ 
          position: 'absolute',
          left: '119px',
          top: '1250px',
          width: '130px',
          height: '24px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '14px',
          color: 'black',
          lineHeight: '23.5px',
          zIndex: 6
        }}
      >
        Any grade
      </div>

      {/* Left legend - Any grade color */}
      <div 
        data-enter
        data-enter-order="9"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1246px',
          width: '32px',
          height: '32px',
          backgroundColor: '#ee7623',
          zIndex: 5
        }}
      />

      {/* Left legend - Grade ≥3 */}
      <div 
        data-enter
        data-enter-order="10"
        style={{ 
          position: 'absolute',
          left: '309px',
          top: '1250px',
          width: '130px',
          height: '24px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '14px',
          color: 'black',
          lineHeight: '23.5px',
          zIndex: 6
        }}
      >
        Grade ≥3
      </div>

      {/* Left legend - Grade ≥3 color */}
      <div 
        data-enter
        data-enter-order="11"
        style={{ 
          position: 'absolute',
          left: '263px',
          top: '1246px',
          width: '32px',
          height: '32px',
          backgroundColor: '#a93512',
          zIndex: 5
        }}
      />

      {/* Right legend - Any grade */}
      <div 
        data-enter
        data-enter-order="12"
        style={{ 
          position: 'absolute',
          left: '750px',
          top: '1250px',
          width: '130px',
          height: '24px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '14px',
          color: 'black',
          lineHeight: '23.5px',
          zIndex: 6
        }}
      >
        Any grade
      </div>

      {/* Right legend - Any grade color */}
      <div 
        data-enter
        data-enter-order="13"
        style={{ 
          position: 'absolute',
          left: '704px',
          top: '1246px',
          width: '32px',
          height: '32px',
          backgroundColor: '#bfbfbf',
          zIndex: 5
        }}
      />

      {/* Right legend - Grade ≥3 */}
      <div 
        data-enter
        data-enter-order="14"
        style={{ 
          position: 'absolute',
          left: '940px',
          top: '1250px',
          width: '130px',
          height: '24px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '14px',
          color: 'black',
          lineHeight: '23.5px',
          zIndex: 6
        }}
      >
        Grade ≥3
      </div>

      {/* Right legend - Grade ≥3 color */}
      <div 
        data-enter
        data-enter-order="15"
        style={{ 
          position: 'absolute',
          left: '894px',
          top: '1246px',
          width: '32px',
          height: '32px',
          backgroundColor: '#272727',
          zIndex: 5
        }}
      />

      {/* Side labels */}
      <div 
        data-enter
        data-enter-order="16"
        style={{ 
          position: 'absolute',
          left: '75px',
          top: '614px',
          width: '130px',
          height: '532px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '14px',
          color: 'black',
          lineHeight: '23.5px',
          zIndex: 6
        }}
      >
        Nausea Vomiting Alopecia* Constipation Anemia Diarrhea Fatigue Neutrophil count decreased Decreased appetite Aspartate aminotransferase increased Platelet count decreased Headache WBC decreased Alanine aminotransferase increased Weight decreased
      </div>

      {/* Continue button */}
      <div 
        data-enter
        data-enter-order="17"
        style={{ 
          position: 'absolute',
          left: '190px',
          top: '1615px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 6
        }}
        onClick={onContinueClick}
      >
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0.29%',
          right: '0px',
          top: '0.89%',
          width: '100%',
          height: '100%'
        }}>
          <img 
            src={img} 
            alt="Button background" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          right: '82.4%',
          top: '0px',
          width: '17.6%',
          height: '100%'
        }}>
          <img 
            src={img1} 
            alt="Button icon" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
        <div style={{ 
          position: 'absolute',
          top: '28.57%',
          right: '4.15%',
          bottom: '28.57%',
          left: '17.6%',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '31px',
          color: 'white',
          textAlign: 'center',
          lineHeight: '54px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Patient progress
        </div>
      </div>

      {/* Footer text */}
      <div 
        data-enter
        data-enter-order="18"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1800px',
          width: '927px',
          height: '90px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'semi-bold',
          fontSize: '12px',
          color: 'black',
          lineHeight: '15px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          Median duration of study follow-up was 28.4 months with ENHERTU and 26.5 months with T-DM1.<sup>2</sup>
        </p>
        <p style={{ margin: 0 }}>
          *Cases of alopecia reported during the study were graded based on the clinical judgement of the investigator. One case of alopecia was categorized as Grade 3 by the investigator despite Grade 3 alopecia not being recognized by the National Cancer Institute Common Terminology criteria. The event outcome was reported as recovered by the investigator.
        </p>
        <p style={{ margin: 0 }}>
          AE, adverse event; TEAE, treatment-emergent adverse event; T-DM1, trastuzumab emtansine; WBC, white blood cell.
        </p>
        <p style={{ margin: 0 }}>
          1. Hurvitz SA, et al. Presented at San Antonio Breast Cancer Symposium 2022. Presentation #GS2-02; 2. Hurvitz SA, et al. Lancet. 2023;401:105–117.
        </p>
      </div>
    </div>
  );
}
