// Image assets from Figma MCP
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgMed3 = "/assets/323c7b24a789223b9d1907024ee20728a73e33bd.svg";
const imgMed2 = "/assets/1123db8fcaf354d1bc847bc1912725d64c0d2f51.svg";
const imgMed1 = "/assets/31abb945d423f9279a46a5d66ad5736526a6c1cb.svg";

interface Rawan11Props {
  onBackClick: () => void;
  onHomeClick: () => void;
  onContinueClick: () => void;
}

export default function Rawan11({
  onBackClick,
  onHomeClick,
  onContinueClick,
}: Rawan11Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
      data-name="Rawan11"
      data-node-id="52:1693"
      data-oid="nkp5mr-"
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
        data-oid="72l2e-v"
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
        data-oid="27soaom"
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
        data-node-id="52:1699"
        data-oid="_0uzewm"
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
        data-node-id="52:1694"
        data-oid="_3l:c11"
      />

      {/* Main title */}
      <div
        data-enter
        data-enter-order="1"
        style={{
          position: "absolute",
          top: "171px",
          left: "75px",
          width: "929px",
          height: "182px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "41px",
          color: "#250858",
          lineHeight: "normal",
          zIndex: 6,
        }}
        data-node-id="52:1737"
        data-oid="dt1v9p:"
      >
        <p style={{ margin: 0, lineHeight: "normal" }} data-oid="o1xg.0o">
          ESMO/MASCC Guidelines categorize ENHERTU as moderately emetogenic and
          recommend a three-drug antiemetic regimen1
        </p>
      </div>

      {/* Guidelines text */}
      <div
        data-enter
        data-enter-order="2"
        style={{
          position: "absolute",
          top: "353px",
          left: "72px",
          width: "935px",
          height: "56px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
          fontSize: "25px",
          color: "#5d6771",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:1792"
        data-oid="nv2ci2w"
      >
        <ul
          style={{ margin: 0, paddingLeft: "37.5px", listStyleType: "disc" }}
          data-oid="s-44.6h"
        >
          <li
            style={{ marginBottom: "0", lineHeight: "28px" }}
            data-oid="ydjvro7"
          >
            <span data-oid="98ie8vs">
              The SmPC indicates ENHERTU as emetogenic, which includes delayed
              nausea and/or vomiting2
            </span>
          </li>
          <li style={{ lineHeight: "28px" }} data-oid="m-5pfq.">
            <span data-oid=".61wun5">
              Prophylactic antiemetics are recommended by guidelines and
              prescribing information1–3
            </span>
          </li>
        </ul>
      </div>

      {/* Guidelines subtitle */}
      <div
        data-enter
        data-enter-order="3"
        style={{
          position: "absolute",
          top: "538px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "656px",
          height: "56px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "800",
          fontSize: "25px",
          color: "#000000",
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "28px",
          zIndex: 6,
        }}
        data-node-id="52:1795"
        data-oid="09sby.6"
      >
        <p style={{ margin: 0, lineHeight: "28px" }} data-oid="041.qtt">
          ESMO and MASCC Guidelines for the prevention
          <br data-oid="82t6qm4" />
          ENHERTU‑related nausea and vomiting recommend:1
        </p>
      </div>

      {/* Treatment boxes */}
      {/* Box 1 - 5-HT3 receptor antagonists */}
      <div
        data-enter
        data-enter-order="4"
        style={{
          position: "absolute",
          top: "642px",
          left: "75px",
          width: "934px",
          height: "268px",
          backgroundColor: "#ee7623",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-node-id="52:1781"
        data-oid="9ygp052"
      >
        <div
          style={{
            position: "absolute",
            top: "122px",
            left: "245px",
            width: "688px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "41px",
            color: "#ffffff",
            lineHeight: "normal",
            zIndex: 6,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
          data-node-id="52:1785"
          data-oid="k23ie03"
        >
          <p style={{ margin: 0, lineHeight: "normal" }} data-oid="dqwww1a">
            5-HT3 receptor antagonists
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "87px",
            width: "110px",
            height: "160px",
            zIndex: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
            flexGrow: 0,
            flexWrap: "wrap",
            alignItems: "center",
          }}
          data-name="MED3"
          data-node-id="140:862"
          data-oid="wi0a0g-"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
              marginLeft: "-3px",
            }}
            src={imgMed3}
            data-oid="i9t.g_q"
          />
        </div>
      </div>

      {/* Box 2 - Corticosteroids */}
      <div
        data-enter
        data-enter-order="5"
        style={{
          position: "absolute",
          top: "960px",
          left: "75px",
          width: "934px",
          height: "268px",
          backgroundColor: "#250858",
          zIndex: 1,
        }}
        data-node-id="52:1783"
        data-oid="v5qwjf2"
      >
        <div
          style={{
            position: "absolute",
            top: "109px",
            left: "314px",
            width: "688px",
            height: "49px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "41px",
            color: "#ffffff",
            lineHeight: "normal",
            zIndex: 6,
          }}
          data-node-id="52:1788"
          data-oid="mb1kitw"
        >
          <p style={{ margin: 0, lineHeight: "normal" }} data-oid="bbayghr">
            Corticosteroids
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "75px",
            width: "115px",
            height: "160px",
            zIndex: 4,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
          data-name="Med2"
          data-node-id="140:864"
          data-oid="1kc-yjh"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
            src={imgMed2}
            data-oid="hmyif59"
          />
        </div>
      </div>

      {/* Box 3 - NK-1 receptor antagonists */}
      <div
        data-enter
        data-enter-order="6"
        style={{
          position: "absolute",
          top: "1278px",
          left: "75px",
          width: "934px",
          height: "268px",
          backgroundColor: "#c0d72f",
          zIndex: 1,
        }}
        data-node-id="52:1784"
        data-oid="0j6dvnf"
      >
        <div
          style={{
            position: "absolute",
            top: "96px",
            left: "314px",
            width: "688px",
            height: "49px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            fontSize: "41px",
            color: "#ffffff",
            lineHeight: "normal",
            zIndex: 6,
          }}
          data-node-id="52:1789"
          data-oid="eu-xvnh"
        >
          <p style={{ margin: 0, lineHeight: "normal" }} data-oid="y2hhyke">
            NK-1 receptor antagonists
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "69px",
            width: "136px",
            height: "140px",
            zIndex: 4,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-name="Med1"
          data-node-id="140:863"
          data-oid="15ki-tl"
        >
          <img
            alt=""
            style={{
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
              marginLeft: "6px",
            }}
            src={imgMed1}
            data-oid="71pld6v"
          />
        </div>
      </div>

      {/* Continue Button */}
      <div
        data-enter
        data-enter-order="7"
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
        data-node-id="52:1701"
        onClick={onContinueClick}
        data-oid="l2.q3q_"
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
          data-oid="..1r_d5"
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
            data-oid="8g1r2k0"
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
          data-oid="cgp_z32"
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
            data-oid="5nd65wh"
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
          data-oid="hsnowjr"
        >
          <p style={{ margin: 0, lineHeight: "54px" }} data-oid="p_awr6f">
            How the patient is feeling now
          </p>
        </div>
      </div>

      {/* Footer text */}
      <div
        style={{
          position: "absolute",
          top: "1808px",
          left: "105px",
          width: "953px",
          height: "75px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fontSize: "12px",
          color: "#000000",
          lineHeight: "15px",
          zIndex: 6,
        }}
        data-node-id="52:1700"
        data-oid="6y4c5hv"
      >
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="uh:8.9e">
          5‑HT3, 5-hydroxytryptamine 3; ESMO, European Society for Medical
          Oncology; MASCC, Multinational Association Of Supportive Care In
          Cancer; NK-1, neurokinin 1; SmPC, Summary of Product Characteristics.
        </p>
        <p style={{ margin: 0, lineHeight: "15px" }} data-oid="n7zleh2">
          1. Scotté F, et al. Support Care Cancer. 2023;32(1):45; 2. EMA.
          Enhertu® SmPC. Available at:
          https://www.ema.europa.eu/en/documents/product-information/enhertu-epar-product-information_en.pdf.
          Accessed January 2024; 3. ENHERTU PI. Available at:
          https://daiichisankyo.us/prescribing-information-portlet/getPIContent?productName=Enhertu&inline=true.
          Accessed January 2024.
        </p>
      </div>
    </div>
  );
}
