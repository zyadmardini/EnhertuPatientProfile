import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { animateEnter } from './animations/enter'
import MainScreen from './components/MainScreen'
import Samira1 from './components/Samira1'
import Samira2 from './components/Samira2'
import Samira3 from './components/Samira3'
import Samira4 from './components/Samira4'
import Samira5 from './components/Samira5'
import Samira6 from './components/Samira6'
import Samira7 from './components/Samira7'
import Samira8 from './components/Samira8'
import Samira9 from './components/Samira9'
import Samira10 from './components/Samira10'
import Samira11 from './components/Samira11'
import EndPage from './components/EndPage'

type Screen = 'main' | 'samira1' | 'samira2' | 'samira3' | 'samira4' | 'samira5' | 'samira6' | 'samira7' | 'samira8' | 'samira9' | 'samira10' | 'samira11' | 'endpage'

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('main')
  const [isTransitioning, setIsTransitioning] = useState(false)
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
    endpage: null
  })

  // Scaling logic to maintain 1080x1920 aspect ratio
  useEffect(() => {
    const updateScale = () => {
      const root = document.getElementById('root')
      if (!root) return

      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      
      // Calculate scale factors for both width and height
      const scaleX = windowWidth / 1080
      const scaleY = windowHeight / 1920
      
      // Use the smaller scale to ensure the entire content fits
      const scale = Math.min(scaleX, scaleY)
      
      // Apply the scale transform
      root.style.transform = `translate(-50%, -50%) scale(${scale})`
    }

    // Initial scale
    updateScale()

    // Update scale on window resize
    window.addEventListener('resize', updateScale)
    
    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  // Trigger initial animation for MainScreen on first load
  useEffect(() => {
    if (currentScreen === 'main' && screenRefs.current.main) {
      // Use rAF + small timeout to ensure MainScreen has mounted and styles applied
      requestAnimationFrame(() => {
        setTimeout(() => {
          const mainScreenRef = screenRefs.current.main
          if (mainScreenRef) {
            animateEnter({ root: mainScreenRef })
          }
        }, 100) // Slightly longer delay for initial load
      })
    }
  }, [currentScreen])

  const navigateToScreen = (screen: Screen) => {
    if (currentScreen === screen || isTransitioning) return

    setIsTransitioning(true)
    const currentScreenRef = screenRefs.current[currentScreen]
    const nextScreenRef = screenRefs.current[screen]

    if (!currentScreenRef || !nextScreenRef) {
      setCurrentScreen(screen)
      setIsTransitioning(false)
      return
    }

    // Create a smooth crossfade transition
    const tl = gsap.timeline({ onComplete: () => { setIsTransitioning(false) } })

    // Set up the next screen with full opacity but positioned behind
    gsap.set(nextScreenRef, {
      opacity: 0,
      zIndex: 1
    })

    // Set current screen to be on top
    gsap.set(currentScreenRef, {
      zIndex: 2
    })

    // Crossfade transition - fade out current, fade in next
    tl.to(currentScreenRef, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut"
    })
    .to(nextScreenRef, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut"
    }, 0) // Start at the same time as the previous animation

    // Update the current screen after transition
    setTimeout(() => {
      setCurrentScreen(screen)
      // Reset opacity for future transitions
      gsap.set(currentScreenRef, { opacity: 1, zIndex: 1 })
      gsap.set(nextScreenRef, { zIndex: 1 })
      // Run enter animations for elements inside the newly active screen
      // Use rAF + small timeout to ensure children have mounted and styles applied
      requestAnimationFrame(() => {
        setTimeout(() => {
          animateEnter({ root: nextScreenRef })
        }, 0)
      })
    }, 150)
  }


  return (
    <div 
      style={{ 
        width: '1080px', 
        height: '1920px', 
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      {/* Main Screen */}
      <div
        ref={el => { screenRefs.current.main = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'main' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'main' && <MainScreen onSamiraClick={() => navigateToScreen('samira1')} />}
      </div>

      {/* Samira1 Screen */}
      <div
        ref={el => { screenRefs.current.samira1 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira1' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira1' && <Samira1 onContinueClick={() => navigateToScreen('samira2')} onBackClick={() => navigateToScreen('main')} />}
      </div>

      {/* Samira2 Screen */}
      <div
        ref={el => { screenRefs.current.samira2 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira2' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira2' && <Samira2 onBackClick={() => navigateToScreen('samira1')} onContinueClick={() => navigateToScreen('samira3')} />}
      </div>

      {/* Samira3 Screen */}
      <div
        ref={el => { screenRefs.current.samira3 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira3' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira3' && <Samira3 onBackClick={() => navigateToScreen('samira2')} onHomeClick={() => navigateToScreen('main')} onContinueClick={() => navigateToScreen('samira4')} />}
      </div>

      {/* Samira4 Screen */}
      <div
        ref={el => { screenRefs.current.samira4 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira4' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira4' && <Samira4 onBackClick={() => navigateToScreen('samira3')} onContinueClick={() => navigateToScreen('samira5')} onHomeClick={() => navigateToScreen('main')} />}
      </div>

      {/* Samira5 Screen */}
      <div
        ref={el => { screenRefs.current.samira5 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira5' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira5' && <Samira5 onBackClick={() => navigateToScreen('samira4')} onHomeClick={() => navigateToScreen('main')} onContinueClick={() => navigateToScreen('samira6')} />}
      </div>

      {/* Samira6 Screen */}
      <div
        ref={el => { screenRefs.current.samira6 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira6' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira6' && <Samira6 onBackClick={() => navigateToScreen('samira5')} onHomeClick={() => navigateToScreen('main')} onInternationalGuidanceClick={() => navigateToScreen('samira7')} />}
      </div>

      {/* Samira7 Screen */}
      <div
        ref={el => { screenRefs.current.samira7 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira7' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira7' && <Samira7 onBackClick={() => navigateToScreen('samira6')} onHomeClick={() => navigateToScreen('main')} onInternationalGuidanceClick={() => navigateToScreen('samira8')} />}
      </div>

      {/* Samira8 Screen */}
      <div
        ref={el => { screenRefs.current.samira8 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira8' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira8' && <Samira8 onBackClick={() => navigateToScreen('samira7')} onHomeClick={() => navigateToScreen('main')} onPatientProgressClick={() => navigateToScreen('samira9')} />}
      </div>

      {/* Samira9 Screen */}
      <div
        ref={el => { screenRefs.current.samira9 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira9' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira9' && <Samira9 onBackClick={() => navigateToScreen('samira8')} onHomeClick={() => navigateToScreen('main')} onAdverseEventsClick={() => {
          console.log('App.tsx: onAdverseEventsClick called - navigating to samira10');
          navigateToScreen('samira10');
        }} />}
      </div>

      {/* Samira10 Screen */}
      <div
        ref={el => { screenRefs.current.samira10 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira10' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira10' && <Samira10 onBackClick={() => navigateToScreen('samira9')} onHomeClick={() => navigateToScreen('main')} onHowPatientFeelingClick={() => navigateToScreen('samira11')} />}
      </div>

      {/* Samira11 Screen */}
      <div
        ref={el => { screenRefs.current.samira11 = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'samira11' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'samira11' && <Samira11 onBackClick={() => navigateToScreen('samira10')} onHomeClick={() => navigateToScreen('main')} onEndClick={() => navigateToScreen('endpage')} />}
      </div>

      {/* EndPage Screen */}
      <div
        ref={el => { screenRefs.current.endpage = el }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: currentScreen === 'endpage' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        {currentScreen === 'endpage' && <EndPage onBackClick={() => navigateToScreen('samira11')} onHomeClick={() => navigateToScreen('main')} />}
      </div>
    </div>
  )
}

export default App
