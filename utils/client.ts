import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: "pxis2vhd",
  dataset: "production",
  apiVersion: "2022-12-30",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
