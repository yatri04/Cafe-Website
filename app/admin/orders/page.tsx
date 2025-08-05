"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Clock, CheckCircle, Package } from "lucide-react"
import Image from "next/image"

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      customerEmail: "john.doe@email.com",
      customerName: "John Doe",
      items: [
        { name: "Cappuccino", quantity: 2, price: 4.5, image: "/placeholder.svg?height=100&width=100" },
        { name: "Croissant", quantity: 1, price: 3.25, image: "/placeholder.svg?height=100&width=100" },
      ],
      total: 12.25,
      status: "pending",
      timestamp: "2024-01-20 09:30 AM",
    },
    {
      id: "ORD-002",
      customerEmail: "jane.smith@email.com",
      customerName: "Jane Smith",
      items: [
        { name: "Latte", quantity: 1, price: 4.75, image: "/placeholder.svg?height=100&width=100" },
        { name: "Avocado Toast", quantity: 1, price: 8.75, image: "/placeholder.svg?height=100&width=100" },
      ],
      total: 13.5,
      status: "preparing",
      timestamp: "2024-01-20 10:15 AM",
    },
    {
      id: "ORD-003",
      customerEmail: "mike.johnson@email.com",
      customerName: "Mike Johnson",
      items: [
        { name: "Cold Brew", quantity: 1, price: 3.75, image: "/placeholder.svg?height=100&width=100" },
        { name: "Blueberry Muffin", quantity: 1, price: 3.5, image: "/placeholder.svg?height=100&width=100" },
      ],
      total: 7.25,
      status: "ready",
      timestamp: "2024-01-20 11:00 AM",
    },
  ])

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "preparing":
        return <Package className="h-4 w-4" />
      case "ready":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "preparing":
        return "bg-blue-100 text-blue-800"
      case "ready":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-bold text-brown-900 mb-2">Orders Management</h1>
        <p className="text-brown-700">Manage and track all customer orders</p>
      </div>

      <Card className="card-3d bg-cream-50 border-0">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-brown-900">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-sage-50 rounded-lg p-6 border border-brown-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-brown-900">{order.id}</h3>
                    <p className="text-brown-700">{order.customerName}</p>
                    <p className="text-sm text-brown-600">{order.customerEmail}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-brown-900 text-lg">${order.total.toFixed(2)}</p>
                    <p className="text-sm text-brown-600">{order.timestamp}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge className={`${getStatusColor(order.status)} flex items-center space-x-1`}>
                      {getStatusIcon(order.status)}
                      <span className="capitalize">{order.status}</span>
                    </Badge>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-brown-300 text-brown-700 hover:bg-brown-50 bg-transparent"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Items
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="font-serif text-xl text-brown-900">
                            Order Details - {order.id}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-cream-50 rounded-lg">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={60}
                                height={60}
                                className="rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-brown-900">{item.name}</h4>
                                <p className="text-sm text-brown-600">Qty: {item.quantity}</p>
                                <p className="text-sm font-semibold text-brown-700">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          ))}
                          <div className="border-t pt-3">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-brown-900">Total:</span>
                              <span className="font-bold text-brown-900 text-lg">${order.total.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <Select onValueChange={(value) => updateOrderStatus(order.id, value)} defaultValue={order.status}>
                    <SelectTrigger className="w-40 border-brown-200 focus:border-brown-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="preparing">Preparing</SelectItem>
                      <SelectItem value="ready">Ready</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
