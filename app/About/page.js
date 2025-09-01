"use client";
import React from "react";

const about = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-300 my-16  px-6 md:px-20 py-16 text-black">
      <div className="max-w-4xl mx-auto space-y-16 divide-y divide-purple-300/40">
        {/* Title Section */}
        <div className="pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-purple-700">
            🔗 SnapLink
          </h1>
          <p className="text-lg text-center text-gray-800">
            SnapLink is a fast and reliable{" "}
            <span className="font-semibold text-purple-700">URL shortener</span>{" "}
            that turns long, messy links into short, shareable ones. <br />
            Simple, secure, and perfect for personal or business use. 🚀
          </p>
        </div>

        {/* Features */}
        <section className="pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            ✨ Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>⚡ Instantly shorten long URLs</li>
            <li>🔑 Unique short link generation</li>
            <li>📊 (Optional) Analytics for link tracking</li>
            <li>📱 Responsive and modern UI</li>
            <li>🔒 Secure & user-friendly</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            🛠️ Tech Stack
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              ⚛️ <strong>React / Next.js</strong> – Frontend & Routing
            </li>
            <li>
              🎨 <strong>Tailwind CSS</strong> – Styling
            </li>
            <li>
              🗄️ <strong>MongoDB / PostgreSQL</strong> – Database
            </li>
            <li>
              🖥️ <strong>Node.js / Express</strong> – Backend API
            </li>
            <li>
              🚀 <strong>Vercel / Netlify / Render</strong> – Deployment
            </li>
          </ul>
        </section>

        {/* Installation */}
        <section className="pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            📦 Installation
          </h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
            <code>
              {`git clone https://github.com/your-username/SnapLink.git
cd SnapLink
npm install

# Run development server
npm run dev`}
            </code>
          </pre>
          <p className="mt-2 text-gray-600">
            Open 👉 <span className="text-blue-600">http://localhost:3000</span>
          </p>
        </section>

        {/* Deployment */}
        <section className="pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            🌍 Deployment
          </h2>
          <p className="text-gray-700">
            Easily deploy using <strong>Vercel</strong>,{" "}
            <strong>Netlify</strong>, or <strong>Render</strong>.
          </p>
        </section>

        {/* Contributing */}
        <section className="pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            🤝 Contributing
          </h2>
          <p className="text-gray-700">
            Contributions are welcome! Please fork this repo and submit a pull
            request. 🚀
          </p>
        </section>

        {/* License */}
        <section className="pt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            📜 License
          </h2>
          <p className="text-gray-700">
            This project is licensed under the MIT License.
          </p>
          <p className="mt-4 text-gray-600">
            ✨ Built with ❤️ and 🔗 by{" "}
            <span className="text-purple-900 font-semibold">Himanshu</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default about;
