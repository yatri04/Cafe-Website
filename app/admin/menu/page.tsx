"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Trash2, Plus, Edit, Upload } from "lucide-react"
import Image from "next/image"

interface MenuItem {
  id: string
  name: string
  category: string
  price: number
  description: string
  image: string
  available: boolean
}

export default function MenuManagerPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Cappuccino",
      category: "Coffee",
      price: 373.50,
      description: "Rich espresso with perfectly steamed milk and latte art",
      image: "/placeholder.svg?height=200&width=200&text=Cappuccino",
      available: true,
    },
    {
      id: "2",
      name: "Croissant",
      category: "Food",
      price: 269.75,
      description: "Buttery, flaky pastry baked fresh daily",
      image: "/placeholder.svg?height=200&width=200&text=Croissant",
      available: true,
    },
    {
      id: "3",
      name: "Cold Brew",
      category: "Coffee",
      price: 311.25,
      description: "Smooth, refreshing coffee brewed cold for 12 hours",
      image: "/placeholder.svg?height=200&width=200&text=Cold+Brew",
      available: false,
    },
    {
      id: "4",
      name: "Avocado Toast",
      category: "Food",
      price: 726.25,
      description: "Multigrain bread with smashed avocado, microgreens, and sea salt",
      image: "/placeholder.svg?height=200&width=200&text=Avocado+Toast",
      available: true,
    },
  ])

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name: "",
    category: "",
    price: 0,
    description: "",
    image: "",
    available: true,
  })

  const categories = ["All", "Coffee", "Food", "Beverages"]

  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  const handleAddItem = () => {
    if (newItem.name && newItem.category && newItem.price && newItem.description) {
      const item: MenuItem = {
        id: (menuItems.length + 1).toString(),
        name: newItem.name,
        category: newItem.category,
        price: newItem.price,
        description: newItem.description,
        image:
          newItem.image || "/placeholder.svg?height=200&width=200&text=" + encodeURIComponent(newItem.name || "Item"),
        available: newItem.available ?? true,
      }
      setMenuItems([...menuItems, item])
      setNewItem({ name: "", category: "", price: 0, description: "", image: "", available: true })
      setIsDialogOpen(false)
    }
  }

  const handleEditItem = () => {
    if (editingItem) {
      setMenuItems(menuItems.map((item) => (item.id === editingItem.id ? editingItem : item)))
      setEditingItem(null)
      setIsDialogOpen(false)
    }
  }

  const handleDeleteItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id))
  }

  const toggleAvailability = (id: string) => {
    setMenuItems(menuItems.map((item) => (item.id === id ? { ...item, available: !item.available } : item)))
  }

  const openEditDialog = (item: MenuItem) => {
    setEditingItem({ ...item })
    setIsDialogOpen(true)
  }

  const openAddDialog = () => {
    setEditingItem(null)
    setNewItem({ name: "", category: "", price: 0, description: "", image: "", available: true })
    setIsDialogOpen(true)
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-4xl font-bold text-brown-900 mb-2">Menu Manager</h1>
          <p className="text-brown-700">Add, edit, and manage your café menu items</p>
        </div>
        <Button onClick={openAddDialog} className="bg-brown-600 hover:bg-brown-700 text-cream-50">
          <Plus className="h-4 w-4 mr-2" />
          Add New Item
        </Button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full ${
              selectedCategory === category
                ? "bg-brown-600 hover:bg-brown-700 text-cream-50"
                : "border-brown-600 text-brown-600 hover:bg-brown-50"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="card-3d bg-cream-50 border-0 overflow-hidden">
            <div className="relative h-48">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              <div className="absolute top-2 left-2">
                <Badge className="bg-brown-600 text-cream-50">{item.category}</Badge>
              </div>
              <div className="absolute top-2 right-2">
                <Badge variant={item.available ? "default" : "secondary"}>
                  {item.available ? "Available" : "Unavailable"}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-serif text-lg font-bold text-brown-900 mb-2">{item.name}</h3>
              <p className="text-brown-700 text-sm mb-3 line-clamp-2">{item.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-brown-600">₹{item.price.toFixed(2)}</span>
                <div className="flex items-center space-x-2">
                  <Label htmlFor={`available-${item.id}`} className="text-sm">
                    Available
                  </Label>
                  <Switch
                    id={`available-${item.id}`}
                    checked={item.available}
                    onCheckedChange={() => toggleAvailability(item.id)}
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => openEditDialog(item)}
                  size="sm"
                  variant="outline"
                  className="flex-1 border-brown-300 text-brown-700 hover:bg-brown-50"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button onClick={() => handleDeleteItem(item.id)} size="sm" variant="destructive" className="flex-1">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-brown-900">
              {editingItem ? "Edit Menu Item" : "Add New Menu Item"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="itemName" className="text-brown-700 font-medium">
                Name
              </Label>
              <Input
                id="itemName"
                value={editingItem ? editingItem.name : newItem.name}
                onChange={(e) =>
                  editingItem
                    ? setEditingItem({ ...editingItem, name: e.target.value })
                    : setNewItem({ ...newItem, name: e.target.value })
                }
                className="mt-1 border-brown-200 focus:border-brown-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="itemCategory" className="text-brown-700 font-medium">
                Category
              </Label>
              <Select
                value={editingItem ? editingItem.category : newItem.category}
                onValueChange={(value) =>
                  editingItem
                    ? setEditingItem({ ...editingItem, category: value })
                    : setNewItem({ ...newItem, category: value })
                }
              >
                <SelectTrigger className="mt-1 border-brown-200 focus:border-brown-500">
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
                value={editingItem ? editingItem.price : newItem.price}
                onChange={(e) =>
                  editingItem
                    ? setEditingItem({ ...editingItem, price: Number.parseFloat(e.target.value) })
                    : setNewItem({ ...newItem, price: Number.parseFloat(e.target.value) })
                }
                className="mt-1 border-brown-200 focus:border-brown-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="itemDescription" className="text-brown-700 font-medium">
                Description
              </Label>
              <Textarea
                id="itemDescription"
                value={editingItem ? editingItem.description : newItem.description}
                onChange={(e) =>
                  editingItem
                    ? setEditingItem({ ...editingItem, description: e.target.value })
                    : setNewItem({ ...newItem, description: e.target.value })
                }
                className="mt-1 border-brown-200 focus:border-brown-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="itemImage" className="text-brown-700 font-medium">
                Image URL
              </Label>
              <div className="flex space-x-2 mt-1">
                <Input
                  id="itemImage"
                  value={editingItem ? editingItem.image : newItem.image}
                  onChange={(e) =>
                    editingItem
                      ? setEditingItem({ ...editingItem, image: e.target.value })
                      : setNewItem({ ...newItem, image: e.target.value })
                  }
                  className="border-brown-200 focus:border-brown-500"
                  placeholder="Enter image URL or upload"
                />
                <Button variant="outline" size="icon" className="border-brown-300 text-brown-700 bg-transparent">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="itemAvailable"
                checked={editingItem ? editingItem.available : newItem.available}
                onCheckedChange={(checked) =>
                  editingItem
                    ? setEditingItem({ ...editingItem, available: checked })
                    : setNewItem({ ...newItem, available: checked })
                }
              />
              <Label htmlFor="itemAvailable" className="text-brown-700 font-medium">
                Available
              </Label>
            </div>
            <Button
              onClick={editingItem ? handleEditItem : handleAddItem}
              className="w-full bg-brown-600 hover:bg-brown-700 text-cream-50"
            >
              {editingItem ? "Update Item" : "Add Item"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
