// log the pageview with their URL
export const pageview = (url: string) => {
    //@ts-ignore
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    });
};

// log specific events happening.
//@ts-ignore
// export const gaEvent = ({ action: any, params: any }) => {
//     //@ts-ignore
//     window.gtag("event", action, params);
// };
