import { Cinzel_Decorative, Urbanist } from "next/font/google";

export const cinzelDecorative = Cinzel_Decorative({
    weight: ['400', '700', '900'],
    variable: "--font-cinzel-decorative",
    subsets: ["latin"]
});

export const urbanist = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

export const weddingDetails = {
    traditional: {
        id: 'Marcel & Victoria\'s Traditional Wedding',
        date: '2025-02-08',
        startTime: '01:00PM',
        endTime: '05:00PM',
        attire: 'Traditional Attire',
        location: 'Port Harcourt, Rivers State, Nigeria',
        url: 'https://maps.app.goo.gl/hL9USi78yo74KuKd7',
    },
    white: {
        id: 'Marcel & Victoria\'s Church Wedding',
        date: '2025-02-22',
        location: 'Lagos, Nigeria',
        attire: 'We\'re big on you having fun, so think: Comfortable Elegance!',
        startTime: '10:00AM',
        endTime: '12:00PM',
        coords: {
            lat: 6.6415316,
            lng: 3.3523659
        },
        url: 'https://maps.app.goo.gl/CM9X8FnhN8vQpYfDA',
    },
    reception: {
        id: 'Marcel & Victoria\'s Wedding Reception',
        date: '2025-02-22',
        location: 'Gallant Event Center, Jumat Olukoya Street-, Ojota, Ikeja 105102, Lagos.',
        attire: 'Dress Well And Look Good!',
        startTime: '01:00PM',
        endTime: '06:00PM',
        coords: {
            lat: 6.5870955,
            lng: 3.3823268,
        },
        url: 'https://maps.app.goo.gl/9WP2HoXh4wRamu2A7',
    },
};

export const routes = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'About Us',
        path: '/about-us'
    },
    {
        label: 'Schedule',
        path: '/schedule'
    },
    {
        label: 'Registry',
        path: '/registry'
    },
    {
        label: 'RSVP',
        path: '/rsvp'
    },
    {
        label: 'Q&A',
        path: '/questions'
    },
];

export const RSVP_DEADLINE = '2025-02-08';