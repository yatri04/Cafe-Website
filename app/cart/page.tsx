"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="font-serif text-4xl font-bold text-brown-900 mb-4">Your Cart</h1>
            <p className="text-brown-700 text-lg mb-8">Your cart is empty</p>
            <Button asChild className="bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full px-8 py-3">
              <a href="/menu">Browse Menu</a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-brown-900 mb-4">Your Cart</h1>
          <p className="text-brown-700">Review your items and place your order</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="card-3d bg-cream-50 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-bold text-brown-900">{item.name}</h3>
                      <p className="text-brown-600 font-medium">₹{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 rounded-full border-brown-300"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium text-brown-900">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 rounded-full border-brown-300"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="card-3d bg-cream-50 border-0 sticky top-8">
              <CardContent className="p-6">
                <h2 className="font-serif text-xl font-bold text-brown-900 mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-brown-700">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="text-brown-900 font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-brown-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-lg font-bold text-brown-900">Total</span>
                    <span className="font-serif text-xl font-bold text-brown-600">₹{total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full py-3">
                    Place Order
                  </Button>
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full border-brown-300 text-brown-600 hover:bg-brown-50 rounded-full bg-transparent"
                  >
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
