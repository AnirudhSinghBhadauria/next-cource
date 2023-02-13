import LogisticsItem from './LogisticItem';
import classes from './eventLogistics.module.scss';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem>
          <address>{address}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;