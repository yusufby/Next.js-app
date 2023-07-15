import Link from 'next/link';

const Navbar = () => {
   return ( 
   <nav>
      <div className="logo">
      <h1>List</h1>
      </div>
      <Link href="/" legacyBehavior><a>Home</a></Link>
      <Link href="/about" legacyBehavior><a>About</a></Link>
      <Link href="/ninjas" legacyBehavior><a>Listing</a></Link>
   </nav> );
}
 
export default Navbar;