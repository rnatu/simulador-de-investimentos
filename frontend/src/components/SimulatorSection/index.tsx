import { useEffect, useState } from 'react';
import { Input } from '../Input';
import { SimulatorOptions } from '../SimulatorOptions';
import styles from './styles.module.scss';
import { api } from '../../services/api';
import { useResult } from '../../hooks/useResult';

type InitialInputValuesType = {
  data: Array<{
    nome: string;
    valor: number;
  }>;
};

export function SimulatorSection() {
  const { setIncomeOption, setIndexingOption, handleSearchApiResult } =
    useResult();
  const [inputValues, setInputValues] = useState({
    aporteinicial: '',
    prazoemmeses: '',
    ipcaaoano: '',
    aportemensal: '',
    rentabilidade: '',
    cdiaoano: '',
  });

  useEffect(() => {
    (async function getInitialInputValues() {
      try {
        const { data }: InitialInputValuesType = await api.get('indicadores');

        setInputValues((oldState) => ({
          ...oldState,
          cdiaoano: `${data[0].valor}%`,
          ipcaaoano: `${data[1].valor}%`,
        }));
      } catch (err: unknown) {
        if (err instanceof Error) {
          alert(`${err.name}: ${err.message}`);
        }
      }
    })();
  }, []);

  const handleInputChange = (inputName: string, inputValue: string) => {
    setInputValues((oldState) => ({ ...oldState, [inputName]: inputValue }));
  };

  return (
    <div className={styles.simulatorContainer}>
      <h2>Simulador</h2>
      <div className={styles.simulatorContent}>
        <div>
          <SimulatorOptions
            title="Rendimento"
            buttonsTitle={['Bruto', 'Líquido']}
            defaultButton="Bruto"
            handleOption={setIncomeOption}
          />

          <div className={styles.inputForm}>
            <Input
              inputName="Aporte Inicial"
              handleInputChange={handleInputChange}
              inputStateValue={inputValues.aporteinicial}
            />

            <Input
              inputName="Prazo (em meses)"
              handleInputChange={handleInputChange}
              inputStateValue={inputValues.prazoemmeses}
            />

            <Input
              inputName="IPCA (ao ano)"
              handleInputChange={handleInputChange}
              inputStateValue={inputValues.ipcaaoano}
            />
          </div>
        </div>

        <div>
          <SimulatorOptions
            title="Tipos de indexação"
            buttonsTitle={['PRÉ', 'POS', 'FIXADO']}
            defaultButton="POS"
            handleOption={setIndexingOption}
          />

          <div className={styles.inputForm}>
            <Input
              inputName="Aporte Mensal"
              handleInputChange={handleInputChange}
              inputStateValue={inputValues.aportemensal}
            />

            <Input
              inputName="Rentabilidade"
              handleInputChange={handleInputChange}
              inputStateValue={inputValues.rentabilidade}
            />

            <Input
              inputName="CDI (ao ano)"
              handleInputChange={handleInputChange}
              inputStateValue={inputValues.cdiaoano}
            />
          </div>
        </div>
      </div>
      <div className={styles.simulatorCardButtons}>
        <button type="button">Limpar campos</button>
        <button type="button" onClick={handleSearchApiResult}>
          Simular
        </button>
      </div>
    </div>
  );
}
