import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-brown-900 mb-4">Contact Us</h1>
          <p className="text-brown-700 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch with any questions, feedback, or just to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-3d bg-cream-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="h-6 w-6 text-brown-600" />
                  <h3 className="font-serif text-xl font-bold text-brown-900">Visit Us</h3>
                </div>
                <p className="text-brown-700 mb-2">123 Coffee Street</p>
                <p className="text-brown-700 mb-4">Downtown District, City 12345</p>
                <Button className="bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full">Get Directions</Button>
              </CardContent>
            </Card>

            <Card className="card-3d bg-cream-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="h-6 w-6 text-brown-600" />
                  <h3 className="font-serif text-xl font-bold text-brown-900">Call Us</h3>
                </div>
                <p className="text-brown-700 mb-2">(555) 123-BREW</p>
                <p className="text-brown-600 text-sm">Available during business hours</p>
              </CardContent>
            </Card>

            <Card className="card-3d bg-cream-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="h-6 w-6 text-brown-600" />
                  <h3 className="font-serif text-xl font-bold text-brown-900">Email Us</h3>
                </div>
                <p className="text-brown-700 mb-1">hello@brewandbloom.com</p>
                <p className="text-brown-700 mb-1">reservations@brewandbloom.com</p>
                <p className="text-brown-600 text-sm">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="card-3d bg-cream-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
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
          </div>

          {/* Map */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brew & Bloom Café Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
