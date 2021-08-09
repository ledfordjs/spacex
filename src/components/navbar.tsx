import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <img className="link" width="80" height="80" src="/spacex_logo_icon.svg" />
        </Link>
      </nav>

      <style jsx>{`
        nav {
          z-index: 1;
          position: absolute;
          width: 100%;
          padding: 0 25px;
        }

        .link {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export { Navbar }