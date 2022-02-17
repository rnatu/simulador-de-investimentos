/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Input } from '../Input';
import { SimulatorOptions } from '../SimulatorOptions';
import styles from './styles.module.scss';

export function SimulatorCard() {
  const [aporteInicial, setAporteInicial] = useState<string>('');
  const [prazo, setPrazo] = useState<string>('');
  const [ipca, setIpca] = useState<string>('');
  const [aporteMensal, setAporteMensal] = useState<string>('');
  const [rentabilidade, setRentabilidade] = useState<string>('');
  const [cdi, setCdi] = useState<string>('');

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
            <Input
              inputName="Aporte Inicial"
              inputStateFunction={setAporteInicial}
              inputStateValue={aporteInicial}
            />

            <Input
              inputName="Prazo (em meses)"
              inputStateFunction={setPrazo}
              inputStateValue={prazo}
            />

            <Input
              inputName="IPCA (ao ano)"
              inputStateFunction={setIpca}
              inputStateValue={ipca}
            />
          </div>
        </div>

        <div>
          <SimulatorOptions
            title="Tipos de indexação"
            buttonsText={['PRÉ', 'POS', 'FIXADO']}
            defaultButton="POS"
          />

          <div className={styles.inputForm}>
            <Input
              inputName="Aporte Mensal"
              inputStateFunction={setAporteMensal}
              inputStateValue={aporteMensal}
            />

            <Input
              inputName="Rentabilidade"
              inputStateFunction={setRentabilidade}
              inputStateValue={rentabilidade}
            />

            <Input
              inputName="CDI (ao ano)"
              inputStateFunction={setCdi}
              inputStateValue={cdi}
            />
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
