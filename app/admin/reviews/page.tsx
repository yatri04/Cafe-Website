"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, X, MessageSquare, User } from "lucide-react"

interface Review {
  id: string
  customerName: string
  customerEmail: string
  rating: number
  reviewText: string
  date: string
  status: "pending" | "approved" | "rejected"
  orderItems?: string[]
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "REV-001",
      customerName: "Sarah Johnson",
      customerEmail: "sarah.johnson@email.com",
      rating: 5,
      reviewText:
        "The best coffee in town! The atmosphere is so cozy and welcoming. I come here every morning before work. The baristas are incredibly skilled and the latte art is beautiful.",
      date: "2024-01-20",
      status: "approved",
      orderItems: ["Cappuccino", "Croissant"],
    },
    {
      id: "REV-002",
      customerName: "Mike Chen",
      customerEmail: "mike.chen@email.com",
      rating: 4,
      reviewText:
        "Amazing pastries and friendly staff. The avocado toast is incredible, and their cold brew is smooth and refreshing. Only wish they had more seating during peak hours.",
      date: "2024-01-19",
      status: "pending",
      orderItems: ["Cold Brew", "Avocado Toast"],
    },
    {
      id: "REV-003",
      customerName: "Emily Davis",
      customerEmail: "emily.davis@email.com",
      rating: 5,
      reviewText:
        "Perfect spot for working or catching up with friends. Great WiFi, comfortable seating, and excellent coffee. The blueberry muffins are to die for!",
      date: "2024-01-18",
      status: "approved",
      orderItems: ["Latte", "Blueberry Muffin"],
    },
    {
      id: "REV-004",
      customerName: "Anonymous User",
      customerEmail: "user@email.com",
      rating: 2,
      reviewText:
        "Coffee was cold when served and the service was slow. Not impressed with the quality for the price point.",
      date: "2024-01-17",
      status: "pending",
      orderItems: ["Espresso"],
    },
    {
      id: "REV-005",
      customerName: "David Wilson",
      customerEmail: "david.wilson@email.com",
      rating: 5,
      reviewText:
        "Exceptional experience! The staff went above and beyond to accommodate our large group. Food was fresh and delicious, coffee was perfect. Highly recommend!",
      date: "2024-01-16",
      status: "approved",
      orderItems: ["Cappuccino", "Croissant", "Avocado Toast"],
    },
  ])

  const updateReviewStatus = (id: string, newStatus: "approved" | "rejected") => {
    setReviews(reviews.map((review) => (review.id === id ? { ...review, status: newStatus } : review)))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const pendingReviews = reviews.filter((review) => review.status === "pending")
  const approvedReviews = reviews.filter((review) => review.status === "approved")
  const rejectedReviews = reviews.filter((review) => review.status === "rejected")

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-bold text-brown-900 mb-2">Reviews Management</h1>
        <p className="text-brown-700">Moderate and manage customer reviews</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="card-3d bg-cream-50 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-brown-600">Total Reviews</p>
                <p className="text-2xl font-bold text-brown-900">{reviews.length}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-brown-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="card-3d bg-yellow-50 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-700">Pending</p>
                <p className="text-2xl font-bold text-yellow-900">{pendingReviews.length}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="card-3d bg-green-50 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700">Approved</p>
                <p className="text-2xl font-bold text-green-900">{approvedReviews.length}</p>
              </div>
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="card-3d bg-red-50 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-700">Rejected</p>
                <p className="text-2xl font-bold text-red-900">{rejectedReviews.length}</p>
              </div>
              <X className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Reviews */}
      {pendingReviews.length > 0 && (
        <Card className="card-3d bg-cream-50 border-0 mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-brown-900 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Pending Reviews ({pendingReviews.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {pendingReviews.map((review) => (
                <div key={review.id} className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brown-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-cream-50" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brown-900">{review.customerName}</h3>
                        <p className="text-sm text-brown-600">{review.customerEmail}</p>
                        <p className="text-sm text-brown-600">{review.date}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(review.status)}>{review.status}</Badge>
                  </div>

                  <div className="flex items-center mb-3">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm text-brown-700">({review.rating}/5)</span>
                  </div>

                  <p className="text-brown-800 mb-4 leading-relaxed">{review.reviewText}</p>

                  {review.orderItems && (
                    <div className="mb-4">
                      <p className="text-sm text-brown-600 mb-2">Items ordered:</p>
                      <div className="flex flex-wrap gap-2">
                        {review.orderItems.map((item, index) => (
                          <Badge key={index} variant="outline" className="border-brown-300 text-brown-700">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <Button
                      onClick={() => updateReviewStatus(review.id, "approved")}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button onClick={() => updateReviewStatus(review.id, "rejected")} size="sm" variant="destructive">
                      <X className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Reviews */}
      <Card className="card-3d bg-cream-50 border-0">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-brown-900">All Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-sage-50 rounded-lg p-6 border border-brown-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brown-600 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-cream-50" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-900">{review.customerName}</h3>
                      <p className="text-sm text-brown-600">{review.date}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(review.status)}>{review.status}</Badge>
                </div>

                <div className="flex items-center mb-3">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-sm text-brown-700">({review.rating}/5)</span>
                </div>

                <p className="text-brown-800 mb-4 leading-relaxed">{review.reviewText}</p>

                {review.orderItems && (
                  <div className="mb-4">
                    <p className="text-sm text-brown-600 mb-2">Items ordered:</p>
                    <div className="flex flex-wrap gap-2">
                      {review.orderItems.map((item, index) => (
                        <Badge key={index} variant="outline" className="border-brown-300 text-brown-700">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {review.status === "pending" && (
                  <div className="flex space-x-3">
                    <Button
                      onClick={() => updateReviewStatus(review.id, "approved")}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button onClick={() => updateReviewStatus(review.id, "rejected")} size="sm" variant="destructive">
                      <X className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
