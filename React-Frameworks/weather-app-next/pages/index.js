import { getDefaultFormats } from "@/services/cookies";
import { getCookie } from "cookies-next";

export async function getServerSideProps(context) {
  const cities = await getFrontPageData();
  const defaultFormats = getDefaultFormats(context);
  const myCity = JSON.parse(getCookie("nextjs-mycity", context) || "null");
  return { props: { cities, defaultFormats, myCity } };
}

function FrontPage({ cities, defaultFormats, myCity }) {
  return <></>;
}
