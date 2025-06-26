export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-lavender to-blush-pink py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800">Your Future Home, Reimagined.</h1>
          <p className="mt-4 text-xl text-gray-600">
            Welcome to a place where transparency, community, and fresh vibes meet.
          </p>
          <div className="mt-8 space-x-4">
            <button className="rounded-full bg-sky-blue px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
              Explore Floors
            </button>
            <button className="rounded-full bg-mint-green px-8 py-3 font-semibold text-gray-800 shadow-lg transition hover:scale-105">
              Meet the Team
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-butter-yellow p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">Floor Plans</h3>
            <p className="mt-2 text-gray-500">Find your perfect fit.</p>
          </div>
          <div className="rounded-xl bg-sky-blue p-6 text-center text-white shadow-md">
            <h3 className="text-2xl font-semibold">Transparency</h3>
            <p className="mt-2">See our promises in action.</p>
          </div>
          <div className="rounded-xl bg-blush-pink p-6 text-center text-gray-700 shadow-md">
            <h3 className="text-2xl font-semibold">Live Updates</h3>
            <p className="mt-2">Follow our journey, step by step.</p>
          </div>
          <div className="rounded-xl bg-mint-green p-6 text-center text-gray-700 shadow-md">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2">Got questions? We've got answers.</p>
          </div>
        </div>
      </section>

      {/* Placeholder for Interactive Floor Breakdown */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Explore Our 10 Floors</h2>
        <div className="mt-8 h-96 rounded-xl bg-gray-100 p-8">
          <p className="text-gray-500">Interactive floor plan experience coming soon! ✨</p>
        </div>
      </section>
    </div>
  );
}
