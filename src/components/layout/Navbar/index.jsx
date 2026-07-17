import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}

export default Navbar;