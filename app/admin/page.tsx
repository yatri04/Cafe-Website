"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { IndianRupee, ShoppingCart, Calendar, Users, TrendingUp, Clock, Star } from "lucide-react"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ username: "", password: "" })

  // Sample analytics data
  const dailySalesData = [
    { day: "Mon", sales: 1200 },
    { day: "Tue", sales: 1900 },
    { day: "Wed", sales: 800 },
    { day: "Thu", sales: 1600 },
    { day: "Fri", sales: 2200 },
    { day: "Sat", sales: 2800 },
    { day: "Sun", sales: 2100 },
  ]

  const peakHoursData = [
    { time: "7-9 AM", reservations: 15 },
    { time: "9-11 AM", reservations: 25 },
    { time: "11-1 PM", reservations: 35 },
    { time: "1-3 PM", reservations: 20 },
    { time: "3-5 PM", reservations: 18 },
    { time: "5-7 PM", reservations: 30 },
    { time: "7-9 PM", reservations: 28 },
  ]

  const bestSellingItems = [
    { name: "Cappuccino", sales: 145 },
    { name: "Croissant", sales: 89 },
    { name: "Latte", sales: 132 },
    { name: "Avocado Toast", sales: 76 },
    { name: "Cold Brew", sales: 98 },
  ]

  const COLORS = ["#8B4513", "#D2B48C", "#A0522D", "#DEB887", "#CD853F"]

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials")
    }
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

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-3d bg-cream-50 border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brown-700">Today's Sales</CardTitle>
              <IndianRupee className="h-4 w-4 text-brown-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brown-900">₹2,36,301</div>
              <p className="text-xs text-sage-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="card-3d bg-cream-50 border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brown-700">Weekly Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-brown-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brown-900">342</div>
              <p className="text-xs text-sage-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="card-3d bg-cream-50 border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brown-700">Total Reservations</CardTitle>
              <Calendar className="h-4 w-4 text-brown-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brown-900">89</div>
              <p className="text-xs text-sage-600 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                This week
              </p>
            </CardContent>
          </Card>

          <Card className="card-3d bg-cream-50 border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brown-700">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-brown-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brown-900">1,247</div>
              <p className="text-xs text-sage-600 flex items-center">
                <Star className="h-3 w-3 mr-1" />
                Registered users
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="card-3d bg-cream-50 border-0">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-brown-900">Daily Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailySalesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D2B48C" />
                  <XAxis dataKey="day" stroke="#8B4513" />
                  <YAxis stroke="#8B4513" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#F5F5DC",
                      border: "1px solid #D2B48C",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#8B4513"
                    strokeWidth={3}
                    dot={{ fill: "#8B4513", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="card-3d bg-cream-50 border-0">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-brown-900">Peak Reservation Times</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={peakHoursData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ time, percent }) => `${time} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="reservations"
                  >
                    {peakHoursData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#F5F5DC",
                      border: "1px solid #D2B48C",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="card-3d bg-cream-50 border-0">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-brown-900">Best-Selling Items</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bestSellingItems}>
                <CartesianGrid strokeDasharray="3 3" stroke="#D2B48C" />
                <XAxis dataKey="name" stroke="#8B4513" />
                <YAxis stroke="#8B4513" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#F5F5DC",
                    border: "1px solid #D2B48C",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="sales" fill="#8B4513" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
