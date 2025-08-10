import '../css/navbar.css';

function navbar() {
  return (
    <nav className="navbar">
      <h1>NewWhite</h1>
      <ul className='nav-links'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </ul>
    </nav>
  );
}

export default navbar;