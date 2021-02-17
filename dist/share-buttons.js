/*********************************************** 
 * Author : Md Ariful Islam (Github: https://github.com/mdarif122)
 * Source : https://github.com/mdarif122/js-share-buttons
 * Version 1.0.0
 * Licensed under MIT (http://opensource.org/licenses/MIT)
***********************************************/

(function() {

	// share dropdown class
	window.shareButtons = function(elem, options) {
		// create element reference
		var arif = this;
		arif.elem = elem;
		arif.elem.className += arif.elem.className.length ? ' arif-share-button' : 'arif-share-button';

		// get title from html 
		arif.getTitle = function() {
			var content;
			// check querySelector existance for old browsers
			if (document.querySelector) 
			{
				if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) 
				{
					return content.getAttribute('content');
				} else 
				if (content = document.querySelector('title')) 
				{
					return content.innerText;
				} else
					return '';
			} else 
			{
				if (content = document.title)
				return content.innerText;
				else
					return '';
			}
		};

		//-get image from html 
		arif.getImage = function() {
			var content;
			//-check querySelector existance for old browsers
			if (document.querySelector) {
				if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) {
				return content.getAttribute('content');
				} else 
					return '';
			} else 
				return '';
		};

		//-get description from html 
		arif.getDescription = function() 
		{
			var content;
			//-check querySelector existance for old browsers
			if (document.querySelector) {
				if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) {
				return content.getAttribute('content');
				} else
				return '';
			} else {
				if (content = document.getElementsByTagName('meta').namedItem('description'))
					return content.getAttribute('content');
				else
					return '';
			}
		};

		//-share urls for all networks
		arif.share = {
			'mailto' : function() {
				var url = 'mailto:?subject=' + encodeURIComponent(arif.options.title) + '&body=Thought you might enjoy reading this: ' + encodeURIComponent(arif.options.url) + ' - ' + encodeURIComponent(arif.options.description);

				window.location.href = url;
			},
			'twitter' : function() {
				var url = arif.options.protocol + 'twitter.com/home?status=';
				url += encodeURIComponent(arif.options.title) + encodeURIComponent(arif.options.url);

				arif.popup(url);
			},
			'pinterest' : function() {
				var url = arif.options.protocol + 'pinterest.com/pin/create/bookmarklet/?is_video=false';
				url += '&media=' + encodeURIComponent(arif.options.image);
				url += '&url=' + encodeURIComponent(arif.options.url);
				url += '&description=' + encodeURIComponent(arif.options.title);

				arif.popup(url);
			},
			'facebook' : function() {
				var url = arif.options.protocol + 'www.facebook.com/sharer/sharer.php?';
				url += 'u=' + arif.options.url;
				url += '&title=' + encodeURIComponent(arif.options.title);

				arif.popup(url);
			},
			'reddit' : function() {
				var url = arif.options.protocol + 'www.reddit.com/submit?';
				url += 'url=' + encodeURIComponent(arif.options.url);
				url += '&title=' + encodeURIComponent(arif.options.title);

				arif.popup(url);
			},
			'delicious' : function() {
				var url = arif.options.protocol + 'del.icio.us/post?';
				url += 'url=' + encodeURIComponent(arif.options.url);
				url += '&title=' + encodeURIComponent(arif.options.title);
				url += '&notes=' + encodeURIComponent(arif.options.description);

				arif.popup(url);
			},
			'linkedin' : function() {
				var url = arif.options.protocol + 'www.linkedin.com/shareArticle?mini=true';
				url += '&url=' + encodeURIComponent(arif.options.url);
				url += '&title=' + encodeURIComponent(arif.options.title);
				url += '&source=' + encodeURIComponent(arif.options.source);

				arif.popup(url);
			},
			'whatsapp' : function() {
				var url;
				//- check if the device is mobile or not
				if(typeof window.orientation !== 'undefined')
					url = 'whatsapp://send?';
				else
					url = "https://web.whatsapp.com/send?"

				url += 'text=' + encodeURIComponent(arif.options.url);
				
				//return console.log(url)
		  		arif.popup(url);
			},
			'tumblr' : function() {
				var url = arif.options.protocol + 'www.tumblr.com/share?v=3';
				url += '&u=' + encodeURIComponent(arif.options.url);
				url += '&t=' + encodeURIComponent(arif.options.title);

				arif.popup(url);
			},
			'mailru' : function() {
				var url = arif.options.protocol + 'connect.mail.ru/share?';
				url += 'url=' + encodeURIComponent(arif.options.url);
				url += '&title=' + encodeURIComponent(arif.options.title);
				url += '&description=' + encodeURIComponent(arif.options.description);
				url += '&imageurl=' + encodeURIComponent(arif.options.image);

				arif.popup(url);
			}

		}

		//-open share link in a popup
		arif.popup = function(url) {
			//-set left and top position
			var popupWidth = 500,
				popupHeight = 400,
				//-fix dual screen mode
				dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left,
				dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top,
				width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
				height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
				//-calculate top and left position
				left = ((width / 2) - (popupWidth / 2)) + dualScreenLeft,
				top = ((height / 2) - (popupHeight / 2)) + dualScreenTop,

			//-show popup
			shareWindow = window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=' + popupWidth + ', height=' + popupHeight + ', top=' + top + ', left=' + left);

			//-Puts focus on the newWindow
			if (window.focus) 
			{
				shareWindow.focus();
			}
	  	}

	  //-find closest
		function closest(elem, parent) 
		{
			if (typeof(parent) == 'string') 
			{
				var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

				if (!!matchesSelector) {
					while (elem) {
				    if (matchesSelector.bind(elem)(parent)) {
				      return elem;
				    } else {
				      elem = elem.parentElement;
				    }
					}
				}
				return false;
			} 
			else 
			{
				while (elem) 
				{
					if (elem == parent) 
					{
						return elem;
					} else 
					{
						elem = elem.parentElement;
					}
				}
				return false;
			}
		}

		/* Set options
		***********************************************/

		//-create default options
		arif.options = {
			shareButtonClass: false, //-child selector of custom share button
			iconStyle: 'default', //-default or box
			boxForm: 'horizontal', //-horizontal or vertical
			position: 'bottomCenter', //-top / middle / bottom + Left / Center / Right
			buttonText: 'Share',
			protocol: ['http', 'https'].indexOf(window.location.href.split(':')[0]) === -1 ? 'https://' : '//',
			url: window.location.href,
			title: arif.getTitle(),
			image: arif.getImage(),
			description: arif.getDescription(),
			networks: 'Mailto,Twitter,Pinterest,Facebook,Reddit,Linkedin,Whatsapp,Tumblr,Mailru'
		}

		//-integrate custom options
		for (var i in options) 
		{
		arif.options[i] = options[i];
		}

		//-integrate data attribute options
		for (var option in arif.elem.dataset) 
		{
			//-replace only 'share-' prefixed data-attributes
		if (option.match(/share/)) 
		{
			var new_option = option.replace(/share/, '');
			if (!new_option.length) 
			{
				continue;
			}

			new_option = new_option.charAt(0).toLowerCase() + new_option.slice(1);
			arif.options[new_option] = arif.elem.dataset[option];
		}
		}

		//-convert networks string into array
		arif.options.networks = arif.options.networks.toLowerCase().split(',');

		/* Create layout
		***********************************************/

		//-create dropdown button if not exists
		if (arif.options.shareButtonClass) 
		{
			for (var i = 0; i < arif.elem.children.length; i++) 
			{
				if (arif.elem.children[i].className.match(arif.options.shareButtonClass))
					arif.button = arif.elem.children[i];
			}
		}

		if (!arif.button) 
		{
			arif.button = document.createElement('span');
			arif.button.innerText = arif.options.buttonText;
			arif.elem.appendChild(arif.button);
		}

		arif.button.className += ' arif-share-button_button';

		//-show and hide dropdown
		arif.button.addEventListener('click', function(event) {
			event.preventDefault();
			if (!arif.elem.className.match(/arif-share-button-opened/)) 
			{
				arif.elem.className += ' arif-share-button-opened';
			} 
			else 
			{
				arif.elem.className = arif.elem.className.replace(/\s*arif-share-button-opened/g,'');
			}
		});

		// create dropdown
		arif.dropdown = document.createElement('span');
		arif.dropdown.className = 'arif-share-button_dropdown';
		arif.elem.appendChild(arif.dropdown);

		// set dropdown row length
		if (arif.options.iconStyle == 'box' && arif.options.boxForm == 'horizontal')
			arif.dropdown.className += ' arif-share-button_dropdown-box-horizontal';
		else 
		if (arif.options.iconStyle == 'box' && arif.options.boxForm == 'vertical')
			arif.dropdown.className += ' arif-share-button_dropdown-box-vertical';

		// set dropdown position
		setTimeout(function() {
			switch (arif.options.position) 
			{
				case 'topLeft':
				arif.dropdown.className += ' arif-share-button_dropdown-top-left';
				break

				case 'topRight':
				arif.dropdown.className += ' arif-share-button_dropdown-top-right';
				break

				case 'topCenter':
				arif.dropdown.className += ' arif-share-button_dropdown-top-center';
				arif.dropdown.style.marginLeft = - arif.dropdown.offsetWidth / 2 + 'px';
				break

				case 'middleLeft':
				arif.dropdown.className += ' arif-share-button_dropdown-middle-left';
				arif.dropdown.style.marginTop = - arif.dropdown.offsetHeight / 2 + 'px';
				break

				case 'middleRight':
				arif.dropdown.className += ' arif-share-button_dropdown-middle-right';
				arif.dropdown.style.marginTop = - arif.dropdown.offsetHeight / 2 + 'px';
				break

				case 'bottomLeft':
				arif.dropdown.className += ' arif-share-button_dropdown-bottom-left';
				break

				case 'bottomRight':
				arif.dropdown.className += ' arif-share-button_dropdown-bottom-right';
				break

				case 'bottomCenter':
				arif.dropdown.className += ' arif-share-button_dropdown-bottom-center';
				arif.dropdown.style.marginLeft = - arif.dropdown.offsetWidth / 2 + 'px';
				break

				default:
				arif.dropdown.className += ' arif-share-button_dropdown-bottom-center';
				arif.dropdown.style.marginLeft = - arif.dropdown.offsetWidth / 2 + 'px';
				break
			}

		}, 1);


		// fill fropdown with buttons
		var iconClass = arif.options.iconStyle == 'default' ? 'arif-share-button_link arif-share-button_' : 'arif-share-button_link-' + arif.options.iconStyle + ' arif-share-button_link arif-share-button_';
		for (var network in arif.options.networks) 
		{
			var link = document.createElement('span');
			network = arif.options.networks[network];
			link.className = iconClass + network;
			link.dataset.network = network;
			arif.dropdown.appendChild(link);

			// add share function to event listener
			link.addEventListener('click', function() {
				arif.share[this.dataset.network]();
			});
		}

		// close on click outside
		document.addEventListener('click', function(event) 
		{
		if (!closest(event.target.parentNode, arif.elem)) 
		{
				arif.elem.className = arif.elem.className.replace(/\s*arif-share-button-opened/g,'');
			}
		});

  	}

})();
