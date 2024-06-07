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

export default function Uses() {
  let myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];
  //------------------------------------------------------------------------------------------------
  const itemsArray = [
    {
      title: "Software I use, gadgets I love, and other things I recommend.",
      content: [
        {
          inside:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
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
          title: "Item Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
        },
        {
          title: "Item Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
        },
        {
          title: "Item Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
        },
        {
          title: "Item Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
        },
        {
          title: "Item Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
        },
      ],
    },
    {
      groupName: "Development",
      items: [
        {
          title: "Item Name",
          description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
        {
          title: "Item Name",
          description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
        {
          title: "Item Name",
          description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
      ],
    },
    {
      groupName: "Design",
      items: [
        {
          title: "Whimsical",
          description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
        {
          title: "Figma",
          description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
      ],
    },
    {
      groupName: "Productivity",
      items: [
        {
          title: "Item Name",
          description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
        {
          title: "Item Name",
          description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },

        {
          title: "Item Name",
          description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
        {
          title: "Item Name",
          description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
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
