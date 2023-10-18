import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface AdminProps {
  children: React.ReactNode;
}

export default function Admin({ children }: AdminProps) {
  return (
    <div>
      <Header />
      <div className="content_body">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
