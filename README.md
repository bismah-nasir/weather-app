# 🌦️ Weather App (React + Vite)

---

## 📋 Overview

This is a sleek and responsive **Weather App** built using **React.js** and **Vite**.  
It fetches real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/api), displaying temperature, humidity, wind speed, and a matching weather icon.

---

## 🚀 Features

- 🌍 Search weather by city name.
- 📦 Fetch live weather data using OpenWeatherMap API.
- 🌤️ Displays:
  - Temperature
  - Location name
  - Humidity (%)
  - Wind speed (Km/h)
  - Icon matching the weather condition
- 🌆 Default city set to Karachi on first load.
- 🔄 Real-time UI update on search.
- ⚠️ Input validation and error handling.

---

## 🔗 API Used

- [OpenWeatherMap API](https://api.openweathermap.org/data/2.5/weather)

```
GET https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}
```

---

## 🧩 Component Breakdown

### Weather.jsx

- Uses:
  - `useState`, `useEffect`, and `useRef`
- Functionality:
  - Fetches weather data.
  - Displays temperature, location, humidity, and wind speed.
  - Chooses icons based on weather condition codes.
- Ref:
  - Input field is accessed using `useRef` for direct DOM interaction without re-renders.

---

## 📁 Folder Structure (Relevant Parts)

```
/src
 ├── /assets
 │    ├── clear.png
 │    ├── cloud.png
 │    ├── drizzle.png
 │    ├── humidity.png
 │    ├── rain.png
 │    ├── search.png
 │    ├── snow.png
 │    └── wind.png
 ├── /components
 │    ├── Weather.jsx
      └── Weather.css
 ├── App.jsx
 ├── index.css
 └── main.jsx
```

---

## 🌐 Environment Variable

Create a `.env` file in the root of your project and add your OpenWeatherMap API key:

```
VITE_APP_ID=your_openweather_api_key_here
```

> ⚠️ Never expose API keys publicly in production.

---

## 🧑‍💻 How to Run Locally

1. Clone the repository

```bash
git clone https://github.com/bismah-nasir/weather-app.git
cd weather-app
```

2. Install dependencies

```bash
npm install
```

3. Add your `.env` file

```bash
touch .env
# Then paste your API key as shown above
```

4. Start the development server

```bash
npm run dev
```

5. Open in browser

```
http://localhost:5173/
```

---

## 📸 Screenshot

Example:
```
![Weather App Screenshot](your-screenshot-url-here)
```

---

## 🙏 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for their free weather API.
- Icons and images used in this project are locally stored in `/assets`.

---
