export const log = {
    error: (content: unknown) => {
        console.log(
            '\x1b[1m\x1b[41m ✘ [Error] \x1b[30m\x1b[7m check below to find more about error \x1b[0m'
        );
        console.log(content);
    },
    success: (content: unknown) => {
        console.log('');
        console.log(
            `\x1b[1m\x1b[42m ✔ [Success] \x1b[30m\x1b[7m ${content} \x1b[0m`
        );
    },
    warning: (content: unknown) => {
        console.log(
            `\x1b[1m\x1b[103m [Warning] \x1b[30m\x1b[7m check below to find more about warning \x1b[0m`
        );
        console.log(content);
    },
    loading: (content: unknown) => {
        console.log('');
        console.log(
            `\x1b[1m\x1b[44m [Loading] \x1b[30m\x1b[7m ${content} \x1b[0m`
        );
    },
    plain: (content: unknown) => {
        console.log(`\x1b[1m\x1b[30m\x1b[7m ${content} \x1b[0m`);
    },
};