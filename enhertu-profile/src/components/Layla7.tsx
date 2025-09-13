// Image assets from Figma MCP
const imgVector = "/assets/aee53a0377d0b242aeb7d3a535bfb57a93635b99.svg";
const imgVector1 = "/assets/58fc69e0f845dee141152e47f94a632e071d27d6.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Layla7Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla7({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Layla7Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="uc_cvjf"
    >
      {/* Navigation Buttons */}
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
        data-oid="gg3k60_"
      >
        ←
      </div>

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
        data-oid="ux4-nkp"
      >
        ⌂
      </div>

      {/* Header background */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "756px",
          height: "27px",
          background: "linear-gradient(to right, #ec7624, #ffb061)",
          zIndex: 2,
        }}
        data-oid="od82f8f"
      />

      {/* Main title */}
      <div
        data-enter
        data-enter-order="1"
        style={{
          position: "absolute",
          left: "72px",
          top: "167px",
          width: "656px",
          height: "80px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "50px",
          color: "#5b6670",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-oid="c:xni:h"
      >
        Case Study: Layla
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
          height: "445px",
          zIndex: 1,
        }}
        data-oid=":0-ks3n"
      >
        {/* Treatment background */}
        <div
          data-enter-swipe
          style={{
            position: "absolute",
            left: "174px", // 246 - 72
            top: "0px", // 276 - 276
            width: "762px",
            height: "169px",
            backgroundColor: "#58378a",
            zIndex: 2,
          }}
          data-oid="x3y11kh"
        />

        {/* Treatment title */}
        <div
          data-enter
          data-enter-order="3"
          style={{
            position: "absolute",
            left: "411px", // 483 - 72
            top: "54px", // 330 - 276
            width: "321px",
            height: "62px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "51px",
            color: "white",
            lineHeight: "normal",
            whiteSpace: "nowrap",
            zIndex: 3,
          }}
          data-oid="1eur0vi"
        >
          2L treatment
        </div>

        {/* Patient image */}
        <div
          data-enter
          data-enter-order="4"
          style={{
            position: "absolute",
            left: "0px", // 72 - 72
            top: "0px", // 276 - 276
            width: "366px",
            height: "366px",
            zIndex: 4,
          }}
          data-oid="5.uf0ip"
        >
          <img
            src={imgVector}
            alt="Patient"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="gy2mpbo"
          />
        </div>

        {/* Treatment container */}
        <div
          data-enter
          data-enter-order="5"
          style={{
            position: "absolute",
            left: "0px", // 72 - 72
            top: "103px", // 379 - 276
            width: "937px",
            height: "342px",
            backgroundColor: "#dcd2ec",
            borderTopLeftRadius: "93px",
            zIndex: 1,
          }}
          data-oid="imj8bb5"
        />

        {/* Treatment text */}
        <div
          data-enter
          data-enter-order="6"
          style={{
            position: "absolute",
            left: "366px", // 438 - 72
            top: "191px", // 467 - 276
            width: "523px",
            height: "175px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "black",
            lineHeight: "45px",
            zIndex: 6,
          }}
          data-oid="bvlgp7j"
        >
          <ul
            style={{ listStyleType: "disc", marginLeft: "46.5px" }}
            data-oid="jit:_zf"
          >
            <li data-oid="y5:bty.">
              ENHERTU was prescribed to the patient over T-DM1 in the
              second-line setting due the superior PFS data seen in
              DESTINY-Breast03
            </li>
          </ul>
        </div>

        {/* Secondary image */}
        <div
          data-enter
          data-enter-order="7"
          style={{
            position: "absolute",
            left: "129.76px", // 201.76 - 72
            top: "100.65px", // 376.65 - 276
            width: "128.1px",
            height: "187.769px",
            zIndex: 5,
          }}
          data-oid="-i1a7.p"
        >
          <img
            src={imgVector1}
            alt="Treatment"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="3mcb6uu"
          />
        </div>
      </div>

      {/* Main message */}
      <div
        data-enter
        data-enter-order="8"
        style={{
          position: "absolute",
          left: "78px",
          top: "749px",
          width: "930px",
          height: "120px",
          fontFamily: "Inter, sans-serif",
          fontStyle: "italic",
          fontSize: "28px",
          color: "#ec7624",
          textAlign: "center",
          lineHeight: "40px",
          zIndex: 6,
        }}
        data-oid="yo2l8ed"
      >
        ENHERTU demonstrated a clinically meaningful and statistically
        significant improvement in PFS vs. T-DM1 in DESTINY-Breast03
        <sup data-oid="n7uy9hs">1</sup>
      </div>

      {/* Continue button */}
      <div
        data-enter
        data-enter-order="9"
        style={{
          position: "absolute",
          left: "190px",
          top: "1615px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 6,
        }}
        onClick={onContinueClick}
        data-oid="yt8sggr"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0.29%",
            right: "0px",
            top: "0.89%",
            width: "100%",
            height: "100%",
          }}
          data-oid="t.l.1:b"
        >
          <img
            src={img}
            alt="Button background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="o7s2jxf"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "82.4%",
            top: "0px",
            width: "17.6%",
            height: "100%",
          }}
          data-oid="tqdu3o_"
        >
          <img
            src={img1}
            alt="Button icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="o0npaya"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "28.57%",
            right: "4.15%",
            bottom: "28.57%",
            left: "17.6%",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "white",
            textAlign: "center",
            lineHeight: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          data-oid="tb5z:a7"
        >
          Push The Paradigm
        </div>
      </div>

      {/* Footer text */}
      <div
        data-enter
        data-enter-order="10"
        style={{
          position: "absolute",
          left: "73px",
          top: "1828px",
          width: "927px",
          height: "62px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "medium",
          fontSize: "12px",
          color: "black",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-oid="2f8mmrd"
      >
        <p style={{ margin: 0 }} data-oid="ofsgppv">
          <span style={{ fontWeight: "bold" }} data-oid="h11hqnq">
            Primary PFS analysis (May 2021), HR: 0.28 (95% CI 0.22–0.37,
            p-value&lt;0.001).<sup data-oid="b7tvp81">1</sup>
          </span>
          <br data-oid="mu:fd5." />
          Updated PFS analysis was not tested for statistical significance and
          not powered to show differences between treatment arms.
          <sup data-oid="nxfzqkn">2</sup>
        </p>
        <p style={{ margin: 0 }} data-oid="tmq_n1l">
          CI, confidence interval; HR, hazard ratio; PFS, progression-free
          survival; T-DM1, trastuzumab emtansine.
        </p>
        <p style={{ margin: 0 }} data-oid="b._a5_o">
          1. Cortés J, et al. N Engl J Med. 2022;386:1143–1154; 2. Hurvitz SA,
          et al. Lancet. 2023;401:105–117.
        </p>
      </div>
    </div>
  );
}
