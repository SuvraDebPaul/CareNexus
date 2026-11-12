import { CalendarDays, Microscope, Users } from "lucide-react";
import Image from "next/image";
import { RegisterForm } from "@/components/forms/register-form";

const features = [
  { icon: CalendarDays, label: "Book appointments in a few taps" },
  { icon: Microscope, label: "Upload & download lab reports" },
  { icon: Users, label: "Manage your whole family in one account" },
];

export default function RegisterPage() {
  return (
    <div className="relative isolate flex min-h-svh flex-col items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Full-page background image */}
      <Image
        src="/auth-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-[#0b1f4d]/20" />

      <div className="w-full max-w-md md:max-w-4xl">
        {/* Card */}
        <div className="grid overflow-hidden rounded-3xl border bg-card shadow-2xl md:grid-cols-2">
          {/* Left side: brand panel (desktop only) */}
          <div className="relative hidden flex-col p-10 text-white md:flex">
            <Image
              src="/auth-register.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 512px, 448px"
              className="object-cover object-bottom"
            />
            {/* Gradient overlay so text is readable */}
            <div className="absolute inset-0 bg-linear-to-b from-[#0b1f4d]/90 via-[#0d3b66]/40 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="CareNexus logo"
                    width={32}
                    height={32}
                  />
                </span>
                <span className="text-2xl font-semibold tracking-tight">
                  Care<span className="text-teal-300">Nexus</span>
                </span>
              </div>

              <h2 className="mt-10 text-3xl font-bold tracking-tight text-balance lg:text-3xl">
                Your health, connected.
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                Seamless booking, lab reports, and doctor consultations across
                15+ branches, all in one portal.
              </p>

              <ul className="mt-8 space-y-4">
                {features.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                      <Icon className="size-4 text-teal-300" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side: register form */}
          <div className="flex items-center p-6 sm:p-8 lg:p-10">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
