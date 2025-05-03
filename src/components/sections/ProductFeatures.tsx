import { useTheme } from '@/context/ThemeContext';

const ProductFeatures = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-[#090909]' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading: center on all sizes */}
        <h2 className={`text-3xl md:text-4xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-12 text-center`}>
          Experience the Magic
        </h2>

        {/* === Feature 1 === */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className={`${theme === 'dark' ? 'bg-[#350006]/50' : 'bg-cream/50'} rounded-lg p-8`}>
                <img
                  src="/images/features/feature_01.png"
                  alt="That's Fashion Magic!"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="prose prose-lg">
                <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-olive'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <h3 className={`text-2xl md:text-3xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} m-0`}>That's Fashion Magic!</h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-white/80' : 'text-khaki'} leading-relaxed`}>
                  Plunging neckline? No problem. The Magic Bra Maxi Plunge B Push-Up Bra by Sunshine Cosmetics gives you the lift you need while staying completely invisible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === Feature 2 === */}
        <div className="mb-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="prose prose-lg">
                <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-olive'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <h3 className={`text-2xl md:text-3xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} m-0`}>Super Slim. Super Thin.</h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-white/80' : 'text-khaki'} leading-relaxed`}>
                  Engineered to feel like air, our featherlight design offers a zero-weight gravity experience — so light, you'll forget it's even there.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className={`${theme === 'dark' ? 'bg-[#350006]/50' : 'bg-cream/50'} rounded-lg p-8`}>
                <img
                  src="/images/features/feature_02.png"
                  alt="Super Slim. Super Thin."
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === Feature 3 === */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className={`${theme === 'dark' ? 'bg-[#350006]/50' : 'bg-cream/50'} rounded-lg p-8`}>
                <img
                  src="/images/features/feature_03.png"
                  alt="Effortlessly Seamless"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="prose prose-lg">
                <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-olive'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <h3 className={`text-2xl md:text-3xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} m-0`}>Effortlessly Seamless</h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-white/80' : 'text-khaki'} leading-relaxed`}>
                  Dare to go deeper. The Magic Bra lifts, shapes, and disappears under any outfit — ideal for that deep V look. #PlungePerfection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === Feature 4 === */}
        <div className="mb-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className={`text-2xl md:text-3xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-4`}>Designed for the Modern Woman</h3>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-khaki'} text-lg`}>
                Maximum lift, seamless support, and invisible elegance — whether it's red carpet glam or a casual night out, feel sculpted, secure, and effortlessly stylish.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className={`${theme === 'dark' ? 'bg-[#350006]/50' : 'bg-cream/50'} rounded-lg p-8`}>
                <img
                  src="/images/features/feature_04.png"
                  alt="Designed for the Modern Woman"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === Feature 5 === */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className={`${theme === 'dark' ? 'bg-[#350006]/50' : 'bg-cream/50'} rounded-lg p-8`}>
                <img
                  src="/images/features/feature_05.png"
                  alt="Fun Elements, Endless Styles"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className={`text-2xl md:text-3xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-4`}>Fun Elements, Endless Styles</h3>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-khaki'} text-lg`}>
                One bra, endless outfit possibilities. Featuring satin areolae, a sleek front & back design, and an extra storage board — all tailored for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* === Feature 6 === */}
        <div className="mb-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className={`text-2xl md:text-3xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-4`}>All the Right Features</h3>
              <ul className={`${theme === 'dark' ? 'text-white/80' : 'text-khaki'} text-lg space-y-2`}>
                <li>• Ultra Push-Up Effect for a Naturally Enhanced Look</li>
                <li>• Deep Plunge Design – Perfect for Low-Cut Dresses & Tops</li>
                <li>• Seamless & Invisible Under Clothing</li>
                <li>• Smooth, no-show design for a second-skin feel</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className={`${theme === 'dark' ? 'bg-[#350006]/50' : 'bg-cream/50'} rounded-lg p-8`}>
                <img
                  src="/images/features/feature_06.png"
                  alt="All the Right Features"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
