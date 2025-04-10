import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <p className={styles.description}>
        This is a simple Next.js application with CSS Modules.
      </p>
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={150}
        height={150}
        className={styles.logo}
      />
      <p className={styles.footer}>
        © 2023 My App. All rights reserved.
      </p>
      </main>
  );
}
