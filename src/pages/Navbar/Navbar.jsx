const Navbar = ({ links }) => {
  return (
    <nav className="landingNav">
      {links.map((link) => {
        return (
          <a key={crypto.randomUUID()} id="yo" href={`#${link}`}>
            {link}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
