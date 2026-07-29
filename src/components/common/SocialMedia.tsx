import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaXTwitter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { socialMediaLinks } from "@/data/portfolio";

const links: { key: string; label: string; href: string; Icon: IconType }[] = [
  {
    key: "github",
    label: "GitHub",
    href: socialMediaLinks.github,
    Icon: FaGithub,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: socialMediaLinks.linkedin,
    Icon: FaLinkedinIn,
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${socialMediaLinks.gmail}`,
    Icon: FaEnvelope,
  },
  {
    key: "twitter",
    label: "X (Twitter)",
    href: socialMediaLinks.twitter,
    Icon: FaXTwitter,
  },
];

export default function SocialMedia() {
  const available = links.filter((link) => Boolean(link.href));
  if (available.length === 0) return null;

  return (
    <ul className="mt-2 flex flex-wrap items-center justify-center gap-3">
      {available.map(({ key, label, href, Icon }) => {
        const isMailto = href.startsWith("mailto:");
        return (
          <li key={key}>
            <a
              href={href}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md transition-all duration-300 hover:scale-110 hover:from-pink-500 hover:to-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:scale-100"
              target={isMailto ? undefined : "_blank"}
              rel={isMailto ? undefined : "noopener noreferrer"}
              aria-label={label}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
