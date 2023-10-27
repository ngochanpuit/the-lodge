import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import GlobalState from '@/contexts';
import NextAuthProvider from '@/providers/NextAuthProvider';

interface AdminProps {
  children: React.ReactNode;
}

export default function Admin({ children }: AdminProps) {
  return (
    // <NextAuthProvider>
    <GlobalState>
      <Header />
      <div className="content_body">
        <div className="container">{children}</div>
      </div>
      <button
        type="button"
        className="z-[130] flex bg-green-800 bottom-24 right-7 w-12 h-12  text-white animate-bounce rounded-full fixed cursor-pointer justify-center items-center transition-all"
      >
        <Link href="tel:0794034322">
          <FontAwesomeIcon className="w-6 h-6" icon={faPhone} />
        </Link>
      </button>

      <Footer />
    </GlobalState>
    // </NextAuthProvider>
  );
}
