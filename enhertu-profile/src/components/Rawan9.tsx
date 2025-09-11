import React from 'react';

// Image assets from Figma MCP
const imgGraph081 = "/assets/5308bf9c3842d232b4da499991dbb79696081ea0.png";
const imgImage6 = "/assets/cb9219dae840f64aebf4d517dded02642e02acc5.png";
const imgVector = "/assets/fd146c4fe67459a60e7417374eecc063a3b335e8.svg";
const imgNextButton = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgNextButtonGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";

interface Rawan9Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan9({ onBackClick, onHomeClick, onContinueClick }: Rawan9Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px',
      backgroundColor: '#ffffff'
    }} data-name="Rawan9" data-node-id="52:1558">
      
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
        data-node-id="52:1562" 
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
        data-node-id="52:1559" 
      />

      {/* Main title */}
      <div 
        style={{ 
          position: 'absolute',
          top: '104px',
          left: '222px',
          width: '782px',
          height: '182px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '41px',
          color: '#250858',
          lineHeight: 'normal',
          zIndex: 6
        }} 
        data-node-id="52:1560"
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>
          <span>ENHERTU </span>
          <span style={{ color: '#ee7623' }}>tripled cORR</span>
          <span> vs. chemotherapy</span>
        </p>
      </div>

      {/* Vector icon */}
      <div 
        style={{ 
          position: 'absolute',
          top: '27px',
          left: '61px',
          width: '0px',
          height: '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3
        }}
      >
        <div style={{ transform: 'rotate(90deg)' }}>
          <div 
            style={{ 
              width: '346px',
              height: '138px',
              position: 'relative'
            }} 
            data-name="Vector" 
            data-node-id="52:1563"
          >
            <img 
              alt="" 
              style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} 
              src={imgVector} 
            />
          </div>
        </div>
      </div>

      {/* HR+ label */}
      <div 
        style={{ 
          position: 'absolute',
          top: '74px',
          left: '96px',
          width: '97px',
          height: '59px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '38px',
          color: '#ffffff',
          lineHeight: 'normal',
          zIndex: 6
        }} 
        data-node-id="52:1564"
      >
        <p style={{ margin: 0, lineHeight: 'normal' }}>HR+</p>
      </div>

      {/* Graph title */}
      <div 
        style={{ 
          position: 'absolute',
          top: '404px',
          left: '72px',
          width: '935px',
          height: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '25px',
          color: '#5d6771',
          lineHeight: '28px',
          zIndex: 6
        }} 
        data-node-id="52:1586"
      >
        <p style={{ margin: 0, lineHeight: '28px' }}>Most common drug-related TEAEs (in ≥20% of patients) in the safety analysis set</p>
      </div>

      {/* Main graph */}
      <div 
        style={{ 
          position: 'absolute',
          top: '532px',
          left: '75px',
          width: '934px',
          height: '428px',
          backgroundImage: `url('${imgGraph081}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }} 
        data-name="Graph-08 1" 
        data-node-id="52:1581"
      />

      {/* Image 6 */}
      <div 
        style={{ 
          position: 'absolute',
          top: '991px',
          left: '75px',
          width: '498px',
          height: '156px',
          backgroundImage: `url('${imgImage6}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 4
        }} 
        data-name="image 6" 
        data-node-id="52:1589"
      />

      {/* Warning box */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1207px',
          left: '75px',
          width: '934px',
          height: '116px',
          backgroundColor: '#f3f7d9',
          border: '4px solid #c5d752',
          zIndex: 1
        }} 
        data-node-id="52:1595"
      >
        <div 
          style={{ 
            position: 'absolute',
            top: '26px',
            left: '9px',
            width: '916px',
            height: '110px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '500',
            fontSize: '24px',
            color: '#5d6771',
            lineHeight: '28px',
            zIndex: 6
          }} 
          data-node-id="52:1591"
        >
          <p style={{ margin: 0, lineHeight: '28px' }}>
            Nausea, vomiting, fatigue and alopecia were the most common ENHERTU-related AEs observed in DESTINY-Breast04
          </p>
        </div>
      </div>

      {/* Footer text */}
      <div 
        style={{ 
          position: 'absolute',
          top: '1740px',
          left: '74px',
          width: '927px',
          height: '151px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '11px',
          color: '#000000',
          lineHeight: '15px',
          zIndex: 6
        }} 
        data-node-id="52:1565"
      >
        <p style={{ margin: 0, lineHeight: '15px' }}>
          Adapted from Modi 2023.
        </p>
        <p style={{ margin: 0, lineHeight: '15px' }}>
          Shown are AEs that emerged or worsened after initiation of a trial drug until 47 days after the last dose of the trial drug and that were adjudicated as being related to a trial drug by an independent committee. Median treatment duration was 8.2 months (range, 0.2–39.1 months) for T-DXd and 3.5 months (range, 0.3-19.7 months) for TPC. 16.4% of patients underwent treatment for ≥18 months in the T-DXd arm compared with 1.2% of patients in the TPC arm.
        </p>
        <p style={{ margin: 0, lineHeight: '15px' }}>
          *This category includes the preferred terms fatigue, asthenia, and malaise; †This category includes the preferred terms aspartate aminotransferase increased, alanine aminotransferase increased, gamma-glutamyltransferase increased, and hepatic function abnormal; ‡This category includes the preferred terms neutrophil count decreased and neutropenia; §This category includes the preferred terms haemoglobin decreased, red-cell count decreased, anaemia, and haematocrit decreased; ¶This category includes the preferred terms platelet count decreased and thrombocytopenia; IIThis category includes the preferred terms white-cell count decreased and leukopenia.
        </p>
        <p style={{ margin: 0, lineHeight: '15px' }}>
          2L, second line; ET, endocrine therapy; HER2, human epidermal growth factor receptor 2; mBC, metastatic breast cancer; TEAE, treatment-emergent adverse event.
        </p>
        <p style={{ margin: 0, lineHeight: '15px' }}>
          Modi S, et al. Presented at ESMO Annual Meeting 2023, 20–24 October. Madrid, Spain. Abstract 376O.
        </p>
      </div>

      {/* Next Button - Icon */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          left: '467px',
          top: '1574px',
          width: '123px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 100,
          transition: 'all 0.3s ease'
        }}
        onClick={onContinueClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0px) scale(1)';
        }}
      >
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '100%'
        }}>
          <div style={{ 
            position: 'absolute',
            bottom: '0px',
            left: '1.03%',
            right: '7.47%',
            top: '0px',
            zIndex: 1
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgNextButton} />
          </div>
          <div style={{ 
            position: 'absolute',
            bottom: '7.92%',
            left: '0px',
            right: '30.68%',
            top: '7.02%',
            zIndex: 2
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgNextButtonGroup} />
          </div>
        </div>
      </div>
    </div>
  );
}