import locations from "./data";
import Card from "./Card";

export default function Content() {
  const cards = locations.map((location) => {
    return <Card key={location.id} location={location} />;
  });
  return <section className="Cards">{cards}</section>;
}
