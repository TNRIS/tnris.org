'use strict';
/* global angular:false */

//PRODUCTION front-end app config

angular.module('ConfigApp', [])
  .constant('CONTACT_SUBMIT_URL', 'https://contact.tnris.org/')
  .constant('CONTACT_UPLOAD_BUCKET', 'contact-uploads')
  .constant('ZIP_UPLOAD_POLICY_URL', 'https://contact.tnris.org/policy/zip-upload')
  .constant('FILE_UPLOAD_POLICY_URL', 'https://contact.tnris.org/policy/file-upload')
  .constant('IMAGE_UPLOAD_POLICY_URL', 'https://contact.tnris.org/policy/image-upload')
  .constant('RECAPTCHA_MODEL_KEY', '6Lf8GP8SAAAAAFx2H53RtfDO18x7S1q_0pGNdmbd')
  ;
