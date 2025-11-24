---
layout: page
title: Automated Waste Sorting
description: Image classification and object detection for automated waste sorting.
img: assets/img/project_preview/waste_sorting.png
importance: 4
category: fun
---

This project was developed as part of an international collaborative initiative between the Lancaster University campuses of Leipzig (Germany) and Bailrigg (England). I led the computer vision team, focusing on `object detection` and `image classification`.

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

### Control Flow

```
on start:
    lock lock
    move to detect
    once in detect pos, unlock lock

on video frame -> detect done:
    if locked, continue
    lock lock
    get detect position
    move robot to detect position @ fixed height
    start classify

on classify done:
    move to lower height above obj
    open gripper
    move down
    close gripper
    move up
    move to bin (up)
    move down
    open gripper
    move up
    close gripper
    move to detect
    unlock lock
```

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

- Matias Barandiaran 
- Parichay Sachdev 
- Mustafa Azizi
- Athar Syed
- Osvaldo Catine
- Mikelis Kamepe
- Inderjot Sitt
- Isaac Richardson
- Andre Mariucci
- Toby Vermon

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div style="max-width: 600px; margin: 0 auto;">
            {% include figure.liquid loading="eager" path="assets/img/project_content/waste_sorting/group_photo.jpg" title="group" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
