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
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        // hover effects
        "transition-all duration-300 hover:scale-105 hover:shadow-lg"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gray-100/50 py-12">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-gray-50/30 pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-gray-50/30 pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
