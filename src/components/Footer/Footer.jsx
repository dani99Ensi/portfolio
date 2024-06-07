import './Footer.css';
import PropTypes from 'prop-types';

/* TODO:
  Fill out this component according to the README.
*/

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="footer bg-transparent text-justify
    sm:flex flex-col justify-between dark:border-transparent">
      <ul>
        {links.map((item, index) => (
          <li data-testid={'footerLink' + index} key={'item' + index}>
            <a href={item.url} className='dark:text-zinc-400'>{item.title}</a>
          </li>
        ))}
      </ul>

      <p data-testid="footerContent" className='pt-6 sm:pt-0 dark:text-zinc-400'>{`© ${year} John Doe. All rights reserved`}</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
