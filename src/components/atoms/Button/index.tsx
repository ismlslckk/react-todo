import classNames from 'classnames';

const Button = ({ ...props }) => {
  const className = classNames({
    [`${props.className}`]: props.className,
  });

  return (
    <button
      className={className}
      type="button"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
