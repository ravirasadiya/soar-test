import { NextResponse } from 'next/server'

function getUniqueRandomNumbers(min: number, max: number): number[] {
  const uniqueNumbers = new Set<number>()
  while (uniqueNumbers.size < 3) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    uniqueNumbers.add(randomNumber)
  }
  return Array.from(uniqueNumbers)
}

export async function GET() {
  const transactions = [
    {
      id: 1,
      description: 'Deposit from my Card',
      amount: -850,
      date: '28 January 2021',
      platform: 'card',
    },
    {
      id: 2,
      description: 'Deposit Paypal',
      amount: 2500,
      date: '25 January 2021',
      platform: 'paypal',
    },
    {
      id: 3,
      description: 'Jemi Wilson',
      amount: 5400,
      date: '21 January 2021',
      platform: 'other',
    },
    {
      id: 4,
      description: 'Online Shopping',
      amount: -1250,
      date: '15 February 2021',
      platform: 'card',
    },
    {
      id: 5,
      description: 'Freelance Payment',
      amount: 3750,
      date: '10 February 2021',
      platform: 'paypal',
    },
    {
      id: 6,
      description: 'Gift from Grandma',
      amount: 500,
      date: '5 February 2021',
      platform: 'other',
    },
    {
      id: 7,
      description: 'Monthly Subscription',
      amount: -75,
      date: '1 February 2021',
      platform: 'card',
    },
    {
      id: 8,
      description: 'Consulting Work',
      amount: 6200,
      date: '28 January 2021',
      platform: 'paypal',
    },
    {
      id: 9,
      description: 'Birthday Gift',
      amount: 1000,
      date: '20 January 2021',
      platform: 'other',
    },
    {
      id: 10,
      description: 'Grocery Shopping',
      amount: -350,
      date: '15 January 2021',
      platform: 'card',
    },
    {
      id: 11,
      description: 'Ebay Selling',
      amount: 450,
      date: '10 January 2021',
      platform: 'paypal',
    },
    {
      id: 12,
      description: 'Loan Repayment',
      amount: 2000,
      date: '5 January 2021',
      platform: 'other',
    },
    {
      id: 13,
      description: 'Tech Gadget Purchase',
      amount: -1500,
      date: '30 December 2020',
      platform: 'card',
    },
    {
      id: 14,
      description: 'Graphic Design Project',
      amount: 4500,
      date: '25 December 2020',
      platform: 'paypal',
    },
    {
      id: 15,
      description: 'Christmas Gift',
      amount: 750,
      date: '20 December 2020',
      platform: 'other',
    },
    {
      id: 16,
      description: 'Restaurant Dinner',
      amount: -120,
      date: '15 December 2020',
      platform: 'card',
    },
    {
      id: 17,
      description: 'Tutoring Income',
      amount: 1200,
      date: '10 December 2020',
      platform: 'paypal',
    },
    {
      id: 18,
      description: 'Family Support',
      amount: 3000,
      date: '5 December 2020',
      platform: 'other',
    },
    {
      id: 19,
      description: 'Book Purchase',
      amount: -50,
      date: '1 December 2020',
      platform: 'card',
    },
    {
      id: 20,
      description: 'Writing Gig',
      amount: 2750,
      date: '25 November 2020',
      platform: 'paypal',
    },
    {
      id: 21,
      description: 'Random Bonus',
      amount: 1500,
      date: '20 November 2020',
      platform: 'other',
    },
    {
      id: 22,
      description: 'Gas Station',
      amount: -75,
      date: '15 November 2020',
      platform: 'card',
    },
    {
      id: 23,
      description: 'Coaching Session',
      amount: 3250,
      date: '10 November 2020',
      platform: 'paypal',
    },
    {
      id: 24,
      description: 'Prize Money',
      amount: 5000,
      date: '5 November 2020',
      platform: 'other',
    },
    {
      id: 25,
      description: 'Online Course',
      amount: -250,
      date: '1 November 2020',
      platform: 'card',
    },
    {
      id: 26,
      description: 'Translation Work',
      amount: 1800,
      date: '25 October 2020',
      platform: 'paypal',
    },
    {
      id: 27,
      description: 'Rent Refund',
      amount: 2200,
      date: '20 October 2020',
      platform: 'other',
    },
    {
      id: 28,
      description: 'Coffee Shop',
      amount: -15,
      date: '15 October 2020',
      platform: 'card',
    },
    {
      id: 29,
      description: 'Web Development Gig',
      amount: 4800,
      date: '10 October 2020',
      platform: 'paypal',
    },
    {
      id: 30,
      description: 'Investment Return',
      amount: 6500,
      date: '5 October 2020',
      platform: 'other',
    },
  ]

  const indexes = getUniqueRandomNumbers(0, 29)

  return NextResponse.json([
    transactions[indexes[0]],
    transactions[indexes[1]],
    transactions[indexes[2]],
  ])
}
