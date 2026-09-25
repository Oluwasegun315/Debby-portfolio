import { faqs } from "@/data/faq";
import { seo, site } from "@/data/site";
import { workCategories } from "@/data/work-categories";

const siteUrl = "https://debbytella.com";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: site.name,
    alternateName: ["Debby", "IDOWU DEBORAH AYOKA", "Debby Tella Graphic Designer"],
    jobTitle: "Graphic Designer",
    description: seo.description,
    url: siteUrl,
    image: `${siteUrl}/portrait/debby.jpg`,
    email: site.email,
    telephone: "+2349135101748",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressLocality: "Nigeria",
    },
    sameAs: [site.fiverr, site.whatsapp],
    knowsAbout: [
      "Graphic design",
      "Social media design",
      "Canva template design",
      "PowerPoint design",
      "Presentation design",
      "Ebook cover design",
      "Brand visuals",
    ],
  };

  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: `${site.name} — Graphic Design`,
    description: seo.description,
    url: siteUrl,
    image: `${siteUrl}/portrait/debby.jpg`,
    telephone: "+2349135101748",
    email: site.email,
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Place", name: "Worldwide" },
    ],
    availableLanguage: ["English"],
    founder: { "@id": `${siteUrl}/#person` },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    paymentAccepted: "Bank Transfer, Opay, PalmPay, Cryptocurrency",
    currenciesAccepted: "NGN, USD, USDT, BTC, ETH",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Graphic design packages",
      itemListElement: site.packages.map((pack) => ({
        "@type": "Offer",
        name: pack.name,
        description: pack.idealFor,
        price: pack.priceFrom,
        priceCurrency: "USD",
        url: `${siteUrl}/#packages`,
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${site.name} Portfolio`,
    description: seo.description,
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/my-work`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Debby Tella design workspaces",
    itemListElement: workCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.title,
      url: `${siteUrl}/work/${category.slug}`,
    })),
  };

  const payloads = [person, business, website, faqPage, services];

  return (
    <>
      {payloads.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
