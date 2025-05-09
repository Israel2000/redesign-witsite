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
    description: "Telemedicine platform enabling secure video consultations, appointment scheduling, and electronic health records management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "WebRTC", "MongoDB"],
    longDescription: "Created a HIPAA-compliant telemedicine solution that facilitated over 10,000 virtual consultations in its first year. The platform includes secure video calls, prescription management, and integrated billing.",
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
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          My Portfolio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my recent projects and see how I've helped businesses solve complex problems with modern web solutions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.longDescription}</p>
              <Button variant="outline" asChild>
                <Link href={`/portfolio/${index}`}>
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}