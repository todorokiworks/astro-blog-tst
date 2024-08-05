import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: "blog-test-tdworks",
    apiKey: "WiTln5yXh9nZF0873Oy62e4XGheVZrKV5MHs",
})

export const getBlogs = async (queries: MicroCMSQueries) => {
    return await client.get({ endpoint: "blogs", queries })
}

export const getBlogDetail = async (blogId: string, queries?: MicroCMSQueries) => {
    return await client.getListDetail({
        endpoint: "blogs",
        contentId: blogId,
        queries,
    })
}