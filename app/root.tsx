import { OnchainKitProvider } from "@coinbase/onchainkit";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <OnchainKitProvider apiKey={process.env.ONCHAINKIT_CLIENT_API_KEY}>
          <Outlet />
        </OnchainKitProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}