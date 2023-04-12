import Layout from "components/Layout";
import { Api } from "interfaces";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("components/Home"));

async function getDataCategories() {
  const res = await fetch(Api.CATEGORIES);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage() {
  const dataCategories = await getDataCategories();
  return (
    <Layout>
      <Home dataCategories={dataCategories} />
    </Layout>
  );
}
