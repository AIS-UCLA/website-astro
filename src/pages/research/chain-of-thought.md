---
layout: ../../layouts/SimpleLayout.astro
title: Chain-of-Thought Faithfulness
---

# Research Project: A Framework for Evaluating and Regulating Chain‑of‑Thought Faithfulness in Large Language Models

_Research Lead: Steven Veld_

_If you have completed a fellowship and are interested in working on this research project (particularly research goals 2 and 3), please DM Steven on Discord @stevenveld._

## Background and Motivation

The advent of reasoning models that use natural language chains‑of‑thought (CoTs) has provided an unprecedented opportunity for oversight of large language models (LLMs) by offering a direct window into their thought processes. However, this window is not always “faithful,” in that it does not always “accurately represent the reasoning process behind the model’s prediction” ([Jacovi & Goldberg, 2020](https://aclanthology.org/2020.acl-main.386)). Much existing and ongoing research focuses on strategies to train for CoT faithfulness; given that current reasoning models are already quite faithful in many contexts, and that existing research on increasing faithfulness has shown a fair amount of promise, solving the technical problem of creating faithful reasoning models seems well within reach.

Despite this, there is still reason for concern. As with other safety techniques, there is a “monitorability tax” associated with preserving faithful CoT that will likely grow over time. First, there is the direct cost and difficulty associated with monitoring: there are various types of CoT unfaithfulness, and a lack of careful testing means that an LLM could appear to have faithful reasoning when in fact it does not. Second, there are various reasons companies may want to actively compromise this property: these include shortening the CoT for efficiency, optimizing the CoT for palatability, and training latent‑space reasoning models for enhanced capabilities.

The first concern suggests the importance of developing a comprehensive understanding of the various ways in which chain‑of‑thought can be unfaithful, along with a readily available suite of tests for faithfulness. Currently, such knowledge is spread amongst various papers, but does not all exist in one place. The second concern suggests the importance of combating the incentives to compromise faithfulness (i.e., accounting for externalities associated with unfaithfulness); this could be achieved through the use of regulation, financial incentives, or voluntary corporate commitments. Each strategy requires the ability to test for faithfulness and ensure that a certain faithfulness standard is met, and thus would build upon the suite of faithfulness tests discussed above.

## Research Goals

1. Define and consolidate all discovered forms of CoT unfaithfulness in LLMs, taxonomize them by their properties and conditions under which they emerge, and highlight the specific safety concerns associated with each form of unfaithfulness.

2. For each form of unfaithfulness, compile all existing evaluation techniques and test them on the same model. Assess which evaluation techniques should be used in which settings, and understand the relationship between different evaluation techniques — that is, both across different techniques for evaluating the same form of unfaithfulness, and across different forms of unfaithfulness, what can the results of one test tell us about what we should expect to see from the other tests?

3. Outline a rationale and framework for the United States government to incentivize and/or enforce a specific standard of CoT faithfulness in all commercially deployed LLMs. Alternatively, outline such a rationale and framework for voluntary commitments on the part of AI developers to adhere to a certain standard of faithful CoT.

---

### Goal 1: Taxonomize all discovered forms of CoT unfaithfulness

#### 1. Analysis of literature

[Lanham et al., 2023](https://arxiv.org/pdf/2307.13702) outlines three types of CoT unfaithfulness: [post‑hoc reasoning](https://arxiv.org/pdf/1712.09923), [unfaithfulness due to test‑time computation](https://arxiv.org/pdf/2404.15758), and [encoded reasoning](https://arxiv.org/pdf/2310.18512). However, a variety of recent studies have found unfaithful CoTs that do not neatly fit into one of these three buckets. These include:

&nbsp;&nbsp;a. Obfuscated reward hacking ([Baker et al., 2025](https://arxiv.org/pdf/2503.11926)), which can be viewed as a form of vestigial reasoning ([Biddulph, 2025](https://www.lesswrong.com/posts/6AxCwm334ab9kDsQ5/vestigial-reasoning-in-rl)).

&nbsp;&nbsp;b. "BS'ing" ([Lindsey et al., 2025](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)).

&nbsp;&nbsp;c. Restoration errors and unfaithful shortcuts ([Arcuschin et al., 2025](https://arxiv.org/pdf/2503.08679)).

#### 2. Methodology

a. Build a database of papers studying CoT faithfulness, and the type(s) of unfaithfulness contained by each.

b. For each form of unfaithfulness, outline the conditions and processes that lead to their emergence, along with the threat models associated with each. Based on these factors, create one or more taxonomies for organizing these forms of unfaithfulness in a useful way. One potential taxonomy would categorize each form of unfaithfulness along three axes (each axis is a scale, rather than binary):

&nbsp;&nbsp;i. Unfaithful (the CoT is not a sufficient statistic for the relevant reasoning) vs. illegible (the CoT does encode the relevant information, but our current monitors cannot understand it)

&nbsp;&nbsp;ii. Strategic (e.g., steganography) vs. non‑strategic (e.g., restoration errors)

&nbsp;&nbsp;iii. Load‑bearing (the model can still gain a performance boost from the CoT) vs. non‑load‑bearing (the model can achieve the task without the CoT)

---

### Goal 2: Compile and test a suite of faithfulness evaluations

#### 1. Analysis of literature: techniques used to test for CoT faithfulness

a. Post‑hoc reasoning

&nbsp;&nbsp;i. [CoT truncation](https://arxiv.org/pdf/2307.13702)

&nbsp;&nbsp;ii. [Adding mistakes](https://arxiv.org/pdf/2307.13702)

&nbsp;&nbsp;iii. [Monitoring for](https://arxiv.org/pdf/2305.04388) [acknowledgement](https://arxiv.org/pdf/2501.08156) [of hints](https://assets.anthropic.com/m/71876fabef0f0ed4/original/reasoning_models_paper.pdf)

b. [Unfaithfulness due to test‑time computation](https://arxiv.org/pdf/2404.15758): replace the chain‑of‑thought with “filler tokens.”

c. Encoded reasoning:

&nbsp;&nbsp;i. [Paraphrasing](https://arxiv.org/pdf/2307.13702)

&nbsp;&nbsp;ii. [Context‑aware paraphrasing](https://arxiv.org/pdf/2310.18512)

d. [BS’ing](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-cot): hold constant verifiable properties of the model’s abilities (e.g., its lack of access to a calculator) and detect cases where the model lies about such abilities.

e. [Obfuscated reward hacking](https://arxiv.org/pdf/2503.11926): in places where a ground‑truth reward hacking metric exists, measure the difference between a monitor’s detection of reward hacking in the CoT and the true reward hacking behavior. The size of the gap indicates the level of unfaithfulness.

f. [Restoration errors](https://arxiv.org/pdf/2503.08679): use a different model to evaluate answer correctness, as well as step criticality and step faithfulness for each step. If there exist reasoning step that (a) is labeled as critical to the model’s answer, (b) contains an error, and (c) is silently corrected in a future reasoning step, then this constitutes a restoration error.

#### 2. Methodology

a. For each faithfulness test, choose one paper to replicate. If the paper applies the technique to more than one model or more than one dataset, select only one model and one dataset on which to replicate the results.

b. Now choose one open‑source model. Have the model answer all the problems from each of the datasets chosen in the previous step, applying the appropriate faithfulness test for each. Record all accuracy and faithfulness results.

c. Analysis: find correlations between test results, analyze which types of unfaithful reasoning appear in which circumstances, and note discrepancies between faithfulness tests (i.e., tests that claim to test for a similar thing and yet have very different results).

---

### 3) Outline the precedent for, reasons why, and mechanisms by which the USG could incentivize or enforce faithful CoT in LLMs

_Note: here I’ve chosen to expand on the project direction focused on government action. However, this could be substituted with a different set of steps focused on voluntary corporate commitments. While both of these outcomes seem potentially out of reach, I’m interested in soliciting opinions on which direction seems more promising._

#### 1. Analysis of literature: forthcoming

#### 2. Methodology

a. Make a strong case for why the government should incentivize and/or enforce faithful chain‑of‑thought in LLMs, grounded both in the societal benefits of such a policy and the insufficient incentives for companies to do so of their own accord.

b. Enumerate and draw connections to existing laws and policies that achieve similar goals (i.e., laws in other fields, particularly other areas of tech, regarding transparency) to establish precedent for such a policy for AI.

c. Create a framework for the government to measure faithfulness — outline which agency should be responsible for auditing, how to ensure the agency has sufficient access and technical expertise to do the auditing, etc.

d. Create a framework for the government to incentivize faithfulness — outline a budget and where it would draw from, which specific types of research would be subsidized, and whether subsidies would be provided in the form of “push” or “pull” funding.

e. Create a framework for enforcing faithfulness — would the government require that a company pause all research on more capable models until their existing models have faithful CoT? How would they ensure that the company is complying? What would they do if the company does not comply?
