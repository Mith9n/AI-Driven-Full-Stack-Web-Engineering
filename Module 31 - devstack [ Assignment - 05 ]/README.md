# Folder Structure

src/
│
├── assets/
│   ├── banner-stack.png
│   ├── logo-text.png
│   └── hamburger.png
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Technologies.tsx
│   └── Footer.tsx
│
├── data/
│   └── technologies.json
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx

# Project Name : Dev Stack

Dev Stack is a responsive technology explorer website where users can explore different development technologies and build their own stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Toastify
- Local JSON Data
- Vite

## Features

- Explore technologies with category, rating, difficulty, and description.
- Add technologies to your stack without duplicate items.
- Remove selected technologies individually or remove all at once.
- Responsive design for mobile, tablet, and desktop devices.


## React Questions & Answers


### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. React uses JSX to create and display UI components easily.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

useState manages changing data in a component. I used it to store the selected technologies in the Your Stack section.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

useEffect runs side effects in a React component. It is used to load the JSON data when the component starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify each item and update the list efficiently when the data changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it to show the empty stack message when no technology is selected.

<!-- 
{selected_technologies.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  <SelectedTechnologies />
)} -->