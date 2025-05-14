import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Medal, Dumbbell, Utensils, Clock, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Link href="/dashboard/new-trip">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="mr-2 h-4 w-4" /> New Trip
              </Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trips">My Trips</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="training">Training Log</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Trips</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Next: Boston Marathon in 14 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                  <Medal className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">2 competitions, 3 training camps</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Training Facilities</CardTitle>
                  <Dumbbell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Saved across 4 destinations</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Nutrition Plans</CardTitle>
                  <Utensils className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Pre-competition, training, recovery</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Upcoming Trip: Boston Marathon</CardTitle>
                  <CardDescription>April 15-18, 2023</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                        <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Event Day</p>
                        <p className="text-sm text-muted-foreground">Monday, April 17, 2023 - 10:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                        <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Accommodation</p>
                        <p className="text-sm text-muted-foreground">
                          Athlete-Friendly Hotel, 0.5 miles from start line
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                        <Dumbbell className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Training Facilities</p>
                        <p className="text-sm text-muted-foreground">2 nearby running tracks, gym at hotel</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                        <Utensils className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Nutrition</p>
                        <p className="text-sm text-muted-foreground">
                          3 athlete-friendly restaurants, meal prep service available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Training Schedule</CardTitle>
                  <CardDescription>Next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                          <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Easy Run</p>
                          <p className="text-xs text-muted-foreground">Today, 6:00 AM</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium">5 miles</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                          <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Strength Training</p>
                          <p className="text-xs text-muted-foreground">Tomorrow, 4:00 PM</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium">45 min</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                          <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Long Run</p>
                          <p className="text-xs text-muted-foreground">Saturday, 7:00 AM</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium">12 miles</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                          <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Recovery</p>
                          <p className="text-xs text-muted-foreground">Sunday, 10:00 AM</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium">Rest day</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trips" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Boston Marathon</CardTitle>
                  <CardDescription>April 15-18, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Boston Marathon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Boston, MA, USA</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Medal className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Marathon Competition</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Colorado Training Camp</CardTitle>
                  <CardDescription>May 10-20, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Colorado Training"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Boulder, CO, USA</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Dumbbell className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Altitude Training</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Chicago Half Marathon</CardTitle>
                  <CardDescription>June 5-7, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Chicago Half Marathon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Chicago, IL, USA</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Medal className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Half Marathon Competition</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <div className="rounded-md border">
              <div className="p-4">
                <h3 className="text-lg font-medium">Upcoming Events</h3>
                <p className="text-sm text-muted-foreground">Events you've registered for or saved</p>
              </div>
              <div className="border-t">
                <div className="flex items-center p-4">
                  <div className="w-[60px] h-[60px] rounded-md bg-muted flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Boston Marathon</h4>
                    <p className="text-xs text-muted-foreground">April 17, 2023 - Boston, MA</p>
                    <div className="mt-1">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        Registered
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="w-[60px] h-[60px] rounded-md bg-muted flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Boulder Altitude Training Camp</h4>
                    <p className="text-xs text-muted-foreground">May 10-20, 2023 - Boulder, CO</p>
                    <div className="mt-1">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        Registered
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="w-[60px] h-[60px] rounded-md bg-muted flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Chicago Half Marathon</h4>
                    <p className="text-xs text-muted-foreground">June 6, 2023 - Chicago, IL</p>
                    <div className="mt-1">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        Registered
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="w-[60px] h-[60px] rounded-md bg-muted flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">New York City Marathon</h4>
                    <p className="text-xs text-muted-foreground">November 5, 2023 - New York, NY</p>
                    <div className="mt-1">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Saved
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <div className="border-t flex items-center p-4">
                  <div className="w-[60px] h-[60px] rounded-md bg-muted flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Winter Training Camp</h4>
                    <p className="text-xs text-muted-foreground">December 10-20, 2023 - Phoenix, AZ</p>
                    <div className="mt-1">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Saved
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Training Log</CardTitle>
                <CardDescription>Your recent training activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Long Run</h4>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Distance</span>
                        <span className="font-medium">15 miles</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Duration</span>
                        <span className="font-medium">2h 10m</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Pace</span>
                        <span className="font-medium">8:40/mile</span>
                      </div>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[85%] rounded-full bg-green-600"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">85% of weekly goal</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Strength Training</h4>
                      <span className="text-xs text-muted-foreground">3 days ago</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Focus</span>
                        <span className="font-medium">Lower Body</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Duration</span>
                        <span className="font-medium">45 minutes</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Intensity</span>
                        <span className="font-medium">Medium</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Recovery Run</h4>
                      <span className="text-xs text-muted-foreground">4 days ago</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Distance</span>
                        <span className="font-medium">5 miles</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Duration</span>
                        <span className="font-medium">45m</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs text-muted-foreground">Pace</span>
                        <span className="font-medium">9:00/mile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
