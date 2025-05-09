"use strict";

/**
 * PRELOAD
 *
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", () => {
	preloader.classList.add("loaded");
	document.body.classList.add("loaded");
});
