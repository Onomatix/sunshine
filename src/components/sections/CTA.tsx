import { Link } from "react-router-dom";
import Button from "@/components/Button";

const CTA = () => {
  return (
    <section className="py-16 bg-olive/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-brown mb-6">
            Ready to Experience the Magic?
          </h2>
          <p className="text-lg text-khaki mb-8">
            Discover our collection of premium products designed for your comfort and confidence.
          </p>
          <Link to="/shop">
            <Button size="lg" variant="primary">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 