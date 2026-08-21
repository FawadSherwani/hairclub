"use client";

import dynamic from "next/dynamic";
import { useBooking } from "@/lib/booking-context";

const BookingModal = dynamic(() => import("./BookingModal"), {
  loading: () => null,
});

export default function BookingModalLoader() {
  const { isOpen } = useBooking();

  if (!isOpen) return null;

  return <BookingModal />;
}
