import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { animateEnter } from "./animations/enter";
import MainScreen from "./components/MainScreen";
import Samira1 from "./components/Samira1";
import Samira2 from "./components/Samira2";
import Samira3 from "./components/Samira3";
import Samira4 from "./components/Samira4";
import Samira5 from "./components/Samira5";
import Samira6 from "./components/Samira6";
import Samira7 from "./components/Samira7";
import Samira8 from "./components/Samira8";
import Samira9 from "./components/Samira9";
import Samira10 from "./components/Samira10";
import Samira11 from "./components/Samira11";
import Layla1 from "./components/Layla1";
import Layla2 from "./components/Layla2";
import Layla3 from "./components/Layla3";
import Layla4 from "./components/Layla4";
import Layla5 from "./components/Layla5";
import Layla6 from "./components/Layla6";
import Layla7 from "./components/Layla7";
import Layla8 from "./components/Layla8";
import Layla9 from "./components/Layla9";
import Layla10 from "./components/Layla10";
import Layla11 from "./components/Layla11";
import Layla12 from "./components/Layla12";
import Layla13 from "./components/Layla13";
import Layla14 from "./components/Layla14";
import Rawan1 from "./components/Rawan1";
import Rawan2 from "./components/Rawan2";
import Rawan3 from "./components/Rawan3";
import Rawan4 from "./components/Rawan4";
import Rawan5 from "./components/Rawan5";
import Rawan6 from "./components/Rawan6";
import Rawan7 from "./components/Rawan7";
import Rawan8 from "./components/Rawan8";
import Rawan9 from "./components/Rawan9";
import Rawan10 from "./components/Rawan10";
import Rawan11 from "./components/Rawan11";
import Rawan12 from "./components/Rawan12";
import Rawan13 from "./components/Rawan13";
import Rawan14 from "./components/Rawan14";
import Rawan15 from "./components/Rawan15";
import Hala1 from "./components/Hala1";
import Hala2 from "./components/Hala2";
import Hala3 from "./components/Hala3";
import Hala4 from "./components/Hala4";
import Hala5 from "./components/Hala5";
import Hala6 from "./components/Hala6";
import Hala7 from "./components/Hala7";
import Hala8 from "./components/Hala8";
import Hala9 from "./components/Hala9";
import Hala10 from "./components/Hala10";
import Hala11 from "./components/Hala11";
import Hala12 from "./components/Hala12";
import Hala13 from "./components/Hala13";
import Hala14 from "./components/Hala14";
import Hala15 from "./components/Hala15";
import EndPage from "./components/EndPage";

type Screen =
  | "main"
  | "samira1"
  | "samira2"
  | "samira3"
  | "samira4"
  | "samira5"
  | "samira6"
  | "samira7"
  | "samira8"
  | "samira9"
  | "samira10"
  | "samira11"
  | "layla1"
  | "layla2"
  | "layla3"
  | "layla4"
  | "layla5"
  | "layla6"
  | "layla7"
  | "layla8"
  | "layla9"
  | "layla10"
  | "layla11"
  | "layla12"
  | "layla13"
  | "layla14"
  | "rawan1"
  | "rawan2"
  | "rawan3"
  | "rawan4"
  | "rawan5"
  | "rawan6"
  | "rawan7"
  | "rawan8"
  | "rawan9"
  | "rawan10"
  | "rawan11"
  | "rawan12"
  | "rawan13"
  | "rawan14"
  | "rawan15"
  | "hala1"
  | "hala2"
  | "hala3"
  | "hala4"
  | "hala5"
  | "hala6"
  | "hala7"
  | "hala8"
  | "hala9"
  | "hala10"
  | "hala11"
  | "hala12"
  | "hala13"
  | "hala14"
  | "hala15"
  | "endpage";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("main");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousScreen, setPreviousScreen] = useState<Screen | null>(null);
  const screenRefs = useRef<{ [key in Screen]: HTMLDivElement | null }>({
    main: null,
    samira1: null,
    samira2: null,
    samira3: null,
    samira4: null,
    samira5: null,
    samira6: null,
    samira7: null,
    samira8: null,
    samira9: null,
    samira10: null,
    samira11: null,
    layla1: null,
    layla2: null,
    layla3: null,
    layla4: null,
    layla5: null,
    layla6: null,
    layla7: null,
    layla8: null,
    layla9: null,
    layla10: null,
    layla11: null,
    layla12: null,
    layla13: null,
    layla14: null,
    rawan1: null,
    rawan2: null,
    rawan3: null,
    rawan4: null,
    rawan5: null,
    rawan6: null,
    rawan7: null,
    rawan8: null,
    rawan9: null,
    rawan10: null,
    rawan11: null,
    rawan12: null,
    rawan13: null,
    rawan14: null,
    rawan15: null,
    hala1: null,
    hala2: null,
    hala3: null,
    hala4: null,
    hala5: null,
    hala6: null,
    hala7: null,
    hala8: null,
    hala9: null,
    hala10: null,
    hala11: null,
    hala12: null,
    hala13: null,
    hala14: null,
    hala15: null,
    endpage: null,
  });

  // Scaling logic to maintain 1080x1920 aspect ratio
  useEffect(() => {
    const updateScale = () => {
      const root = document.getElementById("root");
      if (!root) return;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate scale factors for both width and height
      const scaleX = windowWidth / 1080;
      const scaleY = windowHeight / 1920;

      // Use the smaller scale to ensure the entire content fits
      const scale = Math.min(scaleX, scaleY);

      // Apply the scale transform
      root.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    // Initial scale
    updateScale();

    // Update scale on window resize
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  // Trigger initial animation for MainScreen on first load
  useEffect(() => {
    if (currentScreen === "main" && screenRefs.current.main) {
      // Use rAF + small timeout to ensure MainScreen has mounted and styles applied
      requestAnimationFrame(() => {
        setTimeout(() => {
          const mainScreenRef = screenRefs.current.main;
          if (mainScreenRef) {
            animateEnter({ root: mainScreenRef });
          }
        }, 100); // Slightly longer delay for initial load
      });
    }
  }, [currentScreen]);

  // Function to get the correct back screen for EndPage
  const getEndPageBackScreen = (): Screen => {
    if (!previousScreen) return "main";

    // Map each profile's last screen to the correct back navigation
    switch (previousScreen) {
      case "samira11":
        return "samira11";
      case "layla14":
        return "layla14";
      case "rawan15":
        return "rawan15";
      case "hala15":
        return "hala15";
      default:
        return "main";
    }
  };

  const navigateToScreen = (screen: Screen) => {
    if (currentScreen === screen || isTransitioning) return;

    // Console log to track page navigation
    console.log(`🔄 Navigation: ${currentScreen} → ${screen}`);

    // Track previous screen when navigating to endpage
    if (screen === "endpage") {
      setPreviousScreen(currentScreen);
    }

    setIsTransitioning(true);
    const currentScreenRef = screenRefs.current[currentScreen];
    const nextScreenRef = screenRefs.current[screen];

    if (!currentScreenRef || !nextScreenRef) {
      setCurrentScreen(screen);
      setIsTransitioning(false);
      return;
    }

    // Create a smooth crossfade transition
    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    // Set up the next screen with full opacity but positioned behind
    gsap.set(nextScreenRef, {
      opacity: 0,
      zIndex: 1,
    });

    // Set current screen to be on top
    gsap.set(currentScreenRef, {
      zIndex: 2,
    });

    // Crossfade transition - fade out current, fade in next
    tl.to(currentScreenRef, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    }).to(
      nextScreenRef,
      {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      },
      0,
    ); // Start at the same time as the previous animation

    // Update the current screen after transition
    setTimeout(() => {
      setCurrentScreen(screen);
      // Reset opacity for future transitions
      gsap.set(currentScreenRef, { opacity: 1, zIndex: 1 });
      gsap.set(nextScreenRef, { zIndex: 1 });
      // Run enter animations for elements inside the newly active screen
      // Use rAF + small timeout to ensure children have mounted and styles applied
      requestAnimationFrame(() => {
        setTimeout(() => {
          animateEnter({ root: nextScreenRef });
        }, 0);
      });
    }, 150);
  };

  return (
    <div
      style={{
        width: "1080px",
        height: "1920px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      data-oid="y.5585s"
    >
      {/* Main Screen */}
      <div
        ref={(el) => {
          screenRefs.current.main = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "main" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="fiovo9r"
      >
        {currentScreen === "main" && (
          <MainScreen
            onSamiraClick={() => navigateToScreen("samira1")}
            onLaylaClick={() => navigateToScreen("layla1")}
            onRawanClick={() => navigateToScreen("rawan1")}
            onHalaClick={() => navigateToScreen("hala1")}
            data-oid="0g7rs0q"
          />
        )}
      </div>

      {/* Samira1 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira1 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira1" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="_klcurc"
      >
        {currentScreen === "samira1" && (
          <Samira1
            onContinueClick={() => navigateToScreen("samira2")}
            onBackClick={() => navigateToScreen("main")}
            onHomeClick={() => navigateToScreen("main")}
            data-oid="ahkn3_j"
          />
        )}
      </div>

      {/* Samira2 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira2 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira2" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="khq8zoz"
      >
        {currentScreen === "samira2" && (
          <Samira2
            onBackClick={() => navigateToScreen("samira1")}
            onContinueClick={() => navigateToScreen("samira3")}
            onHomeClick={() => navigateToScreen("main")}
            data-oid="_xq0u3o"
          />
        )}
      </div>

      {/* Samira3 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira3 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira3" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="x_3ag:m"
      >
        {currentScreen === "samira3" && (
          <Samira3
            onBackClick={() => navigateToScreen("samira2")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("samira4")}
            data-oid="550gkg4"
          />
        )}
      </div>

      {/* Samira4 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira4 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira4" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="2chumlz"
      >
        {currentScreen === "samira4" && (
          <Samira4
            onBackClick={() => navigateToScreen("samira3")}
            onContinueClick={() => navigateToScreen("samira5")}
            onHomeClick={() => navigateToScreen("main")}
            data-oid="zvybet3"
          />
        )}
      </div>

      {/* Samira5 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira5 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira5" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid=":ba8pod"
      >
        {currentScreen === "samira5" && (
          <Samira5
            onBackClick={() => navigateToScreen("samira4")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("samira6")}
            data-oid="b5nlp_s"
          />
        )}
      </div>

      {/* Samira6 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira6 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira6" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="ac4u1io"
      >
        {currentScreen === "samira6" && (
          <Samira6
            onBackClick={() => navigateToScreen("samira5")}
            onHomeClick={() => navigateToScreen("main")}
            onInternationalGuidanceClick={() => navigateToScreen("samira7")}
            data-oid="7y1b:3_"
          />
        )}
      </div>

      {/* Samira7 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira7 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira7" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="jc:0aig"
      >
        {currentScreen === "samira7" && (
          <Samira7
            onBackClick={() => navigateToScreen("samira6")}
            onHomeClick={() => navigateToScreen("main")}
            onInternationalGuidanceClick={() => navigateToScreen("samira8")}
            data-oid="p3tkmso"
          />
        )}
      </div>

      {/* Samira8 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira8 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira8" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid=":k4hi3a"
      >
        {currentScreen === "samira8" && (
          <Samira8
            onBackClick={() => navigateToScreen("samira7")}
            onHomeClick={() => navigateToScreen("main")}
            onPatientProgressClick={() => navigateToScreen("samira9")}
            data-oid="g5fofsm"
          />
        )}
      </div>

      {/* Samira9 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira9 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira9" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="knt7nv6"
      >
        {currentScreen === "samira9" && (
          <Samira9
            onBackClick={() => navigateToScreen("samira8")}
            onHomeClick={() => navigateToScreen("main")}
            onAdverseEventsClick={() => {
              console.log(
                "App.tsx: onAdverseEventsClick called - navigating to samira10",
              );
              navigateToScreen("samira10");
            }}
            data-oid=":k0xasg"
          />
        )}
      </div>

      {/* Samira10 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira10 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira10" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="fui.qgh"
      >
        {currentScreen === "samira10" && (
          <Samira10
            onBackClick={() => navigateToScreen("samira9")}
            onHomeClick={() => navigateToScreen("main")}
            onHowPatientFeelingClick={() => navigateToScreen("samira11")}
            data-oid="btpxphp"
          />
        )}
      </div>

      {/* Samira11 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.samira11 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "samira11" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="433p:t3"
      >
        {currentScreen === "samira11" && (
          <Samira11
            onBackClick={() => navigateToScreen("samira10")}
            onHomeClick={() => navigateToScreen("main")}
            onEndClick={() => navigateToScreen("endpage")}
            data-oid="y.5:hgg"
          />
        )}
      </div>

      {/* Layla1 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla1 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla1" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="1v7gma3"
      >
        {currentScreen === "layla1" && (
          <Layla1
            onBackClick={() => navigateToScreen("main")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla2")}
            data-oid="qklrvgt"
          />
        )}
      </div>

      {/* Layla2 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla2 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla2" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="6rwevbq"
      >
        {currentScreen === "layla2" && (
          <Layla2
            onBackClick={() => navigateToScreen("layla1")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla3")}
            data-oid="sehr.q:"
          />
        )}
      </div>

      {/* Layla3 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla3 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla3" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid=":5_xkyu"
      >
        {currentScreen === "layla3" && (
          <Layla3
            onBackClick={() => navigateToScreen("layla2")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla4")}
            data-oid="vk7thot"
          />
        )}
      </div>

      {/* Layla4 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla4 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla4" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="y1y5ln2"
      >
        {currentScreen === "layla4" && (
          <Layla4
            onBackClick={() => navigateToScreen("layla3")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla5")}
            data-oid="lx710iv"
          />
        )}
      </div>

      {/* Layla5 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla5 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla5" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="c4o.df-"
      >
        {currentScreen === "layla5" && (
          <Layla5
            onBackClick={() => navigateToScreen("layla4")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla6")}
            data-oid="xhkwo25"
          />
        )}
      </div>

      {/* Layla6 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla6 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla6" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="m1ga0.r"
      >
        {currentScreen === "layla6" && (
          <Layla6
            onBackClick={() => navigateToScreen("layla5")}
            onHomeClick={() => navigateToScreen("main")}
            onOptionClick={(option) => {
              console.log("Selected option:", option);
              navigateToScreen("layla7");
            }}
            data-oid="kgxoayb"
          />
        )}
      </div>

      {/* Layla7 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla7 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla7" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="rc_07.j"
      >
        {currentScreen === "layla7" && (
          <Layla7
            onBackClick={() => navigateToScreen("layla6")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla8")}
            data-oid="ty1fxzr"
          />
        )}
      </div>

      {/* Layla8 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla8 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla8" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="k4yon12"
      >
        {currentScreen === "layla8" && (
          <Layla8
            onBackClick={() => navigateToScreen("layla7")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla9")}
            data-oid="5_at-0x"
          />
        )}
      </div>

      {/* Layla9 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla9 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla9" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="xt.ay3k"
      >
        {currentScreen === "layla9" && (
          <Layla9
            onBackClick={() => navigateToScreen("layla8")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla10")}
            data-oid="d0rkl2b"
          />
        )}
      </div>

      {/* Layla10 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla10 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla10" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="u3szhpx"
      >
        {currentScreen === "layla10" && (
          <Layla10
            onBackClick={() => navigateToScreen("layla9")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla11")}
            data-oid="4kvq4jd"
          />
        )}
      </div>

      {/* Layla11 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla11 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla11" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid=":8z54lv"
      >
        {currentScreen === "layla11" && (
          <Layla11
            onBackClick={() => navigateToScreen("layla10")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla12")}
            data-oid="02nnf67"
          />
        )}
      </div>

      {/* Layla12 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla12 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla12" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="e7pwqpa"
      >
        {currentScreen === "layla12" && (
          <Layla12
            onBackClick={() => navigateToScreen("layla11")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla13")}
            data-oid="5l4aex0"
          />
        )}
      </div>

      {/* Layla13 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla13 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla13" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="yu.lska"
      >
        {currentScreen === "layla13" && (
          <Layla13
            onBackClick={() => navigateToScreen("layla12")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("layla14")}
            data-oid=":nmg9s-"
          />
        )}
      </div>

      {/* Layla14 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.layla14 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "layla14" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="--hym9t"
      >
        {currentScreen === "layla14" && (
          <Layla14
            onBackClick={() => navigateToScreen("layla13")}
            onHomeClick={() => navigateToScreen("main")}
            onEndClick={() => navigateToScreen("endpage")}
            data-oid="mwzjl3t"
          />
        )}
      </div>

      {/* Rawan1 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan1 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan1" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="shcdls3"
      >
        {currentScreen === "rawan1" && (
          <Rawan1
            onBackClick={() => navigateToScreen("main")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan2")}
            data-oid="2gsoj7d"
          />
        )}
      </div>

      {/* Rawan2 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan2 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan2" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid=":yjf.0n"
      >
        {currentScreen === "rawan2" && (
          <Rawan2
            onBackClick={() => navigateToScreen("rawan1")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan3")}
            data-oid="bdr3_c_"
          />
        )}
      </div>

      {/* Rawan3 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan3 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan3" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="zjfcqsc"
      >
        {currentScreen === "rawan3" && (
          <Rawan3
            onBackClick={() => navigateToScreen("rawan2")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan4")}
            data-oid="7yvyqqf"
          />
        )}
      </div>

      {/* Rawan4 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan4 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan4" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="f--m8qn"
      >
        {currentScreen === "rawan4" && (
          <Rawan4
            onBackClick={() => navigateToScreen("rawan3")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan5")}
            data-oid="mzzu85y"
          />
        )}
      </div>

      {/* Rawan5 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan5 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan5" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="us1fucj"
      >
        {currentScreen === "rawan5" && (
          <Rawan5
            onBackClick={() => navigateToScreen("rawan4")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan6")}
            data-oid="xu7cfoi"
          />
        )}
      </div>

      {/* Rawan6 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan6 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan6" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="b5:s1rb"
      >
        {currentScreen === "rawan6" && (
          <Rawan6
            onBackClick={() => navigateToScreen("rawan5")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan7")}
            data-oid="470-pdr"
          />
        )}
      </div>

      {/* Rawan7 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan7 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan7" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="hnr-f-n"
      >
        {currentScreen === "rawan7" && (
          <Rawan7
            onBackClick={() => navigateToScreen("rawan6")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan8")}
            data-oid="ws_h.rn"
          />
        )}
      </div>

      {/* Rawan8 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan8 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan8" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="qbm510z"
      >
        {currentScreen === "rawan8" && (
          <Rawan8
            onBackClick={() => navigateToScreen("rawan7")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan9")}
            data-oid=":ctf7aa"
          />
        )}
      </div>

      {/* Rawan9 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan9 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan9" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="-xr19q9"
      >
        {currentScreen === "rawan9" && (
          <Rawan9
            onBackClick={() => navigateToScreen("rawan8")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan10")}
            data-oid="y67wzbb"
          />
        )}
      </div>

      {/* Rawan10 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan10 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan10" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="w4u2dr3"
      >
        {currentScreen === "rawan10" && (
          <Rawan10
            onBackClick={() => navigateToScreen("rawan9")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan11")}
            data-oid="74xnky5"
          />
        )}
      </div>

      {/* Rawan11 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan11 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan11" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="j7_4pl7"
      >
        {currentScreen === "rawan11" && (
          <Rawan11
            onBackClick={() => navigateToScreen("rawan10")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan12")}
            data-oid="cjz1h:o"
          />
        )}
      </div>

      {/* Rawan12 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan12 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan12" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="wmui7v9"
      >
        {currentScreen === "rawan12" && (
          <Rawan12
            onBackClick={() => navigateToScreen("rawan11")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan13")}
            data-oid="9xkpwjr"
          />
        )}
      </div>

      {/* Rawan13 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan13 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan13" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="82y1dam"
      >
        {currentScreen === "rawan13" && (
          <Rawan13
            onBackClick={() => navigateToScreen("rawan12")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan14")}
            data-oid="_xfmc4h"
          />
        )}
      </div>

      {/* Rawan14 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan14 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan14" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="bqa332j"
      >
        {currentScreen === "rawan14" && (
          <Rawan14
            onBackClick={() => navigateToScreen("rawan13")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("rawan15")}
            data-oid="0ativq."
          />
        )}
      </div>

      {/* Rawan15 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.rawan15 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "rawan15" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="6idedbm"
      >
        {currentScreen === "rawan15" && (
          <Rawan15
            onBackClick={() => navigateToScreen("rawan14")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("endpage")}
            data-oid="v8vw:88"
          />
        )}
      </div>

      {/* Hala1 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala1 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala1" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="5u-z_le"
      >
        {currentScreen === "hala1" && (
          <Hala1
            onBackClick={() => navigateToScreen("main")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala2")}
            data-oid="2t581oq"
          />
        )}
      </div>

      {/* Hala2 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala2 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala2" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="iz-0n0a"
      >
        {currentScreen === "hala2" && (
          <Hala2
            onBackClick={() => navigateToScreen("hala1")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala3")}
            data-oid="qgy2n57"
          />
        )}
      </div>

      {/* Hala3 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala3 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala3" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="6:srj9h"
      >
        {currentScreen === "hala3" && (
          <Hala3
            onBackClick={() => navigateToScreen("hala2")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala4")}
            data-oid="c-foyy4"
          />
        )}
      </div>

      {/* Hala4 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala4 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala4" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="c6xrjqn"
      >
        {currentScreen === "hala4" && (
          <Hala4
            onBackClick={() => navigateToScreen("hala3")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala5")}
            data-oid="vahn5ql"
          />
        )}
      </div>

      {/* Hala5 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala5 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala5" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid=":oconm0"
      >
        {currentScreen === "hala5" && (
          <Hala5
            onBackClick={() => navigateToScreen("hala4")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala6")}
            data-oid="6mx6jc."
          />
        )}
      </div>

      {/* Hala6 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala6 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala6" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="6xgt6lw"
      >
        {currentScreen === "hala6" && (
          <Hala6
            onBackClick={() => navigateToScreen("hala5")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala7")}
            data-oid=".u.6.k6"
          />
        )}
      </div>

      {/* Hala7 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala7 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala7" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="av1b_xc"
      >
        {currentScreen === "hala7" && (
          <Hala7
            onBackClick={() => navigateToScreen("hala6")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala8")}
            data-oid="8v.pvcl"
          />
        )}
      </div>

      {/* Hala8 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala8 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala8" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="8:dwt_p"
      >
        {currentScreen === "hala8" && (
          <Hala8
            onBackClick={() => navigateToScreen("hala7")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala9")}
            data-oid="zeqy_62"
          />
        )}
      </div>

      {/* Hala9 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala9 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala9" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="h9h-.vf"
      >
        {currentScreen === "hala9" && (
          <Hala9
            onBackClick={() => navigateToScreen("hala8")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala10")}
            data-oid="erl9frl"
          />
        )}
      </div>

      {/* Hala10 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala10 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala10" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="nw-wri:"
      >
        {currentScreen === "hala10" && (
          <Hala10
            onBackClick={() => navigateToScreen("hala9")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala11")}
            data-oid="-1qtu-1"
          />
        )}
      </div>

      {/* Hala11 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala11 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala11" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="ntw5sxo"
      >
        {currentScreen === "hala11" && (
          <Hala11
            onBackClick={() => navigateToScreen("hala10")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala12")}
            data-oid="wa0gnuu"
          />
        )}
      </div>

      {/* Hala12 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala12 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala12" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="gzc91.m"
      >
        {currentScreen === "hala12" && (
          <Hala12
            onBackClick={() => navigateToScreen("hala11")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala13")}
            data-oid="xf2w2aw"
          />
        )}
      </div>

      {/* Hala13 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala13 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala13" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="9m6wov5"
      >
        {currentScreen === "hala13" && (
          <Hala13
            onBackClick={() => navigateToScreen("hala12")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala14")}
            data-oid="w64.54d"
          />
        )}
      </div>

      {/* Hala14 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala14 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala14" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="g1nggot"
      >
        {currentScreen === "hala14" && (
          <Hala14
            onBackClick={() => navigateToScreen("hala13")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("hala15")}
            data-oid="phlr:yz"
          />
        )}
      </div>

      {/* Hala15 Screen */}
      <div
        ref={(el) => {
          screenRefs.current.hala15 = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "hala15" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="46j0j_t"
      >
        {currentScreen === "hala15" && (
          <Hala15
            onBackClick={() => navigateToScreen("hala14")}
            onHomeClick={() => navigateToScreen("main")}
            onContinueClick={() => navigateToScreen("endpage")}
            data-oid="axi.va7"
          />
        )}
      </div>

      {/* EndPage Screen */}
      <div
        ref={(el) => {
          screenRefs.current.endpage = el;
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: currentScreen === "endpage" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        data-oid="pn5ls4_"
      >
        {currentScreen === "endpage" && (
          <EndPage
            onBackClick={() => navigateToScreen(getEndPageBackScreen())}
            onHomeClick={() => navigateToScreen("main")}
            data-oid="2bir08r"
          />
        )}
      </div>
    </div>
  );
}

export default App;
