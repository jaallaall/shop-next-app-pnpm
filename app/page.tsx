import dynamic from "next/dynamic";

const Home = dynamic(() => import("components/Home"));

// async function getData() {
//   const res = await fetch("https://api.example.com");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default function HomePage() {
  // const artistData = await getData();
  // console.log(artistData);
  return <Home />;
}
