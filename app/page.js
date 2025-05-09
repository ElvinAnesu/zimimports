import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-foreground bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-white dark:from-sky-900 dark:to-black text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Import Your Dream Car from Japan to Zimbabwe</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Professional, reliable, and hassle-free car importing service with transparent pricing and personalized support.</p>
          <a 
            href="https://wa.me/263775953491?text=Hi%20ZimImports%2C%20I%20want%20help%20importing%20a%20car%20from%20Japan" 
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center text-lg transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p>Contact us via WhatsApp to discuss your car preferences, budget, and requirements.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Car Selection</h3>
              <p>We'll help you find and select the perfect vehicle based on your requirements from Japanese auctions.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Purchase & Payment</h3>
              <p>We handle the auction bidding and purchase process with transparent pricing.</p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Shipping Arrangement</h3>
              <p>We organize all shipping logistics from Japan to Zimbabwe with proper documentation.</p>
            </div>
            
            {/* Step 5 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">5</div>
              <h3 className="text-xl font-semibold mb-2">Customs Clearance</h3>
              <p>Our team handles all customs formalities and import duties to ensure smooth clearance.</p>
            </div>
            
            {/* Step 6 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">6</div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p>Receive your vehicle at your preferred location in Zimbabwe, ready to drive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
              <p>Years of experience with a proven track record of successful imports and satisfied clients.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p>Clear cost breakdown with no hidden fees, ensuring you understand exactly what you're paying for.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
              <p>Dedicated customer service throughout the entire process, with regular updates via WhatsApp.</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hassle-Free Process</h3>
              <p>We handle all paperwork, shipping, and customs clearance so you don't have to worry about the details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 italic">ZimImports helped me import my Toyota Prado from Japan with zero headaches. The entire process was smooth, and they kept me updated every step of the way. Highly recommended!</p>
              <div className="font-semibold">Tendai M.</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Harare, Zimbabwe</div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 italic">I was nervous about importing a car from Japan, but the team at ZimImports made it so simple. Their transparent pricing was refreshing, and my Honda CR-V arrived in perfect condition.</p>
              <div className="font-semibold">Chido R.</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bulawayo, Zimbabwe</div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 italic">After comparing several importers, I chose ZimImports for their professional approach. They guided me through each step of importing my Nissan X-Trail, and I couldn't be happier with the service.</p>
              <div className="font-semibold">Farai M.</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Mutare, Zimbabwe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">ZimImports</h2>
            <p className="mb-6">Professional car importing service from Japan to Zimbabwe.</p>
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@zimimports.com</span>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <a 
              href="https://wa.me/263775953491?text=Hi%20ZimImports%2C%20I%20want%20help%20importing%20a%20car%20from%20Japan" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center text-lg transition-colors duration-300 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} ZimImports. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/263775953491?text=Hi%20ZimImports%2C%20I%20want%20help%20importing%20a%20car%20from%20Japan" 
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors duration-300 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
