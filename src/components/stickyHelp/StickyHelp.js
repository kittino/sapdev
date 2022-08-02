import './StickyHelp.css';

function StickyHelp(props) {
  return (
    <p className={props.showHelp ? "showSticky" : "noneSticky"}>
        {props.message}
    </p>
  );
}

export default StickyHelp;
