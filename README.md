# tnris.org

This repository contains the content and code used to generate Texas Natural
Resources Information System website: [tnris.org](http://tnris.org)

## Building tnris.org

If you are looking for information on how to get set up to build tnris.org then
you're in the right place.

### Requirements

First, make sure these things are installed:

 - nodejs `v16.13.1`
 - npm `v8.1.2`

### Setup

To get the build and front-end dependences, run these commands from base
directory of the repository:

 - `npm install`

### Usage

* `npm run dev` to build and run the site locally. Run command from the base directory of the repository. Then visit [http://localhost:8000/](http://localhost:8000/) to see the page.
* `npm run dist` to do a production build of the site. The output static site will be dumped into the `.dist` folder.

If you're looking to edit some content, see our [repo wiki documentation](https://github.com/TNRIS/tnris.org/wiki).

### Updating Runtime or Dependencies

* Updating the nodejs version, build commands, or build process requires updating the relative `buildspec` ".yml" file within the deployment repo and pushing the update to the artifact s3 bucket as this is the build recipe utilized by the CodeBuild CI/CD.
