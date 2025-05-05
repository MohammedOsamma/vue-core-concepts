# Vue.js Basics 🚀

This repository provides a simple and structured walkthrough of **core Vue.js concepts** using plain HTML, CSS, and Vue via CDN — no complex setup, just focus on the fundamentals.

Each topic is organized into a separate **Git branch** for clarity and easier learning.

---

## 📁 Branch: `data-binding`

This branch demonstrates **data binding** in Vue using:

- **Interpolation**: `{{ outputGoal() }}` to bind methods to HTML.
- **v-bind directive**: Dynamically bind attributes like `href`.
- **Methods**: Return dynamic data based on logic.

📌 *Example features:*
- Dynamically show a goal message.
- Update anchor tag links using reactive data.

---

## 📁 Branch: `event-binding`

This branch focuses on **event handling and input binding** using Vue directives:

- **v-on / @**: Attach event listeners (`@click`, `@submit.prevent`, `@keyup.enter`).
- **v-model**: Two-way binding between form input and data.
- **Event modifiers**: Simplify input and form interactions.
- **Computed properties**: Used to display a full name dynamically.
- **Watchers**: Automatically react to changes (like resetting counter > 50).

📌 *Example features:*
- Counter with add/remove buttons.
- Dynamic name input with auto-complete.
- Form handling without page reload.

---

## 📁 Branch: `styles-classes`

This branch demonstrates how to apply **dynamic CSS styling and classes** using Vue:

- **v-bind:class / :class**: Apply classes conditionally.
- Use of **object syntax** and **array syntax** for class binding.
- **Computed properties**: To control style logic cleanly.

📌 *Example features:*
- Clickable boxes that change styles based on selection.
- Interactive UI with visual feedback using Vue state.

---

## 🛠 Tech Used

- Vue 3 via CDN
- Plain HTML & CSS
- No build tools or frameworks — pure learning experience

---

## 🔄 How to Switch Between Topics

Each topic is available in a dedicated branch.

You can switch between them like this:

```bash
git checkout data-binding
git checkout event-binding
git checkout styles-classes
