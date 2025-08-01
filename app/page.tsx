import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, MapPin, Clock, Star } from "lucide-react"

export default function HomePage() {
  const featuredItems = [
    {
      id: "1",
      name: "Artisan Cappuccino",
      description: "Rich espresso with perfectly steamed milk and latte art",
      price: 4.5,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "2",
      name: "Blueberry Scone",
      description: "Fresh baked scone with wild blueberries and vanilla glaze",
      price: 3.25,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "3",
      name: "Avocado Toast",
      description: "Multigrain bread topped with smashed avocado and microgreens",
      price: 8.75,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-brown-900 mb-6">
            Welcome to <span className="text-gradient">Brew & Bloom</span>
          </h1>
          <p className="text-xl md:text-2xl text-brown-700 mb-8 max-w-2xl mx-auto">
            Where every cup tells a story and every bite feels like home. Experience artisanal coffee and fresh pastries
            in our cozy neighborhood café.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brown-600 hover:bg-brown-700 text-cream-50 px-8 py-3 rounded-full">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brown-600 text-brown-600 hover:bg-brown-50 px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/reservations">Reserve a Table</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-brown-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brown-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brown-900 mb-6">Our Story</h2>
              <p className="text-brown-700 text-lg mb-6 leading-relaxed">
                Founded in 2018, Brew & Bloom began as a dream to create a warm, welcoming space where the community
                could gather over exceptional coffee and homemade treats. Our passion for quality ingredients and
                artisanal craftsmanship shines through in every cup we serve.
              </p>
              <p className="text-brown-700 text-lg mb-8 leading-relaxed">
                We source our beans directly from sustainable farms and bake our pastries fresh daily using locally
                sourced ingredients. Every visit to Brew & Bloom is an invitation to slow down, savor the moment, and
                connect with your community.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5 text-brown-600" />
                  <span className="text-brown-700 font-medium">Artisan Coffee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-brown-600" />
                  <span className="text-brown-700 font-medium">Fresh Daily</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Brew & Bloom Café Interior"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-brown-900 mb-4">Featured Favorites</h2>
            <p className="text-brown-700 text-lg max-w-2xl mx-auto">
              Discover our most beloved creations, crafted with love and the finest ingredients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <Card key={item.id} className="card-3d bg-cream-50 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-brown-900 mb-2">{item.name}</h3>
                  <p className="text-brown-700 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brown-600">${item.price.toFixed(2)}</span>
                    <Button className="bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brown-600 text-brown-600 hover:bg-brown-50 px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brown-900 mb-6">Visit Us</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-brown-600 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900">123 Coffee Street</p>
                    <p className="text-brown-700">Downtown District, City 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-brown-600 mt-1" />
                  <div>
                    <p className="font-medium text-brown-900">Hours</p>
                    <p className="text-brown-700">Mon-Fri: 6:30 AM - 8:00 PM</p>
                    <p className="text-brown-700">Sat-Sun: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full">
                <Link href="/contact">Get Directions</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Café Location" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-brown-900 mb-4">What Our Customers Say</h2>
            <p className="text-brown-700 text-lg">Real reviews from our beloved community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                comment:
                  "The best coffee in town! The atmosphere is so cozy and welcoming. I come here every morning before work.",
              },
              {
                name: "Mike Chen",
                rating: 5,
                comment:
                  "Amazing pastries and friendly staff. The avocado toast is incredible, and their latte art is beautiful.",
              },
              {
                name: "Emily Davis",
                rating: 5,
                comment:
                  "Perfect spot for working or catching up with friends. Great WiFi, comfortable seating, and excellent coffee.",
              },
            ].map((review, index) => (
              <Card key={index} className="card-3d bg-cream-50 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-brown-700 mb-4 italic">"{review.comment}"</p>
                  <p className="font-medium text-brown-900">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brown-600 text-brown-600 hover:bg-brown-50 px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-cream-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-brown-500 to-brown-700 rounded-full flex items-center justify-center">
                  <span className="text-cream-50 font-bold text-sm">B&B</span>
                </div>
                <span className="font-serif text-xl font-bold">Brew & Bloom</span>
              </div>
              <p className="text-cream-200">
                Your neighborhood café serving artisanal coffee and fresh pastries since 2018.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/menu" className="text-cream-200 hover:text-cream-50 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/reservations" className="text-cream-200 hover:text-cream-50 transition-colors">
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-cream-200 hover:text-cream-50 transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-cream-200 hover:text-cream-50 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-cream-200">
                <li>123 Coffee Street</li>
                <li>Downtown District, City 12345</li>
                <li>(555) 123-BREW</li>
                <li>hello@brewandbloom.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-cream-200 hover:text-cream-50">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-cream-200 hover:text-cream-50">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-brown-800 mt-8 pt-8 text-center text-cream-200">
            <p>&copy; 2024 Brew & Bloom Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
