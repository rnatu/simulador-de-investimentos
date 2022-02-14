import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <header>
          <h1>Simulador de Investimentos</h1>
        </header>

        <main>
          <h2>Simulador</h2>

          <h2>Resultado da Simulação</h2>
        </main>
      </div>
    </div>
  );
}
