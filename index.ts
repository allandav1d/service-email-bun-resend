import { Resend } from 'resend';

const resend = new Resend('re_Jvv1wkrd_9bBwLBwxEQrJXad3RP6C5djr');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'allan.j.k@hotmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
}).then((response) => {
    console.log(response);
    }
).catch((error) => {
    console.log(error);
    }
);