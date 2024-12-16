import { NextResponse } from 'next/server'

export async function GET() {
  const expenseStats: Record<string, number> = {
    entertainment: 30,
    investment: 25,
    billExpenses: 35,
    others: 20,
  }

  const shuffleArray = (array: number[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  const values = Object.values(expenseStats)
  shuffleArray(values)

  const rotatedExpenseStats: Record<string, number> = Object.keys(
    expenseStats
  ).reduce(
    (acc, key, index) => {
      acc[key] = values[index]
      return acc
    },
    {} as Record<string, number>
  )

  return NextResponse.json(rotatedExpenseStats)
}
