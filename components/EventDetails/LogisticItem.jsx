import classes from './logisticItem.module.scss';

function LogisticsItem(props) {
  return (
    <li className={classes.item}>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;