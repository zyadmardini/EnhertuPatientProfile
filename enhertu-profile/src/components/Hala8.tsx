// Image assets from Figma MCP
const imgImage15 = "/assets/1f6c32688031021d8f6639925367d03aebe2b066.png";
const imgGraph111 = "/assets/f58fd2ecd65040fd87f86e09547f656a82ec3a12.png";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/fd146c4fe67459a60e7417374eecc063a3b335e8.svg";

interface Hala8Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala8({ onContinueClick, onBackClick, onHomeClick }: Hala8Props) {
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

      {/* Title */}
      <div 
        data-enter
        data-enter-delay="0.1"
        style={{ 
          position: 'absolute',
          left: '222px',
          top: '104px',
          width: '782px',
          height: '182px',
          fontSize: '41px',
          fontWeight: 'bold',
          color: '#250858',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.2',
          zIndex: 3
        }}
      >
        ENHERTU tripled cORR vs. chemotherapy
      </div>

      {/* HR- Label */}
      <div 
        data-enter
        data-enter-delay="0.2"
        style={{ 
          position: 'absolute',
          left: '96px',
          top: '74px',
          width: '97px',
          height: '59px',
          fontSize: '38px',
          fontWeight: 'bold',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.2',
          zIndex: 3
        }}
      >
        HR-
      </div>

      {/* Vector Background */}
      <div 
        data-enter
        data-enter-delay="0.3"
        style={{ 
          position: 'absolute',
          left: '61px',
          top: '27px',
          width: '138px',
          height: '346px',
          zIndex: 1
        }}
      >
        <div 
          style={{ 
            width: '346px',
            height: '138px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transformOrigin: 'center',
            transform: 'translate(-50%, -50%) rotate(90deg)'
          }}
        >
          <img 
            src={imgVector} 
            alt="Vector background" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>
      </div>

      {/* cORR Label */}
      <div 
        data-enter
        data-enter-delay="0.4"
        style={{ 
          position: 'absolute',
          left: '630px',
          top: '498px',
          width: '140px',
          height: '59px',
          fontSize: '38px',
          fontWeight: 'bold',
          color: '#250858',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
          lineHeight: '1.2',
          zIndex: 3
        }}
      >
        cORR
      </div>

      {/* HR+ Label */}
      <div 
        data-enter
        data-enter-delay="0.5"
        style={{ 
          position: 'absolute',
          left: '663px',
          top: '565px',
          width: '97px',
          height: '59px',
          fontSize: '38px',
          fontWeight: 'bold',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.2',
          zIndex: 3
        }}
      >
        HR+
      </div>

      {/* HR+ Background */}
      <div 
        data-enter
        data-enter-delay="0.6"
        style={{ 
          position: 'absolute',
          left: '445px',
          top: '557px',
          width: '532px',
          height: '58px',
          backgroundColor: '#250858',
          zIndex: 1
        }}
      />

      {/* Main Graph */}
      <div 
        data-enter
        data-enter-delay="0.7"
        style={{ 
          position: 'absolute',
          left: '88px',
          top: '722px',
          width: '889px',
          height: '619px',
          backgroundImage: `url('${imgGraph111}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }}
      />

      {/* Bottom Image */}
      <div 
        data-enter
        data-enter-delay="0.8"
        style={{ 
          position: 'absolute',
          left: '87px',
          top: '1386px',
          width: '292px',
          height: '94px',
          backgroundImage: `url('${imgImage15}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }}
      />

      {/* Treatment Button */}
      <div 
        data-enter
        data-enter-delay="0.9"
        style={{ 
          position: 'absolute',
          left: '190px',
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
          Push the Paradigm
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
        data-enter-delay="1.0"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1815px',
          width: '927px',
          height: '75px',
          fontSize: '12px',
          fontWeight: '500',
          color: 'black',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.25',
          zIndex: 6
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
          HR status is based on the data from the electronic data capture corrected for misstratification.
        </div>
        <div style={{ fontWeight: '500', marginBottom: '4px' }}>
          †Clinical benefit rate is defined as the sum of complete response, partial response rate, and more than 6 months sable disease rate, based on blinded independent central review.
        </div>
        <div style={{ fontWeight: '500', marginBottom: '4px' }}>
          cORR, confirmed objective response rate; HR, hormone receptor; IHC, immunohistochemistry; ISH, in situ hybridization.
        </div>
        <div style={{ fontWeight: '500' }}>
          Modi S, et al. Presented at ASCO 2022. Abstract LBA3.
        </div>
      </div>
    </div>
  );
}
