# Repattern

Modern web app designed for audio-based mindset training — hypnosis, Neuro-Linguistic Programming (NLP), and self-development sessions. It helps you rewire limiting beliefs and emotional habits through guided audio experiences.

In NLP, _patterns_ refer to the mental and emotional programs that guide how we think, feel, and act.
These include:
- Habitual thought loops (“I can’t do this.”)
- Emotional triggers (anxiety when speaking publicly)
- Behavioral responses (procrastination, avoidance, overreaction)

Using Repattern you consciously interrupt and reshape those automatic patterns into more useful ones. In other words, it’s the process of reprogramming the subconscious mind — changing the structure of experience, not just its content. Start building emotional resilience and confidence through repetition and auditory immersion with Repattern.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Content can be provided by pointing `NEXT_PUBLIC_REMOTE_CONTENT_URL` to a JSON file consisting of [AudioFiles](https://github.com/florianbussmann/repattern/blob/main/lib/audioStorage.ts#L1):

```json
[
    {
        "id": "1",
        "title": "Deep Relaxation Hypnosis",
        "duration": "25:00",
        "category": "Hypnosis",
        "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    ...
]
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
