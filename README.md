# Vue.js Project Request Form

## Installation

1. [Download](https://github.com/jspringer/vue-request-form/archive/master.zip) and unzip or [clone](https://github.com/jspringer/vue-request-form.git).

2. Using terminal, type the following command in the directory of the unzipped files to install dependencies: 
``` bash
npm install
```
3. To run in dev mode, type: 
``` bash
npm run dev
```
View at http://localhost:8080/ (may be on a slightly different port)

4. To run in production mode, type: 
``` bash
npm run build
```
View at http://localhost:5000

5. Use Console via DevTools to see the results of the the form submission. User entered values are stored in firstName, lastName, fullName, email, phone, projectType, and description. 

### [Live demo](https://jsnspr-vue-request-form.heroku.com/)

## Notes

After reviewing a few options for handling validation and sanitzation, I ultimately decided to use **[vee-validate](https://vee-validate.logaretm.com/)**. I think using a package is better overall as it gives more control over how the validation works and appears, though I did use some of the built in HTML options to limit the amount of characters (maxlength, digits).

Since I started off with vee-validate's examples, I decided to also stick with the CSS framework they used, which is [Bulma](https://bulma.io/). I have never used it before, so I was learning it as I went along, but it is fairly similar to bootstrap. 

Icons used are from [Font Awesome](https://fontawesome.com/). 

There are some additional notes commented in the source code of [App.vue](src/App.vue) related to how I could set up the code if actually sending the data somewhere such as a database. 

Need to clean up the devDependinces or recreate from scratch since I installed and tried a few different things while developing that are no longer used, which will decrease the installation size. 

In App.vue, line 109, there seems to be an issue with the max option on the input element set to type number, at least when I tested it. I set maxlength to 7 as well for browsers that do not recognize type number and default to type text. You can see under Budget, you are able to enter values higher than 1,000,000, but you will get the warning message via Vue + vee-validate. 

