import React, { Component } from 'react';
import './Index.css';
import logo from '../Images/image2.jpeg';
import about from '../Images/img2.jpeg';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { Fade } from 'react-slideshow-image';
import imag from '../Images/imag1.jpeg';
import imag1 from '../Images/imag2.jpeg';
import imag2 from '../Images/imag3.jpeg';

const fadeProperties = {
  duration: 2000,
  transitionDuration: 200,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
}
class Index extends Component {
  render() {
    return (
      <div className="index">
        <Nav /><br />
        <div className="container1">
          <div>
            <img src={logo} className="logo1"></img>
          </div>
          <h1 className="h1">Companies around the world rely <br />on Stack Overflow</h1><br />
          <p>Millions of developers rely on Stack Overflow <br />to solve their coding
           problems, share siloed knowledge, and ship better code faster.</p>
        </div>
        <section id="cont">
          <div className="row container2">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
              <h6>For Employers</h6>
              <h1>Talent</h1>
              <p>Get answers to more than 16.5 million questions and give back by sharing
              your knowledge with others. Sign up for an account.</p>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <h6>For Marketers</h6>
              <h1>Advertising</h1>
              <p>Level up with Stack Overflow while you work. Share knowledge privately
                with your coworkers using our flagship Q&A engine.</p>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <h6>For Collabration</h6>
              <h1>Team</h1>
              <p>Find the right job through high quality listings and search for
              roles based on title, technology stack, salary, location, and more.</p>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          </div>
        </section><br /><br/><br/><br/>
        <div className="customerpage">
        <section id="customer">
        <div class="card-columns">
            <div class=" one_card">
              <div class="card" >
                <img class="card-img-top" src={imag} className="imag1"/>
                <div class="card-body">
                  <p class="card_text_info">Unlike office workers, remote employees don’t have the ability
                   to tap their colleagues when they need help. To do remote work well, knowledge should be easily
                    accessible to anyone</p>
                </div>
              </div>
            </div>
            <div class=" one_card">
              <div class="card" >
                <img class="card-img-top" src={imag1} className="imag2" />
                <div class="card-body">
                  <p class="card_text_info">Stack Overflow’s powerful Q&A engine works so well for public 
                  and private knowledge-sharing that some of our customers are using it with their customers. 
                  Stack Overflow Enterprise </p>
                </div>
              </div>
            </div>
            <div class="one_card">
              <div class="card" >
                <img class="card-img-top" src={imag2} className="imag3" />
                <div class="card-body">
                  <p class="card_text_info">Contractors bring outside
                   expertise into your organization and free up your time, ideally.
                    One of the challenges of working with contractors is making sure 
                    they know what they need to know </p>

                </div>
              </div>
            </div>
            </div>
        </section>
        </div>
        <div className="aboutus">
          <section id="Aboutus">
            <h2> Learn and grow with Stack Overflow</h2>
            <img src={about} className="abtimg"></img>
            <p>Get your coding questions answered to learn, build, and <br />level up whether
           you’re beginning with JavaScript or a React professional</p>
          </section>
        </div><br />
        <div className="product">
          <section id="About" >
            <div>
              <h1>For developers, by developers </h1>
              <p>Stack Overflow is an open community for
                anyone that codes.<br /> We help you get answers to your toughest coding questions,<br />
                share knowledge with your coworkers in private, <br />and find your
								next dream job.</p>
            </div>
            <div className="row productpage">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <h4>Public Q&A</h4>
                <p>Get answers to more than 16.5 million questions and give back by
                  sharing your knowledge with others. Sign up for an account..</p>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <h4>Private Q&A</h4>
                <p>Level up with Stack Overflow while you work. Share knowledge privately
                	 with your coworkers using our flagship Q&A engine.</p>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <h4>Browse jobs</h4>
                <p>Find the right job through high quality listings and search for
                	roles based on title, technology stack, salary, location, and more.</p>
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Index;