// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgImage9 = "/assets/d5e3239e067c7f03922c5fb979b9ff719366010d.png";
const imgImage10 = "/assets/3ea2f32b86b3169463d7d809f0fe1f25b4784326.png";
const imgEllipse1 = "/assets/db308337d318d47455cdd2ec15957a37c39e11c5.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgOrangeArrow = "/assets/449687bc227799e152eb96fdc69677fa8e91bc43.svg";

interface Rawan13Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan13({
  onBackClick,
  onHomeClick,
  onContinueClick,
}: Rawan13Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-name="Rawan13"
      data-node-id="52:1838"
      data-oid="6j5cahd"
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
        data-oid="swtpdu_"
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
        data-oid="z74ky7b"
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
        data-node-id="52:1844"
        data-oid="m2xuyau"
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
        data-node-id="52:1839"
        data-oid="3xkesud"
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
        data-node-id="52:1840"
        data-oid="c_22:fe"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="n3yk87x">
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
        data-node-id="52:1841"
        data-oid="8e2hrzo"
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
          data-oid="-usuii1"
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
        data-node-id="52:1843"
        data-oid="yzgjmld"
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
          data-oid="5s-zqsd"
        />
      </div>

      {/* Section title */}
      <div
        data-enter
        data-enter-order="4"
        style={{
          position: "absolute",
          top: "453px",
          left: "534px",
          width: "495px",
          height: "122px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "45px",
          color: "#250858",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-node-id="52:1842"
        data-oid="x_eo1is"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="l0ykvye">
          Patient responds to ENHERTU
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
        data-node-id="52:1847"
        data-oid="jx_f3zp"
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
        data-node-id="52:1848"
        data-oid="gulbks5"
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
        data-node-id="140:867"
        data-oid="vwhb:uj"
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
          data-oid="dmjv8w3"
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
        data-node-id="52:1851"
        data-oid="-khm4h3"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="bexhjkz">
          <span data-oid="ns54z5i">CT (3 mo): </span>
          <span style={{ fontWeight: "500" }} data-oid="1e_3n6o">
            Partial response (liver), stable disease (lymph nodes,
          </span>
        </p>
        <p
          style={{ margin: 0, lineHeight: "28px", fontWeight: "500" }}
          data-oid="-c6ebon"
        >
          lung and bone)
        </p>
      </div>

      {/* Image labels */}
      <div
        style={{
          position: "absolute",
          top: "960px",
          left: "72px",
          width: "411px",
          height: "56px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:1894"
        data-oid="q0e48w:"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="z1s8e6m">
          Pre‑ENHERTU initiation CT
        </p>
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="yr9u0_2">
          (Sept 2022)
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: "960px",
          left: "597px",
          width: "411px",
          height: "28px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:1895"
        data-oid="qdd09li"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="8f50q9x">
          During ENHERTU treatment CT (Jan 2023)
        </p>
      </div>

      {/* Images */}
      <div
        data-enter
        data-enter-order="6"
        style={{
          position: "absolute",
          top: "1047px",
          left: "72px",
          width: "407px",
          height: "351px",
          backgroundImage: `url('${imgImage9}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-name="image 9"
        data-node-id="52:1899"
        data-oid="coj-vbd"
      />

      <div
        data-enter
        data-enter-order="7"
        style={{
          position: "absolute",
          top: "1047px",
          left: "596px",
          width: "414px",
          height: "351px",
          backgroundImage: `url('${imgImage10}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-name="image 10"
        data-node-id="52:1902"
        data-oid="isx07n:"
      />

      {/* Continue Button */}
      <div
        data-enter
        data-enter-order="8"
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
        data-node-id="52:1846"
        onClick={onContinueClick}
        data-oid="r5t3pun"
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
          data-oid=".malv.z"
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
            data-oid="xzldf6x"
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
          data-oid="qy06ewc"
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
            data-oid=".mcoxxa"
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
          data-oid="0:pjrrl"
        >
          <p style={{ margin: 0, lineHeight: "54px" }} data-oid="9spls8k">
            Continue
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
        data-node-id="52:1845"
        data-oid="-phnv07"
      >
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="1eonbjs">
          Hypothetical case built with input from Dr Simon Gampenrieder,
          University Hospital Salzburg, Austria.
        </p>
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="bwxqh3q">
          4L, forth-line; CT, computed tomography.
        </p>
      </div>
    </div>
  );
}
