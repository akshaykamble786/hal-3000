import React from "react";

export default function Instructions() {
  const steps = [
    {
      title: "Step 1",
      description: "Log in to your Letterboxd account on your app or browser"
    },
    {
      title: "Step 2",
      description: "Click on your profile avatar in the top-right corner and go to ‘Settings’"
    },
    {
      title: "Step 3",
      description: "Scroll down to the ‘Data’ section and click on ‘Export Your Data’"
    },
    {
      title: "Step 4",
      description:
        "Letterboxd will generate a ZIP file containing CSVs of your diary, ratings, reviews, and watched films, etc"
    },
    {
      title: "Step 5",
      description: "Download the ZIP file and extract it on your computer or mobile"
    },
    {
      title: "Step 6",
      description:
        "Upload the CSV files (diary.csv, watched.csv, ratings.csv) to this app to get your stats"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-background rounded-2xl shadow-md">
      <h2 className="text-2xl font-black text-foreground mb-6 text-center">
        How to Export Your Data from Letterboxd
      </h2>

      {/* Bento grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-card p-5 rounded-xl shadow-sm flex flex-col"
          >
            <div className="flex items-center mb-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-hal-red font-thin mr-3">
                {idx + 1}
              </span>
              <p className="font-black text-foreground/70">{step.title}</p>
            </div>
            <p className="text-sm font-black">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}