import './WorkWidget.css';
import Image from "next/image";
import PropTypes from 'prop-types';
import BriefCase from "../WorkWidget/WorkLogo/BriefCase.svg";
/* TODO:
  Fill out this component according to the README.
*/

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <section className="work-widget sm:max-w-sm dark:border-2 border-zinc-700" data-testid="workWidget">
      <h2 data-testid="workWidgetTitle" className='dark:text-white'> <Image src={BriefCase} alt="arrow Icon" width={30} height={30} /> {title}</h2>
      <p data-testid="workWidgetContent">{content}</p>
      <ul>
        {experiences.map((item, index) => (
          <li data-testid={'workWidgetItem' + index} key={'item' + index}>
            <div className="work-item">
              <Image data-testid={'workWidgetItemLogo' + index} className='dark:bg-zinc-700/40 items-center' src={item.logo} alt={`${item.organization} Logo`} width={40} height={40}/>

              <div className="work-item-content">
                <h3 data-testid={'workWidgetItemTitle' + index} className='dark:text-white'>{item.organization}</h3>
                <div className="work-item-content-details">
                  <p data-testid={'workWidgetItemContent' + index}>{item.jobTitle}</p>
                  <span data-testid={'workWidgetItemDates' + index}>
                    {item.startYear + ' - ' + (item.endYear === null ? 'current' : item.endYear)}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
