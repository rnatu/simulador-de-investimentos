import { Input } from '../input';
import { SimulatorOptions } from '../SimulatorOptions';
import styles from './styles.module.scss';

export function SimulatorCard() {
  return (
    <div className={styles.simulatorContainer}>
      <h2>Simulador</h2>
      <div className={styles.simulatorContent}>
        <div>
          <SimulatorOptions
            title="Rendimento"
            buttonsText={['Bruto', 'Líquido']}
            defaultButton="Bruto"
          />

          <div className={styles.inputForm}>
            <Input inputName="Aporte Inicial" />

            <Input inputName="Prazo (em meses)" />

            <Input inputName="IPCA (ao ano)" />
          </div>
        </div>

        <div>
          <SimulatorOptions
            title="Tipos de indexação"
            buttonsText={['PRÉ', 'POS', 'FIXADO']}
            defaultButton="POS"
          />

          <div className={styles.inputForm}>
            <Input inputName="Aporte Mensal" />

            <Input inputName="Rentabilidade" />

            <Input inputName="CDI (ao ano)" />
          </div>
        </div>
      </div>
      <div className={styles.simulatorCardButtons}>
        <button type="button">Limpar campos</button>
        <button type="button">Simular</button>
      </div>
    </div>
  );
}
