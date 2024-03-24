import React from 'react'

const BlogMenu = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src="https://source.unsplash.com/480x360/?planet" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">NASA telescope discovers a bizarre, half-lava world</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2024</span>
				<p>Scientists have discovered a world that is almost identical in size to Earth, with a star almost identical to our sun.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/480x360/?ipad" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Apple's new iPad Air packs an M1 chip — here's how to pre-order it</h3>
					<span className="text-xs dark:text-gray-600">January 21, 2023</span>
					<p>The new Apple iPad Air (2022) is set for release on March 18, though you can reserve one ahead of time directly through the Apple Store beginning at 5 a.m. PST on March 11. </p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/480x360/?tiktok" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Surrounded by sharks: TikTok faces Senate attacks as investors eye it hungrily</h3>
					<span className="text-xs dark:text-gray-600">January 22, 2024</span>
					<p>Roiling uncertainty about TikTok's future and the powers of the federal government make this a vulnerable time for the social media giant. </p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/480x360/?solana" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Solana blockchain overrun with racist memecoins in latest cryptocurrency trend</h3>
					<span className="text-xs dark:text-gray-600">January 23, 2024</span>
					<p>The memecoin craze is now once-again very popular among the cryptocurrency community, especially on the Solana blockchain. But, over the past few days, the memecoins haven't been based on cute internet animal memes.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/480x360/?gaming-setup" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">These GIGABYTE laptops use AI to enhance your gaming</h3>
					<span className="text-xs dark:text-gray-600">January 24, 2024</span>
					<p>Gaming laptops are known for pushing tech boundaries, prioritizing top-tier hardware like advanced GPUs, fast processors, and ample RAM to gain an edge. And machines like the AORUS 16X and GIGABYTE G6X now integrate cutting-edge AI for better performance and efficiency.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/480x360/?Instagram" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Instagram just limited the political content you see. You can change that.</h3>
					<span className="text-xs dark:text-gray-600">January 25, 2021</span>
					<p>It's easy to see why. Social media sites have been rife with misinformation and disinformation during past elections. It seems Meta's response to these egregious mistakes is to make political content rarer on its platforms. Users have noticed that Instagram and Threads are quite literally putting limits on political content.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/480x360/?dragon-ball-z" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">‘Dragon Ball’: Saudi Arabia set to honor Akira Toriyama with the world’s first theme park</h3>
					<span className="text-xs dark:text-gray-600">March 26, 2024</span>
					<p>On Friday, March 22, 2024, Toei Animation, the owner of the franchise revealed that Qiddiya Investment Company will bring the Dragon Ball theme park to life. It will be built in Qiddiya, the entertainment and tourism project outside the Saudi Arabian capital of Riyadh.</p>
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
