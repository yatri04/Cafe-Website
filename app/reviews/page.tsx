"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

const existingReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Absolutely love this place! The coffee is exceptional and the atmosphere is so cozy. I come here every morning before work and the staff always remembers my order. The avocado toast is also incredible!",
  },
  {
    id: 2,
    name: "Mohak Aggarwal",
    rating: 5,
    date: "2024-01-12",
    comment:
      "Best café in the neighborhood! Amazing pastries, friendly staff, and the latte art is beautiful. Perfect spot for working or meeting friends. Highly recommend the blueberry scones!",
  },
  {
    id: 3,
    name: "Pooja Pathak",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Great coffee and comfortable seating. WiFi is reliable which makes it perfect for remote work. The only downside is it can get quite busy during peak hours, but that's a testament to how good it is!",
  },
  {
    id: 4,
    name: "Swara Jariwala",
    rating: 5,
    date: "2024-01-08",
    comment:
      "The cold brew here is phenomenal! Staff is incredibly friendly and knowledgeable about their coffee. The interior design creates such a warm, welcoming atmosphere. Will definitely be back!",
  },
  {
    id: 5,
    name: "Yatri Dungarani",
    rating: 5,
    date: "2024-01-05",
    comment:
      "My favorite local café! The quality of ingredients is top-notch and you can taste the difference. The croissants are buttery perfection and the cappuccinos are consistently excellent.",
  },
  {
    id: 6,
    name: "Aarav Patel",
    rating: 4,
    date: "2024-01-03",
    comment:
      "Solid coffee shop with great ambiance. The baristas are skilled and the menu has good variety. Prices are reasonable for the quality. The outdoor seating is a nice touch when weather permits.",
  },
]

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(existingReviews)
  const [showForm, setShowForm] = useState(false)
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  })

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (newReview.rating === 0) {
      alert("Please select a rating")
      return
    }

    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      date: new Date().toISOString().split("T")[0],
      comment: newReview.comment,
    }

    setReviews([review, ...reviews])
    setNewReview({ name: "", rating: 0, comment: "" })
    setShowForm(false)
    alert("Thank you for your review!")
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-brown-900 mb-4">Customer Reviews</h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-brown-700 text-lg font-medium">
              {averageRating.toFixed(1)} out of 5 ({reviews.length} reviews)
            </span>
          </div>
          <p className="text-brown-700 text-lg max-w-2xl mx-auto">
            See what our customers are saying about their Brew & Bloom experience
          </p>
        </div>

        {/* Add Review Button */}
        <div className="text-center mb-8">
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full px-8 py-3"
          >
            {showForm ? "Cancel" : "Leave a Review"}
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <Card className="card-3d bg-cream-50 border-0 mb-8">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-brown-900">Share Your Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <Label htmlFor="reviewName" className="text-brown-700 font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="reviewName"
                    value={newReview.name}
                    onChange={(e) => setNewReview((prev) => ({ ...prev, name: e.target.value }))}
                    className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                    required
                  />
                </div>

                <div>
                  <Label className="text-brown-700 font-medium">Rating</Label>
                  <div className="flex space-x-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview((prev) => ({ ...prev, rating: star }))}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 transition-colors ${
                            star <= newReview.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300 hover:text-yellow-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="reviewComment" className="text-brown-700 font-medium">
                    Your Review
                  </Label>
                  <Textarea
                    id="reviewComment"
                    value={newReview.comment}
                    onChange={(e) => setNewReview((prev) => ({ ...prev, comment: e.target.value }))}
                    className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500 min-h-[120px]"
                    placeholder="Tell us about your experience at Brew & Bloom..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full py-3"
                >
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <Card key={review.id} className="card-3d bg-cream-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brown-900">{review.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-brown-600 text-sm">{review.rating}/5</span>
                    </div>
                  </div>
                  <span className="text-brown-500 text-sm">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p className="text-brown-700 leading-relaxed italic">"{review.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
