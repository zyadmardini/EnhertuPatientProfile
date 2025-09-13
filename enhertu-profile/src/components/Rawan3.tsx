// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgEllipse1 = "/assets/db308337d318d47455cdd2ec15957a37c39e11c5.svg";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgButtonIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/f8ad3cb06636bbdce58ed554dab28926df612b1b.svg";
const imgOrangeArrow = "/assets/449687bc227799e152eb96fdc69677fa8e91bc43.svg";
const imgEllipse7 = "/assets/5074d8c1d2f2a69f48812317ed1417116c392ebd.svg";

interface Rawan3Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Rawan3({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Rawan3Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-oid="dparar7"
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
        data-oid=".5oe7nf"
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
        data-oid=".o:h3hy"
      >
        ⌂
      </div>

      {/* Header background */}
      <div
        data-enter
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "756px",
          height: "27px",
          background: "linear-gradient(to right, #ec7624, #ffb061)",
          zIndex: 2,
        }}
        data-oid="5cl8:9l"
      />

      {/* Main background */}
      <div
        data-enter
        style={{
          position: "absolute",
          top: "27px",
          left: "0px",
          width: "1080px",
          height: "1920px",
          backgroundColor: "#ffffff",
          zIndex: 1,
        }}
        data-oid="4vj-2y9"
      />

      {/* Case Study Title */}
      <div
        data-enter
        data-enter-order="1"
        style={{
          position: "absolute",
          top: "167px",
          left: "73px",
          width: "656px",
          height: "80px",
          fontSize: "50px",
          fontWeight: "bold",
          color: "#5b6670",
          fontFamily: "Inter, sans-serif",
          zIndex: 3,
        }}
        data-oid="b8epeex"
      >
        Case Study: Rawan
      </div>

      {/* Patient Image Container */}
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
        data-oid=".c4d7c0"
      >
        <img
          src={imgEllipse1}
          alt="Patient background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          data-oid="l10t7y7"
        />

        <img
          src={imgRawan}
          alt="Rawan"
          style={{
            position: "absolute",
            top: "25px",
            left: "22px",
            width: "396px",
            height: "390px",
            objectFit: "cover",
          }}
          data-oid="yb9nenf"
        />
      </div>

      {/* Section Title */}
      <div
        data-enter
        data-enter-order="3"
        style={{
          position: "absolute",
          top: "409px",
          left: "534px",
          width: "495px",
          height: "173px",
          fontSize: "45px",
          fontWeight: "bold",
          color: "#250858",
          fontFamily: "Inter, sans-serif",
          zIndex: 3,
        }}
        data-oid="q68wwtx"
      >
        Disease progresses following 1L CDK4/6i + ET and 2L ET + PI3Ki
      </div>

      {/* Patient Details Container */}
      <div
        data-enter-group
        data-enter-order="4"
        style={{
          position: "absolute",
          top: "805px",
          left: "73px",
          width: "1007px",
          height: "625px",
          zIndex: 1,
        }}
        data-oid=".u2_jzp"
      >
        {/* Row 1 */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "134px",
            width: "873px",
            height: "96px",
            backgroundColor: "#ffd2a9",
            zIndex: 1,
          }}
          data-oid="tb81qwa"
        />

        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "186px",
            height: "96px",
            backgroundColor: "#ee7623",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
            zIndex: 2,
          }}
          data-oid="wi9b-7n"
        />

        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "195px",
            width: "812px",
            height: "57px",
            fontSize: "24px",
            fontWeight: "500",
            color: "#5d6771",
            fontFamily: "Inter, sans-serif",
            zIndex: 6,
          }}
          data-oid="x2rzt6-"
        >
          71-year-old woman from Spain with invasive ductal carcinoma of the
          right breast
        </div>

        {/* Row 2 */}
        <div
          style={{
            position: "absolute",
            top: "125px",
            left: "134px",
            width: "873px",
            height: "96px",
            backgroundColor: "#ffd2a9",
            zIndex: 1,
          }}
          data-oid="4jqpqxz"
        />

        <div
          style={{
            position: "absolute",
            top: "125px",
            left: "0px",
            width: "186px",
            height: "96px",
            backgroundColor: "#ffb061",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
            zIndex: 2,
          }}
          data-oid="xmc:df6"
        />

        <div
          style={{
            position: "absolute",
            top: "145px",
            left: "195px",
            width: "812px",
            height: "57px",
            fontSize: "24px",
            fontWeight: "500",
            color: "#5d6771",
            fontFamily: "Inter, sans-serif",
            zIndex: 6,
          }}
          data-oid="3qgzvwq"
        >
          <span style={{ fontWeight: "bold" }} data-oid="i25m53_">
            Initial presentation:
          </span>{" "}
          cT4b (27mm) cNx M1 (pleural, lymph nodes, bone, suspected liver
          metastases)
        </div>

        {/* Row 3 */}
        <div
          style={{
            position: "absolute",
            top: "250px",
            left: "134px",
            width: "873px",
            height: "96px",
            backgroundColor: "#ffd2a9",
            zIndex: 1,
          }}
          data-oid="4jli-s3"
        />

        <div
          style={{
            position: "absolute",
            top: "250px",
            left: "0px",
            width: "186px",
            height: "96px",
            backgroundColor: "#ffb061",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
            zIndex: 2,
          }}
          data-oid="rrx-kw3"
        />

        <div
          style={{
            position: "absolute",
            top: "282px",
            left: "195px",
            width: "812px",
            height: "28px",
            fontSize: "24px",
            fontWeight: "500",
            color: "#5d6771",
            fontFamily: "Inter, sans-serif",
            zIndex: 6,
          }}
          data-oid="kmfcs5p"
        >
          <span style={{ fontWeight: "bold" }} data-oid="lcadzjr">
            HR status:
          </span>{" "}
          Positive (ER [100%], PR [70%])
        </div>

        {/* Row 4 */}
        <div
          style={{
            position: "absolute",
            top: "375px",
            left: "134px",
            width: "873px",
            height: "96px",
            backgroundColor: "#ffd2a9",
            zIndex: 1,
          }}
          data-oid="f3inz-d"
        />

        <div
          style={{
            position: "absolute",
            top: "375px",
            left: "0px",
            width: "186px",
            height: "96px",
            backgroundColor: "#ee7623",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
            zIndex: 2,
          }}
          data-oid="58_aoi8"
        />

        <div
          style={{
            position: "absolute",
            top: "408px",
            left: "195px",
            width: "812px",
            height: "57px",
            fontSize: "24px",
            fontWeight: "500",
            color: "#5d6771",
            fontFamily: "Inter, sans-serif",
            zIndex: 6,
          }}
          data-oid="yuumsco"
        >
          <span style={{ fontWeight: "bold" }} data-oid="9l5.l76">
            HER2 status:
          </span>{" "}
          HER2-low (IHC 1+)
        </div>

        {/* Row 5 */}
        <div
          style={{
            position: "absolute",
            top: "500px",
            left: "134px",
            width: "873px",
            height: "96px",
            backgroundColor: "#ffd2a9",
            zIndex: 1,
          }}
          data-oid="iun2bqr"
        />

        <div
          style={{
            position: "absolute",
            top: "500px",
            left: "0px",
            width: "186px",
            height: "96px",
            backgroundColor: "#ffb061",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
            zIndex: 2,
          }}
          data-oid="xad5:b."
        />

        <div
          style={{
            position: "absolute",
            top: "533px",
            left: "195px",
            width: "812px",
            height: "57px",
            fontSize: "24px",
            fontWeight: "500",
            color: "#5d6771",
            fontFamily: "Inter, sans-serif",
            zIndex: 6,
          }}
          data-oid="0xk6cr2"
        >
          <span style={{ fontWeight: "bold" }} data-oid="mycezum">
            Ki-67:
          </span>{" "}
          40%, Grade 2
        </div>

        {/* Row 6 */}
        <div
          style={{
            position: "absolute",
            top: "625px",
            left: "134px",
            width: "873px",
            height: "96px",
            backgroundColor: "#ffd2a9",
            zIndex: 1,
          }}
          data-oid="j7s_swu"
        />

        <div
          style={{
            position: "absolute",
            top: "625px",
            left: "0px",
            width: "186px",
            height: "96px",
            backgroundColor: "#ffb061",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
            zIndex: 2,
          }}
          data-oid="90oivx9"
        />

        <div
          style={{
            position: "absolute",
            top: "658px",
            left: "195px",
            width: "812px",
            height: "57px",
            fontSize: "24px",
            fontWeight: "500",
            color: "#5d6771",
            fontFamily: "Inter, sans-serif",
            zIndex: 6,
          }}
          data-oid="714:._r"
        >
          <span style={{ fontWeight: "bold" }} data-oid="c8i1ez9">
            PIK3CA-mutation:
          </span>{" "}
          Exon 10
        </div>

        {/* Icons */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "97px",
            width: "78px",
            height: "78px",
            zIndex: 10,
          }}
          data-oid="-ocx26m"
        >
          <img
            src={imgEllipse7}
            alt="1L icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            data-oid="aoe6m:7"
          />

          <div
            style={{
              position: "absolute",
              top: "25px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#ee7623",
              fontFamily: "Inter, sans-serif",
              textAlign: "center",
            }}
            data-oid="qlnec4j"
          >
            1L
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "134px",
            left: "97px",
            width: "78px",
            height: "78px",
            zIndex: 10,
          }}
          data-oid="7p.j04w"
        >
          <img
            src={imgOrangeArrow}
            alt="2L icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            data-oid=":7b6l_6"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "259px",
            left: "97px",
            width: "78px",
            height: "78px",
            zIndex: 10,
          }}
          data-oid="xws.007"
        >
          <img
            src={imgOrangeArrow}
            alt="3L icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            data-oid=":smqb5f"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "384px",
            left: "97px",
            width: "78px",
            height: "78px",
            zIndex: 10,
          }}
          data-oid="bsh6e6q"
        >
          <img
            src={imgVector}
            alt="4L icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            data-oid="hn8qlw2"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "509px",
            left: "97px",
            width: "78px",
            height: "78px",
            zIndex: 10,
          }}
          data-oid="_hyhzyu"
        >
          <img
            src={imgOrangeArrow}
            alt="5L icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            data-oid="_epoq4s"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "634px",
            left: "97px",
            width: "78px",
            height: "78px",
            zIndex: 10,
          }}
          data-oid="212ylj2"
        >
          <img
            src={imgOrangeArrow}
            alt="6L icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            data-oid="l0f6cup"
          />
        </div>
      </div>

      {/* Progression Button */}
      <div
        data-enter
        data-enter-order="5"
        style={{
          position: "absolute",
          top: "1615px",
          left: "191px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
        }}
        onClick={onContinueClick}
        data-oid="nl3d57g"
      >
        <img
          src={imgButton}
          alt="Progression button"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          data-oid="5ud9c1z"
        />

        <img
          src={imgButtonIcon}
          alt="Button icon"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "115px",
            height: "112px",
            objectFit: "cover",
          }}
          data-oid="1_cl.hh"
        />

        <div
          style={{
            position: "absolute",
            top: "32px",
            left: "123px",
            right: "29px",
            bottom: "32px",
            fontSize: "31px",
            fontWeight: "bold",
            color: "#ffffff",
            fontFamily: "Inter, sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          data-oid="mkez2ll"
        >
          Progression
        </div>
      </div>

      {/* Footer Text */}
      <div
        data-enter
        data-enter-order="6"
        style={{
          position: "absolute",
          top: "1853px",
          left: "105px",
          width: "953px",
          height: "30px",
          fontSize: "12px",
          fontWeight: "500",
          color: "#000000",
          fontFamily: "Inter, sans-serif",
          zIndex: 3,
        }}
        data-oid="6l794mj"
      >
        <div data-oid="0_cyt:x">
          Hypothetical case built with input from Dr Simon Gampenrieder,
          University Hospital Salzburg, Austria.
        </div>
        <div data-oid="yt6555o">
          1/2/3L, first/second/third-line; CT, computed tomography; mo, month.
        </div>
      </div>
    </div>
  );
}
