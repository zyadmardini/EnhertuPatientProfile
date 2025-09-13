// Image assets from Figma MCP
const imgGraph131 = "/assets/2cbeeaee4c3f2b31e2c198ddd9a71d1130c8e796.png";
const imgImage6 = "/assets/cb9219dae840f64aebf4d517dded02642e02acc5.png";
const imgButton = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIcon = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/fd146c4fe67459a60e7417374eecc063a3b335e8.svg";

interface Hala10Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala10({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala10Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-oid="03607j6"
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
        data-oid="7di5lpz"
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
        data-oid="1bnikmb"
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
        data-oid="v5nywyy"
      />

      {/* Title */}
      <div
        data-enter
        data-enter-delay="0.1"
        style={{
          position: "absolute",
          left: "120px",
          top: "123px",
          width: "882px",
          height: "199px",
          fontSize: "41px",
          fontWeight: "bold",
          color: "#250858",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.2",
          zIndex: 3,
        }}
        data-oid="jfk2lte"
      >
        Nausea, vomiting, fatigue and alopecia were the most common
        ENHERTU-related TEAEs observed in DESTINY-Breast04
      </div>

      {/* HR+ & HR- Label */}
      <div
        data-enter
        data-enter-delay="0.2"
        style={{
          position: "absolute",
          left: "55px",
          top: "348px",
          width: "203px",
          height: "165px",
          fontSize: "38px",
          fontWeight: "bold",
          color: "white",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.2",
          zIndex: 6,
        }}
        data-oid="tmh-odv"
      >
        HR+ & HR-
      </div>

      {/* Vector Background */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          left: "0px",
          top: "311px",
          width: "346px",
          height: "138px",
          zIndex: 5,
        }}
        data-oid="yl18_rh"
      >
        <img
          src={imgVector}
          alt="Vector background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="tcm:49s"
        />
      </div>

      {/* Subtitle */}
      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          left: "73px",
          top: "482px",
          width: "935px",
          height: "56px",
          fontSize: "25px",
          fontWeight: "bold",
          color: "#5d6771",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.1",
          zIndex: 3,
        }}
        data-oid="e5:-r21"
      >
        Most common drug-related TEAEs (in ≥20% of patients) in the safety
        analysis set
      </div>

      {/* Main Graph */}
      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          left: "72px",
          top: "586px",
          width: "935px",
          height: "438px",
          backgroundImage: `url('${imgGraph131}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="b12-zkt"
      />

      {/* Bottom Image */}
      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          left: "75px",
          top: "1049px",
          width: "498px",
          height: "156px",
          backgroundImage: `url('${imgImage6}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="f:hdwd4"
      />

      {/* Info Box */}
      <div
        data-enter
        data-enter-delay="0.7"
        style={{
          position: "absolute",
          left: "75px",
          top: "1265px",
          width: "934px",
          height: "116px",
          backgroundColor: "#f3f7d9",
          border: "4px solid #c5d752",
          zIndex: 5,
        }}
        data-oid="zy1o2rh"
      >
        <div
          style={{
            position: "absolute",
            left: "9px",
            top: "26px",
            width: "916px",
            height: "110px",
            fontSize: "24px",
            fontWeight: "500",
            color: "#5d6771",
            fontFamily: "Inter, sans-serif",
            lineHeight: "1.2",
            zIndex: 6,
          }}
          data-oid="1u7tz.7"
        >
          Nausea, vomiting, fatigue and alopecia were the most common
          ENHERTU-related AEs observed in DESTINY-Breast04
        </div>
      </div>

      {/* Treatment Button */}
      <div
        data-enter
        data-enter-delay="0.8"
        style={{
          position: "absolute",
          left: "190px",
          top: "1593px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
        }}
        onClick={onContinueClick}
        data-oid="d2igeuc"
      >
        <img
          src={imgButton}
          alt="Treatment button"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          data-oid="d-nc99a"
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
          data-oid="4l2fbny"
        >
          Suspected ILD monitoring
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
          data-oid="vmzvog4"
        >
          <img
            src={imgIcon}
            alt="Button icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="unptbz2"
          />
        </div>
      </div>

      {/* Footer Text */}
      <div
        data-enter
        data-enter-delay="0.9"
        style={{
          position: "absolute",
          left: "74px",
          top: "1740px",
          width: "927px",
          height: "151px",
          fontSize: "11px",
          fontWeight: "500",
          color: "black",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.4",
          zIndex: 6,
        }}
        data-oid="rgugsgv"
      >
        <div
          style={{ marginBottom: "4px", fontWeight: "bold" }}
          data-oid="ts:ga:0"
        >
          Adapted from Modi 2023.
        </div>
        <div style={{ marginBottom: "4px" }} data-oid="7tj9dco">
          Shown are AEs that emerged or worsened after initiation of a trial
          drug until 47 days after the last dose of the trial drug and that were
          adjudicated as being related to a trial drug by an independent
          committee. Median treatment duration was 8.2 months (range, 0.2–39.1
          months) for T-DXd and 3.5 months (range, 0.3-19.7 months) for TPC.
          16.4% of patients underwent treatment for ≥18 months in the T-DXd arm
          compared with 1.2% of patients in the TPC arm.
        </div>
        <div style={{ marginBottom: "4px" }} data-oid="ou3v1qc">
          *This category includes the preferred terms fatigue, asthenia, and
          malaise; †This category includes the preferred terms aspartate
          aminotransferase increased, alanine aminotransferase increased,
          gamma-glutamyltransferase increased, and hepatic function abnormal;
          ‡This category includes the preferred terms neutrophil count decreased
          and neutropenia; §This category includes the preferred terms
          haemoglobin decreased, red-cell count decreased, anaemia, and
          haematocrit decreased; ¶This category includes the preferred terms
          platelet count decreased and thrombocytopenia; IIThis category
          includes the preferred terms white-cell count decreased and
          leukopenia.
        </div>
        <div style={{ marginBottom: "4px" }} data-oid="v:.3sr_">
          2L, second line; ET, endocrine therapy; HER2, human epidermal growth
          factor receptor 2; mBC, metastatic breast cancer; TEAE,
          treatment-emergent adverse event.
        </div>
        <div data-oid="641zyqr">
          Modi S, et al. Presented at ESMO Annual Meeting 2023, 20–24 October.
          Madrid, Spain. Abstract 376O.
        </div>
      </div>
    </div>
  );
}
