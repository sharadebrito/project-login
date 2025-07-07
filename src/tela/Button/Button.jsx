import styles from "./Button.module.css";

export function Button() {
  function entrar() {
    console.log("Entrou com sucesso");
  }

  return (
    <div>
      <button className={styles.button} onClick={entrar}>
        Entrar
      </button>
    </div>
  );
}
