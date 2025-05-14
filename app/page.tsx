import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Medal, MapPin, Calendar, Dumbbell, Utensils, Hotel } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Travel Planning for <span className="text-green-600 dark:text-green-400">Athletes</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Plan your travel around competitions and training. Find athlete-friendly accommodations, training
                  facilities, and nutrition options.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Get Started
                  </Button>
                </Link>
                <Link href="/events">
                  <Button size="lg" variant="outline">
                    Explore Events
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=800"
              width={800}
              height={550}
              alt="Athletes traveling"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything Athletes Need</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform is designed specifically for athletes who travel for competitions and training.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Medal className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Event Search</h3>
              <p className="text-center text-muted-foreground">
                Find sports events, competitions, and training camps around the world.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Hotel className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Athlete-Friendly Accommodations</h3>
              <p className="text-center text-muted-foreground">
                Discover hotels with fitness facilities, healthy meal options, and recovery amenities.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Dumbbell className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Training Facilities</h3>
              <p className="text-center text-muted-foreground">
                Locate gyms, pools, tracks, and other training facilities at your destination.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Utensils className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Nutrition Planning</h3>
              <p className="text-center text-muted-foreground">
                Find restaurants with athlete-friendly menus and meal prep services.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Custom Itineraries</h3>
              <p className="text-center text-muted-foreground">
                Create detailed travel plans that incorporate your training and competition schedule.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Health Tracking</h3>
              <p className="text-center text-muted-foreground">
                Sync with your fitness apps to maintain training goals while traveling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Athletes</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what athletes are saying about our platform.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
              <div>
                <p className="text-lg">
                  "This platform has completely transformed how I plan my competition travel. I can focus on my
                  performance instead of logistics."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-gray-100 p-1">
                  <div className="h-10 w-10 rounded-full bg-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Olympic Swimmer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
              <div>
                <p className="text-lg">
                  "Finding gyms that meet my training needs used to be a nightmare when traveling. Not anymore!"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-gray-100 p-1">
                  <div className="h-10 w-10 rounded-full bg-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Professional Weightlifter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Elevate Your Travel Experience?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of athletes who are optimizing their travel for peak performance.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Medal className="h-6 w-6 text-green-600" />
            <p className="text-lg font-bold">AthleteTravel</p>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} AthleteTravel. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
