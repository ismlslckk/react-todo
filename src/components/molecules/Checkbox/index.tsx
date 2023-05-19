import { useState } from 'react';
import { v4 } from 'uuid';
import styles from './checkbox.module.scss';
import Input from '@/components/atoms/Input';

const Checkbox = ({ ...props }) => {
  const [id] = useState(props.id ? props.id : v4());

  return (

    <div className={styles.round}>
      <Input
        type="checkbox"
        {...props}
        id={id}
      />
      <label htmlFor={id} />
    </div>

  );
};

export default Checkbox;
