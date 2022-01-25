import { Handler } from '@netlify/functions';
import axios from 'axios';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
});

const handler: Handler = async (event) => {
    const email = event.queryStringParameters.email;
    const token = event.queryStringParameters.token;

    if (!email || !token) {
        return { statusCode: 400 };
    }

    const { data } = await axios.get('https://www.google.com/recaptcha/api/siteverify', {
        params: { secret: process.env.RECAPTCHA_SERVER_SECRET, response: token },
    });

    if (!data?.success || data?.score < 0.5) {
        return { statusCode: 401, body: 'User identified as a bot.' };
    }

    mailchimp.lists.addListMember('AYDev', {
        email_address: email,
        status: 'subscribed',
    });

    return { statusCode: 200, body: 'User subscribed' };
};

export { handler };
