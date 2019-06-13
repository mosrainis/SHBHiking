"use strict";

function display_menu () {
	var header = document.getElementById("mobile-nav-header");
	var item = document.getElementById("nav-close");
	var menu = document.getElementById("mobile-nav-list-container");
	var list = document.getElementById("mobile-nav-list");
	header.style.width = "100%";
	menu.style.width = "100%";
	item.style.display = "inline-block";
	item.style.opacity = "1";
	list.style.display = "block";
	list.style.opacity = "1";
}

function close_thenav () {
	var header = document.getElementById("mobile-nav-header");
	var item = document.getElementById("nav-close");
	var menu = document.getElementById("mobile-nav-list-container");
	var list = document.getElementById("mobile-nav-list");
	header.style.width = "0";
	menu.style.width = "0";
	item.style.display = "none";
	item.style.opacity = "0";
	list.style.display = "none";
	list.style.opacity = "0";
}