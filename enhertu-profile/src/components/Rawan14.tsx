// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgImage11 = "/assets/a080ecc52a1ac621a1a9bc23c7000572f87d5f5e.png";
const imgEllipse1 = "/assets/db308337d318d47455cdd2ec15957a37c39e11c5.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgOrangeArrow = "/assets/449687bc227799e152eb96fdc69677fa8e91bc43.svg";

interface Rawan14Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan14({
  onBackClick,
  onHomeClick,
  onContinueClick,
}: Rawan14Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-name="Rawan14"
      data-node-id="52:1904"
      data-oid="elj1_di"
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
        data-oid="9.r5xll"
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
        data-oid="-pw5cl2"
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
        data-name="Header background"
        data-node-id="52:1910"
        data-oid=".l5f0e-"
      />

      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1080px",
          height: "1920px",
          backgroundColor: "#ffffff",
          zIndex: 1,
        }}
        data-node-id="52:1905"
        data-oid="vh5fjub"
      />

      {/* Title */}
      <div
        data-enter
        data-enter-order="1"
        style={{
          position: "absolute",
          top: "167px",
          left: "73px",
          width: "656px",
          height: "80px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "50px",
          color: "#5b6670",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-node-id="52:1906"
        data-oid="q99:jr3"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="_pw0:cc">
          Case Study: Rawan
        </p>
      </div>

      {/* Ellipse background */}
      <div
        data-enter
        data-enter-order="2"
        style={{
          position: "absolute",
          top: "276px",
          left: "73px",
          width: "440px",
          height: "440px",
          zIndex: 4,
        }}
        data-node-id="52:1907"
        data-oid="77hzb1k"
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
          data-oid="-zptm_."
        />
      </div>

      {/* Patient image */}
      <div
        data-enter
        data-enter-order="3"
        style={{
          position: "absolute",
          top: "301px",
          left: "95px",
          width: "396px",
          height: "390px",
          zIndex: 5,
        }}
        data-name="Rawan"
        data-node-id="52:1909"
        data-oid="_z_brd."
      >
        <img
          alt=""
          style={{
            display: "block",
            maxWidth: "none",
            width: "100%",
            height: "100%",
          }}
          src={imgRawan}
          data-oid="y6n1871"
        />
      </div>

      {/* Section title */}
      <div
        data-enter
        data-enter-order="4"
        style={{
          position: "absolute",
          top: "415px",
          left: "534px",
          width: "509px",
          height: "162px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "45px",
          color: "#250858",
          lineHeight: "normal",
          whiteSpace: "pre-wrap",
          zIndex: 6,
        }}
        data-node-id="52:1908"
        data-oid="f38rho7"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="mi8ko.f">
          Decrease in patient's Ca15-3 levels indicate response to ENHERTU
        </p>
      </div>

      {/* Treatment timeline container */}
      <div
        data-enter
        data-enter-order="5"
        style={{
          position: "absolute",
          top: "805px",
          left: "207px",
          width: "873px",
          height: "96px",
          backgroundColor: "#ffd2a9",
          zIndex: 1,
        }}
        data-node-id="52:1913"
        data-oid="ed8:sky"
      />

      {/* Treatment timeline icon */}
      <div
        style={{
          position: "absolute",
          top: "805px",
          left: "73px",
          width: "186px",
          height: "96px",
          backgroundColor: "#ffb061",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-node-id="52:1914"
        data-oid="od8l9.."
      />

      {/* Treatment timeline vector */}
      <div
        style={{
          position: "absolute",
          top: "815px",
          left: "170px",
          width: "78px",
          height: "78px",
          zIndex: 3,
        }}
        data-name="Vector"
        data-node-id="140:869"
        data-oid="kh:p.zw"
      >
        <img
          alt=""
          style={{
            display: "block",
            maxWidth: "none",
            width: "100%",
            height: "100%",
          }}
          src={imgOrangeArrow}
          data-oid="zs1n83i"
        />
      </div>

      {/* Treatment timeline text */}
      <div
        style={{
          position: "absolute",
          top: "826px",
          left: "268px",
          width: "812px",
          height: "56px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:1915"
        data-oid="4yr8r9f"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="2gag6jq">
          <span data-oid="2vz.rqk">CT (3 mo): </span>
          <span style={{ fontWeight: "500" }} data-oid="-obyk_8">
            Partial response (liver), stable disease (lymph nodes,
          </span>
        </p>
        <p
          style={{ margin: 0, lineHeight: "28px", fontWeight: "500" }}
          data-oid="4.l4q61"
        >
          lung and bone)
        </p>
      </div>

      {/* Graph image */}
      <div
        data-enter
        data-enter-order="6"
        style={{
          position: "absolute",
          top: "967px",
          left: "73px",
          width: "938.254px",
          height: "388px",
          backgroundImage: `url('${imgImage11}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-name="image 11"
        data-node-id="52:1935"
        data-oid="qhyqv83"
      />

      {/* Continue Button */}
      <div
        data-enter
        data-enter-order="7"
        style={{
          position: "absolute",
          top: "1615px",
          left: "191px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
        }}
        data-name="Button Treatment"
        data-node-id="52:1912"
        onClick={onContinueClick}
        data-oid="a1faog8"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0.29%",
            right: "0",
            top: "0.89%",
            zIndex: 1,
          }}
          data-name="Button container"
          data-oid="36wcryt"
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
            data-oid="pr_zsg3"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "82.4%",
            top: "0",
            zIndex: 2,
          }}
          data-name="Icon container"
          data-oid="_n1ll_k"
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
            data-oid="9i3-ui4"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "28.57%",
            left: "17.6%",
            right: "4.15%",
            bottom: "28.57%",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: "54px",
            zIndex: 3,
          }}
          data-oid="el8l0jo"
        >
          <p style={{ margin: 0, lineHeight: "54px" }} data-oid="81vef5d">
            How the patient is feeling now
          </p>
        </div>
      </div>

      {/* Footer text */}
      <div
        style={{
          position: "absolute",
          top: "1853px",
          left: "105px",
          width: "953px",
          height: "30px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "12px",
          color: "#000000",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-node-id="52:1911"
        data-oid="3d.f.r_"
      >
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="ot0:13:">
          Hypothetical case built with input from Dr Simon Gampenrieder,
          University Hospital Salzburg, Austria.
        </p>
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="uh8_f0x">
          4L, forth-line; CT, computed tomography; U/ml, units per milliliter.
        </p>
      </div>
    </div>
  );
}
