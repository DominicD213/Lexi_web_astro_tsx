// src/components/Navbar/Navbar.tsx
import { h } from 'preact'; // Import 'h' for creating elements
import type { FunctionalComponent } from 'preact'; // Import the FunctionalComponent type

const Navbar: FunctionalComponent = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <h1 className="text-white text-lg">My Navbar</h1>
    </nav>
  );
};

export default Navbar;
