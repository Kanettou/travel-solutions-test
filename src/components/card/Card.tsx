import Image from "next/image";
import styles from "./card.module.scss";
import Plane from "../icons/AirplaneIcons";
import Arrow from "../icons/ArrowIcon";
import StarIcon from "../icons/StarIcon";

import BadgeUx from "../ui/Badge";

type CardProps = {
  carImage: string;
  brandImage: string;
  badgeText: string;
  badgeColor: string;
  priceAverage: string;
};

export default function Card({
  carImage,
  brandImage,
  badgeText,
  badgeColor,
  priceAverage,
}: CardProps) {
  return (
    <article className={styles.card}>
      {/* Sección de especificaciones del carro */}
      <section>
        {/* Contenedor de la marca y el sello */}
        <div className={styles.headerContainer}>
          <div className={styles.brandContainer}>
            <div className={styles.ratingContainer}>
              <Image
                src={brandImage}
                width={63}
                height={26}
                alt="Imagen de la marca"
              />
              <span className={styles.brandSeparator}>|</span>
              <StarIcon className={styles.starIcon} />
              <span className={styles.ratingText}>4.8</span>
            </div>
            <div className={styles.airportContainer}>
              <Plane className={styles.airplaneIcon} />
              <span className={styles.ubicationText}>En Aeropuerto</span>
              <Arrow className={styles.arrowIcon} />
            </div>
          </div>

          <Image
            src="/Seal.svg"
            width={70}
            height={70}
            alt="Seguro de viajes"
          />
        </div>

        <div className={styles.carContainer}>
          <Image
            className={styles.carStyle}
            src={carImage}
            width={110}
            height={58}
            alt="Imagen del auto"
          />
          <div className={styles.carDetails}>
            <h3 className={styles.filterText}>{priceAverage}</h3>
            <h5 className={styles.carModel}>
              Kia Soul <span className={styles.total}>o</span>{" "}
              <span className={styles.alike}>Similar</span>
            </h5>
            <div className={styles.carSpecs}>
              <div className={styles.specPack}>
                <Image
                  src={"/people.svg"}
                  width={16}
                  height={16}
                  alt="Icono de personas"
                />
                <span className={styles.specsText}>5</span>
              </div>
              <div className={styles.specPack}>
                <Image
                  src={"/shopping-bag.svg"}
                  width={16}
                  height={16}
                  alt="Icono de compras"
                />
                <span className={styles.specsText}>3</span>
              </div>
              <div className={styles.specPack}>
                <Image
                  src={"/frozen.svg"}
                  width={16}
                  height={16}
                  alt="Icono de aire acondicionado"
                />

                <span className={styles.specsText}>A/C</span>
              </div>
              <div className={styles.specPack}>
                <Image
                  src={"/transmition.svg"}
                  width={16}
                  height={16}
                  alt="Icono de transmision"
                />

                <span className={styles.specsText}>A/T</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={styles.cardSeparator} />
      {/* Sección de detalles */}
      <section className={styles.detailsSection}>
        {/* Contenedor de los detalles */}
        <div className={styles.generalContainer}>
          {/* Contenedor de info sobre seguros */}
          <div className={styles.insuranceContainer}>
            {/* Apartado de todo incluido */}
            <div className={styles.insuranceGeneral}>
              <span className={styles.insuranceIncluded}>Con seguros</span>
              <h5 className={styles.allIncluded}><span className={styles.hiddenHyphen}>-</span> Todo incluido</h5>
            </div>
            {/* Apartado de los seguros incluidos */}
            <div className={styles.allInsurances}>
              <div className={styles.insuranceDetails}>
                <Image
                  src="/shield-tick.svg"
                  width={20}
                  height={20}
                  alt="Seguro incluido"
                />
                <h6 className={styles.ginsurance}>Seguro Auto Rentado</h6>
              </div>
              <div className={styles.insuranceDetails}>
                <Image
                  src="/security-user.svg"
                  width={20}
                  height={20}
                  alt="Seguro incluido"
                />
                <h6 className={styles.ginsurance}>Seguro a Terceros</h6>
              </div>
            </div>
            <div className={styles.detailsHide}>
              <div className={styles.seeDetailsHidden}>
                <span>Ver detalles</span>
                <Image
                  src={"/info-circle.svg"}
                  width={15}
                  height={15}
                  alt="Info extra"
                />
              </div>
              <BadgeUx badgeText={badgeText} badgeColor={badgeColor} />
            </div>
          </div>
          {/* Pricing container */}
          <div className={styles.priceAndButton}>
            <div className={styles.pricingContainer}>
              <div className={styles.discountContainer}>
                <p className={styles.originalPrice}>$550.552</p>

                <div>
                  <span className={styles.triangleDesign}>• </span>
                  <span className={styles.discountBackground}>-45%</span>
                </div>
              </div>
              <div className={styles.totalContainer}>
                <div className={styles.partialTotalContainer}>
                  <h3 className={styles.partialTotal}>$319.552</h3>
                  <span className={styles.extraDetails}>| dia</span>
                </div>
                <h5 className={styles.total}>Total $926.552</h5>
              </div>
            </div>
            <div className={styles.buttonsExtra}>
              <button className={styles.secondReserveButton}>
                <span className={styles.secondTextButton}>Reservar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contenedor en caso de no querer seguro */}

        <div className={styles.noInsuranceContainer}>
          {/* Apartado de todo incluido */}
          <div>
            <div className={styles.insuranceGeneral}>
              <span className={styles.noInsuranceText}>Sin Seguros</span>
              <h5 className={styles.allIncluded}><span className={styles.hiddenHyphen}>-</span>Tarifa básica</h5>
            </div>
            {/* Apartado de los seguros incluidos */}

            <div className={styles.allInsurances}>
              <div className={styles.insuranceDetails}>
                <Image
                  src="/shield-tick.svg"
                  width={20}
                  height={20}
                  alt="Seguro incluido"
                />
                <h6 className={styles.noFeeText}>Tarifa sin seguros</h6>
              </div>
            </div>
          </div>
          <div className={styles.priceAndButton}>
            <div className={styles.pricingContainer}>
              <div className={styles.discountContainer}>
                <p
                  className={styles.originalPrice}
                  style={{ textDecorationLine: "none" }}
                >
                  Antes
                </p>
                <p className={styles.originalPrice}>$550.552</p>
              </div>
              <div className={styles.totalContainer}>
                <div className={styles.partialTotalContainer}>
                  <h3 className={styles.partialTotal}>$319.552</h3>
                  <span className={styles.extraDetails}>| dia</span>
                </div>
                <h5 className={styles.total}>Total $926.552</h5>
              </div>
            </div>
            <div className={styles.buttonsExtra}>
              <button className={styles.extraButton}>
                <span className={styles.extraTextButton}>Reservar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contenedor de los botones */}
        <footer className={styles.buttonsContainer}>
          <div className={styles.seeDetails}>
            <span>Ver detalles</span>
            <Image
              src={"/info-circle.svg"}
              width={15}
              height={15}
              alt="Info extra"
            />
          </div>
          <button className={styles.reserveButton}>
            <span className={styles.textButton}>Reservar</span>
          </button>
        </footer>
      </section>
    </article>
  );
}
