
import { useEffect } from 'react';

/**
 * Hook that enables smooth scrolling to anchor links
 * when the URL hash changes or on page load
 */
export const useScrollToAnchor = () => {
  useEffect(() => {
    // Function to handle smooth scrolling to sections
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        // Allow layout to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Execute on initial load
    scrollToSection();

    // Add event listener for hash changes
    window.addEventListener('hashchange', scrollToSection);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', scrollToSection);
    };
  }, []);
};

export default useScrollToAnchor;
