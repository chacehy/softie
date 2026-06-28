"use client";

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Youcef Benali",
    username: "CEO, Zidni",
    body: "Retours clients positifs dès le premier jour. Ils ont cerné exactement ce qu'on voulait.",
    img: "https://avatar.vercel.sh/youcef",
  },
  {
    name: "Amira Hadjadj",
    username: "Founder, Noor",
    body: "Didn't expect it to come together this fast. No drama, no excuses. Just results.",
    img: "https://avatar.vercel.sh/amira",
  },
  {
    name: "Karim Messaoud",
    username: "CTO, Darna",
    body: "Code propre, bien structuré, maintenable. Chose vraiment rare. On repart avec eux.",
    img: "https://avatar.vercel.sh/karim",
  },
  {
    name: "Nadia Boudiaf",
    username: "Product, Baraka",
    body: "Communication in a different league. Every update was clear, no jargon.",
    img: "https://avatar.vercel.sh/nadia",
  },
  {
    name: "Sofiane Rahmani",
    username: "Director, Wakha Studio",
    body: "Au début j'étais sceptique. Le résultat dépasse ce qu'on avait imaginé.",
    img: "https://avatar.vercel.sh/sofiane",
  },
  {
    name: "Lina Cherif",
    username: "CEO, Raha",
    body: "Felt less like hiring a vendor and more like having a co-founder for the build.",
    img: "https://avatar.vercel.sh/lina",
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
          <p className="font-inter text-xs text-[#9a93a8]">
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
