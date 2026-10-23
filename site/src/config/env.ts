/**
 * Build-time integration settings read from environment variables.
 * On Vercel: Project → Settings → Environment Variables. Locally: site/.env
 *
 *   PUBLIC_GTM_ID              GTM-XXXXXXX  (loads GTM with Consent Mode v2)
 *   PUBLIC_HUBSPOT_PORTAL_ID   HubSpot portal / hub id
 *   PUBLIC_HUBSPOT_FORM_ID     HubSpot form GUID (contact form posts to the Forms API)
 *   PUBLIC_HUBSPOT_REGION      eu1 | na1 (default eu1)
 *   PUBLIC_WEB3FORMS_KEY       Fallback delivery for the contact form while HubSpot is not wired
 *   PUBLIC_SHOW_DRAFTS         "true" to include approved:false case studies / partners (preview deploys)
 *   PUBLIC_SHOW_TODOS          "true" to render TODO callouts (defaults to on in dev)
 */
const env = import.meta.env;

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
const bool = (v: unknown) => str(v).toLowerCase() === 'true';

export const ENV = {
  gtmId: str(env.PUBLIC_GTM_ID),
  hubspot: {
    portalId: str(env.PUBLIC_HUBSPOT_PORTAL_ID) || str(env.HUBSPOT_PORTAL_ID),
    formId: str(env.PUBLIC_HUBSPOT_FORM_ID) || str(env.HUBSPOT_FORM_ID),
    region: str(env.PUBLIC_HUBSPOT_REGION) || 'eu1',
  },
  web3formsKey: str(env.PUBLIC_WEB3FORMS_KEY),
  showDrafts: bool(env.PUBLIC_SHOW_DRAFTS) || env.DEV === true,
  showTodos: bool(env.PUBLIC_SHOW_TODOS) || env.DEV === true,
};

export const GTM_READY = !!ENV.gtmId;
export const HUBSPOT_FORM_READY = !!ENV.hubspot.portalId && !!ENV.hubspot.formId;
export const WEB3FORMS_READY = !!ENV.web3formsKey;
