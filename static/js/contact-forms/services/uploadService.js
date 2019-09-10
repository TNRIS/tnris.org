'use strict';

angular.module('ContactFormApp')
  .service('UploadService',
    ['$http', 'Upload', 'ZIP_UPLOAD_POLICY_URL', 'IMAGE_UPLOAD_POLICY_URL', 'FILE_UPLOAD_POLICY_URL', 'CONTACT_UPLOAD_BUCKET',
    function ($http, Upload, ZIP_UPLOAD_POLICY_URL, IMAGE_UPLOAD_POLICY_URL, FILE_UPLOAD_POLICY_URL, CONTACT_UPLOAD_BUCKET) {

      function getPolicy(policyUrl) {
        return $http.get(policyUrl)
          .then(function (response) {
            return response.data;
          });
      }

      function uploadParams(file, form_id, fileType, s3policy) {
        var fileKey = form_id + '/' + Date.now() + '_' + file.name;
        return {
          url: 'https://' + CONTACT_UPLOAD_BUCKET + '.s3.amazonaws.com/',
          method: 'POST',
          fields: {
            key: fileKey,
            acl: 'private',
            AWSAccessKeyId: s3policy.key,
            Policy: s3policy.policy,
            Signature: s3policy.signature,
            'Content-Type': fileType,
            'Content-Length': file.size,
            'success_action_status': '201',
            'success_action_redirect': ''
          },
          file: file
        };
      }

      var service = {};

      service.uploadZip = function uploadZip(file, form_id) {
        return getPolicy(ZIP_UPLOAD_POLICY_URL)
          .then(function (s3policy) {
            return $upload.upload(uploadParams(file, form_id, "application/zip", s3policy));
          });
      };

      service.uploadImage = function uploadImage(file, form_id) {
        return getPolicy(IMAGE_UPLOAD_POLICY_URL)
          .then(function (s3policy) {
            return $upload.upload(uploadParams(file, form_id, file.type, s3policy));
          });
      };

      service.uploadFile = function uploadFile(file, form_id) {
        return getPolicy(FILE_UPLOAD_POLICY_URL)
          .then(function (s3policy) {
            return $upload.upload(uploadParams(file, form_id, file.type, s3policy));
          });
      };

      return service;
    }]
  );
