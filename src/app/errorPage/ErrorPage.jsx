import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9d9d9_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
      {/* Main Content */}
      <div className="relative text-center px-6">
        <h1 className="text-6xl font-bold text-slate-800 mb-3">404</h1>
        <h2 className="text-xl text-slate-700 font-medium mb-2">
          Opps! Pages Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          We're really sorry but we can't seem to find the page you were looking
          for
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white font-medium py-2 px-5 rounded-md  transition"
        >
          Back to Home →
        </Link>
      </div>
    </div>
  );
}
