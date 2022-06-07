import "./intro.css";
import introProfile from "../../Images/profile_img.png";
const Intro = () => {
  return (
    <div className="Intro">
      <div className="left_intro">
        <div className="intro_left_wrapper">
          <h1 className="intro_txt">Hello,My name is</h1>
          <h1 className="name_txt">Joelson Spínola</h1>
          <div className="intro_title">
            <div className="intro_title_wrapper">
              <div className="intro_title_item">
                Student of Computer Engineering
              </div>
              <div className="intro_title_item">UI/UX Freelancer</div>
              <div className="intro_title_item">Web Designer Freelancer</div>
              <div className="intro_title_item">
                Graphic Designer Freelancer
              </div>
              <div className="intro_title_item">Photographer Freelancer</div>
            </div>
          </div>
          <h1 className="intro_description">
            I'm a Student of Computer Engineering. I desing and develop services
            for customers of all sizes like flyers, logos and websites. Also I
            offer photography services, and in the future videomaker services as
            well.
          </h1>
        </div>
      </div>

      <div className="right_intro">
        <img src={introProfile} alt="joelson" className="intro_image" />
      </div>
    </div>
  );
};
export default Intro;
