import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function RecentOrders() {
  const orders = [
    {
      trackingNo: "#876364",
      product: {
        name: "Camera Lens",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20at%209.11.09%20PM-YKEfetvgcJTYj2lZlzohfAqE61RRNm.png",
      },
      price: "$178",
      totalOrder: "325",
      totalAmount: "$1,46,660",
    },
    {
      trackingNo: "#876364",
      product: {
        name: "Camera Lens",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20at%209.11.09%20PM-YKEfetvgcJTYj2lZlzohfAqE61RRNm.png",
      },
      price: "$178",
      totalOrder: "325",
      totalAmount: "$1,46,660",
    },
    {
      trackingNo: "#876364",
      product: {
        name: "Camera Lens",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20at%209.11.09%20PM-YKEfetvgcJTYj2lZlzohfAqE61RRNm.png",
      },
      price: "$178",
      totalOrder: "325",
      totalAmount: "$1,46,660",
    },
    {
      trackingNo: "#876364",
      product: {
        name: "Camera Lens",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20at%209.11.09%20PM-YKEfetvgcJTYj2lZlzohfAqE61RRNm.png",
      },
      price: "$178",
      totalOrder: "325",
      totalAmount: "$1,46,660",
    },
  ];

  return (
    <div className="p-6 space-y-4 pl-8">
      <div className="space-y-1">
        <h2 className="text-sm text-muted-foreground">Statistics</h2>
        <h1 className="text-2xl font-semibold">Recent Order</h1>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Tracking no</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total Order</TableHead>
            <TableHead className="text-right">Total Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{order.trackingNo}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className=" p-2 rounded-lg">
                    <Image
                      src="/camera_lens.png"
                      alt="Logo"
                      width={48}
                      height={48}
                      className="rounded"
                    />
                  </div>
                  {order.product.name}
                </div>
              </TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>
                <span className="bg-pink-50 px-3 py-1 rounded-md text-red-500">
                  {order.totalOrder}
                </span>
              </TableCell>
              <TableCell className="text-right">{order.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
