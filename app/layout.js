import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { BookingProvider } from "@/lib/booking-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ContactDock from "@/components/ContactDock";

export const metadata = {
  title: "Hair & Hair Club | Non-Surgical Hair Units",
  description:
    "Custom non-surgical hair units, natural hair systems, professional fitting, styling, and maintenance in Faisalabad, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <BookingProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <BookingModal />
          <ContactDock />
        </BookingProvider>
      </body>
    </html>
  );
}
