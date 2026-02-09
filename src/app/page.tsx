import Card from "../components/card/Card";
import styles from "./page.module.scss";
import FilterCard from "../components/filterCard/FilterCard";
const cars = [
  {
    carImage: "/Kia soul@3x.png",
    brandImage: "/Hertz.png",
    badgeText: "Recomendado",
    badgeColor: "var(--recomendation-color)",
    priceAverage: "Económico"
  },
  {
    carImage: "/Chrysler Pacifica@3x.png",
    brandImage: "/dollarBrand.png",
    badgeText: "¡Oferta de Hoy!",
    badgeColor: "var(--offert-background)",
    priceAverage: "Intermedio"
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.generalContainer}>
        <FilterCard />
        <div className={styles.cardsContainer}>
        {cars.map((car, index) => (
          <Card
            key={index}
            carImage={car.carImage}
            brandImage={car.brandImage}
            badgeText={car.badgeText}
            badgeColor={car.badgeColor}
            priceAverage={car.priceAverage}
          />
        ))}
        </div>
      </div>
    </main>
  );
}
