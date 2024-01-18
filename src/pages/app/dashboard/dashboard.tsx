import { Helmet } from 'react-helmet-async'

import { DayOrdersCard } from './day-orders-card'
import { MonthCanceledOrdersCard } from './month-canceled-orders-card'
import { MonthOrdersCard } from './month-orders-card'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <MonthRevenueCard />
          <MonthOrdersCard />
          <DayOrdersCard />
          <MonthCanceledOrdersCard />
        </section>

        <section className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </section>
      </div>
    </>
  )
}
