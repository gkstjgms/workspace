module.exports = {
    apps: [
        {
            name: 'Semi-TS-API-Server',
            script: 'node',

            // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
            args: './build/bundle.js',
            autorestart: true,
            watch: false,
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
