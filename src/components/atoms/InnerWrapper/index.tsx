import './innerwrapper.scss';

const InnerWrapper = (props: any) => (
  <div className="innerWrapper">
    {props.children}
  </div>
);

export default InnerWrapper;
