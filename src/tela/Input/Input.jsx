import styles from "./Input.module.css";
import { IoEyeOffSharp } from "react-icons/io5";

export function Input() {
  return (
    <div className={styles.input}>
      <label for="e-mail">
        E-mail:<span style={{ color: "red" }}>*</span>{" "}
      </label>
      <input type="text" placeholder="joaosilva@gmail.com" />
      <label for="senha">
        Senha:<span style={{ color: "red" }}>*</span>
      </label>

      <div className={styles.passwordWrapper}>
        <input
          type="password"
          placeholder="********"
          className={styles.inputField}
        />
        <IoEyeOffSharp className={styles.eyeIcon} />
      </div>

      <div className={styles.senhaContainer}>
        <a className={styles.senha} href="">
          Esqueceu a senha?
        </a>
      </div>
    </div>
  );
}
