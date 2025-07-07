import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.imgLogo}>
      <img src="/logo.png" alt="Logo do site"></img>
    </div>
  );
}
