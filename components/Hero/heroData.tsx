"use server";
export default async function heroData() {	
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}v1/marketing-hero`,{
		method: "GET",
		next: {revalidate: 3600}
	});
	if(!res.ok){
		throw new Error("Failed to fetch hero");
	}
	const json = await res.json();
	return json.data;
}
