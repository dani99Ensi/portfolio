import Navbar from "@/components/Navbar/Navbar";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget.jsx";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";
//ThemeSwitcher
//-----------------Images------------------------------------
import myPhoto from "@/components/ProfileHeader/ProfileIcon/mySelf.png";
import slack from "../components/WorkWidget/WorkLogo/slack.png";
import spotify from "../components/WorkWidget/WorkLogo/spotify.png";
import microsoft from "../components/WorkWidget/WorkLogo/microsoft.png";
import audible from "../components/WorkWidget/WorkLogo/audible.png";
import css3 from "../components/SkillsWidget/SkillsLogo/css3.png";
import html5 from "../components/SkillsWidget/SkillsLogo/html5.png";
import javaS from "../components/SkillsWidget/SkillsLogo/javascript.png";
import X from "@/components/LinksAbout/LinksImages/XV.svg";
import GitHub from "@/components/LinksAbout/LinksImages/GitHub.svg";
import LinkedIn from "@/components/LinksAbout/LinksImages/LinkedinV.svg";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  const articles = [
    {
      date: "December 25, 2023",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
      link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
    },

    {
      date: "December 25, 2023",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
      link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
    },
    {
      date: "December 25, 2023",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
      link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
    },
  ];
  //-----------------------------------------------------------------------------------------
  let myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];
  //----------------------------------------------------------------------------------------------------
  const myExperience = [
    {
      ///workspaces/cs220-portfolio-danielsgroup/src/components/WorkWidget/WorkLogo/slack.png
      logo: slack,
      organization: "Slack",
      jobTitle: "Software Engineer",
      startYear: 2016,
      endYear: null,
    },
    {
      logo: spotify,
      organization: "Spotify",
      jobTitle: "Software Engineer",
      startYear: 2014,
      endYear: 2015,
    },
    {
      logo: audible,
      organization: "Audible",
      jobTitle: "Software Engineer",
      startYear: 2012,
      endYear: 2013,
    },
    {
      logo: microsoft,
      organization: "Microsoft",
      jobTitle: "Software Engineer",
      startYear: 2010,
      endYear: 2011,
    },
  ];
  //----------------------------------------------------------------------------------------------------
  const skills = [
    { name: "HTML", proficiency: 60, icon: html5 },
    { name: "CSS", proficiency: 50, icon: css3 },
    { name: "JavaScript", proficiency: 75, icon: javaS },
  ];
  //----------------------------------------------------------------------------------------------------
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Uses",
      url: "/uses",
    },
  ];
  //----------------------------------------------------------------------------------------------------
  const FollowLinks = [
    {
      image: LinkedIn,
      link: "https://www.linkedin.com/learning/?u=54864305",
    },
    {
      image: X,
      link: "https://x.com/",
    },
    {
      image: GitHub,
      link: "https://github.com/dani99Ensi",
    },
  ];
  //space-y-6
  return (
    <div className="bg-slate-50 dark:bg-black">
      <div className="sm-ml-mr-80 ">
        <div className="bg-white dark:bg-zinc-900">
          {/*w-fill flex justify-center h-20 pt-6 sm:grid grid-cols-3 inside-144
          items-center--> worked vertical alignment*/}
          <div className="flex w-full items-center justify-between">
            <div> </div>
            <div>
              <Navbar options={myArray} />
            </div>
            <div className="sm:pr-32 flex items-center">
              <DropDown />
              <ThemeSwitcher darkClassName="dark" />
            </div>
          </div>

          {/*End of Navbar First part*/}
          <div className="left-inside-144">
            <ProfileHeader
              name="Software engineer, father, and believer"
              bio="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
              linkedinUrl="https://www.linkedin.com/in/daniel-figueroa-perez-465a39304/"
              imageUrl={myPhoto}
              items={FollowLinks}
            />
          </div>
          {/*End of header just another div ( down here starts the layout)*/}
          <div className="grid sm:grid-cols-2 inside-144 pb-14">
            {/*className={"sm:w-[594px]"} i took this off just in case*/}
            <div>
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  date={article.date}
                  title={article.title}
                  content={article.content}
                  link={article.link}
                />
              ))}
            </div>
            {/*End of Article cards*/}
            <div className="gap-y-5 grid sm:justify-items-end">
              <SignupWidget
                title={"Stay up to date"}
                content={"Get notified when I publish something new, and unsubscribe at any time."}
              />
              {/*End of SignupWidget*/}
              <WorkWidget
                title={"Work"}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
                experiences={myExperience}
              />
              {/*End of WorkWidget*/}
              <SkillsWidget
                title={"Skills"}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
                skills={skills}
              />
              {/*End of SkillsWidget*/}
            </div>
            {/*End of right side*/}
          </div>
          {/*End of big div following Figma*/}
          <div className="inside-144 h-44 pb-8">
            <Footer links={links} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
  {
    /*End of return Home*/
  }
}
