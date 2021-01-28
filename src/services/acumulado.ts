import TaxaCDI from './TaxaCDI';
import historyCDI from './history';

interface Response {
  date: string;
  unitPrice: number;
}

export default function CDIAcumulado(
  initDate: Date,
  endDate: Date,
  cdbRate: number,
): Response[] {
  const diffDate =
    (endDate.getTime() - initDate.getTime()) / (24 * 3600 * 1000);

  const searchDate = initDate;
  let indexDateFinded = 0;
  let CDIAcumulada = 1.0;
  const retorno = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < diffDate; i++) {
    const cdiTax = historyCDI.filter(
      cdiHistory =>
        cdiHistory.dtDate.toDateString() === searchDate.toDateString(),
    )[0];

    if (cdiTax) {
      const cdiTaxInADate = TaxaCDI(cdiTax.dLastTradePrice);

      CDIAcumulada *= 1 + cdiTaxInADate * (cdbRate / 100);

      console.log(
        indexDateFinded,
        cdiTax.dLastTradePrice,
        cdiTaxInADate.toFixed(8),
        CDIAcumulada.toFixed(16),
      );

      indexDateFinded += 1;

      retorno.push({
        date: searchDate.toDateString(),
        unitPrice: parseFloat(
          (1000 * parseFloat(CDIAcumulada.toFixed(16))).toFixed(5),
        ),
      });
    }

    searchDate.setDate(searchDate.getDate() + 1);
  }

  return retorno;
}
