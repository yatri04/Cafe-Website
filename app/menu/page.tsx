"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"

const menuItems = [
  {
    id: "1",
    name: "Espresso",
    description: "Rich, bold shot of our signature blend",
    price: 207.5,
    category: "Coffee",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam, topped with latte art",
    price: 373.5,
    category: "Coffee",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Latte",
    description: "Smooth espresso with steamed milk and a touch of foam",
    price: 394.25,
    category: "Coffee",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Cold Brew",
    description: "Smooth, refreshing coffee brewed cold for 12 hours",
    price: 311.25,
    category: "Coffee",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Croissant",
    description: "Buttery, flaky pastry baked fresh daily",
    price: 269.75,
    category: "Food",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Avocado Toast",
    description: "Multigrain bread with smashed avocado, microgreens, and sea salt",
    price: 726.25,
    category: "Food",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "7",
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries",
    price: 290.5,
    category: "Food",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "8",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice, no pulp",
    price: 352.75,
    category: "Beverages",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "9",
    name: "Herbal Tea",
    description: "Selection of premium herbal teas",
    price: 249.0,
    category: "Beverages",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const categories = ["All", "Coffee", "Food", "Beverages"]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { addItem } = useCart()

  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  const handleAddToCart = (item: (typeof menuItems)[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-brown-900 mb-4">Our Menu</h1>
          <p className="text-brown-700 text-lg max-w-2xl mx-auto">
            Discover our carefully crafted selection of artisanal coffees, fresh pastries, and wholesome meals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-brown-600 hover:bg-brown-700 text-cream-50"
                  : "border-brown-600 text-brown-600 hover:bg-brown-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="card-3d bg-cream-50 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-brown-600 text-cream-50">{item.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-brown-900 mb-2">{item.name}</h3>
                <p className="text-brown-700 mb-4 text-sm leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-brown-600">₹{item.price.toFixed(2)}</span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full px-6 py-2 transition-all duration-200 hover:scale-105"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-brown-700 text-lg">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
