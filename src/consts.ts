import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Schedule", 
    HREF: "/schedule", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Guides", 
    HREF: "/guides", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "dgilleland@nait.ca",
    HREF: "mailto:dgilleland@nait.ca",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "dgilleland",
    HREF: "https://github.com/dgilleland"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Dan Gilleland",
    HREF: "https://www.linkedin.com/in/danielgilleland/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Dan Gilleland",
    HREF: "https://twitter.com/markhorn_dev",
  },
]

