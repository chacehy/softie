import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Softie's privacy policy — how we collect, use, and protect your personal data in compliance with Algerian Law 18-07.",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 md:py-32">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-1.5 font-inter text-sm text-[#7C3AED] hover:underline"
      >
        &larr; Back to home
      </Link>

      <h1 className="font-sora text-4xl font-bold tracking-tight text-[#161122]">
        Privacy Policy
      </h1>
      <p className="mt-3 font-inter text-sm text-[#5b5566]">
        Last updated: 29 June 2026
      </p>

      <div className="prose-softie mt-12 space-y-10 font-inter text-[15px] leading-relaxed text-[#3a3545]">
        {/* 1 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            1. Who we are
          </h2>
          <p>
            Softie is a software studio based in Algeria. For the purposes of
            Algerian data-protection law (Law&nbsp;18-07 of 10 June 2018 on the
            protection of natural persons in the processing of personal data),
            Softie is the data controller responsible for your personal data.
          </p>
          <p className="mt-2">
            Contact:{" "}
            <a href="mailto:hello@softie.cc" className="text-[#7C3AED] hover:underline">
              hello@softie.cc
            </a>{" "}
            &middot; 0770 95 02 40
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            2. Data we collect
          </h2>
          <p>We collect only what you voluntarily provide through the contact form:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your message content</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> use cookies, analytics trackers, or any
            third-party tracking scripts. We do not collect data automatically
            from your device.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            3. Legal basis &amp; purpose
          </h2>
          <p>
            Under Article&nbsp;7 of Law&nbsp;18-07, we process your data based
            on your <strong>explicit consent</strong> — given when you
            voluntarily submit the contact form. The sole purpose is to respond
            to your enquiry and discuss potential project collaboration.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            4. How we process your data
          </h2>
          <p>
            Your form submission is transmitted via{" "}
            <strong>EmailJS</strong>, a third-party email delivery service, and
            delivered directly to our inbox. We do not store your data in any
            database or CRM beyond our email system.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            5. Data sharing &amp; transfers
          </h2>
          <p>
            We do not sell, rent, or share your personal data with third parties
            for marketing purposes. Your data may pass through EmailJS servers
            (located outside Algeria) solely to deliver your message to us.
          </p>
          <p className="mt-2">
            Per Article&nbsp;44 of Law&nbsp;18-07, any cross-border transfer is
            limited to what is strictly necessary for the service you
            requested, and EmailJS acts as a data processor on our behalf.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            6. Data retention
          </h2>
          <p>
            We retain your contact information only as long as necessary to
            respond to your enquiry and for a reasonable follow-up period (up to
            12&nbsp;months). After that, messages are deleted from our inbox.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            7. Your rights
          </h2>
          <p>
            Under Law&nbsp;18-07 (Articles&nbsp;34–39), you have the right to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Access</strong> — request a copy of the personal data we
              hold about you.
            </li>
            <li>
              <strong>Rectification</strong> — ask us to correct inaccurate data.
            </li>
            <li>
              <strong>Deletion</strong> — ask us to erase your data at any time.
            </li>
            <li>
              <strong>Opposition</strong> — object to the processing of your
              data for legitimate reasons.
            </li>
            <li>
              <strong>Withdraw consent</strong> — revoke your consent at any
              time without affecting the lawfulness of processing carried out
              before withdrawal.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email us at{" "}
            <a href="mailto:hello@softie.cc" className="text-[#7C3AED] hover:underline">
              hello@softie.cc
            </a>
            . We will respond within 30&nbsp;days.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            8. Security
          </h2>
          <p>
            We take reasonable technical and organisational measures to protect
            your data against unauthorised access, loss, or alteration, as
            required by Article&nbsp;42 of Law&nbsp;18-07. The site is served
            over HTTPS and form submissions are encrypted in transit.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            9. Supervisory authority
          </h2>
          <p>
            If you believe your data has been mishandled, you have the right to
            lodge a complaint with Algeria&rsquo;s national data protection
            authority (Autorité Nationale de Protection des Données à Caractère
            Personnel), as established by Law&nbsp;18-07.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="font-sora text-lg font-semibold text-[#161122]">
            10. Changes to this policy
          </h2>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated &ldquo;Last updated&rdquo; date.
            Continued use of the site after changes constitutes acceptance of the
            revised policy.
          </p>
        </section>
      </div>
    </main>
  );
}
