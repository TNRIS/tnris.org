'use strict';
/* global angular:false */

// DEVELOPMENT front-end app config
// Dev config assumes api is running locally. Will need to spin up api.tnris.org
// locally FIRST (runs on port 8000). then spin up local build of tnris.org. This 
// will cause tnris.org to run on port 8020 which is why this config uses local port 8000
angular.module('ConfigApp', [])
  .constant('CONTACT_SUBMIT_URL', 'http://localhost:8000/api/v1/contact/submit/')
  .constant('CCP_SUBMIT_URL', 'http://localhost:8000/api/v1/contact/order/')
  .constant('ZIP_UPLOAD_POLICY_URL', 'http://localhost:8000/api/v1/contact/policy/zip-upload')
  .constant('FILE_UPLOAD_POLICY_URL', 'http://localhost:8000/api/v1/contact/policy/file-upload')
  .constant('IMAGE_UPLOAD_POLICY_URL', 'http://localhost:8000/api/v1/contact/policy/image-upload')
  .constant('RECAPTCHA_SITE_KEY', '6Lf8GP8SAAAAAFx2H53RtfDO18x7S1q_0pGNdmbd')
  ;