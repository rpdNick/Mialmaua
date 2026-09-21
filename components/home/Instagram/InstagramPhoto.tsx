import Image from "next/image";
import type { InstagramPost } from "./types";

type InstagramPhotoProps = {
  post: InstagramPost
}

export function InstagramPhoto({ post }: InstagramPhotoProps) {
  const content = (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
      <Image
        src={post.image}
        alt={post.alt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  )

  return content
}