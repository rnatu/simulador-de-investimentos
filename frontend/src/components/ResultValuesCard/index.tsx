import styles from './styles.module.scss';

interface ResultValuesCardProps {
  title: string;
  value: string;
  isNetValue?: boolean;
}

// style={{ color: 'green' }}

export function ResultValuesCard({
  title,
  value,
  isNetValue = false,
}: ResultValuesCardProps) {
  return (
    <div className={styles.resultCard}>
      <p>{title}</p>
      <span style={isNetValue ? { color: '#00CC00', fontWeight: '500' } : {}}>
        {value}
      </span>
    </div>
  );
}
