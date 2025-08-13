const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between">
          <div className="max-w-sm">
            <h3 className="text-2xl font-bold text-primary mb-3">NextShelf</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping students exchange textbooks and build community on campus.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NextShelf. All rights reserved.</p>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/nikhil-moorthy17"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              Nikhil Moorthy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
