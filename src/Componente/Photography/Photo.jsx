//photo funtion
import "./photo.css";
import Photo1 from "../../Images/Photo/01.jpg";
import Photo2 from "../../Images/Photo/02.jpg";
import Photo3 from "../../Images/Photo/03.jpg";
import Photo4 from "../../Images/Photo/04.jpg";
import Photo5 from "../../Images/Photo/05.jpg";
import Photo6 from "../../Images/Photo/06.jpg";
import Photo7 from "../../Images/Photo/07.jpg";
import Photo8 from "../../Images/Photo/08.jpg";
import Photo9 from "../../Images/Photo/09.jpg";
import Photo10 from"../../Images/Photo/10.jpg";
const Photo = () => {
  return (
    <div className="Photo">
      <div className="phototxt">
       <h1 >Photography</h1>
      </div>
      <div className="phototitle">
        <div className="photogrid">
          <figure>
            <img src={Photo1} alt="" className="photo_img" />
          </figure>
          <figure>
            <img src={Photo2} alt="" className="photo_img" />
          </figure>
          <figure>
            <img src={Photo3} alt="" className="photo_img" />
          </figure>
          <figure>
            <img src={Photo4} alt="" className="photo_img" />
          </figure>
          <figure>
            <img src={Photo5} alt="" className="photo_img" />
          </figure>
          <figure>
            <img src={Photo6} alt="" className="photo_img" />
          </figure>
          <figure>
            <img src={Photo7} alt="" className="photo_img" />
          </figure>
          <figure>
            <img src={Photo8} alt="" className="photo_img" />
          </figure>
          <figure>
            <img src={Photo9} alt="" className="photo_img" />
          </figure>
          <figure>
            <img src={Photo10} alt="" className="photo_img" />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default Photo;
