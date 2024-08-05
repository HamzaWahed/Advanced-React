import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps(context) {
  const { cc, city } = context.query;
  const data = await getCityData(cc.toUpperCase(), city);
  const defaultFormats = getDefaultFormats(context);
  if (data.slug !== city) {
    return {
      redirect: {
        destination: `/${cc}/${data.slug}`,
        permanent: false,
      },
    };
  }

  return { props: { data, defaultFormats } };
}

function City({ data, defaultFormats }) {
  return (
    <FormatProvider defaultFormats={defaultFormats}>
      <CityDisplay data={data} />
    </FormatProvider>
  );
}
