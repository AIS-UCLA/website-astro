---
layout: ../../layouts/SimpleLayout.astro
title: Diffusion Fellowship
---

# AI Safety at UCLA Intro Fellowship: Diffusion Track

## Table of Contents

1. [Week 1: Preventing an AI-related catastrophe + Scaling Hypothesis](#week-1-preventing-an-ai-related-catastrophe--scaling-hypothesis)
2. [Week 2: The future is going to be wild + Image Generation Mathematical Framework](#week-2-the-future-is-going-to-be-wild--image-generation-mathematical-framework)
3. [Week 3: Introducing autoencoders, KL divergence, and unsolved Problems in AI Safety.](#week-3-introducing-autoencoders-kl-divergence-and-unsolved-problems-in-ai-safety)
4. [Week 4: AI Safety Field Background + Deep dive into VAEs](#week-4-ai-safety-field-background--deep-dive-into-vaes)
5. [Week 5: AI Alignment Failure Modes + Mathematics behind VAEs.](#week-5-ai-alignment-failure-modes--mathematics-behind-vaes)
6. [Week 6: Open Problems in AI X-Risk + Diffusion Models](#week-6-open-problems-in-ai-x-risk--diffusion-models)

## Week 1: Preventing an AI-related Catastrophe + Scaling Hypothesis

<img src="https://github.com/user-attachments/assets/26bdee37-2bef-437f-bd42-c502f9cd9dcf" width="300">

Core Readings: (70 mins)

1. [Intelligence Explosion](https://intelligence.org/files/IE-EI.pdf) (20 min)
2. [Circuits, Distilled](https://distill.pub/2020/circuits/zoom-in/) (50 min)

Learning Goals:

1. Familiarize yourself with the arguments for AI being an existential risk
2. Understand the rapid scaling of modern AI models and its implications for our
   interpretability methods.

## Week 2: The future is going to be wild + Image Generation Mathematical Framework

<img src="https://github.com/user-attachments/assets/eb3b09d5-4616-4adf-9778-94a4998cafdb" width="300">

Core Content: (2h 15min)

Theoretical Readings (75 min):

1. [AI and Compute](https://openai.com/blog/ai-and-compute/) (5 min)
2. [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) (10 min)
3. [All Possible Views About Humanity’s Future are Wild](https://www.cold-takes.com/all-possible-views-about-humanitys-future-are-wild/) (15 min)
4. ["This can’t go on"](https://www.cold-takes.com/this-cant-go-on/) (25 min)
5. [Intelligence Explosion: Evidence and Import](https://drive.google.com/file/d/1QxMuScnYvyq-XmxYeqBRHKz7cZoOosHr/view) (20 min)

Practical Readings (60 min):

1. (if unfamiliar) [3 Blue 1 Brown Neural Networks](https://www.3blue1brown.com/topics/neural-networks), Chapters 1 and 2 (30 min)
2. [DDPMs, Part 1 - Autoencoders](https://gist.github.com/wz-ml/07ad588d3dbf8f30f13b1e55c7e442ab) (30 mins).

Learning Goals:

Theoretical

1. Understand the relationship between growing compute and general capabilities.
2. Gain experience with the types of datasets used in modern AI systems.
3. See how AI could impact a wide range of industries.
4. Reflect on the radical impact AI can have on the future of humanity
5. Reflect on the strange possibilities of our economic future.
6. Reflect on the speed with which AI will transition from powerful to superintelligence.

Practical

1. Understand neural networks and deep learning.
2. Understanding the intuition behind compression within autoencoders.

## Week 3: Introducing autoencoders, KL divergence, and unsolved Problems in AI Safety.

<img src="https://github.com/user-attachments/assets/68bf23a3-1751-4268-8a7b-1bc9d96ece5a" width="300">

Core Content: (1h 15 min)

Theoretical Readings (30 min):

1. [Why AI alignment could be hard with modern deep learning](https://www.cold-takes.com/why-ai-alignment-could-be-hard-with-modern-deep-learning/) (20 mins)
2. [Intuitively Understanding KL Divergence](https://www.youtube.com/watch?v=SxGYPqCgJWM) (10 mins)

Notebook Exercises (45 mins):

1. (Optional) [Variational Autoencoder (VAE) Intuition](https://gist.github.com/wz-ml/85456097ad443a6c493894ea295d4156) (45 mins): covers material a little bit ahead; read on if you’d like to dive into the mathematics!

Learning Goals:

Theoretical

1. Understand issues with only using performance to evaluate classifiers.

Practical

1. Establish an intuition of Kullback-Liebler (KL) divergence and what it means as a distance metric between random variables.

## Week 4: AI Safety Field Background + Deep dive into VAEs

<img src="https://github.com/user-attachments/assets/25f6060e-fdc7-4abe-abd0-0be102b8c4f8" width="300">

Core Readings: (1h 45 min)

Theoretical Readings (1h 15 mins):

1. [A Bird's Eye View of the ML Field](https://www.alignmentforum.org/s/FaEBwhhe3otzYKGQt/p/AtfQFj8umeyBBkkxa) (45 min)
2. [Paul Christiano: Current work in AI alignment](https://forum.effectivealtruism.org/posts/63stBTw3WAW6k45dY/paul-christiano-current-work-in-ai-alignment) (30 min)

Notebook Exercises (30 mins):

1. [DDPM_part_2_vae.ipynb](https://gist.github.com/wz-ml/85456097ad443a6c493894ea295d4156) (30 min).

Learning Goals:

1. Understand how ML research is conducted and how it affects AI safety research.
2. Be able to evaluate if a research agenda advances general capabilities.
3. Learn about the variety of different research approaches tackling alignment.
4. Understand the mechanics of Variational Autoencoder models and practice writing your own.

## Week 5: AI Alignment Failure Modes + Mathematics behind VAEs

<img src="https://github.com/user-attachments/assets/9f06a329-6f91-4348-9e4c-1c215ab8778b" width="300">

Core Readings: (1h 30 min)

Theoretical Readings (45 mins):

1. [X-Risk Analysis for AI Research](https://arxiv.org/pdf/2206.05862) (Appendix A pg 13-14) (10 min)
2. [What Failure Looks Like](https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like) (10 min)
3. [Clarifying What Failure Looks Like](https://www.alignmentforum.org/posts/v6Q7T335KCMxujhZu/clarifying-what-failure-looks-like) (25 mins)

Notebook Exercises (45 mins):

1. [Diffusion, distilled](https://gist.github.com/wz-ml/3c9586ec9059a39db909fff9d1a4f728) (45 mins).

Learning Goals:

1. Be able to determine how an AI safety project may reduce X-risk.
2. Evaluate the failure modes of misaligned AI.
3. Understand the factors that lead to value lock-in.

## Week 6: Open Problems in AI X-Risk + Diffusion Models

<img src="https://github.com/user-attachments/assets/f4ec5124-5eb9-4866-8723-c975460dc025" width="300">

Core Readings: (2h)

Theoretical Readings: (1h 15 mins)

1. [Open Problems in AI X-Risk](https://www.alignmentforum.org/s/FaEBwhhe3otzYKGQt/p/5HtDzRAk7ePWsiL2L) (60 min)
2. [AI Governance: Opportunity and Theory of Impact](https://forum.effectivealtruism.org/posts/42reWndoTEhFqu6T8/ai-governance-opportunity-and-theory-of-impact) (15 min)

Notebook Exercises (45 mins):

1. [Full DDPM notebook - complete all exercises](https://gist.github.com/wz-ml/41dae8f142d9a91e5df5cb5427eb5ec7) (45 mins).

Learning Goals:

1. Pick a research agenda you find particularly interesting (perhaps to pursue later).
2. Understand the role AI governance plays in the broader field of AI safety.

## Final Reflection

If you were to pursue a research question/topic in AI safety, what would it be?
What area of AI safety do you find most interesting? What area of AI safety do you find most promising?

Note: The DDPM notebook is incomplete (missing its training loop). Can you write it?
