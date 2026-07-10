import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { InstagramPhoto, type InstagramPost } from "./InstagramPhoto"

const INSTAGRAM_URL = "https://www.instagram.com"

const posts: InstagramPost[] = [
  { image: "/instagram/img-1.jpg", alt: "Mialmaua в Instagram 1"},
  { image: "/instagram/img-2.jpg", alt: "Mialmaua в Instagram 2"},
  { image: "/instagram/img-3.jpg", alt: "Mialmaua в Instagram 3"},
  { image: "/instagram/img-4.jpg", alt: "Mialmaua в Instagram 4"},
]

export function Instagram() {
  return (
    <section className="py-4 md:py-8">
      <Container>
        <div className="mb-7 text-center">
          <h2 className="text-4xl font-extrabold">Ми в Instagram</h2>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm  text-brown-100"
          >
            @mialmaua
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,145px)] gap-2">
          {posts.map((post) => (
            <InstagramPhoto key={post.image} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}