import { Cross, MapPin, Heart } from "lucide-react";
import logoImage from "@assets/image_1769643134645.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-4">
            <img
              src={logoImage}
              alt="Salvation Church of God Logo"
              className="h-16 w-auto"
            />
            <div>
              <h3 className="text-lg font-bold">Salvation Church of God</h3>
              <p className="text-sm text-primary-foreground/70">
                Where Jesus is lifted up
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm">456 Ave N, Brooklyn, NY</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Pastor Malory Laurent
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-primary-foreground/70">
              Radio Salvation
            </p>
            <p className="text-accent font-semibold">6:00 AM - 12:00 PM</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
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
