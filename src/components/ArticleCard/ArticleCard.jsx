import "./ArticleCard.css";
import vector from "./Vector.svg";
import Image from "next/image";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

// key={index}
//           date={article.date}
//           title={article.title}
//           content={article.content}
//           link={article.link}

const ArticleCard = ({ date, title, content, link }) => {
  return (
    <article data-testid={"articleCard"} className="article-card">
      <div className="article-card-header">
        <time data-testid={"articleCardDate"}>{date}</time>
        <h2 data-testid={"articleCardTitle"} className="dark:text-white">{title}</h2>
      </div>

      <p data-testid={"articleCardContent"} className="dark:text-zinc-400">{content}</p>
      <a data-testid={"articleCardLink"} href={link}>
        Read article <Image className="fill-blue" src={vector} alt="arrow Icon" width={6.5} height={20} />
      </a>
    </article>
  );
};
{/*<Image className="fill-blue-500" src={vector} alt="arrow Icon" width={16} height={16} />*/}
ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ArticleCard.defaultProps = {
  link: "#",
};

export default ArticleCard;
