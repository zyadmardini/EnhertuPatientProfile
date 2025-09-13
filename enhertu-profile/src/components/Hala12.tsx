// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgImage20 = "/assets/ff85baef57f5e36cc5e9fb141ba73a014711c5d7.png";
const imgImage21 = "/assets/48ac46f722f9a6b6efc149dc1b9fd3c4f17f6e84.png";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgEllipse1 = "/assets/4298bae82b56e0e6f3ac600c0f7ea72cbd3cf8ca.svg";
const imgArrow = "/assets/d14039ca8b9aa1ecdb57c4b396d6a3640f644835.svg";
const imgVector1 = "/assets/1fe052569232ce06dd46baa54bc2f658d8ca935d.svg";

interface Hala12Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala12({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala12Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-oid="l7e3l_u"
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
        data-oid="rup.yi7"
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
        data-oid="j:gdds5"
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
          zIndex: 1,
        }}
        data-oid="_jsc10u"
      />

      {/* Main title */}
      <div
        data-enter
        data-enter-delay="0.1"
        style={{
          position: "absolute",
          left: "73px",
          top: "167px",
          width: "656px",
          height: "80px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "50px",
          color: "#5b6670",
          zIndex: 6,
        }}
        data-oid="9qw55bm"
      >
        Case Study: Hala
      </div>

      {/* Patient photo background ellipse */}
      <div
        data-enter
        data-enter-delay="0.2"
        style={{
          position: "absolute",
          left: "73px",
          top: "247px",
          width: "440px",
          height: "440px",
          zIndex: 1,
        }}
        data-oid="vvm5ns6"
      >
        <img
          src={imgEllipse1}
          alt="Patient background"
          style={{ width: "100%", height: "100%" }}
          data-oid="0.vhut0"
        />
      </div>

      {/* Patient photo */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          left: "98px",
          top: "271px",
          width: "396px",
          height: "390px",
          zIndex: 4,
        }}
        data-oid="0157pyz"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url('${imgHala}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
          }}
          data-oid="roemirx"
        />
      </div>

      {/* Section title */}
      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          left: "534px",
          top: "358px",
          width: "481px",
          height: "144px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "40px",
          color: "#250858",
          zIndex: 6,
        }}
        data-oid="yd-dt91"
      >
        Patient develops ENHERTU‑related ILD/pneumonitis
      </div>

      {/* Treatment section 1 - Background */}
      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          left: "73px",
          top: "805px",
          width: "186px",
          height: "96px",
          backgroundColor: "#58378a",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-oid="vkmlkpf"
      />

      {/* Treatment section 1 - Content background */}
      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          left: "207px",
          top: "805px",
          width: "873px",
          height: "96px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="6jamkc2"
      />

      {/* Treatment section 1 - Icon */}
      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          left: "170px",
          top: "815px",
          width: "78px",
          height: "78px",
          zIndex: 4,
        }}
        data-oid="dz3d7gm"
      >
        <img
          src={imgVector1}
          alt="Treatment icon"
          style={{ width: "100%", height: "100%" }}
          data-oid="g41q23g"
        />
      </div>

      {/* Treatment section 1 - Text */}
      <div
        data-enter
        data-enter-delay="0.7"
        style={{
          position: "absolute",
          left: "268px",
          top: "840px",
          width: "812px",
          height: "29px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "24px",
          color: "#5d6771",
          zIndex: 6,
        }}
        data-oid="1ercr87"
      >
        <span style={{ fontWeight: "bold" }} data-oid="9j5f0z:">
          2L treatment:
        </span>
        <span data-oid="ia183kj"> ENHERTU (5.4 mg/kg)</span>
      </div>

      {/* Treatment section 2 - Background */}
      <div
        data-enter
        data-enter-delay="0.8"
        style={{
          position: "absolute",
          left: "73px",
          top: "930px",
          width: "186px",
          height: "96px",
          backgroundColor: "#8c66c6",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-oid="n1j2n2g"
      />

      {/* Treatment section 2 - Content background */}
      <div
        data-enter
        data-enter-delay="0.8"
        style={{
          position: "absolute",
          left: "207px",
          top: "930px",
          width: "873px",
          height: "96px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="1nikdk3"
      />

      {/* Treatment section 2 - Icon */}
      <div
        data-enter
        data-enter-delay="0.9"
        style={{
          position: "absolute",
          left: "170px",
          top: "939px",
          width: "78px",
          height: "78px",
          zIndex: 4,
        }}
        data-oid="d47-yap"
      >
        <img
          src={imgArrow}
          alt="Treatment icon"
          style={{ width: "100%", height: "100%" }}
          data-oid="oqd0p8v"
        />
      </div>

      {/* Treatment section 2 - Text */}
      <div
        data-enter
        data-enter-delay="1.0"
        style={{
          position: "absolute",
          left: "268px",
          top: "950px",
          width: "767px",
          height: "57px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "21px",
          color: "#5d6771",
          zIndex: 6,
        }}
        data-oid="ieh370o"
      >
        <span style={{ fontWeight: "bold" }} data-oid="6yc9-q9">
          CT (2 mo):{" "}
        </span>
        <span data-oid="0_k70f1">
          Partial response (lymph nodes, skin, liver) but right upper lobe
          pneumonitis
        </span>
      </div>

      {/* Pre-ENHERTU label */}
      <div
        data-enter
        data-enter-delay="1.1"
        style={{
          position: "absolute",
          left: "137px",
          top: "1089px",
          width: "339px",
          height: "27px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          textAlign: "center",
          zIndex: 6,
        }}
        data-oid="x8wglvp"
      >
        Pre-ENHERTU
      </div>

      {/* Post Cycle 3 label */}
      <div
        data-enter
        data-enter-delay="1.1"
        style={{
          position: "absolute",
          left: "627px",
          top: "1089px",
          width: "339px",
          height: "27px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          textAlign: "center",
          zIndex: 6,
        }}
        data-oid="mlmw7x4"
      >
        Post Cycle 3
      </div>

      {/* Pneumonitis indicator line */}
      <div
        data-enter
        data-enter-delay="1.2"
        style={{
          position: "absolute",
          left: "683px",
          top: "1133px",
          width: "225px",
          height: "57px",
          backgroundColor: "#250858",
          transform: "rotate(0.378deg)",
          zIndex: 2,
        }}
        data-oid="2bevlsy"
      />

      {/* Pneumonitis label */}
      <div
        data-enter
        data-enter-delay="1.3"
        style={{
          position: "absolute",
          left: "707px",
          top: "1138px",
          width: "183px",
          height: "45px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#ffffff",
          textAlign: "center",
          zIndex: 6,
        }}
        data-oid="t2i-.9d"
      >
        Right upper lobe pneumonitis
      </div>

      {/* CT Scan Image 1 */}
      <div
        data-enter
        data-enter-delay="1.4"
        style={{
          position: "absolute",
          left: "73px",
          top: "1208px",
          width: "436px",
          height: "357px",
          backgroundImage: `url('${imgImage21}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="a1c2_-l"
      />

      {/* CT Scan Image 2 */}
      <div
        data-enter
        data-enter-delay="1.5"
        style={{
          position: "absolute",
          left: "571px",
          top: "1208px",
          width: "436px",
          height: "357px",
          backgroundImage: `url('${imgImage20}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="tpw.-jt"
      />

      {/* Continue button */}
      <div
        data-enter
        data-enter-delay="1.6"
        style={{
          position: "absolute",
          left: "191px",
          top: "1615px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 6,
        }}
        onClick={onContinueClick}
        data-oid="djqlg0."
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
          data-oid="yksvdrr"
        >
          <img
            src={img}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid=":6jvc53"
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
          data-oid="c7e72da"
        >
          <img
            src={img1}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="k0dige7"
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
          data-oid=".nd_wle"
        >
          AE management Guidance
        </div>
      </div>

      {/* Footer text */}
      <div
        data-enter
        data-enter-delay="1.7"
        style={{
          position: "absolute",
          left: "105px",
          top: "1853px",
          width: "953px",
          height: "30px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "12px",
          color: "#000000",
          zIndex: 6,
        }}
        data-oid="_0ig.zg"
      >
        <p style={{ margin: "0", lineHeight: "15px" }} data-oid="f_b0ty1">
          Hypothetical case built with input from Dr Simon Gampenrieder,
          University Hospital Salzburg, Austria.
        </p>
        <p style={{ margin: "0", lineHeight: "15px" }} data-oid="6q-bge-">
          3L, third-line; CT, computed tomography; ILD, interstitial lung
          disease.
        </p>
      </div>
    </div>
  );
}
