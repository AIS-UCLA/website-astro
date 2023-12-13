import Typewriter from "typewriter-effect";

const quoteList: string[] = [
  "Keep calm and AI safe.",
  "Don't be a fool, be AI safe!",
  "AI safety is no joke!",
  "Intelligent machines need intelligent regulation.",
  "Leaving AI safety to chance is reckless.",
  "Only a fool would take risks with AI safety.",
  "Be smart, be safe, be AI safe.",
  "When it comes to AI safety, an ounce of prevention is worth a pound of cure.",
  "If you can't be AI safe, be AI sorry.",
  "Play it safe, make it AI safe.",
  "The safest AI is a well-regulated AI.",
  "Better AI safe then AI sorry!",
  "A safe AI is a happy AI.",
  "A well-regulated AI is a well-behaved AI.",
  "An AI in safety is an AI in control.",
  "Safety first when it comes to AI.",
  "Don't be reckless, be AI safe.",
  "Make AI safety your top priority.",
  "Put AI safety first and foremost.",
  "Always remember: when it comes to AI safety, better safe than sorry!",
];

export default function GPT3() {
  const style = {
    backgroundColor: "#d2f4d3",
    fontSize: "1.5rem",
  };

  return (
    <blockquote className="not-prose border-2 border-black p-3">
      <Typewriter
        options={{
          strings: quoteList,
          autoStart: true,
          loop: true,
          wrapperClassName: "bg-gpt text-2xl",
          cursorClassName: "text-2xl",
        }}
      />
      <footer className="font-bold">— GPT3</footer>
    </blockquote>
  );
}
