// Image assets from Figma MCP
const imgVector = "/assets/aee53a0377d0b242aeb7d3a535bfb57a93635b99.svg";
const imgVector1 = "/assets/96ec5b8ed2fa23d37d3d1e8d9f908f1733bdf681.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Layla9Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla9({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Layla9Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "white",
      }}
      data-oid="16a51f4"
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
        data-oid="3f:eyk8"
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
        data-oid="lo5h7-7"
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
        data-oid="pqi_9x1"
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
        data-oid="9i3k0r3"
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
          height: "499px",
          zIndex: 1,
        }}
        data-oid="3rm_ikg"
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
            backgroundColor: "#58378a",
            zIndex: 2,
          }}
          data-oid="gnf86he"
        />

        {/* Treatment title */}
        <div
          data-enter
          data-enter-order="3"
          style={{
            position: "absolute",
            left: "411px", // 483 - 72
            top: "54px", // 330 - 276
            width: "321px",
            height: "62px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "51px",
            color: "white",
            lineHeight: "normal",
            whiteSpace: "nowrap",
            zIndex: 3,
          }}
          data-oid="gg8achc"
        >
          2L treatment
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
          data-oid="q.t.3l4"
        >
          <img
            src={imgVector}
            alt="Patient"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="369v8t8"
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
            height: "396px",
            backgroundColor: "#dcd2ec",
            borderTopLeftRadius: "93px",
            zIndex: 1,
          }}
          data-oid="8u_kphz"
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
            lineHeight: "45px",
            zIndex: 6,
          }}
          data-oid="6eh95eb"
        >
          <ul
            style={{ listStyleType: "disc", marginLeft: "30.5px" }}
            data-oid="fp2p9hq"
          >
            <li style={{ marginBottom: 0 }} data-oid="u_t6h5x">
              Treatment with ENHERTU began March 2022
            </li>
            <li data-oid="0u._kfe">Prophylactic antiemetics (dexamethasone + ondansetron</li>
          </ul>
        </div>

        {/* Additional treatment text */}
        <div
          data-enter
          data-enter-order="7"
          style={{
            position: "absolute",
            left: "25px", // 97 - 72
            top: "375px", // 661 - 276
            width: "864px",
            height: "89px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "31px",
            color: "black",
            lineHeight: "45px",
            zIndex: 6,
          }}
          data-oid="j79:qbb"
        >
          <p style={{ marginLeft: "345px" }} data-oid="6kj:r-h">
            + aprepitant) were given to prevent nausea and
            vomiting
          </p>
        </div>

        {/* Secondary image */}
        <div
          data-enter
          data-enter-order="8"
          style={{
            position: "absolute",
            left: "129.76px", // 201.76 - 72
            top: "100.65px", // 376.65 - 276
            width: "128.1px",
            height: "187.769px",
            zIndex: 5,
          }}
          data-oid="lp0fzcm"
        >
          <img
            src={imgVector1}
            alt="Treatment"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="1kkp0jx"
          />
        </div>
      </div>

      {/* Main message */}
      <div
        data-enter
        data-enter-order="9"
        style={{
          position: "absolute",
          left: "78px",
          top: "804px",
          width: "930px",
          height: "200px",
          fontFamily: "Inter, sans-serif",
          fontStyle: "italic",
          fontSize: "28px",
          color: "#ec7624",
          textAlign: "center",
          lineHeight: "40px",
          zIndex: 6,
        }}
        data-oid="fywden1"
      >
        <p style={{ margin: 0 }} data-oid="dbykxsc">
          ENHERTU is emetogenic, which includes delayed nausea
        </p>
        <p style={{ margin: 0 }} data-oid="d0js9g_">
          and/or vomiting.
        </p>
        <p style={{ margin: 0 }} data-oid="clyqbky">
          Prior to each dose of ENHERTU, patients should be premedicated with a
          combination regimen of two or three medicinal products
        </p>
      </div>

      {/* Continue button */}
      <div
        data-enter
        data-enter-order="10"
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
        data-oid="erklk2n"
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
          data-oid="zdsmk8g"
        >
          <img
            src={img}
            alt="Button background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="bvyaa16"
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
          data-oid="2alg4al"
        >
          <img
            src={img1}
            alt="Button icon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            data-oid="xe5wlok"
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
          data-oid="dbuieqz"
        >
          International Guidance
        </div>
      </div>

      {/* Footer text */}
      <div
        data-enter
        data-enter-order="11"
        style={{
          position: "absolute",
          left: "76px",
          top: "1860px",
          width: "932px",
          height: "30px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "medium",
          fontSize: "12px",
          color: "black",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-oid="k1_98jb"
      >
        <p style={{ margin: 0 }} data-oid="kjn2xmh">
          ENHERTU EU Summary of Product Characteristics 2023. Available at:
          https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf.
          Accessed January 2024.
        </p>
      </div>
    </div>
  );
}
