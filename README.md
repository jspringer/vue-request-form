# Vue.js Project Request Form

## Installation

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### [Live demo](https://jsnspr-vue-request-form.heroku.com/)

## Notes

I looked into and tried different packages for handling the forms and validation and sanitization, including [vue-form-generator](https://github.com/vue-generators/vue-form-generator), [vue-form](https://www.npmjs.com/package/vue-form), and [vuelidate](https://monterail.github.io/vuelidate/). I also considered handling it using HTML5 options directly on the elements via regular expressions. I ultimately decided to use **[vee-validate](https://vee-validate.logaretm.com/)**. I think using a package is better overall as it gives more control over how the validation works and appears. 

I did use some of the built in HTML options to limit the amount of characters (maxlength) or require a specific number of numbers (digits).

Since I started off with vee-validates examples, I decided to also stick with the CSS framework they used, which is [Bulma](https://bulma.io/). I have never used it before so I was learning it as I went along, but it is fairly similar to bootstrap. 

I originally split the request form from the rest of the page as a separate component, but felt that was overcomplicating the task since the rest of the page is static. 

There are some additional notes commented in the source code of App.vue related to how I could set up the code if actually sending the data somewhere such as a database. 

## Potential issues

1. I did not test the first and last name fields with every possible character. There is a possibility vee-validate may not accept some or many non-English characters. 

2. I wanted to make the phone field look a bit nicer with automated parentheses around the area code and a dash between the first 3 and last 4 digits. If/when I find a way to do that, I will update. 

3. In App.vue, line 109, there seems to be an issue with the max option on the input element set to type number, at least when I tested it. I set maxlength to 7 as well for browsers that do not recognize type number and default to type text. You can see under Budget, you are able to enter values higher than 1,000,000, but you will get the warning message via Vue + vee-validate. 

