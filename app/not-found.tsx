import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MoveRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FB]">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#1A1D1F] mb-4">404</h1>
        <p className="text-2xl font-semibold text-[#6F767E] mb-8">Oops! Page not found</p>
        <div className="max-w-md mx-auto mb-8">
          <p className="text-[#6F767E]">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>
        <Button asChild className="bg-[#1A1D1F] text-white hover:bg-[#1A1D1F]/90 rounded-xl px-6 h-12 text-base">
          <Link href="/" className="flex items-center gap-2">
            Go to Homepage
            <MoveRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

