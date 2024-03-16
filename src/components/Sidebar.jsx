import store from "../utils/store";
import React, { useEffect, useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiHistoryFill } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoFlagOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { BiSolidVideos } from "react-icons/bi";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);
  const [data, setData] = useState([]);
  const [activeItem, setActiveitem] = useState(1);

  const items = [
    {
      id: 1,
      icon: <MdHomeFilled />,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      icon: <SiYoutubeshorts />,
      title: "Shorts",
      path: "/",
    },
    {
      id: 3,
      icon: <MdSubscriptions />,
      title: "Subscriptions",
      path: "/",
    },
    {
      id: 4,
      title: "You >",
      path: "/",
    },
    {
      id: 5,
      icon: <CgProfile />,
      title: "Your channel",
      path: "/",
    },
    {
      id: 6,
      icon: <RiHistoryFill />,
      title: "History",
      path: "/",
    },
    {
      id: 7,
      icon: <RiVideoLine />,
      title: "Your videos",
      path: "/",
    },
    {
      id: 8,
      icon: <MdOutlineWatchLater />,
      title: "Watch later",
      path: "/",
    },
    {
      id: 9,
      icon: <BiSolidLike />,
      title: "Liked videos",
      path: "/",
    },
    {
      id: 10,
      icon: <CiSettings />,
      title: "Settings",
      path: "/",
    },
    {
      id: 11,
      icon: <IoFlagOutline />,
      title: "Report history",
      path: "/",
    },
    {
      id: 12,
      icon: <IoIosHelpCircleOutline />,
      title: "Help",
      path: "/",
    },
  ];
  useEffect(() => {
    setData(items);
  }, []);

  const handleClick = (id) => {
    setActiveitem(id);
  };

  return (
    <React.Fragment>
      {isMenuOpen ? (
        <div className="h-fit w-[20%] flex flex-col items-center sticky top-16 bg-[#0F0F0F]">
          {data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className={`flex items-center w-[80%] mx-auto gap-4 hover:bg-[#383838a9] rounded-lg px-3 py-2 cursor-pointer ${
                    activeItem === item.id ? "bg-[#393939a9]" : ""
                  }`}
                  onClick={() => handleClick(item.id)}
                >
                  <div className="text-2xl">{item?.icon}</div>
                  <h2
                    className={`  ${
                      activeItem === item.id ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {item?.title}
                  </h2>
                </div>
                {index === 2 && (
                  <div className=" bg-zinc-600 h-[1px] w-[80%] my-3"></div>
                )}
                {index === 8 && (
                  <div className=" bg-zinc-600 h-[1px] w-[80%] my-3"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <div className="h-fit w-[6%] flex flex-col items-center">
          {data.slice(0, 4).map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`flex flex-col items-center w-[80%] mx-auto gap-2 hover:bg-[#383838a9] rounded-lg px-3 py-2 cursor-pointer ${
                    activeItem === item.id ? "bg-[#393939a9]" : ""
                  }`}
                  onClick={() => handleClick(item.id)}
                >
                  <div className="text-xl">{item?.icon}</div>
                  {index === 3 ? (
                    <div className="text-xl">
                      <BiSolidVideos />
                    </div>
                  ) : (
                    ""
                  )}
                  <h2
                    className={`text-xs  ${
                      activeItem === item.id ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {item?.title}
                  </h2>
                </div>
              </>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}

export default Sidebar;
