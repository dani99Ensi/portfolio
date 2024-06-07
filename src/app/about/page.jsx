import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import AboutHeader from "@/components/AboutHeader/AboutHeader.jsx";
import LinksAbout from "@/components/LinksAbout/LinksAbout.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";

//----------------images-------------------
//import myPhoto from "../components/ProfileHeader/ProfileIcon/mySelf.jpeg";
import MeInPhoto from "/public/img.jpeg";
import X from "@/components/LinksAbout/LinksImages/XV.svg";
import GitHub from "@/components/LinksAbout/LinksImages/GitHub.svg";
import LinkedIn from "@/components/LinksAbout/LinksImages/LinkedinV.svg";
import Mail from "@/components/LinksAbout/LinksImages/MailV.svg";

//"../components/WorkWidget/WorkLogo/microsoft.png";
export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  let myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];
  //-----------------------------------------------------------------------
  const itemsArray = [
    {
      title: "About Daniel - Award-Winning Software Engineer",
      content: [
        {
          inside:"Daniel is an accomplished software engineer with a proven track record of delivering innovative and high-impact solutions. With a career spanning over a decade, Daniel has earned multiple prestigious awards that highlight his expertise and dedication to the field."  },
        {
          inside:
            "Among his accolades, Daniel was honored with the Top Developer Award at the Tech Innovators Conference 2022, which recognized his exceptional problem-solving abilities and commitment to staying ahead of technological advancements. This award has fueled Daniel's passion for exploring new technologies and implementing cutting-edge solutions.",
        },
        {
          inside:
            "In 2021, Daniel received the Best Software Solution award at the International Software Engineering Expo, a testament to his skill in creating efficient and user-friendly software. This recognition has driven Daniel to continually refine his development processes and prioritize user-centered design in all projects.",
        },
        {
          inside:
            "The Excellence in Coding award from the Global Developer Summit 2020 further underscores Daniel's talent for writing clean, efficient, and maintainable code. This accolade not only highlights Daniel's technical proficiency but also his dedication to mentoring and promoting best practices within his teams.",
        },
        {
          inside:
            "Throughout his career, Daniel has demonstrated a commitment to excellence and continuous improvement, making him a standout professional in the software engineering community.",
        },
      ],
    },
  ];
  //-----------------------------------------------------------------------------------
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
  //-------------------------------------------------------------------------------------------------------
  const FollowLinks = [
    { image: X, content: "Follow me on X", link: "https://x.com/" },
    {
      image: GitHub,
      content: "Follow me on GitHub",
      link: "https://github.com/dani99Ensi",
    },
    {
      image: LinkedIn,
      content: "Follow me on LinkedIn",
      link: "https://www.linkedin.com/learning/?u=54864305",
    },
  ];
  //-------------------------------------------------------------------------------------------------------
  const EmailLinks = [
    {
      image: Mail,
      content: "daniel@hotmail.com",
      link: "https://outlook.live.com/mail/about/index_en.html",
    },
  ];

  return (
    <div>
      <div className="bg-slate-50 dark:bg-black">
        <div className="sm-ml-mr-80 ">
          <div className="bg-gradient-to-r from-white via-orange-300 to-white dark:bg-zinc-900 dark:bg-none">
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
            {/*End of header---------------------------------------------------*/}
            <div className="inside-144 pt-10">
              <div className="grid sm:grid-cols-2 gap-x-20 gap-y-14 pb-14">
                <div className="order-2 sm:order-first ">
                  <AboutHeader items={itemsArray} />
                </div>

                <div className="order-1 sm:order-2 ">
                  <Image
                    src={MeInPhoto}
                    alt="Women Icon"
                    style={{ borderTopLeftRadius: "3rem", borderTopRightRadius: "3rem" }}
                    className="w-full px-5 "
                  />
                  <div className="hidden sm:flex pt-10 ">
                    <LinksAbout items={FollowLinks} Email={EmailLinks} />
                  </div>
                </div>
              </div>
              <div className="sm:hidden">
                <LinksAbout items={FollowLinks} Email={EmailLinks} />
              </div>
              <Footer links={links} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
