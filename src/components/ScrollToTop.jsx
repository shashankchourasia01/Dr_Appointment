import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // 'auto' for instant, 'smooth' for smooth scroll
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;