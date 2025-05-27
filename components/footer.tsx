import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>

      <div className="relative w-full overflow-hidden flex justify-center">
        <div className="flex gap-16 animate-slide w-max">
          {/* Logos - duplicated for smooth infinite loop */}
          <Image src="squarespace.png" alt="Squarespace" width={64} height={64} className="h-16 w-auto" />
          <Image src="wix.png" alt="Wix" width={64} height={64} className="h-16 w-auto" />
          <Image src="angular_wordmark_white.png" alt="WordPress" width={64} height={64} className="h-16 w-auto" />
          <Image src="wordpress.png" alt="Squarespace" width={64} height={64} className="h-16 w-auto" />
          <Image src="shopify (1).png" alt="Squarespace" width={64} height={64} className="h-16 w-auto" />
          <Image src="js.png" alt="Squarespace" width={64} height={64} className="h-16 w-auto" />

          {/* Repeat */}
          <Image src="squarespace.png" alt="Squarespace" width={64} height={64} className="h-16 w-auto" />
          <Image src="wix.png" alt="Wix" width={64} height={64} className="h-16 w-auto" />
          <Image src="angular_wordmark_white.png" alt="WordPress" width={64} height={64} className="h-16 w-auto" />
           <Image src="wordpress.png" alt="Squarespace" width={64} height={64} className="h-16 w-auto" />
          <Image src="shopify (1).png" alt="Squarespace" width={64} height={64} className="h-16 w-auto" />
          <Image src="js.png" alt="Squarespace" width={64} height={64} className="h-16 w-auto" />
        </div>
      </div>
    </div>




      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Israel B.</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Full-stack developer crafting modern web experiences
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="https://github.com/Israel2000" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              {/* <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link> */}
              <Link href="https://www.linkedin.com/in/ib2000/" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:team.webinnovativetech@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Israel B. Web Innovative Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}