import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe, featuring a responsive design, dynamic product catalog, and secure payment processing.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    longDescription: "Built a full-featured e-commerce solution that helped the client increase their online sales by 150% in the first quarter after launch. The platform includes real-time inventory management, analytics dashboard, and seamless payment processing.",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for a SaaS product with real-time data visualization, user management, and comprehensive reporting features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    longDescription: "Developed a sophisticated analytics dashboard that helps SaaS businesses track key metrics, user engagement, and revenue in real-time. The solution includes customizable widgets and automated reporting capabilities.",
  },
  {
    title: "Healthcare Platform",
    description: "Homecare platform for elderly patients with remote monitoring and telehealth features and car services",
    image: "lesya-image.png",
    tags: ["Angular 18", "Node.js", "FormJS"],
    longDescription: "Created a healthcare platform that connects elderly patients with caregivers, featuring remote health monitoring, video consultations, and appointment scheduling. The platform has improved patient care and reduced hospital visits by 30%.",
  },
  {
    title: "Real Estate App",
    description: "Modern real estate platform with virtual tours, property management, and advanced search capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Three.js", "PostgreSQL", "Redis"],
    longDescription: "Developed a comprehensive real estate solution featuring 3D virtual tours, real-time notifications for new listings, and an AI-powered recommendation system.",
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
          Our Portfolio
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Explore recent projects and see how we've helped businesses solve complex problems with modern web solutions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-video relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">{project.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{project.longDescription}</p>
              {/* <Button variant="outline" asChild>
                <Link href={`/portfolio/${index}`}>
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button> */}
            </div>
          </Card>
        ))}
      </div>
      </div>
    </div>
  )
}