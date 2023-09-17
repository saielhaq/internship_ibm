import React from "react";
import { DivWrapper } from "./DivWrapper";
import { DnsSvgrepoCom1 } from "./DnsSvgrepoCom1";
import { Frame } from "./Frame";
import { Frame5 } from "./Frame5";
import { FrameWrapper } from "./FrameWrapper";
import { GaugeSvgrepoCom } from "./GaugeSvgrepoCom";
import "./style.css";

export const FrameScreen = () => {
  return (
    <div className="frame-screen">
      <div className="frame-2">
        <div className="overlap">
          <div className="homme">
            <p className="text-wrapper">Keep it Secure Your Digital Guardian</p>
            <p className="p">
              Protect your online world with Keep it Secure. Essential security tools at your fingertips. Your safety,
              our mission.
            </p>
            <img className="undraw-mobile" alt="Undraw mobile" src="undraw-mobile-encryption-re-yw3o-1.svg" />
          </div>
          <p className="element-KIS-inc-privacy">
            <span className="span">� 2023 KIS Inc. Privacy / Terms / Site Map</span>
          </p>
          <img className="vector" alt="Vector" src="image.svg" />
          <div className="tools">
            <div className="overlap-group">
              <div className="text-wrapper-2">Tools</div>
              <div className="fille-inc">
                <div className="overlap-group-2">
                  <Frame className="frame-6" />
                  <img className="file-secure-svgrepo" alt="File secure svgrepo" src="file-secure-svgrepo-com-1.svg" />
                  <div className="text-wrapper-3">file encryption</div>
                </div>
              </div>
              <div className="s-peed">
                <div className="overlap-2">
                  <div className="rectangle-4" />
                  <GaugeSvgrepoCom />
                </div>
                <div className="text-wrapper-4">speed test</div>
              </div>
              <div className="PS-test">
                <div className="overlap-3">
                  <FrameWrapper className="frame-instance" />
                  <img className="img" alt="Lock password" src="lock-password-unlocked-svgrepo-com-1.svg" />
                  <div className="text-wrapper-5">password test</div>
                </div>
              </div>
              <div className="PS-gen">
                <div className="overlap-3">
                  <DivWrapper className="frame-instance" />
                  <img className="img" alt="Password" src="password-minimalistic-input-svgrepo-com-1-1.svg" />
                  <div className="text-wrapper-5">password generator</div>
                </div>
              </div>
              <div className="IP">
                <div className="overlap-3">
                  <Frame5 className="frame-instance" />
                  <img className="ip-address-svgrepo" alt="Ip address svgrepo" src="ip-address-svgrepo-com-1.svg" />
                  <div className="text-wrapper-5">My IP</div>
                </div>
              </div>
              <div className="dns">
                <div className="overlap-4">
                  <div className="rectangle-5" />
                  <DnsSvgrepoCom1 className="dns-svgrepo-com" />
                  <div className="text-wrapper-6">DNS Lookup</div>
                </div>
              </div>
            </div>
          </div>
          <img className="vector-2" alt="Vector" src="vector.svg" />
          <div className="about-us">
            <p className="meet-the-keep-it">
              Meet the Keep it Secure team: Abdo, Saad, Haytem, Rokaya, and Ayoub. We&#39;re passionate web development
              students who decided to channel our skills into enhancing online security. Our vision is to empower
              individuals with user-friendly tools to protect themselves in the digital world.
              <br />
              Join us in our mission to Keep it Secure online.
            </p>
            <div className="text-wrapper-7">About us</div>
            <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2023-09-11-at-16-25-1.png" />
          </div>
          <div className="support">
            <div className="text-wrapper-7">Support</div>
            <div className="overlap-5">
              <p className="text-wrapper-8">Need help with online security? Contact us anytime. Your safety matters!</p>
              <div className="text-wrapper-9">testtest@gmail.com</div>
            </div>
            <div className="overlap-6">
              <div className="text-wrapper-10">Your Name</div>
            </div>
            <div className="overlap-7">
              <div className="rectangle-6" />
              <div className="text-wrapper-10">Your Phone</div>
            </div>
            <div className="overlap-8">
              <div className="text-wrapper-11">Your mobile Number</div>
            </div>
            <div className="overlap-9">
              <p className="text-wrapper-12">How can we help you ?</p>
            </div>
            <div className="text-wrapper-13">0600000000</div>
            <img className="facebook-svgrepo-com" alt="Facebook svgrepo com" src="facebook-svgrepo-com-1.svg" />
            <img className="twitter-svgrepo" alt="Twitter svgrepo" src="twitter-154-svgrepo-com-1.svg" />
            <img className="youtube-svgrepo" alt="Youtube svgrepo" src="youtube-168-svgrepo-com-1.svg" />
            <img className="instagram-fill" alt="Instagram fill" src="instagram-fill-svgrepo-com-1.svg" />
          </div>
          <img className="blob" alt="Blob" src="blob-5-1.svg" />
          <img className="bob" alt="Bob" src="bob.png" />
          <div className="frame-3">
            <div className="text-wrapper-14">Send Message</div>
          </div>
        </div>
        <div className="menu">
          <img className="k-removebg-preview" alt="K removebg preview" src="k-removebg-preview-1.png" />
          <div className="navbar">
            <div className="text-wrapper-15">Homme</div>
            <div className="text-wrapper-16">Tools</div>
            <div className="text-wrapper-17">About us</div>
            <div className="text-wrapper-18">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};