import BannerSlider from '@/components/BannerSlider';
import Home from '@/components/Home';
import Admin from '@/components/layout/Admin';

export default function Index() {
  return (
    <Admin>
      <BannerSlider />
      <Home />
    </Admin>
  );
}
