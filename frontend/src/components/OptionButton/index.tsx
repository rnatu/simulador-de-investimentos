import styles from './styles.module.scss';

interface OptionButtonType {
  text: string;
}

export function OptionButton({ text }: OptionButtonType) {
  return (
    <button type="button" className={styles.optionButton}>
      {text}
    </button>
  );
}
