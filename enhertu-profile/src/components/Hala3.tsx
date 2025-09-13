// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgEllipse1 = "/assets/adcaf288b3552b47e9a3f82d04a05faf637e433f.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgArrow = "/assets/d14039ca8b9aa1ecdb57c4b396d6a3640f644835.svg";
const imgVector1 = "/assets/b5a9b83c49f55a9f42fed0dd52c8061cf5ca49af.svg";

interface Hala3Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala3({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala3Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-oid="oj631yv"
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
        data-oid="v._1upo"
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
        data-oid="kp:ez4v"
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
        data-oid="3bc9d_x"
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
        data-oid="-9180ol"
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
        data-oid="77a4bnm"
      >
        <img
          src={imgEllipse1}
          alt="Patient background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="yim-mj1"
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
          data-oid="3jj.8yd"
        />
      </div>

      {/* Section Title */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          left: "534px",
          top: "358px",
          width: "481px",
          height: "192px",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#250858",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.2",
          zIndex: 3,
        }}
        data-oid="7aj1dyi"
      >
        Patient progresses after
        <br data-oid="y9b8yk:" />
        less than one year of 1L
        <br data-oid="ss8ls-f" />
        chemotherapy + pembrolizumab
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
          height: "250px",
          zIndex: 1,
        }}
        data-oid="0nbh52w"
      >
        {/* Row 1 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "96px",
            marginBottom: "29px",
          }}
          data-oid="giptet2"
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
            data-oid="elcbii9"
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
            data-oid="-i_gv8s"
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
            data-oid="fdayxzb"
          >
            <span style={{ fontWeight: "bold" }} data-oid="pf0yofx">
              1L treatment:{" "}
            </span>
            <span data-oid="lguw6ed">Paclitaxel + pembrolizumab</span>
          </div>
          <div
            style={{
              position: "absolute",
              left: "97px",
              top: "10px",
              width: "78px",
              height: "78px",
              zIndex: 5,
            }}
            data-oid="soeb9n6"
          >
            <img
              src={imgVector1}
              alt="Treatment icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              data-oid="gr5lqw8"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "96px",
            marginBottom: "29px",
          }}
          data-oid="mo-ie63"
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
            data-oid="34x5mq9"
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
            data-oid="qeddwx3"
          />

          <div
            style={{
              position: "absolute",
              left: "195px",
              top: "20px",
              width: "767px",
              height: "57px",
              fontSize: "21px",
              fontWeight: "500",
              color: "#5d6771",
              fontFamily: "Inter, sans-serif",
              lineHeight: "1.3",
              zIndex: 6,
            }}
            data-oid="42.910d"
          >
            Remained on therapy for 9 months, taxane stopped after 6 months as
            she began to have neuropathy, and then continued pembrolizumab
            maintenance
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
            data-oid="yis2sea"
          >
            <img
              src={imgArrow}
              alt="Treatment icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              data-oid="xkzay71"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div
          style={{ position: "relative", width: "100%", height: "96px" }}
          data-oid="og0m13p"
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
            data-oid="mxadq_e"
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
            data-oid="3gxf7bv"
          />

          <div
            style={{
              position: "absolute",
              left: "195px",
              top: "34px",
              width: "812px",
              height: "28px",
              fontSize: "24px",
              fontWeight: "500",
              color: "#5d6771",
              fontFamily: "Inter, sans-serif",
              zIndex: 6,
            }}
            data-oid="sdpyx20"
          >
            <span style={{ fontWeight: "bold" }} data-oid="l.0l8g1">
              CT (9 mo):{" "}
            </span>
            <span data-oid="9n_wo2:">
              Progressive disease (liver, skin, lymph nodes)
            </span>
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
            data-oid="30_n05-"
          >
            <img
              src={imgArrow}
              alt="Treatment icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              data-oid=":dd31xk"
            />
          </div>
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
        data-oid="ezlbbg-"
      >
        <img
          src={imgButton}
          alt="Treatment button"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="dtia5a1"
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
          data-oid="y5ode1z"
        >
          Next treatment options
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
          data-oid="rtd-bx3"
        >
          <img
            src={imgIcon}
            alt="Button icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="j0hgys4"
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
        data-oid="p5_9j8n"
      >
        Hypothetical case built with input from Dr Simon Gampenrieder,
        University Hospital Salzburg, Austria. 1L, first-line; CT, computed
        tomography; mBC, metastatic breast cancer.
      </div>
    </div>
  );
}
