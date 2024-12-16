import { NextResponse } from 'next/server';

function getUniqueRandomNumbers(min: number, max: number): number[] {
  const uniqueNumbers = new Set<number>();
  while (uniqueNumbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
}

export async function GET() {
  const users = [
    { name: 'Livia Bator', role: 'CEO', image: '/images/profile2.png' },
    { name: 'Randy Press', role: 'Director', image: '/images/profile3.png' },
    { name: 'Workman', role: 'Designer', image: '/images/profile4.png' },
    { name: 'Workman', role: 'Designer', image: '/images/profile5.png' },
    { name: 'Workman', role: 'Designer', image: '/images/profile6.png' },
  ];

  return NextResponse.json(users);
}
