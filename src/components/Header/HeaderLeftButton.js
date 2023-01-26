import Link from 'next/link';
import React from 'react';

export default function HeaderLeftButton() {
  return (
    <header className="py-24">
      <div className="max-w-3xl">
        <span className="text-sm md:text-base text-purple-600 font-semibold mb-3 block">
          Pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
          Plans that fit your scale
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <Link
            href="/"
            className="px-5 py-3 text-base  rounded-lg border border-gray-300 inline-flex items-center justify-center shadow-sm text-gray-700 font-semibold"
          >
            Chat to sales
          </Link>
          <Link
            href="/"
            className="px-5 py-3 text-base rounded-lg border bg-purple-600 bg-pur inline-flex items-center justify-center shadow-sm text-white font-semibold"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
