import PropTypes from "prop-types";

export const Button = ({ onClick = () => {}, text }) => {
  return (
    <button className="common" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
