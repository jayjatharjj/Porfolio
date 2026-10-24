import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  ["/#work", "Experience"],
  ["/#stack", "Stack"],
  ["/#proof", "Certifications"],
  ["/#freelance", "Freelance"],
  ["/#projects", "Projects"],
  ["/blogs", "Blog"],
] as const;

export default function SiteNav() {
  return (
    <nav>
      <div className="wrap nav">
        <Link className="logo" href="/#top">
          <i>{profile.initials}</i> {profile.short}
        </Link>
        <div className="links">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <Link className="btn primary" href="/#contact">
          Let&apos;s talk →
        </Link>
      </div>
    </nav>
  );
}
