import { useEffect, useState, useMemo, useCallback } from "react";
import getPrimeNumbers from "../utils/getPrimeNumbers";

const useTimer = (initialTime: number): [number, boolean, () => void] => {
  const [time, setTime] = useState(initialTime);

  const passTime = () => {
    setTime((prev) => prev - 1);
  };
  const resetTime = useCallback(() => {
    setTime(initialTime);
  }, [setTime, initialTime]);

  const primeNums = useMemo(() => getPrimeNumbers(initialTime), [initialTime]);

  const isPrime = primeNums.includes(time);

  useEffect(() => {
    const timerId = setInterval(passTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (time === 0) {
      resetTime();
    }
  }, [time, resetTime]);

  return [time, isPrime, resetTime];
};

export default useTimer;
