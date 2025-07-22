import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p>&copy; {new Date().getFullYear()} HireTech. All rights reserved.</p>
    </footer>
  );
}
