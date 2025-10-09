---
layout: page
title: DeepRVAT 2.0
description: DeepRVAT gene scores can be approximated as a sum of variant level effects.
img: assets/img/project_preview/deeprvat.png
importance: 3
redirect:
category: work
---

### DeepRVAT

Integration of variant annotations using deep set networks boosts rare variant association testing. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 600px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat_motivation.png" title="echo state network" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

The pre-trained DeepRVAT model can be used to compute gene impairment scores for new genes and samples.

My work consisted on revisiting DeepRVAT by focusing on 4 dimensions:

### Robustness and Performance

Max Permutation Invariant function (PIF) can’t model interactions or compound effects. One variant might suppress or mask the effect of another. Two moderate-impact variants together might have a stronger effect than either alone.

<div class="row g-0">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 200px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/pif.png" title="PIF" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/sumvsmax.png" title="sum vs max" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Removing final sigmoid layer solves problems with burden distribution and yields scores that align with `biological expectations`.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 700px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/additivity.png" title="additivity" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

A default value does not indicate absence of information; NAs should be handled separately. This was achieved by the introduction of a dummy variable.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/na_handling.png" title="na_handling" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Insertions/deletions can disrupt splicing and regulatory regions (framshift and in-frame risks), but scores are often unavailable. In non-coding regions this is harder to predict, but the impact is still there.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 700px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/indels.png" title="indels" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Some indels may be imputed by approximating them as single-nucleotide variants at the affected loci.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/indel_imputation.png" title="indel_imputation" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

### Interpretability

Genes with LoF variants can be used as markers for burden rescaling.

We compute rescaling factors:

`X0`: median of gene burdens of individuals with no variants

`X1`: median of gene burdens of individuals with exactly one loftee_hc=1 variant

Rescaling factors (for each model):

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 100px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/rescaling_factors.png" title="factors" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Rescaling burdens increases `interpretability` and improves `downstream usage`. From a technical point of view, unscaled burdens are hard to compare with other tools, as there is no point of reference.

### Usability

In most samples, DeepRVAT sees a single variant and not a set. This means that the DeepRVAT variant score is actually the gene impairment score.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 600px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat_vep.png" title="VEP approach" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

For those few cases where there are actually >1 variant, adding the variant level scores instead of running them through the end-to-end model showed quite good performance

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/vep_performance.png" title="VEP performance" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

The advantage that we can pre-compute these variant level scores, which highlights the possibility for an ensemble method for variant prediction complementary to CADD.
