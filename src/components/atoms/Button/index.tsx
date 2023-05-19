const Button = ({ ...props }) => (
  <button
    type="button"
    {...props}
  >
    {props.children}
  </button>
);

export default Button;
