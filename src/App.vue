<template>
  <div id="app" class="container">
    <span class="content__title__logo">
      <a href="https://fueled.com/">
        <svg class="svg-logo" width="170" height="170" viewBox="0 0 170 170"><path fill="#AE0000" d="M0 0h170v170H0z"/><path d="M24.78 91.1h2.48V78.9h-2.48v-2.38h17.45v4.88h-2.97v-2.5h-8.6v5h9.65v2.53h-9.6v4.64h3.17v2.37H24.8V91.1zm21.8-.58v-11.6H44.1v-2.38h8.73v2.38H50V89.4l1.5 1.46h7.02l1.52-1.48V78.9h-2.87v-2.38h8.74v2.38h-2.43v11.6l-2.94 2.95H49.55l-2.97-2.95zm21.3.58h2.47V78.9h-2.48v-2.38h17.9v4.8h-2.93V78.9h-9.08v4.83h9.74v2.43h-9.74v4.9h9.08v-2.42h2.97v4.8H67.9V91.1zm19.87 0h2.48V78.9h-2.48v-2.38h9.1v2.38h-3.2v12.2h7.62v-2.47h2.94v4.84H87.78V91.1zm18.42 0h2.48V78.9h-2.48v-2.38h17.92v4.8h-2.98V78.9h-9.08v4.83h9.75v2.43h-9.75v4.9h9.08v-2.42h2.97v4.8h-17.9V91.1zm19.88 0h2.48V78.9h-2.48v-2.38h16.22l2.95 2.94V90.5l-2.95 2.95h-16.22V91.1zm14.26-.06l1.5-1.5v-9.08l-1.5-1.5h-8.34v12.08h8.37z" fill="#FFF"/>
        </svg>
      </a>
    </span>

    <h1 id="title">PROJECT REQUEST</h1>

    <!-- Uncomment below if you want to see the keys updating on the page as values are entered -->
    <!-- p id="livecheck">FLN: {{ fullName }} FN: {{ firstName }} LN: {{ lastName }} E: {{ email }} P: {{ phone }} B: {{ budget }} T: {{ projectType }} D: {{ description }}</p -->
    <div v-show="incomplete">
      <form @submit.prevent="validateBeforeSubmit">
        <div class="columns is-rtl is-multiline">

          <div class="column is-10 is-offset-1">
            <label class="label is-large">First Name</label>
            <p class="control has-icons-left has-icons-right">
              <input name="firstName" v-model="firstName" v-validate="'required|alpha'" data-vv-as="First Name" maxlength="30" :class="{'input': true, 'is-large': true, 'is-danger': errors.has('firstName') }" type="text" placeholder="Jane">
              <span class="icon is-large is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-large is-right">
                <i v-show="firstName && !errors.has('firstName')" class="fas fa-check"></i>
              </span>
              <span class="icon is-large is-right">
                <i v-show="errors.has('firstName')" class="fas fa-exclamation-triangle"></i>
              </span>
              <span v-show="errors.has('firstName')" class="help is-danger">{{ errors.first('firstName') }}</span>
            </p>
          </div>

          <div class="column is-10 is-offset-1">
            <label class="label is-large">Last Name</label>
            <p class="control has-icons-left has-icons-right">
              <input name="lastName" v-model="lastName" v-validate="'required|alpha'" data-vv-as="Last Name" maxlength="30" :class="{'input': true, 'is-large': true, 'is-danger': errors.has('lastName') }" type="text" placeholder="Doe">
              <span class="icon is-large is-left">
                <i class="fas fa-user-plus"></i>
              </span>
              <span class="icon is-large is-right">
                <i v-show="lastName && !errors.has('lastName')" class="fas fa-check"></i>
              </span>
              <span class="icon is-large is-right">
                <i v-show="errors.has('lastName')" class="fas fa-exclamation-triangle"></i>
              </span>
              <span v-show="errors.has('lastName')" class="help is-danger">{{ errors.first('lastName') }}</span>
            </p>
          </div>

          <div class="column is-10 is-offset-1">
            <label class="label is-large">Email</label>
            <p class="control has-icons-left has-icons-right">
              <input name="email" v-model="email" v-validate="'required|email'" data-vv-as="Email" maxlength="50" :class="{'input': true, 'is-large': true, 'is-danger': errors.has('email') }" type="text" placeholder="jane.doe@gmail.com">
              <span class="icon is-large is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-large is-right">
                <i v-show="email && !errors.has('email')" class="fas fa-check"></i>
              </span>
              <span class="icon is-large is-right">
                <i v-show="errors.has('email')" class="fas fa-exclamation-triangle"></i>
              </span>
              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </p>
          </div>

          <div class="column is-10 is-offset-1">
            <label class="label is-large">Phone</label>
            <p class="control has-icons-left has-icons-right">
              <input name="phone" v-model="phone" v-validate="'numeric|digits:10'" data-vv-as="Phone" maxlength="10" :class="{'input': true, 'is-large': true, 'is-danger': errors.has('phone'), 'success': phone.length === 10 && !errors.has('phone')}" type="tel" placeholder="5551234567">
              <span class="icon is-large is-left">
                <i class="fas fa-phone"></i>
              </span>
              <span class="icon is-large is-right">
                <i v-show="phone.length === 10 && !errors.has('phone')" class="fas fa-check"></i>
              </span>            
              <span class="icon is-large is-right">
                <i v-show="errors.has('phone')" class="fas fa-exclamation-triangle"></i>
              </span>
              <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
            </p>
          </div>

          <div class="column is-10 is-offset-1">
            <label class="label is-large">Project Type</label>
            <p class="control is-expanded">
              <span class="select is-large is-fullwidth">
                <select v-model="projectType" v-validate="'in:ios,web,branding,other'">
                  <option disabled value="">Please select one</option>
                  <option value="ios">iOS</option>
                  <option value="web">Web</option>
                  <option value="branding">Branding</option>
                  <option value="other">Other</option>
                </select>
              </span>
            </p>
          </div>

          <div class="column is-10 is-offset-1">
            <label class="label is-large">Budget</label>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static is-large">
                  $
                </a>
              </p>
              <p class="control has-icons-right is-expanded">
                <input name="budget" v-model="budget" v-validate="'required|max_value:1000000'" data-vv-as="Budget" min="0" max="1000000" maxlength="7" :class="{'input': true, 'is-large': true, 'is-danger': errors.has('budget') }" type="number" placeholder="0">
                <span class="icon is-large is-right">
                  <i v-show="budget && !errors.has('budget')" class="fas fa-check"></i>
                </span>
                <span class="icon is-large is-right">
                  <i v-show="errors.has('budget')" class="fas fa-exclamation-triangle"></i>
                </span>
                <span v-show="errors.has('budget')" class="help is-danger">{{ errors.first('budget') }}</span>
              </p>
            </div>
          </div>

          <div class="column is-10 is-offset-1">
            <label class="label is-large">Project Description</label>
            <p class="control has-icons-left has-icons-right">
              <textarea name="description" v-model="description" v-validate="'required'" data-vv-as="Project Description" maxlength="10000" rows="10" :class="{'textarea': true, 'is-large': true, 'is-danger': errors.has('description') }" placeholder="This is my project description."></textarea>
              <span class="icon is-large is-right">
                <i v-show="description && !errors.has('description')" class="fas fa-check"></i>
              </span>
              <span class="icon is-large is-right">
                <i v-show="errors.has('description')" class="fas fa-exclamation-triangle"></i>
              </span>
              <span v-show="errors.has('description')" class="help is-danger">{{ errors.first('description') }}</span>
            </p>
          </div>

          <div class="column is-10 is-offset-1">
            <p class="control center">
              <button class="button is-large is-primary is-rounded is-centered" type="submit">Submit</button>
            </p>
          </div>
        </div>
      </form>
    </div>

    <div id="success" v-show="!incomplete">
      <h1 class="has-text-success">
        <i class="fas fa-check"></i>
        {{ status }}
      </h1>
    </div>

  </div>
</template>


<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  name: 'App',
  
  data: () => ({
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    projectType: '',
    description: '',
    status: '',
    incomplete: true
  }),
  // Updates fullName as firstName and lastName are updated. 
  // See createFullName() method below for an alternative. 
  
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val;
    }
  },

  methods: {
    createFullName: function() {
      return (this.firstName + ' ' + this.lastName);
    }, 
    validateBeforeSubmit: function() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          /* Need another few steps as the data is passed on and wait for a response from the 
          server that it has been received before displaying it has been submitted. */
          /* this.fullName = createFullName(); Alternative to combining firstName and lastName using 
          watch above, likely less resources used. Another alternative, skipping a method: 
          this.fullName = this.firstName + ' ' + this.lastName; */
          this.status = 'Form Submitted!';
          console.log('Form Submitted!');
          console.log('Details: ', 'Name:', this.fullName, 'Email:', this.email, 'Phone:', this.phone, 'Project Type:', this.projectType, 'Budget:', this.budget, 'Description:', this.description)
          console.log('More details: ', this);
          this.incomplete = false;
          return;
        }
        alert('Please complete the form and try again!'); 
        // not a fan of alert popups but it serves the purpose for this demo.
      });
    }
  }
}
  
/*
      This is one way I could handle the POST if actually sending it somewhere (https://www.npmjs.com/package/axios)
      if (process.env.NODE_ENV === 'development') {
        axios.defaults.baseURL = 'http://localhost:8888/php'
      }

      axios.post('post.php', {
        'name': this.fullName,
        'email': this.email,     
        'phone': this.phone,
        'budget': this.budget,
        'projectType': this.projectType,
        'description': this.description 
      }).then(response => {
        if (response.data.error) {
            console.log('error', response.data.error)
        } else {
            this.postStatus = true
            console.log('success', response.data.message)                   
        }
      }).catch(error => {
          console.log(error.response)
      }); 
*/
</script>


<style>
h1 {
  font-size: 2.5em; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  max-width: 700px;
  margin-top: 40px;
  margin-bottom: 60px;
}

#livecheck {
  font-size: 1.5em;
  color: 	#23d160;
}

#title {
  margin-bottom: 20px;
}

#success {
  margin-top: 50px;
}

.center {
  text-align: center;
}

.required-field > label::after {
  content: '*';
  color: red;
  margin-left: 0.25rem;
}
.svg-logo {
  margin-bottom: 30px;
}

.fa-check {
  color: #23d160;
}

/* Too much red with this on but leaving it here to show I considered it. 
.fa-exclamation-triangle {
  color: red;
} */

@media (max-width: 767px) { 
  #app {
    padding: 0 40px;
  }
}

@media (max-width: 568px) { 
  h1 { 
    font-size: 2em;
    color: #000; 
  }
}
</style>
