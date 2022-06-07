//photo funtion
import "./flyer.css";
import Flyer1 from "../../Images/Cartazes/01.jpg";
import Flyer2 from "../../Images/Cartazes/02.jpg";
import Flyer3 from "../../Images/Cartazes/03.jpg";
import Flyer4 from "../../Images/Cartazes/04.jpg";
import Flyer5 from "../../Images/Cartazes/05.jpg";
import Flyer6 from "../../Images/Cartazes/06.jpg";
const Flayer = () => {
  return (
    <div className="Flyer">
      <div className="flyertxt">
        <h1>Flyers</h1>
      </div>
      <div className="flyertitle">
        <div className="flyergrid">
          <figure>
            <img src={Flyer1} alt="" className="flyer_img" />
          </figure>
          <figure>
            <img src={Flyer2} alt="" className="flyer_img" />
          </figure>
          <figure>
            <img src={Flyer3} alt="" className="flyer_img" />
          </figure>
          <figure>
            <img src={Flyer4} alt="" className="flyer_img" />
          </figure>
          <figure>
            <img src={Flyer5} alt="" className="flyer_img" />
          </figure>
          <figure>
            <img src={Flyer6} alt="" className="flyer_img" />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default Flayer;
