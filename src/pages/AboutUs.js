/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "./../components/headers/light.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "./../components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "./../components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "./../components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "./../images/support-icon.svg";
import ShieldIconImage from "./../images/shield-icon.svg";
import CustomerLoveIconImage from "./../images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Writer</Subheading>}
        heading="Unlock the World of Endless Inspiration."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        description="At ContentCrafters, we're not just a company; we're a community of storytellers, thought leaders, and passionate bloggers. Our journey began with a simple belief: that every voice deserves to be heard, and every idea has the power to inspire and educate. We're not just in the business of blogging; we're in the business of empowering voices, shaping narratives, and creating a world where words matter."
      />
      <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="We aim to disrupt the design space."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
        description="Our mission is to provide a platform where individuals and businesses can express themselves, share their knowledge, and connect with audiences around the globe. We believe that the art of storytelling is the cornerstone of communication, and we're here to facilitate that process."
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
