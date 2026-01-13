"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import emailjs from 'emailjs-com';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const appointmentFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
})

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00"
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const appointmentForm = useForm<z.infer<typeof appointmentFormSchema>>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      time: "",
    },
  })

  async function onContactSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_dw0yuas',
        'template_qrwqide',
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        '6By1enMFeieSwMnOW'
      );
      toast.success("Message sent successfully!");
      contactForm.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function onAppointmentSubmit(values: z.infer<typeof appointmentFormSchema>) {
    setIsSubmitting(true)
    try {
      const formattedDate = format(values.date, "MMMM d, yyyy")
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          date: formattedDate,
        }),
      })

      if (response.ok) {
        toast.success("Appointment request sent successfully!")
        appointmentForm.reset()
      } else {
        throw new Error("Failed to send appointment request")
      }
    } catch (error) {
      toast.error("Failed to send appointment request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 py-24">
      <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
          </p>
        </div>

        <Tabs defaultValue="message" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
            <TabsTrigger value="message" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white rounded-lg transition-all duration-300 font-semibold">Send Message</TabsTrigger>
            <TabsTrigger value="appointment" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white rounded-lg transition-all duration-300 font-semibold">Book Appointment</TabsTrigger>
          </TabsList>

          <TabsContent value="message">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="space-y-2 border-b border-slate-200 dark:border-slate-700 pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></span>
                  Send a Message
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Send me a message and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <Form {...contactForm}>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                    <FormField
                      control={contactForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-200 font-semibold">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="h-12 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-slate-50 dark:bg-slate-900" />
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={contactForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-200 font-semibold">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" type="email" {...field} className="h-12 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-slate-50 dark:bg-slate-900" />
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={contactForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-200 font-semibold">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project..."
                              className="min-h-[150px] border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-slate-50 dark:bg-slate-900 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointment">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="space-y-2 border-b border-slate-200 dark:border-slate-700 pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></span>
                  Book an Appointment
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Schedule a consultation to discuss your project in detail.
                </CardDescription>
              </CardHeader>
                <CardContent className="pt-8">
                <Form {...appointmentForm}>
                  <form
                    onSubmit={appointmentForm.handleSubmit(async (values) => {
                      setIsSubmitting(true);
                      try {
                        await emailjs.send(
                          'service_dw0yuas',
                          'template_qrwqide',
                          {
                            name: values.fullName,
                            email: values.email,
                            message: `Appointment request for ${format(values.date, "MMMM d, yyyy")} at ${values.time}`,
                            to_email: "ibelete2000@gmail.com",
                          },
                          '6By1enMFeieSwMnOW'
                        );
                        toast.success("Appointment request sent successfully!");
                        appointmentForm.reset();
                      } catch (error) {
                        toast.error("Failed to send appointment request. Please try again.");
                      } finally {
                        setIsSubmitting(false);
                      }
                    })}
                    className="space-y-6"
                  >
                    <FormField
                      control={appointmentForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-200 font-semibold">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} className="h-12 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-slate-50 dark:bg-slate-900" />
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={appointmentForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-200 font-semibold">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" type="email" {...field} className="h-12 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-slate-50 dark:bg-slate-900" />
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400" />
                        </FormItem>
                      )}
                    />
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-1 flex justify-center items-center">
                        <FormField
                          control={appointmentForm.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col items-center">
                              <FormLabel className="text-slate-700 dark:text-slate-200 font-semibold mb-3">Date</FormLabel>
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() ||
                                  date.getDay() === 0 ||
                                  date.getDay() === 6
                                }
                                className="rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 p-3 shadow-lg"
                              />
                              <FormMessage className="text-red-500 dark:text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <FormField
                          control={appointmentForm.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 dark:text-slate-200 font-semibold">Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 bg-slate-50 dark:bg-slate-900">
                                    <SelectValue placeholder="Select a time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600">
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time} className="hover:bg-blue-50 dark:hover:bg-blue-950 cursor-pointer">
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-500 dark:text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" disabled={isSubmitting}>
                      {isSubmitting ? "Booking..." : "Book Appointment"}
                    </Button>
                  </form>
                </Form>
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300">
            Prefer email? Reach out directly at{" "}
            <a
              href="mailto:team.webinnovativetech@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              team.webinnovativetech@gmail.com
            </a>
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}