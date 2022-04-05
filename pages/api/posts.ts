// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Post = {
  id: string
  title: string
  short_description: string
  created_by: string
  created_at: number // timestampin milliseconds
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const data: Post[] = [
    {
      id: "1",
      title: "Everything starts with a dream...",
      short_description: "A better way to accomplish your dream, you need to hard-working and try the best to afford that.",
      created_by: "@sombochea",
      created_at: new Date().getTime(),
    },
    {
      id: "2",
      title: "Start from small, do the best",
      short_description: "Everything should starting from small pie work, to do better and scale larger.",
      created_by: "@sombochea",
      created_at: new Date().getTime(),
    },
    {
      id: "3",
      title: "Better is matter...",
      short_description: "So, wanna good chance to handle things? The better way is the better doning.",
      created_by: "@sombochea",
      created_at: new Date().getTime(),
    },
  ]
  res.status(200).json(data)
}
