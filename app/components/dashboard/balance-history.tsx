'use client';

import { SpinnerContainer } from '@/components/ui/spinnerContainer';
import { useQuery } from '@/hooks/useQuery';
import { API_ENDPOINTS } from '@/lib/endpoints';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

type BalanceHistoryData = {
  name: string;
  value: number;
}[];

export function BalanceHistory() {
  const { data, error, loading } = useQuery<BalanceHistoryData>({
    url: API_ENDPOINTS.BALANCE_HISTORY,
  });

  if (loading) {
    return <SpinnerContainer />;
  }

  const chartData = data || [];

  return (
    <div className='w-full'>
      <h2 className='mb-4 text-[22px] font-semibold text-[#27364B]'>
        Balance History
      </h2>
      <div className='h-[280px] rounded-[20px] bg-white p-8'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
          >
            <defs>
              <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='50%' stopColor='#1814f3' stopOpacity={0.1} />
                <stop offset='95%' stopColor='#1814f3' stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray='3'
              vertical={false}
              stroke='#E7EEF8'
              strokeWidth={1}
            />
            <XAxis
              dataKey='name'
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6F767E', fontSize: 13 }}
              dy={10}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6F767E', fontSize: 13 }}
              tickCount={5}
              domain={[0, 800]}
              dx={0}
              tickFormatter={(value) => `${value} —`}
              width={60}
            />
            <Area
              type='monotone'
              dataKey='value'
              stroke='#1814f3'
              strokeWidth={2}
              fill='url(#colorValue)'
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
