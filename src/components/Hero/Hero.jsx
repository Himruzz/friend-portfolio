import React from 'react'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        iam ABDURAHMAN THAHSEEN
      </h1>
      <p className={styles.description}>
      Welcome to my portfolio! I am a highly motivated, versatile, and dedicated professional with a passion for creating innovative solutions at the intersection of hardware and software. With extensive experience in designing, developing, and integrating systems, I specialize in PCB design and the seamless fusion of hardware and software components.

I thrive on challenging opportunities that push boundaries and allow me to leverage my skill set to develop efficient, forward-thinking systems. My approach is rooted in creativity, technical excellence, and a commitment to delivering impactful results.

Feel free to explore my projects and reach out—I’m always eager to collaborate and turn ambitious ideas into reality.
      </p>
      <a href="mailto:thahseenpk1@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src="/assets/hero/me.png" alt="me" 
            className={styles.heroImg}
/>
<div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
  </section> 
  );
};
