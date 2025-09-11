// Image assets from Figma MCP
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Layla10Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla10({ onContinueClick, onBackClick, onHomeClick }: Layla10Props) {
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
          top: '166px',
          width: '929px',
          height: '182px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '50px',
          color: '#250858',
          lineHeight: 'normal',
          zIndex: 6
        }}
      >
        <span>Nausea and vomiting </span>
        <span style={{ color: '#ec7624' }}>should be managed</span>
        <span> with antiemetic agents</span>
      </div>

      {/* Trial recommendation text */}
      <div 
        data-enter
        data-enter-order="2"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '348px',
          width: '936px',
          height: '162px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'medium',
          fontSize: '31px',
          color: '#5b6670',
          lineHeight: '54px',
          zIndex: 6
        }}
      >
        In the DESTINY-Breast03 trial, use of prophylactic antiemetic agents was recommended prior to infusion of ENHERTU and on subsequent days<sup>1</sup>
      </div>

      {/* ESMO/MASCC guidelines section */}
      <div 
        data-enter
        data-enter-order="3"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '567px',
          width: '936px',
          height: '462px',
          zIndex: 1
        }}
      >
        {/* Header background */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '936px',
          height: '116px',
          backgroundColor: '#f9b06e',
          zIndex: 2
        }} />

        {/* Header text */}
        <div style={{ 
          position: 'absolute',
          left: '149px', // 222 - 73
          top: '27px', // 594 - 567
          width: '635px',
          height: '62px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '51px',
          color: 'white',
          textAlign: 'center',
          lineHeight: 'normal',
          whiteSpace: 'nowrap',
          zIndex: 3
        }}>
          ESMO/MASCC guidelines
        </div>

        {/* Border */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '936px',
          height: '462px',
          border: '2px solid #d9d9d9',
          pointerEvents: 'none',
          zIndex: 4
        }} />
      </div>

      {/* ESMO/MASCC content */}
      <div 
        data-enter
        data-enter-order="4"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '725px',
          width: '935px',
          height: '280px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '27px',
          color: 'black',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>
          ESMO/MASCC guidelines categorize ENHERTU as being at the high-end of the moderately emetogenic category, most closely resembling the emetogenicity of carboplatin<sup>2</sup>
        </p>
        <p style={{ margin: 0 }}>&nbsp;</p>
        <p style={{ margin: 0 }}>
          A three-drug regimen including single doses of a 5-HT3 RA, dexamethasone, and an NK-1 RA is recommended for patients receiving carboplatin* AUC≥5<sup>2</sup>
        </p>
      </div>

      {/* Other clinical practice guidelines section */}
      <div 
        data-enter
        data-enter-order="5"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1046px',
          width: '936px',
          height: '389px',
          zIndex: 1
        }}
      >
        {/* Header background */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '936px',
          height: '116px',
          backgroundColor: '#f9b06e',
          zIndex: 2
        }} />

        {/* Header text */}
        <div style={{ 
          position: 'absolute',
          left: '55px', // 128 - 73
          top: '27px', // 1073 - 1046
          width: '822px',
          height: '62px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '51px',
          color: 'white',
          textAlign: 'center',
          lineHeight: 'normal',
          whiteSpace: 'nowrap',
          zIndex: 3
        }}>
          Other clinical practice guidelines
        </div>

        {/* Border */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '936px',
          height: '389px',
          border: '2px solid #d9d9d9',
          pointerEvents: 'none',
          zIndex: 4
        }} />
      </div>

      {/* SmPC content */}
      <div 
        data-enter
        data-enter-order="6"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1204px',
          width: '935px',
          height: '200px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '27px',
          color: 'black',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>
          The ENHERTU SmPC recommends that prior to each dose of ENHERTU, patients should be premedicated with a combination regimen of{' '}
          <span style={{ fontWeight: 'bold' }}>two or three medicinal products</span>{' '}
          (e.g. dexamethasone with either a 5-HT3 RA and/or an NK-1 RA, as well as other medicinal products as indicated) for prevention of chemotherapy-induced nausea and vomiting<sup>3</sup>
        </p>
      </div>

      {/* NCCN content */}
      <div 
        data-enter
        data-enter-order="7"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1472px',
          width: '935px',
          height: '80px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '27px',
          color: 'black',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>
          NCCN Guidelines® for antiemesis recommendations may be found at NCCN.org
        </p>
      </div>

      {/* Bottom border section */}
      <div 
        data-enter
        data-enter-order="8"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1582px',
          width: '936px',
          height: '147px',
          zIndex: 1
        }}
      >
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '936px',
          height: '147px',
          border: '2px solid #d9d9d9',
          pointerEvents: 'none',
          zIndex: 4
        }} />
      </div>

      {/* Continue button */}
      <div 
        data-enter
        data-enter-order="9"
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
          Adverse Events management
        </div>
      </div>

      {/* Footer text */}
      <div 
        data-enter
        data-enter-order="10"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '1794px',
          width: '927px',
          height: '105px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'medium',
          fontSize: '12px',
          color: 'black',
          lineHeight: '15px',
          zIndex: 6
        }}
      >
        <p style={{ margin: 0 }}>
          *The emetic potential of ENHERTU appears to be at the high-end of the moderate emetogenic category, most closely resembling that of carboplatin. While prospective studies are needed, it is suggested to prevent emesis as for carboplatin AUC&gt;5.<sup>2</sup>
        </p>
        <p style={{ margin: 0 }}>
          AUC, area under the curve; ESMO, European Society for Medical Oncology; MASCC, Multinational Association of Supportive Care in Cancer; NCCN, National Comprehensive Cancer Network; NK-1, neurokinin-1; RA, receptor antagonist; SmPC, Summary of Product Characteristics.
        </p>
        <p style={{ margin: 0 }}>
          1. Hurvitz SA, et al. Lancet. 2023;401:105–117; 2 Herrstedt J, et al. Ann Oncol. 2024:Article in press:102195. https://doi.org/10.1016/j.esmoop.2023.102195; 3. ENHERTU EU Summary of Product Characteristics 2023. Available at: https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf. Accessed January 2024.
        </p>
      </div>
    </div>
  );
}
