import './innerwrapper.scss';

type Props = {
  children: JSX.Element | JSX.Element[],
};

const InnerWrapper = (props: Props) => (
  <div className="innerWrapper">
    {props.children}
  </div>
);

export default InnerWrapper;
