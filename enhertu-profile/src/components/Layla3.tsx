// Image assets from Figma MCP
const imgGroup17 = "/assets/97f35f9af3b928a4a96696e091e16468cbaf024b.png";
const imgGroup18 = "/assets/3195a242dac5b0204e112d9108269adb0ce1dabf.png";
const imgButtonContainer = "/assets/9a9889d88946983845f96caff62c94b17da1b4ec.svg";
const imgIconContainer = "/assets/4711e851a8fe2654d4c23f643fa771dc6e934758.svg";
const imgVector = "/assets/f74766b67109569552a5a61be5a8cfb9605d8c13.svg";
const imgVector1 = "/assets/0a8f93ce89120f39f92a645ee9cb2f0b34eb570c.svg";

interface Layla3Props {
  onContinueClick: () => void;
  onBackClick: () => void;
  onHomeClick: () => void;
}

export default function Layla3({ onContinueClick, onBackClick, onHomeClick }: Layla3Props) {
  return (
    <div style={{ 
      position: 'relative', 
      width: '1080px', 
      height: '1920px', 
      backgroundColor: 'white'
    }}>
      {/* Navigation Buttons */}
      <div 
        style={{ 
          position: 'absolute',
          top: '50px',
          left: '50px',
          width: '60px',
          height: '60px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#5b6670',
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}
        onClick={onBackClick}
      >
        ←
      </div>

      <div 
        style={{ 
          position: 'absolute',
          top: '50px',
          right: '50px',
          width: '60px',
          height: '60px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#5b6670',
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}
        onClick={onHomeClick}
      >
        ⌂
      </div>

      {/* Header background */}
      <div 
        data-enter
        style={{ 
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '756px',
          height: '27px',
          background: 'linear-gradient(to right, #ec7624, #ffb061)',
          zIndex: 2
        }}
      />

      {/* Main content container */}
      <div 
        data-enter-group
        data-enter-order="1"
        style={{ 
          position: 'absolute',
          left: '35px',
          top: '180px',
          width: '1009px',
          height: '1560px',
          zIndex: 1
        }}
      >
        {/* Content frame */}
        <div 
          data-enter-group
          data-enter-order="2"
          style={{ 
            position: 'absolute',
            left: '36px',
            top: '0px',
            width: '937px',
            height: '1315px',
            zIndex: 1
          }}
        >
          {/* Title */}
          <div 
            data-enter
            data-enter-order="1"
            style={{ 
              position: 'absolute',
              left: '0px',
              top: '0px',
              width: '937px',
              height: '80px',
              fontSize: '50px',
              fontWeight: 'bold',
              color: '#5b6670',
              display: 'flex',
              alignItems: 'center',
              zIndex: 6
            }}
          >
            Case Study: Layla
          </div>

          {/* Main content frame */}
          <div 
            data-enter-group
            data-enter-order="3"
            style={{ 
              position: 'absolute',
              left: '0px',
              top: '109px',
              width: '937px',
              height: '631px',
              zIndex: 1
            }}
          >
            {/* Treatment background */}
            <div 
              data-enter-swipe
              style={{ 
                position: 'absolute',
                left: '174px',
                top: '0px',
                width: '762px',
                height: '169px',
                backgroundColor: '#c5d752',
                zIndex: 2
              }}
            />

            {/* Vector decoration */}
            <div 
              data-enter
              data-enter-order="1"
              style={{ 
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '366px',
                height: '366px',
                zIndex: 4
              }}
            >
              <img 
                src={imgVector} 
                alt="" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Treatment title */}
            <div 
              data-enter
              data-enter-order="2"
              style={{ 
                position: 'absolute',
                left: '411px',
                top: '54px',
                width: '314px',
                height: '62px',
                fontSize: '51px',
                fontWeight: 'bold',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                zIndex: 3
              }}
            >
              1L treatment
            </div>

  

            {/* Vector decoration 2 */}
            <div 
              data-enter
              data-enter-order="4"
              style={{ 
                position: 'absolute',
                left: '129.76px',
                top: '100.65px',
                width: '128.1px',
                height: '187.77px',
                zIndex: 4
              }}
            >
              <img 
                src={imgVector1} 
                alt="" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Treatment container */}
            <div 
              data-enter-swipe
              style={{ 
                position: 'absolute',
                left: '0px',
                top: '103px',
                width: '937px',
                height: '528px',
                backgroundColor: '#f3f7d9',
                borderTopLeftRadius: '93px',
                zIndex: 1
              }}
            />

            {/* Treatment details */}
            <div 
              data-enter
              data-enter-order="5"
              style={{ 
                position: 'absolute',
                left: '6px',
                top: '388px',
                width: '901px',
                height: '243px',
                fontSize: '31px',
                fontWeight: 'bold',
                color: 'black',
                zIndex: 6
              }}
            >
              <ul style={{ margin: 0, paddingLeft: '46.5px' }}>
                <li style={{ marginBottom: '0px' }}>
                  <span style={{ lineHeight: '54px' }}>Paclitaxel was given for six cycles </span>
                </li>
                <li style={{ marginBottom: '0px' }}>
                  <span style={{ lineHeight: '54px' }}>Trastuzumab + pertuzumab was given as maintenance therapy until February 2022</span>
                </li>
                <li>
                  <span style={{ lineHeight: '54px' }}>There was a complete response in the breast and lung</span>
                </li>
              </ul>
            </div>

            {/* Patient treatment info */}
            <div 
              data-enter
              data-enter-order="6"
              style={{ 
                position: 'absolute',
                left: '366px',
                top: '191px',
                width: '523px',
                height: '175px',
                fontSize: '31px',
                fontWeight: 'bold',
                color: 'black',
                zIndex: 6
              }}
            >
              <ul style={{ margin: 0, paddingLeft: '46.5px' }}>
                <li>
                  <span style={{ lineHeight: '54px' }}>Patient started paclitaxel + trastuzumab + pertuzumab treatment in October 2018 </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Scans description */}
          <div 
            data-enter
            data-enter-order="4"
            style={{ 
              position: 'absolute',
              left: '3.5px',
              top: '773px',
              width: '930px',
              height: '40px',
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#5d6771',
              display: 'flex',
              alignItems: 'center',
              zIndex: 6
            }}
          >
            Scans showing breast tumor and skin thickness:
          </div>

          {/* Scans container */}
          <div 
            data-enter-group
            data-enter-order="5"
            style={{ 
              position: 'absolute',
              left: '0px',
              top: '853px',
              width: '937px',
              height: '462px',
              zIndex: 1
            }}
          >
            {/* Scans frame */}
            <div 
              data-enter-group
              data-enter-order="1"
              style={{ 
                position: 'absolute',
                left: '3.5px',
                top: '0px',
                width: '930px',
                height: '389px',
                zIndex: 1
              }}
            >
              {/* Scan 1 */}
              <div 
                data-enter
                data-enter-order="1"
                style={{ 
                  position: 'absolute',
                  left: '3.5px',
                  top: '34px',
                  width: '423px',
                  height: '355px',
                  backgroundImage: `url('${imgGroup17}')`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'top left',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 4
                }}
              />

              {/* Scan 2 */}
              <div 
                data-enter
                data-enter-order="2"
                style={{ 
                  position: 'absolute',
                  left: '503.5px',
                  top: '0px',
                  width: '423px',
                  height: '389px',
                  backgroundImage: `url('${imgGroup18}')`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'top left',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 4
                }}
              />
            </div>

            {/* Scan caption */}
            <div 
              data-enter
              data-enter-order="2"
              style={{ 
                position: 'absolute',
                left: '3.5px',
                top: '422px',
                width: '930px',
                height: '40px',
                fontSize: '28px',
                fontStyle: 'italic',
                color: '#5d6771',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 6
              }}
            >
              (Scans taken October 2018)
            </div>
          </div>
        </div>

        {/* Continue button */}
        <div 
          data-enter
          data-enter-order="6"
          style={{ 
            position: 'absolute',
            left: '155px',
            top: '1448px',
            width: '699px',
            height: '112px',
            zIndex: 6
          }}
          onClick={onContinueClick}
        >
          {/* Button container */}
          <div 
            style={{ 
              position: 'absolute',
              bottom: '0px',
              left: '0.29%',
              right: '0px',
              top: '0.89%',
              zIndex: 1
            }}
          >
            <img 
              src={imgButtonContainer} 
              alt="" 
              style={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Icon container */}
          <div 
            style={{ 
              position: 'absolute',
              bottom: '0px',
              left: '0px',
              right: '82.4%',
              top: '0px',
              zIndex: 2
            }}
          >
            <img 
              src={imgIconContainer} 
              alt="" 
              style={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Button text */}
          <div 
            style={{ 
              position: 'absolute',
              inset: '28.57% 4.15% 28.57% 17.6%',
              fontSize: '31px',
              fontWeight: 'bold',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              zIndex: 6
            }}
          >
            Progression
          </div>
        </div>
      </div>
    </div>
  );
}