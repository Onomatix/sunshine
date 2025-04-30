const ProductFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">
          Experience the Magic
        </h2>
        
        {/* Fashion Magic */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://placehold.co/800x600/e2d5c3/453628?text=Fashion+Magic" 
                alt="That's Fashion Magic!" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-brown mb-4">That's Fashion Magic!</h3>
              <p className="text-khaki text-lg">
                Plunging neckline? No problem. The Magic Bra Maxi Plunge B Push-Up Bra by Sunshine Cosmetics gives you the lift you need while staying completely invisible.
              </p>
            </div>
          </div>
        </div>

        {/* Super Slim */}
        <div className="mb-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-brown mb-4">Super Slim. Super Thin.</h3>
              <p className="text-khaki text-lg">
                Engineered to feel like air, our featherlight design offers a zero-weight gravity experience — so light, you'll forget it's even there.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="https://placehold.co/800x600/e2d5c3/453628?text=Super+Slim" 
                alt="Super Slim. Super Thin." 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Effortlessly Seamless */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://placehold.co/800x600/e2d5c3/453628?text=Seamless" 
                alt="Effortlessly Seamless" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-brown mb-4">Effortlessly Seamless</h3>
              <p className="text-khaki text-lg">
                Dare to go deeper. The Magic Bra lifts, shapes, and disappears under any outfit — ideal for that deep V look. #PlungePerfection
              </p>
            </div>
          </div>
        </div>

        {/* Modern Woman */}
        <div className="mb-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-brown mb-4">Designed for the Modern Woman</h3>
              <p className="text-khaki text-lg">
                Maximum lift, seamless support, and invisible elegance — whether it's red carpet glam or a casual night out, feel sculpted, secure, and effortlessly stylish.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="https://placehold.co/800x600/e2d5c3/453628?text=Modern+Woman" 
                alt="Designed for the Modern Woman" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Fun Elements */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://placehold.co/800x600/e2d5c3/453628?text=Fun+Elements" 
                alt="Fun Elements, Endless Styles" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-brown mb-4">Fun Elements, Endless Styles</h3>
              <p className="text-khaki text-lg">
                One bra, endless outfit possibilities. Featuring satin areolae, a sleek front & back design, and an extra storage board — all tailored for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-brown mb-4">All the Right Features</h3>
              <ul className="text-khaki text-lg space-y-2">
                <li>• Ultra Push-Up Effect for a Naturally Enhanced Look</li>
                <li>• Deep Plunge Design – Perfect for Low-Cut Dresses & Tops</li>
                <li>• Seamless & Invisible Under Clothing</li>
                <li>• Smooth, no-show design for a second-skin feel</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="https://placehold.co/800x600/e2d5c3/453628?text=Features" 
                alt="All the Right Features" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures; 