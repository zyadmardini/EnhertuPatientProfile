// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgVector = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";
const imgVector1 = "/assets/556e8b421952909999b8115f6ca26af0a8b00cad.svg";
const imgVector2 = "/assets/973c03738673ce966a370ad367fdb736a0a89428.svg";

interface Hala1Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala1({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala1Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#f5ad7b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "338.953px",
        paddingBottom: "168px",
        paddingLeft: "69.939px",
        paddingRight: "105px",
        gap: "85px",
      }}
      data-oid="ou2tdvo"
    >
      {/* Back Button */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          width: "60px",
          height: "60px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#5b6670",
          zIndex: 100,
        }}
        onClick={onBackClick}
        data-oid="oetpjr_"
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
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#5b6670",
          zIndex: 100,
        }}
        onClick={onHomeClick}
        data-oid="4426sh8"
      >
        ⌂
      </div>

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "68.021px",
        }}
        data-oid="ug0o1q3"
      >
        {/* Image Container */}
        <div
          data-enter-group
          data-enter-order="0"
          style={{
            position: "relative",
            width: "100%",
            height: "658.026px",
            overflow: "hidden",
          }}
          data-oid="b.3qu9j"
        >
          {/* Vector 1 */}
          <div
            style={{
              position: "absolute",
              height: "658.026px",
              right: "273.61px",
              top: "0px",
              width: "630.454px",
            }}
            data-oid="t8b8k5h"
          >
            <img
              alt=""
              style={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                height: "100%",
              }}
              src={imgVector1}
              data-oid="dgo46sv"
            />
          </div>

          {/* Vector 2 */}
          <div
            style={{
              position: "absolute",
              height: "474.429px",
              right: "-0.17px",
              top: "91.45px",
              width: "454.619px",
            }}
            data-oid="s_hkhqc"
          >
            <img
              alt=""
              style={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                height: "100%",
              }}
              src={imgVector2}
              data-oid="_.dilv-"
            />
          </div>

          {/* Hala's Image */}
          <div
            style={{
              position: "absolute",
              height: "391px",
              left: "35.06px",
              top: "145.05px",
              width: "398px",
              backgroundImage: `url('${imgHala}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "top left",
            }}
            data-oid="g4.zf-k"
          />
        </div>

        {/* Patient Name */}
        <div
          data-enter
          data-enter-order="1"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "36px",
            color: "#5b6670",
            height: "79px",
            width: "864px",
          }}
          data-oid="ltx1v:7"
        >
          <p style={{ margin: 0 }} data-oid="b-d2qyg">
            Hala,
          </p>
          <p style={{ margin: 0 }} data-oid="l.ggow0">
            52-year-old patient with HR– / HER2‑low mBC
          </p>
        </div>
      </div>

      {/* Text Container */}
      <div
        data-enter-group
        data-enter-order="2"
        style={{
          position: "relative",
          width: "841px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "250px",
        }}
        data-oid="k4hkoa1"
      >
        {/* Disclaimer Text Box */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            borderRadius: "17px",
            padding: "38px 34px 18px 43px",
            width: "100%",
            height: "163px",
            overflow: "hidden",
          }}
          data-oid="1y6499n"
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: "27px",
              color: "black",
              width: "764px",
              lineHeight: "normal",
            }}
            data-oid="k27zbds"
          >
            <p style={{ margin: 0 }} data-oid="sgdttg8">
              Anonymized case study based on a real-world case with input from
              Dr Simon Gampenrieder, University Hospital Salzburg, Austria.
            </p>
          </div>
        </div>

        {/* Bottom Logo */}
        <div
          style={{
            position: "relative",
            height: "112px",
            width: "123px",
            cursor: "pointer",
          }}
          onClick={onContinueClick}
          data-oid="eycy-ze"
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "1.03%",
              right: "7.47%",
              top: 0,
            }}
            data-oid="fcnx4c0"
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
              data-oid="quigl3j"
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "7.92%",
              left: 0,
              right: "30.68%",
              top: "7.02%",
            }}
            data-oid="u4o_d16"
          >
            <img
              alt=""
              style={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                height: "100%",
              }}
              src={imgGroup}
              data-oid="25qeerg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
