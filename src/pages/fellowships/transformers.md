---
layout: ../../layouts/SimpleLayout.astro
title: Transformers Fellowship
---

# AI Safety at UCLA Intro Fellowship: Transformers Track

## Table of Contents

1. [Week 1: Preventing an AI-related catastrophe + Review NN Architecture](#week-1-preventing-an-ai-related-catastrophe)
2. [Week 2: The risks of AI + Introduction to Transformers](#week-2-the-future-is-going-to-be-wild)
3. [Week 3: Unsolved Problems in ML Safety + Positional Encoding](#week-3-ai-safety-field-background)
4. [Week 4: Self-Attention + Transformers in-depth](#week-4-unsolved-problems-in-ml-safety)
5. [Week 5: Failure Modes in AI](#week-5-failure-modes-in-ai)
6. [Week 6: Open Problems in AI X-Risk](#week-6-open-problems-in-ai-x-risk)

## Week 1: Preventing an AI-related catastrophe + Review NN Architecture

Conceptual Readings (120 mins):

1. [Deadly by Default: A primer on existential risk from artificial intelligence](https://homosabiens.substack.com/p/deadly-by-default) (60 min)
2. [Learn about the neural network architecture and gradient descent (Neural Networks Chapters 1-3, 3Blue1Brown)](https://www.3blue1brown.com/topics/neural-networks) (30 mins)

Technical Material (60 mins):

1. [Stanford CS25: V2 I Introduction to Transformers w/ Andrej Karpathy (10:15 - 31:00)](https://youtu.be/XfpMkf4rD6E?si=v05ZdRJThRCmnGEw&t=615) (21 min)
2. [PyTorch Tutorial (PyTorch)](https://pytorch.org/tutorials/beginner/basics/intro.html) (40 mins)
3. [Classifying clothing in the Fashion MNIST with Tensorflow](https://www.tensorflow.org/tutorials/keras/classification) (30 mins)

Learning Goals:

1. Recognize the arguments for AI being an existential risk
2. Understand the neural network architecture and how models learn
3. Apply the PyTorch API to implement backpropagation

## Week 2: The risks of AI + Introduction to Transformers

The progress of AI has been quite fast, AI today is quite capable, and AI has been very useful in solving problems that other methods cannot solve.


Conceptual Readings (70 mins):

1. [What risks does AI pose?](https://aisafetyfundamentals.com/blog/ai-risks/) (40 mins)
2. [Learn about forward & backward propagation and LLM's (Neural Networks Chapters 4-6, 3Blue1Brown)](https://www.3blue1brown.com/topics/neural-networks) (30 mins)

Technical Material (< 60 mins):

1. [Softmax Explained](https://youtu.be/ytbYRIN0N4g?si=iSZbjOTS8JoWzRwI) (17 min)


Additional Optional Content (< 50 mins)

4. [CS M146 - Generative AI by Prof. Aditya Grover](https://drive.google.com/file/d/17H96-lVGtg1HFsZ2pATY378cOXMsRPCr/view) (50 min)

Learning Goals:

1. Understand and be able to discuss the various risks of AI as a whole 
2. Be able to explain backpropogation and how it helps neural networks 
3. Be able to explain how softmax works and how it converts neural network output to probabilities

## Week 3: Unsolved Problems in ML Safety + Positional Encoding


Conceptual (100 mins):

1. [Unsolved Problems in ML Safety](https://arxiv.org/pdf/2109.13916.pdf) (60 min)
2. [Gain a basic understanding of LLM's and Transformers (Neural Networks Chapters 7-9, 3Blue1Brown)](https://www.3blue1brown.com/topics/neural-networks) (40 min)

Technical Readings (< 120 mins):

1. [Intro to Positional Encoding](https://machinelearningmastery.com/a-gentle-introduction-to-positional-encoding-in-transformer-models-part-1/) (60 min)
2. [Code Emporium’s Positional Encoding Video](https://www.youtube.com/watch?v=ZMxVe-HK174) (10 min)


Learning Goals:

1. Recognize the unsolved problems in AI safety and how current research groups are tackling them
2. Understand issues with only using performance to evaluate classifiers.
3. Understand how positional encoding works in the transformer architecture
4. Recognize the application of positional encoding using the PyTorch API


## Week 4: Self-Attention + Transformers in-depth

Technical Content (60 mins):

<!-- 1. [The Transformer by Mohammed Terry-Jack](https://medium.com/@b.terryjack/deep-learning-the-transformer-9ae5e9c5a190)
2. [Language Modeling with Transformers, read from the Attention until the end](https://docs.google.com/document/d/1XJQT8PJYzvL0CLacctWcT0T5NfL7dwlCiIqRtdTcIqA/edit#heading=h.yiqylu6wmw91) (45 min) -->
1. [Rasa Algorithm Whiteboard - Transformers & Attention 1: Self Attention](https://www.youtube.com/watch?v=yGTUuEx3GkA) (10 min)
2. [Rasa Algorithm Whiteboard - Transformers & Attention 2: Keys, Values, Queries](https://www.youtube.com/watch?v=tIvKXrEDMhk) (10 min)
3. [Rasa Algorithm Whiteboard - Transformers & Attention 3: Multi Head Attention](https://youtu.be/23XUv0T9L5c?si=mq8nn2mMlFdR8JTr) (10 min)
4. [Rasa Algorithm Whiteboard: Transformers & Attention 4 - Transformers](https://youtu.be/EXNBy8G43MM?si=hD0pX1ElMmsQ8N3o) (10 min)
5. [Stanford CS25: V2 I Introduction to Transformers w/ Andrej Karpathy (31:00 - 1:00:00)](https://youtu.be/XfpMkf4rD6E?si=v05ZdRJThRCmnGEw&t=615) (30 min)

Learning Goals:

1. Understand how ML research is conducted and how it affects AI safety research.
2. Recognize if a research agenda advances general capabilities.
3. Understand the variety of different research approaches tackling alignment.
4. Understand how attention changed the landscape of natural language processing

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
