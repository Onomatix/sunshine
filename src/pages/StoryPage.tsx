import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

type FormData = {
  name: string;
  email: string;
  eventType: string;
  message: string;
};

const ServicesPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brown mb-4">
              Modeling & Emcee Services
            </h1>
            <p className="text-khaki mb-8">
              Professional services for fashion, events, and brand promotion
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/600x800/e2d5c3/453628?text=Fashion+Show"
                alt="Fashion Show Portfolio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/600x800/e2d5c3/453628?text=Brand+Events"
                alt="Brand Events Portfolio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/600x800/e2d5c3/453628?text=Product+Launch"
                alt="Product Launch Portfolio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/600x800/e2d5c3/453628?text=Emcee+Events"
                alt="Emcee Events Portfolio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-brown mb-6 text-center">
              Sunshine's Journey
            </h2>
            <p className="text-khaki mb-6">
              With over a decade of experience in the fashion and entertainment industry, Sunshine has established herself as a versatile professional with a unique presence and captivating personality.
            </p>
            <p className="text-khaki mb-6">
              Her journey began on the runways of local fashion shows and quickly expanded to international platforms. Today, Sunshine brings her expertise and elegance to brands and events that value authenticity and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-brown mb-10 text-center">
            Services Offered
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl text-brown mb-3">Fashion Shows</h3>
              <p className="text-khaki">
                Runway modeling for fashion events, showcases, and seasonal collections. Bringing designs to life with professional presentation and poise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl text-brown mb-3">Brand Shoots</h3>
              <p className="text-khaki">
                Professional modeling for product photography, catalogs, websites, and marketing campaigns. Creating visual stories that elevate your brand.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl text-brown mb-3">Event Appearances</h3>
              <p className="text-khaki">
                Brand ambassador services for product launches, store openings, exhibitions, and promotional events. Engaging with audiences and representing your brand.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl text-brown mb-3">Emceeing</h3>
              <p className="text-khaki">
                Professional hosting for corporate events, fashion shows, product launches, and special occasions. Bringing energy and elegance to your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-brown mb-6 text-center">
              Get in Touch
            </h2>
            
            {isSubmitted ? (
              <div className="bg-olive/10 border border-olive/30 text-olive p-4 rounded-md text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-khaki mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border border-sand/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/50"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-khaki mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border border-sand/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/50"
                    placeholder="your.email@example.com"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-khaki mb-1">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    className="w-full px-4 py-2 border border-sand/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/50"
                    {...register("eventType", { required: "Please select an event type" })}
                  >
                    <option value="">Select event type</option>
                    <option value="Fashion Show">Fashion Show</option>
                    <option value="Brand Photoshoot">Brand Photoshoot</option>
                    <option value="Product Launch">Product Launch</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.eventType && (
                    <p className="mt-1 text-sm text-red-500">{errors.eventType.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-khaki mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-sand/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/50"
                    placeholder="Please share details about your event and requirements"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
