import { SiteHeader } from "@/components/site-header"
import { RestaurantListClient } from "@/components/restaurant-list-client"
import { getRestaurants, getTablesByRestaurant } from "@/lib/mock-data"

export default function HomePage() {
  const restaurants = getRestaurants()
  const restaurantsWithTables = restaurants.map((r) => ({
    restaurant: r,
    tableCount: getTablesByRestaurant(r.id).length,
  }))

  const cities = [...new Set(restaurants.map((r) => r.city))].sort()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <h1 className="text-balance font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Reserve Your Table
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground leading-relaxed">
              Browse the best restaurants, check real-time availability, and book
              your table instantly.
            </p>
          </div>
        </section>

        {/* Restaurant listing */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <RestaurantListClient
            restaurantsWithTables={restaurantsWithTables}
            cities={cities}
          />
        </section>
      </main>
    </div>
  )
}
