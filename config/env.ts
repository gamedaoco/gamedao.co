export const DEV = process.env.NODE_ENV !== 'production'

export const GA_TRACKING_ID = process.env.GA_TRACKING_ID
export const FB_TRACKING_ID = process.env.FB_TRACKING_ID

export const SITE_NAME = process.env.SITE_NAME || 'gameDAO'
export const SITE_TITLE = process.env.SITE_TITLE || 'Crowdfunding for Videogames'
export const SITE_DESCRIPTION =
	process.env.SITE_DESCRIPTION || 'a DAO for videogames , creative content and gaming as a profession'
export const SITE_IMAGE = process.env.SITE_IMAGE || 'https://gamedao.co/z-control-45-full.png'
export const SITE_TW_NAME = process.env.SITE_TW_NAME || '@zerodotio'

export const MAILCHIMP =
	process.env.MAILCHIMP ||
	'https://zero.us5.list-manage.com/subscribe/post?u=9b3f3ef14c871758185754652&amp;id=d09264f8c7'
