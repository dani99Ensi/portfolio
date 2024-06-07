/* DON'T CHANGE ME */
import "./UseCard.css";
import PropTypes from "prop-types";

const UsesCard = ({ title, content }) => {
  return (
    <div className="uses-card sm:w-3/4">

        <h3 className="dark:text-white">{title}</h3>
        <p className="dark:text-zinc-400">{content}</p>

    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default UsesCard;
