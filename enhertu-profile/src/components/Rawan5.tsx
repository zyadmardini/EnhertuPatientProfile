
// Image assets from Figma MCP
const imgVector = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";
const imgIconContainer = "/assets/9f064e7469cf4c412994cd586bf5f892223a6a46.svg";

function Group7() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }} data-node-id="1:3445">
      <div style={{ position: 'absolute', bottom: '0', left: '1.03%', right: '7.47%', top: '0' }} data-name="Vector" data-node-id="1:3446">
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
      </div>
      <div style={{ position: 'absolute', bottom: '7.92%', left: '0', right: '30.68%', top: '7.02%' }} data-name="Group" data-node-id="1:3447">
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgGroup} />
      </div>
    </div>
  );
}

interface Rawan5Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan5({ onBackClick, onHomeClick, onContinueClick }: Rawan5Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px',
      backgroundColor: '#ffffff'
    }} data-name="Rawan5" data-node-id="1:869">
      
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
        data-node-id="1:877" 
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
        data-name="Background" 
        data-node-id="1:870" 
      />

      {/* Title */}
      <div 
        style={{ 
          position: 'absolute',
          top: '166px',
          left: '77px',
          width: '656px',
          height: '80px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '50px',
          color: '#5b6670',
          lineHeight: 'normal',
          zIndex: 6
        }} 
        data-node-id="1:871"
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>Interactive Question</p>
      </div>

      {/* Icon Container */}
      <div 
        style={{ 
          position: 'absolute',
          top: '362px',
          left: '74px',
          width: '927px',
          height: '176px',
          zIndex: 4
        }} 
        data-name="Icon Container" 
        data-node-id="1:872"
      >
        <img 
          alt="" 
          style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
          src={imgIconContainer} 
        />
      </div>

      {/* Icon */}
      <div 
        style={{ 
          position: 'absolute',
          top: '361px',
          left: '74px',
          width: '123px',
          height: '112px',
          zIndex: 5
        }} 
        data-name="Icon" 
        data-node-id="1:875"
      >
        <Group7 />
      </div>

      {/* Question */}
      <div 
        style={{ 
          position: 'absolute',
          top: '395px',
          left: '244px',
          width: '691px',
          height: '123px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '38px',
          color: '#250858',
          lineHeight: '54px',
          zIndex: 6
        }} 
        data-node-id="1:876"
      >
        <p style={{ margin: 0, lineHeight: '54px' }}>What would be your choice for her treatment at this stage?</p>
      </div>

      {/* Option 1 - Paclitaxel */}
      <div 
        style={{ 
          position: 'absolute',
          top: '653px',
          left: '222px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 6
        }} 
        data-name="Container" 
        data-node-id="1:878"
        onClick={onContinueClick}
      >
        <div 
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '38px',
            color: '#ffffff',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            lineHeight: '54px',
            zIndex: 7
          }} 
          data-node-id="1:879"
        >
          <p style={{ margin: 0, lineHeight: '54px' }}>Paclitaxel</p>
        </div>
      </div>

      {/* Option 2 - CDK4/6 + AI */}
      <div 
        style={{ 
          position: 'absolute',
          top: '845px',
          left: '222px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 6
        }} 
        data-name="Container" 
        data-node-id="1:880"
        onClick={onContinueClick}
      >
        <div 
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '38px',
            color: '#ffffff',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            lineHeight: '54px',
            zIndex: 7
          }} 
          data-node-id="1:881"
        >
          <p style={{ margin: 0, lineHeight: '54px' }}>CDK4/6 + AI</p>
        </div>
      </div>

      {/* Option 3 - T-Dxd */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1037px',
          left: '222px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 6
        }} 
        data-name="Container" 
        data-node-id="1:882"
        onClick={onContinueClick}
      >
        <div 
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '38px',
            color: '#ffffff',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            lineHeight: '54px',
            zIndex: 7
          }} 
          data-node-id="1:883"
        >
          <p style={{ margin: 0, lineHeight: '54px' }}>T-Dxd</p>
        </div>
      </div>

      {/* Option 4 - T-Dxd (duplicate) */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1229px',
          left: '222px',
          width: '636px',
          height: '130px',
          backgroundColor: '#9f9f9f',
          cursor: 'pointer',
          zIndex: 6
        }} 
        data-name="Container" 
        data-node-id="1:884"
        onClick={onContinueClick}
      >
        <div 
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '38px',
            color: '#ffffff',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            lineHeight: '54px',
            zIndex: 7
          }} 
          data-node-id="1:885"
        >
          <p style={{ margin: 0, lineHeight: '54px' }}>T-Dxd</p>
        </div>
      </div>
    </div>
  );
}