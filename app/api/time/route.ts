import { prisma } from "@/db/prisma";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json()

    const { userId, start, end } = body

    if (!userId || !start || !end) {
        return NextResponse.json({error: 'Missing fields'}, {status: 400})
    }

    const time = await prisma.time.create({
        data: {
            userId,
            start: new Date(start),
            end: new Date(end),
        },
    })

    return NextResponse.json(time)
}