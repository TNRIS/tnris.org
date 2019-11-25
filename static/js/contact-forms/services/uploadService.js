'use strict';

angular.module('ContactFormApp')
  .service('UploadService',
    ['$http', 'Upload', 'ZIP_UPLOAD_POLICY_URL', 'IMAGE_UPLOAD_POLICY_URL', 'FILE_UPLOAD_POLICY_URL',
    function ($http, Upload, ZIP_UPLOAD_POLICY_URL, IMAGE_UPLOAD_POLICY_URL, FILE_UPLOAD_POLICY_URL) {

      function getPolicy(policyUrl, key) {
        return $http.post(policyUrl, {key: key})
        .then(function (response) {
          return response.data;
        });
      }
      
      function uploadParams(file, presignedUrl, fileType) {
        return {
          url: presignedUrl.url,
          method: 'POST',
          fields: {
            key: presignedUrl.fields.key,
            acl: 'private',
            AWSAccessKeyId: presignedUrl.fields.AWSAccessKeyId,
            policy: presignedUrl.fields.policy,
            signature: presignedUrl.fields.signature,
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
        var fileKey = form_id + '/' + Date.now() + '_' + file.name;
        return getPolicy(ZIP_UPLOAD_POLICY_URL, fileKey)
          .then(function (presignedUrl) {
            return Upload.upload(uploadParams(file, presignedUrl, "application/zip"));
          });
      };

      service.uploadImage = function uploadImage(file, form_id) {
        var fileKey = form_id + '/' + Date.now() + '_' + file.name;
        return getPolicy(IMAGE_UPLOAD_POLICY_URL, fileKey)
          .then(function (presignedUrl) {
            return Upload.upload(uploadParams(file, presignedUrl, file.type));
          });
      };

      service.uploadFile = function uploadFile(file, form_id) {
        var fileKey = form_id + '/' + Date.now() + '_' + file.name;
        return getPolicy(FILE_UPLOAD_POLICY_URL, fileKey)
          .then(function (presignedUrl) {
            return Upload.upload(uploadParams(file, presignedUrl, file.type));
          });
      };

      return service;
    }]
  );
