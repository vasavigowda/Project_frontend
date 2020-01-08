import React from 'react';
import './Register.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


class Register extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;
    }
  render() {
    return (
      <div>
      
          <div id="main-registration-container"> 
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <h1 className="regcontainer"> Attract the world’s best tech talent</h1>
               <p>Get unstuck — ask a question Unlock new privileges like <br/>voting and 
                 commentingSave your favorite tags,<br/> filters, and jobsEarn reputation and badges</p>
            </div>
           <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div id="register">
              <button className="googleicon"><a href="https://www.google.co.in/" class="fa fa-google"></a>Login in with google</button><br/><br/>
              <button className="socialicon"><a href="http://facebook.com/jaketrent" class="fa fa-facebook"></a>Login in with facebook</button><br/><br/>
              <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
              <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}  placeholder="Name"/>
              <div className="errorMsg">{this.state.errors.username}</div>
              <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} placeholder="Emai_id" />
              <div className="errorMsg">{this.state.errors.emailid}</div>
              <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}placeholder="Password"/>
              <div className="errorMsg">{this.state.errors.password}</div>
              <input type="submit" className="button"  value="Register"/>
              </form>
            </div>
           </div>
          </div>
      </div>

          <Nav/>
         <Footer/>
        
      </div>

      );
  }


}


export default Register;