import { ApiDataType } from '../types/index';
import formatCurrency from './formatCurrency';

export function formatApiResult(data: ApiDataType) {
  const formattedData = {
    valorFinalBruto: formatCurrency(data.valorFinalBruto),
    aliquotaDoIR: `${data.aliquotaIR}%`,
    valorPagoEmIR: formatCurrency(data.valorPagoIR),
    valorFinalLiquido: formatCurrency(data.valorFinalLiquido),
    valorTotalInvestido: formatCurrency(data.valorTotalInvestido),
    ganhoLiquido: formatCurrency(data.ganhoLiquido),
  };

  return formattedData;
}
