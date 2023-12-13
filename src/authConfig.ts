import { BrowserCacheLocation, Configuration, LogLevel } from "@azure/msal-browser";

const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

export const b2cPolicies = {
    names: {
        signUpSignIn: process.env.REACT_APP_POLICY_NAME,
    },
    authorities: {
        signUpSignIn: {
            authority: process.env.REACT_APP_AUTHORITY_URL
        }
    },
    authorityDomain: process.env.REACT_APP_AUTHORITY_DOMAIN
};

export const msalConfig: Configuration = {
    auth: {
        clientId: process.env.REACT_APP_CLIENT_ID ?? '',
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain ?? ''],
        redirectUri: process.env.REACT_APP_AUTH_REDIRECT_URI,
        postLogoutRedirectUri: process.env.REACT_APP_AUTH_REDIRECT_URI,
        navigateToLoginRequestUrl: true,
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: isIE
    }
}

export const loginRequest = {
    scopes: ['openid','profile', process.env.REACT_APP_SCOPE ?? '']
}