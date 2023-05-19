import classNames from 'classnames';

const Input = ({ ...props }) => {
  const className = classNames('form-control', {
    [`${props.className}`]: props.className,
  });

  return (
    <input
      {...props}
      className={className}
    />
  );
};

export default Input;
