import styles from "./filterCard.module.scss";
import Image from "next/image";

export default function FilterCard() {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.filterText}>Economico</h2>
      <Image
        src={"/Hyundai Santa fe@3x.png"}
        width={220}
        height={115}
        alt="Carro de filtro"
      />
      <div className={styles.specsGroup}>
        <div className={styles.specPack}>
          <Image
            src={"/people.svg"}
            width={20}
            height={20}
            alt="Icono de personas"
          />
          <span className={styles.specsText}>5 Pasajeros</span>
        </div>
        <div className={styles.specPack}>
          <Image
            src={"/shopping-bag.svg"}
            width={20}
            height={20}
            alt="Icono de compras"
          />
          <span className={styles.specsText}>3 Maletas</span>
        </div>
        <div className={styles.specPack}>
          <Image
            src={"/frozen.svg"}
            width={20}
            height={20}
            alt="Icono de aire acondicionado"
          />

          <span className={styles.specsText}>Aire Acondicionado</span>
        </div>
        <div className={styles.specPack}>
          <Image
            src={"/transmition.svg"}
            width={20}
            height={20}
            alt="Icono de transmision"
          />

          <span className={styles.specsText}>Caja Automatica</span>
        </div>
      </div>
    </div>
  );
}
