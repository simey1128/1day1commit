const plays = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

const invoices = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
];

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];

    volumeCredits += Math.max(perf.audience - 30, 0);
    if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);

    const amount = getPlayAmount(play.type, perf.audience);
    result += `${play.name}: ${format(amount / 100)} (${perf.audience}석)\n`;
    totalAmount += amount;
  }
  result += `총액: ${format(totalAmount / 100)}`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}

const getPlayAmount = (playType, audience) => {
  let result = 0;

  switch (playType) {
    case 'tragedy':
      result = 40000;
      if (audience > 30) {
        result += 1000 * (audience - 30);
      }
      break;
    case 'comedy':
      result = 30000;
      if (audience > 20) {
        result += 10000 + 500 * (audience - 20);
      }
      result += 300 * audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${playType}`);
  }

  return result;
};
