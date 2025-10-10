---
layout: page
title: gladGAN
description: Generative Adversarial Networks can be used to detect graph level anomalies.
img: assets/img/project_preview/gladgan.png
importance: 3
category: work
---

**Goal**: Detect rare graph patterns that differ from the majority of graphs.

Some real world applications include:
- Spotting toxic molecules in chemical compounds analysis.
- Recognizing patient neuroimaging in disease diagnosis.
- Detecting abnormal internet activity graphs.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/gladgan/glad_applications.png" title="glad_applications" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

**Problem**: Can sometimes be `very difficult`...

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 600px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/gladgan/glad_baselines.png" title="glad_baselines" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

### GANs

GANs have shown huge potential on image anomaly detection (IAD). Can we translate GANs’ application on IAD to GLAD?

**Solution**: `gladGAN`. A novel approach which lands in the category of “Generic normality feature learning” (GLADC’s close cousin). 
- Non anomaly-aware 
- Concerned only with normal graphs

### Latent Space 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 600px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/gladgan/latent_dogs.png" title="latent_dogs" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

How does this relate to `anomaly detection`?

The generator has learned the mapping G(z) = z → x\hat. Which means that for every real image x there should an x\hat in the latent space X where x ~ x\hat (Assuming G’s training has been successful).

So we can compare iteratively...

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 600px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/gladgan/latent_search.png" title="latent_search" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Works! But as you can imagine, the time that takes to search for x_n grows linearly with the size of X (X is usually `huge`).

But there is a trick! Have an encoder learn to map a given image x to a noise vector/matrix z. This drastically improves performance (T. Schlegl et al. 2019).

### gladGAN

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/gladgan/gladgan_pipeline.png" title="gladgan_pipeline" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/gladgan/gladgan_wgan_training.png" title="wgan_training" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 400px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/gladgan/gladgan_encoder_training.png" title="encoder_training" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

Graph anomaly detection is a relatively hard problem: a `scientific gap` is identified. GANs are proposed as a novel approach to tackle this problem.
