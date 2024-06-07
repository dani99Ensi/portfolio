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
import myPhoto from "@/components/ProfileHeader/ProfileIcon/Myself.jpeg";
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
      date: "May 10, 2022",
      title: "Top Developer Award - Tech Innovators Conference 2022",
      content:"This award recognized my ability to deliver innovative and effective solutions to complex problems. Winning this award pushed me to continually seek out cutting-edge technologies and methodologies, improving my problem-solving skills and keeping me at the forefront of software development trends.",
      link: "https://www.crn.com/rankings-and-lists/ti2022",
    },

    {
      date: "August 15, 2021",
      title: "Best Software Solution - International Software Engineering Expo 2021",
      content: "This accolade was awarded for a software solution I developed that significantly enhanced efficiency and user experience. Receiving this recognition validated my approach to user-centered design and performance optimization, encouraging me to further refine my development processes and strive for excellence in every project.",
      link: "https://techbeacon.com/app-dev-testing/best-software-engineering-conferences-2021",
    },
    {
      date: " November 25, 2020",
      title: "Excellence in Coding - Global Developer Summit 2020",
      content:
        "This award celebrated my exceptional coding skills and ability to write clean, efficient, and maintainable code. Winning this award emphasized the importance of code quality and best practices in software engineering, motivating me to mentor others and promote high standards within my teams.",
      link: "https://gradle.com/developer-productivity-engineering/handbook/?utm_campaign=fy24q1-retargeting-rsa-us-dpe-handbook&utm_medium=ad-cpc&utm_source=google&utm_content=developer-experience-phrase&source=adwords&medium=cpc&campaignid=20899789106&adgroupid=158073254558&keyword=developer%20experience&matchtype=b&network=g&device=c&utm_lsd=paid-media&gad_source=1&gclid=CjwKCAjw34qzBhBmEiwAOUQcF8C4wvDTb6mXyKsQN4B98R2bG4LG25b8VISM_ws2BhiiaA_FCLPjYhoCAO8QAvD_BwE",
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
        <div className="bg-gradient-to-r from-white via-lime-200 to-white dark:bg-zinc-900 dark:bg-none">
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
              bio="As a software engineer, I specialize in developing and maintaining software applications. My expertise lies in writing clean, efficient code and collaborating with cross-functional teams to deliver high-quality software solutions. I have experience with various programming languages and frameworks, and I am constantly learning and adapting to new technologies. Problem-solving is my passion, and I enjoy the challenge of finding innovative solutions to complex technical issues. Whether working on front-end interfaces or back-end systems, I am committed to creating user-friendly and reliable software that meets the needs of its users."
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
