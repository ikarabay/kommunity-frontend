export const mailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';

export const EMAIL_LIST_IDS = {
  BETA_SIGNUP: '6746304',
};

export const RECAPTCHA_CLIENT_API_KEY = typeof window !== 'undefined' && window.app.keys.recaptcha;
