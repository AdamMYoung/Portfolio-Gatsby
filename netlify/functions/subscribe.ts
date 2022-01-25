import { Handler } from '@netlify/functions';
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
});

const handler: Handler = async (event) => {
    const email = event.queryStringParameters.email;

    if (!email) {
        return { statusCode: 400 };
    }

    mailchimp.lists.addListMember('16aaa3e39a', {
        email_address: email,
        status: 'subscribed',
    });

    return { statusCode: 200, body: 'User subscribed' };
};

export { handler };
