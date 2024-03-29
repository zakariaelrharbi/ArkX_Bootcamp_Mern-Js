import React from 'react'
import planet from '../assets/planet.jpg'
import solana from '../assets/solana.jpg'
import ipad from '../assets/ipad.jpg'
import tiktok from '../assets/tiktok.jpg'
import gigabyte from '../assets/gigabyte.jpg'
import instagram from '../assets/instagram.jpg'
import dallas from '../assets/dallas.svg'

const BlogMenu = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={planet} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl hover:underline focus:underline">NASA telescope discovers a bizarre, half-lava world</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2024</span>
				<p className="pb-6">Scientists have discovered a world that is almost identical in size to Earth, with a star almost identical to our sun...</p>
				<a className ="text-sm"href="">Read More »</a>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={ipad} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold hover:underline focus:underline">Apple's new iPad Air packs an M1 chip — here's how to pre-order it</h3>
					<span className="text-xs dark:text-gray-600">January 21, 2023</span>
					<p className="pb-6">The new Apple iPad Air (2022) is set for release on March 18, though you can reserve one ahead of time directly through the Apple Store beginning at 5 a.m. PST on March 11... </p>
					<a className ="text-sm"href="">Read More »</a>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={tiktok} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold hover:underline focus:underline">Surrounded by sharks: TikTok faces Senate attacks as investors eye it hungrily</h3>
					<span className="text-xs dark:text-gray-600">January 22, 2024</span>
					<p className="pb-6">Roiling uncertainty about TikTok's future and the powers of the federal government make this a vulnerable time for the social media giant... </p>
					<a className ="text-sm"href="">Read More »</a>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={solana} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold hover:underline focus:underline">Solana blockchain overrun with racist memecoins in latest cryptocurrency trend</h3>
					<span className="text-xs dark:text-gray-600">January 23, 2024</span>
					<p className="pb-6">The memecoin craze is now once-again very popular among the cryptocurrency community, especially on the Solana blockchain...</p>
					<a className ="text-sm"href="">Read More »</a>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={gigabyte} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold hover:underline focus:underline">These GIGABYTE laptops use AI to enhance your gaming</h3>
					<span className="text-xs dark:text-gray-600">January 24, 2024</span>
					<p className="pb-6"> Gaming laptops are known for pushing tech boundaries, prioritizing top-tier hardware like advanced GPUs, fast processors, and ample RAM to gain an edge. And machines like the AORUS... </p>
					<a className ="text-sm"href="">Read More »</a>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={instagram} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold hover:underline focus:underline">Instagram just limited the political content you see. You can change that.</h3>
					<span className="text-xs dark:text-gray-600">January 25, 2021</span>
					<p className="pb-6">It's easy to see why. Social media sites have been rife with misinformation and disinformation during past elections. It seems Meta's response to these egregious mistakes is to make political... </p>
					<a className ="text-sm"href="">Read More »</a>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={dallas} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold hover:underline focus:underline">Average Rent in Dallas & Rent Prices by Neighborhood</h3>
					<span className="text-xs dark:text-gray-600">March 26, 2024</span>
					<p className="pb-6">Dallas, known for its cosmopolitan style, significant role in the oil and cotton industries, and pivotal position in the railroad line, has become a hub.Over the years, it’s not just the city’s...</p>
					<a className ="text-sm"href="">Read More »</a>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
		</div>
	</div>
</section>
    </div>
  )
}

export default BlogMenu
