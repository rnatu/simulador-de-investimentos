import { useState } from 'react';
import styles from './styles.module.scss';

interface InputType {
  inputName: string;
  handleInputChange: (inputName: string, inputValue: string) => void;
  inputStateValue: string;
}

export function Input({
  inputName,
  handleInputChange,
  inputStateValue,
}: InputType) {
  const [isOnlyNumbersError, setIsOnlyNumbersError] = useState(false);

  const formattedInputName = inputName
    .toLocaleLowerCase()
    .match(/[a-zA-Z]/g)
    ?.join('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isOnlyNumbers = e.target.value.match(/^[0-9,%]+$/) != null;
    if (!isOnlyNumbers && e.target.value !== '') {
      setIsOnlyNumbersError(true);
      return;
    }
    setIsOnlyNumbersError(false);

    handleInputChange(e.target.name, e.target.value);
  };

  return (
    <label
      htmlFor={formattedInputName}
      className={isOnlyNumbersError ? styles.error : ''}
      content-text={`${inputName} deve ser um número`}
    >
      <p>{inputName}</p>
      <input
        name={formattedInputName}
        type="text"
        id={formattedInputName}
        value={inputStateValue}
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
}
