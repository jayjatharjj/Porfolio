import { profile } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js · Hosted on GitHub Pages</span>
      </div>
    </footer>
  );
}
