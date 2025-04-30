import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { MessageSquare } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Magic Bra - Classic",
    description: "Our signature invisible bra with maximum comfort and support",
    price: 129.00,
    image: "https://placehold.co/600x600/e2d5c3/453628?text=Magic+Bra+Classic"
  },
  {
    id: 2,
    name: "Magic Bra - Premium Edition",
    description: "Luxury version with added comfort features and elegant design",
    price: 159.00,
    image: "https://placehold.co/600x600/e2d5c3/453628?text=Magic+Bra+Premium"
  },
  {
    id: 3,
    name: "Magic Bra Adhesive Strips",
    description: "Extra adhesive strips for your Magic Bra",
    price: 19.90,
    image: "https://placehold.co/600x600/e2d5c3/453628?text=Adhesive+Strips"
  },
  {
    id: 4,
    name: "Magic Bra Travel Case",
    description: "Protective travel case for your Magic Bra",
    price: 29.90,
    image: "https://placehold.co/600x600/e2d5c3/453628?text=Travel+Case"
  },
  {
    id: 5,
    name: "Magic Bra - Strapless",
    description: "Perfect for backless dresses and halter tops",
    price: 139.00,
    image: "https://placehold.co/600x600/e2d5c3/453628?text=Strapless+Bra"
  },
  {
    id: 6,
    name: "Magic Bra Cleansing Kit",
    description: "Special cleansing solution to maintain adhesion",
    price: 24.90,
    image: "https://placehold.co/600x600/e2d5c3/453628?text=Cleansing+Kit"
  }
];

const ShopPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brown mb-4">
              Shop Our Products
            </h1>
            <p className="text-khaki mb-8">
              Discover our signature Magic Bra and accessories
            </p>
          </div>
        </div>
      </section>
      
      {/* Product Features */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brown mb-4">
              Experience the Magic Bra
            </h2>
            <p className="text-khaki max-w-2xl mx-auto">
              Our signature product is designed with your comfort and beauty in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-olive/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-olive text-2xl">1</span>
              </div>
              <h3 className="font-serif text-xl text-brown mb-3">Super Slim</h3>
              <p className="text-khaki">
                Designed with the latest technology for a sleek, invisible profile under any outfit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-olive/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-olive text-2xl">2</span>
              </div>
              <h3 className="font-serif text-xl text-brown mb-3">Super Thin</h3>
              <p className="text-khaki">
                Made with premium lightweight materials that feel like a second skin.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-olive/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-olive text-2xl">3</span>
              </div>
              <h3 className="font-serif text-xl text-brown mb-3">Zero Weight Gravity</h3>
              <p className="text-khaki">
                So light you'll forget you're wearing it, yet offering exceptional support.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/shop">
              <Button className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-brown mb-2">{product.name}</h3>
                  <p className="text-khaki mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-brown font-medium">${product.price.toFixed(2)}</span>
                    <a href={`https://wa.me/60143979337?text=I'm interested in the ${product.name}`} target="_blank" rel="noopener noreferrer">
                      <Button className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Order on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-brown mb-10 text-center">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream p-6 rounded-lg">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-olive" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-khaki mb-4">
                "I've tried many invisible bras before, but the Magic Bra is truly different. It stays in place all day and is so comfortable I forget I'm wearing it!"
              </p>
              <p className="font-medium text-brown">- Sarah L.</p>
            </div>

            <div className="bg-cream p-6 rounded-lg">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-olive" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-khaki mb-4">
                "The Magic Bra has been a game-changer for my backless dresses. It gives amazing support while being completely invisible."
              </p>
              <p className="font-medium text-brown">- Michelle T.</p>
            </div>

            <div className="bg-cream p-6 rounded-lg">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-olive" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-khaki mb-4">
                "I was skeptical at first, but this bra truly feels weightless. Perfect for hot summer days and special occasions alike."
              </p>
              <p className="font-medium text-brown">- Jessica R.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShopPage;
