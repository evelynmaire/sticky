'use strict'

;(function () { //IIFE

	var stickies, sticky, span, button, value, key, clearButton

	//Loop through items in localstorage

	for ( var i = 0; i < localStorage.length; i++) {
		key = localStorage.key(i)
		if (key.substring(0,6) == 'sticky') { // test to see if begins with 'sticky'
			var value = localStorage.getItem(key)
		addSticky(value)
		}
	}

	// Add item to DOM

	function addSticky(value) {
		stickies = document.querySelector('.stickies')
		sticky = document.createElement('li')
		span = document.createElement('span')
		span.setAttribute('class', 'sticky')
		span.innerHTML = value
		sticky.appendChild(span)
		stickies.appendChild(sticky)
	}

	// create a new item

	button = document.querySelector('.add')
	button.addEventListener('click', function () {
		createSticky()
	})

	function createSticky() {
		value = document.querySelector('.note').value
		key = 'sticky_' + localStorage.length
		localStorage.setItem(key, value)
		addSticky(value)
	}

	// Clear storage

	clearButton = document.querySelector('.clear')
	clearButton .addEventListener('click', function () {
		clearStorage()
		//localStorage.clear()
	})

	function clearStorage() {
		localStorage.clear()
	}

})()