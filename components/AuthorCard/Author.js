import React from "react";

export default function Author() {
  return (
    <div className="main__background " id="authors">
      <h1 className="title__heading">Author</h1>
      <hr className="rule__title"></hr>
      <div className="main__author">
        <figure className="snip1157">
          <blockquote>
            Ahmed Pathan: Hey everyone! I am a 17 year old living in Kashmir who
            is studying in 11th grade. I am currently running a research society
            for high schoolers in my community, and I am also co-authoring a
            paper on AI and finance this autumn. I am absolutely in love with
            creative writing, debating and art. Feel free to drop a message on
            Instagram at <a href="instagram.com/stfu.ahmed" className="links_author_socials">@stfu.ahmed</a>.
            <div className="arrow"></div>
          </blockquote>
          <img
            src=" https://cdn.sanity.io/images/uwzkln7p/production/44cb204cc62df73fc4255e4487a6baa8713f8ee5-1080x1080.jpg?w=70"
            alt="sq-sample3"
          />
          <div className="author">
            <h5>
              Ahmad Pathan <span>Student,Founder</span>
            </h5>
          </div>
        </figure>
        <figure className="snip1157 hover">
          <blockquote>
            Hi! I am{" "}
            <a href="https://twitter.com/muzzafarnumair" className="links_author_socials">Numair Muzzafar Wani </a>,an
            11th grader at burn hall school .I love public speaking ,and this
            very love has made me confident enough to speak infront of a huge
            audience.I love football,physics enthusiast,and a math lover too.I
            love to writein a creative manner and you will be witnessing that a
            lot during your journey through my blogs stay tuned
            <div className="arrow"></div>
          </blockquote>
          <img src="https://i.imgur.com/hbs9089.jpeg" alt="sq-sample27" />
          <div className="author">
            <h5>
              Numair Muzzafar Wani<br></br>
              <span>Student,Author</span>
            </h5>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            I'm <a href="instagram.com/hananwani01" className="links_author_socials"> Hanan Wani,</a>  a student in the 11th grade at Burn Hall School in
            Srinagar, and I love physics. I also enjoy reading, playing
            football, and arithmetic. Since I was a young boy, Einstein has held
            a special place in my heart, which led me to develop a fascination
            with relativity theory. I'll do my best to give you helpful and
            meaningful stuff, so keep an eye out for my blogs.
            <div className="arrow"></div>
          </blockquote>
          <img src="https://i.imgur.com/5wo7j0H.jpeg" alt="sq-sample17" />
          <div className="author">
            <h5>
              Hanan Wani<span> Student,Author</span>
            </h5>
          </div>
        </figure>
      </div>
    </div>
  );
}
