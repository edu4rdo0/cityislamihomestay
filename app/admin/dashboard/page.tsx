"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  identityNumber?: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  roomType: string;
  specialRequest?: string;
  facilityRequest?: string;
  arrivalTime?: string;
  agreeTerms: boolean;
  agreeCancellation: boolean;
  agreePrivacy: boolean;
  createdAt: any;
}

export default function AdminDashboardPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "reservations"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Reservation[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Reservation, "id">),
      }));
      setReservations(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-7xl overflow-x-auto rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-center">
          Dashboard Admin - Reservasi Pelanggan
        </h1>

        {reservations.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada reservasi.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="border px-4 py-2">No</th>
                <th className="border px-4 py-2">Nama</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Telepon</th>
                <th className="border px-4 py-2">Alamat</th>
                <th className="border px-4 py-2">No Identitas</th>
                <th className="border px-4 py-2">Check-In</th>
                <th className="border px-4 py-2">Check-Out</th>
                <th className="border px-4 py-2">Jumlah Tamu</th>
                <th className="border px-4 py-2">Jumlah Kamar</th>
                <th className="border px-4 py-2">Tipe Kamar</th>
                <th className="border px-4 py-2">Permintaan Khusus</th>
                <th className="border px-4 py-2">Fasilitas Khusus</th>
                <th className="border px-4 py-2">Waktu Kedatangan</th>
                <th className="border px-4 py-2">S&K</th>
                <th className="border px-4 py-2">Kebijakan Batal</th>
                <th className="border px-4 py-2">Persetujuan Data</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res, index) => (
                <tr key={res.id} className="text-center hover:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{res.name}</td>
                  <td className="border px-4 py-2">{res.email}</td>
                  <td className="border px-4 py-2">{res.phone}</td>
                  <td className="border px-4 py-2">{res.address || "-"}</td>
                  <td className="border px-4 py-2">{res.identityNumber || "-"}</td>
                  <td className="border px-4 py-2">{res.checkIn}</td>
                  <td className="border px-4 py-2">{res.checkOut}</td>
                  <td className="border px-4 py-2">{res.guests}</td>
                  <td className="border px-4 py-2">{res.rooms}</td>
                  <td className="border px-4 py-2">{res.roomType}</td>
                  <td className="border px-4 py-2">{res.specialRequest || "-"}</td>
                  <td className="border px-4 py-2">{res.facilityRequest || "-"}</td>
                  <td className="border px-4 py-2">{res.arrivalTime || "-"}</td>
                  <td className="border px-4 py-2">{res.agreeTerms ? "✅" : "❌"}</td>
                  <td className="border px-4 py-2">
                    {res.agreeCancellation ? "✅" : "❌"}
                  </td>
                  <td className="border px-4 py-2">{res.agreePrivacy ? "✅" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}