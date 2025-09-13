// Image assets from Figma MCP
const imgSamira = "/assets/e1a3109de4a4f7b0a552c8c024e8fcfed309a2dd.png";
const imgButtonContainer =
  "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIconContainer = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgEllipse1 = "/assets/b5e1855b59335aea6be52c1e450d97f243cb25a3.svg";

interface ButtonTreatmentProps {
  text?: string;
}

function ButtonTreatment({ text = "Treatment" }: ButtonTreatmentProps) {
  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      data-oid=".sn9lzu"
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "0.29%",
          right: 0,
          top: "0.89%",
        }}
        data-oid="fp8:ts6"
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
          data-oid="3vnqw_f"
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: "82.4%",
          top: 0,
        }}
        data-oid="l3y0_uc"
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
          data-oid="5hqidx-"
        />
      </div>
      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "31px",
          textAlign: "center",
          color: "white",
          top: "28.57%",
          left: "17.6%",
          right: "4.15%",
          bottom: "28.57%",
        }}
        data-oid=".yaf9mq"
      >
        <p style={{ margin: 0, lineHeight: "54px" }} data-oid="f.u243-">
          {text}
        </p>
      </div>
    </div>
  );
}

interface Samira2Props {
  onBackClick: () => void;
  onContinueClick: () => void;
  onHomeClick: () => void;
}

export default function Samira2({
  onBackClick,
  onContinueClick,
  onHomeClick,
}: Samira2Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
      }}
      data-oid="l-a0pgt"
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          bottom: 0,
          left: 0,
          right: "0.09%",
          top: 0,
        }}
        data-oid="zlv0op3"
      />

      {/* Back Button */}
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
        data-oid="i_0vjvf"
      >
        ←
      </div>

      {/* Home Button */}
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
        data-oid="79vdvp4"
      >
        ⌂
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "50px",
          color: "#5b6670",
          top: "167px",
          left: "calc(50% - 441px)",
          width: "656px",
          height: "80px",
        }}
        data-enter
        data-oid="97hwy5z"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="5wlevc_">
          Case Study: Samira
        </p>
      </div>

      {/* Hero Section */}
      <div data-enter-group data-enter-order="2" data-oid="0y79:-v">
        {/* Ellipse background */}
        <div
          style={{
            position: "absolute",
            left: "73px",
            top: "276px",
            width: "440px",
            height: "440px",
          }}
          data-oid="py8053s"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgEllipse1}
            data-oid="6cmylf:"
          />
        </div>

        {/* Treatment background */}
        <div
          style={{
            position: "absolute",
            backgroundColor: "#ec7624",
            left: "293px",
            top: "287px",
            width: "787px",
            height: "169px",
          }}
          data-enter-swipe
          data-oid="o1jezc2"
        />

        {/* Samira image */}
        <div
          style={{
            position: "absolute",
            backgroundImage: `url('${imgSamira}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "top left",
            top: "15.66%",
            left: "8.33%",
            right: "54.82%",
            bottom: "63.97%",
          }}
          data-oid="a_dviep"
        />

        {/* Patient presentation text */}
        <div
          style={{
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "45px",
            color: "white",
            left: "534px",
            top: "300px",
            whiteSpace: "pre",
          }}
          data-oid="k:gcu.o"
        >
          <p style={{ margin: 0 }} data-oid="4_59da_">
            Patient presentation
          </p>
          <p style={{ margin: 0 }} data-oid=".wzrv33">
            at diagnosis
          </p>
        </div>
      </div>

      {/* Header background gradient */}
      <div
        style={{
          position: "absolute",
          background: "linear-gradient(to right, #ec7624, #ffb061)",
          height: "27px",
          left: 0,
          top: 0,
          width: "756px",
        }}
        data-oid="phl18bx"
      />

      {/* Case study content */}
      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "31px",
          color: "black",
          left: "87px",
          top: "751px",
          width: "759px",
          height: "920px",
        }}
        data-enter-group
        data-enter-order="3"
        data-oid="s4lyoz1"
      >
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "46.5px",
            margin: 0,
          }}
          data-oid="n8ms0ul"
        >
          <li
            style={{ marginBottom: 0, marginLeft: "46.5px" }}
            data-oid="qygxhkr"
          >
            <span style={{ lineHeight: "54px" }} data-oid="82lkqer">
              71-year-old postmenopausal woman
            </span>
          </li>
          <li
            style={{ marginBottom: 0, marginLeft: "46.5px" }}
            data-oid="nnkeqmu"
          >
            <span style={{ lineHeight: "54px" }} data-oid="w0-l.zk">
              History of hypertension
            </span>
          </li>
          <li
            style={{ marginBottom: 0, marginLeft: "46.5px" }}
            data-oid="-mjcmsz"
          >
            <span style={{ lineHeight: "54px" }} data-oid="j8-b-e-">
              ECOG PS 1
            </span>
          </li>
          <li
            style={{ marginBottom: 0, marginLeft: "46.5px" }}
            data-oid=".p3dzya"
          >
            <span style={{ lineHeight: "54px" }} data-oid="kyg2t8u">
              Regular screening with mammography, -alongside bilateral breast
              ultrasound, identified an area of irregular parenchymal thickening
              with microcalcifications
            </span>
          </li>
          <li
            style={{ marginBottom: 0, marginLeft: "46.5px" }}
            data-oid="s:z5pcl"
          >
            <span style={{ lineHeight: "54px" }} data-oid=".854p4u">
              Breast ultrasound showed a 41 mm solid nodule, and axillary
              lymphadenopathies with preserved morphology and structure were
              observed
            </span>
          </li>
          <li
            style={{ marginBottom: 0, marginLeft: "46.5px" }}
            data-oid="a9be2dg"
          >
            <span style={{ lineHeight: "54px" }} data-oid="vllz.1k">
              Diagnosed with HER2-positive infiltrating ductal carcinoma in May
              2021
            </span>
          </li>
          <li
            style={{ marginBottom: 0, marginLeft: "46.5px" }}
            data-oid="6p4032."
          >
            <span style={{ lineHeight: "54px" }} data-oid="267f0zv">
              ER-positive/PR-positive/HER2-positive (IHC2+/FISH amplified)
            </span>
          </li>
          <li style={{ marginLeft: "46.5px" }} data-oid="5wt99uw">
            <span style={{ lineHeight: "54px" }} data-oid="hr-f9d1">
              Metastasis in the liver identified in July 2021
            </span>
          </li>
        </ul>
      </div>

      {/* Footer disclaimer */}
      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "12px",
          color: "black",
          left: "105px",
          top: "1875px",
          whiteSpace: "pre",
        }}
        data-oid="fn.nmsf"
      >
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="w.fczvs">
          ECOG PS, Eastern Cooperative Oncology Group Performance Status; ER,
          estrogen receptor; FISH, fluorescence in situ hybridisation; HER2,
        </p>
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="qyy9e7l">
          human epidermal growth factor receptor 2; IHC, immunohistochemistry;
          PR, progesterone receptor.
        </p>
      </div>

      {/* Treatment button */}
      <div
        style={{
          position: "absolute",
          left: "191px",
          top: "1727px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
        }}
        onClick={onContinueClick}
        data-enter
        data-enter-order="4"
        data-oid="lbatvdx"
      >
        <ButtonTreatment data-oid=".333yw4" />
      </div>
    </div>
  );
}
