import { FaFacebook, FaYoutube, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const CTA = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-[#180700]' : 'bg-cream'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-8`}>
            Follow Sunshine Cosmetics
          </h2>
          <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-white' : 'text-khaki'} mb-10 leading-relaxed`}>
            Get inspired by radiant beauty tips, behind-the-scenes moments, and our latest drops — all on your favorite platforms.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/share/1AeNFjkcVo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-brown hover:text-olive'}`}
              aria-label="Facebook"
            >
              <FaFacebook className="w-8 h-8" />
            </a>
            <a 
              href="https://youtube.com/@sunshineaileendevieric-s7i9f?si=3MPtFYBRFwd3roy1" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-brown hover:text-olive'}`}
              aria-label="YouTube"
            >
              <FaYoutube className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sunshine-aileen-devi-524672346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-brown hover:text-olive'}`}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://www.tiktok.com/@sunshineaileendevi?_t=ZS-8vqktKsy0Hq&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${theme === 'dark' ? 'text-white hover:text-white/80' : 'text-brown hover:text-olive'}`}
              aria-label="TikTok"
            >
              <FaTiktok className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 