"use server";
export default async function infoData() {	
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}v1/marketing-infograph`,{
		method: "GET",
		cache: "no-store"
	});
	if(!res.ok){
		throw new Error("Failed to fetch hero");
	}
	const json = await res.json();
	return json.data;
}
