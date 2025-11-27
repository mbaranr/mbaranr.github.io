---
layout: post
title: Recoloring CIFAR-10
date: 2023-07-15
description: Solving the recoloring task of CIFAR-10 images with unsupervised learning.
tags: code python pytorch computer_vision
categories: generative_ai
featured: false
---

I tackled the colorization task of CIFAR10 images comparing two approaches: Auto Encoders and Deep Conditional Generative Adversarial Networks (DCGANs).

Over the last decade, the process of automatic colorization has been studied thoroughly due to its potential for restoration of aged and/or degraded images. This problem is highly ill-posed due to the extremely large degrees of freedom during the assignment of color information. 

In this project, I explored the colorization task on the CIFAR-10 dataset by comparing two approaches:
- Autoencoders (U-Net-style)
- Deep Convolutional GANs (DCGANs) with conditional inputs

**Objective**: design a system capable of learning realistic color mappings directly from data, without relying on handcrafted color heuristics.

### U-Net Architecture

The U-Net (Ronneberger et al., 2015) is a fully convolutional encoder–decoder network with skip connections that link layers at opposite sides. This design helps preserve spatial information that would otherwise be lost through downsampling.

In the context of colorization, the U-Net acts as an autoencoder, compressesing the grayscale input and reconstructing a 3-channel RGB output.

Essentially, this implementation allows the network to learn a mapping from luminance to chrominance

It also resembles a U...

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 600px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/post_content/recolor_cifar10/u_net.png" title="u_net" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

### Auto Encoder

Following the U-Net structure, results showed:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 800px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/post_content/recolor_cifar10/auto_encoder.png" title="auto encoder results" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

### DCGAN 

To introduce more expressive and realistic color patterns, I implemented a conditional DCGAN. The generator uses the same U-Net encoder–decoder structure but is trained adversarially:
- Generator input: grayscale image
- Discriminator input: either
    - the real color image + its grayscale version, or
    - the generated image + the grayscale version

This “conditional” pairing forces the GAN to generate colorizations that are consistent with the grayscale structure.

I also added an L1 reconstruction loss to stabilize training and prevent the generator from drifting toward unrealistic color assignments. This encourages fidelity to the ground truth while still leveraging adversarial training to enhance vividness.

The generator’s forward pass resembles a typical U-Net with upsampling layers and skip connections (see, [repo](https://github.com/mbaranr/recolor_cifar10/tree/main)):

```python
  def forward(self, x):

    x1 = self.encoding_unit1(x)
    x = F.max_pool2d(x1, (2,2))

    x2 = self.encoding_unit2(x)
    x = F.max_pool2d(x2, (2,2))

    ...

    x = self.encoding_unit5(x)

    x = self.upsampling1(x)
    x = torch.cat([x, x4], dim=1)
    x = self.decoding_unit1(x)

    x = self.upsampling2(x)
    x = torch.cat([x, x3], dim=1)
    x = self.decoding_unit2(x)

    ...

    x = self.decoding_unit5(x)

    x = F.tanh(x)

    return x
```

The DCGAN can evidently solve the task...

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 800px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/post_content/recolor_cifar10/gan.png" title="dcgan results" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>


### Thoughts


- The DCGAN generated images with significantly more vibrant and realistic colorization than the U-Net autoencoder.
- The autoencoder often produced washed-out, sepia-like results due to its deterministic nature and reliance on pixel-wise losses.
- The conditional DCGAN captured richer color distributions and occasionally replicated ground truth almost exactly.
- With only 20 training epochs, neither model fully converged. GANs in particular benefit from substantially longer training.
- GAN training is known to be unstable, especially with small datasets and shallow architectures like DCGAN. 
