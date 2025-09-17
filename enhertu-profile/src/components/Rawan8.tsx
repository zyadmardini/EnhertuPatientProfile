// Image assets from Figma MCP
const imgGraph071 = "/assets/d6ca25f8766e1fbb44369578ba4780a7976217ee.png";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/fd146c4fe67459a60e7417374eecc063a3b335e8.svg";

interface Rawan8Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan8({
  onBackClick,
  onHomeClick,
  onContinueClick,
}: Rawan8Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-name="Rawan8"
      data-node-id="52:1531"
      data-oid="-2o496d"
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
        data-oid="4yymfak"
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
        data-oid="sr63j4h"
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
        data-node-id="52:1536"
        data-oid="4l.icc4"
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
        data-node-id="52:1533"
        data-oid="vd3b2ve"
      />

      {/* Main title */}
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
        data-oid="bnbvv0j"
      >
        ENHERTU  <span style={{ color: "#ee7623" }} data-oid="7v-_kmo">
          tripled cORR
        </span> vs. chemotherapy
      </div>

      {/* Vector icon */}
      <div
        data-enter
        data-enter-order="2"
        style={{
          position: "absolute",
          top: "286px",
          left: "0px",
          width: "346px",
          height: "138px",
          zIndex: 3,
        }}
        data-oid="dpfl94p"
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
          data-oid="41bybpj"
        />
      </div>

      {/* HR+ label */}
      <div
        data-enter
        data-enter-order="3"
        style={{
          position: "absolute",
          top: "325px",
          left: "95px",
          width: "97px",
          height: "59px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "38px",
          color: "#ffffff",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-node-id="52:1538"
        data-oid="ofo_v85"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="j7d:968">
          HR+
        </p>
      </div>

      {/* cORR label */}
      <div
        style={{
          position: "absolute",
          top: "498px",
          left: "630px",
          width: "140px",
          height: "59px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "38px",
          color: "#250858",
          textAlign: "center",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-node-id="52:1556"
        data-oid="8renkep"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="xxvotm8">
          cORR
        </p>
      </div>

      {/* HR+ box */}
      <div
        style={{
          position: "absolute",
          top: "557px",
          left: "445px",
          width: "532px",
          height: "58px",
          backgroundColor: "#250858",
          zIndex: 2,
        }}
        data-node-id="52:1553"
        data-oid="rxgdr64"
      >
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "218px",
            width: "97px",
            height: "59px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "38px",
            color: "#ffffff",
            lineHeight: "normal",
            zIndex: 6,
          }}
          data-node-id="52:1554"
          data-oid="z..8ve7"
        >
          <p style={{ margin: 0, lineHeight: "normal" }} data-oid="8k8g0v-">
            HR+
          </p>
        </div>
      </div>

      {/* Main graph */}
      <div
        data-enter
        data-enter-order="4"
        style={{
          position: "absolute",
          top: "661px",
          left: "75px",
          width: "930px",
          height: "682px",
          backgroundImage: `url('${imgGraph071}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 4,
        }}
        data-name="Graph-07 1"
        data-node-id="52:1552"
        data-oid="n3jpf53"
      />

      {/* Continue Button */}
      <div
        data-enter
        data-enter-order="5"
        style={{
          position: "absolute",
          top: "1615px",
          left: "190.5px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 100,
        }}
        data-node-id="52:1535"
        onClick={onContinueClick}
        data-oid="tfxsnf0"
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
          data-oid="owkxuk_"
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
            data-oid="6ual4sx"
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
          data-oid="ysih5y2"
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
            data-oid="z19:kn6"
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
          data-oid="bwd.sw:"
        >
          <p style={{ margin: 0, lineHeight: "54px" }} data-oid="8r_ytvz">
            Tolerability data
          </p>
        </div>
      </div>

      {/* Footer text */}
      <div
        style={{
          position: "absolute",
          top: "1815px",
          left: "73px",
          width: "927px",
          height: "75px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "12px",
          color: "#000000",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-node-id="52:1539"
        data-oid="y6iz5fl"
      >
        <p
          style={{ margin: 0, lineHeight: "15px", fontWeight: "bold" }}
          data-oid=":8b:9zf"
        >
          HR status is based on the data from the electronic data capture
          corrected for misstratification.
        </p>
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid=":ubttik">
          *The response of 1 patient was not confirmed. †Clinical benefit rate
          is defined as the sum of complete response, partial response rate, and
          more than 6 months sable disease rate, based on blinded independent
          central review.
        </p>
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="wv0limo">
          cORR, confirmed objective response rate; HR, hormone receptor; IHC,
          immunohistochemistry; ISH, in situ hybridization.
        </p>
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="o27nq5w">
          Modi S, et al. Presented at ASCO 2022. Abstract LBA3.
        </p>
      </div>
    </div>
  );
}
