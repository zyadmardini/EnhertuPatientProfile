// Image assets from Figma MCP
const imgVector = "/assets/3872ad762fe95539f6bb5fe0e1eda36575871062.svg";
const imgVector1 = "/assets/c130ce6d17d22ed1dbfc0b6cf407ede8a4f75160.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Layla11Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla11({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Layla11Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="o96ugy1"
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
        data-oid="n0wr1d."
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
        data-oid="60h.x0j"
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
        data-oid=":676514"
      />

      {/* Main title */}
      <div
        data-enter
        data-enter-order="1"
        style={{
          position: "absolute",
          left: "72px",
          top: "167px",
          width: "656px",
          height: "80px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "50px",
          color: "#5b6670",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-oid="xxwh9da"
      >
        Case Study: Layla
      </div>

      {/* Content container */}
      <div
        data-enter-group
        data-enter-order="2"
        style={{
          position: "absolute",
          left: "72px",
          top: "276px",
          width: "937px",
          height: "399px",
          zIndex: 1,
        }}
        data-oid="q3b2c:8"
      >
        {/* Treatment background */}
        <div
          data-enter-swipe
          style={{
            position: "absolute",
            left: "174px", // 246 - 72
            top: "0px", // 276 - 276
            width: "762px",
            height: "169px",
            backgroundColor: "#7ccada",
            zIndex: 2,
          }}
          data-oid="t6ttdw-"
        />

        {/* Treatment title */}
        <div
          data-enter
          data-enter-order="3"
          style={{
            position: "absolute",
            left: "411px", // 483 - 72
            top: "25px", // 301 - 276
            width: "486px",
            height: "124px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "51px",
            color: "white",
            lineHeight: "normal",
            whiteSpace: "pre",
            zIndex: 3,
          }}
          data-oid="zd4gc-w"
        >
          <p style={{ margin: 0 }} data-oid="0lr5aou">
            Patient response to
          </p>
          <p style={{ margin: 0 }} data-oid="v.szbg0">
            ENHERTU
          </p>
        </div>

        {/* Patient image */}
        <div
          data-enter
          data-enter-order="4"
          style={{
            position: "absolute",
            left: "0px", // 72 - 72
            top: "0px", // 276 - 276
            width: "366px",
            height: "366px",
            zIndex: 4,
          }}
          data-oid="7h5x1pg"
        >
          <img
            src={imgVector}
            alt="Patient"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="58gr87o"
          />
        </div>

        {/* Treatment container */}
        <div
          data-enter
          data-enter-order="5"
          style={{
            position: "absolute",
            left: "0px", // 72 - 72
            top: "103px", // 379 - 276
            width: "937px",
            height: "296px",
            backgroundColor: "#d5eff4",
            borderTopLeftRadius: "93px",
            zIndex: 1,
          }}
          data-oid="j08hvg7"
        />

        {/* Treatment text */}
        <div
          data-enter
          data-enter-order="6"
          style={{
            position: "absolute",
            left: "366px", // 438 - 72
            top: "191px", // 467 - 276
            width: "523px",
            height: "175px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "black",
            lineHeight: "54px",
            zIndex: 6,
          }}
          data-oid="tjpw969"
        >
          <ul
            style={{ listStyleType: "disc", marginLeft: "46.5px" }}
            data-oid="e.kd7yn"
          >
            <li data-oid="49wpq5.">
              No serious adverse events were experienced by this patient
            </li>
          </ul>
        </div>

        {/* Secondary image */}
        <div
          data-enter
          data-enter-order="7"
          style={{
            position: "absolute",
            left: "95.99px", // 167.99 - 72
            top: "83px", // 359 - 276
            width: "174.04px",
            height: "217.02px",
            zIndex: 5,
          }}
          data-oid="i6hl_hd"
        >
          <img
            src={imgVector1}
            alt="Treatment response"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="r5e5dz."
          />
        </div>
      </div>

      {/* Main message */}
      <div
        data-enter
        data-enter-order="8"
        style={{
          position: "absolute",
          left: "78px",
          top: "730px",
          width: "930px",
          height: "80px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "28px",
          color: "#ec7624",
          lineHeight: "40px",
          zIndex: 6,
        }}
        data-oid="lb4gp4f"
      >
        In DESTINY-Breast03, 99.6% of patients experienced an adverse event and
        individual experiences may vary
      </div>

      {/* Continue button */}
      <div
        data-enter
        data-enter-order="9"
        style={{
          position: "absolute",
          left: "190px",
          top: "1615px",
          width: "699px",
          height: "112px",
          cursor: "pointer",
          zIndex: 6,
        }}
        onClick={onContinueClick}
        data-oid="qgenpny"
      >
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0.29%",
            right: "0px",
            top: "0.89%",
            width: "100%",
            height: "100%",
          }}
          data-oid="rso5ljb"
        >
          <img
            src={img}
            alt="Button background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid=".0k0t-o"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "82.4%",
            top: "0px",
            width: "17.6%",
            height: "100%",
          }}
          data-oid="eajz-dk"
        >
          <img
            src={img1}
            alt="Button icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="-5h6kdg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "28.57%",
            right: "4.15%",
            bottom: "28.57%",
            left: "17.6%",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "white",
            textAlign: "center",
            lineHeight: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          data-oid=":lq0t3a"
        >
          DB-03 tolerability data
        </div>
      </div>

      {/* Footer text */}
      <div
        data-enter
        data-enter-order="10"
        style={{
          position: "absolute",
          left: "76px",
          top: "1875px",
          width: "932px",
          height: "15px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "medium",
          fontSize: "12px",
          color: "black",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-oid="1p84ncb"
      >
        <p style={{ margin: 0 }} data-oid="h2ll8ph">
          Hurvitz SA, et al. Presented at San Antonio Breast Cancer Symposium
          2022. Presentation #GS2-02.
        </p>
      </div>
    </div>
  );
}
