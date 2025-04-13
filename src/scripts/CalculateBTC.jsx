export const calculateBTCAmount = (usdAmount, btcPrice) => {
  return usdAmount / btcPrice;
};

export const getCurrentHalvingInfo = () => {
  const startYear = 2009;
  const startingBlock = 50;
  const halvingNumber = 5;
  const currentBlockReward = startingBlock / Math.pow(2, halvingNumber - 1);

  return {
    number: halvingNumber,
    year: 2024,
    blockReward: currentBlockReward,
  };
};

export const calculateRetirementHalving = (investmentAmount) => {
  if (!investmentAmount || investmentAmount <= 0) {
    return {
      number: 0,
      year: 0,
      blockReward: 0,
    };
  }

  const currentYear = 2024;
  let yearsToAdd;

  if (investmentAmount <= 100) {
    yearsToAdd = 40;
  } else if (investmentAmount <= 4999) {
    yearsToAdd = 30;
  } else if (investmentAmount <= 9999) {
    yearsToAdd = 20;
  } else {
    yearsToAdd = 10;
  }

  const targetYear = currentYear + yearsToAdd;
  const startYear = 2009;
  const yearsSinceStart = targetYear - startYear;
  const halvingNumber = Math.floor(yearsSinceStart / 4) + 1;
  const startingBlock = 50;
  const blockReward = startingBlock / Math.pow(2, halvingNumber - 1);

  return {
    number: halvingNumber,
    year: targetYear,
    blockReward: blockReward,
  };
};

export const generateHalvingTable = (investmentAmount, currentBTCPrice) => {
  if (!investmentAmount || !currentBTCPrice) return [];

  const startYear = 2024;
  const initialBTC = calculateBTCAmount(investmentAmount, currentBTCPrice);
  const numberOfHalvings = 10;

  const table = [];

  for (let i = 0; i <= numberOfHalvings; i++) {
    const year = startYear + i * 4;
    const numberOfHalvingsPassed = i;
    const projectedPrice =
      currentBTCPrice * Math.pow(4, numberOfHalvingsPassed);
    const projectedValue = initialBTC * projectedPrice;

    table.push({
      year,
      pbtc: projectedPrice,
      investment: projectedValue,
    });
  }

  return table;
};
