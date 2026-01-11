

# 📐 Modern Angular Portfolio | Mathematics & Software Engineering

This repository hosts my professional portfolio, completely rebuilt from the ground up using **Angular 21**. Replacing a legacy Angular 15 implementation, this version represents a shift toward **fine-grained reactivity** and **Zoneless architecture**, blending mathematical precision with cutting-edge web technologies.

---
🚀 **Live Demo:** [Portfolio](https://my-portfolio-anlaji.vercel.app/)
## 🔬 Technical Core (2026 Standards)

The architecture is designed to be deterministic and highly performant, leveraging the latest advancements in the Angular ecosystem:

* **Angular 21 Framework:** Fully utilized the latest stable release, including advanced *Signal* patterns and *Resource* APIs.
* **Zoneless Change Detection:** By removing `zone.js`, the application relies on an explicit, signal-based change detection mechanism. This ensures O(1) or O(log n) efficiency in state updates rather than O(n) dirty checking.
* **Signal-Based State Management:** State is modeled as a Directed Acyclic Graph (DAG) of `signal`, `computed`, and `linkedSignal` primitives.
* **Single-Route Tab Navigation:** Implemented a sophisticated tab system that uses the **Intersection Observer API** to sync UI state with scroll position without modifying the URL or re-initializing components.
* **Server-Side Rendering (SSR) & Event Hydration:** Optimized for SEO and performance using the latest hydration techniques for instantaneous interactivity.



---

## 🏗️ Project Architecture

To ensure scalability and maintainability (important for my goal of becoming a better programmer), the project follows a **Domain-Driven** structure:

```text
src/
└── app/
    ├── core/           # Singleton services & pure logic (Mathematical utilities)
    ├── shared/         # Dumb components (UI atoms), Pipes, and Directives
    ├── features/       # Smart components (Feature-specific logic)
    │   └── home/       # Main layout with Scroll-Sync Tab Navigation
    ├── app.config.ts   # Zoneless and Hydration providers
    └── app.routes.ts   # Simplified routing configuration