import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import chiken from './img/chiken.png';
import { InnerWidth } from './@containers/InnerWidth';
import { useMouse, useStartTyping, useTitle } from 'react-use';
import { useNavigate } from 'react-router-dom';
function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(mainRef);

  const navigate = useNavigate();

  useStartTyping(() => alert('Started typing...'));
  useTitle('메인 페이지');
  useEffect(() => {
    const menuOpen = () => {
      if (menuRef.current?.classList.contains('hidden')) {
        menuRef.current.classList.remove('hidden');
      } else {
        menuRef.current?.classList.add('hidden');
      }
    };

    if (burgerRef.current !== null && menuRef.current !== null) {
      burgerRef.current.addEventListener('click', menuOpen);
    }
    return () => {
      burgerRef.current?.removeEventListener('click', menuOpen);
    };
  }, [burgerRef, menuRef]);

  useEffect(() => {
    if (docX > 500) {
      console.log(`${docX}가 500을 넘어감`);
    }
  }, [docX]);

  return (
    <div className="font-serif text-gray-600 font-body" ref={mainRef}>
      <div className="grid md:grid-cols-3">
        <div className="md:flex md:justify-end md:col-span-1">
          <nav className="text-right">
            <div className="flex items-center justify-between">
              <h1 className="p-4 font-bold uppercase border-b border-gray-1">
                <a href="/" className="hover:text-gray-700">
                  Food gaon
                </a>
              </h1>
              <div>
                <input type="text" />
              </div>
              <div className="px-4 cursor-pointer md:hidden" id="burger" ref={burgerRef}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
            <ul className="hidden mt-6 text-sm md:block" id="menu" ref={menuRef}>
              <li className="py-1 font-bold text-gray-700">
                <a href="#" className="flex justify-end px-4 border-r-4 border-primary">
                  <span>Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </a>
              </li>
              <li className="py-1">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/board');
                  }}
                  className="flex justify-end px-4 border-r-4 border-white"
                >
                  <span>Board</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-end px-4 border-r-4 border-white">
                  <span>Contact</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-end px-4 border-r-4 border-white">
                  <span>Inner Width : {<InnerWidth />}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </a>
              </li>{' '}
              <li>
                <a href="#" className="flex justify-end px-4 border-r-4 border-white">
                  <span>docX : {docX}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end ">
            <a
              href="#"
              className="transition duration-500 ease-out hover:bg-primary hover:text-white md:border-2 text-primary btn border-primary"
            >
              Log in
            </a>

            <a
              href="#"
              className="ml-2 transition duration-500 ease-out hover:bg-primary hover:text-white md:border-2 text-primary btn border-primary"
            >
              Sign Up
            </a>
          </div>

          <header>
            <h2 className="text-6xl font-semibold text-gray-700">Recipes</h2>
            <h3 className="text-2xl font-semibold ">For Gaon</h3>
            <div>
              <h4 className="pb-2 mt-12 font-bold border-b border-gray-200 ">
                Latest Recipes
              </h4>
              <div className="grid gap-10 mt-8 lg:grid-cols-3 ">
                <div className="card hover:shadow-lg">
                  <img
                    src={chiken}
                    alt="치킨"
                    className="object-cover w-full h-32 sm:h-48"
                  />
                  <div className="m-4">
                    <span className="font-bold">5 Bean Chilli Stew</span>
                    <span className="block text-sm text-gray-500">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span>25 mins</span>
                  </div>
                </div>
                <div className="card hover:shadow-lg">
                  <img
                    src={chiken}
                    alt="치킨"
                    className="object-cover w-full h-32 sm:h-48"
                  />
                  <div className="m-4">
                    <span className="font-bold">5 Bean Chilli Stew</span>
                    <span className="block text-sm text-gray-500">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>25 mins</span>
                  </div>
                </div>
                <div className="card hover:shadow-lg">
                  <img
                    src={chiken}
                    alt="치킨"
                    className="object-cover w-full h-32 sm:h-48"
                  />
                  <div className="m-4">
                    <span className="font-bold">5 Bean Chilli Stew</span>
                    <span className="block text-sm text-gray-500">Recipe by Mario</span>
                  </div>
                  <div className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>25 mins</span>
                  </div>
                </div>
              </div>

              <h4 className="pb-2 mt-12 font-bold border-b border-gray-200 ">
                Most Popular
              </h4>
              <div className="mt-8">{/* 카드 위치 */}</div>

              <div className="flex justify-center">
                <div className="transition duration-300 ease-out transform hover:bg-opacity-50 hover:scale-125 btn bg-secondary-100 hover:shadow-inner text-secondary-200">
                  Load more
                </div>
              </div>
            </div>
          </header>
        </main>
      </div>
    </div>
  );
}

export default App;
