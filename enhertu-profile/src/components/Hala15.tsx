// Image assets from Figma MCP
const imgHala = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgEllipse1 = "/assets/4298bae82b56e0e6f3ac600c0f7ea72cbd3cf8ca.svg";
const imgVector = "/assets/f53a2a7cb2464c8a73ce991a95546d995905d661.svg";
const imgArrow = "/assets/d14039ca8b9aa1ecdb57c4b396d6a3640f644835.svg";
const imgVector2 = "/assets/95597fef952e173248e8f7194c413c03e4c664d2.svg";

interface Hala15Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala15({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala15Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="b:of46a"
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
        data-oid="z8lidzr"
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
        data-oid="kw2d7rt"
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
        data-oid="k.iq-t4"
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
        data-oid="ilywf_b"
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
        data-oid="nek2.9t"
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
          data-oid="k9y4ykh"
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
        data-oid="lh2vxa7"
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
          height: "235px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "39px",
          color: "#250858",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-oid="dj9o:vb"
      >
        ENHERTU was successfully rechallenged after full resolution of Grade 1
        ILD/pneumonitis recurrence
      </div>

      {/* Timeline - First treatment */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          top: "805px",
          left: "73px",
          width: "186px",
          height: "96px",
          backgroundColor: "#5d6771",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-oid="jj1gde5"
      />

      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          top: "815px",
          left: "170px",
          width: "78px",
          height: "78px",
          zIndex: 4,
        }}
        data-oid="36i_-wi"
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
          data-oid="ukv0km5"
        />
      </div>

      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          top: "805px",
          left: "207px",
          width: "873px",
          height: "96px",
          backgroundColor: "#d9d9d9",
          zIndex: 1,
        }}
        data-oid="egu5el4"
      />

      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          top: "827px",
          left: "268px",
          width: "812px",
          height: "51px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid=".-omdsx"
      >
        <p style={{ margin: 0, marginBottom: "0px" }} data-oid="az98_u2">
          <span data-oid="byjshxf">1L treatment: </span>
          <span style={{ fontWeight: "500" }} data-oid="2ggz1:-">
            Paclitaxel + pembrolizumab
          </span>
        </p>
        <p style={{ margin: 0 }} data-oid="w6zj1jx">
          <span data-oid="5x0_reo">2L treatment: </span>
          <span style={{ fontWeight: "500" }} data-oid="0-z7qko">
            ENHERTU
          </span>
        </p>
      </div>

      {/* Timeline - Second treatment */}
      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "930px",
          left: "73px",
          width: "186px",
          height: "96px",
          backgroundColor: "#58378a",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-oid="qqj_.iu"
      />

      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "939px",
          left: "170px",
          width: "78px",
          height: "78px",
          zIndex: 4,
        }}
        data-oid="23oli:x"
      >
        <img
          alt=""
          style={{
            display: "block",
            maxWidth: "none",
            width: "100%",
            height: "100%",
          }}
          src={imgArrow}
          data-oid="jwq63ep"
        />
      </div>

      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "930px",
          left: "207px",
          width: "873px",
          height: "96px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="nc1:hix"
      />

      <div
        data-enter
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          top: "955px",
          left: "268px",
          width: "812px",
          height: "57px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="_uep8.c"
      >
        <p style={{ margin: 0, marginBottom: "0px" }} data-oid="cdrpqj8">
          <span data-oid="urhlowu">CT (2 mo): </span>
          <span style={{ fontWeight: "500" }} data-oid="4ba7ml5">
            Partial response (lymph nodes, skin, liver) but{" "}
          </span>
          <span data-oid="yx0pmc6">right</span>
        </p>
        <p style={{ margin: 0 }} data-oid="u6gygpq">
          upper lobe pneumonitis
        </p>
      </div>

      {/* Timeline - Third treatment */}
      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          top: "1055px",
          left: "73px",
          width: "186px",
          height: "96px",
          backgroundColor: "#8c66c6",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-oid="mvkxfsm"
      />

      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          top: "1064px",
          left: "170px",
          width: "78px",
          height: "78px",
          zIndex: 4,
        }}
        data-oid="3b32hs_"
      >
        <img
          alt=""
          style={{
            display: "block",
            maxWidth: "none",
            width: "100%",
            height: "100%",
          }}
          src={imgArrow}
          data-oid="eudyoi8"
        />
      </div>

      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          top: "1055px",
          left: "207px",
          width: "873px",
          height: "96px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="98mvvm9"
      />

      <div
        data-enter
        data-enter-delay="0.5"
        style={{
          position: "absolute",
          top: "1089px",
          left: "268px",
          width: "812px",
          height: "28px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="dau:jeg"
      >
        Grade 1 pneumonitis had resolved to Grade 0
      </div>

      {/* Timeline - Fourth treatment */}
      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          top: "1180px",
          left: "73px",
          width: "186px",
          height: "96px",
          backgroundColor: "#58378a",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 2,
        }}
        data-oid="b178x:w"
      />

      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          top: "1189px",
          left: "170px",
          width: "78px",
          height: "78px",
          zIndex: 4,
        }}
        data-oid="5eqy:j6"
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
          data-oid="rvdenf9"
        />
      </div>

      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          top: "1180px",
          left: "207px",
          width: "873px",
          height: "96px",
          backgroundColor: "#dcd2ec",
          zIndex: 1,
        }}
        data-oid="365l.q3"
      />

      <div
        data-enter
        data-enter-delay="0.6"
        style={{
          position: "absolute",
          top: "1199px",
          left: "268px",
          width: "812px",
          height: "57px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "24px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-oid="q:grtq9"
      >
        <p style={{ margin: 0, marginBottom: "0px" }} data-oid="q9dsmby">
          ENHERTU rechallenged with 1 dose level reduction (4.4 mg/kg)
        </p>
        <p style={{ margin: 0 }} data-oid="_7ugobo">
          with close monitoring
        </p>
      </div>

      {/* Continue button */}
      <div
        data-enter
        data-enter-delay="0.7"
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
        data-oid="v08dmew"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "2px",
            right: "0px",
            top: "1px",
          }}
          data-oid="-g0c8l."
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src="/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg"
            data-oid="3r9zk-b"
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
          data-oid="2-p_0e7"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src="/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg"
            data-oid="b1bf0pf"
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
          data-oid="90zg2:a"
        >
          Continue
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
        data-oid="_yptqk1"
      >
        <p style={{ margin: 0, marginBottom: "0px" }} data-oid="-x0ft9q">
          Hypothetical case built with input from Dr Simon Gampenrieder,
          University Hospital Salzburg, Austria.
        </p>
        <p style={{ margin: 0 }} data-oid="w:2f_..">
          1/2L, first/second-line; CT, computed tomography.
        </p>
      </div>
    </div>
  );
}
