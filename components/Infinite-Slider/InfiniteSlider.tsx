"use client";
import React, { useEffect, useState } from "react";
import {
  Kanban,
  PencilRuler,
  MessagesSquare,
  BadgeDollarSign,
  NotebookPen,
  FileBox,
  FilePen,
  PlugZap,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {};

const data = [
  {
    id: 1,
    logo: <Kanban />,
    title: "Project Management",
    link: "/project-management",
  },
  {
    id: 2,
    logo: <PencilRuler />,
    title: "Collaborate",
    link: "/collabarate",
  },
  {
    id: 3,
    logo: <MessagesSquare />,
    title: "Communicate",
    link: "/communicate",
  },
  {
    id: 4,
    logo: <BadgeDollarSign />,
    title: "Financial Management",
    link: "/finance-management",
  },
  {
    id: 5,
    logo: <NotebookPen />,
    title: "Blog App",
    link: "/blog",
  },
  {
    id: 6,
    logo: <FileBox />,
    title: "Free Resources",
    link: "/free-resource",
  },
  {
    id: 7,
    logo: <FilePen />,
    title: "Resume Builder",
    link: "/resume-builder",
  },
  {
    id: 8,
    logo: <PlugZap />,
    title: "Social Media",
    link: "/social",
  },
];

const InfiniteSlider = (props: Props) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [color, setColor] = useState<string | null>("#00a9fe");

  const { theme, systemTheme } = useTheme();

  const handleClick = (id: number) => {
    setActiveId(id);
  };

  useEffect(() => {
    const updateColor = () => {
      if (theme === "system") {
        setColor(systemTheme === "dark" ? "#00a9fe" : "#00a9fe");
      } else {
        setColor(theme === "dark" ? "#00a9fe" : "#00a9fe");
      }
    };

    updateColor();
    console.log("Color updated:", color);
  }, [theme, systemTheme]);

  const duplicatedData = [...data, ...data, ...data];

  return (
    <div className="max-w-[80%] mx-auto mt-4 border  rounded-full custom-shadow layoutContainer">
      <div
        className={`flex overflow-hidden before:content-[' '] before:z-10 after:content-[' '] before:absolute after:absolute before:h-full after:h-full before:w-10 after:w-10 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,${color},rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,${color},rgba(0,0,0,0))] rounded-full`}
      >
        <ul className="flex flex-row gap-4 overflow-y-auto no-scrollbar p-2">
          {duplicatedData.map((item) => (
            <Link href={item.link} key={item.id}>
              <li
                className={`px-4 py-2 rounded-full cursor-pointer flex whitespace-nowrap gap-4 items-center justify-center border  transition-all ease-in-out 
                  ${
                    activeId === item.id
                      ? "active custom-shadow scale-110"
                      : "hover:scale-105 hover:custom-shadow"
                  }`}
                onClick={() => handleClick(item.id)}
              >
                {item.logo}
                <span className="text-base">{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteSlider;
