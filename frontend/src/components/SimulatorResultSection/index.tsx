import styles from './styles.module.scss';

import { ResultValuesCard } from '../ResultValuesCard';
import { useResult } from '../../hooks/useResult';

export function SimulatorResultCard() {
  const { simulatorResult } = useResult();

  return (
    <div className={styles.resultContainer}>
      {simulatorResult && (
        <>
          <h2>Resultado da Simulação</h2>
          <div className={styles.resultContent}>
            <ResultValuesCard
              title="Valor final bruto"
              value={simulatorResult.valorFinalBruto}
            />
            <ResultValuesCard
              title="Alíquota do IR"
              value={simulatorResult.aliquotaDoIR}
            />
            <ResultValuesCard
              title="Valor Pago em IR"
              value={simulatorResult.valorPagoEmIR}
            />
            <ResultValuesCard
              title="Valor Final Líquido"
              value={simulatorResult.valorFinalLiquido}
              isNetValue
            />
            <ResultValuesCard
              title="Valor Total Investido"
              value={simulatorResult.valorTotalInvestido}
            />
            <ResultValuesCard
              title="Ganho Líquido"
              value={simulatorResult.ganhoLiquido}
              isNetValue
            />
          </div>
          <div className={styles.chart}>
            <p>Projeção de Valores</p>
          </div>
        </>
      )}
      {simulatorResult === null && (
        <div className={styles.notFoundMessage}>
          <h1>Desculpe, Não foi encontrado nenhum resultado</h1>
        </div>
      )}
    </div>
  );
}
