export default function Home() {
  return (
    // <T>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partiful Presentation Demo
          </h1>
          <p className="text-lg text-gray-600">
            Explore the different components and functions available in this
            presentation app
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                C
              </span>
              Components
            </h2>
            <div className="space-y-3">
              <a
                href="/demo/components/T"
                className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-green-500"
              >
                <h3 className="font-semibold text-gray-900">T Component</h3>
                <p className="text-gray-600 text-sm">
                  Translation component for internationalization
                </p>
              </a>
              <a
                href="/demo/components/Var"
                className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-green-500"
              >
                <h3 className="font-semibold text-gray-900">Var Component</h3>
                <p className="text-gray-600 text-sm">
                  Variable substitution component
                </p>
              </a>
              <a
                href="/demo/components/Branch"
                className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-green-500"
              >
                <h3 className="font-semibold text-gray-900">
                  Branch Component
                </h3>
                <p className="text-gray-600 text-sm">
                  Conditional rendering component
                </p>
              </a>
              <a
                href="/demo/components/Static"
                className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-green-500"
              >
                <h3 className="font-semibold text-gray-900">
                  Static Component
                </h3>
                <p className="text-gray-600 text-sm">
                  Static content component
                </p>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                F
              </span>
              Functions
            </h2>
            <div className="space-y-3">
              <a
                href="/demo/functions/useGT"
                className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-blue-500"
              >
                <h3 className="font-semibold text-gray-900">useGT Hook</h3>
                <p className="text-gray-600 text-sm">
                  Translation hook for managing localization
                </p>
              </a>
              <a
                href="/demo/functions/useMessages"
                className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-blue-500"
              >
                <h3 className="font-semibold text-gray-900">
                  useMessages Hook
                </h3>
                <p className="text-gray-600 text-sm">Message management hook</p>
              </a>
              <a
                href="/demo/functions/declareStatic"
                className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-blue-500"
              >
                <h3 className="font-semibold text-gray-900">
                  declareStatic Function
                </h3>
                <p className="text-gray-600 text-sm">
                  Static declaration utility function
                </p>
              </a>
            </div>
          </section>
        </div>

        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Navigate through the different sections to explore the functionality
          </p>
        </footer>
      </div>
    </div>
    // </T>
  );
}
