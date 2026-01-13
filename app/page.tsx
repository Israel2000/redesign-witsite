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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Professional Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center gap-6 text-center">
              <h1
                className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl transition-opacity duration-500 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-200 dark:to-slate-100 bg-clip-text text-transparent ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              >
                {headingText} <br />That Make an Impact
              </h1>
              <p className="mx-auto max-w-[800px] text-lg text-slate-600 dark:text-slate-300 md:text-xl leading-relaxed">
                Full-stack developer specializing in creating beautiful, performant, and accessible web applications that help businesses grow and thrive in the digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="/contact">Let's Work Together</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300" asChild>
                  <Link href="/portfolio">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Card Section */}
      <section className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-4xl mx-auto bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-800 dark:via-slate-800/95 dark:to-blue-900/30 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative border-2 border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm group">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          {/* Phone image on top of box */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl blur-lg opacity-50"></div>
          <Image
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=80"
            alt="Phone"
            width={100}
            height={200}
            className="relative rounded-2xl shadow-2xl border-4 border-white dark:border-slate-700 transform transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
          </div>
          
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-5 mt-20 md:mt-0 flex-1">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-12 bg-gradient-to-b from-teal-600 to-blue-600 rounded-full"></span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 bg-clip-text text-transparent animate-pulse">Book a Call</h2>
        </div>
        <p className="mx-auto md:mx-0 max-w-[500px] text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Schedule a call with me to discuss your project needs and how I can help bring your vision to life.
        </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
        <h2 className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-widest uppercase">Contact Now</h2>
        <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg shadow-lg font-semibold">
          <Phone className="h-5 w-5" />
          <span>970-716-0788</span>
        </div>
          </div>
        </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <div className="grid gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">Services</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-slate-600 dark:text-slate-300 text-lg">
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
            <Card key={index} className="flex flex-col p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500">
          <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl">
            <service.icon className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{service.title}</h3>
          </div>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-center">{service.description}</p>
            </Card>
            ))}
        </div>
          </div>          </div>        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <div className="grid gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-slate-600 dark:text-slate-300 text-lg">
        A selection of my recent work for clients across different industries
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[
        {
          title: "Imported Coffee Sale",
          description: "A modern e-commerce platform built with Angular 19, NodeJS and Stripe",
          image: "titus-image.png",
          tags: ["Angular 19", "NodeJS", "Stripe", "Bootstrap5"],
        },
        {
          title: "Personal Transportation Site",
          description: "Analytics dashboard for a SaaS product",
          image: "rjm-image.png",
          tags: ["Wordpress", "PHP", "CSS3"],
        },
          ].map((project, index) => (
        <Card
          key={index}
          className="relative group overflow-visible bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-800 dark:via-slate-800 dark:to-blue-900/20 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl rounded-3xl p-0 transition-all duration-300 hover:scale-[1.02]"
        >
          {/* Decorative border box */}
          <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-blue-400/50 transition-all duration-300 pointer-events-none z-10" />
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
        <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">{project.title}</h3>
        <p className="mb-4 text-slate-600 dark:text-slate-300 text-center">{project.description}</p>
        <div className="flex gap-2 flex-wrap justify-center mb-4">
          {project.tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="px-3 py-1 rounded-full text-xs">
          {tag}
        </Badge>
          ))}
        </div>
        <Button className="mt-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0" asChild>
          <a
            href={
              index === 0
                ? "https://www.tituscoffeeco.com/"
                : "https://rjmworks.com/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
          </div>
          {/* Subtle shadow under the card */}
          <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-3/4 h-6 bg-blue-100 opacity-40 blur-lg rounded-full z-0" />
        </Card>
          ))}
        </div>
          </div>          </div>        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <div className="grid gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">Client Testimonials</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-slate-600 dark:text-slate-300 text-lg">
            What clients say about working with me
          </p>
        </div>
        <TestimonialSlider />
          </div>
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
        <Card className="p-10 shadow-2xl transition-all duration-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl min-h-[220px] flex flex-col justify-center items-center hover:shadow-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
            <div>
              <p className="font-bold text-slate-900 dark:text-slate-100 text-lg">{testimonials[current].name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{testimonials[current].role}</p>
            </div>
          </div>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-lg text-center italic leading-relaxed">
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