import styles from "./QuadroBranco.module.css";
import { Input } from "../Input/Input";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";

export function QuadroBranco() {
  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <Logo />
        <Input />

        <Button />

        <a href="#" className={styles.criarConta}>
          Criar uma nova conta
        </a>

        <div className={styles.infoContainer}>
         
          <p className={styles.infoText}>
  Uma única conta para PsicoManager, PsicoMarketing e PsicoClub. 
  Saiba mais <a href="#" className={styles.saibaMais}>aqui</a>.
</p>
         
        </div>
      </div>
    </div>
  );
}
