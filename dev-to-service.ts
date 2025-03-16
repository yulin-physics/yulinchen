import type DevToArticle from "@/interfaces/dev-to-article";
import type DevToArticleMeta from "@/interfaces/dev-to-article-meta";
import axios from 'axios';

// setup API endpoints and queries
const DEV_TO_USERNAME = "yulin"; // swap this for your username
const ARTICLES_API = "https://dev.to/api/articles";

// helper method to type responses
const parseResponse = <T>(response: any): T => {
    return (typeof response === "string" ? JSON.parse(response) : response) as T
};

const fetchArticles = async (): Promise<Array<DevToArticleMeta>> => {
    // GET the endpoint
    const response = await axios.get(ARTICLES_API, {
        params: {
            // and add the username query parameter
            username: DEV_TO_USERNAME
        }
    }).then((response) => response.data).catch(err => console.log(err))

    return parseResponse(response);
};

const getArticle = async (id: string): Promise<DevToArticle> => {
    const endpoint = `${ARTICLES_API}/${id}`;
    const response = await axios.get(endpoint).then((response) => response.data).catch(err => console.log(err));
    return parseResponse<DevToArticle>(response);
};

const getRecentArticle = async (): Promise<DevToArticle> => {
    // GET the endpoint
    const response = await axios.get(ARTICLES_API, {
        params: {
            // and add the username query parameter
            username: DEV_TO_USERNAME,
            page: 1,
            per_page: 1,
        }
    }).then((response) => response.data).catch(err => console.log(err))

    const parsed: Array<DevToArticle> = parseResponse(response);
    return parsed[0]
};

export const DevToService = {
    fetchArticles,
    getArticle,
    getRecentArticle
};