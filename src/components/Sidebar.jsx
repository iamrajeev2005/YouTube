import React, { useEffect, useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiHistoryFill } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";

function Sidebar() {
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
  ];
  useEffect(() => {
    setData(items);
  }, []);

  const handleClick = (id) => {
    setActiveitem(id);
  };

  return (
    <div className="h-fit w-[20%] flex flex-col items-center">
      {data.map((item) => {
        return (
          <div
            key={item.id}
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
        );
      })}
    </div>
  );
}

export default Sidebar;
