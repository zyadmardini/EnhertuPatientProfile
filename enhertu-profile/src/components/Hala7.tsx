// Image assets from Figma MCP
const imgGraph10 = "/assets/a9600e39abbdccebfd2746504f312469a0472c18.png";
const imgGraph09 = "/assets/3b28ca209e6877e16e3954e051dbb54e9fc73d89.png";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/fd146c4fe67459a60e7417374eecc063a3b335e8.svg";

interface Hala7Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala7({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala7Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-oid="pgcd0mz"
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
        data-oid="x183gzy"
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
        data-oid="9phufst"
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
        data-oid="9wk9phi"
      />

      {/* Title */}
      <div
        data-enter
        data-enter-delay="0.1"
        style={{
          position: "absolute",
          left: "222px",
          top: "104px",
          width: "782px",
          height: "182px",
          fontSize: "41px",
          fontWeight: "bold",
          color: "#250858",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.2",
          zIndex: 3,
        }}
        data-oid="8:1r2u4"
      >
        <span style={{ color: "#ee7623" }} data-oid="7v-_kmo">
          Consistent mPFS and mOS
        </span>
        <span data-oid="ec4_f_b">
          {" "}
          results were reported in all patients with HER2-low mBC
        </span>
      </div>

      {/* HR+ & HR- Label */}
      <div
        data-enter
        data-enter-delay="0.2"
        style={{
          position: "absolute",
          left: "40px",
          top: "302px",
          width: "235px",
          height: "59px",
          fontSize: "38px",
          fontWeight: "bold",
          color: "white",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.2",
          zIndex: 7,
        }}
        data-oid="pi_cijh"
      >
        HR+ & HR-
      </div>

      {/* Vector Background */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          left: "-28px",
          top: "264px",
          width: "346px",
          height: "138px",
          zIndex: 6,
        }}
        data-oid="xqgjzsp"
      >
        <img
          src={imgVector}
          alt="Vector background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="uvwpde1"
        />
      </div>

      {/* Graph 1 - PFS */}
      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          left: "158px",
          top: "373px",
          width: "796px",
          height: "571px",
          backgroundImage: `url('${imgGraph10}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="1n24.rd"
      />

      {/* Graph 2 - OS */}
      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          left: "158px",
          top: "1005px",
          width: "796px",
          height: "550px",
          backgroundImage: `url('${imgGraph09}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="i6v2o26"
      />

      {/* Treatment Button */}
      <div
        data-enter
        data-enter-delay="0.8"
        style={{
          position: "absolute",
          left: "190px",
          top: "1615px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
        }}
        onClick={onContinueClick}
        data-oid="xymc_2y"
      >
        <img
          src={imgButton}
          alt="Treatment button"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="zu2d8j9"
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
          data-oid="pky8lmo"
        >
          ORR
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
          data-oid="ms3t9uo"
        >
          <img
            src={imgIcon}
            alt="Button icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="xe3fnj-"
          />
        </div>
      </div>

      {/* Footer Text */}
      <div
        data-enter
        data-enter-delay="0.9"
        style={{
          position: "absolute",
          left: "73px",
          top: "1845px",
          width: "927px",
          height: "45px",
          fontSize: "12px",
          fontWeight: "500",
          color: "black",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.25",
          zIndex: 6,
        }}
        data-oid="u9:b-nc"
      >
        CI, confidence interval; HER2, human epidermal growth factor receptor 2;
        HR, hormone receptor; mBC, metastatic breast cancer; mo, months; (m)OS,
        (median) overall survival; (m)PFS, (median) progression-free survival.
        Modi S, et al. Presented at ASCO 2022. Abstract LBA3.
      </div>
    </div>
  );
}
