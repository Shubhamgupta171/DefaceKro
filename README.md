# Deface Gov Portal UI

A modern, responsive, and highly secure styled React demonstration portal built with Vite. This project represents a "Ministry of Defence Digital Hub" template environment.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine. 

### Installation
1. Clone this repository (or download the ZIP file).
2. Open your terminal and navigate into the project folder:
   ```bash
   cd Deface
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the App Locally
Start the local Vite development server by running:
```bash
npm run dev
```
Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`) to view the application in action.

---

## 🎨 How to Customize Images & Videos

This project is designed to be easily customizable without needing to upload heavy image files if you prefer using external links. All major visual assets are stored as constants at the very top of their respective component files.

### 1. Main Content Header & Banner
The large banner flag and the massive hub image are controlled inside `src/components/MainContent.jsx`. 
Open the file and simply replace the URL strings at the top:

```javascript
// src/components/MainContent.jsx

// You can change these image links to any external web URL or keep them pointed to the local /public folder
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "/cyber_hub.png";
```

### 2. Sidebar Icons & Logo
The sidebar logo and the 8-icon grid are managed inside `src/components/Sidebar.jsx`. 
You can customize the logo, and the grid maps over an array, meaning each of the 8 grid items can be completely different!

```javascript
// src/components/Sidebar.jsx

const LOGO_URL = "/logo.png";

// Array of 8 distinct icon image URLs for the grid
const SIDEBAR_ICONS = [
  "https://example.com/icon1.jpg", 
  "https://example.com/icon2.jpg", 
  "/small_icon.png", 
  "/small_icon.png", 
  "/small_icon.png", 
  "/small_icon.png", 
  "/small_icon.png", 
  "/small_icon.png", 
];
```

### 3. Sidebar YouTube Video
Instead of a static thumbnail, the sidebar uses a fully responsive embedded YouTube player. To change the video playing in the sidebar, open `src/components/Sidebar.jsx` and locate the `<iframe />` tag inside the JSX:

```javascript
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
  title="YouTube video player"
  // ...
></iframe>
```
Simply replace `7j94LhdKTHk` with the video ID of your choice!

---

## 🛠 Built With
* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Lucide React](https://lucide.dev/) (For clean SVG icons)
* Vanilla CSS with native CSS variables for high-performance styling.
