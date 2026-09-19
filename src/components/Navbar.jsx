export default function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Articles", href: "#articles" },
    { label: "Tutorials", href: "#tutorials" },
    { label: "Sign Up", href: "#signup" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="text-sky-500 px-2 py-3">
      <ul className="flex list-none gap-4 flex-wrap">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-sky-700 transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
