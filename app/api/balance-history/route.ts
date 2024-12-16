import { NextResponse } from 'next/server'
function getRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export async function GET() {
  const min = 100
  const max = 1000

  const balanceHistory = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: new Date(0, i).toLocaleString('en', { month: 'short' }),
    value: getRandomValue(min, max),
  }))

  const response = NextResponse.json(balanceHistory)
  response.headers.set('Cache-Control', 'no-store')

  return response
}
