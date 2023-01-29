import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function HeroRightImg() {
  return (
    <section className="pt-16 pb-24">
      <div className="max-w-7xl m-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl xl:text-6xl font-semibold text-gray-900 mb-6">
              People who care about your growth
            </h1>
            <p className="text-gray-600 text-xl">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <form action="" className="py-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow ">
                  <input
                    type="text"
                    className="px-3.5 w-full py-3 mb-1.5 border border-gray-300 shadow-sm rounded-lg"
                    placeholder="Enter your email"
                  />
                  <p className="text-gray-600 text-sm ">
                    We care about your data in our
                    <Link href="/" className="border-b border-gray-600">
                      privacy policy.
                    </Link>
                  </p>
                </div>
                <div>
                  <button className="bg-purple-600 hover:bg-purple-700 shadow-sm border border-purple-600 py-3 px-5 rounded-lg justify-center w-full items-center flex text-white font-medium">
                    Get started
                  </button>
                </div>
              </div>
            </form>
            <div className="flex gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <ul className="flex gap-1">
                  <li>
                    <FaStar className="text-amber-300" />
                  </li>
                  <li>
                    <FaStar className="text-amber-300" />
                  </li>
                  <li>
                    <FaStar className="text-amber-300" />
                  </li>
                  <li>
                    <FaStar className="text-amber-300" />
                  </li>
                  <li>
                    <FaStar className="text-amber-300" />
                  </li>
                  <li className="text-gray-600 font-medium text-base">5.0</li>
                </ul>
                <p className="text-base font-medium text-gray-600">
                  from 200+ reviews
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/hero-right-img-1.jpg"
              className="max-w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
