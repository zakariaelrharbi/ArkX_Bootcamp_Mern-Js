import React from 'react'

const navBar = ({ toggleLoginForm }) => {
  return (
    <div>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between lg:justify-around h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 dark:text-violet-600 font-bold text-3xl">New <span>W</span>aves
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">About</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Blog</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contact</a>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button onClick={toggleLoginForm} className="self-center px-8 py-3 rounded">Sign in</button>
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    </div>
  )
}

export default navBar
