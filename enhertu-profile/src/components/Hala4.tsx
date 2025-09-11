// Image assets from Figma MCP
const imgVector = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";
const imgIconContainer = "/assets/9f064e7469cf4c412994cd586bf5f892223a6a46.svg";

interface Hala4Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

function Group7() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100%'
    }}>
      <div 
        style={{ 
          position: 'absolute',
          left: '1.03%',
          right: '7.47%',
          top: '0px',
          bottom: '0px',
          zIndex: 1
        }}
      >
        <img 
          src={imgVector} 
          alt="Vector" 
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain'
          }} 
        />
      </div>
      <div 
        style={{ 
          position: 'absolute',
          left: '0px',
          right: '30.68%',
          top: '7.02%',
          bottom: '7.92%',
          zIndex: 2
        }}
      >
        <img 
          src={imgGroup} 
          alt="Group" 
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain'
          }} 
        />
      </div>
    </div>
  );
}

export default function Hala4({ onContinueClick, onBackClick, onHomeClick }: Hala4Props) {
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
          left: '77px',
          top: '166px',
          width: '656px',
          height: '80px',
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#5b6670',
          fontFamily: 'Inter, sans-serif',
          zIndex: 3
        }}
      >
        Interactive Question
      </div>

      {/* Icon Container */}
      <div 
        data-enter
        data-enter-delay="0.2"
        style={{ 
          position: 'absolute',
          left: '74px',
          top: '362px',
          width: '927px',
          height: '176px',
          zIndex: 1
        }}
      >
        <img 
          src={imgIconContainer} 
          alt="Icon container" 
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain'
          }} 
        />
      </div>

      {/* Icon */}
      <div 
        data-enter
        data-enter-delay="0.3"
        style={{ 
          position: 'absolute',
          left: '74px',
          top: '361px',
          width: '123px',
          height: '112px',
          zIndex: 4
        }}
      >
        <Group7 />
      </div>

      {/* Question */}
      <div 
        data-enter
        data-enter-delay="0.4"
        style={{ 
          position: 'absolute',
          left: '244px',
          top: '395px',
          width: '691px',
          height: '123px',
          fontSize: '38px',
          fontWeight: 'bold',
          color: '#250858',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.4',
          zIndex: 3
        }}
      >
        What would be your choice for her treatment at this stage?
      </div>

      {/* Option 1 */}
      <div 
        data-enter
        data-enter-delay="0.5"
        style={{ 
          position: 'absolute',
          left: '222px',
          top: '653px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 6
        }}
        onClick={onContinueClick}
      >
        <div 
          style={{ 
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '38px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            lineHeight: '54px',
            whiteSpace: 'nowrap'
          }}
        >
          Taxan
        </div>
      </div>

      {/* Option 2 */}
      <div 
        data-enter
        data-enter-delay="0.6"
        style={{ 
          position: 'absolute',
          left: '222px',
          top: '845px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 6
        }}
        onClick={onContinueClick}
      >
        <div 
          style={{ 
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '38px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            lineHeight: '54px',
            whiteSpace: 'nowrap'
          }}
        >
          Taxan + pembrolizumab
        </div>
      </div>

      {/* Option 3 */}
      <div 
        data-enter
        data-enter-delay="0.7"
        style={{ 
          position: 'absolute',
          left: '222px',
          top: '1037px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 6
        }}
        onClick={onContinueClick}
      >
        <div 
          style={{ 
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '38px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            lineHeight: '54px',
            whiteSpace: 'nowrap'
          }}
        >
          T-Dxd
        </div>
      </div>
    </div>
  );
}
