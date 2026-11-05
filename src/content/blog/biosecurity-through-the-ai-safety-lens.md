---
title: "Biosecurity through the AI safety lens"
author: Nathan Wang
date: 2026-11-04
---

Biosecurity and AI safety are two niche fields, and they are very different. Organizing how each one can be approached is interesting enough to be worth a post.

Biosecurity traditionally concerns ethics and physical control: select-agent lists of the specimens a lab may not hold freely, drawn up after the 2001 anthrax letters, and dual-use review after the 2011–2012 H5N1 transmissibility experiments, where procedures run for legitimate research also carry serious contamination and misuse risk ([CRS overview](https://www.everycrsreport.com/files/2025-03-10_R47114_29ada5a23741116c2df9b4ad1d1c8e89e562128b.pdf), [DURC frameworks](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12183502/)). Those rules assume a short list of known pathogens (bacteria, viruses) and a credentialed reviewer who can recognize the hazard. Now the concern is mostly AI: models cut the expensive steps out of the biology pipeline and design better ones that align less with human values and are harder to audit.

Yet most of the biology research community still publishes open-source tools and pushes the frontier of what we understand about nature, while AI researchers have spent years proposing limits on open-source biology. Why the split? In this post I am organizing the knowledge I want to carry into more formal discussions of biosecurity.

![Two defaults about where the difficulty lives](/assets/blog/biosecurity-through-the-ai-safety-lens/fig1-two-defaults.png)

*Figure 1. The same capability result, read through two unstated premises. The empty space under the left arrow is the computer scientist's picture of execution.*

## 2. What a lab procedure looks like in practice

The central dogma: information flows from inherited material to expression. In the lab, it is a complete mess.

A biologist runs design, build, test, learn — the same loop as software development, many orders of magnitude slower.

The bench itself is a −80 °C freezer, a biosafety cabinet, pipettes and tips, a CO₂ incubator, a microcentrifuge, a plate reader. The freezer holds all the lab's strains and can be rebuilt only over months. The cabinet takes fifteen minutes to make sterile, and one lapse costs a week. The plate reader gives you a number in three minutes, and took three months before anyone trusted it.

![The bench: six objects and what each one costs in time](/assets/blog/biosecurity-through-the-ai-safety-lens/fig2-the-bench.jpg)

*Figure 2. A working lab, then six objects with what each costs you in time. All photographs public domain; credits in the plate.*

The evaluator is stochastic, so a failure usually will not tell you which step failed. And there is no checkpoint.

![The design-build-test-learn loop with real step times](/assets/blog/biosecurity-through-the-ai-safety-lens/fig3-dbtl-loop.png)

*Figure 3. The same loop a software developer runs, drawn with bench step times. Same shape, different clock.*

The local example is SwabSeq. During COVID a UCLA group turned testing into a sequencing problem: barcode the samples, pool combinations of them, read them all at once. As an idea it is clean. Getting it to run at scale took physical engineering the idea did not contain.

Recent advances in the synthesis of molecules, such as cell-free protein synthesis (CFPS), drop the living host: transcription and translation run in a tube. That removes the most fragile steps and moves the biologist's work closer to a computer scientist's, done remotely. Like most scientific progress, it makes the process cheaper, faster, simpler and smaller — which is also why it concerns us now that AI is here. I mention it because it is the part of biology I know best.

## 3. AI changed information science and biology a lot…

Information scientists work against constraints of time, energy, and precision.

In biology the constraints are physical lab procedures first, then highly specialized knowledge. AI has changed the second: the barrier to technical knowledge, and the reach of design tools. It has not changed much of the physical side, yet.

![Uplift by layer, with the strength of the evidence on each](/assets/blog/biosecurity-through-the-ai-safety-lens/fig4-uplift-by-layer.png)

*Figure 4. Uplift by layer, with the evidence behind each. Schematic: there are no axis values, and the divergence between the rows is the claim, not the magnitudes.*

### Technical skills

[LLMs lower the barrier](https://arxiv.org/abs/2306.13952) — they hand a non-expert the methods and the troubleshooting that used to require a lab standing behind them: which protocol to pick, what to substitute when a chemical or a piece of equipment is missing, why a reaction came back empty.

Frontier models have demonstrated expert-level skill on dual-use virology troubleshooting: examining results, planning the debugging, then proposing fixes for in-lab procedures ([SecureBio](https://securebio.org/blog/evaluating-superhuman-biological-capabilities/)). Controlled wet-lab studies of novices — which is where I sit — find much smaller and far less consistent gains, which is what you would expect ([review](https://arxiv.org/pdf/2609.16213)).

### Paraphrasing a DNA sequence?

Design tools in biology use the principles of chemistry and biology to design a molecule, the way an architect uses civil engineering to design a building. They set the ceiling on how smart and effective a product can be, and AI has raised that ceiling: these tools reach designs nobody could reach before. That also makes the results harder to screen.

A protein language model is trained the way language models are trained: tokens of DNA sequence, contexts of functional groups, a next-token or masked objective, a corpus of sequences where you would put a corpus of text.

But this alphabet, unlike English, is too difficult to read. In English, form and meaning travel together, and the linearity of the language makes string comparison and reading comprehension work. In protein sequence, function is not a property of the string at all — it belongs to the object the string folds into, under rules of statistical mechanics and molecular dynamics we still do not fully understand, and that map is many-to-one in ways no one can read by eye.

Biologists cannot read sequences either. We all work through models and assays, the lab procedures that examine something indirectly. That makes biology a language more native to AI than to us. Let me know if you see someone reading ATTACTCG as fluently as English.

The next problem is classifying the objects made in this language.

Two sequences can share almost no characters and still fold into near enough the same shape and carry the same biological function. But the classic synthesis screen asks: *does this string resemble a string we already know is dangerous?* The non-linearity described above stops that screen from working perfectly, even though it has worked well so far, on the strength of how many sequences we already know.

So what happens when AI designs sequences that come nowhere near anything in nature? What if there are small islands in that untrodden space that our databases never mapped? Would the classic synthesis screen still work?

![Different sequences, a similar fold, the same function](/assets/blog/biosecurity-through-the-ai-safety-lens/fig5-sequence-vs-fold.png)

*Figure 5. avGFP and copGFP share 19% amino-acid identity, the same β-can fold and the same job. The screen reads the top band; the property it is trying to catch is defined in the middle one. The DNA letters are illustrative.*

This is not hypothetical. A Microsoft-led group showed that generative design tools could produce variants of proteins of concern that existing screening software failed to flag. They disclosed it confidentially to synthesis providers, patches shipped, and follow-up work fragmented the sequences to try again and found the patched tools held — again, only within the limits of what we know ([*Science*](https://www.science.org/doi/10.1126/science.adu8578), [follow-up](https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2026.1858951/full)).

## 4. AI hasn't changed the physical pipeline much

A sequence on a screen is not an organism: between a design and anything that works in the world sit synthesis, assembly, expression in a host, culture and scale-up, every step as physical and unforgiving as the bench in section 2.

AI closes the knowledge gap, not the physical one. It does not give you the freezer, the sterile cabinet, or the hands that keep a culture alive for six weeks. Academia still endorses open source on those grounds: the barrier of the wet lab is high enough, in practice, to stand as an iron gate against the harms.

Which means the biologist's default is, right now, correct. I would argue that this layer is getting thinner too, but that is for another post.

## 5. Making a field safe

The model that designs a protein of concern is the model that designs an enzyme for carbon capture — different prompt, same weights. No intervention stops one use without stopping the other, so the field proceeds carefully, with screening and disclosure norms bolted on around the edges: reasonable, and still producing risk. Making a field safe when capability outruns verification is the alignment problem, and biosecurity has been living with it longer, with institutional machinery most of us have never learned. That machinery is protecting us for as long as it holds.

I am skeptical that the biosecurity challenge we face will be solved soon, but national and international coordination on enforcing standardized policy may patch much of the current gap. That argument is for a later post.
