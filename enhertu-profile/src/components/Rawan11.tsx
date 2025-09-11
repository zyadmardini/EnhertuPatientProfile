// Image assets from Figma MCP
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgMed3 = "/assets/323c7b24a789223b9d1907024ee20728a73e33bd.svg";
const imgMed2 = "/assets/1123db8fcaf354d1bc847bc1912725d64c0d2f51.svg";
const imgMed1 = "/assets/31abb945d423f9279a46a5d66ad5736526a6c1cb.svg";

interface Rawan11Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan11({ onBackClick, onHomeClick, onContinueClick }: Rawan11Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px',
      backgroundColor: '#ffffff'
    }} data-name="Rawan11" data-node-id="52:1693">
      
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
        data-node-id="52:1699" 
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
        data-node-id="52:1694" 
      />

      {/* Main title */}
      <div 
        style={{ 
          position: 'absolute',
          top: '171px',
          left: '75px',
          width: '929px',
          height: '182px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '41px',
          color: '#250858',
          lineHeight: 'normal',
          zIndex: 6
        }} 
        data-node-id="52:1737"
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>ESMO/MASCC Guidelines categorize ENHERTU as moderately emetogenic and recommend a three-drug antiemetic regimen1</p>
      </div>

      {/* Guidelines text */}
      <div 
        style={{ 
          position: 'absolute',
          top: '353px',
          left: '72px',
          width: '935px',
          height: '56px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }} 
        data-node-id="52:1792"
      >
        <ul style={{ margin: 0, paddingLeft: '37.5px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '0', lineHeight: '28px' }}>
            <span>The SmPC indicates ENHERTU as emetogenic, which includes delayed nausea and/or vomiting2</span>
          </li>
          <li style={{ lineHeight: '28px' }}>
            <span>Prophylactic antiemetics are recommended by guidelines and prescribing information1–3</span>
          </li>
        </ul>
      </div>

      {/* Guidelines subtitle */}
      <div 
        style={{ 
          position: 'absolute',
          top: '538px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '656px',
          height: '56px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '800',
          fontSize: '25px',
          color: '#000000',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          lineHeight: '28px',
          zIndex: 6
        }} 
        data-node-id="52:1795"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>
          ESMO and MASCC Guidelines for the prevention
          <br />
          ENHERTU‑related nausea and vomiting recommend:1
        </p>
      </div>

      {/* Treatment boxes */}
      {/* Box 1 - 5-HT3 receptor antagonists */}
      <div 
        style={{ 
          position: 'absolute',
          top: '642px',
          left: '75px',
          width: '934px',
          height: '268px',
          backgroundColor: '#ee7623',
          zIndex: 1
        }} 
        data-node-id="52:1781"
      >
        <div 
          style={{ 
            position: 'absolute',
            top: '122px',
            left: '314px',
            width: '688px',
            height: '49px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '41px',
            color: '#ffffff',
            lineHeight: 'normal',
            zIndex: 6
          }} 
          data-node-id="52:1785"
        >
          <p style={{ margin: 0, lineHeight: 'normal' }}>5-HT3 receptor antagonists</p>
        </div>
        <div 
          style={{ 
            position: 'absolute',
            top: '50px',
            left: '50px',
            width: '80px',
            height: '80px',
            zIndex: 4
          }} 
          data-name="MED3" 
          data-node-id="140:862"
        >
          <img 
            alt="" 
            style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
            src={imgMed3} 
          />
        </div>
      </div>

      {/* Box 2 - Corticosteroids */}
      <div 
        style={{ 
          position: 'absolute',
          top: '960px',
          left: '75px',
          width: '934px',
          height: '268px',
          backgroundColor: '#250858',
          zIndex: 1
        }} 
        data-node-id="52:1783"
      >
        <div 
          style={{ 
            position: 'absolute',
            top: '109px',
            left: '314px',
            width: '688px',
            height: '49px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '41px',
            color: '#ffffff',
            lineHeight: 'normal',
            zIndex: 6
          }} 
          data-node-id="52:1788"
        >
          <p style={{ margin: 0, lineHeight: 'normal' }}>Corticosteroids</p>
        </div>
        <div 
          style={{ 
            position: 'absolute',
            top: '50px',
            left: '50px',
            width: '80px',
            height: '80px',
            zIndex: 4
          }} 
          data-name="Med2" 
          data-node-id="140:864"
        >
          <img 
            alt="" 
            style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
            src={imgMed2} 
          />
        </div>
      </div>

      {/* Box 3 - NK-1 receptor antagonists */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1278px',
          left: '75px',
          width: '934px',
          height: '268px',
          backgroundColor: '#c0d72f',
          zIndex: 1
        }} 
        data-node-id="52:1784"
      >
        <div 
          style={{ 
            position: 'absolute',
            top: '96px',
          left: '314px',
          width: '688px',
          height: '49px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '41px',
          color: '#ffffff',
          lineHeight: 'normal',
          zIndex: 6
          }} 
          data-node-id="52:1789"
        >
          <p style={{ margin: 0, lineHeight: 'normal' }}>NK-1 receptor antagonists</p>
        </div>
        <div 
          style={{ 
            position: 'absolute',
            top: '50px',
            left: '50px',
            width: '80px',
            height: '80px',
            zIndex: 4
          }} 
          data-name="Med1" 
          data-node-id="140:863"
        >
          <img 
            alt="" 
            style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
            src={imgMed1} 
          />
        </div>
      </div>

      {/* Continue Button */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1615px',
          left: '191px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 100
        }} 
        data-name="Button Treatment" 
        data-node-id="52:1701"
        onClick={onContinueClick}
      >
        <div 
          style={{ 
            position: 'absolute',
            bottom: '0',
            left: '0.29%',
            right: '0',
            top: '0.89%',
            zIndex: 1
          }} 
          data-name="Button container"
        >
          <img 
            alt="" 
            style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
            src={img} 
          />
        </div>
        <div 
          style={{ 
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '82.4%',
            top: '0',
            zIndex: 2
          }} 
          data-name="Icon container"
        >
          <img 
            alt="" 
            style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
            src={img1} 
          />
        </div>
        <div 
          style={{ 
            position: 'absolute',
            top: '28.57%',
            left: '17.6%',
            right: '4.15%',
            bottom: '28.57%',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '31px',
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: '54px',
            zIndex: 3
          }}
        >
          <p style={{ margin: 0, lineHeight: '54px' }}>How the patient is feeling now</p>
        </div>
      </div>

      {/* Footer text */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1808px',
          left: '105px',
          width: '953px',
          height: '75px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '12px',
          color: '#000000',
          lineHeight: '15px',
          zIndex: 6
        }} 
        data-node-id="52:1700"
      >
        <p style={{ margin: 0, lineHeight: '15px' }}>
          5‑HT3, 5-hydroxytryptamine 3; ESMO, European Society for Medical Oncology; MASCC, Multinational Association Of Supportive Care In Cancer; NK-1, neurokinin 1; SmPC, Summary of Product Characteristics.
        </p>
        <p style={{ margin: 0, lineHeight: '15px' }}>
          1. Scotté F, et al. Support Care Cancer. 2023;32(1):45; 2. EMA. Enhertu® SmPC. Available at: https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf. Accessed January 2024; 3. ENHERTU PI. Available at: https://daiichisankyo.us/prescribing-information-portlet/getPIContent?productName=Enhertu&inline=true. Accessed January 2024.
        </p>
      </div>
    </div>
  );
}