import "./styles.css";
import Logos from "../../assets/Images/logos";

const ImageHeader = () => {
  return (
    <div className="photos">
      {Object.keys(Logos).map((imageKey) => (
        <image key={imageKey} src={Logos[imageKey].default} alt={imageKey} />
      ))}
    </div>
  );
};

export default ImageHeader;
