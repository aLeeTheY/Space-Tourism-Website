module.exports = ({ env }) => ({
    plugins: {
        "postcss-preset-env": {
            // default value
            stage: 2,

            // more stable for production mode
            // stage: env === "production" ? 4 : 2,

            // disabled
            // autoprefixer: { grid: true },
        },
        // cssnano only in production mode
        ...(env === "production" && {
            cssnano: {
                // preset: "default",
                preset: "advanced",
            },
        }),
    },
});
