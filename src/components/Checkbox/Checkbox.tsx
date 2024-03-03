import styles from './Checkbox.module.css';
import { isValue } from '../../utils/isValue';
import { TResults } from '../../types';
interface CheckboxProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<keyof TResults>>;
}
const Checkbox = ({ value, setValue }: CheckboxProps) => {
  const handleValueCHeck = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    if (
      isValue(event.currentTarget.dataset.value) &&
      event.currentTarget.checked
    ) {
      setValue(event.currentTarget.dataset.value);
    }
    return;
  };

  return (
    <label htmlFor={value} className={styles.checkbox}>
      <input
        id={value}
        type="checkbox"
        name={value}
        value={value}
        data-value={value}
        onClick={handleValueCHeck}
      />
      {value}
    </label>
  );
};
export default Checkbox;
