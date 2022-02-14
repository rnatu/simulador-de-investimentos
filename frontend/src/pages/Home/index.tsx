import { SimulatorCard } from '../../components/SimulatorCard';
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
            <h2>Resultado da Simulação</h2>
          </div>
        </main>
      </div>
    </div>
  );
}
