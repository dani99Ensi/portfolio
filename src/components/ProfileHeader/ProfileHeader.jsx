import "./ProfileHeader.css";
import PropTypes from "prop-types";
import Image from "next/image";
import ifNotSimp from "./ProfileIcon/homer-simpson.jpg";


const ProfileHeader = ({ imageUrl, name, bio, linkedinUrl,items }) => {
  // const defaultImageUrl = "/src/components/ProfileHeader/ProfileIcon/kirby.png";
  return (
    <div className=" profile-header sm:max-w-2xl">
      <div className="w-full flex justify-start">
        <Image
          className="rounded-full mb-5 object-cover border-3 border-white"
          src={imageUrl || ifNotSimp}
          alt="Image Not Found"
          width={64}
          height={64}
        />
      </div>

      <h1 className="text-4xl text-gray-900  text-justify font-roboto break-words dark:text-white">{name}</h1>
      <p className=" text-base  text-gray-600 text-justify dark:text-zinc-400">{bio}</p>
      <div className="flex justify-center mt-5">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <i ></i>
          {/*review this cuz not sure*/}
        </a>
      </div>
{/*----------------------------------------------*/}
      <div className="auxiliar bg-transparent">
      <ul>
        {items.map((item, index) => (
          <li data-testid={'footerLink' + index} key={'item' + index}>
           <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Image src={item.image} alt="Image Not Found" width={24} height={24} />
          </a>
          </li>
        ))}
      </ul>
    </div>

    </div>
  );
};

ProfileHeader.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }))
};

export default ProfileHeader;
