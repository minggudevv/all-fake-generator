import Navbar from '../components/Navbar';
import './styles/globals.css'; // Perbarui jalur impor CSS

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
