// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgImage20 = "/assets/ff85baef57f5e36cc5e9fb141ba73a014711c5d7.png";
const imgImage21 = "/assets/48ac46f722f9a6b6efc149dc1b9fd3c4f17f6e84.png";
const imgImage22 = "/assets/6d3383b9e1f9c3a64f115c8391862b56a776f331.png";
const imgImage23 = "/assets/951bcea9723ae9671481170f86dd739c378b6226.png";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgEllipse1 = "/assets/4298bae82b56e0e6f3ac600c0f7ea72cbd3cf8ca.svg";

interface Hala14Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala14({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala14Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="fqsr2zt"
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
        data-oid="v5xdjid"
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
        data-oid="xoref0w"
      >
        ⌂
      </div>

      {/* Header background */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "756px",
          height: "27px",
          background: "linear-gradient(to right, #ec7624, #ffb061)",
          zIndex: 2,
        }}
        data-oid="719.:-3"
      />

      {/* Case Study title */}
      <div
        data-enter
        style={{
          position: "absolute",
          top: "167px",
          left: "73px",
          width: "656px",
          height: "80px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "50px",
          color: "#5b6670",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-oid="hb-c:ri"
      >
        Case Study: Hala
      </div>

      {/* Patient photo container */}
      <div
        data-enter
        data-enter-delay="0.1"
        style={{
          position: "absolute",
          top: "247px",
          left: "73px",
          width: "440px",
          height: "440px",
          zIndex: 4,
        }}
        data-oid="mvaxewm"
      >
        <img
          alt=""
          style={{
            display: "block",
            maxWidth: "none",
            width: "100%",
            height: "100%",
          }}
          src={imgEllipse1}
          data-oid="q1huwe2"
        />
      </div>

      {/* Patient photo */}
      <div
        data-enter
        data-enter-delay="0.1"
        style={{
          position: "absolute",
          top: "271px",
          left: "98px",
          width: "396px",
          height: "390px",
          backgroundImage: `url('${imgHala}')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="xva_a2:"
      />

      {/* Section title */}
      <div
        data-enter
        data-enter-delay="0.2"
        style={{
          position: "absolute",
          top: "338px",
          left: "534px",
          width: "481px",
          height: "192px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "40px",
          color: "#250858",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-oid="0mzqxnr"
      >
        Patient rechallenged following resolution of
        <br data-oid=":2lr-_m" />
        ENHERTU-related pneumonitis
      </div>

      {/* Pre-ENHERTU label */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          top: "777px",
          left: "73px",
          width: "339px",
          height: "27px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="sprgdma"
      >
        Pre-ENHERTU
      </div>

      {/* Pre-ENHERTU image */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          top: "825px",
          left: "73px",
          width: "260px",
          height: "213px",
          backgroundImage: `url('${imgImage21}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="3knyhts"
      />

      {/* Post Cycle 3 label */}
      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "701px",
          left: "544px",
          width: "339px",
          height: "27px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="hxdb3m9"
      >
        Post Cycle 3
      </div>

      {/* Post Cycle 3 pneumonitis label */}
      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "745px",
          left: "540px",
          width: "244px",
          height: "58px",
          backgroundColor: "#250858",
          transform: "rotate(0.378deg)",
          zIndex: 1,
        }}
        data-oid="xffxqnq"
      />

      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "752px",
          left: "567px",
          width: "183px",
          height: "45px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "20px",
          color: "white",
          lineHeight: "normal",
          zIndex: 3,
        }}
        data-oid="kqh65aj"
      >
        Right upper lobe pneumonitis
      </div>

      {/* Post Cycle 3 image */}
      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "825px",
          left: "541px",
          width: "272px",
          height: "223px",
          backgroundImage: `url('${imgImage20}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="s4r7w:1"
      />

      {/* Post Cycle 3 content box */}
      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          top: "825px",
          left: "813px",
          width: "187px",
          height: "223px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="pz:ulbi"
      />

      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          top: "832px",
          left: "819px",
          width: "181px",
          height: "182px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "14px",
          color: "#5d6771",
          lineHeight: "21px",
          zIndex: 6,
        }}
        data-oid="2jgb39e"
      >
        <p style={{ margin: 0, marginBottom: "8px" }} data-oid="l6v_o5b">
          Asymptomatic
        </p>
        <ul style={{ margin: 0, paddingLeft: "21px" }} data-oid="c7gsg7y">
          <li style={{ marginBottom: "4px" }} data-oid="e3nfj:5">
            Prednisone continued at 0.5 mg/kg/day for 3 weeks followed by
            gradual taper of over
            <br data-oid="6g_:wmr" />4 weeks
          </li>
        </ul>
      </div>

      {/* After holding ENHERTU text */}
      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          top: "1140px",
          left: "544px",
          width: "278px",
          height: "101px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="myidud9"
      >
        <p style={{ margin: 0, marginBottom: "0px" }} data-oid="yv9xmoa">
          After holding ENHERTU
        </p>
        <p style={{ margin: 0, marginBottom: "0px" }} data-oid="tafiy4i">
          for 49 days and tapering
        </p>
        <p style={{ margin: 0 }} data-oid="na:jce:">
          off prednisolone completely
        </p>
      </div>

      {/* Cycle 4 withheld label */}
      <div
        data-enter
        data-enter-delay="0.7"
        style={{
          position: "absolute",
          top: "1196px",
          left: "72px",
          width: "339px",
          height: "27px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="r5vu42a"
      >
        Cycle 4 withheld
      </div>

      {/* Cycle 4 pneumonitis label */}
      <div
        data-enter
        data-enter-delay="0.7"
        style={{
          position: "absolute",
          top: "1240px",
          left: "72px",
          width: "247px",
          height: "58px",
          backgroundColor: "#250858",
          transform: "rotate(0.378deg)",
          zIndex: 1,
        }}
        data-oid="q47pk14"
      />

      <div
        data-enter
        data-enter-delay="0.7"
        style={{
          position: "absolute",
          top: "1247px",
          left: "95px",
          width: "183px",
          height: "45px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "20px",
          color: "white",
          lineHeight: "normal",
          zIndex: 3,
        }}
        data-oid="tmnypea"
      >
        Right upper lobe pneumonitis
      </div>

      {/* Cycle 4 image */}
      <div
        data-enter
        data-enter-delay="0.7"
        style={{
          position: "absolute",
          top: "1312px",
          left: "73px",
          width: "245px",
          height: "183px",
          backgroundImage: `url('${imgImage22}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="xd6y_8z"
      />

      {/* Cycle 4 content box */}
      <div
        data-enter
        data-enter-delay="0.8"
        style={{
          position: "absolute",
          top: "1313px",
          left: "317px",
          width: "187px",
          height: "182px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="xcodl0-"
      />

      <div
        data-enter
        data-enter-delay="0.8"
        style={{
          position: "absolute",
          top: "1320px",
          left: "323px",
          width: "181px",
          height: "182px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "14px",
          color: "#5d6771",
          lineHeight: "21px",
          zIndex: 6,
        }}
        data-oid="mpc48kp"
      >
        <p style={{ margin: 0, marginBottom: "8px" }} data-oid="vqqjpc4">
          Asymptomatic
        </p>
        <ul style={{ margin: 0, paddingLeft: "21px" }} data-oid="q6va.jv">
          <li style={{ marginBottom: "4px" }} data-oid="yrl5o66">
            Normal lung function
          </li>
          <li style={{ marginBottom: "4px" }} data-oid="szagop9">
            Normal 6 min walk test
          </li>
          <li style={{ marginBottom: "4px" }} data-oid="p19:_ls">
            Started prednisone
            <br data-oid="jf.9lqq" />
            0.5 mg/kg/day
          </li>
          <li data-oid="sjb1h13">Initiate prophylactic antibiotics for PCP</li>
        </ul>
      </div>

      {/* Rechallenged pneumonitis label */}
      <div
        data-enter
        data-enter-delay="0.9"
        style={{
          position: "absolute",
          top: "1240px",
          left: "544px",
          width: "269px",
          height: "58px",
          backgroundColor: "#250858",
          transform: "rotate(0.378deg)",
          zIndex: 1,
        }}
        data-oid="lswed85"
      />

      <div
        data-enter
        data-enter-delay="0.9"
        style={{
          position: "absolute",
          top: "1247px",
          left: "567px",
          width: "183px",
          height: "45px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "20px",
          color: "white",
          lineHeight: "normal",
          zIndex: 3,
        }}
        data-oid=".j7l80p"
      >
        Right upper lobe pneumonitis
      </div>

      {/* Rechallenged image */}
      <div
        data-enter
        data-enter-delay="0.9"
        style={{
          position: "absolute",
          top: "1313px",
          left: "544px",
          width: "272px",
          height: "182px",
          backgroundImage: `url('${imgImage23}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-oid="ej:7rkw"
      />

      {/* Rechallenged content box */}
      <div
        data-enter
        data-enter-delay="1.0"
        style={{
          position: "absolute",
          top: "1313px",
          left: "816px",
          width: "187px",
          height: "182px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="xiq03ox"
      />

      <div
        data-enter
        data-enter-delay="1.0"
        style={{
          position: "absolute",
          top: "1320px",
          left: "822px",
          width: "181px",
          height: "182px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "14px",
          color: "#5d6771",
          lineHeight: "21px",
          zIndex: 6,
        }}
        data-oid="rd46_xp"
      >
        <p style={{ margin: 0, marginBottom: "8px" }} data-oid="iw1ogm5">
          Resolved
        </p>
        <ul style={{ margin: 0, paddingLeft: "21px" }} data-oid="88p:rzo">
          <li data-oid="zm7si1v">
            Rechallenged: Cycle 4<br data-oid="peuc-oe" />
            at 4.4 mg/kg/day
          </li>
        </ul>
      </div>

      {/* Continue button */}
      <div
        data-enter
        data-enter-delay="1.1"
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
        data-oid="n9luk2g"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "2px",
            right: "0px",
            top: "1px",
          }}
          data-oid="2s3wy1o"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={img}
            data-oid="1t4:613"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "82.4%",
            top: "0px",
          }}
          data-oid="bi:t31z"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={img1}
            data-oid="zjrk3:7"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "32px",
            right: "29px",
            bottom: "32px",
            left: "123px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "white",
            textAlign: "center",
            lineHeight: "54px",
          }}
          data-oid=".b097r."
        >
          Patient Progress
        </div>
      </div>

      {/* Footer text */}
      <div
        style={{
          position: "absolute",
          top: "1853px",
          left: "105px",
          width: "953px",
          height: "30px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "12px",
          color: "black",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-oid="qxi77h_"
      >
        <p style={{ margin: 0, marginBottom: "0px" }} data-oid="9-4qvo.">
          Case built with input from Dr Simon Gampenrieder, University Hospital
          Salzburg, Austria.
        </p>
        <p style={{ margin: 0 }} data-oid="c:y:48a">
          resp med, respiratory medicine.
        </p>
      </div>
    </div>
  );
}
