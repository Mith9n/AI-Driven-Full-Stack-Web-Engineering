import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const Technologies = lazy(() => import("./components/Technologies"));

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <main>
        <Suspense
          fallback={
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-purple-600" />
            </div>
          }
        >
          <Technologies />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;