import styles from './styles.module.scss';

interface OptionButtonType {
  text: string;
  handleActiveButton: (text: any) => void;
  buttonActive: string | null;
}

export function OptionButton({
  text,
  handleActiveButton,
  buttonActive,
}: OptionButtonType) {
  return (
    <button
      type="button"
      className={`${styles.optionButton} ${
        buttonActive === text && styles.active
      }`}
      onClick={() => handleActiveButton(text)}
    >
      {text}
    </button>
  );
}
