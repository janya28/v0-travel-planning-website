"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Plus, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function NewTripPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [activities, setActivities] = useState([{ id: 1, type: "", description: "", date: "", time: "" }])

  const addActivity = () => {
    const newId = activities.length > 0 ? Math.max(...activities.map((a) => a.id)) + 1 : 1
    setActivities([...activities, { id: newId, type: "", description: "", date: "", time: "" }])
  }

  const removeActivity = (id: number) => {
    setActivities(activities.filter((activity) => activity.id !== id))
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center space-x-2">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Create New Trip</h2>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 1 ? "bg-green-600 text-white" : "border"}`}
                >
                  1
                </div>
                <span className="text-sm font-medium">Basic Info</span>
              </div>
              <div className="h-px w-12 bg-muted"></div>
              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 2 ? "bg-green-600 text-white" : "border"}`}
                >
                  2
                </div>
                <span className="text-sm font-medium">Accommodations</span>
              </div>
              <div className="h-px w-12 bg-muted"></div>
              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 3 ? "bg-green-600 text-white" : "border"}`}
                >
                  3
                </div>
                <span className="text-sm font-medium">Training & Nutrition</span>
              </div>
              <div className="h-px w-12 bg-muted"></div>
              <div className="flex items-center space-x-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 4 ? "bg-green-600 text-white" : "border"}`}
                >
                  4
                </div>
                <span className="text-sm font-medium">Review</span>
              </div>
            </div>
          </div>

          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Trip Details</CardTitle>
                <CardDescription>Enter the basic information about your trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="trip-name">Trip Name</Label>
                  <Input id="trip-name" placeholder="e.g. Boston Marathon 2023" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input id="destination" placeholder="e.g. Boston, MA, USA" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trip-type">Trip Type</Label>
                  <Select>
                    <SelectTrigger id="trip-type">
                      <SelectValue placeholder="Select trip type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="competition">Competition</SelectItem>
                      <SelectItem value="training">Training Camp</SelectItem>
                      <SelectItem value="both">Competition & Training</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Associated Event (Optional)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boston-marathon">Boston Marathon</SelectItem>
                      <SelectItem value="chicago-half">Chicago Half Marathon</SelectItem>
                      <SelectItem value="boulder-camp">Boulder Training Camp</SelectItem>
                      <SelectItem value="none">No Associated Event</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Any additional notes about this trip" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" disabled>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Accommodations</CardTitle>
                <CardDescription>Add your accommodation details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="accommodation-name">Accommodation Name</Label>
                  <Input id="accommodation-name" placeholder="e.g. Athlete's Haven Hotel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accommodation-address">Address</Label>
                  <Input id="accommodation-address" placeholder="Full address" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="check-in">Check-in Date</Label>
                    <Input id="check-in" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-out">Check-out Date</Label>
                    <Input id="check-out" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Amenities (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="gym" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="gym" className="text-sm">
                        Gym/Fitness Center
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="pool" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="pool" className="text-sm">
                        Swimming Pool
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="kitchen" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="kitchen" className="text-sm">
                        Kitchen
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="athlete-menu" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="athlete-menu" className="text-sm">
                        Athlete Menu
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="recovery" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="recovery" className="text-sm">
                        Recovery Facilities
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="wifi" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="wifi" className="text-sm">
                        Free Wi-Fi
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accommodation-notes">Notes</Label>
                  <Textarea id="accommodation-notes" placeholder="Any additional notes about your accommodation" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Training & Nutrition</CardTitle>
                <CardDescription>Plan your training and nutrition for this trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Training Facilities</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="facility-1">Facility #1</Label>
                      <Input id="facility-1" placeholder="e.g. Hotel Gym" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="facility-1-address">Address</Label>
                      <Input id="facility-1-address" placeholder="Address of facility" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="facility-1-notes">Notes</Label>
                      <Textarea id="facility-1-notes" placeholder="Hours, equipment available, etc." />
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Plus className="mr-2 h-4 w-4" /> Add Another Facility
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Training Schedule</h3>
                  <div className="space-y-4">
                    {activities.map((activity, index) => (
                      <div key={activity.id} className="space-y-4 p-4 border rounded-md">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Activity #{index + 1}</h4>
                          {activities.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeActivity(activity.id)}
                              className="h-8 w-8 p-0"
                            >
                              <Trash2 className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Activity Type</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="run">Run</SelectItem>
                                <SelectItem value="swim">Swim</SelectItem>
                                <SelectItem value="bike">Bike</SelectItem>
                                <SelectItem value="strength">Strength Training</SelectItem>
                                <SelectItem value="recovery">Recovery</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Date</Label>
                            <Input type="date" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea placeholder="e.g. Easy 5 mile run, 45 min strength training, etc." />
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={addActivity}>
                      <Plus className="mr-2 h-4 w-4" /> Add Activity
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Nutrition</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Nutrition Plan</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="competition">Competition Plan</SelectItem>
                          <SelectItem value="training">Training Plan</SelectItem>
                          <SelectItem value="recovery">Recovery Plan</SelectItem>
                          <SelectItem value="custom">Custom Plan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nutrition-notes">Notes</Label>
                      <Textarea id="nutrition-notes" placeholder="Special dietary requirements, meal timing, etc." />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Review Your Trip</CardTitle>
                <CardDescription>Review all details before creating your trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Trip Details</h3>
                  <div className="rounded-md border p-4">
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Trip Name</dt>
                        <dd className="text-sm">Boston Marathon 2023</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Destination</dt>
                        <dd className="text-sm">Boston, MA, USA</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Dates</dt>
                        <dd className="text-sm">April 15-18, 2023</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Trip Type</dt>
                        <dd className="text-sm">Competition</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Associated Event</dt>
                        <dd className="text-sm">Boston Marathon</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Accommodation</h3>
                  <div className="rounded-md border p-4">
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Name</dt>
                        <dd className="text-sm">Athlete's Haven Hotel</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Address</dt>
                        <dd className="text-sm">123 Marathon St, Boston, MA</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Check-in/out</dt>
                        <dd className="text-sm">April 15 - April 18, 2023</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Amenities</dt>
                        <dd className="text-sm">Gym, Athlete Menu, Recovery Facilities, Wi-Fi</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Training & Nutrition</h3>
                  <div className="rounded-md border p-4">
                    <h4 className="text-sm font-medium mb-2">Training Facilities</h4>
                    <p className="text-sm mb-4">Hotel Gym, Boston Common (running)</p>

                    <h4 className="text-sm font-medium mb-2">Training Schedule</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="text-sm">April 15: Easy 3 mile run (Recovery from travel)</li>
                      <li className="text-sm">April 16: Light 2 mile jog + stretching</li>
                      <li className="text-sm">April 17: Boston Marathon</li>
                      <li className="text-sm">April 18: Recovery</li>
                    </ul>

                    <h4 className="text-sm font-medium mb-2">Nutrition Plan</h4>
                    <p className="text-sm">Competition Plan</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">Create Trip</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
