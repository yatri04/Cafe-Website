"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthPage() {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", loginData)
    alert("Login functionality would be implemented here")
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    console.log("Register:", registerData)
    alert("Registration functionality would be implemented here")
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl font-bold text-brown-900 mb-2">Welcome Back</h1>
          <p className="text-brown-700">Sign in to your account or create a new one</p>
        </div>

        <Card className="card-3d bg-cream-50 border-0">
          <CardContent className="p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="loginEmail" className="text-brown-700 font-medium">
                      Email
                    </Label>
                    <Input
                      id="loginEmail"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="loginPassword" className="text-brown-700 font-medium">
                      Password
                    </Label>
                    <Input
                      id="loginPassword"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                      className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full py-3 mt-6"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="registerName" className="text-brown-700 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="registerName"
                      value={registerData.name}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, name: e.target.value }))}
                      className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="registerEmail" className="text-brown-700 font-medium">
                      Email
                    </Label>
                    <Input
                      id="registerEmail"
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="registerPassword" className="text-brown-700 font-medium">
                      Password
                    </Label>
                    <Input
                      id="registerPassword"
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
                      className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword" className="text-brown-700 font-medium">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                      className="mt-1 border-brown-200 focus:border-brown-500 focus:ring-brown-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full py-3 mt-6"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-brown-600 text-sm">By signing up, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
