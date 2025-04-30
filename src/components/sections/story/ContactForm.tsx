import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';

type FormData = {
  name: string;
  email: string;
  eventType: string;
  message: string;
};

const ContactForm = () => {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brown mb-12 text-center">
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
  );
};

export default ContactForm; 