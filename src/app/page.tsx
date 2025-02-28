import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import sru from "@/app/Logo.jpg"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center space-y-6">
          <div className="w-16 h-16">
            <Image
              src={sru}
              alt="WareSys Logo"
              width={64}
              height={64}
              className="w-full h-full"
            />
          </div>
          <h1 className="text-4xl font-bold">
            Ware<span className="text-[#6C47FF]">Sys</span>
          </h1>
        </div>

        {/* Login Form */}
        <div className="mt-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Log in to your account</h2>
              <p className="mt-2 text-gray-600">Welcome back! Please enter your details.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" className="border-gray-300" />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                    Remember for 30 days
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-[#6C47FF] hover:text-[#5535FF]">
                  Forgot password
                </Link>
              </div>

              <Button className="w-full bg-[#6C47FF] hover:bg-[#5535FF] text-white">Sign in</Button>

              <Button variant="outline" className="w-full border-gray-300">
                <Image src="/google.svg" alt="Google" width={20} height={20} className="mr-2" />
                Sign in with Google
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-[#6C47FF] hover:text-[#5535FF]">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

