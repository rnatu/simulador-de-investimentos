import { useState } from 'react';
import { OptionButton } from '../OptionButton';
import { SimulatorHeaderInfo } from '../SimulatorHeaderInfo';
import styles from './styles.module.scss';

interface SimulatorOptionsType {
  title: string;
  buttonText: Array<string>;
  defaultButton: string;
}

export function SimulatorOptions({
  title,
  buttonText,
  defaultButton,
}: SimulatorOptionsType) {
  const [buttonActive, setButtonActive] = useState<string>(defaultButton);

  const handleActiveButton = (text: string) => {
    setButtonActive(text);
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
        {buttonText.map((button) => (
          <OptionButton
            key={button}
            text={button}
            handleActiveButton={handleActiveButton}
            buttonActive={buttonActive}
          />
        ))}
      </div>
    </>
  );
}
