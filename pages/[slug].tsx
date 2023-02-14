import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { BASE_URL } from "../utils";

import { client } from "../utils/client";
import { singlePageQuery } from "../utils/queries";

const Slug = ({ data }: any) => {
  console.log("assda", data);
  return <div>Slug</div>;
};

export const getServerSideProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/${slug}`);

  if (!res.data.length) return { notFound: true, };

  return {
    props: { data: res.data },
  };
};

export default Slug;
