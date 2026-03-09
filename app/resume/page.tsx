'use client'

import { Download, Mail, Phone, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const resumeData = {
  name: "Israel Belete",
  title: "IT Support Specialist | Help Desk | Windows & Linux Support",
  email: "aeluidev77@gmail.com",
  phone: "(970) 716-0788",
  linkedin: "linkedin.com/in/ib2000",
  summary: "Software engineer with 8 years of experience supporting the design, development, testing, and maintenance of software systems while working closely with cross-functional teams. Contributed to successful delivery of enterprise projects by troubleshooting technical issues, improving system reliability, and assisting teams in meeting project deadlines. Brings strong problem-solving ability and over 20 years of customer service experience, providing clear communication and effective technical support to users.",
  
  experience: [
    {
      title: "Software Developer",
      company: "Web Innovative Technology",
      period: "03/2023 - Present",
      highlights: [
        "Delivered 15+ end-to-end web applications by collaborating with clients and stakeholders to gather requirements, propose scalable technical solutions, and ensure successful project delivery.",
        "Built high-performance, responsive web interfaces using Angular, React, and Next.js, improving user experience, accessibility, and SEO performance across multiple client platforms.",
        "Developed and integrated Node.js backend services and RESTful APIs, enabling secure authentication, real-time data exchange, and reliable communication between frontend and server systems.",
        "Led production troubleshooting and system improvements, quickly resolving technical issues and enhancing application stability, performance, and overall user satisfaction."
      ]
    },
    {
      title: "Senior UI Developer",
      company: "Lockheed Martin Connecticut (Remote)",
      period: "08/2021 - 03/2023",
      highlights: [
        "Led development of a high-impact Angular web application, improving workflow efficiency, UI responsiveness, and overall user productivity for internal teams.",
        "Built and integrated secure RESTful APIs with Node.js, enabling reliable real-time data communication between frontend systems and backend services.",
        "Implemented NgRx state management and optimized application architecture, significantly improving scalability, performance, and long-term maintainability.",
        "Strengthened team performance and product quality by mentoring junior developers, contributing to agile planning, and delivering accessible, data-driven dashboards for business insights."
      ]
    },
    {
      title: "UI/Angular Developer",
      company: "Citibank",
      location: "Irving, TX (Remote)",
      period: "03/2020 - 08/2021",
      highlights: [
        "Delivered high-performance, responsive web interfaces using Angular (v10+), supporting large-scale online banking platforms across desktop, tablet, and mobile devices.",
        "Improved application efficiency by integrating GraphQL APIs and optimizing client-side performance, reducing data over-fetching and decreasing bundle size.",
        "Strengthened platform reliability by supporting cloud infrastructure on Microsoft Azure, implementing secure networking solutions, including VPN and ExpressRoute.",
        "Enhanced product quality by conducting accessibility audits and improving CI/CD pipelines, ensuring WCAG compliance and supporting continuous delivery."
      ]
    },
    {
      title: "Senior UI Developer",
      company: "PNC Bank",
      location: "Pittsburgh, PA",
      period: "03/2019 - 03/2020",
      highlights: [
        "Modernized an online banking platform by developing and maintaining applications with AngularJS and Angular 7, improving performance and UI consistency.",
        "Successfully migrated legacy systems to Angular 7, replacing outdated code with scalable, maintainable components.",
        "Enhanced data integration and feature responsiveness by collaborating with backend teams to connect APIs and streamline frontend data flow.",
        "Strengthened development quality and accessibility compliance by conducting code reviews and ensuring WCAG and Section 508 standards were met."
      ]
    },
    {
      title: "UI Developer",
      company: "US Bank",
      location: "Denver, CO",
      period: "10/2017 - 02/2019",
      highlights: [
        "Led front-end development of Single Page Applications (SPAs) using AngularJS and React, delivering responsive and intuitive interfaces.",
        "Transformed design mockups into mobile-responsive web applications using HTML5 and Bootstrap.",
        "Optimized JavaScript performance and application rendering, reducing load times and increasing stability.",
        "Improved product quality by integrating RESTful APIs, refactoring legacy code, and introducing automated testing (Jasmine/Karma)."
      ]
    }
  ],

  education: [
    {
      degree: "Information Technology Diploma",
      school: "UEI College",
      location: "San Diego, CA"
    },
    {
      degree: "Front-End Web Development",
      school: "General Assembly",
      location: "Denver, CO"
    },
    {
      degree: "Full-Stack Developer",
      school: "Skill-Crush Coding BootCamp",
      location: "New York, NY"
    }
  ],

  skills: {
    "Technical": ["Windows 10/11", "MacOS", "Linux/RedHat", "Microsoft 365", "Jira/Bitbucket", "Service Desk", "Remote Support", "Troubleshooting"],
    "Frontend": ["HTML/CSS", "JavaScript", "Angular", "React", "Next.js", "TypeScript"],
    "Backend": ["Node.js", "RESTful APIs", "GraphQL", "NgRx State Management"],
    "Support": ["Help Desk Support", "Active Directory", "Command Line (Bash)", "User Account Management", "System Monitoring", "VPN Support"],
    "Other": ["Networking Basics", "Shell Scripting", "Accessible (WCAG)", "CI/CD Pipelines"]
  },

  projects: [
    {
      title: "Part-time Teacher",
      description: "Mentoring junior developers",
      url: "https://github.com/Israel2000/JavaScriptCourse-for-beginners"
    },
    {
      title: "Web Innovative Technology",
      description: "Freelancing & Web Development",
      url: "https://webinnovativetechnology.com/"
    },
    {
      title: "EverydayCode",
      description: "YouTube Channel - Educational Content",
      url: "https://www.youtube.com/channel/UClvlfwHBENPDvs3n-W5-buuA"
    }
  ]
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-2 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            {resumeData.name}
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            {resumeData.title}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-slate-600 dark:text-slate-400">
            <a href={`mailto:${resumeData.email}`} className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" />
              {resumeData.email}
            </a>
            <span>•</span>
            <a href={`tel:${resumeData.phone}`} className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" />
              {resumeData.phone}
            </a>
            <span>•</span>
            <a href={`https://${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          
          <Button className="gap-2" size="lg">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        {/* Professional Summary */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Professional Summary
          </h2>
          <Card className="p-6 bg-white/50 dark:bg-slate-800/50 border-l-4 border-l-blue-500">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {resumeData.summary}
            </p>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{job.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{job.company}</p>
                    {job.location && <p className="text-sm text-slate-600 dark:text-slate-400">{job.location}</p>}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-right font-medium">{job.period}</p>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(resumeData.skills).map(([category, skills], index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
            Education
          </h2>
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                    <p className="text-green-600 dark:text-green-400 font-semibold">{edu.school}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{edu.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
            Projects & Links
          </h2>
          <div className="space-y-4">
            {resumeData.projects.map((project, index) => (
              <Card key={index} className="p-6 flex justify-between items-center hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex-shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
