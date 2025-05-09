'use client'; // Add this at the top of your file

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Globe2, Laptop, Star } from "lucide-react";

export default function Home() {
  const [headingText, setHeadingText] = useState("Crafting Digital Experiences");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const phrases = [
      "Crafting Digital Experiences",
      "Building Responsive Applications",
      "Creating Scalable Solutions",
      "Innovating with Technology",
    ];

    let index = 0;
    const intervalId = setInterval(() => {
      setIsFading(true); // Start the fade-out effect
      setTimeout(() => {
        setHeadingText(phrases[index]);
        index = (index + 1) % phrases.length;
        setIsFading(false); // Start the fade-in effect
      }, 300); // Wait for 300ms (fade-out duration)
    }, 5000); // Change every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4 text-center">
          <h1
              className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none transition-opacity duration-500 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {headingText} <br />That Make an Impact
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Full-stack developer specializing in creating beautiful, performant, and accessible web applications that help businesses grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Lets Work Together</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="grid gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Comprehensive web development solutions tailored to your needs
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Globe2,
                  title: "Web Development",
                  description: "Building responsive and performant web applications using modern technologies.",
                },
                {
                  icon: Code2,
                  title: "API Development",
                  description: "Creating robust and scalable APIs to power your applications.",
                },
                {
                  icon: Laptop,
                  title: "UI/UX Design",
                  description: "Designing intuitive and beautiful user interfaces that convert.",
                },
              ].map((service, index) => (
                <Card key={index} className="flex flex-col p-6">
                  <service.icon className="h-12 w-12" />
                  <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="grid gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                A selection of my recent work for clients across different industries
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "E-commerce Platform",
                  description: "A modern e-commerce platform built with Next.js and Stripe",
                  image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
                  tags: ["Next.js", "Stripe", "Tailwind CSS"],
                },
                {
                  title: "SaaS Dashboard",
                  description: "Analytics dashboard for a SaaS product",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                  tags: ["React", "TypeScript", "Chart.js"],
                },
              ].map((project, index) => (
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
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <Button className="mt-4" variant="outline" asChild>
                      <Link href={`/portfolio/${index}`}>
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="grid gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                What clients say about working with me
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart",
                  content: "Working with John was a game-changer for our business. His attention to detail and technical expertise helped us launch our product ahead of schedule.",
                },
                {
                  name: "Michael Chen",
                  role: "Founder, DesignCo",
                  content: "John's ability to translate our vision into a beautiful, functional website exceeded our expectations. His communication and project management skills are top-notch.",
                },
                {
                  name: "Emily Brown",
                  role: "Marketing Director, GrowthLabs",
                  content: "The website John built for us has significantly improved our conversion rates. His understanding of both design and development made the process smooth.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex gap-1">
                      {Array(5).fill(null).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mt-4">{testimonial.content}</p>
                  </div>
                  <div className="mt-6 border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
