/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "./helpers/AnimationRevealPage"

import EventLandingPageSrc from "./images/demo/EventLandingPage.jpeg";
import EventLandingPage from './demos/EventLandingPage.js'

import LoginPage from "./pages/Login.js";
import LoginPageImageSrc from "./images/demo/LoginPage.jpeg";

import SignupPage from "./pages/Signup.js";
import SignupPageImageSrc from "./images/demo/SignupPage.jpeg";

import AboutUsPage from "./pages/AboutUs.js";
import AboutUsPageImageSrc from "./images/demo/AboutUsPage.jpeg";

import BlogPage from "./pages/BlogIndex.js";
import BlogPageImageSrc from "./images/demo/BlogIndexPage.jpeg";

// import ContactUsPage from "./pages/ContactUs.js";
// import ContactUsPageImageSrc from "./images/demo/ContactUsPage.jpeg";

export const components = {
  landingPage: {
    WriterLandingPage: {
      component: EventLandingPage,
      imageSrc: EventLandingPageSrc,
      url: "/landingPage/WriterLandingPage",
    },
  },
  mainPage: {
    LoginPage: {
      component: LoginPage,
      imageSrc: LoginPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/mainPage/LoginPage",
    },
    SignupPage: {
      component: SignupPage,
      imageSrc: SignupPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/mainPage/SignupPage",
    },
    AboutUsPage:{
      component: AboutUsPage,
      imageSrc: AboutUsPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/mainPage/AboutUsPage",
    },
    BlogPage:{
      component: BlogPage,
      imageSrc: BlogPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/mainPage/BlogPage",
    }
  }

}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    // if(type === "blocks" && subtype) {
    //   Component= components[type][subtype]["elements"][name].component
    //   return <AnimationRevealPage disabled>
    //       <Component/>
    //     </AnimationRevealPage>
    // }
    // else
    Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
