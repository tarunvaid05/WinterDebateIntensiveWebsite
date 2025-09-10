import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/logo.png" alt="WDI Logo" width={50} height={50} className="rounded-full" />
              <div>
                <h3 className="text-2xl font-bold">Winter Debate Intensive</h3>
                <p className="text-secondary/80">Debate's First Winter Camp</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Join us for an unforgettable debate experience where excellence meets the elements. Transform your skills
              in our unique winter setting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#mission" className="text-white/80 hover:text-white transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="text-white/80 hover:text-white transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/#program" className="text-white/80 hover:text-white transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-white/80 hover:text-white transition-colors">
                  Staff
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                  Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>Winterdebateintensive@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">© 2024 Winter Debate Intensive. All rights reserved.</p>
            <p className="text-white/40 text-sm mt-1">Designed & Coded by Tarun Vaidhyanathan | © 2024</p>
        </div>
      </div>
    </footer>
  )
}
