import { useRef, useState, useEffect } from 'react';

/**
 * Custom Hook: useCountdown
 * @param defaultCountdown - Tiempo inicial del contador (en segundos).
 * @param onCompleteCountdown - Función que se ejecuta cuando el contador llega a 0.
 */
const useCountdown = (defaultCountdown: number, onCompleteCountdown?: () => void) => {
  const [currentCountdown, setCurrentCountdown] = useState(defaultCountdown);
  const [timerStatus, setTimerStatus] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Inicia o detiene el contador según el estado del temporizador
  useEffect(() => {
    if (timerStatus) {
      intervalRef.current = setInterval(() => {
        setCurrentCountdown((prev) => prev - 1);
      }, 1000); // Cada segundo
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timerStatus]);

  // Maneja la finalización del contador
  useEffect(() => {
    if (currentCountdown <= 0 && timerStatus) {
      clearInterval(intervalRef.current!);
      setTimerStatus(false);
      setCurrentCountdown(defaultCountdown);
      if (onCompleteCountdown) {
        onCompleteCountdown();
      }
    }
  }, [currentCountdown, timerStatus, defaultCountdown, onCompleteCountdown]);

  return {
    start: () => {
      setTimerStatus(true);
    },
    stop: () => {
      setTimerStatus(false);
    },
    reset: () => {
      setCurrentCountdown(defaultCountdown);
      setTimerStatus(false);
    },
    status: timerStatus,
    countdown: currentCountdown,
  };
};

export default useCountdown;
