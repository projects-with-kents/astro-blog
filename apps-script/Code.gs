const GOOGLE_FORM_ACTION_URL = PropertiesService.getScriptProperties().getProperty('GOOGLE_FORM_ACTION_URL');
const NAME_ENTRY_ID = PropertiesService.getScriptProperties().getProperty('GOOGLE_FORM_NAME_ENTRY_ID');
const EMAIL_ENTRY_ID = PropertiesService.getScriptProperties().getProperty('GOOGLE_FORM_EMAIL_ENTRY_ID');
const PHONE_ENTRY_ID = PropertiesService.getScriptProperties().getProperty('GOOGLE_FORM_PHONE_ENTRY_ID');
const MESSAGE_ENTRY_ID = PropertiesService.getScriptProperties().getProperty('GOOGLE_FORM_MESSAGE_ENTRY_ID');

function doGet() {
  return HtmlService.createHtmlOutput('<p>Google Forms bridge is running.</p>');
}

function doPost(e) {
  try {
    const data = e && e.parameter ? e.parameter : {};
    forwardToGoogleForm(data);

    return HtmlService.createHtmlOutput('<p>Thanks. Your request was sent.</p>');
  } finally {
  }
}

function forwardToGoogleForm(data) {
  if (!GOOGLE_FORM_ACTION_URL) {
    throw new Error('Set GOOGLE_FORM_ACTION_URL in Script Properties first.');
  }

  const payload = new URLSearchParams();

  addEntry(payload, NAME_ENTRY_ID, data.name);
  addEntry(payload, EMAIL_ENTRY_ID, data.email);
  addEntry(payload, PHONE_ENTRY_ID, data.phone);
  addEntry(payload, MESSAGE_ENTRY_ID, data.message);

  UrlFetchApp.fetch(GOOGLE_FORM_ACTION_URL, {
    method: 'post',
    payload: payload.toString(),
    contentType: 'application/x-www-form-urlencoded',
    muteHttpExceptions: true,
  });
}

function addEntry(payload, entryId, value) {
  if (!entryId) {
    throw new Error('Set all Google Form entry IDs in Script Properties first.');
  }

  payload.append(entryId, value || '');
}
