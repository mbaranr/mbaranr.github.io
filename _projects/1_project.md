---
layout: page
title: Computer Vision
description: Anything involving images.
img: assets/img/gif/homero.gif
importance: 1
category: fun
related_publications: true
---

I created art and can't even draw a straight line! The following projects were all built in `python` primarily using the `pytorch` and `tensorflow` libraries:

- [Simpson face generation](#simpson-face-generation)
- [Recoloring CIFAR10](#recoloring-cifar10)
- [Supervised approaches to CIFAR10](#supervised-approaches-to-cifar10)
- [Automated Waste Sorter](#automated-waste-sorter)


### Simpson face generation

Generative Adversarial Networks for the task of generating simpson faces. The code can be found [here](https://github.com/mbaranr/simpsons-gan).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gif/simpsons.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Evolution of GAN generated images over n timesteps starting from noise.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gif/homero.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gif/marge.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


#### Generator

{% raw %}

```python
class Generator(nn.Module):
    """Generator model"""
    def __init__(self, Z):
        super(Generator, self).__init__()
        self.Z = Z

        self.gen_model = nn.Sequential(

            nn.Linear(self.Z, 1024*8*8),
            nn.BatchNorm1d(1024*8*8),
            nn.LeakyReLU(0.2),

            Reshape((-1, 1024, 8, 8)),

            nn.ConvTranspose2d(1024, 512, 5, 2, 1, 0),
            nn.BatchNorm2d(512),
            nn.LeakyReLU(0.2),

            nn.ConvTranspose2d(512, 256, 5, 2, 2, 0),
            nn.BatchNorm2d(256),
            nn.LeakyReLU(0.2),

            nn.ConvTranspose2d(256, 128, 5, 2, 2, 0),
            nn.BatchNorm2d(128),
            nn.LeakyReLU(0.2),

            nn.ConvTranspose2d(128, 64, 5, 2, 2, 1),
            nn.BatchNorm2d(64),
            nn.LeakyReLU(0.2),

            nn.Conv2d(64, 3, 5, 1, 1),

        )

    def forward(self, noise):

        x = self.gen_model(noise)

        x = F.tanh(x)

        return x
```

{% endraw %}

#### Discriminator

{% raw %}


```python
class Discriminator(nn.Module):
    """Discriminator model"""
    def __init__(self):
        super(Discriminator, self).__init__()
        self.disc_model = nn.Sequential(
            nn.Conv2d(in_channels=3, out_channels=64, kernel_size=5, stride=2, padding=1),
            nn.BatchNorm2d(64),
            nn.LeakyReLU(0.2),

            nn.Conv2d(in_channels=64, out_channels=128, kernel_size=5, stride=2, padding=1),
            nn.BatchNorm2d(128),
            nn.LeakyReLU(0.2),

            nn.Conv2d(in_channels=128, out_channels=256, kernel_size=5, stride=2, padding=1),
            nn.BatchNorm2d(256),
            nn.LeakyReLU(0.2),

            nn.Conv2d(in_channels=256, out_channels=512, kernel_size=5, stride=1, padding=2),
            nn.BatchNorm2d(512),
            nn.LeakyReLU(0.2),

            nn.Conv2d(in_channels=512, out_channels=1024, kernel_size=5, stride=2, padding=2),
            nn.BatchNorm2d(1024),
            nn.LeakyReLU(0.2),


        )
        self.linearization = nn.Sequential(

            nn.Flatten(1,-1),
            nn.Linear(1024*8*8, 1)

        )

        self.sigmoid = nn.Sigmoid()

    def forward(self, x):

        x = self.disc_model(x)

        x = self.linearization(x)

        x = self.sigmoid(x)

        return x
```

{% endraw %}


#### Training


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/simpson-graph.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Generator vs discriminator loss on the training set.
</div>


### Recoloring CIFAR10

Two approaches to the coulourization task of CIFAR10 images: Auto Encoder U-Net and Conditional GANs. Over the last decade, the process of automatic colorization had been studied thoroughly due to its vast application such as colourization of grayscale images and restoration of aged and/or degraded images. This problem is highly ill-posed due to the extremely large degrees of freedom during the assignment of color information. In this approach, I attempted to fully generalize this procedure using a conditional Deep Convolutional Generative Adversarial Network (DCGAN). The network is trained over a dataset that is publicly available, CIFAR10.

The code can be found [here](https://github.com/mbaranr/recolor-cifar10).

#### DCGAN

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DCGAN.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    DCGAN cherrypicked results with and without data augmentation.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DCGAN_GRAPHS.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Generator and discriminator losses over epochs in both training and validation sets. 
</div>

#### AE

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AE.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Auto encoder cherrypicked results.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AE_GRAPHS.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Auto encoder losses over epochs for both training and validation sets.
</div>

### Supervised approaches to CIFAR10 

Supervised machine learning is a widely used form of artificial intelligence. There are plenty of ways to approach supervised learning: Some of them being Neural Networks, Convolutional Neural Networks and Residual Networks. I developed an in depth analysis of the difference between these on the CIFAR10 dataset using Jupyter Notebooks and Pytorch.

The code can be found [here](https://github.com/mbaranr/supervised-cifar10).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cifardisplay.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Automated Waste Sorter

I worked on the waste classification task for a joint project between Lancaster University campuses in Leipzig (Germany) and Bailrigg (England). A pretrained residual network (ResNet50) was used on a curated dataset. 

The dataset can be downloaded [here](https://www.dropbox.com/scl/fi/2cj0e81iuq9tk5y9bx06v/dataset.zip?rlkey=bd5icdcy1cd6okra36cy1fzvi&st=zmtqsghl&dl=0) and the code can be found [here](https://github.com/mbaranr/waste-sorter).

#### Results

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/waste_1.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/waste_2.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/confusion_matrix_waste.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Confusion Matrix on Testing Set. Accuracy of 91.1%
</div>