const logos = [
  {
    name: "Anthropic",
    src: "/assets/logos/anthropic.svg",
    href: "https://www.anthropic.com",
  },
  {
    name: "Apollo Research",
    src: "/assets/logos/apollo.png",
    href: "https://www.apolloresearch.ai",
  },
  {
    name: "Epoch AI",
    src: "/assets/logos/epoch.svg",
    href: "https://epoch.ai",
  },
  {
    name: "Coefficient Giving: Global Catastrophic Risks",
    src: "/assets/logos/coefficientgiving.png",
    href: "https://coefficientgiving.org/funds/global-catastrophic-risks-opportunities/",
  },
  {
    name: "Timaeus",
    src: "/assets/logos/timaeus.png",
    href: "https://timaeus.co",
  },
  { name: "METR", src: "/assets/logos/metr.svg", href: "https://metr.org" },
  {
    name: "MATS",
    src: "/assets/logos/mats.svg",
    href: "https://www.matsprogram.org",
  },
  {
    name: "UChicago XLab",
    src: "/assets/logos/uchicagoxrisklab.png",
    href: "https://xrisk.uchicago.edu",
  },
  {
    name: "The AI Policy Network",
    src: "/assets/logos/aipolicynetwork.png",
    href: "https://theaipn.org",
  },
  {
    name: "AI Futures Project",
    src: "/assets/logos/aifutures.png",
    href: "https://www.aifutures.org",
  },
  {
    name: "Forethought",
    src: "/assets/logos/forethought.svg",
    href: "https://www.forethought.org",
  },
  {
    name: "IAPS",
    src: "/assets/logos/IAPSlogo.webp",
    href: "https://www.iaps.ai",
  },
];

export default function CompanyLogos() {
  return (
    <div className="grid grid-cols-3 gap-12 place-items-center">
      {logos.map(({ name, src, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <img src={src} alt={name} className="mx-auto" />
        </a>
      ))}
    </div>
  );
}
