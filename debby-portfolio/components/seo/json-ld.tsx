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
    givenName: "Deborah Ayoka",
    familyName: "Idowu",
    alternateName: [
      site.legalName,
      "Idowu Deborah Ayoka",
      "Debby",
      "Debby Tella Graphic Designer",
      "yemisi4",
    ],
    jobTitle: "Graphic Designer",
    description: seo.description,
    url: siteUrl,
    image: `${siteUrl}/portrait/debby.jpg`,
    email: site.email,
    sameAs: [site.fiverr, site.whatsapp],
    knowsAbout: [
      "Graphic design",
      "Label design",
      "Packaging design",
      "Social media design",
      "Canva template design",
      "PowerPoint design",
      "Presentation design",
      "Ebook cover design",
      "Magazine design",
      "Mural design",
      "Stained glass design",
      "Digital marketing design",
      "Jersey sublimation design",
      "Product design",
      "Brand visuals",
    ],
  };

  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "Debby Tella Graphic Design",
    alternateName: [site.legalName, "Debby Tella Portfolio", "yemisi4"],
    description: seo.description,
    url: siteUrl,
    image: `${siteUrl}/portrait/debby.jpg`,
    email: site.email,
    priceRange: "$$",
    areaServed: [{ "@type": "Place", name: "Worldwide" }],
    availableLanguage: ["English"],
    founder: { "@id": `${siteUrl}/#person` },
    employee: { "@id": `${siteUrl}/#person` },
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
      name: "Graphic design packages by Debby Tella",
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
    name: "Debby Tella — Graphic Designer",
    alternateName: [site.name, site.legalName, "Debby Tella Graphic Designer"],
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
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Debby Tella?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debby Tella is a professional graphic designer (legal name IDOWU DEBORAH AYOKA) with 3+ years experience and an active Fiverr profile as yemisi4. She creates label design, packaging, social media designs, Canva templates, presentations, ebook covers, magazine, mural, stained glass, digital marketing, jersey and product design.",
        },
      },
      {
        "@type": "Question",
        name: "Who is IDOWU DEBORAH AYOKA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IDOWU DEBORAH AYOKA is the legal name of Debby Tella, a professional graphic designer also known on Fiverr as yemisi4.",
        },
      },
      ...faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ],
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Design workspaces by Debby Tella",
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
