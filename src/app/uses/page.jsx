import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";
import UsesHeader from "@/components/UsesHeader/UsesHeader.jsx";
import UsesSection from "@/components/UsesSection/UsesSection.jsx";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export function generateStaticParams() {
  return ["/uses"].map((path) => ({
    params: { slug: path },
  }));
}

export default function Uses() {
  //------------------------------------------------------------------------------------------------
  const itemsArray = [
    {
      title: "Software I use, gadgets I love, and other things I recommend.",
      content: [
        {
          inside:
            "In my daily workflow, I rely on a combination of powerful tools and gadgets to enhance my productivity and efficiency. For development, I use Visual Studio Code for its versatility and extensive customization options, Docker for containerized applications, and GitHub for version control and collaboration. My workstation is centered around an Apple MacBook Pro (M1 Max) for its unmatched performance, paired with a Dell UltraSharp 27 Monitor for a crisp and expansive display. I enjoy the tactile feel of the Keychron K6 Wireless Mechanical Keyboard and the precision of the Logitech MX Master 3 mouse. To stay organized, I use Notion for comprehensive note-taking and project management, Todoist for task tracking, and RescueTime for time management insights. Communication and collaboration are seamless with Slack. For design tasks, Whimsical helps me quickly create wireframes and flowcharts, while Figma allows for collaborative interface design and prototyping. These tools and gadgets collectively support my efforts to innovate and create impactful solutions in the tech world.",
        },
      ],
    },
  ];
  //------------------------------------------------------------------------------------------------

  const items = [
    {
      groupName: "Workstation",
      items: [
        {
          title: "Apple MacBook Pro (M1 Max)",
          description:
            "My go-to device for development, featuring incredible performance and battery life. Ideal for heavy coding sessions and multitasking.",
        },
        {
          title: "Dell UltraSharp 27 Monitor (U2720Q)",
          description:
            "A 27-inch 4K monitor that provides crisp visuals and ample screen real estate for coding, designing, and multitasking.",
        },
        {
          title: "Keychron K6 Wireless Mechanical Keyboard",
          description:
            "A compact mechanical keyboard with customizable RGB backlighting, providing a satisfying typing experience for long coding sessions.",
        },
        {
          title: "Logitech MX Master 3",
          description:
            "An ergonomic mouse with customizable buttons and excellent precision, perfect for navigating through code and design tools.",
        },
        {
          title: "Twelve South Curve Stand",
          description:
            "A sleek and sturdy laptop stand that elevates my MacBook Pro to eye level, promoting better posture and reducing neck strain.",
        },
      ],
    },
    {
      groupName: "Development",
      items: [
        {
          title: "Visual Studio Code",
          description:
            "A lightweight yet powerful code editor with extensive extensions and customization options, making it perfect for any development environment.",
        },
        {
          title: "Docker",
          description:
            "Essential for creating, deploying, and running applications in containers, ensuring consistency across development and production environments.",
        },
        {
          title: "GitHub",
          description:
            "A platform for version control and collaboration, where I manage all my code repositories and collaborate with other developers.",
        },
      ],
    },
    {
      groupName: "Design",
      items: [
        {
          title: "Whimsical",
          description:
            "A tool for creating wireframes, flowcharts, mind maps, and sticky notes, helping to visualize and organize design ideas quickly and efficiently.",
        },
        {
          title: "Figma",
          description:
            "A collaborative interface design tool that allows for real-time collaboration, prototyping, and seamless design handoff to developers.",
        },
      ],
    },
    {
      groupName: "Productivity",
      items: [
        {
          title: "Notion",
          description:
            "An all-in-one workspace for notes, tasks, and project management, helping me stay organized and productive throughout my projects.",
        },
        {
          title: "Todoist",
          description:
            "A task management app that helps me keep track of my to-do lists and deadlines, ensuring nothing falls through the cracks.",
        },

        {
          title: "RescueTime",
          description:
            "A time management tool that tracks my activities and provides insights into how I spend my time, helping me stay focused and productive.",
        },
        {
          title: "Slack",
          description:
            "A communication platform that keeps me connected with my team, allowing for quick and efficient collaboration through channels and direct messages.",
        },
      ],
    },
  ];
  //----------------------------------------------------------------------------------------------------
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/portfolio/about",
    },
    {
      title: "Projects",
      url: "/portfolio/projects",
    },
    {
      title: "Uses",
      url: "/portfolio/uses",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-black">
      <div className="sm-ml-mr-80 ">
        <div className="bg-gradient-to-r from-white via-violet-300 to-white dark:bg-zinc-900 dark:bg-none">
          <div className="flex w-full items-center justify-between">
            <div> </div>
            <div>
              <Navbar options={links} />
            </div>
            <div className="sm:pr-32 flex items-center">
              <DropDown />
              <ThemeSwitcher darkClassName="dark" />
            </div>
          </div>
          {/*End of header---------------------------------------------------*/}
          <div className="left-inside-144">
            <UsesHeader items={itemsArray} />
          </div>
          <div className="left-inside-144 pt-10 pb-14">
            <UsesSection items={items} />
          </div>

          {/*End of big div following Figma*/}
          <div className="inside-144 h-44 pb-8">
            <Footer links={links} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
