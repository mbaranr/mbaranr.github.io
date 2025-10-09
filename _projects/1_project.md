---
layout: page
title: Reservoir DGCAs
description: Developmental Graph Cellular Automata can grow reservoir computers.
img: assets/img/project_preview/dgca.png
importance: 1
category: work
related_publications: false
---

### What distinguishes living matter from non-living matter?

Until the late 19th century, scientists believed that life possessed a special vital force. A property not just of living beings, but of their chemical constituents themselves.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/vital_force.png" title="vital force" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

By the mid-20th century, the discovery of DNA and RNA structures and the successful synthesis of polynucleotides revealed that life’s chemistry follows the same physical laws as everything else. The atoms that make up our bodies are the same as those found all around the universe.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/carbon_space.png" title="carbon in space" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Yet, there remains something unique about living systems beyond chemistry alone.

In recent years, researchers have turned to `function` as the defining feature of life. 

### Morphogenesis

Morphogenesis orchestrates how cells collectively form complex structures like eyes, limbs, and hearts.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/retina_structure.png" title="human eye" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

In 2020, Mordvintsev et al. introduced Neural Cellular Automata (NCA) as a model of morphogenesis. By using neural networks as transition rules, NCAs can grow predefined two-dimensional shapes from a single-cell seed.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/gif/gecko.gif" title="gecko" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

However, biological morphogenesis is not just about form, it is about function. In nature, structures emerge to do something. What better function to explore than computation itself?

Developmental Graph Cellular Automata (DGCA) (Waldegrave et al., 2023) build upon NCAs by allowing the growth of directed graphs guided by fitness functions. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 700px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/dgca_pipeline.png" title="DGCA update pipeline" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Since recurrent neural networks (RNNs) are directed graphs, and reservoirs (at their simplest form) are RNNs, DGCAs bring us closer to systems that compute in ways reminiscent of nature.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/esn.png" title="echo state network" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

This raises a compelling question:
`Why not grow our own reservoirs?`

Such an approach represents a crucial step toward modeling functional and adaptive morphogenesis.

If this intrigues you, read the [paper](https://arxiv.org/abs/2508.08091). You’ll find that many of the resulting reservoirs exhibit sparse “life-like” structures rather than small-world reservoirs. This suggests that form may play a deeper role in computation within dynamical systems than previously imagined.
