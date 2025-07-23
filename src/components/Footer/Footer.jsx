export default function Footer() {
  return (
   <footer className="bg-slate-100 py-6 ">
      <div className="container mx-auto px-4 space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">Get the Frashcart App</h1>
          <p className="text-sm pt-2">
            We will send you a link, open it on your phone to download the app.
          </p>
        </div>

        {/* input + button */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <input
            type="text"
            placeholder="Email..."
            className="w-full sm:flex-1 px-4 py-2 rounded border border-gray-300"
          />
          <button className="w-full sm:w-auto bg-primary text-white uppercase px-4 py-2 rounded hover:bg-blue-700 transition">
            Share App Link
          </button>
        </div>

        {/* partners + stores */}
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          {/* Payment partners */}
         

         
        </div>
      </div>
    </footer>
  );
}
