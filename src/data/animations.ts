/**
 * Animation JSON lives in /public so it is fetched on demand instead of being
 * compiled into the page bundle. Paths are centralised here so a renamed file
 * is a single edit rather than a silent 404.
 */
export const animations = {
  welcome: "/animations/welcome.json",
  planeLoading: "/animations/planeLoading.json",
  programTyping: "/animations/program_typing.json",
  developerSkills: "/animations/developer-skills.json",
  mastery: "/animations/mastery.json",
  contactUs: "/animations/contact-us.json",
  notFound: "/animations/404.json",
} as const;
