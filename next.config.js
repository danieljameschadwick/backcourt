const path = require("path");

module.exports = {
    reactStrictMode: true,
    env: {
        API: "http://localhost:4000",
    },
    sassOptions: {
        includePaths: [
            path.join(__dirname, "styles")
        ],
    }
};
