import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { animateEnter } from "./animations/enter";
import MainScreen from "./components/MainScreen";
import TapToAdvance from "./components/TapToAdvance";
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

  // Function to get the next screen for tap navigation
  const getNextScreenForTap = (): Screen | null => {
    switch (currentScreen) {
      // Main screen - no tap navigation (user should select a patient)
      case "main":
        return null;
      
      // Samira flow
      case "samira1": return "samira2";
      case "samira2": return "samira3";
      case "samira3": return "samira4";
      case "samira4": return "samira5";
      case "samira5": return "samira6";
      case "samira6": return "samira7";
      case "samira7": return "samira8";
      case "samira8": return "samira9";
      case "samira9": return "samira10";
      case "samira10": return "samira11";
      case "samira11": return "endpage";
      
      // Layla flow
      case "layla1": return "layla2";
      case "layla2": return "layla3";
      case "layla3": return "layla4";
      case "layla4": return "layla5";
      case "layla5": return "layla6";
      case "layla6": return "layla7";
      case "layla7": return "layla8";
      case "layla8": return "layla9";
      case "layla9": return "layla10";
      case "layla10": return "layla11";
      case "layla11": return "layla12";
      case "layla12": return "layla13";
      case "layla13": return "layla14";
      case "layla14": return "endpage";
      
      // Rawan flow
      case "rawan1": return "rawan2";
      case "rawan2": return "rawan3";
      case "rawan3": return "rawan4";
      case "rawan4": return "rawan5";
      case "rawan5": return "rawan6";
      case "rawan6": return "rawan7";
      case "rawan7": return "rawan8";
      case "rawan8": return "rawan9";
      case "rawan9": return "rawan10";
      case "rawan10": return "rawan11";
      case "rawan11": return "rawan12";
      case "rawan12": return "rawan13";
      case "rawan13": return "rawan14";
      case "rawan14": return "rawan15";
      case "rawan15": return "endpage";
      
      // Hala flow
      case "hala1": return "hala2";
      case "hala2": return "hala3";
      case "hala3": return "hala4";
      case "hala4": return "hala5";
      case "hala5": return "hala6";
      case "hala6": return "hala7";
      case "hala7": return "hala8";
      case "hala8": return "hala9";
      case "hala9": return "hala10";
      case "hala10": return "hala11";
      case "hala11": return "hala12";
      case "hala12": return "hala13";
      case "hala13": return "hala14";
      case "hala14": return "hala15";
      case "hala15": return "endpage";
      
      // End page - tap to go back to main
      case "endpage":
        return "main";
      
      default:
        return null;
    }
  };

  // Handle tap to advance
  const handleTapToAdvance = () => {
    const nextScreen = getNextScreenForTap();
    if (nextScreen) {
      navigateToScreen(nextScreen);
    }
  };

  // Helper function to render TapToAdvance component for screens that need it
  const renderTapToAdvance = (screenName: Screen) => {
    if (screenName === "main") {
      return null; // No tap navigation for main screen
    }
    
    return (
      <TapToAdvance
        onTap={handleTapToAdvance}
        excludeAreas={[
          { x: 50, y: 50, width: 60, height: 60 }, // Back button
          { x: 970, y: 50, width: 60, height: 60 }, // Home button
        ]}
      />
    );
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
        {/* Tap to advance - disabled for main screen */}
        {currentScreen === "main" && renderTapToAdvance("main")}
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
        {/* Tap to advance */}
        {currentScreen === "samira1" && renderTapToAdvance("samira1")}
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
        {/* Tap to advance */}
        {currentScreen === "samira2" && renderTapToAdvance("samira2")}
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
        {/* Tap to advance */}
        {currentScreen === "samira3" && renderTapToAdvance("samira3")}
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
        {/* Tap to advance */}
        {currentScreen === "samira4" && renderTapToAdvance("samira4")}
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
        {/* Tap to advance */}
        {currentScreen === "samira5" && renderTapToAdvance("samira5")}
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
        {/* Tap to advance */}
        {currentScreen === "samira6" && renderTapToAdvance("samira6")}
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
        {/* Tap to advance */}
        {currentScreen === "samira7" && renderTapToAdvance("samira7")}
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
        {/* Tap to advance */}
        {currentScreen === "samira8" && renderTapToAdvance("samira8")}
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
        {/* Tap to advance */}
        {currentScreen === "samira9" && renderTapToAdvance("samira9")}
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
        {/* Tap to advance */}
        {currentScreen === "samira10" && renderTapToAdvance("samira10")}
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
``        {/* Tap to advance */}
        {currentScreen === "samira11" && renderTapToAdvance("samira11")}
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
        {/* Tap to advance */}
        {currentScreen === "layla1" && renderTapToAdvance("layla1")}
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
        {/* Tap to advance */}
        {currentScreen === "layla2" && renderTapToAdvance("layla2")}
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
        {/* Tap to advance */}
        {currentScreen === "layla3" && renderTapToAdvance("layla3")}
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
        {/* Tap to advance */}
        {currentScreen === "layla4" && renderTapToAdvance("layla4")}
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
        {/* Tap to advance */}
        {currentScreen === "layla5" && renderTapToAdvance("layla5")}
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
        {/* Tap to advance */}
        {currentScreen === "layla6" && renderTapToAdvance("layla6")}
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
        {/* Tap to advance */}
        {currentScreen === "layla7" && renderTapToAdvance("layla7")}
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
        {/* Tap to advance */}
        {currentScreen === "layla8" && renderTapToAdvance("layla8")}
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
        {/* Tap to advance */}
        {currentScreen === "layla9" && renderTapToAdvance("layla9")}
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
        {/* Tap to advance */}
        {currentScreen === "layla10" && renderTapToAdvance("layla10")}
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
        {/* Tap to advance */}
        {currentScreen === "layla11" && renderTapToAdvance("layla11")}
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
        {/* Tap to advance */}
        {currentScreen === "layla12" && renderTapToAdvance("layla12")}
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
        {/* Tap to advance */}
        {currentScreen === "layla13" && renderTapToAdvance("layla13")}
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
        {/* Tap to advance */}
        {currentScreen === "layla14" && renderTapToAdvance("layla14")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan1" && renderTapToAdvance("rawan1")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan2" && renderTapToAdvance("rawan2")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan3" && renderTapToAdvance("rawan3")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan4" && renderTapToAdvance("rawan4")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan5" && renderTapToAdvance("rawan5")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan6" && renderTapToAdvance("rawan6")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan7" && renderTapToAdvance("rawan7")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan8" && renderTapToAdvance("rawan8")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan9" && renderTapToAdvance("rawan9")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan10" && renderTapToAdvance("rawan10")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan11" && renderTapToAdvance("rawan11")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan12" && renderTapToAdvance("rawan12")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan13" && renderTapToAdvance("rawan13")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan14" && renderTapToAdvance("rawan14")}
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
        {/* Tap to advance */}
        {currentScreen === "rawan15" && renderTapToAdvance("rawan15")}
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
        {/* Tap to advance */}
        {currentScreen === "hala1" && renderTapToAdvance("hala1")}
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
        {/* Tap to advance */}
        {currentScreen === "hala2" && renderTapToAdvance("hala2")}
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
        {/* Tap to advance */}
        {currentScreen === "hala3" && renderTapToAdvance("hala3")}
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
        {/* Tap to advance */}
        {currentScreen === "hala4" && renderTapToAdvance("hala4")}
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
        {/* Tap to advance */}
        {currentScreen === "hala5" && renderTapToAdvance("hala5")}
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
        {/* Tap to advance */}
        {currentScreen === "hala6" && renderTapToAdvance("hala6")}
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
        {/* Tap to advance */}
        {currentScreen === "hala7" && renderTapToAdvance("hala7")}
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
        {/* Tap to advance */}
        {currentScreen === "hala8" && renderTapToAdvance("hala8")}
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
        {/* Tap to advance */}
        {currentScreen === "hala9" && renderTapToAdvance("hala9")}
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
        {/* Tap to advance */}
        {currentScreen === "hala10" && renderTapToAdvance("hala10")}
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
        {/* Tap to advance */}
        {currentScreen === "hala11" && renderTapToAdvance("hala11")}
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
        {/* Tap to advance */}
        {currentScreen === "hala12" && renderTapToAdvance("hala12")}
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
        {/* Tap to advance */}
        {currentScreen === "hala13" && renderTapToAdvance("hala13")}
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
        {/* Tap to advance */}
        {currentScreen === "hala14" && renderTapToAdvance("hala14")}
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
        {/* Tap to advance */}
        {currentScreen === "hala15" && renderTapToAdvance("hala15")}
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
        {/* Tap to advance - goes back to main */}
        {currentScreen === "endpage" && renderTapToAdvance("endpage")}
      </div>
    </div>
  );
}

export default App;
