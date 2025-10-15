import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // The #app div is the scroll container, not window!
    const appContainer = document.getElementById('app');
    
    if (appContainer) {
      appContainer.scrollTop = 0;
    }
    
    // Backup: also scroll window and document
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Multiple attempts to ensure scroll
    const timeouts = [0, 10, 50, 100].map(delay => 
      setTimeout(() => {
        if (appContainer) {
          appContainer.scrollTop = 0;
        }
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      }, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [pathname]);

  return null;
};
