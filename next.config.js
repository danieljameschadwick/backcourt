const path = require("path");

module.exports = {
    reactStrictMode: true,
    env: {
        API: "http://192.168.1.179:4000", // @TODO: env required
    },
    sassOptions: {
        includePaths: [
            path.join(__dirname, "styles")
        ],
    }
};
