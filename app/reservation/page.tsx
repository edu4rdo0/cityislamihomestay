"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

// Tambahkan deklarasi agar TS tidak error soal window.snap
declare global {
  interface Window {
    snap: {
      pay: (token: string, options: Record<string, any>) => void;
    };
  }
}

export default function RoomReservationPage() {
  const router = useRouter();

  // Load Midtrans Snap script saat komponen dimount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || "");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [roomType, setRoomType] = useState("Standard");
  const [specialRequest, setSpecialRequest] = useState("");
  const [facilityRequest, setFacilityRequest] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeCancellation, setAgreeCancellation] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreeTerms || !agreeCancellation || !agreePrivacy) {
      alert("Anda harus menyetujui semua persyaratan.");
      return;
    }

    const reservationData = {
      name,
      email,
      phone,
      address,
      identityNumber,
      checkIn,
      checkOut,
      guests,
      rooms,
      roomType,
      specialRequest,
      facilityRequest,
      arrivalTime,
      agreeTerms,
      agreeCancellation,
      agreePrivacy,
      createdAt: serverTimestamp(),
      paid: false,
    };

    try {
      // Simpan ke Firestore
      const docRef = await addDoc(collection(db, "reservations"), reservationData);

      // Kirim request ke backend API untuk mendapatkan snapToken
      const response = await fetch("/api/create-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reservationId: docRef.id,
          amount: 500000, // Ganti sesuai harga kamar yang dinamis jika perlu
          customer: { name, email, phone },
        }),
      });

      const result = await response.json();

      if (!result.snapToken) {
        alert("Gagal mendapatkan token pembayaran.");
        return;
      }

      window.snap.pay(result.snapToken, {
        onSuccess: () => {
          alert("Pembayaran berhasil! Terima kasih.");
          router.push("/thank-you");
        },
        onPending: () => {
          alert("Pembayaran sedang diproses.");
          router.push("/thank-you");
        },
        onError: () => {
          alert("Terjadi kesalahan saat pembayaran.");
        },
        onClose: () => {
          alert("Anda menutup pembayaran sebelum menyelesaikannya.");
        },
      });
    } catch (err) {
      console.error("Error saat mengirim form:", err);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-center">
          Formulir Reservasi Homestay
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informasi Pribadi */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Informasi Pribadi Tamu</h2>
            <div className="space-y-2">
              <input type="text" placeholder="Nama Lengkap" className="w-full rounded border px-4 py-2" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Alamat Email" className="w-full rounded border px-4 py-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="phone" placeholder="Nomor Telepon" className="w-full rounded border px-4 py-2" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <input type="text" placeholder="Alamat (Opsional)" className="w-full rounded border px-4 py-2" value={address} onChange={(e) => setAddress(e.target.value)} />
              <input type="text" placeholder="Nomor Identitas (Opsional)" className="w-full rounded border px-4 py-2" value={identityNumber} onChange={(e) => setIdentityNumber(e.target.value)} />
            </div>
          </div>

          {/* Detail Reservasi */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Detail Reservasi</h2>
            <div className="space-y-2">
              <p>Wajib Diisi</p>
              <input type="date" className="w-full rounded border px-4 py-2" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
              <input type="date" className="w-full rounded border px-4 py-2" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
              <input type="number" min={1} placeholder="Jumlah Tamu" className="w-full rounded border px-4 py-2" value={guests} onChange={(e) => setGuests(Number(e.target.value))} required />
              <input type="number" min={1} placeholder="Jumlah Kamar" className="w-full rounded border px-4 py-2" value={rooms} onChange={(e) => setRooms(Number(e.target.value))} required />
              <select className="w-full rounded border px-4 py-2" value={roomType} onChange={(e) => setRoomType(e.target.value)} required>
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
                <option value="Family">Family</option>
                <option value="Superior">Superior</option>
                <option value="Executive">Executive</option>
              </select>
              <textarea placeholder="Permintaan Khusus (Opsional)" className="w-full rounded border px-4 py-2" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} />
            </div>
          </div>

          {/* Preferensi Tambahan */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Preferensi Tambahan (Opsional)</h2>
            <div className="space-y-2">
              <input type="text" placeholder="Permintaan Fasilitas Khusus" className="w-full rounded border px-4 py-2" value={facilityRequest} onChange={(e) => setFacilityRequest(e.target.value)} />
              <input type="text" placeholder="Waktu Kedatangan" className="w-full rounded border px-4 py-2" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />
            </div>
          </div>

          {/* Konfirmasi & Persetujuan */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Konfirmasi & Persetujuan</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
                Saya menyetujui syarat & ketentuan.
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={agreeCancellation} onChange={(e) => setAgreeCancellation(e.target.checked)} />
                Saya memahami kebijakan pembatalan.
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={agreePrivacy} onChange={(e) => setAgreePrivacy(e.target.checked)} />
                Saya menyetujui penggunaan data pribadi.
              </label>
            </div>
          </div>

          <button type="submit" className="w-full rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">
            Lanjut Bayar Reservasi
          </button>
        </form>
      </div>
    </main>
  );
}