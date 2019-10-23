/*global sinon, describe, it, before, beforeEach*/
'use strict';

var expect = require('expect.js');
var dispatchEvent = require('../src/js/utils/dom').dispatchEvent;
var forEach = require('../src/js/utils/forEach');
var AppHeader = require('../src/js/AppHeader');

var helpers = require('./helpers');
var getHeaderEl = helpers.getHeaderEl;
var getLogoEl = helpers.getLogoEl;
var getHelpNavItemEl = helpers.getHelpNavItemEl;
var getSignInNavItemEl = helpers.getSignInNavItemEl;
var getMenuNavItemEl = helpers.getMenuNavItemEl;
var getMenuMenuEl = helpers.getMenuMenuEl;
var getAllCoursesMenuItemEl = helpers.getAllCoursesMenuItemEl;
var getCourseMenuItemEls = helpers.getCourseMenuItemEls;
var getCourseNavMenuItemEls = helpers.getCourseNavMenuItemEls;
var getMenuItemEls = helpers.getMenuItemEls;
var getMyAccountMenuItemEl = helpers.getMyAccountMenuItemEl;
var getSignOutMenuItemEl = helpers.getSignOutMenuItemEl;
var getUsernameEl = helpers.getUsernameEl;
var clickSignIn = helpers.clickSignIn;
var clickSignOut = helpers.clickSignOut;

describe('AppHeader:', function () {

	var sandbox;

	before(function () {
		sandbox = sinon.sandbox.create();

		var config = {
			user: { givenName: 'FooBar' }
		};

		var configEl = document.createElement('script');

		configEl.setAttribute('data-o-app-header-config', '');
		configEl.type = 'application/json';
		configEl.innerHTML = JSON.stringify(config);
		document.head.appendChild(configEl);
	});

	beforeEach(function () {
		document.body.innerHTML = '';
		window.handleLogin = undefined;
		window.handleLogout = undefined;
		sandbox.restore();
	});

	describe('new AppHeader(element, options):', function () {

		it('should prepend to document.body when element is undefined', function () {
			new AppHeader();

			var appHeaderEl = document.body.firstChild;

			expect(document.body.children.length).to.be(1);
			expect(appHeaderEl).to.not.be(null);
			expect(appHeaderEl.nodeName.toLowerCase()).to.be('header');
		});

		it('should replace element when element is an instance of HTMLElement', function () {
			document.body.appendChild(document.createElement('div'));

			var el = document.createElement('div');
			document.body.appendChild(el);

			new AppHeader(el);

			var appHeaderEl = document.body.childNodes[1];

			expect(document.body.children.length).to.be(2);
			expect(appHeaderEl).to.not.be(null);
			expect(appHeaderEl.nodeName.toLowerCase()).to.be('header');
		});

		it('should replace element when element is an instance of string', function () {
			document.body.appendChild(document.createElement('div'));

			var el = document.createElement('div');
			el.id = 'app-header';
			document.body.appendChild(el);

			new AppHeader('#app-header');

			var appHeaderEl = document.body.childNodes[1];

			expect(document.body.children.length).to.be(2);
			expect(appHeaderEl).to.not.be(null);
			expect(appHeaderEl.nodeName.toLowerCase()).to.be('header');
		});

		it('should set role="banner"', function () {
			new AppHeader();

			var appHeaderEl = getHeaderEl();

			expect(appHeaderEl.getAttribute('role')).to.be('banner');
		});

		it('should default to \'Signed Out\' mode', function () {
			var appHeader = new AppHeader();

			expect(appHeader.getMode()).to.be('Signed Out');
		});

		it('should set the mode', function () {
			var appHeader = new AppHeader({ mode: 'Signed Out' });

			expect(appHeader.getMode()).to.be('Signed Out');
		});

		describe('Help nav item:', function () {

			it('should emit oAppHeader.help.toggle when the Help nav item is clicked', function (done) {
				new AppHeader();

				var appHeaderEl = getHeaderEl();
				var helpNavEl = getHelpNavItemEl(appHeaderEl);

				appHeaderEl.addEventListener('oAppHeader.help.toggle', done.bind(null, null));

				dispatchEvent(helpNavEl.querySelector('a'), 'click');
			});

			it('should render as a dropdown menu when options.help is an object', function () {
				var options = {
					help: {
						'Foo': 'https://example.org/foo',
						'Bar': 'https://example.org/bar'
					}
				};

				new AppHeader(options);

				var appHeaderEl = getHeaderEl();
				var helpNavItemEl = getHelpNavItemEl(appHeaderEl);

				expect(helpNavItemEl.firstChild.classList.contains('o-dropdown-menu')).to.be(true);
			});

			it('should render the Help menu menu item as a link when options.help[key] is an object', function () {
				var href = 'https://example.org/foo';
				var target = '_blank';
				var options = {
					help: {
						'Foo': { href: href, target: target }
					}
				};

				new AppHeader(options);

				var appHeaderEl = getHeaderEl();
				var helpNavItemEl = getHelpNavItemEl(appHeaderEl);
				var menuItemLinkEl = helpNavItemEl.querySelector('.o-dropdown-menu__menu-item a');

				expect(menuItemLinkEl.href).to.be(href);
				expect(menuItemLinkEl.getAttribute('target')).to.be(target);
			});

			it('should register a click event listener for the Help menu menu item when options.help[key].onClick is a function', function (done) {
				var options = {
					help: {
						'Foo': { onClick: done.bind(null, null) }
					}
				};

				new AppHeader(options);

				var appHeaderEl = getHeaderEl();
				var helpNavItemEl = getHelpNavItemEl(appHeaderEl);
				var menuItemLinkEl = helpNavItemEl.querySelector('.o-dropdown-menu__menu-item a');

				expect(menuItemLinkEl.getAttribute('href')).to.be('#');

				dispatchEvent(menuItemLinkEl, 'click');
			});

			it('should close the account menu when clicked', function () {
				new AppHeader({ mode: 'Basic' });

				var appHeaderEl = getHeaderEl();
				var menuMenuEl = getMenuMenuEl(appHeaderEl);

				dispatchEvent(menuMenuEl, 'click');

				expect(menuMenuEl.classList.contains('o-dropdown-menu--expanded')).to.be(true);

				var helpNavItemEl = getHelpNavItemEl(appHeaderEl);

				dispatchEvent(helpNavItemEl.querySelector('a'), 'click');

				var menuIconEls = menuMenuEl.querySelectorAll('.o-app-header__icon');

				expect(menuMenuEl.classList.contains('o-dropdown-menu--expanded')).to.be(false);

				forEach(menuIconEls, function (idx, el) {
					expect(el.classList.contains('pe-icon--chevron-up')).to.be(false);
					expect(el.classList.contains('pe-icon--chevron-down')).to.be(true);
				});
			});

		});

	});

	describe('appHeader.setMode(mode, [options])', function () {

		it('should set the mode', function () {
			var appHeader = new AppHeader();

			appHeader.setMode('Signed Out');

			expect(appHeader.getMode()).to.be('Signed Out');
		});

		it('should throw an error when the mode is not recognized', function () {
			var appHeader = new AppHeader();

			expect(function () { appHeader.setMode('Invalid'); }).to.throwException(/Unrecognized mode, 'Invalid'/);
		});

		it('should show the Sign In nav item when the mode is \'Signed Out\' and options.showLoginControls is true', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Signed Out', { showLoginControls: true });

			expect(getSignInNavItemEl(appHeaderEl)).to.not.be(null);
		});

		it('should hide the Sign In nav item when the mode is \'Signed Out\' and options.showLoginControls is false', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Signed Out', { showLoginControls: false });

			expect(getSignInNavItemEl(appHeaderEl)).to.be(null);
		});

		it('should render the logo without a link when the mode is \'Signed Out\'', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Signed Out');

			var logoEl = getLogoEl(appHeaderEl);

			expect(logoEl.parentElement.tagName.toLowerCase()).to.be('a');
		});

		it('should emit oAppHeader.login when the mode is \'Signed Out\' and the sign in nav item is clicked', function (done) {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Signed Out');

			document.addEventListener('oAppHeader.login', done.bind(null, null));

			clickSignIn(appHeaderEl);
		});

		it('should call the onLogin callback function when the mode is \'Signed Out\' and the sign in nav item is clicked', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();
			var handler = sinon.spy();

			appHeader.setMode('Signed Out', { onLogin: handler });

			clickSignIn(appHeaderEl);

			expect(handler.calledOnce).to.be(true);
		});

		it('should locate and call the onLogin callback function when the mode is \'Signed Out\' and options.onLogin is a string and the sign in nav item is clicked', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			window.handleLogin = sinon.spy();

			appHeader.setMode('Signed Out', { onLogin: 'handleLogin' });

			clickSignIn(appHeaderEl);

			expect(window.handleLogin.calledOnce).to.be(true);
		});

		it('should throw an error when the mode is \'Signed Out\' and options.onLogin is a string and the callback function cannot be found in the global scope', function () {
			var appHeader = new AppHeader();

			expect(function () { appHeader.setMode('Signed Out', { onLogin: 'invalid' }); })
				.to.throwException(/Expected \'onLogin\' to be a function/);
		});

		it('should render the logo as a link when the mode is \'Basic\'', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Basic');

			var logoEl = getLogoEl(appHeaderEl);

			expect(logoEl.parentElement.tagName.toLowerCase()).to.be('a');
		});

		it('should render the menu nav item as a dropdown menu when the mode is \'Basic\'', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Basic');

			var menuNavItemEl = getMenuNavItemEl(appHeaderEl);
			var menuMenuEl = getMenuMenuEl(appHeaderEl);

			expect(menuNavItemEl).to.not.be(null);
			expect(menuMenuEl.classList.contains('o-dropdown-menu')).to.be(true);
		});

		it('should render user.givenName when the mode is \'Basic\' and options.user.givenName is defined', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();
			var user = { givenName: 'Foo' };

			appHeader.setMode('Basic', { user: user });

			var usernameEl = getUsernameEl(appHeaderEl);

			expect(usernameEl.textContent.trim()).to.be(user.givenName);
		});

		it('should render the My Account menu item when the mode is \'Basic\'', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Basic');

			expect(getMyAccountMenuItemEl(appHeaderEl)).to.not.be(null);
		});

		it('should render the Sign Out menu item when the mode is \'Basic\'', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Basic');

			expect(getSignOutMenuItemEl(appHeaderEl)).to.not.be(null);
		});

		it('should render a menu item for each course when the mode is \'Basic\' and options.courseItems is defined', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			var courseItems = [
				{ text: 'Foo', href: 'https://example.com/foo' },
				{ text: 'Bar', href: 'https://example.com/bar' }
			];

			appHeader.setMode('Basic', { courseItems: courseItems });

			var courseMenuItemEls = getCourseMenuItemEls(appHeaderEl);

			expect(courseMenuItemEls.length).to.be(2);
			expect(courseMenuItemEls[0].querySelector('a').textContent).to.be('Foo');
			expect(courseMenuItemEls[0].querySelector('a').href).to.be(courseItems[0].href);
			expect(courseMenuItemEls[1].querySelector('a').textContent).to.be('Bar');
			expect(courseMenuItemEls[1].querySelector('a').href).to.be(courseItems[1].href);
		});

		it('should render MAX menu items and a menu item that links to all courses when the mode is \'Basic\' and options.courseItems has more than MAX items', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			var courseItems = [];
			var i;

			for (i = 0; i < 6; i++) {
				courseItems.push({
					text: 'Item ' + (i + 1),
					href: 'https://example.com/' + (i + 1)
				});
			}

			appHeader.setMode('Basic', { courseItems: courseItems });

			// Course menu items
			var courseMenuItemEls = getCourseMenuItemEls(appHeaderEl);

			expect(courseMenuItemEls.length).to.be(5);

			for (i = 0; i < 5; i++) {
				expect(courseMenuItemEls[i].querySelector('a').textContent).to.be('Item ' + (i + 1));
			}

			// All courses menu item
			var allCoursesMenuItemEl = getAllCoursesMenuItemEl(appHeaderEl);

			expect(allCoursesMenuItemEl).to.not.be(null);
		});

		it('should call the handler when the mode is \'Basic\' and courseItems[n].onClick is a function', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			var handler = sinon.spy();
			var courseItems = [{ text: 'Foo', onClick: handler }];

			appHeader.setMode('Basic', { courseItems: courseItems });

			var courseMenuItemEls = getCourseMenuItemEls(appHeaderEl);

			dispatchEvent(courseMenuItemEls[0].querySelector('a'), 'click');

			expect(handler.calledOnce).to.be(true);
		});

		it('should emit oAppHeader.logout when the mode is \'Basic\' and the sign out menu item is clicked', function (done) {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Basic');

			document.addEventListener('oAppHeader.logout', done.bind(null, null));

			clickSignOut(appHeaderEl);
		});

		it('should call the onLogout callback function when the mode is \'Basic\' and the sign out menu item is clicked', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();
			var handler = sinon.spy();

			appHeader.setMode('Basic', { onLogout: handler });

			clickSignOut(appHeaderEl);

			expect(handler.calledOnce).to.be(true);
		});

		it('should locate and call the onLogout callback function when the mode is \'Basic\' and options.onLogout is a string and the sign out menu item is clicked', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			window.handleLogout = sinon.spy();

			appHeader.setMode('Basic', { onLogout: 'handleLogout' });

			clickSignOut(appHeaderEl);

			expect(window.handleLogout.calledOnce).to.be(true);
		});

		it('should throw an error when the mode is \'Basic\' and options.onLogout is a string and the callback function cannot be found in the global scope', function () {
			var appHeader = new AppHeader();

			expect(function () { appHeader.setMode('Basic', { onLogout: 'invalid' }); })
				.to.throwException(/Expected \'onLogout\' to be a function/);
		});

		it('should not render the light theme when the mode is not \'Course\' and options.theme is \'light\'', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Basic', { theme: 'light' });

			expect(appHeaderEl.classList.contains('o-header--theme-light')).to.be(false);
		});

		it('should render the logo without a link when the mode is \'Integration\'', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Integration');

			var logoEl = getLogoEl(appHeaderEl);

			expect(logoEl.parentElement.tagName.toLowerCase()).to.be('a');
		});

		it('should hide the menu nav item when the mode is \'Integration\'', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Integration');

			expect(getMenuNavItemEl(appHeaderEl)).to.be(null);
		});

		it('should render user.givenName when the mode is \'Legacy Course\' and options.user.givenName is defined', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();
			var user = { givenName: 'Foo' };

			appHeader.setMode('Legacy Course', { user: user });

			var usernameEl = getUsernameEl(appHeaderEl);

			expect(usernameEl.textContent.trim()).to.be(user.givenName);
		});

		it('should render additional menu items when the mode is \'Legacy Course\' and options.menuItems is defined', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			var menuItems = [
				{ text: 'Foo', href: 'https://example.com/foo' },
				{ text: 'Bar', href: 'https://example.com/bar' }
			];

			appHeader.setMode('Legacy Course', { menuItems: menuItems });

			var menuItemEls = getMenuItemEls(appHeaderEl);

			expect(menuItemEls[0].querySelector('a').textContent).to.be(menuItems[0].text);
			expect(menuItemEls[0].querySelector('a').href).to.be(menuItems[0].href);
			expect(menuItemEls[1].querySelector('a').textContent).to.be(menuItems[1].text);
			expect(menuItemEls[1].querySelector('a').href).to.be(menuItems[1].href);
		});

		it('should emit oAppHeader.logout when the mode is \'Legacy Course\' and the sign out menu item is clicked', function (done) {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			appHeader.setMode('Legacy Course');

			document.addEventListener('oAppHeader.logout', done.bind(null, null));

			clickSignOut(appHeaderEl);
		});

		it('should call the onLogout callback function when the mode is \'Legacy Course\' and the sign out menu item is clicked', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();
			var handler = sinon.spy();

			appHeader.setMode('Legacy Course', { onLogout: handler });

			clickSignOut(appHeaderEl);

			expect(handler.calledOnce).to.be(true);
		});

		it('should locate and call the onLogout callback function when the mode is \'Legacy Course\' and options.onLogout is a string and the sign out menu item is clicked', function () {
			var appHeader = new AppHeader();
			var appHeaderEl = getHeaderEl();

			window.handleLogout = sinon.spy();

			appHeader.setMode('Legacy Course', { onLogout: 'handleLogout' });

			clickSignOut(appHeaderEl);

			expect(window.handleLogout.calledOnce).to.be(true);
		});

		it('should throw an error when the mode is \'Legacy Course\' and options.onLogout is a string and the callback function cannot be found in the global scope', function () {
			var appHeader = new AppHeader();

			expect(function () { appHeader.setMode('Legacy Course', { onLogout: 'invalid' }); })
				.to.throwException(/Expected \'onLogout\' to be a function/);
		});

	});

});
