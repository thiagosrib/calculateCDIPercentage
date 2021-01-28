const casasDecimais = 10 ** 18;

export default function TaxaCDI(cdi: number): number {
  const valor = (cdi / 100 + 1) ** (1 / 252) - 1;

  const valorTruncado = Math.trunc(valor * casasDecimais) / casasDecimais;

  return valorTruncado;
}
