// Image assets from Figma MCP
const imgSamira = "/assets/e1a3109de4a4f7b0a552c8c024e8fcfed309a2dd.png";
const imgLayla = "/assets/79478245b2eb932aea067aead4415c7e229164ad.png";
const imgRawan = "/assets/6fa207d3bd351023a09e21bd6688c0d60b8b02dd.png";
const imgRectangle = "/assets/279d457f9489bbcc989c57a4d827b573d21b9ad1.png";
const imgRectangle3 = "/assets/b1e07bba62b74412085777b8615576fe1675df2b.png";
const imgRectangle5 = "/assets/739e8ffddd0a204f9d32d1d29746484413531536.png";
const imgGroup = "/assets/7cea05f9e479e26e68d418e9f103f3ca6341950e.svg";
const imgGroup1 = "/assets/e846be4806700cba6a04b85875a09240d9a16601.svg";
const imgLogoContainer = "/assets/bba9e41063c51cc6af565dac1f9be78110d748f5.svg";
const imgRectangle4 = "/assets/c0b63a220fb0120f05a07ee0bb543bcd6909f177.svg";
const imgRectangle6 = "/assets/b13d17266d13676b59998a7bdacdaa37df6bae5c.svg";

interface MainScreenProps {
  onSamiraClick: () => void;
  onLaylaClick: () => void;
  onRawanClick: () => void;
  onHalaClick: () => void;
}

export default function MainScreen({
  onSamiraClick,
  onLaylaClick,
  onRawanClick,
  onHalaClick,
}: MainScreenProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "93.215px",
        paddingBottom: "78.785px",
        paddingLeft: "49.002px",
        paddingRight: "43.998px",
        gap: "155px",
      }}
      data-oid="bpk:3yf"
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }} data-oid="lb-5o2w">
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            bottom: 0,
            left: 0,
            right: "0.01%",
            top: "0.02%",
          }}
          data-oid="lajw954"
        />

        <div
          style={{
            position: "absolute",
            bottom: "0.02%",
            left: "0.01%",
            right: 0,
            top: 0,
          }}
          data-oid="d_al9bt"
        >
          <div
            style={{
              position: "absolute",
              bottom: "-31.64%",
              left: "-69.36%",
              right: 0,
              top: "-23.26%",
              maskImage: `url('${imgGroup}')`,
              maskClip: "no-clip",
              maskComposite: "intersect",
              maskMode: "alpha",
              maskRepeat: "no-repeat",
              maskPosition: "749.036px 446.443px",
              maskSize: "1079.89px 1919.55px",
            }}
            data-oid="7ijrg69"
          >
            <img
              alt=""
              style={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                height: "100%",
              }}
              src={imgGroup1}
              data-oid="_f8jgw:"
            />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          left: "49.002px",
          top: "93.215px",
          width: "987px",
          height: "1444px",
        }}
        data-oid="-nnz8c7"
      >
        {/* Header */}
        <div
          data-enter-group
          data-enter-order="1"
          style={{
            position: "absolute",
            left: "139.99px",
            top: "0px",
            width: "707.02px",
            height: "88.516px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "61.703px",
          }}
          data-oid="syer0j_"
        >
          <div
            style={{
              height: "82.302px",
              width: "73.317px",
              marginTop: "6.214px",
            }}
            data-oid="scwxh7j"
          >
            <img
              alt=""
              style={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                height: "100%",
              }}
              src={imgLogoContainer}
              data-oid="-sut_fe"
            />
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "normal",
              fontSize: "36px",
              textAlign: "center",
              color: "white",
              width: "572px",
              marginTop: "0.516px",
            }}
            data-oid="izy70_j"
          >
            <p style={{ margin: 0 }} data-oid="b9aqcfi">
              Meet a
            </p>
            <p style={{ margin: 0 }} data-oid="r92rt-z">
              metastatic Breast Cancer Patient
            </p>
          </div>
        </div>

        {/* Profiles Container */}
        <div
          style={{
            position: "absolute",
            left: "11.954px",
            top: "179.481px",
            width: "963.092px",
            height: "1264.519px",
          }}
          data-oid="udb0feu"
        >
          {/* First Row */}
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              width: "963.092px",
              height: "605.519px",
            }}
            data-oid="jwf6m2j"
          >
            {/* Samira */}
            <div
              data-enter
              data-enter-order="2"
              data-enter-delay="0.2"
              style={{
                position: "absolute",
                left: "15.014px",
                top: "0.345px",
                width: "447.004px",
                height: "604.829px",
                cursor: "pointer",
              }}
              onClick={onSamiraClick}
              data-oid="j27q1en"
            >
              <div
                style={{
                  height: "440px",
                  width: "448px",
                  backgroundImage: `url('${imgSamira}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "top left",
                }}
                data-oid="txwhat1"
              />

              <div
                style={{
                  position: "absolute",
                  left: "69.002px",
                  top: "465.829px",
                  width: "309px",
                  height: "139px",
                }}
                data-oid="dnv2u3g"
              >
                <div
                  style={{
                    position: "absolute",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "normal",
                    fontSize: "24px",
                    color: "white",
                    top: "50px",
                    left: "0px",
                    width: "309px",
                    height: "89px",
                  }}
                  data-oid="33sjwi_"
                >
                  <p style={{ margin: 0 }} data-oid="8dghy7.">
                    With visceral metastases
                  </p>
                  <p style={{ margin: 0 }} data-oid="jp_.2i4">
                    HER2+ HR+
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "bold",
                    fontSize: "36px",
                    color: "#5b6670",
                    top: "0px",
                    left: "35px",
                    width: "239px",
                    height: "95px",
                  }}
                  data-oid="y0tl4dj"
                >
                  <p style={{ margin: 0 }} data-oid="fvfzm93">
                    Meet Samira
                  </p>
                </div>
              </div>
            </div>

            {/* Layla */}
            <div
              data-enter
              data-enter-order="3"
              data-enter-delay="0.2"
              style={{
                position: "absolute",
                left: "501.074px",
                top: "0px",
                width: "447.004px",
                height: "605.519px",
                cursor: "pointer",
              }}
              onClick={onLaylaClick}
              data-oid="9mnyl75"
            >
              <div
                style={{
                  height: "441px",
                  width: "448px",
                  backgroundImage: `url('${imgLayla}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "top left",
                }}
                data-oid="qlqw.qa"
              />

              <div
                style={{
                  position: "absolute",
                  left: "69.002px",
                  top: "466.519px",
                  width: "309px",
                  height: "139px",
                }}
                data-oid="w8wo16h"
              >
                <div
                  style={{
                    position: "absolute",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "normal",
                    fontSize: "24px",
                    color: "white",
                    top: "50px",
                    left: "0px",
                    width: "309px",
                    height: "89px",
                  }}
                  data-oid=":jv8xj6"
                >
                  <p style={{ margin: 0 }} data-oid="izzy1uv">
                    With Lung and Bone metastases HER2+ HR-
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "bold",
                    fontSize: "36px",
                    color: "#5b6670",
                    top: "0px",
                    left: "35px",
                    width: "239px",
                    height: "95px",
                  }}
                  data-oid="gwh8pyf"
                >
                  <p style={{ margin: 0 }} data-oid="wc9jwq.">
                    Meet Layla
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "669.533px",
              width: "963.092px",
              height: "594.986px",
            }}
            data-oid="lmv_5::"
          >
            {/* Rawan */}
            <div
              data-enter
              data-enter-order="4"
              data-enter-delay="0.2"
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                width: "447.005px",
                height: "594.986px",
                cursor: "pointer",
              }}
              onClick={onRawanClick}
              data-oid=":yiwdb2"
            >
              <div
                style={{
                  height: "441px",
                  width: "448px",
                  backgroundImage: `url('${imgRawan}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "top left",
                }}
                data-oid="87d4vff"
              />

              <div
                style={{
                  position: "absolute",
                  left: "69.002px",
                  top: "455.986px",
                  width: "309px",
                  height: "139px",
                }}
                data-oid="5qp-dm0"
              >
                <div
                  style={{
                    position: "absolute",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "normal",
                    fontSize: "24px",
                    color: "white",
                    top: "50px",
                    left: "0px",
                    width: "309px",
                    height: "89px",
                  }}
                  data-oid="shwlltr"
                >
                  <p style={{ margin: 0 }} data-oid="g7p.au-">
                    With Visceral and Bone metastases HER2Low HR+
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "bold",
                    fontSize: "36px",
                    color: "#5b6670",
                    top: "0px",
                    left: "35px",
                    width: "239px",
                    height: "95px",
                  }}
                  data-oid="n991ao:"
                >
                  <p style={{ margin: 0 }} data-oid="p3hqb5o">
                    Meet Rawan
                  </p>
                </div>
              </div>
            </div>

            {/* Hala */}
            <div
              data-enter
              data-enter-order="5"
              data-enter-delay="0.2"
              style={{
                position: "absolute",
                left: "501.074px",
                top: "0px",
                width: "447.004px",
                height: "594.986px",
                cursor: "pointer",
              }}
              onClick={onHalaClick}
              data-oid="___msrj"
            >
              <div
                style={{
                  height: "441px",
                  width: "448px",
                  backgroundImage: `url('${imgRectangle}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "top left",
                }}
                data-oid="q1:559."
              />

              <div
                style={{
                  position: "absolute",
                  left: "69.002px",
                  top: "455.986px",
                  width: "309px",
                  height: "139px",
                }}
                data-oid="-2b-m.2"
              >
                <div
                  style={{
                    position: "absolute",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "normal",
                    fontSize: "24px",
                    color: "white",
                    top: "50px",
                    left: "0px",
                    width: "309px",
                    height: "89px",
                  }}
                  data-oid="fbq6qbl"
                >
                  <p style={{ margin: 0 }} data-oid="990pkmv">
                    With Denovo TNBC
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "bold",
                    fontSize: "36px",
                    color: "#5b6670",
                    top: "0px",
                    left: "35px",
                    width: "239px",
                    height: "95px",
                  }}
                  data-oid="d3hfg_m"
                >
                  <p style={{ margin: 0 }} data-oid="wu19.an">
                    Meet Hala
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        data-enter
        data-enter-order="6"
        data-enter-delay="0.4"
        style={{
          position: "absolute",
          left: "84.002px",
          top: "1692.215px",
          height: "149px",
          width: "917px",
        }}
        data-oid="d5v0hze"
      >
        <div
          style={{
            position: "absolute",
            height: "82px",
            left: "643px",
            top: "-0.21px",
            width: "274px",
            overflow: "hidden",
          }}
          data-oid="aa9tu70"
        >
          <div style={{ position: "absolute", inset: 0 }} data-oid="crapu3c">
            <div
              style={{
                position: "absolute",
                bottom: "-0.23%",
                left: 0,
                right: "-0.48%",
                top: 0,
              }}
              data-oid="jub9lt1"
            >
              <div
                style={{
                  position: "absolute",
                  backgroundImage: `url('${imgRectangle3}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "top left",
                  maskImage: `url('${imgRectangle4}')`,
                  maskClip: "no-clip",
                  maskComposite: "intersect",
                  maskMode: "alpha",
                  maskRepeat: "no-repeat",
                  maskPosition: "0px",
                  maskSize: "274px 82px",
                  bottom: "-0.23%",
                  left: 0,
                  right: "-0.48%",
                  top: 0,
                }}
                data-oid="wk6sm3q"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            height: "36.187px",
            left: 0,
            top: "105px",
            width: "688px",
          }}
          data-oid="idz1fq4"
        >
          <div
            style={{
              position: "absolute",
              fontFamily: "Inter, sans-serif",
              fontWeight: "normal",
              fontSize: "15px",
              color: "black",
              textAlign: "center",
              whiteSpace: "pre",
              top: "18.19px",
              left: "calc(50% - 138.449px)",
              transform: "translateX(-50%)",
            }}
            data-oid="aj.jrfa"
          >
            <p style={{ margin: 0 }} data-oid="gmw:1gv">
              * Photos are not related to the real patients' cases
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              height: "35.992px",
              left: "105.52%",
              right: "-27.32%",
              top: "calc(50% + 0.098px)",
              transform: "translateY(-50%)",
              overflow: "hidden",
            }}
            data-oid="lc4m55o"
          >
            <div style={{ position: "absolute", inset: 0 }} data-oid="_.snimf">
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.37%",
                  left: 0,
                  right: "-0.6%",
                  top: 0,
                }}
                data-oid="qno9d-8"
              >
                <div
                  style={{
                    position: "absolute",
                    backgroundImage: `url('${imgRectangle5}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top left",
                    maskImage: `url('${imgRectangle6}')`,
                    maskClip: "no-clip",
                    maskComposite: "intersect",
                    maskMode: "alpha",
                    maskRepeat: "no-repeat",
                    maskPosition: "0px",
                    maskSize: "149.985px 35.992px",
                    bottom: "-1.37%",
                    left: 0,
                    right: "-0.6%",
                    top: 0,
                  }}
                  data-oid="t:flao_"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
