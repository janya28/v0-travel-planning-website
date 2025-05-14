import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Search, Filter, Star, Dumbbell, Utensils, Wifi } from "lucide-react"
import Image from "next/image"

export default function AccommodationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Athlete-Friendly Accommodations</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_250px]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search accommodations..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>

            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="hotels">Hotels</TabsTrigger>
                <TabsTrigger value="apartments">Apartments</TabsTrigger>
                <TabsTrigger value="resorts">Resorts</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                <Card>
                  <div className="md:grid md:grid-cols-[250px_1fr]">
                    <div className="relative h-[200px] md:h-full">
                      <Image
                        src="/placeholder.svg?height=300&width=250"
                        alt="Athlete's Haven Hotel"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Athlete's Haven Hotel</CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>Boston, MA - 0.5 miles from Marathon Start</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Designed specifically for athletes, this hotel features 24/7 gym access, in-room recovery
                            equipment, and a restaurant with athlete-focused nutrition options.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <div className="flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              <Dumbbell className="mr-1 h-3 w-3" />
                              <span>24/7 Gym</span>
                            </div>
                            <div className="flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              <Utensils className="mr-1 h-3 w-3" />
                              <span>Athlete Menu</span>
                            </div>
                            <div className="flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              <Wifi className="mr-1 h-3 w-3" />
                              <span>Free Wi-Fi</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">
                          <span className="font-medium">From $189/night</span>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="md:grid md:grid-cols-[250px_1fr]">
                    <div className="relative h-[200px] md:h-full">
                      <Image
                        src="/placeholder.svg?height=300&width=250"
                        alt="Endurance Suites"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Endurance Suites</CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>Chicago, IL - Near Grant Park</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Apartment-style suites with full kitchens for meal prep, recovery areas, and easy access to
                            running paths along Lake Michigan.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <div className="flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              <Utensils className="mr-1 h-3 w-3" />
                              <span>Full Kitchen</span>
                            </div>
                            <div className="flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              <Dumbbell className="mr-1 h-3 w-3" />
                              <span>Recovery Room</span>
                            </div>
                            <div className="flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              <Wifi className="mr-1 h-3 w-3" />
                              <span>Free Wi-Fi</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">
                          <span className="font-medium">From $159/night</span>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="md:grid md:grid-cols-[250px_1fr]">
                    <div className="relative h-[200px] md:h-full">
                      <Image
                        src="/placeholder.svg?height=300&width=250"
                        alt="Altitude Training Resort"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Altitude Training Resort</CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>Boulder, CO - 5,430 ft elevation</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Specialized resort for altitude training with on-site coaches, physiotherapy, indoor and
                            outdoor training facilities, and nutrition planning.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <div className="flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              <Dumbbell className="mr-1 h-3 w-3" />
                              <span>Training Facilities</span>
                            </div>
                            <div className="flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              <Utensils className="mr-1 h-3 w-3" />
                              <span>Nutrition Planning</span>
                            </div>
                            <div className="flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              <Wifi className="mr-1 h-3 w-3" />
                              <span>Coaching</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">
                          <span className="font-medium">From $249/night</span>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Other tab contents would be similar */}
            </Tabs>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Filter By</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Amenities</h3>
                  <div className="space-y-1">
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
                        Kitchen/Kitchenette
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="nutrition" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="nutrition" className="text-sm">
                        Athlete Nutrition
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="recovery" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="recovery" className="text-sm">
                        Recovery Facilities
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label htmlFor="min-price" className="text-xs text-muted-foreground">
                        Min
                      </label>
                      <Input id="min-price" type="number" placeholder="$0" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="max-price" className="text-xs text-muted-foreground">
                        Max
                      </label>
                      <Input id="max-price" type="number" placeholder="$500" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Rating</h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="5-star" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="5-star" className="text-sm flex items-center">
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="4-star" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="4-star" className="text-sm flex items-center">
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 text-muted-foreground" />
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="3-star" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="3-star" className="text-sm flex items-center">
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <Star className="h-3 w-3 text-muted-foreground" />
                        <Star className="h-3 w-3 text-muted-foreground" />
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Boston, MA</span>
                  <span className="text-xs text-muted-foreground">24 properties</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">New York, NY</span>
                  <span className="text-xs text-muted-foreground">32 properties</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Chicago, IL</span>
                  <span className="text-xs text-muted-foreground">18 properties</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Boulder, CO</span>
                  <span className="text-xs text-muted-foreground">15 properties</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Los Angeles, CA</span>
                  <span className="text-xs text-muted-foreground">27 properties</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
