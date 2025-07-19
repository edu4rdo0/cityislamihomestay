"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  MessageCircle,
  Calendar,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Bed,
  Quote,
  Heart,
  Gift,
  Timer,
  Download,
  HelpCircle,
  X,
} from "lucide-react"
import {
  FadeUpSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  ParallaxSection,
  AnimatedImage,
  AnimatedButton,
  FloatingElement,
} from "@/components/animations"
import { useState, useEffect } from "react"

export default function Home() {
  const [showNotification, setShowNotification] = useState(true)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 12, minutes: 30, seconds: 45 })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Popup timer - show every 1 minute
  useEffect(() => {
    const timer = setInterval(() => {
      setShowExitIntent(true)
    }, 60000) // 60000ms = 1 minute

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Notification Bar */}
      {showNotification && (
        <div className="bg-foreground text-white py-2 px-4 text-center text-sm relative">
          <div className="flex items-center justify-center gap-2">
            <Gift className="h-6 w-6" />
            <span>Promo Spesial: Diskon 25% untuk booking bulan ini! Gunakan kode: ISLAMI25</span>
          </div>
          <button
            onClick={() => setShowNotification(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white rounded-full p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Sticky Header with Glassmorphism */}
      <header className="sticky top-0 z-50 border-foreground border-sage/30 bg-background backdrop-blur-xl shadow-sm">
  <div className="container flex h-16 items-center justify-between px-4 md:px-6">
    <div className="flex items-center gap-3">
      <Image
        src="/image/logo.jpg"
        alt="City Islami Logo"
        width={40}
        height={40}
        className="h-15 w-11 rounded-full"
      />
      <div>
        <span className="text-xl font-bold text-white">City Islami Homestay</span>
        <div className="flex items-center gap-1 text-xs text-white">
          <Star className="h-3 w-3 fill-terracotta text-white" />
          <span>4.9 Rating</span>
        </div>
      </div>
    </div>

    <nav className="hidden md:flex gap-8">
      {["Beranda", "Tentang", "Kamar", "Fasilitas", "Testimoni", "Kontak"].map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm font-medium text-white hover:text-forest transition-colors duration-300 relative group"
        >
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300"></span>
        </Link>
      ))}
    </nav>

    <div className="flex items-center gap-4">
      <Badge variant="outline" className="hidden sm:flex border-[#0F9D58] text-[#0F9D58]">
        <Shield className="h-3 w-3 mr-1" />
        Halal Certified
      </Badge>

      <Link
        href="/login"
        className="px-4 py-2 text-sm font-medium text-white bg-foreground rounded hover:bg-background transition">
        Login
      </Link>
    </div>
  </div>
</header>

      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with Gradient Overlay */}
          <div className="absolute inset-0 bg-charcoal/50 z-10"></div>
          <div className="relative w-full h-screen">
{/* hero section */}
  <div className="absolute inset-0">
    <Image
      src="/image/homestay-exterior-2.jpg"
      alt="City Islami Homestay - Beautiful Modern Architecture"
      fill
      className="object-cover"
      priority
    />
  </div>
  {/* Konten lain di atas gambar */}

  <FadeUpSection delay={0.2}>
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
                
              </p>
            </FadeUpSection>


<div className="container relative z-20 text-center text-white px-4 mx-auto">
  {/* Trust Badges */}
  <FadeUpSection>
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
      <Badge className="bg-beige/95 backdrop-blur-sm text-forest border-0 px-3 py-1 text-xs sm:text-sm">
        <Award className="h-3 w-3 mr-1" />
        Best Homestay 2024
      </Badge>
      <Badge className="bg-beige/95 backdrop-blur-sm text-forest border-0 px-3 py-1 text-xs sm:text-sm">
        <Users className="h-3 w-3 mr-1" />
        1000+ Happy Guests
      </Badge>
    </div>
  </FadeUpSection>

  {/* Main Headline */}
  <FadeUpSection>
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
      <span className="block">Selamat Datang di</span>
      <span className="block text-beige">City Islami Homestay</span>
    </h1>
  </FadeUpSection>

  {/* Supporting Headline */}
  <FadeUpSection delay={0.2}>
    <p className="text-base sm:text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
      Pengalaman Menginap Islami Terbaik di Jantung Kota
    </p>
  </FadeUpSection>

  {/* Unique Selling Proposition */}
  <FadeUpSection delay={0.3}>
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base">
      <div className="flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-[#F4B400]" />
        <span>100% Halal Certified</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-[#F4B400]" />
        <span>24/7 Customer Service</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-[#F4B400]" />
        <span>Strategic Location</span>
      </div>
    </div>
  </FadeUpSection>

  {/* CTA */}
  <FadeUpSection delay={0.4}>
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
      <AnimatedButton className="bg-background hover:bg-background text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium flex items-center justify-center">
        <Calendar className="mr-2 h-5 w-5" />
        Book Your Stay Now
      </AnimatedButton>
      <AnimatedButton className="bg-background border-beige/70 text-white hover:bg-background hover:text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium flex items-center justify-center">
        <Play className="mr-2 h-5 w-5" />
        Watch Virtual Tour
      </AnimatedButton>
    </div>
  </FadeUpSection>

  {/* Quick Stats */}
  <FadeUpSection delay={0.5}>
    <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 max-w-2xl mx-auto">
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-terracotta">
          <AnimatedCounter value={50} />+
        </div>
        <div className="text-xs sm:text-sm text-white/80">Premium Rooms</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-terracotta">
          <AnimatedCounter value={1000} />+
        </div>
        <div className="text-xs sm:text-sm text-white/80">Happy Guests</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-terracotta">
          <AnimatedCounter value={4.9} duration={1.5} />
        </div>
        <div className="text-xs sm:text-sm text-white/80">Rating Score</div>
      </div>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-terracotta">
          <AnimatedCounter value={5} duration={1} />
        </div>
        <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
      </div>
    </div>
  </FadeUpSection>
</div>
            </div>

          {/* Scroll Indicator */}
          <FloatingElement className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </FloatingElement>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-beige">
          <div className="container px-4 md:px-6">
            <FadeUpSection className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal">
                Mengapa Memilih City Islami Homestay?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami menghadirkan pengalaman menginap yang tak terlupakan dengan memadukan kenyamanan modern dan
                nilai-nilai Islami dalam setiap aspek pelayanan kami. Dari kamar yang bersih dan nyaman hingga makanan
                halal berkualitas tinggi.
              </p>
            </FadeUpSection>
          </div>
        </section>

        {/* Product/Service Overview with Enhanced Design */}
        <section id="tentang" className="py-20 bg-white relative overflow-hidden">
          {/* Background Pattern */}

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <FadeUpSection>
                <div className="space-y-8">
                  <div>
                    <Badge className="mb-4 bg-sage/20 text-forest border border-sage/40">About Our Homestay</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal leading-tight">
                      Homestay Islami
                      <span className="text-forest"> Terdepan</span> di Indonesia
                    </h2>
                    <div className="w-20 h-1 bg-forest rounded-full mb-6"></div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      City Islami Homestay didirikan dengan visi menjadi destinasi utama bagi wisatawan Muslim yang
                      mencari pengalaman menginap yang sesuai dengan nilai-nilai Islami tanpa mengorbankan kenyamanan
                      dan kemewahan modern.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-sage/20 p-6 rounded-xl border border-sage/30">
                        <div className="text-3xl font-bold text-forest mb-2">
                          <AnimatedCounter value={2018} />
                        </div>
                        <div className="text-sm text-gray-600">Tahun Didirikan</div>
                      </div>
                      <div className="bg-terracotta/20 p-6 rounded-xl border border-terracotta/30">
                        <div className="text-3xl font-bold text-terracotta mb-2">
                          <AnimatedCounter value={98} />%
                        </div>
                        <div className="text-sm text-gray-600">Satisfaction Rate</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton className="bg-forest hover:bg-forest-dark text-white px-6 py-3 rounded-lg">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </AnimatedButton>
                    <AnimatedButton className="border border-sage hover:border-forest text-charcoal hover:text-forest px-6 py-3 rounded-lg">
                      Download Brochure
                      <Download className="ml-2 h-4 w-4" />
                    </AnimatedButton>
                  </div>
                </div>
              </FadeUpSection>

              <FadeUpSection delay={0.3}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#0F9D58] to-[#F4B400] rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <AnimatedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_e0wq1de0wq1de0wq.png-r1lJUUwLFWM1Rr5GLPNUNiIzLKrs43.jpeg"
                      alt="City Islami Interior"
                      width={600}
                      height={500}
                      className="w-full h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-900">Premium Suite</div>
                            <div className="text-sm text-gray-600">Starting from Rp 350.000/night</div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-[#F4B400] text-[#F4B400]" />
                            <span className="text-sm font-medium">4.9</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUpSection>
            </div>
          </div>
        </section>

        {/* Key Features with Modern Cards */}
        <section id="fasilitas" className="py-20 bg-beige">
          <div className="container px-4 md:px-6">
            <FadeUpSection className="text-center mb-16">
              <Badge className="mb-4 bg-forest/10 text-forest border border-forest/20">Our Premium Facilities</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                Fasilitas <span className="text-forest">Terlengkap</span> untuk Kenyamanan Anda
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nikmati berbagai fasilitas premium yang dirancang khusus untuk memberikan pengalaman menginap terbaik
              </p>
            </FadeUpSection>

            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Bed,
                  title: "Kamar Premium",
                  description:
                    "Kamar luas dengan desain modern Islami, AC, TV LED, dan tempat tidur berkualitas tinggi",
                  color: "sage",
                },
                {
                  icon: Utensils,
                  title: "Restoran Halal",
                  description: "Menu makanan halal berkualitas dengan cita rasa nusantara dan internasional",
                  color: "warm",
                },
                {
                  icon: Wifi,
                  title: "WiFi Super Cepat",
                  description: "Internet berkecepatan tinggi di seluruh area homestay untuk kebutuhan digital Anda",
                  color: "purple",
                },
                {
                  icon: Car,
                  title: "Parkir Luas & Aman",
                  description: "Area parkir yang luas dengan sistem keamanan 24 jam dan CCTV",
                  color: "orange",
                },
                {
                  icon: Coffee,
                  title: "Mushola & Ruang Ibadah",
                  description: "Fasilitas ibadah yang nyaman dengan perlengkapan sholat lengkap",
                  color: "teal",
                },
                {
                  icon: Users,
                  title: "Ruang Pertemuan",
                  description: "Ruang serbaguna untuk acara keluarga, meeting, atau gathering",
                  color: "pink",
                },
              ].map((feature, index) => (
                <StaggerItem key={index}>
                  <Card className="group h-full border border-sage/30 hover:border-sage transition-all duration-300 bg-white hover:shadow-lg">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 rounded-xl bg-forest/10 flex items-center justify-center mb-6 group-hover:bg-forest/20 transition-colors duration-300`}
                      >
                        <feature.icon className="h-8 w-8 text-forest" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-charcoal group-hover:text-forest transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <FadeUpSection className="text-center mb-16">
              <Badge className="mb-4 bg-terracotta/10 text-terracotta border border-terracotta/20">
                Simple Booking Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Cara <span className="text-terracotta">Mudah</span> Booking Kamar
              </h2>
            </FadeUpSection>

            <div className="max-w-4xl mx-auto">
              <StaggerContainer className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Pilih Kamar",
                    description: "Browse dan pilih kamar sesuai kebutuhan dan budget Anda",
                    icon: Bed,
                  },
                  {
                    step: "02",
                    title: "Isi Data & Bayar",
                    description: "Lengkapi data booking dan lakukan pembayaran dengan aman",
                    icon: CheckCircle,
                  },
                  {
                    step: "03",
                    title: "Check-in & Nikmati",
                    description: "Datang dan nikmati pengalaman menginap terbaik bersama kami",
                    icon: Heart,
                  },
                ].map((step, index) => (
                  <StaggerItem key={index}>
                    <div className="text-center relative">
                      <div className="relative mb-8">
                        <div className="w-20 h-20 mx-auto bg-forest rounded-full flex items-center justify-center shadow-lg">
                          <step.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>

                      {index < 2 && (
                        <div className="hidden md:block absolute top-10 left-full w-full">
                          <ArrowRight className="h-6 w-6 text-forest mx-auto" />
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section id="kamar"className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <FadeUpSection className="text-center mb-16">
              <Badge className="mb-4 bg-forest/10 text-forest border border-forest/20">Room Packages</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Pilihan <span className="text-forest">Paket Kamar</span> Terbaik
              </h2>
            </FadeUpSection>

            <StaggerContainer className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  name: "Standard Room",
                  price: "250.000",
                  originalPrice: "300.000",
                  features: ["AC & TV LED", "WiFi Gratis", "Kamar Mandi Dalam", "Breakfast"],
                  popular: false,
                  gradient: "from-gray-500 to-gray-600",
                },
                {
                  name: "Deluxe Room",
                  price: "350.000",
                  originalPrice: "450.000",
                  features: ["Semua fasilitas Standard", "Balkon Pribadi", "Mini Bar", "Room Service", "Laundry"],
                  popular: true,
                  gradient: "from-[#0F9D58] to-[#34A853]",
                },
                {
                  name: "Family Suite",
                  price: "500.000",
                  originalPrice: "650.000",
                  features: [
                    "Semua fasilitas Deluxe",
                    "2 Kamar Tidur",
                    "Ruang Tamu",
                    "Dapur Kecil",
                    "Priority Support",
                  ],
                  popular: false,
                  gradient: "from-[#F4B400] to-[#FFD700]",
                },
              ].map((plan, index) => (
                <StaggerItem key={index}>
                  <Card
                    className={`relative h-full ${plan.popular ? "ring-2 ring-forest scale-105" : ""} hover:shadow-2xl transition-all duration-300`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-forest text-white px-4 py-1">Most Popular</Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-8">
                      <div
                        className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4`}
                      >
                        <Bed className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-bold text-forest">Rp {plan.price}</span>
                          <span className="text-lg text-gray-500 line-through">Rp {plan.originalPrice}</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">per malam</div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-forest flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}

                      <div className="pt-6">
                        <AnimatedButton
                          className={`w-full py-3 rounded-full ${
                            plan.popular
                              ? "bg-forest hover:bg-forest-dark text-white"
                              : "border border-forest text-forest hover:bg-forest hover:text-white"
                          }`}
                        >
                          Book This Room
                        </AnimatedButton>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Interior & Facilities Gallery */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <FadeUpSection className="text-center mb-16">
              <Badge className="mb-4 bg-forest/10 text-forest border border-forest/20">Interior Gallery</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                Fasilitas <span className="text-forest">Interior</span> Premium
              </h2>
            </FadeUpSection>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <FadeUpSection>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_e0wq1de0wq1de0wq.png-r1lJUUwLFWM1Rr5GLPNUNiIzLKrs43.jpeg"
                    alt="City Islami Homestay - Cozy Living Room"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-charcoal mb-2">Cozy Living Room</h3>
                      <p className="text-sm text-gray-600">Ruang tamu yang nyaman dengan pencahayaan alami</p>
                    </div>
                  </div>
                </div>
              </FadeUpSection>

              <FadeUpSection delay={0.2}>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_vc728rvc728rvc72-fVR09ZoGKv9KTlO7jtCafEVKVx8TvO.png"
                    alt="City Islami Homestay - Modern Kitchen"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-terracotta/20 group-hover:bg-terracotta/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-charcoal mb-2">Modern Kitchen</h3>
                      <p className="text-sm text-gray-600">Dapur modern dengan peralatan lengkap</p>
                    </div>
                  </div>
                </div>
              </FadeUpSection>
            </div>
          </div>
        </section>

        {/* Special Offers with Countdown */}
        <section className="py-20 bg-forest text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <FloatingElement className="absolute -right-20 top-10 opacity-20" distance={30}>
            <div className="w-60 h-60 rounded-full bg-white/10"></div>
          </FloatingElement>

          <div className="container px-4 md:px-6 relative">
            <FadeUpSection className="text-center">
              <Badge className="mb-4 bg-beige/20 text-white border-beige/30">
                <Timer className="h-4 w-4 mr-1" />
                Limited Time Offer
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Promo Spesial Berakhir Dalam</h2>

              {/* Countdown Timer */}
              <div className="flex justify-center gap-4 mb-8">
                {[
                  { label: "Hari", value: timeLeft.days },
                  { label: "Jam", value: timeLeft.hours },
                  { label: "Menit", value: timeLeft.minutes },
                  { label: "Detik", value: timeLeft.seconds },
                ].map((time, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 min-w-[80px]">
                    <div className="text-3xl font-bold">{time.value.toString().padStart(2, "0")}</div>
                    <div className="text-sm opacity-80">{time.label}</div>
                  </div>
                ))}
              </div>

              <div className="max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4">Diskon hingga 25% untuk semua tipe kamar!</h3>
                <p className="text-lg opacity-90">
                  Gunakan kode promo <span className="font-bold bg-white/20 px-3 py-1 rounded-full">ISLAMI25</span>
                  dan dapatkan pengalaman menginap terbaik dengan harga spesial.
                </p>
              </div>

              <AnimatedButton className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-lg text-lg font-semibold">
                <Gift className="mr-2 h-5 w-5" />
                Claim Discount Now
              </AnimatedButton>
            </FadeUpSection>
          </div>
        </section>

        {/* Real Images Showcase */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <FadeUpSection className="text-center mb-16">
              <Badge className="mb-4 bg-forest/10 text-forest border border-forest/20">Our Beautiful Property</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                Lihat <span className="text-forest">Keindahan</span> Homestay Kami
              </h2>
            </FadeUpSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
              <FadeUpSection>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_4a2uyb4a2uyb4a2u.png-HIFMLTlzpSF6HTNQ18Gm9lsH65KL08.jpeg"
                    alt="City Islami Homestay - Modern Building"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-charcoal mb-2">Modern Exterior Design</h3>
                      <p className="text-sm text-gray-600">Fasad modern dengan desain minimalis yang elegan</p>
                    </div>
                  </div>
                </div>
              </FadeUpSection>

              <FadeUpSection delay={0.2}>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_e0wq1de0wq1de0wq.png-r1lJUUwLFWM1Rr5GLPNUNiIzLKrs43.jpeg"
                    alt="City Islami Homestay - Cozy Living Room"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-terracotta/20 group-hover:bg-terracotta/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-charcoal mb-2">Cozy Living Room</h3>
                      <p className="text-sm text-gray-600">Ruang tamu yang nyaman dengan pencahayaan alami</p>
                    </div>
                  </div>
                </div>
              </FadeUpSection>

              <FadeUpSection delay={0.3}>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_vc728rvc728rvc72-fVR09ZoGKv9KTlO7jtCafEVKVx8TvO.png"
                    alt="City Islami Homestay - Modern Kitchen"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-sage/20 group-hover:bg-sage/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-charcoal mb-2">Modern Kitchen</h3>
                      <p className="text-sm text-gray-600">Dapur modern dengan peralatan lengkap</p>
                    </div>
                  </div>
                </div>
              </FadeUpSection>

              <FadeUpSection delay={0.4}>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_s186vks186vks186.png-yeVsSm33OcYZKr5EFuIicw4IiIosKB.jpeg"
                    alt="City Islami Homestay - Elegant Architecture"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-warm/20 group-hover:bg-warm/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-charcoal mb-2">Elegant Architecture</h3>
                      <p className="text-sm text-gray-600">Arsitektur yang elegan dengan taman yang asri</p>
                    </div>
                  </div>
                </div>
              </FadeUpSection>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section id="testimoni" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <FadeUpSection className="text-center mb-16">
              <Badge className="mb-4 bg-terracotta/10 text-terracotta border border-terracotta/20">
                Customer Reviews
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Apa Kata <span className="text-terracotta">Tamu</span> Kami
              </h2>
            </FadeUpSection>

            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {[
                {
                  name: "Ahmad Fauzi",
                  role: "Business Traveler",
                  rating: 5,
                  comment:
                    "Alhamdulillah, pengalaman menginap di City Islami sangat menyenangkan. Kamar bersih, pelayanan ramah, dan suasana Islami yang sangat nyaman. Saya pasti akan kembali lagi.",
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Siti Aminah",
                  role: "Family Vacation",
                  rating: 5,
                  comment:
                    "Saya sangat senang bisa menginap di City Islami. Lokasinya strategis, dekat dengan pusat perbelanjaan dan kuliner. Fasilitas ibadah yang disediakan juga sangat memadai.",
                  avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                  name: "Budi Santoso",
                  role: "Weekend Getaway",
                  rating: 4,
                  comment:
                    "Homestay yang sangat nyaman untuk keluarga. Anak-anak saya sangat senang dengan pelayanan yang ramah. Makanan yang disajikan juga enak dan halal.",
                  avatar: "/placeholder.svg?height=60&width=60",
                },
              ].map((testimonial, index) => (
                <StaggerItem key={index}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0F9D58] rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-terracotta text-terracotta" />
                            ))}
                          </div>
                        </div>
                      </div>

                      <Quote className="h-8 w-8 text-forest/20 mb-4" />
                      <p className="text-gray-600 leading-relaxed italic">"{testimonial.comment}"</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Video Testimonial */}
            <FadeUpSection>
              <Card className="max-w-2xl mx-auto bg-sage/10 border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Watch Video Testimonials</h3>
                  <p className="text-gray-600 mb-6">Dengar langsung pengalaman tamu kami</p>
                  <AnimatedButton className="bg-forest hover:bg-forest-dark text-white px-6 py-3 rounded-lg">
                    <Play className="mr-2 h-5 w-5" />
                    Play Video
                  </AnimatedButton>
                </CardContent>
              </Card>
            </FadeUpSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-beige">
          <div className="container px-4 md:px-6">
            <FadeUpSection className="text-center mb-16">
              <Badge className="mb-4 bg-forest/10 text-forest border border-forest/20">
                <HelpCircle className="h-4 w-4 mr-1" />
                Frequently Asked Questions
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                Pertanyaan <span className="text-forest">Umum</span>
              </h2>
            </FadeUpSection>

            <div className="max-w-3xl mx-auto">
              <StaggerContainer className="space-y-4">
                {[
                  {
                    question: "Apakah semua makanan di homestay sudah halal?",
                    answer:
                      "Ya, semua makanan dan minuman yang kami sediakan sudah bersertifikat halal MUI dan diolah dengan standar halal yang ketat.",
                  },
                  {
                    question: "Apakah tersedia fasilitas ibadah?",
                    answer:
                      "Tentu saja! Kami menyediakan mushola yang nyaman dengan perlengkapan sholat lengkap, Al-Quran, dan jadwal sholat.",
                  },
                  {
                    question: "Bagaimana kebijakan pembatalan booking?",
                    answer:
                      "Pembatalan gratis hingga 24 jam sebelum check-in. Untuk pembatalan kurang dari 24 jam, dikenakan biaya 50% dari total booking.",
                  },
                  {
                    question: "Apakah ada layanan antar jemput bandara?",
                    answer:
                      "Ya, kami menyediakan layanan antar jemput bandara dengan biaya tambahan. Silakan hubungi kami untuk informasi lebih lanjut.",
                  },
                ].map((faq, index) => (
                  <StaggerItem key={index}>
                    <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section className="py-20 bg-forest text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <FadeUpSection className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Dapatkan Penawaran Terbaik</h2>
                <p className="text-xl opacity-90">
                  Daftar sekarang dan dapatkan diskon eksklusif untuk booking pertama Anda
                </p>
              </FadeUpSection>

              <FadeUpSection delay={0.3}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-8">
                    <form className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nama Lengkap</label>
                        <Input
                          placeholder="Masukkan nama lengkap"
                          className="bg-beige/20 border-beige/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          type="email"
                          placeholder="nama@email.com"
                          className="bg-beige/20 border-beige/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">No. Telepon</label>
                        <Input
                          placeholder="+62 812 3456 7890"
                          className="bg-beige/20 border-beige/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Tanggal Check-in</label>
                        <Input type="date" className="bg-beige/20 border-beige/30 text-white" />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-sm font-medium">Pesan Khusus (Opsional)</label>
                        <Textarea
                          placeholder="Ada permintaan khusus?"
                          className="bg-beige/20 border-beige/30 text-white placeholder:text-white/70"
                          rows={3}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <AnimatedButton className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-4 rounded-lg text-lg font-semibold">
                          <Gift className="mr-2 h-5 w-5" />
                          Dapatkan Penawaran Spesial
                        </AnimatedButton>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </FadeUpSection>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="kontak" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <FadeUpSection className="text-center mb-16">
              <Badge className="mb-4 bg-forest/10 text-forest border border-forest/20">Get In Touch</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
                Hubungi <span className="text-forest">Kami</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tim customer service kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
              </p>
            </FadeUpSection>

            <div className="grid gap-12 lg:grid-cols-2">
              <FadeUpSection>
                <div className="space-y-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#0F9D58]/5 to-[#0F9D58]/10">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 mx-auto bg-forest rounded-full flex items-center justify-center mb-4">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold mb-2">Telepon</h3>
                        <p className="text-forest font-semibold">+62 123 4567 890</p>
                        <p className="text-sm text-gray-600 mt-1">24/7 Customer Service</p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#F4B400]/5 to-[#F4B400]/10">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 mx-auto bg-terracotta rounded-full flex items-center justify-center mb-4">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold mb-2">Email</h3>
                        <p className="text-terracotta font-semibold">info@cityislami.com</p>
                        <p className="text-sm text-gray-600 mt-1">Response within 1 hour</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">Alamat Lengkap</h3>
                          <p className="text-gray-600 mb-4">
                            Jl. Raya Homestay No. 123, Kelurahan Islami, Kecamatan Modern, Kota Jakarta Selatan, 12345
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="border-forest text-forest">
                              <Clock className="h-3 w-3 mr-1" />
                              Check-in: 14:00
                            </Badge>
                            <Badge variant="outline" className="border-terracotta text-terracotta">
                              <Clock className="h-3 w-3 mr-1" />
                              Check-out: 12:00
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Live Chat Widget */}
                  <Card className="border-0 shadow-lg bg-forest text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold mb-2">Need Instant Help?</h3>
                          <p className="opacity-90">Chat with our support team now</p>
                        </div>
                        <AnimatedButton className="bg-beige/20 hover:bg-beige/30 text-white border-beige/30 px-4 py-2 rounded-lg">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Live Chat
                        </AnimatedButton>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </FadeUpSection>

              <FadeUpSection delay={0.3}>
                <Card className="border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                    <CardDescription>Isi form di bawah dan kami akan merespon dalam 1 jam</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nama Lengkap</label>
                        <Input placeholder="Masukkan nama lengkap" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" placeholder="nama@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subjek</label>
                      <Input placeholder="Subjek pesan" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Pesan</label>
                      <Textarea placeholder="Tulis pesan Anda di sini..." rows={5} />
                    </div>
                    <AnimatedButton className="w-full bg-forest hover:bg-forest-dark text-white py-3 rounded-lg">
                      <Mail className="mr-2 h-4 w-4" />
                      Kirim Pesan
                    </AnimatedButton>
                  </CardContent>
                </Card>
              </FadeUpSection>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-charcoal text-white">
        <div className="container px-4 py-16 md:px-6">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
            <FadeUpSection>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-sage/20 rounded-full blur-sm opacity-50"></div>
                    <Image
                      src="https://cdn6.f-cdn.com/contestentries/2280428/70167456/64b3909a27493_thumb900.jpg"
                      alt="City Islami Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10 relative z-10 rounded-full"
                    />
                  </div>
                  <span className="text-xl font-bold">City Islami</span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Homestay dengan nuansa Islami modern yang nyaman dan strategis di tengah kota. Pengalaman menginap
                  terbaik untuk keluarga Muslim.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: "facebook", href: "#" },
                    { icon: "instagram", href: "#" },
                    { icon: "twitter", href: "#" },
                    { icon: "youtube", href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-terracotta rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <span className="sr-only">{social.icon}</span>
                      <div className="w-5 h-5 bg-current"></div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeUpSection>

            <FadeUpSection delay={0.1}>
              <div className="space-y-6">
                <h3 className="text-lg font-bold">Quick Links</h3>
                <ul className="space-y-3">
                  {["Beranda", "Tentang Kami", "Kamar & Suite", "Fasilitas", "Galeri", "Kontak"].map((link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="text-white/70 hover:text-terracotta transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUpSection>

            <FadeUpSection delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-lg font-bold">Our Services</h3>
                <ul className="space-y-3">
                  {[
                    "Room Booking",
                    "Event Hosting",
                    "Airport Transfer",
                    "Tour Packages",
                    "Catering Service",
                    "Meeting Rooms",
                  ].map((service, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-terracotta transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <CheckCircle className="h-3 w-3 text-forest" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUpSection>

            <FadeUpSection delay={0.3}>
              <div className="space-y-6">
                <h3 className="text-lg font-bold">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">
                      Jl. Raya Homestay No. 123
                      <br />
                      Jakarta Selatan, 12345
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-terracotta" />
                    <span className="text-white/70">+62 123 4567 890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-terracotta" />
                    <span className="text-white/70">info@cityislami.com</span>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white/5 rounded-2xl p-4">
                  <h4 className="font-semibold mb-3">Newsletter</h4>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <AnimatedButton className="bg-terracotta hover:bg-terracotta-dark text-white px-4 py-2 rounded-lg">
                      <Mail className="h-4 w-4" />
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </FadeUpSection>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                &copy; {new Date().getFullYear()} City Islami Homestay. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-terracotta transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/70 hover:text-terracotta transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/70 hover:text-terracotta transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
<div className="fixed bottom-6 right-6 z-50">
  <Link href="#kamar">
    <AnimatedButton className="bg-forest hover:bg-forest-dark text-white px-6 py-4 rounded-lg shadow-2xl">
      <Calendar className="mr-2 h-5 w-5" />
      Book Now
    </AnimatedButton>
  </Link>
</div>

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full bg-white">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-forest rounded-full flex items-center justify-center mb-4">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Special Offer for You!</h3>
                <p className="text-gray-600">Get an exclusive 15% discount on your first booking</p>
              </div>

              <div className="space-y-4">
                <Input placeholder="Enter your email" />
                <div className="flex gap-2">
                  <AnimatedButton
                    className="flex-1 bg-forest hover:bg-forest-dark text-white py-2 rounded-lg"
                    onClick={() => setShowExitIntent(false)}
                  >
                    Get Discount
                  </AnimatedButton>
                  <AnimatedButton
                    className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setShowExitIntent(false)}
                  >
                    <X className="h-4 w-4" />
                  </AnimatedButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
