import { prisma } from "@/db/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const filter = searchParams.get('filter') || 'week'
  
    const now = new Date()
    let startDate = new Date()
  
    if (filter === 'day') {
      startDate.setHours(0, 0, 0, 0)
    } else if (filter === 'week') {
      startDate.setDate(now.getDate() - now.getDay()) // start of week (Sunday)
      startDate.setHours(0, 0, 0, 0)
    } else if (filter === 'month') {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1)
    }
  
    const times = await prisma.time.findMany({
      include: { user: true },
      where: {
        start: {
          gte: startDate,
        },
      },
      orderBy: { start: 'desc' },
    })
  
    const weeklyTotals: Record<string, number> = {}
  
    const entries = times.map((t) => {
      const durationMs = new Date(t.end!).getTime() - new Date(t.start).getTime()
      const duration = Math.floor(durationMs / 60000)
  
      weeklyTotals[t.user.name] = (weeklyTotals[t.user.name] || 0) + duration
  
      return {
        user: t.user.name,
        date: new Date(t.start).toLocaleDateString('de-DE'),
        duration,
      }
    })
  
    return NextResponse.json({ entries, weeklyTotals })
  }