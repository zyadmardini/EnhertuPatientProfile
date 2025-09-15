// Image assets from Figma MCP
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgImage4 = "/assets/065b5b274e01bd7b17016641bdbff3ba148b8cf5.png";
const imgImage5 = "/assets/940eb79c1bb28dd66faab04aa10b11fef4a38332.png";
const imgEllipse1 = "/assets/db308337d318d47455cdd2ec15957a37c39e11c5.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/89ef69d582f50df0c9de6ce7e4825870d4f881f3.svg";
const imgOrangeArrow = "/assets/449687bc227799e152eb96fdc69677fa8e91bc43.svg";

interface Rawan6Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan6({
  onBackClick,
  onHomeClick,
  onContinueClick,
}: Rawan6Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-name="Rawan6"
      data-node-id="52:673"
      data-oid="ao84a.:"
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
        data-oid="35qxcza"
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
        data-oid="zf5szkw"
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
        data-name="Header background"
        data-node-id="52:679"
        data-oid="9j:ttcg"
      />

      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1080px",
          height: "1920px",
          backgroundColor: "#ffffff",
          zIndex: 1,
        }}
        data-node-id="52:674"
        data-oid="pi-pgg_"
      />

      {/* Title */}
      <div
        data-enter
        data-enter-order="1"
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
        data-node-id="52:675"
        data-oid="su_okpq"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid=".u7cxsn">
          Case Study: Rawan
        </p>
      </div>

      {/* Ellipse background */}
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
        data-node-id="52:676"
        data-oid="vzzpxxn"
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
          data-oid="2baunv0"
        />
      </div>

      {/* Patient image */}
      <div
        data-enter
        data-enter-order="3"
        style={{
          position: "absolute",
          top: "301px",
          left: "95px",
          width: "396px",
          height: "390px",
          zIndex: 5,
        }}
        data-name="Rawan"
        data-node-id="52:678"
        data-oid="-sdka9c"
      >
        <img
          alt=""
          style={{
            display: "block",
            maxWidth: "none",
            width: "100%",
            height: "100%",
          }}
          src={imgRawan}
          data-oid="uj73em0"
        />
      </div>

      {/* Section title */}
      <div
        data-enter
        data-enter-order="4"
        style={{
          position: "absolute",
          top: "361px",
          left: "534px",
          width: "495px",
          height: "270px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "45px",
          color: "#250858",
          lineHeight: "normal",
          whiteSpace: "pre",
          zIndex: 6,
        }}
        data-node-id="52:677"
        data-oid="6rd4i51"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="-qub:9k">
          Patient starts ENHERTU
        </p>
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="9rtqwm5">
          after prophylactic
        </p>
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="aal.aaz">
          antiemetics and
        </p>
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="99eslkl">
          ILD/pneumonitis risk
        </p>
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="h484drs">
          is assessed
        </p>
      </div>

      {/* Treatment timeline containers */}
      <div
        data-enter-group
        data-enter-order="5"
        style={{
          position: "absolute",
          top: "756px",
          left: "73px",
          width: "1007px",
          height: "346px",
          zIndex: 1,
        }}
        data-oid="treatment-timeline-group"
      >
        {/* Container 1 */}
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
          data-node-id="52:713"
          data-oid=".gp.wh7"
        />

        {/* Container 2 */}
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
          data-node-id="52:714"
          data-oid="12doima"
        />

        {/* Container 3 */}
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
          data-node-id="52:727"
          data-oid="qeqn4d8"
        />

        {/* Treatment timeline icons */}
        {/* Icon 1 */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "186px",
            height: "96px",
            backgroundColor: "#ffb061",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
            zIndex: 2,
          }}
          data-node-id="52:716"
          data-oid="p_t.btx"
        />

        {/* Icon 2 */}
        <div
          style={{
            position: "absolute",
            top: "125px",
            left: "0px",
            width: "186px",
            height: "96px",
            backgroundColor: "#ee7623",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
            zIndex: 2,
          }}
          data-node-id="52:717"
          data-oid="dlo3z0d"
        />

        {/* Icon 3 */}
        <div
          style={{
            position: "absolute",
            top: "250px",
            left: "0px",
            width: "186px",
            height: "96px",
            backgroundColor: "#ee7623",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
            zIndex: 2,
          }}
          data-node-id="52:728"
          data-oid="3eykdjr"
        />

        {/* Treatment timeline vectors */}
        <div
          style={{
            position: "absolute",
            top: "9px",
            left: "97px",
            width: "78px",
            height: "78px",
            zIndex: 3,
          }}
          data-node-id="52:722"
          data-oid="3g9dnho"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgOrangeArrow}
            data-oid="qvou0x0"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "259px",
            left: "97px",
            width: "78px",
            height: "78px",
            zIndex: 3,
          }}
          data-name="Vector"
          data-node-id="140:856"
          data-oid=".48u7mo"
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
            data-oid="ltvny:0"
          />
        </div>

        {/* Treatment timeline text */}
        <div
          style={{
            position: "absolute",
            top: "22px",
            left: "195px",
            width: "800px",
            height: "28px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            fontSize: "24px",
            color: "#5d6771",
            lineHeight: "28px",
            zIndex: 6,
          }}
          data-node-id="52:715"
          data-oid="ju_7r8."
        >
          <p style={{ margin: 0, lineHeight: "28px" }} data-oid="qjs2-z8">
            <span style={{ fontWeight: "bold" }} data-oid="ge38_0n">
              ILD/pneumonitis risk evaluation: baseline CT and pulmonary  function tests 
            </span>
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            top: "147px",
            left: "195px",
            width: "812px",
            height: "28px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            fontSize: "24px",
            color: "#5d6771",
            lineHeight: "28px",
            zIndex: 6,
          }}
          data-node-id="52:733"
          data-oid="u.bsb.u"
        >
          <p style={{ margin: 0, lineHeight: "28px" }} data-oid="7jv-4a8">
            <span data-oid="lex.5.:"> Patient receives prophylactic antiemetics: 5-HT3 RA and dexamethasone</span>
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            top: "282px",
            left: "195px",
            width: "812px",
            height: "28px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            fontSize: "24px",
            color: "#5d6771",
            lineHeight: "28px",
            zIndex: 6,
          }}
          data-node-id="52:734"
          data-oid="xi-ztz0"
        >
          <p style={{ margin: 0, lineHeight: "28px" }} data-oid="m6sb46o">
            <span data-oid="w_a9tfo"> 4L treatment: ENHERTU </span>
          </p>
        </div>
      </div>

      {/* Image labels */}
      <div
        style={{
          position: "absolute",
          top: "1124px",
          left: "75px",
          width: "411px",
          height: "28px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:743"
        data-oid="k88lyg7"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="zzh8lsw">
          Pre-ENHERTU initiation CT
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: "1124px",
          left: "598px",
          width: "411px",
          height: "28px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:745"
        data-oid="l-__bj5"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="xofel.y">
          Pre-ENHERTU initiation Ca15-3 [U/ml]
        </p>
      </div>

      {/* Images */}
      <div
        data-enter
        data-enter-order="8"
        style={{
          position: "absolute",
          top: "1190px",
          left: "75px",
          width: "326px",
          height: "280px",
          backgroundImage: `url('${imgImage4}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-name="image 4"
        data-node-id="52:736"
        data-oid="r2oqmcn"
      />

      <div
        data-enter
        data-enter-order="9"
        style={{
          position: "absolute",
          top: "1202px",
          left: "598px",
          width: "376px",
          height: "248px",
          backgroundImage: `url('${imgImage5}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-name="image 5"
        data-node-id="52:766"
        data-oid="z9w-2zq"
      />

      {/* Warning box */}
      <div
        style={{
          position: "absolute",
          top: "1480px",
          left: "75px",
          width: "934px",
          height: "116px",
          backgroundColor: "#f3f7d9",
          border: "4px solid #c5d752",
          zIndex: 1,
        }}
        data-node-id="52:1596"
        data-oid="lfsknoo"
      >
        <div
          style={{
            position: "absolute",
            top: "11px",
            left: "0px",
            width: "934px",
            height: "110px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            fontSize: "24px",
            color: "#5d6771",
            lineHeight: "28px",
            zIndex: 6,
          }}
          data-node-id="52:739"
          data-oid="1mtqsxd"
        >
          <p style={{ margin: 0, lineHeight: "28px" }} data-oid="k2nzn3g">
            Patients with a history of ILD/pneumonitis or patients with moderate
            or severe renal impairment may be at increased risk of developing
            ILD/pneumonitis and should be monitored carefully
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div
        data-enter
        data-enter-order="10"
        style={{
          position: "absolute",
          top: "1615px",
          left: "191px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
        }}
        data-name="Button Treatment"
        data-node-id="52:681"
        onClick={onContinueClick}
        data-oid="0ma60p4"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0.29%",
            right: "0",
            top: "0.89%",
            zIndex: 1,
          }}
          data-name="Button container"
          data-oid="kt33k46"
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
            data-oid="2qnti4t"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "82.4%",
            top: "0",
            zIndex: 2,
          }}
          data-name="Icon container"
          data-oid="u2jp71b"
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
            data-oid="qdbbcqr"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "28.57%",
            left: "17.6%",
            right: "4.15%",
            bottom: "28.57%",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: "54px",
            zIndex: 3,
          }}
          data-oid="tl2xs0n"
        >
          <p style={{ margin: 0, lineHeight: "54px" }} data-oid="hc:gd7i">
            Push the Paradigm
          </p>
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
          color: "#000000",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-node-id="52:680"
        data-oid="el083jn"
      >
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="g7rf4xk">
          Hypothetical case built with input from Dr Simon Gampenrieder,
          University Hospital Salzburg, Austria.
        </p>
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="hd-p_ma">
          4L, forth‑line; CT, computed tomography; ILD, interstitial lung
          disease; U/ml, units per milliliter.
        </p>
      </div>
    </div>
  );
}
