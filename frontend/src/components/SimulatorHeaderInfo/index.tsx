/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './styles.module.scss';

interface SimulatorHeaderInfoType {
  title: string;
  hoverInfoMsg: string;
}

export function SimulatorHeaderInfo({
  title,
  hoverInfoMsg,
}: SimulatorHeaderInfoType) {
  return (
    <div className={styles.simulatorHeaderContainer}>
      <h4>{title}</h4>
      <img
        src="https://cdn-icons-png.flaticon.com/512/167/167801.png"
        alt="Informação sobre rendimento"
        title="Informe os valores abaixo para calculo do rendimento"
      />
    </div>
  );
}
