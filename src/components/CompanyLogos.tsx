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
    width: 210,
  },
  {
    name: "Coefficient Giving: Navigating Transformative AI",
    src: "/assets/logos/coefficientgiving.png",
    href: "https://coefficientgiving.org/funds/navigating-transformative-ai/",
  },
  {
    name: "Timaeus",
    src: "/assets/logos/timaeus.png?v=2",
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
    src: "/assets/logos/aipolicynetwork.png?v=2",
    href: "https://theaipn.org",
  },
  {
    name: "AI Futures Project",
    src: "/assets/logos/aifutures.png?v=2",
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
      {logos.map(({ name, src, href, width }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <img src={src} alt={name} width={width} className="mx-auto" />
        </a>
      ))}
    </div>
  );
}
