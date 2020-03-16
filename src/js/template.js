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
                elementOpen("svg", null, ["id", "help-24", "viewbox", "0 0 18 18"])
                  elementOpen("path", null, ["d", "M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M9.5,9 C9.77614237,9 10,8.77614237 10,8.5 C10,7.67157288 10.6715729,7 11.5,7 L13.5,7 C14.3284271,7 15,7.67157288 15,8.5 L15,8.96514743 C15,9.66379825 14.5023959,10.2633745 13.8157115,10.3921278 C12.1830812,10.698246 11,12.1237716 11,13.7848526 L11,14.5 C11,14.7761424 11.2238576,15 11.5,15 L12.5,15 C12.7761424,15 13,14.7761424 13,14.5 L13,13.7848526 C13,13.0862017 13.4976041,12.4866255 14.1842885,12.3578722 C15.8169188,12.051754 17,10.6262284 17,8.96514743 L17,8.5 C17,6.56700338 15.4329966,5 13.5,5 L11.5,5 C9.56700338,5 8,6.56700338 8,8.5 C8,8.77614237 8.22385763,9 8.5,9 L9.5,9 Z M11.5,17 C11.2238576,17 11,17.2238576 11,17.5 L11,18.5 C11,18.7761424 11.2238576,19 11.5,19 L12.5,19 C12.7761424,19 13,18.7761424 13,18.5 L13,17.5 C13,17.2238576 12.7761424,17 12.5,17 L11.5,17 Z"])
                  elementClose("path")
                elementClose("svg")
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
                      elementOpen("img", null, ["class", "hover-image"], "src", images.personHoverNormal)
                      elementClose("img")
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