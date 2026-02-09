import styles from "./badge.module.scss";

type badgeProps = {
  badgeText?: string;
  badgeColor?: string;
};

export default function Badge({ badgeText, badgeColor }: badgeProps) {
  return (
    <span className={styles.badgeStyle} style={{borderColor: badgeColor, color: badgeColor}}>
      {badgeText}
    </span>
  );
}
