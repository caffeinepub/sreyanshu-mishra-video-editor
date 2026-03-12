export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="relative border-t border-border/30 bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold shimmer-text mb-1">
              SM
            </p>
            <p className="text-white/40 text-sm">
              Crafted with passion for visual storytelling.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <span className="text-border">·</span>
            <a href="/terms" className="hover:text-gold transition-colors">
              Terms
            </a>
            <span className="text-border">·</span>
            <button
              type="button"
              className="hover:text-gold transition-colors"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </button>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm">
              &copy; {year} Sreyanshu Mishra. All rights reserved.
            </p>
            <p className="text-white/25 text-xs mt-1">
              Built with love using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
