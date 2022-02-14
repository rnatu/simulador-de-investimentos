import { SimulatorCard } from '../../components/SimulatorCard';
import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <header>
          <h1>Simulador de Investimentos</h1>
        </header>

        <main>
          <SimulatorCard />

          <div>
            <h2>Resultado da Simulação</h2>
          </div>
        </main>
      </div>
    </div>
  );
}
