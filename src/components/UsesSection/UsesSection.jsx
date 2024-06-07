import './UsesSection.css';
import PropTypes from 'prop-types';
import UseCard from '../UseCard/UseCard.jsx';

/* TODO:
  Fill out this component according to the README.
*/

const UsesSection = ({ items }) => {
  return (
    <section className="uses-section">
      {items.map((item, index) => (
        <div className="uses-section__content sm:w-4/5" key={'item' + index}>
          <div className="uses-section__group sm:flex">
            <h2 className='sm:pb-14 sm:pt-14 dark:text-white' >{item.groupName}</h2>
            <div className="uses-section__group-content">
              {item.items.map((item2, index2) => (
                <UseCard  title={item2.title} content={item2.description} key={'Inside' + index2} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;
