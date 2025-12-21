---
layout: page
title: Automated Waste Sorting
description: Image classification and object detection for automated waste sorting.
img: assets/img/project_preview/waste_sorting.png
importance: 4
category: fun
---

This project was developed as part of an international collaborative initiative between the Lancaster University campuses of Leipzig (Germany) and Bailrigg (England). 

**HW**: KUKA industrial robots, the same ones used in car assembly lines, capable of handling loads of 180kg and moving at 3m/s. 

**Motivation**: By innovating in waste management, we hope to contribute toward sustainable solutions for one of the world’s growing environmental concerns. Our long-term vision is to extend this technology to more critical areas, such as nuclear waste management, where safe and efficient handling is of utter importance.

I led the computer vision team, focusing on `object detection` and `image classification`. For the code, see [repo](https://github.com/LUComp/waste_sorter).

### Dataset

Custom curated dataset of labeled trash/waste images. These are spread across 6 subfolders (waste types). The dataset can be downloaded [here](https://www.dropbox.com/scl/fi/iqdp1yqlpczd6oyoqu2a8/dataset.zip?rlkey=l1qq1vq9zdma1095nw1boymoc&st=kdaaomas&dl=0).

### Model

Fine-tuned pre-trained ResNet50 architecture. Model weights can be downloaded [here](https://www.dropbox.com/scl/fo/8lik3r8dvd46oc7je5egg/AJz9jQDM7P-uupWw3HokPFw?rlkey=ovap0z4vufqskny28zqy3v89v&st=quylbvca&dl=0).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 600px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/waste_sorting/confusion.png" title="confusion_matrix" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

### Demo

<div class="row mt-3">
  <div class="col-sm-12 d-flex justify-content-center">
    <div class="w-50">
      {% include video.liquid 
          path="assets/video/arm_demo.mp4" 
          class="img-fluid rounded z-depth-1"
          controls=true 
          autoplay=true 
      %}
    </div>
  </div>
</div>
<div class="caption text-center mt-2">
  Demo: Fully autonomous arm classifying Pepsi can as "metal" and sorting it to its appropriate bin.
</div>

### Credits

<div class="row align-items-start pt-4"> <!-- padding on top -->
  
  <!-- Left column: Credits -->
  <div class="col-md-6 pr-md-2"> <!-- reduce right padding -->
    <ul class="mb-0"> <!-- remove bottom margin -->
      <li>Matias Barandiaran</li>
      <li>Parichay Sachdev</li>
      <li>Mustafa Azizi</li>
      <li>Athar Syed</li>
      <li>Osvaldo Catine</li>
      <li>Mikelis Kamepe</li>
      <li>Inderjot Sitt</li>
      <li>Isaac Richardson</li>
      <li>Andre Mariucci</li>
      <li>Toby Vermon</li>
    </ul>
  </div>

  <!-- Right column: Image -->
  <div class="col-md-6 pl-md-2"> <!-- reduce left padding -->
    <div style="max-width: 600px; margin: 0 auto;">
      {% include figure.liquid loading="eager"
         path="assets/img/project_content/waste_sorting/group_photo.jpg"
         title="group"
         class="img-fluid rounded z-depth-1" %}
    </div>
  </div>

</div>
