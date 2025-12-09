---
layout: page
title: DeepRVAT 2.0
description: DeepRVAT gene scores can be approximated as a sum of variant level effects.
img: assets/img/project_preview/deeprvat.png
importance: 2
redirect:
category: work
---

[DeepRVAT](https://www.nature.com/articles/s41588-024-01919-z) integrates variant annotations using deep set networks to boost rare variant association testing. The pre-trained DeepRVAT model can be used to compute gene impairment scores for new genes and samples.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 600px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat2/deeprvat_motivation.png" title="echo state network" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

My work consisted on revisiting DeepRVAT by focusing on `4` dimensions:

### Robustness and Performance

The `max` Permutation Invariant Function (PIF) cannot model interactions or compound effects. For example, one variant might suppress or mask another, while two moderate-impact variants together could produce a stronger effect than either alone. Sifting to a `sum` PIF helps adress this.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat2/sumvsmax.png" title="sum vs max" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Removing the final sigmoid layer alleviates issues with burden distribution and produces scores that better align with `biological expectations`.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 700px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat2/additivity.png" title="additivity" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Missing values should be treated as unknowns, not as defaults. This was addressed through the introduction of a dummy variable.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat2/na_handling.png" title="na_handling" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Insertions and deletions (indels) can disrupt splicing or regulatory regions (frameshift in-frame risks) but such scores are often unavailable. In non-coding regions, effects are even harder to predict, though the impact remains significant.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 700px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat2/indels.png" title="indels" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Some indels can be imputed by approximating them as single-nucleotide variants at the affected loci.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat2/indel_imputation.png" title="indel_imputation" class="img-fluid rounded z-depth-1" %}
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
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat2/rescaling_factors.png" title="factors" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Rescaling burdens improves `interpretability` and `downstream` compatibility. Technically, unscaled burdens are difficult to compare with other tools because they lack a clear point of reference.

### Usability

In most samples, DeepRVAT sees a single variant, not a set. This means that the DeepRVAT variant score is actually the `gene impairment score`.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat2/deeprvat_vep.png" title="VEP approach" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/deeprvat2/vep_performance.png" title="VEP performance" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

For cases with multiple variants, summing variant-level scores instead of re-running the full end-to-end model yields comparable performance. This allows precomputation of variant-level scores, paving the way for ensemble methods that complement existing predictors such as CADD.
