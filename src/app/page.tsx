"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Dumbbell,
  Flame,
  HeartPulse,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "50+", label: "Training Stations", icon: Dumbbell },
  { value: "500+", label: "Active Members", icon: Users },
  { value: "6 AM – 10 PM", label: "Open Daily", icon: Clock3 },
  { value: "365", label: "Days Open / Year", icon: ShieldCheck },
];

const zones = [
  {
    num: "01",
    name: "The Heavy Iron Floor",
    desc: "Competition power racks, calibrated steel plates, Olympic barbells, and dedicated deadlift drop platforms.",
    tag: "Heavy Strength",
  },
  {
    num: "02",
    name: "Dumbbell & Cable Arsenal",
    desc: "Full dumbbell pairs running up to 50kg, dual adjustable pulley towers, lat pulldowns, and preacher benches.",
    tag: "Hypertrophy",
  },
  {
    num: "03",
    name: "High-Performance Cardio",
    desc: "Commercial treadmills, stair climbers, assault air bikes, and rowing ergometers for peak aerobic conditioning.",
    tag: "Endurance",
  },
  {
    num: "04",
    name: "Functional Turf & Combat",
    desc: "High-density sled push track, competition kettlebells, battle ropes, plyo boxes, and core stabilization zones.",
    tag: "Mobility & Agility",
  },
];

const programs = [
  {
    title: "Muscle Hypertrophy",
    desc: "Systematic progressive overload and volume protocols designed to maximize lean muscle mass and aesthetic symmetry.",
    icon: Flame,
    highlights: [
      "Custom workout split",
      "Mind-muscle connection cues",
      "Nutritional calorie guidance",
    ],
  },
  {
    title: "Raw Strength & Power",
    desc: "Master the big three lifts: Squat, Bench, and Deadlift. Dial in bar path, bracing mechanics, and explosive rate of force.",
    icon: Dumbbell,
    highlights: ["Barbell technique audits", "Wave-loading cycles", "Joint-friendly accessories"],
  },
  {
    title: "Fat Loss & Conditioning",
    desc: "High-density metabolic interval circuits that elevate calorie expenditure while safeguarding hard-earned muscle tissue.",
    icon: HeartPulse,
    highlights: ["Sprint & sled circuits", "High metabolic burn", "Body composition tracking"],
  },
  {
    title: "Beginner Iron Foundation",
    desc: "Never touched a barbell before? Our coaches guide you step-by-step through machine setup, safety, and lifting form.",
    icon: ShieldCheck,
    highlights: ["1-on-1 movement screening", "Zero ego atmosphere", "Foundational lifting habits"],
  },
];

const plans = [
  {
    name: "Power Start",
    price: "₹999",
    period: "/ month",
    note: "Essential membership for consistent lifters",
    featured: false,
    perks: [
      "Full gym floor & free weights access",
      "Locker room & shower access",
      "Complimentary starter movement assessment",
      "Access during all operating hours (6 AM - 10 PM)",
    ],
  },
  {
    name: "Vajra Pro",
    price: "₹1,499",
    period: "/ month",
    note: "Our most popular complete performance package",
    featured: true,
    perks: [
      "Full gym & power floor access",
      "Unlimited group conditioning classes",
      "Monthly body composition & strength review",
      "Personalized training program roadmap",
      "1 Free guest pass every month",
    ],
  },
  {
    name: "Iron Annual",
    price: "₹11,999",
    period: "/ year",
    note: "Commit to a full year of transformation",
    featured: false,
    perks: [
      "12 Full months of uninterrupted access",
      "All group classes included",
      "Quarterly coach technique evaluations",
      "2 Free guest passes every quarter",
      "Best overall value (Save over 30%)",
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  const whatsappUrl =
    "https://wa.me/919999999999?text=" +
    encodeURIComponent(
      "Hi Vajra Fitness! I would like to enquire about membership and schedule a gym visit in P Gannavaram.",
    );

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#top"
            aria-label="Vajra Fitness home"
            className="relative z-10 flex items-center gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="Vajra Fitness"
              width={170}
              height={82}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </a>

          <nav
            className="ml-auto hidden items-center gap-7 text-xs font-bold uppercase tracking-widest lg:flex"
            aria-label="Main navigation"
          >
            <a href="#experience" className="transition-colors hover:text-primary">
              The Gym
            </a>
            <a href="#zones" className="transition-colors hover:text-primary">
              Zones
            </a>
            <a href="#programs" className="transition-colors hover:text-primary">
              Programs
            </a>
            <a href="#memberships" className="transition-colors hover:text-primary">
              Memberships
            </a>
            <a href="#visit" className="transition-colors hover:text-primary">
              Visit
            </a>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav
            className="border-t border-border bg-background px-5 py-6 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4 font-display text-xl font-bold uppercase">
              <a href="#experience" onClick={closeMenu}>
                The Gym
              </a>
              <a href="#zones" onClick={closeMenu}>
                Gym Zones
              </a>
              <a href="#programs" onClick={closeMenu}>
                Training Programs
              </a>
              <a href="#memberships" onClick={closeMenu}>
                Memberships
              </a>
              <a href="#visit" onClick={closeMenu}>
                Visit & Contact
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/vajra-gym-hero.jpg"
            alt="Athlete deadlifting at Vajra Fitness"
            fill
            className="object-cover object-[64%_center] animate-slow-zoom"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_86%,transparent)_35%,color-mix(in_oklab,var(--background)_20%,transparent)_75%),linear-gradient(0deg,var(--background)_0%,transparent_45%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-lift-in">
            <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">
              <span className="h-px w-10 bg-primary" /> P Gannavaram’s strength destination
            </p>
            <h1 className="font-display text-[clamp(3.2rem,11vw,9.5rem)] font-black uppercase leading-[.78]">
              Built
              <br />
              <span className="text-primary">Different.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-steel md:text-lg">
              No shortcuts. No judgement. Serious barbell platforms, calibrated weights, and a
              dedicated community that shows up every day.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="power" size="lg">
                <a href="#memberships">
                  View memberships <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="powerOutline" size="lg">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Book A Free Visit
                </a>
              </Button>
            </div>
          </div>
          <a
            href="#experience"
            aria-label="Explore the gym"
            className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center border border-border-strong transition-colors hover:border-primary hover:text-primary lg:right-8"
          >
            <ChevronDown />
          </a>
        </div>
      </section>

      {/* Animated Live Ticker Ribbon */}
      <div className="overflow-hidden border-y border-primary bg-primary py-3 text-primary-foreground">
        <div className="flex w-max animate-ticker font-display text-lg font-black uppercase tracking-widest">
          {[0, 1].map((set) => (
            <div key={set} className="flex" aria-hidden={set === 1}>
              {[
                "Heavy Iron",
                "Power Racks",
                "Cardio Theater",
                "Certified Coaches",
                "Functional Turf",
                "Open 365 Days",
                "No Excuses",
              ].map((item) => (
                <span key={item} className="flex items-center gap-7 px-6">
                  {item}
                  <Zap className="h-4 w-4 fill-current" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section 1: Stats & Overview */}
      <section id="experience" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid min-w-0 gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-radar-ping" />
                <p className="text-xs font-bold uppercase tracking-[.26em] text-primary">
                  Inside Vajra
                </p>
              </div>
              <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[.9] sm:text-5xl lg:text-[clamp(3rem,5.5vw,6rem)]">
                Everything you need.
                <br />
                <span className="text-stroke">Nothing you don’t.</span>
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-muted-foreground lg:justify-self-end">
              A high-focus training facility engineered around heavy iron, competition racks, and
              spacious lifting platforms in P Gannavaram.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="group relative border border-border bg-surface p-7 transition-all duration-300 hover:border-primary hover:-translate-y-1 red-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/40 bg-primary/10 mb-5">
                  <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <strong className="font-display text-4xl font-black text-foreground sm:text-5xl">
                  {value}
                </strong>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Gym Zones (Animated Cards) */}
      <section id="zones" className="border-t border-border bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.26em] text-primary">
              Facility Layout
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-7xl">
              Engineered <span className="text-primary">Zones.</span>
            </h2>
            <p className="mt-4 text-steel text-sm sm:text-base">
              Organized for seamless workout flow. No waiting around for clips, benches, or plates.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {zones.map((zone) => (
              <div
                key={zone.num}
                className="group relative flex flex-col justify-between border border-border bg-background p-6 transition-all duration-300 hover:border-primary hover:-translate-y-1.5 red-glow"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/80 pb-4">
                    <span className="font-mono text-xl font-black text-primary">
                      Zone {zone.num}
                    </span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">
                      {zone.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase text-foreground group-hover:text-primary transition-colors">
                    {zone.name}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-steel">{zone.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground flex items-center gap-1">
                    Inspected & Maintained Daily <Check className="h-3 w-3 text-primary" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Training Programs */}
      <section id="programs" className="border-t border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.26em] text-primary">
                Coaching & Training
              </p>
              <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-7xl">
                Target Your <span className="text-primary">Goal.</span>
              </h2>
              <p className="mt-4 max-w-xl text-steel text-sm sm:text-base">
                Whether you want to shatter powerlifting PRs or lean out for general vitality, our
                coaches provide the guidance you need.
              </p>
            </div>
            <Button asChild variant="powerOutline" size="lg">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Ask A Coach On WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.title}
                  className="group relative flex flex-col justify-between border border-border bg-surface p-6 transition-all duration-300 hover:border-primary hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/40 bg-primary/10 mb-5">
                      <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase text-foreground group-hover:text-primary transition-colors">
                      {prog.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-steel">{prog.desc}</p>
                    <ul className="mt-5 space-y-2 border-t border-border pt-4 text-xs">
                      {prog.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-foreground/85">
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                    >
                      Enquire Program <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Memberships (Simple & Clean) */}
      <section id="memberships" className="border-t border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[.26em] text-primary">
              Transparent Pricing
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-7xl">
              Memberships.
            </h2>
            <p className="mt-4 text-steel text-sm sm:text-base">
              Straightforward pricing without maintenance fees. Choose what fits your commitment.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col justify-between border p-7 transition-all duration-300 ${
                  plan.featured
                    ? "border-primary bg-surface-high lg:-translate-y-3 red-glow shadow-xl"
                    : "border-border bg-surface hover:border-border-strong hover:-translate-y-1"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 right-6 flex items-center gap-1 bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary-foreground shadow-power">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </div>
                )}

                <div>
                  <h3 className="font-display text-3xl font-black uppercase text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">{plan.note}</p>

                  <div className="my-6 h-px bg-border" />

                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl font-black text-foreground sm:text-6xl">
                      {plan.price}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-xs leading-relaxed">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-foreground/90">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-4 border-t border-border">
                  <Button
                    asChild
                    variant={plan.featured ? "power" : "powerOutline"}
                    size="lg"
                    className="w-full text-xs"
                  >
                    <a
                      href={
                        "https://wa.me/919999999999?text=" +
                        encodeURIComponent(
                          `Hi Vajra Fitness! I am interested in signing up for the ${plan.name} (${plan.price}${plan.period}) plan.`,
                        )
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      Choose Plan <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Visit & Location */}
      <section id="visit" className="border-t border-border bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.26em] text-primary">
              Find Your Strength
            </p>
            <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[.9] sm:text-6xl md:text-8xl">
              Come See
              <br />
              Vajra.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              Walk in, meet the coaches, and get a feel for the floor. We are open every day of the
              year for those who are ready to put in the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="power" size="lg">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <Phone className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="grid content-center gap-4">
            <div className="flex gap-5 border border-border bg-background p-6 transition-colors hover:border-primary">
              <MapPin className="mt-1 text-primary shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Location
                </p>
                <p className="mt-2 font-display text-2xl font-bold uppercase">
                  Main Road, P Gannavaram
                  <br />
                  Andhra Pradesh, India
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Landmark: Opposite Bus Stop Center
                </p>
              </div>
            </div>

            <div className="flex gap-5 border border-border bg-background p-6 transition-colors hover:border-primary">
              <Clock3 className="mt-1 text-primary shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Opening hours
                </p>
                <p className="mt-2 font-display text-2xl font-bold uppercase">
                  Monday – Sunday
                  <br />
                  6:00 AM – 10:00 PM
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Open 365 Days • Uninterrupted Access
                </p>
              </div>
            </div>

            <Button asChild variant="powerOutline" size="lg">
              <a href="https://maps.google.com/?q=P+Gannavaram" target="_blank" rel="noreferrer">
                Get Directions on Google Maps <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 py-12 lg:px-8 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Image
            src="/images/logo.png"
            alt="Vajra Fitness"
            width={170}
            height={82}
            className="h-12 w-auto"
          />
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
            © 2026 Vajra Fitness. Built to move. P Gannavaram.
          </p>
          <a
            href="#top"
            className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
