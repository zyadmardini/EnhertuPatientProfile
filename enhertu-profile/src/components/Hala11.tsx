// Image assets from Figma MCP
const imgImage16 = "/assets/207d8ca1f2e22fe5bb09e134a3e79caf2fdcb4ea.png";
const imgImage19 = "/assets/28ae67d0bc721e7da61e59c033eba10d457cb460.png";
const imgImage18 = "/assets/ba45846ee887ae41be05496a4dd8ac311f77dd0a.png";
const imgImage17 = "/assets/8ae759f6c8118390bbf738cdce75f637b61a387c.png";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Hala11Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala11({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala11Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-oid="dg.1dc5"
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
        data-oid="vpd575b"
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
        data-oid="v7.u9wc"
      >
        ⌂
      </div>

      {/* Header background */}
      <div
        data-enter
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "756px",
          height: "27px",
          background: "linear-gradient(to right, #ec7624, #ffb061)",
          zIndex: 2,
        }}
        data-oid="x9a-4a:"
      />

      {/* Main title */}
      <div
        data-enter
        data-enter-delay="0.1"
        style={{
          position: "absolute",
          left: "75px",
          top: "171px",
          width: "934px",
          height: "112px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "45px",
          lineHeight: "normal",
          color: "#250858",
          zIndex: 6,
        }}
        data-oid="y164ae3"
      >
        Suspected drug-related ILD/pneumonitis should be monitored closely
      </div>

      {/* Subtitle */}
      <div
        data-enter
        data-enter-delay="0.2"
        style={{
          position: "absolute",
          left: "72px",
          top: "306px",
          width: "935px",
          height: "28px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          lineHeight: "28px",
          color: "#5d6771",
          zIndex: 6,
        }}
        data-oid="dnz4nba"
      >
        Monitor for resolution or worsening of ILD/pneumonitis via regular:
      </div>

      {/* Top row images and text */}
      <div
        data-enter-group
        data-enter-delay="0.3"
        data-enter-stagger="0.1"
        data-oid="kyogwhw"
      >
        {/* Left image */}
        <div
          data-enter-order="1"
          style={{
            position: "absolute",
            left: "162px",
            top: "517px",
            width: "367px",
            height: "352px",
            backgroundImage: `url('${imgImage16}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 4,
          }}
          data-oid=".kea4b6"
        />

        {/* Right image */}
        <div
          data-enter-order="2"
          style={{
            position: "absolute",
            left: "554px",
            top: "517px",
            width: "367px",
            height: "352px",
            backgroundImage: `url('${imgImage19}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 4,
          }}
          data-oid="10b8s7o"
        />

        {/* Left text */}
        <div
          data-enter-order="3"
          style={{
            position: "absolute",
            left: "171px",
            top: "904px",
            width: "349px",
            height: "84px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "28px",
            color: "#5d6771",
            textAlign: "center",
            zIndex: 6,
          }}
          data-oid="oqfll-l"
        >
          Lung examination
          <br data-oid="pd1hy:s" />
          (including checking for cough/shortness of breath)
        </div>

        {/* Right text */}
        <div
          data-enter-order="4"
          style={{
            position: "absolute",
            left: "563px",
            top: "904px",
            width: "349px",
            height: "56px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "28px",
            color: "#5d6771",
            textAlign: "center",
            zIndex: 6,
          }}
          data-oid=":tj6oga"
        >
          Respiratory
          <br data-oid="zffnhup" />
          function testing
        </div>
      </div>

      {/* Bottom row images and text */}
      <div
        data-enter-group
        data-enter-delay="0.5"
        data-enter-stagger="0.1"
        data-oid="r_vp53w"
      >
        {/* Left image */}
        <div
          data-enter-order="1"
          style={{
            position: "absolute",
            left: "162px",
            top: "1065px",
            width: "367px",
            height: "353px",
            backgroundImage: `url('${imgImage18}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 4,
          }}
          data-oid="p783i6m"
        />

        {/* Right image */}
        <div
          data-enter-order="2"
          style={{
            position: "absolute",
            left: "554px",
            top: "1065px",
            width: "367px",
            height: "353px",
            backgroundImage: `url('${imgImage17}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 4,
          }}
          data-oid="_u1wfo4"
        />

        {/* Left text */}
        <div
          data-enter-order="3"
          style={{
            position: "absolute",
            left: "171px",
            top: "1453px",
            width: "349px",
            height: "56px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "28px",
            color: "#5d6771",
            textAlign: "center",
            zIndex: 6,
          }}
          data-oid="m.kg9_e"
        >
          Oxygen saturation
          <br data-oid="htwgm1a" />
          by pulse oximetry
        </div>

        {/* Right text */}
        <div
          data-enter-order="4"
          style={{
            position: "absolute",
            left: "563px",
            top: "1453px",
            width: "349px",
            height: "56px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "28px",
            color: "#5d6771",
            textAlign: "center",
            zIndex: 6,
          }}
          data-oid=".aqzl2z"
        >
          High-resolution computed tomography
        </div>
      </div>

      {/* Footer text */}
      <div
        data-enter
        data-enter-delay="0.7"
        style={{
          position: "absolute",
          left: "74px",
          top: "1861px",
          width: "927px",
          height: "30px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "medium",
          fontSize: "11px",
          lineHeight: "15px",
          color: "#000000",
          zIndex: 6,
        }}
        data-oid="aylj3w_"
      >
        ILD, interstitial lung disease.
        <br data-oid="j_ziyvi" />
        Conte P, et al. ESMO Open. 2022;7(2):100404.
      </div>

      {/* Continue button */}
      <div
        data-enter
        data-enter-delay="0.8"
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
        data-oid=":h83x6-"
      >
        {/* Button background */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          data-oid="aqjrwy-"
        >
          <img
            src={img}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="efqs4q7"
          />
        </div>

        {/* Button icon */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "17.6%",
            height: "100%",
            zIndex: 2,
          }}
          data-oid="fslqkyx"
        >
          <img
            src={img1}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="dvioisn"
          />
        </div>

        {/* Button text */}
        <div
          style={{
            position: "absolute",
            left: "17.6%",
            top: "28.57%",
            right: "4.15%",
            bottom: "28.57%",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            lineHeight: "54px",
            color: "#ffffff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
          }}
          data-oid="6rbds3x"
        >
          Adverse Events management
        </div>
      </div>
    </div>
  );
}
