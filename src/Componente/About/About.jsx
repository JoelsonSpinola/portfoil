import "./about.css";
import about_me_img from "../../Images/image3.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about_left">
        <div className="img_card background"></div>
        <div className="img_card">
          <img
            src={about_me_img}
            alt="Sobre Joelson"
            className="about_me_img"
          />
        </div>
      </div>

      <div className="about_right">
        <h1 className="title_about">About Me</h1>
        <p className="about_me">
          I like improve my self, learn about everything and about other
          culture. As a TI student I make my work done on time, and escape from
          it on weekends. On free time a play some basketball or volleyball. I
          am a freelancer photographer and graphic designer. I work in groups
          or individual.I like to find the way that is best suited to my
          problems...
        </p>
        <p className="conquistas_about">
          2019 - ISECMAR Programming Contest Winner | 2019 - CVTelecom Best
          Ideia Competition Winner
        </p>
      </div>
    </div>
  );
};
export default About;
