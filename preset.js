export const addons = options => {
    return [
        {
            name: '@storybook-extras/preset',
            options: {
                angular: true,
                console: true,
                markdown: options.disableMarkdown
                    ? false
                    : {
                          mdExclude: [/\.component\.html$/],
                      },
                swagger: !options.openapiURL
                    ? false
                    : {
                          openapiURL: options.openapiURL,
                      },
            },
        },
    ];
};
