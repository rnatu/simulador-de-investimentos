/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { OptionButton } from '../OptionButton';
import { SimulatorHeaderInfo } from '../SimulatorHeaderInfo';
import { SimulatorOptions } from '../SimulatorOptions';
import styles from './styles.module.scss';

export function SimulatorCard() {
  return (
    <div className={styles.simulatorContainer}>
      <h2>Simulador</h2>
      <div className={styles.simulatorContent}>
        <div className={styles.incomeSection}>
          <SimulatorOptions
            title="Rendimento"
            buttonText={['Bruto', 'Líquido']}
            defaultButton="Bruto"
          />
        </div>

        <div className={styles.indexingTypes}>
          <SimulatorOptions
            title="Tipos de indexação"
            buttonText={['PRÉ', 'POS', 'FIXADO']}
            defaultButton="POS"
          />
        </div>
      </div>
    </div>
  );
}
