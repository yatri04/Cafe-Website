"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Phone, Mail, Check, X } from "lucide-react"

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([
    {
      id: "RES-001",
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "(555) 123-4567",
      date: "2024-01-22",
      time: "10:00 AM",
      party: 4,
      status: "confirmed",
      specialRequests: "Window table preferred",
    },
    {
      id: "RES-002",
      name: "David Brown",
      email: "david.brown@email.com",
      phone: "(555) 987-6543",
      date: "2024-01-22",
      time: "2:00 PM",
      party: 2,
      status: "pending",
      specialRequests: "Anniversary celebration",
    },
    {
      id: "RES-003",
      name: "Lisa Garcia",
      email: "lisa.garcia@email.com",
      phone: "(555) 456-7890",
      date: "2024-01-23",
      time: "9:00 AM",
      party: 6,
      status: "confirmed",
      specialRequests: "Business meeting",
    },
    {
      id: "RES-004",
      name: "Michael Chen",
      email: "michael.chen@email.com",
      phone: "(555) 321-0987",
      date: "2024-01-23",
      time: "7:00 PM",
      party: 3,
      status: "pending",
      specialRequests: "High chair needed",
    },
  ])

  const updateReservationStatus = (id: string, newStatus: string) => {
    setReservations(reservations.map((res) => (res.id === id ? { ...res, status: newStatus } : res)))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-bold text-brown-900 mb-2">Reservations Management</h1>
        <p className="text-brown-700">Manage table reservations and customer bookings</p>
      </div>

      <Card className="card-3d bg-cream-50 border-0">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-brown-900">Upcoming Reservations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {reservations.map((reservation) => (
              <div key={reservation.id} className="bg-sage-50 rounded-lg p-6 border border-brown-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-brown-900 text-lg">{reservation.name}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-brown-700">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">{reservation.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">{reservation.phone}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(reservation.status)} capitalize`}>{reservation.status}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-brown-700">
                    <Calendar className="h-4 w-4" />
                    <span>{reservation.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brown-700">
                    <Clock className="h-4 w-4" />
                    <span>{reservation.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brown-700">
                    <Users className="h-4 w-4" />
                    <span>Party of {reservation.party}</span>
                  </div>
                </div>

                {reservation.specialRequests && (
                  <div className="mb-4 p-3 bg-cream-100 rounded-lg">
                    <p className="text-sm text-brown-700">
                      <strong>Special Requests:</strong> {reservation.specialRequests}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm text-brown-600">ID: {reservation.id}</span>
                  <div className="flex space-x-2">
                    {reservation.status === "pending" && (
                      <>
                        <Button
                          onClick={() => updateReservationStatus(reservation.id, "confirmed")}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Confirm
                        </Button>
                        <Button
                          onClick={() => updateReservationStatus(reservation.id, "cancelled")}
                          size="sm"
                          variant="destructive"
                        >
                          <X className="h-4 w-4 mr-1" />
                          Cancel
                        </Button>
                      </>
                    )}
                    {reservation.status === "confirmed" && (
                      <Button
                        onClick={() => updateReservationStatus(reservation.id, "cancelled")}
                        size="sm"
                        variant="outline"
                        className="border-red-300 text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
