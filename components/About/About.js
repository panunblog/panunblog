import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function About() {
  return (
    <div id="about">
      <section className={styles.About}>
        <h1 className={styles.about__heading}> ABOUT</h1>
        <hr className={styles.about__hr} />
        <div className={styles.about__text}>
          <p>
            The Panun Blog is a multimedia platform aimed at providing an
            inclusive forum for the people of Kashmir valley and beyond. Our
            vision is to facilitate a channel of healthy discourse and debate
            within the Kashmiri and non-Kashmiri communities. The idealistic
            tendency of humans to view the world as good or evil is a
            misinterpretation of reality. The outcomes of dialogue or the
            lessons to be learnt from our history cannot be distinctively
            categorized as being black or white. Look closely and you’ll see a
            broad patchwork of different shades of grey. We at the Panun Blog,
            do not claim that one will find an objective truth in this greyish
            spectrum, but atleast negotiations within this realm is where we
            will find commonalities with our adversaries and strive passionately
            to gather the courage to put aside futile differences and coexist
            peacefully for the sake of our future generations.Do you ever feel
            like you have something to say to the world but don't know where to
            start? Don't worry, we got you covered! Panun is open for accepting
            blogs and short posts on all sorts of topics. There is no need to be
            overly anxious about whether your blogs and posts are appropriate to
            be posted on our website. Anything that is sincerely coming from
            your heart is immensely precious to our entire community. You may
            never know what words of yours could awaken a people of internet
            users. So, what are you waiting for? Post that piece of poetry on
            our website which is buried in your phone for too long now. Talk
            about your life and your ways of surviving in this brutal world: you
            too are a source of inspiration for someone on this globe. Aspire to
            inspire!
          </p>
        </div>
        <div className={styles.button}>
          <button className={styles.about__button}>
            <Link href="/extend/about">Read More</Link>
          </button>
        </div>
      </section>
      <hr className="main__rule" />
    </div>
  );
}
