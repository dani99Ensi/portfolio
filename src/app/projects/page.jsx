import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";
import ProjectsHeader from "@/components/ProjectsHeader/ProjectsHeader.jsx";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";

//----------------images-------------------
import Logo from "@/components/ProjectCard/Logo.svg";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  let myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];
  //-----------------------------------------------------------------------
  const itemsArray = [
    {
      title: "Things I’ve made trying to put my dent in the universe.",
      content: [
        {
          inside:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
      ],
    },
  ];
  //-----------------------------------------------------------------------
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
  return (
    <div className="bg-slate-50 dark:bg-black">
      <div className="sm-ml-mr-80 ">
        <div className="bg-white dark:bg-zinc-900">
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
          {/*-------------------------------------------------------------------">*/}
          <div className="left-inside-144">
            <ProjectsHeader items={itemsArray} />
          </div>
          <div className=" pb-10 mx-14 sm:grid grid-cols-3 inside-144">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index}>
                <ProjectCard
                  name={"Company"}
                  logo={Logo}
                  content={"Creating technology to empower civilians to explore space on their own terms."}
                  link={"https://www.ensign.edu/"}
                />
              </div>
            ))}
          </div>
          <div className="inside-144 h-44 pb-8">
            <Footer links={links} />
          </div>
        </div>
      </div>
    </div>
  );
}
