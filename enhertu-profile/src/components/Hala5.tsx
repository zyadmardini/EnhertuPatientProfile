// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgEllipse1 = "/assets/4298bae82b56e0e6f3ac600c0f7ea72cbd3cf8ca.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgEllipse3 = "/assets/5074d8c1d2f2a69f48812317ed1417116c392ebd.svg";
const imgEllipse9 = "/assets/a947a2dc0e331bf8e80392950dea86a9c3ab32b6.svg";
const imgImage13 = "/assets/37dc348c1b12fb1b6c174225bc77567c243e74cd.png";
const imgImage12 = "/assets/bda9be24ca577095994136511735681979b3b606.png";
const imgImage14 = "/assets/5000dd7237725db7519d67dcb0fc2e30ebe0215c.png";

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
      data-oid="kqyv6.1"
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
        data-oid="atg_oha"
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
        data-oid="gsy:f1y"
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
        data-oid="qoy6wv_"
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
        data-oid="qehx2e6"
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
        data-oid="ujiesry"
      >
        <img
          src={imgEllipse1}
          alt="Patient background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="bmuhxdr"
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
          data-oid="5s9_37v"
        />
      </div>

      {/* Section Title */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          left: "534px",
          top: "412px",
          width: "481px",
          height: "108px",
          fontSize: "45px",
          fontWeight: "bold",
          color: "#250858",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.2",
          zIndex: 3,
        }}
        data-oid="0v061wf"
      >
        Patient starts ENHERTU treatment
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
        data-oid="r20eoxq"
      >
        {/* Row 1 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "96px",
            marginBottom: "29px",
          }}
          data-oid="45apu59"
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
            data-oid="y0e8mc9"
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
            data-oid="c9m_3_m"
          />

          <div
            style={{
              position: "absolute",
              left: "195px",
              top: "35px",
              width: "812px",
              height: "29px",
              fontSize: "24px",
              fontWeight: "500",
              color: "#5d6771",
              fontFamily: "Inter, sans-serif",
              zIndex: 6,
            }}
            data-oid="a9:8qd0"
          >
            Post‑chemotherapy treatment considerations
          </div>
        </div>

        {/* Row 2 */}
        <div
          style={{ position: "relative", width: "100%", height: "96px" }}
          data-oid="1zjl5_g"
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
            data-oid="xch:rso"
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
            data-oid=".n2hnbk"
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
            data-oid="d-vd3-0"
          >
            Discussing ENHERTU treatment with the patient
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
            data-oid="t.o2hio"
          >
            <img
              src={imgEllipse3}
              alt="Treatment icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              data-oid="fa-auzf"
            />

            <div
              style={{
                position: "absolute",
                left: "15px",
                top: "15px",
                width: "47px",
                height: "47px",
                backgroundImage: `url('${imgImage13}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              data-oid="equ8h97"
            />
          </div>
        </div>
      </div>

      {/* Patient Counselling Box */}
      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          left: "193px",
          top: "1116px",
          width: "822px",
          height: "238px",
          backgroundColor: "#f3f7d9",
          zIndex: 1,
        }}
        data-oid="p18.px8"
      >
        <div
          style={{
            position: "absolute",
            left: "155px",
            top: "16px",
            width: "652px",
            height: "206px",
            fontSize: "24px",
            fontWeight: "500",
            color: "#5d6771",
            fontFamily: "Inter, sans-serif",
            lineHeight: "1.2",
            zIndex: 6,
          }}
          data-oid="o6mvra7"
        >
          <div
            style={{ fontWeight: "bold", marginBottom: "8px" }}
            data-oid="81ugsx1"
          >
            Patient counselling:
          </div>
          <ul style={{ paddingLeft: "20px", margin: 0 }} data-oid="th.ar2_">
            <li style={{ marginBottom: "8px" }} data-oid="-8ep5wk">
              Includes a discussion on the risk of associated side effects of
              ENHERTU including but not limited to nausea, vomiting,
              neutropenia, and ILD/pneumonitis¹
            </li>
            <li data-oid="i9c0o39">
              Empowers patients to actively participate in the management of
              their disease, establishes treatment expectation and supports AE
              management
            </li>
          </ul>
        </div>
      </div>

      {/* Treatment Icons */}
      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          left: "170px",
          top: "814px",
          width: "78px",
          height: "78px",
          zIndex: 5,
        }}
        data-oid="l:-4a88"
      >
        <img
          src={imgEllipse3}
          alt="Treatment icon"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="8rrpm4i"
        />

        <div
          style={{
            position: "absolute",
            left: "15px",
            top: "15px",
            width: "48px",
            height: "48px",
            backgroundImage: `url('${imgImage12}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          data-oid="pyh_48q"
        />
      </div>

      {/* Large Patient Image */}
      <div
        data-enter
        data-enter-delay="0.7"
        style={{
          position: "absolute",
          left: "63px",
          top: "1105px",
          width: "260px",
          height: "260px",
          zIndex: 4,
        }}
        data-oid="s4_rqha"
      >
        <img
          src={imgEllipse9}
          alt="Patient image background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="bwy9kt1"
        />

        <div
          style={{
            position: "absolute",
            left: "11px",
            top: "10px",
            width: "236px",
            height: "240px",
            backgroundImage: `url('${imgImage14}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          data-oid="z3_q0pk"
        />
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
        data-oid="-_3qm7o"
      >
        <img
          src={imgButton}
          alt="Treatment button"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="ujpu5h3"
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
          data-oid="wiq-q62"
        >
          Decision
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
          data-oid="i3ysjy5"
        >
          <img
            src={imgIcon}
            alt="Button icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="vci_kkp"
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
          top: "1838px",
          width: "953px",
          height: "45px",
          fontSize: "12px",
          fontWeight: "500",
          color: "black",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.25",
          zIndex: 6,
        }}
        data-oid="ahx00xe"
      >
        Hypothetical case built with input from Dr Simon Gampenrieder,
        University Hospital Salzburg, Austria. AE, adverse event. 1. Bardia, A.
        et al. The Oncologist, 2022, 1–9.
      </div>
    </div>
  );
}