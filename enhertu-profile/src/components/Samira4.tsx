// Image assets from Figma MCP
const imgVector = "/assets/217d4bd4332d175179bf06dde168a7fa2cbf4b52.svg";
const imgGroup = "/assets/808348e90d52329741ef490ca5f364fe2b17660a.svg";
const imgIconContainer = "/assets/9f064e7469cf4c412994cd586bf5f892223a6a46.svg";

interface Samira4Props {
  onBackClick: () => void;
  onContinueClick: () => void;
  onHomeClick: () => void;
}

function Group7() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 4,
      }}
      data-oid="4i0gvoh"
    >
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "1.03%",
          right: "7.47%",
          top: "0px",
        }}
        data-oid="v07tyxa"
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
          data-oid="s2ys8nc"
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "7.92%",
          left: "0px",
          right: "30.68%",
          top: "7.02%",
        }}
        data-oid="9ctfbup"
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
          data-oid="_bz5bxf"
        />
      </div>
    </div>
  );
}

export default function Samira4({
  onBackClick,
  onContinueClick,
  onHomeClick,
}: Samira4Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="p7ut0f2"
    >
      {/* Header Background */}
      <div
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "756px",
          height: "27px",
          background: "linear-gradient(to right, #ec7624, #ffb061)",
          zIndex: 2,
        }}
        data-oid=":1bv-:g"
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          left: "76px",
          top: "166px",
          width: "656px",
          height: "80px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "50px",
          color: "#5b6670",
          lineHeight: "normal",
          zIndex: 3,
        }}
        data-enter
        data-oid="97__bqs"
      >
        <p style={{ margin: 0 }} data-oid="lh:g2b4">
          Interactive Question
        </p>
      </div>

      {/* Icon Container */}
      <div
        style={{
          position: "absolute",
          left: "74px",
          top: "362px",
          width: "927px",
          height: "176px",
          zIndex: 1,
        }}
        data-enter-group
        data-enter-order="2"
        data-oid="zjbs9ue"
      >
        <img
          alt=""
          style={{
            display: "block",
            maxWidth: "none",
            width: "100%",
            height: "100%",
          }}
          src={imgIconContainer}
          data-oid="htp.41b"
        />
      </div>

      {/* Icon */}
      <div
        style={{
          position: "absolute",
          left: "74px",
          top: "361px",
          width: "123px",
          height: "112px",
          zIndex: 4,
        }}
        data-oid="u:.xdit"
      >
        <Group7 data-oid="8wraq51" />
      </div>

      {/* Question */}
      <div
        style={{
          position: "absolute",
          left: "244px",
          top: "395px",
          width: "691px",
          height: "123px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "38px",
          color: "#250858",
          lineHeight: "54px",
          zIndex: 6,
        }}
        data-enter
        data-enter-order="3"
        data-oid="qllz:i3"
      >
        <p style={{ margin: 0 }} data-oid="3zob:3q">
          What would be your choice for her treatment at this stage?
        </p>
      </div>

      {/* Option 1 Container */}
      <div
        style={{
          position: "absolute",
          left: "222px",
          top: "653px",
          width: "636px",
          height: "130px",
          backgroundColor: "#9f9f9f",
          cursor: "pointer",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
        }}
        onClick={onContinueClick}
        data-enter
        data-enter-order="4"
        data-oid="k8twsn7"
      >
        <div
          style={{
            position: "absolute",
            left: "318.5px",
            top: "38px",
            width: "477px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "38px",
            color: "white",
            textAlign: "center",
            lineHeight: "54px",
            whiteSpace: "pre",
            zIndex: 6,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          data-oid="38ayb69"
        >
          <div
            style={{
              fontWeight: "700",
              textWrap: "nowrap",
              whiteSpaceCollapse: "preserve",
              paddingRight: "434px",
            }}
            data-oid="yn_k.91"
          >
            <p style={{ margin: 0 }} data-oid="apfapwk">
              Docetaxel + Trastuzumab
            </p>
          </div>
        </div>
      </div>

      {/* Option 2 Container */}
      <div
        style={{
          position: "absolute",
          left: "222px",
          top: "845px",
          width: "636px",
          height: "130px",
          backgroundColor: "#9f9f9f",
          cursor: "pointer",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onContinueClick}
        data-enter
        data-enter-order="5"
        data-oid="sk2q5wj"
      >
        <div
          style={{
            position: "absolute",
            left: "318px",
            top: "38px",
            width: "124px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "38px",
            color: "white",
            textAlign: "center",
            lineHeight: "54px",
            whiteSpace: "pre",
            zIndex: 6,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-oid="48ezex9"
        >
          <div
            style={{
              fontWeight: "700",
              textWrap: "nowrap",
              whiteSpaceCollapse: "preserve",
              paddingRight: "113px",
            }}
            data-oid="6lhz94_"
          >
            <p style={{ margin: 0 }} data-oid="is31t0i">
              T-DM1
            </p>
          </div>
        </div>
      </div>

      {/* Option 3 Container */}
      <div
        style={{
          position: "absolute",
          left: "222px",
          top: "1037px",
          width: "636px",
          height: "130px",
          backgroundColor: "#9f9f9f",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={onContinueClick}
        data-enter
        data-enter-order="6"
        data-oid="0yvc6nt"
      >
        <div
          style={{
            color: "white",
            fontSize: "38px",
            fontWeight: "700",
            height: "54px",
            left: "318px",
            lineHeight: "54px",
            position: "absolute",
            textAlign: "center",
            textWrap: "nowrap",
            top: "38px",
            whiteSpace: "pre",
            whiteSpaceCollapse: "preserve",
            width: "458px",
            zIndex: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-oid="vu8y2i6"
        >
          <div
            style={{
              fontWeight: "700",
              textWrap: "nowrap",
              whiteSpaceCollapse: "preserve",
              paddingRight: "425px",
            }}
            data-oid="33hx2jm"
          >
            <p style={{ margin: 0 }} data-oid=".qrp0rr">
              Lapatinib + capecitabine
            </p>
          </div>
        </div>
      </div>

      {/* Option 4 Container */}
      <div
        style={{
          position: "absolute",
          left: "222px",
          top: "1229px",
          width: "636px",
          height: "130px",
          backgroundColor: "#9f9f9f",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={onContinueClick}
        data-enter
        data-enter-order="7"
        data-oid="430qz4a"
      >
        <div
          style={{
            color: "white",
            fontSize: "38px",
            fontWeight: "700",
            height: "54px",
            left: "318.5px",
            lineHeight: "54px",
            position: "absolute",
            textAlign: "center",
            textWrap: "nowrap",
            top: "38px",
            whiteSpace: "pre",
            whiteSpaceCollapse: "preserve",
            width: "115px",
            zIndex: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-oid="jnuxoaa"
        >
          <div
            style={{
              fontWeight: "700",
              textWrap: "nowrap",
              whiteSpaceCollapse: "preserve",
              paddingRight: "108px",
            }}
            data-oid="bqs8brf"
          >
            <p style={{ margin: 0 }} data-oid="pkhav.p">
              T-Dxd
            </p>
          </div>
        </div>
      </div>

      {/* Back Button - Top Left */}
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
        data-oid="x3s7wwl"
      >
        ←
      </div>

      {/* Home Button - Top Right */}
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
        data-oid="rougpfj"
      >
        ⌂
      </div>
    </div>
  );
}
