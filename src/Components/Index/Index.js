import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Index.css';
import logo from './image2.jpeg';
import Footer from '../Footer/Footer';

class Index extends Component {
  render() {
    
    return (
      <div>
         <Navbar/><br/>
         <section className="container1">
         <div >
           <img src={logo} className="logo1"></img>
          <span className="logoname1" >IQ overflow</span>
         </div>
           <h1 className="h1">Companies around the world rely <br/>on Stack Overflow</h1><br/>
           <p>Millions of developers rely on Stack Overflow <br/>to solve their coding 
           problems, share siloed knowledge, and ship better code faster.</p>
         <div className="row">
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
         </section>

        <section id="Product">
          <div className="container2">
       <h1>For developers, by developers </h1>
       <p>Stack Overflow is an open community for 
         anyone that codes.<br/> We help you get answers to your toughest coding questions,<br/>
          share knowledge with your coworkers in private, <br/>and find your next dream job.</p>
          <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
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
         
         
         
         
          </div>





        </section>


      <Footer/>
       </div>
        );
    }
}

export default Index;