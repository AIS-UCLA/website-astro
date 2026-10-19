export default function SponsorLogos() {
  return (
    <div className="not-prose flex flex-wrap justify-center items-center gap-x-20 gap-y-10 my-8">
      <a
        href="https://www.janestreet.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/logos/jane_street.png"
          alt="Jane Street"
          className="h-20 w-auto"
        />
      </a>
      <a
        href="https://kairos-project.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/logos/kairos.svg"
          alt="Kairos"
          className="h-10 w-auto"
        />
      </a>
    </div>
  );
}
