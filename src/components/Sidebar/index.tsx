import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  const backgroundUrl =
    "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50";

  return (
    <aside className={styles.sidebar}>
      <img src={backgroundUrl} className={styles.cover} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/pedrogomes1.png" />
        <strong>Pedro Gomes</strong>
        <span>Front end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
