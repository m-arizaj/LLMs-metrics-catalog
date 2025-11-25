# LLMs Metrics Catalog for Software Engineering 
*A comprehensive and structured repository for the systematic analysis of evaluation metrics applied to Large Language Models (LLMs) in Software Engineering.*


## Overview

The LLMs Metrics Catalog is a research-oriented repository designed to provide a rigorous, organized, and transparent overview of the evaluation metrics used to assess Large Language Models (LLMs) within the domain of software engineering.  
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
In the introduction page, there are conceptual explanations for the metrics belonging to that category.

If you wish to add a metric that does not fit into any existing folder, you may create a new category.  
Make sure the new folder is included in the classification framework section of the introduction page, where the conceptual nature of the new evaluation dimension is described.  


## How to Contribute

We welcome contributions involving new metrics, improvements to descriptions, structural refinements, or documentation updates.  
Please follow the steps below. 

### 1. Create a Fork and Clone It

External contributors cannot push branches to this repository directly.  
GitHub will automatically create a **fork** when you attempt to contribute.

You may also fork manually:

1. Click **Fork** at the top right of the repository page.
2. Then clone your fork:

```bash
git clone https://github.com/<your-username>/LLMs-metrics-catalog.git
cd LLMs-metrics-catalog
```
All your work will occur in your fork.

### 2. Create a New Branch in Your Fork

Never work directly on the `main` branch.
Always create a dedicated branch for your contribution:

```bash
git checkout -b feature/<your-change-name>
```
Use a descriptive branch name such as:
- `feature/add-metric-XYZ`
- `docs/update-description`
- `fix/grammar-typo`

### 3. Work Locally (Edit and Preview Changes)

To preview and validate your changes:

```bash
npm run start
```
This will:
- Start the local development server (default: http://localhost:3000)
- Automatically reload when you save changes.
- Allow you to verify routes, formulas, formatting, and structure.

Tip: Avoid using `npm run build` while editing, use it only before publishing.

### 4. Validate the Build Before Submission

If you want to confirm the build succeeds before opening your PR:

```bash
npm run build
```
This generates the static site inside the `/build` folder. If there is an error in the build process, you can delete the folder and do it again. If any other errors appear, correct them and retry.

### 5. Commit and Push Your Changes to Your Fork

When your edits are complete:

```bash
git add .
git commit -m "Description of your contribution"
git push origin feature/<your-change-name>
```
This updates your fork, where the Pull Request will originate.

### 6. Open a Pull Request

Once your branch is pushed:
1. Go to your fork on GitHub
2. GitHub will show a “Compare & pull request” button
3. Click it
4. Ensure the PR is targeting:
  - Base repository: `m-arizaj/LLMs-metrics-catalog`
  - Base branch: `main`
  - Head repository: your fork
  - Head branch: `feature/<your-change-name>`

Provide a description including:
  - What you added or modified
  - Why the change is relevant
  - References if applicable

Review feedback may be requested before merging.

### 7. Adding New Metrics or New Categories
If the metric fits within the description of an existing folder, create your `.md` file inside the appropriate folder. 
If not, then create a folder and inside it create the metric file.


## License

This project and its written content are licensed under the  
**Creative Commons Attribution–NonCommercial–NoDerivatives 4.0 International License (CC BY-NC-ND 4.0)**.  
This license allows sharing the material as long as proper credit is given,  
but **does not permit commercial use** nor the creation of **derivative works**.

<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="license">
  <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
</a>

You can view the full license details at:  
[https://creativecommons.org/licenses/by-nc-nd/4.0/](https://creativecommons.org/licenses/by-nc-nd/4.0/)


## How to Cite This Project

Please cite this project if you use it in academic work, research, or documentation.  
A suggested citation structure is provided below; you may adapt it to your preferred citation style (APA, IEEE, MLA, ACM, etc.):

- **Ariza-Jimenez, M. A., Obando-Novoa, J. D., Linares-Vásquez, M** (2025). *Analysis and Classification of Evaluation Metrics for LLMs Applied to Software Engineering*. Universidad de Los Andes. GitHub Repository. Available at: https://github.com/m-arizaj/LLMs-metrics-catalog
