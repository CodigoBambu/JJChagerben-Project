export const startCountdown = (endDate, setTimeData) => {
  const startCountdownFrom = new Date("01/01/2024").getTime();
  const endTime = new Date(endDate).getTime();
  const totalDays = Math.floor(
    (endTime - startCountdownFrom) / (1000 * 60 * 60 * 24)
  );

  const x = setInterval(() => {
    const now = Date.now();
    const distance = endTime - now;

    if (distance < 0) {
      clearInterval(x);
      setTimeData({
        days: "0",
        hours: "00",
        minutes: "00",
        seconds: "00",
        transforms: {
          days: "rotateZ(0deg)",
          hours: "rotateZ(0deg)",
          minutes: "rotateZ(0deg)",
          seconds: "rotateZ(0deg)",
        },
        offsets: {
          days: 440,
          hours: 440,
          minutes: 440,
          seconds: 440,
        },
      });
    } else {
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      const daysRemaining = d;
      const daysPassed = totalDays - daysRemaining;
      const dayRotation = (daysPassed / totalDays) * 360;

      setTimeData({
        days: `${d}`,
        hours: `${h < 10 ? "0" + h : h}`,
        minutes: `${m < 10 ? "0" + m : m}`,
        seconds: `${s < 10 ? "0" + s : s}`,
        transforms: {
          days: `rotateZ(${dayRotation}deg)`,
          hours: `rotateZ(${h * 15}deg)`,
          minutes: `rotateZ(${m * 6}deg)`,
          seconds: `rotateZ(${s * 6}deg)`,
        },
        offsets: {
          days: 440 - (440 * daysPassed) / totalDays,
          hours: 440 - (440 * h) / 24,
          minutes: 440 - (440 * m) / 60,
          seconds: 440 - (440 * s) / 60,
        },
      });
    }
  }, 1000);
};
