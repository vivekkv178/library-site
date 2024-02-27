import { Hero as HeroComponent, Stat } from "@vivekkv178/library";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Hero = () => {
  const data = {
    heroTitle: "Typescript & React",
    heroDescription:
      "Say goodbye to manual, time-consuming tasks. Let us handle the heavy lifting with ready to use UI components and Javascript functions.",
    cta: {
      contact_me: "/contact",
      download_cv:
        "https://drive.google.com/file/d/1Syy3kBZP3WESV2K-dx8WV6bHSLZoAAVG/view",
    },
  };
  return (
    <HeroComponent
      NavigationComponent={Link}
      heroImg={
        <div className="">
          <img
            src="/undraw_Asset_selection.png"
            className="w-full h-full -mt-20"
          />
        </div>
      }
      heroDescription={data?.heroDescription!}
      heroTitle={data?.heroTitle}
      heroText={<h1 className="h1 mb-4">{"Component Library"}</h1>}
      primaryButton={{
        icon: <></>,
        label: "Get Started",
        variant: "default",
        link: data?.cta?.contact_me,
      }}
      secondaryButton={{
        icon: <Icon icon="lucide:github" />,
        label: "Github",
        variant: "default",
        link: data?.cta?.download_cv,
        newTab: true,
      }}
    />
  );
};

export default Hero;
