import { OptionButton } from '../OptionButton';
import { SimulatorHeaderInfo } from '../SimulatorHeaderInfo';
import styles from './styles.module.scss';

export function SimulatorCard() {
  return (
    <div className={styles.simulatorContainer}>
      <h2>Simulador</h2>
      <div className={styles.simulatorContent}>
        <div className={styles.incomeSection}>
          <div>
            <SimulatorHeaderInfo title="Rendimento" hoverInfoMsg="test" />
          </div>

          <div className={styles.incomeButtonSection}>
            <OptionButton text="Bruto" />
            <OptionButton text="Líquido" />
          </div>
        </div>

        <div className={styles.indexingTypes}>
          <div>
            <SimulatorHeaderInfo
              title="Tipos de indexação"
              hoverInfoMsg="test"
            />
          </div>
          <div className={styles.incomeButtonSection}>
            <OptionButton text="PRÉ" />
            <OptionButton text="POS" />
            <OptionButton text="FIXADO" />
          </div>
        </div>
      </div>
    </div>
  );
}
