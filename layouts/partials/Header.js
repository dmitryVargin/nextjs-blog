import Logo from '@components/Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white py-2 shadow">
        <nav className="navbar container">
          <div className="order-0">
            <Logo />
          </div>
          <ul className="navbar-nav">
            <li className="nav-item group relative">
              <Link href={'/'}>
                <span className="nav-link inline-flex items-center">Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
