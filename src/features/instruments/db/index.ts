import type { Instrument, InstrumentHistory } from "../schemas/instruments";

export const INSTRUMENTS: Omit<Instrument, "id">[] = [
  {
    issuer: "SEH",
    currency: "DOP",
    issueDate: "10/02/2023",
    maturityDate: "10/02/2034",
    lastOperationDate: "24/05/2023",
    daysToMaturity: 3935,
    paymentFrequency: 2,
    couponRate: 13.625,
    ticker: "MH24",
  },
  {
    issuer: "SEH",
    currency: "DOP",
    issueDate: "03/02/2023",
    maturityDate: "03/02/2033",
    lastOperationDate: "05/05/2023",
    daysToMaturity: 3562,
    paymentFrequency: 2,
    couponRate: 13.625,
    ticker: "MH28",
  },
  {
    issuer: "SEH",
    currency: "DOP",
    issueDate: "10/06/2022",
    maturityDate: "10/06/2034",
    lastOperationDate: "23/05/2023",
    daysToMaturity: 4047,
    paymentFrequency: 2,
    couponRate: 13.0,
    ticker: "MH24",
  },
  {
    issuer: "SEH",
    currency: "DOP",
    issueDate: "23/09/2022",
    maturityDate: "23/09/2029",
    lastOperationDate: "29/05/2023",
    daysToMaturity: 2334,
    paymentFrequency: 2,
    couponRate: 12.75,
    ticker: "MH28",
  },
  {
    issuer: "SEH",
    currency: "USD",
    issueDate: "27/12/2019",
    maturityDate: "27/12/2026",
    lastOperationDate: "19/05/2023",
    daysToMaturity: 1328,
    paymentFrequency: 2,
    couponRate: 6.65,
    ticker: "MH24",
  },
  {
    issuer: "BCRD",
    currency: "DOP",
    issueDate: "12/02/2022",
    maturityDate: "12/02/2027",
    lastOperationDate: "23/05/2023",
    daysToMaturity: 1379,
    paymentFrequency: 2,
    couponRate: 8.0,
    ticker: "BCRD26",
  },
  {
    issuer: "BCRD",
    currency: "DOP",
    issueDate: "05/12/2020",
    maturityDate: "05/12/2025",
    lastOperationDate: "25/05/2023",
    daysToMaturity: 945,
    paymentFrequency: 2,
    couponRate: 13.0,
    ticker: "BCRD24",
  },
  {
    issuer: "BCRD",
    currency: "DOP",
    issueDate: "30/01/2023",
    maturityDate: "30/01/2026",
    lastOperationDate: "23/05/2023",
    daysToMaturity: 1001,
    paymentFrequency: 2,
    couponRate: 13.0,
    ticker: "BCRD26",
  },
  {
    issuer: "SEH",
    currency: "USD",
    issueDate: "27/01/2015",
    maturityDate: "27/01/2045",
    lastOperationDate: "03/05/2023",
    daysToMaturity: 7938,
    paymentFrequency: 2,
    couponRate: 6.85,
    ticker: "MH24",
  },
  {
    issuer: "SEH",
    currency: "DOP",
    issueDate: "11/08/2018",
    maturityDate: "11/08/2028",
    lastOperationDate: "16/05/2023",
    daysToMaturity: 1925,
    paymentFrequency: 2,
    couponRate: 10.75,
    ticker: "MH28",
  },
  {
    issuer: "SEH",
    currency: "USD",
    issueDate: "29/01/2016",
    maturityDate: "29/01/2026",
    lastOperationDate: "29/05/2023",
    daysToMaturity: 974,
    paymentFrequency: 2,
    couponRate: 6.875,
    ticker: "MH24",
  },
  {
    issuer: "SEH",
    currency: "USD",
    issueDate: "30/01/2020",
    maturityDate: "30/01/2060",
    lastOperationDate: "24/05/2023",
    daysToMaturity: 13399,
    paymentFrequency: 2,
    couponRate: 5.875,
    ticker: "BCRD24",
  },
];

export const INSTRUMENT_HISTORY: InstrumentHistory[] = [
  {
    ticker: "BCRD24",
    history: [
      { date: "2024-04-01", price: 98.75 },
      { date: "2024-04-02", price: 98.85 },
      { date: "2024-04-03", price: 98.9 },
      { date: "2024-04-04", price: 99.0 },
    ],
  },
  {
    ticker: "BCRD26",
    history: [
      { date: "2024-04-01", price: 102.1 },
      { date: "2024-04-02", price: 102.15 },
      { date: "2024-04-03", price: 102.2 },
      { date: "2024-04-04", price: 102.35 },
    ],
  },
  {
    ticker: "MH24",
    history: [
      { date: "2024-04-01", price: 99.45 },
      { date: "2024-04-02", price: 99.6 },
      { date: "2024-04-03", price: 99.55 },
      { date: "2024-04-04", price: 99.7 },
    ],
  },
  {
    ticker: "MH28",
    history: [
      { date: "2024-04-01", price: 103.2 },
      { date: "2024-04-02", price: 103.35 },
      { date: "2024-04-03", price: 103.4 },
      { date: "2024-04-04", price: 103.5 },
    ],
  },
];
