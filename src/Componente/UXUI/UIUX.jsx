import "./uiux.css";
import UIUX1 from "../../Images/Ux_Web/01.jpg";
import UIUX2 from "../../Images/Ux_Web/02.jpg";
import UIUX3 from "../../Images/Ux_Web/03.jpg";
const UIUX = () => {
  return (
    <div className="Uiux">
      <div className="Uiuxtxt">
        <h1>UiUx {'&'} WEB Desing </h1>
      </div>
      <div className="Uiuxtitle">
        <div className="Uiuxt_grid">
          <figure>
            <img src={UIUX1} alt="" className="Uiuxt_img" />
          </figure>
          <figure>
            <img src={UIUX2} alt="" className="Uiuxt_img" />
          </figure>
          <figure>
            <img src={UIUX3} alt="" className="Uiuxt_img" />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default UIUX;
