import styles from './styles.module.scss';

import { ResultValuesCard } from '../ResultValuesCard';

export function SimulatorResultCard() {
  return (
    <div className={styles.resultContainer}>
      <h2>Resultado da Simulação</h2>
      <div className={styles.resultContent}>
        <ResultValuesCard title="Valor final bruto" value="R$ 15.509,27" />
        <ResultValuesCard title="Alíquota do IR" value="20%" />
        <ResultValuesCard title="Valor Pago em IR" value="R$ 1.509,27" />
        <ResultValuesCard
          title="Valor Final Líquido"
          value="R$ 56.509,27"
          isNetValue
        />
        <ResultValuesCard title="Valor Total Investido" value="R$ 9.509,27" />
        <ResultValuesCard
          title="Ganho Líquido"
          value="R$ 47.000,00"
          isNetValue
        />
      </div>
      <div>
        <p>Projeção de Valores</p>
      </div>
    </div>
  );
}
