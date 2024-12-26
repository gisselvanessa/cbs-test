// hooks/useInactivity.ts
import { useCallback, useEffect, useState } from 'react';

interface UseInactivityProps {
  timeout?: number;
  onInactive?: () => void;
}

// Changed to named export
const useInactivity = ({ 
  timeout = 2000, 
  onInactive = () => {} 
}: UseInactivityProps = {}) => {
  const modalTimeout = timeout - 1000;
  const [isInactive, setIsInactive] = useState<boolean>(false);

  const handleInactivity = useCallback(() => {
    setIsInactive(true);
    onInactive();
  }, [onInactive]);

  const resetInactive = useCallback(() => {
    setIsInactive(false);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleActivity = () => {
      clearTimeout(timer);
      timer = setTimeout(() => handleInactivity(), modalTimeout);
      resetInactive();
    };

    // Initial timer
    timer = setTimeout(() => handleInactivity(), modalTimeout);

    // Add event listeners
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);
    window.addEventListener('scroll', handleActivity);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, [modalTimeout, handleInactivity, resetInactive]);

  return { isInactive, resetInactive, setIsInactive };
};

// Export as both default and named export
export { useInactivity };
export default useInactivity;