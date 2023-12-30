# Playwright Test Automation Framework testing E2E and API calls

This is a test automation framework built with Playwright and JavaScript. The main purpose is to show an example how an ecommerce shop can be tested for the E2E and how to test the API calls. In this example a simple get and post requests are being tested.
Furthermore, this project has been built using Docker Containers. Below you can see the setup and how to run the tests:

## Setup

The following programs need to be installed:
- Docker
- VSCode
- Node 20
- Playwright

Clone the repo and run the following command to install the packages:<br>
<code> npm install </code>

In case playwright isn't installed properly:

## Run tests

To run all tests the following command can be used:<br>
<code>npx playwright test</code>

To run a specific test case the following command can be used:<br>
<code>npx playwright test name-of-test.spec.js</code>

## Run tests in Docker

To run the tests in Docker, you can use the following command:<br>
<code>docker run -it image-name:latest npm run test</code>

The repository will be pushed to the following image:<br>
https://hub.docker.com/repository/docker/iamarra/playwright-tests/general

## Github Action Workflow
The YAML runs the tests and afterwards build a new Docker image and push it to the Docker Hub which can be used by others.

## MIT License
Copyright (c) [2024]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
