import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Filter, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Events & Competitions</h2>
          <div className="flex items-center space-x-2">
            <Link href="/events/calendar">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" /> Calendar View
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_250px]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search events..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>

            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All Events</TabsTrigger>
                <TabsTrigger value="running">Running</TabsTrigger>
                <TabsTrigger value="cycling">Cycling</TabsTrigger>
                <TabsTrigger value="triathlon">Triathlon</TabsTrigger>
                <TabsTrigger value="swimming">Swimming</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                <Card>
                  <div className="md:grid md:grid-cols-[250px_1fr]">
                    <div className="relative h-[200px] md:h-full">
                      <Image
                        src="/placeholder.svg?height=300&width=250"
                        alt="Boston Marathon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Boston Marathon</CardTitle>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            Running
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>April 17, 2023</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>Boston, MA, USA</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            The Boston Marathon is an annual marathon race hosted by several cities in greater Boston in
                            eastern Massachusetts, United States. It is traditionally held on Patriots' Day, the third
                            Monday of April.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              Marathon
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              Road Race
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              Qualifier
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">
                          <span className="font-medium">Registration:</span> Open until March 1, 2023
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
                        alt="Chicago Triathlon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Chicago Triathlon</CardTitle>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            Triathlon
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>August 27, 2023</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>Chicago, IL, USA</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            The Chicago Triathlon is the nation's largest triathlon, featuring a weekend of races for
                            athletes of all ages and abilities. The event includes Olympic and Sprint distance races.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              Olympic Distance
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              Sprint Distance
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              Urban Course
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">
                          <span className="font-medium">Registration:</span> Open until July 15, 2023
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
                        alt="Boulder Altitude Training Camp"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Boulder Altitude Training Camp</CardTitle>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                            Training Camp
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>May 10-20, 2023</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>Boulder, CO, USA</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            A 10-day high-altitude training camp for endurance athletes. Professional coaches,
                            structured workouts, and recovery sessions in the beautiful mountains of Colorado.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              Altitude Training
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              Endurance
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                              Coaching
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">
                          <span className="font-medium">Registration:</span> Limited spots available
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="running" className="space-y-4">
                <Card>
                  <div className="md:grid md:grid-cols-[250px_1fr]">
                    <div className="relative h-[200px] md:h-full">
                      <Image
                        src="/placeholder.svg?height=300&width=250"
                        alt="Boston Marathon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Boston Marathon</CardTitle>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            Running
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>April 17, 2023</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>Boston, MA, USA</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            The Boston Marathon is an annual marathon race hosted by several cities in greater Boston in
                            eastern Massachusetts, United States. It is traditionally held on Patriots' Day, the third
                            Monday of April.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">
                          <span className="font-medium">Registration:</span> Open until March 1, 2023
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
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Boston Marathon</p>
                    <p className="text-xs text-muted-foreground">April 17, 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Boulder Training Camp</p>
                    <p className="text-xs text-muted-foreground">May 10-20, 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Chicago Half Marathon</p>
                    <p className="text-xs text-muted-foreground">June 6, 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Running</span>
                  <span className="text-xs text-muted-foreground">128 events</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Cycling</span>
                  <span className="text-xs text-muted-foreground">87 events</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Triathlon</span>
                  <span className="text-xs text-muted-foreground">64 events</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Swimming</span>
                  <span className="text-xs text-muted-foreground">42 events</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Training Camps</span>
                  <span className="text-xs text-muted-foreground">35 events</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Boston, MA</span>
                  <span className="text-xs text-muted-foreground">24 events</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">New York, NY</span>
                  <span className="text-xs text-muted-foreground">32 events</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Chicago, IL</span>
                  <span className="text-xs text-muted-foreground">18 events</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Boulder, CO</span>
                  <span className="text-xs text-muted-foreground">15 events</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Los Angeles, CA</span>
                  <span className="text-xs text-muted-foreground">27 events</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
