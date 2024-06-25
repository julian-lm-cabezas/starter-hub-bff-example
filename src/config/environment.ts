import * as productInfo from '../../product-info.json'

export const getEnv = () => {
    return {
        port: Number(process.env.PORT ?? 3000),
        logLevel: process.env.LOG_LEVEL ?? 'debug',
        webHome:  process.env.WEB_URL ?? 'http://localhost:8080',
        api: {
            url: process.env.API_URL ?? 'http:localhost:8081'
        },
        pingid: {
            pingUrl: process.env.PING_URL ?? 'https://idpb2e-rec.adeo.com',
            baseUrl: process.env.HOST ?? 'http://localhost:3000',
            webUrl: process.env.WEB_URL ?? 'http://localhost:8080',
            clientId: process.env.PING_CLIENT_ID ?? 'pingID',
            clientSecret: process.env.PING_CLIENT_SECRET ?? 'pingSecret',
            scopes: 'openid profile email advprofile groups',
            cookieName: process.env.COOKIE_NAME ?? 'adeo-cookie',
            cookieDomain: process.env.COOKIE_DOMAIN ?? 'localhost',
            jwtSignature: process.env.JWT_SECRET ?? 'secret',
            noCache: Boolean(process.env.NO_CACHE),
            cookieExpiracy: process.env.COOKIE_EXP ? Number(process.env.COOKIE_EXP) : undefined
        },
        tangram: {
            id: productInfo.tangram_id ,
            project: '###TANGRAM_NAME###'
        },
    }
} 