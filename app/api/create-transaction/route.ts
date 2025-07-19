// app/api/create-transaction/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { reservationId, amount, customer } = body;

  try {
    const response = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 🛑 Penting: Autentikasi Basic dengan Server Key
        Authorization:
          "Basic " + Buffer.from(process.env.MIDTRANS_SERVER_KEY + ":").toString("base64"),
      },
      body: JSON.stringify({
        transaction_details: {
          order_id: reservationId,
          gross_amount: amount,
        },
        customer_details: {
          first_name: customer.name,
          email: customer.email,
          phone: customer.phone,
        },
        credit_card: {
          secure: true,
        },
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Midtrans Error:", result);
      return NextResponse.json({ error: result }, { status: 500 });
    }

    return NextResponse.json({ snapToken: result.token });
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json({ error: "Unexpected error occurred" }, { status: 500 });
  }
}