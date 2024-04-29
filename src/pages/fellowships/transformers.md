---
layout: ../../layouts/SimpleLayout.astro
title: Transformers Fellowship
---

# AI Safety at UCLA Intro Fellowship: Transformers Track

## Table of Contents

1. [Week 1: Preventing an AI-related catastrophe](#week-1-preventing-an-ai-related-catastrophe)
2. [Week 2: The future is going to be wild](#week-2-the-future-is-going-to-be-wild)
3. [Week 3: AI Safety Field Background](#week-3-ai-safety-field-background)
4. [Week 4: Unsolved Problems in ML Safety](#week-4-unsolved-problems-in-ml-safety)
5. [Week 5: Failure Modes in AI](#week-5-failure-modes-in-ai)
6. [Week 6: Open Problems in AI X-Risk](#week-6-open-problems-in-ai-x-risk)

## Week 1: Preventing an AI-related catastrophe + Review NN Architecture

Core Content (< 200 mins):

1. [Preventing an AI-related catastrophe](https://80000hours.org/problem-profiles/artificial-intelligence/#top) (120 min)
2. [Review the neural network architecture, forward & backward propagation, and weights & biases (Neural Networks Chapters 1-5, 3Blue1Brown)](https://www.3blue1brown.com/topics/neural-networks)

Optional Additional Practice (< 180 mins):

1. [Implementing Micrograd (Andrej Karpathy’s NN-Zero-to-Hero):](https://www.youtube.com/watch?v=VMj-3S1tku0) (120 min)
2. [PyTorch Tutorial (PyTorch)](https://pytorch.org/tutorials/beginner/basics/intro.html)

Learning Goals:

1. Recognize the arguments for AI being an existential risk
2. Understand the neural network architecture and how models learn
3. Apply the PyTorch API to implement backpropagation

## Week 2:The future is going to be wild + The Bigram Model

The progress of AI has been quite fast, AI today is quite capable, and AI has been very useful in solving problems that other methods cannot solve.

Core Content: (< 200 min)

Conceptual Readings (60 mins):

1. [AI and Compute](https://openai.com/blog/ai-and-compute/) (5 min)
2. [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) (10 min)
3. [All Possible Views About Humanity’s Future are Wild](https://www.cold-takes.com/all-possible-views-about-humanitys-future-are-wild/) (15 min)
4. [This can’t go on](https://www.cold-takes.com/this-cant-go-on/) (20 min)
5. [Intelligence Explosion: Evidence and Import](https://drive.google.com/file/d/1QxMuScnYvyq-XmxYeqBRHKz7cZoOosHr/view) (20 min)

Practical (< 150 mins)

1. [The Bigram Model (Andrej Karpathy’s Zero-to-Hero)](https://www.youtube.com/watch?v=TCH_1BHY58I) (120 min)
2. [You may need to watch part 1 to understand the MLP task](https://www.youtube.com/watch?v=PaCmpygFfXo) (75 min)

Additional Optional Content (< 50 mins)

4. [CS M146 - Generative AI by Prof. Aditya Grover](https://drive.google.com/file/d/17H96-lVGtg1HFsZ2pATY378cOXMsRPCr/view) (50 min)

Learning Goals:

1. Recognize the relationship between compute and capabilities.
2. Recognize the radical impact AI can have on the future of humanity
3. Understand the speed with which AI will transition from powerful to superintelligence.
4. Understand probability distributions in generative language models
5. Recognize trainable parameters/tasks in language generation at a small scale

## Week 3: Unsolved Problems in ML Safety + Positional Encoding

Core Content (< 150 mins):

Conceptual (< 80 mins)

1. [Unsolved Problems in ML Safety](https://arxiv.org/pdf/2109.13916.pdf) (60 min)
2. [Why AI alignment could be hard with modern deep learning](https://www.cold-takes.com/why-ai-alignment-could-be-hard-with-modern-deep-learning/) (20 mins)

Technical Readings (< 60 mins):

1. [Intro to Positional Encoding](https://machinelearningmastery.com/a-gentle-introduction-to-positional-encoding-in-transformer-models-part-1/) (30 min)
2. [Code Emporium’s Positional Encoding Video](https://www.youtube.com/watch?v=ZMxVe-HK174) (10 min)
3. [PyTorch’s Transformer Example](https://pytorch.org/tutorials/beginner/transformer_tutorial.html) (30 min)

Learning Goals:

1. Recognize the unsolved problems in AI safety and how current research groups are tackling them
2. Understand issues with only using performance to evaluate classifiers.
3. Understand how positional encoding works in the transformer architecture
4. Recognize the application of positional encoding using the PyTorch API
5. Apply positional encoding and embedding into your bigram model (take a look at week 6’s Karpathy video)

## Week 4: The AI Safety Landscape + Self-Attention

Core readings: (< 200 min):

Conceptual readings (80 min):

1. [A Bird's Eye View of the ML Field](https://www.alignmentforum.org/s/FaEBwhhe3otzYKGQt/p/AtfQFj8umeyBBkkxa) (45 min)
2. [Paul Christiano: Current work in AI alignment](https://forum.effectivealtruism.org/posts/63stBTw3WAW6k45dY/paul-christiano-current-work-in-ai-alignment) (30 min)

Technical Content (< 120 mins):

1. [The Transformer by Mohammed Terry-Jack](https://medium.com/@b.terryjack/deep-learning-the-transformer-9ae5e9c5a190)
2. [Language Modeling with Transformers, read from the Attention until the end](https://docs.google.com/document/d/1XJQT8PJYzvL0CLacctWcT0T5NfL7dwlCiIqRtdTcIqA/edit#heading=h.yiqylu6wmw91) (45 min)
3. [The Annotated Transformer read through Part 1](https://nlp.seas.harvard.edu/annotated-transformer/#part-1-model-architecture) (60 min)
4. [Rasa Algorithm Whiteboard - Transformers & Attention 1: Self Attention](https://www.youtube.com/watch?v=yGTUuEx3GkA) (10 min)
5. [Rasa Algorithm Whiteboard - Transformers & Attention 2: Keys, Values, Queries](https://www.youtube.com/watch?v=tIvKXrEDMhk) (10 min)

Learning Goals:

1. Understand how ML research is conducted and how it affects AI safety research.
2. Recognize if a research agenda advances general capabilities.
3. Understand the variety of different research approaches tackling alignment.
4. Understand how attention changed the landscape of natural language processing
5. Recognize how attention is implemented with QKV vectors

## Week 5: Failure Modes in AI + Multi-Headed Attention

Core readings (< 180 min):

Conceptual Readings (55 min):

1. [X-Risk Analysis for AI Research](https://arxiv.org/pdf/2206.05862) (Only read Appendix A) (10 min)
2. [What Failure Looks Like](https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like) (10 min)
3. [Clarifying What Failure Looks Like](https://www.lesswrong.com/posts/v6Q7T335KCMxujhZu/clarifying-what-failure-looks-like-part-1) (25 mins)

Technical Content (< 130 mins):

1. [The Annotated Transformer read through the rest](https://nlp.seas.harvard.edu/annotated-transformer/#part-2-model-training) (100 min)
2. [Rasa Algorithm Whiteboard - Transformers & Attention 3: Multi Head Attention](https://www.youtube.com/watch?v=23XUv0T9L5c&feature=youtu.be) (10 min)
3. [The BERT Paper skim through to understand the architecture of real-world models](https://arxiv.org/pdf/1810.04805.pdf) (30 min)

Learning Goals:

1. Recognize how an AI safety project may reduce X-risk.
2. Understand the failure modes of misaligned AI.
3. Understand the factors that lead to value lock-in.
4. Understand multi-headed attention
5. Apply self-attention in your bigram model (take a look at week 6’s Karpathy video)

## Week 6: Open Problems in AI X-Risk + Transformers & GPT-2 from scratch

Core Content (< 200 mins)

Conceptual readings (60 min):

1. [Open Problems in AI X-Risk](https://www.alignmentforum.org/s/FaEBwhhe3otzYKGQt/p/5HtDzRAk7ePWsiL2L) (60 min)
2. [AI Governance: Opportunity and Theory of Impact](https://forum.effectivealtruism.org/posts/42reWndoTEhFqu6T8/ai-governance-opportunity-and-theory-of-impact) (15 min)

Technical content (120 min):
[Implementing GPT-2 through Andrej Karpathy’s NN-Zero-to-Hero](https://www.youtube.com/watch?v=kCc8FmEb1nY) (120 min)

Learning Goals:

1. Recognize the open problems in AI X-risk and find some points to look into for self-study and possible ART projects
2. Understand the issues with lobbying for AI governance and policy to “maintain” capabilities research alongside safety research
3. Apply embeddings, positional encoding, and multi-headed attention in a transformer model
4. Understand how large language models work internally through each step of the process
5. Recognize the challenges of creating and training large scale language models
