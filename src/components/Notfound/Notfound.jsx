import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center animate-fade-in-up">
        <div className="relative mb-8">
          <span className="text-[10rem] md:text-[14rem] font-display font-bold text-surface leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <i className="fa-regular fa-face-frown text-4xl text-primary mb-4 block"></i>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-white">
                Page Not Found
              </h1>
            </div>
          </div>
        </div>
        <p className="text-neutral-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="" className="btn-primary btn-md">
            <i className="fa-solid fa-house"></i>
            Go Home
          </Link>
          <Link to="/Products" className="btn-secondary btn-md">
            <i className="fa-solid fa-bag-shopping"></i>
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
