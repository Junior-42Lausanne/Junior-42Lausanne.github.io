export const mail = 'harneisjoshua@gmail.com';

export const maitTo = (mail: string, subject: string, body = '') =>
	`mailto:${mail}?body=${body}&subject=${subject}`;
