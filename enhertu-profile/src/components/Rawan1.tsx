// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgVector = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";
const imgVector1 = "/assets/556e8b421952909999b8115f6ca26af0a8b00cad.svg";
const imgVector2 = "/assets/973c03738673ce966a370ad367fdb736a0a89428.svg";

interface Rawan1Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Rawan1({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Rawan1Props) {
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
      data-oid="w3cns2k"
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
        data-oid="qgklju_"
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
        data-oid="qd97dha"
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
        data-oid="c5m-2ar"
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
          data-oid="jw80hpn"
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
            data-oid=".96ulsd"
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
              data-oid="wqsq698"
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
            data-oid="hmhs.lf"
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
              data-oid="vl.j2v:"
            />
          </div>

          {/* Rawan's Image */}
          <div
            style={{
              position: "absolute",
              height: "391px",
              left: "35.06px",
              top: "145.05px",
              width: "398px",
              backgroundImage: `url('${imgRawan}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "top left",
            }}
            data-oid="l4ndp2-"
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
          data-oid="q.f9p6d"
        >
          <p style={{ margin: 0 }} data-oid="kzss-gi">
            Rawan,
          </p>
          <p style={{ margin: 0 }} data-oid="6mxwdlb">
            71-year-old patient with HR+ / HER2‑low mBC
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
        data-oid="v5l5dmk"
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
          data-oid="2dahhwv"
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
            data-oid="6u4nbrd"
          >
            <p style={{ margin: 0 }} data-oid="1:v8y4h">
              Based on a hypothetical case with input from Dr Simon
              Gampenrieder, University Hospital Salzburg, Austria.
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
          data-oid="feu9wab"
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "1.03%",
              right: "7.47%",
              top: 0,
            }}
            data-oid="249pl1:"
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
              data-oid="sg0md.5"
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
            data-oid="4ocpb6r"
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
              data-oid="abv045q"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
