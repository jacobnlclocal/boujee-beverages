import Image from "next/image"
import Link from "next/link"
import { Coffee, Droplets, Candy, Instagram, Facebook, MessageSquare } from "lucide-react"
import TikTokIcon from "@/components/TikTokIcon"
import { Button } from "@/components/ui/button"
import ReviewsSection from "@/components/ReviewsSection"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png?v=2" alt="Boujee Beverages Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold tracking-tight text-pink-600">Boujee Beverages</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-pink-600 transition-colors">
              About
            </Link>
            <Link href="#menu" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Menu
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-pink-600 hover:bg-pink-700">Book Now</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-[600px]">
            <Image
              src="/images/wedding-1.jpg"
              alt="Boujee Beverages Mobile Experience"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Mobile Beverage <span className="text-pink-400">Experience</span>
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Elevate your event with our premium mobile beverage service featuring freeze-dried candy, specialty
                coffee, and fresh squeezed lemonade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  Book Your Experience
                </Button>
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  View Menu
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">About Boujee Beverages</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image
                  src="/images/corporate-1.jpg"
                  alt="Corporate Event Setup"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-600">Luxury On Wheels</h3>
                <p className="text-gray-700 mb-6">
                  Boujee Beverages brings a premium beverage experience directly to your event. Our stylish mobile setup
                  is designed to impress your guests while serving delicious, Instagram-worthy drinks and treats.
                </p>
                <p className="text-gray-700 mb-6">
                  Whether you're planning a wedding, corporate event, birthday party, or festival, we customize our
                  offerings to match your theme and preferences.
                </p>
                <div className="flex gap-8 mt-8">
                  <div className="text-center">
                    <div className="bg-pink-100 p-4 rounded-full inline-flex mb-3">
                      <Coffee className="h-6 w-6 text-pink-600" />
                    </div>
                    <p className="font-medium">Specialty Coffee</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-100 p-4 rounded-full inline-flex mb-3">
                      <Droplets className="h-6 w-6 text-pink-600" />
                    </div>
                    <p className="font-medium">Fresh Lemonade</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-100 p-4 rounded-full inline-flex mb-3">
                      <Candy className="h-6 w-6 text-pink-600" />
                    </div>
                    <p className="font-medium">Freeze-Dried Candy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16 bg-pink-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">Our Menu</h2>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              Discover our selection of premium beverages and treats, customizable for your special event
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Coffee Menu */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="/images/wedding-2.jpg"
                    alt="Specialty Coffee"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Specialty Coffee</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="font-medium">Iced Caramel Macchiato</span>
                      <span className="text-pink-600">$5.50</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Vanilla Cold Brew</span>
                      <span className="text-pink-600">$5.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Mocha Frappuccino</span>
                      <span className="text-pink-600">$6.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Lavender Latte</span>
                      <span className="text-pink-600">$5.75</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Rose Gold Cappuccino</span>
                      <span className="text-pink-600">$6.50</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Lemonade Menu */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src="/images/festival-1.jpg"
                    alt="Fresh Lemonade"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Fresh Lemonade</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="font-medium">Classic Lemonade</span>
                      <span className="text-pink-600">$4.50</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Strawberry Lemonade</span>
                      <span className="text-pink-600">$5.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Blueberry Lavender</span>
                      <span className="text-pink-600">$5.50</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Raspberry Mint</span>
                      <span className="text-pink-600">$5.25</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Pink Dragonfruit</span>
                      <span className="text-pink-600">$6.00</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Candy Menu */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="/images/birthday-1.jpg"
                    alt="Freeze-Dried Candy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Freeze-Dried Candy</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="font-medium">Skittles Mix</span>
                      <span className="text-pink-600">$4.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Starburst Assortment</span>
                      <span className="text-pink-600">$4.50</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sour Patch Kids</span>
                      <span className="text-pink-600">$4.25</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Jolly Rancher Crunch</span>
                      <span className="text-pink-600">$4.75</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Custom Candy Mix</span>
                      <span className="text-pink-600">$5.50</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-pink-600 hover:bg-pink-700">Download Full Menu</Button>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Contact/Booking Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Book Your Experience</h2>
                <p className="text-gray-700 mb-8">
                  Ready to elevate your next event with Boujee Beverages? Fill out the form and we'll get back to you
                  within 24 hours to discuss your custom beverage experience.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <input type="text" id="first-name" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <input type="text" id="last-name" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone
                    </label>
                    <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>

                  <div>
                    <label htmlFor="event-date" className="block text-sm font-medium mb-1">
                      Event Date
                    </label>
                    <input type="date" id="event-date" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>

                  <div>
                    <label htmlFor="event-type" className="block text-sm font-medium mb-1">
                      Event Type
                    </label>
                    <select id="event-type" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="festival">Festival/Fair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Additional Details
                    </label>
                    <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                  </div>

                  <Button className="w-full bg-pink-600 hover:bg-pink-700">Submit Booking Request</Button>
                </form>
              </div>

              <div className="flex flex-col justify-center">
                <Image
                  src="/images/wedding-3.jpg"
                  alt="Boujee Beverages Setup"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg mb-8"
                />

                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Email:</span>
                      <a href="mailto:luke@mcintoshins.com" className="text-pink-600 hover:underline">
                        luke@mcintoshins.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Phone:</span>
                      <a href="tel:+18643143617" className="text-pink-600 hover:underline">
                        (864) 314-3617
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Service Area:</span>
                      <span>Upstate South Carolina</span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Follow Us:</h4>
                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/boujeebevco/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61551564351576" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a href="https://www.tiktok.com/@boujeebevco" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                        <TikTokIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png?v=2" alt="Boujee Beverages Logo" width={40} height={40} className="rounded-full" />
                <span className="text-xl font-bold tracking-tight text-pink-400">Boujee Beverages</span>
              </div>
              <p className="text-gray-400">Elevating events with premium mobile beverage experiences.</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Corporate Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Birthday Parties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Festivals & Fairs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to get updates on our latest offerings and event availability.
              </p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="p-2 w-full rounded-l-md" />
                <Button className="rounded-l-none bg-pink-600 hover:bg-pink-700">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Boujee Beverages. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
