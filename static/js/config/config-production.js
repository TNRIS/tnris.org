'use strict';
/* global angular:false */

// PRODUCTION front-end app config
// uses production api.tnris.org contact app
angular.module('ConfigApp', [])
  .constant('CONTACT_SUBMIT_URL', 'https://api.tnris.org/api/v1/contact/submit/')
  .constant('CONTACT_UPLOAD_BUCKET', 'contact-uploads')
  .constant('ZIP_UPLOAD_POLICY_URL', 'https://api.tnris.org/api/v1/contact/policy/zip-upload')
  .constant('FILE_UPLOAD_POLICY_URL', 'https://api.tnris.org/api/v1/contact/policy/file-upload')
  .constant('IMAGE_UPLOAD_POLICY_URL', 'https://api.tnris.org/api/v1/contact/policy/image-upload')
  .constant('RECAPTCHA_SITE_KEY', '6Lf8GP8SAAAAAFx2H53RtfDO18x7S1q_0pGNdmbd')
  ;
