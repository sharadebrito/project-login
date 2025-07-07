import { QuadroBranco } from "../QuadroBranco/QuadroBranco";
import styles from "./Geral.module.css";


export function Geral() {
  return (
    <div className={styles.minhaClasse}>
      <QuadroBranco/>
    </div>
  );
}
