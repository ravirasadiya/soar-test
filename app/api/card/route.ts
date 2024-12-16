import { NextResponse } from 'next/server';

function getUniqueRandomNumbers(min: number, max: number): number[] {
  const uniqueNumbers = new Set<number>();
  while (uniqueNumbers.size < 10) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
}

export async function GET() {
  const card = [
    {
      balance: 6423,
      name: 'Elliot Carter',
      validity: '08/25',
      number: '1234 **** *** 5678',
      type: 'credit',
    },
    {
      balance: 3890,
      name: 'Sarah Mulligan',
      validity: '10/26',
      number: '3412 **** **** 7890',
      type: 'debit',
    },
    {
      balance: 9990,
      name: 'Lila Hartmann',
      validity: '03/27',
      number: '5412 **** **** 9999',
      type: 'credit',
    },
    {
      balance: 4765,
      name: 'Marcus Miller',
      validity: '12/24',
      number: '1245 **** *** 9876',
      type: 'paypal',
    },
    {
      balance: 7896,
      name: 'Elena Petrova',
      validity: '11/28',
      number: '8765 **** **** 5432',
      type: 'credit',
    },
    {
      balance: 3241,
      name: 'Jackson King',
      validity: '01/24',
      number: '6789 **** *** 9999',
      type: 'debit',
    },
    {
      balance: 8923,
      name: 'Sophia Chen',
      validity: '04/27',
      number: '3245 **** **** 6789',
      type: 'credit',
    },
    {
      balance: 2101,
      name: "Aiden O'Brien",
      validity: '09/22',
      number: '8888 **** *** 4567',
      type: 'paypal',
    },
    {
      balance: 5632,
      name: 'Isabella Green',
      validity: '06/25',
      number: '3421 **** **** 1111',
      type: 'debit',
    },
    {
      balance: 7456,
      name: 'Noah Patterson',
      validity: '03/24',
      number: '2345 **** *** 3333',
      type: 'paypal',
    },
    {
      balance: 3654,
      name: 'Emma Johnson',
      validity: '10/26',
      number: '4123 **** **** 2345',
      type: 'credit',
    },
    {
      balance: 5789,
      name: 'Liam Anderson',
      validity: '01/23',
      number: '3333 **** *** 9012',
      type: 'paypal',
    },
    {
      balance: 9201,
      name: 'Olivia Smith',
      validity: '05/26',
      number: '5678 **** **** 8765',
      type: 'debit',
    },
    {
      balance: 2348,
      name: 'Ethan Bell',
      validity: '12/24',
      number: '4532 **** *** 3456',
      type: 'paypal',
    },
    {
      balance: 8010,
      name: 'Ava Brown',
      validity: '07/24',
      number: '7890 **** **** 5555',
      type: 'debit',
    },
    {
      balance: 4763,
      name: 'Mason Davis',
      validity: '06/25',
      number: '8765 **** *** 6789',
      type: 'paypal',
    },
    {
      balance: 6540,
      name: 'Harper Williams',
      validity: '11/28',
      number: '9900 **** **** 7890',
      type: 'credit',
    },
    {
      balance: 3110,
      name: 'Logan Moore',
      validity: '07/23',
      number: '2345 **** *** 7890',
      type: 'paypal',
    },
    {
      balance: 8790,
      name: 'Charlotte Black',
      validity: '03/26',
      number: '3456 **** **** 1111',
      type: 'credit',
    },
    {
      balance: 5687,
      name: 'Lucas Baker',
      validity: '09/24',
      number: '6789 **** *** 9999',
      type: 'paypal',
    },
    {
      balance: 2134,
      name: 'Amelia Young',
      validity: '10/23',
      number: '1234 **** **** 6789',
      type: 'debit',
    },
    {
      balance: 9987,
      name: 'Benjamin Martinez',
      validity: '01/26',
      number: '1111 **** *** 3456',
      type: 'paypal',
    },
    {
      balance: 4890,
      name: 'Mia Turner',
      validity: '06/23',
      number: '9012 **** **** 1234',
      type: 'credit',
    },
    {
      balance: 7453,
      name: 'William Collins',
      validity: '02/25',
      number: '9999 **** *** 6789',
      type: 'paypal',
    },
    {
      balance: 5432,
      name: 'Sophia Reed',
      validity: '05/24',
      number: '5678 **** **** 2345',
      type: 'debit',
    },
    {
      balance: 3998,
      name: 'James Adams',
      validity: '04/26',
      number: '8765 **** *** 5678',
      type: 'credit',
    },
    {
      balance: 6542,
      name: 'Evelyn Hill',
      validity: '07/27',
      number: '9999 **** **** 8901',
      type: 'debit',
    },
    {
      balance: 4390,
      name: 'Daniel Nelson',
      validity: '12/24',
      number: '1234 **** *** 4567',
      type: 'paypal',
    },
    {
      balance: 7895,
      name: 'Abigail Clark',
      validity: '11/26',
      number: '6789 **** **** 1234',
      type: 'credit',
    },
    {
      balance: 2398,
      name: 'Alexander Scott',
      validity: '09/24',
      number: '3456 **** *** 3456',
      type: 'paypal',
    },
  ];

  const indexes = getUniqueRandomNumbers(0, card.length - 1);

  const response = indexes.map((idx) => card[idx]);

  return NextResponse.json(response);
}
