import Footer from '../Footer';
import Header from '../Header';

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
