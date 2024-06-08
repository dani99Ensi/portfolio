import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";
import ProjectsHeader from "@/components/ProjectsHeader/ProjectsHeader.jsx";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";

//----------------images-------------------
//import Logo from "@/components/ProjectCard/Logo.svg";
import spotify from "@/components/WorkWidget/WorkLogo/otherSpotify.jpg";
import microsoft from "@/components/WorkWidget/WorkLogo/microsoft.png";
import facebook from "@/components/WorkWidget/WorkLogo/Facebook.png";
import apple from "@/components/WorkWidget/WorkLogo/apple.jpg";
import google from "@/components/WorkWidget/WorkLogo/google.jpg";
import amazon from "@/components/WorkWidget/WorkLogo/amazon.jpg";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export function generateStaticParams() {
  return ['/projects'].map((path) => ({
    params: { slug: path },
  }));
}

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
      "I’ve always been driven by the desire to innovate and create impactful solutions in the tech world. My journey includes developing a real-time data analytics platform at Facebook, creating an AI-powered customer support chatbot at Apple, and designing a personalized music recommendation system at Spotify. At Google, I developed a secure mobile banking application, while at Amazon, I created a scalable cloud-based inventory management system. Additionally, I enhanced an e-commerce platform's performance at Microsoft. These projects showcase my commitment to leveraging technology to solve complex problems and improve user experiences."  },
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
  //-----------------------------------------------------------------------
  let anotherArray = [
    {
      title: "Facebook",
      content: "Developed a platform for real-time data processing and visualization using Apache Kafka and Spark, enhancing data-driven decision-making on user engagement.",
      image: facebook,
    },
    {
      title: "Apple",
      content: "Created an AI chatbot for Apple's website and app, leveraging NLP and machine learning to provide instant, accurate customer support.",
      image: apple,
    },
    {
      title: "Spotify",
      content: "Designed a recommendation system using collaborative filtering and deep learning, improving personalized music suggestions and user engagement.",
      image: spotify,
    },
    {
      title: "Google",
      content: "Developed a secure mobile banking app with biometric authentication and real-time transaction tracking for Android and iOS platforms.",
      image: google,
    },
    {
      title: "Amazon",
      content: "Created a scalable inventory management system using AWS services, providing real-time updates and predictive analytics for supply chain optimization.",
      image: amazon,
    },
    {
      title: "Microsoft",
      content: "Enhanced an e-commerce platform's performance by implementing caching strategies and database optimizations, leading to faster page loads and higher conversion rates.",
      image: microsoft,
    },
  ];
  //-----------------------------------------------------------------------
  return (
    <div className="bg-slate-50 dark:bg-black">
      <div className="sm-ml-mr-80 ">
        <div className="bg-gradient-to-r from-white via-blue-200 to-white dark:bg-zinc-900 dark:bg-none">
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
            {anotherArray.map((item, index) => (
              <div key={index}>
                <ProjectCard
                  name={item.title}
                  logo={item.image}
                  content={item.content}
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
