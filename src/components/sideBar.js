import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
  Icon,
} from "@heroicons/react/24/outline";
const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Account Settings", href: "/accountsettings", icon: UsersIcon },
  { name: "Logout", href: "/logout", icon: FolderIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar() {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-custom-green2 text-white"
                      : "text-primary hover:text-white hover:bg-custom-green2",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-primary group-hover:text-white",
                      "h-6 w-6 shrink-0"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
