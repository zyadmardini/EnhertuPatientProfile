// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgImage8 = "/assets/43fb4fef8cf99b8b9e16e30a595bfcf7ffc228e3.png";
const imgImage7 = "/assets/db39d0e751f9e8ab0257252ee3e7073346d0ee5f.png";
const imgEllipse1 = "/assets/db308337d318d47455cdd2ec15957a37c39e11c5.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgEllipse3 = "/assets/5074d8c1d2f2a69f48812317ed1417116c392ebd.svg";
const imgEllipse4 = "/assets/dc665f17905b2c490f0f99a3c6385c2438f4905f.svg";
const imgVector = "/assets/89ef69d582f50df0c9de6ce7e4825870d4f881f3.svg";

interface Rawan12Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan12({
  onBackClick,
  onHomeClick,
  onContinueClick,
}: Rawan12Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-name="Rawan12"
      data-node-id="52:1797"
      data-oid="5nkjgc."
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
        data-oid="coaqlno"
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
        data-oid="94wc8i9"
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
        data-node-id="52:1803"
        data-oid="b4sgd9g"
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
        data-node-id="52:1798"
        data-oid="v0c9.l4"
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
        data-node-id="52:1799"
        data-oid="4gz58oa"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="40aw6ue">
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
        data-node-id="52:1800"
        data-oid="j:pcpfl"
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
          data-oid="fly-l59"
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
        data-node-id="52:1802"
        data-oid="pjjzpgc"
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
          data-oid="bc8l2o."
        />
      </div>

      {/* Section title */}
      <div
        data-enter
        data-enter-order="4"
        style={{
          position: "absolute",
          top: "371px",
          left: "534px",
          width: "495px",
          height: "216px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "45px",
          color: "#250858",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-node-id="52:1801"
        data-oid="pddp-:3"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="iykkfo5">
          Grade 2 nausea and vomiting resolves with the addition of a NK-1 RA to
          the antiemetic regimen
        </p>
      </div>

      {/* Treatment timeline containers */}
      {/* Container 1 */}
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
        data-node-id="52:1806"
        data-oid="kyxg59e"
      />

      {/* Container 2 */}
      <div
        data-enter
        data-enter-order="6"
        style={{
          position: "absolute",
          top: "930px",
          left: "207px",
          width: "873px",
          height: "96px",
          backgroundColor: "#ffd2a9",
          zIndex: 1,
        }}
        data-node-id="52:1808"
        data-oid="i0i3bw."
      />

      {/* Container 3 */}
      <div
        data-enter
        data-enter-order="7"
        style={{
          position: "absolute",
          top: "1055px",
          left: "207px",
          width: "873px",
          height: "96px",
          backgroundColor: "#ffd2a9",
          zIndex: 1,
        }}
        data-node-id="52:1809"
        data-oid="de3i-7h"
      />

      {/* Treatment timeline icons */}
      {/* Icon 1 */}
      <div
        style={{
          position: "absolute",
          top: "805px",
          left: "73px",
          width: "186px",
          height: "96px",
          backgroundColor: "#ee7623",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-node-id="52:1807"
        data-oid="7t_w.dd"
      />

      {/* Icon 2 */}
      <div
        style={{
          position: "absolute",
          top: "930px",
          left: "73px",
          width: "186px",
          height: "96px",
          backgroundColor: "#ffb061",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-node-id="52:1813"
        data-oid=":rtvm3b"
      />

      {/* Icon 3 */}
      <div
        style={{
          position: "absolute",
          top: "1055px",
          left: "73px",
          width: "186px",
          height: "96px",
          backgroundColor: "#ffb061",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-node-id="52:1814"
        data-oid="--q448q"
      />

      {/* Treatment timeline vectors */}
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
        data-node-id="140:865"
        data-oid="7sdt8u."
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
          data-oid="7mcfvod"
        />
      </div>

      {/* Group 30 */}
      <div
        style={{
          position: "absolute",
          top: "939px",
          left: "170px",
          width: "78px",
          height: "78px",
          zIndex: 3,
        }}
        data-node-id="52:1819"
        data-oid="9p5hi.w"
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "78px",
            height: "78px",
            zIndex: 1,
          }}
          data-node-id="52:1820"
          data-oid="6ihhqq0"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgEllipse3}
            data-oid="5ld1h36"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "6px",
            left: "6px",
            width: "66px",
            height: "66px",
            zIndex: 2,
          }}
          data-node-id="52:1821"
          data-oid="fuqkc-3"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgEllipse4}
            data-oid="gc1wbx1"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            width: "47px",
            height: "47px",
            backgroundImage: `url('${imgImage7}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 3,
          }}
          data-name="image 7"
          data-node-id="52:1822"
          data-oid="m7eyvgl"
        />
      </div>

      {/* Group 29 */}
      <div
        style={{
          position: "absolute",
          top: "1064px",
          left: "170px",
          width: "78px",
          height: "78px",
          zIndex: 3,
        }}
        data-node-id="52:1815"
        data-oid="f0fb.zc"
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "78px",
            height: "78px",
            zIndex: 1,
          }}
          data-node-id="52:1816"
          data-oid="6vuicbt"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgEllipse3}
            data-oid="r4vhq-5"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "15px",
            width: "47px",
            height: "47px",
            backgroundImage: `url('${imgImage8}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 3,
          }}
          data-name="image 8"
          data-node-id="52:1817"
          data-oid="ibpetbt"
        />

        <div
          style={{
            position: "absolute",
            top: "6px",
            left: "6px",
            width: "66px",
            height: "66px",
            zIndex: 2,
          }}
          data-node-id="52:1818"
          data-oid="mba548i"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgEllipse4}
            data-oid="jr2t7v-"
          />
        </div>
      </div>

      {/* Treatment timeline text */}
      <div
        style={{
          position: "absolute",
          top: "840px",
          left: "268px",
          width: "812px",
          height: "28px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:1810"
        data-oid="by3zfak"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="kyvqf3k">
          <span style={{ fontWeight: "bold" }} data-oid="u_d3fqe">
            4L treatment:
          </span>
          <span data-oid="yi:4k5:"> ENHERTU</span>
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: "950px",
          left: "268px",
          width: "812px",
          height: "28px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:1811"
        data-oid="cn91jdo"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="z5sps_h">
          Kidney function, electrolytes, blood cell count and liver enzymes
          assessed
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: "1074px",
          left: "268px",
          width: "812px",
          height: "57px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:1812"
        data-oid="4x07js6"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="477qt-4">
          Grade 2 nausea and vomiting resolves one week following the
        </p>
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="op.es..">
          addition of a NK-1 RA to the antiemetic regimen
        </p>
      </div>

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
        data-node-id="52:1805"
        onClick={onContinueClick}
        data-oid="yn-qrnk"
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
          data-oid="y.-k4pq"
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
            data-oid="nf7dt4b"
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
          data-oid="tje35rv"
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
            data-oid=":v9p-4r"
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
          data-oid=".x1.2sp"
        >
          <p style={{ margin: 0, lineHeight: "54px" }} data-oid="cn5e6sh">
            Patient progress
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
        data-node-id="52:1804"
        data-oid="8u_3esl"
      >
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="1i_vqb3">
          Hypothetical case built with input from Dr Simon Gampenrieder,
          University Hospital Salzburg, Austria.
        </p>
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="hrdo-:5">
          4L, forth-line; 5‑HT3, 5-hydroxytryptamine 3; AE, adverse event; CT,
          computed tomography; NK-1, neurokinin 1.
        </p>
      </div>
    </div>
  );
}
