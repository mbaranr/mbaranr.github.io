---
layout: post
title: Generating Simpsons Faces
date: 2023-08-15
description: Generating Simpsons faces with Generative Adversarial Networks
tags: code python pytorch computer_vision
categories: generative_ai
featured: false
---

Even a simple GAN can produce surprisingly cool results. By training a generative adversarial network on Simpsons faces, we can generate new characters that resemble the originals, demonstrating the power of GANs in computer vision.

### The GAN Model

Here’s the simple GAN setup:

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/simpsons_gan.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

### Generator Outputs During Training

Even early in training, the generator can produce recognizable characters like Bart and Marge:

<div class="row justify-content-center">
    <div class="col-sm-auto mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/gif/bart.gif" title="bart" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-auto mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/gif/marge.gif" title="marge" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### A Variety of Generated Faces

After training, the GAN can create a variety of Simpsons-style characters:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 800px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/post_content/simpsons/variety.png" title="variety" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>