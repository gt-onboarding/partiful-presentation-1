"use client";

import { usePathname } from "next/navigation";

type PageType = "demo" | "base" | "example";

const tutorialList = [
  "/components/T",
  "/components/Var",
  "/components/Branch",
  "/components/Static",
  "/functions/useGT",
  "/functions/useMessages",
  "/functions/declareStatic",
];

function getCurrentTutorial(path: string): number {
  let result = -1;
  tutorialList.find((tutorial, index) => {
    if (path.endsWith(tutorial)) {
      result = index;
      return true;
    }
    return false;
  });
  return result;
}

function getPageType(path: string): PageType {
  if (path.startsWith("/base")) {
    return "base";
  } else if (path.startsWith("/example")) {
    return "example";
  }
  return "demo";
}

export function Footer() {
  const path = usePathname();
  const currentTutorial = getCurrentTutorial(path);
  const pageType = getPageType(path);

  if (currentTutorial === -1) {
    return null;
  }

  const currentTutorialPath = tutorialList[currentTutorial];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            className="px-6 py-2 rounded-md font-medium transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => {
              const prevPath = tutorialList[currentTutorial - 1];
              window.location.href = `/${pageType}${prevPath}`;
            }}
            disabled={currentTutorial === 0}
          >
            Previous
          </button>

          {/* Page Type Navigation */}
          <div className="flex gap-2">
            <button
              className="px-4 py-1 rounded text-sm font-medium transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed bg-green-500 hover:bg-green-600 text-white"
              onClick={() =>
                (window.location.href = `/base${currentTutorialPath}`)
              }
              disabled={pageType === "base"}
            >
              Base
            </button>
            <button
              className="px-4 py-1 rounded text-sm font-medium transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed bg-green-500 hover:bg-green-600 text-white"
              onClick={() =>
                (window.location.href = `/demo${currentTutorialPath}`)
              }
              disabled={pageType === "demo"}
            >
              Demo
            </button>
            <button
              className="px-4 py-1 rounded text-sm font-medium transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed bg-green-500 hover:bg-green-600 text-white"
              onClick={() =>
                (window.location.href = `/example${currentTutorialPath}`)
              }
              disabled={pageType === "example"}
            >
              Example
            </button>
          </div>

          <button
            className="px-6 py-2 rounded-md font-medium transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => {
              const nextPath = tutorialList[currentTutorial + 1];
              window.location.href = `/${pageType}${nextPath}`;
            }}
            disabled={currentTutorial === tutorialList.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </footer>
  );
}
