import type { MetadataRoute } from 'next'
 
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Repattern',
    short_name: 'Repattern',
    description: 'Repattern is your personal audio coach for mindset transformation. It helps you rewire limiting beliefs and emotional habits through guided audio sessions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}