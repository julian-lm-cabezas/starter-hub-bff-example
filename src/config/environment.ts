import * as productInfo from '../../product-info.json'

export const getEnv = () => {
    if(process.env.NODE_ENV) 
        return {
            port: Number(process.env.PORT),
            logLevel: process.env.LOG_LEVEL,
            webHome:  process.env.WEB_URL,
            api: {
                url: process.env.API_URL
            },
            pingid: {
                pingUrl: process.env.PING_URL,
                baseUrl: process.env.HOST,
                webUrl: process.env.WEB_URL,
                clientId: process.env.PING_CLIENT_ID,
                clientSecret: process.env.PING_CLIENT_SECRET,
                scopes: 'openid profile email advprofile groups',
                cookieName: process.env.COOKIE_NAME,
                cookieDomain: process.env.COOKIE_DOMAIN,
                jwtSignature: process.env.JWT_SECRE,
                noCache: Boolean(process.env.NO_CACHE),
                cookieExpiracy: process.env.COOKIE_EXP ? Number(process.env.COOKIE_EXP) : undefined
            },
            tangram: {
                id: productInfo.tangram_id ,
                project: '###TANGRAM_NAME###'
            },
        }
    else return require('./environment.local').getEnv()
} 