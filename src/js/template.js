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
              elementOpen("img", null, ["alt", "console home"], "src", images.logoLarge)
              elementClose("img")
            elementClose("div")
          elementClose("a")
        }
        if (data.mode ==='Signed Out' || data.mode === 'Integration') {
          elementOpen("div", null, ["class", "o-header__logo o-header__logo--pearson"])
            elementOpen("img", null, ["alt", "console home"], "src", images.logoLarge)
            elementClose("img")
          elementClose("div")
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
                elementOpen("i")
                  elementOpen("img", null, ["class", "hover-image", "alt", "help button"], "src", images.helpHoverNormal)
                  elementClose("img")
                elementClose("i")
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
                text("" + (translate('Sign In')) + "")
              elementClose("a")
            }
            if (data.mode === 'Basic' || data.mode === 'Legacy Course') {
              elementOpen("div", null, ["class", "o-dropdown-menu o-dropdown-menu--right o-app-header__menu-menu"])
                elementOpen("a", null, ["href", "#", "class", "o-dropdown-menu__toggle", "id", "header-nav-link-account", "data-toggle", "dropdown-menu", "aria-haspopup", "true", "aria-expanded", "false"])
                  elementOpen("span", null, ["id", "o-app-header-user-menu-label", "class", "o-app-header--sr-only"])
                    text("" + (translate('User account menu')) + "")
                  elementClose("span")
                  elementOpen("span", null, ["class", "o-app-header__username o-app-header--truncate o-header__viewport-tablet--visible o-header__viewport-desktop--visible"])
                    text("" + (data.user.givenName) + "")
                  elementClose("span")
                  elementOpen("span", null, ["class", "o-header__viewport-tablet--hidden o-header__viewport-desktop--hidden"])
                    elementOpen("i")
                      elementOpen("img", null, ["class", "hover-image", "alt", "account button"], "src", images.personHoverNormal)
                      elementClose("img")
                    elementClose("i")
                  elementClose("span")
                elementClose("a")
                elementOpen("ul", null, ["class", "o-dropdown-menu__menu-items", "aria-labelledby", "o-app-header-user-menu-label"])
                  elementOpen("li")
                    elementOpen("h2", null, ["class", "o-dropdown-menu__menu-item-title"])
                      text("" + (translate('My Account')) + "")
                    elementClose("h2")
                    elementOpen("div", null, ["class", "o-dropdown-menu__menu-close"])
                      elementOpen("button", null, ["class", "dropdown-close-button"])
                        elementOpen("img", null, ["alt", "close-button"], "src", images.close)
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
                        elementOpen("a", null, ["class", "o-app-header--truncate", "href", "#"], "onclick", function ($event) {item.onClick($event)})
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