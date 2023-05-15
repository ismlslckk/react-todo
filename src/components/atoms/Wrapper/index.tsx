import './wrapper.scss';

const Wrapper = (props: any) => (
  <div className="wrapper">
    {props.children}
  </div>
);

export default Wrapper;
