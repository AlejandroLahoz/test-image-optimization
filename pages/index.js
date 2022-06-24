import Image from "next/image";
import styles from "../styles/Home.module.css";
import test from "./../public/test.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src={test} width={455} height={639}></Image>
    </div>
  );
}
