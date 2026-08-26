import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlofoxResizableEmbed } from "@/components/glofox/GlofoxResizableEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbListSchema } from "@/lib/seo/schema";
import { GLOFOX_URLS } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Login or Register",
  description: "Sign in to your Sauna Club Co account, or create a free one to book sessions and manage your membership.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Login or Register", path: "/login" },
        ])}
      />
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-center font-display text-6xl uppercase tracking-wide text-cream md:text-7xl">
          Login or Register
        </h1>
        <p className="mt-4 text-center text-cream/80">
          Sign in to manage your bookings and membership, or create a free account if this is your first time with
          us.
        </p>

        <div className="mt-8 max-h-screen overflow-y-auto rounded-2xl border-2 border-green-light bg-tan-dark p-2 shadow-[8px_8px_0_0_var(--color-green-light)]">
          <div className="overflow-hidden rounded-xl bg-tan-dark p-4">
            <GlofoxResizableEmbed
              id="glofox_6a7a099409481f1d490ae9e4_register_login"
              src={GLOFOX_URLS.loginRegister}
              title="Sauna Club Co login and registration"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
