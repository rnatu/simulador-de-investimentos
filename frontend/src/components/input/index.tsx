import { useState } from 'react';
import styles from './styled.module.scss';

interface InputType {
  inputName: string;
}

export function Input({ inputName }: InputType) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputValue, setInputValue] = useState<string>('');
  const [isOnlyNumbersError, setIsOnlyNumbersError] = useState(false);

  const htmlForByName = inputName
    .toLocaleLowerCase()
    .match(/[a-zA-Z]/g)
    ?.join('');

  const handleChange = (eventValue: string) => {
    const isOnlyNumbers = eventValue.match(/^[0-9]+$/) != null;
    if (!isOnlyNumbers && eventValue !== '') {
      setIsOnlyNumbersError(true);
    } else {
      setIsOnlyNumbersError(false);
    }

    setInputValue(eventValue);
  };

  return (
    <label
      htmlFor={htmlForByName}
      className={isOnlyNumbersError ? styles.error : ''}
      content-text={`${inputName} deve ser um número`}
    >
      <p>{inputName}</p>
      <input
        type="text"
        id={htmlForByName}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
}
