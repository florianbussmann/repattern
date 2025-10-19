export const dynamic = "force-static";

export default function StaticRedirect() {
  return (
    <meta httpEquiv="refresh" content="0; url=/f/all" />
  );
}
