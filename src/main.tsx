import 'fast-text-encoding';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure global Uint8Array is available
if (typeof global !== 'undefined' && !global.Uint8Array) {
    global.Uint8Array = Uint8Array;
  }

createRoot(document.getElementById("root")!).render(<App />);
