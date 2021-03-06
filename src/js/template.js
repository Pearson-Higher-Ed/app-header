/* jshint ignore: start */

// *** DO NOT MODIFY THIS FILE ***
// This file was generated from src/html/header.template
// Regenerate using bin/gen-template

var incrementalDom = require('../../lib/incremental-dom');
var elementOpen = incrementalDom.elementOpen;
var elementClose = incrementalDom.elementClose;
var elementVoid = incrementalDom.elementVoid;
var text = incrementalDom.text;
var images = require("./images-factory");

module.exports = template;

function template (data, handlers, translate) {
  elementOpen("div", null, ["class", "o-header__container"])
    elementOpen("section", null, ["class", "o-header__section"])
      elementOpen("div", null, ["class", "o-header__brand"])
        if (data.mode === 'Basic' || data.mode === 'Legacy Course') {
          elementOpen("a", null, null, "href", data.links.home)
            elementOpen("div", null, ["class", "o-header__logo o-header__logo--pearson"])
              if (!data.company_logo && !data.app_logo) {
                elementOpen("img", null, null, "src", images.logoLarge, "alt", translate('Pearson - Home'))
                elementClose("img")
              }
              if (data.company_logo && data.app_logo) {
                elementOpen("img", null, ["class", "logo-seperator"], "src", data.company_logo, "alt", translate('Pearson - Home'))
                elementClose("img")
                elementOpen("img", null, null, "src", data.app_logo, "alt", translate('Pearson - Home'))
                elementClose("img")
              }
              if (!data.company_logo && data.app_logo) {
                elementOpen("span", null, ["class", "o-header__viewport-tablet--visible o-header__viewport-desktop--visible"])
                  elementOpen("img", null, ["class", "logo-seperator"], "src", images.logoLarge, "alt", translate('Pearson - Home'))
                  elementClose("img")
                  elementOpen("img", null, null, "src", data.app_logo, "alt", translate('Pearson - Home'))
                  elementClose("img")
                elementClose("span")
                elementOpen("span", null, ["class", "o-header__viewport-tablet--hidden o-header__viewport-desktop--hidden"])
                  elementOpen("img", null, ["class", "logo-seperator"], "src", images.pearsonIcon, "alt", translate('Pearson - Home'))
                  elementClose("img")
                  elementOpen("img", null, null, "src", data.app_logo, "alt", translate('Pearson - Home'))
                  elementClose("img")
                elementClose("span")
              }
              if (data.company_logo && !data.app_logo) {
                elementOpen("img", null, null, "src", data.company_logo, "alt", translate('Pearson - Home'))
                elementClose("img")
              }
            elementClose("div")
          elementClose("a")
        }
        if (data.mode ==='Signed Out' || data.mode === 'Integration') {
          elementOpen("a", null, null, "href", data.links.home)
            elementOpen("div", null, ["class", "o-header__logo o-header__logo--pearson"])
              if (!data.company_logo && !data.app_logo) {
                elementOpen("img", null, null, "src", images.logoLarge, "alt", translate('Pearson - Home'))
                elementClose("img")
              }
              if (data.company_logo && data.app_logo) {
                elementOpen("img", null, ["class", "logo-seperator"], "src", data.company_logo, "alt", translate('Pearson - Home'))
                elementClose("img")
                elementOpen("img", null, null, "src", data.app_logo, "alt", translate('Pearson - Home'))
                elementClose("img")
              }
              if (!data.company_logo && data.app_logo) {
                elementOpen("span", null, ["class", "o-app-header--truncate o-header__viewport-tablet--visible o-header__viewport-desktop--visible"])
                  elementOpen("img", null, ["class", "logo-seperator"], "src", images.logoLarge, "alt", translate('Pearson - Home'))
                  elementClose("img")
                  elementOpen("img", null, null, "src", data.app_logo, "alt", translate('Pearson - Home'))
                  elementClose("img")
                elementClose("span")
                elementOpen("span", null, ["class", "o-header__viewport-tablet--hidden o-header__viewport-desktop--hidden"])
                  elementOpen("img", null, ["class", "logo-seperator"], "src", images.pearsonIcon, "alt", translate('Pearson - Home'))
                  elementClose("img")
                  elementOpen("img", null, null, "src", data.app_logo, "alt", translate('Pearson - Home'))
                  elementClose("img")
                elementClose("span")
              }
              if (data.company_logo && !data.app_logo) {
                elementOpen("img", null, null, "src", data.company_logo, "alt", translate('Pearson - Home'))
                elementClose("img")
              }
            elementClose("div")
          elementClose("a")
        }
      elementClose("div")
    elementClose("section")
    elementOpen("section", null, ["class", "o-header__section o-header__section--right"])
      elementOpen("nav", null, ["class", "o-header__nav"])
        elementOpen("ul", null, ["class", "o-header__nav-items"])
          elementOpen("li", null, ["class", "o-header__nav-item o-app-header__nav-item-notification", "aria-hidden", "true"])
          elementClose("li")
          elementOpen("li", null, ["class", "o-header__nav-item o-app-header__nav-item-help"])
            if (!data.help) {
              elementOpen("a", null, ["href", "#", "id", "header-nav-link"], "onclick", function ($event) {handlers.handleHelpNavItemClick($event)})
                elementOpen("div", null, ["class", "hover-svg", "style", "height:20px; width: 22px; display:flex; align-items:center"])
                  elementOpen("svg", null, ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewbox", "0 0 24 24", "width", "24", "style", "transform:scale(0.9)"])
                    elementOpen("path", null, ["d", "M0 0h24v24H0z", "fill", "none"])
                    elementClose("path")
                    elementOpen("path", null, ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"])
                    elementClose("path")
                  elementClose("svg")
                elementClose("div")
              elementClose("a")
            }
            if (typeof data.help === 'string') {
              elementOpen("a", null, null, "href", data.help)
              elementClose("a")
            }
            if (typeof data.help === 'object') {
              elementOpen("div", null, ["class", "o-dropdown-menu o-dropdown-menu--right"])
                elementOpen("a", null, ["href", "#", "id", "o-app-header-help-menu-toggle", "class", "o-dropdown-menu__toggle", "data-toggle", "dropdown-menu", "aria-haspopup", "true", "aria-expanded", "false"])
                elementClose("a")
                elementOpen("ul", null, ["class", "o-dropdown-menu__menu-items", "aria-labelledby", "o-app-header-menu-toggle-help"])
                  ;(Array.isArray(data.help) ? data.help : Object.keys(data.help)).forEach(function(key, $index) {
                    elementOpen("li", $index, ["class", "o-dropdown-menu__menu-item"])
                      if (typeof data.help[key] === 'string') {
                        elementOpen("a", null, null, "href", data.help[key])
                          text("" + (key) + "")
                        elementClose("a")
                      }
                      if (data.help[key].href) {
                        elementOpen("a", null, null, "href", data.help[key].href, "target", data.help[key].target)
                          text("" + (key) + "")
                        elementClose("a")
                      }
                      if (typeof data.help[key].onClick === 'function') {
                        elementOpen("a", null, ["href", "#"], "onclick", function ($event) {data.help[key].onClick($event)})
                          text("" + (key) + "")
                        elementClose("a")
                      }
                    elementClose("li")
                  }, data.help)
                elementClose("ul")
              elementClose("div")
            }
          elementClose("li")
          elementOpen("li", null, null, "class", data.menuNavItemClasses)
            if (data.mode === 'Signed Out' && data.showLoginControls) {
              elementOpen("a", null, ["href", "#"], "onclick", function ($event) {handlers.handleLogin($event)})
                if (data.register) {
                  text(" \
                  									" + (translate('Sign in or Register')) + " \
                  								")
                }
                if (!data.register) {
                  text(" \
                  									" + (translate('Sign In')) + " \
                  								")
                }
              elementClose("a")
            }
            if (data.mode === 'Basic' || data.mode === 'Legacy Course') {
              elementOpen("div", null, ["class", "o-dropdown-menu o-dropdown-menu--right o-app-header__menu-menu"])
                elementOpen("button", null, ["type", "button", "class", "o-dropdown-menu__toggle", "id", "header-nav-link-account", "data-toggle", "dropdown-menu", "aria-haspopup", "true", "aria-expanded", "false"])
                  elementOpen("span", null, ["id", "o-app-header-user-menu-label", "class", "o-app-header--sr-only"])
                    text("" + (translate('User account')) + "")
                  elementClose("span")
                  elementOpen("span", null, ["class", "o-app-header__username o-app-header--truncate o-header__viewport-tablet--visible o-header__viewport-desktop--visible"])
                    text("" + (data.user.givenName) + "")
                  elementClose("span")
                  elementOpen("span", null, ["class", "o-header__viewport-tablet--hidden o-header__viewport-desktop--hidden"])
                    elementOpen("i")
                      elementOpen("div", null, ["class", "hover-svg", "style", "height:20px; width: 22px; display:flex; align-items:center"])
                        elementOpen("svg", null, ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewbox", "0 0 24 24", "width", "24", "style", "transform:scale(0.9)"])
                          elementOpen("path", null, ["d", "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"])
                          elementClose("path")
                          elementOpen("path", null, ["d", "M0 0h24v24H0z", "fill", "none"])
                          elementClose("path")
                        elementClose("svg")
                      elementClose("div")
                    elementClose("i")
                  elementClose("span")
                elementClose("button")
                elementOpen("ul", null, ["class", "o-dropdown-menu__menu-items", "aria-labelledby", "o-app-header-user-menu-label"])
                  elementOpen("li")
                    elementOpen("h2", null, ["class", "o-dropdown-menu__menu-item-title"])
                      text("" + (translate('My Account')) + "")
                    elementClose("h2")
                    elementOpen("div", null, ["class", "o-dropdown-menu__menu-close"])
                      elementOpen("button", null, ["class", "dropdown-close-button"])
                        elementOpen("img", null, null, "src", images.close, "alt", translate('close'))
                        elementClose("img")
                      elementClose("button")
                    elementClose("div")
                  elementClose("li")
                  ;(Array.isArray(data.menuItems) ? data.menuItems : Object.keys(data.menuItems)).forEach(function(item, $index) {
                    elementOpen("li", item.key, null, "class", item.classes)
                      if (item.href) {
                        elementOpen("a", null, ["class", "o-app-header--truncate"], "href", item.href, "target", item.target)
                          text("" + (item.text) + "")
                        elementClose("a")
                      }
                      if (typeof item.onClick === 'function') {
                        elementOpen("a", null, ["class", "pe-btn__primary--btn_xlarge o-app-header--truncate sign-out-button", "href", "#"], "onclick", function ($event) {item.onClick($event)})
                          text("" + (item.text) + "")
                        elementClose("a")
                      }
                      if (item.isCourseNav) {
                        elementOpen("ul", null, ["class", "o-app-header__menu-items-course-nav o-header__viewport-tablet--hidden o-header__viewport-desktop--hidden"])
                          ;(Array.isArray(item.courseNavMenuItems) ? item.courseNavMenuItems : Object.keys(item.courseNavMenuItems)).forEach(function(courseNavItem, $index) {
                            elementOpen("li", courseNavItem.key, null, "class", courseNavItem.classes)
                              if (courseNavItem.href) {
                                elementOpen("a", null, ["class", "o-app-header--truncate"], "href", courseNavItem.href, "target", courseNavItem.target)
                                  text("" + (courseNavItem.text) + "")
                                elementClose("a")
                              }
                              if (typeof courseNavItem.onClick === 'function') {
                                elementOpen("a", null, ["class", "o-app-header--truncate", "href", "#"], "onclick", function ($event) {courseNavItem.onClick($event)})
                                  text("" + (courseNavItem.text) + "")
                                elementClose("a")
                              }
                            elementClose("li")
                          }, item.courseNavMenuItems)
                        elementClose("ul")
                      }
                    elementClose("li")
                  }, data.menuItems)
                elementClose("ul")
              elementClose("div")
            }
          elementClose("li")
        elementClose("ul")
      elementClose("nav")
    elementClose("section")
  elementClose("div")
}