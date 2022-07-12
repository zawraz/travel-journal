export default function Card(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.location;

  return (
    <div className="Card">
      <img className="Card--img" src={imageUrl} alt="" />
      <h2 className="Card--location">{location}</h2>
      <a className="Card--googleMapsUrl" href={googleMapsUrl}>
        View on GoogleMaps
      </a>
      <h1 className="Card--title">{title}</h1>
      <div className="Card--duration">
        {startDate} - {endDate}
      </div>
      <p className="Card--desc">{description}</p>
    </div>
  );
}
