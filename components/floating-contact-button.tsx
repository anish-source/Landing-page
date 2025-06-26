"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from "lucide-react"

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("form")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setIsOpen(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+1 (555) 123-4567",
      action: () => window.open("tel:+15551234567"),
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      value: "hello@company.com",
      action: () => window.open("mailto:hello@company.com"),
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      value: "Start Chat",
      action: () => alert("Live chat would open here"),
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office",
      value: "123 Business St, City, State 12345",
      action: () => window.open("https://maps.google.com"),
    },
  ]

  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-3 px-6 py-3 h-auto bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-blue-600" />
          </div>
          <span className="text-white font-semibold text-sm">Get in Touch</span>
        </Button>
      </div>

      {/* Contact Modal/Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </CardHeader>

            <CardContent>
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab("form")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === "form" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  Contact Form
                </button>
                <button
                  onClick={() => setActiveTab("methods")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === "methods" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Phone className="h-4 w-4 inline mr-2" />
                  Contact Options
                </button>
              </div>

              {/* Contact Form Tab */}
              {activeTab === "form" && (
                <div className="space-y-4">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            <User className="h-4 w-4 inline mr-1" />
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            <Mail className="h-4 w-4 inline mr-1" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            <Phone className="h-4 w-4 inline mr-1" />
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">
                            <MessageSquare className="h-4 w-4 inline mr-1" />
                            Subject *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="How can we help?"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-[120px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              )}

              {/* Contact Methods Tab */}
              {activeTab === "methods" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactMethods.map((method, index) => (
                      <div
                        key={index}
                        onClick={method.action}
                        className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <method.icon className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900 mb-1">{method.title}</h3>
                            <p className="text-xs text-gray-500 mb-2">{method.description}</p>
                            <p className="text-sm text-blue-600 font-medium break-all">{method.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Business Hours */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="h-5 w-5 text-gray-600" />
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
