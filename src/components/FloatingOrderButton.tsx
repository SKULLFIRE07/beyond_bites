import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingOrderButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappNumber = '919322973362';
  const whatsappMessage = encodeURIComponent('Hello! I am interested in Migliore Agrotech jaggery products. Please share more details.');

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366]/30 rounded-full blur-xl group-hover:bg-[#25D366]/50 transition-all"></div>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-hover hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center gap-3">
          <MessageCircle className="w-6 h-6 animate-gentle-float" />
          <span className="font-semibold hidden md:block pr-2">Chat with Us</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingOrderButton;
