import Image from "next/image";
import React from "react";

async function getData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}v1/marketing-infograph`, {
		method: "GET",
		next: {revalidate: 3600}
	});
	if (!res.ok) { throw new Error("Failed to fetch hero"); }
	return res.json();
  }
  
export default async function AboutSectionTwo() {
	const infoData = await getData();
	const InfographLeft = ({ data }) => (<div className="-mx-4 flex flex-wrap items-center">
		<div className="w-full px-4 lg:w-1/2">
			<div
				className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
				data-wow-delay=".15s"
			>
				<img src={data.image_url} alt={data.banner_alt} className="drop-shadow-three dark:hidden dark:drop-shadow-none" />
				<img
					src="/images/about/about-image-2-dark.svg"
					alt="about image"
					className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
				/>
			</div>
		</div>
		<div className="w-full px-4 lg:w-1/2">
			<div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
				<div className="mb-9">
					<div dangerouslySetInnerHTML={{ __html: data.text }} />
				</div>
			</div>
		</div>
	</div>)

	const InfographRight = ({ data }) => (<div className="-mx-4 flex flex-wrap items-center">
		<div className="w-full px-4 lg:w-1/2">
			<div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
				<div className="mb-9">
					<div dangerouslySetInnerHTML={{ __html: data.text }} />
				</div>
			</div>
		</div>
		<div className="w-full px-4 lg:w-1/2">
			<div
				className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
				data-wow-delay=".15s"
			>
				<img src={data.banner_img} alt={data.banner_alt} className="drop-shadow-three dark:hidden dark:drop-shadow-none" />
				<img
					src="/images/about/about-image-2-dark.svg"
					alt="about image"
					className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
				/>
			</div>
		</div>
	</div>)

	return (
		<section className="py-16 md:py-20 lg:py-28">
			<div className="container" >
				{(infoData.data).map((infoItem, index) => (
					<React.Fragment key={index}>
						{(infoItem.img_direction == 0)? <InfographLeft data={infoItem} /> : <InfographRight data={infoItem} />} 
					</React.Fragment>
				))}
			</div>
		</section>
	);
};
