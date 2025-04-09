export const startCountdown = (endDate, setTimeData, refs) => {
  const {
    daysRef,
    hoursRef,
    minutesRef,
    secondsRef,
    dayDotRef,
    hourDotRef,
    minDotRef,
    secDotRef,
  } = refs;

  const x = setInterval(() => {
    const now = Date.now();
    const endTime = new Date(endDate).getTime();
    const distance = endTime - now;

    if (distance < 0) {
      clearInterval(x);
      setTimeData({
        days: "0",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeData({
        days: `${d}`,
        hours: `${h < 10 ? "0" + h : h}`,
        minutes: `${m < 10 ? "0" + m : m}`,
        seconds: `${s < 10 ? "0" + s : s}`,
      });
    }
  }, 1000);
};
