import { MapPin, Heart, BookOpen, ExternalLink } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import logoImage from "@assets/image_1769643134645.png";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/salvationcog",
    icon: SiFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/salvation_cog/",
    icon: SiInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@SalvationChurchofGod",
    icon: SiYoutube,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/discover/salvation-church-of-god-live-now",
    icon: SiTiktok,
  },
];

const pastorBooks = [
  {
    title: "Pastor's Book (English/French)",
    href: "https://a.co/d/aJG4QtA",
  },
  {
    title: "Pastor's Book 2 (English/French)",
    href: "https://a.co/d/144MZjN",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="Salvation Church of God Logo"
                className="h-14 w-auto"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Salvation Church of God</h3>
            <p className="text-sm text-primary-foreground/70">
              Where Jesus is lifted up, lives are transformed, and families are
              built on the Word of God.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Location</h4>
            <div className="flex items-start gap-2 mb-2">
              <MapPin className="h-4 w-4 text-accent mt-1" />
              <div>
                <p className="text-sm">5601 Ave N</p>
                <p className="text-sm">Brooklyn, NY</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Pastor Malory Laurent
            </p>
            <div className="mt-4">
              <p className="text-sm text-primary-foreground/70">
                Radio Salvation
              </p>
              <p className="text-accent font-semibold text-sm">
                6:00 AM - 12:00 PM
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">
              Pastor's Books
            </h4>
            <div className="space-y-3">
              {pastorBooks.map((book, index) => (
                <a
                  key={index}
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors group"
                  data-testid={`link-book-${index}`}
                >
                  <BookOpen className="h-4 w-4 group-hover:text-accent" />
                  <span>{book.title}</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              ))}
            </div>
            <a
              href="https://www.youtube.com/@pastormalorylaurent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors group mt-4"
              data-testid="link-pastor-youtube"
            >
              <SiYoutube className="h-4 w-4 group-hover:text-accent" />
              <span>Pastor's Messages</span>
              <ExternalLink className="h-3 w-3 opacity-50" />
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={social.name}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70 flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-accent" /> for the glory of
            God
          </p>
          <p className="text-xs text-primary-foreground/50 mt-2">
            &copy; {currentYear} Salvation Church of God. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
