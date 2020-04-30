export const DEV = process.env.NODE_ENV !== 'production'

export const GA_TRACKING_ID = process.env.GA_TRACKING_ID

export const SITE_NAME = process.env.SITE_NAME || 'GameDAO'
export const SITE_TITLE = process.env.SITE_TITLE || 'Crowdfunding for Videogames'
export const SITE_DESCRIPTION = process.env.SITE_DESCRIPTION || 'a DAO for videogames, creative content and gaming as a profession'
export const SITE_IMAGE = process.env.SITE_IMAGE || 'https://gamedao.co/z-control-45-full.png'
export const TW_SITE_NAME = process.env.SITE_TW_NAME || '@gamedaoco'
export const TW_SITE_CREATOR = process.env.SITE_TW_NAME || '@marcobahn'

export const MAILCHIMP = process.env.MAILCHIMP || 'https://zero.us5.list-manage.com/subscribe/post?u=9b3f3ef14c871758185754652&amp;id=d09264f8c7'

export const GQL_URI = DEV ? `http://localhost:28080/v1/graphql` : `https://api.gamedao.co/v1/graphql`
export const GQL_DEVKEY = 'myadminsecretkey'

export const FEATURE_FOOTER_NAV = DEV

export const MIXPANEL = 'd7b5745581cf3b11e7d1709ba4d715cd'
