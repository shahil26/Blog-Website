import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-indigo-600 dark:text-purple-400 text-sm uppercase tracking-wider mb-3 font-semibold">
          Newsletter
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
          Stories and interviews
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          Subscribe to learn about new product features, the latest in technology, solutions, and updates.
        </p>

        {subscribed ? (
          <div className="bg-indigo-100 dark:bg-purple-800 border border-indigo-300 dark:border-purple-600 rounded-lg p-5 mb-10 max-w-md mx-auto transition-all duration-300">
            <p className="text-indigo-900 dark:text-white font-semibold">
              Thank you for subscribing! You'll receive our newsletters soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 dark:bg-purple-600 hover:bg-indigo-700 dark:hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-gray-500 dark:text-gray-400 text-xs mt-8 max-w-md mx-auto">
          We care about your data in our{" "}
          <a
            href="#"
            className="text-indigo-600 dark:text-purple-400 hover:underline"
          >
            privacy policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
