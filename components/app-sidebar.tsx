"use client"

import * as React from "react"
import {

  BookOpen,
  Search,

  Locate,

  Map,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  
  navMain: [
    {
      title: "About me",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Hobbies",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    
  ],
  projects: [
    {
      name: "GitGPS",
      url: "https://github.com/datnguyen238/sunhacks--repoRover",
      icon: Locate,
      description: "",
    },
    {
      name: "SouL",
      url: "https://github.com/2023-opportunity-hack/SouL--DigitalRecordsManagementforMuseumsandHistoricalSites",
      icon: Search,
      description: "",
    },
    {
      name: "YellowBrownBananas",
      url: "https://github.com/2024-Arizona-Opportunity-Hack/Yellow-Brown-Bananas-Nature-sEdgeWildlife-Nature-sEdgeWildlifeandReptileRescueDigitalTransformation.git",
      icon: Map,
      description: "",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href = "/">This is a fresh start</Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
