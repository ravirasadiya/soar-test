'use client';

import { SpinnerContainer } from '@/components/ui/spinnerContainer';
import { useQuery } from '@/hooks/useQuery';
import { API_ENDPOINTS } from '@/lib/endpoints';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

type WeeklyActivity = {
  name: string;
  value: number;
}[];

export function WeeklyActivity() {
  const { data, error, loading } = useQuery<WeeklyActivity>({
    url: API_ENDPOINTS.WEEKLY_ACTIVITY,
  });

  if (loading) {
    return <SpinnerContainer />;
  }

  const chartData = data || [];

  return (
    <div className='flex h-full flex-col'>
      <h2 className='mb-6 text-xl font-semibold text-[#1A1D1F]'>
        Weekly Activity
      </h2>
      <div className='rounded-[20px] bg-white p-6'>
        <div className='mb-8 flex items-center justify-end gap-8'>
          <div className='flex items-center gap-2'>
            <div className='h-3 w-3 rounded-full bg-[#2A85FF]' />
            <span className='text-sm text-[#6F767E]'>Deposit</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-3 w-3 rounded-full bg-[#1A1D1F]' />
            <span className='text-sm text-[#6F767E]'>Withdraw</span>
          </div>
        </div>
        <div className='h-72'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={chartData} barGap={12}>
              <CartesianGrid
                strokeDasharray='4'
                vertical={false}
                stroke='#E4E4E4'
              />
              <XAxis
                dataKey='name'
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6F767E', fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6F767E', fontSize: 12 }}
                tickFormatter={(value) => `${value}`}
                dx={-10}
              />
              <Bar
                dataKey='withdraw'
                fill='#1A1D1F'
                radius={[20, 20, 20, 20]}
                maxBarSize={15}
              />
              <Bar
                dataKey='deposit'
                fill='#2A85FF'
                radius={[20, 20, 20, 20]}
                maxBarSize={15}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
