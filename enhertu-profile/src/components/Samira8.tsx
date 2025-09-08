// Image assets from Figma MCP
const imgButton = "http://localhost:3845/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgButtonIcon = "http://localhost:3845/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Samira8Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onPatientProgressClick: () => void;
}

export default function Samira8({ onBackClick, onHomeClick, onPatientProgressClick }: Samira8Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: 'white'
    }}>
      {/* Header background */}
      <div style={{ 
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '756px',
        height: '27px',
        background: 'linear-gradient(to right, #ec7624, #ffb061)',
        zIndex: 2
      }} />

      {/* Title */}
      <div 
        data-enter
        data-enter-order="1"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 465px)',
          top: '166px',
          width: '929px',
          height: '182px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '50px',
          color: '#250858',
          lineHeight: 'normal',
          zIndex: 3
        }}>
        <p style={{ margin: 0 }}>
          Nausea and vomiting <span style={{ color: '#ec7624' }}>should be managed</span> with antiemetic agents
          <br />
          <br />
        </p>
      </div>

      {/* Trial info text */}
      <div 
        data-enter
        data-enter-order="2"
        style={{ 
          position: 'absolute',
          left: '73px',
          top: '348px',
          width: '936px',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          fontSize: '31px',
          color: '#5b6670',
          lineHeight: '54px',
          zIndex: 6
        }}>
        <p style={{ margin: 0 }}>In the DESTINY-Breast03 trial, use of prophylactic antiemetic agents was recommended prior to infusion of ENHERTU and on subsequent days1</p>
      </div>

      {/* ESMO/MASCC guidelines section */}
      <div
        data-enter-group
        data-enter-order="3"
        style={{
          position: 'absolute',
          left: '73px',
          top: '567px',
          width: '936px',
          height: '462px',
          border: '2px solid #d9d9d9',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {/* ESMO/MASCC background */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '936px',
          height: '116px',
          backgroundColor: '#f9b06e',
          zIndex: 2
        }} />

        {/* ESMO/MASCC title */}
        <div style={{
          position: 'absolute',
          left: '176px',
          top: '27px',
          width: 'auto',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '51px',
          color: 'white',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ fontWeight: '700', textWrap: 'nowrap', paddingRight: '1px', margin: '0 auto' }}>
            <p style={{ margin: 0 }}>ESMO/MASCC guidelines</p>
          </div>
        </div>

        {/* ESMO/MASCC content */}
        <div style={{
          position: 'absolute',
          left: 'calc(50% - 467.5px)',
          top: '158px',
          width: '935px',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'normal',
          fontSize: '27px',
          color: 'black',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 6,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <p style={{ margin: 0 }}>ESMO/MASCC guidelines categorize ENHERTU as being at the high-end of the moderately emetogenic category, most closely resembling the emetogenicity of carboplatin2</p>
          <p style={{ margin: 0 }}>&nbsp;</p>
          <p style={{ margin: 0 }}>
            A <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>three-drug regimen</span> including single doses of a 5-HT3 RA, dexamethasone, and an NK-1 RA is recommended for patients receiving carboplatin* AUC≥52
          </p>
        </div>
      </div>

      {/* Other clinical practice guidelines section */}
      <div
        data-enter-group
        data-enter-order="4"
        style={{
          position: 'absolute',
          left: '73px',
          top: '1046px',
          width: '936px',
          height: '389px',
          border: '2px solid #d9d9d9',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {/* Other guidelines background */}
        <div style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '936px',
          height: '116px',
          backgroundColor: '#f9b06e',
          zIndex: 2
        }} />

        {/* Other guidelines title */}
        <div style={{
          position: 'absolute',
          left: '61px',
          top: '27px',
          width: 'auto',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '51px',
          color: 'white',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '0 auto'
        }}>
          <div style={{ fontWeight: '700', textWrap: 'nowrap', margin: '0 auto' }}>
            <p style={{ margin: 0 }}>Other clinical practice guidelines</p>
          </div>
        </div>

        {/* Other guidelines content */}
        <div style={{ 
          position: 'absolute',
          left: 'calc(50% - 467.5px)',
          top: '158px',
          width: '935px',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'normal',
          fontSize: '27px',
          color: 'black',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 6
        }}>
          <p style={{ margin: 0 }}>
            The ENHERTU SmPC recommends that prior to each dose of ENHERTU, patients should be premedicated with a combination regimen of <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>two or three medicinal products</span> (e.g. dexamethasone with either a 5-HT3 RA and/or an NK-1 RA, as well as other medicinal products as indicated) for prevention of chemotherapy-induced nausea and vomiting3
          </p>
        </div>
      </div>

      {/* NCCN Guidelines section */}
      <div style={{ 
        position: 'absolute',
        left: '73px',
        top: '1435px',
        width: '936px',
        height: '147px',
        border: '2px solid #d9d9d9',
        zIndex: 1
      }}>
        {/* NCCN content */}
        <div style={{ 
          position: 'absolute',
          left: 'calc(50% - 467.5px)',
          top: '53px',
          width: '935px',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'normal',
          fontSize: '27px',
          color: 'black',
          textAlign: 'center',
          lineHeight: '40px',
          zIndex: 6
        }}>
          <p style={{ margin: 0 }}>NCCN Guidelines® for antiemesis recommendations may be found at NCCN.org</p>
        </div>
      </div>

      {/* Footer text */}
      <div style={{ 
        position: 'absolute',
        left: '73px',
        top: '1794px',
        width: '927px',
        height: '105px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
        fontSize: '12px',
        color: 'black',
        lineHeight: '15px',
        zIndex: 6
      }}>
        <p style={{ margin: 0 }}>*The emetic potential of ENHERTU appears to be at the high-end of the moderate emetogenic category, most closely resembling that of carboplatin. While prospective studies are needed, it is suggested to prevent emesis as for carboplatin AUC&gt;5.2</p>
        <p style={{ margin: 0 }}>AUC, area under the curve; ESMO, European Society for Medical Oncology; MASCC, Multinational Association of Supportive Care in Cancer; NCCN, National Comprehensive Cancer Network; NK-1, neurokinin-1; RA, receptor antagonist; SmPC, Summary of Product Characteristics.</p>
        <p style={{ margin: 0 }}>1. Hurvitz SA, et al. Lancet. 2023;401:105-117; 2 Herrstedt J, et al. Ann Oncol. 2024:Article in press:102195. https://doi.org/10.1016/j.esmoop.2023.102195; 3. ENHERTU EU Summary of Product Characteristics 2023. Available at: https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf. Accessed January 2024.</p>
      </div>

      {/* Patient Progress Button */}
      <div 
        data-enter
        data-enter-order="5"
        style={{ 
          position: 'absolute',
          left: 'calc(50% - 349.5px)',
          top: '1615px',
          width: '699px',
          height: '112px',
          cursor: 'pointer',
          zIndex: 6
        }}
        onClick={onPatientProgressClick}
      >
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '2.03px',
          right: '0px',
          top: '1px',
          zIndex: 1
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgButton} />
        </div>
        <div style={{ 
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          right: '576.4px',
          top: '0px',
          zIndex: 2
        }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgButtonIcon} />
        </div>
        <div style={{ 
          position: 'absolute',
          top: '32px',
          left: '123.2px',
          right: '29px',
          bottom: '32px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: '31px',
          color: 'white',
          textAlign: 'center',
          lineHeight: '54px',
          zIndex: 3
        }}>
          <p style={{ margin: 0 }}>Patient Progress</p>
        </div>
      </div>

      {/* Back Button - Top Left */}
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

      {/* Home Button - Top Right */}
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
    </div>
  );
}
