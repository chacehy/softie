"use client";

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    body: "Professional, friendly, and delivered exactly what we needed.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Mike Rodriguez",
    username: "@mikerod",
    body: "Amazing communication throughout the project. Highly recommend!",
    img: "https://avatar.vercel.sh/mike",
  },
  {
    name: "Emma Thompson",
    username: "@emmathompson",
    body: "Exceeded our expectations. Great attention to detail.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Alex Kumar",
    username: "@alexkumar",
    body: "Reliable and professional. Made our vision come to life.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Lisa Park",
    username: "@lisapark",
    body: "Friendly team, great results. Our customers love it!",
    img: "https://avatar.vercel.sh/lisa",
  },
  {
    name: "David Kim",
    username: "@davidkim",
    body: "Outstanding service and support. Will definitely work again.",
    img: "https://avatar.vercel.sh/david",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <figure
      onClick={scrollToTestimonials}
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-2xl border p-5",
        "border-[#7C3AED]/10 bg-white/70 backdrop-blur-sm shadow-soft",
        "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-soft-lg"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="h-9 w-9 rounded-xl ring-1 ring-[#7C3AED]/10"
          width="36"
          height="36"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="font-sora text-sm font-semibold text-[#161122]">
            {name}
          </figcaption>
          <p className="font-inter text-xs font-medium text-[#9a93a8]">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-3 font-inter text-sm leading-relaxed text-[#5b5566]">
        {body}
      </blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden border-y border-[#7C3AED]/8 bg-[#F5F3FF]/60 py-14">
      <Marquee pauseOnHover className="[--duration:28s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:28s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#F5F3FF] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#F5F3FF] to-transparent"></div>
    </div>
  )
}
