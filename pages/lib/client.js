import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client=SanityClient({
    projectId:'mm8evfrd',
    dataset:'production',
    apiVersion:'2022-06-21',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})