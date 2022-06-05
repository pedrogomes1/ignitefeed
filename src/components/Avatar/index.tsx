import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

export type AvatarProps = {
  hasBorder?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
