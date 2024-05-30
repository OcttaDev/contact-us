"use client";

import { RiJavascriptLine } from "react-icons/ri";
import {
  TbBrandTypescript,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandFirebase,
} from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiDevexpress,
  SiFastify,
  SiHandlebarsdotjs,
  SiMysql,
  SiPrisma,
} from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { useEffect, useMemo, useState } from "react";
import { IconType } from "react-icons";

const icons: IconType[] = [
  RiJavascriptLine,
  TbBrandTypescript,
  TbBrandCss3,
  TbBrandTailwind,
  SiStyledcomponents,
  FaNodeJs,
  SiDevexpress,
  SiFastify,
  SiHandlebarsdotjs,
  FaReact,
  TbBrandNextjs,
  SiMysql,
  BiLogoPostgresql,
  SiPrisma,
  TbBrandFirebase,
];

const IconContainer = ({ Icon }: { Icon: IconType }) => (
  <div className="w-12 h-12 flex items-center justify-center bg-gray-100/20 rounded-md backdrop-blur-xl">
    <Icon size={30} />
  </div>
);

function shuffleArray(array: IconType[]): IconType[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function SkillsItems() {
  const [duplicatedIcons, setDuplicatedIcons] = useState<IconType[]>([]);

  useEffect(() => {
    const shuffledIcons = shuffleArray(icons);
    setDuplicatedIcons([...shuffledIcons, ...shuffledIcons]);
  }, []);

  const renderedIcons = useMemo(
    () =>
      duplicatedIcons.map((Icon, index) => (
        <IconContainer key={index} Icon={Icon} />
      )),
    [duplicatedIcons]
  );

  return (
    <div className="flex overflow-hidden w-full">
      <div className="flex gap-20 animate-scroll ">{renderedIcons}</div>
    </div>
  );
}
