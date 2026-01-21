
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      const { clientX, clientY } = e;
      
      // Immediate Dot Move
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      
      // Fluid Ring Follow
      if (ringRef.current) {
        // We use translate3d for hardware acceleration
        ringRef.current.animate(
          {
            transform: `translate3d(${clientX}px, ${clientY}px, 0)`
          },
          { duration: 400, fill: "forwards" }
        );
      }
    };

    const onMouseDown = () => setIsHovering(true);
    const onMouseUp = () => setIsHovering(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    // Attach to interactive elements
    const attachListeners = () => {
      const interactives = document.querySelectorAll('button, a, input, select, textarea, .group, [role="button"]');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    // Initial attachment
    attachListeners();
    
    // Monitor DOM for new elements (for SPAs)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
    };
  }, [isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <div id="custom-cursor-container" className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Target Dot */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-primary rounded-full -ml-[0.75px] -mt-[0.75px] transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(139,197,63,0.8)]"
      />
      
      {/* Trailing Ring */}
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-brand-primary/30 -ml-5 -mt-5 transition-all duration-500 ease-out flex items-center justify-center ${
          isHovering ? 'w-16 h-16 -ml-8 -mt-8 bg-brand-accent/5 scale-110 border-brand-accent' : 'w-10 h-10'
        }`}
      >
        {/* Technical HUD Inner Accents */}
        <div className={`absolute w-1 h-1 bg-brand-accent/20 rounded-full transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute inset-0 border border-brand-primary/10 rounded-full animate-spin-slow transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} 
             style={{ borderStyle: 'dashed', borderWidth: '1px' }} />
      </div>
    </div>
  );
};

export default CustomCursor;
