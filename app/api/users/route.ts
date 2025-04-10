import { prisma } from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        },
    })


    return NextResponse.json(users)
}