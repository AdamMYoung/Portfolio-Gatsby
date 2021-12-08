import { Handler } from "@netlify/functions";
import axios from "axios"

type WebhookPayload = {
    title: string
    slug: string
    topics: string[]
    createdAt: string
    updatedAt: string
}

const handler: Handler = async (event, context) => {
    const result = JSON.parse(event.body) as WebhookPayload;

    if (result.createdAt !== result.updatedAt) {
        return { statusCode: 200 }
    }

    await axios.post(process.env.IFTTT_WEBHOOK_URL, {
        value1: result.title,
        value2: result.slug,
        value3: result.topics.reduce((prev, curr) => prev + `#${curr} `, "")
    })

    return { statusCode: 200 };
};

export { handler };