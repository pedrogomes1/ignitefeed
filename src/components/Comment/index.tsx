import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./Comment.module.css";

type CommentProps = {
  content: string;
};

export function Comment({ content }: CommentProps) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/pedrogomes1.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Gomes</strong>
              <time title="11 de Maio às 23:00h" dateTime="02-02-2022 08:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
