# GSAP Playground

A hands-on **GSAP animation learning playground** built with **Vite**, **Tailwind CSS**, and **JavaScript**.
This project was developed as a practice workspace to learn GreenSock Animation Platform concepts through small, focused animation examples and challenges.

The project includes multiple standalone lesson pages covering basic tweens, animation properties, control methods, easing functions, GSAP utility methods, and timeline-based animation concepts.

---

## Overview

GSAP Playground is a frontend learning project created to explore how modern web animations work using GSAP. Instead of building one large application, the project is organized as a collection of small animation demos. Each page focuses on one concept, making it easier to understand, test, repeat, and improve animations step by step.

The main landing page works as a lesson dashboard where each card links to a separate animation topic.

---

## Features

* Multi-page GSAP animation playground
* Lesson dashboard with animation topic cards
* Beginner-friendly animation examples
* GSAP tween examples using `gsap.to()`, `gsap.from()`, `gsap.fromTo()`, and `gsap.set()`
* Easing examples including Power, Sine, Back, Bounce, Elastic, and Expo easing
* Interactive animation controls such as play, pause, resume, restart, reverse, repeat, kill, and yoyo
* Practice challenge pages for applying learned concepts
* Apple Dock-style interaction experiment
* Timeline animation concept page
* Responsive layout using Tailwind CSS
* Vite multi-page build configuration

---

## Tech Stack

| Technology   | Purpose                                 |
| ------------ | --------------------------------------- |
| HTML5        | Page structure                          |
| CSS3         | Custom styling and page-specific styles |
| JavaScript   | DOM interaction and animation logic     |
| GSAP         | Web animation engine                    |
| Tailwind CSS | Utility-first styling                   |
| Vite         | Development server and build tool       |

---

## Lessons and Pages

| No. | Page                      | Concept                                                                                   |
| --- | ------------------------- | ----------------------------------------------------------------------------------------- |
| 01  | Your First Animation      | Basic GSAP tween animation                                                                |
| 02  | Basic Challenge           | Pulsing glow animation challenge                                                          |
| 03  | Understanding Properties  | Animating transform, color, scale, radius, and timing properties                          |
| 04  | Understanding Methods     | Controlling animations with play, pause, resume, restart, reverse, repeat, kill, and yoyo |
| 05  | Power Easing              | Introduction to power easing                                                              |
| 06  | Sine Easing               | Smooth scroll-to-top floating button animation                                            |
| 07  | Back Easing               | Animated tab indicator with overshoot motion                                              |
| 08  | Bounce Easing             | Bounce easing practice page                                                               |
| 09  | Elastic Easing            | Animated bar chart using elastic motion                                                   |
| 10  | Expo Easing               | Floating action button menu animation                                                     |
| 11  | Apple Dock                | Apple Dock-style hover interaction experiment                                             |
| 12  | Learn `gsap.to()`         | Toast notification animation                                                              |
| 13  | `gsap.to()` Challenge     | Sequential toast animation challenge                                                      |
| 14  | Learn `gsap.from()`       | Card entrance animation                                                                   |
| 15  | `gsap.from()` Challenge   | Card flip animation challenge                                                             |
| 16  | Learn `gsap.fromTo()`     | Wave loader animation                                                                     |
| 17  | `gsap.fromTo()` Challenge | Emoji reaction bubble animation challenge                                                 |
| 18  | Learn `gsap.set()`        | Setting initial animation state                                                           |
| 19  | `gsap.set()` Challenge    | Initial state and visibility challenge                                                    |
| 20  | Learn GSAP Timeline       | Timeline sequencing concept page                                                          |

---

## Project Structure

```txt
GSAP_PlayGround-main/
├── index.html
├── style.css
├── package.json
├── vite.config.js
├── public/
│   ├── logo.svg
│   ├── arrow.svg
│   ├── repeat.svg
│   ├── cover1.png ... cover20.png
│   └── apple-dock/
│       ├── arc.png
│       ├── chatgpt.png
│       ├── photos.png
│       ├── settings.png
│       ├── vscode.png
│       └── wallpaper.png
└── pages/
    ├── 01a_your-first-animation/
    ├── 01b_challenge/
    ├── 02a_understanding-properties/
    ├── 02b_understanding-methods/
    ├── 03a_power-easing/
    ├── 04a_sine-easing/
    ├── 05a_back-easing/
    ├── 06a_bounce-easing/
    ├── 07a_elastic-easing/
    ├── 08a_expo-easing/
    ├── 09a_apple-dock/
    ├── 10a_learn-to/
    ├── 10b_challenge-to/
    ├── 11a_learn-from/
    ├── 11b_challenge-from/
    ├── 12a_learn-fromto/
    ├── 12b_challenge-fromto/
    ├── 13a_learn-set/
    ├── 13b_challenge-set/
    └── 14a_learn-timeline/
```

---

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

Recommended:

```bash
node -v
npm -v
```

---

### Installation

Clone the repository:

```bash
git clone https://github.com/theShihamAhamed/GSAP_PlayGround.git
cd GSAP_PlayGround
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the project in your browser:

```txt
http://localhost:5173
```

---

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the project for production.

```bash
npm run preview
```

Previews the production build locally.

---

## What I Learned

Through this project, I practiced and explored:

* How GSAP handles smooth browser animations
* How to animate CSS transforms and visual properties
* How to use `duration`, `delay`, `repeat`, `yoyo`, and `ease`
* How easing affects the feeling of motion
* How to control animations programmatically
* How `gsap.to()` animates from the current state to a target state
* How `gsap.from()` creates entrance animations
* How `gsap.fromTo()` gives control over both start and end states
* How `gsap.set()` prepares elements before animation
* How timeline-based animation can sequence multiple effects
* How small UI interactions can improve user experience

---

## Learning Concepts Covered

### Basic Tween Animation

The project starts with simple GSAP tweens where an element fades, scales, and moves using a few lines of animation code.

### Animation Properties

The property lessons explore how GSAP can animate values such as:

* Scale
* Rotation
* Opacity
* Border radius
* Background color
* Box shadow
* Position values

### Animation Methods

The methods lesson demonstrates how an animation can be controlled after it is created using methods such as:

* `play()`
* `pause()`
* `resume()`
* `restart()`
* `reverse()`
* `repeat()`
* `yoyo()`
* `kill()`

### Easing

The easing pages show how different easing functions change the personality of an animation. Some animations feel smooth and natural, while others feel playful, snappy, elastic, or dramatic.

### GSAP Core Methods

The project includes examples for:

```js
gsap.to()
gsap.from()
gsap.fromTo()
gsap.set()
gsap.timeline()
```

These are important GSAP methods for building both simple and advanced animations.

---

## Screens / Demo Ideas

This project includes examples such as:

* Animated cards
* Glowing cube effect
* Rotating and morphing box
* Interactive animation control buttons
* Scroll-to-top floating button
* Animated tab indicator
* Elastic animated chart
* Floating action button menu
* Toast notification animation
* Card entrance animation
* Wave loader
* Apple Dock-style UI experiment
* Timeline-based travel card concept

---

## Future Improvements

Possible improvements for the project:

* Complete all challenge pages with final animation solutions
* Add screenshots or GIF previews to the README
* Add a live demo link using GitHub Pages, Netlify, or Vercel
* Improve mobile responsiveness for every demo page
* Add more advanced GSAP examples such as ScrollTrigger
* Add comments explaining each animation step
* Create a final portfolio-style animation showcase page
* Add accessibility improvements for buttons and interactive elements

---

## Purpose of the Project

This project was created for learning and practice.
The main goal was to understand GSAP animation fundamentals by building small, focused examples instead of only reading documentation.

---

## Author

Developed by **Shiham Ahamed** as a GSAP learning project.

---

## License

This project is for educational and learning purposes.
