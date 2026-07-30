import { FaHome, FaInfo, FaBlog } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdPermContactCalendar } from "react-icons/md";
import { IconType } from "react-icons";
export interface NavLink {
  id: string;
  label: string;
  href: string;
  icon: IconType;
}

export const navLinks: NavLink[] = [
  { id: "hero", label: "Home", href: "#hero", icon: FaHome },
  { id: "about", label: "About", href: "#about", icon: FaInfo },
  { id: "projects", label: "Projects", href: "#projects", icon: AiFillProject },
  { id: "skills", label: "Skills", href: "#skills", icon: GiSkills },
  { id: "blog", label: "Blog", href: "#blog", icon: FaBlog },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: MdPermContactCalendar,
  },
];

export function getHref(link: NavLink, pathname: string): string {
  return pathname === "/" ? link.href : `/${link.href}`;
}
