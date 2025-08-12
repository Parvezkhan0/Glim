// App.jsx
import React, { useEffect } from "react";
import "./styles/globals.css"; // Global styles

import Home from "./pages/Home"; // Main landing page

import { analytics } from "./firebase"; // <-- Import analytics
import { logEvent } from "firebase/analytics"; // <-- Import logEvent

function App() {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view'); // <-- Log page view when app loads
    }
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
