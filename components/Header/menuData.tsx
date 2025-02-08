//"use client";
"use server";
export default async function menuData() {	
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}v1/menus`,{
		method: "GET",
		next: {revalidate: 3600 }
	});
	if(!res.ok){
		throw new Error("Failed to fetchmenu");
	}
	const json = await res.json();
	return json.data;
}
// const menuData: Menu[] = [
//   {
//     id: 1,
//     title: "Home",
//     path: "/",
//     newTab: false,
//   },
//   {
//     id: 2,
//     title: "About",
//     path: "/about",
//     newTab: false,
//   },
//   {
//     id: 3,
//     title: "Contact",
//     path: "/contact",
//     newTab: false,
//   },
//   {
//     id: 4,
//     title: "Services",
//     newTab: false,
//     submenu: [
//       {
//         id: 41,
//         title: "Backend Development",
//         path: "/about",
//         newTab: false,
//       },
//       {
//         id: 42,
//         title: "Web Development",
//         path: "/contact",
//         newTab: false,
//       },
//       {
//         id: 43,
//         title: "Mobile App Development",
//         path: "/blog",
//         newTab: false,
//       },
//       {
//         id: 44,
//         title: "Desktop App Development",
//         path: "/blog-sidebar",
//         newTab: false,
//       },
//       {
//         id: 46,
//         title: "Sign In Page",
//         path: "/signin",
//         newTab: false,
//       },
//       {
//         id: 47,
//         title: "Sign Up Page",
//         path: "/signup",
//         newTab: false,
//       },
//       {
//         id: 48,
//         title: "Error Page",
//         path: "/error",
//         newTab: false,
//       },
//     ],
//   },
// ];
