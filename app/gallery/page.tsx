import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PhotoGallery } from "@/components/photo-gallery"

export default function GalleryPage() {
  // Event categories with their respective images
  const categories = [
    {
      id: "all",
      name: "All Events",
      images: [
        {
          id: 1,
          src: "/images/wedding-1.jpg",
          alt: "Elegant wedding setup with specialty coffee bar",
          category: "wedding",
          description: "Elegant wedding setup with our specialty coffee bar",
        },
        {
          id: 2,
          src: "/images/corporate-1.jpg",
          alt: "Corporate event with branded coffee cups",
          category: "corporate",
          description: "Corporate event featuring custom branded coffee cups",
        },
        {
          id: 3,
          src: "/images/birthday-1.jpg",
          alt: "Sweet 16 party with colorful lemonade station",
          category: "birthday",
          description: "Sweet 16 celebration with our colorful lemonade station",
        },
        {
          id: 4,
          src: "/images/festival-1.jpg",
          alt: "Summer festival booth with freeze-dried candy display",
          category: "festival",
          description: "Summer festival booth featuring our freeze-dried candy display",
        },
        {
          id: 5,
          src: "/images/wedding-2.jpg",
          alt: "Outdoor wedding reception with mobile coffee cart",
          category: "wedding",
          description: "Outdoor wedding reception with our mobile coffee cart",
        },
        {
          id: 6,
          src: "/images/corporate-2.jpg",
          alt: "Product launch event with specialty beverages",
          category: "corporate",
          description: "Product launch event with our specialty beverages",
        },
        {
          id: 7,
          src: "/images/birthday-2.jpg",
          alt: "Children's birthday party with candy station",
          category: "birthday",
          description: "Children's birthday party featuring our candy station",
        },
        {
          id: 8,
          src: "/images/festival-2.jpg",
          alt: "Music festival setup with multiple beverage stations",
          category: "festival",
          description: "Music festival setup with multiple beverage stations",
        },
        {
          id: 9,
          src: "/images/wedding-3.jpg",
          alt: "Rustic barn wedding with custom coffee menu",
          category: "wedding",
          description: "Rustic barn wedding with our custom coffee menu",
        },
        {
          id: 10,
          src: "/images/corporate-3.jpg",
          alt: "Annual company retreat with mobile bar",
          category: "corporate",
          description: "Annual company retreat featuring our full mobile bar",
        },
        {
          id: 11,
          src: "/images/birthday-3.jpg",
          alt: "30th birthday celebration with custom cocktails",
          category: "birthday",
          description: "30th birthday celebration with custom themed beverages",
        },
        {
          id: 12,
          src: "/images/festival-3.jpg",
          alt: "Food festival booth with specialty lemonades",
          category: "festival",
          description: "Food festival booth showcasing our specialty lemonades",
        },
      ],
    },
    {
      id: "wedding",
      name: "Weddings",
      images: [
        {
          id: 1,
          src: "/images/wedding-1.jpg",
          alt: "Elegant wedding setup with specialty coffee bar",
          category: "wedding",
          description: "Elegant wedding setup with our specialty coffee bar",
        },
        {
          id: 5,
          src: "/images/wedding-2.jpg",
          alt: "Outdoor wedding reception with mobile coffee cart",
          category: "wedding",
          description: "Outdoor wedding reception with our mobile coffee cart",
        },
        {
          id: 9,
          src: "/images/wedding-3.jpg",
          alt: "Rustic barn wedding with custom coffee menu",
          category: "wedding",
          description: "Rustic barn wedding with our custom coffee menu",
        },
      ],
    },
    {
      id: "corporate",
      name: "Corporate",
      images: [
        {
          id: 2,
          src: "/images/corporate-1.jpg",
          alt: "Corporate event with branded coffee cups",
          category: "corporate",
          description: "Corporate event featuring custom branded coffee cups",
        },
        {
          id: 6,
          src: "/images/corporate-2.jpg",
          alt: "Product launch event with specialty beverages",
          category: "corporate",
          description: "Product launch event with our specialty beverages",
        },
        {
          id: 10,
          src: "/images/corporate-3.jpg",
          alt: "Annual company retreat with mobile bar",
          category: "corporate",
          description: "Annual company retreat featuring our full mobile bar",
        },
      ],
    },
    {
      id: "birthday",
      name: "Birthdays",
      images: [
        {
          id: 3,
          src: "/images/birthday-1.jpg",
          alt: "Sweet 16 party with colorful lemonade station",
          category: "birthday",
          description: "Sweet 16 celebration with our colorful lemonade station",
        },
        {
          id: 7,
          src: "/images/birthday-2.jpg",
          alt: "Children's birthday party with candy station",
          category: "birthday",
          description: "Children's birthday party featuring our candy station",
        },
        {
          id: 11,
          src: "/images/birthday-3.jpg",
          alt: "30th birthday celebration with custom cocktails",
          category: "birthday",
          description: "30th birthday celebration with custom themed beverages",
        },
      ],
    },
    {
      id: "festival",
      name: "Festivals",
      images: [
        {
          id: 4,
          src: "/images/festival-1.jpg",
          alt: "Summer festival booth with freeze-dried candy display",
          category: "festival",
          description: "Summer festival booth featuring our freeze-dried candy display",
        },
        {
          id: 8,
          src: "/images/festival-2.jpg",
          alt: "Music festival setup with multiple beverage stations",
          category: "festival",
          description: "Music festival setup with multiple beverage stations",
        },
        {
          id: 12,
          src: "/images/festival-3.jpg",
          alt: "Food festival booth with specialty lemonades",
          category: "festival",
          description: "Food festival booth showcasing our specialty lemonades",
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/logo.png" alt="Boujee Beverages Logo" width={40} height={40} className="rounded-full" />
            </Link>
            <span className="text-xl font-bold tracking-tight text-pink-600">Boujee Beverages</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-pink-600 transition-colors">
              About
            </Link>
            <Link href="/#menu" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Menu
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-pink-600 transition-colors">
              Gallery
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-pink-600 hover:bg-pink-700">Book Now</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <PhotoGallery images={category.images} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Event?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let Boujee Beverages create a custom beverage experience that will leave your guests impressed and
              refreshed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Book Your Experience
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
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
                <Image src="/logo.png" alt="Boujee Beverages Logo" width={40} height={40} className="rounded-full" />
                <span className="text-xl font-bold tracking-tight text-pink-400">Boujee Beverages</span>
              </div>
              <p className="text-gray-400">Elevating events with premium mobile beverage experiences.</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-400 hover:text-pink-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#menu" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-pink-400 transition-colors">
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
