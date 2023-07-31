'use strict';

require('angular');
require('angular-animate');
require('ng-file-upload');
require ('angular-recaptcha');

require('../../../scss/contact.scss');

require('../config');

angular.module('ContactFormApp', ['ConfigApp', 'ngAnimate', 'ngFileUpload', 'vcRecaptcha'])
  .controller('FormController',
    ['$scope', '$http', '$log', '$window', 'UploadService', 'CONTACT_SUBMIT_URL', 'CCP_SUBMIT_URL', 'RECAPTCHA_SITE_KEY',
    function($scope, $http, $log, $window, UploadService, CONTACT_SUBMIT_URL, CCP_SUBMIT_URL, RECAPTCHA_SITE_KEY) {

      $scope.master = {};
      $scope.errors = {};
      $scope.status = 'not submitted';
      $scope.widgetId = null;
      $scope.recaptchaModel = {
        key: RECAPTCHA_SITE_KEY
      };

      $scope.recaptchaSetResponse = function (response) {
        $log.info('Response available');

        $scope.recaptcharesponse = response;
      };

      $scope.recaptchaSetWidgetId = function (widgetId) {
        $log.info('Created widget ID: %s', widgetId);
        $scope.recaptchawidgetId = widgetId;
      };

      // need to check if the browser supports HTML5 File API
      // so we can show or hide the file uploader in the forms
      $scope.isUploadUnsupported = !$window.File && !$window.FileReader && !$window.FileList && !$window.Blob;

      function resetUpload() {
        $scope.uploadError = false;
        $scope.uploadErrorMessage = null;
        $scope.uploadSuccess = false;
        $scope.isUploading = false;
        $scope.uploadProgress = 0;
        $scope.progressBarType = "info";
      }

      function setUploadError(errMessage) {
        $scope.uploadError = true;
        $scope.uploadErrorMessage = errMessage;
        $scope.files = null;
      }

      function onUploadSuccess(formFieldName) {
        return function (response) {
          var data = response.data;
          var fileUrl = angular.element(data).find('location').text();
          $scope.uploadSuccess = true;
          $scope.progressBarType = "success";
          $scope.form_model[formFieldName] = fileUrl;
        };
      }

      function onUploadError(err) {
        setUploadError("There was an error uploading. Please check your file and try again.");
        $log.error(err);
      }

      function onUploadProgress(evt) {
        $scope.uploadProgress = Math.round(100.0 * evt.loaded / evt.total);
      }

      function onUploadFinally() {
        $scope.isUploading = false;
      }

      //XXX: Note that there will likely be problems/collisions if multiple uploads
      // exist on a given form
      $scope.uploadZipFile = function ($files, $event) {
        resetUpload();

        if (!$files || !$files.length) {
          setUploadError("Zipfile not uploaded! Only zipfiles are accepted. Please check your file type and ensure the selected file's size is less than 20 MB.");
          return;
        }

        var file = $files[0];

        if (file.type.indexOf("zip") < 0) {
          setUploadError("Only zipped Shapefiles are accepted. Please check your file type.");
          return;
        }

        if (file.size > 20971520) { //20 MB
          setUploadError("Please ensure the selected file's size is less than 20 MB.");
          return;
        }

        var formFieldName = angular.element($event.target).attr('name');
        $scope.isUploading = true;

        UploadService.uploadZip(file, $scope.form_model.form_id)
          .then(
            onUploadSuccess(formFieldName),
            onUploadError,
            onUploadProgress
          )
          ['finally'](onUploadFinally);
      };

      $scope.uploadFile = function ($files, $event) {
        resetUpload();

        if (!$files || !$files.length) {
          setUploadError("File not uploaded! Please check your file type and ensure the selected file's size is less than 5 MB.");
          return;
        }

        var file = $files[0];

        if (file.size > 5242880) { // 5 MB
          setUploadError("Please ensure the selected file's size is less than 5 MB.");
          return;
        }

        var formFieldName = angular.element($event.target).attr('name');
        $scope.isUploading = true;

        UploadService.uploadFile(file, $scope.form_model.form_id)
          .then(
            onUploadSuccess(formFieldName),
            onUploadError,
            onUploadProgress
          )
          ['finally'](onUploadFinally);
      };

      $scope.uploadImageFile = function($files, $event) {
        resetUpload();

        if (!$files || !$files.length) {
          setUploadError("Image not uploaded! Only image files are accepted. Please check your file type and ensure the selected image file's size is less than 5 MB.");
          return;
        }

        var file = $files[0];

        if (file.type.indexOf('image') < 0) {
          setUploadError("Only image files are accepted. Please check your file type.");
          return;
        }

        if (file.size > 5242880) {
          setUploadError("Please ensure the selected image file's size is less than 5 MB.");
          return;
        }

        var formFieldName = angular.element($event.target).attr('name');
        $scope.isUploading = true;

        UploadService.uploadImage(file, $scope.form_model.form_id)
          .then(
            onUploadSuccess(formFieldName),
            onUploadError,
            onUploadProgress
          )
          ['finally'](onUploadFinally);
      };

      $scope.submit = function(form) {
        //Don't submit while uploading
        if ($scope.isUploading) {
          return;
        }

        $scope.master = angular.copy(form) || {};
        _($scope.form)
          .filter(function(value, key) {return key[0] !== '$';})
          .each(function(item) {
            $scope.errors[item.$name] = item.$invalid;
          });

        $scope.master.recaptcha = $scope.recaptcha;
        $scope.errors.recaptcha = !$scope.recaptcha;

        if (_.some($scope.errors)) {
          $scope.status = 'invalid';
        } else {
          $scope.status = 'submitting';

          let endpoint = CONTACT_SUBMIT_URL;
          
          if(form["Payment Method"] == "Credit Card") {
            endpoint = CCP_SUBMIT_URL
          }
            $http.post(endpoint, $scope.master)
            .then(function successCallback() {
              $scope.status = 'success';
            }, function errorCallback(data) {
              $scope.status = 'error';
              if (data && data.message) {
                $scope.serverError = data.message;
              } else {
                $scope.serverError = 'There was a server error. Please wait a moment and try again.';
              }
            });
        }
      };

      $scope.updateItem = function (item) {
        $scope.errors[item.$name] = item.$invalid;
      };

      $scope.$watch('form.$invalid', function (value) {
        if (!value && $scope.status === 'invalid') {
          $scope.status = 'not submitted';
        }
      });

      $scope.recaptchaSuccess = function (response) {
        $scope.recaptcha = response;
      };

      $scope.$watch('recaptcha', function (value) {
        if (value && $scope.status === 'invalid') {
          $scope.status = 'not submitted';
          $scope.errors.recaptcha = !$scope.recaptcha;
        }
      });
    }
  ]);


// note: using the named module pattern, load directives, services etc after
// module has been instantiated
require('./services/uploadService');
require('./directives/progressbar');