import { SimulatorCard } from '../../components/SimulatorSection';
import { SimulatorResultCard } from '../../components/SimulatorResultSection';
import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.homeContainer}>
        <header className={styles.homeHeader}>
          <h1>Simulador de Investimentos</h1>
        </header>

        <main className={styles.homeContent}>
          <SimulatorCard />

          <div>
            <SimulatorResultCard />
          </div>
        </main>
      </div>
    </div>
  );
}
