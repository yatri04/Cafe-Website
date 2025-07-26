"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trash2, Plus } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ username: "", password: "" })

  const [orders] = useState([
    { id: "001", customer: "John Doe", items: "Cappuccino x2, Croissant x1", total: 12.25, status: "pending" },
    { id: "002", customer: "Jane Smith", items: "Latte x1, Avocado Toast x1", total: 13.5, status: "completed" },
    {
      id: "003",
      customer: "Mike Johnson",
      items: "Cold Brew x1, Blueberry Muffin x1",
      total: 7.25,
      status: "preparing",
    },
  ])

  const [reservations] = useState([
    { id: "001", name: "Sarah Wilson", date: "2024-01-20", time: "10:00 AM", party: 4, status: "confirmed" },
    { id: "002", name: "David Brown", date: "2024-01-20", time: "2:00 PM", party: 2, status: "pending" },
    { id: "003", name: "Lisa Garcia", date: "2024-01-21", time: "9:00 AM", party: 6, status: "confirmed" },
  ])

  const [menuItems, setMenuItems] = useState([
    { id: "1", name: "Cappuccino", category: "Coffee", price: 4.5, description: "Rich espresso with steamed milk" },
    { id: "2", name: "Croissant", category: "Food", price: 3.25, description: "Buttery, flaky pastry" },
    { id: "3", name: "Cold Brew", category: "Coffee", price: 3.75, description: "Smooth, refreshing coffee" },
  ])

  const [newMenuItem, setNewMenuItem] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  })

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials")
    }
  }

  const handleAddMenuItem = (e: React.FormEvent) => {
    e.preventDefault()
    const item = {
      id: (menuItems.length + 1).toString(),
      name: newMenuItem.name,
      category: newMenuItem.category,
      price: Number.parseFloat(newMenuItem.price),
      description: newMenuItem.description,
    }
    setMenuItems([...menuItems, item])
    setNewMenuItem({ name: "", category: "", price: "", description: "" })
    alert("Menu item added successfully!")
  }

  const handleDeleteMenuItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id))
    alert("Menu item deleted successfully!")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cream-50 py-8 flex items-center justify-center">
        <Card className="card-3d bg-cream-50 border-0 w-full max-w-md">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-brown-900 text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-brown-700 font-medium">
                  Username
                </Label>
                <Input
                  id="username"
                  value={loginData.username}
                  onChange={(e) => setLoginData((prev) => ({ ...prev, username: e.target.value }))}
                  className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-brown-700 font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                  className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full py-3">
                Login
              </Button>
            </form>
            <p className="text-sm text-brown-600 mt-4 text-center">Demo credentials: admin / admin123</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-serif text-4xl font-bold text-brown-900">Admin Dashboard</h1>
          <Button
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="border-brown-600 text-brown-600 hover:bg-brown-50"
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="reservations">Reservations</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card className="card-3d bg-cream-50 border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-brown-900">Orders Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-sage-50 rounded-lg">
                      <div>
                        <p className="font-medium text-brown-900">Order #{order.id}</p>
                        <p className="text-brown-700">{order.customer}</p>
                        <p className="text-sm text-brown-600">{order.items}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-brown-900">${order.total.toFixed(2)}</p>
                        <Badge variant={order.status === "completed" ? "default" : "secondary"}>{order.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reservations">
            <Card className="card-3d bg-cream-50 border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-brown-900">Reservations Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reservations.map((reservation) => (
                    <div key={reservation.id} className="flex items-center justify-between p-4 bg-sage-50 rounded-lg">
                      <div>
                        <p className="font-medium text-brown-900">{reservation.name}</p>
                        <p className="text-brown-700">
                          {reservation.date} at {reservation.time}
                        </p>
                        <p className="text-sm text-brown-600">Party of {reservation.party}</p>
                      </div>
                      <Badge variant={reservation.status === "confirmed" ? "default" : "secondary"}>
                        {reservation.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="card-3d bg-cream-50 border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-brown-900">Add New Item</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddMenuItem} className="space-y-4">
                    <div>
                      <Label htmlFor="itemName" className="text-brown-700 font-medium">
                        Name
                      </Label>
                      <Input
                        id="itemName"
                        value={newMenuItem.name}
                        onChange={(e) => setNewMenuItem((prev) => ({ ...prev, name: e.target.value }))}
                        className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="itemCategory" className="text-brown-700 font-medium">
                        Category
                      </Label>
                      <Select onValueChange={(value) => setNewMenuItem((prev) => ({ ...prev, category: value }))}>
                        <SelectTrigger className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Coffee">Coffee</SelectItem>
                          <SelectItem value="Food">Food</SelectItem>
                          <SelectItem value="Beverages">Beverages</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="itemPrice" className="text-brown-700 font-medium">
                        Price
                      </Label>
                      <Input
                        id="itemPrice"
                        type="number"
                        step="0.01"
                        value={newMenuItem.price}
                        onChange={(e) => setNewMenuItem((prev) => ({ ...prev, price: e.target.value }))}
                        className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="itemDescription" className="text-brown-700 font-medium">
                        Description
                      </Label>
                      <Textarea
                        id="itemDescription"
                        value={newMenuItem.description}
                        onChange={(e) => setNewMenuItem((prev) => ({ ...prev, description: e.target.value }))}
                        className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full py-3"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Item
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="card-3d bg-cream-50 border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-brown-900">Current Menu Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {menuItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-sage-50 rounded-lg">
                        <div>
                          <p className="font-medium text-brown-900">{item.name}</p>
                          <p className="text-sm text-brown-600">{item.category}</p>
                          <p className="text-sm text-brown-700">{item.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-brown-900">${item.price.toFixed(2)}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteMenuItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <Card className="card-3d bg-cream-50 border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-brown-900">Reviews Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brown-700">
                  Review management functionality would be implemented here, including the ability to respond to reviews
                  and moderate content.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
