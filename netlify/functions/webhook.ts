import { Handler } from '@netlify/functions';
import axios from 'axios';

type WebhookPayload = {
    title: string;
    slug: string;
    topics: string[];
    createdAt: string;
    updatedAt: string;
};

const isPayload = (payload: any): payload is WebhookPayload => {
    return (
        typeof payload.title === 'string' &&
        typeof payload.slug === 'string' &&
        Array.isArray(payload.topics) &&
        typeof payload.createdAt === 'string' &&
        typeof payload.updatedAt === 'string'
    );
};

const handler: Handler = async (event) => {
    const result = JSON.parse(event.body);

    if (!isPayload(result)) {
        return { statusCode: 400 };
    }

    if (result.createdAt !== result.updatedAt) {
        return { statusCode: 200, body: 'Article is not a new post, no action has been performed.' };
    }

    await axios.post(process.env.IFTTT_WEBHOOK_URL, {
        value1: result.title,
        value2: result.slug,
        value3: result.topics.reduce((prev, curr) => prev + `#${curr.replace(/-/g, '')} `, '#dev #blog #blogpost '),
    });

    return { statusCode: 200, body: 'Article is a new post, social media posts have been submitted' };
};

export { handler };
