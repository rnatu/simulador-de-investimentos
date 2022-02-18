import styles from './styles.module.scss';

interface OptionButtonType {
  buttonTitle: string;
  handleActiveButton: (text: any) => void;
  buttonActive: string | null;
}

export function OptionButton({
  buttonTitle,
  handleActiveButton,
  buttonActive,
}: OptionButtonType) {
  return (
    <button
      type="button"
      className={`${styles.optionButton} ${
        buttonActive === buttonTitle && styles.active
      }`}
      onClick={() => handleActiveButton(buttonTitle)}
    >
      {buttonTitle}
    </button>
  );
}
