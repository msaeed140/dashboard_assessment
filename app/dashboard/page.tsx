"use client";

import {
  Home,
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import LowStockAlerts from "@/components/ui/low_stocks";
import SalesStatistics from "@/components/ui/sales_statistics";
import StatisticsCard from "@/components/ui/top_selling";
import RecentOrders from "@/components/ui/recent_orders";
import Header from "@/components/commonComponents/header";
import { ResponsiveSalesChart } from "@/components/ui/responsiveSalesChart";
import HeaderTitle from "@/components/commonComponents/headerTitle";

const ChartFilter = ({ options }: { options: string[] }) => (
  <div className="flex gap-2">
    {options.map((option) => (
      <button
        key={option}
        className="rounded-md px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 first:bg-gray-100 first:text-gray-900"
      >
        {option}
      </button>
    ))}
  </div>
);

// Sample data for the line chart
const salesData = [
  { month: "Feb", sales: 12000 },
  { month: "Mar", sales: 15000 },
  { month: "Apr", sales: 18000 },
  { month: "May", sales: 16000 },
  { month: "Jun", sales: 21000 },
  { month: "Jul", sales: 19000 },
  { month: "Aug", sales: 23000 },
  { month: "Sep", sales: 25000 },
  { month: "Oct", sales: 28000 },
  { month: "Nov", sales: 30000 },
  { month: "Dec", sales: 35000 },
  { month: "Jan", sales: 32000 },
];

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      {/* <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white">
        <div className="flex h-16 items-center gap-2 border-b px-4">
          <Image
            src="/site_logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-xl font-semibold">Halagaty</span>
        </div>
        <nav className="space-y-1 p-4">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg bg-red-50 px-4 py-2 text-red-600"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
          >
            <ShoppingBag className="h-5 w-5" />
            Purchases
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
          >
            <Package className="h-5 w-5" />
            Products
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
          >
            <ShoppingCart className="h-5 w-5" />
            Order
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
          >
            <Users className="h-5 w-5" />
            Customers
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
          >
            <ShoppingBag className="h-5 w-5" />
            Shop
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
          >
            <Settings className="h-5 w-5" />
            Settings
          </a>
        </nav>
      </aside> */}
      <div className="relative">
        {/* Mobile menu button */}
        <button
          className="fixed top-4 left-4 z-50 flex items-center gap-2 rounded bg-gray-100 p-2 shadow md:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="h-6 w-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          Menu
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white transition-transform duration-300 md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center gap-2 border-b px-4">
            <Image
              src="/site_logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-semibold">Halagaty</span>
          </div>
          <nav className="space-y-1 p-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg bg-red-50 px-4 py-2 text-red-600"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
            >
              <ShoppingBag className="h-5 w-5" />
              Purchases
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
            >
              <Package className="h-5 w-5" />
              Products
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
            >
              <ShoppingCart className="h-5 w-5" />
              Order
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
            >
              <Users className="h-5 w-5" />
              Customers
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
            >
              <ShoppingBag className="h-5 w-5" />
              Shop
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50"
            >
              <Settings className="h-5 w-5" />
              Settings
            </a>
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </div>

      <main className="ml-64 p-8 pt-0 pl-0">
        
        <Header />
        <HeaderTitle />

        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pl-8">
          <Card className="p-6">
            <div className="text-sm font-medium text-gray-500">TODAY SALES</div>
            <div className="mt-2 flex items-baseline justify-between">
              <div className="text-2xl font-semibold">$12,426</div>
              <div className="text-sm font-medium text-green-500">+36%</div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-medium text-gray-500">TOTAL SALES</div>
            <div className="mt-2 flex items-baseline justify-between">
              <div className="text-2xl font-semibold">$2,38,485</div>
              <div className="text-sm font-medium text-red-500">+14%</div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-medium text-gray-500">TOTAL ORDER</div>
            <div className="mt-2 flex items-baseline justify-between">
              <div className="text-2xl font-semibold">84,382</div>
              <div className="text-sm font-medium text-green-500">+36%</div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-medium text-gray-500">
              TOTAL CUSTOMERS
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <div className="text-2xl font-semibold">33,493</div>
              <div className="text-sm font-medium text-green-500">+36%</div>
            </div>
          </Card>
        </div>

        {/* Charts and Top Selling Products Section */}
        <div className="mb-8 grid gap-6 lg:grid-cols-3 pl-8">
          {/* Sales Report */}
          <Card className="lg:col-span-2 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">Sales Report</h3>
              <ChartFilter
                options={["12 Months", "6 Months", "30 Days", "7 Days"]}
              />
            </div>
            <ResponsiveSalesChart data={salesData} />
          </Card>

          <LowStockAlerts />
        </div>

        {/* Bottom Section */}
        <div className="grid gap-6 lg:grid-cols-2 pl-8">
          <SalesStatistics />

          <StatisticsCard />
        </div>
        <RecentOrders />
      </main>
    </div>
  );
}
