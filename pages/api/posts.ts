// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "OPTIONS"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse<any>,
  fn: any
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export type Post = {
  id: string;
  title: string;
  short_description: string;
  created_by: string;
  created_at: number; // timestampin milliseconds
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const data: Post[] = [
    {
      id: "1",
      title: "Everything starts with a dream...",
      short_description:
        "A better way to accomplish your dream, you need to hard-working and try the best to afford that.",
      created_by: "@sombochea",
      created_at: new Date().getTime(),
    },
    {
      id: "2",
      title: "Start from small, do the best",
      short_description:
        "Everything should starting from small pie work, to do better and scale larger.",
      created_by: "@sombochea",
      created_at: new Date().getTime(),
    },
    {
      id: "3",
      title: "Better is matter for all everthing",
      short_description:
        "So, wanna good chance to handle things? The better way is the better doning.",
      created_by: "@sombochea",
      created_at: new Date().getTime(),
    },
    {
      id: "4",
      title: "Solve the problem, with the best solution",
      short_description:
        "Try to solve the problem with the best solution, and you will get the best result.",
      created_by: "@sombochea",
      created_at: new Date().getTime(),
    },
    {
      id: "5",
      title: "Make the AI do ✍️ not think 🤔",
      short_description:
        "In the new era of the AI world, everyone looks into and is very interested.",
      created_by: "@sombochea",
      created_at: new Date().getTime(),
    },
  ];

  // Run the middleware
  await runMiddleware(req, res, cors);

  res.status(200).json(data);
}
