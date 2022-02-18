import { useState } from 'react';
import { OptionButton } from '../OptionButtons';
import { SimulatorHeaderInfo } from '../SimulatorHeaderInfo';
import styles from './styles.module.scss';

interface SimulatorOptionsType {
  title: string;
  buttonsTitle: Array<string>;
  defaultButton: string;
  handleOption: (option: string) => void;
}

export function SimulatorOptions({
  title,
  buttonsTitle,
  defaultButton,
  handleOption,
}: SimulatorOptionsType) {
  const [buttonActive, setButtonActive] = useState<string>(defaultButton);

  const handleActiveButton = (option: string) => {
    setButtonActive(option);
    handleOption(option);
  };

  return (
    <>
      <div>
        <SimulatorHeaderInfo
          title={title}
          hoverInfoMsg={`Informe os valores abaixo para calculo do ${title}`}
        />
      </div>

      <div className={styles.incomeButtonSection}>
        {buttonsTitle.map((button) => (
          <OptionButton
            key={button}
            buttonTitle={button}
            handleActiveButton={handleActiveButton}
            buttonActive={buttonActive}
          />
        ))}
      </div>
    </>
  );
}
