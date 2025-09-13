// Image assets from Figma MCP
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Hala13Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala13({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala13Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="wjd7cp9"
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
        data-oid="2lz37va"
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
        data-oid="3c6sn2p"
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
        data-oid="twbk3y:"
      />

      {/* Main title */}
      <div
        data-enter
        style={{
          position: "absolute",
          top: "171px",
          left: "75px",
          width: "934px",
          height: "163px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "45px",
          color: "#250858",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-oid="4vsb:3p"
      >
        According to the SmPC and PI, for Grade 1 ILD/pneumonitis, ENHERTU
        should be withheld until resolution to Grade 01,2
      </div>

      {/* Guidelines text */}
      <div
        data-enter
        data-enter-delay="0.1"
        style={{
          position: "absolute",
          top: "357px",
          left: "72px",
          width: "935px",
          height: "56px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "25px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="cb77l-e"
      >
        Guidelines suggest to manage and treat ILD/pneumonitis{" "}
        <span style={{ fontWeight: "bold" }} data-oid=":say2f-">
          jointly with a MDT
        </span>{" "}
        and{" "}
        <span style={{ fontWeight: "bold" }} data-oid="t7n::l1">
          involve a pulmonologist early
        </span>
      </div>

      {/* Asymptomatic Grade 1 ILD/pneumonitis section */}
      <div
        data-enter
        data-enter-delay="0.2"
        style={{
          position: "absolute",
          top: "462px",
          left: "75px",
          width: "934px",
          height: "96px",
          backgroundColor: "#58378a",
          zIndex: 1,
        }}
        data-oid="7p.kbsc"
      />

      <div
        data-enter
        data-enter-delay="0.2"
        style={{
          position: "absolute",
          top: "485px",
          left: "116px",
          width: "864px",
          height: "49px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "32px",
          color: "white",
          lineHeight: "normal",
          zIndex: 3,
        }}
        data-oid="bx8jtwn"
      >
        Asymptomatic Grade 1 ILD/pneumonitis
      </div>

      {/* Asymptomatic content box */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          top: "558px",
          left: "75px",
          width: "934px",
          height: "182px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="m4:mm1u"
      />

      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          top: "581px",
          left: "116px",
          width: "837px",
          height: "176px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="wi14cow"
      >
        <ul style={{ margin: 0, paddingLeft: "36px" }} data-oid="tti5g-b">
          <li style={{ marginBottom: "8px" }} data-oid="bkjtg_w">
            ENHERTU should be withheld until recovery to Grade 0 and may
            <br data-oid="i:5xaxy" />
            be resumed according to the dosing modifications outlined in the
            SmPC
          </li>
          <li data-oid="ppx74-0">
            Consider corticosteroid treatment (e.g., ≥ 0.5 mg/kg/day
            prednisolone or equivalent
          </li>
        </ul>
      </div>

      {/* Symptomatic ILD/pneumonitis section */}
      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "781px",
          left: "75px",
          width: "934px",
          height: "96px",
          backgroundColor: "#58378a",
          zIndex: 1,
        }}
        data-oid="v.aya6p"
      />

      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "804px",
          left: "116px",
          width: "864px",
          height: "99px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "32px",
          color: "white",
          lineHeight: "normal",
          zIndex: 3,
        }}
        data-oid="pqp__xp"
      >
        For symptomatic ILD/pneumonitis (Grade 2 or greater)
      </div>

      {/* Symptomatic content box */}
      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          top: "877px",
          left: "75px",
          width: "934px",
          height: "206px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="-qwgo5_"
      />

      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          top: "900px",
          left: "116px",
          width: "837px",
          height: "176px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="d-ipfyr"
      >
        <ul style={{ margin: 0, paddingLeft: "36px" }} data-oid="uai999z">
          <li style={{ marginBottom: "8px" }} data-oid="gcaifhw">
            ENHERTU should be permanently discontinued in patients who are
            diagnosed with symptomatic (Grade 2 or greater) ILD/pneumonitis
          </li>
          <li data-oid="qq_e6_o">
            Promptly initiate corticosteroid treatment as soon as
            ILD/pneumonitis is suspected (e.g., ≥ 1 mg/kg/day prednisolone or
            equivalent) and continue for at least 14 days followed by gradual
            taper for at least 4 weeks
          </li>
        </ul>
      </div>

      {/* Continue button */}
      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          top: "1615px",
          left: "190px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
        }}
        onClick={onContinueClick}
        data-oid="g490rly"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "2px",
            right: "0px",
            top: "1px",
          }}
          data-oid="yoju:_d"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={img}
            data-oid="t_7q1f1"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "82.4%",
            top: "0px",
          }}
          data-oid="isozw9z"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={img1}
            data-oid="1vopq-1"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "32px",
            right: "29px",
            bottom: "32px",
            left: "123px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "white",
            textAlign: "center",
            lineHeight: "54px",
          }}
          data-oid="vzq1_if"
        >
          How the patient is feeling now
        </div>
      </div>

      {/* Footer text */}
      <div
        style={{
          position: "absolute",
          top: "1846px",
          left: "74px",
          width: "927px",
          height: "45px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "11px",
          color: "black",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-oid="_apktk9"
      >
        <p style={{ margin: 0, marginBottom: "0px" }} data-oid="7g1lmt:">
          ILD, interstitial lung disease; PI, prescribing information; SmPC,
          summary of product characteristics.
        </p>
        <p style={{ margin: 0 }} data-oid="dy0w6x4">
          <span data-oid="ml715s_">
            1. EMA. ENHERTU® SmPC. Available from:{" "}
          </span>
          <a
            href="https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf"
            style={{
              textDecoration: "underline",
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
              color: "inherit",
            }}
            data-oid="cjsixru"
          >
            https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf
          </a>
          <span data-oid="bcj1kqy">
            . Accessed August 2023; 2. ENHERTU® PI. Available from:
            https://daiichisankyo.us/prescribing-information-portlet/getPIContent?productName=Enhertu&inline=true.
            Accessed December 2023
          </span>
        </p>
      </div>
    </div>
  );
}
