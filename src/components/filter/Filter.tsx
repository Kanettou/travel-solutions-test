import styles from "./filter.module.scss"

export default function Filter() {
  return (
    <section className={styles.filterContainer}>
        <div className={styles.leftContainer}>
            <h3 className={styles.filterClasification}>Economicos</h3>
            <h4 className={styles.filterResults}>(45) Resultados</h4>
        </div>
        <div className={styles.rightContainer}>
            <div className={styles.topText}>
                <h5 className={styles.filterExtra}>+ Económicos </h5>
                <h5 className={styles.fromText}>Desde</h5>
            </div>
            <div className={styles.bottomText}>
                <h3 className={styles.priceFilter}>$544.448</h3>
                <span className={styles.rateText}>| dia</span>
            </div>
        </div>
      
    </section>
  );
}
