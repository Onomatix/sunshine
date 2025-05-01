import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { useTheme } from '@/context/ThemeContext';

const CheckoutPage = () => {
  const { items, totalItems } = useCart();
  const { theme } = useTheme();
  const phoneNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with actual number

  const handleWhatsAppClick = () => {
    const message = `Hi, I would like to purchase ${totalItems} pieces of the Magic Bra.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Layout>
      <div className={`py-48 ${theme === 'dark' ? 'bg-[#111111]' : 'bg-cream'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className={`text-3xl font-serif ${theme === 'dark' ? 'text-white' : 'text-brown'} mb-8`}>Your Order</h1>
            
            {items.length > 0 ? (
              <>
                <div className={`${theme === 'dark' ? 'bg-[#350006]' : 'bg-white'} rounded-lg shadow-md p-6 mb-8 transition-colors duration-300`}>
                  {items.map((item) => (
                    <div key={item.id} className={`flex justify-between items-center py-4 border-b ${theme === 'dark' ? 'border-white/10' : 'border-cream'} last:border-0`}>
                      <div>
                        <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-brown'}`}>{item.name}</h3>
                        <p className={theme === 'dark' ? 'text-white/80' : 'text-khaki'}>Quantity: {item.quantity}</p>
                      </div>
                      <p className={`${theme === 'dark' ? 'text-white' : 'text-brown'} font-medium`}>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  
                  <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-cream'}`}>
                    <div className="flex justify-between items-center">
                      <p className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-brown'}`}>Total</p>
                      <p className={`text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-brown'}`}>${totalAmount.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Continue on WhatsApp
                </button>
              </>
            ) : (
              <p className={`text-center ${theme === 'dark' ? 'text-white/80' : 'text-khaki'}`}>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage; 