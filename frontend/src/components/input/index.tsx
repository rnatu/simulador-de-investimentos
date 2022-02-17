import { useState } from 'react';
import styles from './styles.module.scss';

interface InputType {
  inputName: string;
  inputStateFunction: (value: string) => void;
  inputStateValue: string;
}

export function Input({
  inputName,
  inputStateFunction,
  inputStateValue,
}: InputType) {
  const [isOnlyNumbersError, setIsOnlyNumbersError] = useState(false);

  const htmlForByName = inputName
    .toLocaleLowerCase()
    .match(/[a-zA-Z]/g)
    ?.join('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isOnlyNumbers = e.target.value.match(/^[0-9]+$/) != null;
    if (!isOnlyNumbers && e.target.value !== '') {
      setIsOnlyNumbersError(true);
      return;
    }
    setIsOnlyNumbersError(false);

    inputStateFunction(e.target.value);
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
        value={inputStateValue}
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
}
