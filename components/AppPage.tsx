import { AppData } from "@/types/app-data";

export default function AppPage({ app }: { app: AppData }) {
  const isComingSoon = !app.appStoreUrl;

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-10`} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />

        <div className="relative md:max-w-screen-md w-full mx-auto px-4 md:px-0 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-3xl font-bold text-white shadow-2xl`}
            >
              {app.name.charAt(0)}
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                {app.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{app.name}</h1>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4">{app.tagline}</p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">{app.heroDescription}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            {isComingSoon ? (
              <div className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-6 py-3 rounded-full font-medium">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                Coming Soon
              </div>
            ) : (
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 bg-gradient-to-r ${app.gradient} text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="md:max-w-screen-md w-full mx-auto px-4 md:px-0 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Why you&apos;ll love {app.name}
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Built with care, designed for real life.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {app.features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors"
            >
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="md:max-w-screen-md w-full mx-auto px-4 md:px-0 py-16 md:py-24">
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💎</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{app.pricing.model}</h2>
          </div>
          <p className="text-gray-400 text-lg mb-8">{app.pricing.description}</p>

          <ul className="space-y-3">
            {app.pricing.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300">
                <svg
                  className={`w-5 h-5 text-${app.color} shrink-0`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: app.color }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:max-w-screen-md w-full mx-auto px-4 md:px-0 py-16 md:py-24">
        <div className={`bg-gradient-to-br ${app.gradient} rounded-2xl p-8 md:p-12 text-center`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isComingSoon ? "Stay Tuned" : `Get ${app.name} Today`}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">{app.ctaDescription}</p>

          {isComingSoon ? (
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-medium">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Coming Soon to App Store
            </div>
          ) : (
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download Free on the App Store
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="md:max-w-screen-md w-full mx-auto px-4 md:px-0 py-8 border-t border-gray-800">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-red transition-colors">
              Erdem Gönül
            </a>
            <span>·</span>
            <a href={app.privacyUrl} className="hover:text-red transition-colors">
              Privacy Policy
            </a>
          </div>
          <p>© {new Date().getFullYear()} Ahmet Erdem Gonul</p>
        </div>
      </footer>
    </div>
  );
}
