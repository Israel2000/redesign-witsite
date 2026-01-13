import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
    <div className="container mx-auto px-4 mt-16 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">Technologies We Work With</h2>

      <div className="relative w-full overflow-hidden bg-gradient-to-r from-white via-slate-50 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-600 py-12">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-800 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-800 to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-20 animate-slide w-max px-4">
          {/* Logos - duplicated for smooth infinite loop */}
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="squarespace.png" alt="Squarespace" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="wix.png" alt="Wix" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="angular_wordmark_white.png" alt="Angular" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="wordpress.png" alt="WordPress" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="shopify (1).png" alt="Shopify" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="js.png" alt="JavaScript" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>

          {/* Repeat for seamless loop */}
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="squarespace.png" alt="Squarespace" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="wix.png" alt="Wix" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="angular_wordmark_white.png" alt="Angular" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="wordpress.png" alt="WordPress" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="shopify (1).png" alt="Shopify" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="js.png" alt="JavaScript" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>

          {/* Third repeat for smoother animation */}
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="squarespace.png" alt="Squarespace" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="wix.png" alt="Wix" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="angular_wordmark_white.png" alt="Angular" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="wordpress.png" alt="WordPress" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="shopify (1).png" alt="Shopify" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="js.png" alt="JavaScript" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width={80} height={80} className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </div>




      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Israel B.</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Full-stack developer crafting modern web experiences that drive business growth and user engagement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/Israel2000" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </Link>
              {/* <Link href="https://twitter.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                <Twitter className="h-6 w-6" />
              </Link> */}
              <Link href="https://www.linkedin.com/in/ib2000/" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:team.webinnovativetech@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-center text-sm text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} Israel B. Web Innovative Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}