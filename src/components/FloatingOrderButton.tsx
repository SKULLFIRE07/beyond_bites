import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

const FloatingOrderButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="tel:+919322973362"
      className={`fixed bottom-24 right-6 z-40 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Call to Order"
    >
      <div className="bg-honey text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-honey/90">
        <Phone className="w-5 h-5" />
        <span className="font-medium">Order Now</span>
      </div>
    </a>
  );
};

export default FloatingOrderButton;
