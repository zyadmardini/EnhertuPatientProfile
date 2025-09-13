// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgEllipse1 = "/assets/adcaf288b3552b47e9a3f82d04a05faf637e433f.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgArrow = "/assets/d14039ca8b9aa1ecdb57c4b396d6a3640f644835.svg";
const imgVector1 = "/assets/6f82aabe414ccc67ac0e97cf5c0219a0ea24cb55.svg";

interface Hala5Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala5({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala5Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-oid="78x75e5"
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
        data-oid="ezv0_o4"
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
        data-oid="di6k.um"
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
        data-oid="w4b5i73"
      />

      {/* Case Study Title */}
      <div
        data-enter
        data-enter-delay="0.1"
        style={{
          position: "absolute",
          left: "73px",
          top: "167px",
          width: "656px",
          height: "80px",
          fontSize: "50px",
          fontWeight: "bold",
          color: "#5b6670",
          fontFamily: "Inter, sans-serif",
          zIndex: 3,
        }}
        data-oid="dpt_4aq"
      >
        Case Study: Hala
      </div>

      {/* Patient Image Container */}
      <div
        data-enter
        data-enter-delay="0.2"
        style={{
          position: "absolute",
          left: "73px",
          top: "247px",
          width: "440px",
          height: "440px",
          zIndex: 4,
        }}
        data-oid="3:-uf76"
      >
        <img
          src={imgEllipse1}
          alt="Patient background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="tnsb.da"
        />

        <div
          style={{
            position: "absolute",
            left: "25px",
            top: "25px",
            width: "388px",
            height: "390px",
            backgroundImage: `url('${imgHala}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
          }}
          data-oid="241jub."
        />
      </div>

      {/* Section Title */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          left: "534px",
          top: "419px",
          width: "481px",
          height: "96px",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#250858",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.2",
          zIndex: 3,
        }}
        data-oid="74jehvn"
      >
        Patient is counselled on ENHERTU treatment
      </div>

      {/* Treatment Timeline */}
      <div
        data-enter-group
        data-enter-delay="0.4"
        data-enter-stagger="0.1"
        style={{
          position: "absolute",
          left: "73px",
          top: "805px",
          width: "1007px",
          height: "125px",
          zIndex: 1,
        }}
        data-oid="w9xin1-"
      >
        {/* Row 1 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "96px",
            marginBottom: "29px",
          }}
          data-oid="c.et.ys"
        >
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              width: "186px",
              height: "96px",
              backgroundColor: "#8c66c6",
              borderTopRightRadius: "60px",
              borderBottomRightRadius: "60px",
              zIndex: 2,
            }}
            data-oid="9.soa5b"
          />

          <div
            style={{
              position: "absolute",
              left: "134px",
              top: "0px",
              width: "873px",
              height: "96px",
              backgroundColor: "#dcd2ec",
              zIndex: 1,
            }}
            data-oid="st.::v0"
          />

          <div
            style={{
              position: "absolute",
              left: "195px",
              top: "25px",
              width: "812px",
              height: "61px",
              fontSize: "24px",
              fontWeight: "500",
              color: "#5d6771",
              fontFamily: "Inter, sans-serif",
              lineHeight: "1.2",
              zIndex: 6,
            }}
            data-oid="bdeim_0"
          >
            <span style={{ fontWeight: "bold" }} data-oid="0hx3uan">
              ILD/pneumonitis risk evaluation:{" "}
            </span>
            <span data-oid="p_zwk:4">baseline CT and pulmonary</span>
            <br data-oid="rg_cvps" />
            <span data-oid="ylyt0-a">function tests</span>
          </div>
          <div
            style={{
              position: "absolute",
              left: "97px",
              top: "8px",
              width: "78px",
              height: "78px",
              zIndex: 5,
            }}
            data-oid="3djg9cs"
          >
            <img
              src={imgArrow}
              alt="Treatment icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              data-oid="-.1g_zv"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div
          style={{ position: "relative", width: "100%", height: "96px" }}
          data-oid="y1z2n-4"
        >
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              width: "186px",
              height: "96px",
              backgroundColor: "#58378a",
              borderTopRightRadius: "60px",
              borderBottomRightRadius: "60px",
              zIndex: 2,
            }}
            data-oid="oxfhk6p"
          />

          <div
            style={{
              position: "absolute",
              left: "134px",
              top: "0px",
              width: "873px",
              height: "96px",
              backgroundColor: "#dcd2ec",
              zIndex: 1,
            }}
            data-oid="d:vxe1c"
          />

          <div
            style={{
              position: "absolute",
              left: "195px",
              top: "34px",
              width: "767px",
              height: "28px",
              fontSize: "21px",
              fontWeight: "500",
              color: "#5d6771",
              fontFamily: "Inter, sans-serif",
              zIndex: 6,
            }}
            data-oid=".5kvw9q"
          >
            <span style={{ fontWeight: "bold" }} data-oid="o4nci8r">
              2L treatment:{" "}
            </span>
            <span data-oid="v4kzdwg">ENHERTU (5.4 mg/kg)</span>
          </div>
          <div
            style={{
              position: "absolute",
              left: "97px",
              top: "9px",
              width: "78px",
              height: "78px",
              zIndex: 5,
            }}
            data-oid="jepg2t0"
          >
            <img
              src={imgVector1}
              alt="Treatment icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              data-oid="x0:5dcl"
            />
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          left: "73px",
          top: "1122px",
          width: "942px",
          height: "116px",
          backgroundColor: "#f3f7d9",
          border: "4px solid #c5d752",
          zIndex: 1,
        }}
        data-oid="3u0s.in"
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "902px",
            height: "95px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#5d6771",
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
            lineHeight: "1.2",
            zIndex: 6,
          }}
          data-oid="2yoa.e0"
        >
          Patients with a history of ILD/pneumonitis or patients with moderate
          or severe renal impairment may be at increased risk of developing
          ILD/pneumonitis and should be monitored carefully
        </div>
      </div>

      {/* Treatment Button */}
      <div
        data-enter
        data-enter-delay="0.8"
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
        data-oid="s8k411s"
      >
        <img
          src={imgButton}
          alt="Treatment button"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="z-8so3m"
        />

        <div
          style={{
            position: "absolute",
            left: "123px",
            top: "32px",
            width: "453px",
            height: "48px",
            fontSize: "31px",
            fontWeight: "bold",
            color: "white",
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
            lineHeight: "54px",
            zIndex: 101,
          }}
          data-oid="7u2.enl"
        >
          Push the Paradigm
        </div>
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "115px",
            height: "112px",
            zIndex: 101,
          }}
          data-oid="v-e.wro"
        >
          <img
            src={imgIcon}
            alt="Button icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="vy60r6q"
          />
        </div>
      </div>

      {/* Footer Text */}
      <div
        data-enter
        data-enter-delay="0.9"
        style={{
          position: "absolute",
          left: "105px",
          top: "1853px",
          width: "953px",
          height: "30px",
          fontSize: "12px",
          fontWeight: "500",
          color: "black",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.25",
          zIndex: 6,
        }}
        data-oid=".9xdxrj"
      >
        Hypothetical case built with input from Dr Simon Gampenrieder,
        University Hospital Salzburg, Austria. 1/2/3L, first/second/third-line;
        CDK4/6i, cyclin-dependent kinase 4/6 inhibitor; CT, computed tomography;
        ET, endocrine therapy.
      </div>
    </div>
  );
}
