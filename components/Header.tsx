"use client";

import { MarketingHeader, Theme } from "@vivekkv178/library";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const path = usePathname();

  return (
    <MarketingHeader
      logoProps={{
        logoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/94/Vivek_2024_Logo_letters.png",
        NavigationComponent: Link,
      }}
      navbarProps={{
        marketingRoutes: [
          { path: "/", name: "home" },
          { path: "/projects", name: "Features" },
          { path: "/contact", name: "Architecture" },
          { path: "/contact", name: "Storybook" },
        ],
        NavigationComponent: Link,
        currentPath: path,
      }}
      themeProps={{
        theme: theme === Theme.dark ? Theme.light : Theme.dark,
        setTheme: (theme) => {
          setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
        },
      }}
    />
  );
};

export default Header;
