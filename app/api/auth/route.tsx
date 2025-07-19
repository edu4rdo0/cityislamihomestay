// app/api/auth/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email dan password wajib diisi." },
        { status: 400 }
      );
    }

    console.log("Login attempt:", email);

    // TODO: Validasi user di database atau Firebase Auth di sini
    // Contoh dummy:
    const isValid = true;

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Login gagal." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login berhasil.",
      user: { email },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}