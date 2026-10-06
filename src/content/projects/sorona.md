---
title: 'Sorona: Sound Separation for Hearing'
summary: >
  My B.Sc. final project in Electrical and Electronics Engineering. A simulation that tests
  supervised machine-learning models for separating a soundscape into its sources, a step
  towards hearing aids that cope with the cocktail party problem.
categories:
  - Machine Learning
  - Design Research
date: '2022-07'
dateEnd: '2023-06'
tags:
  - Python
  - PyTorch
  - Source separation
  - Signal processing
  - nussl
  - Hearing aids

github: https://github.com/Elisheva-Shiri/Sorona_wav

cover: /projects/sorona/cover.webp
coverAlt: Diagram of the deep mask pipeline, from audio wave to spectrogram, CNN, mask and source estimate

gallery:
  - src: /projects/sorona/deep-mask-pipeline.webp
    alt: Diagram of the pipeline, from audio wave to spectrogram, CNN, feature maps, mask and source estimate
    caption: The deep mask. A CNN reads the spectrogram and learns a mask that keeps only one source.
    keywords: [Deep mask, CNN]
  - src: /projects/sorona/separation-model.webp
    alt: Diagram of a mixture of car, crane, bird and voice sounds going into a source separation model that outputs estimates compared with stems
    caption: 'Source separation: a mixture goes in, one estimate per source comes out, and each is compared with the original.'
    keywords: [Source separation, Training]
    credit: Diagram adapted from the open-source nussl source-separation tutorial
  - src: /projects/sorona/signal-features.webp
    alt: A grid of plots of one signal, showing amplitude, RMS, zero-crossing rate, magnitude spectrum and spectrograms
    caption: Validating the dataset by looking at each signal's features in time and frequency.
    keywords: [Dataset, Features]
  - src: /projects/sorona/spectrograms.webp
    alt: Spectrograms of the same audio with different window and hop lengths, plus linear and mel log-power spectrograms
    caption: Comparing window and hop lengths for the short-time Fourier transform.
    keywords: [STFT, Spectrogram]
  - src: /projects/sorona/metrics.webp
    alt: A table of median separation metrics, SI-SDR, SI-SIR, SI-SAR, SNR and more, for birds, paddle and sea
    caption: Median metrics over 3,000 test mixtures, 1,000 for each source (birds, paddle and sea).
    keywords: [Evaluation, Metrics]
  - src: /projects/sorona/si-sdr-birds.webp
    alt: A plot of SI-SDR values for the birds source, comparing the Wiener filter, the ground truth and the deep mask
    caption: For birds, the deep mask (red) comes close to the ideal ground-truth mask (green) and beats the Wiener filter (blue).
    keywords: [SI-SDR, Comparison]
---

## The problem

People with hearing loss are often left out in busy soundscapes: crowded malls, family
gatherings, parties. This is the **cocktail party problem**. Humans are good at following one
voice in a crowd, but hearing aids that filter by loudness and frequency struggle with
background noise and reverberation.

## The idea

Sorona treats each combination of frequencies and amplitudes as an **object**, so a soundscape
can be split into its sources. The user could then choose what to hear.

## The simulation

Sorona is a simulation for testing supervised machine-learning algorithms for separating
sounds by source:

1. **Dataset.** Mixtures of three sources (birds, a paddle and the sea) are built and checked,
   with features such as RMS, zero-crossing rate and spectrograms.
2. **Training.** A convolutional network (PyTorch) learns a **deep mask** over the spectrogram
   for each source.
3. **Evaluation.** The deep mask is compared with the ground truth (an ideal mask from the
   original signals) and with a **Wiener filter**, using the
   [nussl](https://github.com/nussl/nussl) library and SI-SDR, SIR and SAR metrics.
4. **Analysis.** The results are analysed and plotted per source.

## About the project

The final project for my **B.Sc. in Electrical and Electronics Engineering** at Shenkar, first
proposed as “Ocean Sound” in July 2022. It was supervised by **Prof. Reuven Ianconescu**, with
**Michal Rinot** on the interaction side.
