// Image assets from Figma MCP
const imgGraph121 = "/assets/3ab7d4df935ec31ba4445045fd92a034d6f34bad.png";
const imgVector = "/assets/d6ad4d4a4861d1564624156b22921f1dcedc1fcf.svg";
const img = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const img1 = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";

interface Hala9Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Hala9({
  onContinueClick,
  onBackClick,
  onHomeClick,
}: Hala9Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        backgroundColor: "#ffffff",
      }}
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
      >
        ⌂
      </div>

      {/* Frame 30 - Header Section */}
      <div
        data-enter
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "1080px",
          height: "373px",
          zIndex: 1,
        }}
      >
        {/* Header background */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "756px",
            height: "27px",
            background: "linear-gradient(to right, #ec7624, #ffb061)",
            zIndex: 2,
          }}
        />

        {/* Frame 29 */}
        <div
          style={{
            position: "absolute",
            left: "3px",
            top: "27px",
            width: "1077px",
            height: "346px",
            zIndex: 1,
          }}
        >
          {/* Frame 28 - HR- Vector Container */}
          <div
            data-enter
            data-enter-delay="0.1"
            style={{
              position: "absolute",
              left: "-6px",
              top: "245px",
              width: "346px",
              height: "167px",
              zIndex: 5,
            }}
          >
            {/* Vector Background */}
            <div
              style={{
                position: "absolute",
                left: "0px",
                top: "30px",
                width: "346px",
                height: "138px",
                zIndex: 1,
              }}
            >
              <img
                src={imgVector}
                alt="Vector background"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* HR- Text */}
            <div
              style={{
                position: "absolute",
                left: "114px",
                top: "70px",
                width: "97px",
                height: "59px",
                fontSize: "38px",
                fontWeight: "bold",
                color: "white",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.2",
                zIndex: 10,
              }}
            >
              HR-
            </div>
          </div>

          {/* Main Title */}
          <div
            data-enter
            data-enter-delay="0.2"
            style={{
              position: "absolute",
              left: "192px",
              top: "82px",
              width: "782px",
              height: "182px",
              fontSize: "41px",
              fontWeight: "bold",
              color: "#250858",
              fontFamily: "Inter, sans-serif",
              lineHeight: "1.2",
              zIndex: 3,
            }}
          >
            <span>Exploratory subgroup analyses show </span>
            <span style={{ color: "#ee7623" }}>
              consistent ENHERTU efficacy
            </span>
            <span> in patients with HR– / HER2‑low mBC</span>
          </div>
        </div>
      </div>

      {/* Frame 34 - Main Content Section */}
      <div
        data-enter
        data-enter-delay="0.3"
        style={{
          position: "absolute",
          left: "35px",
          top: "474px",
          width: "1010px",
          height: "1416px",
          zIndex: 1,
        }}
      >
        {/* Frame 32 - Graph and Info */}
        <div
          style={{
            position: "absolute",
            left: "36.5px",
            top: "0px",
            width: "937px",
            height: "622px",
            zIndex: 1,
          }}
        >
          {/* Graph Image */}
          <div
            data-enter
            data-enter-delay="0.4"
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              width: "937px",
              height: "415px",
              backgroundImage: `url('${imgGraph121}')`,
              backgroundSize: "100% 100%",
              backgroundPosition: "top left",
              zIndex: 4,
            }}
          />

          {/* Frame 31 - Info Box */}
          <div
            data-enter
            data-enter-delay="0.5"
            style={{
              position: "absolute",
              left: "0px",
              top: "486px",
              width: "937px",
              height: "136px",
              zIndex: 1,
            }}
          >
            {/* Rectangle 43 - Info Box Background */}
            <div
              style={{
                position: "absolute",
                left: "3px",
                top: "0px",
                width: "934px",
                height: "116px",
                backgroundColor: "#f3f7d9",
                border: "4px solid #c5d752",
                zIndex: 1,
              }}
            />

            {/* Info Text */}
            <div
              style={{
                position: "absolute",
                left: "12px",
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
            >
              Nausea, vomiting, fatigue and alopecia were the most common ENHERTU-related AEs observed in DESTINY-Breast04
            </div>
          </div>
        </div>

        {/* Frame 33 - Button and Footer */}
        <div
          style={{
            position: "absolute",
            left: "36.5px",
            top: "1141px",
            width: "937px",
            height: "275px",
            zIndex: 1,
          }}
        >
          {/* Treatment Button - Group 16 */}
          <div
            data-enter
            data-enter-delay="0.6"
            style={{
              position: "absolute",
              left: "119px",
              top: "0px",
              width: "699px",
              height: "112px",
              cursor: "pointer",
              zIndex: 100,
            }}
            onClick={onContinueClick}
          >
            {/* Button Background */}
            <div
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <img
                src={img}
                alt="Treatment button"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Button Icon */}
            <div
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                width: "115px",
                height: "112px",
                zIndex: 101,
              }}
            >
              <img
                src={img1}
                alt="Button icon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Button Text */}
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
            >
              Tolerability data
            </div>
          </div>

          {/* Footer Text */}
          <div
            data-enter
            data-enter-delay="0.7"
            style={{
              position: "absolute",
              left: "5px",
              top: "200px",
              width: "927px",
              height: "75px",
              fontSize: "12px",
              fontWeight: "500",
              color: "black",
              fontFamily: "Inter, sans-serif",
              lineHeight: "1.25",
              zIndex: 6,
            }}
          >
            <div style={{ marginBottom: "4px" }}>
              For efficacy in the hormone receptor–negative cohort, hormone receptor status is based on data from the electronic data capture corrected for misstratification.
            </div>
            <div style={{ marginBottom: "4px" }}>
              CI, confidence interval; CR, controlled release; HER2, human epidermal growth factor receptor 2; HR, hormone receptor; mBC, metastatic breast cancer; mDOR, median duration of response; (m)OS, (median) overall survival; (m)PFS, (median) progression-free survival; NE, not evaluable; cORR, confirmed overall response rate; PR, partial response.
            </div>
            <div>
              Modi S, et al. N Engl J Med. 2022;387:9-20. doi:10.1056/NEJMoa2203690.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}