import "./ButtonInitial.styles.css";

const ButtonInitial = ({ text, onClick, disabled }) => {
  return (
    <button className="ButtonInitial" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonInitial;
