import { SimulatorHeaderInfo } from '../SimulatorHeaderInfo';
import styles from './styles.module.scss';

export function SimulatorCard() {
  return (
    <div className={styles.simulatorContainer}>
      <h2>Simulador</h2>
      <div className={styles.simulatorContent}>
        <div className="incomeContainer">
          <SimulatorHeaderInfo title="Rendimento" hoverInfoMsg="test" />
        </div>
        <div className="indexingTypes">
          <SimulatorHeaderInfo title="Tipos de indexação" hoverInfoMsg="test" />
        </div>
      </div>
    </div>
  );
}
