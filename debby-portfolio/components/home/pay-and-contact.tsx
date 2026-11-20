"use client";

import {
  Ban,
  Bitcoin,
  Clock3,
  Copy,
  HeartHandshake,
  Landmark,
  Wallet,
} from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HireDebbyButton } from "@/components/contact/hire-debby-button";
import {
  EthereumIcon,
  FiverrIcon,
  GmailIcon,
  OpayIcon,
  PalmPayIcon,
  WhatsAppIcon,
} from "@/components/icons/brand-icons";
import { ReviewMarquee } from "@/components/home/review-marquee";

const paymentIcons = [
  {
    label: "Opay",
    node: <OpayIcon className="h-12 w-12" />,
  },
  {
    label: "PalmPay",
    node: <PalmPayIcon className="h-12 w-12" />,
  },
  {
    label: "Bank transfer",
    node: (
      <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-gold/20 text-gold">
        <Landmark className="h-6 w-6" />
      </span>
    ),
  },
  {
    label: "BTC",
    node: (
      <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#F7931A]/15 text-[#F7931A]">
        <Bitcoin className="h-6 w-6" />
      </span>
    ),
  },
  {
    label: "USDT",
    node: (
      <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#26A17B]/15 text-[#26A17B]">
        <Wallet className="h-6 w-6" />
      </span>
    ),
  },
  {
    label: "Ethereum",
    node: (
      <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#627EEA]/15 text-[#627EEA]">
        <EthereumIcon className="h-6 w-6" />
      </span>
    ),
  },
];

export function PayAndContact() {
  const bank = site.payments.bankDetails;
  const whatsappText = encodeURIComponent(
    "Hi Debby, I want to pay / hire you for a project. Please confirm payment details."
  );

  async function copyAccount() {
    try {
      await navigator.clipboard.writeText(bank.accountNumber);
      toast({ title: "Account number copied", variant: "success" });
    } catch {
      toast({ title: "Could not copy — please copy manually", variant: "error" });
    }
  }

  return (
    <section id="pay-and-contact" className="scroll-mt-24 border-b bg-background">
      <div className="border-b border-gold/25 bg-secondary/60 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.28em] text-gold">
              How to pay Debby
            </p>
            <h2 className="mt-3 text-center font-serif text-3xl sm:text-5xl">
              Opay · PalmPay · Bank · Crypto
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
              Pay clearly and securely.{" "}
              <span className="font-semibold text-foreground">PayPal is not accepted.</span>{" "}
              Debby replies within 4–5 hours — not up to 24 hours.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {paymentIcons.map(({ label, node }) => (
              <div
                key={label}
                className="flex min-w-[104px] flex-col items-center gap-2 border border-border bg-background px-4 py-4"
              >
                {node}
                <span className="text-center text-xs font-medium">{label}</span>
              </div>
            ))}
            <div className="flex min-w-[104px] flex-col items-center gap-2 border border-destructive/40 bg-destructive/5 px-4 py-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-destructive/15 text-destructive">
                <Ban className="h-6 w-6" />
              </span>
              <span className="text-center text-xs font-medium text-destructive">No PayPal</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge className="bg-gold text-charcoal hover:bg-gold">
              <Clock3 className="mr-1 h-3.5 w-3.5" />
              Reply within 4–5 hours
            </Badge>
            <Badge variant="outline">{site.urgencyNote}</Badge>
          </div>
        </div>
      </div>

      <div className="py-6">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.22em] text-gold">
          Buyer reviews
        </p>
        <ReviewMarquee />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="h-full border border-gold/40 bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <OpayIcon className="h-10 w-10" />
                <PalmPayIcon className="h-10 w-10" />
                <Badge className="bg-gold text-charcoal hover:bg-gold">Payment details</Badge>
              </div>
              <h3 className="mt-5 font-serif text-3xl">Pay via Opay / PalmPay / bank</h3>
              <p className="mt-2 text-sm text-muted-foreground">{bank.note}</p>

              <dl className="mt-6 space-y-4 border border-border bg-secondary/40 p-5">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Account name
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-foreground">
                    {bank.accountName}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Account number
                  </dt>
                  <dd className="mt-1 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-3xl font-semibold tracking-wide text-gold">
                      {bank.accountNumber}
                    </span>
                    <Button type="button" size="sm" variant="outline" onClick={copyAccount}>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </Button>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Works with
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {bank.banks.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </dd>
                </div>
              </dl>

              <p className="mt-5 text-sm text-muted-foreground">
                For BTC, USDT, Ethereum and other payment methods, message Debby first —
                she will share the correct details privately.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="flex h-full flex-col gap-5">
              <div className="border border-border bg-secondary/50 p-6">
                <p className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
                  <FiverrIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {site.payments.fiverrNote}
                </p>
                <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={site.fiverr} target="_blank" rel="noreferrer">
                    <FiverrIcon className="h-4 w-4" />
                    Pay on Fiverr (optional)
                  </a>
                </Button>
              </div>

              <div className="border border-gold/30 bg-card p-6">
                <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                  <HeartHandshake className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {site.payments.commitment}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-8 border-2 border-gold bg-charcoal p-6 text-white sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">
              Pay Debby now
            </p>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
              Want to pay Debby for your project now?
            </h3>
            <p className="mt-3 max-w-2xl text-base text-white/80">
              Kindly send a message on WhatsApp or Gmail. Debby will confirm your
              project and guide you on payment — bank / Opay / PalmPay details are
              ready above, and other methods are shared after you message.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={`${site.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 border border-white/20 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                  <WhatsAppIcon className="h-7 w-7" />
                </span>
                <span>
                  <span className="block text-sm text-white/65">WhatsApp</span>
                  <span className="mt-1 block text-2xl font-semibold tracking-wide">
                    Message Debby
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  "I want to pay Debby for a project"
                )}`}
                className="flex items-center gap-4 border border-white/20 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20 text-red-300">
                  <GmailIcon className="h-7 w-7" />
                </span>
                <span>
                  <span className="block text-sm text-white/65">Gmail</span>
                  <span className="mt-1 block break-all text-lg font-semibold sm:text-xl">
                    {site.email}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-charcoal hover:bg-gold/90">
                <a
                  href={`${site.whatsapp}?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Message on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white hover:text-charcoal"
              >
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    "I want to pay Debby for a project"
                  )}`}
                >
                  <GmailIcon className="h-4 w-4" />
                  Message on Gmail
                </a>
              </Button>
              <HireDebbyButton className="h-12 border-white/35 bg-transparent px-6 text-white hover:bg-white hover:text-charcoal" />
            </div>

            <p className="mt-5 text-sm font-medium text-gold">{site.responseTime}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
