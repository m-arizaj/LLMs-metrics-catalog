# LLMs Metrics Catalog  
*A comprehensive and structured repository for the systematic analysis of evaluation metrics applied to Large Language Models (LLMs) in Software Engineering.*


## Overview

The **LLMs Metrics Catalog** is a research-oriented repository designed to provide a rigorous, organized, and transparent overview of the evaluation metrics used to assess **Large Language Models (LLMs)** within the domain of **software engineering**.  
This catalog consolidates definitions, conceptual explanations, and classification criteria extracted from academic literature, empirical studies, and domain-specific benchmarks.

Its primary objective is to offer a unified reference that enables researchers, practitioners, and students to:

- Understand *how* LLMs are evaluated in software engineering contexts.  
- Compare evaluation dimensions across studies.  
- Identify gaps, biases, and methodological limitations in current assessment practices.  
- Support reproducible research by clarifying the conceptual foundations of each metric category.

## Visit the Catalog

You can explore the full interactive version of the catalog at the following link:

- [https://m-arizaj.github.io/LLMs-metrics-catalog/](https://m-arizaj.github.io/LLMs-metrics-catalog/)

## Repository Structure

Metrics are organized into folders representing high-level evaluation dimensions (e.g., accuracy, structural quality, robustness, reasoning, human evaluation, etc.).  
Each folder contains conceptual explanations and the documentation for the metrics belonging to that category.

If you wish to add a metric that does not fit into any existing folder, you may create a new category.  
Make sure the new folder is included in the introduction's folder section describing the conceptual nature of the new evaluation dimension.  


## How to Contribute

We welcome contributions involving new metrics, improvements to descriptions, structural refinements, or documentation updates.  
Please follow the steps below.

### 1. Fork the Repository

Start by creating a fork of this repository in your GitHub account:

- https://github.com/m-arizaj/LLMs-metrics-catalog


### 2. Clone Your Fork and Enter the Main Folder

Clone your fork locally and *always enter the root folder, since all content is inside it:

```bash
git clone https://github.com/m-arizaj/LLMs-metrics-catalog
cd LLMs-metrics-catalog
```

### 3. Work Locally (Edit and Preview Changes)

Whenever you add or edit metrics (`.md` files), run:

```bash
npm run start
```
This will:
- Start the local development server (default: http://localhost:3000)
- Automatically reload when you save changes
- Allow you to verify routes, formulas, formatting, and structure

Tip: Avoid using `npm run build` while editing, use it only before publishing.

### 4. Save Your Changes to GitHub

Once satisfied with your edits:

```bash
git add .
git commit -m "Update metric: <name> – description of changes"
git push origin main
```
This updates your fork with your modifications.

### 5. Build the Site Before Publishing

Use this only when preparing to deploy:
```bash
npm run build
```
This generates the static site inside the `/build` folder. If there is an error in the build process, you can delete the folder and do it again.

### 6. Deploy to GitHub Pages

1. Option A — Build + Deploy (recommended)

```bash
$env:GIT_USER="<your-username>"
npm run deploy
```
2. Option B — Deploy without rebuilding (if you already built)
```bash
npx docusaurus deploy --skip-build
```
### 7. (Optional) Clear Cache if You See Strange Errors
Docusaurus can cache old paths or builds. If you encounter unusual issues:
```bash
npm run clear
```
Then:
```bash
npm run build
npm run deploy
```
### 8. Adding New Metrics or New Categories
If the metric fits an existing folder, create your `.md` file inside the appropriate folder. 
If not, then create a folder and inside it create the metric file.


## License

This project and its written content are licensed under the  
**Creative Commons Attribution 4.0 International License (CC BY 4.0)**.  
This allows sharing and adaptation for any purpose, including commercial use, provided appropriate credit is given.

<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license">
  <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
</a>

You can view the full license details at:  
[https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)


## How to Cite This Project

Please cite this project if you use it in academic work, research, or documentation.  
A suggested citation structure is provided below; you may adapt it to your preferred citation style (APA, IEEE, MLA, ACM, etc.):

- **Ariza Jimenez, M. A., Obando Novoa, J. D., Linares Vasquez, M** (2025). *Analysis and Classification of Evaluation Metrics for LLMs Applied to Software Engineering*. GitHub Repository. Available at: https://github.com/m-arizaj/LLMs-metrics-catalog
