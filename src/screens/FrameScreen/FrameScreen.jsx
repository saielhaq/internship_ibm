import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { DivWrapper } from "../../components/DivWrapper";
import { Frame } from "../../components/Frame";
import { Frame5 } from "../../components/Frame5";
import { FrameWrapper } from "../../components/FrameWrapper";
import { GaugeSvgrepoCom } from "../../components/GaugeSvgrepoCom";
import { DnsSvgrepoCom1 } from "../../icons/DnsSvgrepoCom1";
import "./style.css";

export const FrameScreen = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0mhaibi', 'template_3evjcty', form.current, 'vgTsUvfTn07Djmk89')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="frame-screen">
      <div className="frame-2">
        <div className="overlap">
          <div className="homme" id="home">
            <p className="keep-it-secure-your">Keep it Secure Votre gardien numérique</p>
            <p className="protect-your-online">
              Protégez votre monde en ligne avec Keep it Secure. Des outils de sécurité essentiels à portée de main.
              Votre sécurité, notre mission.
            </p>
            <img
              className="undraw-mobile"
              alt="Undraw mobile"
              src="https://c.animaapp.com/u16r7Zwc/img/undraw-mobile-encryption-re-yw3o-1.svg"
            />
          </div>
          <p className="element-KIS-inc-privacy">© 2023 KIS Inc.</p>
          <img className="vector" alt="Vector" src="https://c.animaapp.com/u16r7Zwc/img/vector-1.svg" />
          <div className="tools" id="tools">
            <div className="overlap-group">
              <div className="text-wrapper">Outils</div>
              <a href="https://kis-encrypt.netlify.app/">
              <div className="fille-inc">
                <div className="overlap-group-2">
                  <Frame className="frame-6" />
                  <img
                    className="file-secure-svgrepo"
                    alt="File secure svgrepo"
                    src="https://c.animaapp.com/u16r7Zwc/img/file-secure-svgrepo-com-1.svg"
                  />
                  <div className="file-encryption">Cryptage de fichiers</div>
                </div>
              </div>
              </a>


              <div className="s-peed">
                <a href="https://kis-speedtest.netlify.app/">
                  <div className="overlap-2">
                    <div className="rectangle-4" />
                    <GaugeSvgrepoCom />
                  </div>
                  <div className="speed-test">Test de rapidité</div>
                </a>
              </div>

              <a href="https://kis-pwdtest.netlify.app/">
              <div className="PS-test">
                <div className="overlap-3">
                  <FrameWrapper className="frame-instance" />
                  <img
                    className="img"
                    alt="Lock password"
                    src="https://c.animaapp.com/u16r7Zwc/img/lock-password-unlocked-svgrepo-com-1.svg"
                  />
                  <p className="text-wrapper-2">Test de mot de passe</p>
                </div>
              </div>
              </a>

              <a href="https://kis-pwdgen.netlify.app/">
              <div className="PS-gen">
                <div className="overlap-3">
                  <DivWrapper className="frame-instance" />
                  <img
                    className="img"
                    alt="Password"
                    src="https://c.animaapp.com/u16r7Zwc/img/password-minimalistic-input-svgrepo-com--1--1.svg"
                  />
                  <p className="text-wrapper-2">Générateur de mot de passe</p>
                </div>
              </div>
              </a>

              <a href="https://kis-myip.netlify.app/">
              <div className="IP">
                <div className="overlap-3">
                  <Frame5 className="frame-instance" />
                  <img
                    className="ip-address-svgrepo"
                    alt="Ip address svgrepo"
                    src="https://c.animaapp.com/u16r7Zwc/img/ip-address-svgrepo-com-1.svg"
                  />
                  <div className="text-wrapper-2">Mon IP</div>
                </div>
              </div>
              </a>

              <a href="https://kis-textcrypt.netlify.app/">
              <div className="dns">
                <div className="overlap-4">
                  <div className="rectangle-5" />
                  {/* <DnsSvgrepoCom1 className="dns-svgrepo-com" /> */}
                  <img src="https://c.animaapp.com/u16r7Zwc/img/file-secure-svgrepo-com-1.svg" className="dns-svgrepo-com" alt="" />
                  <div className="DNS-lookup">Cryptage de text</div>
                </div>
              </div>
              </a>


            </div>
          </div>
          <img className="vector-2" alt="Vector" src="https://c.animaapp.com/u16r7Zwc/img/vector.svg" />
          <div className="about-us" id="about-us">
            <p className="meet-the-keep-it">
              Rencontrez l&#39;équipe Keep it Secure : Abdo, Saad, Haytam, ​​Rokaya et Ayoub. Nous sommes des étudiants
              passionnés en développement Web qui ont décidé de mettre nos compétences au service de l&#39;amélioration
              de la sécurité en ligne. Notre vision est de donner aux individus des outils conviviaux pour se protéger
              dans le monde numérique.
              <br />
              Rejoignez-nous dans notre mission visant à assurer la sécurité en ligne.
            </p>
            <div className="about-us-2">À propos de nous</div>
            <img
              className="whatsapp-image"
              alt="Whatsapp image"
              src="https://c.animaapp.com/u16r7Zwc/img/whatsapp-image-2023-09-11-at-16-25-1.png"
            />
          </div>
          <div className="support" id="support">
            <div className="support-2">Support</div>
            <p className="need-help-with">
              Besoin d&#39;aide pour la sécurité en ligne ? Contactez-nous à tout moment. Votre sécurité compte !
            </p>
            <div class="inpute"></div>
            <form ref={form} onSubmit={sendEmail} className="your-form-class">
              <div className="your-name-wrapper">
                <label htmlFor="user_name" className="label-class"></label>
                <input type="text" placeholder="Votre nom" className="text-wrapper-3 contactname" id="user_name" name="user_name" />
              </div>
              <div className="overlap-5">
                <div className="rectangle-6 saad">
                  <label htmlFor="user_phone" className="label-class"></label>
                  <input type="tel" placeholder="Ton téléphone" className="text-wrapper-3 contactphone" id="user_phone" name="user_phone" />
                </div>
              </div>
              <div className="overlap-6">
                <div className="rectangle-6" />
                <label htmlFor="user_email" className="label-class"></label>
                <input type="email" placeholder="Ton email" className="your-mobile-number contactemail" id="user_email" name="user_email" />
              </div>
              <div className="how-can-we-help-you-wrapper">
                <label htmlFor="user_message" className="label-class"></label>
                <input type="text" placeholder="Comment pouvons-nous vous aider ?" className="how-can-we-help-you contactmessage" id="user_message" name="user_message"></input>
              </div>
              <div className="send-message-wrapper">
                <input type="submit" value="Envoyer le message" className="send-message" />
              </div>
            </form>
            
          </div>
          
        </div>
        
          <img class="bob" src="https://c.animaapp.com/u16r7Zwc/img/bob.png" />
        <div className="menu">
          <div className="group">
            <div className="overlap-group-3">
              <div className="ellipse" />
              <img className="polygon" alt="Polygon" src="https://c.animaapp.com/u16r7Zwc/img/polygon-1.svg" />
              <div className="text-wrapper-6">S</div>
            </div>
            <div className="text-wrapper-7">K</div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-8 nav"><a href="#">Accueil</a></div>
            <div className="tools-2 nav"><a href="#tools">Outils</a></div>
            <div className="about-us-3 nav"><a href="#about-us">À propos de nous</a></div>
            <div className="support-3 nav"><a href="#support">Support</a></div>
          </div>
          <div className="overlap-wrapper">

            {/* ------------------------------------------------------------- */}
            <div className="overlap-7">
              <a href="https://eng-keepitsecure.netlify.app" className="uk-flag">
                <img
                  className="design-sans-titre"
                  alt="Design sans titre"
                  src="https://cdn-icons-png.flaticon.com/512/299/299688.png"
                  />
              </a>
            </div>
            {/* ------------------------------------------------------------- */}

            
            {/* <div className="overlap-7">
              <a href="https://eng-keepitsecure.netlify.app" className="uk-flag">
                <img
                  className="design-sans-titre"
                  alt="Design sans titre"
                  src="https://cdn-icons-png.flaticon.com/512/299/299753.png"
                />
              </a>
            </div> */}


          </div>
        </div>
      </div>
    </div>
  );
};
