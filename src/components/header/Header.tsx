"use client";

import styles from "./header.module.scss";
import Image from "next/image";
import Filter from "../filter/Filter";
import { useState } from "react";
import { useTheme} from "../../hooks/useTheme";
import Arrow from "../icons/ArrowIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openM, setOpenM] = useState(false);
  const {theme, toggleTheme} = useTheme();
  return (
    <>
      <header className={styles.header}>
        <Image src="/logo.svg" width={150} height={60} alt="Logo" />

        <div className={styles.options}>

      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label="Cambiar tema"
      >
        {theme === "dark" ? "DARK" : "LIGHT"}
      </button>


          {openM && (
            <div className={styles.overlay} onClick={() => setOpenM(false)} />
          )}
          <div className={styles.dropMenu}>
            <button
              type="button"
              className={styles.iconButton}
              onClick={() => setOpenM(!openM)}
              aria-expanded={openM}
              aria-haspopup="menu"
            >
              <div className={styles.iconPack}>
                <Image
                  src="/dollar-square.svg"
                  width={18}
                  height={18}
                  alt="Moneda"
                />
                <h6 className={styles.iconsName}>COP</h6>
              </div>
            </button>
            {openM && (
              <div className={styles.moneyMenu}>

                <h4 className={styles.selectTexts}>Selecciona tu Moneda</h4>
                <button className={styles.optionsMenu}>USD - Dólar estadounidense</button>
                <button className={styles.optionsMenu}>COP - Peso colombiano</button>
                <button className={styles.optionsMenu}>EUR - Euro</button>
              </div>
            )}
          </div>
          {open && (
            <div className={styles.overlay} onClick={() => setOpen(false)} />
          )}
          <div className={styles.dropMenu}>
            <button
              type="button"
              className={styles.iconButton}
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-haspopup="menu"
            >
              <div className={styles.iconPack}>
                <Image src="/co@3x.png" width={18} height={18} alt="Idioma" />
                <h6 className={styles.iconsName}>Español</h6>
              </div>
            </button>

            {open && (
              <div className={styles.languagesMenu}>
                <h4 className={styles.selectTexts}>Selecciona tu idioma</h4>
                <button className={styles.optionsMenu}>Ingles</button>
                <button className={styles.optionsMenu}>Aleman</button>
                <button className={styles.optionsMenu}>Frances</button>

                <div className={styles.countryContainer}>
                  <h4 className={styles.selectTexts}>Selecciona tu País o Región</h4>
                  <div className={styles.countrySelector}>
                    <div className={styles.countryPack}>
                      <Image
                        src={"/co@3x.png"}
                        width={16}
                        height={16}
                        alt="País"
                      />
                      <p>Colombia</p>
                    </div>
                    <Arrow className={styles.arrowIcon} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <h3 className={styles.separator}>|</h3>

          <div className={styles.iconPack}>
            <Image src="/user.svg" width={18} height={18} alt="Usuario" />
            <h6 className={styles.iconsName}>Iniciar Sesión</h6>
          </div>

          <div className={styles.iconPack}>
            <Image
              className={styles.helpIcon}
              src="/help.svg"
              width={18}
              height={18}
              alt="Ayuda"
            />
            <h6 className={styles.iconsName}>Ayuda</h6>
          </div>
        </div>
      </header>
      <Filter />
    </>
  );
}
