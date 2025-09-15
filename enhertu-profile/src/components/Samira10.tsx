// Image assets from Figma MCP
const imgButtonContainer =
  "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIconContainer = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
// const imgVector = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
// const imgGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";
const imgVector1 = "/assets/0492412761c8509e31e902d4f01c535a5b33ea9d.svg";
const imgVector2 = "/assets/955575a9c724c363258e4b21ead3b46a80bfb6e6.svg";

interface Samira10Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onHowPatientFeelingClick: () => void;
}

export default function Samira10({
  onBackClick,
  onHomeClick,
  onHowPatientFeelingClick,
}: Samira10Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="nqrqfgv"
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
        data-oid="6c4j-l3"
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
        data-oid="j734ika"
      >
        <p style={{ margin: 0 }} data-oid="lp54:m7">
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
        data-oid="_g11qf4"
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
          data-oid="-1hnn09"
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
          data-oid="6ac2w8_"
        >
          <p style={{ margin: 0 }} data-oid="4jbolig">
            Patient response to
          </p>
          <p style={{ margin: 0 }} data-oid="c081m:5">
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
          data-oid=":w0coxc"
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
            data-oid="hlefz0d"
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
          data-oid="nu.yoyq"
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
            data-oid="1.d-w63"
          />
        </div>

        {/* Treatment container */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "103px",
            width: "937px",
            height: "598px",
            backgroundColor: "#d5eff4",
            borderTopLeftRadius: "93px",
            zIndex: 1,
          }}
          data-oid="ttt.aan"
        />

        {/* Treatment content - First paragraph */}
        <div
          style={{
            position: "absolute",
            left: "356px",
            top: "191px",
            width: "545px",
            height: "175px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "black",
            lineHeight: "54px",
            zIndex: 6,
          }}
          data-oid="atk69lf"
        >
          <ul style={{ margin: 0, paddingLeft: "46.5px" }} data-oid="s948gde">
            <li
              style={{
                listStyleType: "disc",
                marginTop: "-5px",
                fontWeight: "700",
              }}
              data-oid=":l3vmc1"
            >
              In July 2023, patient showed signs of Grade 1 ILD/pneumonitis
              with thickening at the right upper lobe of the lung in a chest CT scan
            </li>
          </ul>
        </div>

        {/* Treatment content - Second paragraph */}
        <div
          style={{
            position: "absolute",
            left: "6px",
            top: "430px",
            width: "901px",
            height: "303px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "black",
            lineHeight: "54px",
            zIndex: 6,
          }}
          data-oid="4o6s5kc"
        >
          <div
            style={{ fontWeight: "700", margin: "25px 0 0 43px" }}
            data-oid="y3ax-ak"
          >
     
          </div>
          <ul style={{ margin: 0, paddingLeft: "46.5px" }} data-oid="mx__zl2">
            <li
              style={{
                listStyleType: "disc",
                marginBottom: "0",
                fontWeight: "700",
              }}
              data-oid="joh9sjt"
            >
              ENHERTU was withheld as per local guidelines for Grade 1
              ILD/pneumonitis<sup>1</sup>
            </li>
            <li
              style={{ listStyleType: "disc", fontWeight: "700" }}
              data-oid="x4sje0_"
            >
             Corticosteroid therapy was started with methylprednisolone 0.5
              mg/kg/day
            </li>
          </ul>
        </div>
      </div>

      {/* Guidance section */}
      <div
        data-enter
        data-enter-order="3"
        style={{
          position: "absolute",
          left: "78px",
          top: "1020px",
          width: "930px",
          height: "auto",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "28px",
          color: "#ec7624",
          lineHeight: "40px",
          zIndex: 6,
        }}
        data-oid="hx80s5:"
      >
        <p style={{ margin: 0 }} data-oid="nhmfi6z">
          Guidance on dose modifications for Grade 1 ILD/pneumonitis:1
        </p>
        <ul style={{ margin: 0, paddingLeft: "42px" }} data-oid="whhddlr">
          <li
            style={{ listStyleType: "disc", marginBottom: "0" }}
            data-oid="qfdud9i"
          >
            <span
              style={{ fontFamily: "Inter, sans-serif", fontWeight: "300" }}
              data-oid="w017xy8"
            >
              Interrupt ENHERTU until resolved to Grade 0
            </span>
          </li>
          <li
            style={{ listStyleType: "disc", marginBottom: "0" }}
            data-oid="y:1jyi3"
          >
            <span
              style={{ fontFamily: "Inter, sans-serif", fontWeight: "300" }}
              data-oid="9p2lqqm"
            >
              If resolved in ≤28 days or less from date of onset, maintain dose
            </span>
          </li>
          <li
            style={{ listStyleType: "disc", marginBottom: "0" }}
            data-oid="q2k_r-0"
          >
            <span
              style={{ fontFamily: "Inter, sans-serif", fontWeight: "300" }}
              data-oid="-14lx6h"
            >
              If resolved in &gt;28 days from date of onset, reduce dose one
              level
            </span>
          </li>
          <li
            style={{ listStyleType: "disc", marginBottom: "0" }}
            data-oid=":jkiyz5"
          >
            <span
              style={{ fontFamily: "Inter, sans-serif", fontWeight: "300" }}
              data-oid="dl_5e-4"
            >
              Consider corticosteroid treatment as soon as ILD/pneumonitis is
              suspected (e.g. ≥ 0.5mg/kg/day prednisolone or equivalent)
            </span>
          </li>
          <li
            style={{
              listStyleType: "disc",
              display: "list-item",
              fontWeight: "700",
            }}
            data-oid="_zts6:m"
          >
            <div
              style={{
                display: "inline",
                fontWeight: "300",
                fontFamily: "Inter, sans-serif",
              }}
              data-oid="v-xnhq3"
            >
              Patients should be regularly assessed for ILD/pneumonitis during
              treatment and encouraged to proactively self-monitor
            </div>
          </li>
        </ul>
        <p style={{ margin: 0, lineHeight: "40px" }} data-oid="502ckzb">
          &nbsp;
        </p>
      </div>

      {/* How Patient Feeling Button */}
      <div
        data-enter
        data-enter-order="5"
        style={{
          position: "absolute",
          left: "calc(50% - 349.5px)",
          top: "1615px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 6,
        }}
        onClick={onHowPatientFeelingClick}
        data-oid="9oy66bp"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "2.03px",
            right: "0px",
            top: "1px",
            zIndex: 1,
          }}
          data-oid=".r0ohb4"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgButtonContainer}
            data-oid="0bkbabi"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "576.4px",
            top: "0px",
            zIndex: 2,
          }}
          data-oid="k1z6p03"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgIconContainer}
            data-oid="38d:taz"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "32px",
            left: "123.2px",
            right: "29px",
            bottom: "32px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "white",
            textAlign: "center",
            lineHeight: "54px",
            zIndex: 3,
          }}
          data-oid="0ebtd8g"
        >
          <p style={{ margin: 0 }} data-oid="qaqslzn">
            How the patient is feeling now
          </p>
        </div>
      </div>

      {/* Footer disclaimer */}
      <div
        data-enter
        data-enter-order="6"
        style={{
          position: "absolute",
          left: "73px",
          top: "1815px",
          width: "927px",
          height: "auto",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "12px",
          color: "black",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-oid="h5smqoy"
      >
        <p style={{ margin: 0 }} data-oid="c89d5an">
          Most cases of ILD in DESTINY-Breast03 among patients treated with
          ENHERTU were Grade 1 or 2 (14%), Grade 3 cases occurred in &lt;1% of
          patients. There were no cases of Grade 4 or 5 ILD reported in
          DESTINY-Breast03.2
        </p>
        <p style={{ margin: 0, whiteSpace: "pre-wrap" }} data-oid="ycvxre8">
          CT, computerized tomography; ILD, interstitial lung disease.
          <br data-oid="w5lki4u" />
          1. EMA. ENHERTU® SmPC. Available from:
          https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf.
          Accessed February 2024; 2. Hurvitz SA, et al. Lancet.
          2023;401:105–117.
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
        data-oid="txy90gj"
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
        data-oid="0g1v0mi"
      >
        ⌂
      </div>
    </div>
  );
}
