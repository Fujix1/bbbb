(() => {

  const FAVICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAQlBMVEUAAAAdm/Adm/Acm/Ecme8fme8dmu8cmu8dmvEcl+8emu8cm/AcmvAcmu8bmu8bm+8cm+8Un+8dmu8cm/Aem+8dm/CTaekCAAAAFXRSTlMA799/cCBgwJ9AML+wkGBQQBDQz3AtZVjlAAAArUlEQVQ4y9XPWxaDIAwE0CQ8iqAittn/VlsPNA2FDXi/PJnRRLipJSFTcNdTqZPd6txwZWwKbbSyauwsyMU6e37qUiDJcaUsBaalHcCKh2rjS8ptg8jQOPx+0y5GFRw05cVTRe5KNMsRQG6YekghzgsbiPkNEX48zTcIu+FQ8Lpw8CBAx/zn5KDnz75wwCCiPmCMjcqxfz/vJlD3g8P+RxcfMHJ2PZEZz2AL3NAbhhsdJcc9SP4AAAAASUVORK5CYII=";

  const FAVICONPIP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEUAAAAdm/Adm/Acm/Acmu8cm/H0IS70IS4emu/0IS4dmu8cl+8emu/0IS4cmvAdmvEcmu8bmu8bm+8dmu8cm+8Qn+8cm/DoKDnDPVr0IS4gn+8dm/D0IS48idQ+iNKvSGzyqP7SAAAAG3RSTlMA79/AcH/wrSD0YEAwKLCfkGBQ0EAQz/3gJhDpeRLYAAAAyklEQVQ4y9WRWRKDIBBEhx13RM02We5/y2hAMpRcwPdldb9yugo4KY1gyAe7fS0hGSXtFQaUFEOMeiTGiAlu25BdVj0JPPWs5z4JyJs4AAk1BBxuCB8vJDxELNv/KRtFBLsLi8QiS9oleKlnsOOwiEhCWxYcJMobWvhT89IFgnTsINRUmA/166a1udMnzHlfnyu6IysmpHyePwwQWjqjCkJFakV6Nmsq+FENHAnCgslO1CKr5zXqdD7Syn5iiGwa5CMknakq08FJ+AKAPSlVMVy7jAAAAABJRU5ErkJggg==";

  const applyFavicon = ()=> {
    const bbbbfavicon = document.getElementById('bbbbfavicon');
    const targetFavicon = document.querySelector('head link[rel="shortcut icon"]');
    if (targetFavicon.href.indexOf('twitter-pip') !== -1) {
      bbbbfavicon.href = FAVICONPIP;
    } else {
      bbbbfavicon.href = FAVICON;
    }
  }

  const url = location.href;
  if (url.indexOf("https://twitter.com") !== -1) {

    const observerFavicon = new MutationObserver( (mutations, obs) => {
      applyFavicon();
    });

    const targetFavicon = document.querySelector('head link[rel="shortcut icon"]');
    if (targetFavicon) {

      // Insert favicon 
      document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/x-icon" id="bbbbfavicon"></link>');
      applyFavicon();

      observerFavicon.observe( targetFavicon, {
        attributes: true,
      });
    }
  }

})();
