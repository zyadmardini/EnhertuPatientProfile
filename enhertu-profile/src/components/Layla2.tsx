// Image assets from Figma MCP
const imgLayla = "/assets/79478245b2eb932aea067aead4415c7e229164ad.png";
const imgEllipse1 = "/assets/b5e1855b59335aea6be52c1e450d97f243cb25a3.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgButtonIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Layla2Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla2({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Layla2Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="nj1lsz0"
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
        data-oid="tjq08tz"
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
        data-oid="6b.nsz-"
      >
        ⌂
      </div>

      {/* Header Background */}
      <div
        data-enter
        data-enter-order="1"
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "756px",
          height: "27px",
          background: "linear-gradient(to right, #ec7624, #ffb061)",
          zIndex: 2,
        }}
        data-oid="z6b1efj"
      />

      {/* Title */}
      <div
        data-enter
        data-enter-order="2"
        style={{
          position: "absolute",
          left: "100px",
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
        data-oid="6abexi0"
      >
        <p style={{ margin: "0", lineHeight: "normal" }} data-oid="rg.9grj">
          Case Study: Layla
        </p>
      </div>

      {/* Ellipse Background */}
      <div
        data-enter
        data-enter-order="3"
        style={{
          position: "absolute",
          left: "73px",
          top: "276px",
          width: "440px",
          height: "440px",
          zIndex: 1,
        }}
        data-oid="kjgpic5"
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
          data-oid="c3fu:p1"
        />
      </div>

      {/* Treatment Background */}
      <div
        data-enter
        data-enter-order="4"
        style={{
          position: "absolute",
          left: "293px",
          top: "276px",
          width: "787px",
          height: "169px",
          backgroundColor: "#ec7624",
          zIndex: 2,
        }}
        data-oid="n:0cp1_"
      />

      {/* Patient Image */}
      <div
        data-enter
        data-enter-order="5"
        style={{
          position: "absolute",
          left: "94px",
          top: "301px",
          width: "397px",
          height: "391px",
          backgroundImage: `url('${imgLayla}')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="77-p2-6"
      />

      {/* Section Title */}
      <div
        data-enter
        data-enter-order="6"
        style={{
          position: "absolute",
          left: "534px",
          top: "300px",
          width: "449px",
          height: "108px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "45px",
          color: "white",
          lineHeight: "normal",
          whiteSpace: "pre",
          zIndex: 3,
        }}
        data-oid="oiivnm2"
      >
        <p style={{ margin: "0", lineHeight: "normal" }} data-oid="n05i.62">
          Patient presentation
        </p>
        <p style={{ margin: "0", lineHeight: "normal" }} data-oid="q4.jbyx">
          at diagnosis
        </p>
      </div>

      {/* Patient Details */}
      <div
        data-enter
        data-enter-order="7"
        style={{
          position: "absolute",
          left: "73px",
          top: "807px",
          width: "759px",
          height: "920px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "31px",
          color: "black",
          lineHeight: "54px",
          zIndex: 6,
        }}
        data-oid="smlj1ti"
      >
        <ul
          style={{
            listStyleType: "disc",
            margin: "0",
            paddingLeft: "46.5px",
          }}
          data-oid="cq7m9um"
        >
          <li style={{ marginBottom: "0" }} data-oid="3kmotk0">
            <span data-oid="n1:u4.u">
              68 year-old postmenopausal Caucasian woman living in Spain
            </span>
          </li>
          <li style={{ marginBottom: "0" }} data-oid="y:mds1q">
            <span data-oid="t3fla57">No comorbidities</span>
          </li>
          <li style={{ marginBottom: "0" }} data-oid="wnl30mr">
            <span data-oid="x.x32s4">
              Diagnosed with Stage IV HER2-positive BC in September 2018
            </span>
          </li>
          <li style={{ marginBottom: "0" }} data-oid="kedx74f">
            <span data-oid="vq3xju2">ER-/PR-/HER2-positive (IHC3+)</span>
          </li>
          <li style={{ marginBottom: "0" }} data-oid="rrk7sph">
            <span data-oid="b_if6w:">ECOG PS 0</span>
          </li>
          <li data-oid="z4ymadb">
            <span data-oid="-u:7ih9">
              T4N0M1 (two small lung nodules and two bone metastases)
            </span>
          </li>
        </ul>
      </div>

      {/* Footer Text */}
      <div
        data-enter
        data-enter-order="8"
        style={{
          position: "absolute",
          left: "105px",
          top: "1853px",
          width: "920px",
          height: "30px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "12px",
          color: "black",
          lineHeight: "15px",
          whiteSpace: "pre",
          zIndex: 6,
        }}
        data-oid="sba8qxk"
      >
        <p style={{ margin: "0", lineHeight: "15px" }} data-oid="k92:rj7">
          BC, breast cancer; ECOG PS, Eastern Cooperative Oncology Group
          performance status; ER, estrogen receptor; HER2, human epidermal
          growth factor receptor 2;
        </p>
        <p style={{ margin: "0", lineHeight: "15px" }} data-oid="3z2tdkd">
          IHC, immunohistochemistry; M, metastases; N, node; V, intravenous; PR,
          progesterone receptor; T, tumor.
        </p>
      </div>

      {/* Treatment Button */}
      <div
        data-enter
        data-enter-order="9"
        style={{
          position: "absolute",
          left: "191px",
          top: "1615px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
        }}
        onClick={onContinueClick}
        data-oid="1tfu_4y"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0.29%",
            right: "0px",
            top: "0.89%",
            zIndex: 1,
          }}
          data-oid="7-mbu0v"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgButton}
            data-oid="8m7qa3e"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "82.4%",
            top: "0px",
            zIndex: 2,
          }}
          data-oid="_3pquqb"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgButtonIcon}
            data-oid="9at0-j6"
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
            zIndex: 3,
          }}
          data-oid="fywofkx"
        >
          <p style={{ margin: "0", lineHeight: "54px" }} data-oid="z6ukf47">
            Treatment
          </p>
        </div>
      </div>
    </div>
  );
}
