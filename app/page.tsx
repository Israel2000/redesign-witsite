/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Globe2, Laptop, Star, Phone } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

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
      setIsFading(true);
      setTimeout(() => {
        setHeadingText(phrases[index]);
        index = (index + 1) % phrases.length;
        setIsFading(false);
      }, 300);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1
              className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl transition-opacity duration-500 ${
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

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-3xl mx-auto bg-gray-100 rounded-xl p-8 shadow-2xl relative">
          {/* Phone image on top of box */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
        <Image
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=80"
          alt="Phone"
          width={100}
          height={200}
          className="rounded-2xl shadow-lg border-4 border-white"
          priority
        />
          </div>
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4 mt-16 md:mt-0">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ color: "black" }}>Book a Call</h2>
        <p className="mx-auto md:mx-0 max-w-[700px] text-muted-foreground md:text-xl">
          Schedule a call with me to discuss your project needs and how I can help.
        </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
        <h2 style={{ color: "black" }}>Quick Text</h2>
        <Button size="lg" variant="outline" asChild>
          <a href="tel:9707160788" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            970-716-0788
          </a>
        </Button>
          </div>
        </div>
        {/* 
        <div className="w-full max-w-4xl mx-auto h-[700px] overflow-scroll rounded-xl shadow-md border p-4 bg-white mt-8">
          <Cal
        namespace="30min"
        calLink="https://cal.com/israel-belete-webinnovativetech/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
          />
        </div>
        */}
      </section>

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
          icon: Code2,
          title: "Web Design",
          description: "Building responsive and performant web applications using modern technologies.",
            },
            {
          icon: Globe2,
          title: "Social Media Marketing",
          description: "Creating robust and scalable APIs to power your applications.",
            },
            {
          // Custom SVG icon for Graphic Design
          icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <path d="M7 7l10 10" />
          </svg>
          ),
          title: "Graphic Design",
          description: "Designing intuitive and beautiful user interfaces that convert.",
            },
            ].map((service, index) => (
            <Card key={index} className="flex flex-col p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-0">
          <div className="flex flex-col items-center gap-3">
          <service.icon className="h-12 w-12" />
          <h3 className="text-xl font-bold">{service.title}</h3>
          </div>
          <p className="mt-2 text-muted-foreground">{service.description}</p>
            </Card>
            ))}
        </div>
          </div>
        </div>
      </section>

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
        <Card
          key={index}
          className="relative group overflow-visible bg-gradient-to-br from-white via-gray-50 to-gray-100 border-0 shadow-xl rounded-3xl p-0 transition-all duration-300"
        >
          {/* Decorative border box */}
          <div className="absolute inset-0 rounded-3xl border-4 border-transparent transition-all duration-300 pointer-events-none z-10" />
          {/* Image with floating effect */}
          <div className="relative -mt-8 mx-auto w-[90%] rounded-2xl shadow-lg overflow-hidden z-20">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="object-cover w-full h-48 transition-transform duration-300"
        />
          </div>
          {/* Content box */}
          <div className="p-8 pt-12 flex flex-col items-center relative z-30">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="mb-4 text-muted-foreground text-center">{project.description}</p>
        <div className="flex gap-2 flex-wrap justify-center mb-4">
          {project.tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="px-3 py-1 rounded-full text-xs">
          {tag}
        </Badge>
          ))}
        </div>
        <Button className="mt-2" variant="outline" asChild>
          <Link href={`/portfolio/${index}`}>
        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
          </div>
          {/* Subtle shadow under the card */}
          <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-3/4 h-6 bg-blue-100 opacity-40 blur-lg rounded-full z-0" />
        </Card>
          ))}
        </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="grid gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            What clients say about working with me
          </p>
        </div>
        <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* TestimonialSlider component */}
      {/*
        Place this component at the bottom of your file or in a separate file and import it.
      */}
    </div>
  );
}

function TestimonialSlider() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Working with Israel was a game-changer for our business. His attention to detail and technical expertise helped us launch our product ahead of schedule.",
    },
    {
      name: "David Lee",
      role: "CTO, FinEdge",
      content:
        "Israel is a true professional. His code is clean, well-documented, and easy to maintain. Highly recommended!",
    },
    {
      name: "Emily Chen",
      role: "Product Manager, HealthSync",
      content:
        "Israel delivered beyond our expectations. Communication was smooth and the results were fantastic.",
    },
  ];

  const [current, setCurrent] = React.useState(0);

  // Auto-advance every 6 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full max-w-xl mx-auto">
        <Card className="p-8 shadow-xl transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl min-h-[220px] flex flex-col justify-center items-center">
          <div className="flex items-center gap-4 mb-4">
            <Star className="h-6 w-6 text-yellow-500" />
            <div>
              <p className="font-bold">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </div>
          <p className="mt-2 text-muted-foreground text-lg text-center italic">
            "{testimonials[current].content}"
          </p>
        </Card>
      </div>
      <div className="flex gap-2 mt-6 justify-center">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}