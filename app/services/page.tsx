import { Code2, Database, Globe2, Laptop, Palette, Server } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe2,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies like React, Next.js, and TypeScript.",
      features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "Website Optimization"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Creating robust and scalable server-side solutions with Node.js, Python, and modern databases.",
      features: ["API Development", "Database Design", "Authentication Systems", "Cloud Integration"]
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end development services combining frontend and backend expertise for complete solutions.",
      features: ["System Architecture", "Full-Stack Applications", "Technical Consulting", "Code Reviews"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces that provide exceptional user experiences.",
      features: ["User Interface Design", "Responsive Design", "Design Systems", "Prototyping"]
    },
    {
      icon: Server,
      title: "DevOps & Deployment",
      description: "Setting up efficient development workflows and deploying applications to production.",
      features: ["CI/CD Pipelines", "Cloud Deployment", "Performance Monitoring", "Security Implementation"]
    },
    {
      icon: Laptop,
      title: "Technical Consultation",
      description: "Providing expert advice on technology choices, architecture, and best practices.",
      features: ["Technology Assessment", "Architecture Planning", "Team Training", "Code Audits"]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive web development solutions tailored to your business needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="p-6 flex flex-col h-full">
            <div className="mb-4">
              <service.icon className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <ul className="mt-auto space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}