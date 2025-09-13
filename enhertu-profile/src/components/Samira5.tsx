// Image assets from Figma MCP
const imgButtonContainer =
  "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIconContainer = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/aee53a0377d0b242aeb7d3a535bfb57a93635b99.svg";
const imgVector1 = "/assets/96ec5b8ed2fa23d37d3d1e8d9f908f1733bdf681.svg";

interface ButtonTreatmentProps {
  text?: string;
}

function ButtonTreatment({ text = "Treatment" }: ButtonTreatmentProps) {
  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      data-oid="cqh967k"
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "0.29%",
          right: 0,
          top: "0.89%",
        }}
        data-oid="ppr317b"
      >
        <img
          alt=""
          style={{
            display: "block",
            maxWidth: "none",
            width: "100%",
            height: "100%",
          }}
          src={imgButtonContainer}
          data-oid="-rwv23g"
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: "82.4%",
          top: 0,
        }}
        data-oid="k4-3nqp"
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
          data-oid="61wm:y-"
        />
      </div>
      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "31px",
          textAlign: "center",
          color: "white",
          top: "28.57%",
          left: "17.6%",
          right: "4.15%",
          bottom: "28.57%",
        }}
        data-oid=".0vz:n2"
      >
        <p style={{ margin: 0, lineHeight: "54px" }} data-oid="orcbvwe">
          {text}
        </p>
      </div>
    </div>
  );
}

interface Samira5Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Samira5({
  onBackClick,
  onHomeClick,
  onContinueClick,
}: Samira5Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid=":7hard7"
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          inset: 0,
          zIndex: 1,
        }}
        data-oid="9.g0p:a"
      />

      {/* Header background */}
      <div
        style={{
          position: "absolute",
          backgroundImage: "linear-gradient(to right, #ec7624, #ffb061)",
          height: "27px",
          left: 0,
          top: 0,
          width: "756px",
          zIndex: 2,
        }}
        data-oid="-mvdyqe"
      />

      {/* Back Button */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
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
        data-oid="3:0s_8r"
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
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
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
        data-oid="mxxbgh8"
      >
        ⌂
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          height: "80px",
          lineHeight: "normal",
          fontStyle: "normal",
          color: "#5b6670",
          fontSize: "50px",
          top: "167px",
          width: "656px",
          left: "calc(50% - 328px)",
          zIndex: 3,
        }}
        data-enter
        data-oid="l_m9i6n"
      >
        <p style={{ margin: 0 }} data-oid="ydmxh63">
          Case Study: Samira
        </p>
      </div>

      {/* Content container */}
      <div
        style={{
          position: "absolute",
          left: "72px",
          top: "276px",
          zIndex: 1,
        }}
        data-enter-group
        data-enter-order="2"
        data-oid="0j62:4j"
      >
        {/* Treatment background */}
        <div
          data-enter-swipe
          data-enter-order="1"
          style={{
            position: "absolute",
            backgroundColor: "#58378a",
            height: "169px",
            left: "174px",
            top: "0px",
            width: "762px",
            zIndex: 2,
          }}
          data-oid="llb1cnw"
        />

        {/* Treatment title */}
        <div
          style={{
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            lineHeight: "normal",
            left: "411px",
            fontStyle: "normal",
            fontSize: "51px",
            textAlign: "center",
            whiteSpace: "pre",
            color: "white",
            top: "54px",
            zIndex: 3,
          }}
          data-oid="h0ogx.6"
        >
          <p style={{ margin: 0 }} data-oid="b3052er">
            2L treatment
          </p>
        </div>

        {/* Vector image */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            width: "366px",
            height: "366px",
            top: "0px",
            zIndex: 4,
          }}
          data-oid="3de4__6"
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
            data-oid="cxke1bb"
          />
        </div>

        {/* Vector1 image */}
        <div
          style={{
            position: "absolute",
            height: "187.769px",
            left: "129.76px",
            top: "100.65px",
            width: "128.1px",
            zIndex: 5,
          }}
          data-oid="dayqp3g"
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
            data-oid="998-uwr"
          />
        </div>

        {/* Treatment container */}
        <div
          style={{
            position: "absolute",
            backgroundColor: "#dcd2ec",
            height: "598px",
            left: "0px",
            borderRadius: "93px 0 0 0",
            top: "103px",
            width: "937px",
            zIndex: 1,
          }}
          data-oid="pk23m2h"
        />

        {/* First treatment point */}
        <div
          style={{
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            height: "175px",
            lineHeight: "normal",
            left: "366px",
            fontStyle: "normal",
            fontSize: "31px",
            color: "black",
            top: "191px",
            width: "523px",
            zIndex: 6,
          }}
          data-oid="j2pixdh"
        >
          <ul style={{ margin: 0, paddingLeft: "46.5px" }} data-oid="89e_5pj">
            <li style={{ listStyleType: "disc" }} data-oid="zpe:j8t">
              <span style={{ lineHeight: "54px" }} data-oid="ckdc91v">
                Patient received palliative radiotherapy at the start of
                November 2022
              </span>
            </li>
          </ul>
        </div>

        {/* Second treatment points */}
        <div
          style={{
            position: "absolute",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            height: "303px",
            lineHeight: "normal",
            left: "6px",
            fontStyle: "normal",
            fontSize: "31px",
            color: "black",
            top: "388px",
            width: "901px",
            zIndex: 6,
          }}
          data-oid="_gmvl2k"
        >
          <ul style={{ margin: 0, paddingLeft: "46.5px" }} data-oid=":gpocgj">
            <li
              style={{ listStyleType: "disc", marginBottom: "0" }}
              data-oid="9vkc.l5"
            >
              <span style={{ lineHeight: "54px" }} data-oid="z6r3f.y">
                ENHERTU (5.4 mg/kg) was then prescribed to the patient in
                November 2022
              </span>
            </li>
            <li style={{ listStyleType: "disc" }} data-oid="ki9.e-u">
              <span style={{ lineHeight: "54px" }} data-oid="s3.8-uk">
                The decision to use ENHERTU vs. T-DM1 in the 2L setting was due
                the superior PFS data seen in DESTINY-Breast03*
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Key message */}
      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontStyle: "italic",
          lineHeight: "normal",
          left: "543px",
          color: "#ec7624",
          fontSize: "28px",
          textAlign: "center",
          top: "1020px",
          transform: "translateX(-50%)",
          width: "930px",
          zIndex: 6,
        }}
        data-enter
        data-enter-order="3"
        data-oid="68e3.l6"
      >
        <p style={{ margin: 0, lineHeight: "40px" }} data-oid="mb236j-">
          Pivotal clinical studies demonstrate that attrition rates increase,
        </p>
        <p style={{ margin: 0, lineHeight: "40px" }} data-oid="496z5f0">
          <span data-oid="0oixxx_">
            and efficacy decreases with each subsequent line of HER2-based
            therapy,{" "}
          </span>
          <span
            style={{ fontWeight: "bold", fontStyle: "italic" }}
            data-oid="e2mydlb"
          >
            highlighting the importance of using the most efficacious drug as
            early as possible1–5
          </span>
        </p>
      </div>

      {/* Button */}
      <div
        style={{
          position: "absolute",
          height: "112px",
          top: "1615px",
          transform: "translateX(-50%)",
          width: "699px",
          left: "calc(50% - 0.5px)",
          zIndex: 6,
          cursor: "pointer",
        }}
        data-enter
        data-enter-order="4"
        onClick={onContinueClick}
        data-oid="1:kdb5v"
      >
        <ButtonTreatment text="Push The Paradigm" data-oid="m5f5ftg" />
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontWeight: "normal",
          lineHeight: "15px",
          left: "73px",
          fontStyle: "normal",
          fontSize: "12px",
          color: "black",
          top: "1815px",
          width: "927px",
          zIndex: 6,
        }}
        data-oid="frsdhhs"
      >
        <p style={{ fontWeight: "bold", margin: 0 }} data-oid="v:ack1z">
          *Primary PFS analysis (May 2021), HR: 0.28 (95% CI 0.22-0.37, p
          value&lt;0.001).6
        </p>
        <p style={{ margin: 0, whiteSpace: "pre-wrap" }} data-oid="..wgu6x">
          2L, second-line; PFS, progression-free survival; T-DM1, trastuzumab
          emtansine.
        </p>
        <p style={{ margin: 0 }} data-oid="vk0hx-5">
          1. Yao M, et al. Chin Clin Oncol. 2018;7:27; 2. Swain SM, et al. N
          Engl J Med. 2015;372:724-734; 3. Verma S, et al. N Engl J Med.
          2012;367:1783-1791; 4. Diéras V, et al. Lancet Oncol. 2017;18:732-742.
          5. Larionov AA. Front Oncol. 2018;8:89;
        </p>
        <p style={{ margin: 0 }} data-oid="i4hnf8y">
          6. Cortés J, et al. N Engl J Med. 2022;386:1143-1154.
        </p>
      </div>
    </div>
  );
}
