// Image assets from Figma MCP
// Updated interface to include onEndClick
const imgVector = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";
const imgVector1 = "/assets/0492412761c8509e31e902d4f01c535a5b33ea9d.svg";
const imgVector2 = "/assets/955575a9c724c363258e4b21ead3b46a80bfb6e6.svg";

interface Samira11Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onEndClick: () => void;
}

export default function Samira11({
  onBackClick,
  onHomeClick,
  onEndClick,
}: Samira11Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="t1i8iq-"
    >
      {/* Header background */}
      <div
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "756px",
          height: "27px",
          background: "linear-gradient(to right, #ec7624, #ffb061)",
          zIndex: 2,
        }}
        data-oid="zxyo-0n"
      />

      {/* Title */}
      <div
        data-enter
        data-enter-order="1"
        style={{
          position: "absolute",
          left: "calc(50% - 468px)",
          top: "167px",
          width: "656px",
          height: "80px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "50px",
          color: "#5b6670",
          lineHeight: "normal",
          zIndex: 3,
        }}
        data-oid=":ni844j"
      >
        <p style={{ margin: 0 }} data-oid="puidvri">
          Case Study: Samira
        </p>
      </div>

      {/* Content container */}
      <div
        data-enter-group
        data-enter-order="2"
        style={{
          position: "absolute",
          left: "72px",
          top: "276px",
          width: "937px",
          height: "598px",
          zIndex: 1,
        }}
        data-oid="wf615og"
      >
        {/* Treatment background */}
        <div
          data-enter-swipe
          style={{
            position: "absolute",
            left: "174px",
            top: "0px",
            width: "762px",
            height: "169px",
            backgroundColor: "#7ccada",
            zIndex: 2,
          }}
          data-oid="lsoz246"
        />

        {/* Treatment title */}
        <div
          style={{
            position: "absolute",
            left: "411px",
            top: "25px",
            width: "auto",
            height: "auto",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "51px",
            color: "white",
            lineHeight: "normal",
            zIndex: 3,
          }}
          data-oid="104_q8c"
        >
          <p style={{ margin: 0 }} data-oid=":66yova">
            Patient response to
          </p>
          <p style={{ margin: 0 }} data-oid="ljd2xhw">
            ENHERTU
          </p>
        </div>

        {/* Vector image */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "366px",
            height: "366px",
            zIndex: 4,
          }}
          data-oid="zw-ssno"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgVector1}
            data-oid="5v52.nm"
          />
        </div>

        {/* Vector2 image overlay */}
        <div
          style={{
            position: "absolute",
            left: "87px",
            top: "75px",
            width: "203px",
            height: "226px",
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-oid=":_1x3s."
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgVector2}
            data-oid="ql5:6uf"
          />
        </div>

        {/* Treatment container */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "103px",
            width: "937px",
            height: "590px",
            backgroundColor: "#d5eff4",
            borderTopLeftRadius: "93px",
            zIndex: 1,
          }}
          data-oid="ljb2n8s"
        />

        {/* Treatment content - First paragraph */}
        <div
          style={{
            position: "absolute",
            left: "366px",
            top: "191px",
            width: "523px",
            height: "175px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "black",
            lineHeight: "54px",
            zIndex: 6,
          }}
          data-oid="9jpbro8"
        >
          <ul style={{ margin: 0, paddingLeft: "46.5px" }} data-oid="vb.:lpd">
            <li style={{ listStyleType: "disc" }} data-oid="m_tdoo-">
             Treatment with ENHERTU was resumed at a reduced dose of 4.4 mg/kg, as per local guidelines, upon full resolution of Grade 1 ILD/pneumonitis in September 2023
            </li>
            
          </ul>
        </div>

        {/* Treatment content - Second paragraph */}
<div
          style={{
            position: "absolute",
            left: "36px",
            top: "538px",
            width: "823px",
            height: "175px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "black",
            lineHeight: "54px",
            zIndex: 6,
          }}
          data-oid="9jpbro8"
        >
          <ul style={{ margin: 0, paddingLeft: "46.5px" }} data-oid="vb.:lpd">
            <li style={{ listStyleType: "disc" }} data-oid="m_tdoo-">
    As of January 2024, treatment with ENHERTU is ongoing with good tolerance            </li>
            
          </ul>
        </div>
      </div>

      {/* Continue to End Page Button - Icon */}
      <div
        data-enter
        data-enter-order="4"
        style={{
          position: "absolute",
          left: "467px",
          top: "1574px",
          width: "123px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
          transition: "all 0.3s ease",
        }}
        onClick={onEndClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px) scale(1)";
        }}
        data-oid="v3sb0r5"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
          data-oid="iz6_zwy"
        >
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              left: "1.03%",
              right: "7.47%",
              top: "0px",
              zIndex: 1,
            }}
            data-oid="p_sp6by"
          >
            <img
              alt=""
              style={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                height: "100%",
              }}
              src={imgVector}
              data-oid=":p3jfwg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "7.92%",
              left: "0px",
              right: "30.68%",
              top: "7.02%",
              zIndex: 2,
            }}
            data-oid="au_s-ik"
          >
            <img
              alt=""
              style={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                height: "100%",
              }}
              src={imgGroup}
              data-oid="00x3-z8"
            />
          </div>
        </div>
      </div>

      {/* Footer disclaimer */}
      <div
        data-enter
        data-enter-order="3"
        style={{
          position: "absolute",
          left: "73px",
          top: "1860px",
          width: "927px",
          height: "auto",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "12px",
          color: "black",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-oid="7bnoy_m"
      >
        <p style={{ margin: 0, whiteSpace: "pre-wrap" }} data-oid="jc3brbp">
          EMA. ENHERTU® SmPC. Available from:
          https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf.
          Accessed February 2024
        </p>
      </div>

      {/* Back Button - Top Left */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          width: "60px",
          height: "60px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#5b6670",
          zIndex: 100,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
        onClick={onBackClick}
        data-oid="1ioyg3v"
      >
        ←
      </div>

      {/* Home Button - Top Right */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          width: "60px",
          height: "60px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#5b6670",
          zIndex: 100,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
        onClick={onHomeClick}
        data-oid="whb0w_k"
      >
        ⌂
      </div>
    </div>
  );
}
