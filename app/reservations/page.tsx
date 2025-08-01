"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users } from "lucide-react"

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Reservation submitted:", formData)
    alert("Reservation request submitted! We'll confirm via email shortly.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-brown-900 mb-4">Reserve a Table</h1>
          <p className="text-brown-700 text-lg max-w-2xl mx-auto">
            Book your perfect spot at Brew & Bloom. We can't wait to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <Card className="card-3d bg-cream-50 border-0">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-brown-900">Make a Reservation</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-brown-700 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brown-700 font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-brown-700 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-brown-700 font-medium">
                      Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-brown-700 font-medium">
                      Time
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7:00">7:00 AM</SelectItem>
                        <SelectItem value="7:30">7:30 AM</SelectItem>
                        <SelectItem value="8:00">8:00 AM</SelectItem>
                        <SelectItem value="8:30">8:30 AM</SelectItem>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="9:30">9:30 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="10:30">10:30 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="11:30">11:30 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="12:30">12:30 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="13:30">1:30 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="14:30">2:30 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="15:30">3:30 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="16:30">4:30 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="17:30">5:30 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="18:30">6:30 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="19:30">7:30 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="partySize" className="text-brown-700 font-medium">
                    Party Size
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("partySize", value)}>
                    <SelectTrigger className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500">
                      <SelectValue placeholder="Select party size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 person</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3">3 people</SelectItem>
                      <SelectItem value="4">4 people</SelectItem>
                      <SelectItem value="5">5 people</SelectItem>
                      <SelectItem value="6">6 people</SelectItem>
                      <SelectItem value="7">7 people</SelectItem>
                      <SelectItem value="8">8 people</SelectItem>
                      <SelectItem value="9+">9+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full py-3 text-lg font-medium"
                >
                  Request Reservation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information */}
          <div className="space-y-8">
            <Card className="card-3d bg-sage-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-brown-600" />
                  <h3 className="font-serif text-xl font-bold text-brown-900">Reservation Policy</h3>
                </div>
                <ul className="space-y-2 text-brown-700">
                  <li>• Reservations are recommended, especially on weekends</li>
                  <li>• We hold tables for 15 minutes past reservation time</li>
                  <li>• For parties of 8 or more, please call us directly</li>
                  <li>• Cancellations can be made up to 2 hours in advance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-3d bg-sage-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-brown-600" />
                  <h3 className="font-serif text-xl font-bold text-brown-900">Hours</h3>
                </div>
                <div className="space-y-2 text-brown-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:30 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-3d bg-sage-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-brown-600" />
                  <h3 className="font-serif text-xl font-bold text-brown-900">Contact Us</h3>
                </div>
                <div className="space-y-2 text-brown-700">
                  <p>
                    <strong>Phone:</strong> (555) 123-BREW
                  </p>
                  <p>
                    <strong>Email:</strong> reservations@brewandbloom.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Coffee Street, Downtown District
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
