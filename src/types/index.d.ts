export { };
declare global {
    interface Window {
        scrollHeight: any;
        scrollTop: any;
        clientHeight: any; // 👈️ turn off type checking
    }
}

