! function (t) {
	var e = {};

	function i(n) {
		if (e[n]) return e[n].exports;
		var r = e[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
	}
	i.m = t, i.c = e, i.d = function (t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, i.r = function (t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function (t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var r in t) i.d(n, r, function (e) {
				return t[e]
			}.bind(null, r));
		return n
	}, i.n = function (t) {
		var e = t && t.__esModule ? function () {
			return t.default
		} : function () {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "", i(i.s = 18)
}({
	18: function (t, e, i) {
		t.exports = i(28)
	},
	19: function (t, e) {
		! function (t) {
			const e = "resize-active";
			let i = !1,
				n = null;
			const r = () => {
				i = !1, document.documentElement.classList.remove(e)
			};
			t.addEventListener("resize", (() => {
				i || (i = !0, document.documentElement.classList.add(e)), clearTimeout(n), n = setTimeout(r, 500)
			}))
		}(window)
	},
	20: function (t, e) {
		! function (t, e) {
			function i() {
				e.documentElement.style.setProperty("--full-viewport", `${t.innerHeight}px`)
			}
			i(), e.documentElement.style.setProperty("--static-vh", `${t.innerHeight}px`), t.addEventListener("resize", i)
		}(window, document)
	},
	21: function (t, e, i) {
		"use strict";
		(function (t) {
			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function n(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}

			function r(t, e, i) {
				return e && n(t.prototype, e), i && n(t, i), t
			}

			function s(t, e, i) {
				return e in t ? Object.defineProperty(t, e, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = i, t
			}

			function a(t, e) {
				var i = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter((function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), i.push.apply(i, n)
				}
				return i
			}

			function o(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {};
					e % 2 ? a(Object(i), !0).forEach((function (e) {
						s(t, e, i[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function (e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
					}))
				}
				return t
			}

			function l(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), e && h(t, e)
			}

			function c(t) {
				return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
					return t.__proto__ || Object.getPrototypeOf(t)
				})(t)
			}

			function h(t, e) {
				return (h = Object.setPrototypeOf || function (t, e) {
					return t.__proto__ = e, t
				})(t, e)
			}

			function u(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t
			}

			function d(t, e) {
				return !e || "object" != typeof e && "function" != typeof e ? u(t) : e
			}

			function p(t) {
				var e = function () {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
					} catch (t) {
						return !1
					}
				}();
				return function () {
					var i, n = c(t);
					if (e) {
						var r = c(this).constructor;
						i = Reflect.construct(n, arguments, r)
					} else i = n.apply(this, arguments);
					return d(this, i)
				}
			}

			function f(t, e, i) {
				return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
					var n = function (t, e) {
						for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
						return t
					}(t, e);
					if (n) {
						var r = Object.getOwnPropertyDescriptor(n, e);
						return r.get ? r.get.call(i) : r.value
					}
				})(t, e, i || t)
			}

			function m(t, e) {
				return function (t) {
					if (Array.isArray(t)) return t
				}(t) || function (t, e) {
					if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
					var i = [],
						n = !0,
						r = !1,
						s = void 0;
					try {
						for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0);
					} catch (t) {
						r = !0, s = t
					} finally {
						try {
							n || null == o.return || o.return()
						} finally {
							if (r) throw s
						}
					}
					return i
				}(t, e) || v(t, e) || function () {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function g(t) {
				return function (t) {
					if (Array.isArray(t)) return y(t)
				}(t) || function (t) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
				}(t) || v(t) || function () {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function v(t, e) {
				if (t) {
					if ("string" == typeof t) return y(t, e);
					var i = Object.prototype.toString.call(t).slice(8, -1);
					return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? y(t, e) : void 0
				}
			}

			function y(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
				return n
			}
			var x = {
					el: document,
					name: "scroll",
					offset: [0, 0],
					repeat: !1,
					smooth: !1,
					initPosition: {
						x: 0,
						y: 0
					},
					direction: "vertical",
					gestureDirection: "vertical",
					reloadOnContextChange: !1,
					lerp: .1,
					class: "is-inview",
					scrollbarContainer: !1,
					scrollbarClass: "c-scrollbar",
					scrollingClass: "has-scroll-scrolling",
					draggingClass: "has-scroll-dragging",
					smoothClass: "has-scroll-smooth",
					initClass: "has-scroll-init",
					getSpeed: !1,
					getDirection: !1,
					scrollFromAnywhere: !1,
					multiplier: 1,
					firefoxMultiplier: 50,
					touchMultiplier: 2,
					resetNativeScroll: !0,
					tablet: {
						smooth: !1,
						direction: "vertical",
						gestureDirection: "vertical",
						breakpoint: 1024
					},
					smartphone: {
						smooth: !1,
						direction: "vertical",
						gestureDirection: "vertical"
					}
				},
				_ = function () {
					function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						i(this, t), Object.assign(this, x, e), this.smartphone = x.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = x.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
							x: this.windowWidth / 2,
							y: this.windowHeight / 2
						}, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
							scroll: {
								x: 0,
								y: 0
							},
							limit: {
								x: this.html.offsetWidth,
								y: this.html.offsetHeight
							},
							currentElements: this.currentElements
						}, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
					}
					return r(t, [{
						key: "init",
						value: function () {
							this.initEvents()
						}
					}, {
						key: "checkScroll",
						value: function () {
							this.dispatchScroll()
						}
					}, {
						key: "checkResize",
						value: function () {
							var t = this;
							this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function () {
								t.resize(), t.resizeTick = !1
							})))
						}
					}, {
						key: "resize",
						value: function () {}
					}, {
						key: "checkContext",
						value: function () {
							if (this.reloadOnContextChange) {
								this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
								var t = this.context;
								if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context)("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
							}
						}
					}, {
						key: "initEvents",
						value: function () {
							var t = this;
							this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function (e) {
								e.addEventListener("click", t.setScrollTo, !1)
							}))
						}
					}, {
						key: "setScrollTo",
						value: function (t) {
							t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
								offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
							})
						}
					}, {
						key: "addElements",
						value: function () {}
					}, {
						key: "detectElements",
						value: function (t) {
							var e = this,
								i = this.instance.scroll.y,
								n = i + this.windowHeight,
								r = this.instance.scroll.x,
								s = r + this.windowWidth;
							Object.entries(this.els).forEach((function (a) {
								var o = m(a, 2),
									l = o[0],
									c = o[1];
								if (!c || c.inView && !t || ("horizontal" === e.direction ? s >= c.left && r < c.right && e.setInView(c, l) : n >= c.top && i < c.bottom && e.setInView(c, l)), c && c.inView)
									if ("horizontal" === e.direction) {
										var h = c.right - c.left;
										c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth), (s < c.left || r > c.right) && e.setOutOfView(c, l)
									} else {
										var u = c.bottom - c.top;
										c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (u + e.windowHeight), (n < c.top || i > c.bottom) && e.setOutOfView(c, l)
									}
							})), this.hasScrollTicking = !1
						}
					}, {
						key: "setInView",
						value: function (t, e) {
							this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
						}
					}, {
						key: "setOutOfView",
						value: function (t, e) {
							var i = this;
							this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function (t) {
								t === e && delete i.currentElements[t]
							})), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
						}
					}, {
						key: "dispatchCall",
						value: function (t, e) {
							this.callWay = e, this.callValue = t.call.split(",").map((function (t) {
								return t.trim()
							})), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
							var i = new Event(this.namespace + "call");
							this.el.dispatchEvent(i)
						}
					}, {
						key: "dispatchScroll",
						value: function () {
							var t = new Event(this.namespace + "scroll");
							this.el.dispatchEvent(t)
						}
					}, {
						key: "setEvents",
						value: function (t, e) {
							this.listeners[t] || (this.listeners[t] = []);
							var i = this.listeners[t];
							i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
						}
					}, {
						key: "unsetEvents",
						value: function (t, e) {
							if (this.listeners[t]) {
								var i = this.listeners[t],
									n = i.indexOf(e);
								n < 0 || (i.splice(n, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
							}
						}
					}, {
						key: "checkEvent",
						value: function (t) {
							var e = this,
								i = t.type.replace(this.namespace, ""),
								n = this.listeners[i];
							n && 0 !== n.length && n.forEach((function (t) {
								switch (i) {
									case "scroll":
										return t(e.instance);
									case "call":
										return t(e.callValue, e.callWay, e.callObj);
									default:
										return t()
								}
							}))
						}
					}, {
						key: "startScroll",
						value: function () {}
					}, {
						key: "stopScroll",
						value: function () {}
					}, {
						key: "setScroll",
						value: function (t, e) {
							this.instance.scroll = {
								x: 0,
								y: 0
							}
						}
					}, {
						key: "destroy",
						value: function () {
							var t = this;
							window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function (e) {
								t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
							})), this.listeners = {}, this.scrollToEls.forEach((function (e) {
								e.removeEventListener("click", t.setScrollTo, !1)
							})), this.html.classList.remove(this.initClass)
						}
					}]), t
				}(),
				w = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

			function b(t, e) {
				return t(e = {
					exports: {}
				}, e.exports), e.exports
			}
			var M = b((function (t, e) {
					! function () {
						t.exports = {
							polyfill: function () {
								var t = window,
									e = document;
								if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
									var i = t.HTMLElement || t.Element,
										n = {
											scroll: t.scroll || t.scrollTo,
											scrollBy: t.scrollBy,
											elementScroll: i.prototype.scroll || a,
											scrollIntoView: i.prototype.scrollIntoView
										},
										r = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
										s = function (t) {
											return new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t)
										}(t.navigator.userAgent) ? 1 : 0;
									t.scroll = t.scrollTo = function () {
										void 0 !== arguments[0] && (!0 !== o(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
									}, t.scrollBy = function () {
										void 0 !== arguments[0] && (o(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
									}, i.prototype.scroll = i.prototype.scrollTo = function () {
										if (void 0 !== arguments[0])
											if (!0 !== o(arguments[0])) {
												var t = arguments[0].left,
													e = arguments[0].top;
												p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
											} else {
												if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
												n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
											}
									}, i.prototype.scrollBy = function () {
										void 0 !== arguments[0] && (!0 !== o(arguments[0]) ? this.scroll({
											left: ~~arguments[0].left + this.scrollLeft,
											top: ~~arguments[0].top + this.scrollTop,
											behavior: arguments[0].behavior
										}) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
									}, i.prototype.scrollIntoView = function () {
										if (!0 !== o(arguments[0])) {
											var i = u(this),
												r = i.getBoundingClientRect(),
												s = this.getBoundingClientRect();
											i !== e.body ? (p.call(this, i, i.scrollLeft + s.left - r.left, i.scrollTop + s.top - r.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
												left: r.left,
												top: r.top,
												behavior: "smooth"
											})) : t.scrollBy({
												left: s.left,
												top: s.top,
												behavior: "smooth"
											})
										} else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
									}
								}

								function a(t, e) {
									this.scrollLeft = t, this.scrollTop = e
								}

								function o(t) {
									if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
									if ("object" == typeof t && "smooth" === t.behavior) return !1;
									throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
								}

								function l(t, e) {
									return "Y" === e ? t.clientHeight + s < t.scrollHeight : "X" === e ? t.clientWidth + s < t.scrollWidth : void 0
								}

								function c(e, i) {
									var n = t.getComputedStyle(e, null)["overflow" + i];
									return "auto" === n || "scroll" === n
								}

								function h(t) {
									var e = l(t, "Y") && c(t, "Y"),
										i = l(t, "X") && c(t, "X");
									return e || i
								}

								function u(t) {
									for (; t !== e.body && !1 === h(t);) t = t.parentNode || t.host;
									return t
								}

								function d(e) {
									var i, n, s, a = (r() - e.startTime) / 468;
									i = function (t) {
										return .5 * (1 - Math.cos(Math.PI * t))
									}(a = a > 1 ? 1 : a), n = e.startX + (e.x - e.startX) * i, s = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, n, s), n === e.x && s === e.y || t.requestAnimationFrame(d.bind(t, e))
								}

								function p(i, s, o) {
									var l, c, h, u, p = r();
									i === e.body ? (l = t, c = t.scrollX || t.pageXOffset, h = t.scrollY || t.pageYOffset, u = n.scroll) : (l = i, c = i.scrollLeft, h = i.scrollTop, u = a), d({
										scrollable: l,
										method: u,
										startTime: p,
										startX: c,
										startY: h,
										x: s,
										y: o
									})
								}
							}
						}
					}()
				})),
				S = (M.polyfill, function (t) {
					l(n, t);
					var e = p(n);

					function n() {
						var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						return i(this, n), (t = e.call(this, r)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = M, window.smoothscrollPolyfill.polyfill()), t
					}
					return r(n, [{
						key: "init",
						value: function () {
							this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), f(c(n.prototype), "init", this).call(this)
						}
					}, {
						key: "checkScroll",
						value: function () {
							var t = this;
							f(c(n.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function () {
								t.detectElements()
							})), this.hasScrollTicking = !0))
						}
					}, {
						key: "addDirection",
						value: function () {
							window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
						}
					}, {
						key: "addSpeed",
						value: function () {
							window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
						}
					}, {
						key: "resize",
						value: function () {
							Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
						}
					}, {
						key: "addElements",
						value: function () {
							var t = this;
							this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function (e, i) {
								e.getBoundingClientRect();
								var n, r, s, a = e.dataset[t.name + "Class"] || t.class,
									o = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
									l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
									c = e.dataset[t.name + "Repeat"],
									h = e.dataset[t.name + "Call"],
									u = e.dataset[t.name + "Target"],
									d = (s = void 0 !== u ? document.querySelector("".concat(u)) : e).getBoundingClientRect();
								n = d.top + t.instance.scroll.y, r = d.left + t.instance.scroll.x;
								var p = n + s.offsetHeight,
									f = r + s.offsetWidth;
								c = "false" != c && (null != c || t.repeat);
								var m = t.getRelativeOffset(l),
									g = {
										el: e,
										targetEl: s,
										id: o,
										class: a,
										top: n += m[0],
										bottom: p -= m[1],
										left: r,
										right: f,
										offset: l,
										progress: 0,
										repeat: c,
										inView: !1,
										call: h
									};
								t.els[o] = g, e.classList.contains(a) && t.setInView(t.els[o], o)
							}))
						}
					}, {
						key: "updateElements",
						value: function () {
							var t = this;
							Object.entries(this.els).forEach((function (e) {
								var i = m(e, 2),
									n = i[0],
									r = i[1],
									s = r.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
									a = s + r.targetEl.offsetHeight,
									o = t.getRelativeOffset(r.offset);
								t.els[n].top = s + o[0], t.els[n].bottom = a - o[1]
							})), this.hasScrollTicking = !1
						}
					}, {
						key: "getRelativeOffset",
						value: function (t) {
							var e = [0, 0];
							if (t)
								for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
							return e
						}
					}, {
						key: "scrollTo",
						value: function (t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								i = parseInt(e.offset) || 0,
								n = !!e.callback && e.callback;
							if ("string" == typeof t) {
								if ("top" === t) t = this.html;
								else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
								else if (!(t = document.querySelector(t))) return
							} else if ("number" == typeof t) t = parseInt(t);
							else if (!t || !t.tagName) return;
							i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
							var r = function () {
								return parseInt(window.pageYOffset) === parseInt(i)
							};
							if (n) {
								if (r()) return void n();
								var s = function t() {
									r() && (window.removeEventListener("scroll", t), n())
								};
								window.addEventListener("scroll", s)
							}
							window.scrollTo({
								top: i,
								behavior: "smooth"
							})
						}
					}, {
						key: "update",
						value: function () {
							this.addElements(), this.detectElements()
						}
					}, {
						key: "destroy",
						value: function () {
							f(c(n.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
						}
					}]), n
				}(_)),
				D = Object.getOwnPropertySymbols,
				T = Object.prototype.hasOwnProperty,
				C = Object.prototype.propertyIsEnumerable;

			function E(t) {
				if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
				return Object(t)
			}
			var A = function () {
				try {
					if (!Object.assign) return !1;
					var t = new String("abc");
					if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
					for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
					if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
							return e[t]
						})).join("")) return !1;
					var n = {};
					return "abcdefghijklmnopqrst".split("").forEach((function (t) {
						n[t] = t
					})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
				} catch (t) {
					return !1
				}
			}() ? Object.assign : function (t, e) {
				for (var i, n, r = E(t), s = 1; s < arguments.length; s++) {
					for (var a in i = Object(arguments[s])) T.call(i, a) && (r[a] = i[a]);
					if (D) {
						n = D(i);
						for (var o = 0; o < n.length; o++) C.call(i, n[o]) && (r[n[o]] = i[n[o]])
					}
				}
				return r
			};

			function L() {}
			L.prototype = {
				on: function (t, e, i) {
					var n = this.e || (this.e = {});
					return (n[t] || (n[t] = [])).push({
						fn: e,
						ctx: i
					}), this
				},
				once: function (t, e, i) {
					var n = this;

					function r() {
						n.off(t, r), e.apply(i, arguments)
					}
					return r._ = e, this.on(t, r, i)
				},
				emit: function (t) {
					for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, e);
					return this
				},
				off: function (t, e) {
					var i = this.e || (this.e = {}),
						n = i[t],
						r = [];
					if (n && e)
						for (var s = 0, a = n.length; s < a; s++) n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
					return r.length ? i[t] = r : delete i[t], this
				}
			};
			var P = L,
				O = b((function (t, e) {
					(function () {
						(null !== e ? e : this).Lethargy = function () {
							function t(t, e, i, n) {
								this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function () {
									var t, e, i;
									for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
									return i
								}.call(this), this.lastDownDeltas = function () {
									var t, e, i;
									for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
									return i
								}.call(this), this.deltasTimestamp = function () {
									var t, e, i;
									for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
									return i
								}.call(this)
							}
							return t.prototype.check = function (t) {
								var e;
								return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
							}, t.prototype.isInertia = function (t) {
								var e, i, n, r, s, a, o;
								return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), o = n.reduce((function (t, e) {
									return t + e
								})), s = i.reduce((function (t, e) {
									return t + e
								})), a = o / n.length, r = s / i.length, Math.abs(a) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t)
							}, t.prototype.showLastUpDeltas = function () {
								return this.lastUpDeltas
							}, t.prototype.showLastDownDeltas = function () {
								return this.lastDownDeltas
							}, t
						}()
					}).call(w)
				})),
				I = function () {
					return {
						hasWheelEvent: "onwheel" in document,
						hasMouseWheelEvent: "onmousewheel" in document,
						hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
						hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
						hasPointer: !!window.navigator.msPointerEnabled,
						hasKeyDown: "onkeydown" in document,
						isFirefox: navigator.userAgent.indexOf("Firefox") > -1
					}
				}(),
				F = Object.prototype.toString,
				N = Object.prototype.hasOwnProperty;

			function z(t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			}
			var k = O.Lethargy,
				R = "virtualscroll",
				B = j,
				U = 37,
				V = 38,
				W = 39,
				G = 40,
				H = 32;

			function j(t) {
				! function (t) {
					if (t) {
						var e = Array.prototype.slice.call(arguments, 1);
						if (0 === e.length)
							for (var i in t) N.call(t, i) && "function" == typeof t[i] && "[object Function]" == F.call(t[i]) && e.push(i);
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							t[r] = z(t[r], t)
						}
					}
				}(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = A({
					mouseMultiplier: 1,
					touchMultiplier: 2,
					firefoxMultiplier: 15,
					keyStep: 120,
					preventTouch: !1,
					unpreventTouchClass: "vs-touchmove-allowed",
					limitInertia: !1,
					useKeyboard: !0,
					useTouch: !0
				}, t), this.options.limitInertia && (this._lethargy = new k), this._emitter = new P, this._event = {
					y: 0,
					x: 0,
					deltaX: 0,
					deltaY: 0
				}, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
					passive: this.options.passive
				})
			}

			function q(t, e, i) {
				return (1 - i) * t + i * e
			}

			function X(t) {
				var e = {};
				if (window.getComputedStyle) {
					var i = getComputedStyle(t),
						n = i.transform || i.webkitTransform || i.mozTransform,
						r = n.match(/^matrix3d\((.+)\)$/);
					return r ? (e.x = r ? parseFloat(r[1].split(", ")[12]) : 0, e.y = r ? parseFloat(r[1].split(", ")[13]) : 0) : (r = n.match(/^matrix\((.+)\)$/), e.x = r ? parseFloat(r[1].split(", ")[4]) : 0, e.y = r ? parseFloat(r[1].split(", ")[5]) : 0), e
				}
			}

			function Y(t) {
				for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
				return e
			}
			j.prototype._notify = function (t) {
				var e = this._event;
				e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(R, {
					x: e.x,
					y: e.y,
					deltaX: e.deltaX,
					deltaY: e.deltaY,
					originalEvent: t
				})
			}, j.prototype._onWheel = function (t) {
				var e = this.options;
				if (!this._lethargy || !1 !== this._lethargy.check(t)) {
					var i = this._event;
					i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, I.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
				}
			}, j.prototype._onMouseWheel = function (t) {
				if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
					var e = this._event;
					e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
				}
			}, j.prototype._onTouchStart = function (t) {
				var e = t.targetTouches ? t.targetTouches[0] : t;
				this.touchStartX = e.pageX, this.touchStartY = e.pageY
			}, j.prototype._onTouchMove = function (t) {
				var e = this.options;
				e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
				var i = this._event,
					n = t.targetTouches ? t.targetTouches[0] : t;
				i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(t)
			}, j.prototype._onKeyDown = function (t) {
				var e = this._event;
				e.deltaX = e.deltaY = 0;
				var i = window.innerHeight - 40;
				switch (t.keyCode) {
					case U:
					case V:
						e.deltaY = this.options.keyStep;
						break;
					case W:
					case G:
						e.deltaY = -this.options.keyStep;
						break;
					case t.shiftKey:
						e.deltaY = i;
						break;
					case H:
						e.deltaY = -i;
						break;
					default:
						return
				}
				this._notify(t)
			}, j.prototype._bind = function () {
				I.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), I.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), I.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), I.hasPointer && I.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), I.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
			}, j.prototype._unbind = function () {
				I.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), I.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), I.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), I.hasPointer && I.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), I.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
			}, j.prototype.on = function (t, e) {
				this._emitter.on(R, t, e);
				var i = this._emitter.e;
				i && i[R] && 1 === i[R].length && this._bind()
			}, j.prototype.off = function (t, e) {
				this._emitter.off(R, t, e);
				var i = this._emitter.e;
				(!i[R] || i[R].length <= 0) && this._unbind()
			}, j.prototype.reset = function () {
				var t = this._event;
				t.x = 0, t.y = 0
			}, j.prototype.destroy = function () {
				this._emitter.off(), this._unbind()
			};
			var Z = .1,
				J = "function" == typeof Float32Array;

			function $(t, e) {
				return 1 - 3 * e + 3 * t
			}

			function K(t, e) {
				return 3 * e - 6 * t
			}

			function Q(t) {
				return 3 * t
			}

			function tt(t, e, i) {
				return (($(e, i) * t + K(e, i)) * t + Q(e)) * t
			}

			function et(t, e, i) {
				return 3 * $(e, i) * t * t + 2 * K(e, i) * t + Q(e)
			}

			function it(t) {
				return t
			}
			var nt = function (t, e, i, n) {
					if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
					if (t === e && i === n) return it;
					for (var r = J ? new Float32Array(11) : new Array(11), s = 0; s < 11; ++s) r[s] = tt(s * Z, t, i);

					function a(e) {
						for (var n = 0, s = 1; 10 !== s && r[s] <= e; ++s) n += Z;
						--s;
						var a = n + (e - r[s]) / (r[s + 1] - r[s]) * Z,
							o = et(a, t, i);
						return o >= .001 ? function (t, e, i, n) {
							for (var r = 0; r < 4; ++r) {
								var s = et(e, i, n);
								if (0 === s) return e;
								e -= (tt(e, i, n) - t) / s
							}
							return e
						}(e, a, t, i) : 0 === o ? a : function (t, e, i, n, r) {
							var s, a, o = 0;
							do {
								(s = tt(a = e + (i - e) / 2, n, r) - t) > 0 ? i = a : e = a
							} while (Math.abs(s) > 1e-7 && ++o < 10);
							return a
						}(e, n, n + Z, t, i)
					}
					return function (t) {
						return 0 === t ? 0 : 1 === t ? 1 : tt(a(t), e, n)
					}
				},
				rt = 38,
				st = 40,
				at = 32,
				ot = 9,
				lt = 33,
				ct = 34,
				ht = 36,
				ut = 35,
				dt = function (t) {
					l(n, t);
					var e = p(n);

					function n() {
						var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						return i(this, n), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = e.call(this, r)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = r.scrollbarContainer, t.checkKey = t.checkKey.bind(u(t)), window.addEventListener("keydown", t.checkKey, !1), t
					}
					return r(n, [{
						key: "init",
						value: function () {
							var t = this;
							this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = o({
								delta: {
									x: this.initPosition.x,
									y: this.initPosition.y
								},
								scroll: {
									x: this.initPosition.x,
									y: this.initPosition.y
								}
							}, this.instance), this.vs = new B({
								el: this.scrollFromAnywhere ? document : this.el,
								mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
								firefoxMultiplier: this.firefoxMultiplier,
								touchMultiplier: this.touchMultiplier,
								useKeyboard: !1,
								passive: !0
							}), this.vs.on((function (e) {
								t.stop || t.isDraggingScrollbar || requestAnimationFrame((function () {
									t.updateDelta(e), t.isScrolling || t.startScrolling()
								}))
							})), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), f(c(n.prototype), "init", this).call(this)
						}
					}, {
						key: "setScrollLimit",
						value: function () {
							if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
								for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
								this.instance.limit.x = t - this.windowWidth
							}
						}
					}, {
						key: "startScrolling",
						value: function () {
							this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
						}
					}, {
						key: "stopScrolling",
						value: function () {
							cancelAnimationFrame(this.checkScrollRaf), this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
						}
					}, {
						key: "checkKey",
						value: function (t) {
							var e = this;
							if (this.stop) t.keyCode == ot && requestAnimationFrame((function () {
								e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
							}));
							else {
								switch (t.keyCode) {
									case ot:
										requestAnimationFrame((function () {
											e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
												offset: -window.innerHeight / 2
											})
										}));
										break;
									case rt:
										this.instance.delta[this.directionAxis] -= 240;
										break;
									case st:
										this.instance.delta[this.directionAxis] += 240;
										break;
									case lt:
										this.instance.delta[this.directionAxis] -= window.innerHeight;
										break;
									case ct:
										this.instance.delta[this.directionAxis] += window.innerHeight;
										break;
									case ht:
										this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
										break;
									case ut:
										this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
										break;
									case at:
										document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
										break;
									default:
										return
								}
								this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
							}
						}
					}, {
						key: "checkScroll",
						value: function () {
							var t = this,
								e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							if (e || this.isScrolling || this.isDraggingScrollbar) {
								this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function () {
									return t.checkScroll()
								})), this.hasScrollTicking = !0), this.updateScroll();
								var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
									r = Date.now() - this.startScrollTs;
								if (!this.animatingScroll && r > 100 && (i < .5 && 0 != this.instance.delta[this.directionAxis] || i < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach((function (i) {
										var n = m(i, 2),
											r = (n[0], n[1]);
										r.persistent || t.instance.scroll[t.directionAxis] > r.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < r.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(r.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(r.el, 0, -t.instance.scroll[t.directionAxis]), r.inView || (r.inView = !0, r.el.style.opacity = 1, r.el.style.pointerEvents = "all", r.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((r.inView || e) && (r.inView = !1, r.el.style.opacity = 0, r.el.style.pointerEvents = "none", r.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(r.el, 0, 0))
									})), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
									var s = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
									"horizontal" === this.direction ? this.transform(this.scrollbarThumb, s, 0) : this.transform(this.scrollbarThumb, 0, s)
								}
								f(c(n.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
							}
						}
					}, {
						key: "resize",
						value: function () {
							this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
								x: this.windowWidth / 2,
								y: this.windowHeight / 2
							}, this.update()
						}
					}, {
						key: "updateDelta",
						value: function (t) {
							var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
							e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
						}
					}, {
						key: "updateScroll",
						value: function (t) {
							this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = q(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
						}
					}, {
						key: "addDirection",
						value: function () {
							this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
						}
					}, {
						key: "addSpeed",
						value: function () {
							this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
						}
					}, {
						key: "initScrollBar",
						value: function () {
							if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
								if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
							} else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
							this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
								x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
								y: this.scrollbarHeight - this.scrollbarThumbBCR.height
							}
						}
					}, {
						key: "reinitScrollBar",
						value: function () {
							if (this.hasScrollbar = !1, "horizontal" == this.direction) {
								if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
							} else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
							this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
								x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
								y: this.scrollbarHeight - this.scrollbarThumbBCR.height
							}
						}
					}, {
						key: "destroyScrollBar",
						value: function () {
							this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
						}
					}, {
						key: "getScrollBar",
						value: function (t) {
							this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
						}
					}, {
						key: "releaseScrollBar",
						value: function (t) {
							this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
						}
					}, {
						key: "moveScrollBar",
						value: function (t) {
							var e = this;
							this.isDraggingScrollbar && requestAnimationFrame((function () {
								var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
									n = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
								n > 0 && n < e.instance.limit.y && (e.instance.delta.y = n), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
							}))
						}
					}, {
						key: "addElements",
						value: function () {
							var t = this;
							this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function (e, i) {
								var n, r, s, a = Y(e),
									o = Object.entries(t.sections).map((function (t) {
										var e = m(t, 2);
										e[0];
										return e[1]
									})).find((function (t) {
										return a.includes(t.el)
									})),
									l = e.dataset[t.name + "Class"] || t.class,
									c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
									h = e.dataset[t.name + "Repeat"],
									u = e.dataset[t.name + "Call"],
									d = e.dataset[t.name + "Position"],
									p = e.dataset[t.name + "Delay"],
									f = e.dataset[t.name + "Direction"],
									g = "string" == typeof e.dataset[t.name + "Sticky"],
									v = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
									y = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
									x = e.dataset[t.name + "Target"],
									_ = (s = void 0 !== x ? document.querySelector("".concat(x)) : e).getBoundingClientRect();
								null === o || o.inView ? (n = _.top + t.instance.scroll.y - X(s).y, r = _.left + t.instance.scroll.x - X(s).x) : (n = _.top - X(o.el).y - X(s).y, r = _.left - X(o.el).x - X(s).x);
								var w = n + s.offsetHeight,
									b = r + s.offsetWidth,
									M = {
										x: (b - r) / 2 + r,
										y: (w - n) / 2 + n
									};
								if (g) {
									var S = e.getBoundingClientRect(),
										D = S.top,
										T = S.left,
										C = {
											x: T - r,
											y: D - n
										};
									n += window.innerHeight, r += window.innerWidth, w = D + s.offsetHeight - e.offsetHeight - C[t.directionAxis], M = {
										x: ((b = T + s.offsetWidth - e.offsetWidth - C[t.directionAxis]) - r) / 2 + r,
										y: (w - n) / 2 + n
									}
								}
								h = "false" != h && (null != h || t.repeat);
								var E = [0, 0];
								if (y)
									if ("horizontal" === t.direction) {
										for (var A = 0; A < y.length; A++) "string" == typeof y[A] ? y[A].includes("%") ? E[A] = parseInt(y[A].replace("%", "") * t.windowWidth / 100) : E[A] = parseInt(y[A]) : E[A] = y[A];
										r += E[0], b -= E[1]
									} else {
										for (A = 0; A < y.length; A++) "string" == typeof y[A] ? y[A].includes("%") ? E[A] = parseInt(y[A].replace("%", "") * t.windowHeight / 100) : E[A] = parseInt(y[A]) : E[A] = y[A];
										n += E[0], w -= E[1]
									}
								var L = {
									el: e,
									id: c,
									class: l,
									section: o,
									top: n,
									middle: M,
									bottom: w,
									left: r,
									right: b,
									offset: y,
									progress: 0,
									repeat: h,
									inView: !1,
									call: u,
									speed: v,
									delay: p,
									position: d,
									target: s,
									direction: f,
									sticky: g
								};
								t.els[c] = L, e.classList.contains(l) && t.setInView(t.els[c], c), (!1 !== v || g) && (t.parallaxElements[c] = L)
							}))
						}
					}, {
						key: "addSections",
						value: function () {
							var t = this;
							this.sections = {};
							var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
							0 === e.length && (e = [this.el]), e.forEach((function (e, i) {
								var n = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
									r = e.getBoundingClientRect(),
									s = {
										x: r.left - 1.5 * window.innerWidth - X(e).x,
										y: r.top - 1.5 * window.innerHeight - X(e).y
									},
									a = {
										x: s.x + r.width + 2 * window.innerWidth,
										y: s.y + r.height + 2 * window.innerHeight
									},
									o = "string" == typeof e.dataset[t.name + "Persistent"];
								e.setAttribute("data-scroll-section-id", n);
								var l = {
									el: e,
									offset: s,
									limit: a,
									inView: !1,
									persistent: o,
									id: n
								};
								t.sections[n] = l
							}))
						}
					}, {
						key: "transform",
						value: function (t, e, i, n) {
							var r;
							if (n) {
								var s = X(t),
									a = q(s.x, e, n),
									o = q(s.y, i, n);
								r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(a, ",").concat(o, ",0,1)")
							} else r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
							t.style.webkitTransform = r, t.style.msTransform = r, t.style.transform = r
						}
					}, {
						key: "transformElements",
						value: function (t) {
							var e = this,
								i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								n = this.instance.scroll.x + this.windowWidth,
								r = this.instance.scroll.y + this.windowHeight,
								s = {
									x: this.instance.scroll.x + this.windowMiddle.x,
									y: this.instance.scroll.y + this.windowMiddle.y
								};
							Object.entries(this.parallaxElements).forEach((function (a) {
								var o = m(a, 2),
									l = (o[0], o[1]),
									c = !1;
								if (t && (c = 0), l.inView || i) switch (l.position) {
									case "top":
										c = e.instance.scroll[e.directionAxis] * -l.speed;
										break;
									case "elementTop":
										c = (r - l.top) * -l.speed;
										break;
									case "bottom":
										c = (e.instance.limit[e.directionAxis] - r + e.windowHeight) * l.speed;
										break;
									case "left":
										c = e.instance.scroll[e.directionAxis] * -l.speed;
										break;
									case "elementLeft":
										c = (n - l.left) * -l.speed;
										break;
									case "right":
										c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * l.speed;
										break;
									default:
										c = (s[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed
								}
								l.sticky && (c = l.inView ? "horizontal" === e.direction ? e.instance.scroll.x - l.left + window.innerWidth : e.instance.scroll.y - l.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth : e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight), !1 !== c && ("horizontal" === l.direction || "horizontal" === e.direction && "vertical" !== l.direction ? e.transform(l.el, c, 0, !t && l.delay) : e.transform(l.el, 0, c, !t && l.delay))
							}))
						}
					}, {
						key: "scrollTo",
						value: function (t) {
							var e = this,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								n = parseInt(i.offset) || 0,
								r = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
								s = i.easing || [.25, 0, .35, 1],
								a = !!i.disableLerp,
								o = !!i.callback && i.callback;
							if (s = nt.apply(void 0, g(s)), "string" == typeof t) {
								if ("top" === t) t = 0;
								else if ("bottom" === t) t = this.instance.limit.y;
								else if ("left" === t) t = 0;
								else if ("right" === t) t = this.instance.limit.x;
								else if (!(t = document.querySelector(t))) return
							} else if ("number" == typeof t) t = parseInt(t);
							else if (!t || !t.tagName) return;
							if ("number" != typeof t) {
								var l = Y(t).includes(this.el);
								if (!l) return;
								var c = t.getBoundingClientRect(),
									h = c.top,
									u = c.left,
									d = Y(t),
									p = d.find((function (t) {
										return Object.entries(e.sections).map((function (t) {
											var e = m(t, 2);
											e[0];
											return e[1]
										})).find((function (e) {
											return e.el == t
										}))
									})),
									f = 0;
								f = p ? X(p)[this.directionAxis] : -this.instance.scroll[this.directionAxis], n = "horizontal" === this.direction ? u + n - f : h + n - f
							} else n = t + n;
							var v = parseFloat(this.instance.delta[this.directionAxis]),
								y = Math.max(0, Math.min(n, this.instance.limit[this.directionAxis])),
								x = y - v,
								_ = function (t) {
									a ? "horizontal" === e.direction ? e.setScroll(v + x * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, v + x * t) : e.instance.delta[e.directionAxis] = v + x * t
								};
							this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
							var w = Date.now(),
								b = function t() {
									var i = (Date.now() - w) / r;
									i > 1 ? (_(1), e.animatingScroll = !1, 0 == r && e.update(), o && o()) : (e.scrollToRaf = requestAnimationFrame(t), _(s(i)))
								};
							b()
						}
					}, {
						key: "update",
						value: function () {
							this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
						}
					}, {
						key: "startScroll",
						value: function () {
							this.stop = !1
						}
					}, {
						key: "stopScroll",
						value: function () {
							this.stop = !0
						}
					}, {
						key: "setScroll",
						value: function (t, e) {
							this.instance = o(o({}, this.instance), {}, {
								scroll: {
									x: t,
									y: e
								},
								delta: {
									x: t,
									y: e
								},
								speed: 0
							})
						}
					}, {
						key: "destroy",
						value: function () {
							f(c(n.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
						}
					}]), n
				}(_),
				pt = function () {
					function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						i(this, t), this.options = e, Object.assign(this, x, e), this.smartphone = x.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = x.tablet, e.tablet && Object.assign(this.tablet, e.tablet), !this.smooth && this.direction, !this.tablet.smooth && this.tablet.direction, !this.smartphone.smooth && this.smartphone.direction, this.init()
					}
					return r(t, [{
						key: "init",
						value: function () {
							if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new dt(this.options) : this.scroll = new S(this.options), this.scroll.init(), window.location.hash) {
								var t = window.location.hash.slice(1, window.location.hash.length),
									e = document.getElementById(t);
								e && this.scroll.scrollTo(e)
							}
						}
					}, {
						key: "update",
						value: function () {
							this.scroll.update()
						}
					}, {
						key: "start",
						value: function () {
							this.scroll.startScroll()
						}
					}, {
						key: "stop",
						value: function () {
							this.scroll.stopScroll()
						}
					}, {
						key: "scrollTo",
						value: function (t, e) {
							this.scroll.scrollTo(t, e)
						}
					}, {
						key: "setScroll",
						value: function (t, e) {
							this.scroll.setScroll(t, e)
						}
					}, {
						key: "on",
						value: function (t, e) {
							this.scroll.setEvents(t, e)
						}
					}, {
						key: "off",
						value: function (t, e) {
							this.scroll.unsetEvents(t, e)
						}
					}, {
						key: "destroy",
						value: function () {
							this.scroll.destroy()
						}
					}]), t
				}();
			e.a = pt
		}).call(this, i(22))
	},
	22: function (t, e) {
		var i;
		i = function () {
			return this
		}();
		try {
			i = i || new Function("return this")()
		} catch (t) {
			"object" == typeof window && (i = window)
		}
		t.exports = i
	},
	23: function (t, e, i) {
		! function () {
			function e(t, e) {
				document.addEventListener ? t.addEventListener("scroll", e, !1) : t.attachEvent("scroll", e)
			}

			function i(t) {
				this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(t)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
			}

			function n(t, e) {
				t.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + e + ";"
			}

			function r(t) {
				var e = t.a.offsetWidth,
					i = e + 100;
				return t.f.style.width = i + "px", t.c.scrollLeft = i, t.b.scrollLeft = t.b.scrollWidth + 100, t.g !== e && (t.g = e, !0)
			}

			function s(t, i) {
				function n() {
					var t = s;
					r(t) && t.a.parentNode && i(t.g)
				}
				var s = t;
				e(t.b, n), e(t.c, n), r(t)
			}

			function a(t, e) {
				var i = e || {};
				this.family = t, this.style = i.style || "normal", this.weight = i.weight || "normal", this.stretch = i.stretch || "normal"
			}
			var o = null,
				l = null,
				c = null,
				h = null;

			function u() {
				return null === h && (h = !!document.fonts), h
			}

			function d() {
				if (null === c) {
					var t = document.createElement("div");
					try {
						t.style.font = "condensed 100px sans-serif"
					} catch (t) {}
					c = "" !== t.style.font
				}
				return c
			}

			function p(t, e) {
				return [t.style, t.weight, d() ? t.stretch : "", "100px", e].join(" ")
			}
			a.prototype.load = function (t, e) {
				var r = this,
					a = t || "BESbswy",
					c = 0,
					h = e || 3e3,
					d = (new Date).getTime();
				return new Promise((function (t, e) {
					if (u() && ! function () {
							if (null === l)
								if (u() && /Apple/.test(window.navigator.vendor)) {
									var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
									l = !!t && 603 > parseInt(t[1], 10)
								} else l = !1;
							return l
						}()) {
						var f = new Promise((function (t, e) {
								! function i() {
									(new Date).getTime() - d >= h ? e(Error(h + "ms timeout exceeded")) : document.fonts.load(p(r, '"' + r.family + '"'), a).then((function (e) {
										1 <= e.length ? t() : setTimeout(i, 25)
									}), e)
								}()
							})),
							m = new Promise((function (t, e) {
								c = setTimeout((function () {
									e(Error(h + "ms timeout exceeded"))
								}), h)
							}));
						Promise.race([m, f]).then((function () {
							clearTimeout(c), t(r)
						}), e)
					} else ! function (t) {
						document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", (function e() {
							document.removeEventListener("DOMContentLoaded", e), t()
						})) : document.attachEvent("onreadystatechange", (function e() {
							"interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", e), t())
						}))
					}((function () {
						function l() {
							var e;
							(e = -1 != g && -1 != v || -1 != g && -1 != y || -1 != v && -1 != y) && ((e = g != v && g != y && v != y) || (null === o && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), o = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), e = o && (g == x && v == x && y == x || g == _ && v == _ && y == _ || g == w && v == w && y == w)), e = !e), e && (b.parentNode && b.parentNode.removeChild(b), clearTimeout(c), t(r))
						}
						var u = new i(a),
							f = new i(a),
							m = new i(a),
							g = -1,
							v = -1,
							y = -1,
							x = -1,
							_ = -1,
							w = -1,
							b = document.createElement("div");
						b.dir = "ltr", n(u, p(r, "sans-serif")), n(f, p(r, "serif")), n(m, p(r, "monospace")), b.appendChild(u.a), b.appendChild(f.a), b.appendChild(m.a), document.body.appendChild(b), x = u.a.offsetWidth, _ = f.a.offsetWidth, w = m.a.offsetWidth,
							function t() {
								if ((new Date).getTime() - d >= h) b.parentNode && b.parentNode.removeChild(b), e(Error(h + "ms timeout exceeded"));
								else {
									var i = document.hidden;
									!0 !== i && void 0 !== i || (g = u.a.offsetWidth, v = f.a.offsetWidth, y = m.a.offsetWidth, l()), c = setTimeout(t, 50)
								}
							}(), s(u, (function (t) {
								g = t, l()
							})), n(u, p(r, '"' + r.family + '",sans-serif')), s(f, (function (t) {
								v = t, l()
							})), n(f, p(r, '"' + r.family + '",serif')), s(m, (function (t) {
								y = t, l()
							})), n(m, p(r, '"' + r.family + '",monospace'))
					}))
				}))
			}, t.exports = a
		}()
	},
	24: function (t, e, i) {
		! function (e, i) {
			t.exports = function () {
				"use strict";

				function t() {
					return (t = Object.assign || function (t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
						}
						return t
					}).apply(this, arguments)
				}
				var e = "undefined" != typeof window,
					i = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
					n = e && "IntersectionObserver" in window,
					r = e && "classList" in document.createElement("p"),
					s = e && window.devicePixelRatio > 1,
					a = {
						elements_selector: ".lazy",
						container: i || e ? document : null,
						threshold: 300,
						thresholds: null,
						data_src: "src",
						data_srcset: "srcset",
						data_sizes: "sizes",
						data_bg: "bg",
						data_bg_hidpi: "bg-hidpi",
						data_bg_multi: "bg-multi",
						data_bg_multi_hidpi: "bg-multi-hidpi",
						data_poster: "poster",
						class_applied: "applied",
						class_loading: "loading",
						class_loaded: "loaded",
						class_error: "error",
						class_entered: "entered",
						class_exited: "exited",
						unobserve_completed: !0,
						unobserve_entered: !1,
						cancel_on_exit: !0,
						callback_enter: null,
						callback_exit: null,
						callback_applied: null,
						callback_loading: null,
						callback_loaded: null,
						callback_error: null,
						callback_finish: null,
						callback_cancel: null,
						use_native: !1
					},
					o = function (e) {
						return t({}, a, e)
					},
					l = function (t, e) {
						var i, n = "LazyLoad::Initialized",
							r = new t(e);
						try {
							i = new CustomEvent(n, {
								detail: {
									instance: r
								}
							})
						} catch (t) {
							(i = document.createEvent("CustomEvent")).initCustomEvent(n, !1, !1, {
								instance: r
							})
						}
						window.dispatchEvent(i)
					},
					c = "loading",
					h = "loaded",
					u = "applied",
					d = "error",
					p = "native",
					f = "data-",
					m = "ll-status",
					g = function (t, e) {
						return t.getAttribute(f + e)
					},
					v = function (t) {
						return g(t, m)
					},
					y = function (t, e) {
						return function (t, e, i) {
							var n = "data-ll-status";
							null !== i ? t.setAttribute(n, i) : t.removeAttribute(n)
						}(t, 0, e)
					},
					x = function (t) {
						return y(t, null)
					},
					_ = function (t) {
						return null === v(t)
					},
					w = function (t) {
						return v(t) === p
					},
					b = [c, h, u, d],
					M = function (t, e, i, n) {
						t && (void 0 === n ? void 0 === i ? t(e) : t(e, i) : t(e, i, n))
					},
					S = function (t, e) {
						r ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
					},
					D = function (t, e) {
						r ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
					},
					T = function (t) {
						return t.llTempImage
					},
					C = function (t, e) {
						if (e) {
							var i = e._observer;
							i && i.unobserve(t)
						}
					},
					E = function (t, e) {
						t && (t.loadingCount += e)
					},
					A = function (t, e) {
						t && (t.toLoadCount = e)
					},
					L = function (t) {
						for (var e, i = [], n = 0; e = t.children[n]; n += 1) "SOURCE" === e.tagName && i.push(e);
						return i
					},
					P = function (t, e, i) {
						i && t.setAttribute(e, i)
					},
					O = function (t, e) {
						t.removeAttribute(e)
					},
					I = function (t) {
						return !!t.llOriginalAttrs
					},
					F = function (t) {
						if (!I(t)) {
							var e = {};
							e.src = t.getAttribute("src"), e.srcset = t.getAttribute("srcset"), e.sizes = t.getAttribute("sizes"), t.llOriginalAttrs = e
						}
					},
					N = function (t) {
						if (I(t)) {
							var e = t.llOriginalAttrs;
							P(t, "src", e.src), P(t, "srcset", e.srcset), P(t, "sizes", e.sizes)
						}
					},
					z = function (t, e) {
						P(t, "sizes", g(t, e.data_sizes)), P(t, "srcset", g(t, e.data_srcset)), P(t, "src", g(t, e.data_src))
					},
					k = function (t) {
						O(t, "src"), O(t, "srcset"), O(t, "sizes")
					},
					R = function (t, e) {
						var i = t.parentNode;
						i && "PICTURE" === i.tagName && L(i).forEach(e)
					},
					B = {
						IMG: function (t, e) {
							R(t, (function (t) {
								F(t), z(t, e)
							})), F(t), z(t, e)
						},
						IFRAME: function (t, e) {
							P(t, "src", g(t, e.data_src))
						},
						VIDEO: function (t, e) {
							! function (t, i) {
								L(t).forEach((function (t) {
									P(t, "src", g(t, e.data_src))
								}))
							}(t), P(t, "poster", g(t, e.data_poster)), P(t, "src", g(t, e.data_src)), t.load()
						}
					},
					U = function (t, e) {
						var i = B[t.tagName];
						i && i(t, e)
					},
					V = function (t, e, i) {
						E(i, 1), S(t, e.class_loading), y(t, c), M(e.callback_loading, t, i)
					},
					W = ["IMG", "IFRAME", "VIDEO"],
					G = function (t, e) {
						!e || function (t) {
							return t.loadingCount > 0
						}(e) || function (t) {
							return t.toLoadCount > 0
						}(e) || M(t.callback_finish, e)
					},
					H = function (t, e, i) {
						t.addEventListener(e, i), t.llEvLisnrs[e] = i
					},
					j = function (t, e, i) {
						t.removeEventListener(e, i)
					},
					q = function (t) {
						return !!t.llEvLisnrs
					},
					X = function (t) {
						if (q(t)) {
							var e = t.llEvLisnrs;
							for (var i in e) {
								var n = e[i];
								j(t, i, n)
							}
							delete t.llEvLisnrs
						}
					},
					Y = function (t, e, i) {
						! function (t) {
							delete t.llTempImage
						}(t), E(i, -1),
							function (t) {
								t && (t.toLoadCount -= 1)
							}(i), D(t, e.class_loading), e.unobserve_completed && C(t, i)
					},
					Z = function (t, e, i) {
						var n = T(t) || t;
						q(n) || function (t, e, i) {
							q(t) || (t.llEvLisnrs = {});
							var n = "VIDEO" === t.tagName ? "loadeddata" : "load";
							H(t, n, e), H(t, "error", i)
						}(n, (function (r) {
							! function (t, e, i, n) {
								var r = w(e);
								Y(e, i, n), S(e, i.class_loaded), y(e, h), M(i.callback_loaded, e, n), r || G(i, n)
							}(0, t, e, i), X(n)
						}), (function (r) {
							! function (t, e, i, n) {
								var r = w(e);
								Y(e, i, n), S(e, i.class_error), y(e, d), M(i.callback_error, e, n), r || G(i, n)
							}(0, t, e, i), X(n)
						}))
					},
					J = function (t, e, i) {
						! function (t) {
							t.llTempImage = document.createElement("IMG")
						}(t), Z(t, e, i),
							function (t, e, i) {
								var n = g(t, e.data_bg),
									r = g(t, e.data_bg_hidpi),
									a = s && r ? r : n;
								a && (t.style.backgroundImage = 'url("'.concat(a, '")'), T(t).setAttribute("src", a), V(t, e, i))
							}(t, e, i),
							function (t, e, i) {
								var n = g(t, e.data_bg_multi),
									r = g(t, e.data_bg_multi_hidpi),
									a = s && r ? r : n;
								a && (t.style.backgroundImage = a, function (t, e, i) {
									S(t, e.class_applied), y(t, u), e.unobserve_completed && C(t, e), M(e.callback_applied, t, i)
								}(t, e, i))
							}(t, e, i)
					},
					$ = function (t, e, i) {
						! function (t) {
							return W.indexOf(t.tagName) > -1
						}(t) ? J(t, e, i): function (t, e, i) {
							Z(t, e, i), U(t, e), V(t, e, i)
						}(t, e, i)
					},
					K = ["IMG", "IFRAME"],
					Q = function (t) {
						return t.use_native && "loading" in HTMLImageElement.prototype
					},
					tt = function (t, e, i) {
						t.forEach((function (t) {
							return function (t) {
								return t.isIntersecting || t.intersectionRatio > 0
							}(t) ? function (t, e, i, n) {
								y(t, "entered"), S(t, i.class_entered), D(t, i.class_exited),
									function (t, e, i) {
										e.unobserve_entered && C(t, i)
									}(t, i, n), M(i.callback_enter, t, e, n),
									function (t) {
										return b.indexOf(v(t)) >= 0
									}(t) || $(t, i, n)
							}(t.target, t, e, i) : function (t, e, i, n) {
								_(t) || (S(t, i.class_exited), function (t, e, i, n) {
									i.cancel_on_exit && function (t) {
										return v(t) === c
									}(t) && "IMG" === t.tagName && (X(t), function (t) {
										R(t, (function (t) {
											k(t)
										})), k(t)
									}(t), function (t) {
										R(t, (function (t) {
											N(t)
										})), N(t)
									}(t), D(t, i.class_loading), E(n, -1), x(t), M(i.callback_cancel, t, e, n))
								}(t, e, i, n), M(i.callback_exit, t, e, n))
							}(t.target, t, e, i)
						}))
					},
					et = function (t) {
						return Array.prototype.slice.call(t)
					},
					it = function (t) {
						return t.container.querySelectorAll(t.elements_selector)
					},
					nt = function (t) {
						return function (t) {
							return v(t) === d
						}(t)
					},
					rt = function (t, e) {
						return function (t) {
							return et(t).filter(_)
						}(t || it(e))
					},
					st = function (t, i) {
						var r = o(t);
						this._settings = r, this.loadingCount = 0,
							function (t, e) {
								n && !Q(t) && (e._observer = new IntersectionObserver((function (i) {
									tt(i, t, e)
								}), function (t) {
									return {
										root: t.container === document ? null : t.container,
										rootMargin: t.thresholds || t.threshold + "px"
									}
								}(t)))
							}(r, this),
							function (t, i) {
								e && window.addEventListener("online", (function () {
									! function (t, e) {
										var i;
										(i = it(t), et(i).filter(nt)).forEach((function (e) {
											D(e, t.class_error), x(e)
										})), e.update()
									}(t, i)
								}))
							}(r, this), this.update(i)
					};
				return st.prototype = {
					update: function (t) {
						var e, r, s = this._settings,
							a = rt(t, s);
						A(this, a.length), !i && n ? Q(s) ? function (t, e, i) {
							t.forEach((function (t) {
								-1 !== K.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"), function (t, e, i) {
									Z(t, e, i), U(t, e), y(t, p)
								}(t, e, i))
							})), A(i, 0)
						}(a, s, this) : (r = a, function (t) {
							t.disconnect()
						}(e = this._observer), function (t, e) {
							e.forEach((function (e) {
								t.observe(e)
							}))
						}(e, r)) : this.loadAll(a)
					},
					destroy: function () {
						this._observer && this._observer.disconnect(), it(this._settings).forEach((function (t) {
							delete t.llOriginalAttrs
						})), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount
					},
					loadAll: function (t) {
						var e = this,
							i = this._settings;
						rt(t, i).forEach((function (t) {
							C(t, e), $(t, i, e)
						}))
					}
				}, st.load = function (t, e) {
					var i = o(e);
					$(t, i)
				}, st.resetStatus = function (t) {
					x(t)
				}, e && function (t, e) {
					if (e)
						if (e.length)
							for (var i, n = 0; i = e[n]; n += 1) l(t, i);
						else l(t, e)
				}(st, window.lazyLoadOptions), st
			}()
		}()
	},
	28: function (t, e, i) {
		"use strict";
		i.r(e);
		i(19), i(20);
		const n = "touchevents",
			r = "no-touchevents",
			s = (t = window, e = !1) => {
				const i = t.document.documentElement;
				return "ontouchstart" in t || t.DocumentTouch && document instanceof DocumentTouch ? (e && (i.classList.remove(r), i.classList.add(n)), !0) : (e && (i.classList.remove(n), i.classList.add(r)), !1)
			};
		s(window, !0);
		const a = document.documentElement,
			o = document.body,
			l = 768,
			c = (t = window) => s(t);
		Document.prototype.ready = t => {
			t && "function" == typeof t && document.addEventListener("DOMContentLoaded", (() => {
				if ("interactive" === document.readyState || "complete" === document.readyState) return t()
			}))
		};
		const h = (t, e, i = document) => {
				const n = new CustomEvent(t, {
					detail: e
				});
				i.dispatchEvent(n)
			},
			u = (t, e, i) => (1 - i) * t + i * e,
			d = (t, e, i, n) => Math.hypot(t - i, e - n),
			p = ".LocomotiveScroll",
			f = {
				namespace: p,
				ready: `ready${p}`,
				scrolling: `scrolling${p}`,
				update: `update${p}`,
				destroy: `destroy${p}`,
				stop: `stop${p}`,
				play: `play${p}`,
				call: `call${p}`,
				scrollTo: `scrollTo${p}`
			},
			m = "Ajax.reset",
			g = {
				start: "AjaxOutStart",
				end: "AjaxOutEnd"
			},
			v = "POPUP.opened",
			y = "POPUP.closed",
			x = "POPUP.update",
			_ = "MAGNET.enter",
			w = "MAGNET.leave",
			b = "MAGNET.update",
			M = "PRELOADER.done",
			S = "PRELOADER_PASSED",
			D = "LAZYLOAD.update",
			T = "LAZYLOAD.load",
			C = {
				opened: "VIDEO.modal.opened",
				closed: "VIDEO.modal.closed"
			},
			E = "NAV_ACTIVE",
			A = "NAV_INNACTIVE";

		function L(t) {
			return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
		}

		function P(t, e) {
			void 0 === t && (t = {}), void 0 === e && (e = {}), Object.keys(e).forEach((function (i) {
				void 0 === t[i] ? t[i] = e[i] : L(e[i]) && L(t[i]) && Object.keys(e[i]).length > 0 && P(t[i], e[i])
			}))
		}
		var O = {
			body: {},
			addEventListener: function () {},
			removeEventListener: function () {},
			activeElement: {
				blur: function () {},
				nodeName: ""
			},
			querySelector: function () {
				return null
			},
			querySelectorAll: function () {
				return []
			},
			getElementById: function () {
				return null
			},
			createEvent: function () {
				return {
					initEvent: function () {}
				}
			},
			createElement: function () {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function () {},
					getElementsByTagName: function () {
						return []
					}
				}
			},
			createElementNS: function () {
				return {}
			},
			importNode: function () {
				return null
			},
			location: {
				hash: "",
				host: "",
				hostname: "",
				href: "",
				origin: "",
				pathname: "",
				protocol: "",
				search: ""
			}
		};

		function I() {
			var t = "undefined" != typeof document ? document : {};
			return P(t, O), t
		}
		var F = {
			document: O,
			navigator: {
				userAgent: ""
			},
			location: {
				hash: "",
				host: "",
				hostname: "",
				href: "",
				origin: "",
				pathname: "",
				protocol: "",
				search: ""
			},
			history: {
				replaceState: function () {},
				pushState: function () {},
				go: function () {},
				back: function () {}
			},
			CustomEvent: function () {
				return this
			},
			addEventListener: function () {},
			removeEventListener: function () {},
			getComputedStyle: function () {
				return {
					getPropertyValue: function () {
						return ""
					}
				}
			},
			Image: function () {},
			Date: function () {},
			screen: {},
			setTimeout: function () {},
			clearTimeout: function () {},
			matchMedia: function () {
				return {}
			},
			requestAnimationFrame: function (t) {
				return "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0)
			},
			cancelAnimationFrame: function (t) {
				"undefined" != typeof setTimeout && clearTimeout(t)
			}
		};

		function N() {
			var t = "undefined" != typeof window ? window : {};
			return P(t, F), t
		}

		function z(t) {
			return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function k(t, e) {
			return (k = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function R() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
			} catch (t) {
				return !1
			}
		}

		function B(t, e, i) {
			return (B = R() ? Reflect.construct : function (t, e, i) {
				var n = [null];
				n.push.apply(n, e);
				var r = new(Function.bind.apply(t, n));
				return i && k(r, i.prototype), r
			}).apply(null, arguments)
		}

		function U(t) {
			var e = "function" == typeof Map ? new Map : void 0;
			return (U = function (t) {
				if (null === t || ! function (t) {
						return -1 !== Function.toString.call(t).indexOf("[native code]")
					}(t)) return t;
				if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
				if (void 0 !== e) {
					if (e.has(t)) return e.get(t);
					e.set(t, i)
				}

				function i() {
					return B(t, arguments, z(this).constructor)
				}
				return i.prototype = Object.create(t.prototype, {
					constructor: {
						value: i,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), k(i, t)
			})(t)
		}
		var V = function (t) {
			function e(e) {
				var i;
				return function (t) {
					var e = t.__proto__;
					Object.defineProperty(t, "__proto__", {
						get: function () {
							return e
						},
						set: function (t) {
							e.__proto__ = t
						}
					})
				}(function (t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t
				}(i = t.call.apply(t, [this].concat(e)) || this)), i
			}
			return function (t, e) {
				t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
			}(e, t), e
		}(U(Array));

		function W(t) {
			void 0 === t && (t = []);
			var e = [];
			return t.forEach((function (t) {
				Array.isArray(t) ? e.push.apply(e, W(t)) : e.push(t)
			})), e
		}

		function G(t, e) {
			return Array.prototype.filter.call(t, e)
		}

		function H(t, e) {
			var i = N(),
				n = I(),
				r = [];
			if (!e && t instanceof V) return t;
			if (!t) return new V(r);
			if ("string" == typeof t) {
				var s = t.trim();
				if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
					var a = "div";
					0 === s.indexOf("<li") && (a = "ul"), 0 === s.indexOf("<tr") && (a = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (a = "tr"), 0 === s.indexOf("<tbody") && (a = "table"), 0 === s.indexOf("<option") && (a = "select");
					var o = n.createElement(a);
					o.innerHTML = s;
					for (var l = 0; l < o.childNodes.length; l += 1) r.push(o.childNodes[l])
				} else r = function (t, e) {
					if ("string" != typeof t) return [t];
					for (var i = [], n = e.querySelectorAll(t), r = 0; r < n.length; r += 1) i.push(n[r]);
					return i
				}(t.trim(), e || n)
			} else if (t.nodeType || t === i || t === n) r.push(t);
			else if (Array.isArray(t)) {
				if (t instanceof V) return t;
				r = t
			}
			return new V(function (t) {
				for (var e = [], i = 0; i < t.length; i += 1) - 1 === e.indexOf(t[i]) && e.push(t[i]);
				return e
			}(r))
		}
		H.fn = V.prototype;
		var j = "resize scroll".split(" ");

		function q(t) {
			return function () {
				for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
				if (void 0 === i[0]) {
					for (var r = 0; r < this.length; r += 1) j.indexOf(t) < 0 && (t in this[r] ? this[r][t]() : H(this[r]).trigger(t));
					return this
				}
				return this.on.apply(this, [t].concat(i))
			}
		}
		q("click"), q("blur"), q("focus"), q("focusin"), q("focusout"), q("keyup"), q("keydown"), q("keypress"), q("submit"), q("change"), q("mousedown"), q("mousemove"), q("mouseup"), q("mouseenter"), q("mouseleave"), q("mouseout"), q("mouseover"), q("touchstart"), q("touchend"), q("touchmove"), q("resize"), q("scroll");
		var X = {
			addClass: function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				var n = W(e.map((function (t) {
					return t.split(" ")
				})));
				return this.forEach((function (t) {
					var e;
					(e = t.classList).add.apply(e, n)
				})), this
			},
			removeClass: function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				var n = W(e.map((function (t) {
					return t.split(" ")
				})));
				return this.forEach((function (t) {
					var e;
					(e = t.classList).remove.apply(e, n)
				})), this
			},
			hasClass: function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				var n = W(e.map((function (t) {
					return t.split(" ")
				})));
				return G(this, (function (t) {
					return n.filter((function (e) {
						return t.classList.contains(e)
					})).length > 0
				})).length > 0
			},
			toggleClass: function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				var n = W(e.map((function (t) {
					return t.split(" ")
				})));
				this.forEach((function (t) {
					n.forEach((function (e) {
						t.classList.toggle(e)
					}))
				}))
			},
			attr: function (t, e) {
				if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
				for (var i = 0; i < this.length; i += 1)
					if (2 === arguments.length) this[i].setAttribute(t, e);
					else
						for (var n in t) this[i][n] = t[n], this[i].setAttribute(n, t[n]);
				return this
			},
			removeAttr: function (t) {
				for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
				return this
			},
			transform: function (t) {
				for (var e = 0; e < this.length; e += 1) this[e].style.transform = t;
				return this
			},
			transition: function (t) {
				for (var e = 0; e < this.length; e += 1) this[e].style.transitionDuration = "string" != typeof t ? t + "ms" : t;
				return this
			},
			on: function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				var n = e[0],
					r = e[1],
					s = e[2],
					a = e[3];

				function o(t) {
					var e = t.target;
					if (e) {
						var i = t.target.dom7EventData || [];
						if (i.indexOf(t) < 0 && i.unshift(t), H(e).is(r)) s.apply(e, i);
						else
							for (var n = H(e).parents(), a = 0; a < n.length; a += 1) H(n[a]).is(r) && s.apply(n[a], i)
					}
				}

				function l(t) {
					var e = t && t.target && t.target.dom7EventData || [];
					e.indexOf(t) < 0 && e.unshift(t), s.apply(this, e)
				}
				"function" == typeof e[1] && (n = e[0], s = e[1], a = e[2], r = void 0), a || (a = !1);
				for (var c, h = n.split(" "), u = 0; u < this.length; u += 1) {
					var d = this[u];
					if (r)
						for (c = 0; c < h.length; c += 1) {
							var p = h[c];
							d.dom7LiveListeners || (d.dom7LiveListeners = {}), d.dom7LiveListeners[p] || (d.dom7LiveListeners[p] = []), d.dom7LiveListeners[p].push({
								listener: s,
								proxyListener: o
							}), d.addEventListener(p, o, a)
						} else
							for (c = 0; c < h.length; c += 1) {
								var f = h[c];
								d.dom7Listeners || (d.dom7Listeners = {}), d.dom7Listeners[f] || (d.dom7Listeners[f] = []), d.dom7Listeners[f].push({
									listener: s,
									proxyListener: l
								}), d.addEventListener(f, l, a)
							}
				}
				return this
			},
			off: function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				var n = e[0],
					r = e[1],
					s = e[2],
					a = e[3];
				"function" == typeof e[1] && (n = e[0], s = e[1], a = e[2], r = void 0), a || (a = !1);
				for (var o = n.split(" "), l = 0; l < o.length; l += 1)
					for (var c = o[l], h = 0; h < this.length; h += 1) {
						var u = this[h],
							d = void 0;
						if (!r && u.dom7Listeners ? d = u.dom7Listeners[c] : r && u.dom7LiveListeners && (d = u.dom7LiveListeners[c]), d && d.length)
							for (var p = d.length - 1; p >= 0; p -= 1) {
								var f = d[p];
								s && f.listener === s || s && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === s ? (u.removeEventListener(c, f.proxyListener, a), d.splice(p, 1)) : s || (u.removeEventListener(c, f.proxyListener, a), d.splice(p, 1))
							}
					}
				return this
			},
			trigger: function () {
				for (var t = N(), e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
				for (var r = i[0].split(" "), s = i[1], a = 0; a < r.length; a += 1)
					for (var o = r[a], l = 0; l < this.length; l += 1) {
						var c = this[l];
						if (t.CustomEvent) {
							var h = new t.CustomEvent(o, {
								detail: s,
								bubbles: !0,
								cancelable: !0
							});
							c.dom7EventData = i.filter((function (t, e) {
								return e > 0
							})), c.dispatchEvent(h), c.dom7EventData = [], delete c.dom7EventData
						}
					}
				return this
			},
			transitionEnd: function (t) {
				var e = this;
				return t && e.on("transitionend", (function i(n) {
					n.target === this && (t.call(this, n), e.off("transitionend", i))
				})), this
			},
			outerWidth: function (t) {
				if (this.length > 0) {
					if (t) {
						var e = this.styles();
						return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
					}
					return this[0].offsetWidth
				}
				return null
			},
			outerHeight: function (t) {
				if (this.length > 0) {
					if (t) {
						var e = this.styles();
						return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
					}
					return this[0].offsetHeight
				}
				return null
			},
			styles: function () {
				var t = N();
				return this[0] ? t.getComputedStyle(this[0], null) : {}
			},
			offset: function () {
				if (this.length > 0) {
					var t = N(),
						e = I(),
						i = this[0],
						n = i.getBoundingClientRect(),
						r = e.body,
						s = i.clientTop || r.clientTop || 0,
						a = i.clientLeft || r.clientLeft || 0,
						o = i === t ? t.scrollY : i.scrollTop,
						l = i === t ? t.scrollX : i.scrollLeft;
					return {
						top: n.top + o - s,
						left: n.left + l - a
					}
				}
				return null
			},
			css: function (t, e) {
				var i, n = N();
				if (1 === arguments.length) {
					if ("string" != typeof t) {
						for (i = 0; i < this.length; i += 1)
							for (var r in t) this[i].style[r] = t[r];
						return this
					}
					if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(t)
				}
				if (2 === arguments.length && "string" == typeof t) {
					for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
					return this
				}
				return this
			},
			each: function (t) {
				return t ? (this.forEach((function (e, i) {
					t.apply(e, [e, i])
				})), this) : this
			},
			html: function (t) {
				if (void 0 === t) return this[0] ? this[0].innerHTML : null;
				for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
				return this
			},
			text: function (t) {
				if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
				for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
				return this
			},
			is: function (t) {
				var e, i, n = N(),
					r = I(),
					s = this[0];
				if (!s || void 0 === t) return !1;
				if ("string" == typeof t) {
					if (s.matches) return s.matches(t);
					if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
					if (s.msMatchesSelector) return s.msMatchesSelector(t);
					for (e = H(t), i = 0; i < e.length; i += 1)
						if (e[i] === s) return !0;
					return !1
				}
				if (t === r) return s === r;
				if (t === n) return s === n;
				if (t.nodeType || t instanceof V) {
					for (e = t.nodeType ? [t] : t, i = 0; i < e.length; i += 1)
						if (e[i] === s) return !0;
					return !1
				}
				return !1
			},
			index: function () {
				var t, e = this[0];
				if (e) {
					for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
					return t
				}
			},
			eq: function (t) {
				if (void 0 === t) return this;
				var e = this.length;
				if (t > e - 1) return H([]);
				if (t < 0) {
					var i = e + t;
					return H(i < 0 ? [] : [this[i]])
				}
				return H([this[t]])
			},
			append: function () {
				for (var t, e = I(), i = 0; i < arguments.length; i += 1) {
					t = i < 0 || arguments.length <= i ? void 0 : arguments[i];
					for (var n = 0; n < this.length; n += 1)
						if ("string" == typeof t) {
							var r = e.createElement("div");
							for (r.innerHTML = t; r.firstChild;) this[n].appendChild(r.firstChild)
						} else if (t instanceof V)
						for (var s = 0; s < t.length; s += 1) this[n].appendChild(t[s]);
					else this[n].appendChild(t)
				}
				return this
			},
			prepend: function (t) {
				var e, i, n = I();
				for (e = 0; e < this.length; e += 1)
					if ("string" == typeof t) {
						var r = n.createElement("div");
						for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i -= 1) this[e].insertBefore(r.childNodes[i], this[e].childNodes[0])
					} else if (t instanceof V)
					for (i = 0; i < t.length; i += 1) this[e].insertBefore(t[i], this[e].childNodes[0]);
				else this[e].insertBefore(t, this[e].childNodes[0]);
				return this
			},
			next: function (t) {
				return this.length > 0 ? t ? this[0].nextElementSibling && H(this[0].nextElementSibling).is(t) ? H([this[0].nextElementSibling]) : H([]) : this[0].nextElementSibling ? H([this[0].nextElementSibling]) : H([]) : H([])
			},
			nextAll: function (t) {
				var e = [],
					i = this[0];
				if (!i) return H([]);
				for (; i.nextElementSibling;) {
					var n = i.nextElementSibling;
					t ? H(n).is(t) && e.push(n) : e.push(n), i = n
				}
				return H(e)
			},
			prev: function (t) {
				if (this.length > 0) {
					var e = this[0];
					return t ? e.previousElementSibling && H(e.previousElementSibling).is(t) ? H([e.previousElementSibling]) : H([]) : e.previousElementSibling ? H([e.previousElementSibling]) : H([])
				}
				return H([])
			},
			prevAll: function (t) {
				var e = [],
					i = this[0];
				if (!i) return H([]);
				for (; i.previousElementSibling;) {
					var n = i.previousElementSibling;
					t ? H(n).is(t) && e.push(n) : e.push(n), i = n
				}
				return H(e)
			},
			parent: function (t) {
				for (var e = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (t ? H(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode));
				return H(e)
			},
			parents: function (t) {
				for (var e = [], i = 0; i < this.length; i += 1)
					for (var n = this[i].parentNode; n;) t ? H(n).is(t) && e.push(n) : e.push(n), n = n.parentNode;
				return H(e)
			},
			closest: function (t) {
				var e = this;
				return void 0 === t ? H([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
			},
			find: function (t) {
				for (var e = [], i = 0; i < this.length; i += 1)
					for (var n = this[i].querySelectorAll(t), r = 0; r < n.length; r += 1) e.push(n[r]);
				return H(e)
			},
			children: function (t) {
				for (var e = [], i = 0; i < this.length; i += 1)
					for (var n = this[i].children, r = 0; r < n.length; r += 1) t && !H(n[r]).is(t) || e.push(n[r]);
				return H(e)
			},
			filter: function (t) {
				return H(G(this, t))
			},
			remove: function () {
				for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
				return this
			}
		};
		Object.keys(X).forEach((function (t) {
			H.fn[t] = X[t]
		}));
		var Y, Z, J, $ = H;

		function K(t, e) {
			return void 0 === e && (e = 0), setTimeout(t, e)
		}

		function Q() {
			return Date.now()
		}

		function tt(t) {
			return "object" == typeof t && null !== t && t.constructor && t.constructor === Object
		}

		function et() {
			for (var t = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = 1; e < arguments.length; e += 1) {
				var i = e < 0 || arguments.length <= e ? void 0 : arguments[e];
				if (null != i)
					for (var n = Object.keys(Object(i)), r = 0, s = n.length; r < s; r += 1) {
						var a = n[r],
							o = Object.getOwnPropertyDescriptor(i, a);
						void 0 !== o && o.enumerable && (tt(t[a]) && tt(i[a]) ? et(t[a], i[a]) : !tt(t[a]) && tt(i[a]) ? (t[a] = {}, et(t[a], i[a])) : t[a] = i[a])
					}
			}
			return t
		}

		function it(t, e) {
			Object.keys(e).forEach((function (i) {
				tt(e[i]) && Object.keys(e[i]).forEach((function (n) {
					"function" == typeof e[i][n] && (e[i][n] = e[i][n].bind(t))
				})), t[i] = e[i]
			}))
		}

		function nt() {
			return Y || (Y = function () {
				var t = N(),
					e = I();
				return {
					touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
					pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints >= 0,
					observer: function () {
						return "MutationObserver" in t || "WebkitMutationObserver" in t
					}(),
					passiveListener: function () {
						var e = !1;
						try {
							var i = Object.defineProperty({}, "passive", {
								get: function () {
									e = !0
								}
							});
							t.addEventListener("testPassiveListener", null, i)
						} catch (t) {}
						return e
					}(),
					gestures: function () {
						return "ongesturestart" in t
					}()
				}
			}()), Y
		}

		function rt(t) {
			return void 0 === t && (t = {}), Z || (Z = function (t) {
				var e = (void 0 === t ? {} : t).userAgent,
					i = nt(),
					n = N(),
					r = n.navigator.platform,
					s = e || n.navigator.userAgent,
					a = {
						ios: !1,
						android: !1
					},
					o = n.screen.width,
					l = n.screen.height,
					c = s.match(/(Android);?[\s\/]+([\d.]+)?/),
					h = s.match(/(iPad).*OS\s([\d_]+)/),
					u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
					d = !h && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
					p = "Win32" === r,
					f = "MacIntel" === r;
				return !h && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + l) >= 0 && ((h = s.match(/(Version)\/([\d.]+)/)) || (h = [0, 1, "13_0_0"]), f = !1), c && !p && (a.os = "android", a.android = !0), (h || d || u) && (a.os = "ios", a.ios = !0), a
			}(t)), Z
		}

		function st() {
			return J || (J = function () {
				var t = N();
				return {
					isEdge: !!t.navigator.userAgent.match(/Edge/g),
					isSafari: function () {
						var e = t.navigator.userAgent.toLowerCase();
						return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
					}(),
					isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
				}
			}()), J
		}
		var at = {
			name: "resize",
			create: function () {
				var t = this;
				et(t, {
					resize: {
						observer: null,
						createObserver: function () {
							t && !t.destroyed && t.initialized && (t.resize.observer = new ResizeObserver((function (e) {
								var i = t.width,
									n = t.height,
									r = i,
									s = n;
								e.forEach((function (e) {
									var i = e.contentBoxSize,
										n = e.contentRect,
										a = e.target;
									a && a !== t.el || (r = n ? n.width : (i[0] || i).inlineSize, s = n ? n.height : (i[0] || i).blockSize)
								})), r === i && s === n || t.resize.resizeHandler()
							})), t.resize.observer.observe(t.el))
						},
						removeObserver: function () {
							t.resize.observer && t.resize.observer.unobserve && t.el && (t.resize.observer.unobserve(t.el), t.resize.observer = null)
						},
						resizeHandler: function () {
							t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
						},
						orientationChangeHandler: function () {
							t && !t.destroyed && t.initialized && t.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function (t) {
					var e = N();
					t.params.resizeObserver && function () {
						return void 0 !== N().ResizeObserver
					}() ? t.resize.createObserver() : (e.addEventListener("resize", t.resize.resizeHandler), e.addEventListener("orientationchange", t.resize.orientationChangeHandler))
				},
				destroy: function (t) {
					var e = N();
					t.resize.removeObserver(), e.removeEventListener("resize", t.resize.resizeHandler), e.removeEventListener("orientationchange", t.resize.orientationChangeHandler)
				}
			}
		};

		function ot() {
			return (ot = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
				}
				return t
			}).apply(this, arguments)
		}
		var lt = {
				attach: function (t, e) {
					void 0 === e && (e = {});
					var i = N(),
						n = this,
						r = new(i.MutationObserver || i.WebkitMutationObserver)((function (t) {
							if (1 !== t.length) {
								var e = function () {
									n.emit("observerUpdate", t[0])
								};
								i.requestAnimationFrame ? i.requestAnimationFrame(e) : i.setTimeout(e, 0)
							} else n.emit("observerUpdate", t[0])
						}));
					r.observe(t, {
						attributes: void 0 === e.attributes || e.attributes,
						childList: void 0 === e.childList || e.childList,
						characterData: void 0 === e.characterData || e.characterData
					}), n.observer.observers.push(r)
				},
				init: function () {
					var t = this;
					if (t.support.observer && t.params.observer) {
						if (t.params.observeParents)
							for (var e = t.$el.parents(), i = 0; i < e.length; i += 1) t.observer.attach(e[i]);
						t.observer.attach(t.$el[0], {
							childList: t.params.observeSlideChildren
						}), t.observer.attach(t.$wrapperEl[0], {
							attributes: !1
						})
					}
				},
				destroy: function () {
					this.observer.observers.forEach((function (t) {
						t.disconnect()
					})), this.observer.observers = []
				}
			},
			ct = {
				name: "observer",
				params: {
					observer: !1,
					observeParents: !1,
					observeSlideChildren: !1
				},
				create: function () {
					it(this, {
						observer: ot({}, lt, {
							observers: []
						})
					})
				},
				on: {
					init: function (t) {
						t.observer.init()
					},
					destroy: function (t) {
						t.observer.destroy()
					}
				}
			};

		function ht(t) {
			var e = this,
				i = I(),
				n = N(),
				r = e.touchEventsData,
				s = e.params,
				a = e.touches;
			if (!e.animating || !s.preventInteractionOnTransition) {
				var o = t;
				o.originalEvent && (o = o.originalEvent);
				var l = $(o.target);
				if ("wrapper" !== s.touchEventsTarget || l.closest(e.wrapperEl).length)
					if (r.isTouchEvent = "touchstart" === o.type, r.isTouchEvent || !("which" in o) || 3 !== o.which)
						if (!(!r.isTouchEvent && "button" in o && o.button > 0))
							if (!r.isTouched || !r.isMoved)
								if (!!s.noSwipingClass && "" !== s.noSwipingClass && o.target && o.target.shadowRoot && t.path && t.path[0] && (l = $(t.path[0])), s.noSwiping && l.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) e.allowClick = !0;
								else if (!s.swipeHandler || l.closest(s.swipeHandler)[0]) {
					a.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, a.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
					var c = a.currentX,
						h = a.currentY,
						u = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
						d = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
					if (u && (c <= d || c >= n.innerWidth - d)) {
						if ("prevent" !== u) return;
						t.preventDefault()
					}
					if (et(r, {
							isTouched: !0,
							isMoved: !1,
							allowTouchCallbacks: !0,
							isScrolling: void 0,
							startMoving: void 0
						}), a.startX = c, a.startY = h, r.touchStartTime = Q(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== o.type) {
						var p = !0;
						l.is(r.formElements) && (p = !1), i.activeElement && $(i.activeElement).is(r.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
						var f = p && e.allowTouchMove && s.touchStartPreventDefault;
						!s.touchStartForcePreventDefault && !f || l[0].isContentEditable || o.preventDefault()
					}
					e.emit("touchStart", o)
				}
			}
		}

		function ut(t) {
			var e = I(),
				i = this,
				n = i.touchEventsData,
				r = i.params,
				s = i.touches,
				a = i.rtlTranslate,
				o = t;
			if (o.originalEvent && (o = o.originalEvent), n.isTouched) {
				if (!n.isTouchEvent || "touchmove" === o.type) {
					var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
						c = "touchmove" === o.type ? l.pageX : o.pageX,
						h = "touchmove" === o.type ? l.pageY : o.pageY;
					if (o.preventedByNestedSwiper) return s.startX = c, void(s.startY = h);
					if (!i.allowTouchMove) return i.allowClick = !1, void(n.isTouched && (et(s, {
						startX: c,
						startY: h,
						currentX: c,
						currentY: h
					}), n.touchStartTime = Q()));
					if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
						if (i.isVertical()) {
							if (h < s.startY && i.translate <= i.maxTranslate() || h > s.startY && i.translate >= i.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
						} else if (c < s.startX && i.translate <= i.maxTranslate() || c > s.startX && i.translate >= i.minTranslate()) return;
					if (n.isTouchEvent && e.activeElement && o.target === e.activeElement && $(o.target).is(n.formElements)) return n.isMoved = !0, void(i.allowClick = !1);
					if (n.allowTouchCallbacks && i.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
						s.currentX = c, s.currentY = h;
						var u = s.currentX - s.startX,
							d = s.currentY - s.startY;
						if (!(i.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(d, 2)) < i.params.threshold)) {
							var p;
							if (void 0 === n.isScrolling) i.isHorizontal() && s.currentY === s.startY || i.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : u * u + d * d >= 25 && (p = 180 * Math.atan2(Math.abs(d), Math.abs(u)) / Math.PI, n.isScrolling = i.isHorizontal() ? p > r.touchAngle : 90 - p > r.touchAngle);
							if (n.isScrolling && i.emit("touchMoveOpposite", o), void 0 === n.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1;
							else if (n.startMoving) {
								i.allowClick = !1, !r.cssMode && o.cancelable && o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation(), n.isMoved || (r.loop && i.loopFix(), n.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), n.isMoved = !0;
								var f = i.isHorizontal() ? u : d;
								s.diff = f, f *= r.touchRatio, a && (f = -f), i.swipeDirection = f > 0 ? "prev" : "next", n.currentTranslate = f + n.startTranslate;
								var m = !0,
									g = r.resistanceRatio;
								if (r.touchReleaseOnEdges && (g = 0), f > 0 && n.currentTranslate > i.minTranslate() ? (m = !1, r.resistance && (n.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + n.startTranslate + f, g))) : f < 0 && n.currentTranslate < i.maxTranslate() && (m = !1, r.resistance && (n.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - n.startTranslate - f, g))), m && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), i.allowSlidePrev || i.allowSlideNext || (n.currentTranslate = n.startTranslate), r.threshold > 0) {
									if (!(Math.abs(f) > r.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
									if (!n.allowThresholdMove) return n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, void(s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
								}
								r.followFinger && !r.cssMode && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && (0 === n.velocities.length && n.velocities.push({
									position: s[i.isHorizontal() ? "startX" : "startY"],
									time: n.touchStartTime
								}), n.velocities.push({
									position: s[i.isHorizontal() ? "currentX" : "currentY"],
									time: Q()
								})), i.updateProgress(n.currentTranslate), i.setTranslate(n.currentTranslate))
							}
						}
					}
				}
			} else n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", o)
		}

		function dt(t) {
			var e = this,
				i = e.touchEventsData,
				n = e.params,
				r = e.touches,
				s = e.rtlTranslate,
				a = e.$wrapperEl,
				o = e.slidesGrid,
				l = e.snapGrid,
				c = t;
			if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
			n.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
			var h, u = Q(),
				d = u - i.touchStartTime;
			if (e.allowClick && (e.updateClickedSlide(c), e.emit("tap click", c), d < 300 && u - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", c)), i.lastClickTime = Q(), K((function () {
					e.destroyed || (e.allowClick = !0)
				})), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
			if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = n.followFinger ? s ? e.translate : -e.translate : -i.currentTranslate, !n.cssMode)
				if (n.freeMode) {
					if (h < -e.minTranslate()) return void e.slideTo(e.activeIndex);
					if (h > -e.maxTranslate()) return void(e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1));
					if (n.freeModeMomentum) {
						if (i.velocities.length > 1) {
							var p = i.velocities.pop(),
								f = i.velocities.pop(),
								m = p.position - f.position,
								g = p.time - f.time;
							e.velocity = m / g, e.velocity /= 2, Math.abs(e.velocity) < n.freeModeMinimumVelocity && (e.velocity = 0), (g > 150 || Q() - p.time > 300) && (e.velocity = 0)
						} else e.velocity = 0;
						e.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
						var v = 1e3 * n.freeModeMomentumRatio,
							y = e.velocity * v,
							x = e.translate + y;
						s && (x = -x);
						var _, w, b = !1,
							M = 20 * Math.abs(e.velocity) * n.freeModeMomentumBounceRatio;
						if (x < e.maxTranslate()) n.freeModeMomentumBounce ? (x + e.maxTranslate() < -M && (x = e.maxTranslate() - M), _ = e.maxTranslate(), b = !0, i.allowMomentumBounce = !0) : x = e.maxTranslate(), n.loop && n.centeredSlides && (w = !0);
						else if (x > e.minTranslate()) n.freeModeMomentumBounce ? (x - e.minTranslate() > M && (x = e.minTranslate() + M), _ = e.minTranslate(), b = !0, i.allowMomentumBounce = !0) : x = e.minTranslate(), n.loop && n.centeredSlides && (w = !0);
						else if (n.freeModeSticky) {
							for (var S, D = 0; D < l.length; D += 1)
								if (l[D] > -x) {
									S = D;
									break
								}
							x = -(x = Math.abs(l[S] - x) < Math.abs(l[S - 1] - x) || "next" === e.swipeDirection ? l[S] : l[S - 1])
						}
						if (w && e.once("transitionEnd", (function () {
								e.loopFix()
							})), 0 !== e.velocity) {
							if (v = s ? Math.abs((-x - e.translate) / e.velocity) : Math.abs((x - e.translate) / e.velocity), n.freeModeSticky) {
								var T = Math.abs((s ? -x : x) - e.translate),
									C = e.slidesSizesGrid[e.activeIndex];
								v = T < C ? n.speed : T < 2 * C ? 1.5 * n.speed : 2.5 * n.speed
							}
						} else if (n.freeModeSticky) return void e.slideToClosest();
						n.freeModeMomentumBounce && b ? (e.updateProgress(_), e.setTransition(v), e.setTranslate(x), e.transitionStart(!0, e.swipeDirection), e.animating = !0, a.transitionEnd((function () {
							e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(n.speed), setTimeout((function () {
								e.setTranslate(_), a.transitionEnd((function () {
									e && !e.destroyed && e.transitionEnd()
								}))
							}), 0))
						}))) : e.velocity ? (e.updateProgress(x), e.setTransition(v), e.setTranslate(x), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, a.transitionEnd((function () {
							e && !e.destroyed && e.transitionEnd()
						})))) : (e.emit("_freeModeNoMomentumRelease"), e.updateProgress(x)), e.updateActiveIndex(), e.updateSlidesClasses()
					} else {
						if (n.freeModeSticky) return void e.slideToClosest();
						n.freeMode && e.emit("_freeModeNoMomentumRelease")
					}(!n.freeModeMomentum || d >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
				} else {
					for (var E = 0, A = e.slidesSizesGrid[0], L = 0; L < o.length; L += L < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
						var P = L < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
						void 0 !== o[L + P] ? h >= o[L] && h < o[L + P] && (E = L, A = o[L + P] - o[L]) : h >= o[L] && (E = L, A = o[o.length - 1] - o[o.length - 2])
					}
					var O = (h - o[E]) / A,
						I = E < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
					if (d > n.longSwipesMs) {
						if (!n.longSwipes) return void e.slideTo(e.activeIndex);
						"next" === e.swipeDirection && (O >= n.longSwipesRatio ? e.slideTo(E + I) : e.slideTo(E)), "prev" === e.swipeDirection && (O > 1 - n.longSwipesRatio ? e.slideTo(E + I) : e.slideTo(E))
					} else {
						if (!n.shortSwipes) return void e.slideTo(e.activeIndex);
						e.navigation && (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl) ? c.target === e.navigation.nextEl ? e.slideTo(E + I) : e.slideTo(E) : ("next" === e.swipeDirection && e.slideTo(E + I), "prev" === e.swipeDirection && e.slideTo(E))
					}
				}
		}

		function pt() {
			var t = this,
				e = t.params,
				i = t.el;
			if (!i || 0 !== i.offsetWidth) {
				e.breakpoints && t.setBreakpoint();
				var n = t.allowSlideNext,
					r = t.allowSlidePrev,
					s = t.snapGrid;
				t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(), t.allowSlidePrev = r, t.allowSlideNext = n, t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow()
			}
		}

		function ft(t) {
			var e = this;
			e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
		}

		function mt() {
			var t = this,
				e = t.wrapperEl,
				i = t.rtlTranslate;
			t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = i ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : t.translate = -e.scrollTop, -0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
			var n = t.maxTranslate() - t.minTranslate();
			(0 === n ? 0 : (t.translate - t.minTranslate()) / n) !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
		}
		var gt = !1;

		function vt() {}
		var yt = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			cssMode: !1,
			updateOnWindowResize: !0,
			resizeObserver: !1,
			nested: !1,
			width: null,
			height: null,
			preventInteractionOnTransition: !1,
			userAgent: null,
			url: null,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			breakpointsBase: "window",
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			slidesPerGroupSkip: 0,
			centeredSlides: !1,
			centeredSlidesBounds: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !1,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			loopPreventsSlide: !0,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0,
			_emitClasses: !1
		};

		function xt(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}
		var _t = {
				modular: {
					useParams: function (t) {
						var e = this;
						e.modules && Object.keys(e.modules).forEach((function (i) {
							var n = e.modules[i];
							n.params && et(t, n.params)
						}))
					},
					useModules: function (t) {
						void 0 === t && (t = {});
						var e = this;
						e.modules && Object.keys(e.modules).forEach((function (i) {
							var n = e.modules[i],
								r = t[i] || {};
							n.on && e.on && Object.keys(n.on).forEach((function (t) {
								e.on(t, n.on[t])
							})), n.create && n.create.bind(e)(r)
						}))
					}
				},
				eventsEmitter: {
					on: function (t, e, i) {
						var n = this;
						if ("function" != typeof e) return n;
						var r = i ? "unshift" : "push";
						return t.split(" ").forEach((function (t) {
							n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][r](e)
						})), n
					},
					once: function (t, e, i) {
						var n = this;
						if ("function" != typeof e) return n;

						function r() {
							n.off(t, r), r.__emitterProxy && delete r.__emitterProxy;
							for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
							e.apply(n, s)
						}
						return r.__emitterProxy = e, n.on(t, r, i)
					},
					onAny: function (t, e) {
						var i = this;
						if ("function" != typeof t) return i;
						var n = e ? "unshift" : "push";
						return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[n](t), i
					},
					offAny: function (t) {
						var e = this;
						if (!e.eventsAnyListeners) return e;
						var i = e.eventsAnyListeners.indexOf(t);
						return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
					},
					off: function (t, e) {
						var i = this;
						return i.eventsListeners ? (t.split(" ").forEach((function (t) {
							void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].forEach((function (n, r) {
								(n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[t].splice(r, 1)
							}))
						})), i) : i
					},
					emit: function () {
						var t, e, i, n = this;
						if (!n.eventsListeners) return n;
						for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
						"string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], e = s.slice(1, s.length), i = n) : (t = s[0].events, e = s[0].data, i = s[0].context || n), e.unshift(i);
						var o = Array.isArray(t) ? t : t.split(" ");
						return o.forEach((function (t) {
							n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach((function (n) {
								n.apply(i, [t].concat(e))
							})), n.eventsListeners && n.eventsListeners[t] && n.eventsListeners[t].forEach((function (t) {
								t.apply(i, e)
							}))
						})), n
					}
				},
				update: {
					updateSize: function () {
						var t, e, i = this,
							n = i.$el;
						t = void 0 !== i.params.width && null !== i.params.width ? i.params.width : n[0].clientWidth, e = void 0 !== i.params.height && null !== i.params.height ? i.params.height : n[0].clientHeight, 0 === t && i.isHorizontal() || 0 === e && i.isVertical() || (t = t - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), e = e - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(e) && (e = 0), et(i, {
							width: t,
							height: e,
							size: i.isHorizontal() ? t : e
						}))
					},
					updateSlides: function () {
						var t = this,
							e = function (e) {
								return t.isHorizontal() ? e : {
									width: "height",
									"margin-top": "margin-left",
									"margin-bottom ": "margin-right",
									"margin-left": "margin-top",
									"margin-right": "margin-bottom",
									"padding-left": "padding-top",
									"padding-right": "padding-bottom",
									marginRight: "marginBottom"
								}[e]
							},
							i = function (t, i) {
								return parseFloat(t.getPropertyValue(e(i)) || 0)
							},
							n = N(),
							r = t.params,
							s = t.$wrapperEl,
							a = t.size,
							o = t.rtlTranslate,
							l = t.wrongRTL,
							c = t.virtual && r.virtual.enabled,
							h = c ? t.virtual.slides.length : t.slides.length,
							u = s.children("." + t.params.slideClass),
							d = c ? t.virtual.slides.length : u.length,
							p = [],
							f = [],
							m = [],
							g = r.slidesOffsetBefore;
						"function" == typeof g && (g = r.slidesOffsetBefore.call(t));
						var v = r.slidesOffsetAfter;
						"function" == typeof v && (v = r.slidesOffsetAfter.call(t));
						var y = t.snapGrid.length,
							x = t.slidesGrid.length,
							_ = r.spaceBetween,
							w = -g,
							b = 0,
							M = 0;
						if (void 0 !== a) {
							var S, D;
							"string" == typeof _ && _.indexOf("%") >= 0 && (_ = parseFloat(_.replace("%", "")) / 100 * a), t.virtualSize = -_, o ? u.css({
								marginLeft: "",
								marginTop: ""
							}) : u.css({
								marginRight: "",
								marginBottom: ""
							}), r.slidesPerColumn > 1 && (S = Math.floor(d / r.slidesPerColumn) === d / t.params.slidesPerColumn ? d : Math.ceil(d / r.slidesPerColumn) * r.slidesPerColumn, "auto" !== r.slidesPerView && "row" === r.slidesPerColumnFill && (S = Math.max(S, r.slidesPerView * r.slidesPerColumn)));
							for (var T, C, E, A = r.slidesPerColumn, L = S / A, P = Math.floor(d / r.slidesPerColumn), O = 0; O < d; O += 1) {
								D = 0;
								var I = u.eq(O);
								if (r.slidesPerColumn > 1) {
									var F = void 0,
										z = void 0,
										k = void 0;
									if ("row" === r.slidesPerColumnFill && r.slidesPerGroup > 1) {
										var R = Math.floor(O / (r.slidesPerGroup * r.slidesPerColumn)),
											B = O - r.slidesPerColumn * r.slidesPerGroup * R,
											U = 0 === R ? r.slidesPerGroup : Math.min(Math.ceil((d - R * A * r.slidesPerGroup) / A), r.slidesPerGroup);
										F = (z = B - (k = Math.floor(B / U)) * U + R * r.slidesPerGroup) + k * S / A, I.css({
											"-webkit-box-ordinal-group": F,
											"-moz-box-ordinal-group": F,
											"-ms-flex-order": F,
											"-webkit-order": F,
											order: F
										})
									} else "column" === r.slidesPerColumnFill ? (k = O - (z = Math.floor(O / A)) * A, (z > P || z === P && k === A - 1) && (k += 1) >= A && (k = 0, z += 1)) : z = O - (k = Math.floor(O / L)) * L;
									I.css(e("margin-top"), 0 !== k && r.spaceBetween && r.spaceBetween + "px")
								}
								if ("none" !== I.css("display")) {
									if ("auto" === r.slidesPerView) {
										var V = n.getComputedStyle(I[0], null),
											W = I[0].style.transform,
											G = I[0].style.webkitTransform;
										if (W && (I[0].style.transform = "none"), G && (I[0].style.webkitTransform = "none"), r.roundLengths) D = t.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
										else {
											var H = i(V, "width"),
												j = i(V, "padding-left"),
												q = i(V, "padding-right"),
												X = i(V, "margin-left"),
												Y = i(V, "margin-right"),
												Z = V.getPropertyValue(V, "box-sizing");
											if (Z && "border-box" === Z) D = H + X + Y;
											else {
												var J = I[0],
													$ = J.clientWidth;
												D = H + j + q + X + Y + (J.offsetWidth - $)
											}
										}
										W && (I[0].style.transform = W), G && (I[0].style.webkitTransform = G), r.roundLengths && (D = Math.floor(D))
									} else D = (a - (r.slidesPerView - 1) * _) / r.slidesPerView, r.roundLengths && (D = Math.floor(D)), u[O] && (u[O].style[e("width")] = D + "px");
									u[O] && (u[O].swiperSlideSize = D), m.push(D), r.centeredSlides ? (w = w + D / 2 + b / 2 + _, 0 === b && 0 !== O && (w = w - a / 2 - _), 0 === O && (w = w - a / 2 - _), Math.abs(w) < .001 && (w = 0), r.roundLengths && (w = Math.floor(w)), M % r.slidesPerGroup == 0 && p.push(w), f.push(w)) : (r.roundLengths && (w = Math.floor(w)), (M - Math.min(t.params.slidesPerGroupSkip, M)) % t.params.slidesPerGroup == 0 && p.push(w), f.push(w), w = w + D + _), t.virtualSize += D + _, b = D, M += 1
								}
							}
							if (t.virtualSize = Math.max(t.virtualSize, a) + v, o && l && ("slide" === r.effect || "coverflow" === r.effect) && s.css({
									width: t.virtualSize + r.spaceBetween + "px"
								}), r.setWrapperSize) s.css(((C = {})[e("width")] = t.virtualSize + r.spaceBetween + "px", C));
							if (r.slidesPerColumn > 1)
								if (t.virtualSize = (D + r.spaceBetween) * S, t.virtualSize = Math.ceil(t.virtualSize / r.slidesPerColumn) - r.spaceBetween, s.css(((E = {})[e("width")] = t.virtualSize + r.spaceBetween + "px", E)), r.centeredSlides) {
									T = [];
									for (var K = 0; K < p.length; K += 1) {
										var Q = p[K];
										r.roundLengths && (Q = Math.floor(Q)), p[K] < t.virtualSize + p[0] && T.push(Q)
									}
									p = T
								}
							if (!r.centeredSlides) {
								T = [];
								for (var tt = 0; tt < p.length; tt += 1) {
									var it = p[tt];
									r.roundLengths && (it = Math.floor(it)), p[tt] <= t.virtualSize - a && T.push(it)
								}
								p = T, Math.floor(t.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - a)
							}
							if (0 === p.length && (p = [0]), 0 !== r.spaceBetween) {
								var nt, rt = t.isHorizontal() && o ? "marginLeft" : e("marginRight");
								u.filter((function (t, e) {
									return !r.cssMode || e !== u.length - 1
								})).css(((nt = {})[rt] = _ + "px", nt))
							}
							if (r.centeredSlides && r.centeredSlidesBounds) {
								var st = 0;
								m.forEach((function (t) {
									st += t + (r.spaceBetween ? r.spaceBetween : 0)
								}));
								var at = (st -= r.spaceBetween) - a;
								p = p.map((function (t) {
									return t < 0 ? -g : t > at ? at + v : t
								}))
							}
							if (r.centerInsufficientSlides) {
								var ot = 0;
								if (m.forEach((function (t) {
										ot += t + (r.spaceBetween ? r.spaceBetween : 0)
									})), (ot -= r.spaceBetween) < a) {
									var lt = (a - ot) / 2;
									p.forEach((function (t, e) {
										p[e] = t - lt
									})), f.forEach((function (t, e) {
										f[e] = t + lt
									}))
								}
							}
							et(t, {
								slides: u,
								snapGrid: p,
								slidesGrid: f,
								slidesSizesGrid: m
							}), d !== h && t.emit("slidesLengthChange"), p.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== x && t.emit("slidesGridLengthChange"), (r.watchSlidesProgress || r.watchSlidesVisibility) && t.updateSlidesOffset()
						}
					},
					updateAutoHeight: function (t) {
						var e, i = this,
							n = [],
							r = 0;
						if ("number" == typeof t ? i.setTransition(t) : !0 === t && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
							if (i.params.centeredSlides) i.visibleSlides.each((function (t) {
								n.push(t)
							}));
							else
								for (e = 0; e < Math.ceil(i.params.slidesPerView); e += 1) {
									var s = i.activeIndex + e;
									if (s > i.slides.length) break;
									n.push(i.slides.eq(s)[0])
								} else n.push(i.slides.eq(i.activeIndex)[0]);
						for (e = 0; e < n.length; e += 1)
							if (void 0 !== n[e]) {
								var a = n[e].offsetHeight;
								r = a > r ? a : r
							}
						r && i.$wrapperEl.css("height", r + "px")
					},
					updateSlidesOffset: function () {
						for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
					},
					updateSlidesProgress: function (t) {
						void 0 === t && (t = this && this.translate || 0);
						var e = this,
							i = e.params,
							n = e.slides,
							r = e.rtlTranslate;
						if (0 !== n.length) {
							void 0 === n[0].swiperSlideOffset && e.updateSlidesOffset();
							var s = -t;
							r && (s = t), n.removeClass(i.slideVisibleClass), e.visibleSlidesIndexes = [], e.visibleSlides = [];
							for (var a = 0; a < n.length; a += 1) {
								var o = n[a],
									l = (s + (i.centeredSlides ? e.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
								if (i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) {
									var c = -(s - o.swiperSlideOffset),
										h = c + e.slidesSizesGrid[a];
									(c >= 0 && c < e.size - 1 || h > 1 && h <= e.size || c <= 0 && h >= e.size) && (e.visibleSlides.push(o), e.visibleSlidesIndexes.push(a), n.eq(a).addClass(i.slideVisibleClass))
								}
								o.progress = r ? -l : l
							}
							e.visibleSlides = $(e.visibleSlides)
						}
					},
					updateProgress: function (t) {
						var e = this;
						if (void 0 === t) {
							var i = e.rtlTranslate ? -1 : 1;
							t = e && e.translate && e.translate * i || 0
						}
						var n = e.params,
							r = e.maxTranslate() - e.minTranslate(),
							s = e.progress,
							a = e.isBeginning,
							o = e.isEnd,
							l = a,
							c = o;
						0 === r ? (s = 0, a = !0, o = !0) : (a = (s = (t - e.minTranslate()) / r) <= 0, o = s >= 1), et(e, {
							progress: s,
							isBeginning: a,
							isEnd: o
						}), (n.watchSlidesProgress || n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && e.updateSlidesProgress(t), a && !l && e.emit("reachBeginning toEdge"), o && !c && e.emit("reachEnd toEdge"), (l && !a || c && !o) && e.emit("fromEdge"), e.emit("progress", s)
					},
					updateSlidesClasses: function () {
						var t, e = this,
							i = e.slides,
							n = e.params,
							r = e.$wrapperEl,
							s = e.activeIndex,
							a = e.realIndex,
							o = e.virtual && n.virtual.enabled;
						i.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (t = o ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + s + '"]') : i.eq(s)).addClass(n.slideActiveClass), n.loop && (t.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass));
						var l = t.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
						n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
						var c = t.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
						n.loop && 0 === c.length && (c = i.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
					},
					updateActiveIndex: function (t) {
						var e, i = this,
							n = i.rtlTranslate ? i.translate : -i.translate,
							r = i.slidesGrid,
							s = i.snapGrid,
							a = i.params,
							o = i.activeIndex,
							l = i.realIndex,
							c = i.snapIndex,
							h = t;
						if (void 0 === h) {
							for (var u = 0; u < r.length; u += 1) void 0 !== r[u + 1] ? n >= r[u] && n < r[u + 1] - (r[u + 1] - r[u]) / 2 ? h = u : n >= r[u] && n < r[u + 1] && (h = u + 1) : n >= r[u] && (h = u);
							a.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
						}
						if (s.indexOf(n) >= 0) e = s.indexOf(n);
						else {
							var d = Math.min(a.slidesPerGroupSkip, h);
							e = d + Math.floor((h - d) / a.slidesPerGroup)
						}
						if (e >= s.length && (e = s.length - 1), h !== o) {
							var p = parseInt(i.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
							et(i, {
								snapIndex: e,
								realIndex: p,
								previousIndex: o,
								activeIndex: h
							}), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== p && i.emit("realIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
						} else e !== c && (i.snapIndex = e, i.emit("snapIndexChange"))
					},
					updateClickedSlide: function (t) {
						var e, i = this,
							n = i.params,
							r = $(t.target).closest("." + n.slideClass)[0],
							s = !1;
						if (r)
							for (var a = 0; a < i.slides.length; a += 1)
								if (i.slides[a] === r) {
									s = !0, e = a;
									break
								}
						if (!r || !s) return i.clickedSlide = void 0, void(i.clickedIndex = void 0);
						i.clickedSlide = r, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt($(r).attr("data-swiper-slide-index"), 10) : i.clickedIndex = e, n.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
					}
				},
				translate: {
					getTranslate: function (t) {
						void 0 === t && (t = this.isHorizontal() ? "x" : "y");
						var e = this,
							i = e.params,
							n = e.rtlTranslate,
							r = e.translate,
							s = e.$wrapperEl;
						if (i.virtualTranslate) return n ? -r : r;
						if (i.cssMode) return r;
						var a = function (t, e) {
							void 0 === e && (e = "x");
							var i, n, r, s = N(),
								a = s.getComputedStyle(t, null);
							return s.WebKitCSSMatrix ? ((n = a.transform || a.webkitTransform).split(",").length > 6 && (n = n.split(", ").map((function (t) {
								return t.replace(",", ".")
							})).join(", ")), r = new s.WebKitCSSMatrix("none" === n ? "" : n)) : i = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === e && (n = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (n = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
						}(s[0], t);
						return n && (a = -a), a || 0
					},
					setTranslate: function (t, e) {
						var i = this,
							n = i.rtlTranslate,
							r = i.params,
							s = i.$wrapperEl,
							a = i.wrapperEl,
							o = i.progress,
							l = 0,
							c = 0;
						i.isHorizontal() ? l = n ? -t : t : c = t, r.roundLengths && (l = Math.floor(l), c = Math.floor(c)), r.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -c : r.virtualTranslate || s.transform("translate3d(" + l + "px, " + c + "px, 0px)"), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : c;
						var h = i.maxTranslate() - i.minTranslate();
						(0 === h ? 0 : (t - i.minTranslate()) / h) !== o && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
					},
					minTranslate: function () {
						return -this.snapGrid[0]
					},
					maxTranslate: function () {
						return -this.snapGrid[this.snapGrid.length - 1]
					},
					translateTo: function (t, e, i, n, r) {
						void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
						var s = this,
							a = s.params,
							o = s.wrapperEl;
						if (s.animating && a.preventInteractionOnTransition) return !1;
						var l, c = s.minTranslate(),
							h = s.maxTranslate();
						if (l = n && t > c ? c : n && t < h ? h : t, s.updateProgress(l), a.cssMode) {
							var u, d = s.isHorizontal();
							if (0 === e) o[d ? "scrollLeft" : "scrollTop"] = -l;
							else if (o.scrollTo) o.scrollTo(((u = {})[d ? "left" : "top"] = -l, u.behavior = "smooth", u));
							else o[d ? "scrollLeft" : "scrollTop"] = -l;
							return !0
						}
						return 0 === e ? (s.setTransition(0), s.setTranslate(l), i && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(l), i && (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (t) {
							s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, i && s.emit("transitionEnd"))
						}), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0
					}
				},
				transition: {
					setTransition: function (t, e) {
						var i = this;
						i.params.cssMode || i.$wrapperEl.transition(t), i.emit("setTransition", t, e)
					},
					transitionStart: function (t, e) {
						void 0 === t && (t = !0);
						var i = this,
							n = i.activeIndex,
							r = i.params,
							s = i.previousIndex;
						if (!r.cssMode) {
							r.autoHeight && i.updateAutoHeight();
							var a = e;
							if (a || (a = n > s ? "next" : n < s ? "prev" : "reset"), i.emit("transitionStart"), t && n !== s) {
								if ("reset" === a) return void i.emit("slideResetTransitionStart");
								i.emit("slideChangeTransitionStart"), "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
							}
						}
					},
					transitionEnd: function (t, e) {
						void 0 === t && (t = !0);
						var i = this,
							n = i.activeIndex,
							r = i.previousIndex,
							s = i.params;
						if (i.animating = !1, !s.cssMode) {
							i.setTransition(0);
							var a = e;
							if (a || (a = n > r ? "next" : n < r ? "prev" : "reset"), i.emit("transitionEnd"), t && n !== r) {
								if ("reset" === a) return void i.emit("slideResetTransitionEnd");
								i.emit("slideChangeTransitionEnd"), "next" === a ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
							}
						}
					}
				},
				slide: {
					slideTo: function (t, e, i, n) {
						if (void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), "number" != typeof t && "string" != typeof t) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof t + "] given.");
						if ("string" == typeof t) {
							var r = parseInt(t, 10);
							if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + t + "] given.");
							t = r
						}
						var s = this,
							a = t;
						a < 0 && (a = 0);
						var o = s.params,
							l = s.snapGrid,
							c = s.slidesGrid,
							h = s.previousIndex,
							u = s.activeIndex,
							d = s.rtlTranslate,
							p = s.wrapperEl;
						if (s.animating && o.preventInteractionOnTransition) return !1;
						var f = Math.min(s.params.slidesPerGroupSkip, a),
							m = f + Math.floor((a - f) / s.params.slidesPerGroup);
						m >= l.length && (m = l.length - 1), (u || o.initialSlide || 0) === (h || 0) && i && s.emit("beforeSlideChangeStart");
						var g, v = -l[m];
						if (s.updateProgress(v), o.normalizeSlideIndex)
							for (var y = 0; y < c.length; y += 1) {
								var x = -Math.floor(100 * v),
									_ = Math.floor(100 * c[y]),
									w = Math.floor(100 * c[y + 1]);
								void 0 !== c[y + 1] ? x >= _ && x < w - (w - _) / 2 ? a = y : x >= _ && x < w && (a = y + 1) : x >= _ && (a = y)
							}
						if (s.initialized && a !== u) {
							if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
							if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (u || 0) !== a) return !1
						}
						if (g = a > u ? "next" : a < u ? "prev" : "reset", d && -v === s.translate || !d && v === s.translate) return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(v), "reset" !== g && (s.transitionStart(i, g), s.transitionEnd(i, g)), !1;
						if (o.cssMode) {
							var b, M = s.isHorizontal(),
								S = -v;
							if (d && (S = p.scrollWidth - p.offsetWidth - S), 0 === e) p[M ? "scrollLeft" : "scrollTop"] = S;
							else if (p.scrollTo) p.scrollTo(((b = {})[M ? "left" : "top"] = S, b.behavior = "smooth", b));
							else p[M ? "scrollLeft" : "scrollTop"] = S;
							return !0
						}
						return 0 === e ? (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, g), s.transitionEnd(i, g)) : (s.setTransition(e), s.setTranslate(v), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, g), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (t) {
							s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, g))
						}), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))), !0
					},
					slideToLoop: function (t, e, i, n) {
						void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
						var r = this,
							s = t;
						return r.params.loop && (s += r.loopedSlides), r.slideTo(s, e, i, n)
					},
					slideNext: function (t, e, i) {
						void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
						var n = this,
							r = n.params,
							s = n.animating,
							a = n.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
						if (r.loop) {
							if (s && r.loopPreventsSlide) return !1;
							n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
						}
						return n.slideTo(n.activeIndex + a, t, e, i)
					},
					slidePrev: function (t, e, i) {
						void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
						var n = this,
							r = n.params,
							s = n.animating,
							a = n.snapGrid,
							o = n.slidesGrid,
							l = n.rtlTranslate;
						if (r.loop) {
							if (s && r.loopPreventsSlide) return !1;
							n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
						}

						function c(t) {
							return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
						}
						var h, u = c(l ? n.translate : -n.translate),
							d = a.map((function (t) {
								return c(t)
							})),
							p = (a[d.indexOf(u)], a[d.indexOf(u) - 1]);
						return void 0 === p && r.cssMode && a.forEach((function (t) {
							!p && u >= t && (p = t)
						})), void 0 !== p && (h = o.indexOf(p)) < 0 && (h = n.activeIndex - 1), n.slideTo(h, t, e, i)
					},
					slideReset: function (t, e, i) {
						return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i)
					},
					slideToClosest: function (t, e, i, n) {
						void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === n && (n = .5);
						var r = this,
							s = r.activeIndex,
							a = Math.min(r.params.slidesPerGroupSkip, s),
							o = a + Math.floor((s - a) / r.params.slidesPerGroup),
							l = r.rtlTranslate ? r.translate : -r.translate;
						if (l >= r.snapGrid[o]) {
							var c = r.snapGrid[o];
							l - c > (r.snapGrid[o + 1] - c) * n && (s += r.params.slidesPerGroup)
						} else {
							var h = r.snapGrid[o - 1];
							l - h <= (r.snapGrid[o] - h) * n && (s -= r.params.slidesPerGroup)
						}
						return s = Math.max(s, 0), s = Math.min(s, r.slidesGrid.length - 1), r.slideTo(s, t, e, i)
					},
					slideToClickedSlide: function () {
						var t, e = this,
							i = e.params,
							n = e.$wrapperEl,
							r = "auto" === i.slidesPerView ? e.slidesPerViewDynamic() : i.slidesPerView,
							s = e.clickedIndex;
						if (i.loop) {
							if (e.animating) return;
							t = parseInt($(e.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? s < e.loopedSlides - r / 2 || s > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), s = n.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), K((function () {
								e.slideTo(s)
							}))) : e.slideTo(s) : s > e.slides.length - r ? (e.loopFix(), s = n.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), K((function () {
								e.slideTo(s)
							}))) : e.slideTo(s)
						} else e.slideTo(s)
					}
				},
				loop: {
					loopCreate: function () {
						var t = this,
							e = I(),
							i = t.params,
							n = t.$wrapperEl;
						n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
						var r = n.children("." + i.slideClass);
						if (i.loopFillGroupWithBlank) {
							var s = i.slidesPerGroup - r.length % i.slidesPerGroup;
							if (s !== i.slidesPerGroup) {
								for (var a = 0; a < s; a += 1) {
									var o = $(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
									n.append(o)
								}
								r = n.children("." + i.slideClass)
							}
						}
						"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
						var l = [],
							c = [];
						r.each((function (e, i) {
							var n = $(e);
							i < t.loopedSlides && c.push(e), i < r.length && i >= r.length - t.loopedSlides && l.push(e), n.attr("data-swiper-slide-index", i)
						}));
						for (var h = 0; h < c.length; h += 1) n.append($(c[h].cloneNode(!0)).addClass(i.slideDuplicateClass));
						for (var u = l.length - 1; u >= 0; u -= 1) n.prepend($(l[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
					},
					loopFix: function () {
						var t = this;
						t.emit("beforeLoopFix");
						var e, i = t.activeIndex,
							n = t.slides,
							r = t.loopedSlides,
							s = t.allowSlidePrev,
							a = t.allowSlideNext,
							o = t.snapGrid,
							l = t.rtlTranslate;
						t.allowSlidePrev = !0, t.allowSlideNext = !0;
						var c = -o[i] - t.getTranslate();
						if (i < r) e = n.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((l ? -t.translate : t.translate) - c);
						else if (i >= n.length - r) {
							e = -n.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((l ? -t.translate : t.translate) - c)
						}
						t.allowSlidePrev = s, t.allowSlideNext = a, t.emit("loopFix")
					},
					loopDestroy: function () {
						var t = this,
							e = t.$wrapperEl,
							i = t.params,
							n = t.slides;
						e.children("." + i.slideClass + "." + i.slideDuplicateClass + ",." + i.slideClass + "." + i.slideBlankClass).remove(), n.removeAttr("data-swiper-slide-index")
					}
				},
				grabCursor: {
					setGrabCursor: function (t) {
						var e = this;
						if (!(e.support.touch || !e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)) {
							var i = e.el;
							i.style.cursor = "move", i.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", i.style.cursor = t ? "-moz-grabbin" : "-moz-grab", i.style.cursor = t ? "grabbing" : "grab"
						}
					},
					unsetGrabCursor: function () {
						var t = this;
						t.support.touch || t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.el.style.cursor = "")
					}
				},
				manipulation: {
					appendSlide: function (t) {
						var e = this,
							i = e.$wrapperEl,
							n = e.params;
						if (n.loop && e.loopDestroy(), "object" == typeof t && "length" in t)
							for (var r = 0; r < t.length; r += 1) t[r] && i.append(t[r]);
						else i.append(t);
						n.loop && e.loopCreate(), n.observer && e.support.observer || e.update()
					},
					prependSlide: function (t) {
						var e = this,
							i = e.params,
							n = e.$wrapperEl,
							r = e.activeIndex;
						i.loop && e.loopDestroy();
						var s = r + 1;
						if ("object" == typeof t && "length" in t) {
							for (var a = 0; a < t.length; a += 1) t[a] && n.prepend(t[a]);
							s = r + t.length
						} else n.prepend(t);
						i.loop && e.loopCreate(), i.observer && e.support.observer || e.update(), e.slideTo(s, 0, !1)
					},
					addSlide: function (t, e) {
						var i = this,
							n = i.$wrapperEl,
							r = i.params,
							s = i.activeIndex;
						r.loop && (s -= i.loopedSlides, i.loopDestroy(), i.slides = n.children("." + r.slideClass));
						var a = i.slides.length;
						if (t <= 0) i.prependSlide(e);
						else if (t >= a) i.appendSlide(e);
						else {
							for (var o = s > t ? s + 1 : s, l = [], c = a - 1; c >= t; c -= 1) {
								var h = i.slides.eq(c);
								h.remove(), l.unshift(h)
							}
							if ("object" == typeof e && "length" in e) {
								for (var u = 0; u < e.length; u += 1) e[u] && n.append(e[u]);
								o = s > t ? s + e.length : s
							} else n.append(e);
							for (var d = 0; d < l.length; d += 1) n.append(l[d]);
							r.loop && i.loopCreate(), r.observer && i.support.observer || i.update(), r.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
						}
					},
					removeSlide: function (t) {
						var e = this,
							i = e.params,
							n = e.$wrapperEl,
							r = e.activeIndex;
						i.loop && (r -= e.loopedSlides, e.loopDestroy(), e.slides = n.children("." + i.slideClass));
						var s, a = r;
						if ("object" == typeof t && "length" in t) {
							for (var o = 0; o < t.length; o += 1) s = t[o], e.slides[s] && e.slides.eq(s).remove(), s < a && (a -= 1);
							a = Math.max(a, 0)
						} else s = t, e.slides[s] && e.slides.eq(s).remove(), s < a && (a -= 1), a = Math.max(a, 0);
						i.loop && e.loopCreate(), i.observer && e.support.observer || e.update(), i.loop ? e.slideTo(a + e.loopedSlides, 0, !1) : e.slideTo(a, 0, !1)
					},
					removeAllSlides: function () {
						for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
						this.removeSlide(t)
					}
				},
				events: {
					attachEvents: function () {
						var t = this,
							e = I(),
							i = t.params,
							n = t.touchEvents,
							r = t.el,
							s = t.wrapperEl,
							a = t.device,
							o = t.support;
						t.onTouchStart = ht.bind(t), t.onTouchMove = ut.bind(t), t.onTouchEnd = dt.bind(t), i.cssMode && (t.onScroll = mt.bind(t)), t.onClick = ft.bind(t);
						var l = !!i.nested;
						if (!o.touch && o.pointerEvents) r.addEventListener(n.start, t.onTouchStart, !1), e.addEventListener(n.move, t.onTouchMove, l), e.addEventListener(n.end, t.onTouchEnd, !1);
						else {
							if (o.touch) {
								var c = !("touchstart" !== n.start || !o.passiveListener || !i.passiveListeners) && {
									passive: !0,
									capture: !1
								};
								r.addEventListener(n.start, t.onTouchStart, c), r.addEventListener(n.move, t.onTouchMove, o.passiveListener ? {
									passive: !1,
									capture: l
								} : l), r.addEventListener(n.end, t.onTouchEnd, c), n.cancel && r.addEventListener(n.cancel, t.onTouchEnd, c), gt || (e.addEventListener("touchstart", vt), gt = !0)
							}(i.simulateTouch && !a.ios && !a.android || i.simulateTouch && !o.touch && a.ios) && (r.addEventListener("mousedown", t.onTouchStart, !1), e.addEventListener("mousemove", t.onTouchMove, l), e.addEventListener("mouseup", t.onTouchEnd, !1))
						}(i.preventClicks || i.preventClicksPropagation) && r.addEventListener("click", t.onClick, !0), i.cssMode && s.addEventListener("scroll", t.onScroll), i.updateOnWindowResize ? t.on(a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", pt, !0) : t.on("observerUpdate", pt, !0)
					},
					detachEvents: function () {
						var t = this,
							e = I(),
							i = t.params,
							n = t.touchEvents,
							r = t.el,
							s = t.wrapperEl,
							a = t.device,
							o = t.support,
							l = !!i.nested;
						if (!o.touch && o.pointerEvents) r.removeEventListener(n.start, t.onTouchStart, !1), e.removeEventListener(n.move, t.onTouchMove, l), e.removeEventListener(n.end, t.onTouchEnd, !1);
						else {
							if (o.touch) {
								var c = !("onTouchStart" !== n.start || !o.passiveListener || !i.passiveListeners) && {
									passive: !0,
									capture: !1
								};
								r.removeEventListener(n.start, t.onTouchStart, c), r.removeEventListener(n.move, t.onTouchMove, l), r.removeEventListener(n.end, t.onTouchEnd, c), n.cancel && r.removeEventListener(n.cancel, t.onTouchEnd, c)
							}(i.simulateTouch && !a.ios && !a.android || i.simulateTouch && !o.touch && a.ios) && (r.removeEventListener("mousedown", t.onTouchStart, !1), e.removeEventListener("mousemove", t.onTouchMove, l), e.removeEventListener("mouseup", t.onTouchEnd, !1))
						}(i.preventClicks || i.preventClicksPropagation) && r.removeEventListener("click", t.onClick, !0), i.cssMode && s.removeEventListener("scroll", t.onScroll), t.off(a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", pt)
					}
				},
				breakpoints: {
					setBreakpoint: function () {
						var t = this,
							e = t.activeIndex,
							i = t.initialized,
							n = t.loopedSlides,
							r = void 0 === n ? 0 : n,
							s = t.params,
							a = t.$el,
							o = s.breakpoints;
						if (o && (!o || 0 !== Object.keys(o).length)) {
							var l = t.getBreakpoint(o, t.params.breakpointsBase, t.el);
							if (l && t.currentBreakpoint !== l) {
								var c = l in o ? o[l] : void 0;
								c && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function (t) {
									var e = c[t];
									void 0 !== e && (c[t] = "slidesPerView" !== t || "AUTO" !== e && "auto" !== e ? "slidesPerView" === t ? parseFloat(e) : parseInt(e, 10) : "auto")
								}));
								var h = c || t.originalParams,
									u = s.slidesPerColumn > 1,
									d = h.slidesPerColumn > 1;
								u && !d ? (a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column"), t.emitContainerClasses()) : !u && d && (a.addClass(s.containerModifierClass + "multirow"), "column" === h.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"), t.emitContainerClasses());
								var p = h.direction && h.direction !== s.direction,
									f = s.loop && (h.slidesPerView !== s.slidesPerView || p);
								p && i && t.changeDirection(), et(t.params, h), et(t, {
									allowTouchMove: t.params.allowTouchMove,
									allowSlideNext: t.params.allowSlideNext,
									allowSlidePrev: t.params.allowSlidePrev
								}), t.currentBreakpoint = l, t.emit("_beforeBreakpoint", h), f && i && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - r + t.loopedSlides, 0, !1)), t.emit("breakpoint", h)
							}
						}
					},
					getBreakpoint: function (t, e, i) {
						if (void 0 === e && (e = "window"), t && ("container" !== e || i)) {
							var n = !1,
								r = N(),
								s = "window" === e ? r.innerWidth : i.clientWidth,
								a = "window" === e ? r.innerHeight : i.clientHeight,
								o = Object.keys(t).map((function (t) {
									if ("string" == typeof t && 0 === t.indexOf("@")) {
										var e = parseFloat(t.substr(1));
										return {
											value: a * e,
											point: t
										}
									}
									return {
										value: t,
										point: t
									}
								}));
							o.sort((function (t, e) {
								return parseInt(t.value, 10) - parseInt(e.value, 10)
							}));
							for (var l = 0; l < o.length; l += 1) {
								var c = o[l],
									h = c.point;
								c.value <= s && (n = h)
							}
							return n || "max"
						}
					}
				},
				checkOverflow: {
					checkOverflow: function () {
						var t = this,
							e = t.params,
							i = t.isLocked,
							n = t.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (t.slides.length - 1) + t.slides[0].offsetWidth * t.slides.length;
						e.slidesOffsetBefore && e.slidesOffsetAfter && n ? t.isLocked = n <= t.size : t.isLocked = 1 === t.snapGrid.length, t.allowSlideNext = !t.isLocked, t.allowSlidePrev = !t.isLocked, i !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock"), i && i !== t.isLocked && (t.isEnd = !1, t.navigation && t.navigation.update())
					}
				},
				classes: {
					addClasses: function () {
						var t = this,
							e = t.classNames,
							i = t.params,
							n = t.rtl,
							r = t.$el,
							s = t.device,
							a = t.support,
							o = function (t, e) {
								var i = [];
								return t.forEach((function (t) {
									"object" == typeof t ? Object.entries(t).forEach((function (t) {
										var n = t[0];
										t[1] && i.push(e + n)
									})) : "string" == typeof t && i.push(e + t)
								})), i
							}(["initialized", i.direction, {
								"pointer-events": a.pointerEvents && !a.touch
							}, {
								"free-mode": i.freeMode
							}, {
								autoheight: i.autoHeight
							}, {
								rtl: n
							}, {
								multirow: i.slidesPerColumn > 1
							}, {
								"multirow-column": i.slidesPerColumn > 1 && "column" === i.slidesPerColumnFill
							}, {
								android: s.android
							}, {
								ios: s.ios
							}, {
								"css-mode": i.cssMode
							}], i.containerModifierClass);
						e.push.apply(e, o), r.addClass([].concat(e).join(" ")), t.emitContainerClasses()
					},
					removeClasses: function () {
						var t = this,
							e = t.$el,
							i = t.classNames;
						e.removeClass(i.join(" ")), t.emitContainerClasses()
					}
				},
				images: {
					loadImage: function (t, e, i, n, r, s) {
						var a, o = N();

						function l() {
							s && s()
						}
						$(t).parent("picture")[0] || t.complete && r ? l() : e ? ((a = new o.Image).onload = l, a.onerror = l, n && (a.sizes = n), i && (a.srcset = i), e && (a.src = e)) : l()
					},
					preloadImages: function () {
						var t = this;

						function e() {
							null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
						}
						t.imagesToLoad = t.$el.find("img");
						for (var i = 0; i < t.imagesToLoad.length; i += 1) {
							var n = t.imagesToLoad[i];
							t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
						}
					}
				}
			},
			wt = {},
			bt = function () {
				function t() {
					for (var e, i, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
					if (1 === r.length && r[0].constructor && r[0].constructor === Object ? i = r[0] : (e = r[0], i = r[1]), i || (i = {}), i = et({}, i), e && !i.el && (i.el = e), i.el && $(i.el).length > 1) {
						var a = [];
						return $(i.el).each((function (e) {
							var n = et({}, i, {
								el: e
							});
							a.push(new t(n))
						})), a
					}
					var o = this;
					o.support = nt(), o.device = rt({
						userAgent: i.userAgent
					}), o.browser = st(), o.eventsListeners = {}, o.eventsAnyListeners = [], void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach((function (t) {
						var e = o.modules[t];
						if (e.params) {
							var n = Object.keys(e.params)[0],
								r = e.params[n];
							if ("object" != typeof r || null === r) return;
							if (!(n in i) || !("enabled" in r)) return;
							!0 === i[n] && (i[n] = {
								enabled: !0
							}), "object" != typeof i[n] || "enabled" in i[n] || (i[n].enabled = !0), i[n] || (i[n] = {
								enabled: !1
							})
						}
					}));
					var l = et({}, yt);
					return o.useParams(l), o.params = et({}, l, wt, i), o.originalParams = et({}, o.params), o.passedParams = et({}, i), o.params && o.params.on && Object.keys(o.params.on).forEach((function (t) {
						o.on(t, o.params.on[t])
					})), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = $, et(o, {
						el: e,
						classNames: [],
						slides: $(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function () {
							return "horizontal" === o.params.direction
						},
						isVertical: function () {
							return "vertical" === o.params.direction
						},
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: o.params.allowSlideNext,
						allowSlidePrev: o.params.allowSlidePrev,
						touchEvents: function () {
							var t = ["touchstart", "touchmove", "touchend", "touchcancel"],
								e = ["mousedown", "mousemove", "mouseup"];
							return o.support.pointerEvents && (e = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
								start: t[0],
								move: t[1],
								end: t[2],
								cancel: t[3]
							}, o.touchEventsDesktop = {
								start: e[0],
								move: e[1],
								end: e[2]
							}, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop
						}(),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video, label",
							lastClickTime: Q(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: o.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o
				}
				var e = t.prototype;
				return e.emitContainerClasses = function () {
						var t = this;
						if (t.params._emitClasses && t.el) {
							var e = t.el.className.split(" ").filter((function (e) {
								return 0 === e.indexOf("swiper-container") || 0 === e.indexOf(t.params.containerModifierClass)
							}));
							t.emit("_containerClasses", e.join(" "))
						}
					}, e.getSlideClasses = function (t) {
						var e = this;
						return t.className.split(" ").filter((function (t) {
							return 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass)
						})).join(" ")
					}, e.emitSlidesClasses = function () {
						var t = this;
						if (t.params._emitClasses && t.el) {
							var e = [];
							t.slides.each((function (i) {
								var n = t.getSlideClasses(i);
								e.push({
									slideEl: i,
									classNames: n
								}), t.emit("_slideClass", i, n)
							})), t.emit("_slideClasses", e)
						}
					}, e.slidesPerViewDynamic = function () {
						var t = this,
							e = t.params,
							i = t.slides,
							n = t.slidesGrid,
							r = t.size,
							s = t.activeIndex,
							a = 1;
						if (e.centeredSlides) {
							for (var o, l = i[s].swiperSlideSize, c = s + 1; c < i.length; c += 1) i[c] && !o && (a += 1, (l += i[c].swiperSlideSize) > r && (o = !0));
							for (var h = s - 1; h >= 0; h -= 1) i[h] && !o && (a += 1, (l += i[h].swiperSlideSize) > r && (o = !0))
						} else
							for (var u = s + 1; u < i.length; u += 1) n[u] - n[s] < r && (a += 1);
						return a
					}, e.update = function () {
						var t = this;
						if (t && !t.destroyed) {
							var e = t.snapGrid,
								i = t.params;
							i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (n(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
						}

						function n() {
							var e = t.rtlTranslate ? -1 * t.translate : t.translate,
								i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
							t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
						}
					}, e.changeDirection = function (t, e) {
						void 0 === e && (e = !0);
						var i = this,
							n = i.params.direction;
						return t || (t = "horizontal" === n ? "vertical" : "horizontal"), t === n || "horizontal" !== t && "vertical" !== t || (i.$el.removeClass("" + i.params.containerModifierClass + n).addClass("" + i.params.containerModifierClass + t), i.emitContainerClasses(), i.params.direction = t, i.slides.each((function (e) {
							"vertical" === t ? e.style.width = "" : e.style.height = ""
						})), i.emit("changeDirection"), e && i.update()), i
					}, e.mount = function (t) {
						var e = this;
						if (e.mounted) return !0;
						var i, n = $(t || e.params.el);
						return !!(t = n[0]) && (t.swiper = e, t && t.shadowRoot && t.shadowRoot.querySelector ? (i = $(t.shadowRoot.querySelector("." + e.params.wrapperClass))).children = function (t) {
							return n.children(t)
						} : i = n.children("." + e.params.wrapperClass), et(e, {
							$el: n,
							el: t,
							$wrapperEl: i,
							wrapperEl: i[0],
							mounted: !0,
							rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
							rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
							wrongRTL: "-webkit-box" === i.css("display")
						}), !0)
					}, e.init = function (t) {
						var e = this;
						return e.initialized || !1 === e.mount(t) || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"), e.emit("afterInit")), e
					}, e.destroy = function (t, e) {
						void 0 === t && (t = !0), void 0 === e && (e = !0);
						var i = this,
							n = i.params,
							r = i.$el,
							s = i.$wrapperEl,
							a = i.slides;
						return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), e && (i.removeClasses(), r.removeAttr("style"), s.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (t) {
							i.off(t)
						})), !1 !== t && (i.$el[0].swiper = null, function (t) {
							var e = t;
							Object.keys(e).forEach((function (t) {
								try {
									e[t] = null
								} catch (t) {}
								try {
									delete e[t]
								} catch (t) {}
							}))
						}(i)), i.destroyed = !0), null
					}, t.extendDefaults = function (t) {
						et(wt, t)
					}, t.installModule = function (e) {
						t.prototype.modules || (t.prototype.modules = {});
						var i = e.name || Object.keys(t.prototype.modules).length + "_" + Q();
						t.prototype.modules[i] = e
					}, t.use = function (e) {
						return Array.isArray(e) ? (e.forEach((function (e) {
							return t.installModule(e)
						})), t) : (t.installModule(e), t)
					},
					function (t, e, i) {
						e && xt(t.prototype, e), i && xt(t, i)
					}(t, null, [{
						key: "extendedDefaults",
						get: function () {
							return wt
						}
					}, {
						key: "defaults",
						get: function () {
							return yt
						}
					}]), t
			}();
		Object.keys(_t).forEach((function (t) {
			Object.keys(_t[t]).forEach((function (e) {
				bt.prototype[e] = _t[t][e]
			}))
		})), bt.use([at, ct]);
		var Mt = bt;

		function St() {
			return (St = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
				}
				return t
			}).apply(this, arguments)
		}
		var Dt = {
				update: function () {
					var t = this,
						e = t.params.navigation;
					if (!t.params.loop) {
						var i = t.navigation,
							n = i.$nextEl,
							r = i.$prevEl;
						r && r.length > 0 && (t.isBeginning ? r.addClass(e.disabledClass) : r.removeClass(e.disabledClass), r[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](e.lockClass)), n && n.length > 0 && (t.isEnd ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](e.lockClass))
					}
				},
				onPrevClick: function (t) {
					var e = this;
					t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev()
				},
				onNextClick: function (t) {
					var e = this;
					t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext()
				},
				init: function () {
					var t, e, i = this,
						n = i.params.navigation;
					(n.nextEl || n.prevEl) && (n.nextEl && (t = $(n.nextEl), i.params.uniqueNavElements && "string" == typeof n.nextEl && t.length > 1 && 1 === i.$el.find(n.nextEl).length && (t = i.$el.find(n.nextEl))), n.prevEl && (e = $(n.prevEl), i.params.uniqueNavElements && "string" == typeof n.prevEl && e.length > 1 && 1 === i.$el.find(n.prevEl).length && (e = i.$el.find(n.prevEl))), t && t.length > 0 && t.on("click", i.navigation.onNextClick), e && e.length > 0 && e.on("click", i.navigation.onPrevClick), et(i.navigation, {
						$nextEl: t,
						nextEl: t && t[0],
						$prevEl: e,
						prevEl: e && e[0]
					}))
				},
				destroy: function () {
					var t = this,
						e = t.navigation,
						i = e.$nextEl,
						n = e.$prevEl;
					i && i.length && (i.off("click", t.navigation.onNextClick), i.removeClass(t.params.navigation.disabledClass)), n && n.length && (n.off("click", t.navigation.onPrevClick), n.removeClass(t.params.navigation.disabledClass))
				}
			},
			Tt = {
				name: "navigation",
				params: {
					navigation: {
						nextEl: null,
						prevEl: null,
						hideOnClick: !1,
						disabledClass: "swiper-button-disabled",
						hiddenClass: "swiper-button-hidden",
						lockClass: "swiper-button-lock"
					}
				},
				create: function () {
					it(this, {
						navigation: St({}, Dt)
					})
				},
				on: {
					init: function (t) {
						t.navigation.init(), t.navigation.update()
					},
					toEdge: function (t) {
						t.navigation.update()
					},
					fromEdge: function (t) {
						t.navigation.update()
					},
					destroy: function (t) {
						t.navigation.destroy()
					},
					click: function (t, e) {
						var i = t.navigation,
							n = i.$nextEl,
							r = i.$prevEl,
							s = e.target;
						if (t.params.navigation.hideOnClick && !$(s).is(r) && !$(s).is(n)) {
							if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === s || t.pagination.el.contains(s))) return;
							var a;
							n ? a = n.hasClass(t.params.navigation.hiddenClass) : r && (a = r.hasClass(t.params.navigation.hiddenClass)), !0 === a ? t.emit("navigationShow") : t.emit("navigationHide"), n && n.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
						}
					}
				}
			};

		function Ct() {
			return (Ct = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
				}
				return t
			}).apply(this, arguments)
		}
		var Et = {
				update: function () {
					var t = this,
						e = t.rtl,
						i = t.params.pagination;
					if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
						var n, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
							s = t.pagination.$el,
							a = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
						if (t.params.loop ? ((n = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (n -= r - 2 * t.loopedSlides), n > a - 1 && (n -= a), n < 0 && "bullets" !== t.params.paginationType && (n = a + n)) : n = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
							var o, l, c, h = t.pagination.bullets;
							if (i.dynamicBullets && (t.pagination.bulletSize = h.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += n - t.previousIndex, t.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), o = n - t.pagination.dynamicBulletIndex, c = ((l = o + (Math.min(h.length, i.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), s.length > 1) h.each((function (t) {
								var e = $(t),
									r = e.index();
								r === n && e.addClass(i.bulletActiveClass), i.dynamicBullets && (r >= o && r <= l && e.addClass(i.bulletActiveClass + "-main"), r === o && e.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r === l && e.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
							}));
							else {
								var u = h.eq(n),
									d = u.index();
								if (u.addClass(i.bulletActiveClass), i.dynamicBullets) {
									for (var p = h.eq(o), f = h.eq(l), m = o; m <= l; m += 1) h.eq(m).addClass(i.bulletActiveClass + "-main");
									if (t.params.loop)
										if (d >= h.length - i.dynamicMainBullets) {
											for (var g = i.dynamicMainBullets; g >= 0; g -= 1) h.eq(h.length - g).addClass(i.bulletActiveClass + "-main");
											h.eq(h.length - i.dynamicMainBullets - 1).addClass(i.bulletActiveClass + "-prev")
										} else p.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), f.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next");
									else p.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), f.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
								}
							}
							if (i.dynamicBullets) {
								var v = Math.min(h.length, i.dynamicMainBullets + 4),
									y = (t.pagination.bulletSize * v - t.pagination.bulletSize) / 2 - c * t.pagination.bulletSize,
									x = e ? "right" : "left";
								h.css(t.isHorizontal() ? x : "top", y + "px")
							}
						}
						if ("fraction" === i.type && (s.find("." + i.currentClass).text(i.formatFractionCurrent(n + 1)), s.find("." + i.totalClass).text(i.formatFractionTotal(a))), "progressbar" === i.type) {
							var _;
							_ = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
							var w = (n + 1) / a,
								b = 1,
								M = 1;
							"horizontal" === _ ? b = w : M = w, s.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + M + ")").transition(t.params.speed)
						}
						"custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(t, n + 1, a)), t.emit("paginationRender", s[0])) : t.emit("paginationUpdate", s[0]), s[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](i.lockClass)
					}
				},
				render: function () {
					var t = this,
						e = t.params.pagination;
					if (e.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
						var i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
							n = t.pagination.$el,
							r = "";
						if ("bullets" === e.type) {
							var s = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
							t.params.freeMode && !t.params.loop && s > i && (s = i);
							for (var a = 0; a < s; a += 1) e.renderBullet ? r += e.renderBullet.call(t, a, e.bulletClass) : r += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
							n.html(r), t.pagination.bullets = n.find("." + e.bulletClass.replace(/ /g, "."))
						}
						"fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', n.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', n.html(r)), "custom" !== e.type && t.emit("paginationRender", t.pagination.$el[0])
					}
				},
				init: function () {
					var t = this,
						e = t.params.pagination;
					if (e.el) {
						var i = $(e.el);
						0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && (i = t.$el.find(e.el)), "bullets" === e.type && e.clickable && i.addClass(e.clickableClass), i.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (i.addClass("" + e.modifierClass + e.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass), e.clickable && i.on("click", "." + e.bulletClass.replace(/ /g, "."), (function (e) {
							e.preventDefault();
							var i = $(this).index() * t.params.slidesPerGroup;
							t.params.loop && (i += t.loopedSlides), t.slideTo(i)
						})), et(t.pagination, {
							$el: i,
							el: i[0]
						}))
					}
				},
				destroy: function () {
					var t = this,
						e = t.params.pagination;
					if (e.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
						var i = t.pagination.$el;
						i.removeClass(e.hiddenClass), i.removeClass(e.modifierClass + e.type), t.pagination.bullets && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && i.off("click", "." + e.bulletClass.replace(/ /g, "."))
					}
				}
			},
			At = {
				name: "pagination",
				params: {
					pagination: {
						el: null,
						bulletElement: "span",
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						progressbarOpposite: !1,
						type: "bullets",
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						formatFractionCurrent: function (t) {
							return t
						},
						formatFractionTotal: function (t) {
							return t
						},
						bulletClass: "swiper-pagination-bullet",
						bulletActiveClass: "swiper-pagination-bullet-active",
						modifierClass: "swiper-pagination-",
						currentClass: "swiper-pagination-current",
						totalClass: "swiper-pagination-total",
						hiddenClass: "swiper-pagination-hidden",
						progressbarFillClass: "swiper-pagination-progressbar-fill",
						progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
						clickableClass: "swiper-pagination-clickable",
						lockClass: "swiper-pagination-lock"
					}
				},
				create: function () {
					it(this, {
						pagination: Ct({
							dynamicBulletIndex: 0
						}, Et)
					})
				},
				on: {
					init: function (t) {
						t.pagination.init(), t.pagination.render(), t.pagination.update()
					},
					activeIndexChange: function (t) {
						(t.params.loop || void 0 === t.snapIndex) && t.pagination.update()
					},
					snapIndexChange: function (t) {
						t.params.loop || t.pagination.update()
					},
					slidesLengthChange: function (t) {
						t.params.loop && (t.pagination.render(), t.pagination.update())
					},
					snapGridLengthChange: function (t) {
						t.params.loop || (t.pagination.render(), t.pagination.update())
					},
					destroy: function (t) {
						t.pagination.destroy()
					},
					click: function (t, e) {
						var i = e.target;
						if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !$(i).hasClass(t.params.pagination.bulletClass)) {
							if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
							!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow") : t.emit("paginationHide"), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
						}
					}
				}
			};

		function Lt(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function Pt(t, e) {
			t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
		}
		Mt.use([Tt, At]);
		var Ot, It, Ft, Nt, zt, kt, Rt, Bt, Ut = {
				autoSleep: 120,
				force3D: "auto",
				nullTargetWarn: 1,
				units: {
					lineHeight: ""
				}
			},
			Vt = {
				duration: .5,
				overwrite: !1,
				delay: 0
			},
			Wt = 1e8,
			Gt = 1e-8,
			Ht = 2 * Math.PI,
			jt = Ht / 4,
			qt = 0,
			Xt = Math.sqrt,
			Yt = Math.cos,
			Zt = Math.sin,
			Jt = function (t) {
				return "string" == typeof t
			},
			$t = function (t) {
				return "function" == typeof t
			},
			Kt = function (t) {
				return "number" == typeof t
			},
			Qt = function (t) {
				return void 0 === t
			},
			te = function (t) {
				return "object" == typeof t
			},
			ee = function (t) {
				return !1 !== t
			},
			ie = function () {
				return "undefined" != typeof window
			},
			ne = function (t) {
				return $t(t) || Jt(t)
			},
			re = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
			se = Array.isArray,
			ae = /(?:-?\.?\d|\.)+/gi,
			oe = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
			le = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
			ce = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
			he = /[+-]=-?[\.\d]+/,
			ue = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
			de = {},
			pe = {},
			fe = function (t) {
				return (pe = Be(t, de)) && Sn
			},
			me = function (t, e) {
				return !e && void 0
			},
			ge = function (t, e) {
				return t && (de[t] = e) && pe && (pe[t] = e) || de
			},
			ve = function () {
				return 0
			},
			ye = {},
			xe = [],
			_e = {},
			we = {},
			be = {},
			Me = 30,
			Se = [],
			De = "",
			Te = function (t) {
				var e, i, n = t[0];
				if (te(n) || $t(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
					for (i = Se.length; i-- && !Se[i].targetTest(n););
					e = Se[i]
				}
				for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Yi(t[i], e))) || t.splice(i, 1);
				return t
			},
			Ce = function (t) {
				return t._gsap || Te(pi(t))[0]._gsap
			},
			Ee = function (t, e, i) {
				return (i = t[e]) && $t(i) ? t[e]() : Qt(i) && t.getAttribute && t.getAttribute(e) || i
			},
			Ae = function (t, e) {
				return (t = t.split(",")).forEach(e) || t
			},
			Le = function (t) {
				return Math.round(1e5 * t) / 1e5 || 0
			},
			Pe = function (t, e) {
				for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
				return n < i
			},
			Oe = function (t, e, i) {
				var n, r = Kt(t[1]),
					s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
					a = t[s];
				if (r && (a.duration = t[1]), a.parent = i, e) {
					for (n = a; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = ee(i.vars.inherit) && i.parent;
					a.immediateRender = ee(n.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
				}
				return a
			},
			Ie = function () {
				var t, e, i = xe.length,
					n = xe.slice(0);
				for (_e = {}, xe.length = 0, t = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
			},
			Fe = function (t, e, i, n) {
				xe.length && Ie(), t.render(e, i, n), xe.length && Ie()
			},
			Ne = function (t) {
				var e = parseFloat(t);
				return (e || 0 === e) && (t + "").match(ue).length < 2 ? e : Jt(t) ? t.trim() : t
			},
			ze = function (t) {
				return t
			},
			ke = function (t, e) {
				for (var i in e) i in t || (t[i] = e[i]);
				return t
			},
			Re = function (t, e) {
				for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
			},
			Be = function (t, e) {
				for (var i in e) t[i] = e[i];
				return t
			},
			Ue = function t(e, i) {
				for (var n in i) e[n] = te(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n];
				return e
			},
			Ve = function (t, e) {
				var i, n = {};
				for (i in t) i in e || (n[i] = t[i]);
				return n
			},
			We = function (t) {
				var e = t.parent || Ot,
					i = t.keyframes ? Re : ke;
				if (ee(t.inherit))
					for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
				return t
			},
			Ge = function (t, e, i, n) {
				void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
				var r = e._prev,
					s = e._next;
				r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null
			},
			He = function (t, e) {
				t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
			},
			je = function (t, e) {
				if (t && (!e || e._end > t._dur || e._start < 0))
					for (var i = t; i;) i._dirty = 1, i = i.parent;
				return t
			},
			qe = function (t) {
				for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
				return t
			},
			Xe = function t(e) {
				return !e || e._ts && t(e.parent)
			},
			Ye = function (t) {
				return t._repeat ? Ze(t._tTime, t = t.duration() + t._rDelay) * t : 0
			},
			Ze = function (t, e) {
				return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
			},
			Je = function (t, e) {
				return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
			},
			$e = function (t) {
				return t._end = Le(t._start + (t._tDur / Math.abs(t._ts || t._rts || Gt) || 0))
			},
			Ke = function (t, e) {
				var i = t._dp;
				return i && i.smoothChildTiming && t._ts && (t._start = Le(t._dp._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), $e(t), i._dirty || je(i, t)), t
			},
			Qe = function (t, e) {
				var i;
				if ((e._time || e._initted && !e._dur) && (i = Je(t.rawTime(), e), (!e._dur || li(0, e.totalDuration(), i) - e._tTime > Gt) && e.render(i, !0)), je(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
					if (t._dur < t.duration())
						for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
					t._zTime = -1e-8
				}
			},
			ti = function (t, e, i, n) {
				return e.parent && He(e), e._start = Le(i + e._delay), e._end = Le(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
					function (t, e, i, n, r) {
						void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
						var s, a = t[n];
						if (r)
							for (s = e[r]; a && a[r] > s;) a = a._prev;
						a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = a, e.parent = e._dp = t
					}(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, n || Qe(t, e), t
			},
			ei = function (t, e) {
				return de.ScrollTrigger ? de.ScrollTrigger.create(e, t) : void 0
			},
			ii = function (t, e, i, n) {
				return en(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && kt !== Ni.frame ? (xe.push(t), t._lazy = [e, n], 1) : void 0 : 1
			},
			ni = function (t, e, i, n) {
				var r = t._repeat,
					s = Le(e) || 0,
					a = t._tTime / t._tDur;
				return a && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : Le(s * (r + 1) + t._rDelay * r) : s, a && !n ? Ke(t, t._tTime = t._tDur * a) : t.parent && $e(t), i || je(t.parent, t), t
			},
			ri = function (t) {
				return t instanceof Ji ? je(t) : ni(t, t._dur)
			},
			si = {
				_start: 0,
				endTime: ve
			},
			ai = function t(e, i) {
				var n, r, s = e.labels,
					a = e._recent || si,
					o = e.duration() >= Wt ? a.endTime(!1) : e._dur;
				return Jt(i) && (isNaN(i) || i in s) ? "<" === (n = i.charAt(0)) || ">" === n ? ("<" === n ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) : (n = i.indexOf("=")) < 0 ? (i in s || (s[i] = o), s[i]) : (r = +(i.charAt(n - 1) + i.substr(n + 1)), n > 1 ? t(e, i.substr(0, n - 1)) + r : o + r) : null == i ? o : +i
			},
			oi = function (t, e) {
				return t || 0 === t ? e(t) : e
			},
			li = function (t, e, i) {
				return i < t ? t : i > e ? e : i
			},
			ci = function (t) {
				return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : ""
			},
			hi = [].slice,
			ui = function (t, e) {
				return t && te(t) && "length" in t && (!e && !t.length || t.length - 1 in t && te(t[0])) && !t.nodeType && t !== It
			},
			di = function (t, e, i) {
				return void 0 === i && (i = []), t.forEach((function (t) {
					var n;
					return Jt(t) && !e || ui(t, 1) ? (n = i).push.apply(n, pi(t)) : i.push(t)
				})) || i
			},
			pi = function (t, e) {
				return !Jt(t) || e || !Ft && zi() ? se(t) ? di(t, e) : ui(t) ? hi.call(t, 0) : t ? [t] : [] : hi.call(Nt.querySelectorAll(t), 0)
			},
			fi = function (t) {
				return t.sort((function () {
					return .5 - Math.random()
				}))
			},
			mi = function (t) {
				if ($t(t)) return t;
				var e = te(t) ? t : {
						each: t
					},
					i = Gi(e.ease),
					n = e.from || 0,
					r = parseFloat(e.base) || 0,
					s = {},
					a = n > 0 && n < 1,
					o = isNaN(n) || a,
					l = e.axis,
					c = n,
					h = n;
				return Jt(n) ? c = h = {
						center: .5,
						edges: .5,
						end: 1
					}[n] || 0 : !a && o && (c = n[0], h = n[1]),
					function (t, a, u) {
						var d, p, f, m, g, v, y, x, _, w = (u || e).length,
							b = s[w];
						if (!b) {
							if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, Wt])[1])) {
								for (y = -Wt; y < (y = u[_++].getBoundingClientRect().left) && _ < w;);
								_--
							}
							for (b = s[w] = [], d = o ? Math.min(_, w) * c - .5 : n % _, p = o ? w * h / _ - .5 : n / _ | 0, y = 0, x = Wt, v = 0; v < w; v++) f = v % _ - d, m = p - (v / _ | 0), b[v] = g = l ? Math.abs("y" === l ? m : f) : Xt(f * f + m * m), g > y && (y = g), g < x && (x = g);
							"random" === n && fi(b), b.max = y - x, b.min = x, b.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (_ > w ? w - 1 : l ? "y" === l ? w / _ : _ : Math.max(_, w / _)) || 0) * ("edges" === n ? -1 : 1), b.b = w < 0 ? r - w : r, b.u = ci(e.amount || e.each) || 0, i = i && w < 0 ? Vi(i) : i
						}
						return w = (b[t] - b.min) / b.max || 0, Le(b.b + (i ? i(w) : w) * b.v) + b.u
					}
			},
			gi = function (t) {
				var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
				return function (i) {
					return Math.floor(Math.round(parseFloat(i) / t) * t * e) / e + (Kt(i) ? 0 : ci(i))
				}
			},
			vi = function (t, e) {
				var i, n, r = se(t);
				return !r && te(t) && (i = r = t.radius || Wt, t.values ? (t = pi(t.values), (n = !Kt(t[0])) && (i *= i)) : t = gi(t.increment)), oi(e, r ? $t(t) ? function (e) {
					return n = t(e), Math.abs(n - e) <= i ? n : e
				} : function (e) {
					for (var r, s, a = parseFloat(n ? e.x : e), o = parseFloat(n ? e.y : 0), l = Wt, c = 0, h = t.length; h--;)(r = n ? (r = t[h].x - a) * r + (s = t[h].y - o) * s : Math.abs(t[h] - a)) < l && (l = r, c = h);
					return c = !i || l <= i ? t[c] : e, n || c === e || Kt(e) ? c : c + ci(e)
				} : gi(t))
			},
			yi = function (t, e, i, n) {
				return oi(se(t) ? !e : !0 === i ? !!(i = 0) : !n, (function () {
					return se(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / i) * i * n) / n
				}))
			},
			xi = function (t, e, i) {
				return oi(i, (function (i) {
					return t[~~e(i)]
				}))
			},
			_i = function (t) {
				for (var e, i, n, r, s = 0, a = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? ue : ae), a += t.substr(s, e - s) + yi(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
				return a + t.substr(s, t.length - s)
			},
			wi = function (t, e, i, n, r) {
				var s = e - t,
					a = n - i;
				return oi(r, (function (e) {
					return i + ((e - t) / s * a || 0)
				}))
			},
			bi = function (t, e, i) {
				var n, r, s, a = t.labels,
					o = Wt;
				for (n in a)(r = a[n] - e) < 0 == !!i && r && o > (r = Math.abs(r)) && (s = n, o = r);
				return s
			},
			Mi = function (t, e, i) {
				var n, r, s = t.vars,
					a = s[e];
				if (a) return n = s[e + "Params"], r = s.callbackScope || t, i && xe.length && Ie(), n ? a.apply(r, n) : a.call(r)
			},
			Si = function (t) {
				return He(t), t.progress() < 1 && Mi(t, "onInterrupt"), t
			},
			Di = function (t) {
				var e = (t = !t.name && t.default || t).name,
					i = $t(t),
					n = e && !i && t.init ? function () {
						this._props = []
					} : t,
					r = {
						init: ve,
						render: mn,
						add: Qi,
						kill: vn,
						modifier: gn,
						rawVars: 0
					},
					s = {
						targetTest: 0,
						get: 0,
						getSetter: un,
						aliases: {},
						register: 0
					};
				if (zi(), t !== n) {
					if (we[e]) return;
					ke(n, ke(Ve(t, r), s)), Be(n.prototype, Be(r, Ve(t, s))), we[n.prop = e] = n, t.targetTest && (Se.push(n), ye[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
				}
				ge(e, n), t.register && t.register(Sn, n, _n)
			},
			Ti = 255,
			Ci = {
				aqua: [0, Ti, Ti],
				lime: [0, Ti, 0],
				silver: [192, 192, 192],
				black: [0, 0, 0],
				maroon: [128, 0, 0],
				teal: [0, 128, 128],
				blue: [0, 0, Ti],
				navy: [0, 0, 128],
				white: [Ti, Ti, Ti],
				olive: [128, 128, 0],
				yellow: [Ti, Ti, 0],
				orange: [Ti, 165, 0],
				gray: [128, 128, 128],
				purple: [128, 0, 128],
				green: [0, 128, 0],
				red: [Ti, 0, 0],
				pink: [Ti, 192, 203],
				cyan: [0, Ti, Ti],
				transparent: [Ti, Ti, Ti, 0]
			},
			Ei = function (t, e, i) {
				return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * Ti + .5 | 0
			},
			Ai = function (t, e, i) {
				var n, r, s, a, o, l, c, h, u, d, p = t ? Kt(t) ? [t >> 16, t >> 8 & Ti, t & Ti] : 0 : Ci.black;
				if (!p) {
					if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ci[t]) p = Ci[t];
					else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Ti, t & Ti];
					else if ("hsl" === t.substr(0, 3))
						if (p = d = t.match(ae), e) {
							if (~t.indexOf("=")) return p = t.match(oe), i && p.length < 4 && (p[3] = 1), p
						} else a = +p[0] % 360 / 360, o = +p[1] / 100, n = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), p.length > 3 && (p[3] *= 1), p[0] = Ei(a + 1 / 3, n, r), p[1] = Ei(a, n, r), p[2] = Ei(a - 1 / 3, n, r);
					else p = t.match(ae) || Ci.transparent;
					p = p.map(Number)
				}
				return e && !d && (n = p[0] / Ti, r = p[1] / Ti, s = p[2] / Ti, l = ((c = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2, c === h ? a = o = 0 : (u = c - h, o = l > .5 ? u / (2 - c - h) : u / (c + h), a = c === n ? (r - s) / u + (r < s ? 6 : 0) : c === r ? (s - n) / u + 2 : (n - r) / u + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * l + .5)), i && p.length < 4 && (p[3] = 1), p
			},
			Li = function (t) {
				var e = [],
					i = [],
					n = -1;
				return t.split(Oi).forEach((function (t) {
					var r = t.match(le) || [];
					e.push.apply(e, r), i.push(n += r.length + 1)
				})), e.c = i, e
			},
			Pi = function (t, e, i) {
				var n, r, s, a, o = "",
					l = (t + o).match(Oi),
					c = e ? "hsla(" : "rgba(",
					h = 0;
				if (!l) return t;
				if (l = l.map((function (t) {
						return (t = Ai(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
					})), i && (s = Li(t), (n = i.c).join(o) !== s.c.join(o)))
					for (a = (r = t.replace(Oi, "1").split(le)).length - 1; h < a; h++) o += r[h] + (~n.indexOf(h) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
				if (!r)
					for (a = (r = t.split(Oi)).length - 1; h < a; h++) o += r[h] + l[h];
				return o + r[a]
			},
			Oi = function () {
				var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
				for (t in Ci) e += "|" + t + "\\b";
				return new RegExp(e + ")", "gi")
			}(),
			Ii = /hsl[a]?\(/,
			Fi = function (t) {
				var e, i = t.join(" ");
				if (Oi.lastIndex = 0, Oi.test(i)) return e = Ii.test(i), t[1] = Pi(t[1], e), t[0] = Pi(t[0], e, Li(t[1])), !0
			},
			Ni = function () {
				var t, e, i, n, r, s, a = Date.now,
					o = 500,
					l = 33,
					c = a(),
					h = c,
					u = 1e3 / 240,
					d = u,
					p = [],
					f = function i(f) {
						var m, g, v, y, x = a() - h,
							_ = !0 === f;
						if (x > o && (c += x - l), ((m = (v = (h += x) - c) - d) > 0 || _) && (y = ++n.frame, r = v - 1e3 * n.time, n.time = v /= 1e3, d += m + (m >= u ? 4 : u - m), g = 1), _ || (t = e(i)), g)
							for (s = 0; s < p.length; s++) p[s](v, r, y, f)
					};
				return n = {
					time: 0,
					frame: 0,
					tick: function () {
						f(!0)
					},
					deltaRatio: function (t) {
						return r / (1e3 / (t || 60))
					},
					wake: function () {
						zt && (!Ft && ie() && (It = Ft = window, Nt = It.document || {}, de.gsap = Sn, (It.gsapVersions || (It.gsapVersions = [])).push(Sn.version), fe(pe || It.GreenSockGlobals || !It.gsap && It || {}), i = It.requestAnimationFrame), t && n.sleep(), e = i || function (t) {
							return setTimeout(t, d - 1e3 * n.time + 1 | 0)
						}, Bt = 1, f(2))
					},
					sleep: function () {
						(i ? It.cancelAnimationFrame : clearTimeout)(t), Bt = 0, e = ve
					},
					lagSmoothing: function (t, e) {
						o = t || 1e8, l = Math.min(e, o, 0)
					},
					fps: function (t) {
						u = 1e3 / (t || 240), d = 1e3 * n.time + u
					},
					add: function (t) {
						p.indexOf(t) < 0 && p.push(t), zi()
					},
					remove: function (t) {
						var e;
						~(e = p.indexOf(t)) && p.splice(e, 1) && s >= e && s--
					},
					_listeners: p
				}
			}(),
			zi = function () {
				return !Bt && Ni.wake()
			},
			ki = {},
			Ri = /^[\d.\-M][\d.\-,\s]/,
			Bi = /["']/g,
			Ui = function (t) {
				for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++) i = s[o], e = o !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[a] = isNaN(n) ? n.replace(Bi, "").trim() : +n, a = i.substr(e + 1).trim();
				return r
			},
			Vi = function (t) {
				return function (e) {
					return 1 - t(1 - e)
				}
			},
			Wi = function t(e, i) {
				for (var n, r = e._first; r;) r instanceof Ji ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next
			},
			Gi = function (t, e) {
				return t && ($t(t) ? t : ki[t] || function (t) {
					var e = (t + "").split("("),
						i = ki[e[0]];
					return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Ui(e[1])] : function (t) {
						var e = t.indexOf("(") + 1,
							i = t.indexOf(")"),
							n = t.indexOf("(", e);
						return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i)
					}(t).split(",").map(Ne)) : ki._CE && Ri.test(t) ? ki._CE("", t) : i
				}(t)) || e
			},
			Hi = function (t, e, i, n) {
				void 0 === i && (i = function (t) {
					return 1 - e(1 - t)
				}), void 0 === n && (n = function (t) {
					return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
				});
				var r, s = {
					easeIn: e,
					easeOut: i,
					easeInOut: n
				};
				return Ae(t, (function (t) {
					for (var e in ki[t] = de[t] = s, ki[r = t.toLowerCase()] = i, s) ki[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ki[t + "." + e] = s[e]
				})), s
			},
			ji = function (t) {
				return function (e) {
					return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
				}
			},
			qi = function t(e, i, n) {
				var r = i >= 1 ? i : 1,
					s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1),
					a = s / Ht * (Math.asin(1 / r) || 0),
					o = function (t) {
						return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Zt((t - a) * s) + 1
					},
					l = "out" === e ? o : "in" === e ? function (t) {
						return 1 - o(1 - t)
					} : ji(o);
				return s = Ht / s, l.config = function (i, n) {
					return t(e, i, n)
				}, l
			},
			Xi = function t(e, i) {
				void 0 === i && (i = 1.70158);
				var n = function (t) {
						return t ? --t * t * ((i + 1) * t + i) + 1 : 0
					},
					r = "out" === e ? n : "in" === e ? function (t) {
						return 1 - n(1 - t)
					} : ji(n);
				return r.config = function (i) {
					return t(e, i)
				}, r
			};
		Ae("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
				var i = e < 5 ? e + 1 : e;
				Hi(t + ",Power" + (i - 1), e ? function (t) {
					return Math.pow(t, i)
				} : function (t) {
					return t
				}, (function (t) {
					return 1 - Math.pow(1 - t, i)
				}), (function (t) {
					return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
				}))
			})), ki.Linear.easeNone = ki.none = ki.Linear.easeIn, Hi("Elastic", qi("in"), qi("out"), qi()),
			function (t, e) {
				var i = 1 / e,
					n = function (n) {
						return n < i ? t * n * n : n < .7272727272727273 ? t * Math.pow(n - 1.5 / e, 2) + .75 : n < .9090909090909092 ? t * (n -= 2.25 / e) * n + .9375 : t * Math.pow(n - 2.625 / e, 2) + .984375
					};
				Hi("Bounce", (function (t) {
					return 1 - n(1 - t)
				}), n)
			}(7.5625, 2.75), Hi("Expo", (function (t) {
				return t ? Math.pow(2, 10 * (t - 1)) : 0
			})), Hi("Circ", (function (t) {
				return -(Xt(1 - t * t) - 1)
			})), Hi("Sine", (function (t) {
				return 1 === t ? 1 : 1 - Yt(t * jt)
			})), Hi("Back", Xi("in"), Xi("out"), Xi()), ki.SteppedEase = ki.steps = de.SteppedEase = {
				config: function (t, e) {
					void 0 === t && (t = 1);
					var i = 1 / t,
						n = t + (e ? 0 : 1),
						r = e ? 1 : 0;
					return function (t) {
						return ((n * li(0, .99999999, t) | 0) + r) * i
					}
				}
			}, Vt.ease = ki["quad.out"], Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
				return De += t + "," + t + "Params,"
			}));
		var Yi = function (t, e) {
				this.id = qt++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ee, this.set = e ? e.getSetter : un
			},
			Zi = function () {
				function t(t, e) {
					var i = t.parent || Ot;
					this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ni(this, +t.duration, 1, 1), this.data = t.data, Bt || Ni.wake(), i && ti(i, this, e || 0 === e ? e : i._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
				}
				var e = t.prototype;
				return e.delay = function (t) {
					return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
				}, e.duration = function (t) {
					return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
				}, e.totalDuration = function (t) {
					return arguments.length ? (this._dirty = 0, ni(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
				}, e.totalTime = function (t, e) {
					if (zi(), !arguments.length) return this._tTime;
					var i = this._dp;
					if (i && i.smoothChildTiming && this._ts) {
						for (Ke(this, t); i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
						!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && ti(this._dp, this, this._start - this._delay)
					}
					return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Gt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Fe(this, t, e)), this
				}, e.time = function (t, e) {
					return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ye(this)) % this._dur || (t ? this._dur : 0), e) : this._time
				}, e.totalProgress = function (t, e) {
					return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
				}, e.progress = function (t, e) {
					return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ye(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
				}, e.iteration = function (t, e) {
					var i = this.duration() + this._rDelay;
					return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Ze(this._tTime, i) + 1 : 1
				}, e.timeScale = function (t) {
					if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
					if (this._rts === t) return this;
					var e = this.parent && this._ts ? Je(this.parent._time, this) : this._tTime;
					return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, qe(this.totalTime(li(-this._delay, this._tDur, e), !0))
				}, e.paused = function (t) {
					return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Gt) && Math.abs(this._zTime) !== Gt))), this) : this._ps
				}, e.startTime = function (t) {
					if (arguments.length) {
						this._start = t;
						var e = this.parent || this._dp;
						return e && (e._sort || !this.parent) && ti(e, this, t - this._delay), this
					}
					return this._start
				}, e.endTime = function (t) {
					return this._start + (ee(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
				}, e.rawTime = function (t) {
					var e = this.parent || this._dp;
					return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Je(e.rawTime(t), this) : this._tTime : this._tTime
				}, e.globalTime = function (t) {
					for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
					return i
				}, e.repeat = function (t) {
					return arguments.length ? (this._repeat = t, ri(this)) : this._repeat
				}, e.repeatDelay = function (t) {
					return arguments.length ? (this._rDelay = t, ri(this)) : this._rDelay
				}, e.yoyo = function (t) {
					return arguments.length ? (this._yoyo = t, this) : this._yoyo
				}, e.seek = function (t, e) {
					return this.totalTime(ai(this, t), ee(e))
				}, e.restart = function (t, e) {
					return this.play().totalTime(t ? -this._delay : 0, ee(e))
				}, e.play = function (t, e) {
					return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
				}, e.reverse = function (t, e) {
					return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
				}, e.pause = function (t, e) {
					return null != t && this.seek(t, e), this.paused(!0)
				}, e.resume = function () {
					return this.paused(!1)
				}, e.reversed = function (t) {
					return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
				}, e.invalidate = function () {
					return this._initted = 0, this._zTime = -1e-8, this
				}, e.isActive = function () {
					var t, e = this.parent || this._dp,
						i = this._start;
					return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - Gt))
				}, e.eventCallback = function (t, e, i) {
					var n = this.vars;
					return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
				}, e.then = function (t) {
					var e = this;
					return new Promise((function (i) {
						var n = $t(t) ? t : ze,
							r = function () {
								var t = e.then;
								e.then = null, $t(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t
							};
						e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
					}))
				}, e.kill = function () {
					Si(this)
				}, t
			}();
		ke(Zi.prototype, {
			_time: 0,
			_start: 0,
			_end: 0,
			_tTime: 0,
			_tDur: 0,
			_dirty: 0,
			_repeat: 0,
			_yoyo: !1,
			parent: null,
			_initted: !1,
			_rDelay: 0,
			_ts: 1,
			_dp: 0,
			ratio: 0,
			_zTime: -1e-8,
			_prom: 0,
			_ps: !1,
			_rts: 1
		});
		var Ji = function (t) {
			function e(e, i) {
				var n;
				return void 0 === e && (e = {}), (n = t.call(this, e, i) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ee(e.sortChildren), n.parent && Qe(n.parent, Lt(n)), e.scrollTrigger && ei(Lt(n), e.scrollTrigger), n
			}
			Pt(e, t);
			var i = e.prototype;
			return i.to = function (t, e, i) {
				return new an(t, Oe(arguments, 0, this), ai(this, Kt(e) ? arguments[3] : i)), this
			}, i.from = function (t, e, i) {
				return new an(t, Oe(arguments, 1, this), ai(this, Kt(e) ? arguments[3] : i)), this
			}, i.fromTo = function (t, e, i, n) {
				return new an(t, Oe(arguments, 2, this), ai(this, Kt(e) ? arguments[4] : n)), this
			}, i.set = function (t, e, i) {
				return e.duration = 0, e.parent = this, We(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new an(t, e, ai(this, i), 1), this
			}, i.call = function (t, e, i) {
				return ti(this, an.delayedCall(0, t, e), ai(this, i))
			}, i.staggerTo = function (t, e, i, n, r, s, a) {
				return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = a, i.parent = this, new an(t, i, ai(this, r)), this
			}, i.staggerFrom = function (t, e, i, n, r, s, a) {
				return i.runBackwards = 1, We(i).immediateRender = ee(i.immediateRender), this.staggerTo(t, e, i, n, r, s, a)
			}, i.staggerFromTo = function (t, e, i, n, r, s, a, o) {
				return n.startAt = i, We(n).immediateRender = ee(n.immediateRender), this.staggerTo(t, e, n, r, s, a, o)
			}, i.render = function (t, e, i) {
				var n, r, s, a, o, l, c, h, u, d, p, f, m = this._time,
					g = this._dirty ? this.totalDuration() : this._tDur,
					v = this._dur,
					y = this !== Ot && t > g - Gt && t >= 0 ? g : t < Gt ? 0 : t,
					x = this._zTime < 0 != t < 0 && (this._initted || !v);
				if (y !== this._tTime || i || x) {
					if (m !== this._time && v && (y += this._time - m, t += this._time - m), n = y, u = this._start, l = !(h = this._ts), x && (v || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat && (p = this._yoyo, o = v + this._rDelay, n = Le(y % o), y === g ? (a = this._repeat, n = v) : ((a = ~~(y / o)) && a === y / o && (n = v, a--), n > v && (n = v)), d = Ze(this._tTime, o), !m && this._tTime && d !== a && (d = a), p && 1 & a && (n = v - n, f = 1), a !== d && !this._lock)) {
						var _ = p && 1 & d,
							w = _ === (p && 1 & a);
						if (a < d && (_ = !_), m = _ ? 0 : v, this._lock = 1, this.render(m || (f ? 0 : Le(a * o)), e, !v)._lock = 0, !e && this.parent && Mi(this, "onRepeat"), this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1), m !== this._time || l !== !this._ts) return this;
						if (v = this._dur, g = this._tDur, w && (this._lock = 2, m = _ ? v : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
						Wi(this, f)
					}
					if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (t, e, i) {
							var n;
							if (i > e)
								for (n = t._first; n && n._start <= i;) {
									if (!n._dur && "isPause" === n.data && n._start > e) return n;
									n = n._next
								} else
									for (n = t._last; n && n._start >= i;) {
										if (!n._dur && "isPause" === n.data && n._start < e) return n;
										n = n._prev
									}
						}(this, Le(m), Le(n))) && (y -= n - (n = c._start)), this._tTime = y, this._time = n, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), !m && n && !e && Mi(this, "onStart"), n >= m && t >= 0)
						for (r = this._first; r;) {
							if (s = r._next, (r._act || n >= r._start) && r._ts && c !== r) {
								if (r.parent !== this) return this.render(t, e, i);
								if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
									c = 0, s && (y += this._zTime = -1e-8);
									break
								}
							}
							r = s
						} else {
							r = this._last;
							for (var b = t < 0 ? t : n; r;) {
								if (s = r._prev, (r._act || b <= r._end) && r._ts && c !== r) {
									if (r.parent !== this) return this.render(t, e, i);
									if (r.render(r._ts > 0 ? (b - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (b - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
										c = 0, s && (y += this._zTime = b ? -1e-8 : Gt);
										break
									}
								}
								r = s
							}
						}
					if (c && !e && (this.pause(), c.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = u, $e(this), this.render(t, e, i);
					this._onUpdate && !e && Mi(this, "onUpdate", !0), (y === g && g >= this.totalDuration() || !y && m) && (u !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === g && this._ts > 0 || !y && this._ts < 0) && He(this, 1), e || t < 0 && !m || !y && !m || (Mi(this, y === g ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < g && this.timeScale() > 0) && this._prom())))
				}
				return this
			}, i.add = function (t, e) {
				var i = this;
				if (Kt(e) || (e = ai(this, e)), !(t instanceof Zi)) {
					if (se(t)) return t.forEach((function (t) {
						return i.add(t, e)
					})), this;
					if (Jt(t)) return this.addLabel(t, e);
					if (!$t(t)) return this;
					t = an.delayedCall(0, t)
				}
				return this !== t ? ti(this, t, e) : this
			}, i.getChildren = function (t, e, i, n) {
				void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -Wt);
				for (var r = [], s = this._first; s;) s._start >= n && (s instanceof an ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
				return r
			}, i.getById = function (t) {
				for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
					if (e[i].vars.id === t) return e[i]
			}, i.remove = function (t) {
				return Jt(t) ? this.removeLabel(t) : $t(t) ? this.killTweensOf(t) : (Ge(this, t), t === this._recent && (this._recent = this._last), je(this))
			}, i.totalTime = function (e, i) {
				return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Le(Ni.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
			}, i.addLabel = function (t, e) {
				return this.labels[t] = ai(this, e), this
			}, i.removeLabel = function (t) {
				return delete this.labels[t], this
			}, i.addPause = function (t, e, i) {
				var n = an.delayedCall(0, e || ve, i);
				return n.data = "isPause", this._hasPause = 1, ti(this, n, ai(this, t))
			}, i.removePause = function (t) {
				var e = this._first;
				for (t = ai(this, t); e;) e._start === t && "isPause" === e.data && He(e), e = e._next
			}, i.killTweensOf = function (t, e, i) {
				for (var n = this.getTweensOf(t, i), r = n.length; r--;) $i !== n[r] && n[r].kill(t, e);
				return this
			}, i.getTweensOf = function (t, e) {
				for (var i, n = [], r = pi(t), s = this._first, a = Kt(e); s;) s instanceof an ? Pe(s._targets, r) && (a ? (!$i || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next;
				return n
			}, i.tweenTo = function (t, e) {
				e = e || {};
				var i = this,
					n = ai(i, t),
					r = e,
					s = r.startAt,
					a = r.onStart,
					o = r.onStartParams,
					l = an.to(i, ke(e, {
						ease: "none",
						lazy: !1,
						time: n,
						overwrite: "auto",
						duration: e.duration || Math.abs((n - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || Gt,
						onStart: function () {
							i.pause();
							var t = e.duration || Math.abs((n - i._time) / i.timeScale());
							l._dur !== t && ni(l, t, 0, 1).render(l._time, !0, !0), a && a.apply(l, o || [])
						}
					}));
				return l
			}, i.tweenFromTo = function (t, e, i) {
				return this.tweenTo(e, ke({
					startAt: {
						time: ai(this, t)
					}
				}, i))
			}, i.recent = function () {
				return this._recent
			}, i.nextLabel = function (t) {
				return void 0 === t && (t = this._time), bi(this, ai(this, t))
			}, i.previousLabel = function (t) {
				return void 0 === t && (t = this._time), bi(this, ai(this, t), 1)
			}, i.currentLabel = function (t) {
				return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Gt)
			}, i.shiftChildren = function (t, e, i) {
				void 0 === i && (i = 0);
				for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
				if (e)
					for (n in s) s[n] >= i && (s[n] += t);
				return je(this)
			}, i.invalidate = function () {
				var e = this._first;
				for (this._lock = 0; e;) e.invalidate(), e = e._next;
				return t.prototype.invalidate.call(this)
			}, i.clear = function (t) {
				void 0 === t && (t = !0);
				for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
				return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), je(this)
			}, i.totalDuration = function (t) {
				var e, i, n, r = 0,
					s = this,
					a = s._last,
					o = Wt;
				if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
				if (s._dirty) {
					for (n = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (i = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, ti(s, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), o = 0), a._end > r && a._ts && (r = a._end), a = e;
					ni(s, s === Ot && s._time > r ? s._time : r, 1, 1), s._dirty = 0
				}
				return s._tDur
			}, e.updateRoot = function (t) {
				if (Ot._ts && (Fe(Ot, Je(t, Ot)), kt = Ni.frame), Ni.frame >= Me) {
					Me += Ut.autoSleep || 120;
					var e = Ot._first;
					if ((!e || !e._ts) && Ut.autoSleep && Ni._listeners.length < 2) {
						for (; e && !e._ts;) e = e._next;
						e || Ni.sleep()
					}
				}
			}, e
		}(Zi);
		ke(Ji.prototype, {
			_lock: 0,
			_hasPause: 0,
			_forcing: 0
		});
		var $i, Ki = function (t, e, i, n, r, s, a) {
				var o, l, c, h, u, d, p, f, m = new _n(this._pt, t, e, 0, 1, fn, null, r),
					g = 0,
					v = 0;
				for (m.b = i, m.e = n, i += "", (p = ~(n += "").indexOf("random(")) && (n = _i(n)), s && (s(f = [i, n], t, e), i = f[0], n = f[1]), l = i.match(ce) || []; o = ce.exec(n);) h = o[0], u = n.substring(g, o.index), c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1), h !== l[v++] && (d = parseFloat(l[v - 1]) || 0, m._pt = {
					_next: m._pt,
					p: u || 1 === v ? u : ",",
					s: d,
					c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - d,
					m: c && c < 4 ? Math.round : 0
				}, g = ce.lastIndex);
				return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = a, (he.test(n) || p) && (m.e = 0), this._pt = m, m
			},
			Qi = function (t, e, i, n, r, s, a, o, l) {
				$t(n) && (n = n(r || 0, t, s));
				var c, h = t[e],
					u = "get" !== i ? i : $t(h) ? l ? t[e.indexOf("set") || !$t(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h,
					d = $t(h) ? l ? cn : ln : on;
				if (Jt(n) && (~n.indexOf("random(") && (n = _i(n)), "=" === n.charAt(1) && (n = parseFloat(u) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (ci(u) || 0))), u !== n) return isNaN(u * n) ? Ki.call(this, t, e, u, n, d, o || Ut.stringFilter, l) : (c = new _n(this._pt, t, e, +u || 0, n - (u || 0), "boolean" == typeof h ? pn : dn, 0, d), l && (c.fp = l), a && c.modifier(a, this, t), this._pt = c)
			},
			tn = function (t, e, i, n, r, s) {
				var a, o, l, c;
				if (we[t] && !1 !== (a = new we[t]).init(r, a.rawVars ? e[t] : function (t, e, i, n, r) {
						if ($t(t) && (t = nn(t, r, e, i, n)), !te(t) || t.style && t.nodeType || se(t) || re(t)) return Jt(t) ? nn(t, r, e, i, n) : t;
						var s, a = {};
						for (s in t) a[s] = nn(t[s], r, e, i, n);
						return a
					}(e[t], n, r, s, i), i, n, s) && (i._pt = o = new _n(i._pt, r, t, 0, 1, a.render, a, 0, a.priority), i !== Rt))
					for (l = i._ptLookup[i._targets.indexOf(r)], c = a._props.length; c--;) l[a._props[c]] = o;
				return a
			},
			en = function t(e, i) {
				var n, r, s, a, o, l, c, h, u, d, p, f, m, g = e.vars,
					v = g.ease,
					y = g.startAt,
					x = g.immediateRender,
					_ = g.lazy,
					w = g.onUpdate,
					b = g.onUpdateParams,
					M = g.callbackScope,
					S = g.runBackwards,
					D = g.yoyoEase,
					T = g.keyframes,
					C = g.autoRevert,
					E = e._dur,
					A = e._startAt,
					L = e._targets,
					P = e.parent,
					O = P && "nested" === P.data ? P.parent._targets : L,
					I = "auto" === e._overwrite,
					F = e.timeline;
				if (F && (!T || !v) && (v = "none"), e._ease = Gi(v, Vt.ease), e._yEase = D ? Vi(Gi(!0 === D ? v : D, Vt.ease)) : 0, D && e._yoyo && !e._repeat && (D = e._yEase, e._yEase = e._ease, e._ease = D), !F) {
					if (f = (h = L[0] ? Ce(L[0]).harness : 0) && g[h.prop], n = Ve(g, ye), A && A.render(-1, !0).kill(), y) {
						if (He(e._startAt = an.set(L, ke({
								data: "isStart",
								overwrite: !1,
								parent: P,
								immediateRender: !0,
								lazy: ee(_),
								startAt: null,
								delay: 0,
								onUpdate: w,
								onUpdateParams: b,
								callbackScope: M,
								stagger: 0
							}, y))), x)
							if (i > 0) C || (e._startAt = 0);
							else if (E && !(i < 0 && A)) return void(i && (e._zTime = i))
					} else if (S && E)
						if (A) !C && (e._startAt = 0);
						else if (i && (x = !1), s = ke({
							overwrite: !1,
							data: "isFromStart",
							lazy: x && ee(_),
							immediateRender: x,
							stagger: 0,
							parent: P
						}, n), f && (s[h.prop] = f), He(e._startAt = an.set(L, s)), x) {
						if (!i) return
					} else t(e._startAt, Gt);
					for (e._pt = 0, _ = E && ee(_) || _ && !E, r = 0; r < L.length; r++) {
						if (c = (o = L[r])._gsap || Te(L)[r]._gsap, e._ptLookup[r] = d = {}, _e[c.id] && xe.length && Ie(), p = O === L ? r : O.indexOf(o), h && !1 !== (u = new h).init(o, f || n, e, p, O) && (e._pt = a = new _n(e._pt, o, u.name, 0, 1, u.render, u, 0, u.priority), u._props.forEach((function (t) {
								d[t] = a
							})), u.priority && (l = 1)), !h || f)
							for (s in n) we[s] && (u = tn(s, n, e, p, o, O)) ? u.priority && (l = 1) : d[s] = a = Qi.call(e, o, s, "get", n[s], p, O, 0, g.stringFilter);
						e._op && e._op[r] && e.kill(o, e._op[r]), I && e._pt && ($i = e, Ot.killTweensOf(o, d, e.globalTime(0)), m = !e.parent, $i = 0), e._pt && _ && (_e[c.id] = 1)
					}
					l && xn(e), e._onInit && e._onInit(e)
				}
				e._from = !F && !!g.runBackwards, e._onUpdate = w, e._initted = (!e._op || e._pt) && !m
			},
			nn = function (t, e, i, n, r) {
				return $t(t) ? t.call(e, i, n, r) : Jt(t) && ~t.indexOf("random(") ? _i(t) : t
			},
			rn = De + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
			sn = (rn + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
			an = function (t) {
				function e(e, i, n, r) {
					var s;
					"number" == typeof i && (n.duration = i, i = n, n = null);
					var a, o, l, c, h, u, d, p, f = (s = t.call(this, r ? i : We(i), n) || this).vars,
						m = f.duration,
						g = f.delay,
						v = f.immediateRender,
						y = f.stagger,
						x = f.overwrite,
						_ = f.keyframes,
						w = f.defaults,
						b = f.scrollTrigger,
						M = f.yoyoEase,
						S = s.parent,
						D = (se(e) || re(e) ? Kt(e[0]) : "length" in i) ? [e] : pi(e);
					if (s._targets = D.length ? Te(D) : me(0, !Ut.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = x, _ || y || ne(m) || ne(g)) {
						if (i = s.vars, (a = s.timeline = new Ji({
								data: "nested",
								defaults: w || {}
							})).kill(), a.parent = Lt(s), _) ke(a.vars.defaults, {
							ease: "none"
						}), _.forEach((function (t) {
							return a.to(D, t, ">")
						}));
						else {
							if (c = D.length, d = y ? mi(y) : ve, te(y))
								for (h in y) ~rn.indexOf(h) && (p || (p = {}), p[h] = y[h]);
							for (o = 0; o < c; o++) {
								for (h in l = {}, i) sn.indexOf(h) < 0 && (l[h] = i[h]);
								l.stagger = 0, M && (l.yoyoEase = M), p && Be(l, p), u = D[o], l.duration = +nn(m, Lt(s), o, u, D), l.delay = (+nn(g, Lt(s), o, u, D) || 0) - s._delay, !y && 1 === c && l.delay && (s._delay = g = l.delay, s._start += g, l.delay = 0), a.to(u, l, d(o, u, D))
							}
							a.duration() ? m = g = 0 : s.timeline = 0
						}
						m || s.duration(m = a.duration())
					} else s.timeline = 0;
					return !0 === x && ($i = Lt(s), Ot.killTweensOf(D), $i = 0), S && Qe(S, Lt(s)), (v || !m && !_ && s._start === Le(S._time) && ee(v) && Xe(Lt(s)) && "nested" !== S.data) && (s._tTime = -1e-8, s.render(Math.max(0, -g))), b && ei(Lt(s), b), s
				}
				Pt(e, t);
				var i = e.prototype;
				return i.render = function (t, e, i) {
					var n, r, s, a, o, l, c, h, u, d = this._time,
						p = this._tDur,
						f = this._dur,
						m = t > p - Gt && t >= 0 ? p : t < Gt ? 0 : t;
					if (f) {
						if (m !== this._tTime || !t || i || this._startAt && this._zTime < 0 != t < 0) {
							if (n = m, h = this.timeline, this._repeat) {
								if (a = f + this._rDelay, n = Le(m % a), m === p ? (s = this._repeat, n = f) : ((s = ~~(m / a)) && s === m / a && (n = f, s--), n > f && (n = f)), (l = this._yoyo && 1 & s) && (u = this._yEase, n = f - n), o = Ze(this._tTime, a), n === d && !i && this._initted) return this;
								s !== o && (h && this._yEase && Wi(h, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(Le(a * s), !0).invalidate()._lock = 0))
							}
							if (!this._initted) {
								if (ii(this, t < 0 ? t : n, i, e)) return this._tTime = 0, this;
								if (f !== this._dur) return this.render(t, e, i)
							}
							for (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (u || this._ease)(n / f), this._from && (this.ratio = c = 1 - c), n && !d && !e && Mi(this, "onStart"), r = this._pt; r;) r.r(c, r.d), r = r._next;
							h && h.render(t < 0 ? t : !n && l ? -1e-8 : h._dur * c, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), Mi(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && Mi(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !f) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && He(this, 1), e || t < 0 && !d || !m && !d || (Mi(this, m === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < p && this.timeScale() > 0) && this._prom()))
						}
					} else ! function (t, e, i, n) {
						var r, s, a = t.ratio,
							o = e < 0 || !e && a && !t._start && t._zTime > Gt && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
							l = t._rDelay,
							c = 0;
						if (l && t._repeat && (c = li(0, t._tDur, e), Ze(c, l) !== (s = Ze(t._tTime, l)) && (a = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== a || n || t._zTime === Gt || !e && t._zTime) {
							if (!t._initted && ii(t, e, n, i)) return;
							for (s = t._zTime, t._zTime = e || (i ? Gt : 0), i || (i = e && !s), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = c, i || Mi(t, "onStart"), r = t._pt; r;) r.r(o, r.d), r = r._next;
							t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && Mi(t, "onUpdate"), c && t._repeat && !i && t.parent && Mi(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && He(t, 1), i || (Mi(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
						} else t._zTime || (t._zTime = e)
					}(this, t, e, i);
					return this
				}, i.targets = function () {
					return this._targets
				}, i.invalidate = function () {
					return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
				}, i.kill = function (t, e) {
					if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return Si(this);
					if (this.timeline) {
						var i = this.timeline.totalDuration();
						return this.timeline.killTweensOf(t, e, $i && !0 !== $i.vars.overwrite)._first || Si(this), this.parent && i !== this.timeline.totalDuration() && ni(this, this._dur * this.timeline._tDur / i, 0, 1), this
					}
					var n, r, s, a, o, l, c, h = this._targets,
						u = t ? pi(t) : h,
						d = this._ptLookup,
						p = this._pt;
					if ((!e || "all" === e) && function (t, e) {
							for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];);
							return i < 0
						}(h, u)) return "all" === e && (this._pt = 0), Si(this);
					for (n = this._op = this._op || [], "all" !== e && (Jt(e) && (o = {}, Ae(e, (function (t) {
							return o[t] = 1
						})), e = o), e = function (t, e) {
							var i, n, r, s, a = t[0] ? Ce(t[0]).harness : 0,
								o = a && a.aliases;
							if (!o) return e;
							for (n in i = Be({}, e), o)
								if (n in i)
									for (r = (s = o[n].split(",")).length; r--;) i[s[r]] = i[n];
							return i
						}(h, e)), c = h.length; c--;)
						if (~u.indexOf(h[c]))
							for (o in r = d[c], "all" === e ? (n[c] = e, a = r, s = {}) : (s = n[c] = n[c] || {}, a = e), a)(l = r && r[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Ge(this, l, "_pt"), delete r[o]), "all" !== s && (s[o] = 1);
					return this._initted && !this._pt && p && Si(this), this
				}, e.to = function (t, i) {
					return new e(t, i, arguments[2])
				}, e.from = function (t, i) {
					return new e(t, Oe(arguments, 1))
				}, e.delayedCall = function (t, i, n, r) {
					return new e(i, 0, {
						immediateRender: !1,
						lazy: !1,
						overwrite: !1,
						delay: t,
						onComplete: i,
						onReverseComplete: i,
						onCompleteParams: n,
						onReverseCompleteParams: n,
						callbackScope: r
					})
				}, e.fromTo = function (t, i, n) {
					return new e(t, Oe(arguments, 2))
				}, e.set = function (t, i) {
					return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
				}, e.killTweensOf = function (t, e, i) {
					return Ot.killTweensOf(t, e, i)
				}, e
			}(Zi);
		ke(an.prototype, {
			_targets: [],
			_lazy: 0,
			_startAt: 0,
			_op: 0,
			_onInit: 0
		}), Ae("staggerTo,staggerFrom,staggerFromTo", (function (t) {
			an[t] = function () {
				var e = new Ji,
					i = hi.call(arguments, 0);
				return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
			}
		}));
		var on = function (t, e, i) {
				return t[e] = i
			},
			ln = function (t, e, i) {
				return t[e](i)
			},
			cn = function (t, e, i, n) {
				return t[e](n.fp, i)
			},
			hn = function (t, e, i) {
				return t.setAttribute(e, i)
			},
			un = function (t, e) {
				return $t(t[e]) ? ln : Qt(t[e]) && t.setAttribute ? hn : on
			},
			dn = function (t, e) {
				return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
			},
			pn = function (t, e) {
				return e.set(e.t, e.p, !!(e.s + e.c * t), e)
			},
			fn = function (t, e) {
				var i = e._pt,
					n = "";
				if (!t && e.b) n = e.b;
				else if (1 === t && e.e) n = e.e;
				else {
					for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
					n += e.c
				}
				e.set(e.t, e.p, n, e)
			},
			mn = function (t, e) {
				for (var i = e._pt; i;) i.r(t, i.d), i = i._next
			},
			gn = function (t, e, i, n) {
				for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r
			},
			vn = function (t) {
				for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? Ge(this, n, "_pt") : n.dep || (e = 1), n = i;
				return !e
			},
			yn = function (t, e, i, n) {
				n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
			},
			xn = function (t) {
				for (var e, i, n, r, s = t._pt; s;) {
					for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
					(s._prev = i ? i._prev : r) ? s._prev._next = s: n = s, (s._next = i) ? i._prev = s : r = s, s = e
				}
				t._pt = n
			},
			_n = function () {
				function t(t, e, i, n, r, s, a, o, l) {
					this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || dn, this.d = a || this, this.set = o || on, this.pr = l || 0, this._next = t, t && (t._prev = this)
				}
				return t.prototype.modifier = function (t, e, i) {
					this.mSet = this.mSet || this.set, this.set = yn, this.m = t, this.mt = i, this.tween = e
				}, t
			}();
		Ae(De + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
			return ye[t] = 1
		})), de.TweenMax = de.TweenLite = an, de.TimelineLite = de.TimelineMax = Ji, Ot = new Ji({
			sortChildren: !1,
			defaults: Vt,
			autoRemoveChildren: !0,
			id: "root",
			smoothChildTiming: !0
		}), Ut.stringFilter = Fi;
		var wn = {
			registerPlugin: function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				e.forEach((function (t) {
					return Di(t)
				}))
			},
			timeline: function (t) {
				return new Ji(t)
			},
			getTweensOf: function (t, e) {
				return Ot.getTweensOf(t, e)
			},
			getProperty: function (t, e, i, n) {
				Jt(t) && (t = pi(t)[0]);
				var r = Ce(t || {}).get,
					s = i ? ze : Ne;
				return "native" === i && (i = ""), t ? e ? s((we[e] && we[e].get || r)(t, e, i, n)) : function (e, i, n) {
					return s((we[e] && we[e].get || r)(t, e, i, n))
				} : t
			},
			quickSetter: function (t, e, i) {
				if ((t = pi(t)).length > 1) {
					var n = t.map((function (t) {
							return Sn.quickSetter(t, e, i)
						})),
						r = n.length;
					return function (t) {
						for (var e = r; e--;) n[e](t)
					}
				}
				t = t[0] || {};
				var s = we[e],
					a = Ce(t),
					o = a.harness && (a.harness.aliases || {})[e] || e,
					l = s ? function (e) {
						var n = new s;
						Rt._pt = 0, n.init(t, i ? e + i : e, Rt, 0, [t]), n.render(1, n), Rt._pt && mn(1, Rt)
					} : a.set(t, o);
				return s ? l : function (e) {
					return l(t, o, i ? e + i : e, a, 1)
				}
			},
			isTweening: function (t) {
				return Ot.getTweensOf(t, !0).length > 0
			},
			defaults: function (t) {
				return t && t.ease && (t.ease = Gi(t.ease, Vt.ease)), Ue(Vt, t || {})
			},
			config: function (t) {
				return Ue(Ut, t || {})
			},
			registerEffect: function (t) {
				var e = t.name,
					i = t.effect,
					n = t.plugins,
					r = t.defaults,
					s = t.extendTimeline;
				(n || "").split(",").forEach((function (t) {
					return t && !we[t] && !de[t] && me()
				})), be[e] = function (t, e, n) {
					return i(pi(t), ke(e || {}, r), n)
				}, s && (Ji.prototype[e] = function (t, i, n) {
					return this.add(be[e](t, te(i) ? i : (n = i) && {}, this), n)
				})
			},
			registerEase: function (t, e) {
				ki[t] = Gi(e)
			},
			parseEase: function (t, e) {
				return arguments.length ? Gi(t, e) : ki
			},
			getById: function (t) {
				return Ot.getById(t)
			},
			exportRoot: function (t, e) {
				void 0 === t && (t = {});
				var i, n, r = new Ji(t);
				for (r.smoothChildTiming = ee(t.smoothChildTiming), Ot.remove(r), r._dp = 0, r._time = r._tTime = Ot._time, i = Ot._first; i;) n = i._next, !e && !i._dur && i instanceof an && i.vars.onComplete === i._targets[0] || ti(r, i, i._start - i._delay), i = n;
				return ti(Ot, r, 0), r
			},
			utils: {
				wrap: function t(e, i, n) {
					var r = i - e;
					return se(e) ? xi(e, t(0, e.length), i) : oi(n, (function (t) {
						return (r + (t - e) % r) % r + e
					}))
				},
				wrapYoyo: function t(e, i, n) {
					var r = i - e,
						s = 2 * r;
					return se(e) ? xi(e, t(0, e.length - 1), i) : oi(n, (function (t) {
						return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t)
					}))
				},
				distribute: mi,
				random: yi,
				snap: vi,
				normalize: function (t, e, i) {
					return wi(t, e, 0, 1, i)
				},
				getUnit: ci,
				clamp: function (t, e, i) {
					return oi(i, (function (i) {
						return li(t, e, i)
					}))
				},
				splitColor: Ai,
				toArray: pi,
				mapRange: wi,
				pipe: function () {
					for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
					return function (t) {
						return e.reduce((function (t, e) {
							return e(t)
						}), t)
					}
				},
				unitize: function (t, e) {
					return function (i) {
						return t(parseFloat(i)) + (e || ci(i))
					}
				},
				interpolate: function t(e, i, n, r) {
					var s = isNaN(e + i) ? 0 : function (t) {
						return (1 - t) * e + t * i
					};
					if (!s) {
						var a, o, l, c, h, u = Jt(e),
							d = {};
						if (!0 === n && (r = 1) && (n = null), u) e = {
							p: e
						}, i = {
							p: i
						};
						else if (se(e) && !se(i)) {
							for (l = [], c = e.length, h = c - 2, o = 1; o < c; o++) l.push(t(e[o - 1], e[o]));
							c--, s = function (t) {
								t *= c;
								var e = Math.min(h, ~~t);
								return l[e](t - e)
							}, n = i
						} else r || (e = Be(se(e) ? [] : {}, e));
						if (!l) {
							for (a in i) Qi.call(d, e, a, "get", i[a]);
							s = function (t) {
								return mn(t, d) || (u ? e.p : e)
							}
						}
					}
					return oi(n, s)
				},
				shuffle: fi
			},
			install: fe,
			effects: be,
			ticker: Ni,
			updateRoot: Ji.updateRoot,
			plugins: we,
			globalTimeline: Ot,
			core: {
				PropTween: _n,
				globals: ge,
				Tween: an,
				Timeline: Ji,
				Animation: Zi,
				getCache: Ce,
				_removeLinkedListItem: Ge
			}
		};
		Ae("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
			return wn[t] = an[t]
		})), Ni.add(Ji.updateRoot), Rt = wn.to({}, {
			duration: 0
		});
		var bn = function (t, e) {
				for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
				return i
			},
			Mn = function (t, e) {
				return {
					name: t,
					rawVars: 1,
					init: function (t, i, n) {
						n._onInit = function (t) {
							var n, r;
							if (Jt(i) && (n = {}, Ae(i, (function (t) {
									return n[t] = 1
								})), i = n), e) {
								for (r in n = {}, i) n[r] = e(i[r]);
								i = n
							}! function (t, e) {
								var i, n, r, s = t._targets;
								for (i in e)
									for (n = s.length; n--;)(r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = bn(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i))
							}(t, i)
						}
					}
				}
			},
			Sn = wn.registerPlugin({
				name: "attr",
				init: function (t, e, i, n, r) {
					var s, a;
					for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s)) && (a.op = s), this._props.push(s)
				}
			}, {
				name: "endArray",
				init: function (t, e) {
					for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
				}
			}, Mn("roundProps", gi), Mn("modifiers"), Mn("snap", vi)) || wn;
		an.version = Ji.version = Sn.version = "3.5.1", zt = 1, ie() && zi();
		ki.Power0, ki.Power1, ki.Power2, ki.Power3, ki.Power4, ki.Linear, ki.Quad, ki.Cubic, ki.Quart, ki.Quint, ki.Strong, ki.Elastic, ki.Back, ki.SteppedEase, ki.Bounce, ki.Sine, ki.Expo, ki.Circ;
		var Dn, Tn, Cn, En, An, Ln, Pn, On, In = {},
			Fn = 180 / Math.PI,
			Nn = Math.PI / 180,
			zn = Math.atan2,
			kn = /([A-Z])/g,
			Rn = /(?:left|right|width|margin|padding|x)/i,
			Bn = /[\s,\(]\S/,
			Un = {
				autoAlpha: "opacity,visibility",
				scale: "scaleX,scaleY",
				alpha: "opacity"
			},
			Vn = function (t, e) {
				return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
			},
			Wn = function (t, e) {
				return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
			},
			Gn = function (t, e) {
				return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
			},
			Hn = function (t, e) {
				var i = e.s + e.c * t;
				e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
			},
			jn = function (t, e) {
				return e.set(e.t, e.p, t ? e.e : e.b, e)
			},
			qn = function (t, e) {
				return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
			},
			Xn = function (t, e, i) {
				return t.style[e] = i
			},
			Yn = function (t, e, i) {
				return t.style.setProperty(e, i)
			},
			Zn = function (t, e, i) {
				return t._gsap[e] = i
			},
			Jn = function (t, e, i) {
				return t._gsap.scaleX = t._gsap.scaleY = i
			},
			$n = function (t, e, i, n, r) {
				var s = t._gsap;
				s.scaleX = s.scaleY = i, s.renderTransform(r, s)
			},
			Kn = function (t, e, i, n, r) {
				var s = t._gsap;
				s[e] = i, s.renderTransform(r, s)
			},
			Qn = "transform",
			tr = Qn + "Origin",
			er = function (t, e) {
				var i = Tn.createElementNS ? Tn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Tn.createElement(t);
				return i.style ? i : Tn.createElement(t)
			},
			ir = function t(e, i, n) {
				var r = getComputedStyle(e);
				return r[i] || r.getPropertyValue(i.replace(kn, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, rr(i) || i, 1) || ""
			},
			nr = "O,Moz,ms,Ms,Webkit".split(","),
			rr = function (t, e, i) {
				var n = (e || An).style,
					r = 5;
				if (t in n && !i) return t;
				for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(nr[r] + t in n););
				return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? nr[r] : "") + t
			},
			sr = function () {
				(function () {
					return "undefined" != typeof window
				})() && window.document && (Dn = window, Tn = Dn.document, Cn = Tn.documentElement, An = er("div") || {
					style: {}
				}, Ln = er("div"), Qn = rr(Qn), tr = Qn + "Origin", An.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", On = !!rr("perspective"), En = 1)
			},
			ar = function t(e) {
				var i, n = er("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
					r = this.parentNode,
					s = this.nextSibling,
					a = this.style.cssText;
				if (Cn.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
					i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
				} catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
				return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Cn.removeChild(n), this.style.cssText = a, i
			},
			or = function (t, e) {
				for (var i = e.length; i--;)
					if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
			},
			lr = function (t) {
				var e;
				try {
					e = t.getBBox()
				} catch (i) {
					e = ar.call(t, !0)
				}
				return e && (e.width || e.height) || t.getBBox === ar || (e = ar.call(t, !0)), !e || e.width || e.x || e.y ? e : {
					x: +or(t, ["x", "cx", "x1"]) || 0,
					y: +or(t, ["y", "cy", "y1"]) || 0,
					width: 0,
					height: 0
				}
			},
			cr = function (t) {
				return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !lr(t))
			},
			hr = function (t, e) {
				if (e) {
					var i = t.style;
					e in In && e !== tr && (e = Qn), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(kn, "-$1").toLowerCase())) : i.removeAttribute(e)
				}
			},
			ur = function (t, e, i, n, r, s) {
				var a = new _n(t._pt, e, i, 0, 1, s ? qn : jn);
				return t._pt = a, a.b = n, a.e = r, t._props.push(i), a
			},
			dr = {
				deg: 1,
				rad: 1,
				turn: 1
			},
			pr = function t(e, i, n, r) {
				var s, a, o, l, c = parseFloat(n) || 0,
					h = (n + "").trim().substr((c + "").length) || "px",
					u = An.style,
					d = Rn.test(i),
					p = "svg" === e.tagName.toLowerCase(),
					f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
					m = 100,
					g = "px" === r,
					v = "%" === r;
				return r === h || !c || dr[r] || dr[h] ? c : ("px" !== h && !g && (c = t(e, i, n, "px")), l = e.getCTM && cr(e), v && (In[i] || ~i.indexOf("adius")) ? Le(c / (l ? e.getBBox()[d ? "width" : "height"] : e[f]) * m) : (u[d ? "width" : "height"] = m + (g ? h : r), a = ~i.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode, l && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Tn && a.appendChild || (a = Tn.body), (o = a._gsap) && v && o.width && d && o.time === Ni.time ? Le(c / o.width * m) : ((v || "%" === h) && (u.position = ir(e, "position")), a === e && (u.position = "static"), a.appendChild(An), s = An[f], a.removeChild(An), u.position = "absolute", d && v && ((o = Ce(a)).time = Ni.time, o.width = a[f]), Le(g ? s * c / m : s && c ? m / s * c : 0))))
			},
			fr = function (t, e, i, n) {
				var r;
				return En || sr(), e in Un && "transform" !== e && ~(e = Un[e]).indexOf(",") && (e = e.split(",")[0]), In[e] && "transform" !== e ? (r = Tr(t, n), r = "transformOrigin" !== e ? r[e] : Cr(ir(t, tr)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = xr[e] && xr[e](t, e, i) || ir(t, e) || Ee(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").indexOf(" ") ? pr(t, e, r, i) + i : r
			},
			mr = function (t, e, i, n) {
				if (!i || "none" === i) {
					var r = rr(e, t, 1),
						s = r && ir(t, r, 1);
					s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = ir(t, "borderTopColor"))
				}
				var a, o, l, c, h, u, d, p, f, m, g, v, y = new _n(this._pt, t.style, e, 0, 1, fn),
					x = 0,
					_ = 0;
				if (y.b = i, y.e = n, i += "", "auto" === (n += "") && (t.style[e] = n, n = ir(t, e) || n, t.style[e] = i), Fi(a = [i, n]), n = a[1], l = (i = a[0]).match(le) || [], (n.match(le) || []).length) {
					for (; o = le.exec(n);) d = o[0], f = n.substring(x, o.index), h ? h = (h + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (h = 1), d !== (u = l[_++] || "") && (c = parseFloat(u) || 0, g = u.substr((c + "").length), (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), m = d.substr((p + "").length), x = le.lastIndex - m.length, m || (m = m || Ut.units[e] || g, x === n.length && (n += m, y.e += m)), g !== m && (c = pr(t, e, u, m) || 0), y._pt = {
						_next: y._pt,
						p: f || 1 === _ ? f : ",",
						s: c,
						c: v ? v * p : p - c,
						m: h && h < 4 ? Math.round : 0
					});
					y.c = x < n.length ? n.substring(x, n.length) : ""
				} else y.r = "display" === e && "none" === n ? qn : jn;
				return he.test(n) && (y.e = 0), this._pt = y, y
			},
			gr = {
				top: "0%",
				bottom: "100%",
				left: "0%",
				right: "100%",
				center: "50%"
			},
			vr = function (t) {
				var e = t.split(" "),
					i = e[0],
					n = e[1] || "50%";
				return "top" !== i && "bottom" !== i && "left" !== n && "right" !== n || (t = i, i = n, n = t), e[0] = gr[i] || i, e[1] = gr[n] || n, e.join(" ")
			},
			yr = function (t, e) {
				if (e.tween && e.tween._time === e.tween._dur) {
					var i, n, r, s = e.t,
						a = s.style,
						o = e.u,
						l = s._gsap;
					if ("all" === o || !0 === o) a.cssText = "", n = 1;
					else
						for (r = (o = o.split(",")).length; --r > -1;) i = o[r], In[i] && (n = 1, i = "transformOrigin" === i ? tr : Qn), hr(s, i);
					n && (hr(s, Qn), l && (l.svg && s.removeAttribute("transform"), Tr(s, 1), l.uncache = 1))
				}
			},
			xr = {
				clearProps: function (t, e, i, n, r) {
					if ("isFromStart" !== r.data) {
						var s = t._pt = new _n(t._pt, e, i, 0, 0, yr);
						return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1
					}
				}
			},
			_r = [1, 0, 0, 1, 0, 0],
			wr = {},
			br = function (t) {
				return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
			},
			Mr = function (t) {
				var e = ir(t, Qn);
				return br(e) ? _r : e.substr(7).match(oe).map(Le)
			},
			Sr = function (t, e) {
				var i, n, r, s, a = t._gsap || Ce(t),
					o = t.style,
					l = Mr(t);
				return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? _r : l : (l !== _r || t.offsetParent || t === Cn || a.svg || (r = o.display, o.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextSibling, Cn.appendChild(t)), l = Mr(t), r ? o.display = r : hr(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : Cn.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
			},
			Dr = function (t, e, i, n, r, s) {
				var a, o, l, c = t._gsap,
					h = r || Sr(t, !0),
					u = c.xOrigin || 0,
					d = c.yOrigin || 0,
					p = c.xOffset || 0,
					f = c.yOffset || 0,
					m = h[0],
					g = h[1],
					v = h[2],
					y = h[3],
					x = h[4],
					_ = h[5],
					w = e.split(" "),
					b = parseFloat(w[0]) || 0,
					M = parseFloat(w[1]) || 0;
				i ? h !== _r && (o = m * y - g * v) && (l = b * (-g / o) + M * (m / o) - (m * _ - g * x) / o, b = b * (y / o) + M * (-v / o) + (v * _ - y * x) / o, M = l) : (b = (a = lr(t)).x + (~w[0].indexOf("%") ? b / 100 * a.width : b), M = a.y + (~(w[1] || w[0]).indexOf("%") ? M / 100 * a.height : M)), n || !1 !== n && c.smooth ? (x = b - u, _ = M - d, c.xOffset = p + (x * m + _ * v) - x, c.yOffset = f + (x * g + _ * y) - _) : c.xOffset = c.yOffset = 0, c.xOrigin = b, c.yOrigin = M, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!i, t.style[tr] = "0px 0px", s && (ur(s, c, "xOrigin", u, b), ur(s, c, "yOrigin", d, M), ur(s, c, "xOffset", p, c.xOffset), ur(s, c, "yOffset", f, c.yOffset)), t.setAttribute("data-svg-origin", b + " " + M)
			},
			Tr = function (t, e) {
				var i = t._gsap || new Yi(t);
				if ("x" in i && !e && !i.uncache) return i;
				var n, r, s, a, o, l, c, h, u, d, p, f, m, g, v, y, x, _, w, b, M, S, D, T, C, E, A, L, P, O, I, F, N = t.style,
					z = i.scaleX < 0,
					k = "px",
					R = "deg",
					B = ir(t, tr) || "0";
				return n = r = s = l = c = h = u = d = p = 0, a = o = 1, i.svg = !(!t.getCTM || !cr(t)), g = Sr(t, i.svg), i.svg && (T = !i.uncache && t.getAttribute("data-svg-origin"), Dr(t, T || B, !!T || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== _r && (_ = g[0], w = g[1], b = g[2], M = g[3], n = S = g[4], r = D = g[5], 6 === g.length ? (a = Math.sqrt(_ * _ + w * w), o = Math.sqrt(M * M + b * b), l = _ || w ? zn(w, _) * Fn : 0, (u = b || M ? zn(b, M) * Fn + l : 0) && (o *= Math.cos(u * Nn)), i.svg && (n -= f - (f * _ + m * b), r -= m - (f * w + m * M))) : (F = g[6], O = g[7], A = g[8], L = g[9], P = g[10], I = g[11], n = g[12], r = g[13], s = g[14], c = (v = zn(F, P)) * Fn, v && (T = S * (y = Math.cos(-v)) + A * (x = Math.sin(-v)), C = D * y + L * x, E = F * y + P * x, A = S * -x + A * y, L = D * -x + L * y, P = F * -x + P * y, I = O * -x + I * y, S = T, D = C, F = E), h = (v = zn(-b, P)) * Fn, v && (y = Math.cos(-v), I = M * (x = Math.sin(-v)) + I * y, _ = T = _ * y - A * x, w = C = w * y - L * x, b = E = b * y - P * x), l = (v = zn(w, _)) * Fn, v && (T = _ * (y = Math.cos(v)) + w * (x = Math.sin(v)), C = S * y + D * x, w = w * y - _ * x, D = D * y - S * x, _ = T, S = C), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, h = 180 - h), a = Le(Math.sqrt(_ * _ + w * w + b * b)), o = Le(Math.sqrt(D * D + F * F)), v = zn(S, D), u = Math.abs(v) > 2e-4 ? v * Fn : 0, p = I ? 1 / (I < 0 ? -I : I) : 0), i.svg && (T = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !br(ir(t, Qn)), T && t.setAttribute("transform", T))), Math.abs(u) > 90 && Math.abs(u) < 270 && (z ? (a *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, u += u <= 0 ? 180 : -180)), i.x = ((i.xPercent = n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + k, i.y = ((i.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + k, i.z = s + k, i.scaleX = Le(a), i.scaleY = Le(o), i.rotation = Le(l) + R, i.rotationX = Le(c) + R, i.rotationY = Le(h) + R, i.skewX = u + R, i.skewY = d + R, i.transformPerspective = p + k, (i.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (N[tr] = Cr(B)), i.xOffset = i.yOffset = 0, i.force3D = Ut.force3D, i.renderTransform = i.svg ? Fr : On ? Ir : Ar, i.uncache = 0, i
			},
			Cr = function (t) {
				return (t = t.split(" "))[0] + " " + t[1]
			},
			Er = function (t, e, i) {
				var n = ci(e);
				return Le(parseFloat(e) + parseFloat(pr(t, "x", i + "px", n))) + n
			},
			Ar = function (t, e) {
				e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ir(t, e)
			},
			Lr = "0deg",
			Pr = "0px",
			Or = ") ",
			Ir = function (t, e) {
				var i = e || this,
					n = i.xPercent,
					r = i.yPercent,
					s = i.x,
					a = i.y,
					o = i.z,
					l = i.rotation,
					c = i.rotationY,
					h = i.rotationX,
					u = i.skewX,
					d = i.skewY,
					p = i.scaleX,
					f = i.scaleY,
					m = i.transformPerspective,
					g = i.force3D,
					v = i.target,
					y = i.zOrigin,
					x = "",
					_ = "auto" === g && t && 1 !== t || !0 === g;
				if (y && (h !== Lr || c !== Lr)) {
					var w, b = parseFloat(c) * Nn,
						M = Math.sin(b),
						S = Math.cos(b);
					b = parseFloat(h) * Nn, w = Math.cos(b), s = Er(v, s, M * w * -y), a = Er(v, a, -Math.sin(b) * -y), o = Er(v, o, S * w * -y + y)
				}
				m !== Pr && (x += "perspective(" + m + Or), (n || r) && (x += "translate(" + n + "%, " + r + "%) "), (_ || s !== Pr || a !== Pr || o !== Pr) && (x += o !== Pr || _ ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Or), l !== Lr && (x += "rotate(" + l + Or), c !== Lr && (x += "rotateY(" + c + Or), h !== Lr && (x += "rotateX(" + h + Or), u === Lr && d === Lr || (x += "skew(" + u + ", " + d + Or), 1 === p && 1 === f || (x += "scale(" + p + ", " + f + Or), v.style[Qn] = x || "translate(0, 0)"
			},
			Fr = function (t, e) {
				var i, n, r, s, a, o = e || this,
					l = o.xPercent,
					c = o.yPercent,
					h = o.x,
					u = o.y,
					d = o.rotation,
					p = o.skewX,
					f = o.skewY,
					m = o.scaleX,
					g = o.scaleY,
					v = o.target,
					y = o.xOrigin,
					x = o.yOrigin,
					_ = o.xOffset,
					w = o.yOffset,
					b = o.forceCSS,
					M = parseFloat(h),
					S = parseFloat(u);
				d = parseFloat(d), p = parseFloat(p), (f = parseFloat(f)) && (p += f = parseFloat(f), d += f), d || p ? (d *= Nn, p *= Nn, i = Math.cos(d) * m, n = Math.sin(d) * m, r = Math.sin(d - p) * -g, s = Math.cos(d - p) * g, p && (f *= Nn, a = Math.tan(p - f), r *= a = Math.sqrt(1 + a * a), s *= a, f && (a = Math.tan(f), i *= a = Math.sqrt(1 + a * a), n *= a)), i = Le(i), n = Le(n), r = Le(r), s = Le(s)) : (i = m, s = g, n = r = 0), (M && !~(h + "").indexOf("px") || S && !~(u + "").indexOf("px")) && (M = pr(v, "x", h, "px"), S = pr(v, "y", u, "px")), (y || x || _ || w) && (M = Le(M + y - (y * i + x * r) + _), S = Le(S + x - (y * n + x * s) + w)), (l || c) && (a = v.getBBox(), M = Le(M + l / 100 * a.width), S = Le(S + c / 100 * a.height)), a = "matrix(" + i + "," + n + "," + r + "," + s + "," + M + "," + S + ")", v.setAttribute("transform", a), b && (v.style[Qn] = a)
			},
			Nr = function (t, e, i, n, r, s) {
				var a, o, l = 360,
					c = Jt(r),
					h = parseFloat(r) * (c && ~r.indexOf("rad") ? Fn : 1),
					u = s ? h * s : h - n,
					d = n + u + "deg";
				return c && ("short" === (a = r.split("_")[1]) && (u %= l) !== u % 180 && (u += u < 0 ? l : -360), "cw" === a && u < 0 ? u = (u + 36e9) % l - ~~(u / l) * l : "ccw" === a && u > 0 && (u = (u - 36e9) % l - ~~(u / l) * l)), t._pt = o = new _n(t._pt, e, i, n, u, Wn), o.e = d, o.u = "deg", t._props.push(i), o
			},
			zr = function (t, e, i) {
				var n, r, s, a, o, l, c, h = Ln.style,
					u = i._gsap;
				for (r in h.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", h[Qn] = e, Tn.body.appendChild(Ln), n = Tr(Ln, 1), In)(s = u[r]) !== (a = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (o = ci(s) !== (c = ci(a)) ? pr(i, r, s, c) : parseFloat(s), l = parseFloat(a), t._pt = new _n(t._pt, u, r, o, l - o, Vn), t._pt.u = c || 0, t._props.push(r));
				Tn.body.removeChild(Ln)
			};
		Ae("padding,margin,Width,Radius", (function (t, e) {
			var i = "Top",
				n = "Right",
				r = "Bottom",
				s = "Left",
				a = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map((function (i) {
					return e < 2 ? t + i : "border" + i + t
				}));
			xr[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
				var s, o;
				if (arguments.length < 4) return s = a.map((function (e) {
					return fr(t, e, i)
				})), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
				s = (n + "").split(" "), o = {}, a.forEach((function (t, e) {
					return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
				})), t.init(e, o, r)
			}
		}));
		var kr = {
			name: "css",
			register: sr,
			targetTest: function (t) {
				return t.style && t.nodeType
			},
			init: function (t, e, i, n, r) {
				var s, a, o, l, c, h, u, d, p, f, m, g, v, y, x, _ = this._props,
					w = t.style;
				for (u in En || sr(), e)
					if ("autoRound" !== u && (a = e[u], !we[u] || !tn(u, e, i, n, t, r)))
						if (c = typeof a, h = xr[u], "function" === c && (c = typeof (a = a.call(i, n, t, r))), "string" === c && ~a.indexOf("random(") && (a = _i(a)), h) h(this, t, u, a, i) && (x = 1);
						else if ("--" === u.substr(0, 2)) this.add(w, "setProperty", getComputedStyle(t).getPropertyValue(u) + "", a + "", n, r, 0, 0, u);
				else if ("undefined" !== c) {
					if (s = fr(t, u), l = parseFloat(s), (f = "string" === c && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), o = parseFloat(a), u in Un && ("autoAlpha" === u && (1 === l && "hidden" === fr(t, "visibility") && o && (l = 0), ur(this, w, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== u && "transform" !== u && ~(u = Un[u]).indexOf(",") && (u = u.split(",")[0])), m = u in In)
						if (g || ((v = t._gsap).renderTransform || Tr(t), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new _n(this._pt, w, Qn, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === u) this._pt = new _n(this._pt, v, "scaleY", v.scaleY, f ? f * o : o - v.scaleY), _.push("scaleY", u), u += "X";
						else {
							if ("transformOrigin" === u) {
								a = vr(a), v.svg ? Dr(t, a, 0, y, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && ur(this, v, "zOrigin", v.zOrigin, p), ur(this, w, u, Cr(s), Cr(a)));
								continue
							}
							if ("svgOrigin" === u) {
								Dr(t, a, 1, y, 0, this);
								continue
							}
							if (u in wr) {
								Nr(this, v, u, l, a, f);
								continue
							}
							if ("smoothOrigin" === u) {
								ur(this, v, "smooth", v.smooth, a);
								continue
							}
							if ("force3D" === u) {
								v[u] = a;
								continue
							}
							if ("transform" === u) {
								zr(this, a, t);
								continue
							}
						}
					else u in w || (u = rr(u) || u);
					if (m || (o || 0 === o) && (l || 0 === l) && !Bn.test(a) && u in w) o || (o = 0), (d = (s + "").substr((l + "").length)) !== (p = ci(a) || (u in Ut.units ? Ut.units[u] : d)) && (l = pr(t, u, s, p)), this._pt = new _n(this._pt, m ? v : w, u, l, f ? f * o : o - l, "px" !== p || !1 === e.autoRound || m ? Vn : Hn), this._pt.u = p || 0, d !== p && (this._pt.b = s, this._pt.r = Gn);
					else if (u in w) mr.call(this, t, u, s, a);
					else {
						if (!(u in t)) continue;
						this.add(t, u, t[u], a, n, r)
					}
					_.push(u)
				}
				x && xn(this)
			},
			get: fr,
			aliases: Un,
			getSetter: function (t, e, i) {
				var n = Un[e];
				return n && n.indexOf(",") < 0 && (e = n), e in In && e !== tr && (t._gsap.x || fr(t, "x")) ? i && Pn === i ? "scale" === e ? Jn : Zn : (Pn = i || {}) && ("scale" === e ? $n : Kn) : t.style && !Qt(t.style[e]) ? Xn : ~e.indexOf("-") ? Yn : un(t, e)
			},
			core: {
				_removeProperty: hr,
				_getMatrix: Sr
			}
		};
		Sn.utils.checkPrefix = rr,
			function (t, e, i, n) {
				var r = Ae(t + "," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
					In[t] = 1
				}));
				Ae(e, (function (t) {
					Ut.units[t] = "deg", wr[t] = 1
				})), Un[r[13]] = t + "," + e, Ae("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
					var e = t.split(":");
					Un[e[1]] = r[e[0]]
				}))
			}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
				Ut.units[t] = "px"
			})), Sn.registerPlugin(kr);
		var Rr = Sn.registerPlugin(kr) || Sn;
		Rr.core.Tween;
		class Br {
			constructor({
				holder: t,
				settings: e
			}) {
				this.holder = t, this.settings = { ...e
				}, this.clickListener = t => this.onClick(t)
			}
			init() {
				this.controls = [...this.holder.querySelectorAll("[data-control]")], this.controlsData = this.controls.map((t => ({
					name: t.getAttribute("data-control"),
					control: t
				}))), this.attachEvents()
			}
			onClick(t, e) {
				const {
					name: i
				} = t;
				switch (e && e(t), i) {
					case "accept":
						return this.accept();
					default:
						return this.close()
				}
			}
			accept() {
				return this.closeAnimation((() => this.setCookies()))
			}
			close() {
				return this.closeAnimation((() => this.destroy()))
			}
			openAnimation(t) {
				return Rr.from(this.holder, {
					duration: .7,
					y: "150%",
					onComplete: t && t
				})
			}
			closeAnimation(t) {
				return Rr.to(this.holder, {
					duration: .7,
					y: "150%",
					onComplete: t && t
				})
			}
			attachEvents() {
				this.controlsData.forEach((t => {
					const {
						name: e,
						control: i
					} = t;
					i.addEventListener("click", (() => {
						h(`COOKIES.${e}`, t), this.onClick(t)
					}))
				}))
			}
			setCookies() {
				return this
			}
			destroy() {
				this.holder.remove()
			}
		}
		class Ur {
			constructor({
				cursor: t,
				settings: e
			}) {
				this.cursor = t, this.settings = e, this.hoverClass = this.settings.modifier ? `${this.cursor.hoverClass}--${this.settings.modifier}` : this.cursor.hoverClass
			}
			init() {
				this.cursor.holder && (this.elements = [...document.querySelectorAll(this.settings.selector)], this.attachEvents())
			}
			attachEvents() {
				this.elements.forEach((t => {
					const e = {
							node: t,
							theme: t.dataset.cursorTheme
						},
						i = () => this.enterEvent(e),
						n = () => this.leaveEvent(e);
					t.addEventListener(this.cursor.enterEvent, i), t.addEventListener(this.cursor.leaveEvent, n), document.addEventListener(g.start, (() => {
						t.removeEventListener(this.cursor.enterEvent, i), t.removeEventListener(this.cursor.leaveEvent, n), this.leaveEvent(e)
					}))
				}))
			}
			enterEvent({
				theme: t
			}) {
				this.cursor.addClass(this.hoverClass), t && this.cursor.addTheme({
					theme: t
				}), this.show()
			}
			leaveEvent({
				theme: t
			}) {
				this.cursor.removeClass(this.hoverClass), t && this.cursor.removeTheme(), this.hide()
			}
			show() {
				return this
			}
			hide() {
				return this
			}
		}
		const Vr = new class {
			constructor(t) {
				Object.assign(this, t), this.moveEvent = "mousemove", this.enterEvent = "mouseenter", this.leaveEvent = "mouseleave", this.clientX = -100, this.clientY = -100
			}
			init() {
				this.holder && !c() && (this.cursorCircle = this.holder.querySelector(".custom-cursor__body"), this.cursorSize = {
					circle: {
						width: this.cursorCircle.offsetWidth,
						height: this.cursorCircle.offsetHeight
					}
				}, a.classList.add(this.activeClass), this.revealCursor(), this.attachEvents())
			}
			attachEvents() {
				this.moveListener = t => this.setPosition(t), document.addEventListener(this.moveEvent, this.moveListener, {
					passive: !0
				})
			}
			setPosition({
				clientX: t,
				clientY: e
			}) {
				this.clientX = t, this.clientY = e, this.render()
			}
			addClass(t) {
				this.holder.classList.add(t)
			}
			addTheme({
				theme: t
			}) {
				this.holder.setAttribute("data-theme", t)
			}
			removeTheme() {
				this.holder.removeAttribute("data-theme")
			}
			removeClass(t) {
				this.holder.classList.remove(t)
			}
			hasClass(t) {
				return this.holder.classList.contains(t)
			}
			render() {
				Rr.to(this.cursorCircle, {
					duration: this.animationSpeed,
					x: this.clientX - this.cursorSize.circle.width / 2,
					y: this.clientY - this.cursorSize.circle.height / 2,
					ease: "power2.out"
				})
			}
			draw() {
				this.removeClass(this.stoppedClass), Rr.ticker.add(this.renderListener)
			}
			stopCursor() {
				this.addClass(this.stoppedClass), Rr.ticker.remove(this.renderListener)
			}
			revealCursor() {
				this.holder.classList.remove(this.hiddenClass)
			}
			hideCursor() {
				this.holder.classList.add(this.hiddenClass)
			}
			destroyCursor() {
				this.removeTheme(), this.hideCursor(), this.removeClass(this.hoverClass), document.removeEventListener(this.moveEvent, this.moveListener), this.stopCursor()
			}
		}({
			holder: document.querySelector("[data-page-cursor]"),
			activeClass: "custom-cursor--enabled",
			stoppedClass: "is-stopped",
			hiddenClass: "is-hidden",
			hoverClass: "is-hover",
			animationSpeed: .4
		});
		var Wr, Gr, Hr, jr, qr, Xr, Yr, Zr, Jr, $r, Kr, Qr, ts, es, is, ns, rs, ss, as, os, ls, cs, hs, us, ds, ps = i(21),
			fs = 1,
			ms = [],
			gs = [],
			vs = Date.now,
			ys = vs(),
			xs = 0,
			_s = 1,
			ws = function (t) {
				return t
			},
			bs = function () {
				return "undefined" != typeof window
			},
			Ms = function () {
				return Wr || bs() && (Wr = window.gsap) && Wr.registerPlugin && Wr
			},
			Ss = function (t) {
				return !!~Yr.indexOf(t)
			},
			Ds = function (t, e) {
				return ~ms.indexOf(t) && ms[ms.indexOf(t) + 1][e]
			},
			Ts = function (t, e) {
				var i = e.s,
					n = e.sc,
					r = gs.indexOf(t),
					s = n === ea.sc ? 1 : 2;
				return !~r && (r = gs.push(t) - 1), gs[r + s] || (gs[r + s] = Ds(t, i) || (Ss(t) ? n : function (e) {
					return arguments.length ? t[i] = e : t[i]
				}))
			},
			Cs = function (t) {
				return Ds(t, "getBoundingClientRect") || (Ss(t) ? function () {
					return Ba.width = Hr.innerWidth, Ba.height = Hr.innerHeight, Ba
				} : function () {
					return ra(t)
				})
			},
			Es = function (t, e) {
				var i = e.s,
					n = e.d2,
					r = e.d,
					s = e.a;
				return (i = "scroll" + n) && (s = Ds(t, i)) ? s() - Cs(t)()[r] : Ss(t) ? Math.max(qr[i], Xr[i]) - (Hr["inner" + n] || qr["client" + n] || Xr["client" + n]) : t[i] - t["offset" + n]
			},
			As = function (t, e) {
				for (var i = 0; i < ls.length; i += 3)(!e || ~e.indexOf(ls[i + 1])) && t(ls[i], ls[i + 1], ls[i + 2])
			},
			Ls = function (t) {
				return "string" == typeof t
			},
			Ps = function (t) {
				return "function" == typeof t
			},
			Os = function (t) {
				return "number" == typeof t
			},
			Is = function (t) {
				return "object" == typeof t
			},
			Fs = function (t) {
				return Ps(t) && t()
			},
			Ns = function (t, e) {
				return function () {
					var i = Fs(t),
						n = Fs(e);
					return function () {
						Fs(i), Fs(n)
					}
				}
			},
			zs = Math.abs,
			ks = "scrollLeft",
			Rs = "scrollTop",
			Bs = "left",
			Us = "top",
			Vs = "right",
			Ws = "bottom",
			Gs = "width",
			Hs = "height",
			js = "Right",
			qs = "Left",
			Xs = "Top",
			Ys = "Bottom",
			Zs = "padding",
			Js = "margin",
			$s = "Width",
			Ks = "Height",
			Qs = "px",
			ta = {
				s: ks,
				p: Bs,
				p2: qs,
				os: Vs,
				os2: js,
				d: Gs,
				d2: $s,
				a: "x",
				sc: function (t) {
					return arguments.length ? Hr.scrollTo(t, ea.sc()) : Hr.pageXOffset || jr.scrollLeft || qr.scrollLeft || Xr.scrollLeft || 0
				}
			},
			ea = {
				s: Rs,
				p: Us,
				p2: Xs,
				os: Ws,
				os2: Ys,
				d: Hs,
				d2: Ks,
				a: "y",
				op: ta,
				sc: function (t) {
					return arguments.length ? Hr.scrollTo(ta.sc(), t) : Hr.pageYOffset || jr.scrollTop || qr.scrollTop || Xr.scrollTop || 0
				}
			},
			ia = function (t) {
				return Hr.getComputedStyle(t)
			},
			na = function (t, e) {
				for (var i in e) i in t || (t[i] = e[i]);
				return t
			},
			ra = function (t, e) {
				var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== ia(t)[rs] && Wr.to(t, {
						x: 0,
						y: 0,
						xPercent: 0,
						yPercent: 0,
						rotation: 0,
						rotationX: 0,
						rotationY: 0,
						scale: 1,
						skewX: 0,
						skewY: 0
					}).progress(1),
					n = t.getBoundingClientRect();
				return i && i.progress(0).kill(), n
			},
			sa = function (t, e) {
				var i = e.d2;
				return t["offset" + i] || t["client" + i] || 0
			},
			aa = function (t, e, i, n) {
				return i.split(",").forEach((function (i) {
					return t(e, i, n)
				}))
			},
			oa = function (t, e, i) {
				return t.addEventListener(e, i, {
					passive: !0
				})
			},
			la = function (t, e, i) {
				return t.removeEventListener(e, i)
			},
			ca = {
				startColor: "green",
				endColor: "red",
				indent: 0,
				fontSize: "16px",
				fontWeight: "normal"
			},
			ha = {
				toggleActions: "play",
				anticipatePin: 0
			},
			ua = {
				top: 0,
				left: 0,
				center: .5,
				bottom: 1,
				right: 1
			},
			da = function (t, e) {
				if (Ls(t)) {
					var i = t.indexOf("="),
						n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
					n && (t.indexOf("%") > i && (n *= e / 100), t = t.substr(0, i - 1)), t = n + (t in ua ? ua[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
				}
				return t
			},
			pa = function (t, e, i, n, r, s, a) {
				var o = r.startColor,
					l = r.endColor,
					c = r.fontSize,
					h = r.indent,
					u = r.fontWeight,
					d = jr.createElement("div"),
					p = Ss(i) || "fixed" === Ds(i, "pinType"),
					f = -1 !== t.indexOf("scroller"),
					m = p ? Xr : i,
					g = -1 !== t.indexOf("start"),
					v = g ? o : l,
					y = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
				return y += "position:" + (f && p ? "fixed;" : "absolute;"), (f || !p) && (y += (n === ea ? Vs : Ws) + ":" + (s + parseFloat(h)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = g, d.setAttribute("class", "gsap-marker-" + t), d.style.cssText = y, d.innerText = e || 0 === e ? t + "-" + e : t, m.insertBefore(d, m.children[0]), d._offset = d["offset" + n.op.d2], fa(d, 0, n, g), d
			},
			fa = function (t, e, i, n) {
				var r = {
						display: "block"
					},
					s = i[n ? "os2" : "p2"],
					a = i[n ? "p2" : "os2"];
				t._isFlipped = n, r[i.a + "Percent"] = n ? -100 : 0, r[i.a] = n ? 1 : 0, r["border" + s + $s] = 1, r["border" + a + $s] = 0, r[i.p] = e, Wr.set(t, r)
			},
			ma = [],
			ga = {},
			va = function () {
				return $r || ($r = Jr(Oa))
			},
			ya = function () {
				$r || ($r = Jr(Oa), xs || Da("scrollStart"), xs = vs())
			},
			xa = function () {
				return !is && Zr.restart(!0)
			},
			_a = {},
			wa = [],
			ba = [],
			Ma = function (t) {
				var e, i = Wr.ticker.frame,
					n = [],
					r = 0;
				if (ds !== i || fs) {
					for (Ea(); r < ba.length; r += 4)(e = Hr.matchMedia(ba[r]).matches) !== ba[r + 3] && (ba[r + 3] = e, e ? n.push(r) : Ea(1, ba[r]) || Ps(ba[r + 2]) && ba[r + 2]());
					for (Ca(), r = 0; r < n.length; r++) e = n[r], us = ba[e], ba[e + 2] = ba[e + 1](t);
					us = 0, Aa(0, 1), ds = i, Da("matchMedia")
				}
			},
			Sa = function t() {
				return la(Ha, "scrollEnd", t) || Aa(!0)
			},
			Da = function (t) {
				return _a[t] && _a[t].map((function (t) {
					return t()
				})) || wa
			},
			Ta = [],
			Ca = function (t) {
				for (var e = 0; e < Ta.length; e += 4) t && Ta[e + 3] !== t || (Ta[e].style.cssText = Ta[e + 1], Ta[e + 2].uncache = 1)
			},
			Ea = function (t, e) {
				var i;
				for (ss = 0; ss < ma.length; ss++) i = ma[ss], e && i.media !== e || (t ? i.kill(1) : (i.scroll.rec || (i.scroll.rec = i.scroll()), i.revert()));
				Ca(e), e || Da("revert")
			},
			Aa = function (t, e) {
				if (!xs || t) {
					var i = Da("refreshInit");
					for (cs && Ha.sort(), e || Ea(), ss = 0; ss < ma.length; ss++) ma[ss].refresh();
					for (i.forEach((function (t) {
							return t && t.render && t.render(-1)
						})), ss = ma.length; ss--;) ma[ss].scroll.rec = 0;
					Zr.pause(), Da("refresh")
				} else oa(Ha, "scrollEnd", Sa)
			},
			La = 0,
			Pa = 1,
			Oa = function () {
				var t = ma.length,
					e = vs(),
					i = e - ys >= 50,
					n = t && ma[0].scroll();
				if (Pa = La > n ? -1 : 1, La = n, i && (xs && !ns && e - xs > 200 && (xs = 0, Da("scrollEnd")), ts = ys, ys = e), Pa < 0) {
					for (ss = t; ss--;) ma[ss] && ma[ss].update(0, i);
					Pa = 1
				} else
					for (ss = 0; ss < t; ss++) ma[ss] && ma[ss].update(0, i);
				$r = 0
			},
			Ia = [Bs, Us, Ws, Vs, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float"],
			Fa = Ia.concat([Gs, Hs, "boxSizing", "maxWidth", "maxHeight", "position", Js, Zs, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
			Na = function (t, e, i, n) {
				if (t.parentNode !== e) {
					for (var r, s = Ia.length, a = e.style, o = t.style; s--;) a[r = Ia[s]] = i[r];
					a.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (a.display = "inline-block"), o.bottom = o.right = "auto", a.overflow = "visible", a.boxSizing = "border-box", a.width = sa(t, ta) + Qs, a.height = sa(t, ea) + Qs, a.padding = o.margin = o.top = o.left = "0", ka(n), o.width = o.maxWidth = i.width, o.height = o.maxHeight = i.height, o.padding = i.padding, t.parentNode.insertBefore(e, t), e.appendChild(t)
				}
			},
			za = /([A-Z])/g,
			ka = function (t) {
				if (t)
					for (var e, i, n = t.t.style, r = t.length, s = 0; s < r; s += 2) i = t[s + 1], e = t[s], i ? n[e] = i : n[e] && n.removeProperty(e.replace(za, "-$1").toLowerCase())
			},
			Ra = function (t) {
				for (var e = Fa.length, i = t.style, n = [], r = 0; r < e; r++) n.push(Fa[r], i[Fa[r]]);
				return n.t = t, n
			},
			Ba = {
				left: 0,
				top: 0
			},
			Ua = function (t, e, i, n, r, s, a, o, l, c, h, u) {
				if (Ps(t) && (t = t(o)), Ls(t) && "max" === t.substr(0, 3) && (t = u + ("=" === t.charAt(4) ? da("0" + t.substr(3), i) : 0)), Os(t)) a && fa(a, i, n, !0);
				else {
					Ps(e) && (e = e(o));
					var d, p, f, m = Kr(e)[0] || Xr,
						g = ra(m) || {},
						v = t.split(" ");
					g && (g.left || g.top) || "none" !== ia(m).display || (f = m.style.display, m.style.display = "block", g = ra(m), f ? m.style.display = f : m.style.removeProperty("display")), d = da(v[0], g[n.d]), p = da(v[1] || "0", i), t = g[n.p] - l[n.p] - c + d + r - p, a && fa(a, p, n, i - p < 20 || a._isStart && p > 20), i -= i - p
				}
				if (s) {
					var y = t + i,
						x = s._isStart;
					u = "scroll" + n.d2, fa(s, y, n, x && y > 20 || !x && (h ? Math.max(Xr[u], qr[u]) : s.parentNode[u]) <= y + 1), h && (l = ra(a), h && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + Qs))
				}
				return Math.round(t)
			},
			Va = /(?:webkit|moz|length|cssText)/i,
			Wa = function (t, e, i, n) {
				if (t.parentNode !== e) {
					var r, s, a = t.style;
					if (e === Xr) {
						for (r in t._stOrig = a.cssText, s = ia(t)) + r || Va.test(r) || !s[r] || "string" != typeof a[r] || "0" === r || (a[r] = s[r]);
						a.top = i, a.left = n
					} else a.cssText = t._stOrig;
					Wr.core.getCache(t).uncache = 1, e.appendChild(t)
				}
			},
			Ga = function (t, e) {
				var i, n, r = Ts(t, e),
					s = "_scroll" + e.p2;
				return t[s] = r,
					function e(a, o, l, c, h) {
						var u = e.tween,
							d = o.onComplete,
							p = {};
						return u && u.kill(), i = Math.round(l), o[s] = a, o.modifiers = p, p[s] = function (t) {
							return (t = Math.round(r())) !== i && t !== n ? (u.kill(), e.tween = 0) : t = l + c * u.ratio + h * u.ratio * u.ratio, n = i, i = Math.round(t)
						}, o.onComplete = function () {
							e.tween = 0, d && d.call(u)
						}, u = e.tween = Wr.to(t, o)
					}
			};
		ta.op = ea;
		var Ha = function () {
			function t(e, i) {
				Gr || t.register(Wr), this.init(e, i)
			}
			return t.prototype.init = function (e, i) {
				if (this.progress = 0, this.vars && this.kill(1), _s) {
					var n, r, s, a, o, l, c, h, u, d, p, f, m, g, v, y, x, _, w, b, M, S, D, T, C, E, A, L, P, O, I, F, N, z, k, R, B, U = (e = na(Ls(e) || Os(e) || e.nodeType ? {
							trigger: e
						} : e, ha)).horizontal ? ta : ea,
						V = e,
						W = V.onUpdate,
						G = V.toggleClass,
						H = V.id,
						j = V.onToggle,
						q = V.onRefresh,
						X = V.scrub,
						Y = V.trigger,
						Z = V.pin,
						J = V.pinSpacing,
						$ = V.invalidateOnRefresh,
						K = V.anticipatePin,
						Q = V.onScrubComplete,
						tt = V.onSnapComplete,
						et = V.once,
						it = V.snap,
						nt = V.pinReparent,
						rt = !X && 0 !== X,
						st = Kr(e.scroller || Hr)[0],
						at = Wr.core.getCache(st),
						ot = Ss(st),
						lt = "pinType" in e ? "fixed" === e.pinType : ot || "fixed" === Ds(st, "pinType"),
						ct = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
						ht = rt && e.toggleActions.split(" "),
						ut = "markers" in e ? e.markers : ha.markers,
						dt = ot ? 0 : parseFloat(ia(st)["border" + U.p2 + $s]) || 0,
						pt = this,
						ft = e.onRefreshInit && function () {
							return e.onRefreshInit(pt)
						},
						mt = function (t, e, i) {
							var n = i.d,
								r = i.d2,
								s = i.a;
							return (s = Ds(t, "getBoundingClientRect")) ? function () {
								return s()[n]
							} : function () {
								return (e ? Hr["inner" + r] : t["client" + r]) || 0
							}
						}(st, ot, U),
						gt = function (t, e) {
							return !e || ~ms.indexOf(t) ? Cs(t) : function () {
								return Ba
							}
						}(st, ot);
					pt.media = us, K *= 45, ma.push(pt), pt.scroller = st, pt.scroll = Ts(st, U), o = pt.scroll(), pt.vars = e, i = i || e.animation, "refreshPriority" in e && (cs = 1), at.tweenScroll = at.tweenScroll || {
						top: Ga(st, ea),
						left: Ga(st, ta)
					}, pt.tweenTo = n = at.tweenScroll[U.p], i && (i.vars.lazy = !1, i._initted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.render(0, !0, !0), pt.animation = i.pause(), i.scrollTrigger = pt, (F = Os(X) && X) && (I = Wr.to(i, {
						ease: "power3",
						duration: F,
						onComplete: function () {
							return Q && Q(pt)
						}
					})), P = 0, H || (H = i.vars.id)), it && (Is(it) || (it = {
						snapTo: it
					}), Wr.set(ot ? [Xr, qr] : st, {
						scrollBehavior: "auto"
					}), s = Ps(it.snapTo) ? it.snapTo : "labels" === it.snapTo ? function (t) {
						return function (e) {
							var i, n = [],
								r = t.labels,
								s = t.duration();
							for (i in r) n.push(r[i] / s);
							return Wr.utils.snap(n, e)
						}
					}(i) : Wr.utils.snap(it.snapTo), N = it.duration || {
						min: .1,
						max: 2
					}, N = Is(N) ? Qr(N.min, N.max) : Qr(N, N), z = Wr.delayedCall(it.delay || F / 2 || .1, (function () {
						if (Math.abs(pt.getVelocity()) < 10 && !ns) {
							var t = i && !rt ? i.totalProgress() : pt.progress,
								e = (t - O) / (vs() - ts) * 1e3 || 0,
								r = zs(e / 2) * e / .185,
								a = t + r,
								o = Qr(0, 1, s(a, pt)),
								l = pt.scroll(),
								u = Math.round(c + o * g),
								d = n.tween;
							if (l <= h && l >= c && u !== l) {
								if (d && !d._initted && d.data <= Math.abs(u - l)) return;
								n(u, {
									duration: N(zs(.185 * Math.max(zs(a - t), zs(o - t)) / e / .05 || 0)),
									ease: it.ease || "power3",
									data: Math.abs(u - l),
									onComplete: function () {
										P = O = i && !rt ? i.totalProgress() : pt.progress, tt && tt(pt)
									}
								}, l, r * g, u - l - r * g)
							}
						} else pt.isActive && z.restart(!0)
					})).pause()), H && (ga[H] = pt), Y = pt.trigger = Kr(Y || Z)[0], Z = !0 === Z ? Y : Kr(Z)[0], Ls(G) && (G = {
						targets: Y,
						className: G
					}), Z && (!1 === J || J === Js || (J = !(!J && "flex" === ia(Z.parentNode).display) && Zs), pt.pin = Z, !1 !== e.force3D && Wr.set(Z, {
						force3D: !0
					}), (r = Wr.core.getCache(Z)).spacer ? v = r.pinState : (r.spacer = _ = jr.createElement("div"), _.setAttribute("class", "pin-spacer" + (H ? " pin-spacer-" + H : "")), r.pinState = v = Ra(Z)), pt.spacer = _ = r.spacer, L = ia(Z), T = L[J + U.os2], b = Wr.getProperty(Z), M = Wr.quickSetter(Z, U.a, Qs), Na(Z, _, L), x = Ra(Z)), ut && (m = Is(ut) ? na(ut, ca) : ca, p = pa("scroller-start", H, st, U, m, 0), f = pa("scroller-end", H, st, U, m, 0, p), w = p["offset" + U.op.d2], u = pa("start", H, st, U, m, w), d = pa("end", H, st, U, m, w), lt || (! function (t) {
						t.style.position = "absolute" === ia(t).position ? "absolute" : "relative"
					}(st), Wr.set([p, f], {
						force3D: !0
					}), E = Wr.quickSetter(p, U.a, Qs), A = Wr.quickSetter(f, U.a, Qs))), pt.revert = function (t) {
						var e = !1 !== t || !pt.enabled,
							n = is;
						e !== a && (e && (R = Math.max(pt.scroll(), pt.scroll.rec || 0), k = pt.progress, B = i && i.progress()), u && [u, d, p, f].forEach((function (t) {
							return t.style.display = e ? "none" : "block"
						})), e && (is = 1), pt.update(e), is = n, Z && (e ? function (t, e, i) {
							if (ka(i), t.parentNode === e) {
								var n = e.parentNode;
								n && (n.insertBefore(t, e), n.removeChild(e))
							}
						}(Z, _, v) : (!nt || !pt.isActive) && Na(Z, _, ia(Z), C)), a = e)
					}, pt.refresh = function (n) {
						if (!is && pt.enabled)
							if (Z && n && xs) oa(t, "scrollEnd", Sa);
							else {
								is = 1, I && I.kill(), $ && i && i.progress(0).invalidate(), a || pt.revert();
								for (var r, s, m, w, M, T, E, A, L = mt(), P = gt(), O = Es(st, U), F = 0, N = 0, z = e.end, V = e.endTrigger || Y, W = e.start || (0 === e.start ? 0 : Z || !Y ? "0 0" : "0 100%"), G = Y && Math.max(0, ma.indexOf(pt)) || 0, H = G; H--;)(E = ma[H].pin) && (E === Y || E === Z) && ma[H].revert();
								for (c = Ua(W, Y, L, U, pt.scroll(), u, p, pt, P, dt, lt, O) || (Z ? -.001 : 0), Ps(z) && (z = z(pt)), Ls(z) && !z.indexOf("+=") && (~z.indexOf(" ") ? z = (Ls(W) ? W.split(" ")[0] : "") + z : (F = da(z.substr(2), L), z = Ls(W) ? W : c + F, V = Y)), h = Math.max(c, Ua(z || (V ? "100% 0" : O), V, L, U, pt.scroll() + F, d, f, pt, P, dt, lt, O)) || -.001, g = h - c || (c -= .01) && .001, F = 0, H = G; H--;)(E = (T = ma[H]).pin) && T.start - T._pinPush < c && (r = T.end - T.start, E === Y && (F += r), E === Z && (N += r));
								if (c += F, h += F, pt._pinPush = N, u && F && ((r = {})[U.a] = "+=" + F, Wr.set([u, d], r)), Z) r = ia(Z), w = U === ea, m = pt.scroll(), S = parseFloat(b(U.a)) + N, !O && h > 1 && ((ot ? Xr : st).style["overflow-" + U.a] = "scroll"), Na(Z, _, r), x = Ra(Z), s = ra(Z, !0), A = lt && Ts(st, w ? ta : ea)(), J && ((C = [J + U.os2, g + N + Qs]).t = _, (H = J === Zs ? sa(Z, U) + g + N : 0) && C.push(U.d, H + Qs), ka(C), lt && pt.scroll(R)), lt && ((M = {
									top: s.top + (w ? m - c : A) + Qs,
									left: s.left + (w ? A : m - c) + Qs,
									boxSizing: "border-box",
									position: "fixed"
								}).width = M.maxWidth = Math.ceil(s.width) + Qs, M.height = M.maxHeight = Math.ceil(s.height) + Qs, M.margin = M.marginTop = M.marginRight = M.marginBottom = M.marginLeft = "0", M.padding = r.padding, M.paddingTop = r.paddingTop, M.paddingRight = r.paddingRight, M.paddingBottom = r.paddingBottom, M.paddingLeft = r.paddingLeft, y = function (t, e, i) {
									for (var n, r = [], s = t.length, a = i ? 8 : 0; a < s; a += 2) n = t[a], r.push(n, n in e ? e[n] : t[a + 1]);
									return r.t = t.t, r
								}(v, M, nt)), i ? (i.progress(1, !0), D = b(U.a) - S + g + N, g !== D && y.splice(y.length - 2, 2), i.progress(0, !0)) : D = g;
								else if (Y && pt.scroll())
									for (s = Y.parentNode; s && s !== Xr;) s._pinOffset && (c -= s._pinOffset, h -= s._pinOffset), s = s.parentNode;
								for (H = 0; H < G; H++)(T = ma[H].pin) && (T === Y || T === Z) && ma[H].revert(!1);
								pt.start = c, pt.end = h, (o = l = pt.scroll()) < R && pt.scroll(R), pt.revert(!1), is = 0, B && rt && i.progress(B, !0), k !== pt.progress && (I && i.totalProgress(k, !0), pt.progress = k, pt.update()), Z && J && (_._pinOffset = Math.round(pt.progress * D)), q && q(pt)
							}
					}, pt.getVelocity = function () {
						return (pt.scroll() - l) / (vs() - ts) * 1e3 || 0
					}, pt.update = function (t, e) {
						var r, s, a, u, d, f = pt.scroll(),
							m = t ? 0 : (f - c) / g,
							v = m < 0 ? 0 : m > 1 ? 1 : m || 0,
							w = pt.progress;
						if (e && (l = o, o = f, it && (O = P, P = i && !rt ? i.totalProgress() : v)), K && !v && Z && !is && !fs && xs && c < f + (f - l) / (vs() - ts) * K && (v = 1e-4), v !== w && pt.enabled) {
							if (u = (d = (r = pt.isActive = !!v && v < 1) !== (!!w && w < 1)) || !!v != !!w, pt.direction = v > w ? 1 : -1, pt.progress = v, rt || (!I || is || fs ? i && i.totalProgress(v, !!is) : (I.vars.totalProgress = v, I.invalidate().restart())), Z)
								if (t && J && (_.style[J + U.os2] = T), lt) {
									if (u) {
										if (a = !t && v > w && h + 1 > f && f + 1 >= Es(st, U), nt)
											if (t || !r && !a) Wa(Z, _);
											else {
												var b = ra(Z, !0),
													C = f - c;
												Wa(Z, Xr, b.top + (U === ea ? C : 0) + Qs, b.left + (U === ea ? 0 : C) + Qs)
											}
										ka(r || a ? y : x), D !== g && v < 1 && r || M(S + (1 !== v || a ? 0 : D))
									}
								} else M(S + D * v);
							it && !n.tween && !is && !fs && z.restart(!0), G && (d || et && v && (v < 1 || !hs)) && Kr(G.targets).forEach((function (t) {
								return t.classList[r || et ? "add" : "remove"](G.className)
							})), W && !rt && !t && W(pt), u && !is ? (s = v && !w ? 0 : 1 === v ? 1 : 1 === w ? 2 : 3, rt && (a = !d && "none" !== ht[s + 1] && ht[s + 1] || ht[s], i && ("complete" === a || "reset" === a || a in i) && ("complete" === a ? i.pause().totalProgress(1) : "reset" === a ? i.restart(!0).pause() : i[a]()), W && W(pt)), !d && hs || (j && d && j(pt), ct[s] && ct[s](pt), et && (1 === v ? pt.kill(!1, 1) : ct[s] = 0), d || ct[s = 1 === v ? 1 : 3] && ct[s](pt))) : rt && W && !is && W(pt)
						}
						A && (E(f + (p._isFlipped ? 1 : 0)), A(f))
					}, pt.enable = function () {
						pt.enabled || (pt.enabled = !0, oa(st, "resize", xa), oa(st, "scroll", ya), ft && oa(t, "refreshInit", ft), i && i.add ? Wr.delayedCall(.01, (function () {
							return c || h || pt.refresh()
						})) && (g = .01) && (c = h = 0) : pt.refresh())
					}, pt.disable = function (e, i) {
						if (pt.enabled && (!1 !== e && pt.revert(), pt.enabled = pt.isActive = !1, i || I && I.pause(), R = 0, r && (r.uncache = 1), ft && la(t, "refreshInit", ft), z && (z.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !ot)) {
							for (var s = ma.length; s--;)
								if (ma[s].scroller === st && ma[s] !== pt) return;
							la(st, "resize", xa), la(st, "scroll", ya)
						}
					}, pt.kill = function (t, e) {
						pt.disable(t, e), H && delete ga[H];
						var n = ma.indexOf(pt);
						ma.splice(n, 1), n === ss && Pa > 0 && ss--, i && (i.scrollTrigger = null, t && i.render(-1), e || i.kill()), u && [u, d, p, f].forEach((function (t) {
							return t.parentNode.removeChild(t)
						})), r && (r.uncache = 1)
					}, pt.enable()
				} else this.update = this.refresh = this.kill = ws
			}, t.register = function (e) {
				if (!Gr && (Wr = e || Ms(), bs() && window.document && (Hr = window, jr = document, qr = jr.documentElement, Xr = jr.body), Wr && (Kr = Wr.utils.toArray, Qr = Wr.utils.clamp, Wr.core.globals("ScrollTrigger", t), Xr))) {
					Jr = Hr.requestAnimationFrame || function (t) {
						return setTimeout(t, 16)
					}, oa(Hr, "mousewheel", ya), Yr = [Hr, jr, qr, Xr], oa(jr, "scroll", ya);
					var i, n = Xr.style,
						r = n.borderTop;
					n.borderTop = "1px solid #000", i = ra(Xr), ea.m = Math.round(i.top + ea.sc()) || 0, ta.m = Math.round(i.left + ta.sc()) || 0, r ? n.borderTop = r : n.removeProperty("border-top"), es = setInterval(va, 200), Wr.delayedCall(.5, (function () {
						return fs = 0
					})), oa(jr, "touchcancel", ws), oa(Xr, "touchstart", ws), aa(oa, jr, "pointerdown,touchstart,mousedown", (function () {
						return ns = 1
					})), aa(oa, jr, "pointerup,touchend,mouseup", (function () {
						return ns = 0
					})), rs = Wr.utils.checkPrefix("transform"), Fa.push(rs), Gr = vs(), Zr = Wr.delayedCall(.2, Aa).pause(), ls = [jr, "visibilitychange", function () {
						var t = Hr.innerWidth,
							e = Hr.innerHeight;
						jr.hidden ? (as = t, os = e) : as === t && os === e || xa()
					}, jr, "DOMContentLoaded", Aa, Hr, "load", function () {
						return xs || Aa()
					}, Hr, "resize", xa], As(oa)
				}
				return Gr
			}, t.defaults = function (t) {
				for (var e in t) ha[e] = t[e]
			}, t.kill = function () {
				_s = 0, ma.slice(0).forEach((function (t) {
					return t.kill(1)
				}))
			}, t.config = function (t) {
				"limitCallbacks" in t && (hs = !!t.limitCallbacks);
				var e = t.syncInterval;
				e && clearInterval(es) || (es = e) && setInterval(va, e), "autoRefreshEvents" in t && (As(la) || As(oa, t.autoRefreshEvents || "none"))
			}, t.scrollerProxy = function (t, e) {
				var i = Kr(t)[0];
				Ss(i) ? ms.unshift(Hr, e, Xr, e, qr, e) : ms.unshift(i, e)
			}, t.matchMedia = function (t) {
				var e, i, n, r, s;
				for (i in t) n = ba.indexOf(i), r = t[i], us = i, "all" === i ? r() : (e = Hr.matchMedia(i)) && (e.matches && (s = r()), ~n ? (ba[n + 1] = Ns(ba[n + 1], r), ba[n + 2] = Ns(ba[n + 2], s)) : (n = ba.length, ba.push(i, r, s), e.addListener ? e.addListener(Ma) : e.addEventListener("change", Ma)), ba[n + 3] = e.matches), us = 0;
				return ba
			}, t.clearMatchMedia = function (t) {
				t || (ba.length = 0), (t = ba.indexOf(t)) >= 0 && ba.splice(t, 4)
			}, t
		}();
		Ha.version = "3.5.1", Ha.saveStyles = function (t) {
			return t ? Kr(t).forEach((function (t) {
				var e = Ta.indexOf(t);
				e >= 0 && Ta.splice(e, 4), Ta.push(t, t.style.cssText, Wr.core.getCache(t), us)
			})) : Ta
		}, Ha.revert = function (t, e) {
			return Ea(!t, e)
		}, Ha.create = function (t, e) {
			return new Ha(t, e)
		}, Ha.refresh = function (t) {
			return t ? xa() : Aa(!0)
		}, Ha.update = Oa, Ha.maxScroll = function (t, e) {
			return Es(t, e ? ta : ea)
		}, Ha.getScrollFunc = function (t, e) {
			return Ts(Kr(t)[0], e ? ta : ea)
		}, Ha.getById = function (t) {
			return ga[t]
		}, Ha.getAll = function () {
			return ma.slice(0)
		}, Ha.isScrolling = function () {
			return !!xs
		}, Ha.addEventListener = function (t, e) {
			var i = _a[t] || (_a[t] = []);
			~i.indexOf(e) || i.push(e)
		}, Ha.removeEventListener = function (t, e) {
			var i = _a[t],
				n = i && i.indexOf(e);
			n >= 0 && i.splice(n, 1)
		}, Ha.batch = function (t, e) {
			var i, n = [],
				r = {},
				s = e.interval || .016,
				a = e.batchMax || 1e9,
				o = function (t, e) {
					var i = [],
						n = [],
						r = Wr.delayedCall(s, (function () {
							e(i, n), i = [], n = []
						})).pause();
					return function (t) {
						i.length || r.restart(!0), i.push(t.trigger), n.push(t), a <= i.length && r.progress(1)
					}
				};
			for (i in e) r[i] = "on" === i.substr(0, 2) && Ps(e[i]) && "onRefreshInit" !== i ? o(0, e[i]) : e[i];
			return Ps(a) && (a = a(), oa(Ha, "refresh", (function () {
				return a = e.batchMax()
			}))), Kr(t).forEach((function (t) {
				var e = {};
				for (i in r) e[i] = r[i];
				e.trigger = t, n.push(Ha.create(e))
			})), n
		}, Ha.sort = function (t) {
			return ma.sort(t || function (t, e) {
				return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
			})
		}, Ms() && Wr.registerPlugin(Ha);
		class ja {
			constructor() {
				this.timer = 0, this.interval = 300, this.noScroll = !0, this.scrollingClass = "is-scrolling"
			}
			init() {
				this.scroller = document.querySelector("[data-scroller]"), this.attachEvents()
			}
			attachEvents() {
				this.onWheelListener = t => this.onWheel(t), this.onScrollStop = () => {
					this.noScroll = !1
				}, this.onScrollPlay = () => {
					this.noScroll = !0
				}, document.addEventListener(f.stop, this.onScrollStop), document.addEventListener(f.play, this.onScrollPlay), window.addEventListener("wheel", this.onWheelListener, {
					passive: !0
				}), window.addEventListener("DOMMouseScroll", this.onWheelListener, {
					passive: !0
				})
			}
			onWheel({
				deltaY: t
			}) {
				this.timer += 1, this.noScroll && t > 10 && this.wheelStart()
			}
			wheelStart() {
				this.noScroll = !1, this.wheelAct(), a.classList.add(this.scrollingClass)
			}
			wheelAct() {
				this.currentTime = this.timer;
				const t = setTimeout((() => {
					this.currentTime === this.timer ? this.wheelEnd() : (clearTimeout(t), this.wheelAct())
				}), this.interval)
			}
			wheelEnd() {
				this.noScroll = !0, this.timer = 0, a.classList.remove(this.scrollingClass)
			}
			destroy() {
				this.scroller.removeEventListener("wheel", this.onWheelListener), this.scroller.removeEventListener("DOMMouseScroll", this.onWheelListener)
			}
		}
		Rr.registerPlugin(Ha);
		class qa {
			constructor(t = {}) {
				this.settings = t, this.timer = 0
			}
			init() {
				this.attachEvents(), this.initScroll()
			}
			initScroll() {
				this.scroll = new ps.a(this.settings), window.customScroll = this, this.checkPageTop(), this.scroll.on("scroll", (t => {
					this.scrollData = t, this.setDirection(), this.checkPageTop(), h(f.scrolling, this.scrollData), Ha.update()
				})), this.scroll.on("call", ((t, e, i) => {
					i && h(f.call, {
						name: t,
						direction: e,
						obj: i
					}, i.el)
				})), Ha.scrollerProxy(this.settings.el, {
					scrollTop: t => arguments.length ? this.scroll.scrollTo(t, 0, 0) : this.scroll.scroll.instance.scroll.y,
					getBoundingClientRect: () => ({
						top: 0,
						left: 0,
						width: window.innerWidth,
						height: window.innerHeight
					}),
					pinType: this.settings.el.style.transform ? "transform" : "fixed"
				}), a.classList.remove(this.settings.offTopClass)
			}
			checkPageTop() {
				this.scrollData && this.scrollData.scroll.y > this.settings.scrollTreshold ? (a.classList.add(this.settings.offTopClass), a.classList.remove(this.settings.onTopClass)) : (a.classList.add(this.settings.onTopClass), a.classList.remove(this.settings.offTopClass))
			}
			setDirection() {
				a.dataset.scrollDirection = this.scrollData.direction || "down"
			}
			update() {
				this.scroll.update()
			}
			attachEvents() {
				document.addEventListener(f.ready, (() => {
					a.classList.remove(this.settings.offTopClass), this.initScroll()
				})), document.addEventListener(f.destroy, (() => {
					this.scroll.destroy()
				})), document.addEventListener(f.update, (() => {
					this.update()
				})), document.addEventListener(f.stop, (() => {
					this.scroll.stop()
				})), document.addEventListener(f.scrollTo, (({
					detail: t
				}) => {
					const {
						target: e,
						...i
					} = t;
					this.scroll.scrollTo(e, { ...i
					})
				})), document.addEventListener(f.play, (() => {
					this.scroll.start()
				}))
			}
		}
		var Xa = !1;
		if ("undefined" != typeof window) {
			var Ya = {
				get passive() {
					Xa = !0
				}
			};
			window.addEventListener("testPassive", null, Ya), window.removeEventListener("testPassive", null, Ya)
		}
		var Za = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
			Ja = [],
			$a = !1,
			Ka = -1,
			Qa = void 0,
			to = void 0,
			eo = function (t) {
				return Ja.some((function (e) {
					return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
				}))
			},
			io = function (t) {
				var e = t || window.event;
				return !!eo(e.target) || (e.touches.length > 1 || (e.preventDefault && e.preventDefault(), !1))
			},
			no = function () {
				void 0 !== to && (document.body.style.paddingRight = to, to = void 0), void 0 !== Qa && (document.body.style.overflow = Qa, Qa = void 0)
			},
			ro = function (t, e) {
				if (t && !Ja.some((function (e) {
						return e.targetElement === t
					}))) {
					var i = {
						targetElement: t,
						options: e || {}
					};
					Ja = [].concat(function (t) {
						if (Array.isArray(t)) {
							for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
							return i
						}
						return Array.from(t)
					}(Ja), [i]), Za ? (t.ontouchstart = function (t) {
						1 === t.targetTouches.length && (Ka = t.targetTouches[0].clientY)
					}, t.ontouchmove = function (e) {
						1 === e.targetTouches.length && function (t, e) {
							var i = t.targetTouches[0].clientY - Ka;
							!eo(t.target) && (e && 0 === e.scrollTop && i > 0 || function (t) {
								return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight
							}(e) && i < 0 ? io(t) : t.stopPropagation())
						}(e, t)
					}, $a || (document.addEventListener("touchmove", io, Xa ? {
						passive: !1
					} : void 0), $a = !0)) : function (t) {
						if (void 0 === to) {
							var e = !!t && !0 === t.reserveScrollBarGap,
								i = window.innerWidth - document.documentElement.clientWidth;
							e && i > 0 && (to = document.body.style.paddingRight, document.body.style.paddingRight = i + "px")
						}
						void 0 === Qa && (Qa = document.body.style.overflow, document.body.style.overflow = "hidden")
					}(e)
				}
			},
			so = function (t) {
				t && (Ja = Ja.filter((function (e) {
					return e.targetElement !== t
				})), Za ? (t.ontouchstart = null, t.ontouchmove = null, $a && 0 === Ja.length && (document.removeEventListener("touchmove", io, Xa ? {
					passive: !1
				} : void 0), $a = !1)) : Ja.length || no())
			};
		class ao {
			constructor(t, e, i) {
				this.holder = t, this.ctx = e, this.settings = {
					activeClass: "menu--opened",
					...i
				}, this.initialized = !1, this.onClickListener = t => this.onClick(t)
			}
			init() {
				if (!this.holder) throw new Error("holder should be a DOM element");
				this.scroller = this.ctx.querySelector("[data-menu-scroller]"), this.initialized = !0, this.attachEvents()
			}
			attachEvents() {
				this.holder.addEventListener("click", this.onClickListener), document.addEventListener(m, (() => this.setState().innactive()))
			}
			onClick(t) {
				const {
					active: e,
					innactive: i
				} = this.setState();
				t && t.preventDefault(), this.isActive ? i() : e()
			}
			setState() {
				return {
					active: () => {
						a.classList.add(this.settings.activeClass), this.onActiveState()
					},
					innactive: () => {
						a.classList.remove(this.settings.activeClass), this.onInnactiveState()
					}
				}
			}
			onActiveState() {
				h(f.stop), h(E), ro(this.scroller)
			}
			onInnactiveState() {
				h(f.play), h(A), so(this.scroller)
			}
			get isActive() {
				return a.classList.contains(this.settings.activeClass)
			}
			destroy() {
				this.initialized && (this.setState().innactive(), this.holder.removeEventListener("click", this.onClickListener), this.initialized = !1)
			}
		}
		var oo = i(23),
			lo = i.n(oo);
		const co = ["Moonglade", "Plain"];
		class ho {
			constructor(t, e) {
				this.holder = t, this.settings = {
					activeClass: "is-active",
					...e
				}, this.changeListener = () => this.setButtonState()
			}
			init() {
				this.toggle = this.holder.querySelector("[data-toggle]"), this.scroller = this.holder.querySelector("[data-scroller]"), this.attachEvents()
			}
			setButtonState() {
				return this.isActive ? this.setInnactiveState() : this.setActiveState()
			}
			setActiveState() {
				this.holder.classList.add(this.settings.activeClass), h(f.stop), ro(this.scroller)
			}
			setInnactiveState() {
				this.holder.classList.remove(this.settings.activeClass), h(f.play), so(this.scroller)
			}
			attachEvents() {
				this.toggle.addEventListener("click", this.changeListener)
			}
			get isActive() {
				return this.holder.classList.contains(this.settings.activeClass)
			}
		}
		class uo {
			constructor(t, e) {
				this.holder = t, this.settings = { ...e
				}, this.changeListener = () => this.setButtonState()
			}
			init() {
				this.input = this.holder.querySelector("input"), this.button = this.holder.querySelector(".btn"), this.setButtonState(), this.attachEvents()
			}
			setButtonState() {
				const {
					value: t
				} = this.input;
				return t ? this.setActiveState() : this.setDisabledState()
			}
			setActiveState() {
				this.button.removeAttribute("disabled")
			}
			setDisabledState() {
				this.button.setAttribute("disabled", !0)
			}
			attachEvents() {
				this.input.addEventListener("input", this.changeListener)
			}
		}
		class po {
			constructor({
				holder: t,
				settings: e
			}) {
				this.holder = t, this.settings = {
					DOM: {
						increment: "[data-increment]",
						decrement: "[data-decrement]",
						input: "[data-input]"
					},
					attr: {
						min: "data-min",
						max: "data-max",
						step: "data-step"
					},
					state: {
						disabled: "disabled",
						increase: "increase",
						decrease: "decrease"
					},
					...e
				}, this.$refs = {
					increase: this.holder.querySelector(this.settings.DOM.increment),
					decrease: this.holder.querySelector(this.settings.DOM.decrement),
					input: this.holder.querySelector(this.settings.DOM.input)
				}, this.increaseListener = () => this.increment(), this.decreaseListener = () => this.decrement(), this.inputListener = () => this.inputChange(), this.min = parseInt(this.holder.getAttribute(this.settings.state.min), 10) || 1, this.max = parseInt(this.holder.getAttribute(this.settings.state.max), 10) || 100, this.step = parseInt(this.holder.getAttribute(this.settings.state.step), 10) || 1, this.count = this.inputValue
			}
			init() {
				this.isMax && this.deactivateIncrement(), this.isMin && this.deactivateDecrement(), this.updateValue(), this.attachEvents()
			}
			attachEvents() {
				this.$refs.increase.addEventListener("click", this.increaseListener), this.$refs.decrease.addEventListener("click", this.decreaseListener), this.$refs.input.addEventListener("input", this.inputListener)
			}
			increment() {
				this.activateIncrement(), this.activateDecrement(), this.isMax ? this.deactivateIncrement() : (this.count += this.step, this.isMax && this.deactivateIncrement()), this.updateValue()
			}
			decrement() {
				this.activateIncrement(), this.activateDecrement(), this.isMin ? this.deactivateDecrement() : (this.count -= this.step, this.isMin && this.deactivateDecrement()), this.updateValue()
			}
			updateValue() {
				this.$refs.input.value = this.count
			}
			inputChange() {
				this.isMin ? (this.count = this.min, this.deactivateDecrement()) : (this.count = this.inputValue, this.activateDecrement()), this.isMax ? (this.count = this.max, this.deactivateIncrement()) : (this.count = this.inputValue, this.activateIncrement())
			}
			deactivateIncrement() {
				return this.setControlState({
					type: this.settings.state.increase,
					disabled: !0
				})
			}
			deactivateDecrement() {
				return this.setControlState({
					type: this.settings.state.decrease,
					disabled: !0
				})
			}
			activateIncrement() {
				this.isDisabled(this.$refs.increase) && this.setControlState({
					type: this.settings.state.increase,
					disabled: !1
				})
			}
			activateDecrement() {
				this.isDisabled(this.$refs.decrease) && this.setControlState({
					type: this.settings.state.decrease,
					disabled: !1
				})
			}
			setControlState({
				type: t,
				disabled: e
			}) {
				this.$refs[t].setAttribute(this.settings.state.disabled, e)
			}
			isDisabled(t) {
				return t.getAttribute(this.settings.state.disabled)
			}
			get inputValue() {
				return +this.$refs.input.value || 0
			}
			get isMax() {
				return this.count >= this.max
			}
			get isMin() {
				return this.count <= this.min
			}
		}

		function fo() {
			! function () {
				document.querySelectorAll('[data-component="stepper"]').forEach((t => {
					new po({
						holder: t
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-component="discount-form"]').forEach((t => {
					new uo(t).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-component="checkout-products"]').forEach((t => {
					new ho(t).init()
				}))
			}()
		}
		class mo {
			constructor({
				holder: t,
				settings: e
			}) {
				this.holder = t, this.settings = e, this.touch = c(), this.scrollListenerBound = t => this.scrollListener(t), this.destroyListener = () => this.destroy(), this.triggerAnimation = () => this.callbackShow(this.show())
			}
			init() {
				this.attachEvents()
			}
			attachEvents() {
				this.holder.addEventListener(f.call, this.scrollListenerBound), document.addEventListener(g.start, this.destroyListener)
			}
			scrollListener({
				detail: t
			}) {
				this.scrollDetail = t;
				const {
					inView: e
				} = this.scrollDetail.obj;
				e && (this.holder.hasAttribute("data-show") || (this.holder.setAttribute("data-show", !0), this.triggerAnimation()), this.onShow()), e || this.onLeave()
			}
			show() {
				return this
			}
			shown() {
				this.holder.setAttribute("data-shown", !0)
			}
			onShow() {
				return this
			}
			onLeave() {
				return this
			}
			callbackShow(t) {
				return t.eventCallback && t.eventCallback("onComplete", (() => this.shown()))
			}
			destroy() {
				this.holder.removeEventListener(f.call, this.scrollListenerBound), document.removeEventListener(g.start, this.destroyListener)
			}
			get namespace() {
				return this.holder.dataset.scrollCall
			}
			get selector() {
				return `[data-scroll-call=${this.namespace}]`
			}
			get playSimple() {
				return this.touch && !((t, e = !1) => e ? window.innerWidth < t : window.innerWidth >= t)(l)
			}
			get ease() {
				return this.holder.dataset.ease || "expo.out"
			}
			get animationSpeed() {
				return this.holder.dataset.speed ? parseFloat(this.holder.dataset.speed, 1e3) : 1
			}
			get animationDelay() {
				const t = this.holder.dataset.delay ? parseFloat(this.holder.dataset.delay, 1e3) : 0;
				return c() ? t / 5 : t
			}
			get interval() {
				return parseFloat(this.holder.dataset.interval) || .1
			}
			get reverseAnimation() {
				return this.holder.hasAttribute("data-reverse")
			}
		}
		class go extends mo {
			init() {
				super.init(), c() || (this.target = document.querySelector(this.holder.getAttribute("data-target")), this.blocksHolder = this.holder.querySelector(".horizontal-blocks"), this.blocks = this.blocksHolder.querySelectorAll("[data-block]"), this.target && (this.elements = [], this.blocks.forEach((t => {
					const e = t.querySelector("img"),
						{
							offsetWidth: i
						} = e,
						n = t.getBoundingClientRect(),
						r = parseFloat(t.getAttribute("data-scroll-speed")),
						s = parseFloat(t.parentNode.getAttribute("data-movement")) || 0,
						a = (1.5 * i - i) / 2;
					this.elements.push({
						movement: a,
						img: e,
						block: t,
						bounds: n,
						speed: r,
						parallaxOffset: s
					})
				})), this.onResize(), this.attachEvents(), this.updateElements({
					progress: 0
				}), this.setupScene()))
			}
			attachEvents() {
				c() || (this.resizeListener = () => this.onResize(), window.addEventListener("resize", this.resizeListener))
			}
			onResize() {
				const {
					innerWidth: t
				} = window;
				this.pinWrapWidth = this.blocksHolder.scrollWidth - t, this.totalLength = this.elements.length, this.viewportKoeff = t > 1024 ? t / 1024 : 1
			}
			setupScene() {
				Rr.to(this.holder, {
					scrollTrigger: {
						scroller: "[data-scroller]",
						scrub: !0,
						trigger: this.target,
						pin: !0,
						start: "top top",
						end: `+=${this.pinWrapWidth}`,
						onUpdate: t => this.updateElements(t)
					},
					x: 30 - this.pinWrapWidth,
					ease: "none"
				}), Ha.addEventListener("refresh", (() => h(f.update))), Ha.refresh()
			}
			updateElements({
				progress: t
			}) {
				const e = this.pinWrapWidth * t;
				for (let t = 0; t < this.totalLength; t++) {
					const {
						movement: i,
						speed: n
					} = this.elements[t], r = Rr.utils.mapRange(0, this.pinWrapWidth, 0, i, Math.abs(e)) * this.viewportKoeff * n;
					this.elements[t].block.style.transform = `translate3d(${r}px, 0, 0)`
				}
			}
		}
		class vo extends ao {
			constructor(t, e) {
				super(t, document, {
					activeClass: "popup--opened",
					popupActiveClass: "is-active",
					popupInnactiveClass: "is-hidden",
					DOM: {
						scroller: "[data-popup-scroller]",
						target: "data-toggle-popup",
						close: "[data-popup-close]"
					},
					...e
				})
			}
			init() {
				this.targetID = this.holder.getAttribute(this.settings.DOM.target), this.targetDOM = document.getElementById(this.targetID), this.targetDOM && (this.popupClose = [...this.targetDOM.querySelectorAll(this.settings.DOM.close)], this.scroller = this.targetDOM.querySelector(this.settings.DOM.scroller) || this.targetDOM, this.hidePopup(), this.targetDOM.Popup = this, super.init())
			}
			get transitionDuration() {
				return parseFloat(getComputedStyle(this.targetDOM).transitionDuration)
			}
			attachEvents() {
				this.onCloseListener = () => this.setState().innactive(), this.popupClose.length && this.popupClose.forEach((t => t.addEventListener("click", this.onCloseListener))), super.attachEvents()
			}
			onActiveState() {
				this.targetDOM.classList.remove(this.settings.popupInnactiveClass);
				const t = [...this.targetDOM.querySelectorAll('[data-component="lazyload"]:not(.loaded)')];
				setTimeout((() => {
					this.targetDOM.classList.add(this.settings.popupActiveClass);
					const e = {
						target: this.targetDOM,
						toggle: this.holder,
						instance: this
					};
					h(T, t), h(v, e), this.disableScroll()
				}), 100)
			}
			onInnactiveState() {
				this.targetDOM.classList.remove(this.settings.popupActiveClass);
				const t = {
					target: this.targetDOM,
					toggle: this.holder,
					instance: this
				};
				h(y, t), this.enableScroll(), setTimeout((() => {
					this.hidePopup()
				}), 600 * this.transitionDuration)
			}
			disableScroll() {
				c() || (this.scroller && ro(this.scroller), h(f.stop))
			}
			enableScroll() {
				c() || (this.scroller && so(this.scroller), h(f.play))
			}
			hidePopup() {
				this.targetDOM.classList.add(this.settings.popupInnactiveClass)
			}
			destroy() {
				this.popupClose.length && this.popupClose.forEach((t => t.removeEventListener("click", this.onCloseListener))), super.destroy()
			}
			closePopup() {
				super.setState().innactive()
			}
			revealPopup() {
				super.setState().active()
			}
		}

		function yo(t) {
			const e = "[data-toggle-popup]";
			(t ? t.querySelectorAll(e) : document.querySelectorAll(e)).forEach((t => {
				new vo(t).init()
			})), document.addEventListener(x, (({
				detail: {
					context: t
				}
			}) => yo(t)))
		}
		class xo extends Br {
			init() {
				this.countDOM = this.holder.querySelector("[data-count]"), this.productNameDOM = this.holder.querySelector("[data-product-name]"), this.products = [...document.querySelectorAll('[data-component="product"]')], this.products.length && (this.opened = !1, super.init())
			}
			attachEvents() {
				super.attachEvents(), this.products.forEach((t => {
					t.querySelector('[data-control="submit"]').addEventListener("click", (() => this.onProductClick(t)))
				}))
			}
			onProductClick(t) {
				const e = t.querySelector("[data-product-title]"),
					i = t.querySelector("[data-input]");
				e && (this.productNameDOM.innerHTML = e.innerHTML), i && (this.countDOM.innerHTML = i.value), this.opened || (this.open(), Rr.delayedCall(3, (() => this.close())))
			}
			close() {
				return this.closeAnimation()
			}
			open() {
				return this.openAnimation()
			}
			openAnimation(t) {
				return this.opened = !0, Rr.fromTo(this.holder, {
					y: "-100%"
				}, {
					duration: .7,
					onComplete: () => {
						t && t()
					},
					y: "0%"
				})
			}
			closeAnimation(t) {
				return this.opened = !1, Rr.fromTo(this.holder, {
					y: "0%"
				}, {
					duration: .7,
					y: "-100%",
					onComplete: () => {
						t && t()
					}
				})
			}
		}
		class _o extends mo {
			init() {
				this.boxes = [...this.holder.querySelectorAll('[data-element="parallax-box"]')], this.holderBounds = this.holder.getBoundingClientRect(), this.movementValue = parseFloat(this.holder.getAttribute("data-movement")) || 5, this.movement = {
					x: window.innerWidth / 2,
					y: window.innerHeight / 2
				}, this.lastMousePos = this.movement, this.onMouseMoveListener = t => this.onMouseMove(t), this.onMouseLeaveListener = () => this.onMouseLeave(), this.onMouseEnterListener = () => this.onMouseEnter(), this.resizeListener = () => this.onResize(), this.renderListener = () => this.render(), super.init()
			}
			attachEvents() {
				window.addEventListener("resize", this.resizeListener), this.holder.addEventListener("mousemove", this.onMouseMoveListener), this.holder.addEventListener("mouseleave", this.onMouseLeaveListener), this.holder.addEventListener("mouseenter", this.onMouseEnterListener), super.attachEvents()
			}
			onResize() {
				this.holderBounds = this.holder.getBoundingClientRect()
			}
			onMouseLeave() {
				return this
			}
			onMouseEnter() {
				return this
			}
			onLeave() {
				c() || this.stop()
			}
			onShow() {
				c() || this.start()
			}
			moveItems() {
				this.lastMousePos.x = u(this.lastMousePos.x, this.movement.x, .05).toFixed(3), this.lastMousePos.y = u(this.lastMousePos.y, this.movement.y, .05).toFixed(3);
				const t = [{
					y: Rr.utils.mapRange(0, window.innerHeight, this.movementValue, -this.movementValue, this.lastMousePos.y),
					x: Rr.utils.mapRange(0, window.innerWidth, this.movementValue, -this.movementValue, this.lastMousePos.x)
				}, {
					x: Rr.utils.mapRange(0, window.innerWidth, this.movementValue, -this.movementValue, this.lastMousePos.x)
				}, {
					x: Rr.utils.mapRange(0, window.innerWidth, -8, 8, this.lastMousePos.x)
				}];
				for (let e = 0; e < this.boxes.length; e++) Rr.set(this.boxes[e], t[e])
			}
			onMouseMove({
				x: t,
				y: e
			}) {
				this.movement = {
					x: t,
					y: e
				}
			}
			render() {
				this.moveItems(), this.start()
			}
			start() {
				Rr.ticker.add(this.renderListener)
			}
			stop() {
				Rr.ticker.remove(this.renderListener)
			}
			destroy() {
				super.destroy(), this.holder.removeEventListener("mousemove", this.onMouseMoveListener)
			}
		}
		class wo extends mo {
			init() {
				this.from = parseFloat(this.holder.getAttribute("data-from")) || 1, this.to = parseFloat(this.holder.getAttribute("data-to")) || 1.2, this.duration = parseFloat(this.holder.getAttribute("data-duration")) || 1, this.ID = this.holder.getAttribute("data-scroll-id") || "progress-move", this.animation = Rr.timeline({
					paused: !0
				}), this.animation.fromTo(this.holder, {
					scale: this.from
				}, {
					scale: this.to,
					duration: this.duration
				}), this.onUpdateListener = t => this.onUpdate(t), super.init()
			}
			attachEvents() {
				document.addEventListener(f.scrolling, this.onUpdateListener), super.attachEvents()
			}
			onUpdate({
				detail: {
					currentElements: t
				}
			}) {
				if ("object" == typeof t[this.ID]) {
					const {
						progress: e
					} = t[this.ID];
					this.animation.progress(e)
				}
			}
			destroy() {
				super.destroy(), document.removeEventListener(f.scrolling, this.onUpdateListener)
			}
		}
		class bo extends wo {
			init() {
				if (super.init(), c()) return;
				this.containerGap = 15, this.containerWidth = 1300 - 2 * this.containerGap;
				const {
					vw: t
				} = this.containerOffset;
				this.animation = Rr.timeline({
					paused: !0
				}), this.animation.fromTo(this.holder, {
					clip: "rect(0vh, 100vw, 100vh, 0vw)"
				}, {
					clip: `rect(0vh, ${100-t}vw, ${100-t}vh, ${t}vw)`,
					duration: this.duration
				})
			}
			get containerOffset() {
				const {
					innerWidth: t
				} = window, e = t <= this.containerWidth ? this.containerGap : (t - this.containerWidth) / 2;
				return {
					px: e,
					vw: (e => 100 * e / t)(e)
				}
			}
		}
		class Mo extends mo {
			show() {
				return Rr.timeline({
					delay: this.animationDelay,
					duration: 1
				})
			}
		}
		class So extends mo {
			init() {
				super.init(), this.from = +this.holder.getAttribute("data-from") || 0, this.to = +this.holder.getAttribute("data-to") || 1, Rr.set(this.holder, {
					opacity: this.from
				})
			}
			show() {
				const t = Rr.timeline({
					delay: this.animationDelay
				});
				return t.fromTo(this.holder, {
					opacity: this.from
				}, {
					duration: this.animationSpeed,
					opacity: this.to,
					ease: "power2.out"
				}), t
			}
		}
		class Do extends mo {
			onShow() {
				a.classList.add(this.settings.activeClass)
			}
			onLeave() {
				a.classList.remove(this.settings.activeClass)
			}
		}
		const To = 100,
			Co = 301,
			Eo = 302,
			Ao = 306,
			Lo = 307,
			Po = 1e3,
			Oo = 1001,
			Io = 1002,
			Fo = 1003,
			No = 1004,
			zo = 1005,
			ko = 1006,
			Ro = 1008,
			Bo = 1009,
			Uo = 1012,
			Vo = 1014,
			Wo = 1015,
			Go = 1016,
			Ho = 1020,
			jo = 1022,
			qo = 1023,
			Xo = 1026,
			Yo = 1027,
			Zo = 2300,
			Jo = 2301,
			$o = 2302,
			Ko = 2400,
			Qo = 2401,
			tl = 2402,
			el = 2500,
			il = 3e3,
			nl = 3001,
			rl = 3007,
			sl = 3002,
			al = 7680,
			ol = 35044,
			ll = 35048,
			cl = "300 es";

		function hl() {}
		Object.assign(hl.prototype, {
			addEventListener: function (t, e) {
				void 0 === this._listeners && (this._listeners = {});
				const i = this._listeners;
				void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
			},
			hasEventListener: function (t, e) {
				if (void 0 === this._listeners) return !1;
				const i = this._listeners;
				return void 0 !== i[t] && -1 !== i[t].indexOf(e)
			},
			removeEventListener: function (t, e) {
				if (void 0 === this._listeners) return;
				const i = this._listeners[t];
				if (void 0 !== i) {
					const t = i.indexOf(e); - 1 !== t && i.splice(t, 1)
				}
			},
			dispatchEvent: function (t) {
				if (void 0 === this._listeners) return;
				const e = this._listeners[t.type];
				if (void 0 !== e) {
					t.target = this;
					const i = e.slice(0);
					for (let e = 0, n = i.length; e < n; e++) i[e].call(this, t);
					t.target = null
				}
			}
		});
		const ul = [];
		for (let t = 0; t < 256; t++) ul[t] = (t < 16 ? "0" : "") + t.toString(16);
		let dl = 1234567;
		const pl = {
			DEG2RAD: Math.PI / 180,
			RAD2DEG: 180 / Math.PI,
			generateUUID: function () {
				const t = 4294967295 * Math.random() | 0,
					e = 4294967295 * Math.random() | 0,
					i = 4294967295 * Math.random() | 0,
					n = 4294967295 * Math.random() | 0;
				return (ul[255 & t] + ul[t >> 8 & 255] + ul[t >> 16 & 255] + ul[t >> 24 & 255] + "-" + ul[255 & e] + ul[e >> 8 & 255] + "-" + ul[e >> 16 & 15 | 64] + ul[e >> 24 & 255] + "-" + ul[63 & i | 128] + ul[i >> 8 & 255] + "-" + ul[i >> 16 & 255] + ul[i >> 24 & 255] + ul[255 & n] + ul[n >> 8 & 255] + ul[n >> 16 & 255] + ul[n >> 24 & 255]).toUpperCase()
			},
			clamp: function (t, e, i) {
				return Math.max(e, Math.min(i, t))
			},
			euclideanModulo: function (t, e) {
				return (t % e + e) % e
			},
			mapLinear: function (t, e, i, n, r) {
				return n + (t - e) * (r - n) / (i - e)
			},
			inverseLerp: function (t, e, i) {
				return t !== e ? (i - t) / (e - t) : 0
			},
			lerp: function (t, e, i) {
				return (1 - i) * t + i * e
			},
			damp: function (t, e, i, n) {
				return pl.lerp(t, e, 1 - Math.exp(-i * n))
			},
			pingpong: function (t, e = 1) {
				return e - Math.abs(pl.euclideanModulo(t, 2 * e) - e)
			},
			smoothstep: function (t, e, i) {
				return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
			},
			smootherstep: function (t, e, i) {
				return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
			},
			randInt: function (t, e) {
				return t + Math.floor(Math.random() * (e - t + 1))
			},
			randFloat: function (t, e) {
				return t + Math.random() * (e - t)
			},
			randFloatSpread: function (t) {
				return t * (.5 - Math.random())
			},
			seededRandom: function (t) {
				return void 0 !== t && (dl = t % 2147483647), dl = 16807 * dl % 2147483647, (dl - 1) / 2147483646
			},
			degToRad: function (t) {
				return t * pl.DEG2RAD
			},
			radToDeg: function (t) {
				return t * pl.RAD2DEG
			},
			isPowerOfTwo: function (t) {
				return 0 == (t & t - 1) && 0 !== t
			},
			ceilPowerOfTwo: function (t) {
				return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
			},
			floorPowerOfTwo: function (t) {
				return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
			},
			setQuaternionFromProperEuler: function (t, e, i, n, r) {
				const s = Math.cos,
					a = Math.sin,
					o = s(i / 2),
					l = a(i / 2),
					c = s((e + n) / 2),
					h = a((e + n) / 2),
					u = s((e - n) / 2),
					d = a((e - n) / 2),
					p = s((n - e) / 2),
					f = a((n - e) / 2);
				switch (r) {
					case "XYX":
						t.set(o * h, l * u, l * d, o * c);
						break;
					case "YZY":
						t.set(l * d, o * h, l * u, o * c);
						break;
					case "ZXZ":
						t.set(l * u, l * d, o * h, o * c);
						break;
					case "XZX":
						t.set(o * h, l * f, l * p, o * c);
						break;
					case "YXY":
						t.set(l * p, o * h, l * f, o * c);
						break;
					case "ZYZ":
						t.set(l * f, l * p, o * h, o * c)
				}
			}
		};
		class fl {
			constructor(t = 0, e = 0) {
				this.x = t, this.y = e
			}
			get width() {
				return this.x
			}
			set width(t) {
				this.x = t
			}
			get height() {
				return this.y
			}
			set height(t) {
				this.y = t
			}
			set(t, e) {
				return this.x = t, this.y = e, this
			}
			setScalar(t) {
				return this.x = t, this.y = t, this
			}
			setX(t) {
				return this.x = t, this
			}
			setY(t) {
				return this.y = t, this
			}
			setComponent(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					default:
						throw new Error("index is out of range: " + t)
				}
				return this
			}
			getComponent(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					default:
						throw new Error("index is out of range: " + t)
				}
			}
			clone() {
				return new this.constructor(this.x, this.y)
			}
			copy(t) {
				return this.x = t.x, this.y = t.y, this
			}
			add(t, e) {
				return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this)
			}
			addScalar(t) {
				return this.x += t, this.y += t, this
			}
			addVectors(t, e) {
				return this.x = t.x + e.x, this.y = t.y + e.y, this
			}
			addScaledVector(t, e) {
				return this.x += t.x * e, this.y += t.y * e, this
			}
			sub(t, e) {
				return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this)
			}
			subScalar(t) {
				return this.x -= t, this.y -= t, this
			}
			subVectors(t, e) {
				return this.x = t.x - e.x, this.y = t.y - e.y, this
			}
			multiply(t) {
				return this.x *= t.x, this.y *= t.y, this
			}
			multiplyScalar(t) {
				return this.x *= t, this.y *= t, this
			}
			divide(t) {
				return this.x /= t.x, this.y /= t.y, this
			}
			divideScalar(t) {
				return this.multiplyScalar(1 / t)
			}
			applyMatrix3(t) {
				const e = this.x,
					i = this.y,
					n = t.elements;
				return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
			}
			min(t) {
				return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
			}
			max(t) {
				return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
			}
			clamp(t, e) {
				return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
			}
			clampScalar(t, e) {
				return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
			}
			clampLength(t, e) {
				const i = this.length();
				return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
			}
			floor() {
				return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
			}
			ceil() {
				return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
			}
			round() {
				return this.x = Math.round(this.x), this.y = Math.round(this.y), this
			}
			roundToZero() {
				return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
			}
			negate() {
				return this.x = -this.x, this.y = -this.y, this
			}
			dot(t) {
				return this.x * t.x + this.y * t.y
			}
			cross(t) {
				return this.x * t.y - this.y * t.x
			}
			lengthSq() {
				return this.x * this.x + this.y * this.y
			}
			length() {
				return Math.sqrt(this.x * this.x + this.y * this.y)
			}
			manhattanLength() {
				return Math.abs(this.x) + Math.abs(this.y)
			}
			normalize() {
				return this.divideScalar(this.length() || 1)
			}
			angle() {
				return Math.atan2(-this.y, -this.x) + Math.PI
			}
			distanceTo(t) {
				return Math.sqrt(this.distanceToSquared(t))
			}
			distanceToSquared(t) {
				const e = this.x - t.x,
					i = this.y - t.y;
				return e * e + i * i
			}
			manhattanDistanceTo(t) {
				return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
			}
			setLength(t) {
				return this.normalize().multiplyScalar(t)
			}
			lerp(t, e) {
				return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
			}
			lerpVectors(t, e, i) {
				return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this
			}
			equals(t) {
				return t.x === this.x && t.y === this.y
			}
			fromArray(t, e = 0) {
				return this.x = t[e], this.y = t[e + 1], this
			}
			toArray(t = [], e = 0) {
				return t[e] = this.x, t[e + 1] = this.y, t
			}
			fromBufferAttribute(t, e, i) {
				return this.x = t.getX(e), this.y = t.getY(e), this
			}
			rotateAround(t, e) {
				const i = Math.cos(e),
					n = Math.sin(e),
					r = this.x - t.x,
					s = this.y - t.y;
				return this.x = r * i - s * n + t.x, this.y = r * n + s * i + t.y, this
			}
			random() {
				return this.x = Math.random(), this.y = Math.random(), this
			}
		}
		fl.prototype.isVector2 = !0;
		class ml {
			constructor() {
				this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
			}
			set(t, e, i, n, r, s, a, o, l) {
				const c = this.elements;
				return c[0] = t, c[1] = n, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = i, c[7] = s, c[8] = l, this
			}
			identity() {
				return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
			}
			copy(t) {
				const e = this.elements,
					i = t.elements;
				return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
			}
			extractBasis(t, e, i) {
				return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
			}
			setFromMatrix4(t) {
				const e = t.elements;
				return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
			}
			multiply(t) {
				return this.multiplyMatrices(this, t)
			}
			premultiply(t) {
				return this.multiplyMatrices(t, this)
			}
			multiplyMatrices(t, e) {
				const i = t.elements,
					n = e.elements,
					r = this.elements,
					s = i[0],
					a = i[3],
					o = i[6],
					l = i[1],
					c = i[4],
					h = i[7],
					u = i[2],
					d = i[5],
					p = i[8],
					f = n[0],
					m = n[3],
					g = n[6],
					v = n[1],
					y = n[4],
					x = n[7],
					_ = n[2],
					w = n[5],
					b = n[8];
				return r[0] = s * f + a * v + o * _, r[3] = s * m + a * y + o * w, r[6] = s * g + a * x + o * b, r[1] = l * f + c * v + h * _, r[4] = l * m + c * y + h * w, r[7] = l * g + c * x + h * b, r[2] = u * f + d * v + p * _, r[5] = u * m + d * y + p * w, r[8] = u * g + d * x + p * b, this
			}
			multiplyScalar(t) {
				const e = this.elements;
				return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
			}
			determinant() {
				const t = this.elements,
					e = t[0],
					i = t[1],
					n = t[2],
					r = t[3],
					s = t[4],
					a = t[5],
					o = t[6],
					l = t[7],
					c = t[8];
				return e * s * c - e * a * l - i * r * c + i * a * o + n * r * l - n * s * o
			}
			invert() {
				const t = this.elements,
					e = t[0],
					i = t[1],
					n = t[2],
					r = t[3],
					s = t[4],
					a = t[5],
					o = t[6],
					l = t[7],
					c = t[8],
					h = c * s - a * l,
					u = a * o - c * r,
					d = l * r - s * o,
					p = e * h + i * u + n * d;
				if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
				const f = 1 / p;
				return t[0] = h * f, t[1] = (n * l - c * i) * f, t[2] = (a * i - n * s) * f, t[3] = u * f, t[4] = (c * e - n * o) * f, t[5] = (n * r - a * e) * f, t[6] = d * f, t[7] = (i * o - l * e) * f, t[8] = (s * e - i * r) * f, this
			}
			transpose() {
				let t;
				const e = this.elements;
				return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
			}
			getNormalMatrix(t) {
				return this.setFromMatrix4(t).invert().transpose()
			}
			transposeIntoArray(t) {
				const e = this.elements;
				return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
			}
			setUvTransform(t, e, i, n, r, s, a) {
				const o = Math.cos(r),
					l = Math.sin(r);
				return this.set(i * o, i * l, -i * (o * s + l * a) + s + t, -n * l, n * o, -n * (-l * s + o * a) + a + e, 0, 0, 1), this
			}
			scale(t, e) {
				const i = this.elements;
				return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
			}
			rotate(t) {
				const e = Math.cos(t),
					i = Math.sin(t),
					n = this.elements,
					r = n[0],
					s = n[3],
					a = n[6],
					o = n[1],
					l = n[4],
					c = n[7];
				return n[0] = e * r + i * o, n[3] = e * s + i * l, n[6] = e * a + i * c, n[1] = -i * r + e * o, n[4] = -i * s + e * l, n[7] = -i * a + e * c, this
			}
			translate(t, e) {
				const i = this.elements;
				return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
			}
			equals(t) {
				const e = this.elements,
					i = t.elements;
				for (let t = 0; t < 9; t++)
					if (e[t] !== i[t]) return !1;
				return !0
			}
			fromArray(t, e = 0) {
				for (let i = 0; i < 9; i++) this.elements[i] = t[i + e];
				return this
			}
			toArray(t = [], e = 0) {
				const i = this.elements;
				return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
			}
			clone() {
				return (new this.constructor).fromArray(this.elements)
			}
		}
		let gl;
		ml.prototype.isMatrix3 = !0;
		const vl = {
			getDataURL: function (t) {
				if (/^data:/i.test(t.src)) return t.src;
				if ("undefined" == typeof HTMLCanvasElement) return t.src;
				let e;
				if (t instanceof HTMLCanvasElement) e = t;
				else {
					void 0 === gl && (gl = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), gl.width = t.width, gl.height = t.height;
					const i = gl.getContext("2d");
					t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = gl
				}
				return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
			}
		};
		let yl = 0;
		class xl extends hl {
			constructor(t = xl.DEFAULT_IMAGE, e = xl.DEFAULT_MAPPING, i = 1001, n = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = 1, c = 3e3) {
				super(), Object.defineProperty(this, "id", {
					value: yl++
				}), this.uuid = pl.generateUUID(), this.name = "", this.image = t, this.mipmaps = [], this.mapping = e, this.wrapS = i, this.wrapT = n, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new fl(0, 0), this.repeat = new fl(1, 1), this.center = new fl(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ml, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.version = 0, this.onUpdate = null
			}
			updateMatrix() {
				this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
			}
			clone() {
				return (new this.constructor).copy(this)
			}
			copy(t) {
				return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
			}
			toJSON(t) {
				const e = void 0 === t || "string" == typeof t;
				if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
				const i = {
					metadata: {
						version: 4.5,
						type: "Texture",
						generator: "Texture.toJSON"
					},
					uuid: this.uuid,
					name: this.name,
					mapping: this.mapping,
					repeat: [this.repeat.x, this.repeat.y],
					offset: [this.offset.x, this.offset.y],
					center: [this.center.x, this.center.y],
					rotation: this.rotation,
					wrap: [this.wrapS, this.wrapT],
					format: this.format,
					type: this.type,
					encoding: this.encoding,
					minFilter: this.minFilter,
					magFilter: this.magFilter,
					anisotropy: this.anisotropy,
					flipY: this.flipY,
					premultiplyAlpha: this.premultiplyAlpha,
					unpackAlignment: this.unpackAlignment
				};
				if (void 0 !== this.image) {
					const n = this.image;
					if (void 0 === n.uuid && (n.uuid = pl.generateUUID()), !e && void 0 === t.images[n.uuid]) {
						let e;
						if (Array.isArray(n)) {
							e = [];
							for (let t = 0, i = n.length; t < i; t++) n[t].isDataTexture ? e.push(_l(n[t].image)) : e.push(_l(n[t]))
						} else e = _l(n);
						t.images[n.uuid] = {
							uuid: n.uuid,
							url: e
						}
					}
					i.image = n.uuid
				}
				return e || (t.textures[this.uuid] = i), i
			}
			dispose() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
			transformUv(t) {
				if (300 !== this.mapping) return t;
				if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
					case Po:
						t.x = t.x - Math.floor(t.x);
						break;
					case Oo:
						t.x = t.x < 0 ? 0 : 1;
						break;
					case Io:
						1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
				}
				if (t.y < 0 || t.y > 1) switch (this.wrapT) {
					case Po:
						t.y = t.y - Math.floor(t.y);
						break;
					case Oo:
						t.y = t.y < 0 ? 0 : 1;
						break;
					case Io:
						1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
				}
				return this.flipY && (t.y = 1 - t.y), t
			}
			set needsUpdate(t) {
				!0 === t && this.version++
			}
		}

		function _l(t) {
			return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? vl.getDataURL(t) : t.data ? {
				data: Array.prototype.slice.call(t.data),
				width: t.width,
				height: t.height,
				type: t.data.constructor.name
			} : {}
		}
		xl.DEFAULT_IMAGE = void 0, xl.DEFAULT_MAPPING = 300, xl.prototype.isTexture = !0;
		class wl {
			constructor(t = 0, e = 0, i = 0, n = 1) {
				this.x = t, this.y = e, this.z = i, this.w = n
			}
			get width() {
				return this.z
			}
			set width(t) {
				this.z = t
			}
			get height() {
				return this.w
			}
			set height(t) {
				this.w = t
			}
			set(t, e, i, n) {
				return this.x = t, this.y = e, this.z = i, this.w = n, this
			}
			setScalar(t) {
				return this.x = t, this.y = t, this.z = t, this.w = t, this
			}
			setX(t) {
				return this.x = t, this
			}
			setY(t) {
				return this.y = t, this
			}
			setZ(t) {
				return this.z = t, this
			}
			setW(t) {
				return this.w = t, this
			}
			setComponent(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					case 3:
						this.w = e;
						break;
					default:
						throw new Error("index is out of range: " + t)
				}
				return this
			}
			getComponent(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					case 3:
						return this.w;
					default:
						throw new Error("index is out of range: " + t)
				}
			}
			clone() {
				return new this.constructor(this.x, this.y, this.z, this.w)
			}
			copy(t) {
				return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
			}
			add(t, e) {
				return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
			}
			addScalar(t) {
				return this.x += t, this.y += t, this.z += t, this.w += t, this
			}
			addVectors(t, e) {
				return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
			}
			addScaledVector(t, e) {
				return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
			}
			sub(t, e) {
				return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
			}
			subScalar(t) {
				return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
			}
			subVectors(t, e) {
				return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
			}
			multiply(t) {
				return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
			}
			multiplyScalar(t) {
				return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
			}
			applyMatrix4(t) {
				const e = this.x,
					i = this.y,
					n = this.z,
					r = this.w,
					s = t.elements;
				return this.x = s[0] * e + s[4] * i + s[8] * n + s[12] * r, this.y = s[1] * e + s[5] * i + s[9] * n + s[13] * r, this.z = s[2] * e + s[6] * i + s[10] * n + s[14] * r, this.w = s[3] * e + s[7] * i + s[11] * n + s[15] * r, this
			}
			divideScalar(t) {
				return this.multiplyScalar(1 / t)
			}
			setAxisAngleFromQuaternion(t) {
				this.w = 2 * Math.acos(t.w);
				const e = Math.sqrt(1 - t.w * t.w);
				return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
			}
			setAxisAngleFromRotationMatrix(t) {
				let e, i, n, r;
				const s = .01,
					a = .1,
					o = t.elements,
					l = o[0],
					c = o[4],
					h = o[8],
					u = o[1],
					d = o[5],
					p = o[9],
					f = o[2],
					m = o[6],
					g = o[10];
				if (Math.abs(c - u) < s && Math.abs(h - f) < s && Math.abs(p - m) < s) {
					if (Math.abs(c + u) < a && Math.abs(h + f) < a && Math.abs(p + m) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
					e = Math.PI;
					const t = (l + 1) / 2,
						o = (d + 1) / 2,
						v = (g + 1) / 2,
						y = (c + u) / 4,
						x = (h + f) / 4,
						_ = (p + m) / 4;
					return t > o && t > v ? t < s ? (i = 0, n = .707106781, r = .707106781) : (i = Math.sqrt(t), n = y / i, r = x / i) : o > v ? o < s ? (i = .707106781, n = 0, r = .707106781) : (n = Math.sqrt(o), i = y / n, r = _ / n) : v < s ? (i = .707106781, n = .707106781, r = 0) : (r = Math.sqrt(v), i = x / r, n = _ / r), this.set(i, n, r, e), this
				}
				let v = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c));
				return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (h - f) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this
			}
			min(t) {
				return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
			}
			max(t) {
				return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
			}
			clamp(t, e) {
				return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
			}
			clampScalar(t, e) {
				return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
			}
			clampLength(t, e) {
				const i = this.length();
				return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
			}
			floor() {
				return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
			}
			ceil() {
				return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
			}
			round() {
				return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
			}
			roundToZero() {
				return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
			}
			negate() {
				return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
			}
			dot(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
			}
			lengthSq() {
				return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
			}
			length() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
			}
			manhattanLength() {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
			}
			normalize() {
				return this.divideScalar(this.length() || 1)
			}
			setLength(t) {
				return this.normalize().multiplyScalar(t)
			}
			lerp(t, e) {
				return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
			}
			lerpVectors(t, e, i) {
				return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this
			}
			equals(t) {
				return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
			}
			fromArray(t, e = 0) {
				return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
			}
			toArray(t = [], e = 0) {
				return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
			}
			fromBufferAttribute(t, e, i) {
				return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
			}
			random() {
				return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
			}
		}
		wl.prototype.isVector4 = !0;
		class bl extends hl {
			constructor(t, e, i) {
				super(), this.width = t, this.height = e, this.depth = 1, this.scissor = new wl(0, 0, t, e), this.scissorTest = !1, this.viewport = new wl(0, 0, t, e), i = i || {}, this.texture = new xl(void 0, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = 1, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : ko, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
			}
			setTexture(t) {
				t.image = {
					width: this.width,
					height: this.height,
					depth: this.depth
				}, this.texture = t
			}
			setSize(t, e, i = 1) {
				this.width === t && this.height === e && this.depth === i || (this.width = t, this.height = e, this.depth = i, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
			}
			clone() {
				return (new this.constructor).copy(this)
			}
			copy(t) {
				return this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
			}
			dispose() {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}
		bl.prototype.isWebGLRenderTarget = !0;
		(class extends bl {
			constructor(t, e, i) {
				super(t, e, i), this.samples = 4
			}
			copy(t) {
				return super.copy.call(this, t), this.samples = t.samples, this
			}
		}).prototype.isWebGLMultisampleRenderTarget = !0;
		class Ml {
			constructor(t = 0, e = 0, i = 0, n = 1) {
				this._x = t, this._y = e, this._z = i, this._w = n
			}
			static slerp(t, e, i, n) {
				return i.slerpQuaternions(t, e, n)
			}
			static slerpFlat(t, e, i, n, r, s, a) {
				let o = i[n + 0],
					l = i[n + 1],
					c = i[n + 2],
					h = i[n + 3];
				const u = r[s + 0],
					d = r[s + 1],
					p = r[s + 2],
					f = r[s + 3];
				if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void(t[e + 3] = h);
				if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void(t[e + 3] = f);
				if (h !== f || o !== u || l !== d || c !== p) {
					let t = 1 - a;
					const e = o * u + l * d + c * p + h * f,
						i = e >= 0 ? 1 : -1,
						n = 1 - e * e;
					if (n > Number.EPSILON) {
						const r = Math.sqrt(n),
							s = Math.atan2(r, e * i);
						t = Math.sin(t * s) / r, a = Math.sin(a * s) / r
					}
					const r = a * i;
					if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + f * r, t === 1 - a) {
						const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
						o *= t, l *= t, c *= t, h *= t
					}
				}
				t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h
			}
			static multiplyQuaternionsFlat(t, e, i, n, r, s) {
				const a = i[n],
					o = i[n + 1],
					l = i[n + 2],
					c = i[n + 3],
					h = r[s],
					u = r[s + 1],
					d = r[s + 2],
					p = r[s + 3];
				return t[e] = a * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - a * d, t[e + 2] = l * p + c * d + a * u - o * h, t[e + 3] = c * p - a * h - o * u - l * d, t
			}
			get x() {
				return this._x
			}
			set x(t) {
				this._x = t, this._onChangeCallback()
			}
			get y() {
				return this._y
			}
			set y(t) {
				this._y = t, this._onChangeCallback()
			}
			get z() {
				return this._z
			}
			set z(t) {
				this._z = t, this._onChangeCallback()
			}
			get w() {
				return this._w
			}
			set w(t) {
				this._w = t, this._onChangeCallback()
			}
			set(t, e, i, n) {
				return this._x = t, this._y = e, this._z = i, this._w = n, this._onChangeCallback(), this
			}
			clone() {
				return new this.constructor(this._x, this._y, this._z, this._w)
			}
			copy(t) {
				return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
			}
			setFromEuler(t, e) {
				if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
				const i = t._x,
					n = t._y,
					r = t._z,
					s = t._order,
					a = Math.cos,
					o = Math.sin,
					l = a(i / 2),
					c = a(n / 2),
					h = a(r / 2),
					u = o(i / 2),
					d = o(n / 2),
					p = o(r / 2);
				switch (s) {
					case "XYZ":
						this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
						break;
					case "YXZ":
						this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
						break;
					case "ZXY":
						this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
						break;
					case "ZYX":
						this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
						break;
					case "YZX":
						this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
						break;
					case "XZY":
						this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p
				}
				return !1 !== e && this._onChangeCallback(), this
			}
			setFromAxisAngle(t, e) {
				const i = e / 2,
					n = Math.sin(i);
				return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this._onChangeCallback(), this
			}
			setFromRotationMatrix(t) {
				const e = t.elements,
					i = e[0],
					n = e[4],
					r = e[8],
					s = e[1],
					a = e[5],
					o = e[9],
					l = e[2],
					c = e[6],
					h = e[10],
					u = i + a + h;
				if (u > 0) {
					const t = .5 / Math.sqrt(u + 1);
					this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (s - n) * t
				} else if (i > a && i > h) {
					const t = 2 * Math.sqrt(1 + i - a - h);
					this._w = (c - o) / t, this._x = .25 * t, this._y = (n + s) / t, this._z = (r + l) / t
				} else if (a > h) {
					const t = 2 * Math.sqrt(1 + a - i - h);
					this._w = (r - l) / t, this._x = (n + s) / t, this._y = .25 * t, this._z = (o + c) / t
				} else {
					const t = 2 * Math.sqrt(1 + h - i - a);
					this._w = (s - n) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t
				}
				return this._onChangeCallback(), this
			}
			setFromUnitVectors(t, e) {
				let i = t.dot(e) + 1;
				return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize()
			}
			angleTo(t) {
				return 2 * Math.acos(Math.abs(pl.clamp(this.dot(t), -1, 1)))
			}
			rotateTowards(t, e) {
				const i = this.angleTo(t);
				if (0 === i) return this;
				const n = Math.min(1, e / i);
				return this.slerp(t, n), this
			}
			identity() {
				return this.set(0, 0, 0, 1)
			}
			invert() {
				return this.conjugate()
			}
			conjugate() {
				return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
			}
			dot(t) {
				return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
			}
			lengthSq() {
				return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
			}
			length() {
				return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
			}
			normalize() {
				let t = this.length();
				return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
			}
			multiply(t, e) {
				return void 0 !== e ? this.multiplyQuaternions(t, e) : this.multiplyQuaternions(this, t)
			}
			premultiply(t) {
				return this.multiplyQuaternions(t, this)
			}
			multiplyQuaternions(t, e) {
				const i = t._x,
					n = t._y,
					r = t._z,
					s = t._w,
					a = e._x,
					o = e._y,
					l = e._z,
					c = e._w;
				return this._x = i * c + s * a + n * l - r * o, this._y = n * c + s * o + r * a - i * l, this._z = r * c + s * l + i * o - n * a, this._w = s * c - i * a - n * o - r * l, this._onChangeCallback(), this
			}
			slerp(t, e) {
				if (0 === e) return this;
				if (1 === e) return this.copy(t);
				const i = this._x,
					n = this._y,
					r = this._z,
					s = this._w;
				let a = s * t._w + i * t._x + n * t._y + r * t._z;
				if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = i, this._y = n, this._z = r, this;
				const o = 1 - a * a;
				if (o <= Number.EPSILON) {
					const t = 1 - e;
					return this._w = t * s + e * this._w, this._x = t * i + e * this._x, this._y = t * n + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
				}
				const l = Math.sqrt(o),
					c = Math.atan2(l, a),
					h = Math.sin((1 - e) * c) / l,
					u = Math.sin(e * c) / l;
				return this._w = s * h + this._w * u, this._x = i * h + this._x * u, this._y = n * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this
			}
			slerpQuaternions(t, e, i) {
				this.copy(t).slerp(e, i)
			}
			equals(t) {
				return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
			}
			fromArray(t, e = 0) {
				return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
			}
			toArray(t = [], e = 0) {
				return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
			}
			fromBufferAttribute(t, e) {
				return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
			}
			_onChange(t) {
				return this._onChangeCallback = t, this
			}
			_onChangeCallback() {}
		}
		Ml.prototype.isQuaternion = !0;
		class Sl {
			constructor(t = 0, e = 0, i = 0) {
				this.x = t, this.y = e, this.z = i
			}
			set(t, e, i) {
				return void 0 === i && (i = this.z), this.x = t, this.y = e, this.z = i, this
			}
			setScalar(t) {
				return this.x = t, this.y = t, this.z = t, this
			}
			setX(t) {
				return this.x = t, this
			}
			setY(t) {
				return this.y = t, this
			}
			setZ(t) {
				return this.z = t, this
			}
			setComponent(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					default:
						throw new Error("index is out of range: " + t)
				}
				return this
			}
			getComponent(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					default:
						throw new Error("index is out of range: " + t)
				}
			}
			clone() {
				return new this.constructor(this.x, this.y, this.z)
			}
			copy(t) {
				return this.x = t.x, this.y = t.y, this.z = t.z, this
			}
			add(t, e) {
				return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
			}
			addScalar(t) {
				return this.x += t, this.y += t, this.z += t, this
			}
			addVectors(t, e) {
				return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
			}
			addScaledVector(t, e) {
				return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
			}
			sub(t, e) {
				return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
			}
			subScalar(t) {
				return this.x -= t, this.y -= t, this.z -= t, this
			}
			subVectors(t, e) {
				return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
			}
			multiply(t, e) {
				return void 0 !== e ? this.multiplyVectors(t, e) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
			}
			multiplyScalar(t) {
				return this.x *= t, this.y *= t, this.z *= t, this
			}
			multiplyVectors(t, e) {
				return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
			}
			applyEuler(t) {
				return !t || t.isEuler, this.applyQuaternion(Tl.setFromEuler(t))
			}
			applyAxisAngle(t, e) {
				return this.applyQuaternion(Tl.setFromAxisAngle(t, e))
			}
			applyMatrix3(t) {
				const e = this.x,
					i = this.y,
					n = this.z,
					r = t.elements;
				return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
			}
			applyNormalMatrix(t) {
				return this.applyMatrix3(t).normalize()
			}
			applyMatrix4(t) {
				const e = this.x,
					i = this.y,
					n = this.z,
					r = t.elements,
					s = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
				return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * s, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * s, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * s, this
			}
			applyQuaternion(t) {
				const e = this.x,
					i = this.y,
					n = this.z,
					r = t.x,
					s = t.y,
					a = t.z,
					o = t.w,
					l = o * e + s * n - a * i,
					c = o * i + a * e - r * n,
					h = o * n + r * i - s * e,
					u = -r * e - s * i - a * n;
				return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this
			}
			project(t) {
				return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
			}
			unproject(t) {
				return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
			}
			transformDirection(t) {
				const e = this.x,
					i = this.y,
					n = this.z,
					r = t.elements;
				return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
			}
			divide(t) {
				return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
			}
			divideScalar(t) {
				return this.multiplyScalar(1 / t)
			}
			min(t) {
				return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
			}
			max(t) {
				return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
			}
			clamp(t, e) {
				return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
			}
			clampScalar(t, e) {
				return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
			}
			clampLength(t, e) {
				const i = this.length();
				return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
			}
			floor() {
				return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
			}
			ceil() {
				return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
			}
			round() {
				return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
			}
			roundToZero() {
				return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
			}
			negate() {
				return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
			}
			dot(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z
			}
			lengthSq() {
				return this.x * this.x + this.y * this.y + this.z * this.z
			}
			length() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
			}
			manhattanLength() {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
			}
			normalize() {
				return this.divideScalar(this.length() || 1)
			}
			setLength(t) {
				return this.normalize().multiplyScalar(t)
			}
			lerp(t, e) {
				return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
			}
			lerpVectors(t, e, i) {
				return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this
			}
			cross(t, e) {
				return void 0 !== e ? this.crossVectors(t, e) : this.crossVectors(this, t)
			}
			crossVectors(t, e) {
				const i = t.x,
					n = t.y,
					r = t.z,
					s = e.x,
					a = e.y,
					o = e.z;
				return this.x = n * o - r * a, this.y = r * s - i * o, this.z = i * a - n * s, this
			}
			projectOnVector(t) {
				const e = t.lengthSq();
				if (0 === e) return this.set(0, 0, 0);
				const i = t.dot(this) / e;
				return this.copy(t).multiplyScalar(i)
			}
			projectOnPlane(t) {
				return Dl.copy(this).projectOnVector(t), this.sub(Dl)
			}
			reflect(t) {
				return this.sub(Dl.copy(t).multiplyScalar(2 * this.dot(t)))
			}
			angleTo(t) {
				const e = Math.sqrt(this.lengthSq() * t.lengthSq());
				if (0 === e) return Math.PI / 2;
				const i = this.dot(t) / e;
				return Math.acos(pl.clamp(i, -1, 1))
			}
			distanceTo(t) {
				return Math.sqrt(this.distanceToSquared(t))
			}
			distanceToSquared(t) {
				const e = this.x - t.x,
					i = this.y - t.y,
					n = this.z - t.z;
				return e * e + i * i + n * n
			}
			manhattanDistanceTo(t) {
				return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
			}
			setFromSpherical(t) {
				return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
			}
			setFromSphericalCoords(t, e, i) {
				const n = Math.sin(e) * t;
				return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this
			}
			setFromCylindrical(t) {
				return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
			}
			setFromCylindricalCoords(t, e, i) {
				return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
			}
			setFromMatrixPosition(t) {
				const e = t.elements;
				return this.x = e[12], this.y = e[13], this.z = e[14], this
			}
			setFromMatrixScale(t) {
				const e = this.setFromMatrixColumn(t, 0).length(),
					i = this.setFromMatrixColumn(t, 1).length(),
					n = this.setFromMatrixColumn(t, 2).length();
				return this.x = e, this.y = i, this.z = n, this
			}
			setFromMatrixColumn(t, e) {
				return this.fromArray(t.elements, 4 * e)
			}
			setFromMatrix3Column(t, e) {
				return this.fromArray(t.elements, 3 * e)
			}
			equals(t) {
				return t.x === this.x && t.y === this.y && t.z === this.z
			}
			fromArray(t, e = 0) {
				return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
			}
			toArray(t = [], e = 0) {
				return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
			}
			fromBufferAttribute(t, e, i) {
				return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
			}
			random() {
				return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
			}
		}
		Sl.prototype.isVector3 = !0;
		const Dl = new Sl,
			Tl = new Ml;
		class Cl {
			constructor(t = new Sl(1 / 0, 1 / 0, 1 / 0), e = new Sl(-1 / 0, -1 / 0, -1 / 0)) {
				this.min = t, this.max = e
			}
			set(t, e) {
				return this.min.copy(t), this.max.copy(e), this
			}
			setFromArray(t) {
				let e = 1 / 0,
					i = 1 / 0,
					n = 1 / 0,
					r = -1 / 0,
					s = -1 / 0,
					a = -1 / 0;
				for (let o = 0, l = t.length; o < l; o += 3) {
					const l = t[o],
						c = t[o + 1],
						h = t[o + 2];
					l < e && (e = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > s && (s = c), h > a && (a = h)
				}
				return this.min.set(e, i, n), this.max.set(r, s, a), this
			}
			setFromBufferAttribute(t) {
				let e = 1 / 0,
					i = 1 / 0,
					n = 1 / 0,
					r = -1 / 0,
					s = -1 / 0,
					a = -1 / 0;
				for (let o = 0, l = t.count; o < l; o++) {
					const l = t.getX(o),
						c = t.getY(o),
						h = t.getZ(o);
					l < e && (e = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > s && (s = c), h > a && (a = h)
				}
				return this.min.set(e, i, n), this.max.set(r, s, a), this
			}
			setFromPoints(t) {
				this.makeEmpty();
				for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
				return this
			}
			setFromCenterAndSize(t, e) {
				const i = Al.copy(e).multiplyScalar(.5);
				return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
			}
			setFromObject(t) {
				return this.makeEmpty(), this.expandByObject(t)
			}
			clone() {
				return (new this.constructor).copy(this)
			}
			copy(t) {
				return this.min.copy(t.min), this.max.copy(t.max), this
			}
			makeEmpty() {
				return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
			}
			isEmpty() {
				return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
			}
			getCenter(t) {
				return void 0 === t && (t = new Sl), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
			}
			getSize(t) {
				return void 0 === t && (t = new Sl), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
			}
			expandByPoint(t) {
				return this.min.min(t), this.max.max(t), this
			}
			expandByVector(t) {
				return this.min.sub(t), this.max.add(t), this
			}
			expandByScalar(t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this
			}
			expandByObject(t) {
				t.updateWorldMatrix(!1, !1);
				const e = t.geometry;
				void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Ll.copy(e.boundingBox), Ll.applyMatrix4(t.matrixWorld), this.union(Ll));
				const i = t.children;
				for (let t = 0, e = i.length; t < e; t++) this.expandByObject(i[t]);
				return this
			}
			containsPoint(t) {
				return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
			}
			containsBox(t) {
				return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
			}
			getParameter(t, e) {
				return void 0 === e && (e = new Sl), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
			}
			intersectsBox(t) {
				return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
			}
			intersectsSphere(t) {
				return this.clampPoint(t.center, Al), Al.distanceToSquared(t.center) <= t.radius * t.radius
			}
			intersectsPlane(t) {
				let e, i;
				return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
			}
			intersectsTriangle(t) {
				if (this.isEmpty()) return !1;
				this.getCenter(kl), Rl.subVectors(this.max, kl), Pl.subVectors(t.a, kl), Ol.subVectors(t.b, kl), Il.subVectors(t.c, kl), Fl.subVectors(Ol, Pl), Nl.subVectors(Il, Ol), zl.subVectors(Pl, Il);
				let e = [0, -Fl.z, Fl.y, 0, -Nl.z, Nl.y, 0, -zl.z, zl.y, Fl.z, 0, -Fl.x, Nl.z, 0, -Nl.x, zl.z, 0, -zl.x, -Fl.y, Fl.x, 0, -Nl.y, Nl.x, 0, -zl.y, zl.x, 0];
				return !!Vl(e, Pl, Ol, Il, Rl) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Vl(e, Pl, Ol, Il, Rl) && (Bl.crossVectors(Fl, Nl), e = [Bl.x, Bl.y, Bl.z], Vl(e, Pl, Ol, Il, Rl)))
			}
			clampPoint(t, e) {
				return void 0 === e && (e = new Sl), e.copy(t).clamp(this.min, this.max)
			}
			distanceToPoint(t) {
				return Al.copy(t).clamp(this.min, this.max).sub(t).length()
			}
			getBoundingSphere(t) {
				return this.getCenter(t.center), t.radius = .5 * this.getSize(Al).length(), t
			}
			intersect(t) {
				return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
			}
			union(t) {
				return this.min.min(t.min), this.max.max(t.max), this
			}
			applyMatrix4(t) {
				return this.isEmpty() || (El[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), El[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), El[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), El[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), El[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), El[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), El[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), El[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(El)), this
			}
			translate(t) {
				return this.min.add(t), this.max.add(t), this
			}
			equals(t) {
				return t.min.equals(this.min) && t.max.equals(this.max)
			}
		}
		Cl.prototype.isBox3 = !0;
		const El = [new Sl, new Sl, new Sl, new Sl, new Sl, new Sl, new Sl, new Sl],
			Al = new Sl,
			Ll = new Cl,
			Pl = new Sl,
			Ol = new Sl,
			Il = new Sl,
			Fl = new Sl,
			Nl = new Sl,
			zl = new Sl,
			kl = new Sl,
			Rl = new Sl,
			Bl = new Sl,
			Ul = new Sl;

		function Vl(t, e, i, n, r) {
			for (let s = 0, a = t.length - 3; s <= a; s += 3) {
				Ul.fromArray(t, s);
				const a = r.x * Math.abs(Ul.x) + r.y * Math.abs(Ul.y) + r.z * Math.abs(Ul.z),
					o = e.dot(Ul),
					l = i.dot(Ul),
					c = n.dot(Ul);
				if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1
			}
			return !0
		}
		const Wl = new Cl,
			Gl = new Sl,
			Hl = new Sl,
			jl = new Sl;
		class ql {
			constructor(t = new Sl, e = -1) {
				this.center = t, this.radius = e
			}
			set(t, e) {
				return this.center.copy(t), this.radius = e, this
			}
			setFromPoints(t, e) {
				const i = this.center;
				void 0 !== e ? i.copy(e) : Wl.setFromPoints(t).getCenter(i);
				let n = 0;
				for (let e = 0, r = t.length; e < r; e++) n = Math.max(n, i.distanceToSquared(t[e]));
				return this.radius = Math.sqrt(n), this
			}
			copy(t) {
				return this.center.copy(t.center), this.radius = t.radius, this
			}
			isEmpty() {
				return this.radius < 0
			}
			makeEmpty() {
				return this.center.set(0, 0, 0), this.radius = -1, this
			}
			containsPoint(t) {
				return t.distanceToSquared(this.center) <= this.radius * this.radius
			}
			distanceToPoint(t) {
				return t.distanceTo(this.center) - this.radius
			}
			intersectsSphere(t) {
				const e = this.radius + t.radius;
				return t.center.distanceToSquared(this.center) <= e * e
			}
			intersectsBox(t) {
				return t.intersectsSphere(this)
			}
			intersectsPlane(t) {
				return Math.abs(t.distanceToPoint(this.center)) <= this.radius
			}
			clampPoint(t, e) {
				const i = this.center.distanceToSquared(t);
				return void 0 === e && (e = new Sl), e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
			}
			getBoundingBox(t) {
				return void 0 === t && (t = new Cl), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
			}
			applyMatrix4(t) {
				return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
			}
			translate(t) {
				return this.center.add(t), this
			}
			expandByPoint(t) {
				jl.subVectors(t, this.center);
				const e = jl.lengthSq();
				if (e > this.radius * this.radius) {
					const t = Math.sqrt(e),
						i = .5 * (t - this.radius);
					this.center.add(jl.multiplyScalar(i / t)), this.radius += i
				}
				return this
			}
			union(t) {
				return Hl.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(Gl.copy(t.center).add(Hl)), this.expandByPoint(Gl.copy(t.center).sub(Hl)), this
			}
			equals(t) {
				return t.center.equals(this.center) && t.radius === this.radius
			}
			clone() {
				return (new this.constructor).copy(this)
			}
		}
		const Xl = new Sl,
			Yl = new Sl,
			Zl = new Sl,
			Jl = new Sl,
			$l = new Sl,
			Kl = new Sl,
			Ql = new Sl;
		class tc {
			constructor(t = new Sl, e = new Sl(0, 0, -1)) {
				this.origin = t, this.direction = e
			}
			set(t, e) {
				return this.origin.copy(t), this.direction.copy(e), this
			}
			copy(t) {
				return this.origin.copy(t.origin), this.direction.copy(t.direction), this
			}
			at(t, e) {
				return void 0 === e && (e = new Sl), e.copy(this.direction).multiplyScalar(t).add(this.origin)
			}
			lookAt(t) {
				return this.direction.copy(t).sub(this.origin).normalize(), this
			}
			recast(t) {
				return this.origin.copy(this.at(t, Xl)), this
			}
			closestPointToPoint(t, e) {
				void 0 === e && (e = new Sl), e.subVectors(t, this.origin);
				const i = e.dot(this.direction);
				return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
			}
			distanceToPoint(t) {
				return Math.sqrt(this.distanceSqToPoint(t))
			}
			distanceSqToPoint(t) {
				const e = Xl.subVectors(t, this.origin).dot(this.direction);
				return e < 0 ? this.origin.distanceToSquared(t) : (Xl.copy(this.direction).multiplyScalar(e).add(this.origin), Xl.distanceToSquared(t))
			}
			distanceSqToSegment(t, e, i, n) {
				Yl.copy(t).add(e).multiplyScalar(.5), Zl.copy(e).sub(t).normalize(), Jl.copy(this.origin).sub(Yl);
				const r = .5 * t.distanceTo(e),
					s = -this.direction.dot(Zl),
					a = Jl.dot(this.direction),
					o = -Jl.dot(Zl),
					l = Jl.lengthSq(),
					c = Math.abs(1 - s * s);
				let h, u, d, p;
				if (c > 0)
					if (h = s * o - a, u = s * a - o, p = r * c, h >= 0)
						if (u >= -p)
							if (u <= p) {
								const t = 1 / c;
								h *= t, u *= t, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l
							} else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
				else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
				else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
				else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
				return i && i.copy(this.direction).multiplyScalar(h).add(this.origin), n && n.copy(Zl).multiplyScalar(u).add(Yl), d
			}
			intersectSphere(t, e) {
				Xl.subVectors(t.center, this.origin);
				const i = Xl.dot(this.direction),
					n = Xl.dot(Xl) - i * i,
					r = t.radius * t.radius;
				if (n > r) return null;
				const s = Math.sqrt(r - n),
					a = i - s,
					o = i + s;
				return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e)
			}
			intersectsSphere(t) {
				return this.distanceSqToPoint(t.center) <= t.radius * t.radius
			}
			distanceToPlane(t) {
				const e = t.normal.dot(this.direction);
				if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
				const i = -(this.origin.dot(t.normal) + t.constant) / e;
				return i >= 0 ? i : null
			}
			intersectPlane(t, e) {
				const i = this.distanceToPlane(t);
				return null === i ? null : this.at(i, e)
			}
			intersectsPlane(t) {
				const e = t.distanceToPoint(this.origin);
				if (0 === e) return !0;
				return t.normal.dot(this.direction) * e < 0
			}
			intersectBox(t, e) {
				let i, n, r, s, a, o;
				const l = 1 / this.direction.x,
					c = 1 / this.direction.y,
					h = 1 / this.direction.z,
					u = this.origin;
				return l >= 0 ? (i = (t.min.x - u.x) * l, n = (t.max.x - u.x) * l) : (i = (t.max.x - u.x) * l, n = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, s = (t.min.y - u.y) * c), i > s || r > n ? null : ((r > i || i != i) && (i = r), (s < n || n != n) && (n = s), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), i > o || a > n ? null : ((a > i || i != i) && (i = a), (o < n || n != n) && (n = o), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
			}
			intersectsBox(t) {
				return null !== this.intersectBox(t, Xl)
			}
			intersectTriangle(t, e, i, n, r) {
				$l.subVectors(e, t), Kl.subVectors(i, t), Ql.crossVectors($l, Kl);
				let s, a = this.direction.dot(Ql);
				if (a > 0) {
					if (n) return null;
					s = 1
				} else {
					if (!(a < 0)) return null;
					s = -1, a = -a
				}
				Jl.subVectors(this.origin, t);
				const o = s * this.direction.dot(Kl.crossVectors(Jl, Kl));
				if (o < 0) return null;
				const l = s * this.direction.dot($l.cross(Jl));
				if (l < 0) return null;
				if (o + l > a) return null;
				const c = -s * Jl.dot(Ql);
				return c < 0 ? null : this.at(c / a, r)
			}
			applyMatrix4(t) {
				return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
			}
			equals(t) {
				return t.origin.equals(this.origin) && t.direction.equals(this.direction)
			}
			clone() {
				return (new this.constructor).copy(this)
			}
		}
		class ec {
			constructor() {
				this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
			}
			set(t, e, i, n, r, s, a, o, l, c, h, u, d, p, f, m) {
				const g = this.elements;
				return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
			}
			identity() {
				return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
			}
			clone() {
				return (new ec).fromArray(this.elements)
			}
			copy(t) {
				const e = this.elements,
					i = t.elements;
				return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
			}
			copyPosition(t) {
				const e = this.elements,
					i = t.elements;
				return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
			}
			setFromMatrix3(t) {
				const e = t.elements;
				return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
			}
			extractBasis(t, e, i) {
				return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
			}
			makeBasis(t, e, i) {
				return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
			}
			extractRotation(t) {
				const e = this.elements,
					i = t.elements,
					n = 1 / ic.setFromMatrixColumn(t, 0).length(),
					r = 1 / ic.setFromMatrixColumn(t, 1).length(),
					s = 1 / ic.setFromMatrixColumn(t, 2).length();
				return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * s, e[9] = i[9] * s, e[10] = i[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
			}
			makeRotationFromEuler(t) {
				!t || t.isEuler;
				const e = this.elements,
					i = t.x,
					n = t.y,
					r = t.z,
					s = Math.cos(i),
					a = Math.sin(i),
					o = Math.cos(n),
					l = Math.sin(n),
					c = Math.cos(r),
					h = Math.sin(r);
				if ("XYZ" === t.order) {
					const t = s * c,
						i = s * h,
						n = a * c,
						r = a * h;
					e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = i + n * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = n + i * l, e[10] = s * o
				} else if ("YXZ" === t.order) {
					const t = o * c,
						i = o * h,
						n = l * c,
						r = l * h;
					e[0] = t + r * a, e[4] = n * a - i, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = i * a - n, e[6] = r + t * a, e[10] = s * o
				} else if ("ZXY" === t.order) {
					const t = o * c,
						i = o * h,
						n = l * c,
						r = l * h;
					e[0] = t - r * a, e[4] = -s * h, e[8] = n + i * a, e[1] = i + n * a, e[5] = s * c, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o
				} else if ("ZYX" === t.order) {
					const t = s * c,
						i = s * h,
						n = a * c,
						r = a * h;
					e[0] = o * c, e[4] = n * l - i, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, e[9] = i * l - n, e[2] = -l, e[6] = a * o, e[10] = s * o
				} else if ("YZX" === t.order) {
					const t = s * o,
						i = s * l,
						n = a * o,
						r = a * l;
					e[0] = o * c, e[4] = r - t * h, e[8] = n * h + i, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = i * h + n, e[10] = t - r * h
				} else if ("XZY" === t.order) {
					const t = s * o,
						i = s * l,
						n = a * o,
						r = a * l;
					e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = s * c, e[9] = i * h - n, e[2] = n * h - i, e[6] = a * c, e[10] = r * h + t
				}
				return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
			}
			makeRotationFromQuaternion(t) {
				return this.compose(rc, t, sc)
			}
			lookAt(t, e, i) {
				const n = this.elements;
				return lc.subVectors(t, e), 0 === lc.lengthSq() && (lc.z = 1), lc.normalize(), ac.crossVectors(i, lc), 0 === ac.lengthSq() && (1 === Math.abs(i.z) ? lc.x += 1e-4 : lc.z += 1e-4, lc.normalize(), ac.crossVectors(i, lc)), ac.normalize(), oc.crossVectors(lc, ac), n[0] = ac.x, n[4] = oc.x, n[8] = lc.x, n[1] = ac.y, n[5] = oc.y, n[9] = lc.y, n[2] = ac.z, n[6] = oc.z, n[10] = lc.z, this
			}
			multiply(t, e) {
				return void 0 !== e ? this.multiplyMatrices(t, e) : this.multiplyMatrices(this, t)
			}
			premultiply(t) {
				return this.multiplyMatrices(t, this)
			}
			multiplyMatrices(t, e) {
				const i = t.elements,
					n = e.elements,
					r = this.elements,
					s = i[0],
					a = i[4],
					o = i[8],
					l = i[12],
					c = i[1],
					h = i[5],
					u = i[9],
					d = i[13],
					p = i[2],
					f = i[6],
					m = i[10],
					g = i[14],
					v = i[3],
					y = i[7],
					x = i[11],
					_ = i[15],
					w = n[0],
					b = n[4],
					M = n[8],
					S = n[12],
					D = n[1],
					T = n[5],
					C = n[9],
					E = n[13],
					A = n[2],
					L = n[6],
					P = n[10],
					O = n[14],
					I = n[3],
					F = n[7],
					N = n[11],
					z = n[15];
				return r[0] = s * w + a * D + o * A + l * I, r[4] = s * b + a * T + o * L + l * F, r[8] = s * M + a * C + o * P + l * N, r[12] = s * S + a * E + o * O + l * z, r[1] = c * w + h * D + u * A + d * I, r[5] = c * b + h * T + u * L + d * F, r[9] = c * M + h * C + u * P + d * N, r[13] = c * S + h * E + u * O + d * z, r[2] = p * w + f * D + m * A + g * I, r[6] = p * b + f * T + m * L + g * F, r[10] = p * M + f * C + m * P + g * N, r[14] = p * S + f * E + m * O + g * z, r[3] = v * w + y * D + x * A + _ * I, r[7] = v * b + y * T + x * L + _ * F, r[11] = v * M + y * C + x * P + _ * N, r[15] = v * S + y * E + x * O + _ * z, this
			}
			multiplyScalar(t) {
				const e = this.elements;
				return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
			}
			determinant() {
				const t = this.elements,
					e = t[0],
					i = t[4],
					n = t[8],
					r = t[12],
					s = t[1],
					a = t[5],
					o = t[9],
					l = t[13],
					c = t[2],
					h = t[6],
					u = t[10],
					d = t[14];
				return t[3] * (+r * o * h - n * l * h - r * a * u + i * l * u + n * a * d - i * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - n * s * d + n * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + i * s * d + r * a * c - i * l * c) + t[15] * (-n * a * c - e * o * h + e * a * u + n * s * h - i * s * u + i * o * c)
			}
			transpose() {
				const t = this.elements;
				let e;
				return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
			}
			setPosition(t, e, i) {
				const n = this.elements;
				return t.isVector3 ? (n[12] = t.x, n[13] = t.y, n[14] = t.z) : (n[12] = t, n[13] = e, n[14] = i), this
			}
			invert() {
				const t = this.elements,
					e = t[0],
					i = t[1],
					n = t[2],
					r = t[3],
					s = t[4],
					a = t[5],
					o = t[6],
					l = t[7],
					c = t[8],
					h = t[9],
					u = t[10],
					d = t[11],
					p = t[12],
					f = t[13],
					m = t[14],
					g = t[15],
					v = h * m * l - f * u * l + f * o * d - a * m * d - h * o * g + a * u * g,
					y = p * u * l - c * m * l - p * o * d + s * m * d + c * o * g - s * u * g,
					x = c * f * l - p * h * l + p * a * d - s * f * d - c * a * g + s * h * g,
					_ = p * h * o - c * f * o - p * a * u + s * f * u + c * a * m - s * h * m,
					w = e * v + i * y + n * x + r * _;
				if (0 === w) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				const b = 1 / w;
				return t[0] = v * b, t[1] = (f * u * r - h * m * r - f * n * d + i * m * d + h * n * g - i * u * g) * b, t[2] = (a * m * r - f * o * r + f * n * l - i * m * l - a * n * g + i * o * g) * b, t[3] = (h * o * r - a * u * r - h * n * l + i * u * l + a * n * d - i * o * d) * b, t[4] = y * b, t[5] = (c * m * r - p * u * r + p * n * d - e * m * d - c * n * g + e * u * g) * b, t[6] = (p * o * r - s * m * r - p * n * l + e * m * l + s * n * g - e * o * g) * b, t[7] = (s * u * r - c * o * r + c * n * l - e * u * l - s * n * d + e * o * d) * b, t[8] = x * b, t[9] = (p * h * r - c * f * r - p * i * d + e * f * d + c * i * g - e * h * g) * b, t[10] = (s * f * r - p * a * r + p * i * l - e * f * l - s * i * g + e * a * g) * b, t[11] = (c * a * r - s * h * r - c * i * l + e * h * l + s * i * d - e * a * d) * b, t[12] = _ * b, t[13] = (c * f * n - p * h * n + p * i * u - e * f * u - c * i * m + e * h * m) * b, t[14] = (p * a * n - s * f * n - p * i * o + e * f * o + s * i * m - e * a * m) * b, t[15] = (s * h * n - c * a * n + c * i * o - e * h * o - s * i * u + e * a * u) * b, this
			}
			scale(t) {
				const e = this.elements,
					i = t.x,
					n = t.y,
					r = t.z;
				return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
			}
			getMaxScaleOnAxis() {
				const t = this.elements,
					e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
					i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
					n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
				return Math.sqrt(Math.max(e, i, n))
			}
			makeTranslation(t, e, i) {
				return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
			}
			makeRotationX(t) {
				const e = Math.cos(t),
					i = Math.sin(t);
				return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
			}
			makeRotationY(t) {
				const e = Math.cos(t),
					i = Math.sin(t);
				return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
			}
			makeRotationZ(t) {
				const e = Math.cos(t),
					i = Math.sin(t);
				return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
			}
			makeRotationAxis(t, e) {
				const i = Math.cos(e),
					n = Math.sin(e),
					r = 1 - i,
					s = t.x,
					a = t.y,
					o = t.z,
					l = r * s,
					c = r * a;
				return this.set(l * s + i, l * a - n * o, l * o + n * a, 0, l * a + n * o, c * a + i, c * o - n * s, 0, l * o - n * a, c * o + n * s, r * o * o + i, 0, 0, 0, 0, 1), this
			}
			makeScale(t, e, i) {
				return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
			}
			makeShear(t, e, i) {
				return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
			}
			compose(t, e, i) {
				const n = this.elements,
					r = e._x,
					s = e._y,
					a = e._z,
					o = e._w,
					l = r + r,
					c = s + s,
					h = a + a,
					u = r * l,
					d = r * c,
					p = r * h,
					f = s * c,
					m = s * h,
					g = a * h,
					v = o * l,
					y = o * c,
					x = o * h,
					_ = i.x,
					w = i.y,
					b = i.z;
				return n[0] = (1 - (f + g)) * _, n[1] = (d + x) * _, n[2] = (p - y) * _, n[3] = 0, n[4] = (d - x) * w, n[5] = (1 - (u + g)) * w, n[6] = (m + v) * w, n[7] = 0, n[8] = (p + y) * b, n[9] = (m - v) * b, n[10] = (1 - (u + f)) * b, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
			}
			decompose(t, e, i) {
				const n = this.elements;
				let r = ic.set(n[0], n[1], n[2]).length();
				const s = ic.set(n[4], n[5], n[6]).length(),
					a = ic.set(n[8], n[9], n[10]).length();
				this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], nc.copy(this);
				const o = 1 / r,
					l = 1 / s,
					c = 1 / a;
				return nc.elements[0] *= o, nc.elements[1] *= o, nc.elements[2] *= o, nc.elements[4] *= l, nc.elements[5] *= l, nc.elements[6] *= l, nc.elements[8] *= c, nc.elements[9] *= c, nc.elements[10] *= c, e.setFromRotationMatrix(nc), i.x = r, i.y = s, i.z = a, this
			}
			makePerspective(t, e, i, n, r, s) {
				const a = this.elements,
					o = 2 * r / (e - t),
					l = 2 * r / (i - n),
					c = (e + t) / (e - t),
					h = (i + n) / (i - n),
					u = -(s + r) / (s - r),
					d = -2 * s * r / (s - r);
				return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
			}
			makeOrthographic(t, e, i, n, r, s) {
				const a = this.elements,
					o = 1 / (e - t),
					l = 1 / (i - n),
					c = 1 / (s - r),
					h = (e + t) * o,
					u = (i + n) * l,
					d = (s + r) * c;
				return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
			}
			equals(t) {
				const e = this.elements,
					i = t.elements;
				for (let t = 0; t < 16; t++)
					if (e[t] !== i[t]) return !1;
				return !0
			}
			fromArray(t, e = 0) {
				for (let i = 0; i < 16; i++) this.elements[i] = t[i + e];
				return this
			}
			toArray(t = [], e = 0) {
				const i = this.elements;
				return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
			}
		}
		ec.prototype.isMatrix4 = !0;
		const ic = new Sl,
			nc = new ec,
			rc = new Sl(0, 0, 0),
			sc = new Sl(1, 1, 1),
			ac = new Sl,
			oc = new Sl,
			lc = new Sl,
			cc = new ec,
			hc = new Ml;
		class uc {
			constructor(t = 0, e = 0, i = 0, n = uc.DefaultOrder) {
				this._x = t, this._y = e, this._z = i, this._order = n
			}
			get x() {
				return this._x
			}
			set x(t) {
				this._x = t, this._onChangeCallback()
			}
			get y() {
				return this._y
			}
			set y(t) {
				this._y = t, this._onChangeCallback()
			}
			get z() {
				return this._z
			}
			set z(t) {
				this._z = t, this._onChangeCallback()
			}
			get order() {
				return this._order
			}
			set order(t) {
				this._order = t, this._onChangeCallback()
			}
			set(t, e, i, n) {
				return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this._onChangeCallback(), this
			}
			clone() {
				return new this.constructor(this._x, this._y, this._z, this._order)
			}
			copy(t) {
				return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
			}
			setFromRotationMatrix(t, e, i) {
				const n = pl.clamp,
					r = t.elements,
					s = r[0],
					a = r[4],
					o = r[8],
					l = r[1],
					c = r[5],
					h = r[9],
					u = r[2],
					d = r[6],
					p = r[10];
				switch (e = e || this._order) {
					case "XYZ":
						this._y = Math.asin(n(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
						break;
					case "YXZ":
						this._x = Math.asin(-n(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
						break;
					case "ZXY":
						this._x = Math.asin(n(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
						break;
					case "ZYX":
						this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
						break;
					case "YZX":
						this._z = Math.asin(n(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, p));
						break;
					case "XZY":
						this._z = Math.asin(-n(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p), this._y = 0)
				}
				return this._order = e, !1 !== i && this._onChangeCallback(), this
			}
			setFromQuaternion(t, e, i) {
				return cc.makeRotationFromQuaternion(t), this.setFromRotationMatrix(cc, e, i)
			}
			setFromVector3(t, e) {
				return this.set(t.x, t.y, t.z, e || this._order)
			}
			reorder(t) {
				return hc.setFromEuler(this), this.setFromQuaternion(hc, t)
			}
			equals(t) {
				return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
			}
			fromArray(t) {
				return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
			}
			toArray(t = [], e = 0) {
				return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
			}
			toVector3(t) {
				return t ? t.set(this._x, this._y, this._z) : new Sl(this._x, this._y, this._z)
			}
			_onChange(t) {
				return this._onChangeCallback = t, this
			}
			_onChangeCallback() {}
		}
		uc.prototype.isEuler = !0, uc.DefaultOrder = "XYZ", uc.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
		class dc {
			constructor() {
				this.mask = 1
			}
			set(t) {
				this.mask = 1 << t | 0
			}
			enable(t) {
				this.mask |= 1 << t | 0
			}
			enableAll() {
				this.mask = -1
			}
			toggle(t) {
				this.mask ^= 1 << t | 0
			}
			disable(t) {
				this.mask &= ~(1 << t | 0)
			}
			disableAll() {
				this.mask = 0
			}
			test(t) {
				return 0 != (this.mask & t.mask)
			}
		}
		let pc = 0;
		const fc = new Sl,
			mc = new Ml,
			gc = new ec,
			vc = new Sl,
			yc = new Sl,
			xc = new Sl,
			_c = new Ml,
			wc = new Sl(1, 0, 0),
			bc = new Sl(0, 1, 0),
			Mc = new Sl(0, 0, 1),
			Sc = {
				type: "added"
			},
			Dc = {
				type: "removed"
			};

		function Tc() {
			Object.defineProperty(this, "id", {
				value: pc++
			}), this.uuid = pl.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Tc.DefaultUp.clone();
			const t = new Sl,
				e = new uc,
				i = new Ml,
				n = new Sl(1, 1, 1);
			e._onChange((function () {
				i.setFromEuler(e, !1)
			})), i._onChange((function () {
				e.setFromQuaternion(i, void 0, !1)
			})), Object.defineProperties(this, {
				position: {
					configurable: !0,
					enumerable: !0,
					value: t
				},
				rotation: {
					configurable: !0,
					enumerable: !0,
					value: e
				},
				quaternion: {
					configurable: !0,
					enumerable: !0,
					value: i
				},
				scale: {
					configurable: !0,
					enumerable: !0,
					value: n
				},
				modelViewMatrix: {
					value: new ec
				},
				normalMatrix: {
					value: new ml
				}
			}), this.matrix = new ec, this.matrixWorld = new ec, this.matrixAutoUpdate = Tc.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new dc, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
		}
		Tc.DefaultUp = new Sl(0, 1, 0), Tc.DefaultMatrixAutoUpdate = !0, Tc.prototype = Object.assign(Object.create(hl.prototype), {
			constructor: Tc,
			isObject3D: !0,
			onBeforeRender: function () {},
			onAfterRender: function () {},
			applyMatrix4: function (t) {
				this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
			},
			applyQuaternion: function (t) {
				return this.quaternion.premultiply(t), this
			},
			setRotationFromAxisAngle: function (t, e) {
				this.quaternion.setFromAxisAngle(t, e)
			},
			setRotationFromEuler: function (t) {
				this.quaternion.setFromEuler(t, !0)
			},
			setRotationFromMatrix: function (t) {
				this.quaternion.setFromRotationMatrix(t)
			},
			setRotationFromQuaternion: function (t) {
				this.quaternion.copy(t)
			},
			rotateOnAxis: function (t, e) {
				return mc.setFromAxisAngle(t, e), this.quaternion.multiply(mc), this
			},
			rotateOnWorldAxis: function (t, e) {
				return mc.setFromAxisAngle(t, e), this.quaternion.premultiply(mc), this
			},
			rotateX: function (t) {
				return this.rotateOnAxis(wc, t)
			},
			rotateY: function (t) {
				return this.rotateOnAxis(bc, t)
			},
			rotateZ: function (t) {
				return this.rotateOnAxis(Mc, t)
			},
			translateOnAxis: function (t, e) {
				return fc.copy(t).applyQuaternion(this.quaternion), this.position.add(fc.multiplyScalar(e)), this
			},
			translateX: function (t) {
				return this.translateOnAxis(wc, t)
			},
			translateY: function (t) {
				return this.translateOnAxis(bc, t)
			},
			translateZ: function (t) {
				return this.translateOnAxis(Mc, t)
			},
			localToWorld: function (t) {
				return t.applyMatrix4(this.matrixWorld)
			},
			worldToLocal: function (t) {
				return t.applyMatrix4(gc.copy(this.matrixWorld).invert())
			},
			lookAt: function (t, e, i) {
				t.isVector3 ? vc.copy(t) : vc.set(t, e, i);
				const n = this.parent;
				this.updateWorldMatrix(!0, !1), yc.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? gc.lookAt(yc, vc, this.up) : gc.lookAt(vc, yc, this.up), this.quaternion.setFromRotationMatrix(gc), n && (gc.extractRotation(n.matrixWorld), mc.setFromRotationMatrix(gc), this.quaternion.premultiply(mc.invert()))
			},
			add: function (t) {
				if (arguments.length > 1) {
					for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
					return this
				}
				return t === this || t && t.isObject3D && (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Sc)), this
			},
			remove: function (t) {
				if (arguments.length > 1) {
					for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
					return this
				}
				const e = this.children.indexOf(t);
				return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Dc)), this
			},
			clear: function () {
				for (let t = 0; t < this.children.length; t++) {
					const e = this.children[t];
					e.parent = null, e.dispatchEvent(Dc)
				}
				return this.children.length = 0, this
			},
			attach: function (t) {
				return this.updateWorldMatrix(!0, !1), gc.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), gc.multiply(t.parent.matrixWorld)), t.applyMatrix4(gc), this.add(t), t.updateWorldMatrix(!1, !0), this
			},
			getObjectById: function (t) {
				return this.getObjectByProperty("id", t)
			},
			getObjectByName: function (t) {
				return this.getObjectByProperty("name", t)
			},
			getObjectByProperty: function (t, e) {
				if (this[t] === e) return this;
				for (let i = 0, n = this.children.length; i < n; i++) {
					const n = this.children[i].getObjectByProperty(t, e);
					if (void 0 !== n) return n
				}
			},
			getWorldPosition: function (t) {
				return void 0 === t && (t = new Sl), this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
			},
			getWorldQuaternion: function (t) {
				return void 0 === t && (t = new Ml), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(yc, t, xc), t
			},
			getWorldScale: function (t) {
				return void 0 === t && (t = new Sl), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(yc, _c, t), t
			},
			getWorldDirection: function (t) {
				void 0 === t && (t = new Sl), this.updateWorldMatrix(!0, !1);
				const e = this.matrixWorld.elements;
				return t.set(e[8], e[9], e[10]).normalize()
			},
			raycast: function () {},
			traverse: function (t) {
				t(this);
				const e = this.children;
				for (let i = 0, n = e.length; i < n; i++) e[i].traverse(t)
			},
			traverseVisible: function (t) {
				if (!1 === this.visible) return;
				t(this);
				const e = this.children;
				for (let i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
			},
			traverseAncestors: function (t) {
				const e = this.parent;
				null !== e && (t(e), e.traverseAncestors(t))
			},
			updateMatrix: function () {
				this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
			},
			updateMatrixWorld: function (t) {
				this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
				const e = this.children;
				for (let i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
			},
			updateWorldMatrix: function (t, e) {
				const i = this.parent;
				if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
					const t = this.children;
					for (let e = 0, i = t.length; e < i; e++) t[e].updateWorldMatrix(!1, !0)
				}
			},
			toJSON: function (t) {
				const e = void 0 === t || "string" == typeof t,
					i = {};
				e && (t = {
					geometries: {},
					materials: {},
					textures: {},
					images: {},
					shapes: {},
					skeletons: {},
					animations: {}
				}, i.metadata = {
					version: 4.5,
					type: "Object",
					generator: "Object3D.toJSON"
				});
				const n = {};

				function r(e, i) {
					return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
				}
				if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n.instanceColor = this.instanceColor.toJSON())), this.isMesh || this.isLine || this.isPoints) {
					n.geometry = r(t.geometries, this.geometry);
					const e = this.geometry.parameters;
					if (void 0 !== e && void 0 !== e.shapes) {
						const i = e.shapes;
						if (Array.isArray(i))
							for (let e = 0, n = i.length; e < n; e++) {
								const n = i[e];
								r(t.shapes, n)
							} else r(t.shapes, i)
					}
				}
				if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), void 0 !== this.material)
					if (Array.isArray(this.material)) {
						const e = [];
						for (let i = 0, n = this.material.length; i < n; i++) e.push(r(t.materials, this.material[i]));
						n.material = e
					} else n.material = r(t.materials, this.material);
				if (this.children.length > 0) {
					n.children = [];
					for (let e = 0; e < this.children.length; e++) n.children.push(this.children[e].toJSON(t).object)
				}
				if (this.animations.length > 0) {
					n.animations = [];
					for (let e = 0; e < this.animations.length; e++) {
						const i = this.animations[e];
						n.animations.push(r(t.animations, i))
					}
				}
				if (e) {
					const e = s(t.geometries),
						n = s(t.materials),
						r = s(t.textures),
						a = s(t.images),
						o = s(t.shapes),
						l = s(t.skeletons),
						c = s(t.animations);
					e.length > 0 && (i.geometries = e), n.length > 0 && (i.materials = n), r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a), o.length > 0 && (i.shapes = o), l.length > 0 && (i.skeletons = l), c.length > 0 && (i.animations = c)
				}
				return i.object = n, i;

				function s(t) {
					const e = [];
					for (const i in t) {
						const n = t[i];
						delete n.metadata, e.push(n)
					}
					return e
				}
			},
			clone: function (t) {
				return (new this.constructor).copy(this, t)
			},
			copy: function (t, e = !0) {
				if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
					for (let e = 0; e < t.children.length; e++) {
						const i = t.children[e];
						this.add(i.clone())
					}
				return this
			}
		});
		const Cc = new Sl,
			Ec = new Sl,
			Ac = new ml;
		class Lc {
			constructor(t = new Sl(1, 0, 0), e = 0) {
				this.normal = t, this.constant = e
			}
			set(t, e) {
				return this.normal.copy(t), this.constant = e, this
			}
			setComponents(t, e, i, n) {
				return this.normal.set(t, e, i), this.constant = n, this
			}
			setFromNormalAndCoplanarPoint(t, e) {
				return this.normal.copy(t), this.constant = -e.dot(this.normal), this
			}
			setFromCoplanarPoints(t, e, i) {
				const n = Cc.subVectors(i, e).cross(Ec.subVectors(t, e)).normalize();
				return this.setFromNormalAndCoplanarPoint(n, t), this
			}
			copy(t) {
				return this.normal.copy(t.normal), this.constant = t.constant, this
			}
			normalize() {
				const t = 1 / this.normal.length();
				return this.normal.multiplyScalar(t), this.constant *= t, this
			}
			negate() {
				return this.constant *= -1, this.normal.negate(), this
			}
			distanceToPoint(t) {
				return this.normal.dot(t) + this.constant
			}
			distanceToSphere(t) {
				return this.distanceToPoint(t.center) - t.radius
			}
			projectPoint(t, e) {
				return void 0 === e && (e = new Sl), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
			}
			intersectLine(t, e) {
				void 0 === e && (e = new Sl);
				const i = t.delta(Cc),
					n = this.normal.dot(i);
				if (0 === n) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
				const r = -(t.start.dot(this.normal) + this.constant) / n;
				return r < 0 || r > 1 ? null : e.copy(i).multiplyScalar(r).add(t.start)
			}
			intersectsLine(t) {
				const e = this.distanceToPoint(t.start),
					i = this.distanceToPoint(t.end);
				return e < 0 && i > 0 || i < 0 && e > 0
			}
			intersectsBox(t) {
				return t.intersectsPlane(this)
			}
			intersectsSphere(t) {
				return t.intersectsPlane(this)
			}
			coplanarPoint(t) {
				return void 0 === t && (t = new Sl), t.copy(this.normal).multiplyScalar(-this.constant)
			}
			applyMatrix4(t, e) {
				const i = e || Ac.getNormalMatrix(t),
					n = this.coplanarPoint(Cc).applyMatrix4(t),
					r = this.normal.applyMatrix3(i).normalize();
				return this.constant = -n.dot(r), this
			}
			translate(t) {
				return this.constant -= t.dot(this.normal), this
			}
			equals(t) {
				return t.normal.equals(this.normal) && t.constant === this.constant
			}
			clone() {
				return (new this.constructor).copy(this)
			}
		}
		Lc.prototype.isPlane = !0;
		const Pc = new Sl,
			Oc = new Sl,
			Ic = new Sl,
			Fc = new Sl,
			Nc = new Sl,
			zc = new Sl,
			kc = new Sl,
			Rc = new Sl,
			Bc = new Sl,
			Uc = new Sl;
		class Vc {
			constructor(t = new Sl, e = new Sl, i = new Sl) {
				this.a = t, this.b = e, this.c = i
			}
			static getNormal(t, e, i, n) {
				void 0 === n && (n = new Sl), n.subVectors(i, e), Pc.subVectors(t, e), n.cross(Pc);
				const r = n.lengthSq();
				return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
			}
			static getBarycoord(t, e, i, n, r) {
				Pc.subVectors(n, e), Oc.subVectors(i, e), Ic.subVectors(t, e);
				const s = Pc.dot(Pc),
					a = Pc.dot(Oc),
					o = Pc.dot(Ic),
					l = Oc.dot(Oc),
					c = Oc.dot(Ic),
					h = s * l - a * a;
				if (void 0 === r && (r = new Sl), 0 === h) return r.set(-2, -1, -1);
				const u = 1 / h,
					d = (l * o - a * c) * u,
					p = (s * c - a * o) * u;
				return r.set(1 - d - p, p, d)
			}
			static containsPoint(t, e, i, n) {
				return this.getBarycoord(t, e, i, n, Fc), Fc.x >= 0 && Fc.y >= 0 && Fc.x + Fc.y <= 1
			}
			static getUV(t, e, i, n, r, s, a, o) {
				return this.getBarycoord(t, e, i, n, Fc), o.set(0, 0), o.addScaledVector(r, Fc.x), o.addScaledVector(s, Fc.y), o.addScaledVector(a, Fc.z), o
			}
			static isFrontFacing(t, e, i, n) {
				return Pc.subVectors(i, e), Oc.subVectors(t, e), Pc.cross(Oc).dot(n) < 0
			}
			set(t, e, i) {
				return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
			}
			setFromPointsAndIndices(t, e, i, n) {
				return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
			}
			clone() {
				return (new this.constructor).copy(this)
			}
			copy(t) {
				return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
			}
			getArea() {
				return Pc.subVectors(this.c, this.b), Oc.subVectors(this.a, this.b), .5 * Pc.cross(Oc).length()
			}
			getMidpoint(t) {
				return void 0 === t && (t = new Sl), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
			}
			getNormal(t) {
				return Vc.getNormal(this.a, this.b, this.c, t)
			}
			getPlane(t) {
				return void 0 === t && (t = new Lc), t.setFromCoplanarPoints(this.a, this.b, this.c)
			}
			getBarycoord(t, e) {
				return Vc.getBarycoord(t, this.a, this.b, this.c, e)
			}
			getUV(t, e, i, n, r) {
				return Vc.getUV(t, this.a, this.b, this.c, e, i, n, r)
			}
			containsPoint(t) {
				return Vc.containsPoint(t, this.a, this.b, this.c)
			}
			isFrontFacing(t) {
				return Vc.isFrontFacing(this.a, this.b, this.c, t)
			}
			intersectsBox(t) {
				return t.intersectsTriangle(this)
			}
			closestPointToPoint(t, e) {
				void 0 === e && (e = new Sl);
				const i = this.a,
					n = this.b,
					r = this.c;
				let s, a;
				Nc.subVectors(n, i), zc.subVectors(r, i), Rc.subVectors(t, i);
				const o = Nc.dot(Rc),
					l = zc.dot(Rc);
				if (o <= 0 && l <= 0) return e.copy(i);
				Bc.subVectors(t, n);
				const c = Nc.dot(Bc),
					h = zc.dot(Bc);
				if (c >= 0 && h <= c) return e.copy(n);
				const u = o * h - c * l;
				if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(i).addScaledVector(Nc, s);
				Uc.subVectors(t, r);
				const d = Nc.dot(Uc),
					p = zc.dot(Uc);
				if (p >= 0 && d <= p) return e.copy(r);
				const f = d * l - o * p;
				if (f <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(i).addScaledVector(zc, a);
				const m = c * p - d * h;
				if (m <= 0 && h - c >= 0 && d - p >= 0) return kc.subVectors(r, n), a = (h - c) / (h - c + (d - p)), e.copy(n).addScaledVector(kc, a);
				const g = 1 / (m + f + u);
				return s = f * g, a = u * g, e.copy(i).addScaledVector(Nc, s).addScaledVector(zc, a)
			}
			equals(t) {
				return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
			}
		}
		let Wc = 0;

		function Gc() {
			Object.defineProperty(this, "id", {
				value: Wc++
			}), this.uuid = pl.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = To, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = al, this.stencilZFail = al, this.stencilZPass = al, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
		}
		Gc.prototype = Object.assign(Object.create(hl.prototype), {
			constructor: Gc,
			isMaterial: !0,
			onBeforeCompile: function () {},
			customProgramCacheKey: function () {
				return this.onBeforeCompile.toString()
			},
			setValues: function (t) {
				if (void 0 !== t)
					for (const e in t) {
						const i = t[e];
						if (void 0 === i) continue;
						if ("shading" === e) {
							this.flatShading = 1 === i;
							continue
						}
						const n = this[e];
						void 0 !== n && (n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i)
					}
			},
			toJSON: function (t) {
				const e = void 0 === t || "string" == typeof t;
				e && (t = {
					textures: {},
					images: {}
				});
				const i = {
					metadata: {
						version: 4.5,
						type: "Material",
						generator: "Material.toJSON"
					}
				};

				function n(t) {
					const e = [];
					for (const i in t) {
						const n = t[i];
						delete n.metadata, e.push(n)
					}
					return e
				}
				if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.sheen && this.sheen.isColor && (i.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, i.reflectivity = this.reflectivity, i.refractionRatio = this.refractionRatio, void 0 !== this.combine && (i.combine = this.combine), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (i.size = this.size), null !== this.shadowSide && (i.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i.blending = this.blending), 0 !== this.side && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (i.morphTargets = !0), !0 === this.morphNormals && (i.morphNormals = !0), !0 === this.skinning && (i.skinning = !0), !0 === this.flatShading && (i.flatShading = this.flatShading), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e) {
					const e = n(t.textures),
						r = n(t.images);
					e.length > 0 && (i.textures = e), r.length > 0 && (i.images = r)
				}
				return i
			},
			clone: function () {
				return (new this.constructor).copy(this)
			},
			copy: function (t) {
				this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
				const e = t.clippingPlanes;
				let i = null;
				if (null !== e) {
					const t = e.length;
					i = new Array(t);
					for (let n = 0; n !== t; ++n) i[n] = e[n].clone()
				}
				return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
			},
			dispose: function () {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		}), Object.defineProperty(Gc.prototype, "needsUpdate", {
			set: function (t) {
				!0 === t && this.version++
			}
		});
		const Hc = {
				aliceblue: 15792383,
				antiquewhite: 16444375,
				aqua: 65535,
				aquamarine: 8388564,
				azure: 15794175,
				beige: 16119260,
				bisque: 16770244,
				black: 0,
				blanchedalmond: 16772045,
				blue: 255,
				blueviolet: 9055202,
				brown: 10824234,
				burlywood: 14596231,
				cadetblue: 6266528,
				chartreuse: 8388352,
				chocolate: 13789470,
				coral: 16744272,
				cornflowerblue: 6591981,
				cornsilk: 16775388,
				crimson: 14423100,
				cyan: 65535,
				darkblue: 139,
				darkcyan: 35723,
				darkgoldenrod: 12092939,
				darkgray: 11119017,
				darkgreen: 25600,
				darkgrey: 11119017,
				darkkhaki: 12433259,
				darkmagenta: 9109643,
				darkolivegreen: 5597999,
				darkorange: 16747520,
				darkorchid: 10040012,
				darkred: 9109504,
				darksalmon: 15308410,
				darkseagreen: 9419919,
				darkslateblue: 4734347,
				darkslategray: 3100495,
				darkslategrey: 3100495,
				darkturquoise: 52945,
				darkviolet: 9699539,
				deeppink: 16716947,
				deepskyblue: 49151,
				dimgray: 6908265,
				dimgrey: 6908265,
				dodgerblue: 2003199,
				firebrick: 11674146,
				floralwhite: 16775920,
				forestgreen: 2263842,
				fuchsia: 16711935,
				gainsboro: 14474460,
				ghostwhite: 16316671,
				gold: 16766720,
				goldenrod: 14329120,
				gray: 8421504,
				green: 32768,
				greenyellow: 11403055,
				grey: 8421504,
				honeydew: 15794160,
				hotpink: 16738740,
				indianred: 13458524,
				indigo: 4915330,
				ivory: 16777200,
				khaki: 15787660,
				lavender: 15132410,
				lavenderblush: 16773365,
				lawngreen: 8190976,
				lemonchiffon: 16775885,
				lightblue: 11393254,
				lightcoral: 15761536,
				lightcyan: 14745599,
				lightgoldenrodyellow: 16448210,
				lightgray: 13882323,
				lightgreen: 9498256,
				lightgrey: 13882323,
				lightpink: 16758465,
				lightsalmon: 16752762,
				lightseagreen: 2142890,
				lightskyblue: 8900346,
				lightslategray: 7833753,
				lightslategrey: 7833753,
				lightsteelblue: 11584734,
				lightyellow: 16777184,
				lime: 65280,
				limegreen: 3329330,
				linen: 16445670,
				magenta: 16711935,
				maroon: 8388608,
				mediumaquamarine: 6737322,
				mediumblue: 205,
				mediumorchid: 12211667,
				mediumpurple: 9662683,
				mediumseagreen: 3978097,
				mediumslateblue: 8087790,
				mediumspringgreen: 64154,
				mediumturquoise: 4772300,
				mediumvioletred: 13047173,
				midnightblue: 1644912,
				mintcream: 16121850,
				mistyrose: 16770273,
				moccasin: 16770229,
				navajowhite: 16768685,
				navy: 128,
				oldlace: 16643558,
				olive: 8421376,
				olivedrab: 7048739,
				orange: 16753920,
				orangered: 16729344,
				orchid: 14315734,
				palegoldenrod: 15657130,
				palegreen: 10025880,
				paleturquoise: 11529966,
				palevioletred: 14381203,
				papayawhip: 16773077,
				peachpuff: 16767673,
				peru: 13468991,
				pink: 16761035,
				plum: 14524637,
				powderblue: 11591910,
				purple: 8388736,
				rebeccapurple: 6697881,
				red: 16711680,
				rosybrown: 12357519,
				royalblue: 4286945,
				saddlebrown: 9127187,
				salmon: 16416882,
				sandybrown: 16032864,
				seagreen: 3050327,
				seashell: 16774638,
				sienna: 10506797,
				silver: 12632256,
				skyblue: 8900331,
				slateblue: 6970061,
				slategray: 7372944,
				slategrey: 7372944,
				snow: 16775930,
				springgreen: 65407,
				steelblue: 4620980,
				tan: 13808780,
				teal: 32896,
				thistle: 14204888,
				tomato: 16737095,
				turquoise: 4251856,
				violet: 15631086,
				wheat: 16113331,
				white: 16777215,
				whitesmoke: 16119285,
				yellow: 16776960,
				yellowgreen: 10145074
			},
			jc = {
				h: 0,
				s: 0,
				l: 0
			},
			qc = {
				h: 0,
				s: 0,
				l: 0
			};

		function Xc(t, e, i) {
			return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
		}

		function Yc(t) {
			return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
		}

		function Zc(t) {
			return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
		}
		class Jc {
			constructor(t, e, i) {
				return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
			}
			set(t) {
				return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
			}
			setScalar(t) {
				return this.r = t, this.g = t, this.b = t, this
			}
			setHex(t) {
				return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
			}
			setRGB(t, e, i) {
				return this.r = t, this.g = e, this.b = i, this
			}
			setHSL(t, e, i) {
				if (t = pl.euclideanModulo(t, 1), e = pl.clamp(e, 0, 1), i = pl.clamp(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
				else {
					const n = i <= .5 ? i * (1 + e) : i + e - i * e,
						r = 2 * i - n;
					this.r = Xc(r, n, t + 1 / 3), this.g = Xc(r, n, t), this.b = Xc(r, n, t - 1 / 3)
				}
				return this
			}
			setStyle(t) {
				function e(t) {
					void 0 !== t && parseFloat(t)
				}
				let i;
				if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
					let t;
					const n = i[1],
						r = i[2];
					switch (n) {
						case "rgb":
						case "rgba":
							if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, e(t[4]), this;
							if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, e(t[4]), this;
							break;
						case "hsl":
						case "hsla":
							if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
								const i = parseFloat(t[1]) / 360,
									n = parseInt(t[2], 10) / 100,
									r = parseInt(t[3], 10) / 100;
								return e(t[4]), this.setHSL(i, n, r)
							}
					}
				} else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
					const t = i[1],
						e = t.length;
					if (3 === e) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, this;
					if (6 === e) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, this
				}
				return t && t.length > 0 ? this.setColorName(t) : this
			}
			setColorName(t) {
				const e = Hc[t];
				return void 0 !== e && this.setHex(e), this
			}
			clone() {
				return new this.constructor(this.r, this.g, this.b)
			}
			copy(t) {
				return this.r = t.r, this.g = t.g, this.b = t.b, this
			}
			copyGammaToLinear(t, e = 2) {
				return this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
			}
			copyLinearToGamma(t, e = 2) {
				const i = e > 0 ? 1 / e : 1;
				return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
			}
			convertGammaToLinear(t) {
				return this.copyGammaToLinear(this, t), this
			}
			convertLinearToGamma(t) {
				return this.copyLinearToGamma(this, t), this
			}
			copySRGBToLinear(t) {
				return this.r = Yc(t.r), this.g = Yc(t.g), this.b = Yc(t.b), this
			}
			copyLinearToSRGB(t) {
				return this.r = Zc(t.r), this.g = Zc(t.g), this.b = Zc(t.b), this
			}
			convertSRGBToLinear() {
				return this.copySRGBToLinear(this), this
			}
			convertLinearToSRGB() {
				return this.copyLinearToSRGB(this), this
			}
			getHex() {
				return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
			}
			getHexString() {
				return ("000000" + this.getHex().toString(16)).slice(-6)
			}
			getHSL(t) {
				void 0 === t && (t = {
					h: 0,
					s: 0,
					l: 0
				});
				const e = this.r,
					i = this.g,
					n = this.b,
					r = Math.max(e, i, n),
					s = Math.min(e, i, n);
				let a, o;
				const l = (s + r) / 2;
				if (s === r) a = 0, o = 0;
				else {
					const t = r - s;
					switch (o = l <= .5 ? t / (r + s) : t / (2 - r - s), r) {
						case e:
							a = (i - n) / t + (i < n ? 6 : 0);
							break;
						case i:
							a = (n - e) / t + 2;
							break;
						case n:
							a = (e - i) / t + 4
					}
					a /= 6
				}
				return t.h = a, t.s = o, t.l = l, t
			}
			getStyle() {
				return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
			}
			offsetHSL(t, e, i) {
				return this.getHSL(jc), jc.h += t, jc.s += e, jc.l += i, this.setHSL(jc.h, jc.s, jc.l), this
			}
			add(t) {
				return this.r += t.r, this.g += t.g, this.b += t.b, this
			}
			addColors(t, e) {
				return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
			}
			addScalar(t) {
				return this.r += t, this.g += t, this.b += t, this
			}
			sub(t) {
				return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
			}
			multiply(t) {
				return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
			}
			multiplyScalar(t) {
				return this.r *= t, this.g *= t, this.b *= t, this
			}
			lerp(t, e) {
				return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
			}
			lerpColors(t, e, i) {
				return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this
			}
			lerpHSL(t, e) {
				this.getHSL(jc), t.getHSL(qc);
				const i = pl.lerp(jc.h, qc.h, e),
					n = pl.lerp(jc.s, qc.s, e),
					r = pl.lerp(jc.l, qc.l, e);
				return this.setHSL(i, n, r), this
			}
			equals(t) {
				return t.r === this.r && t.g === this.g && t.b === this.b
			}
			fromArray(t, e = 0) {
				return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
			}
			toArray(t = [], e = 0) {
				return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
			}
			fromBufferAttribute(t, e) {
				return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this
			}
			toJSON() {
				return this.getHex()
			}
		}
		Jc.NAMES = Hc, Jc.prototype.isColor = !0, Jc.prototype.r = 1, Jc.prototype.g = 1, Jc.prototype.b = 1;
		class $c extends Gc {
			constructor(t) {
				super(), this.type = "MeshBasicMaterial", this.color = new Jc(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
			}
		}
		$c.prototype.isMeshBasicMaterial = !0;
		const Kc = new Sl,
			Qc = new fl;

		function th(t, e, i) {
			if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.usage = ol, this.updateRange = {
				offset: 0,
				count: -1
			}, this.version = 0
		}

		function eh(t, e, i) {
			th.call(this, new Int8Array(t), e, i)
		}

		function ih(t, e, i) {
			th.call(this, new Uint8Array(t), e, i)
		}

		function nh(t, e, i) {
			th.call(this, new Uint8ClampedArray(t), e, i)
		}

		function rh(t, e, i) {
			th.call(this, new Int16Array(t), e, i)
		}

		function sh(t, e, i) {
			th.call(this, new Uint16Array(t), e, i)
		}

		function ah(t, e, i) {
			th.call(this, new Int32Array(t), e, i)
		}

		function oh(t, e, i) {
			th.call(this, new Uint32Array(t), e, i)
		}

		function lh(t, e, i) {
			th.call(this, new Uint16Array(t), e, i)
		}

		function ch(t, e, i) {
			th.call(this, new Float32Array(t), e, i)
		}

		function hh(t, e, i) {
			th.call(this, new Float64Array(t), e, i)
		}

		function uh(t) {
			if (0 === t.length) return -1 / 0;
			let e = t[0];
			for (let i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]);
			return e
		}
		Object.defineProperty(th.prototype, "needsUpdate", {
			set: function (t) {
				!0 === t && this.version++
			}
		}), Object.assign(th.prototype, {
			isBufferAttribute: !0,
			onUploadCallback: function () {},
			setUsage: function (t) {
				return this.usage = t, this
			},
			copy: function (t) {
				return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
			},
			copyAt: function (t, e, i) {
				t *= this.itemSize, i *= e.itemSize;
				for (let n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
				return this
			},
			copyArray: function (t) {
				return this.array.set(t), this
			},
			copyColorsArray: function (t) {
				const e = this.array;
				let i = 0;
				for (let n = 0, r = t.length; n < r; n++) {
					let r = t[n];
					void 0 === r && (r = new Jc), e[i++] = r.r, e[i++] = r.g, e[i++] = r.b
				}
				return this
			},
			copyVector2sArray: function (t) {
				const e = this.array;
				let i = 0;
				for (let n = 0, r = t.length; n < r; n++) {
					let r = t[n];
					void 0 === r && (r = new fl), e[i++] = r.x, e[i++] = r.y
				}
				return this
			},
			copyVector3sArray: function (t) {
				const e = this.array;
				let i = 0;
				for (let n = 0, r = t.length; n < r; n++) {
					let r = t[n];
					void 0 === r && (r = new Sl), e[i++] = r.x, e[i++] = r.y, e[i++] = r.z
				}
				return this
			},
			copyVector4sArray: function (t) {
				const e = this.array;
				let i = 0;
				for (let n = 0, r = t.length; n < r; n++) {
					let r = t[n];
					void 0 === r && (r = new wl), e[i++] = r.x, e[i++] = r.y, e[i++] = r.z, e[i++] = r.w
				}
				return this
			},
			applyMatrix3: function (t) {
				if (2 === this.itemSize)
					for (let e = 0, i = this.count; e < i; e++) Qc.fromBufferAttribute(this, e), Qc.applyMatrix3(t), this.setXY(e, Qc.x, Qc.y);
				else if (3 === this.itemSize)
					for (let e = 0, i = this.count; e < i; e++) Kc.fromBufferAttribute(this, e), Kc.applyMatrix3(t), this.setXYZ(e, Kc.x, Kc.y, Kc.z);
				return this
			},
			applyMatrix4: function (t) {
				for (let e = 0, i = this.count; e < i; e++) Kc.x = this.getX(e), Kc.y = this.getY(e), Kc.z = this.getZ(e), Kc.applyMatrix4(t), this.setXYZ(e, Kc.x, Kc.y, Kc.z);
				return this
			},
			applyNormalMatrix: function (t) {
				for (let e = 0, i = this.count; e < i; e++) Kc.x = this.getX(e), Kc.y = this.getY(e), Kc.z = this.getZ(e), Kc.applyNormalMatrix(t), this.setXYZ(e, Kc.x, Kc.y, Kc.z);
				return this
			},
			transformDirection: function (t) {
				for (let e = 0, i = this.count; e < i; e++) Kc.x = this.getX(e), Kc.y = this.getY(e), Kc.z = this.getZ(e), Kc.transformDirection(t), this.setXYZ(e, Kc.x, Kc.y, Kc.z);
				return this
			},
			set: function (t, e = 0) {
				return this.array.set(t, e), this
			},
			getX: function (t) {
				return this.array[t * this.itemSize]
			},
			setX: function (t, e) {
				return this.array[t * this.itemSize] = e, this
			},
			getY: function (t) {
				return this.array[t * this.itemSize + 1]
			},
			setY: function (t, e) {
				return this.array[t * this.itemSize + 1] = e, this
			},
			getZ: function (t) {
				return this.array[t * this.itemSize + 2]
			},
			setZ: function (t, e) {
				return this.array[t * this.itemSize + 2] = e, this
			},
			getW: function (t) {
				return this.array[t * this.itemSize + 3]
			},
			setW: function (t, e) {
				return this.array[t * this.itemSize + 3] = e, this
			},
			setXY: function (t, e, i) {
				return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
			},
			setXYZ: function (t, e, i, n) {
				return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
			},
			setXYZW: function (t, e, i, n, r) {
				return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
			},
			onUpload: function (t) {
				return this.onUploadCallback = t, this
			},
			clone: function () {
				return new this.constructor(this.array, this.itemSize).copy(this)
			},
			toJSON: function () {
				const t = {
					itemSize: this.itemSize,
					type: this.array.constructor.name,
					array: Array.prototype.slice.call(this.array),
					normalized: this.normalized
				};
				return "" !== this.name && (t.name = this.name), this.usage !== ol && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t
			}
		}), eh.prototype = Object.create(th.prototype), eh.prototype.constructor = eh, ih.prototype = Object.create(th.prototype), ih.prototype.constructor = ih, nh.prototype = Object.create(th.prototype), nh.prototype.constructor = nh, rh.prototype = Object.create(th.prototype), rh.prototype.constructor = rh, sh.prototype = Object.create(th.prototype), sh.prototype.constructor = sh, ah.prototype = Object.create(th.prototype), ah.prototype.constructor = ah, oh.prototype = Object.create(th.prototype), oh.prototype.constructor = oh, lh.prototype = Object.create(th.prototype), lh.prototype.constructor = lh, lh.prototype.isFloat16BufferAttribute = !0, ch.prototype = Object.create(th.prototype), ch.prototype.constructor = ch, hh.prototype = Object.create(th.prototype), hh.prototype.constructor = hh;
		Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
		let dh = 0;
		const ph = new ec,
			fh = new Tc,
			mh = new Sl,
			gh = new Cl,
			vh = new Cl,
			yh = new Sl;

		function xh() {
			Object.defineProperty(this, "id", {
				value: dh++
			}), this.uuid = pl.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
				start: 0,
				count: 1 / 0
			}, this.userData = {}
		}
		xh.prototype = Object.assign(Object.create(hl.prototype), {
			constructor: xh,
			isBufferGeometry: !0,
			getIndex: function () {
				return this.index
			},
			setIndex: function (t) {
				return Array.isArray(t) ? this.index = new(uh(t) > 65535 ? oh : sh)(t, 1) : this.index = t, this
			},
			getAttribute: function (t) {
				return this.attributes[t]
			},
			setAttribute: function (t, e) {
				return this.attributes[t] = e, this
			},
			deleteAttribute: function (t) {
				return delete this.attributes[t], this
			},
			hasAttribute: function (t) {
				return void 0 !== this.attributes[t]
			},
			addGroup: function (t, e, i = 0) {
				this.groups.push({
					start: t,
					count: e,
					materialIndex: i
				})
			},
			clearGroups: function () {
				this.groups = []
			},
			setDrawRange: function (t, e) {
				this.drawRange.start = t, this.drawRange.count = e
			},
			applyMatrix4: function (t) {
				const e = this.attributes.position;
				void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
				const i = this.attributes.normal;
				if (void 0 !== i) {
					const e = (new ml).getNormalMatrix(t);
					i.applyNormalMatrix(e), i.needsUpdate = !0
				}
				const n = this.attributes.tangent;
				return void 0 !== n && (n.transformDirection(t), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
			},
			rotateX: function (t) {
				return ph.makeRotationX(t), this.applyMatrix4(ph), this
			},
			rotateY: function (t) {
				return ph.makeRotationY(t), this.applyMatrix4(ph), this
			},
			rotateZ: function (t) {
				return ph.makeRotationZ(t), this.applyMatrix4(ph), this
			},
			translate: function (t, e, i) {
				return ph.makeTranslation(t, e, i), this.applyMatrix4(ph), this
			},
			scale: function (t, e, i) {
				return ph.makeScale(t, e, i), this.applyMatrix4(ph), this
			},
			lookAt: function (t) {
				return fh.lookAt(t), fh.updateMatrix(), this.applyMatrix4(fh.matrix), this
			},
			center: function () {
				return this.computeBoundingBox(), this.boundingBox.getCenter(mh).negate(), this.translate(mh.x, mh.y, mh.z), this
			},
			setFromPoints: function (t) {
				const e = [];
				for (let i = 0, n = t.length; i < n; i++) {
					const n = t[i];
					e.push(n.x, n.y, n.z || 0)
				}
				return this.setAttribute("position", new ch(e, 3)), this
			},
			computeBoundingBox: function () {
				null === this.boundingBox && (this.boundingBox = new Cl);
				const t = this.attributes.position,
					e = this.morphAttributes.position;
				if (t && t.isGLBufferAttribute) this.boundingBox.set(new Sl(-1 / 0, -1 / 0, -1 / 0), new Sl(1 / 0, 1 / 0, 1 / 0));
				else {
					if (void 0 !== t) {
						if (this.boundingBox.setFromBufferAttribute(t), e)
							for (let t = 0, i = e.length; t < i; t++) {
								const i = e[t];
								gh.setFromBufferAttribute(i), this.morphTargetsRelative ? (yh.addVectors(this.boundingBox.min, gh.min), this.boundingBox.expandByPoint(yh), yh.addVectors(this.boundingBox.max, gh.max), this.boundingBox.expandByPoint(yh)) : (this.boundingBox.expandByPoint(gh.min), this.boundingBox.expandByPoint(gh.max))
							}
					} else this.boundingBox.makeEmpty();
					isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)
				}
			},
			computeBoundingSphere: function () {
				null === this.boundingSphere && (this.boundingSphere = new ql);
				const t = this.attributes.position,
					e = this.morphAttributes.position;
				if (t && t.isGLBufferAttribute) this.boundingSphere.set(new Sl, 1 / 0);
				else if (t) {
					const i = this.boundingSphere.center;
					if (gh.setFromBufferAttribute(t), e)
						for (let t = 0, i = e.length; t < i; t++) {
							const i = e[t];
							vh.setFromBufferAttribute(i), this.morphTargetsRelative ? (yh.addVectors(gh.min, vh.min), gh.expandByPoint(yh), yh.addVectors(gh.max, vh.max), gh.expandByPoint(yh)) : (gh.expandByPoint(vh.min), gh.expandByPoint(vh.max))
						}
					gh.getCenter(i);
					let n = 0;
					for (let e = 0, r = t.count; e < r; e++) yh.fromBufferAttribute(t, e), n = Math.max(n, i.distanceToSquared(yh));
					if (e)
						for (let r = 0, s = e.length; r < s; r++) {
							const s = e[r],
								a = this.morphTargetsRelative;
							for (let e = 0, r = s.count; e < r; e++) yh.fromBufferAttribute(s, e), a && (mh.fromBufferAttribute(t, e), yh.add(mh)), n = Math.max(n, i.distanceToSquared(yh))
						}
					this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius)
				}
			},
			computeFaceNormals: function () {},
			computeTangents: function () {
				const t = this.index,
					e = this.attributes;
				if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return;
				const i = t.array,
					n = e.position.array,
					r = e.normal.array,
					s = e.uv.array,
					a = n.length / 3;
				void 0 === e.tangent && this.setAttribute("tangent", new th(new Float32Array(4 * a), 4));
				const o = e.tangent.array,
					l = [],
					c = [];
				for (let t = 0; t < a; t++) l[t] = new Sl, c[t] = new Sl;
				const h = new Sl,
					u = new Sl,
					d = new Sl,
					p = new fl,
					f = new fl,
					m = new fl,
					g = new Sl,
					v = new Sl;

				function y(t, e, i) {
					h.fromArray(n, 3 * t), u.fromArray(n, 3 * e), d.fromArray(n, 3 * i), p.fromArray(s, 2 * t), f.fromArray(s, 2 * e), m.fromArray(s, 2 * i), u.sub(h), d.sub(h), f.sub(p), m.sub(p);
					const r = 1 / (f.x * m.y - m.x * f.y);
					isFinite(r) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), v.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[i].add(g), c[t].add(v), c[e].add(v), c[i].add(v))
				}
				let x = this.groups;
				0 === x.length && (x = [{
					start: 0,
					count: i.length
				}]);
				for (let t = 0, e = x.length; t < e; ++t) {
					const e = x[t],
						n = e.start;
					for (let t = n, r = n + e.count; t < r; t += 3) y(i[t + 0], i[t + 1], i[t + 2])
				}
				const _ = new Sl,
					w = new Sl,
					b = new Sl,
					M = new Sl;

				function S(t) {
					b.fromArray(r, 3 * t), M.copy(b);
					const e = l[t];
					_.copy(e), _.sub(b.multiplyScalar(b.dot(e))).normalize(), w.crossVectors(M, e);
					const i = w.dot(c[t]) < 0 ? -1 : 1;
					o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = i
				}
				for (let t = 0, e = x.length; t < e; ++t) {
					const e = x[t],
						n = e.start;
					for (let t = n, r = n + e.count; t < r; t += 3) S(i[t + 0]), S(i[t + 1]), S(i[t + 2])
				}
			},
			computeVertexNormals: function () {
				const t = this.index,
					e = this.getAttribute("position");
				if (void 0 !== e) {
					let i = this.getAttribute("normal");
					if (void 0 === i) i = new th(new Float32Array(3 * e.count), 3), this.setAttribute("normal", i);
					else
						for (let t = 0, e = i.count; t < e; t++) i.setXYZ(t, 0, 0, 0);
					const n = new Sl,
						r = new Sl,
						s = new Sl,
						a = new Sl,
						o = new Sl,
						l = new Sl,
						c = new Sl,
						h = new Sl;
					if (t)
						for (let u = 0, d = t.count; u < d; u += 3) {
							const d = t.getX(u + 0),
								p = t.getX(u + 1),
								f = t.getX(u + 2);
							n.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, f), c.subVectors(s, r), h.subVectors(n, r), c.cross(h), a.fromBufferAttribute(i, d), o.fromBufferAttribute(i, p), l.fromBufferAttribute(i, f), a.add(c), o.add(c), l.add(c), i.setXYZ(d, a.x, a.y, a.z), i.setXYZ(p, o.x, o.y, o.z), i.setXYZ(f, l.x, l.y, l.z)
						} else
							for (let t = 0, a = e.count; t < a; t += 3) n.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), c.subVectors(s, r), h.subVectors(n, r), c.cross(h), i.setXYZ(t + 0, c.x, c.y, c.z), i.setXYZ(t + 1, c.x, c.y, c.z), i.setXYZ(t + 2, c.x, c.y, c.z);
					this.normalizeNormals(), i.needsUpdate = !0
				}
			},
			merge: function (t, e) {
				if (!t || !t.isBufferGeometry) return;
				void 0 === e && (e = 0);
				const i = this.attributes;
				for (const n in i) {
					if (void 0 === t.attributes[n]) continue;
					const r = i[n].array,
						s = t.attributes[n],
						a = s.array,
						o = s.itemSize * e,
						l = Math.min(a.length, r.length - o);
					for (let t = 0, e = o; t < l; t++, e++) r[e] = a[t]
				}
				return this
			},
			normalizeNormals: function () {
				const t = this.attributes.normal;
				for (let e = 0, i = t.count; e < i; e++) yh.fromBufferAttribute(t, e), yh.normalize(), t.setXYZ(e, yh.x, yh.y, yh.z)
			},
			toNonIndexed: function () {
				function t(t, e) {
					const i = t.array,
						n = t.itemSize,
						r = t.normalized,
						s = new i.constructor(e.length * n);
					let a = 0,
						o = 0;
					for (let t = 0, r = e.length; t < r; t++) {
						a = e[t] * n;
						for (let t = 0; t < n; t++) s[o++] = i[a++]
					}
					return new th(s, n, r)
				}
				if (null === this.index) return this;
				const e = new xh,
					i = this.index.array,
					n = this.attributes;
				for (const r in n) {
					const s = t(n[r], i);
					e.setAttribute(r, s)
				}
				const r = this.morphAttributes;
				for (const n in r) {
					const s = [],
						a = r[n];
					for (let e = 0, n = a.length; e < n; e++) {
						const n = t(a[e], i);
						s.push(n)
					}
					e.morphAttributes[n] = s
				}
				e.morphTargetsRelative = this.morphTargetsRelative;
				const s = this.groups;
				for (let t = 0, i = s.length; t < i; t++) {
					const i = s[t];
					e.addGroup(i.start, i.count, i.materialIndex)
				}
				return e
			},
			toJSON: function () {
				const t = {
					metadata: {
						version: 4.5,
						type: "BufferGeometry",
						generator: "BufferGeometry.toJSON"
					}
				};
				if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
					const e = this.parameters;
					for (const i in e) void 0 !== e[i] && (t[i] = e[i]);
					return t
				}
				t.data = {
					attributes: {}
				};
				const e = this.index;
				null !== e && (t.data.index = {
					type: e.array.constructor.name,
					array: Array.prototype.slice.call(e.array)
				});
				const i = this.attributes;
				for (const e in i) {
					const n = i[e];
					t.data.attributes[e] = n.toJSON(t.data)
				}
				const n = {};
				let r = !1;
				for (const e in this.morphAttributes) {
					const i = this.morphAttributes[e],
						s = [];
					for (let e = 0, n = i.length; e < n; e++) {
						const n = i[e];
						s.push(n.toJSON(t.data))
					}
					s.length > 0 && (n[e] = s, r = !0)
				}
				r && (t.data.morphAttributes = n, t.data.morphTargetsRelative = this.morphTargetsRelative);
				const s = this.groups;
				s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
				const a = this.boundingSphere;
				return null !== a && (t.data.boundingSphere = {
					center: a.center.toArray(),
					radius: a.radius
				}), t
			},
			clone: function () {
				return (new xh).copy(this)
			},
			copy: function (t) {
				this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
				const e = {};
				this.name = t.name;
				const i = t.index;
				null !== i && this.setIndex(i.clone(e));
				const n = t.attributes;
				for (const t in n) {
					const i = n[t];
					this.setAttribute(t, i.clone(e))
				}
				const r = t.morphAttributes;
				for (const t in r) {
					const i = [],
						n = r[t];
					for (let t = 0, r = n.length; t < r; t++) i.push(n[t].clone(e));
					this.morphAttributes[t] = i
				}
				this.morphTargetsRelative = t.morphTargetsRelative;
				const s = t.groups;
				for (let t = 0, e = s.length; t < e; t++) {
					const e = s[t];
					this.addGroup(e.start, e.count, e.materialIndex)
				}
				const a = t.boundingBox;
				null !== a && (this.boundingBox = a.clone());
				const o = t.boundingSphere;
				return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
			},
			dispose: function () {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		});
		const _h = new ec,
			wh = new tc,
			bh = new ql,
			Mh = new Sl,
			Sh = new Sl,
			Dh = new Sl,
			Th = new Sl,
			Ch = new Sl,
			Eh = new Sl,
			Ah = new Sl,
			Lh = new Sl,
			Ph = new Sl,
			Oh = new fl,
			Ih = new fl,
			Fh = new fl,
			Nh = new Sl,
			zh = new Sl;

		function kh(t = new xh, e = new $c) {
			Tc.call(this), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
		}

		function Rh(t, e, i, n, r, s, a, o, l, c, h, u) {
			Mh.fromBufferAttribute(r, c), Sh.fromBufferAttribute(r, h), Dh.fromBufferAttribute(r, u);
			const d = t.morphTargetInfluences;
			if (e.morphTargets && s && d) {
				Ah.set(0, 0, 0), Lh.set(0, 0, 0), Ph.set(0, 0, 0);
				for (let t = 0, e = s.length; t < e; t++) {
					const e = d[t],
						i = s[t];
					0 !== e && (Th.fromBufferAttribute(i, c), Ch.fromBufferAttribute(i, h), Eh.fromBufferAttribute(i, u), a ? (Ah.addScaledVector(Th, e), Lh.addScaledVector(Ch, e), Ph.addScaledVector(Eh, e)) : (Ah.addScaledVector(Th.sub(Mh), e), Lh.addScaledVector(Ch.sub(Sh), e), Ph.addScaledVector(Eh.sub(Dh), e)))
				}
				Mh.add(Ah), Sh.add(Lh), Dh.add(Ph)
			}
			t.isSkinnedMesh && e.skinning && (t.boneTransform(c, Mh), t.boneTransform(h, Sh), t.boneTransform(u, Dh));
			const p = function (t, e, i, n, r, s, a, o) {
				let l;
				if (l = 1 === e.side ? n.intersectTriangle(a, s, r, !0, o) : n.intersectTriangle(r, s, a, 2 !== e.side, o), null === l) return null;
				zh.copy(o), zh.applyMatrix4(t.matrixWorld);
				const c = i.ray.origin.distanceTo(zh);
				return c < i.near || c > i.far ? null : {
					distance: c,
					point: zh.clone(),
					object: t
				}
			}(t, e, i, n, Mh, Sh, Dh, Nh);
			if (p) {
				o && (Oh.fromBufferAttribute(o, c), Ih.fromBufferAttribute(o, h), Fh.fromBufferAttribute(o, u), p.uv = Vc.getUV(Nh, Mh, Sh, Dh, Oh, Ih, Fh, new fl)), l && (Oh.fromBufferAttribute(l, c), Ih.fromBufferAttribute(l, h), Fh.fromBufferAttribute(l, u), p.uv2 = Vc.getUV(Nh, Mh, Sh, Dh, Oh, Ih, Fh, new fl));
				const t = {
					a: c,
					b: h,
					c: u,
					normal: new Sl,
					materialIndex: 0
				};
				Vc.getNormal(Mh, Sh, Dh, t.normal), p.face = t
			}
			return p
		}
		kh.prototype = Object.assign(Object.create(Tc.prototype), {
			constructor: kh,
			isMesh: !0,
			copy: function (t) {
				return Tc.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
			},
			updateMorphTargets: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						i = Object.keys(e);
					if (i.length > 0) {
						const t = e[i[0]];
						if (void 0 !== t) {
							this.morphTargetInfluences = [], this.morphTargetDictionary = {};
							for (let e = 0, i = t.length; e < i; e++) {
								const i = t[e].name || String(e);
								this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = e
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e && e.length
				}
			},
			raycast: function (t, e) {
				const i = this.geometry,
					n = this.material,
					r = this.matrixWorld;
				if (void 0 === n) return;
				if (null === i.boundingSphere && i.computeBoundingSphere(), bh.copy(i.boundingSphere), bh.applyMatrix4(r), !1 === t.ray.intersectsSphere(bh)) return;
				if (_h.copy(r).invert(), wh.copy(t.ray).applyMatrix4(_h), null !== i.boundingBox && !1 === wh.intersectsBox(i.boundingBox)) return;
				let s;
				if (i.isBufferGeometry) {
					const r = i.index,
						a = i.attributes.position,
						o = i.morphAttributes.position,
						l = i.morphTargetsRelative,
						c = i.attributes.uv,
						h = i.attributes.uv2,
						u = i.groups,
						d = i.drawRange;
					if (null !== r)
						if (Array.isArray(n))
							for (let i = 0, p = u.length; i < p; i++) {
								const p = u[i],
									f = n[p.materialIndex];
								for (let i = Math.max(p.start, d.start), n = Math.min(p.start + p.count, d.start + d.count); i < n; i += 3) {
									const n = r.getX(i),
										u = r.getX(i + 1),
										d = r.getX(i + 2);
									s = Rh(this, f, t, wh, a, o, l, c, h, n, u, d), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = p.materialIndex, e.push(s))
								}
							} else {
								for (let i = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); i < u; i += 3) {
									const u = r.getX(i),
										d = r.getX(i + 1),
										p = r.getX(i + 2);
									s = Rh(this, n, t, wh, a, o, l, c, h, u, d, p), s && (s.faceIndex = Math.floor(i / 3), e.push(s))
								}
							} else if (void 0 !== a)
								if (Array.isArray(n))
									for (let i = 0, r = u.length; i < r; i++) {
										const r = u[i],
											p = n[r.materialIndex];
										for (let i = Math.max(r.start, d.start), n = Math.min(r.start + r.count, d.start + d.count); i < n; i += 3) {
											s = Rh(this, p, t, wh, a, o, l, c, h, i, i + 1, i + 2), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = r.materialIndex, e.push(s))
										}
									} else {
										for (let i = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); i < r; i += 3) {
											s = Rh(this, n, t, wh, a, o, l, c, h, i, i + 1, i + 2), s && (s.faceIndex = Math.floor(i / 3), e.push(s))
										}
									}
				} else i.isGeometry
			}
		});
		class Bh extends xh {
			constructor(t = 1, e = 1, i = 1, n = 1, r = 1, s = 1) {
				super(), this.type = "BoxGeometry", this.parameters = {
					width: t,
					height: e,
					depth: i,
					widthSegments: n,
					heightSegments: r,
					depthSegments: s
				};
				const a = this;
				n = Math.floor(n), r = Math.floor(r), s = Math.floor(s);
				const o = [],
					l = [],
					c = [],
					h = [];
				let u = 0,
					d = 0;

				function p(t, e, i, n, r, s, p, f, m, g, v) {
					const y = s / m,
						x = p / g,
						_ = s / 2,
						w = p / 2,
						b = f / 2,
						M = m + 1,
						S = g + 1;
					let D = 0,
						T = 0;
					const C = new Sl;
					for (let s = 0; s < S; s++) {
						const a = s * x - w;
						for (let o = 0; o < M; o++) {
							const u = o * y - _;
							C[t] = u * n, C[e] = a * r, C[i] = b, l.push(C.x, C.y, C.z), C[t] = 0, C[e] = 0, C[i] = f > 0 ? 1 : -1, c.push(C.x, C.y, C.z), h.push(o / m), h.push(1 - s / g), D += 1
						}
					}
					for (let t = 0; t < g; t++)
						for (let e = 0; e < m; e++) {
							const i = u + e + M * t,
								n = u + e + M * (t + 1),
								r = u + (e + 1) + M * (t + 1),
								s = u + (e + 1) + M * t;
							o.push(i, n, s), o.push(n, r, s), T += 6
						}
					a.addGroup(d, T, v), d += T, u += D
				}
				p("z", "y", "x", -1, -1, i, e, t, s, r, 0), p("z", "y", "x", 1, -1, i, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, i, e, n, s, 2), p("x", "z", "y", 1, -1, t, i, -e, n, s, 3), p("x", "y", "z", 1, -1, t, e, i, n, r, 4), p("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(o), this.setAttribute("position", new ch(l, 3)), this.setAttribute("normal", new ch(c, 3)), this.setAttribute("uv", new ch(h, 2))
			}
		}

		function Uh(t) {
			const e = {};
			for (const i in t) {
				e[i] = {};
				for (const n in t[i]) {
					const r = t[i][n];
					r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
				}
			}
			return e
		}

		function Vh(t) {
			const e = {};
			for (let i = 0; i < t.length; i++) {
				const n = Uh(t[i]);
				for (const t in n) e[t] = n[t]
			}
			return e
		}
		const Wh = {
			clone: Uh,
			merge: Vh
		};

		function Gh(t) {
			Gc.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
				derivatives: !1,
				fragDepth: !1,
				drawBuffers: !1,
				shaderTextureLOD: !1
			}, this.defaultAttributeValues = {
				color: [1, 1, 1],
				uv: [0, 0],
				uv2: [0, 0]
			}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (t.attributes, this.setValues(t))
		}

		function Hh() {
			Tc.call(this), this.type = "Camera", this.matrixWorldInverse = new ec, this.projectionMatrix = new ec, this.projectionMatrixInverse = new ec
		}

		function jh(t = 50, e = 1, i = .1, n = 2e3) {
			Hh.call(this), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
		}
		Gh.prototype = Object.create(Gc.prototype), Gh.prototype.constructor = Gh, Gh.prototype.isShaderMaterial = !0, Gh.prototype.copy = function (t) {
			return Gc.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Uh(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
		}, Gh.prototype.toJSON = function (t) {
			const e = Gc.prototype.toJSON.call(this, t);
			e.glslVersion = this.glslVersion, e.uniforms = {};
			for (const i in this.uniforms) {
				const n = this.uniforms[i].value;
				n && n.isTexture ? e.uniforms[i] = {
					type: "t",
					value: n.toJSON(t).uuid
				} : n && n.isColor ? e.uniforms[i] = {
					type: "c",
					value: n.getHex()
				} : n && n.isVector2 ? e.uniforms[i] = {
					type: "v2",
					value: n.toArray()
				} : n && n.isVector3 ? e.uniforms[i] = {
					type: "v3",
					value: n.toArray()
				} : n && n.isVector4 ? e.uniforms[i] = {
					type: "v4",
					value: n.toArray()
				} : n && n.isMatrix3 ? e.uniforms[i] = {
					type: "m3",
					value: n.toArray()
				} : n && n.isMatrix4 ? e.uniforms[i] = {
					type: "m4",
					value: n.toArray()
				} : e.uniforms[i] = {
					value: n
				}
			}
			Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
			const i = {};
			for (const t in this.extensions) !0 === this.extensions[t] && (i[t] = !0);
			return Object.keys(i).length > 0 && (e.extensions = i), e
		}, Hh.prototype = Object.assign(Object.create(Tc.prototype), {
			constructor: Hh,
			isCamera: !0,
			copy: function (t, e) {
				return Tc.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
			},
			getWorldDirection: function (t) {
				void 0 === t && (t = new Sl), this.updateWorldMatrix(!0, !1);
				const e = this.matrixWorld.elements;
				return t.set(-e[8], -e[9], -e[10]).normalize()
			},
			updateMatrixWorld: function (t) {
				Tc.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
			},
			updateWorldMatrix: function (t, e) {
				Tc.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
			},
			clone: function () {
				return (new this.constructor).copy(this)
			}
		}), jh.prototype = Object.assign(Object.create(Hh.prototype), {
			constructor: jh,
			isPerspectiveCamera: !0,
			copy: function (t, e) {
				return Hh.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
			},
			setFocalLength: function (t) {
				const e = .5 * this.getFilmHeight() / t;
				this.fov = 2 * pl.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
			},
			getFocalLength: function () {
				const t = Math.tan(.5 * pl.DEG2RAD * this.fov);
				return .5 * this.getFilmHeight() / t
			},
			getEffectiveFOV: function () {
				return 2 * pl.RAD2DEG * Math.atan(Math.tan(.5 * pl.DEG2RAD * this.fov) / this.zoom)
			},
			getFilmWidth: function () {
				return this.filmGauge * Math.min(this.aspect, 1)
			},
			getFilmHeight: function () {
				return this.filmGauge / Math.max(this.aspect, 1)
			},
			setViewOffset: function (t, e, i, n, r, s) {
				this.aspect = t / e, null === this.view && (this.view = {
					enabled: !0,
					fullWidth: 1,
					fullHeight: 1,
					offsetX: 0,
					offsetY: 0,
					width: 1,
					height: 1
				}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
			},
			clearViewOffset: function () {
				null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
			},
			updateProjectionMatrix: function () {
				const t = this.near;
				let e = t * Math.tan(.5 * pl.DEG2RAD * this.fov) / this.zoom,
					i = 2 * e,
					n = this.aspect * i,
					r = -.5 * n;
				const s = this.view;
				if (null !== this.view && this.view.enabled) {
					const t = s.fullWidth,
						a = s.fullHeight;
					r += s.offsetX * n / t, e -= s.offsetY * i / a, n *= s.width / t, i *= s.height / a
				}
				const a = this.filmOffset;
				0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
			},
			toJSON: function (t) {
				const e = Tc.prototype.toJSON.call(this, t);
				return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
			}
		});
		const qh = 90;
		class Xh extends Tc {
			constructor(t, e, i) {
				if (super(), this.type = "CubeCamera", !0 !== i.isWebGLCubeRenderTarget) return;
				this.renderTarget = i;
				const n = new jh(qh, 1, t, e);
				n.layers = this.layers, n.up.set(0, -1, 0), n.lookAt(new Sl(1, 0, 0)), this.add(n);
				const r = new jh(qh, 1, t, e);
				r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new Sl(-1, 0, 0)), this.add(r);
				const s = new jh(qh, 1, t, e);
				s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new Sl(0, 1, 0)), this.add(s);
				const a = new jh(qh, 1, t, e);
				a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new Sl(0, -1, 0)), this.add(a);
				const o = new jh(qh, 1, t, e);
				o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new Sl(0, 0, 1)), this.add(o);
				const l = new jh(qh, 1, t, e);
				l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new Sl(0, 0, -1)), this.add(l)
			}
			update(t, e) {
				null === this.parent && this.updateMatrixWorld();
				const i = this.renderTarget,
					[n, r, s, a, o, l] = this.children,
					c = t.xr.enabled,
					h = t.getRenderTarget();
				t.xr.enabled = !1;
				const u = i.texture.generateMipmaps;
				i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0), t.render(e, n), t.setRenderTarget(i, 1), t.render(e, r), t.setRenderTarget(i, 2), t.render(e, s), t.setRenderTarget(i, 3), t.render(e, a), t.setRenderTarget(i, 4), t.render(e, o), i.texture.generateMipmaps = u, t.setRenderTarget(i, 5), t.render(e, l), t.setRenderTarget(h), t.xr.enabled = c
			}
		}
		class Yh extends xl {
			constructor(t, e, i, n, r, s, a, o, l, c) {
				super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : Co, i, n, r, s, a = void 0 !== a ? a : jo, o, l, c), this._needsFlipEnvMap = !0, this.flipY = !1
			}
			get images() {
				return this.image
			}
			set images(t) {
				this.image = t
			}
		}
		Yh.prototype.isCubeTexture = !0;
		class Zh extends bl {
			constructor(t, e, i) {
				Number.isInteger(e) && (e = i), super(t, t, e), e = e || {}, this.texture = new Yh(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : ko, this.texture._needsFlipEnvMap = !1
			}
			fromEquirectangularTexture(t, e) {
				this.texture.type = e.type, this.texture.format = qo, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
				const i = {
						uniforms: {
							tEquirect: {
								value: null
							}
						},
						vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
						fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
					},
					n = new Bh(5, 5, 5),
					r = new Gh({
						name: "CubemapFromEquirect",
						uniforms: Uh(i.uniforms),
						vertexShader: i.vertexShader,
						fragmentShader: i.fragmentShader,
						side: 1,
						blending: 0
					});
				r.uniforms.tEquirect.value = e;
				const s = new kh(n, r),
					a = e.minFilter;
				e.minFilter === Ro && (e.minFilter = ko);
				return new Xh(1, 10, this).update(t, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this
			}
			clear(t, e, i, n) {
				const r = t.getRenderTarget();
				for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, i, n);
				t.setRenderTarget(r)
			}
		}
		Zh.prototype.isWebGLCubeRenderTarget = !0;
		class Jh extends xl {
			constructor(t, e, i, n, r, s, a, o, l, c, h, u) {
				super(null, s, a, o, l, c, n, r, h, u), this.image = {
					data: t || null,
					width: e || 1,
					height: i || 1
				}, this.magFilter = void 0 !== l ? l : Fo, this.minFilter = void 0 !== c ? c : Fo, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
			}
		}
		Jh.prototype.isDataTexture = !0;
		const $h = new ql,
			Kh = new Sl;
		class Qh {
			constructor(t = new Lc, e = new Lc, i = new Lc, n = new Lc, r = new Lc, s = new Lc) {
				this.planes = [t, e, i, n, r, s]
			}
			set(t, e, i, n, r, s) {
				const a = this.planes;
				return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(n), a[4].copy(r), a[5].copy(s), this
			}
			copy(t) {
				const e = this.planes;
				for (let i = 0; i < 6; i++) e[i].copy(t.planes[i]);
				return this
			}
			setFromProjectionMatrix(t) {
				const e = this.planes,
					i = t.elements,
					n = i[0],
					r = i[1],
					s = i[2],
					a = i[3],
					o = i[4],
					l = i[5],
					c = i[6],
					h = i[7],
					u = i[8],
					d = i[9],
					p = i[10],
					f = i[11],
					m = i[12],
					g = i[13],
					v = i[14],
					y = i[15];
				return e[0].setComponents(a - n, h - o, f - u, y - m).normalize(), e[1].setComponents(a + n, h + o, f + u, y + m).normalize(), e[2].setComponents(a + r, h + l, f + d, y + g).normalize(), e[3].setComponents(a - r, h - l, f - d, y - g).normalize(), e[4].setComponents(a - s, h - c, f - p, y - v).normalize(), e[5].setComponents(a + s, h + c, f + p, y + v).normalize(), this
			}
			intersectsObject(t) {
				const e = t.geometry;
				return null === e.boundingSphere && e.computeBoundingSphere(), $h.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere($h)
			}
			intersectsSprite(t) {
				return $h.center.set(0, 0, 0), $h.radius = .7071067811865476, $h.applyMatrix4(t.matrixWorld), this.intersectsSphere($h)
			}
			intersectsSphere(t) {
				const e = this.planes,
					i = t.center,
					n = -t.radius;
				for (let t = 0; t < 6; t++) {
					if (e[t].distanceToPoint(i) < n) return !1
				}
				return !0
			}
			intersectsBox(t) {
				const e = this.planes;
				for (let i = 0; i < 6; i++) {
					const n = e[i];
					if (Kh.x = n.normal.x > 0 ? t.max.x : t.min.x, Kh.y = n.normal.y > 0 ? t.max.y : t.min.y, Kh.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(Kh) < 0) return !1
				}
				return !0
			}
			containsPoint(t) {
				const e = this.planes;
				for (let i = 0; i < 6; i++)
					if (e[i].distanceToPoint(t) < 0) return !1;
				return !0
			}
			clone() {
				return (new this.constructor).copy(this)
			}
		}

		function tu() {
			let t = null,
				e = !1,
				i = null,
				n = null;

			function r(e, s) {
				i(e, s), n = t.requestAnimationFrame(r)
			}
			return {
				start: function () {
					!0 !== e && null !== i && (n = t.requestAnimationFrame(r), e = !0)
				},
				stop: function () {
					t.cancelAnimationFrame(n), e = !1
				},
				setAnimationLoop: function (t) {
					i = t
				},
				setContext: function (e) {
					t = e
				}
			}
		}

		function eu(t, e) {
			const i = e.isWebGL2,
				n = new WeakMap;
			return {
				get: function (t) {
					return t.isInterleavedBufferAttribute && (t = t.data), n.get(t)
				},
				remove: function (e) {
					e.isInterleavedBufferAttribute && (e = e.data);
					const i = n.get(e);
					i && (t.deleteBuffer(i.buffer), n.delete(e))
				},
				update: function (e, r) {
					if (e.isGLBufferAttribute) {
						const t = n.get(e);
						return void((!t || t.version < e.version) && n.set(e, {
							buffer: e.buffer,
							type: e.type,
							bytesPerElement: e.elementSize,
							version: e.version
						}))
					}
					e.isInterleavedBufferAttribute && (e = e.data);
					const s = n.get(e);
					void 0 === s ? n.set(e, function (e, n) {
						const r = e.array,
							s = e.usage,
							a = t.createBuffer();
						t.bindBuffer(n, a), t.bufferData(n, r, s), e.onUploadCallback();
						let o = 5126;
						return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array || (r instanceof Uint16Array ? e.isFloat16BufferAttribute ? i && (o = 5131) : o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : r instanceof Uint8Array && (o = 5121)), {
							buffer: a,
							type: o,
							bytesPerElement: r.BYTES_PER_ELEMENT,
							version: e.version
						}
					}(e, r)) : s.version < e.version && (! function (e, n, r) {
						const s = n.array,
							a = n.updateRange;
						t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (i ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1)
					}(s.buffer, e, r), s.version = e.version)
				}
			}
		}
		class iu extends xh {
			constructor(t = 1, e = 1, i = 1, n = 1) {
				super(), this.type = "PlaneGeometry", this.parameters = {
					width: t,
					height: e,
					widthSegments: i,
					heightSegments: n
				};
				const r = t / 2,
					s = e / 2,
					a = Math.floor(i),
					o = Math.floor(n),
					l = a + 1,
					c = o + 1,
					h = t / a,
					u = e / o,
					d = [],
					p = [],
					f = [],
					m = [];
				for (let t = 0; t < c; t++) {
					const e = t * u - s;
					for (let i = 0; i < l; i++) {
						const n = i * h - r;
						p.push(n, -e, 0), f.push(0, 0, 1), m.push(i / a), m.push(1 - t / o)
					}
				}
				for (let t = 0; t < o; t++)
					for (let e = 0; e < a; e++) {
						const i = e + l * t,
							n = e + l * (t + 1),
							r = e + 1 + l * (t + 1),
							s = e + 1 + l * t;
						d.push(i, n, s), d.push(n, r, s)
					}
				this.setIndex(d), this.setAttribute("position", new ch(p, 3)), this.setAttribute("normal", new ch(f, 3)), this.setAttribute("uv", new ch(m, 2))
			}
		}
		const nu = {
				alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
				alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
				alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
				aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
				aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
				begin_vertex: "vec3 transformed = vec3( position );",
				beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
				bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
				bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
				clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
				clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
				clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
				clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
				color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
				color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
				color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
				color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
				common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
				cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
				defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
				displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
				displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
				emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
				emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
				encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
				encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
				envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
				envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
				envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
				envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
				envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
				envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
				fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
				fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
				fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
				fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
				gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
				lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
				lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
				lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
				lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
				lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
				lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
				lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
				lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
				lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
				lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
				lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
				lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
				lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
				logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
				logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
				logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
				logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
				map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
				map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
				map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
				map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
				metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
				metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
				morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
				morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
				morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
				normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
				normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
				normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
				clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
				clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
				clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
				packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
				premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
				project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
				dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
				dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
				roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
				roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
				shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
				shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
				shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
				shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
				skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
				skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
				skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
				skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
				specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
				specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
				tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
				tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
				transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
				transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
				uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
				uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
				uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
				uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
				uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
				uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
				worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
				background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
				background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
				cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
				cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
				depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
				depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
				distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
				distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
				equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
				equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
				linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
				linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
				meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
				meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
				meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
				normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
				points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
				points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
				shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
				shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
				sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
			},
			ru = {
				common: {
					diffuse: {
						value: new Jc(15658734)
					},
					opacity: {
						value: 1
					},
					map: {
						value: null
					},
					uvTransform: {
						value: new ml
					},
					uv2Transform: {
						value: new ml
					},
					alphaMap: {
						value: null
					}
				},
				specularmap: {
					specularMap: {
						value: null
					}
				},
				envmap: {
					envMap: {
						value: null
					},
					flipEnvMap: {
						value: -1
					},
					reflectivity: {
						value: 1
					},
					refractionRatio: {
						value: .98
					},
					maxMipLevel: {
						value: 0
					}
				},
				aomap: {
					aoMap: {
						value: null
					},
					aoMapIntensity: {
						value: 1
					}
				},
				lightmap: {
					lightMap: {
						value: null
					},
					lightMapIntensity: {
						value: 1
					}
				},
				emissivemap: {
					emissiveMap: {
						value: null
					}
				},
				bumpmap: {
					bumpMap: {
						value: null
					},
					bumpScale: {
						value: 1
					}
				},
				normalmap: {
					normalMap: {
						value: null
					},
					normalScale: {
						value: new fl(1, 1)
					}
				},
				displacementmap: {
					displacementMap: {
						value: null
					},
					displacementScale: {
						value: 1
					},
					displacementBias: {
						value: 0
					}
				},
				roughnessmap: {
					roughnessMap: {
						value: null
					}
				},
				metalnessmap: {
					metalnessMap: {
						value: null
					}
				},
				gradientmap: {
					gradientMap: {
						value: null
					}
				},
				fog: {
					fogDensity: {
						value: 25e-5
					},
					fogNear: {
						value: 1
					},
					fogFar: {
						value: 2e3
					},
					fogColor: {
						value: new Jc(16777215)
					}
				},
				lights: {
					ambientLightColor: {
						value: []
					},
					lightProbe: {
						value: []
					},
					directionalLights: {
						value: [],
						properties: {
							direction: {},
							color: {}
						}
					},
					directionalLightShadows: {
						value: [],
						properties: {
							shadowBias: {},
							shadowNormalBias: {},
							shadowRadius: {},
							shadowMapSize: {}
						}
					},
					directionalShadowMap: {
						value: []
					},
					directionalShadowMatrix: {
						value: []
					},
					spotLights: {
						value: [],
						properties: {
							color: {},
							position: {},
							direction: {},
							distance: {},
							coneCos: {},
							penumbraCos: {},
							decay: {}
						}
					},
					spotLightShadows: {
						value: [],
						properties: {
							shadowBias: {},
							shadowNormalBias: {},
							shadowRadius: {},
							shadowMapSize: {}
						}
					},
					spotShadowMap: {
						value: []
					},
					spotShadowMatrix: {
						value: []
					},
					pointLights: {
						value: [],
						properties: {
							color: {},
							position: {},
							decay: {},
							distance: {}
						}
					},
					pointLightShadows: {
						value: [],
						properties: {
							shadowBias: {},
							shadowNormalBias: {},
							shadowRadius: {},
							shadowMapSize: {},
							shadowCameraNear: {},
							shadowCameraFar: {}
						}
					},
					pointShadowMap: {
						value: []
					},
					pointShadowMatrix: {
						value: []
					},
					hemisphereLights: {
						value: [],
						properties: {
							direction: {},
							skyColor: {},
							groundColor: {}
						}
					},
					rectAreaLights: {
						value: [],
						properties: {
							color: {},
							position: {},
							width: {},
							height: {}
						}
					},
					ltc_1: {
						value: null
					},
					ltc_2: {
						value: null
					}
				},
				points: {
					diffuse: {
						value: new Jc(15658734)
					},
					opacity: {
						value: 1
					},
					size: {
						value: 1
					},
					scale: {
						value: 1
					},
					map: {
						value: null
					},
					alphaMap: {
						value: null
					},
					uvTransform: {
						value: new ml
					}
				},
				sprite: {
					diffuse: {
						value: new Jc(15658734)
					},
					opacity: {
						value: 1
					},
					center: {
						value: new fl(.5, .5)
					},
					rotation: {
						value: 0
					},
					map: {
						value: null
					},
					alphaMap: {
						value: null
					},
					uvTransform: {
						value: new ml
					}
				}
			},
			su = {
				basic: {
					uniforms: Vh([ru.common, ru.specularmap, ru.envmap, ru.aomap, ru.lightmap, ru.fog]),
					vertexShader: nu.meshbasic_vert,
					fragmentShader: nu.meshbasic_frag
				},
				lambert: {
					uniforms: Vh([ru.common, ru.specularmap, ru.envmap, ru.aomap, ru.lightmap, ru.emissivemap, ru.fog, ru.lights, {
						emissive: {
							value: new Jc(0)
						}
					}]),
					vertexShader: nu.meshlambert_vert,
					fragmentShader: nu.meshlambert_frag
				},
				phong: {
					uniforms: Vh([ru.common, ru.specularmap, ru.envmap, ru.aomap, ru.lightmap, ru.emissivemap, ru.bumpmap, ru.normalmap, ru.displacementmap, ru.fog, ru.lights, {
						emissive: {
							value: new Jc(0)
						},
						specular: {
							value: new Jc(1118481)
						},
						shininess: {
							value: 30
						}
					}]),
					vertexShader: nu.meshphong_vert,
					fragmentShader: nu.meshphong_frag
				},
				standard: {
					uniforms: Vh([ru.common, ru.envmap, ru.aomap, ru.lightmap, ru.emissivemap, ru.bumpmap, ru.normalmap, ru.displacementmap, ru.roughnessmap, ru.metalnessmap, ru.fog, ru.lights, {
						emissive: {
							value: new Jc(0)
						},
						roughness: {
							value: 1
						},
						metalness: {
							value: 0
						},
						envMapIntensity: {
							value: 1
						}
					}]),
					vertexShader: nu.meshphysical_vert,
					fragmentShader: nu.meshphysical_frag
				},
				toon: {
					uniforms: Vh([ru.common, ru.aomap, ru.lightmap, ru.emissivemap, ru.bumpmap, ru.normalmap, ru.displacementmap, ru.gradientmap, ru.fog, ru.lights, {
						emissive: {
							value: new Jc(0)
						}
					}]),
					vertexShader: nu.meshtoon_vert,
					fragmentShader: nu.meshtoon_frag
				},
				matcap: {
					uniforms: Vh([ru.common, ru.bumpmap, ru.normalmap, ru.displacementmap, ru.fog, {
						matcap: {
							value: null
						}
					}]),
					vertexShader: nu.meshmatcap_vert,
					fragmentShader: nu.meshmatcap_frag
				},
				points: {
					uniforms: Vh([ru.points, ru.fog]),
					vertexShader: nu.points_vert,
					fragmentShader: nu.points_frag
				},
				dashed: {
					uniforms: Vh([ru.common, ru.fog, {
						scale: {
							value: 1
						},
						dashSize: {
							value: 1
						},
						totalSize: {
							value: 2
						}
					}]),
					vertexShader: nu.linedashed_vert,
					fragmentShader: nu.linedashed_frag
				},
				depth: {
					uniforms: Vh([ru.common, ru.displacementmap]),
					vertexShader: nu.depth_vert,
					fragmentShader: nu.depth_frag
				},
				normal: {
					uniforms: Vh([ru.common, ru.bumpmap, ru.normalmap, ru.displacementmap, {
						opacity: {
							value: 1
						}
					}]),
					vertexShader: nu.normal_vert,
					fragmentShader: nu.normal_frag
				},
				sprite: {
					uniforms: Vh([ru.sprite, ru.fog]),
					vertexShader: nu.sprite_vert,
					fragmentShader: nu.sprite_frag
				},
				background: {
					uniforms: {
						uvTransform: {
							value: new ml
						},
						t2D: {
							value: null
						}
					},
					vertexShader: nu.background_vert,
					fragmentShader: nu.background_frag
				},
				cube: {
					uniforms: Vh([ru.envmap, {
						opacity: {
							value: 1
						}
					}]),
					vertexShader: nu.cube_vert,
					fragmentShader: nu.cube_frag
				},
				equirect: {
					uniforms: {
						tEquirect: {
							value: null
						}
					},
					vertexShader: nu.equirect_vert,
					fragmentShader: nu.equirect_frag
				},
				distanceRGBA: {
					uniforms: Vh([ru.common, ru.displacementmap, {
						referencePosition: {
							value: new Sl
						},
						nearDistance: {
							value: 1
						},
						farDistance: {
							value: 1e3
						}
					}]),
					vertexShader: nu.distanceRGBA_vert,
					fragmentShader: nu.distanceRGBA_frag
				},
				shadow: {
					uniforms: Vh([ru.lights, ru.fog, {
						color: {
							value: new Jc(0)
						},
						opacity: {
							value: 1
						}
					}]),
					vertexShader: nu.shadow_vert,
					fragmentShader: nu.shadow_frag
				}
			};

		function au(t, e, i, n, r) {
			const s = new Jc(0);
			let a, o, l = 0,
				c = null,
				h = 0,
				u = null;

			function d(t, e) {
				i.buffers.color.setClear(t.r, t.g, t.b, e, r)
			}
			return {
				getClearColor: function () {
					return s
				},
				setClearColor: function (t, e = 1) {
					s.set(t), l = e, d(s, l)
				},
				getClearAlpha: function () {
					return l
				},
				setClearAlpha: function (t) {
					l = t, d(s, l)
				},
				render: function (i, r, p, f) {
					let m = !0 === r.isScene ? r.background : null;
					m && m.isTexture && (m = e.get(m));
					const g = t.xr,
						v = g.getSession && g.getSession();
					v && "additive" === v.environmentBlendMode && (m = null), null === m ? d(s, l) : m && m.isColor && (d(m, 1), f = !0), (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || m.mapping === Ao) ? (void 0 === o && (o = new kh(new Bh(1, 1, 1), new Gh({
						name: "BackgroundCubeMaterial",
						uniforms: Uh(su.cube.uniforms),
						vertexShader: su.cube.vertexShader,
						fragmentShader: su.cube.fragmentShader,
						side: 1,
						depthTest: !1,
						depthWrite: !1,
						fog: !1
					})), o.geometry.deleteAttribute("normal"), o.geometry.deleteAttribute("uv"), o.onBeforeRender = function (t, e, i) {
						this.matrixWorld.copyPosition(i.matrixWorld)
					}, Object.defineProperty(o.material, "envMap", {
						get: function () {
							return this.uniforms.envMap.value
						}
					}), n.update(o)), o.material.uniforms.envMap.value = m, o.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1, c === m && h === m.version && u === t.toneMapping || (o.material.needsUpdate = !0, c = m, h = m.version, u = t.toneMapping), i.unshift(o, o.geometry, o.material, 0, 0, null)) : m && m.isTexture && (void 0 === a && (a = new kh(new iu(2, 2), new Gh({
						name: "BackgroundMaterial",
						uniforms: Uh(su.background.uniforms),
						vertexShader: su.background.vertexShader,
						fragmentShader: su.background.fragmentShader,
						side: 0,
						depthTest: !1,
						depthWrite: !1,
						fog: !1
					})), a.geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
						get: function () {
							return this.uniforms.t2D.value
						}
					}), n.update(a)), a.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), a.material.uniforms.uvTransform.value.copy(m.matrix), c === m && h === m.version && u === t.toneMapping || (a.material.needsUpdate = !0, c = m, h = m.version, u = t.toneMapping), i.unshift(a, a.geometry, a.material, 0, 0, null))
				}
			}
		}

		function ou(t, e, i, n) {
			const r = t.getParameter(34921),
				s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
				a = n.isWebGL2 || null !== s,
				o = {},
				l = d(null);
			let c = l;

			function h(e) {
				return n.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e)
			}

			function u(e) {
				return n.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e)
			}

			function d(t) {
				const e = [],
					i = [],
					n = [];
				for (let t = 0; t < r; t++) e[t] = 0, i[t] = 0, n[t] = 0;
				return {
					geometry: null,
					program: null,
					wireframe: !1,
					newAttributes: e,
					enabledAttributes: i,
					attributeDivisors: n,
					object: t,
					attributes: {},
					index: null
				}
			}

			function p() {
				const t = c.newAttributes;
				for (let e = 0, i = t.length; e < i; e++) t[e] = 0
			}

			function f(t) {
				m(t, 0)
			}

			function m(i, r) {
				const s = c.newAttributes,
					a = c.enabledAttributes,
					o = c.attributeDivisors;
				if (s[i] = 1, 0 === a[i] && (t.enableVertexAttribArray(i), a[i] = 1), o[i] !== r) {
					(n.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), o[i] = r
				}
			}

			function g() {
				const e = c.newAttributes,
					i = c.enabledAttributes;
				for (let n = 0, r = i.length; n < r; n++) i[n] !== e[n] && (t.disableVertexAttribArray(n), i[n] = 0)
			}

			function v(e, i, r, s, a, o) {
				!0 !== n.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, i, r, s, a, o) : t.vertexAttribIPointer(e, i, r, a, o)
			}

			function y() {
				x(), c !== l && (c = l, h(c.object))
			}

			function x() {
				l.geometry = null, l.program = null, l.wireframe = !1
			}
			return {
				setup: function (r, l, u, y, x) {
					let _ = !1;
					if (a) {
						const e = function (e, i, r) {
							const a = !0 === r.wireframe;
							let l = o[e.id];
							void 0 === l && (l = {}, o[e.id] = l);
							let c = l[i.id];
							void 0 === c && (c = {}, l[i.id] = c);
							let h = c[a];
							void 0 === h && (h = d(function () {
								return n.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()
							}()), c[a] = h);
							return h
						}(y, u, l);
						c !== e && (c = e, h(c.object)), _ = function (t, e) {
							const i = c.attributes,
								n = t.attributes;
							let r = 0;
							for (const t in n) {
								const e = i[t],
									s = n[t];
								if (void 0 === e) return !0;
								if (e.attribute !== s) return !0;
								if (e.data !== s.data) return !0;
								r++
							}
							return c.attributesNum !== r || c.index !== e
						}(y, x), _ && function (t, e) {
							const i = {},
								n = t.attributes;
							let r = 0;
							for (const t in n) {
								const e = n[t],
									s = {};
								s.attribute = e, e.data && (s.data = e.data), i[t] = s, r++
							}
							c.attributes = i, c.attributesNum = r, c.index = e
						}(y, x)
					} else {
						const t = !0 === l.wireframe;
						c.geometry === y.id && c.program === u.id && c.wireframe === t || (c.geometry = y.id, c.program = u.id, c.wireframe = t, _ = !0)
					}!0 === r.isInstancedMesh && (_ = !0), null !== x && i.update(x, 34963), _ && (! function (r, s, a, o) {
						if (!1 === n.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
						p();
						const l = o.attributes,
							c = a.getAttributes(),
							h = s.defaultAttributeValues;
						for (const e in c) {
							const n = c[e];
							if (n >= 0) {
								const s = l[e];
								if (void 0 !== s) {
									const e = s.normalized,
										r = s.itemSize,
										a = i.get(s);
									if (void 0 === a) continue;
									const l = a.buffer,
										c = a.type,
										h = a.bytesPerElement;
									if (s.isInterleavedBufferAttribute) {
										const i = s.data,
											a = i.stride,
											u = s.offset;
										i && i.isInstancedInterleavedBuffer ? (m(n, i.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = i.meshPerAttribute * i.count)) : f(n), t.bindBuffer(34962, l), v(n, r, c, e, a * h, u * h)
									} else s.isInstancedBufferAttribute ? (m(n, s.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)) : f(n), t.bindBuffer(34962, l), v(n, r, c, e, 0, 0)
								} else if ("instanceMatrix" === e) {
									const e = i.get(r.instanceMatrix);
									if (void 0 === e) continue;
									const s = e.buffer,
										a = e.type;
									m(n + 0, 1), m(n + 1, 1), m(n + 2, 1), m(n + 3, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(n + 0, 4, a, !1, 64, 0), t.vertexAttribPointer(n + 1, 4, a, !1, 64, 16), t.vertexAttribPointer(n + 2, 4, a, !1, 64, 32), t.vertexAttribPointer(n + 3, 4, a, !1, 64, 48)
								} else if ("instanceColor" === e) {
									const e = i.get(r.instanceColor);
									if (void 0 === e) continue;
									const s = e.buffer,
										a = e.type;
									m(n, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(n, 3, a, !1, 12, 0)
								} else if (void 0 !== h) {
									const i = h[e];
									if (void 0 !== i) switch (i.length) {
										case 2:
											t.vertexAttrib2fv(n, i);
											break;
										case 3:
											t.vertexAttrib3fv(n, i);
											break;
										case 4:
											t.vertexAttrib4fv(n, i);
											break;
										default:
											t.vertexAttrib1fv(n, i)
									}
								}
							}
						}
						g()
					}(r, l, u, y), null !== x && t.bindBuffer(34963, i.get(x).buffer))
				},
				reset: y,
				resetDefaultState: x,
				dispose: function () {
					y();
					for (const t in o) {
						const e = o[t];
						for (const t in e) {
							const i = e[t];
							for (const t in i) u(i[t].object), delete i[t];
							delete e[t]
						}
						delete o[t]
					}
				},
				releaseStatesOfGeometry: function (t) {
					if (void 0 === o[t.id]) return;
					const e = o[t.id];
					for (const t in e) {
						const i = e[t];
						for (const t in i) u(i[t].object), delete i[t];
						delete e[t]
					}
					delete o[t.id]
				},
				releaseStatesOfProgram: function (t) {
					for (const e in o) {
						const i = o[e];
						if (void 0 === i[t.id]) continue;
						const n = i[t.id];
						for (const t in n) u(n[t].object), delete n[t];
						delete i[t.id]
					}
				},
				initAttributes: p,
				enableAttribute: f,
				disableUnusedAttributes: g
			}
		}

		function lu(t, e, i, n) {
			const r = n.isWebGL2;
			let s;
			this.setMode = function (t) {
				s = t
			}, this.render = function (e, n) {
				t.drawArrays(s, e, n), i.update(n, s, 1)
			}, this.renderInstances = function (n, a, o) {
				if (0 === o) return;
				let l, c;
				if (r) l = t, c = "drawArraysInstanced";
				else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return;
				l[c](s, n, a, o), i.update(a, s, o)
			}
		}

		function cu(t, e, i) {
			let n;

			function r(e) {
				if ("highp" === e) {
					if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
					e = "mediump"
				}
				return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
			}
			const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
			let a = void 0 !== i.precision ? i.precision : "highp";
			const o = r(a);
			o !== a && (a = o);
			const l = !0 === i.logarithmicDepthBuffer,
				c = t.getParameter(34930),
				h = t.getParameter(35660),
				u = t.getParameter(3379),
				d = t.getParameter(34076),
				p = t.getParameter(34921),
				f = t.getParameter(36347),
				m = t.getParameter(36348),
				g = t.getParameter(36349),
				v = h > 0,
				y = s || e.has("OES_texture_float");
			return {
				isWebGL2: s,
				getMaxAnisotropy: function () {
					if (void 0 !== n) return n;
					if (!0 === e.has("EXT_texture_filter_anisotropic")) {
						const i = e.get("EXT_texture_filter_anisotropic");
						n = t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
					} else n = 0;
					return n
				},
				getMaxPrecision: r,
				precision: a,
				logarithmicDepthBuffer: l,
				maxTextures: c,
				maxVertexTextures: h,
				maxTextureSize: u,
				maxCubemapSize: d,
				maxAttributes: p,
				maxVertexUniforms: f,
				maxVaryings: m,
				maxFragmentUniforms: g,
				vertexTextures: v,
				floatFragmentTextures: y,
				floatVertexTextures: v && y,
				maxSamples: s ? t.getParameter(36183) : 0
			}
		}

		function hu(t) {
			const e = this;
			let i = null,
				n = 0,
				r = !1,
				s = !1;
			const a = new Lc,
				o = new ml,
				l = {
					value: null,
					needsUpdate: !1
				};

			function c() {
				l.value !== i && (l.value = i, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
			}

			function h(t, i, n, r) {
				const s = null !== t ? t.length : 0;
				let c = null;
				if (0 !== s) {
					if (c = l.value, !0 !== r || null === c) {
						const e = n + 4 * s,
							r = i.matrixWorldInverse;
						o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
						for (let e = 0, i = n; e !== s; ++e, i += 4) a.copy(t[e]).applyMatrix4(r, o), a.normal.toArray(c, i), c[i + 3] = a.constant
					}
					l.value = c, l.needsUpdate = !0
				}
				return e.numPlanes = s, e.numIntersection = 0, c
			}
			this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, e, s) {
				const a = 0 !== t.length || e || 0 !== n || r;
				return r = e, i = h(t, s, 0), n = t.length, a
			}, this.beginShadows = function () {
				s = !0, h(null)
			}, this.endShadows = function () {
				s = !1, c()
			}, this.setState = function (e, a, o) {
				const u = e.clippingPlanes,
					d = e.clipIntersection,
					p = e.clipShadows,
					f = t.get(e);
				if (!r || null === u || 0 === u.length || s && !p) s ? h(null) : c();
				else {
					const t = s ? 0 : n,
						e = 4 * t;
					let r = f.clippingState || null;
					l.value = r, r = h(u, a, e, o);
					for (let t = 0; t !== e; ++t) r[t] = i[t];
					f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
				}
			}
		}

		function uu(t) {
			let e = new WeakMap;

			function i(t, e) {
				return 303 === e ? t.mapping = Co : 304 === e && (t.mapping = Eo), t
			}

			function n(t) {
				const i = t.target;
				i.removeEventListener("dispose", n);
				const r = e.get(i);
				void 0 !== r && (e.delete(i), r.dispose())
			}
			return {
				get: function (r) {
					if (r && r.isTexture) {
						const s = r.mapping;
						if (303 === s || 304 === s) {
							if (e.has(r)) {
								return i(e.get(r).texture, r.mapping)
							} {
								const s = r.image;
								if (s && s.height > 0) {
									const a = t.getRenderTarget(),
										o = new Zh(s.height / 2);
									return o.fromEquirectangularTexture(t, r), e.set(r, o), t.setRenderTarget(a), r.addEventListener("dispose", n), i(o.texture, r.mapping)
								}
								return null
							}
						}
					}
					return r
				},
				dispose: function () {
					e = new WeakMap
				}
			}
		}

		function du(t) {
			const e = {};

			function i(i) {
				if (void 0 !== e[i]) return e[i];
				let n;
				switch (i) {
					case "WEBGL_depth_texture":
						n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
						break;
					case "EXT_texture_filter_anisotropic":
						n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
						break;
					case "WEBGL_compressed_texture_s3tc":
						n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
						break;
					case "WEBGL_compressed_texture_pvrtc":
						n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
						break;
					default:
						n = t.getExtension(i)
				}
				return e[i] = n, n
			}
			return {
				has: function (t) {
					return null !== i(t)
				},
				init: function (t) {
					t.isWebGL2 ? i("EXT_color_buffer_float") : (i("WEBGL_depth_texture"), i("OES_texture_float"), i("OES_texture_half_float"), i("OES_texture_half_float_linear"), i("OES_standard_derivatives"), i("OES_element_index_uint"), i("OES_vertex_array_object"), i("ANGLE_instanced_arrays")), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float")
				},
				get: function (t) {
					const e = i(t);
					return e
				}
			}
		}

		function pu(t, e, i, n) {
			const r = {},
				s = new WeakMap;

			function a(t) {
				const o = t.target;
				null !== o.index && e.remove(o.index);
				for (const t in o.attributes) e.remove(o.attributes[t]);
				o.removeEventListener("dispose", a), delete r[o.id];
				const l = s.get(o);
				l && (e.remove(l), s.delete(o)), n.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, i.memory.geometries--
			}

			function o(t) {
				const i = [],
					n = t.index,
					r = t.attributes.position;
				let a = 0;
				if (null !== n) {
					const t = n.array;
					a = n.version;
					for (let e = 0, n = t.length; e < n; e += 3) {
						const n = t[e + 0],
							r = t[e + 1],
							s = t[e + 2];
						i.push(n, r, r, s, s, n)
					}
				} else {
					const t = r.array;
					a = r.version;
					for (let e = 0, n = t.length / 3 - 1; e < n; e += 3) {
						const t = e + 0,
							n = e + 1,
							r = e + 2;
						i.push(t, n, n, r, r, t)
					}
				}
				const o = new(uh(i) > 65535 ? oh : sh)(i, 1);
				o.version = a;
				const l = s.get(t);
				l && e.remove(l), s.set(t, o)
			}
			return {
				get: function (t, e) {
					return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, i.memory.geometries++), e
				},
				update: function (t) {
					const i = t.attributes;
					for (const t in i) e.update(i[t], 34962);
					const n = t.morphAttributes;
					for (const t in n) {
						const i = n[t];
						for (let t = 0, n = i.length; t < n; t++) e.update(i[t], 34962)
					}
				},
				getWireframeAttribute: function (t) {
					const e = s.get(t);
					if (e) {
						const i = t.index;
						null !== i && e.version < i.version && o(t)
					} else o(t);
					return s.get(t)
				}
			}
		}

		function fu(t, e, i, n) {
			const r = n.isWebGL2;
			let s, a, o;
			this.setMode = function (t) {
				s = t
			}, this.setIndex = function (t) {
				a = t.type, o = t.bytesPerElement
			}, this.render = function (e, n) {
				t.drawElements(s, n, a, e * o), i.update(n, s, 1)
			}, this.renderInstances = function (n, l, c) {
				if (0 === c) return;
				let h, u;
				if (r) h = t, u = "drawElementsInstanced";
				else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return;
				h[u](s, l, a, n * o, c), i.update(l, s, c)
			}
		}

		function mu(t) {
			const e = {
				frame: 0,
				calls: 0,
				triangles: 0,
				points: 0,
				lines: 0
			};
			return {
				memory: {
					geometries: 0,
					textures: 0
				},
				render: e,
				programs: null,
				autoReset: !0,
				reset: function () {
					e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
				},
				update: function (t, i, n) {
					switch (e.calls++, i) {
						case 4:
							e.triangles += n * (t / 3);
							break;
						case 1:
							e.lines += n * (t / 2);
							break;
						case 3:
							e.lines += n * (t - 1);
							break;
						case 2:
							e.lines += n * t;
							break;
						case 0:
							e.points += n * t
					}
				}
			}
		}

		function gu(t, e) {
			return t[0] - e[0]
		}

		function vu(t, e) {
			return Math.abs(e[1]) - Math.abs(t[1])
		}

		function yu(t) {
			const e = {},
				i = new Float32Array(8),
				n = [];
			for (let t = 0; t < 8; t++) n[t] = [t, 0];
			return {
				update: function (r, s, a, o) {
					const l = r.morphTargetInfluences,
						c = void 0 === l ? 0 : l.length;
					let h = e[s.id];
					if (void 0 === h) {
						h = [];
						for (let t = 0; t < c; t++) h[t] = [t, 0];
						e[s.id] = h
					}
					for (let t = 0; t < c; t++) {
						const e = h[t];
						e[0] = t, e[1] = l[t]
					}
					h.sort(vu);
					for (let t = 0; t < 8; t++) t < c && h[t][1] ? (n[t][0] = h[t][0], n[t][1] = h[t][1]) : (n[t][0] = Number.MAX_SAFE_INTEGER, n[t][1] = 0);
					n.sort(gu);
					const u = a.morphTargets && s.morphAttributes.position,
						d = a.morphNormals && s.morphAttributes.normal;
					let p = 0;
					for (let t = 0; t < 8; t++) {
						const e = n[t],
							r = e[0],
							a = e[1];
						r !== Number.MAX_SAFE_INTEGER && a ? (u && s.getAttribute("morphTarget" + t) !== u[r] && s.setAttribute("morphTarget" + t, u[r]), d && s.getAttribute("morphNormal" + t) !== d[r] && s.setAttribute("morphNormal" + t, d[r]), i[t] = a, p += a) : (u && !0 === s.hasAttribute("morphTarget" + t) && s.deleteAttribute("morphTarget" + t), d && !0 === s.hasAttribute("morphNormal" + t) && s.deleteAttribute("morphNormal" + t), i[t] = 0)
					}
					const f = s.morphTargetsRelative ? 1 : 1 - p;
					o.getUniforms().setValue(t, "morphTargetBaseInfluence", f), o.getUniforms().setValue(t, "morphTargetInfluences", i)
				}
			}
		}

		function xu(t, e, i, n) {
			let r = new WeakMap;

			function s(t) {
				const e = t.target;
				e.removeEventListener("dispose", s), i.remove(e.instanceMatrix), null !== e.instanceColor && i.remove(e.instanceColor)
			}
			return {
				update: function (t) {
					const a = n.render.frame,
						o = t.geometry,
						l = e.get(t, o);
					return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), i.update(t.instanceMatrix, 34962), null !== t.instanceColor && i.update(t.instanceColor, 34962)), l
				},
				dispose: function () {
					r = new WeakMap
				}
			}
		}
		su.physical = {
			uniforms: Vh([su.standard.uniforms, {
				clearcoat: {
					value: 0
				},
				clearcoatMap: {
					value: null
				},
				clearcoatRoughness: {
					value: 0
				},
				clearcoatRoughnessMap: {
					value: null
				},
				clearcoatNormalScale: {
					value: new fl(1, 1)
				},
				clearcoatNormalMap: {
					value: null
				},
				sheen: {
					value: new Jc(0)
				},
				transmission: {
					value: 0
				},
				transmissionMap: {
					value: null
				}
			}]),
			vertexShader: nu.meshphysical_vert,
			fragmentShader: nu.meshphysical_frag
		};
		class _u extends xl {
			constructor(t = null, e = 1, i = 1, n = 1) {
				super(null), this.image = {
					data: t,
					width: e,
					height: i,
					depth: n
				}, this.magFilter = Fo, this.minFilter = Fo, this.wrapR = Oo, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
			}
		}
		_u.prototype.isDataTexture2DArray = !0;
		class wu extends xl {
			constructor(t = null, e = 1, i = 1, n = 1) {
				super(null), this.image = {
					data: t,
					width: e,
					height: i,
					depth: n
				}, this.magFilter = Fo, this.minFilter = Fo, this.wrapR = Oo, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
			}
		}
		wu.prototype.isDataTexture3D = !0;
		const bu = new xl,
			Mu = new _u,
			Su = new wu,
			Du = new Yh,
			Tu = [],
			Cu = [],
			Eu = new Float32Array(16),
			Au = new Float32Array(9),
			Lu = new Float32Array(4);

		function Pu(t, e, i) {
			const n = t[0];
			if (n <= 0 || n > 0) return t;
			const r = e * i;
			let s = Tu[r];
			if (void 0 === s && (s = new Float32Array(r), Tu[r] = s), 0 !== e) {
				n.toArray(s, 0);
				for (let n = 1, r = 0; n !== e; ++n) r += i, t[n].toArray(s, r)
			}
			return s
		}

		function Ou(t, e) {
			if (t.length !== e.length) return !1;
			for (let i = 0, n = t.length; i < n; i++)
				if (t[i] !== e[i]) return !1;
			return !0
		}

		function Iu(t, e) {
			for (let i = 0, n = e.length; i < n; i++) t[i] = e[i]
		}

		function Fu(t, e) {
			let i = Cu[e];
			void 0 === i && (i = new Int32Array(e), Cu[e] = i);
			for (let n = 0; n !== e; ++n) i[n] = t.allocateTextureUnit();
			return i
		}

		function Nu(t, e) {
			const i = this.cache;
			i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e)
		}

		function zu(t, e) {
			const i = this.cache;
			if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
			else {
				if (Ou(i, e)) return;
				t.uniform2fv(this.addr, e), Iu(i, e)
			}
		}

		function ku(t, e) {
			const i = this.cache;
			if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
			else if (void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
			else {
				if (Ou(i, e)) return;
				t.uniform3fv(this.addr, e), Iu(i, e)
			}
		}

		function Ru(t, e) {
			const i = this.cache;
			if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
			else {
				if (Ou(i, e)) return;
				t.uniform4fv(this.addr, e), Iu(i, e)
			}
		}

		function Bu(t, e) {
			const i = this.cache,
				n = e.elements;
			if (void 0 === n) {
				if (Ou(i, e)) return;
				t.uniformMatrix2fv(this.addr, !1, e), Iu(i, e)
			} else {
				if (Ou(i, n)) return;
				Lu.set(n), t.uniformMatrix2fv(this.addr, !1, Lu), Iu(i, n)
			}
		}

		function Uu(t, e) {
			const i = this.cache,
				n = e.elements;
			if (void 0 === n) {
				if (Ou(i, e)) return;
				t.uniformMatrix3fv(this.addr, !1, e), Iu(i, e)
			} else {
				if (Ou(i, n)) return;
				Au.set(n), t.uniformMatrix3fv(this.addr, !1, Au), Iu(i, n)
			}
		}

		function Vu(t, e) {
			const i = this.cache,
				n = e.elements;
			if (void 0 === n) {
				if (Ou(i, e)) return;
				t.uniformMatrix4fv(this.addr, !1, e), Iu(i, e)
			} else {
				if (Ou(i, n)) return;
				Eu.set(n), t.uniformMatrix4fv(this.addr, !1, Eu), Iu(i, n)
			}
		}

		function Wu(t, e) {
			const i = this.cache;
			i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e)
		}

		function Gu(t, e) {
			const i = this.cache;
			Ou(i, e) || (t.uniform2iv(this.addr, e), Iu(i, e))
		}

		function Hu(t, e) {
			const i = this.cache;
			Ou(i, e) || (t.uniform3iv(this.addr, e), Iu(i, e))
		}

		function ju(t, e) {
			const i = this.cache;
			Ou(i, e) || (t.uniform4iv(this.addr, e), Iu(i, e))
		}

		function qu(t, e) {
			const i = this.cache;
			i[0] !== e && (t.uniform1ui(this.addr, e), i[0] = e)
		}

		function Xu(t, e) {
			const i = this.cache;
			Ou(i, e) || (t.uniform2uiv(this.addr, e), Iu(i, e))
		}

		function Yu(t, e) {
			const i = this.cache;
			Ou(i, e) || (t.uniform3uiv(this.addr, e), Iu(i, e))
		}

		function Zu(t, e) {
			const i = this.cache;
			Ou(i, e) || (t.uniform4uiv(this.addr, e), Iu(i, e))
		}

		function Ju(t, e, i) {
			const n = this.cache,
				r = i.allocateTextureUnit();
			n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.safeSetTexture2D(e || bu, r)
		}

		function $u(t, e, i) {
			const n = this.cache,
				r = i.allocateTextureUnit();
			n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(e || Su, r)
		}

		function Ku(t, e, i) {
			const n = this.cache,
				r = i.allocateTextureUnit();
			n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.safeSetTextureCube(e || Du, r)
		}

		function Qu(t, e, i) {
			const n = this.cache,
				r = i.allocateTextureUnit();
			n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(e || Mu, r)
		}

		function td(t, e) {
			t.uniform1fv(this.addr, e)
		}

		function ed(t, e) {
			const i = Pu(e, this.size, 2);
			t.uniform2fv(this.addr, i)
		}

		function id(t, e) {
			const i = Pu(e, this.size, 3);
			t.uniform3fv(this.addr, i)
		}

		function nd(t, e) {
			const i = Pu(e, this.size, 4);
			t.uniform4fv(this.addr, i)
		}

		function rd(t, e) {
			const i = Pu(e, this.size, 4);
			t.uniformMatrix2fv(this.addr, !1, i)
		}

		function sd(t, e) {
			const i = Pu(e, this.size, 9);
			t.uniformMatrix3fv(this.addr, !1, i)
		}

		function ad(t, e) {
			const i = Pu(e, this.size, 16);
			t.uniformMatrix4fv(this.addr, !1, i)
		}

		function od(t, e) {
			t.uniform1iv(this.addr, e)
		}

		function ld(t, e) {
			t.uniform2iv(this.addr, e)
		}

		function cd(t, e) {
			t.uniform3iv(this.addr, e)
		}

		function hd(t, e) {
			t.uniform4iv(this.addr, e)
		}

		function ud(t, e) {
			t.uniform1uiv(this.addr, e)
		}

		function dd(t, e) {
			t.uniform2uiv(this.addr, e)
		}

		function pd(t, e) {
			t.uniform3uiv(this.addr, e)
		}

		function fd(t, e) {
			t.uniform4uiv(this.addr, e)
		}

		function md(t, e, i) {
			const n = e.length,
				r = Fu(i, n);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== n; ++t) i.safeSetTexture2D(e[t] || bu, r[t])
		}

		function gd(t, e, i) {
			const n = e.length,
				r = Fu(i, n);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== n; ++t) i.safeSetTextureCube(e[t] || Du, r[t])
		}

		function vd(t, e, i) {
			this.id = t, this.addr = i, this.cache = [], this.setValue = function (t) {
				switch (t) {
					case 5126:
						return Nu;
					case 35664:
						return zu;
					case 35665:
						return ku;
					case 35666:
						return Ru;
					case 35674:
						return Bu;
					case 35675:
						return Uu;
					case 35676:
						return Vu;
					case 5124:
					case 35670:
						return Wu;
					case 35667:
					case 35671:
						return Gu;
					case 35668:
					case 35672:
						return Hu;
					case 35669:
					case 35673:
						return ju;
					case 5125:
						return qu;
					case 36294:
						return Xu;
					case 36295:
						return Yu;
					case 36296:
						return Zu;
					case 35678:
					case 36198:
					case 36298:
					case 36306:
					case 35682:
						return Ju;
					case 35679:
					case 36299:
					case 36307:
						return $u;
					case 35680:
					case 36300:
					case 36308:
					case 36293:
						return Ku;
					case 36289:
					case 36303:
					case 36311:
					case 36292:
						return Qu
				}
			}(e.type)
		}

		function yd(t, e, i) {
			this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function (t) {
				switch (t) {
					case 5126:
						return td;
					case 35664:
						return ed;
					case 35665:
						return id;
					case 35666:
						return nd;
					case 35674:
						return rd;
					case 35675:
						return sd;
					case 35676:
						return ad;
					case 5124:
					case 35670:
						return od;
					case 35667:
					case 35671:
						return ld;
					case 35668:
					case 35672:
						return cd;
					case 35669:
					case 35673:
						return hd;
					case 5125:
						return ud;
					case 36294:
						return dd;
					case 36295:
						return pd;
					case 36296:
						return fd;
					case 35678:
					case 36198:
					case 36298:
					case 36306:
					case 35682:
						return md;
					case 35680:
					case 36300:
					case 36308:
					case 36293:
						return gd
				}
			}(e.type)
		}

		function xd(t) {
			this.id = t, this.seq = [], this.map = {}
		}
		yd.prototype.updateCache = function (t) {
			const e = this.cache;
			t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Iu(e, t)
		}, xd.prototype.setValue = function (t, e, i) {
			const n = this.seq;
			for (let r = 0, s = n.length; r !== s; ++r) {
				const s = n[r];
				s.setValue(t, e[s.id], i)
			}
		};
		const _d = /(\w+)(\])?(\[|\.)?/g;

		function wd(t, e) {
			t.seq.push(e), t.map[e.id] = e
		}

		function bd(t, e, i) {
			const n = t.name,
				r = n.length;
			for (_d.lastIndex = 0;;) {
				const s = _d.exec(n),
					a = _d.lastIndex;
				let o = s[1];
				const l = "]" === s[2],
					c = s[3];
				if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
					wd(i, void 0 === c ? new vd(o, t, e) : new yd(o, t, e));
					break
				} {
					let t = i.map[o];
					void 0 === t && (t = new xd(o), wd(i, t)), i = t
				}
			}
		}

		function Md(t, e) {
			this.seq = [], this.map = {};
			const i = t.getProgramParameter(e, 35718);
			for (let n = 0; n < i; ++n) {
				const i = t.getActiveUniform(e, n);
				bd(i, t.getUniformLocation(e, i.name), this)
			}
		}

		function Sd(t, e, i) {
			const n = t.createShader(e);
			return t.shaderSource(n, i), t.compileShader(n), n
		}
		Md.prototype.setValue = function (t, e, i, n) {
			const r = this.map[e];
			void 0 !== r && r.setValue(t, i, n)
		}, Md.prototype.setOptional = function (t, e, i) {
			const n = e[i];
			void 0 !== n && this.setValue(t, i, n)
		}, Md.upload = function (t, e, i, n) {
			for (let r = 0, s = e.length; r !== s; ++r) {
				const s = e[r],
					a = i[s.id];
				!1 !== a.needsUpdate && s.setValue(t, a.value, n)
			}
		}, Md.seqWithValue = function (t, e) {
			const i = [];
			for (let n = 0, r = t.length; n !== r; ++n) {
				const r = t[n];
				r.id in e && i.push(r)
			}
			return i
		};
		let Dd = 0;

		function Td(t) {
			switch (t) {
				case il:
					return ["Linear", "( value )"];
				case nl:
					return ["sRGB", "( value )"];
				case sl:
					return ["RGBE", "( value )"];
				case 3004:
					return ["RGBM", "( value, 7.0 )"];
				case 3005:
					return ["RGBM", "( value, 16.0 )"];
				case 3006:
					return ["RGBD", "( value, 256.0 )"];
				case rl:
					return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
				case 3003:
					return ["LogLuv", "( value )"];
				default:
					return ["Linear", "( value )"]
			}
		}

		function Cd(t, e, i) {
			const n = t.getShaderParameter(e, 35713),
				r = t.getShaderInfoLog(e).trim();
			if (n && "" === r) return "";
			return "THREE.WebGLShader: gl.getShaderInfoLog() " + i + "\n" + r + function (t) {
				const e = t.split("\n");
				for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
				return e.join("\n")
			}(t.getShaderSource(e))
		}

		function Ed(t, e) {
			const i = Td(e);
			return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
		}

		function Ad(t, e) {
			const i = Td(e);
			return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
		}

		function Ld(t, e) {
			let i;
			switch (e) {
				case 1:
					i = "Linear";
					break;
				case 2:
					i = "Reinhard";
					break;
				case 3:
					i = "OptimizedCineon";
					break;
				case 4:
					i = "ACESFilmic";
					break;
				case 5:
					i = "Custom";
					break;
				default:
					i = "Linear"
			}
			return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
		}

		function Pd(t) {
			return "" !== t
		}

		function Od(t, e) {
			return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
		}

		function Id(t, e) {
			return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
		}
		const Fd = /^[ \t]*#include +<([\w\d./]+)>/gm;

		function Nd(t) {
			return t.replace(Fd, zd)
		}

		function zd(t, e) {
			const i = nu[e];
			if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
			return Nd(i)
		}
		const kd = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
			Rd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

		function Bd(t) {
			return t.replace(Rd, Vd).replace(kd, Ud)
		}

		function Ud(t, e, i, n) {
			return Vd(t, e, i, n)
		}

		function Vd(t, e, i, n) {
			let r = "";
			for (let t = parseInt(e); t < parseInt(i); t++) r += n.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
			return r
		}

		function Wd(t) {
			let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
			return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
		}

		function Gd(t, e, i, n) {
			const r = t.getContext(),
				s = i.defines;
			let a = i.vertexShader,
				o = i.fragmentShader;
			const l = function (t) {
					let e = "SHADOWMAP_TYPE_BASIC";
					return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
				}(i),
				c = function (t) {
					let e = "ENVMAP_TYPE_CUBE";
					if (t.envMap) switch (t.envMapMode) {
						case Co:
						case Eo:
							e = "ENVMAP_TYPE_CUBE";
							break;
						case Ao:
						case Lo:
							e = "ENVMAP_TYPE_CUBE_UV"
					}
					return e
				}(i),
				h = function (t) {
					let e = "ENVMAP_MODE_REFLECTION";
					if (t.envMap) switch (t.envMapMode) {
						case Eo:
						case Lo:
							e = "ENVMAP_MODE_REFRACTION"
					}
					return e
				}(i),
				u = function (t) {
					let e = "ENVMAP_BLENDING_NONE";
					if (t.envMap) switch (t.combine) {
						case 0:
							e = "ENVMAP_BLENDING_MULTIPLY";
							break;
						case 1:
							e = "ENVMAP_BLENDING_MIX";
							break;
						case 2:
							e = "ENVMAP_BLENDING_ADD"
					}
					return e
				}(i),
				d = t.gammaFactor > 0 ? t.gammaFactor : 1,
				p = i.isWebGL2 ? "" : function (t) {
					return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Pd).join("\n")
				}(i),
				f = function (t) {
					const e = [];
					for (const i in t) {
						const n = t[i];
						!1 !== n && e.push("#define " + i + " " + n)
					}
					return e.join("\n")
				}(s),
				m = r.createProgram();
			let g, v, y = i.glslVersion ? "#version " + i.glslVersion + "\n" : "";
			i.isRawShaderMaterial ? (g = [f].filter(Pd).join("\n"), g.length > 0 && (g += "\n"), v = [p, f].filter(Pd).join("\n"), v.length > 0 && (v += "\n")) : (g = [Wd(i), "#define SHADER_NAME " + i.shaderName, f, i.instancing ? "#define USE_INSTANCING" : "", i.instancingColor ? "#define USE_INSTANCING_COLOR" : "", i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + i.maxBones, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + h : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.useVertexTexture ? "#define BONE_TEXTURE" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Pd).join("\n"), v = [p, Wd(i), "#define SHADER_NAME " + i.shaderName, f, i.alphaTest ? "#define ALPHATEST " + i.alphaTest + (i.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + d, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.matcap ? "#define USE_MATCAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + c : "", i.envMap ? "#define " + h : "", i.envMap ? "#define " + u : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.sheen ? "#define USE_SHEEN" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (i.extensionShaderTextureLOD || i.envMap) && i.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== i.toneMapping ? "#define TONE_MAPPING" : "", 0 !== i.toneMapping ? nu.tonemapping_pars_fragment : "", 0 !== i.toneMapping ? Ld("toneMapping", i.toneMapping) : "", i.dithering ? "#define DITHERING" : "", nu.encodings_pars_fragment, i.map ? Ed("mapTexelToLinear", i.mapEncoding) : "", i.matcap ? Ed("matcapTexelToLinear", i.matcapEncoding) : "", i.envMap ? Ed("envMapTexelToLinear", i.envMapEncoding) : "", i.emissiveMap ? Ed("emissiveMapTexelToLinear", i.emissiveMapEncoding) : "", i.lightMap ? Ed("lightMapTexelToLinear", i.lightMapEncoding) : "", Ad("linearToOutputTexel", i.outputEncoding), i.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(Pd).join("\n")), a = Nd(a), a = Od(a, i), a = Id(a, i), o = Nd(o), o = Od(o, i), o = Id(o, i), a = Bd(a), o = Bd(o), i.isWebGL2 && !0 !== i.isRawShaderMaterial && (y = "#version 300 es\n", g = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, v = ["#define varying in", i.glslVersion === cl ? "" : "out highp vec4 pc_fragColor;", i.glslVersion === cl ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v);
			const x = y + v + o,
				_ = Sd(r, 35633, y + g + a),
				w = Sd(r, 35632, x);
			if (r.attachShader(m, _), r.attachShader(m, w), void 0 !== i.index0AttributeName ? r.bindAttribLocation(m, 0, i.index0AttributeName) : !0 === i.morphTargets && r.bindAttribLocation(m, 0, "position"), r.linkProgram(m), t.debug.checkShaderErrors) {
				const t = r.getProgramInfoLog(m).trim(),
					e = r.getShaderInfoLog(_).trim(),
					i = r.getShaderInfoLog(w).trim();
				let n = !0,
					s = !0;
				if (!1 === r.getProgramParameter(m, 35714)) {
					n = !1;
					Cd(r, _, "vertex"), Cd(r, w, "fragment")
				} else "" !== t || "" !== e && "" !== i || (s = !1);
				s && (this.diagnostics = {
					runnable: n,
					programLog: t,
					vertexShader: {
						log: e,
						prefix: g
					},
					fragmentShader: {
						log: i,
						prefix: v
					}
				})
			}
			let b, M;
			return r.deleteShader(_), r.deleteShader(w), this.getUniforms = function () {
				return void 0 === b && (b = new Md(r, m)), b
			}, this.getAttributes = function () {
				return void 0 === M && (M = function (t, e) {
					const i = {},
						n = t.getProgramParameter(e, 35721);
					for (let r = 0; r < n; r++) {
						const n = t.getActiveAttrib(e, r).name;
						i[n] = t.getAttribLocation(e, n)
					}
					return i
				}(r, m)), M
			}, this.destroy = function () {
				n.releaseStatesOfProgram(this), r.deleteProgram(m), this.program = void 0
			}, this.name = i.shaderName, this.id = Dd++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = _, this.fragmentShader = w, this
		}

		function Hd(t, e, i, n, r, s) {
			const a = [],
				o = n.isWebGL2,
				l = n.logarithmicDepthBuffer,
				c = n.floatVertexTextures,
				h = n.maxVertexUniforms,
				u = n.vertexTextures;
			let d = n.precision;
			const p = {
					MeshDepthMaterial: "depth",
					MeshDistanceMaterial: "distanceRGBA",
					MeshNormalMaterial: "normal",
					MeshBasicMaterial: "basic",
					MeshLambertMaterial: "lambert",
					MeshPhongMaterial: "phong",
					MeshToonMaterial: "toon",
					MeshStandardMaterial: "physical",
					MeshPhysicalMaterial: "physical",
					MeshMatcapMaterial: "matcap",
					LineBasicMaterial: "basic",
					LineDashedMaterial: "dashed",
					PointsMaterial: "points",
					ShadowMaterial: "shadow",
					SpriteMaterial: "sprite"
				},
				f = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];

			function m(t) {
				let e;
				return e = t && t.isTexture ? t.encoding : t && t.isWebGLRenderTarget ? t.texture.encoding : il, e
			}
			return {
				getParameters: function (r, a, f, g, v) {
					const y = g.fog,
						x = r.isMeshStandardMaterial ? g.environment : null,
						_ = e.get(r.envMap || x),
						w = p[r.type],
						b = v.isSkinnedMesh ? function (t) {
							const e = t.skeleton.bones;
							if (c) return 1024; {
								const t = h,
									i = Math.floor((t - 20) / 4),
									n = Math.min(i, e.length);
								return n < e.length ? 0 : n
							}
						}(v) : 0;
					let M, S;
					if (null !== r.precision && (d = n.getMaxPrecision(r.precision), r.precision), w) {
						const t = su[w];
						M = t.vertexShader, S = t.fragmentShader
					} else M = r.vertexShader, S = r.fragmentShader;
					const D = t.getRenderTarget();
					return {
						isWebGL2: o,
						shaderID: w,
						shaderName: r.type,
						vertexShader: M,
						fragmentShader: S,
						defines: r.defines,
						isRawShaderMaterial: !0 === r.isRawShaderMaterial,
						glslVersion: r.glslVersion,
						precision: d,
						instancing: !0 === v.isInstancedMesh,
						instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
						supportsVertexTextures: u,
						outputEncoding: null !== D ? m(D.texture) : t.outputEncoding,
						map: !!r.map,
						mapEncoding: m(r.map),
						matcap: !!r.matcap,
						matcapEncoding: m(r.matcap),
						envMap: !!_,
						envMapMode: _ && _.mapping,
						envMapEncoding: m(_),
						envMapCubeUV: !!_ && (_.mapping === Ao || _.mapping === Lo),
						lightMap: !!r.lightMap,
						lightMapEncoding: m(r.lightMap),
						aoMap: !!r.aoMap,
						emissiveMap: !!r.emissiveMap,
						emissiveMapEncoding: m(r.emissiveMap),
						bumpMap: !!r.bumpMap,
						normalMap: !!r.normalMap,
						objectSpaceNormalMap: 1 === r.normalMapType,
						tangentSpaceNormalMap: 0 === r.normalMapType,
						clearcoatMap: !!r.clearcoatMap,
						clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
						clearcoatNormalMap: !!r.clearcoatNormalMap,
						displacementMap: !!r.displacementMap,
						roughnessMap: !!r.roughnessMap,
						metalnessMap: !!r.metalnessMap,
						specularMap: !!r.specularMap,
						alphaMap: !!r.alphaMap,
						gradientMap: !!r.gradientMap,
						sheen: !!r.sheen,
						transmissionMap: !!r.transmissionMap,
						combine: r.combine,
						vertexTangents: r.normalMap && r.vertexTangents,
						vertexColors: r.vertexColors,
						vertexAlphas: !0 === r.vertexColors && v.geometry.attributes.color && 4 === v.geometry.attributes.color.itemSize,
						vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap),
						uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap),
						fog: !!y,
						useFog: r.fog,
						fogExp2: y && y.isFogExp2,
						flatShading: !!r.flatShading,
						sizeAttenuation: r.sizeAttenuation,
						logarithmicDepthBuffer: l,
						skinning: r.skinning && b > 0,
						maxBones: b,
						useVertexTexture: c,
						morphTargets: r.morphTargets,
						morphNormals: r.morphNormals,
						numDirLights: a.directional.length,
						numPointLights: a.point.length,
						numSpotLights: a.spot.length,
						numRectAreaLights: a.rectArea.length,
						numHemiLights: a.hemi.length,
						numDirLightShadows: a.directionalShadowMap.length,
						numPointLightShadows: a.pointShadowMap.length,
						numSpotLightShadows: a.spotShadowMap.length,
						numClippingPlanes: s.numPlanes,
						numClipIntersection: s.numIntersection,
						dithering: r.dithering,
						shadowMapEnabled: t.shadowMap.enabled && f.length > 0,
						shadowMapType: t.shadowMap.type,
						toneMapping: r.toneMapped ? t.toneMapping : 0,
						physicallyCorrectLights: t.physicallyCorrectLights,
						premultipliedAlpha: r.premultipliedAlpha,
						alphaTest: r.alphaTest,
						doubleSided: 2 === r.side,
						flipSided: 1 === r.side,
						depthPacking: void 0 !== r.depthPacking && r.depthPacking,
						index0AttributeName: r.index0AttributeName,
						extensionDerivatives: r.extensions && r.extensions.derivatives,
						extensionFragDepth: r.extensions && r.extensions.fragDepth,
						extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
						extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
						rendererExtensionFragDepth: o || i.has("EXT_frag_depth"),
						rendererExtensionDrawBuffers: o || i.has("WEBGL_draw_buffers"),
						rendererExtensionShaderTextureLod: o || i.has("EXT_shader_texture_lod"),
						customProgramCacheKey: r.customProgramCacheKey()
					}
				},
				getProgramCacheKey: function (e) {
					const i = [];
					if (e.shaderID ? i.push(e.shaderID) : (i.push(e.fragmentShader), i.push(e.vertexShader)), void 0 !== e.defines)
						for (const t in e.defines) i.push(t), i.push(e.defines[t]);
					if (!1 === e.isRawShaderMaterial) {
						for (let t = 0; t < f.length; t++) i.push(e[f[t]]);
						i.push(t.outputEncoding), i.push(t.gammaFactor)
					}
					return i.push(e.customProgramCacheKey), i.join()
				},
				getUniforms: function (t) {
					const e = p[t.type];
					let i;
					if (e) {
						const t = su[e];
						i = Wh.clone(t.uniforms)
					} else i = t.uniforms;
					return i
				},
				acquireProgram: function (e, i) {
					let n;
					for (let t = 0, e = a.length; t < e; t++) {
						const e = a[t];
						if (e.cacheKey === i) {
							n = e, ++n.usedTimes;
							break
						}
					}
					return void 0 === n && (n = new Gd(t, i, e, r), a.push(n)), n
				},
				releaseProgram: function (t) {
					if (0 == --t.usedTimes) {
						const e = a.indexOf(t);
						a[e] = a[a.length - 1], a.pop(), t.destroy()
					}
				},
				programs: a
			}
		}

		function jd() {
			let t = new WeakMap;
			return {
				get: function (e) {
					let i = t.get(e);
					return void 0 === i && (i = {}, t.set(e, i)), i
				},
				remove: function (e) {
					t.delete(e)
				},
				update: function (e, i, n) {
					t.get(e)[i] = n
				},
				dispose: function () {
					t = new WeakMap
				}
			}
		}

		function qd(t, e) {
			return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
		}

		function Xd(t, e) {
			return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
		}

		function Yd(t) {
			const e = [];
			let i = 0;
			const n = [],
				r = [],
				s = {
					id: -1
				};

			function a(n, r, a, o, l, c) {
				let h = e[i];
				const u = t.get(a);
				return void 0 === h ? (h = {
					id: n.id,
					object: n,
					geometry: r,
					material: a,
					program: u.program || s,
					groupOrder: o,
					renderOrder: n.renderOrder,
					z: l,
					group: c
				}, e[i] = h) : (h.id = n.id, h.object = n, h.geometry = r, h.material = a, h.program = u.program || s, h.groupOrder = o, h.renderOrder = n.renderOrder, h.z = l, h.group = c), i++, h
			}
			return {
				opaque: n,
				transparent: r,
				init: function () {
					i = 0, n.length = 0, r.length = 0
				},
				push: function (t, e, i, s, o, l) {
					const c = a(t, e, i, s, o, l);
					(!0 === i.transparent ? r : n).push(c)
				},
				unshift: function (t, e, i, s, o, l) {
					const c = a(t, e, i, s, o, l);
					(!0 === i.transparent ? r : n).unshift(c)
				},
				finish: function () {
					for (let t = i, n = e.length; t < n; t++) {
						const i = e[t];
						if (null === i.id) break;
						i.id = null, i.object = null, i.geometry = null, i.material = null, i.program = null, i.group = null
					}
				},
				sort: function (t, e) {
					n.length > 1 && n.sort(t || qd), r.length > 1 && r.sort(e || Xd)
				}
			}
		}

		function Zd(t) {
			let e = new WeakMap;
			return {
				get: function (i, n) {
					let r;
					return !1 === e.has(i) ? (r = new Yd(t), e.set(i, [r])) : n >= e.get(i).length ? (r = new Yd(t), e.get(i).push(r)) : r = e.get(i)[n], r
				},
				dispose: function () {
					e = new WeakMap
				}
			}
		}

		function Jd() {
			const t = {};
			return {
				get: function (e) {
					if (void 0 !== t[e.id]) return t[e.id];
					let i;
					switch (e.type) {
						case "DirectionalLight":
							i = {
								direction: new Sl,
								color: new Jc
							};
							break;
						case "SpotLight":
							i = {
								position: new Sl,
								direction: new Sl,
								color: new Jc,
								distance: 0,
								coneCos: 0,
								penumbraCos: 0,
								decay: 0
							};
							break;
						case "PointLight":
							i = {
								position: new Sl,
								color: new Jc,
								distance: 0,
								decay: 0
							};
							break;
						case "HemisphereLight":
							i = {
								direction: new Sl,
								skyColor: new Jc,
								groundColor: new Jc
							};
							break;
						case "RectAreaLight":
							i = {
								color: new Jc,
								position: new Sl,
								halfWidth: new Sl,
								halfHeight: new Sl
							}
					}
					return t[e.id] = i, i
				}
			}
		}
		let $d = 0;

		function Kd(t, e) {
			return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
		}

		function Qd(t, e) {
			const i = new Jd,
				n = function () {
					const t = {};
					return {
						get: function (e) {
							if (void 0 !== t[e.id]) return t[e.id];
							let i;
							switch (e.type) {
								case "DirectionalLight":
								case "SpotLight":
									i = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new fl
									};
									break;
								case "PointLight":
									i = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new fl,
										shadowCameraNear: 1,
										shadowCameraFar: 1e3
									}
							}
							return t[e.id] = i, i
						}
					}
				}(),
				r = {
					version: 0,
					hash: {
						directionalLength: -1,
						pointLength: -1,
						spotLength: -1,
						rectAreaLength: -1,
						hemiLength: -1,
						numDirectionalShadows: -1,
						numPointShadows: -1,
						numSpotShadows: -1
					},
					ambient: [0, 0, 0],
					probe: [],
					directional: [],
					directionalShadow: [],
					directionalShadowMap: [],
					directionalShadowMatrix: [],
					spot: [],
					spotShadow: [],
					spotShadowMap: [],
					spotShadowMatrix: [],
					rectArea: [],
					rectAreaLTC1: null,
					rectAreaLTC2: null,
					point: [],
					pointShadow: [],
					pointShadowMap: [],
					pointShadowMatrix: [],
					hemi: []
				};
			for (let t = 0; t < 9; t++) r.probe.push(new Sl);
			const s = new Sl,
				a = new ec,
				o = new ec;
			return {
				setup: function (s) {
					let a = 0,
						o = 0,
						l = 0;
					for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
					let c = 0,
						h = 0,
						u = 0,
						d = 0,
						p = 0,
						f = 0,
						m = 0,
						g = 0;
					s.sort(Kd);
					for (let t = 0, e = s.length; t < e; t++) {
						const e = s[t],
							v = e.color,
							y = e.intensity,
							x = e.distance,
							_ = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
						if (e.isAmbientLight) a += v.r * y, o += v.g * y, l += v.b * y;
						else if (e.isLightProbe)
							for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], y);
						else if (e.isDirectionalLight) {
							const t = i.get(e);
							if (t.color.copy(e.color).multiplyScalar(e.intensity), e.castShadow) {
								const t = e.shadow,
									i = n.get(e);
								i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, r.directionalShadow[c] = i, r.directionalShadowMap[c] = _, r.directionalShadowMatrix[c] = e.shadow.matrix, f++
							}
							r.directional[c] = t, c++
						} else if (e.isSpotLight) {
							const t = i.get(e);
							if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(v).multiplyScalar(y), t.distance = x, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) {
								const t = e.shadow,
									i = n.get(e);
								i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, r.spotShadow[u] = i, r.spotShadowMap[u] = _, r.spotShadowMatrix[u] = e.shadow.matrix, g++
							}
							r.spot[u] = t, u++
						} else if (e.isRectAreaLight) {
							const t = i.get(e);
							t.color.copy(v).multiplyScalar(y), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[d] = t, d++
						} else if (e.isPointLight) {
							const t = i.get(e);
							if (t.color.copy(e.color).multiplyScalar(e.intensity), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
								const t = e.shadow,
									i = n.get(e);
								i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, i.shadowCameraNear = t.camera.near, i.shadowCameraFar = t.camera.far, r.pointShadow[h] = i, r.pointShadowMap[h] = _, r.pointShadowMatrix[h] = e.shadow.matrix, m++
							}
							r.point[h] = t, h++
						} else if (e.isHemisphereLight) {
							const t = i.get(e);
							t.skyColor.copy(e.color).multiplyScalar(y), t.groundColor.copy(e.groundColor).multiplyScalar(y), r.hemi[p] = t, p++
						}
					}
					d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ru.LTC_FLOAT_1, r.rectAreaLTC2 = ru.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") && (r.rectAreaLTC1 = ru.LTC_HALF_1, r.rectAreaLTC2 = ru.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = l;
					const v = r.hash;
					v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === f && v.numPointShadows === m && v.numSpotShadows === g || (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = h, r.hemi.length = p, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = m, r.spotShadowMatrix.length = g, v.directionalLength = c, v.pointLength = h, v.spotLength = u, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = f, v.numPointShadows = m, v.numSpotShadows = g, r.version = $d++)
				},
				setupView: function (t, e) {
					let i = 0,
						n = 0,
						l = 0,
						c = 0,
						h = 0;
					const u = e.matrixWorldInverse;
					for (let e = 0, d = t.length; e < d; e++) {
						const d = t[e];
						if (d.isDirectionalLight) {
							const t = r.directional[i];
							t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), i++
						} else if (d.isSpotLight) {
							const t = r.spot[l];
							t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), l++
						} else if (d.isRectAreaLight) {
							const t = r.rectArea[c];
							t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), c++
						} else if (d.isPointLight) {
							const t = r.point[n];
							t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), n++
						} else if (d.isHemisphereLight) {
							const t = r.hemi[h];
							t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), t.direction.normalize(), h++
						}
					}
				},
				state: r
			}
		}

		function tp(t, e) {
			const i = new Qd(t, e),
				n = [],
				r = [];
			return {
				init: function () {
					n.length = 0, r.length = 0
				},
				state: {
					lightsArray: n,
					shadowsArray: r,
					lights: i
				},
				setupLights: function () {
					i.setup(n)
				},
				setupLightsView: function (t) {
					i.setupView(n, t)
				},
				pushLight: function (t) {
					n.push(t)
				},
				pushShadow: function (t) {
					r.push(t)
				}
			}
		}

		function ep(t, e) {
			let i = new WeakMap;
			return {
				get: function (n, r = 0) {
					let s;
					return !1 === i.has(n) ? (s = new tp(t, e), i.set(n, [s])) : r >= i.get(n).length ? (s = new tp(t, e), i.get(n).push(s)) : s = i.get(n)[r], s
				},
				dispose: function () {
					i = new WeakMap
				}
			}
		}
		class ip extends Gc {
			constructor(t) {
				super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
			}
		}
		ip.prototype.isMeshDepthMaterial = !0;
		class np extends Gc {
			constructor(t) {
				super(), this.type = "MeshDistanceMaterial", this.referencePosition = new Sl, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
			}
		}
		np.prototype.isMeshDistanceMaterial = !0;

		function rp(t, e, i) {
			let n = new Qh;
			const r = new fl,
				s = new fl,
				a = new wl,
				o = [],
				l = [],
				c = {},
				h = i.maxTextureSize,
				u = {
					0: 1,
					1: 0,
					2: 2
				},
				d = new Gh({
					defines: {
						SAMPLE_RATE: 2 / 8,
						HALF_SAMPLE_RATE: 1 / 8
					},
					uniforms: {
						shadow_pass: {
							value: null
						},
						resolution: {
							value: new fl
						},
						radius: {
							value: 4
						}
					},
					vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
					fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
				}),
				p = d.clone();
			p.defines.HORIZONTAL_PASS = 1;
			const f = new xh;
			f.setAttribute("position", new th(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
			const m = new kh(f, d),
				g = this;

			function v(i, n) {
				const r = e.update(m);
				d.uniforms.shadow_pass.value = i.map.texture, d.uniforms.resolution.value = i.mapSize, d.uniforms.radius.value = i.radius, t.setRenderTarget(i.mapPass), t.clear(), t.renderBufferDirect(n, null, r, d, m, null), p.uniforms.shadow_pass.value = i.mapPass.texture, p.uniforms.resolution.value = i.mapSize, p.uniforms.radius.value = i.radius, t.setRenderTarget(i.map), t.clear(), t.renderBufferDirect(n, null, r, p, m, null)
			}

			function y(t, e, i) {
				const n = t << 0 | e << 1 | i << 2;
				let r = o[n];
				return void 0 === r && (r = new ip({
					depthPacking: 3201,
					morphTargets: t,
					skinning: e
				}), o[n] = r), r
			}

			function x(t, e, i) {
				const n = t << 0 | e << 1 | i << 2;
				let r = l[n];
				return void 0 === r && (r = new np({
					morphTargets: t,
					skinning: e
				}), l[n] = r), r
			}

			function _(e, i, n, r, s, a, o) {
				let l = null,
					h = y,
					d = e.customDepthMaterial;
				if (!0 === r.isPointLight && (h = x, d = e.customDistanceMaterial), void 0 === d) {
					let t = !1;
					!0 === n.morphTargets && (t = i.morphAttributes && i.morphAttributes.position && i.morphAttributes.position.length > 0);
					let r = !1;
					!0 === e.isSkinnedMesh && !0 === n.skinning && (r = !0);
					l = h(t, r, !0 === e.isInstancedMesh)
				} else l = d;
				if (t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
					const t = l.uuid,
						e = n.uuid;
					let i = c[t];
					void 0 === i && (i = {}, c[t] = i);
					let r = i[e];
					void 0 === r && (r = l.clone(), i[e] = r), l = r
				}
				return l.visible = n.visible, l.wireframe = n.wireframe, l.side = 3 === o ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : u[n.side], l.clipShadows = n.clipShadows, l.clippingPlanes = n.clippingPlanes, l.clipIntersection = n.clipIntersection, l.wireframeLinewidth = n.wireframeLinewidth, l.linewidth = n.linewidth, !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), l.nearDistance = s, l.farDistance = a), l
			}

			function w(i, r, s, a, o) {
				if (!1 === i.visible) return;
				if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && (i.castShadow || i.receiveShadow && 3 === o) && (!i.frustumCulled || n.intersectsObject(i))) {
					i.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, i.matrixWorld);
					const n = e.update(i),
						r = i.material;
					if (Array.isArray(r)) {
						const e = n.groups;
						for (let l = 0, c = e.length; l < c; l++) {
							const c = e[l],
								h = r[c.materialIndex];
							if (h && h.visible) {
								const e = _(i, n, h, a, s.near, s.far, o);
								t.renderBufferDirect(s, null, n, e, i, c)
							}
						}
					} else if (r.visible) {
						const e = _(i, n, r, a, s.near, s.far, o);
						t.renderBufferDirect(s, null, n, e, i, null)
					}
				}
				const l = i.children;
				for (let t = 0, e = l.length; t < e; t++) w(l[t], r, s, a, o)
			}
			this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (e, i, o) {
				if (!1 === g.enabled) return;
				if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
				if (0 === e.length) return;
				const l = t.getRenderTarget(),
					c = t.getActiveCubeFace(),
					u = t.getActiveMipmapLevel(),
					d = t.state;
				d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
				for (let l = 0, c = e.length; l < c; l++) {
					const c = e[l],
						u = c.shadow;
					if (void 0 === u) continue;
					if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
					r.copy(u.mapSize);
					const p = u.getFrameExtents();
					if (r.multiply(p), s.copy(u.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / p.x), r.x = s.x * p.x, u.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / p.y), r.y = s.y * p.y, u.mapSize.y = s.y)), null === u.map && !u.isPointLightShadow && 3 === this.type) {
						const t = {
							minFilter: ko,
							magFilter: ko,
							format: qo
						};
						u.map = new bl(r.x, r.y, t), u.map.texture.name = c.name + ".shadowMap", u.mapPass = new bl(r.x, r.y, t), u.camera.updateProjectionMatrix()
					}
					if (null === u.map) {
						const t = {
							minFilter: Fo,
							magFilter: Fo,
							format: qo
						};
						u.map = new bl(r.x, r.y, t), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix()
					}
					t.setRenderTarget(u.map), t.clear();
					const f = u.getViewportCount();
					for (let t = 0; t < f; t++) {
						const e = u.getViewport(t);
						a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), d.viewport(a), u.updateMatrices(c, t), n = u.getFrustum(), w(i, o, u.camera, c, this.type)
					}
					u.isPointLightShadow || 3 !== this.type || v(u, o), u.needsUpdate = !1
				}
				g.needsUpdate = !1, t.setRenderTarget(l, c, u)
			}
		}

		function sp(t, e, i) {
			const n = i.isWebGL2;
			const r = new function () {
					let e = !1;
					const i = new wl;
					let n = null;
					const r = new wl(0, 0, 0, 0);
					return {
						setMask: function (i) {
							n === i || e || (t.colorMask(i, i, i, i), n = i)
						},
						setLocked: function (t) {
							e = t
						},
						setClear: function (e, n, s, a, o) {
							!0 === o && (e *= a, n *= a, s *= a), i.set(e, n, s, a), !1 === r.equals(i) && (t.clearColor(e, n, s, a), r.copy(i))
						},
						reset: function () {
							e = !1, n = null, r.set(-1, 0, 0, 0)
						}
					}
				},
				s = new function () {
					let e = !1,
						i = null,
						n = null,
						r = null;
					return {
						setTest: function (t) {
							t ? N(2929) : z(2929)
						},
						setMask: function (n) {
							i === n || e || (t.depthMask(n), i = n)
						},
						setFunc: function (e) {
							if (n !== e) {
								if (e) switch (e) {
									case 0:
										t.depthFunc(512);
										break;
									case 1:
										t.depthFunc(519);
										break;
									case 2:
										t.depthFunc(513);
										break;
									case 3:
										t.depthFunc(515);
										break;
									case 4:
										t.depthFunc(514);
										break;
									case 5:
										t.depthFunc(518);
										break;
									case 6:
										t.depthFunc(516);
										break;
									case 7:
										t.depthFunc(517);
										break;
									default:
										t.depthFunc(515)
								} else t.depthFunc(515);
								n = e
							}
						},
						setLocked: function (t) {
							e = t
						},
						setClear: function (e) {
							r !== e && (t.clearDepth(e), r = e)
						},
						reset: function () {
							e = !1, i = null, n = null, r = null
						}
					}
				},
				a = new function () {
					let e = !1,
						i = null,
						n = null,
						r = null,
						s = null,
						a = null,
						o = null,
						l = null,
						c = null;
					return {
						setTest: function (t) {
							e || (t ? N(2960) : z(2960))
						},
						setMask: function (n) {
							i === n || e || (t.stencilMask(n), i = n)
						},
						setFunc: function (e, i, a) {
							n === e && r === i && s === a || (t.stencilFunc(e, i, a), n = e, r = i, s = a)
						},
						setOp: function (e, i, n) {
							a === e && o === i && l === n || (t.stencilOp(e, i, n), a = e, o = i, l = n)
						},
						setLocked: function (t) {
							e = t
						},
						setClear: function (e) {
							c !== e && (t.clearStencil(e), c = e)
						},
						reset: function () {
							e = !1, i = null, n = null, r = null, s = null, a = null, o = null, l = null, c = null
						}
					}
				};
			let o = {},
				l = null,
				c = {},
				h = null,
				u = !1,
				d = null,
				p = null,
				f = null,
				m = null,
				g = null,
				v = null,
				y = null,
				x = !1,
				_ = null,
				w = null,
				b = null,
				M = null,
				S = null;
			const D = t.getParameter(35661);
			let T = !1,
				C = 0;
			const E = t.getParameter(7938); - 1 !== E.indexOf("WebGL") ? (C = parseFloat(/^WebGL (\d)/.exec(E)[1]), T = C >= 1) : -1 !== E.indexOf("OpenGL ES") && (C = parseFloat(/^OpenGL ES (\d)/.exec(E)[1]), T = C >= 2);
			let A = null,
				L = {};
			const P = new wl(0, 0, t.canvas.width, t.canvas.height),
				O = new wl(0, 0, t.canvas.width, t.canvas.height);

			function I(e, i, n) {
				const r = new Uint8Array(4),
					s = t.createTexture();
				t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
				for (let e = 0; e < n; e++) t.texImage2D(i + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
				return s
			}
			const F = {};

			function N(e) {
				!0 !== o[e] && (t.enable(e), o[e] = !0)
			}

			function z(e) {
				!1 !== o[e] && (t.disable(e), o[e] = !1)
			}
			F[3553] = I(3553, 3553, 1), F[34067] = I(34067, 34069, 6), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), N(2929), s.setFunc(3), U(!1), V(1), N(2884), B(0);
			const k = {
				[To]: 32774,
				101: 32778,
				102: 32779
			};
			if (n) k[103] = 32775, k[104] = 32776;
			else {
				const t = e.get("EXT_blend_minmax");
				null !== t && (k[103] = t.MIN_EXT, k[104] = t.MAX_EXT)
			}
			const R = {
				200: 0,
				201: 1,
				202: 768,
				204: 770,
				210: 776,
				208: 774,
				206: 772,
				203: 769,
				205: 771,
				209: 775,
				207: 773
			};

			function B(e, i, n, r, s, a, o, l) {
				if (0 !== e) {
					if (!1 === u && (N(3042), u = !0), 5 === e) s = s || i, a = a || n, o = o || r, i === p && s === g || (t.blendEquationSeparate(k[i], k[s]), p = i, g = s), n === f && r === m && a === v && o === y || (t.blendFuncSeparate(R[n], R[r], R[a], R[o]), f = n, m = r, v = a, y = o), d = e, x = null;
					else if (e !== d || l !== x) {
						if (p === To && g === To || (t.blendEquation(32774), p = To, g = To), l) switch (e) {
							case 1:
								t.blendFuncSeparate(1, 771, 1, 771);
								break;
							case 2:
								t.blendFunc(1, 1);
								break;
							case 3:
								t.blendFuncSeparate(0, 0, 769, 771);
								break;
							case 4:
								t.blendFuncSeparate(0, 768, 0, 770)
						} else switch (e) {
							case 1:
								t.blendFuncSeparate(770, 771, 1, 771);
								break;
							case 2:
								t.blendFunc(770, 1);
								break;
							case 3:
								t.blendFunc(0, 769);
								break;
							case 4:
								t.blendFunc(0, 768)
						}
						f = null, m = null, v = null, y = null, d = e, x = l
					}
				} else !0 === u && (z(3042), u = !1)
			}

			function U(e) {
				_ !== e && (e ? t.frontFace(2304) : t.frontFace(2305), _ = e)
			}

			function V(e) {
				0 !== e ? (N(2884), e !== w && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : z(2884), w = e
			}

			function W(e, i, n) {
				e ? (N(32823), M === i && S === n || (t.polygonOffset(i, n), M = i, S = n)) : z(32823)
			}

			function G(e) {
				void 0 === e && (e = 33984 + D - 1), A !== e && (t.activeTexture(e), A = e)
			}
			return {
				buffers: {
					color: r,
					depth: s,
					stencil: a
				},
				enable: N,
				disable: z,
				bindFramebuffer: function (e, i) {
					null === i && null !== l && (i = l), c[e] !== i && (t.bindFramebuffer(e, i), c[e] = i)
				},
				bindXRFramebuffer: function (e) {
					e !== l && (t.bindFramebuffer(36160, e), l = e)
				},
				useProgram: function (e) {
					return h !== e && (t.useProgram(e), h = e, !0)
				},
				setBlending: B,
				setMaterial: function (t, e) {
					2 === t.side ? z(2884) : N(2884);
					let i = 1 === t.side;
					e && (i = !i), U(i), 1 === t.blending && !1 === t.transparent ? B(0) : B(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), r.setMask(t.colorWrite);
					const n = t.stencilWrite;
					a.setTest(n), n && (a.setMask(t.stencilWriteMask), a.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), a.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), W(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? N(32926) : z(32926)
				},
				setFlipSided: U,
				setCullFace: V,
				setLineWidth: function (e) {
					e !== b && (T && t.lineWidth(e), b = e)
				},
				setPolygonOffset: W,
				setScissorTest: function (t) {
					t ? N(3089) : z(3089)
				},
				activeTexture: G,
				bindTexture: function (e, i) {
					null === A && G();
					let n = L[A];
					void 0 === n && (n = {
						type: void 0,
						texture: void 0
					}, L[A] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || F[e]), n.type = e, n.texture = i)
				},
				unbindTexture: function () {
					const e = L[A];
					void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
				},
				compressedTexImage2D: function () {
					try {
						t.compressedTexImage2D.apply(t, arguments)
					} catch (t) {}
				},
				texImage2D: function () {
					try {
						t.texImage2D.apply(t, arguments)
					} catch (t) {}
				},
				texImage3D: function () {
					try {
						t.texImage3D.apply(t, arguments)
					} catch (t) {}
				},
				scissor: function (e) {
					!1 === P.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), P.copy(e))
				},
				viewport: function (e) {
					!1 === O.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), O.copy(e))
				},
				reset: function () {
					t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === n && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), o = {}, A = null, L = {}, l = null, c = {}, h = null, u = !1, d = null, p = null, f = null, m = null, g = null, v = null, y = null, x = !1, _ = null, w = null, b = null, M = null, S = null, P.set(0, 0, t.canvas.width, t.canvas.height), O.set(0, 0, t.canvas.width, t.canvas.height), r.reset(), s.reset(), a.reset()
				}
			}
		}

		function ap(t, e, i, n, r, s, a) {
			const o = r.isWebGL2,
				l = (r.maxTextures, r.maxCubemapSize),
				c = r.maxTextureSize,
				h = r.maxSamples,
				u = new WeakMap;
			let d, p = !1;
			try {
				p = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
			} catch (t) {}

			function f(t, e) {
				return p ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
			}

			function m(t, e, i, n) {
				let r = 1;
				if ((t.width > n || t.height > n) && (r = n / Math.max(t.width, t.height)), r < 1 || !0 === e) {
					if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
						const n = e ? pl.floorPowerOfTwo : Math.floor,
							s = n(r * t.width),
							a = n(r * t.height);
						void 0 === d && (d = f(s, a));
						const o = i ? f(s, a) : d;
						o.width = s, o.height = a;
						return o.getContext("2d").drawImage(t, 0, 0, s, a), o
					}
					return t
				}
				return t
			}

			function g(t) {
				return pl.isPowerOfTwo(t.width) && pl.isPowerOfTwo(t.height)
			}

			function v(t, e) {
				return t.generateMipmaps && e && t.minFilter !== Fo && t.minFilter !== ko
			}

			function y(e, i, r, s) {
				t.generateMipmap(e);
				n.get(i).__maxMipLevel = Math.log2(Math.max(r, s))
			}

			function x(i, n, r) {
				if (!1 === o) return n;
				if (null !== i && void 0 !== t[i]) return t[i];
				let s = n;
				return 6403 === n && (5126 === r && (s = 33326), 5131 === r && (s = 33325), 5121 === r && (s = 33321)), 6407 === n && (5126 === r && (s = 34837), 5131 === r && (s = 34843), 5121 === r && (s = 32849)), 6408 === n && (5126 === r && (s = 34836), 5131 === r && (s = 34842), 5121 === r && (s = 32856)), 33325 !== s && 33326 !== s && 34842 !== s && 34836 !== s || e.get("EXT_color_buffer_float"), s
			}

			function _(t) {
				return t === Fo || t === No || t === zo ? 9728 : 9729
			}

			function w(e) {
				const i = e.target;
				i.removeEventListener("dispose", w),
					function (e) {
						const i = n.get(e);
						if (void 0 === i.__webglInit) return;
						t.deleteTexture(i.__webglTexture), n.remove(e)
					}(i), i.isVideoTexture && u.delete(i), a.memory.textures--
			}

			function b(e) {
				const i = e.target;
				i.removeEventListener("dispose", b),
					function (e) {
						const i = e.texture,
							r = n.get(e),
							s = n.get(i);
						if (!e) return;
						void 0 !== s.__webglTexture && t.deleteTexture(s.__webglTexture);
						e.depthTexture && e.depthTexture.dispose();
						if (e.isWebGLCubeRenderTarget)
							for (let e = 0; e < 6; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
						else t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
						n.remove(i), n.remove(e)
					}(i), a.memory.textures--
			}
			let M = 0;

			function S(t, e) {
				const r = n.get(t);
				if (t.isVideoTexture && function (t) {
						const e = a.render.frame;
						u.get(t) !== e && (u.set(t, e), t.update())
					}(t), t.version > 0 && r.__version !== t.version) {
					const i = t.image;
					if (void 0 === i);
					else if (!1 !== i.complete) return void L(r, t, e)
				}
				i.activeTexture(33984 + e), i.bindTexture(3553, r.__webglTexture)
			}

			function D(e, r) {
				const a = n.get(e);
				e.version > 0 && a.__version !== e.version ? function (e, n, r) {
					if (6 !== n.image.length) return;
					A(e, n), i.activeTexture(33984 + r), i.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment), t.pixelStorei(37443, 0);
					const a = n && (n.isCompressedTexture || n.image[0].isCompressedTexture),
						c = n.image[0] && n.image[0].isDataTexture,
						h = [];
					for (let t = 0; t < 6; t++) h[t] = a || c ? c ? n.image[t].image : n.image[t] : m(n.image[t], !1, !0, l);
					const u = h[0],
						d = g(u) || o,
						p = s.convert(n.format),
						f = s.convert(n.type),
						_ = x(n.internalFormat, p, f);
					let w;
					if (E(34067, n, d), a) {
						for (let t = 0; t < 6; t++) {
							w = h[t].mipmaps;
							for (let e = 0; e < w.length; e++) {
								const r = w[e];
								n.format !== qo && n.format !== jo ? null !== p && i.compressedTexImage2D(34069 + t, e, _, r.width, r.height, 0, r.data) : i.texImage2D(34069 + t, e, _, r.width, r.height, 0, p, f, r.data)
							}
						}
						e.__maxMipLevel = w.length - 1
					} else {
						w = n.mipmaps;
						for (let t = 0; t < 6; t++)
							if (c) {
								i.texImage2D(34069 + t, 0, _, h[t].width, h[t].height, 0, p, f, h[t].data);
								for (let e = 0; e < w.length; e++) {
									const n = w[e].image[t].image;
									i.texImage2D(34069 + t, e + 1, _, n.width, n.height, 0, p, f, n.data)
								}
							} else {
								i.texImage2D(34069 + t, 0, _, p, f, h[t]);
								for (let e = 0; e < w.length; e++) {
									const n = w[e];
									i.texImage2D(34069 + t, e + 1, _, p, f, n.image[t])
								}
							}
						e.__maxMipLevel = w.length
					}
					v(n, d) && y(34067, n, u.width, u.height);
					e.__version = n.version, n.onUpdate && n.onUpdate(n)
				}(a, e, r) : (i.activeTexture(33984 + r), i.bindTexture(34067, a.__webglTexture))
			}
			const T = {
					[Po]: 10497,
					[Oo]: 33071,
					[Io]: 33648
				},
				C = {
					[Fo]: 9728,
					[No]: 9984,
					[zo]: 9986,
					[ko]: 9729,
					1007: 9985,
					[Ro]: 9987
				};

			function E(i, s, a) {
				if (a ? (t.texParameteri(i, 10242, T[s.wrapS]), t.texParameteri(i, 10243, T[s.wrapT]), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, T[s.wrapR]), t.texParameteri(i, 10240, C[s.magFilter]), t.texParameteri(i, 10241, C[s.minFilter])) : (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, 33071), s.wrapS !== Oo || s.wrapT, t.texParameteri(i, 10240, _(s.magFilter)), t.texParameteri(i, 10241, _(s.minFilter)), s.minFilter !== Fo && s.minFilter), !0 === e.has("EXT_texture_filter_anisotropic")) {
					const a = e.get("EXT_texture_filter_anisotropic");
					if (s.type === Wo && !1 === e.has("OES_texture_float_linear")) return;
					if (!1 === o && s.type === Go && !1 === e.has("OES_texture_half_float_linear")) return;
					(s.anisotropy > 1 || n.get(s).__currentAnisotropy) && (t.texParameterf(i, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), n.get(s).__currentAnisotropy = s.anisotropy)
				}
			}

			function A(e, i) {
				void 0 === e.__webglInit && (e.__webglInit = !0, i.addEventListener("dispose", w), e.__webglTexture = t.createTexture(), a.memory.textures++)
			}

			function L(e, n, r) {
				let a = 3553;
				n.isDataTexture2DArray && (a = 35866), n.isDataTexture3D && (a = 32879), A(e, n), i.activeTexture(33984 + r), i.bindTexture(a, e.__webglTexture), t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment), t.pixelStorei(37443, 0);
				const l = function (t) {
						return !o && (t.wrapS !== Oo || t.wrapT !== Oo || t.minFilter !== Fo && t.minFilter !== ko)
					}(n) && !1 === g(n.image),
					h = m(n.image, l, !1, c),
					u = g(h) || o,
					d = s.convert(n.format);
				let p, f = s.convert(n.type),
					_ = x(n.internalFormat, d, f);
				E(a, n, u);
				const w = n.mipmaps;
				if (n.isDepthTexture) _ = 6402, o ? _ = n.type === Wo ? 36012 : n.type === Vo ? 33190 : n.type === Ho ? 35056 : 33189 : n.type, n.format === Xo && 6402 === _ && n.type !== Uo && n.type !== Vo && (n.type = Uo, f = s.convert(n.type)), n.format === Yo && 6402 === _ && (_ = 34041, n.type !== Ho && (n.type = Ho, f = s.convert(n.type))), i.texImage2D(3553, 0, _, h.width, h.height, 0, d, f, null);
				else if (n.isDataTexture)
					if (w.length > 0 && u) {
						for (let t = 0, e = w.length; t < e; t++) p = w[t], i.texImage2D(3553, t, _, p.width, p.height, 0, d, f, p.data);
						n.generateMipmaps = !1, e.__maxMipLevel = w.length - 1
					} else i.texImage2D(3553, 0, _, h.width, h.height, 0, d, f, h.data), e.__maxMipLevel = 0;
				else if (n.isCompressedTexture) {
					for (let t = 0, e = w.length; t < e; t++) p = w[t], n.format !== qo && n.format !== jo ? null !== d && i.compressedTexImage2D(3553, t, _, p.width, p.height, 0, p.data) : i.texImage2D(3553, t, _, p.width, p.height, 0, d, f, p.data);
					e.__maxMipLevel = w.length - 1
				} else if (n.isDataTexture2DArray) i.texImage3D(35866, 0, _, h.width, h.height, h.depth, 0, d, f, h.data), e.__maxMipLevel = 0;
				else if (n.isDataTexture3D) i.texImage3D(32879, 0, _, h.width, h.height, h.depth, 0, d, f, h.data), e.__maxMipLevel = 0;
				else if (w.length > 0 && u) {
					for (let t = 0, e = w.length; t < e; t++) p = w[t], i.texImage2D(3553, t, _, d, f, p);
					n.generateMipmaps = !1, e.__maxMipLevel = w.length - 1
				} else i.texImage2D(3553, 0, _, d, f, h), e.__maxMipLevel = 0;
				v(n, u) && y(a, n, h.width, h.height), e.__version = n.version, n.onUpdate && n.onUpdate(n)
			}

			function P(e, r, a, o) {
				const l = r.texture,
					c = s.convert(l.format),
					h = s.convert(l.type),
					u = x(l.internalFormat, c, h);
				32879 === o || 35866 === o ? i.texImage3D(o, 0, u, r.width, r.height, r.depth, 0, c, h, null) : i.texImage2D(o, 0, u, r.width, r.height, 0, c, h, null), i.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, a, o, n.get(l).__webglTexture, 0), i.bindFramebuffer(36160, null)
			}

			function O(e, i, n) {
				if (t.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer) {
					let r = 33189;
					if (n) {
						const e = i.depthTexture;
						e && e.isDepthTexture && (e.type === Wo ? r = 36012 : e.type === Vo && (r = 33190));
						const n = F(i);
						t.renderbufferStorageMultisample(36161, n, r, i.width, i.height)
					} else t.renderbufferStorage(36161, r, i.width, i.height);
					t.framebufferRenderbuffer(36160, 36096, 36161, e)
				} else if (i.depthBuffer && i.stencilBuffer) {
					if (n) {
						const e = F(i);
						t.renderbufferStorageMultisample(36161, e, 35056, i.width, i.height)
					} else t.renderbufferStorage(36161, 34041, i.width, i.height);
					t.framebufferRenderbuffer(36160, 33306, 36161, e)
				} else {
					const e = i.texture,
						r = s.convert(e.format),
						a = s.convert(e.type),
						o = x(e.internalFormat, r, a);
					if (n) {
						const e = F(i);
						t.renderbufferStorageMultisample(36161, e, o, i.width, i.height)
					} else t.renderbufferStorage(36161, o, i.width, i.height)
				}
				t.bindRenderbuffer(36161, null)
			}

			function I(e) {
				const r = n.get(e),
					s = !0 === e.isWebGLCubeRenderTarget;
				if (e.depthTexture) {
					if (s) throw new Error("target.depthTexture not supported in Cube render targets");
					! function (e, r) {
						if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
						if (i.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
						n.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), S(r.depthTexture, 0);
						const s = n.get(r.depthTexture).__webglTexture;
						if (r.depthTexture.format === Xo) t.framebufferTexture2D(36160, 36096, 3553, s, 0);
						else {
							if (r.depthTexture.format !== Yo) throw new Error("Unknown depthTexture format");
							t.framebufferTexture2D(36160, 33306, 3553, s, 0)
						}
					}(r.__webglFramebuffer, e)
				} else if (s) {
					r.__webglDepthbuffer = [];
					for (let n = 0; n < 6; n++) i.bindFramebuffer(36160, r.__webglFramebuffer[n]), r.__webglDepthbuffer[n] = t.createRenderbuffer(), O(r.__webglDepthbuffer[n], e, !1)
				} else i.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), O(r.__webglDepthbuffer, e, !1);
				i.bindFramebuffer(36160, null)
			}

			function F(t) {
				return o && t.isWebGLMultisampleRenderTarget ? Math.min(h, t.samples) : 0
			}
			let N = !1,
				z = !1;
			this.allocateTextureUnit = function () {
				const t = M;
				return M += 1, t
			}, this.resetTextureUnits = function () {
				M = 0
			}, this.setTexture2D = S, this.setTexture2DArray = function (t, e) {
				const r = n.get(t);
				t.version > 0 && r.__version !== t.version ? L(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(35866, r.__webglTexture))
			}, this.setTexture3D = function (t, e) {
				const r = n.get(t);
				t.version > 0 && r.__version !== t.version ? L(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(32879, r.__webglTexture))
			}, this.setTextureCube = D, this.setupRenderTarget = function (e) {
				const r = e.texture,
					l = n.get(e),
					c = n.get(r);
				e.addEventListener("dispose", b), c.__webglTexture = t.createTexture(), c.__version = r.version, a.memory.textures++;
				const h = !0 === e.isWebGLCubeRenderTarget,
					u = !0 === e.isWebGLMultisampleRenderTarget,
					d = r.isDataTexture3D || r.isDataTexture2DArray,
					p = g(e) || o;
				if (!o || r.format !== jo || r.type !== Wo && r.type !== Go || (r.format = qo), h) {
					l.__webglFramebuffer = [];
					for (let e = 0; e < 6; e++) l.__webglFramebuffer[e] = t.createFramebuffer()
				} else if (l.__webglFramebuffer = t.createFramebuffer(), u && o) {
					l.__webglMultisampledFramebuffer = t.createFramebuffer(), l.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
					const n = s.convert(r.format),
						a = s.convert(r.type),
						o = x(r.internalFormat, n, a),
						c = F(e);
					t.renderbufferStorageMultisample(36161, c, o, e.width, e.height), i.bindFramebuffer(36160, l.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (l.__webglDepthRenderbuffer = t.createRenderbuffer(), O(l.__webglDepthRenderbuffer, e, !0)), i.bindFramebuffer(36160, null)
				}
				if (h) {
					i.bindTexture(34067, c.__webglTexture), E(34067, r, p);
					for (let t = 0; t < 6; t++) P(l.__webglFramebuffer[t], e, 36064, 34069 + t);
					v(r, p) && y(34067, r, e.width, e.height), i.bindTexture(34067, null)
				} else {
					let t = 3553;
					if (d && o) {
						t = r.isDataTexture3D ? 32879 : 35866
					}
					i.bindTexture(t, c.__webglTexture), E(t, r, p), P(l.__webglFramebuffer, e, 36064, t), v(r, p) && y(3553, r, e.width, e.height), i.bindTexture(3553, null)
				}
				e.depthBuffer && I(e)
			}, this.updateRenderTargetMipmap = function (t) {
				const e = t.texture;
				if (v(e, g(t) || o)) {
					const r = t.isWebGLCubeRenderTarget ? 34067 : 3553,
						s = n.get(e).__webglTexture;
					i.bindTexture(r, s), y(r, e, t.width, t.height), i.bindTexture(r, null)
				}
			}, this.updateMultisampleRenderTarget = function (e) {
				if (e.isWebGLMultisampleRenderTarget && o) {
					const r = n.get(e);
					i.bindFramebuffer(36008, r.__webglMultisampledFramebuffer), i.bindFramebuffer(36009, r.__webglFramebuffer);
					const s = e.width,
						a = e.height;
					let o = 16384;
					e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024), t.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728), i.bindFramebuffer(36160, r.__webglMultisampledFramebuffer)
				}
			}, this.safeSetTexture2D = function (t, e) {
				t && t.isWebGLRenderTarget && (!1 === N && (N = !0), t = t.texture), S(t, e)
			}, this.safeSetTextureCube = function (t, e) {
				t && t.isWebGLCubeRenderTarget && (!1 === z && (z = !0), t = t.texture), D(t, e)
			}
		}

		function op(t, e, i) {
			const n = i.isWebGL2;
			return {
				convert: function (t) {
					let i;
					if (t === Bo) return 5121;
					if (1017 === t) return 32819;
					if (1018 === t) return 32820;
					if (1019 === t) return 33635;
					if (1010 === t) return 5120;
					if (1011 === t) return 5122;
					if (t === Uo) return 5123;
					if (1013 === t) return 5124;
					if (t === Vo) return 5125;
					if (t === Wo) return 5126;
					if (t === Go) return n ? 5131 : (i = e.get("OES_texture_half_float"), null !== i ? i.HALF_FLOAT_OES : null);
					if (1021 === t) return 6406;
					if (t === jo) return 6407;
					if (t === qo) return 6408;
					if (1024 === t) return 6409;
					if (1025 === t) return 6410;
					if (t === Xo) return 6402;
					if (t === Yo) return 34041;
					if (1028 === t) return 6403;
					if (1029 === t) return 36244;
					if (1030 === t) return 33319;
					if (1031 === t) return 33320;
					if (1032 === t) return 36248;
					if (1033 === t) return 36249;
					if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
						if (i = e.get("WEBGL_compressed_texture_s3tc"), null === i) return null;
						if (33776 === t) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
						if (33777 === t) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
						if (33778 === t) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
						if (33779 === t) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT
					}
					if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
						if (i = e.get("WEBGL_compressed_texture_pvrtc"), null === i) return null;
						if (35840 === t) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
						if (35841 === t) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
						if (35842 === t) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
						if (35843 === t) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
					}
					if (36196 === t) return i = e.get("WEBGL_compressed_texture_etc1"), null !== i ? i.COMPRESSED_RGB_ETC1_WEBGL : null;
					if ((37492 === t || 37496 === t) && (i = e.get("WEBGL_compressed_texture_etc"), null !== i)) {
						if (37492 === t) return i.COMPRESSED_RGB8_ETC2;
						if (37496 === t) return i.COMPRESSED_RGBA8_ETC2_EAC
					}
					return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (i = e.get("WEBGL_compressed_texture_astc"), null !== i ? t : null) : 36492 === t ? (i = e.get("EXT_texture_compression_bptc"), null !== i ? t : null) : t === Ho ? n ? 34042 : (i = e.get("WEBGL_depth_texture"), null !== i ? i.UNSIGNED_INT_24_8_WEBGL : null) : void 0
				}
			}
		}
		class lp extends jh {
			constructor(t = []) {
				super(), this.cameras = t
			}
		}
		lp.prototype.isArrayCamera = !0;
		class cp extends Tc {
			constructor() {
				super(), this.type = "Group"
			}
		}

		function hp() {
			this._targetRay = null, this._grip = null, this._hand = null
		}

		function up(t, e) {
			const i = this,
				n = t.state;
			let r = null,
				s = 1,
				a = null,
				o = "local-floor",
				l = null;
			const c = [],
				h = new Map,
				u = new jh;
			u.layers.enable(1), u.viewport = new wl;
			const d = new jh;
			d.layers.enable(2), d.viewport = new wl;
			const p = [u, d],
				f = new lp;
			f.layers.enable(1), f.layers.enable(2);
			let m = null,
				g = null;

			function v(t) {
				const e = h.get(t.inputSource);
				e && e.dispatchEvent({
					type: t.type,
					data: t.inputSource
				})
			}

			function y() {
				h.forEach((function (t, e) {
					t.disconnect(e)
				})), h.clear(), m = null, g = null, n.bindXRFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), S.stop(), i.isPresenting = !1, i.dispatchEvent({
					type: "sessionend"
				})
			}

			function x(t) {
				const e = r.inputSources;
				for (let t = 0; t < c.length; t++) h.set(e[t], c[t]);
				for (let e = 0; e < t.removed.length; e++) {
					const i = t.removed[e],
						n = h.get(i);
					n && (n.dispatchEvent({
						type: "disconnected",
						data: i
					}), h.delete(i))
				}
				for (let e = 0; e < t.added.length; e++) {
					const i = t.added[e],
						n = h.get(i);
					n && n.dispatchEvent({
						type: "connected",
						data: i
					})
				}
			}
			this.enabled = !1, this.isPresenting = !1, this.getController = function (t) {
				let e = c[t];
				return void 0 === e && (e = new hp, c[t] = e), e.getTargetRaySpace()
			}, this.getControllerGrip = function (t) {
				let e = c[t];
				return void 0 === e && (e = new hp, c[t] = e), e.getGripSpace()
			}, this.getHand = function (t) {
				let e = c[t];
				return void 0 === e && (e = new hp, c[t] = e), e.getHandSpace()
			}, this.setFramebufferScaleFactor = function (t) {
				s = t, i.isPresenting
			}, this.setReferenceSpaceType = function (t) {
				o = t, i.isPresenting
			}, this.getReferenceSpace = function () {
				return a
			}, this.getSession = function () {
				return r
			}, this.setSession = async function (t) {
				if (r = t, null !== r) {
					r.addEventListener("select", v), r.addEventListener("selectstart", v), r.addEventListener("selectend", v), r.addEventListener("squeeze", v), r.addEventListener("squeezestart", v), r.addEventListener("squeezeend", v), r.addEventListener("end", y), r.addEventListener("inputsourceschange", x);
					const t = e.getContextAttributes();
					!0 !== t.xrCompatible && await e.makeXRCompatible();
					const n = {
							antialias: t.antialias,
							alpha: t.alpha,
							depth: t.depth,
							stencil: t.stencil,
							framebufferScaleFactor: s
						},
						l = new XRWebGLLayer(r, e, n);
					r.updateRenderState({
						baseLayer: l
					}), a = await r.requestReferenceSpace(o), S.setContext(r), S.start(), i.isPresenting = !0, i.dispatchEvent({
						type: "sessionstart"
					})
				}
			};
			const _ = new Sl,
				w = new Sl;

			function b(t, e) {
				null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
			}
			this.getCamera = function (t) {
				f.near = d.near = u.near = t.near, f.far = d.far = u.far = t.far, m === f.near && g === f.far || (r.updateRenderState({
					depthNear: f.near,
					depthFar: f.far
				}), m = f.near, g = f.far);
				const e = t.parent,
					i = f.cameras;
				b(f, e);
				for (let t = 0; t < i.length; t++) b(i[t], e);
				t.matrixWorld.copy(f.matrixWorld), t.matrix.copy(f.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale);
				const n = t.children;
				for (let t = 0, e = n.length; t < e; t++) n[t].updateMatrixWorld(!0);
				return 2 === i.length ? function (t, e, i) {
					_.setFromMatrixPosition(e.matrixWorld), w.setFromMatrixPosition(i.matrixWorld);
					const n = _.distanceTo(w),
						r = e.projectionMatrix.elements,
						s = i.projectionMatrix.elements,
						a = r[14] / (r[10] - 1),
						o = r[14] / (r[10] + 1),
						l = (r[9] + 1) / r[5],
						c = (r[9] - 1) / r[5],
						h = (r[8] - 1) / r[0],
						u = (s[8] + 1) / s[0],
						d = a * h,
						p = a * u,
						f = n / (-h + u),
						m = f * -h;
					e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
					const g = a + f,
						v = o + f,
						y = d - m,
						x = p + (n - m),
						b = l * o / v * g,
						M = c * o / v * g;
					t.projectionMatrix.makePerspective(y, x, b, M, g, v)
				}(f, u, d) : f.projectionMatrix.copy(u.projectionMatrix), f
			};
			let M = null;
			const S = new tu;
			S.setAnimationLoop((function (t, e) {
				if (l = e.getViewerPose(a), null !== l) {
					const t = l.views,
						e = r.renderState.baseLayer;
					n.bindXRFramebuffer(e.framebuffer);
					let i = !1;
					t.length !== f.cameras.length && (f.cameras.length = 0, i = !0);
					for (let n = 0; n < t.length; n++) {
						const r = t[n],
							s = e.getViewport(r),
							a = p[n];
						a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === n && f.matrix.copy(a.matrix), !0 === i && f.cameras.push(a)
					}
				}
				const i = r.inputSources;
				for (let t = 0; t < c.length; t++) {
					const n = c[t],
						r = i[t];
					n.update(r, e, a)
				}
				M && M(t, e)
			})), this.setAnimationLoop = function (t) {
				M = t
			}, this.dispose = function () {}
		}

		function dp(t) {
			function e(e, i) {
				e.opacity.value = i.opacity, i.color && e.diffuse.value.copy(i.color), i.emissive && e.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (e.map.value = i.map), i.alphaMap && (e.alphaMap.value = i.alphaMap), i.specularMap && (e.specularMap.value = i.specularMap);
				const n = t.get(i).envMap;
				if (n) {
					e.envMap.value = n, e.flipEnvMap.value = n.isCubeTexture && n._needsFlipEnvMap ? -1 : 1, e.reflectivity.value = i.reflectivity, e.refractionRatio.value = i.refractionRatio;
					const r = t.get(n).__maxMipLevel;
					void 0 !== r && (e.maxMipLevel.value = r)
				}
				let r, s;
				i.lightMap && (e.lightMap.value = i.lightMap, e.lightMapIntensity.value = i.lightMapIntensity), i.aoMap && (e.aoMap.value = i.aoMap, e.aoMapIntensity.value = i.aoMapIntensity), i.map ? r = i.map : i.specularMap ? r = i.specularMap : i.displacementMap ? r = i.displacementMap : i.normalMap ? r = i.normalMap : i.bumpMap ? r = i.bumpMap : i.roughnessMap ? r = i.roughnessMap : i.metalnessMap ? r = i.metalnessMap : i.alphaMap ? r = i.alphaMap : i.emissiveMap ? r = i.emissiveMap : i.clearcoatMap ? r = i.clearcoatMap : i.clearcoatNormalMap ? r = i.clearcoatNormalMap : i.clearcoatRoughnessMap && (r = i.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)), i.aoMap ? s = i.aoMap : i.lightMap && (s = i.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), e.uv2Transform.value.copy(s.matrix))
			}

			function i(e, i) {
				e.roughness.value = i.roughness, e.metalness.value = i.metalness, i.roughnessMap && (e.roughnessMap.value = i.roughnessMap), i.metalnessMap && (e.metalnessMap.value = i.metalnessMap), i.emissiveMap && (e.emissiveMap.value = i.emissiveMap), i.bumpMap && (e.bumpMap.value = i.bumpMap, e.bumpScale.value = i.bumpScale, 1 === i.side && (e.bumpScale.value *= -1)), i.normalMap && (e.normalMap.value = i.normalMap, e.normalScale.value.copy(i.normalScale), 1 === i.side && e.normalScale.value.negate()), i.displacementMap && (e.displacementMap.value = i.displacementMap, e.displacementScale.value = i.displacementScale, e.displacementBias.value = i.displacementBias);
				t.get(i).envMap && (e.envMapIntensity.value = i.envMapIntensity)
			}
			return {
				refreshFogUniforms: function (t, e) {
					t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
				},
				refreshMaterialUniforms: function (t, n, r, s) {
					n.isMeshBasicMaterial ? e(t, n) : n.isMeshLambertMaterial ? (e(t, n), function (t, e) {
						e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
					}(t, n)) : n.isMeshToonMaterial ? (e(t, n), function (t, e) {
						e.gradientMap && (t.gradientMap.value = e.gradientMap);
						e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
						e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
						e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
						e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
					}(t, n)) : n.isMeshPhongMaterial ? (e(t, n), function (t, e) {
						t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
						e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
						e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
						e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
					}(t, n)) : n.isMeshStandardMaterial ? (e(t, n), n.isMeshPhysicalMaterial ? function (t, e) {
						i(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
						e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
						e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
						e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate());
						t.transmission.value = e.transmission, e.transmissionMap && (t.transmissionMap.value = e.transmissionMap)
					}(t, n) : i(t, n)) : n.isMeshMatcapMaterial ? (e(t, n), function (t, e) {
						e.matcap && (t.matcap.value = e.matcap);
						e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
						e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
						e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
					}(t, n)) : n.isMeshDepthMaterial ? (e(t, n), function (t, e) {
						e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
					}(t, n)) : n.isMeshDistanceMaterial ? (e(t, n), function (t, e) {
						e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
						t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
					}(t, n)) : n.isMeshNormalMaterial ? (e(t, n), function (t, e) {
						e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
						e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
						e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
					}(t, n)) : n.isLineBasicMaterial ? (function (t, e) {
						t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
					}(t, n), n.isLineDashedMaterial && function (t, e) {
						t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
					}(t, n)) : n.isPointsMaterial ? function (t, e, i, n) {
						t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * i, t.scale.value = .5 * n, e.map && (t.map.value = e.map);
						e.alphaMap && (t.alphaMap.value = e.alphaMap);
						let r;
						e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
						void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix))
					}(t, n, r, s) : n.isSpriteMaterial ? function (t, e) {
						t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
						e.alphaMap && (t.alphaMap.value = e.alphaMap);
						let i;
						e.map ? i = e.map : e.alphaMap && (i = e.alphaMap);
						void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
					}(t, n) : n.isShadowMaterial ? (t.color.value.copy(n.color), t.opacity.value = n.opacity) : n.isShaderMaterial && (n.uniformsNeedUpdate = !1)
				}
			}
		}

		function pp(t) {
			const e = void 0 !== (t = t || {}).canvas ? t.canvas : function () {
					const t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
					return t.style.display = "block", t
				}(),
				i = void 0 !== t.context ? t.context : null,
				n = void 0 !== t.alpha && t.alpha,
				r = void 0 === t.depth || t.depth,
				s = void 0 === t.stencil || t.stencil,
				a = void 0 !== t.antialias && t.antialias,
				o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
				l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
				c = void 0 !== t.powerPreference ? t.powerPreference : "default",
				h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
			let u = null,
				d = null;
			const p = [],
				f = [];
			this.domElement = e, this.debug = {
				checkShaderErrors: !0
			}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = il, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
			const m = this;
			let g = !1,
				v = 0,
				y = 0,
				x = null,
				_ = -1,
				w = null;
			const b = new wl,
				M = new wl;
			let S = null,
				D = e.width,
				T = e.height,
				C = 1,
				E = null,
				A = null;
			const L = new wl(0, 0, D, T),
				P = new wl(0, 0, D, T);
			let O = !1;
			const I = new Qh;
			let F = !1,
				N = !1;
			const z = new ec,
				k = new Sl,
				R = {
					background: null,
					fog: null,
					environment: null,
					overrideMaterial: null,
					isScene: !0
				};

			function B() {
				return null === x ? C : 1
			}
			let U, V, W, G, H, j, q, X, Y, Z, J, $, K, Q, tt, et, it, nt, rt, st, at, ot, lt = i;

			function ct(t, i) {
				for (let n = 0; n < t.length; n++) {
					const r = t[n],
						s = e.getContext(r, i);
					if (null !== s) return s
				}
				return null
			}
			try {
				const t = {
					alpha: n,
					depth: r,
					stencil: s,
					antialias: a,
					premultipliedAlpha: o,
					preserveDrawingBuffer: l,
					powerPreference: c,
					failIfMajorPerformanceCaveat: h
				};
				if (e.addEventListener("webglcontextlost", dt, !1), e.addEventListener("webglcontextrestored", pt, !1), null === lt) {
					const e = ["webgl2", "webgl", "experimental-webgl"];
					if (!0 === m.isWebGL1Renderer && e.shift(), lt = ct(e, t), null === lt) throw ct(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
				}
				void 0 === lt.getShaderPrecisionFormat && (lt.getShaderPrecisionFormat = function () {
					return {
						rangeMin: 1,
						rangeMax: 1,
						precision: 1
					}
				})
			} catch (t) {
				throw t
			}

			function ht() {
				U = new du(lt), V = new cu(lt, U, t), U.init(V), at = new op(lt, U, V), W = new sp(lt, U, V), G = new mu(lt), H = new jd, j = new ap(lt, U, W, H, V, at, G), q = new uu(m), X = new eu(lt, V), ot = new ou(lt, U, X, V), Y = new pu(lt, X, G, ot), Z = new xu(lt, Y, X, G), nt = new yu(lt), tt = new hu(H), J = new Hd(m, q, U, V, ot, tt), $ = new dp(H), K = new Zd(H), Q = new ep(U, V), it = new au(m, q, W, Z, o), et = new rp(m, Z, V), rt = new lu(lt, U, G, V), st = new fu(lt, U, G, V), G.programs = J.programs, m.capabilities = V, m.extensions = U, m.properties = H, m.renderLists = K, m.shadowMap = et, m.state = W, m.info = G
			}
			ht();
			const ut = new up(m, lt);

			function dt(t) {
				t.preventDefault(), g = !0
			}

			function pt() {
				g = !1;
				const t = G.autoReset,
					e = et.enabled,
					i = et.autoUpdate,
					n = et.needsUpdate,
					r = et.type;
				ht(), G.autoReset = t, et.enabled = e, et.autoUpdate = i, et.needsUpdate = n, et.type = r
			}

			function ft(t) {
				const e = t.target;
				e.removeEventListener("dispose", ft),
					function (t) {
						(function (t) {
							const e = H.get(t).programs;
							void 0 !== e && e.forEach((function (t) {
								J.releaseProgram(t)
							}))
						})(t), H.remove(t)
					}(e)
			}
			this.xr = ut, this.getContext = function () {
				return lt
			}, this.getContextAttributes = function () {
				return lt.getContextAttributes()
			}, this.forceContextLoss = function () {
				const t = U.get("WEBGL_lose_context");
				t && t.loseContext()
			}, this.forceContextRestore = function () {
				const t = U.get("WEBGL_lose_context");
				t && t.restoreContext()
			}, this.getPixelRatio = function () {
				return C
			}, this.setPixelRatio = function (t) {
				void 0 !== t && (C = t, this.setSize(D, T, !1))
			}, this.getSize = function (t) {
				return void 0 === t && (t = new fl), t.set(D, T)
			}, this.setSize = function (t, i, n) {
				ut.isPresenting || (D = t, T = i, e.width = Math.floor(t * C), e.height = Math.floor(i * C), !1 !== n && (e.style.width = t + "px", e.style.height = i + "px"), this.setViewport(0, 0, t, i))
			}, this.getDrawingBufferSize = function (t) {
				return void 0 === t && (t = new fl), t.set(D * C, T * C).floor()
			}, this.setDrawingBufferSize = function (t, i, n) {
				D = t, T = i, C = n, e.width = Math.floor(t * n), e.height = Math.floor(i * n), this.setViewport(0, 0, t, i)
			}, this.getCurrentViewport = function (t) {
				return void 0 === t && (t = new wl), t.copy(b)
			}, this.getViewport = function (t) {
				return t.copy(L)
			}, this.setViewport = function (t, e, i, n) {
				t.isVector4 ? L.set(t.x, t.y, t.z, t.w) : L.set(t, e, i, n), W.viewport(b.copy(L).multiplyScalar(C).floor())
			}, this.getScissor = function (t) {
				return t.copy(P)
			}, this.setScissor = function (t, e, i, n) {
				t.isVector4 ? P.set(t.x, t.y, t.z, t.w) : P.set(t, e, i, n), W.scissor(M.copy(P).multiplyScalar(C).floor())
			}, this.getScissorTest = function () {
				return O
			}, this.setScissorTest = function (t) {
				W.setScissorTest(O = t)
			}, this.setOpaqueSort = function (t) {
				E = t
			}, this.setTransparentSort = function (t) {
				A = t
			}, this.getClearColor = function (t) {
				return void 0 === t && (t = new Jc), t.copy(it.getClearColor())
			}, this.setClearColor = function () {
				it.setClearColor.apply(it, arguments)
			}, this.getClearAlpha = function () {
				return it.getClearAlpha()
			}, this.setClearAlpha = function () {
				it.setClearAlpha.apply(it, arguments)
			}, this.clear = function (t, e, i) {
				let n = 0;
				(void 0 === t || t) && (n |= 16384), (void 0 === e || e) && (n |= 256), (void 0 === i || i) && (n |= 1024), lt.clear(n)
			}, this.clearColor = function () {
				this.clear(!0, !1, !1)
			}, this.clearDepth = function () {
				this.clear(!1, !0, !1)
			}, this.clearStencil = function () {
				this.clear(!1, !1, !0)
			}, this.dispose = function () {
				e.removeEventListener("webglcontextlost", dt, !1), e.removeEventListener("webglcontextrestored", pt, !1), K.dispose(), Q.dispose(), H.dispose(), q.dispose(), Z.dispose(), ot.dispose(), ut.dispose(), ut.removeEventListener("sessionstart", gt), ut.removeEventListener("sessionend", vt), yt.stop()
			}, this.renderBufferImmediate = function (t, e) {
				ot.initAttributes();
				const i = H.get(t);
				t.hasPositions && !i.position && (i.position = lt.createBuffer()), t.hasNormals && !i.normal && (i.normal = lt.createBuffer()), t.hasUvs && !i.uv && (i.uv = lt.createBuffer()), t.hasColors && !i.color && (i.color = lt.createBuffer());
				const n = e.getAttributes();
				t.hasPositions && (lt.bindBuffer(34962, i.position), lt.bufferData(34962, t.positionArray, 35048), ot.enableAttribute(n.position), lt.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)), t.hasNormals && (lt.bindBuffer(34962, i.normal), lt.bufferData(34962, t.normalArray, 35048), ot.enableAttribute(n.normal), lt.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (lt.bindBuffer(34962, i.uv), lt.bufferData(34962, t.uvArray, 35048), ot.enableAttribute(n.uv), lt.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)), t.hasColors && (lt.bindBuffer(34962, i.color), lt.bufferData(34962, t.colorArray, 35048), ot.enableAttribute(n.color), lt.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)), ot.disableUnusedAttributes(), lt.drawArrays(4, 0, t.count), t.count = 0
			}, this.renderBufferDirect = function (t, e, i, n, r, s) {
				null === e && (e = R);
				const a = r.isMesh && r.matrixWorld.determinant() < 0,
					o = St(t, e, n, r);
				W.setMaterial(n, a);
				let l = i.index;
				const c = i.attributes.position;
				if (null === l) {
					if (void 0 === c || 0 === c.count) return
				} else if (0 === l.count) return;
				let h, u = 1;
				!0 === n.wireframe && (l = Y.getWireframeAttribute(i), u = 2), (n.morphTargets || n.morphNormals) && nt.update(r, i, n, o), ot.setup(r, n, o, i, l);
				let d = rt;
				null !== l && (h = X.get(l), d = st, d.setIndex(h));
				const p = null !== l ? l.count : c.count,
					f = i.drawRange.start * u,
					m = i.drawRange.count * u,
					g = null !== s ? s.start * u : 0,
					v = null !== s ? s.count * u : 1 / 0,
					y = Math.max(f, g),
					x = Math.min(p, f + m, g + v) - 1,
					_ = Math.max(0, x - y + 1);
				if (0 !== _) {
					if (r.isMesh) !0 === n.wireframe ? (W.setLineWidth(n.wireframeLinewidth * B()), d.setMode(1)) : d.setMode(4);
					else if (r.isLine) {
						let t = n.linewidth;
						void 0 === t && (t = 1), W.setLineWidth(t * B()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
					} else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
					if (r.isInstancedMesh) d.renderInstances(y, _, r.count);
					else if (i.isInstancedBufferGeometry) {
						const t = Math.min(i.instanceCount, i._maxInstanceCount);
						d.renderInstances(y, _, t)
					} else d.render(y, _)
				}
			}, this.compile = function (t, e) {
				d = Q.get(t), d.init(), t.traverseVisible((function (t) {
					t.isLight && t.layers.test(e.layers) && (d.pushLight(t), t.castShadow && d.pushShadow(t))
				})), d.setupLights(), t.traverse((function (e) {
					const i = e.material;
					if (i)
						if (Array.isArray(i))
							for (let n = 0; n < i.length; n++) {
								bt(i[n], t, e)
							} else bt(i, t, e)
				}))
			};
			let mt = null;

			function gt() {
				yt.stop()
			}

			function vt() {
				yt.start()
			}
			const yt = new tu;

			function xt(t, e, i, n) {
				if (!1 === t.visible) return;
				if (t.layers.test(e.layers))
					if (t.isGroup) i = t.renderOrder;
					else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
				else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
				else if (t.isSprite) {
					if (!t.frustumCulled || I.intersectsSprite(t)) {
						n && k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(z);
						const e = Z.update(t),
							r = t.material;
						r.visible && u.push(t, e, r, i, k.z, null)
					}
				} else if (t.isImmediateRenderObject) n && k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(z), u.push(t, null, t.material, i, k.z, null);
				else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== G.render.frame && (t.skeleton.update(), t.skeleton.frame = G.render.frame), !t.frustumCulled || I.intersectsObject(t))) {
					n && k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(z);
					const e = Z.update(t),
						r = t.material;
					if (Array.isArray(r)) {
						const n = e.groups;
						for (let s = 0, a = n.length; s < a; s++) {
							const a = n[s],
								o = r[a.materialIndex];
							o && o.visible && u.push(t, e, o, i, k.z, a)
						}
					} else r.visible && u.push(t, e, r, i, k.z, null)
				}
				const r = t.children;
				for (let t = 0, s = r.length; t < s; t++) xt(r[t], e, i, n)
			}

			function _t(t, e, i) {
				const n = !0 === e.isScene ? e.overrideMaterial : null;
				for (let r = 0, s = t.length; r < s; r++) {
					const s = t[r],
						a = s.object,
						o = s.geometry,
						l = null === n ? s.material : n,
						c = s.group;
					if (i.isArrayCamera) {
						const t = i.cameras;
						for (let i = 0, n = t.length; i < n; i++) {
							const n = t[i];
							a.layers.test(n.layers) && (W.viewport(b.copy(n.viewport)), d.setupLightsView(n), wt(a, e, n, o, l, c))
						}
					} else wt(a, e, i, o, l, c)
				}
			}

			function wt(t, e, i, n, r, s) {
				if (t.onBeforeRender(m, e, i, n, r, s), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
					const n = St(i, e, r, t);
					W.setMaterial(r), ot.reset(),
						function (t, e) {
							t.render((function (t) {
								m.renderBufferImmediate(t, e)
							}))
						}(t, n)
				} else m.renderBufferDirect(i, e, n, r, t, s);
				t.onAfterRender(m, e, i, n, r, s)
			}

			function bt(t, e, i) {
				!0 !== e.isScene && (e = R);
				const n = H.get(t),
					r = d.state.lights,
					s = d.state.shadowsArray,
					a = r.state.version,
					o = J.getParameters(t, r.state, s, e, i),
					l = J.getProgramCacheKey(o);
				let c = n.programs;
				n.environment = t.isMeshStandardMaterial ? e.environment : null, n.fog = e.fog, n.envMap = q.get(t.envMap || n.environment), void 0 === c && (t.addEventListener("dispose", ft), c = new Map, n.programs = c);
				let h = c.get(l);
				if (void 0 !== h) {
					if (n.currentProgram === h && n.lightsStateVersion === a) return Mt(t, o), h
				} else o.uniforms = J.getUniforms(t), t.onBeforeCompile(o, m), h = J.acquireProgram(o, l), c.set(l, h), n.uniforms = o.uniforms;
				const u = n.uniforms;
				(t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = tt.uniform), Mt(t, o), n.needsLights = function (t) {
					return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
				}(t), n.lightsStateVersion = a, n.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
				const p = h.getUniforms(),
					f = Md.seqWithValue(p.seq, u);
				return n.currentProgram = h, n.uniformsList = f, h
			}

			function Mt(t, e) {
				const i = H.get(t);
				i.outputEncoding = e.outputEncoding, i.instancing = e.instancing, i.numClippingPlanes = e.numClippingPlanes, i.numIntersection = e.numClipIntersection, i.vertexAlphas = e.vertexAlphas
			}

			function St(t, e, i, n) {
				!0 !== e.isScene && (e = R), j.resetTextureUnits();
				const r = e.fog,
					s = i.isMeshStandardMaterial ? e.environment : null,
					a = null === x ? m.outputEncoding : x.texture.encoding,
					o = q.get(i.envMap || s),
					l = !0 === i.vertexColors && n.geometry.attributes.color && 4 === n.geometry.attributes.color.itemSize,
					c = H.get(i),
					h = d.state.lights;
				if (!0 === F && (!0 === N || t !== w)) {
					const e = t === w && i.id === _;
					tt.setState(i, t, e)
				}
				let u = !1;
				i.version === c.__version ? c.needsLights && c.lightsStateVersion !== h.state.version || c.outputEncoding !== a || n.isInstancedMesh && !1 === c.instancing ? u = !0 : n.isInstancedMesh || !0 !== c.instancing ? c.envMap !== o || i.fog && c.fog !== r ? u = !0 : void 0 === c.numClippingPlanes || c.numClippingPlanes === tt.numPlanes && c.numIntersection === tt.numIntersection ? c.vertexAlphas !== l && (u = !0) : u = !0 : u = !0 : (u = !0, c.__version = i.version);
				let p = c.currentProgram;
				!0 === u && (p = bt(i, e, n));
				let f = !1,
					g = !1,
					v = !1;
				const y = p.getUniforms(),
					b = c.uniforms;
				if (W.useProgram(p.program) && (f = !0, g = !0, v = !0), i.id !== _ && (_ = i.id, g = !0), f || w !== t) {
					if (y.setValue(lt, "projectionMatrix", t.projectionMatrix), V.logarithmicDepthBuffer && y.setValue(lt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), w !== t && (w = t, g = !0, v = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
						const e = y.map.cameraPosition;
						void 0 !== e && e.setValue(lt, k.setFromMatrixPosition(t.matrixWorld))
					}(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && y.setValue(lt, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || i.skinning) && y.setValue(lt, "viewMatrix", t.matrixWorldInverse)
				}
				if (i.skinning) {
					y.setOptional(lt, n, "bindMatrix"), y.setOptional(lt, n, "bindMatrixInverse");
					const t = n.skeleton;
					if (t) {
						const e = t.bones;
						if (V.floatVertexTextures) {
							if (null === t.boneTexture) {
								let i = Math.sqrt(4 * e.length);
								i = pl.ceilPowerOfTwo(i), i = Math.max(i, 4);
								const n = new Float32Array(i * i * 4);
								n.set(t.boneMatrices);
								const r = new Jh(n, i, i, qo, Wo);
								t.boneMatrices = n, t.boneTexture = r, t.boneTextureSize = i
							}
							y.setValue(lt, "boneTexture", t.boneTexture, j), y.setValue(lt, "boneTextureSize", t.boneTextureSize)
						} else y.setOptional(lt, t, "boneMatrices")
					}
				}
				return (g || c.receiveShadow !== n.receiveShadow) && (c.receiveShadow = n.receiveShadow, y.setValue(lt, "receiveShadow", n.receiveShadow)), g && (y.setValue(lt, "toneMappingExposure", m.toneMappingExposure), c.needsLights && function (t, e) {
					t.ambientLightColor.needsUpdate = e, t.lightProbe.needsUpdate = e, t.directionalLights.needsUpdate = e, t.directionalLightShadows.needsUpdate = e, t.pointLights.needsUpdate = e, t.pointLightShadows.needsUpdate = e, t.spotLights.needsUpdate = e, t.spotLightShadows.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
				}(b, v), r && i.fog && $.refreshFogUniforms(b, r), $.refreshMaterialUniforms(b, i, C, T), Md.upload(lt, c.uniformsList, b, j)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (Md.upload(lt, c.uniformsList, b, j), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && y.setValue(lt, "center", n.center), y.setValue(lt, "modelViewMatrix", n.modelViewMatrix), y.setValue(lt, "normalMatrix", n.normalMatrix), y.setValue(lt, "modelMatrix", n.matrixWorld), p
			}
			yt.setAnimationLoop((function (t) {
				mt && mt(t)
			})), "undefined" != typeof window && yt.setContext(window), this.setAnimationLoop = function (t) {
				mt = t, ut.setAnimationLoop(t), null === t ? yt.stop() : yt.start()
			}, ut.addEventListener("sessionstart", gt), ut.addEventListener("sessionend", vt), this.render = function (t, e) {
				let i, n;
				if (void 0 !== arguments[2] && (i = arguments[2]), void 0 !== arguments[3] && (n = arguments[3]), void 0 !== e && !0 !== e.isCamera) return;
				if (!0 === g) return;
				!0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === ut.enabled && !0 === ut.isPresenting && (e = ut.getCamera(e)), !0 === t.isScene && t.onBeforeRender(m, t, e, i || x), d = Q.get(t, f.length), d.init(), f.push(d), z.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), I.setFromProjectionMatrix(z), N = this.localClippingEnabled, F = tt.init(this.clippingPlanes, N, e), u = K.get(t, p.length), u.init(), p.push(u), xt(t, e, 0, m.sortObjects), u.finish(), !0 === m.sortObjects && u.sort(E, A), !0 === F && tt.beginShadows();
				const r = d.state.shadowsArray;
				et.render(r, t, e), d.setupLights(), d.setupLightsView(e), !0 === F && tt.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== i && this.setRenderTarget(i), it.render(u, t, e, n);
				const s = u.opaque,
					a = u.transparent;
				s.length > 0 && _t(s, t, e), a.length > 0 && _t(a, t, e), null !== x && (j.updateRenderTargetMipmap(x), j.updateMultisampleRenderTarget(x)), !0 === t.isScene && t.onAfterRender(m, t, e), W.buffers.depth.setTest(!0), W.buffers.depth.setMask(!0), W.buffers.color.setMask(!0), W.setPolygonOffset(!1), ot.resetDefaultState(), _ = -1, w = null, f.pop(), d = f.length > 0 ? f[f.length - 1] : null, p.pop(), u = p.length > 0 ? p[p.length - 1] : null
			}, this.getActiveCubeFace = function () {
				return v
			}, this.getActiveMipmapLevel = function () {
				return y
			}, this.getRenderTarget = function () {
				return x
			}, this.setRenderTarget = function (t, e = 0, i = 0) {
				x = t, v = e, y = i, t && void 0 === H.get(t).__webglFramebuffer && j.setupRenderTarget(t);
				let n = null,
					r = !1,
					s = !1;
				if (t) {
					const i = t.texture;
					(i.isDataTexture3D || i.isDataTexture2DArray) && (s = !0);
					const a = H.get(t).__webglFramebuffer;
					t.isWebGLCubeRenderTarget ? (n = a[e], r = !0) : n = t.isWebGLMultisampleRenderTarget ? H.get(t).__webglMultisampledFramebuffer : a, b.copy(t.viewport), M.copy(t.scissor), S = t.scissorTest
				} else b.copy(L).multiplyScalar(C).floor(), M.copy(P).multiplyScalar(C).floor(), S = O;
				if (W.bindFramebuffer(36160, n), W.viewport(b), W.scissor(M), W.setScissorTest(S), r) {
					const n = H.get(t.texture);
					lt.framebufferTexture2D(36160, 36064, 34069 + e, n.__webglTexture, i)
				} else if (s) {
					const n = H.get(t.texture),
						r = e || 0;
					lt.framebufferTextureLayer(36160, 36064, n.__webglTexture, i || 0, r)
				}
			}, this.readRenderTargetPixels = function (t, e, i, n, r, s, a) {
				if (!t || !t.isWebGLRenderTarget) return;
				let o = H.get(t).__webglFramebuffer;
				if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
					W.bindFramebuffer(36160, o);
					try {
						const a = t.texture,
							o = a.format,
							l = a.type;
						if (o !== qo && at.convert(o) !== lt.getParameter(35739)) return;
						const c = l === Go && (U.has("EXT_color_buffer_half_float") || V.isWebGL2 && U.has("EXT_color_buffer_float"));
						if (!(l === Bo || at.convert(l) === lt.getParameter(35738) || l === Wo && (V.isWebGL2 || U.has("OES_texture_float") || U.has("WEBGL_color_buffer_float")) || c)) return;
						36053 === lt.checkFramebufferStatus(36160) && e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && lt.readPixels(e, i, n, r, at.convert(o), at.convert(l), s)
					} finally {
						const t = null !== x ? H.get(x).__webglFramebuffer : null;
						W.bindFramebuffer(36160, t)
					}
				}
			}, this.copyFramebufferToTexture = function (t, e, i = 0) {
				const n = Math.pow(2, -i),
					r = Math.floor(e.image.width * n),
					s = Math.floor(e.image.height * n),
					a = at.convert(e.format);
				j.setTexture2D(e, 0), lt.copyTexImage2D(3553, i, a, t.x, t.y, r, s, 0), W.unbindTexture()
			}, this.copyTextureToTexture = function (t, e, i, n = 0) {
				const r = e.image.width,
					s = e.image.height,
					a = at.convert(i.format),
					o = at.convert(i.type);
				j.setTexture2D(i, 0), lt.pixelStorei(37440, i.flipY), lt.pixelStorei(37441, i.premultiplyAlpha), lt.pixelStorei(3317, i.unpackAlignment), e.isDataTexture ? lt.texSubImage2D(3553, n, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? lt.compressedTexSubImage2D(3553, n, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : lt.texSubImage2D(3553, n, t.x, t.y, a, o, e.image), 0 === n && i.generateMipmaps && lt.generateMipmap(3553), W.unbindTexture()
			}, this.copyTextureToTexture3D = function (t, e, i, n, r = 0) {
				if (m.isWebGL1Renderer) return;
				const {
					width: s,
					height: a,
					data: o
				} = i.image, l = at.convert(n.format), c = at.convert(n.type);
				let h;
				if (n.isDataTexture3D) j.setTexture3D(n, 0), h = 32879;
				else {
					if (!n.isDataTexture2DArray) return;
					j.setTexture2DArray(n, 0), h = 35866
				}
				lt.pixelStorei(37440, n.flipY), lt.pixelStorei(37441, n.premultiplyAlpha), lt.pixelStorei(3317, n.unpackAlignment);
				const u = lt.getParameter(3314),
					d = lt.getParameter(32878),
					p = lt.getParameter(3316),
					f = lt.getParameter(3315),
					g = lt.getParameter(32877);
				lt.pixelStorei(3314, s), lt.pixelStorei(32878, a), lt.pixelStorei(3316, t.min.x), lt.pixelStorei(3315, t.min.y), lt.pixelStorei(32877, t.min.z), lt.texSubImage3D(h, r, e.x, e.y, e.z, t.max.x - t.min.x + 1, t.max.y - t.min.y + 1, t.max.z - t.min.z + 1, l, c, o), lt.pixelStorei(3314, u), lt.pixelStorei(32878, d), lt.pixelStorei(3316, p), lt.pixelStorei(3315, f), lt.pixelStorei(32877, g), 0 === r && n.generateMipmaps && lt.generateMipmap(h), W.unbindTexture()
			}, this.initTexture = function (t) {
				j.setTexture2D(t, 0), W.unbindTexture()
			}, this.resetState = function () {
				v = 0, y = 0, x = null, W.reset(), ot.reset()
			}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
				detail: this
			}))
		}
		cp.prototype.isGroup = !0, Object.assign(hp.prototype, {
			constructor: hp,
			getHandSpace: function () {
				return null === this._hand && (this._hand = new cp, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
					pinching: !1
				}), this._hand
			},
			getTargetRaySpace: function () {
				return null === this._targetRay && (this._targetRay = new cp, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay
			},
			getGripSpace: function () {
				return null === this._grip && (this._grip = new cp, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip
			},
			dispatchEvent: function (t) {
				return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
			},
			disconnect: function (t) {
				return this.dispatchEvent({
					type: "disconnected",
					data: t
				}), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
			},
			update: function (t, e, i) {
				let n = null,
					r = null,
					s = null;
				const a = this._targetRay,
					o = this._grip,
					l = this._hand;
				if (t && "visible-blurred" !== e.session.visibilityState)
					if (null !== a && (n = e.getPose(t.targetRaySpace, i), null !== n && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale))), l && t.hand) {
						s = !0;
						for (const n of t.hand.values()) {
							const t = e.getJointPose(n, i);
							if (void 0 === l.joints[n.jointName]) {
								const t = new cp;
								t.matrixAutoUpdate = !1, t.visible = !1, l.joints[n.jointName] = t, l.add(t)
							}
							const r = l.joints[n.jointName];
							null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t
						}
						const n = l.joints["index-finger-tip"],
							r = l.joints["thumb-tip"],
							a = n.position.distanceTo(r.position),
							o = .02,
							c = .005;
						l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
							type: "pinchend",
							handedness: t.handedness,
							target: this
						})) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
							type: "pinchstart",
							handedness: t.handedness,
							target: this
						}))
					} else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, i), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale)));
				return null !== a && (a.visible = null !== n), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this
			}
		}), Object.assign(up.prototype, hl.prototype);
		(class extends pp {}).prototype.isWebGL1Renderer = !0;
		class fp {
			constructor(t, e = 25e-5) {
				this.name = "", this.color = new Jc(t), this.density = e
			}
			clone() {
				return new fp(this.color, this.density)
			}
			toJSON() {
				return {
					type: "FogExp2",
					color: this.color.getHex(),
					density: this.density
				}
			}
		}
		fp.prototype.isFogExp2 = !0;
		class mp {
			constructor(t, e = 1, i = 1e3) {
				this.name = "", this.color = new Jc(t), this.near = e, this.far = i
			}
			clone() {
				return new mp(this.color, this.near, this.far)
			}
			toJSON() {
				return {
					type: "Fog",
					color: this.color.getHex(),
					near: this.near,
					far: this.far
				}
			}
		}
		mp.prototype.isFog = !0;
		class gp extends Tc {
			constructor() {
				super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
					detail: this
				}))
			}
			copy(t, e) {
				return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
			}
		}

		function vp(t, e) {
			this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = ol, this.updateRange = {
				offset: 0,
				count: -1
			}, this.version = 0, this.uuid = pl.generateUUID()
		}
		gp.prototype.isScene = !0, Object.defineProperty(vp.prototype, "needsUpdate", {
			set: function (t) {
				!0 === t && this.version++
			}
		}), Object.assign(vp.prototype, {
			isInterleavedBuffer: !0,
			onUploadCallback: function () {},
			setUsage: function (t) {
				return this.usage = t, this
			},
			copy: function (t) {
				return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
			},
			copyAt: function (t, e, i) {
				t *= this.stride, i *= e.stride;
				for (let n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
				return this
			},
			set: function (t, e = 0) {
				return this.array.set(t, e), this
			},
			clone: function (t) {
				void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = pl.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
				const e = new vp(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), this.stride);
				return e.setUsage(this.usage), e
			},
			onUpload: function (t) {
				return this.onUploadCallback = t, this
			},
			toJSON: function (t) {
				return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = pl.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
					uuid: this.uuid,
					buffer: this.array.buffer._uuid,
					type: this.array.constructor.name,
					stride: this.stride
				}
			}
		});
		const yp = new Sl;

		function xp(t, e, i, n) {
			this.name = "", this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
		}
		Object.defineProperties(xp.prototype, {
			count: {
				get: function () {
					return this.data.count
				}
			},
			array: {
				get: function () {
					return this.data.array
				}
			},
			needsUpdate: {
				set: function (t) {
					this.data.needsUpdate = t
				}
			}
		}), Object.assign(xp.prototype, {
			isInterleavedBufferAttribute: !0,
			applyMatrix4: function (t) {
				for (let e = 0, i = this.data.count; e < i; e++) yp.x = this.getX(e), yp.y = this.getY(e), yp.z = this.getZ(e), yp.applyMatrix4(t), this.setXYZ(e, yp.x, yp.y, yp.z);
				return this
			},
			applyNormalMatrix: function (t) {
				for (let e = 0, i = this.count; e < i; e++) yp.x = this.getX(e), yp.y = this.getY(e), yp.z = this.getZ(e), yp.applyNormalMatrix(t), this.setXYZ(e, yp.x, yp.y, yp.z);
				return this
			},
			transformDirection: function (t) {
				for (let e = 0, i = this.count; e < i; e++) yp.x = this.getX(e), yp.y = this.getY(e), yp.z = this.getZ(e), yp.transformDirection(t), this.setXYZ(e, yp.x, yp.y, yp.z);
				return this
			},
			setX: function (t, e) {
				return this.data.array[t * this.data.stride + this.offset] = e, this
			},
			setY: function (t, e) {
				return this.data.array[t * this.data.stride + this.offset + 1] = e, this
			},
			setZ: function (t, e) {
				return this.data.array[t * this.data.stride + this.offset + 2] = e, this
			},
			setW: function (t, e) {
				return this.data.array[t * this.data.stride + this.offset + 3] = e, this
			},
			getX: function (t) {
				return this.data.array[t * this.data.stride + this.offset]
			},
			getY: function (t) {
				return this.data.array[t * this.data.stride + this.offset + 1]
			},
			getZ: function (t) {
				return this.data.array[t * this.data.stride + this.offset + 2]
			},
			getW: function (t) {
				return this.data.array[t * this.data.stride + this.offset + 3]
			},
			setXY: function (t, e, i) {
				return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
			},
			setXYZ: function (t, e, i, n) {
				return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
			},
			setXYZW: function (t, e, i, n, r) {
				return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
			},
			clone: function (t) {
				if (void 0 === t) {
					const t = [];
					for (let e = 0; e < this.count; e++) {
						const i = e * this.data.stride + this.offset;
						for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[i + e])
					}
					return new th(new this.array.constructor(t), this.itemSize, this.normalized)
				}
				return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new xp(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
			},
			toJSON: function (t) {
				if (void 0 === t) {
					const t = [];
					for (let e = 0; e < this.count; e++) {
						const i = e * this.data.stride + this.offset;
						for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[i + e])
					}
					return {
						itemSize: this.itemSize,
						type: this.array.constructor.name,
						array: t,
						normalized: this.normalized
					}
				}
				return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
					isInterleavedBufferAttribute: !0,
					itemSize: this.itemSize,
					data: this.data.uuid,
					offset: this.offset,
					normalized: this.normalized
				}
			}
		});
		class _p extends Gc {
			constructor(t) {
				super(), this.type = "SpriteMaterial", this.color = new Jc(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
			}
		}
		let wp;
		_p.prototype.isSpriteMaterial = !0;
		const bp = new Sl,
			Mp = new Sl,
			Sp = new Sl,
			Dp = new fl,
			Tp = new fl,
			Cp = new ec,
			Ep = new Sl,
			Ap = new Sl,
			Lp = new Sl,
			Pp = new fl,
			Op = new fl,
			Ip = new fl;
		class Fp extends Tc {
			constructor(t) {
				if (super(), this.type = "Sprite", void 0 === wp) {
					wp = new xh;
					const t = new vp(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
					wp.setIndex([0, 1, 2, 0, 2, 3]), wp.setAttribute("position", new xp(t, 3, 0, !1)), wp.setAttribute("uv", new xp(t, 2, 3, !1))
				}
				this.geometry = wp, this.material = void 0 !== t ? t : new _p, this.center = new fl(.5, .5)
			}
			raycast(t, e) {
				t.camera, Mp.setFromMatrixScale(this.matrixWorld), Cp.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Sp.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Mp.multiplyScalar(-Sp.z);
				const i = this.material.rotation;
				let n, r;
				0 !== i && (r = Math.cos(i), n = Math.sin(i));
				const s = this.center;
				Np(Ep.set(-.5, -.5, 0), Sp, s, Mp, n, r), Np(Ap.set(.5, -.5, 0), Sp, s, Mp, n, r), Np(Lp.set(.5, .5, 0), Sp, s, Mp, n, r), Pp.set(0, 0), Op.set(1, 0), Ip.set(1, 1);
				let a = t.ray.intersectTriangle(Ep, Ap, Lp, !1, bp);
				if (null === a && (Np(Ap.set(-.5, .5, 0), Sp, s, Mp, n, r), Op.set(0, 1), a = t.ray.intersectTriangle(Ep, Lp, Ap, !1, bp), null === a)) return;
				const o = t.ray.origin.distanceTo(bp);
				o < t.near || o > t.far || e.push({
					distance: o,
					point: bp.clone(),
					uv: Vc.getUV(bp, Ep, Ap, Lp, Pp, Op, Ip, new fl),
					face: null,
					object: this
				})
			}
			copy(t) {
				return super.copy(t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this
			}
		}

		function Np(t, e, i, n, r, s) {
			Dp.subVectors(t, i).addScalar(.5).multiply(n), void 0 !== r ? (Tp.x = s * Dp.x - r * Dp.y, Tp.y = r * Dp.x + s * Dp.y) : Tp.copy(Dp), t.copy(e), t.x += Tp.x, t.y += Tp.y, t.applyMatrix4(Cp)
		}
		Fp.prototype.isSprite = !0;
		const zp = new Sl,
			kp = new wl,
			Rp = new wl,
			Bp = new Sl,
			Up = new ec;

		function Vp(t, e) {
			kh.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ec, this.bindMatrixInverse = new ec
		}

		function Wp() {
			Tc.call(this), this.type = "Bone"
		}
		Vp.prototype = Object.assign(Object.create(kh.prototype), {
			constructor: Vp,
			isSkinnedMesh: !0,
			copy: function (t) {
				return kh.prototype.copy.call(this, t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this
			},
			bind: function (t, e) {
				this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert()
			},
			pose: function () {
				this.skeleton.pose()
			},
			normalizeSkinWeights: function () {
				const t = new wl,
					e = this.geometry.attributes.skinWeight;
				for (let i = 0, n = e.count; i < n; i++) {
					t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.w = e.getW(i);
					const n = 1 / t.manhattanLength();
					n !== 1 / 0 ? t.multiplyScalar(n) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w)
				}
			},
			updateMatrixWorld: function (t) {
				kh.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode && this.bindMatrixInverse.copy(this.bindMatrix).invert()
			},
			boneTransform: function (t, e) {
				const i = this.skeleton,
					n = this.geometry;
				kp.fromBufferAttribute(n.attributes.skinIndex, t), Rp.fromBufferAttribute(n.attributes.skinWeight, t), zp.fromBufferAttribute(n.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
				for (let t = 0; t < 4; t++) {
					const n = Rp.getComponent(t);
					if (0 !== n) {
						const r = kp.getComponent(t);
						Up.multiplyMatrices(i.bones[r].matrixWorld, i.boneInverses[r]), e.addScaledVector(Bp.copy(zp).applyMatrix4(Up), n)
					}
				}
				return e.applyMatrix4(this.bindMatrixInverse)
			}
		}), Wp.prototype = Object.assign(Object.create(Tc.prototype), {
			constructor: Wp,
			isBone: !0
		});
		const Gp = new ec,
			Hp = new ec,
			jp = [],
			qp = new kh;

		function Xp(t, e, i) {
			kh.call(this, t, e), this.instanceMatrix = new th(new Float32Array(16 * i), 16), this.instanceColor = null, this.count = i, this.frustumCulled = !1
		}
		Xp.prototype = Object.assign(Object.create(kh.prototype), {
			constructor: Xp,
			isInstancedMesh: !0,
			copy: function (t) {
				return kh.prototype.copy.call(this, t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this
			},
			getColorAt: function (t, e) {
				e.fromArray(this.instanceColor.array, 3 * t)
			},
			getMatrixAt: function (t, e) {
				e.fromArray(this.instanceMatrix.array, 16 * t)
			},
			raycast: function (t, e) {
				const i = this.matrixWorld,
					n = this.count;
				if (qp.geometry = this.geometry, qp.material = this.material, void 0 !== qp.material)
					for (let r = 0; r < n; r++) {
						this.getMatrixAt(r, Gp), Hp.multiplyMatrices(i, Gp), qp.matrixWorld = Hp, qp.raycast(t, jp);
						for (let t = 0, i = jp.length; t < i; t++) {
							const i = jp[t];
							i.instanceId = r, i.object = this, e.push(i)
						}
						jp.length = 0
					}
			},
			setColorAt: function (t, e) {
				null === this.instanceColor && (this.instanceColor = new th(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t)
			},
			setMatrixAt: function (t, e) {
				e.toArray(this.instanceMatrix.array, 16 * t)
			},
			updateMorphTargets: function () {},
			dispose: function () {
				this.dispatchEvent({
					type: "dispose"
				})
			}
		});
		class Yp extends Gc {
			constructor(t) {
				super(), this.type = "LineBasicMaterial", this.color = new Jc(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.morphTargets = t.morphTargets, this
			}
		}
		Yp.prototype.isLineBasicMaterial = !0;
		const Zp = new Sl,
			Jp = new Sl,
			$p = new ec,
			Kp = new tc,
			Qp = new ql;

		function tf(t = new xh, e = new Yp) {
			Tc.call(this), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets()
		}
		tf.prototype = Object.assign(Object.create(Tc.prototype), {
			constructor: tf,
			isLine: !0,
			copy: function (t) {
				return Tc.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this
			},
			computeLineDistances: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					if (null === t.index) {
						const e = t.attributes.position,
							i = [0];
						for (let t = 1, n = e.count; t < n; t++) Zp.fromBufferAttribute(e, t - 1), Jp.fromBufferAttribute(e, t), i[t] = i[t - 1], i[t] += Zp.distanceTo(Jp);
						t.setAttribute("lineDistance", new ch(i, 1))
					}
				} else t.isGeometry;
				return this
			},
			raycast: function (t, e) {
				const i = this.geometry,
					n = this.matrixWorld,
					r = t.params.Line.threshold,
					s = i.drawRange;
				if (null === i.boundingSphere && i.computeBoundingSphere(), Qp.copy(i.boundingSphere), Qp.applyMatrix4(n), Qp.radius += r, !1 === t.ray.intersectsSphere(Qp)) return;
				$p.copy(n).invert(), Kp.copy(t.ray).applyMatrix4($p);
				const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					o = a * a,
					l = new Sl,
					c = new Sl,
					h = new Sl,
					u = new Sl,
					d = this.isLineSegments ? 2 : 1;
				if (i.isBufferGeometry) {
					const n = i.index,
						r = i.attributes.position;
					if (null !== n) {
						for (let i = Math.max(0, s.start), a = Math.min(n.count, s.start + s.count) - 1; i < a; i += d) {
							const s = n.getX(i),
								a = n.getX(i + 1);
							l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, a);
							if (Kp.distanceSqToSegment(l, c, u, h) > o) continue;
							u.applyMatrix4(this.matrixWorld);
							const d = t.ray.origin.distanceTo(u);
							d < t.near || d > t.far || e.push({
								distance: d,
								point: h.clone().applyMatrix4(this.matrixWorld),
								index: i,
								face: null,
								faceIndex: null,
								object: this
							})
						}
					} else {
						for (let i = Math.max(0, s.start), n = Math.min(r.count, s.start + s.count) - 1; i < n; i += d) {
							l.fromBufferAttribute(r, i), c.fromBufferAttribute(r, i + 1);
							if (Kp.distanceSqToSegment(l, c, u, h) > o) continue;
							u.applyMatrix4(this.matrixWorld);
							const n = t.ray.origin.distanceTo(u);
							n < t.near || n > t.far || e.push({
								distance: n,
								point: h.clone().applyMatrix4(this.matrixWorld),
								index: i,
								face: null,
								faceIndex: null,
								object: this
							})
						}
					}
				} else i.isGeometry
			},
			updateMorphTargets: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						i = Object.keys(e);
					if (i.length > 0) {
						const t = e[i[0]];
						if (void 0 !== t) {
							this.morphTargetInfluences = [], this.morphTargetDictionary = {};
							for (let e = 0, i = t.length; e < i; e++) {
								const i = t[e].name || String(e);
								this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = e
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e && e.length
				}
			}
		});
		const ef = new Sl,
			nf = new Sl;

		function rf(t, e) {
			tf.call(this, t, e), this.type = "LineSegments"
		}
		rf.prototype = Object.assign(Object.create(tf.prototype), {
			constructor: rf,
			isLineSegments: !0,
			computeLineDistances: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					if (null === t.index) {
						const e = t.attributes.position,
							i = [];
						for (let t = 0, n = e.count; t < n; t += 2) ef.fromBufferAttribute(e, t), nf.fromBufferAttribute(e, t + 1), i[t] = 0 === t ? 0 : i[t - 1], i[t + 1] = i[t] + ef.distanceTo(nf);
						t.setAttribute("lineDistance", new ch(i, 1))
					}
				} else t.isGeometry;
				return this
			}
		});
		class sf extends tf {
			constructor(t, e) {
				super(t, e), this.type = "LineLoop"
			}
		}
		sf.prototype.isLineLoop = !0;
		class af extends Gc {
			constructor(t) {
				super(), this.type = "PointsMaterial", this.color = new Jc(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
			}
		}
		af.prototype.isPointsMaterial = !0;
		const of = new ec, lf = new tc, cf = new ql, hf = new Sl;

		function uf(t = new xh, e = new af) {
			Tc.call(this), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets()
		}

		function df(t, e, i, n, r, s, a) {
			const o = lf.distanceSqToPoint(t);
			if (o < i) {
				const i = new Sl;
				lf.closestPointToPoint(t, i), i.applyMatrix4(n);
				const l = r.ray.origin.distanceTo(i);
				if (l < r.near || l > r.far) return;
				s.push({
					distance: l,
					distanceToRay: Math.sqrt(o),
					point: i,
					index: e,
					face: null,
					object: a
				})
			}
		}
		uf.prototype = Object.assign(Object.create(Tc.prototype), {
			constructor: uf,
			isPoints: !0,
			copy: function (t) {
				return Tc.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this
			},
			raycast: function (t, e) {
				const i = this.geometry,
					n = this.matrixWorld,
					r = t.params.Points.threshold,
					s = i.drawRange;
				if (null === i.boundingSphere && i.computeBoundingSphere(), cf.copy(i.boundingSphere), cf.applyMatrix4(n), cf.radius += r, !1 === t.ray.intersectsSphere(cf)) return; of .copy(n).invert(), lf.copy(t.ray).applyMatrix4( of );
				const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					o = a * a;
				if (i.isBufferGeometry) {
					const r = i.index,
						a = i.attributes.position;
					if (null !== r) {
						for (let i = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); i < l; i++) {
							const s = r.getX(i);
							hf.fromBufferAttribute(a, s), df(hf, s, o, n, t, e, this)
						}
					} else {
						for (let i = Math.max(0, s.start), r = Math.min(a.count, s.start + s.count); i < r; i++) hf.fromBufferAttribute(a, i), df(hf, i, o, n, t, e, this)
					}
				}
			},
			updateMorphTargets: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						i = Object.keys(e);
					if (i.length > 0) {
						const t = e[i[0]];
						if (void 0 !== t) {
							this.morphTargetInfluences = [], this.morphTargetDictionary = {};
							for (let e = 0, i = t.length; e < i; e++) {
								const i = t[e].name || String(e);
								this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = e
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e && e.length
				}
			}
		});
		(class extends xl {
			constructor(t, e, i, n, r, s, a, o, l) {
				super(t, e, i, n, r, s, a, o, l), this.format = void 0 !== a ? a : jo, this.minFilter = void 0 !== s ? s : ko, this.magFilter = void 0 !== r ? r : ko, this.generateMipmaps = !1;
				const c = this;
				"requestVideoFrameCallback" in t && t.requestVideoFrameCallback((function e() {
					c.needsUpdate = !0, t.requestVideoFrameCallback(e)
				}))
			}
			clone() {
				return new this.constructor(this.image).copy(this)
			}
			update() {
				const t = this.image;
				!1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
			}
		}).prototype.isVideoTexture = !0;
		class pf extends xl {
			constructor(t, e, i, n, r, s, a, o, l, c, h, u) {
				super(null, s, a, o, l, c, n, r, h, u), this.image = {
					width: e,
					height: i
				}, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
			}
		}
		pf.prototype.isCompressedTexture = !0;
		(class extends xl {
			constructor(t, e, i, n, r, s, a, o, l) {
				super(t, e, i, n, r, s, a, o, l), this.needsUpdate = !0
			}
		}).prototype.isCanvasTexture = !0;
		(class extends xl {
			constructor(t, e, i, n, r, s, a, o, l, c) {
				if ((c = void 0 !== c ? c : Xo) !== Xo && c !== Yo) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
				void 0 === i && c === Xo && (i = Uo), void 0 === i && c === Yo && (i = Ho), super(null, n, r, s, a, o, c, i, l), this.image = {
					width: t,
					height: e
				}, this.magFilter = void 0 !== a ? a : Fo, this.minFilter = void 0 !== o ? o : Fo, this.flipY = !1, this.generateMipmaps = !1
			}
		}).prototype.isDepthTexture = !0;
		new Sl, new Sl, new Sl, new Vc;
		const ff = function (t, e, i) {
			i = i || 2;
			const n = e && e.length,
				r = n ? e[0] * i : t.length;
			let s = mf(t, 0, r, i, !0);
			const a = [];
			if (!s || s.next === s.prev) return a;
			let o, l, c, h, u, d, p;
			if (n && (s = function (t, e, i, n) {
					const r = [];
					let s, a, o, l, c;
					for (s = 0, a = e.length; s < a; s++) o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : t.length, c = mf(t, o, l, n, !1), c === c.next && (c.steiner = !0), r.push(Tf(c));
					for (r.sort(bf), s = 0; s < r.length; s++) Mf(r[s], i), i = gf(i, i.next);
					return i
				}(t, e, s, i)), t.length > 80 * i) {
				o = c = t[0], l = h = t[1];
				for (let e = i; e < r; e += i) u = t[e], d = t[e + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
				p = Math.max(c - o, h - l), p = 0 !== p ? 1 / p : 0
			}
			return vf(s, a, i, o, l, p), a
		};

		function mf(t, e, i, n, r) {
			let s, a;
			if (r === function (t, e, i, n) {
					let r = 0;
					for (let s = e, a = i - n; s < i; s += n) r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s;
					return r
				}(t, e, i, n) > 0)
				for (s = e; s < i; s += n) a = zf(s, t[s], t[s + 1], a);
			else
				for (s = i - n; s >= e; s -= n) a = zf(s, t[s], t[s + 1], a);
			return a && Lf(a, a.next) && (kf(a), a = a.next), a
		}

		function gf(t, e) {
			if (!t) return t;
			e || (e = t);
			let i, n = t;
			do {
				if (i = !1, n.steiner || !Lf(n, n.next) && 0 !== Af(n.prev, n, n.next)) n = n.next;
				else {
					if (kf(n), n = e = n.prev, n === n.next) break;
					i = !0
				}
			} while (i || n !== e);
			return e
		}

		function vf(t, e, i, n, r, s, a) {
			if (!t) return;
			!a && s && function (t, e, i, n) {
				let r = t;
				do {
					null === r.z && (r.z = Df(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
				} while (r !== t);
				r.prevZ.nextZ = null, r.prevZ = null,
					function (t) {
						let e, i, n, r, s, a, o, l, c = 1;
						do {
							for (i = t, t = null, s = null, a = 0; i;) {
								for (a++, n = i, o = 0, e = 0; e < c && (o++, n = n.nextZ, n); e++);
								for (l = c; o > 0 || l > 0 && n;) 0 !== o && (0 === l || !n || i.z <= n.z) ? (r = i, i = i.nextZ, o--) : (r = n, n = n.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
								i = n
							}
							s.nextZ = null, c *= 2
						} while (a > 1)
					}(r)
			}(t, n, r, s);
			let o, l, c = t;
			for (; t.prev !== t.next;)
				if (o = t.prev, l = t.next, s ? xf(t, n, r, s) : yf(t)) e.push(o.i / i), e.push(t.i / i), e.push(l.i / i), kf(t), t = l.next, c = l.next;
				else if ((t = l) === c) {
				a ? 1 === a ? vf(t = _f(gf(t), e, i), e, i, n, r, s, 2) : 2 === a && wf(t, e, i, n, r, s) : vf(gf(t), e, i, n, r, s, 1);
				break
			}
		}

		function yf(t) {
			const e = t.prev,
				i = t,
				n = t.next;
			if (Af(e, i, n) >= 0) return !1;
			let r = t.next.next;
			for (; r !== t.prev;) {
				if (Cf(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && Af(r.prev, r, r.next) >= 0) return !1;
				r = r.next
			}
			return !0
		}

		function xf(t, e, i, n) {
			const r = t.prev,
				s = t,
				a = t.next;
			if (Af(r, s, a) >= 0) return !1;
			const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x,
				l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y,
				c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x,
				h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y,
				u = Df(o, l, e, i, n),
				d = Df(c, h, e, i, n);
			let p = t.prevZ,
				f = t.nextZ;
			for (; p && p.z >= u && f && f.z <= d;) {
				if (p !== t.prev && p !== t.next && Cf(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && Af(p.prev, p, p.next) >= 0) return !1;
				if (p = p.prevZ, f !== t.prev && f !== t.next && Cf(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) && Af(f.prev, f, f.next) >= 0) return !1;
				f = f.nextZ
			}
			for (; p && p.z >= u;) {
				if (p !== t.prev && p !== t.next && Cf(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && Af(p.prev, p, p.next) >= 0) return !1;
				p = p.prevZ
			}
			for (; f && f.z <= d;) {
				if (f !== t.prev && f !== t.next && Cf(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) && Af(f.prev, f, f.next) >= 0) return !1;
				f = f.nextZ
			}
			return !0
		}

		function _f(t, e, i) {
			let n = t;
			do {
				const r = n.prev,
					s = n.next.next;
				!Lf(r, s) && Pf(r, n, n.next, s) && Ff(r, s) && Ff(s, r) && (e.push(r.i / i), e.push(n.i / i), e.push(s.i / i), kf(n), kf(n.next), n = t = s), n = n.next
			} while (n !== t);
			return gf(n)
		}

		function wf(t, e, i, n, r, s) {
			let a = t;
			do {
				let t = a.next.next;
				for (; t !== a.prev;) {
					if (a.i !== t.i && Ef(a, t)) {
						let o = Nf(a, t);
						return a = gf(a, a.next), o = gf(o, o.next), vf(a, e, i, n, r, s), void vf(o, e, i, n, r, s)
					}
					t = t.next
				}
				a = a.next
			} while (a !== t)
		}

		function bf(t, e) {
			return t.x - e.x
		}

		function Mf(t, e) {
			if (e = function (t, e) {
					let i = e;
					const n = t.x,
						r = t.y;
					let s, a = -1 / 0;
					do {
						if (r <= i.y && r >= i.next.y && i.next.y !== i.y) {
							const t = i.x + (r - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
							if (t <= n && t > a) {
								if (a = t, t === n) {
									if (r === i.y) return i;
									if (r === i.next.y) return i.next
								}
								s = i.x < i.next.x ? i : i.next
							}
						}
						i = i.next
					} while (i !== e);
					if (!s) return null;
					if (n === a) return s;
					const o = s,
						l = s.x,
						c = s.y;
					let h, u = 1 / 0;
					i = s;
					do {
						n >= i.x && i.x >= l && n !== i.x && Cf(r < c ? n : a, r, l, c, r < c ? a : n, r, i.x, i.y) && (h = Math.abs(r - i.y) / (n - i.x), Ff(i, t) && (h < u || h === u && (i.x > s.x || i.x === s.x && Sf(s, i))) && (s = i, u = h)), i = i.next
					} while (i !== o);
					return s
				}(t, e)) {
				const i = Nf(e, t);
				gf(e, e.next), gf(i, i.next)
			}
		}

		function Sf(t, e) {
			return Af(t.prev, t, e.prev) < 0 && Af(e.next, t, t.next) < 0
		}

		function Df(t, e, i, n, r) {
			return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
		}

		function Tf(t) {
			let e = t,
				i = t;
			do {
				(e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
			} while (e !== t);
			return i
		}

		function Cf(t, e, i, n, r, s, a, o) {
			return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (n - o) - (i - a) * (e - o) >= 0 && (i - a) * (s - o) - (r - a) * (n - o) >= 0
		}

		function Ef(t, e) {
			return t.next.i !== e.i && t.prev.i !== e.i && ! function (t, e) {
				let i = t;
				do {
					if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Pf(i, i.next, t, e)) return !0;
					i = i.next
				} while (i !== t);
				return !1
			}(t, e) && (Ff(t, e) && Ff(e, t) && function (t, e) {
				let i = t,
					n = !1;
				const r = (t.x + e.x) / 2,
					s = (t.y + e.y) / 2;
				do {
					i.y > s != i.next.y > s && i.next.y !== i.y && r < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
				} while (i !== t);
				return n
			}(t, e) && (Af(t.prev, t, e.prev) || Af(t, e.prev, e)) || Lf(t, e) && Af(t.prev, t, t.next) > 0 && Af(e.prev, e, e.next) > 0)
		}

		function Af(t, e, i) {
			return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
		}

		function Lf(t, e) {
			return t.x === e.x && t.y === e.y
		}

		function Pf(t, e, i, n) {
			const r = If(Af(t, e, i)),
				s = If(Af(t, e, n)),
				a = If(Af(i, n, t)),
				o = If(Af(i, n, e));
			return r !== s && a !== o || (!(0 !== r || !Of(t, i, e)) || (!(0 !== s || !Of(t, n, e)) || (!(0 !== a || !Of(i, t, n)) || !(0 !== o || !Of(i, e, n)))))
		}

		function Of(t, e, i) {
			return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y)
		}

		function If(t) {
			return t > 0 ? 1 : t < 0 ? -1 : 0
		}

		function Ff(t, e) {
			return Af(t.prev, t, t.next) < 0 ? Af(t, e, t.next) >= 0 && Af(t, t.prev, e) >= 0 : Af(t, e, t.prev) < 0 || Af(t, t.next, e) < 0
		}

		function Nf(t, e) {
			const i = new Rf(t.i, t.x, t.y),
				n = new Rf(e.i, e.x, e.y),
				r = t.next,
				s = e.prev;
			return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, s.next = n, n.prev = s, n
		}

		function zf(t, e, i, n) {
			const r = new Rf(t, e, i);
			return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
		}

		function kf(t) {
			t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
		}

		function Rf(t, e, i) {
			this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
		}
		const Bf = {
			area: function (t) {
				const e = t.length;
				let i = 0;
				for (let n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
				return .5 * i
			},
			isClockWise: function (t) {
				return Bf.area(t) < 0
			},
			triangulateShape: function (t, e) {
				const i = [],
					n = [],
					r = [];
				Uf(t), Vf(i, t);
				let s = t.length;
				e.forEach(Uf);
				for (let t = 0; t < e.length; t++) n.push(s), s += e[t].length, Vf(i, e[t]);
				const a = ff(i, n);
				for (let t = 0; t < a.length; t += 3) r.push(a.slice(t, t + 3));
				return r
			}
		};

		function Uf(t) {
			const e = t.length;
			e > 2 && t[e - 1].equals(t[0]) && t.pop()
		}

		function Vf(t, e) {
			for (let i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y)
		}
		class Wf extends xh {
			constructor(t, e) {
				super(), this.type = "ExtrudeGeometry", this.parameters = {
					shapes: t,
					options: e
				}, t = Array.isArray(t) ? t : [t];
				const i = this,
					n = [],
					r = [];
				for (let e = 0, i = t.length; e < i; e++) {
					s(t[e])
				}

				function s(t) {
					const s = [],
						a = void 0 !== e.curveSegments ? e.curveSegments : 12,
						o = void 0 !== e.steps ? e.steps : 1;
					let l = void 0 !== e.depth ? e.depth : 100,
						c = void 0 === e.bevelEnabled || e.bevelEnabled,
						h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
						u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
						d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
						p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
					const f = e.extrudePath,
						m = void 0 !== e.UVGenerator ? e.UVGenerator : Gf;
					void 0 !== e.amount && (l = e.amount);
					let g, v, y, x, _, w = !1;
					f && (g = f.getSpacedPoints(o), w = !0, c = !1, v = f.computeFrenetFrames(o, !1), y = new Sl, x = new Sl, _ = new Sl), c || (p = 0, h = 0, u = 0, d = 0);
					const b = t.extractPoints(a);
					let M = b.shape;
					const S = b.holes;
					if (!Bf.isClockWise(M)) {
						M = M.reverse();
						for (let t = 0, e = S.length; t < e; t++) {
							const e = S[t];
							Bf.isClockWise(e) && (S[t] = e.reverse())
						}
					}
					const D = Bf.triangulateShape(M, S),
						T = M;
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						M = M.concat(e)
					}

					function C(t, e, i) {
						return e.clone().multiplyScalar(i).add(t)
					}
					const E = M.length,
						A = D.length;

					function L(t, e, i) {
						let n, r, s;
						const a = t.x - e.x,
							o = t.y - e.y,
							l = i.x - t.x,
							c = i.y - t.y,
							h = a * a + o * o,
							u = a * c - o * l;
						if (Math.abs(u) > Number.EPSILON) {
							const u = Math.sqrt(h),
								d = Math.sqrt(l * l + c * c),
								p = e.x - o / u,
								f = e.y + a / u,
								m = ((i.x - c / d - p) * c - (i.y + l / d - f) * l) / (a * c - o * l);
							n = p + a * m - t.x, r = f + o * m - t.y;
							const g = n * n + r * r;
							if (g <= 2) return new fl(n, r);
							s = Math.sqrt(g / 2)
						} else {
							let t = !1;
							a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0), t ? (n = -o, r = a, s = Math.sqrt(h)) : (n = a, r = o, s = Math.sqrt(h / 2))
						}
						return new fl(n / s, r / s)
					}
					const P = [];
					for (let t = 0, e = T.length, i = e - 1, n = t + 1; t < e; t++, i++, n++) i === e && (i = 0), n === e && (n = 0), P[t] = L(T[t], T[i], T[n]);
					const O = [];
					let I, F = P.concat();
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						I = [];
						for (let t = 0, i = e.length, n = i - 1, r = t + 1; t < i; t++, n++, r++) n === i && (n = 0), r === i && (r = 0), I[t] = L(e[t], e[n], e[r]);
						O.push(I), F = F.concat(I)
					}
					for (let t = 0; t < p; t++) {
						const e = t / p,
							i = h * Math.cos(e * Math.PI / 2),
							n = u * Math.sin(e * Math.PI / 2) + d;
						for (let t = 0, e = T.length; t < e; t++) {
							const e = C(T[t], P[t], n);
							k(e.x, e.y, -i)
						}
						for (let t = 0, e = S.length; t < e; t++) {
							const e = S[t];
							I = O[t];
							for (let t = 0, r = e.length; t < r; t++) {
								const r = C(e[t], I[t], n);
								k(r.x, r.y, -i)
							}
						}
					}
					const N = u + d;
					for (let t = 0; t < E; t++) {
						const e = c ? C(M[t], F[t], N) : M[t];
						w ? (x.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g[0]).add(x).add(y), k(_.x, _.y, _.z)) : k(e.x, e.y, 0)
					}
					for (let t = 1; t <= o; t++)
						for (let e = 0; e < E; e++) {
							const i = c ? C(M[e], F[e], N) : M[e];
							w ? (x.copy(v.normals[t]).multiplyScalar(i.x), y.copy(v.binormals[t]).multiplyScalar(i.y), _.copy(g[t]).add(x).add(y), k(_.x, _.y, _.z)) : k(i.x, i.y, l / o * t)
						}
					for (let t = p - 1; t >= 0; t--) {
						const e = t / p,
							i = h * Math.cos(e * Math.PI / 2),
							n = u * Math.sin(e * Math.PI / 2) + d;
						for (let t = 0, e = T.length; t < e; t++) {
							const e = C(T[t], P[t], n);
							k(e.x, e.y, l + i)
						}
						for (let t = 0, e = S.length; t < e; t++) {
							const e = S[t];
							I = O[t];
							for (let t = 0, r = e.length; t < r; t++) {
								const r = C(e[t], I[t], n);
								w ? k(r.x, r.y + g[o - 1].y, g[o - 1].x + i) : k(r.x, r.y, l + i)
							}
						}
					}

					function z(t, e) {
						let i = t.length;
						for (; --i >= 0;) {
							const n = i;
							let r = i - 1;
							r < 0 && (r = t.length - 1);
							for (let t = 0, i = o + 2 * p; t < i; t++) {
								const i = E * t,
									s = E * (t + 1);
								B(e + n + i, e + r + i, e + r + s, e + n + s)
							}
						}
					}

					function k(t, e, i) {
						s.push(t), s.push(e), s.push(i)
					}

					function R(t, e, r) {
						U(t), U(e), U(r);
						const s = n.length / 3,
							a = m.generateTopUV(i, n, s - 3, s - 2, s - 1);
						V(a[0]), V(a[1]), V(a[2])
					}

					function B(t, e, r, s) {
						U(t), U(e), U(s), U(e), U(r), U(s);
						const a = n.length / 3,
							o = m.generateSideWallUV(i, n, a - 6, a - 3, a - 2, a - 1);
						V(o[0]), V(o[1]), V(o[3]), V(o[1]), V(o[2]), V(o[3])
					}

					function U(t) {
						n.push(s[3 * t + 0]), n.push(s[3 * t + 1]), n.push(s[3 * t + 2])
					}

					function V(t) {
						r.push(t.x), r.push(t.y)
					}! function () {
						const t = n.length / 3;
						if (c) {
							let t = 0,
								e = E * t;
							for (let t = 0; t < A; t++) {
								const i = D[t];
								R(i[2] + e, i[1] + e, i[0] + e)
							}
							t = o + 2 * p, e = E * t;
							for (let t = 0; t < A; t++) {
								const i = D[t];
								R(i[0] + e, i[1] + e, i[2] + e)
							}
						} else {
							for (let t = 0; t < A; t++) {
								const e = D[t];
								R(e[2], e[1], e[0])
							}
							for (let t = 0; t < A; t++) {
								const e = D[t];
								R(e[0] + E * o, e[1] + E * o, e[2] + E * o)
							}
						}
						i.addGroup(t, n.length / 3 - t, 0)
					}(),
					function () {
						const t = n.length / 3;
						let e = 0;
						z(T, e), e += T.length;
						for (let t = 0, i = S.length; t < i; t++) {
							const i = S[t];
							z(i, e), e += i.length
						}
						i.addGroup(t, n.length / 3 - t, 1)
					}()
				}
				this.setAttribute("position", new ch(n, 3)), this.setAttribute("uv", new ch(r, 2)), this.computeVertexNormals()
			}
			toJSON() {
				const t = xh.prototype.toJSON.call(this);
				return function (t, e, i) {
					if (i.shapes = [], Array.isArray(t))
						for (let e = 0, n = t.length; e < n; e++) {
							const n = t[e];
							i.shapes.push(n.uuid)
						} else i.shapes.push(t.uuid);
					void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON());
					return i
				}(this.parameters.shapes, this.parameters.options, t)
			}
		}
		const Gf = {
			generateTopUV: function (t, e, i, n, r) {
				const s = e[3 * i],
					a = e[3 * i + 1],
					o = e[3 * n],
					l = e[3 * n + 1],
					c = e[3 * r],
					h = e[3 * r + 1];
				return [new fl(s, a), new fl(o, l), new fl(c, h)]
			},
			generateSideWallUV: function (t, e, i, n, r, s) {
				const a = e[3 * i],
					o = e[3 * i + 1],
					l = e[3 * i + 2],
					c = e[3 * n],
					h = e[3 * n + 1],
					u = e[3 * n + 2],
					d = e[3 * r],
					p = e[3 * r + 1],
					f = e[3 * r + 2],
					m = e[3 * s],
					g = e[3 * s + 1],
					v = e[3 * s + 2];
				return Math.abs(o - h) < .01 ? [new fl(a, 1 - l), new fl(c, 1 - u), new fl(d, 1 - f), new fl(m, 1 - v)] : [new fl(o, 1 - l), new fl(h, 1 - u), new fl(p, 1 - f), new fl(g, 1 - v)]
			}
		};

		function Hf(t, e, i) {
			xh.call(this), this.type = "ParametricGeometry", this.parameters = {
				func: t,
				slices: e,
				stacks: i
			};
			const n = [],
				r = [],
				s = [],
				a = [],
				o = 1e-5,
				l = new Sl,
				c = new Sl,
				h = new Sl,
				u = new Sl,
				d = new Sl;
			t.length;
			const p = e + 1;
			for (let n = 0; n <= i; n++) {
				const p = n / i;
				for (let i = 0; i <= e; i++) {
					const n = i / e;
					t(n, p, c), r.push(c.x, c.y, c.z), n - o >= 0 ? (t(n - o, p, h), u.subVectors(c, h)) : (t(n + o, p, h), u.subVectors(h, c)), p - o >= 0 ? (t(n, p - o, h), d.subVectors(c, h)) : (t(n, p + o, h), d.subVectors(h, c)), l.crossVectors(u, d).normalize(), s.push(l.x, l.y, l.z), a.push(n, p)
				}
			}
			for (let t = 0; t < i; t++)
				for (let i = 0; i < e; i++) {
					const e = t * p + i,
						r = t * p + i + 1,
						s = (t + 1) * p + i + 1,
						a = (t + 1) * p + i;
					n.push(e, r, a), n.push(r, s, a)
				}
			this.setIndex(n), this.setAttribute("position", new ch(r, 3)), this.setAttribute("normal", new ch(s, 3)), this.setAttribute("uv", new ch(a, 2))
		}
		Hf.prototype = Object.create(xh.prototype), Hf.prototype.constructor = Hf;
		class jf extends xh {
			constructor(t, e = 12) {
				super(), this.type = "ShapeGeometry", this.parameters = {
					shapes: t,
					curveSegments: e
				};
				const i = [],
					n = [],
					r = [],
					s = [];
				let a = 0,
					o = 0;
				if (!1 === Array.isArray(t)) l(t);
				else
					for (let e = 0; e < t.length; e++) l(t[e]), this.addGroup(a, o, e), a += o, o = 0;

				function l(t) {
					const a = n.length / 3,
						l = t.extractPoints(e);
					let c = l.shape;
					const h = l.holes;
					!1 === Bf.isClockWise(c) && (c = c.reverse());
					for (let t = 0, e = h.length; t < e; t++) {
						const e = h[t];
						!0 === Bf.isClockWise(e) && (h[t] = e.reverse())
					}
					const u = Bf.triangulateShape(c, h);
					for (let t = 0, e = h.length; t < e; t++) {
						const e = h[t];
						c = c.concat(e)
					}
					for (let t = 0, e = c.length; t < e; t++) {
						const e = c[t];
						n.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y)
					}
					for (let t = 0, e = u.length; t < e; t++) {
						const e = u[t],
							n = e[0] + a,
							r = e[1] + a,
							s = e[2] + a;
						i.push(n, r, s), o += 3
					}
				}
				this.setIndex(i), this.setAttribute("position", new ch(n, 3)), this.setAttribute("normal", new ch(r, 3)), this.setAttribute("uv", new ch(s, 2))
			}
			toJSON() {
				const t = xh.prototype.toJSON.call(this);
				return function (t, e) {
					if (e.shapes = [], Array.isArray(t))
						for (let i = 0, n = t.length; i < n; i++) {
							const n = t[i];
							e.shapes.push(n.uuid)
						} else e.shapes.push(t.uuid);
					return e
				}(this.parameters.shapes, t)
			}
		}
		class qf extends Gc {
			constructor(t) {
				super(), this.type = "ShadowMaterial", this.color = new Jc(0), this.transparent = !0, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this
			}
		}
		qf.prototype.isShadowMaterial = !0;
		class Xf extends Gh {
			constructor(t) {
				super(t), this.type = "RawShaderMaterial"
			}
		}

		function Yf(t) {
			Gc.call(this), this.defines = {
				STANDARD: ""
			}, this.type = "MeshStandardMaterial", this.color = new Jc(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Jc(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new fl(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(t)
		}

		function Zf(t) {
			Yf.call(this), this.defines = {
				STANDARD: "",
				PHYSICAL: ""
			}, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new fl(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", {
				get: function () {
					return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity)
				},
				set: function (t) {
					this.reflectivity = pl.clamp(2.5 * (t - 1) / (t + 1), 0, 1)
				}
			}), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(t)
		}
		Xf.prototype.isRawShaderMaterial = !0, Yf.prototype = Object.create(Gc.prototype), Yf.prototype.constructor = Yf, Yf.prototype.isMeshStandardMaterial = !0, Yf.prototype.copy = function (t) {
			return Gc.prototype.copy.call(this, t), this.defines = {
				STANDARD: ""
			}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this.vertexTangents = t.vertexTangents, this
		}, Zf.prototype = Object.create(Yf.prototype), Zf.prototype.constructor = Zf, Zf.prototype.isMeshPhysicalMaterial = !0, Zf.prototype.copy = function (t) {
			return Yf.prototype.copy.call(this, t), this.defines = {
				STANDARD: "",
				PHYSICAL: ""
			}, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new Jc).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this
		};
		class Jf extends Gc {
			constructor(t) {
				super(), this.type = "MeshPhongMaterial", this.color = new Jc(16777215), this.specular = new Jc(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Jc(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new fl(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this
			}
		}
		Jf.prototype.isMeshPhongMaterial = !0;
		class $f extends Gc {
			constructor(t) {
				super(), this.defines = {
					TOON: ""
				}, this.type = "MeshToonMaterial", this.color = new Jc(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Jc(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new fl(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
			}
		}
		$f.prototype.isMeshToonMaterial = !0;
		class Kf extends Gc {
			constructor(t) {
				super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new fl(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this
			}
		}
		Kf.prototype.isMeshNormalMaterial = !0;
		class Qf extends Gc {
			constructor(t) {
				super(), this.type = "MeshLambertMaterial", this.color = new Jc(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Jc(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
			}
		}
		Qf.prototype.isMeshLambertMaterial = !0;
		class tm extends Gc {
			constructor(t) {
				super(), this.defines = {
					MATCAP: ""
				}, this.type = "MeshMatcapMaterial", this.color = new Jc(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new fl(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.defines = {
					MATCAP: ""
				}, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this
			}
		}
		tm.prototype.isMeshMatcapMaterial = !0;
		class em extends Yp {
			constructor(t) {
				super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
			}
			copy(t) {
				return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
			}
		}
		em.prototype.isLineDashedMaterial = !0;
		const im = {
			arraySlice: function (t, e, i) {
				return im.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
			},
			convertArray: function (t, e, i) {
				return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
			},
			isTypedArray: function (t) {
				return ArrayBuffer.isView(t) && !(t instanceof DataView)
			},
			getKeyframeOrder: function (t) {
				const e = t.length,
					i = new Array(e);
				for (let t = 0; t !== e; ++t) i[t] = t;
				return i.sort((function (e, i) {
					return t[e] - t[i]
				})), i
			},
			sortedArray: function (t, e, i) {
				const n = t.length,
					r = new t.constructor(n);
				for (let s = 0, a = 0; a !== n; ++s) {
					const n = i[s] * e;
					for (let i = 0; i !== e; ++i) r[a++] = t[n + i]
				}
				return r
			},
			flattenJSON: function (t, e, i, n) {
				let r = 1,
					s = t[0];
				for (; void 0 !== s && void 0 === s[n];) s = t[r++];
				if (void 0 === s) return;
				let a = s[n];
				if (void 0 !== a)
					if (Array.isArray(a))
						do {
							a = s[n], void 0 !== a && (e.push(s.time), i.push.apply(i, a)), s = t[r++]
						} while (void 0 !== s);
					else if (void 0 !== a.toArray)
					do {
						a = s[n], void 0 !== a && (e.push(s.time), a.toArray(i, i.length)), s = t[r++]
					} while (void 0 !== s);
				else
					do {
						a = s[n], void 0 !== a && (e.push(s.time), i.push(a)), s = t[r++]
					} while (void 0 !== s)
			},
			subclip: function (t, e, i, n, r = 30) {
				const s = t.clone();
				s.name = e;
				const a = [];
				for (let t = 0; t < s.tracks.length; ++t) {
					const e = s.tracks[t],
						o = e.getValueSize(),
						l = [],
						c = [];
					for (let t = 0; t < e.times.length; ++t) {
						const s = e.times[t] * r;
						if (!(s < i || s >= n)) {
							l.push(e.times[t]);
							for (let i = 0; i < o; ++i) c.push(e.values[t * o + i])
						}
					}
					0 !== l.length && (e.times = im.convertArray(l, e.times.constructor), e.values = im.convertArray(c, e.values.constructor), a.push(e))
				}
				s.tracks = a;
				let o = 1 / 0;
				for (let t = 0; t < s.tracks.length; ++t) o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
				for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * o);
				return s.resetDuration(), s
			},
			makeClipAdditive: function (t, e = 0, i = t, n = 30) {
				n <= 0 && (n = 30);
				const r = i.tracks.length,
					s = e / n;
				for (let e = 0; e < r; ++e) {
					const n = i.tracks[e],
						r = n.ValueTypeName;
					if ("bool" === r || "string" === r) continue;
					const a = t.tracks.find((function (t) {
						return t.name === n.name && t.ValueTypeName === r
					}));
					if (void 0 === a) continue;
					let o = 0;
					const l = n.getValueSize();
					n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
					let c = 0;
					const h = a.getValueSize();
					a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
					const u = n.times.length - 1;
					let d;
					if (s <= n.times[0]) {
						const t = o,
							e = l - o;
						d = im.arraySlice(n.values, t, e)
					} else if (s >= n.times[u]) {
						const t = u * l + o,
							e = t + l - o;
						d = im.arraySlice(n.values, t, e)
					} else {
						const t = n.createInterpolant(),
							e = o,
							i = l - o;
						t.evaluate(s), d = im.arraySlice(t.resultBuffer, e, i)
					}
					if ("quaternion" === r) {
						(new Ml).fromArray(d).normalize().conjugate().toArray(d)
					}
					const p = a.times.length;
					for (let t = 0; t < p; ++t) {
						const e = t * h + c;
						if ("quaternion" === r) Ml.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
						else {
							const t = h - 2 * c;
							for (let i = 0; i < t; ++i) a.values[e + i] -= d[i]
						}
					}
				}
				return t.blendMode = 2501, t
			}
		};

		function nm(t, e, i, n) {
			this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
		}

		function rm(t, e, i, n) {
			nm.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
		}

		function sm(t, e, i, n) {
			nm.call(this, t, e, i, n)
		}

		function am(t, e, i, n) {
			nm.call(this, t, e, i, n)
		}
		Object.assign(nm.prototype, {
			evaluate: function (t) {
				const e = this.parameterPositions;
				let i = this._cachedIndex,
					n = e[i],
					r = e[i - 1];
				t: {
					e: {
						let s;i: {
							n: if (!(t < n)) {
								for (let s = i + 2;;) {
									if (void 0 === n) {
										if (t < r) break n;
										return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
									}
									if (i === s) break;
									if (r = n, n = e[++i], t < n) break e
								}
								s = e.length;
								break i
							}if (t >= r) break t; {
								const a = e[1];
								t < a && (i = 2, r = a);
								for (let s = i - 2;;) {
									if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
									if (i === s) break;
									if (n = r, r = e[--i - 1], t >= r) break e
								}
								s = i, i = 0
							}
						}
						for (; i < s;) {
							const n = i + s >>> 1;
							t < e[n] ? s = n : i = n + 1
						}
						if (n = e[i], r = e[i - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
						if (void 0 === n) return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, r, t)
					}
					this._cachedIndex = i,
					this.intervalChanged_(i, r, n)
				}
				return this.interpolate_(i, r, t, n)
			},
			settings: null,
			DefaultSettings_: {},
			getSettings_: function () {
				return this.settings || this.DefaultSettings_
			},
			copySampleValue_: function (t) {
				const e = this.resultBuffer,
					i = this.sampleValues,
					n = this.valueSize,
					r = t * n;
				for (let t = 0; t !== n; ++t) e[t] = i[r + t];
				return e
			},
			interpolate_: function () {
				throw new Error("call to abstract method")
			},
			intervalChanged_: function () {}
		}), Object.assign(nm.prototype, {
			beforeStart_: nm.prototype.copySampleValue_,
			afterEnd_: nm.prototype.copySampleValue_
		}), rm.prototype = Object.assign(Object.create(nm.prototype), {
			constructor: rm,
			DefaultSettings_: {
				endingStart: Ko,
				endingEnd: Ko
			},
			intervalChanged_: function (t, e, i) {
				const n = this.parameterPositions;
				let r = t - 2,
					s = t + 1,
					a = n[r],
					o = n[s];
				if (void 0 === a) switch (this.getSettings_().endingStart) {
					case Qo:
						r = t, a = 2 * e - i;
						break;
					case tl:
						r = n.length - 2, a = e + n[r] - n[r + 1];
						break;
					default:
						r = t, a = i
				}
				if (void 0 === o) switch (this.getSettings_().endingEnd) {
					case Qo:
						s = t, o = 2 * i - e;
						break;
					case tl:
						s = 1, o = i + n[1] - n[0];
						break;
					default:
						s = t - 1, o = e
				}
				const l = .5 * (i - e),
					c = this.valueSize;
				this._weightPrev = l / (e - a), this._weightNext = l / (o - i), this._offsetPrev = r * c, this._offsetNext = s * c
			},
			interpolate_: function (t, e, i, n) {
				const r = this.resultBuffer,
					s = this.sampleValues,
					a = this.valueSize,
					o = t * a,
					l = o - a,
					c = this._offsetPrev,
					h = this._offsetNext,
					u = this._weightPrev,
					d = this._weightNext,
					p = (i - e) / (n - e),
					f = p * p,
					m = f * p,
					g = -u * m + 2 * u * f - u * p,
					v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1,
					y = (-1 - d) * m + (1.5 + d) * f + .5 * p,
					x = d * m - d * f;
				for (let t = 0; t !== a; ++t) r[t] = g * s[c + t] + v * s[l + t] + y * s[o + t] + x * s[h + t];
				return r
			}
		}), sm.prototype = Object.assign(Object.create(nm.prototype), {
			constructor: sm,
			interpolate_: function (t, e, i, n) {
				const r = this.resultBuffer,
					s = this.sampleValues,
					a = this.valueSize,
					o = t * a,
					l = o - a,
					c = (i - e) / (n - e),
					h = 1 - c;
				for (let t = 0; t !== a; ++t) r[t] = s[l + t] * h + s[o + t] * c;
				return r
			}
		}), am.prototype = Object.assign(Object.create(nm.prototype), {
			constructor: am,
			interpolate_: function (t) {
				return this.copySampleValue_(t - 1)
			}
		});
		class om {
			constructor(t, e, i, n) {
				if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
				if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
				this.name = t, this.times = im.convertArray(e, this.TimeBufferType), this.values = im.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
			}
			static toJSON(t) {
				const e = t.constructor;
				let i;
				if (e.toJSON !== this.toJSON) i = e.toJSON(t);
				else {
					i = {
						name: t.name,
						times: im.convertArray(t.times, Array),
						values: im.convertArray(t.values, Array)
					};
					const e = t.getInterpolation();
					e !== t.DefaultInterpolation && (i.interpolation = e)
				}
				return i.type = t.ValueTypeName, i
			}
			InterpolantFactoryMethodDiscrete(t) {
				return new am(this.times, this.values, this.getValueSize(), t)
			}
			InterpolantFactoryMethodLinear(t) {
				return new sm(this.times, this.values, this.getValueSize(), t)
			}
			InterpolantFactoryMethodSmooth(t) {
				return new rm(this.times, this.values, this.getValueSize(), t)
			}
			setInterpolation(t) {
				let e;
				switch (t) {
					case Zo:
						e = this.InterpolantFactoryMethodDiscrete;
						break;
					case Jo:
						e = this.InterpolantFactoryMethodLinear;
						break;
					case $o:
						e = this.InterpolantFactoryMethodSmooth
				}
				if (void 0 === e) {
					const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
					if (void 0 === this.createInterpolant) {
						if (t === this.DefaultInterpolation) throw new Error(e);
						this.setInterpolation(this.DefaultInterpolation)
					}
					return this
				}
				return this.createInterpolant = e, this
			}
			getInterpolation() {
				switch (this.createInterpolant) {
					case this.InterpolantFactoryMethodDiscrete:
						return Zo;
					case this.InterpolantFactoryMethodLinear:
						return Jo;
					case this.InterpolantFactoryMethodSmooth:
						return $o
				}
			}
			getValueSize() {
				return this.values.length / this.times.length
			}
			shift(t) {
				if (0 !== t) {
					const e = this.times;
					for (let i = 0, n = e.length; i !== n; ++i) e[i] += t
				}
				return this
			}
			scale(t) {
				if (1 !== t) {
					const e = this.times;
					for (let i = 0, n = e.length; i !== n; ++i) e[i] *= t
				}
				return this
			}
			trim(t, e) {
				const i = this.times,
					n = i.length;
				let r = 0,
					s = n - 1;
				for (; r !== n && i[r] < t;) ++r;
				for (; - 1 !== s && i[s] > e;) --s;
				if (++s, 0 !== r || s !== n) {
					r >= s && (s = Math.max(s, 1), r = s - 1);
					const t = this.getValueSize();
					this.times = im.arraySlice(i, r, s), this.values = im.arraySlice(this.values, r * t, s * t)
				}
				return this
			}
			validate() {
				let t = !0;
				const e = this.getValueSize();
				e - Math.floor(e) != 0 && (t = !1);
				const i = this.times,
					n = this.values,
					r = i.length;
				0 === r && (t = !1);
				let s = null;
				for (let e = 0; e !== r; e++) {
					const n = i[e];
					if ("number" == typeof n && isNaN(n)) {
						t = !1;
						break
					}
					if (null !== s && s > n) {
						t = !1;
						break
					}
					s = n
				}
				if (void 0 !== n && im.isTypedArray(n))
					for (let e = 0, i = n.length; e !== i; ++e) {
						const i = n[e];
						if (isNaN(i)) {
							t = !1;
							break
						}
					}
				return t
			}
			optimize() {
				const t = im.arraySlice(this.times),
					e = im.arraySlice(this.values),
					i = this.getValueSize(),
					n = this.getInterpolation() === $o,
					r = t.length - 1;
				let s = 1;
				for (let a = 1; a < r; ++a) {
					let r = !1;
					const o = t[a];
					if (o !== t[a + 1] && (1 !== a || o !== t[0]))
						if (n) r = !0;
						else {
							const t = a * i,
								n = t - i,
								s = t + i;
							for (let a = 0; a !== i; ++a) {
								const i = e[t + a];
								if (i !== e[n + a] || i !== e[s + a]) {
									r = !0;
									break
								}
							}
						}
					if (r) {
						if (a !== s) {
							t[s] = t[a];
							const n = a * i,
								r = s * i;
							for (let t = 0; t !== i; ++t) e[r + t] = e[n + t]
						}++s
					}
				}
				if (r > 0) {
					t[s] = t[r];
					for (let t = r * i, n = s * i, a = 0; a !== i; ++a) e[n + a] = e[t + a];
					++s
				}
				return s !== t.length ? (this.times = im.arraySlice(t, 0, s), this.values = im.arraySlice(e, 0, s * i)) : (this.times = t, this.values = e), this
			}
			clone() {
				const t = im.arraySlice(this.times, 0),
					e = im.arraySlice(this.values, 0),
					i = new(0, this.constructor)(this.name, t, e);
				return i.createInterpolant = this.createInterpolant, i
			}
		}
		om.prototype.TimeBufferType = Float32Array, om.prototype.ValueBufferType = Float32Array, om.prototype.DefaultInterpolation = Jo;
		class lm extends om {}
		lm.prototype.ValueTypeName = "bool", lm.prototype.ValueBufferType = Array, lm.prototype.DefaultInterpolation = Zo, lm.prototype.InterpolantFactoryMethodLinear = void 0, lm.prototype.InterpolantFactoryMethodSmooth = void 0;
		class cm extends om {}
		cm.prototype.ValueTypeName = "color";
		class hm extends om {}

		function um(t, e, i, n) {
			nm.call(this, t, e, i, n)
		}
		hm.prototype.ValueTypeName = "number", um.prototype = Object.assign(Object.create(nm.prototype), {
			constructor: um,
			interpolate_: function (t, e, i, n) {
				const r = this.resultBuffer,
					s = this.sampleValues,
					a = this.valueSize,
					o = (i - e) / (n - e);
				let l = t * a;
				for (let t = l + a; l !== t; l += 4) Ml.slerpFlat(r, 0, s, l - a, s, l, o);
				return r
			}
		});
		class dm extends om {
			InterpolantFactoryMethodLinear(t) {
				return new um(this.times, this.values, this.getValueSize(), t)
			}
		}
		dm.prototype.ValueTypeName = "quaternion", dm.prototype.DefaultInterpolation = Jo, dm.prototype.InterpolantFactoryMethodSmooth = void 0;
		class pm extends om {}
		pm.prototype.ValueTypeName = "string", pm.prototype.ValueBufferType = Array, pm.prototype.DefaultInterpolation = Zo, pm.prototype.InterpolantFactoryMethodLinear = void 0, pm.prototype.InterpolantFactoryMethodSmooth = void 0;
		class fm extends om {}
		fm.prototype.ValueTypeName = "vector";
		class mm {
			constructor(t, e = -1, i, n = 2500) {
				this.name = t, this.tracks = i, this.duration = e, this.blendMode = n, this.uuid = pl.generateUUID(), this.duration < 0 && this.resetDuration()
			}
			static parse(t) {
				const e = [],
					i = t.tracks,
					n = 1 / (t.fps || 1);
				for (let t = 0, r = i.length; t !== r; ++t) e.push(gm(i[t]).scale(n));
				const r = new this(t.name, t.duration, e, t.blendMode);
				return r.uuid = t.uuid, r
			}
			static toJSON(t) {
				const e = [],
					i = t.tracks,
					n = {
						name: t.name,
						duration: t.duration,
						tracks: e,
						uuid: t.uuid,
						blendMode: t.blendMode
					};
				for (let t = 0, n = i.length; t !== n; ++t) e.push(om.toJSON(i[t]));
				return n
			}
			static CreateFromMorphTargetSequence(t, e, i, n) {
				const r = e.length,
					s = [];
				for (let t = 0; t < r; t++) {
					let a = [],
						o = [];
					a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
					const l = im.getKeyframeOrder(a);
					a = im.sortedArray(a, 1, l), o = im.sortedArray(o, 1, l), n || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new hm(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / i))
				}
				return new this(t, -1, s)
			}
			static findByName(t, e) {
				let i = t;
				if (!Array.isArray(t)) {
					const e = t;
					i = e.geometry && e.geometry.animations || e.animations
				}
				for (let t = 0; t < i.length; t++)
					if (i[t].name === e) return i[t];
				return null
			}
			static CreateClipsFromMorphTargetSequences(t, e, i) {
				const n = {},
					r = /^([\w-]*?)([\d]+)$/;
				for (let e = 0, i = t.length; e < i; e++) {
					const i = t[e],
						s = i.name.match(r);
					if (s && s.length > 1) {
						const t = s[1];
						let e = n[t];
						e || (n[t] = e = []), e.push(i)
					}
				}
				const s = [];
				for (const t in n) s.push(this.CreateFromMorphTargetSequence(t, n[t], e, i));
				return s
			}
			static parseAnimation(t, e) {
				if (!t) return null;
				const i = function (t, e, i, n, r) {
						if (0 !== i.length) {
							const s = [],
								a = [];
							im.flattenJSON(i, s, a, n), 0 !== s.length && r.push(new t(e, s, a))
						}
					},
					n = [],
					r = t.name || "default",
					s = t.fps || 30,
					a = t.blendMode;
				let o = t.length || -1;
				const l = t.hierarchy || [];
				for (let t = 0; t < l.length; t++) {
					const r = l[t].keys;
					if (r && 0 !== r.length)
						if (r[0].morphTargets) {
							const t = {};
							let e;
							for (e = 0; e < r.length; e++)
								if (r[e].morphTargets)
									for (let i = 0; i < r[e].morphTargets.length; i++) t[r[e].morphTargets[i]] = -1;
							for (const i in t) {
								const t = [],
									s = [];
								for (let n = 0; n !== r[e].morphTargets.length; ++n) {
									const n = r[e];
									t.push(n.time), s.push(n.morphTarget === i ? 1 : 0)
								}
								n.push(new hm(".morphTargetInfluence[" + i + "]", t, s))
							}
							o = t.length * (s || 1)
						} else {
							const s = ".bones[" + e[t].name + "]";
							i(fm, s + ".position", r, "pos", n), i(dm, s + ".quaternion", r, "rot", n), i(fm, s + ".scale", r, "scl", n)
						}
				}
				if (0 === n.length) return null;
				return new this(r, o, n, a)
			}
			resetDuration() {
				let t = 0;
				for (let e = 0, i = this.tracks.length; e !== i; ++e) {
					const i = this.tracks[e];
					t = Math.max(t, i.times[i.times.length - 1])
				}
				return this.duration = t, this
			}
			trim() {
				for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
				return this
			}
			validate() {
				let t = !0;
				for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
				return t
			}
			optimize() {
				for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
				return this
			}
			clone() {
				const t = [];
				for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
				return new this.constructor(this.name, this.duration, t, this.blendMode)
			}
			toJSON() {
				return this.constructor.toJSON(this)
			}
		}

		function gm(t) {
			if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
			const e = function (t) {
				switch (t.toLowerCase()) {
					case "scalar":
					case "double":
					case "float":
					case "number":
					case "integer":
						return hm;
					case "vector":
					case "vector2":
					case "vector3":
					case "vector4":
						return fm;
					case "color":
						return cm;
					case "quaternion":
						return dm;
					case "bool":
					case "boolean":
						return lm;
					case "string":
						return pm
				}
				throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
			}(t.type);
			if (void 0 === t.times) {
				const e = [],
					i = [];
				im.flattenJSON(t.keys, e, i, "value"), t.times = e, t.values = i
			}
			return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
		}
		const vm = {
			enabled: !1,
			files: {},
			add: function (t, e) {
				!1 !== this.enabled && (this.files[t] = e)
			},
			get: function (t) {
				if (!1 !== this.enabled) return this.files[t]
			},
			remove: function (t) {
				delete this.files[t]
			},
			clear: function () {
				this.files = {}
			}
		};

		function ym(t, e, i) {
			const n = this;
			let r, s = !1,
				a = 0,
				o = 0;
			const l = [];
			this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function (t) {
				o++, !1 === s && void 0 !== n.onStart && n.onStart(t, a, o), s = !0
			}, this.itemEnd = function (t) {
				a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (s = !1, void 0 !== n.onLoad && n.onLoad())
			}, this.itemError = function (t) {
				void 0 !== n.onError && n.onError(t)
			}, this.resolveURL = function (t) {
				return r ? r(t) : t
			}, this.setURLModifier = function (t) {
				return r = t, this
			}, this.addHandler = function (t, e) {
				return l.push(t, e), this
			}, this.removeHandler = function (t) {
				const e = l.indexOf(t);
				return -1 !== e && l.splice(e, 2), this
			}, this.getHandler = function (t) {
				for (let e = 0, i = l.length; e < i; e += 2) {
					const i = l[e],
						n = l[e + 1];
					if (i.global && (i.lastIndex = 0), i.test(t)) return n
				}
				return null
			}
		}
		const xm = new ym;

		function _m(t) {
			this.manager = void 0 !== t ? t : xm, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
		}
		Object.assign(_m.prototype, {
			load: function () {},
			loadAsync: function (t, e) {
				const i = this;
				return new Promise((function (n, r) {
					i.load(t, n, e, r)
				}))
			},
			parse: function () {},
			setCrossOrigin: function (t) {
				return this.crossOrigin = t, this
			},
			setWithCredentials: function (t) {
				return this.withCredentials = t, this
			},
			setPath: function (t) {
				return this.path = t, this
			},
			setResourcePath: function (t) {
				return this.resourcePath = t, this
			},
			setRequestHeader: function (t) {
				return this.requestHeader = t, this
			}
		});
		const wm = {};

		function bm(t) {
			_m.call(this, t)
		}
		bm.prototype = Object.assign(Object.create(_m.prototype), {
			constructor: bm,
			load: function (t, e, i, n) {
				void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
				const r = this,
					s = vm.get(t);
				if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function () {
					e && e(s), r.manager.itemEnd(t)
				}), 0), s;
				if (void 0 !== wm[t]) return void wm[t].push({
					onLoad: e,
					onProgress: i,
					onError: n
				});
				const a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
				let o;
				if (a) {
					const i = a[1],
						s = !!a[2];
					let o = a[3];
					o = decodeURIComponent(o), s && (o = atob(o));
					try {
						let n;
						const s = (this.responseType || "").toLowerCase();
						switch (s) {
							case "arraybuffer":
							case "blob":
								const t = new Uint8Array(o.length);
								for (let e = 0; e < o.length; e++) t[e] = o.charCodeAt(e);
								n = "blob" === s ? new Blob([t.buffer], {
									type: i
								}) : t.buffer;
								break;
							case "document":
								const e = new DOMParser;
								n = e.parseFromString(o, i);
								break;
							case "json":
								n = JSON.parse(o);
								break;
							default:
								n = o
						}
						setTimeout((function () {
							e && e(n), r.manager.itemEnd(t)
						}), 0)
					} catch (e) {
						setTimeout((function () {
							n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
						}), 0)
					}
				} else {
					wm[t] = [], wm[t].push({
						onLoad: e,
						onProgress: i,
						onError: n
					}), o = new XMLHttpRequest, o.open("GET", t, !0), o.addEventListener("load", (function (e) {
						const i = this.response,
							n = wm[t];
						if (delete wm[t], 200 === this.status || 0 === this.status) {
							this.status, vm.add(t, i);
							for (let t = 0, e = n.length; t < e; t++) {
								const e = n[t];
								e.onLoad && e.onLoad(i)
							}
							r.manager.itemEnd(t)
						} else {
							for (let t = 0, i = n.length; t < i; t++) {
								const i = n[t];
								i.onError && i.onError(e)
							}
							r.manager.itemError(t), r.manager.itemEnd(t)
						}
					}), !1), o.addEventListener("progress", (function (e) {
						const i = wm[t];
						for (let t = 0, n = i.length; t < n; t++) {
							const n = i[t];
							n.onProgress && n.onProgress(e)
						}
					}), !1), o.addEventListener("error", (function (e) {
						const i = wm[t];
						delete wm[t];
						for (let t = 0, n = i.length; t < n; t++) {
							const n = i[t];
							n.onError && n.onError(e)
						}
						r.manager.itemError(t), r.manager.itemEnd(t)
					}), !1), o.addEventListener("abort", (function (e) {
						const i = wm[t];
						delete wm[t];
						for (let t = 0, n = i.length; t < n; t++) {
							const n = i[t];
							n.onError && n.onError(e)
						}
						r.manager.itemError(t), r.manager.itemEnd(t)
					}), !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
					for (const t in this.requestHeader) o.setRequestHeader(t, this.requestHeader[t]);
					o.send(null)
				}
				return r.manager.itemStart(t), o
			},
			setResponseType: function (t) {
				return this.responseType = t, this
			},
			setMimeType: function (t) {
				return this.mimeType = t, this
			}
		});

		function Mm(t) {
			_m.call(this, t)
		}
		Mm.prototype = Object.assign(Object.create(_m.prototype), {
			constructor: Mm,
			load: function (t, e, i, n) {
				const r = this,
					s = [],
					a = new pf,
					o = new bm(this.manager);
				o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
				let l = 0;

				function c(c) {
					o.load(t[c], (function (t) {
						const i = r.parse(t, !0);
						s[c] = {
							width: i.width,
							height: i.height,
							format: i.format,
							mipmaps: i.mipmaps
						}, l += 1, 6 === l && (1 === i.mipmapCount && (a.minFilter = ko), a.image = s, a.format = i.format, a.needsUpdate = !0, e && e(a))
					}), i, n)
				}
				if (Array.isArray(t))
					for (let e = 0, i = t.length; e < i; ++e) c(e);
				else o.load(t, (function (t) {
					const i = r.parse(t, !0);
					if (i.isCubemap) {
						const t = i.mipmaps.length / i.mipmapCount;
						for (let e = 0; e < t; e++) {
							s[e] = {
								mipmaps: []
							};
							for (let t = 0; t < i.mipmapCount; t++) s[e].mipmaps.push(i.mipmaps[e * i.mipmapCount + t]), s[e].format = i.format, s[e].width = i.width, s[e].height = i.height
						}
						a.image = s
					} else a.image.width = i.width, a.image.height = i.height, a.mipmaps = i.mipmaps;
					1 === i.mipmapCount && (a.minFilter = ko), a.format = i.format, a.needsUpdate = !0, e && e(a)
				}), i, n);
				return a
			}
		});
		class Sm extends _m {
			constructor(t) {
				super(t)
			}
			load(t, e, i, n) {
				void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
				const r = this,
					s = vm.get(t);
				if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function () {
					e && e(s), r.manager.itemEnd(t)
				}), 0), s;
				const a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

				function o() {
					a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), vm.add(t, this), e && e(this), r.manager.itemEnd(t)
				}

				function l(e) {
					a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
				}
				return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a
			}
		}
		class Dm extends _m {
			constructor(t) {
				super(t)
			}
			load(t, e, i, n) {
				const r = new Yh,
					s = new Sm(this.manager);
				s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
				let a = 0;

				function o(i) {
					s.load(t[i], (function (t) {
						r.images[i] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r))
					}), void 0, n)
				}
				for (let e = 0; e < t.length; ++e) o(e);
				return r
			}
		}

		function Tm(t) {
			_m.call(this, t)
		}

		function Cm(t) {
			_m.call(this, t)
		}

		function Em() {
			this.type = "Curve", this.arcLengthDivisions = 200
		}
		Tm.prototype = Object.assign(Object.create(_m.prototype), {
			constructor: Tm,
			load: function (t, e, i, n) {
				const r = this,
					s = new Jh,
					a = new bm(this.manager);
				return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t, (function (t) {
					const i = r.parse(t);
					i && (void 0 !== i.image ? s.image = i.image : void 0 !== i.data && (s.image.width = i.width, s.image.height = i.height, s.image.data = i.data), s.wrapS = void 0 !== i.wrapS ? i.wrapS : Oo, s.wrapT = void 0 !== i.wrapT ? i.wrapT : Oo, s.magFilter = void 0 !== i.magFilter ? i.magFilter : ko, s.minFilter = void 0 !== i.minFilter ? i.minFilter : ko, s.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.encoding && (s.encoding = i.encoding), void 0 !== i.flipY && (s.flipY = i.flipY), void 0 !== i.format && (s.format = i.format), void 0 !== i.type && (s.type = i.type), void 0 !== i.mipmaps && (s.mipmaps = i.mipmaps, s.minFilter = Ro), 1 === i.mipmapCount && (s.minFilter = ko), void 0 !== i.generateMipmaps && (s.generateMipmaps = i.generateMipmaps), s.needsUpdate = !0, e && e(s, i))
				}), i, n), s
			}
		}), Cm.prototype = Object.assign(Object.create(_m.prototype), {
			constructor: Cm,
			load: function (t, e, i, n) {
				const r = new xl,
					s = new Sm(this.manager);
				return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, (function (i) {
					r.image = i;
					const n = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
					r.format = n ? jo : qo, r.needsUpdate = !0, void 0 !== e && e(r)
				}), i, n), r
			}
		}), Object.assign(Em.prototype, {
			getPoint: function () {
				return null
			},
			getPointAt: function (t, e) {
				const i = this.getUtoTmapping(t);
				return this.getPoint(i, e)
			},
			getPoints: function (t = 5) {
				const e = [];
				for (let i = 0; i <= t; i++) e.push(this.getPoint(i / t));
				return e
			},
			getSpacedPoints: function (t = 5) {
				const e = [];
				for (let i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
				return e
			},
			getLength: function () {
				const t = this.getLengths();
				return t[t.length - 1]
			},
			getLengths: function (t) {
				if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
				this.needsUpdate = !1;
				const e = [];
				let i, n = this.getPoint(0),
					r = 0;
				e.push(0);
				for (let s = 1; s <= t; s++) i = this.getPoint(s / t), r += i.distanceTo(n), e.push(r), n = i;
				return this.cacheArcLengths = e, e
			},
			updateArcLengths: function () {
				this.needsUpdate = !0, this.getLengths()
			},
			getUtoTmapping: function (t, e) {
				const i = this.getLengths();
				let n = 0;
				const r = i.length;
				let s;
				s = e || t * i[r - 1];
				let a, o = 0,
					l = r - 1;
				for (; o <= l;)
					if (n = Math.floor(o + (l - o) / 2), a = i[n] - s, a < 0) o = n + 1;
					else {
						if (!(a > 0)) {
							l = n;
							break
						}
						l = n - 1
					}
				if (n = l, i[n] === s) return n / (r - 1);
				const c = i[n];
				return (n + (s - c) / (i[n + 1] - c)) / (r - 1)
			},
			getTangent: function (t, e) {
				const i = 1e-4;
				let n = t - i,
					r = t + i;
				n < 0 && (n = 0), r > 1 && (r = 1);
				const s = this.getPoint(n),
					a = this.getPoint(r),
					o = e || (s.isVector2 ? new fl : new Sl);
				return o.copy(a).sub(s).normalize(), o
			},
			getTangentAt: function (t, e) {
				const i = this.getUtoTmapping(t);
				return this.getTangent(i, e)
			},
			computeFrenetFrames: function (t, e) {
				const i = new Sl,
					n = [],
					r = [],
					s = [],
					a = new Sl,
					o = new ec;
				for (let e = 0; e <= t; e++) {
					const i = e / t;
					n[e] = this.getTangentAt(i, new Sl), n[e].normalize()
				}
				r[0] = new Sl, s[0] = new Sl;
				let l = Number.MAX_VALUE;
				const c = Math.abs(n[0].x),
					h = Math.abs(n[0].y),
					u = Math.abs(n[0].z);
				c <= l && (l = c, i.set(1, 0, 0)), h <= l && (l = h, i.set(0, 1, 0)), u <= l && i.set(0, 0, 1), a.crossVectors(n[0], i).normalize(), r[0].crossVectors(n[0], a), s[0].crossVectors(n[0], r[0]);
				for (let e = 1; e <= t; e++) {
					if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(n[e - 1], n[e]), a.length() > Number.EPSILON) {
						a.normalize();
						const t = Math.acos(pl.clamp(n[e - 1].dot(n[e]), -1, 1));
						r[e].applyMatrix4(o.makeRotationAxis(a, t))
					}
					s[e].crossVectors(n[e], r[e])
				}
				if (!0 === e) {
					let e = Math.acos(pl.clamp(r[0].dot(r[t]), -1, 1));
					e /= t, n[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
					for (let i = 1; i <= t; i++) r[i].applyMatrix4(o.makeRotationAxis(n[i], e * i)), s[i].crossVectors(n[i], r[i])
				}
				return {
					tangents: n,
					normals: r,
					binormals: s
				}
			},
			clone: function () {
				return (new this.constructor).copy(this)
			},
			copy: function (t) {
				return this.arcLengthDivisions = t.arcLengthDivisions, this
			},
			toJSON: function () {
				const t = {
					metadata: {
						version: 4.5,
						type: "Curve",
						generator: "Curve.toJSON"
					}
				};
				return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
			},
			fromJSON: function (t) {
				return this.arcLengthDivisions = t.arcLengthDivisions, this
			}
		});
		class Am extends Em {
			constructor(t = 0, e = 0, i = 1, n = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0) {
				super(), this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o
			}
			getPoint(t, e) {
				const i = e || new fl,
					n = 2 * Math.PI;
				let r = this.aEndAngle - this.aStartAngle;
				const s = Math.abs(r) < Number.EPSILON;
				for (; r < 0;) r += n;
				for (; r > n;) r -= n;
				r < Number.EPSILON && (r = s ? 0 : n), !0 !== this.aClockwise || s || (r === n ? r = -n : r -= n);
				const a = this.aStartAngle + t * r;
				let o = this.aX + this.xRadius * Math.cos(a),
					l = this.aY + this.yRadius * Math.sin(a);
				if (0 !== this.aRotation) {
					const t = Math.cos(this.aRotation),
						e = Math.sin(this.aRotation),
						i = o - this.aX,
						n = l - this.aY;
					o = i * t - n * e + this.aX, l = i * e + n * t + this.aY
				}
				return i.set(o, l)
			}
			copy(t) {
				return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
			}
			toJSON() {
				const t = super.toJSON();
				return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
			}
			fromJSON(t) {
				return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
			}
		}
		Am.prototype.isEllipseCurve = !0;
		class Lm extends Am {
			constructor(t, e, i, n, r, s) {
				super(t, e, i, i, n, r, s), this.type = "ArcCurve"
			}
		}

		function Pm() {
			let t = 0,
				e = 0,
				i = 0,
				n = 0;

			function r(r, s, a, o) {
				t = r, e = a, i = -3 * r + 3 * s - 2 * a - o, n = 2 * r - 2 * s + a + o
			}
			return {
				initCatmullRom: function (t, e, i, n, s) {
					r(e, i, s * (i - t), s * (n - e))
				},
				initNonuniformCatmullRom: function (t, e, i, n, s, a, o) {
					let l = (e - t) / s - (i - t) / (s + a) + (i - e) / a,
						c = (i - e) / a - (n - e) / (a + o) + (n - i) / o;
					l *= a, c *= a, r(e, i, l, c)
				},
				calc: function (r) {
					const s = r * r;
					return t + e * r + i * s + n * (s * r)
				}
			}
		}
		Lm.prototype.isArcCurve = !0;
		const Om = new Sl,
			Im = new Pm,
			Fm = new Pm,
			Nm = new Pm;
		class zm extends Em {
			constructor(t = [], e = !1, i = "centripetal", n = .5) {
				super(), this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = i, this.tension = n
			}
			getPoint(t, e = new Sl) {
				const i = e,
					n = this.points,
					r = n.length,
					s = (r - (this.closed ? 0 : 1)) * t;
				let a, o, l = Math.floor(s),
					c = s - l;
				this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = n[(l - 1) % r] : (Om.subVectors(n[0], n[1]).add(n[0]), a = Om);
				const h = n[l % r],
					u = n[(l + 1) % r];
				if (this.closed || l + 2 < r ? o = n[(l + 2) % r] : (Om.subVectors(n[r - 1], n[r - 2]).add(n[r - 1]), o = Om), "centripetal" === this.curveType || "chordal" === this.curveType) {
					const t = "chordal" === this.curveType ? .5 : .25;
					let e = Math.pow(a.distanceToSquared(h), t),
						i = Math.pow(h.distanceToSquared(u), t),
						n = Math.pow(u.distanceToSquared(o), t);
					i < 1e-4 && (i = 1), e < 1e-4 && (e = i), n < 1e-4 && (n = i), Im.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, i, n), Fm.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, i, n), Nm.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, i, n)
				} else "catmullrom" === this.curveType && (Im.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), Fm.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), Nm.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
				return i.set(Im.calc(c), Fm.calc(c), Nm.calc(c)), i
			}
			copy(t) {
				super.copy(t), this.points = [];
				for (let e = 0, i = t.points.length; e < i; e++) {
					const i = t.points[e];
					this.points.push(i.clone())
				}
				return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
			}
			toJSON() {
				const t = super.toJSON();
				t.points = [];
				for (let e = 0, i = this.points.length; e < i; e++) {
					const i = this.points[e];
					t.points.push(i.toArray())
				}
				return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
			}
			fromJSON(t) {
				super.fromJSON(t), this.points = [];
				for (let e = 0, i = t.points.length; e < i; e++) {
					const i = t.points[e];
					this.points.push((new Sl).fromArray(i))
				}
				return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
			}
		}

		function km(t, e, i, n, r) {
			const s = .5 * (n - e),
				a = .5 * (r - i),
				o = t * t;
			return (2 * i - 2 * n + s + a) * (t * o) + (-3 * i + 3 * n - 2 * s - a) * o + s * t + i
		}

		function Rm(t, e, i, n) {
			return function (t, e) {
				const i = 1 - t;
				return i * i * e
			}(t, e) + function (t, e) {
				return 2 * (1 - t) * t * e
			}(t, i) + function (t, e) {
				return t * t * e
			}(t, n)
		}

		function Bm(t, e, i, n, r) {
			return function (t, e) {
				const i = 1 - t;
				return i * i * i * e
			}(t, e) + function (t, e) {
				const i = 1 - t;
				return 3 * i * i * t * e
			}(t, i) + function (t, e) {
				return 3 * (1 - t) * t * t * e
			}(t, n) + function (t, e) {
				return t * t * t * e
			}(t, r)
		}
		zm.prototype.isCatmullRomCurve3 = !0;
		class Um extends Em {
			constructor(t = new fl, e = new fl, i = new fl, n = new fl) {
				super(), this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
			}
			getPoint(t, e = new fl) {
				const i = e,
					n = this.v0,
					r = this.v1,
					s = this.v2,
					a = this.v3;
				return i.set(Bm(t, n.x, r.x, s.x, a.x), Bm(t, n.y, r.y, s.y, a.y)), i
			}
			copy(t) {
				return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
			}
			toJSON() {
				const t = super.toJSON();
				return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
			}
			fromJSON(t) {
				return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
			}
		}
		Um.prototype.isCubicBezierCurve = !0;
		class Vm extends Em {
			constructor(t = new Sl, e = new Sl, i = new Sl, n = new Sl) {
				super(), this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
			}
			getPoint(t, e = new Sl) {
				const i = e,
					n = this.v0,
					r = this.v1,
					s = this.v2,
					a = this.v3;
				return i.set(Bm(t, n.x, r.x, s.x, a.x), Bm(t, n.y, r.y, s.y, a.y), Bm(t, n.z, r.z, s.z, a.z)), i
			}
			copy(t) {
				return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
			}
			toJSON() {
				const t = super.toJSON();
				return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
			}
			fromJSON(t) {
				return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
			}
		}
		Vm.prototype.isCubicBezierCurve3 = !0;
		class Wm extends Em {
			constructor(t = new fl, e = new fl) {
				super(), this.type = "LineCurve", this.v1 = t, this.v2 = e
			}
			getPoint(t, e = new fl) {
				const i = e;
				return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
			}
			getPointAt(t, e) {
				return this.getPoint(t, e)
			}
			getTangent(t, e) {
				const i = e || new fl;
				return i.copy(this.v2).sub(this.v1).normalize(), i
			}
			copy(t) {
				return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
			}
			toJSON() {
				const t = super.toJSON();
				return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
			}
			fromJSON(t) {
				return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
			}
		}
		Wm.prototype.isLineCurve = !0;
		class Gm extends Em {
			constructor(t = new fl, e = new fl, i = new fl) {
				super(), this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i
			}
			getPoint(t, e = new fl) {
				const i = e,
					n = this.v0,
					r = this.v1,
					s = this.v2;
				return i.set(Rm(t, n.x, r.x, s.x), Rm(t, n.y, r.y, s.y)), i
			}
			copy(t) {
				return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
			}
			toJSON() {
				const t = super.toJSON();
				return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
			}
			fromJSON(t) {
				return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
			}
		}
		Gm.prototype.isQuadraticBezierCurve = !0;
		class Hm extends Em {
			constructor(t = new Sl, e = new Sl, i = new Sl) {
				super(), this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i
			}
			getPoint(t, e = new Sl) {
				const i = e,
					n = this.v0,
					r = this.v1,
					s = this.v2;
				return i.set(Rm(t, n.x, r.x, s.x), Rm(t, n.y, r.y, s.y), Rm(t, n.z, r.z, s.z)), i
			}
			copy(t) {
				return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
			}
			toJSON() {
				const t = super.toJSON();
				return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
			}
			fromJSON(t) {
				return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
			}
		}
		Hm.prototype.isQuadraticBezierCurve3 = !0;
		class jm extends Em {
			constructor(t = []) {
				super(), this.type = "SplineCurve", this.points = t
			}
			getPoint(t, e = new fl) {
				const i = e,
					n = this.points,
					r = (n.length - 1) * t,
					s = Math.floor(r),
					a = r - s,
					o = n[0 === s ? s : s - 1],
					l = n[s],
					c = n[s > n.length - 2 ? n.length - 1 : s + 1],
					h = n[s > n.length - 3 ? n.length - 1 : s + 2];
				return i.set(km(a, o.x, l.x, c.x, h.x), km(a, o.y, l.y, c.y, h.y)), i
			}
			copy(t) {
				super.copy(t), this.points = [];
				for (let e = 0, i = t.points.length; e < i; e++) {
					const i = t.points[e];
					this.points.push(i.clone())
				}
				return this
			}
			toJSON() {
				const t = super.toJSON();
				t.points = [];
				for (let e = 0, i = this.points.length; e < i; e++) {
					const i = this.points[e];
					t.points.push(i.toArray())
				}
				return t
			}
			fromJSON(t) {
				super.fromJSON(t), this.points = [];
				for (let e = 0, i = t.points.length; e < i; e++) {
					const i = t.points[e];
					this.points.push((new fl).fromArray(i))
				}
				return this
			}
		}
		jm.prototype.isSplineCurve = !0;
		var qm = Object.freeze({
			__proto__: null,
			ArcCurve: Lm,
			CatmullRomCurve3: zm,
			CubicBezierCurve: Um,
			CubicBezierCurve3: Vm,
			EllipseCurve: Am,
			LineCurve: Wm,
			LineCurve3: class extends Em {
				constructor(t = new Sl, e = new Sl) {
					super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = t, this.v2 = e
				}
				getPoint(t, e = new Sl) {
					const i = e;
					return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
				}
				getPointAt(t, e) {
					return this.getPoint(t, e)
				}
				copy(t) {
					return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
				}
				toJSON() {
					const t = super.toJSON();
					return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
				}
				fromJSON(t) {
					return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
				}
			},
			QuadraticBezierCurve: Gm,
			QuadraticBezierCurve3: Hm,
			SplineCurve: jm
		});
		class Xm extends Em {
			constructor() {
				super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1
			}
			add(t) {
				this.curves.push(t)
			}
			closePath() {
				const t = this.curves[0].getPoint(0),
					e = this.curves[this.curves.length - 1].getPoint(1);
				t.equals(e) || this.curves.push(new Wm(e, t))
			}
			getPoint(t) {
				const e = t * this.getLength(),
					i = this.getCurveLengths();
				let n = 0;
				for (; n < i.length;) {
					if (i[n] >= e) {
						const t = i[n] - e,
							r = this.curves[n],
							s = r.getLength(),
							a = 0 === s ? 0 : 1 - t / s;
						return r.getPointAt(a)
					}
					n++
				}
				return null
			}
			getLength() {
				const t = this.getCurveLengths();
				return t[t.length - 1]
			}
			updateArcLengths() {
				this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
			}
			getCurveLengths() {
				if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
				const t = [];
				let e = 0;
				for (let i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
				return this.cacheLengths = t, t
			}
			getSpacedPoints(t = 40) {
				const e = [];
				for (let i = 0; i <= t; i++) e.push(this.getPoint(i / t));
				return this.autoClose && e.push(e[0]), e
			}
			getPoints(t = 12) {
				const e = [];
				let i;
				for (let n = 0, r = this.curves; n < r.length; n++) {
					const s = r[n],
						a = s && s.isEllipseCurve ? 2 * t : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? t * s.points.length : t,
						o = s.getPoints(a);
					for (let t = 0; t < o.length; t++) {
						const n = o[t];
						i && i.equals(n) || (e.push(n), i = n)
					}
				}
				return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e
			}
			copy(t) {
				super.copy(t), this.curves = [];
				for (let e = 0, i = t.curves.length; e < i; e++) {
					const i = t.curves[e];
					this.curves.push(i.clone())
				}
				return this.autoClose = t.autoClose, this
			}
			toJSON() {
				const t = super.toJSON();
				t.autoClose = this.autoClose, t.curves = [];
				for (let e = 0, i = this.curves.length; e < i; e++) {
					const i = this.curves[e];
					t.curves.push(i.toJSON())
				}
				return t
			}
			fromJSON(t) {
				super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
				for (let e = 0, i = t.curves.length; e < i; e++) {
					const i = t.curves[e];
					this.curves.push((new qm[i.type]).fromJSON(i))
				}
				return this
			}
		}
		class Ym extends Xm {
			constructor(t) {
				super(), this.type = "Path", this.currentPoint = new fl, t && this.setFromPoints(t)
			}
			setFromPoints(t) {
				this.moveTo(t[0].x, t[0].y);
				for (let e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y);
				return this
			}
			moveTo(t, e) {
				return this.currentPoint.set(t, e), this
			}
			lineTo(t, e) {
				const i = new Wm(this.currentPoint.clone(), new fl(t, e));
				return this.curves.push(i), this.currentPoint.set(t, e), this
			}
			quadraticCurveTo(t, e, i, n) {
				const r = new Gm(this.currentPoint.clone(), new fl(t, e), new fl(i, n));
				return this.curves.push(r), this.currentPoint.set(i, n), this
			}
			bezierCurveTo(t, e, i, n, r, s) {
				const a = new Um(this.currentPoint.clone(), new fl(t, e), new fl(i, n), new fl(r, s));
				return this.curves.push(a), this.currentPoint.set(r, s), this
			}
			splineThru(t) {
				const e = [this.currentPoint.clone()].concat(t),
					i = new jm(e);
				return this.curves.push(i), this.currentPoint.copy(t[t.length - 1]), this
			}
			arc(t, e, i, n, r, s) {
				const a = this.currentPoint.x,
					o = this.currentPoint.y;
				return this.absarc(t + a, e + o, i, n, r, s), this
			}
			absarc(t, e, i, n, r, s) {
				return this.absellipse(t, e, i, i, n, r, s), this
			}
			ellipse(t, e, i, n, r, s, a, o) {
				const l = this.currentPoint.x,
					c = this.currentPoint.y;
				return this.absellipse(t + l, e + c, i, n, r, s, a, o), this
			}
			absellipse(t, e, i, n, r, s, a, o) {
				const l = new Am(t, e, i, n, r, s, a, o);
				if (this.curves.length > 0) {
					const t = l.getPoint(0);
					t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
				}
				this.curves.push(l);
				const c = l.getPoint(1);
				return this.currentPoint.copy(c), this
			}
			copy(t) {
				return super.copy(t), this.currentPoint.copy(t.currentPoint), this
			}
			toJSON() {
				const t = super.toJSON();
				return t.currentPoint = this.currentPoint.toArray(), t
			}
			fromJSON(t) {
				return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this
			}
		}
		class Zm extends Ym {
			constructor(t) {
				super(t), this.uuid = pl.generateUUID(), this.type = "Shape", this.holes = []
			}
			getPointsHoles(t) {
				const e = [];
				for (let i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
				return e
			}
			extractPoints(t) {
				return {
					shape: this.getPoints(t),
					holes: this.getPointsHoles(t)
				}
			}
			copy(t) {
				super.copy(t), this.holes = [];
				for (let e = 0, i = t.holes.length; e < i; e++) {
					const i = t.holes[e];
					this.holes.push(i.clone())
				}
				return this
			}
			toJSON() {
				const t = super.toJSON();
				t.uuid = this.uuid, t.holes = [];
				for (let e = 0, i = this.holes.length; e < i; e++) {
					const i = this.holes[e];
					t.holes.push(i.toJSON())
				}
				return t
			}
			fromJSON(t) {
				super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
				for (let e = 0, i = t.holes.length; e < i; e++) {
					const i = t.holes[e];
					this.holes.push((new Ym).fromJSON(i))
				}
				return this
			}
		}
		class Jm extends Tc {
			constructor(t, e = 1) {
				super(), this.type = "Light", this.color = new Jc(t), this.intensity = e
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this.intensity = t.intensity, this
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
			}
		}
		Jm.prototype.isLight = !0;
		class $m extends Jm {
			constructor(t, e, i) {
				super(t, i), this.type = "HemisphereLight", this.position.copy(Tc.DefaultUp), this.updateMatrix(), this.groundColor = new Jc(e)
			}
			copy(t) {
				return Jm.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
			}
		}
		$m.prototype.isHemisphereLight = !0;
		const Km = new ec,
			Qm = new Sl,
			tg = new Sl;
		class eg {
			constructor(t) {
				this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new fl(512, 512), this.map = null, this.mapPass = null, this.matrix = new ec, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Qh, this._frameExtents = new fl(1, 1), this._viewportCount = 1, this._viewports = [new wl(0, 0, 1, 1)]
			}
			getViewportCount() {
				return this._viewportCount
			}
			getFrustum() {
				return this._frustum
			}
			updateMatrices(t) {
				const e = this.camera,
					i = this.matrix;
				Qm.setFromMatrixPosition(t.matrixWorld), e.position.copy(Qm), tg.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(tg), e.updateMatrixWorld(), Km.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Km), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(e.projectionMatrix), i.multiply(e.matrixWorldInverse)
			}
			getViewport(t) {
				return this._viewports[t]
			}
			getFrameExtents() {
				return this._frameExtents
			}
			copy(t) {
				return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
			}
			clone() {
				return (new this.constructor).copy(this)
			}
			toJSON() {
				const t = {};
				return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
			}
		}
		class ig extends eg {
			constructor() {
				super(new jh(50, 1, .5, 500)), this.focus = 1
			}
			updateMatrices(t) {
				const e = this.camera,
					i = 2 * pl.RAD2DEG * t.angle * this.focus,
					n = this.mapSize.width / this.mapSize.height,
					r = t.distance || e.far;
				i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t)
			}
			copy(t) {
				return super.copy(t), this.focus = t.focus, this
			}
		}
		ig.prototype.isSpotLightShadow = !0;
		class ng extends Jm {
			constructor(t, e, i = 0, n = Math.PI / 3, r = 0, s = 1) {
				super(t, e), this.type = "SpotLight", this.position.copy(Tc.DefaultUp), this.updateMatrix(), this.target = new Tc, this.distance = i, this.angle = n, this.penumbra = r, this.decay = s, this.shadow = new ig
			}
			get power() {
				return this.intensity * Math.PI
			}
			set power(t) {
				this.intensity = t / Math.PI
			}
			copy(t) {
				return super.copy(t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
			}
		}
		ng.prototype.isSpotLight = !0;
		const rg = new ec,
			sg = new Sl,
			ag = new Sl;
		class og extends eg {
			constructor() {
				super(new jh(90, 1, .5, 500)), this._frameExtents = new fl(4, 2), this._viewportCount = 6, this._viewports = [new wl(2, 1, 1, 1), new wl(0, 1, 1, 1), new wl(3, 1, 1, 1), new wl(1, 1, 1, 1), new wl(3, 0, 1, 1), new wl(1, 0, 1, 1)], this._cubeDirections = [new Sl(1, 0, 0), new Sl(-1, 0, 0), new Sl(0, 0, 1), new Sl(0, 0, -1), new Sl(0, 1, 0), new Sl(0, -1, 0)], this._cubeUps = [new Sl(0, 1, 0), new Sl(0, 1, 0), new Sl(0, 1, 0), new Sl(0, 1, 0), new Sl(0, 0, 1), new Sl(0, 0, -1)]
			}
			updateMatrices(t, e = 0) {
				const i = this.camera,
					n = this.matrix,
					r = t.distance || i.far;
				r !== i.far && (i.far = r, i.updateProjectionMatrix()), sg.setFromMatrixPosition(t.matrixWorld), i.position.copy(sg), ag.copy(i.position), ag.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(ag), i.updateMatrixWorld(), n.makeTranslation(-sg.x, -sg.y, -sg.z), rg.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(rg)
			}
		}
		og.prototype.isPointLightShadow = !0;
		class lg extends Jm {
			constructor(t, e, i = 0, n = 1) {
				super(t, e), this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new og
			}
			get power() {
				return 4 * this.intensity * Math.PI
			}
			set power(t) {
				this.intensity = t / (4 * Math.PI)
			}
			copy(t) {
				return super.copy(t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
			}
		}
		lg.prototype.isPointLight = !0;
		class cg extends Hh {
			constructor(t = -1, e = 1, i = 1, n = -1, r = .1, s = 2e3) {
				super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = r, this.far = s, this.updateProjectionMatrix()
			}
			copy(t, e) {
				return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
			}
			setViewOffset(t, e, i, n, r, s) {
				null === this.view && (this.view = {
					enabled: !0,
					fullWidth: 1,
					fullHeight: 1,
					offsetX: 0,
					offsetY: 0,
					width: 1,
					height: 1
				}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
			}
			clearViewOffset() {
				null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
			}
			updateProjectionMatrix() {
				const t = (this.right - this.left) / (2 * this.zoom),
					e = (this.top - this.bottom) / (2 * this.zoom),
					i = (this.right + this.left) / 2,
					n = (this.top + this.bottom) / 2;
				let r = i - t,
					s = i + t,
					a = n + e,
					o = n - e;
				if (null !== this.view && this.view.enabled) {
					const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
						e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
					r += t * this.view.offsetX, s = r + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height
				}
				this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
			}
			toJSON(t) {
				const e = Tc.prototype.toJSON.call(this, t);
				return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
			}
		}
		cg.prototype.isOrthographicCamera = !0;
		class hg extends eg {
			constructor() {
				super(new cg(-5, 5, 5, -5, .5, 500))
			}
		}
		hg.prototype.isDirectionalLightShadow = !0;
		class ug extends Jm {
			constructor(t, e) {
				super(t, e), this.type = "DirectionalLight", this.position.copy(Tc.DefaultUp), this.updateMatrix(), this.target = new Tc, this.shadow = new hg
			}
			copy(t) {
				return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
			}
		}
		ug.prototype.isDirectionalLight = !0;
		class dg extends Jm {
			constructor(t, e) {
				super(t, e), this.type = "AmbientLight"
			}
		}
		dg.prototype.isAmbientLight = !0;
		class pg extends Jm {
			constructor(t, e, i = 10, n = 10) {
				super(t, e), this.type = "RectAreaLight", this.width = i, this.height = n
			}
			copy(t) {
				return super.copy(t), this.width = t.width, this.height = t.height, this
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return e.object.width = this.width, e.object.height = this.height, e
			}
		}
		pg.prototype.isRectAreaLight = !0;
		class fg {
			constructor() {
				this.coefficients = [];
				for (let t = 0; t < 9; t++) this.coefficients.push(new Sl)
			}
			set(t) {
				for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
				return this
			}
			zero() {
				for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
				return this
			}
			getAt(t, e) {
				const i = t.x,
					n = t.y,
					r = t.z,
					s = this.coefficients;
				return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * n), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * i), e.addScaledVector(s[4], i * n * 1.092548), e.addScaledVector(s[5], n * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], i * r * 1.092548), e.addScaledVector(s[8], .546274 * (i * i - n * n)), e
			}
			getIrradianceAt(t, e) {
				const i = t.x,
					n = t.y,
					r = t.z,
					s = this.coefficients;
				return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * n), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * i), e.addScaledVector(s[4], .858086 * i * n), e.addScaledVector(s[5], .858086 * n * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * i * r), e.addScaledVector(s[8], .429043 * (i * i - n * n)), e
			}
			add(t) {
				for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
				return this
			}
			addScaledSH(t, e) {
				for (let i = 0; i < 9; i++) this.coefficients[i].addScaledVector(t.coefficients[i], e);
				return this
			}
			scale(t) {
				for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
				return this
			}
			lerp(t, e) {
				for (let i = 0; i < 9; i++) this.coefficients[i].lerp(t.coefficients[i], e);
				return this
			}
			equals(t) {
				for (let e = 0; e < 9; e++)
					if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
				return !0
			}
			copy(t) {
				return this.set(t.coefficients)
			}
			clone() {
				return (new this.constructor).copy(this)
			}
			fromArray(t, e = 0) {
				const i = this.coefficients;
				for (let n = 0; n < 9; n++) i[n].fromArray(t, e + 3 * n);
				return this
			}
			toArray(t = [], e = 0) {
				const i = this.coefficients;
				for (let n = 0; n < 9; n++) i[n].toArray(t, e + 3 * n);
				return t
			}
			static getBasisAt(t, e) {
				const i = t.x,
					n = t.y,
					r = t.z;
				e[0] = .282095, e[1] = .488603 * n, e[2] = .488603 * r, e[3] = .488603 * i, e[4] = 1.092548 * i * n, e[5] = 1.092548 * n * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * i * r, e[8] = .546274 * (i * i - n * n)
			}
		}
		fg.prototype.isSphericalHarmonics3 = !0;
		class mg extends Jm {
			constructor(t = new fg, e = 1) {
				super(void 0, e), this.sh = t
			}
			copy(t) {
				return super.copy(t), this.sh.copy(t.sh), this
			}
			fromJSON(t) {
				return this.intensity = t.intensity, this.sh.fromArray(t.sh), this
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return e.object.sh = this.sh.toArray(), e
			}
		}
		mg.prototype.isLightProbe = !0;
		const gg = function (t) {
			const e = t.lastIndexOf("/");
			return -1 === e ? "./" : t.substr(0, e + 1)
		};

		function vg() {
			xh.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
		}

		function yg(t, e, i, n) {
			"number" == typeof i && (n = i, i = !1), th.call(this, t, e, i), this.meshPerAttribute = n || 1
		}
		vg.prototype = Object.assign(Object.create(xh.prototype), {
			constructor: vg,
			isInstancedBufferGeometry: !0,
			copy: function (t) {
				return xh.prototype.copy.call(this, t), this.instanceCount = t.instanceCount, this
			},
			clone: function () {
				return (new this.constructor).copy(this)
			},
			toJSON: function () {
				const t = xh.prototype.toJSON.call(this);
				return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t
			}
		}), yg.prototype = Object.assign(Object.create(th.prototype), {
			constructor: yg,
			isInstancedBufferAttribute: !0,
			copy: function (t) {
				return th.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
			},
			toJSON: function () {
				const t = th.prototype.toJSON.call(this);
				return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
			}
		});

		function xg(t) {
			_m.call(this, t), this.options = {
				premultiplyAlpha: "none"
			}
		}
		xg.prototype = Object.assign(Object.create(_m.prototype), {
			constructor: xg,
			isImageBitmapLoader: !0,
			setOptions: function (t) {
				return this.options = t, this
			},
			load: function (t, e, i, n) {
				void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
				const r = this,
					s = vm.get(t);
				if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function () {
					e && e(s), r.manager.itemEnd(t)
				}), 0), s;
				const a = {};
				a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then((function (t) {
					return t.blob()
				})).then((function (t) {
					return createImageBitmap(t, Object.assign(r.options, {
						colorSpaceConversion: "none"
					}))
				})).then((function (i) {
					vm.add(t, i), e && e(i), r.manager.itemEnd(t)
				})).catch((function (e) {
					n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
				})), r.manager.itemStart(t)
			}
		});
		class _g {
			constructor() {
				this.type = "ShapePath", this.color = new Jc, this.subPaths = [], this.currentPath = null
			}
			moveTo(t, e) {
				return this.currentPath = new Ym, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
			}
			lineTo(t, e) {
				return this.currentPath.lineTo(t, e), this
			}
			quadraticCurveTo(t, e, i, n) {
				return this.currentPath.quadraticCurveTo(t, e, i, n), this
			}
			bezierCurveTo(t, e, i, n, r, s) {
				return this.currentPath.bezierCurveTo(t, e, i, n, r, s), this
			}
			splineThru(t) {
				return this.currentPath.splineThru(t), this
			}
			toShapes(t, e) {
				function i(t) {
					const e = [];
					for (let i = 0, n = t.length; i < n; i++) {
						const n = t[i],
							r = new Zm;
						r.curves = n.curves, e.push(r)
					}
					return e
				}

				function n(t, e) {
					const i = e.length;
					let n = !1;
					for (let r = i - 1, s = 0; s < i; r = s++) {
						let i = e[r],
							a = e[s],
							o = a.x - i.x,
							l = a.y - i.y;
						if (Math.abs(l) > Number.EPSILON) {
							if (l < 0 && (i = e[s], o = -o, a = e[r], l = -l), t.y < i.y || t.y > a.y) continue;
							if (t.y === i.y) {
								if (t.x === i.x) return !0
							} else {
								const e = l * (t.x - i.x) - o * (t.y - i.y);
								if (0 === e) return !0;
								if (e < 0) continue;
								n = !n
							}
						} else {
							if (t.y !== i.y) continue;
							if (a.x <= t.x && t.x <= i.x || i.x <= t.x && t.x <= a.x) return !0
						}
					}
					return n
				}
				const r = Bf.isClockWise,
					s = this.subPaths;
				if (0 === s.length) return [];
				if (!0 === e) return i(s);
				let a, o, l;
				const c = [];
				if (1 === s.length) return o = s[0], l = new Zm, l.curves = o.curves, c.push(l), c;
				let h = !r(s[0].getPoints());
				h = t ? !h : h;
				const u = [],
					d = [];
				let p, f, m = [],
					g = 0;
				d[g] = void 0, m[g] = [];
				for (let e = 0, i = s.length; e < i; e++) o = s[e], p = o.getPoints(), a = r(p), a = t ? !a : a, a ? (!h && d[g] && g++, d[g] = {
					s: new Zm,
					p: p
				}, d[g].s.curves = o.curves, h && g++, m[g] = []) : m[g].push({
					h: o,
					p: p[0]
				});
				if (!d[0]) return i(s);
				if (d.length > 1) {
					let t = !1;
					const e = [];
					for (let t = 0, e = d.length; t < e; t++) u[t] = [];
					for (let i = 0, r = d.length; i < r; i++) {
						const r = m[i];
						for (let s = 0; s < r.length; s++) {
							const a = r[s];
							let o = !0;
							for (let r = 0; r < d.length; r++) n(a.p, d[r].p) && (i !== r && e.push({
								froms: i,
								tos: r,
								hole: s
							}), o ? (o = !1, u[r].push(a)) : t = !0);
							o && u[i].push(a)
						}
					}
					e.length > 0 && (t || (m = u))
				}
				for (let t = 0, e = d.length; t < e; t++) {
					l = d[t].s, c.push(l), f = m[t];
					for (let t = 0, e = f.length; t < e; t++) l.holes.push(f[t].h)
				}
				return c
			}
		}
		class wg {
			constructor(t) {
				this.type = "Font", this.data = t
			}
			generateShapes(t, e = 100) {
				const i = [],
					n = function (t, e, i) {
						const n = Array.from(t),
							r = e / i.resolution,
							s = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r,
							a = [];
						let o = 0,
							l = 0;
						for (let t = 0; t < n.length; t++) {
							const e = n[t];
							if ("\n" === e) o = 0, l -= s;
							else {
								const t = bg(e, r, o, l, i);
								o += t.offsetX, a.push(t.path)
							}
						}
						return a
					}(t, e, this.data);
				for (let t = 0, e = n.length; t < e; t++) Array.prototype.push.apply(i, n[t].toShapes());
				return i
			}
		}

		function bg(t, e, i, n, r) {
			const s = r.glyphs[t] || r.glyphs["?"];
			if (!s) return;
			const a = new _g;
			let o, l, c, h, u, d, p, f;
			if (s.o) {
				const t = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
				for (let r = 0, s = t.length; r < s;) {
					switch (t[r++]) {
						case "m":
							o = t[r++] * e + i, l = t[r++] * e + n, a.moveTo(o, l);
							break;
						case "l":
							o = t[r++] * e + i, l = t[r++] * e + n, a.lineTo(o, l);
							break;
						case "q":
							c = t[r++] * e + i, h = t[r++] * e + n, u = t[r++] * e + i, d = t[r++] * e + n, a.quadraticCurveTo(u, d, c, h);
							break;
						case "b":
							c = t[r++] * e + i, h = t[r++] * e + n, u = t[r++] * e + i, d = t[r++] * e + n, p = t[r++] * e + i, f = t[r++] * e + n, a.bezierCurveTo(u, d, p, f, c, h)
					}
				}
			}
			return {
				offsetX: s.ha * e,
				path: a
			}
		}
		wg.prototype.isFont = !0;
		let Mg;
		const Sg = function () {
			return void 0 === Mg && (Mg = new(window.AudioContext || window.webkitAudioContext)), Mg
		};
		class Dg extends _m {
			constructor(t) {
				super(t)
			}
			load(t, e, i, n) {
				const r = this,
					s = new bm(this.manager);
				s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (function (i) {
					try {
						const t = i.slice(0);
						Sg().decodeAudioData(t, (function (t) {
							e(t)
						}))
					} catch (e) {
						n && n(e), r.manager.itemError(t)
					}
				}), i, n)
			}
		}(class extends mg {
			constructor(t, e, i = 1) {
				super(void 0, i);
				const n = (new Jc).set(t),
					r = (new Jc).set(e),
					s = new Sl(n.r, n.g, n.b),
					a = new Sl(r.r, r.g, r.b),
					o = Math.sqrt(Math.PI),
					l = o * Math.sqrt(.75);
				this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)
			}
		}).prototype.isHemisphereLightProbe = !0;
		(class extends mg {
			constructor(t, e = 1) {
				super(void 0, e);
				const i = (new Jc).set(t);
				this.sh.coefficients[0].set(i.r, i.g, i.b).multiplyScalar(2 * Math.sqrt(Math.PI))
			}
		}).prototype.isAmbientLightProbe = !0;
		new ec, new ec;
		class Tg extends Tc {
			constructor(t) {
				super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
			}
			getOutput() {
				return this.gain
			}
			setNodeSource(t) {
				return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
			}
			setMediaElementSource(t) {
				return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
			}
			setMediaStreamSource(t) {
				return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this
			}
			setBuffer(t) {
				return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
			}
			play(t = 0) {
				if (!0 === this.isPlaying) return;
				if (!1 === this.hasPlaybackControl) return;
				this._startedAt = this.context.currentTime + t;
				const e = this.context.createBufferSource();
				return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
			}
			pause() {
				if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this
			}
			stop() {
				if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this
			}
			connect() {
				if (this.filters.length > 0) {
					this.source.connect(this.filters[0]);
					for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
					this.filters[this.filters.length - 1].connect(this.getOutput())
				} else this.source.connect(this.getOutput());
				return this._connected = !0, this
			}
			disconnect() {
				if (this.filters.length > 0) {
					this.source.disconnect(this.filters[0]);
					for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
					this.filters[this.filters.length - 1].disconnect(this.getOutput())
				} else this.source.disconnect(this.getOutput());
				return this._connected = !1, this
			}
			getFilters() {
				return this.filters
			}
			setFilters(t) {
				return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this
			}
			setDetune(t) {
				if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
			}
			getDetune() {
				return this.detune
			}
			getFilter() {
				return this.getFilters()[0]
			}
			setFilter(t) {
				return this.setFilters(t ? [t] : [])
			}
			setPlaybackRate(t) {
				if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this
			}
			getPlaybackRate() {
				return this.playbackRate
			}
			onEnded() {
				this.isPlaying = !1
			}
			getLoop() {
				return !1 !== this.hasPlaybackControl && this.loop
			}
			setLoop(t) {
				if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this
			}
			setLoopStart(t) {
				return this.loopStart = t, this
			}
			setLoopEnd(t) {
				return this.loopEnd = t, this
			}
			getVolume() {
				return this.gain.gain.value
			}
			setVolume(t) {
				return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
			}
		}
		class Cg {
			constructor(t, e, i) {
				let n, r, s;
				switch (this.binding = t, this.valueSize = i, e) {
					case "quaternion":
						n = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i), this._workIndex = 5;
						break;
					case "string":
					case "bool":
						n = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * i);
						break;
					default:
						n = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i)
				}
				this._mixBufferRegion = n, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
			}
			accumulate(t, e) {
				const i = this.buffer,
					n = this.valueSize,
					r = t * n + n;
				let s = this.cumulativeWeight;
				if (0 === s) {
					for (let t = 0; t !== n; ++t) i[r + t] = i[t];
					s = e
				} else {
					s += e;
					const t = e / s;
					this._mixBufferRegion(i, r, 0, t, n)
				}
				this.cumulativeWeight = s
			}
			accumulateAdditive(t) {
				const e = this.buffer,
					i = this.valueSize,
					n = i * this._addIndex;
				0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, n, 0, t, i), this.cumulativeWeightAdditive += t
			}
			apply(t) {
				const e = this.valueSize,
					i = this.buffer,
					n = t * e + e,
					r = this.cumulativeWeight,
					s = this.cumulativeWeightAdditive,
					a = this.binding;
				if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
					const t = e * this._origIndex;
					this._mixBufferRegion(i, n, t, 1 - r, e)
				}
				s > 0 && this._mixBufferRegionAdditive(i, n, this._addIndex * e, 1, e);
				for (let t = e, r = e + e; t !== r; ++t)
					if (i[t] !== i[t + e]) {
						a.setValue(i, n);
						break
					}
			}
			saveOriginalState() {
				const t = this.binding,
					e = this.buffer,
					i = this.valueSize,
					n = i * this._origIndex;
				t.getValue(e, n);
				for (let t = i, r = n; t !== r; ++t) e[t] = e[n + t % i];
				this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
			}
			restoreOriginalState() {
				const t = 3 * this.valueSize;
				this.binding.setValue(this.buffer, t)
			}
			_setAdditiveIdentityNumeric() {
				const t = this._addIndex * this.valueSize,
					e = t + this.valueSize;
				for (let i = t; i < e; i++) this.buffer[i] = 0
			}
			_setAdditiveIdentityQuaternion() {
				this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
			}
			_setAdditiveIdentityOther() {
				const t = this._origIndex * this.valueSize,
					e = this._addIndex * this.valueSize;
				for (let i = 0; i < this.valueSize; i++) this.buffer[e + i] = this.buffer[t + i]
			}
			_select(t, e, i, n, r) {
				if (n >= .5)
					for (let n = 0; n !== r; ++n) t[e + n] = t[i + n]
			}
			_slerp(t, e, i, n) {
				Ml.slerpFlat(t, e, t, e, t, i, n)
			}
			_slerpAdditive(t, e, i, n, r) {
				const s = this._workIndex * r;
				Ml.multiplyQuaternionsFlat(t, s, t, e, t, i), Ml.slerpFlat(t, e, t, e, t, s, n)
			}
			_lerp(t, e, i, n, r) {
				const s = 1 - n;
				for (let a = 0; a !== r; ++a) {
					const r = e + a;
					t[r] = t[r] * s + t[i + a] * n
				}
			}
			_lerpAdditive(t, e, i, n, r) {
				for (let s = 0; s !== r; ++s) {
					const r = e + s;
					t[r] = t[r] + t[i + s] * n
				}
			}
		}
		const Eg = "\\[\\]\\.:\\/",
			Ag = new RegExp("[\\[\\]\\.:\\/]", "g"),
			Lg = "[^\\[\\]\\.:\\/]",
			Pg = "[^" + Eg.replace("\\.", "") + "]",
			Og = /((?:WC+[\/:])*)/.source.replace("WC", Lg),
			Ig = /(WCOD+)?/.source.replace("WCOD", Pg),
			Fg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Lg),
			Ng = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Lg),
			zg = new RegExp("^" + Og + Ig + Fg + Ng + "$"),
			kg = ["material", "materials", "bones"];

		function Rg(t, e, i) {
			const n = i || Bg.parseTrackName(e);
			this._targetGroup = t, this._bindings = t.subscribe_(e, n)
		}

		function Bg(t, e, i) {
			this.path = e, this.parsedPath = i || Bg.parseTrackName(e), this.node = Bg.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
		}
		Object.assign(Rg.prototype, {
			getValue: function (t, e) {
				this.bind();
				const i = this._targetGroup.nCachedObjects_,
					n = this._bindings[i];
				void 0 !== n && n.getValue(t, e)
			},
			setValue: function (t, e) {
				const i = this._bindings;
				for (let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
			},
			bind: function () {
				const t = this._bindings;
				for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
			},
			unbind: function () {
				const t = this._bindings;
				for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
			}
		}), Object.assign(Bg, {
			Composite: Rg,
			create: function (t, e, i) {
				return t && t.isAnimationObjectGroup ? new Bg.Composite(t, e, i) : new Bg(t, e, i)
			},
			sanitizeNodeName: function (t) {
				return t.replace(/\s/g, "_").replace(Ag, "")
			},
			parseTrackName: function (t) {
				const e = zg.exec(t);
				if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
				const i = {
						nodeName: e[2],
						objectName: e[3],
						objectIndex: e[4],
						propertyName: e[5],
						propertyIndex: e[6]
					},
					n = i.nodeName && i.nodeName.lastIndexOf(".");
				if (void 0 !== n && -1 !== n) {
					const t = i.nodeName.substring(n + 1); - 1 !== kg.indexOf(t) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = t)
				}
				if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
				return i
			},
			findNode: function (t, e) {
				if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
				if (t.skeleton) {
					const i = t.skeleton.getBoneByName(e);
					if (void 0 !== i) return i
				}
				if (t.children) {
					const i = function (t) {
							for (let n = 0; n < t.length; n++) {
								const r = t[n];
								if (r.name === e || r.uuid === e) return r;
								const s = i(r.children);
								if (s) return s
							}
							return null
						},
						n = i(t.children);
					if (n) return n
				}
				return null
			}
		}), Object.assign(Bg.prototype, {
			_getValue_unavailable: function () {},
			_setValue_unavailable: function () {},
			BindingType: {
				Direct: 0,
				EntireArray: 1,
				ArrayElement: 2,
				HasFromToArray: 3
			},
			Versioning: {
				None: 0,
				NeedsUpdate: 1,
				MatrixWorldNeedsUpdate: 2
			},
			GetterByBindingType: [function (t, e) {
				t[e] = this.node[this.propertyName]
			}, function (t, e) {
				const i = this.resolvedProperty;
				for (let n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
			}, function (t, e) {
				t[e] = this.resolvedProperty[this.propertyIndex]
			}, function (t, e) {
				this.resolvedProperty.toArray(t, e)
			}],
			SetterByBindingTypeAndVersioning: [
				[function (t, e) {
					this.targetObject[this.propertyName] = t[e]
				}, function (t, e) {
					this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
				}, function (t, e) {
					this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function (t, e) {
					const i = this.resolvedProperty;
					for (let n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
				}, function (t, e) {
					const i = this.resolvedProperty;
					for (let n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
					this.targetObject.needsUpdate = !0
				}, function (t, e) {
					const i = this.resolvedProperty;
					for (let n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
					this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function (t, e) {
					this.resolvedProperty[this.propertyIndex] = t[e]
				}, function (t, e) {
					this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
				}, function (t, e) {
					this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function (t, e) {
					this.resolvedProperty.fromArray(t, e)
				}, function (t, e) {
					this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
				}, function (t, e) {
					this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
				}]
			],
			getValue: function (t, e) {
				this.bind(), this.getValue(t, e)
			},
			setValue: function (t, e) {
				this.bind(), this.setValue(t, e)
			},
			bind: function () {
				let t = this.node;
				const e = this.parsedPath,
					i = e.objectName,
					n = e.propertyName;
				let r = e.propertyIndex;
				if (t || (t = Bg.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return;
				if (i) {
					let n = e.objectIndex;
					switch (i) {
						case "materials":
							if (!t.material) return;
							if (!t.material.materials) return;
							t = t.material.materials;
							break;
						case "bones":
							if (!t.skeleton) return;
							t = t.skeleton.bones;
							for (let e = 0; e < t.length; e++)
								if (t[e].name === n) {
									n = e;
									break
								}
							break;
						default:
							if (void 0 === t[i]) return;
							t = t[i]
					}
					if (void 0 !== n) {
						if (void 0 === t[n]) return;
						t = t[n]
					}
				}
				const s = t[n];
				if (void 0 === s) {
					e.nodeName;
					return
				}
				let a = this.Versioning.None;
				this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
				let o = this.BindingType.Direct;
				if (void 0 !== r) {
					if ("morphTargetInfluences" === n) {
						if (!t.geometry) return;
						if (!t.geometry.isBufferGeometry) return;
						if (!t.geometry.morphAttributes) return;
						void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
					}
					o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
				} else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
				this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a]
			},
			unbind: function () {
				this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
			}
		}), Object.assign(Bg.prototype, {
			_getValue_unbound: Bg.prototype.getValue,
			_setValue_unbound: Bg.prototype.setValue
		});
		class Ug {
			constructor(t, e, i = null, n = e.blendMode) {
				this._mixer = t, this._clip = e, this._localRoot = i, this.blendMode = n;
				const r = e.tracks,
					s = r.length,
					a = new Array(s),
					o = {
						endingStart: Ko,
						endingEnd: Ko
					};
				for (let t = 0; t !== s; ++t) {
					const e = r[t].createInterpolant(null);
					a[t] = e, e.settings = o
				}
				this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
			}
			play() {
				return this._mixer._activateAction(this), this
			}
			stop() {
				return this._mixer._deactivateAction(this), this.reset()
			}
			reset() {
				return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
			}
			isRunning() {
				return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
			}
			isScheduled() {
				return this._mixer._isActiveAction(this)
			}
			startAt(t) {
				return this._startTime = t, this
			}
			setLoop(t, e) {
				return this.loop = t, this.repetitions = e, this
			}
			setEffectiveWeight(t) {
				return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
			}
			getEffectiveWeight() {
				return this._effectiveWeight
			}
			fadeIn(t) {
				return this._scheduleFading(t, 0, 1)
			}
			fadeOut(t) {
				return this._scheduleFading(t, 1, 0)
			}
			crossFadeFrom(t, e, i) {
				if (t.fadeOut(e), this.fadeIn(e), i) {
					const i = this._clip.duration,
						n = t._clip.duration,
						r = n / i,
						s = i / n;
					t.warp(1, r, e), this.warp(s, 1, e)
				}
				return this
			}
			crossFadeTo(t, e, i) {
				return t.crossFadeFrom(this, e, i)
			}
			stopFading() {
				const t = this._weightInterpolant;
				return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
			}
			setEffectiveTimeScale(t) {
				return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
			}
			getEffectiveTimeScale() {
				return this._effectiveTimeScale
			}
			setDuration(t) {
				return this.timeScale = this._clip.duration / t, this.stopWarping()
			}
			syncWith(t) {
				return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
			}
			halt(t) {
				return this.warp(this._effectiveTimeScale, 0, t)
			}
			warp(t, e, i) {
				const n = this._mixer,
					r = n.time,
					s = this.timeScale;
				let a = this._timeScaleInterpolant;
				null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
				const o = a.parameterPositions,
					l = a.sampleValues;
				return o[0] = r, o[1] = r + i, l[0] = t / s, l[1] = e / s, this
			}
			stopWarping() {
				const t = this._timeScaleInterpolant;
				return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
			}
			getMixer() {
				return this._mixer
			}
			getClip() {
				return this._clip
			}
			getRoot() {
				return this._localRoot || this._mixer._root
			}
			_update(t, e, i, n) {
				if (!this.enabled) return void this._updateWeight(t);
				const r = this._startTime;
				if (null !== r) {
					const n = (t - r) * i;
					if (n < 0 || 0 === i) return;
					this._startTime = null, e = i * n
				}
				e *= this._updateTimeScale(t);
				const s = this._updateTime(e),
					a = this._updateWeight(t);
				if (a > 0) {
					const t = this._interpolants,
						e = this._propertyBindings;
					switch (this.blendMode) {
						case 2501:
							for (let i = 0, n = t.length; i !== n; ++i) t[i].evaluate(s), e[i].accumulateAdditive(a);
							break;
						case el:
						default:
							for (let i = 0, r = t.length; i !== r; ++i) t[i].evaluate(s), e[i].accumulate(n, a)
					}
				}
			}
			_updateWeight(t) {
				let e = 0;
				if (this.enabled) {
					e = this.weight;
					const i = this._weightInterpolant;
					if (null !== i) {
						const n = i.evaluate(t)[0];
						e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
					}
				}
				return this._effectiveWeight = e, e
			}
			_updateTimeScale(t) {
				let e = 0;
				if (!this.paused) {
					e = this.timeScale;
					const i = this._timeScaleInterpolant;
					if (null !== i) {
						e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
					}
				}
				return this._effectiveTimeScale = e, e
			}
			_updateTime(t) {
				const e = this._clip.duration,
					i = this.loop;
				let n = this.time + t,
					r = this._loopCount;
				const s = 2202 === i;
				if (0 === t) return -1 === r ? n : s && 1 == (1 & r) ? e - n : n;
				if (2200 === i) {
					-1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
					t: {
						if (n >= e) n = e;
						else {
							if (!(n < 0)) {
								this.time = n;
								break t
							}
							n = 0
						}
						this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
						this.time = n,
						this._mixer.dispatchEvent({
							type: "finished",
							action: this,
							direction: t < 0 ? -1 : 1
						})
					}
				} else {
					if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), n >= e || n < 0) {
						const i = Math.floor(n / e);
						n -= e * i, r += Math.abs(i);
						const a = this.repetitions - r;
						if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, n = t > 0 ? e : 0, this.time = n, this._mixer.dispatchEvent({
							type: "finished",
							action: this,
							direction: t > 0 ? 1 : -1
						});
						else {
							if (1 === a) {
								const e = t < 0;
								this._setEndings(e, !e, s)
							} else this._setEndings(!1, !1, s);
							this._loopCount = r, this.time = n, this._mixer.dispatchEvent({
								type: "loop",
								action: this,
								loopDelta: i
							})
						}
					} else this.time = n;
					if (s && 1 == (1 & r)) return e - n
				}
				return n
			}
			_setEndings(t, e, i) {
				const n = this._interpolantSettings;
				i ? (n.endingStart = Qo, n.endingEnd = Qo) : (n.endingStart = t ? this.zeroSlopeAtStart ? Qo : Ko : tl, n.endingEnd = e ? this.zeroSlopeAtEnd ? Qo : Ko : tl)
			}
			_scheduleFading(t, e, i) {
				const n = this._mixer,
					r = n.time;
				let s = this._weightInterpolant;
				null === s && (s = n._lendControlInterpolant(), this._weightInterpolant = s);
				const a = s.parameterPositions,
					o = s.sampleValues;
				return a[0] = r, o[0] = e, a[1] = r + t, o[1] = i, this
			}
		}(class extends hl {
			constructor(t) {
				super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
			}
			_bindAction(t, e) {
				const i = t._localRoot || this._root,
					n = t._clip.tracks,
					r = n.length,
					s = t._propertyBindings,
					a = t._interpolants,
					o = i.uuid,
					l = this._bindingsByRootAndName;
				let c = l[o];
				void 0 === c && (c = {}, l[o] = c);
				for (let t = 0; t !== r; ++t) {
					const r = n[t],
						l = r.name;
					let h = c[l];
					if (void 0 !== h) s[t] = h;
					else {
						if (h = s[t], void 0 !== h) {
							null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
							continue
						}
						const n = e && e._propertyBindings[t].binding.parsedPath;
						h = new Cg(Bg.create(i, l, n), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), s[t] = h
					}
					a[t].resultBuffer = h.buffer
				}
			}
			_activateAction(t) {
				if (!this._isActiveAction(t)) {
					if (null === t._cacheIndex) {
						const e = (t._localRoot || this._root).uuid,
							i = t._clip.uuid,
							n = this._actionsByClip[i];
						this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
					}
					const e = t._propertyBindings;
					for (let t = 0, i = e.length; t !== i; ++t) {
						const i = e[t];
						0 == i.useCount++ && (this._lendBinding(i), i.saveOriginalState())
					}
					this._lendAction(t)
				}
			}
			_deactivateAction(t) {
				if (this._isActiveAction(t)) {
					const e = t._propertyBindings;
					for (let t = 0, i = e.length; t !== i; ++t) {
						const i = e[t];
						0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
					}
					this._takeBackAction(t)
				}
			}
			_initMemoryManager() {
				this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
				const t = this;
				this.stats = {
					actions: {
						get total() {
							return t._actions.length
						},
						get inUse() {
							return t._nActiveActions
						}
					},
					bindings: {
						get total() {
							return t._bindings.length
						},
						get inUse() {
							return t._nActiveBindings
						}
					},
					controlInterpolants: {
						get total() {
							return t._controlInterpolants.length
						},
						get inUse() {
							return t._nActiveControlInterpolants
						}
					}
				}
			}
			_isActiveAction(t) {
				const e = t._cacheIndex;
				return null !== e && e < this._nActiveActions
			}
			_addInactiveAction(t, e, i) {
				const n = this._actions,
					r = this._actionsByClip;
				let s = r[e];
				if (void 0 === s) s = {
					knownActions: [t],
					actionByRoot: {}
				}, t._byClipCacheIndex = 0, r[e] = s;
				else {
					const e = s.knownActions;
					t._byClipCacheIndex = e.length, e.push(t)
				}
				t._cacheIndex = n.length, n.push(t), s.actionByRoot[i] = t
			}
			_removeInactiveAction(t) {
				const e = this._actions,
					i = e[e.length - 1],
					n = t._cacheIndex;
				i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
				const r = t._clip.uuid,
					s = this._actionsByClip,
					a = s[r],
					o = a.knownActions,
					l = o[o.length - 1],
					c = t._byClipCacheIndex;
				l._byClipCacheIndex = c, o[c] = l, o.pop(), t._byClipCacheIndex = null;
				delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t)
			}
			_removeInactiveBindingsForAction(t) {
				const e = t._propertyBindings;
				for (let t = 0, i = e.length; t !== i; ++t) {
					const i = e[t];
					0 == --i.referenceCount && this._removeInactiveBinding(i)
				}
			}
			_lendAction(t) {
				const e = this._actions,
					i = t._cacheIndex,
					n = this._nActiveActions++,
					r = e[n];
				t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
			}
			_takeBackAction(t) {
				const e = this._actions,
					i = t._cacheIndex,
					n = --this._nActiveActions,
					r = e[n];
				t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
			}
			_addInactiveBinding(t, e, i) {
				const n = this._bindingsByRootAndName,
					r = this._bindings;
				let s = n[e];
				void 0 === s && (s = {}, n[e] = s), s[i] = t, t._cacheIndex = r.length, r.push(t)
			}
			_removeInactiveBinding(t) {
				const e = this._bindings,
					i = t.binding,
					n = i.rootNode.uuid,
					r = i.path,
					s = this._bindingsByRootAndName,
					a = s[n],
					o = e[e.length - 1],
					l = t._cacheIndex;
				o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[n]
			}
			_lendBinding(t) {
				const e = this._bindings,
					i = t._cacheIndex,
					n = this._nActiveBindings++,
					r = e[n];
				t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
			}
			_takeBackBinding(t) {
				const e = this._bindings,
					i = t._cacheIndex,
					n = --this._nActiveBindings,
					r = e[n];
				t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
			}
			_lendControlInterpolant() {
				const t = this._controlInterpolants,
					e = this._nActiveControlInterpolants++;
				let i = t[e];
				return void 0 === i && (i = new sm(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), i.__cacheIndex = e, t[e] = i), i
			}
			_takeBackControlInterpolant(t) {
				const e = this._controlInterpolants,
					i = t.__cacheIndex,
					n = --this._nActiveControlInterpolants,
					r = e[n];
				t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
			}
			clipAction(t, e, i) {
				const n = e || this._root,
					r = n.uuid;
				let s = "string" == typeof t ? mm.findByName(n, t) : t;
				const a = null !== s ? s.uuid : t,
					o = this._actionsByClip[a];
				let l = null;
				if (void 0 === i && (i = null !== s ? s.blendMode : el), void 0 !== o) {
					const t = o.actionByRoot[r];
					if (void 0 !== t && t.blendMode === i) return t;
					l = o.knownActions[0], null === s && (s = l._clip)
				}
				if (null === s) return null;
				const c = new Ug(this, s, e, i);
				return this._bindAction(c, l), this._addInactiveAction(c, a, r), c
			}
			existingAction(t, e) {
				const i = e || this._root,
					n = i.uuid,
					r = "string" == typeof t ? mm.findByName(i, t) : t,
					s = r ? r.uuid : t,
					a = this._actionsByClip[s];
				return void 0 !== a && a.actionByRoot[n] || null
			}
			stopAllAction() {
				const t = this._actions;
				for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
				return this
			}
			update(t) {
				t *= this.timeScale;
				const e = this._actions,
					i = this._nActiveActions,
					n = this.time += t,
					r = Math.sign(t),
					s = this._accuIndex ^= 1;
				for (let a = 0; a !== i; ++a) {
					e[a]._update(n, t, r, s)
				}
				const a = this._bindings,
					o = this._nActiveBindings;
				for (let t = 0; t !== o; ++t) a[t].apply(s);
				return this
			}
			setTime(t) {
				this.time = 0;
				for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
				return this.update(t)
			}
			getRoot() {
				return this._root
			}
			uncacheClip(t) {
				const e = this._actions,
					i = t.uuid,
					n = this._actionsByClip,
					r = n[i];
				if (void 0 !== r) {
					const t = r.knownActions;
					for (let i = 0, n = t.length; i !== n; ++i) {
						const n = t[i];
						this._deactivateAction(n);
						const r = n._cacheIndex,
							s = e[e.length - 1];
						n._cacheIndex = null, n._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(n)
					}
					delete n[i]
				}
			}
			uncacheRoot(t) {
				const e = t.uuid,
					i = this._actionsByClip;
				for (const t in i) {
					const n = i[t].actionByRoot[e];
					void 0 !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
				}
				const n = this._bindingsByRootAndName[e];
				if (void 0 !== n)
					for (const t in n) {
						const e = n[t];
						e.restoreOriginalState(), this._removeInactiveBinding(e)
					}
			}
			uncacheAction(t, e) {
				const i = this.existingAction(t, e);
				null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
			}
		}).prototype._controlInterpolantsResultBuffer = new Float32Array(1);
		class Vg {
			constructor(t) {
				"string" == typeof t && (t = arguments[1]), this.value = t
			}
			clone() {
				return new Vg(void 0 === this.value.clone ? this.value : this.value.clone())
			}
		}

		function Wg(t, e, i) {
			vp.call(this, t, e), this.meshPerAttribute = i || 1
		}

		function Gg(t, e, i, n, r) {
			this.buffer = t, this.type = e, this.itemSize = i, this.elementSize = n, this.count = r, this.version = 0
		}

		function Hg(t, e, i = 0, n = 1 / 0) {
			this.ray = new tc(t, e), this.near = i, this.far = n, this.camera = null, this.layers = new dc, this.params = {
				Mesh: {},
				Line: {
					threshold: 1
				},
				LOD: {},
				Points: {
					threshold: 1
				},
				Sprite: {}
			}, Object.defineProperties(this.params, {
				PointCloud: {
					get: function () {
						return this.Points
					}
				}
			})
		}

		function jg(t, e) {
			return t.distance - e.distance
		}

		function qg(t, e, i, n) {
			if (t.layers.test(e.layers) && t.raycast(e, i), !0 === n) {
				const n = t.children;
				for (let t = 0, r = n.length; t < r; t++) qg(n[t], e, i, !0)
			}
		}
		Wg.prototype = Object.assign(Object.create(vp.prototype), {
			constructor: Wg,
			isInstancedInterleavedBuffer: !0,
			copy: function (t) {
				return vp.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
			},
			clone: function (t) {
				const e = vp.prototype.clone.call(this, t);
				return e.meshPerAttribute = this.meshPerAttribute, e
			},
			toJSON: function (t) {
				const e = vp.prototype.toJSON.call(this, t);
				return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e
			}
		}), Object.defineProperty(Gg.prototype, "needsUpdate", {
			set: function (t) {
				!0 === t && this.version++
			}
		}), Object.assign(Gg.prototype, {
			isGLBufferAttribute: !0,
			setBuffer: function (t) {
				return this.buffer = t, this
			},
			setType: function (t, e) {
				return this.type = t, this.elementSize = e, this
			},
			setItemSize: function (t) {
				return this.itemSize = t, this
			},
			setCount: function (t) {
				return this.count = t, this
			}
		}), Object.assign(Hg.prototype, {
			set: function (t, e) {
				this.ray.set(t, e)
			},
			setFromCamera: function (t, e) {
				e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera && (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e)
			},
			intersectObject: function (t, e = !1, i = []) {
				return qg(t, this, i, e), i.sort(jg), i
			},
			intersectObjects: function (t, e = !1, i = []) {
				for (let n = 0, r = t.length; n < r; n++) qg(t[n], this, i, e);
				return i.sort(jg), i
			}
		});
		const Xg = new fl;
		class Yg {
			constructor(t = new fl(1 / 0, 1 / 0), e = new fl(-1 / 0, -1 / 0)) {
				this.min = t, this.max = e
			}
			set(t, e) {
				return this.min.copy(t), this.max.copy(e), this
			}
			setFromPoints(t) {
				this.makeEmpty();
				for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
				return this
			}
			setFromCenterAndSize(t, e) {
				const i = Xg.copy(e).multiplyScalar(.5);
				return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
			}
			clone() {
				return (new this.constructor).copy(this)
			}
			copy(t) {
				return this.min.copy(t.min), this.max.copy(t.max), this
			}
			makeEmpty() {
				return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
			}
			isEmpty() {
				return this.max.x < this.min.x || this.max.y < this.min.y
			}
			getCenter(t) {
				return void 0 === t && (t = new fl), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
			}
			getSize(t) {
				return void 0 === t && (t = new fl), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
			}
			expandByPoint(t) {
				return this.min.min(t), this.max.max(t), this
			}
			expandByVector(t) {
				return this.min.sub(t), this.max.add(t), this
			}
			expandByScalar(t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this
			}
			containsPoint(t) {
				return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
			}
			containsBox(t) {
				return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
			}
			getParameter(t, e) {
				return void 0 === e && (e = new fl), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
			}
			intersectsBox(t) {
				return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
			}
			clampPoint(t, e) {
				return void 0 === e && (e = new fl), e.copy(t).clamp(this.min, this.max)
			}
			distanceToPoint(t) {
				return Xg.copy(t).clamp(this.min, this.max).sub(t).length()
			}
			intersect(t) {
				return this.min.max(t.min), this.max.min(t.max), this
			}
			union(t) {
				return this.min.min(t.min), this.max.max(t.max), this
			}
			translate(t) {
				return this.min.add(t), this.max.add(t), this
			}
			equals(t) {
				return t.min.equals(this.min) && t.max.equals(this.max)
			}
		}
		Yg.prototype.isBox2 = !0;

		function Zg(t) {
			Tc.call(this), this.material = t, this.render = function () {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0
		}
		Zg.prototype = Object.create(Tc.prototype), Zg.prototype.constructor = Zg, Zg.prototype.isImmediateRenderObject = !0;
		const Jg = new Sl,
			$g = new ec,
			Kg = new ec;

		function Qg(t) {
			const e = [];
			t && t.isBone && e.push(t);
			for (let i = 0; i < t.children.length; i++) e.push.apply(e, Qg(t.children[i]));
			return e
		}
		const tv = new Float32Array(1),
			ev = (new Int32Array(tv.buffer), Math.pow(2, 8), [.125, .215, .35, .446, .526, .582]),
			iv = 5 + ev.length,
			nv = new $c({
				side: 1,
				depthWrite: !1,
				depthTest: !1
			}),
			{
				_lodPlanes: rv,
				_sizeLods: sv,
				_sigmas: av
			} = (new kh(new Bh, nv), ov());
		Math.sqrt(5);

		function ov() {
			const t = [],
				e = [],
				i = [];
			let n = 8;
			for (let r = 0; r < iv; r++) {
				const s = Math.pow(2, n);
				e.push(s);
				let a = 1 / s;
				r > 4 ? a = ev[r - 8 + 4 - 1] : 0 == r && (a = 0), i.push(a);
				const o = 1 / (s - 1),
					l = -o / 2,
					c = 1 + o / 2,
					h = [l, l, c, l, c, c, l, l, c, c, l, c],
					u = 6,
					d = 6,
					p = 3,
					f = 2,
					m = 1,
					g = new Float32Array(p * d * u),
					v = new Float32Array(f * d * u),
					y = new Float32Array(m * d * u);
				for (let t = 0; t < u; t++) {
					const e = t % 3 * 2 / 3 - 1,
						i = t > 2 ? 0 : -1,
						n = [e, i, 0, e + 2 / 3, i, 0, e + 2 / 3, i + 1, 0, e, i, 0, e + 2 / 3, i + 1, 0, e, i + 1, 0];
					g.set(n, p * d * t), v.set(h, f * d * t);
					const r = [t, t, t, t, t, t];
					y.set(r, m * d * t)
				}
				const x = new xh;
				x.setAttribute("position", new th(g, p)), x.setAttribute("uv", new th(v, f)), x.setAttribute("faceIndex", new th(y, m)), t.push(x), n > 4 && n--
			}
			return {
				_lodPlanes: t,
				_sizeLods: e,
				_sigmas: i
			}
		}
		Em.create = function (t, e) {
			return t.prototype = Object.create(Em.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
		}, Ym.prototype.fromPoints = function (t) {
			return this.setFromPoints(t)
		}, class extends rf {
			constructor(t = 10, e = 10, i = 4473924, n = 8947848) {
				i = new Jc(i), n = new Jc(n);
				const r = e / 2,
					s = t / e,
					a = t / 2,
					o = [],
					l = [];
				for (let t = 0, c = 0, h = -a; t <= e; t++, h += s) {
					o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
					const e = t === r ? i : n;
					e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3
				}
				const c = new xh;
				c.setAttribute("position", new ch(o, 3)), c.setAttribute("color", new ch(l, 3));
				super(c, new Yp({
					vertexColors: !0,
					toneMapped: !1
				})), this.type = "GridHelper"
			}
		}.prototype.setColors = function () {}, class extends rf {
			constructor(t) {
				const e = Qg(t),
					i = new xh,
					n = [],
					r = [],
					s = new Jc(0, 0, 1),
					a = new Jc(0, 1, 0);
				for (let t = 0; t < e.length; t++) {
					const i = e[t];
					i.parent && i.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b))
				}
				i.setAttribute("position", new ch(n, 3)), i.setAttribute("color", new ch(r, 3));
				super(i, new Yp({
					vertexColors: !0,
					depthTest: !1,
					depthWrite: !1,
					toneMapped: !1,
					transparent: !0
				})), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
			}
			updateMatrixWorld(t) {
				const e = this.bones,
					i = this.geometry,
					n = i.getAttribute("position");
				Kg.copy(this.root.matrixWorld).invert();
				for (let t = 0, i = 0; t < e.length; t++) {
					const r = e[t];
					r.parent && r.parent.isBone && ($g.multiplyMatrices(Kg, r.matrixWorld), Jg.setFromMatrixPosition($g), n.setXYZ(i, Jg.x, Jg.y, Jg.z), $g.multiplyMatrices(Kg, r.parent.matrixWorld), Jg.setFromMatrixPosition($g), n.setXYZ(i + 1, Jg.x, Jg.y, Jg.z), i += 2)
				}
				i.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t)
			}
		}.prototype.update = function () {}, _m.prototype.extractUrlBase = function (t) {
			return gg(t)
		}, _m.Handlers = {
			add: function () {},
			get: function () {}
		}, Yg.prototype.center = function (t) {
			return this.getCenter(t)
		}, Yg.prototype.empty = function () {
			return this.isEmpty()
		}, Yg.prototype.isIntersectionBox = function (t) {
			return this.intersectsBox(t)
		}, Yg.prototype.size = function (t) {
			return this.getSize(t)
		}, Cl.prototype.center = function (t) {
			return this.getCenter(t)
		}, Cl.prototype.empty = function () {
			return this.isEmpty()
		}, Cl.prototype.isIntersectionBox = function (t) {
			return this.intersectsBox(t)
		}, Cl.prototype.isIntersectionSphere = function (t) {
			return this.intersectsSphere(t)
		}, Cl.prototype.size = function (t) {
			return this.getSize(t)
		}, ql.prototype.empty = function () {
			return this.isEmpty()
		}, Qh.prototype.setFromMatrix = function (t) {
			return this.setFromProjectionMatrix(t)
		}, pl.random16 = function () {
			return Math.random()
		}, pl.nearestPowerOfTwo = function (t) {
			return pl.floorPowerOfTwo(t)
		}, pl.nextPowerOfTwo = function (t) {
			return pl.ceilPowerOfTwo(t)
		}, ml.prototype.flattenToArrayOffset = function (t, e) {
			return this.toArray(t, e)
		}, ml.prototype.multiplyVector3 = function (t) {
			return t.applyMatrix3(this)
		}, ml.prototype.multiplyVector3Array = function () {}, ml.prototype.applyToBufferAttribute = function (t) {
			return t.applyMatrix3(this)
		}, ml.prototype.applyToVector3Array = function () {}, ml.prototype.getInverse = function (t) {
			return this.copy(t).invert()
		}, ec.prototype.extractPosition = function (t) {
			return this.copyPosition(t)
		}, ec.prototype.flattenToArrayOffset = function (t, e) {
			return this.toArray(t, e)
		}, ec.prototype.getPosition = function () {
			return (new Sl).setFromMatrixColumn(this, 3)
		}, ec.prototype.setRotationFromQuaternion = function (t) {
			return this.makeRotationFromQuaternion(t)
		}, ec.prototype.multiplyToArray = function () {}, ec.prototype.multiplyVector3 = function (t) {
			return t.applyMatrix4(this)
		}, ec.prototype.multiplyVector4 = function (t) {
			return t.applyMatrix4(this)
		}, ec.prototype.multiplyVector3Array = function () {}, ec.prototype.rotateAxis = function (t) {
			t.transformDirection(this)
		}, ec.prototype.crossVector = function (t) {
			return t.applyMatrix4(this)
		}, ec.prototype.translate = function () {}, ec.prototype.rotateX = function () {}, ec.prototype.rotateY = function () {}, ec.prototype.rotateZ = function () {}, ec.prototype.rotateByAxis = function () {}, ec.prototype.applyToBufferAttribute = function (t) {
			return t.applyMatrix4(this)
		}, ec.prototype.applyToVector3Array = function () {}, ec.prototype.makeFrustum = function (t, e, i, n, r, s) {
			return this.makePerspective(t, e, n, i, r, s)
		}, ec.prototype.getInverse = function (t) {
			return this.copy(t).invert()
		}, Lc.prototype.isIntersectionLine = function (t) {
			return this.intersectsLine(t)
		}, Ml.prototype.multiplyVector3 = function (t) {
			return t.applyQuaternion(this)
		}, Ml.prototype.inverse = function () {
			return this.invert()
		}, tc.prototype.isIntersectionBox = function (t) {
			return this.intersectsBox(t)
		}, tc.prototype.isIntersectionPlane = function (t) {
			return this.intersectsPlane(t)
		}, tc.prototype.isIntersectionSphere = function (t) {
			return this.intersectsSphere(t)
		}, Vc.prototype.area = function () {
			return this.getArea()
		}, Vc.prototype.barycoordFromPoint = function (t, e) {
			return this.getBarycoord(t, e)
		}, Vc.prototype.midpoint = function (t) {
			return this.getMidpoint(t)
		}, Vc.prototypenormal = function (t) {
			return this.getNormal(t)
		}, Vc.prototype.plane = function (t) {
			return this.getPlane(t)
		}, Vc.barycoordFromPoint = function (t, e, i, n, r) {
			return Vc.getBarycoord(t, e, i, n, r)
		}, Vc.normal = function (t, e, i, n) {
			return Vc.getNormal(t, e, i, n)
		}, Zm.prototype.extractAllPoints = function (t) {
			return this.extractPoints(t)
		}, Zm.prototype.extrude = function (t) {
			return new Wf(this, t)
		}, Zm.prototype.makeGeometry = function (t) {
			return new jf(this, t)
		}, fl.prototype.fromAttribute = function (t, e, i) {
			return this.fromBufferAttribute(t, e, i)
		}, fl.prototype.distanceToManhattan = function (t) {
			return this.manhattanDistanceTo(t)
		}, fl.prototype.lengthManhattan = function () {
			return this.manhattanLength()
		}, Sl.prototype.setEulerFromRotationMatrix = function () {}, Sl.prototype.setEulerFromQuaternion = function () {}, Sl.prototype.getPositionFromMatrix = function (t) {
			return this.setFromMatrixPosition(t)
		}, Sl.prototype.getScaleFromMatrix = function (t) {
			return this.setFromMatrixScale(t)
		}, Sl.prototype.getColumnFromMatrix = function (t, e) {
			return this.setFromMatrixColumn(e, t)
		}, Sl.prototype.applyProjection = function (t) {
			return this.applyMatrix4(t)
		}, Sl.prototype.fromAttribute = function (t, e, i) {
			return this.fromBufferAttribute(t, e, i)
		}, Sl.prototype.distanceToManhattan = function (t) {
			return this.manhattanDistanceTo(t)
		}, Sl.prototype.lengthManhattan = function () {
			return this.manhattanLength()
		}, wl.prototype.fromAttribute = function (t, e, i) {
			return this.fromBufferAttribute(t, e, i)
		}, wl.prototype.lengthManhattan = function () {
			return this.manhattanLength()
		}, Tc.prototype.getChildByName = function (t) {
			return this.getObjectByName(t)
		}, Tc.prototype.renderDepth = function () {}, Tc.prototype.translate = function (t, e) {
			return this.translateOnAxis(e, t)
		}, Tc.prototype.getWorldRotation = function () {}, Tc.prototype.applyMatrix = function (t) {
			return this.applyMatrix4(t)
		}, Object.defineProperties(Tc.prototype, {
			eulerOrder: {
				get: function () {
					return this.rotation.order
				},
				set: function (t) {
					this.rotation.order = t
				}
			},
			useQuaternion: {
				get: function () {},
				set: function () {}
			}
		}), kh.prototype.setDrawMode = function () {}, Object.defineProperties(kh.prototype, {
			drawMode: {
				get: function () {
					return 0
				},
				set: function () {}
			}
		}), Vp.prototype.initBones = function () {}, Object.defineProperty(Em.prototype, "__arcLengthDivisions", {
			get: function () {
				return this.arcLengthDivisions
			},
			set: function (t) {
				this.arcLengthDivisions = t
			}
		}), jh.prototype.setLens = function (t, e) {
			void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
		}, Object.defineProperties(Jm.prototype, {
			onlyShadow: {
				set: function () {}
			},
			shadowCameraFov: {
				set: function (t) {
					this.shadow.camera.fov = t
				}
			},
			shadowCameraLeft: {
				set: function (t) {
					this.shadow.camera.left = t
				}
			},
			shadowCameraRight: {
				set: function (t) {
					this.shadow.camera.right = t
				}
			},
			shadowCameraTop: {
				set: function (t) {
					this.shadow.camera.top = t
				}
			},
			shadowCameraBottom: {
				set: function (t) {
					this.shadow.camera.bottom = t
				}
			},
			shadowCameraNear: {
				set: function (t) {
					this.shadow.camera.near = t
				}
			},
			shadowCameraFar: {
				set: function (t) {
					this.shadow.camera.far = t
				}
			},
			shadowCameraVisible: {
				set: function () {}
			},
			shadowBias: {
				set: function (t) {
					this.shadow.bias = t
				}
			},
			shadowDarkness: {
				set: function () {}
			},
			shadowMapWidth: {
				set: function (t) {
					this.shadow.mapSize.width = t
				}
			},
			shadowMapHeight: {
				set: function (t) {
					this.shadow.mapSize.height = t
				}
			}
		}), Object.defineProperties(th.prototype, {
			length: {
				get: function () {
					return this.array.length
				}
			},
			dynamic: {
				get: function () {
					return this.usage === ll
				},
				set: function () {
					this.setUsage(ll)
				}
			}
		}), th.prototype.setDynamic = function (t) {
			return this.setUsage(!0 === t ? ll : ol), this
		}, th.prototype.copyIndicesArray = function () {}, th.prototype.setArray = function () {}, xh.prototype.addIndex = function (t) {
			this.setIndex(t)
		}, xh.prototype.addAttribute = function (t, e) {
			return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (this.setIndex(e), this) : this.setAttribute(t, e) : this.setAttribute(t, new th(arguments[1], arguments[2]))
		}, xh.prototype.addDrawCall = function (t, e, i) {
			this.addGroup(t, e)
		}, xh.prototype.clearDrawCalls = function () {
			this.clearGroups()
		}, xh.prototype.computeOffsets = function () {}, xh.prototype.removeAttribute = function (t) {
			return this.deleteAttribute(t)
		}, xh.prototype.applyMatrix = function (t) {
			return this.applyMatrix4(t)
		}, Object.defineProperties(xh.prototype, {
			drawcalls: {
				get: function () {
					return this.groups
				}
			},
			offsets: {
				get: function () {
					return this.groups
				}
			}
		}), Object.defineProperties(vg.prototype, {
			maxInstancedCount: {
				get: function () {
					return this.instanceCount
				},
				set: function (t) {
					this.instanceCount = t
				}
			}
		}), Object.defineProperties(Hg.prototype, {
			linePrecision: {
				get: function () {
					return this.params.Line.threshold
				},
				set: function (t) {
					this.params.Line.threshold = t
				}
			}
		}), Object.defineProperties(vp.prototype, {
			dynamic: {
				get: function () {
					return this.usage === ll
				},
				set: function (t) {
					this.setUsage(t)
				}
			}
		}), vp.prototype.setDynamic = function (t) {
			return this.setUsage(!0 === t ? ll : ol), this
		}, vp.prototype.setArray = function () {}, Wf.prototype.getArrays = function () {}, Wf.prototype.addShapeList = function () {}, Wf.prototype.addShape = function () {}, gp.prototype.dispose = function () {}, Vg.prototype.onUpdate = function () {
			return this
		}, Object.defineProperties(Gc.prototype, {
			wrapAround: {
				get: function () {},
				set: function () {}
			},
			overdraw: {
				get: function () {},
				set: function () {}
			},
			wrapRGB: {
				get: function () {
					return new Jc
				}
			},
			shading: {
				get: function () {},
				set: function (t) {
					this.flatShading = 1 === t
				}
			},
			stencilMask: {
				get: function () {
					return this.stencilFuncMask
				},
				set: function (t) {
					this.stencilFuncMask = t
				}
			}
		}), Object.defineProperties(Zf.prototype, {
			transparency: {
				get: function () {
					return this.transmission
				},
				set: function (t) {
					this.transmission = t
				}
			}
		}), Object.defineProperties(Gh.prototype, {
			derivatives: {
				get: function () {
					return this.extensions.derivatives
				},
				set: function (t) {
					this.extensions.derivatives = t
				}
			}
		}), pp.prototype.clearTarget = function (t, e, i, n) {
			this.setRenderTarget(t), this.clear(e, i, n)
		}, pp.prototype.animate = function (t) {
			this.setAnimationLoop(t)
		}, pp.prototype.getCurrentRenderTarget = function () {
			return this.getRenderTarget()
		}, pp.prototype.getMaxAnisotropy = function () {
			return this.capabilities.getMaxAnisotropy()
		}, pp.prototype.getPrecision = function () {
			return this.capabilities.precision
		}, pp.prototype.resetGLState = function () {
			return this.state.reset()
		}, pp.prototype.supportsFloatTextures = function () {
			return this.extensions.get("OES_texture_float")
		}, pp.prototype.supportsHalfFloatTextures = function () {
			return this.extensions.get("OES_texture_half_float")
		}, pp.prototype.supportsStandardDerivatives = function () {
			return this.extensions.get("OES_standard_derivatives")
		}, pp.prototype.supportsCompressedTextureS3TC = function () {
			return this.extensions.get("WEBGL_compressed_texture_s3tc")
		}, pp.prototype.supportsCompressedTexturePVRTC = function () {
			return this.extensions.get("WEBGL_compressed_texture_pvrtc")
		}, pp.prototype.supportsBlendMinMax = function () {
			return this.extensions.get("EXT_blend_minmax")
		}, pp.prototype.supportsVertexTextures = function () {
			return this.capabilities.vertexTextures
		}, pp.prototype.supportsInstancedArrays = function () {
			return this.extensions.get("ANGLE_instanced_arrays")
		}, pp.prototype.enableScissorTest = function (t) {
			this.setScissorTest(t)
		}, pp.prototype.initMaterial = function () {}, pp.prototype.addPrePlugin = function () {}, pp.prototype.addPostPlugin = function () {}, pp.prototype.updateShadowMap = function () {}, pp.prototype.setFaceCulling = function () {}, pp.prototype.allocTextureUnit = function () {}, pp.prototype.setTexture = function () {}, pp.prototype.setTexture2D = function () {}, pp.prototype.setTextureCube = function () {}, pp.prototype.getActiveMipMapLevel = function () {
			return this.getActiveMipmapLevel()
		}, Object.defineProperties(pp.prototype, {
			shadowMapEnabled: {
				get: function () {
					return this.shadowMap.enabled
				},
				set: function (t) {
					this.shadowMap.enabled = t
				}
			},
			shadowMapType: {
				get: function () {
					return this.shadowMap.type
				},
				set: function (t) {
					this.shadowMap.type = t
				}
			},
			shadowMapCullFace: {
				get: function () {},
				set: function () {}
			},
			context: {
				get: function () {
					return this.getContext()
				}
			},
			vr: {
				get: function () {
					return this.xr
				}
			},
			gammaInput: {
				get: function () {
					return !1
				},
				set: function () {}
			},
			gammaOutput: {
				get: function () {
					return !1
				},
				set: function (t) {
					this.outputEncoding = !0 === t ? nl : il
				}
			},
			toneMappingWhitePoint: {
				get: function () {
					return 1
				},
				set: function () {}
			}
		}), Object.defineProperties(rp.prototype, {
			cullFace: {
				get: function () {},
				set: function () {}
			},
			renderReverseSided: {
				get: function () {},
				set: function () {}
			},
			renderSingleSided: {
				get: function () {},
				set: function () {}
			}
		}), Object.defineProperties(bl.prototype, {
			wrapS: {
				get: function () {
					return this.texture.wrapS
				},
				set: function (t) {
					this.texture.wrapS = t
				}
			},
			wrapT: {
				get: function () {
					return this.texture.wrapT
				},
				set: function (t) {
					this.texture.wrapT = t
				}
			},
			magFilter: {
				get: function () {
					return this.texture.magFilter
				},
				set: function (t) {
					this.texture.magFilter = t
				}
			},
			minFilter: {
				get: function () {
					return this.texture.minFilter
				},
				set: function (t) {
					this.texture.minFilter = t
				}
			},
			anisotropy: {
				get: function () {
					return this.texture.anisotropy
				},
				set: function (t) {
					this.texture.anisotropy = t
				}
			},
			offset: {
				get: function () {
					return this.texture.offset
				},
				set: function (t) {
					this.texture.offset = t
				}
			},
			repeat: {
				get: function () {
					return this.texture.repeat
				},
				set: function (t) {
					this.texture.repeat = t
				}
			},
			format: {
				get: function () {
					return this.texture.format
				},
				set: function (t) {
					this.texture.format = t
				}
			},
			type: {
				get: function () {
					return this.texture.type
				},
				set: function (t) {
					this.texture.type = t
				}
			},
			generateMipmaps: {
				get: function () {
					return this.texture.generateMipmaps
				},
				set: function (t) {
					this.texture.generateMipmaps = t
				}
			}
		}), Tg.prototype.load = function (t) {
			const e = this;
			return (new Dg).load(t, (function (t) {
				e.setBuffer(t)
			})), this
		}, Xh.prototype.updateCubeMap = function (t, e) {
			return this.update(t, e)
		}, Xh.prototype.clear = function (t, e, i, n) {
			return this.renderTarget.clear(t, e, i, n)
		}, vl.crossOrigin = void 0, vl.loadTexture = function (t, e, i, n) {
			const r = new Cm;
			r.setCrossOrigin(this.crossOrigin);
			const s = r.load(t, i, void 0, n);
			return e && (s.mapping = e), s
		}, vl.loadTextureCube = function (t, e, i, n) {
			const r = new Dm;
			r.setCrossOrigin(this.crossOrigin);
			const s = r.load(t, i, void 0, n);
			return e && (s.mapping = e), s
		}, vl.loadCompressedTexture = function () {}, vl.loadCompressedTextureCube = function () {};
		"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
			detail: {
				revision: "127"
			}
		})), "undefined" != typeof window && (window.__THREE__ || (window.__THREE__ = "127"));
		class lv {
			constructor(t, e) {
				this.holder = t, this.settings = { ...e
				}, this.elements = [...document.querySelectorAll(this.settings.selectors)]
			}
			init() {
				this.scene = new gp, this.renderer = new pp({
					alpha: !0,
					antialias: !0
				}), this.mouse = new fl(0, 0), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(window.innerWidth, window.innerHeight), this.camera = new jh(70, window.innerWidth / window.innerHeight, .001, 100), this.camera.position.set(0, 0, 1), this.material = new Gh({
					side: 0,
					uniforms: {
						time: {
							type: "f",
							value: 0
						},
						u_res: {
							value: new fl(window.innerWidth, window.innerHeight)
						},
						u_scale: {
							value: this.elements.length ? 0 : 1
						},
						u_mouse: {
							value: this.mouse
						}
					},
					vertexShader: "#define GLSLIFY 1\nuniform float time;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform vec2 pixels;\nuniform vec2 uvRate1;\n\nvoid main() {\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",
					fragmentShader: "#define GLSLIFY 1\nuniform float time;\nuniform vec2 u_res;\nuniform vec2 u_mouse;\n\nvarying vec4 vPosition; uniform float u_scale;\n\nfloat circle(in vec2 _st, in float _radius, in float blurriness){\n    vec2 dist = _st;\n    return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*6.0);\n}\n\nvoid main()\t{\n\tvec2 res = u_res * PR;\n\tvec2 st = gl_FragCoord.xy / res.xy - vec2(.5);\n\tst.y *= u_res.y / u_res.x;\n\n\tvec2 mouse = vec2((u_mouse.x / u_res.x) * 2. - 1.,-(u_mouse.y / u_res.y) * 2. + 1.) * -.5;\n\n\tvec2 circlePos = st + mouse;\n\tfloat c = circle(circlePos, .03*u_scale, 2.);\n\n\tgl_FragColor = vec4(vec3(c), 1.);\n}\n",
					defines: {
						PR: window.devicePixelRatio.toFixed(1)
					}
				}), this.plane = new kh(new iu(window.innerWidth, window.innerHeight, 1, 1), this.material), this.scene.add(this.plane), this.renderListener = () => this.animate(), this.mouseMoveListener = t => this.onMouseMove(t), this.resizeListener = () => this.resize(), this.onElementEnter = () => this.onEnter(), this.onElementLeave = () => this.onLeave(), this.holder.appendChild(this.renderer.domElement), this.resize(), this.attachEvents()
			}
			resize() {
				const {
					innerWidth: t,
					innerHeight: e
				} = window;
				this.renderer.setSize(t, e), this.camera.aspect = t / e, this.camera.updateProjectionMatrix()
			}
			animate() {
				this.time += .05, this.material.uniforms.time.value = this.time, this.render(), document.addEventListener("mousemove", this.mouseMoveListener), Rr.ticker.add(this.renderListener)
			}
			stop() {
				Rr.ticker.remove(this.renderListener), document.removeEventListener("mousemove", this.mouseMoveListener)
			}
			render() {
				this.renderer.render(this.scene, this.camera)
			}
			attachEvents() {
				window.addEventListener("resize", this.resizeListener), this.elements.length && this.elements.forEach((t => this.attachElementEvents(t)))
			}
			attachElementEvents(t) {
				t.addEventListener("mouseenter", this.onElementEnter), t.addEventListener("mouseleave", this.onElementLeave)
			}
			onEnter() {
				Rr.killTweensOf(this.material.uniforms.u_scale), Rr.to(this.material.uniforms.u_scale, {
					value: 1,
					duration: .5
				}), this.animate()
			}
			onLeave() {
				Rr.killTweensOf(this.material.uniforms.u_scale), Rr.to(this.material.uniforms.u_scale, {
					value: 0,
					duration: .2,
					onComplete: () => Rr.delayedCall(.05, (() => this.stop()))
				})
			}
			onMouseMove({
				clientX: t,
				clientY: e
			}) {
				Rr.to(this.mouse, {
					x: t,
					y: e
				})
			}
		}
		class cv {
			constructor(t, e) {
				this.holder = t, this.settings = {
					DOM: {
						target: "[data-magnet]",
						text: ".btn__text-holder"
					},
					hoverClass: "button--hover",
					events: {
						enter: _,
						leave: w
					},
					...e
				}, this.renderedStyles = {
					tx: {
						previous: 0,
						current: 0,
						amt: .1
					},
					ty: {
						previous: 0,
						current: 0,
						amt: .1
					},
					scale: {
						previous: 0,
						current: 0,
						amt: .2
					}
				}, this.mousepos = {
					x: 0,
					y: 0
				}, this.state = {
					hover: !1
				}, this.renderListener = () => this.render(), this.mouseMoveListener = t => this.onMouseMove(t), this.resizeListener = () => this.calculateSizePosition()
			}
			init() {
				c() || (this.target = this.holder.querySelector(this.settings.DOM.target), this.text = this.holder.querySelector(this.settings.DOM.text), this.calculateSizePosition(), this.attachEvents())
			}
			calculateSizePosition() {
				this.rect = this.holder.getBoundingClientRect(), this.distanceToTrigger = this.rect.width
			}
			attachEvents() {
				this.holder.addEventListener("mouseenter", this.resizeListener), window.addEventListener("mousemove", this.mouseMoveListener), window.addEventListener("resize", this.resizeListener), document.addEventListener(b, this.resizeListener)
			}
			render() {
				let t = 0,
					e = 0;
				d(this.mousepos.x, this.mousepos.y, this.rect.left + this.rect.width / 2, this.rect.top + this.rect.height / 2) < this.distanceToTrigger ? (this.state.hover || this.enter(), t = .75 * (this.mousepos.x - (this.rect.left + this.rect.width / 2)), e = .75 * (this.mousepos.y - (this.rect.top + this.rect.height / 2))) : this.leave(), this.renderedStyles.tx.current = t, this.renderedStyles.ty.current = e, Object.keys(this.renderedStyles).forEach((t => {
					this.renderedStyles[t].previous = Rr.utils.interpolate(this.renderedStyles[t].previous, this.renderedStyles[t].current, this.renderedStyles[t].amt)
				})), Rr.set(this.target, {
					x: this.renderedStyles.tx.previous.toFixed(3),
					y: this.renderedStyles.ty.previous.toFixed(3)
				}), Rr.set(this.text, {
					x: .3 * -this.renderedStyles.tx.previous,
					y: .3 * -this.renderedStyles.ty.previous
				})
			}
			enter() {
				this.state.hover = !0, this.holder.classList.add(this.settings.hoverClass), h(this.settings.events.enter, this, this.holder), Rr.timeline().to(this.text, {
					duration: .1
				})
			}
			leave() {
				this.state.hover = !1, this.holder.classList.remove(this.settings.hoverClass), h(this.settings.events.leave, this, this.holder)
			}
			onMouseMove(t) {
				return this.mousepos = (t => {
					let e = t,
						i = 0,
						n = 0;
					return e || (e = window.event), e.pageX || e.pageY ? (i = e.pageX, n = e.pageY) : (e.clientX || e.clientY) && (i = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
						x: i,
						y: n
					}
				})(t), this.mousepos
			}
			start() {
				c() || Rr.ticker.add(this.renderListener)
			}
			stop() {
				c() || Rr.ticker.remove(this.renderListener)
			}
			destroy() {
				window.removeEventListener("mousemove", this.mouseMoveListener), window.removeEventListener("resize", this.resizeListener), document.removeEventListener(f.scrolling, this.resizeListener), this.stop()
			}
		}
		class hv extends So {
			init() {
				this.instance = new cv(this.holder), this.instance.init(), super.init()
			}
			onShow() {
				this.instance.start()
			}
			onLeave() {
				this.instance.stop()
			}
		}
		class uv extends mo {
			init() {
				super.init(), this.variants = {
					moveLeft: {
						axis: "x",
						start: this.movementValue
					},
					moveRight: {
						axis: "x",
						start: -this.movementValue
					},
					moveUp: {
						axis: "y",
						start: this.movementValue
					},
					moveDown: {
						axis: "y",
						start: -this.movementValue
					}
				}, this.animationType = this.holder.dataset.scrollCall, this.animationParams = this.variants[this.animationType], this.sequenceAttr = "data-interval", this.target = this.isSequence ? this.holder.children : this.holder, Rr.set(this.target, {
					[this.animationParams.axis]: this.animationParams.start,
					opacity: 0
				})
			}
			show() {
				const t = Rr.timeline({
					delay: this.animationDelay
				});
				return t.fromTo(this.target, {
					[this.animationParams.axis]: this.playSimple ? 0 : this.animationParams.start,
					opacity: 0
				}, {
					[this.animationParams.axis]: 0,
					duration: this.animationSpeed,
					ease: this.ease,
					opacity: 1,
					stagger: !!this.isSequence && this.interval,
					clearProps: `${this.animationParams.axis}, opacity`
				}), t
			}
			get isSequence() {
				return this.holder.hasAttribute(this.sequenceAttr)
			}
			get movementValue() {
				return this.holder.hasAttribute("data-movement") ? +this.holder.getAttribute("data-movement") : this.settings.movementValue || 30
			}
		}
		class dv extends mo {
			init() {
				super.init();
				const {
					start: t
				} = this.getAnimationSettings();
				Rr.set(this.settings.chars, t), this.animation = this.getAnimationByType(), this.attachEvents()
			}
			getAnimationSettings() {
				const t = {
					default: {
						start: {
							opacity: 0
						},
						end: {
							opacity: 1,
							ease: this.ease,
							duration: this.animationSpeed,
							stagger: {
								each: this.interval,
								from: "random"
							}
						}
					}
				};
				return t[this.settings.animationType] || t.default
			}
			show() {
				return this.animation
			}
			onShow() {
				this.animation.play().timeScale(1)
			}
			onLeave() {
				return this.animation.timeScale(4).delay(0).reverse()
			}
			getAnimationByType() {
				const {
					start: t,
					end: e
				} = this.getAnimationSettings(), i = Rr.timeline({
					paused: !0,
					delay: this.animationDelay
				});
				return i.fromTo(this.settings.chars, t, e), i
			}
		}
		class pv extends mo {
			init() {
				super.init(), this.variants = {
					scaleLeft: {
						axis: "scaleX",
						transformOrigin: "100% 50%"
					},
					scaleRight: {
						axis: "scaleX",
						transformOrigin: "0% 50%"
					},
					scaleUp: {
						axis: "scaleY",
						transformOrigin: "50% 100%"
					},
					scaleDown: {
						axis: "scaleY",
						transformOrigin: "50% 0%"
					},
					scale: {
						axis: "scale"
					}
				}, this.animationType = this.holder.dataset.scrollCall, this.settings = this.variants[this.animationType], this.from = this.holder.hasAttribute("data-to") ? +this.holder.getAttribute("data-from") : 0, this.to = this.holder.hasAttribute("data-to") ? +this.holder.getAttribute("data-to") : 1, Rr.set(this.holder, {
					[this.settings.axis]: this.from
				})
			}
			show() {
				const t = Rr.timeline({
					delay: this.animationDelay
				});
				return t.fromTo(this.holder, {
					[this.settings.axis]: this.from,
					transformOrigin: this.settings.transformOrigin
				}, {
					[this.settings.axis]: this.to,
					duration: this.animationSpeed,
					ease: this.ease
				}), t
			}
		}
		var fv = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

		function mv(t) {
			var e = t.nodeType,
				i = "";
			if (1 === e || 9 === e || 11 === e) {
				if ("string" == typeof t.textContent) return t.textContent;
				for (t = t.firstChild; t; t = t.nextSibling) i += mv(t)
			} else if (3 === e || 4 === e) return t.nodeValue;
			return i
		}
		var gv, vv, yv, xv = /(?:\r|\n|\t\t)/g,
			_v = /(?:\s\s+)/g,
			wv = function (t) {
				return vv.getComputedStyle(t)
			},
			bv = Array.isArray,
			Mv = [].slice,
			Sv = function (t, e) {
				var i;
				return bv(t) ? t : "string" == (i = typeof t) && !e && t ? Mv.call(gv.querySelectorAll(t), 0) : t && "object" === i && "length" in t ? Mv.call(t, 0) : t ? [t] : []
			},
			Dv = function (t) {
				return "absolute" === t.position || !0 === t.absolute
			},
			Tv = function (t, e) {
				for (var i, n = e.length; --n > -1;)
					if (i = e[n], t.substr(0, i.length) === i) return i.length
			},
			Cv = function (t, e) {
				void 0 === t && (t = "");
				var i = ~t.indexOf("++"),
					n = 1;
				return i && (t = t.split("++").join("")),
					function () {
						return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
					}
			},
			Ev = function t(e, i, n) {
				var r = e.nodeType;
				if (1 === r || 9 === r || 11 === r)
					for (e = e.firstChild; e; e = e.nextSibling) t(e, i, n);
				else 3 !== r && 4 !== r || (e.nodeValue = e.nodeValue.split(i).join(n))
			},
			Av = function (t, e) {
				for (var i = e.length; --i > -1;) t.push(e[i])
			},
			Lv = function (t, e, i) {
				for (var n; t && t !== e;) {
					if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
					t = t.parentNode || t._parent
				}
			},
			Pv = function t(e) {
				var i, n, r = Sv(e.childNodes),
					s = r.length;
				for (i = 0; i < s; i++)(n = r[i])._isSplit ? t(n) : (i && 3 === n.previousSibling.nodeType ? n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue : 3 !== n.nodeType && e.insertBefore(n.firstChild, n), e.removeChild(n))
			},
			Ov = function (t, e) {
				return parseFloat(e[t]) || 0
			},
			Iv = function (t, e, i, n, r, s, a) {
				var o, l, c, h, u, d, p, f, m, g, v, y, x = wv(t),
					_ = Ov("paddingLeft", x),
					w = -999,
					b = Ov("borderBottomWidth", x) + Ov("borderTopWidth", x),
					M = Ov("borderLeftWidth", x) + Ov("borderRightWidth", x),
					S = Ov("paddingTop", x) + Ov("paddingBottom", x),
					D = Ov("paddingLeft", x) + Ov("paddingRight", x),
					T = Ov("fontSize", x) * (e.lineThreshold || .2),
					C = x.textAlign,
					E = [],
					A = [],
					L = [],
					P = e.wordDelimiter || " ",
					O = e.tag ? e.tag : e.span ? "span" : "div",
					I = e.type || e.split || "chars,words,lines",
					F = r && ~I.indexOf("lines") ? [] : null,
					N = ~I.indexOf("words"),
					z = ~I.indexOf("chars"),
					k = Dv(e),
					R = e.linesClass,
					B = ~(R || "").indexOf("++"),
					U = [];
				for (B && (R = R.split("++").join("")), c = (l = t.getElementsByTagName("*")).length, u = [], o = 0; o < c; o++) u[o] = l[o];
				if (F || k)
					for (o = 0; o < c; o++)((d = (h = u[o]).parentNode === t) || k || z && !N) && (y = h.offsetTop, F && d && Math.abs(y - w) > T && ("BR" !== h.nodeName || 0 === o) && (p = [], F.push(p), w = y), k && (h._x = h.offsetLeft, h._y = y, h._w = h.offsetWidth, h._h = h.offsetHeight), F && ((h._isSplit && d || !z && d || N && d || !N && h.parentNode.parentNode === t && !h.parentNode._isSplit) && (p.push(h), h._x -= _, Lv(h, t, P) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === o) && F.push([])));
				for (o = 0; o < c; o++) d = (h = u[o]).parentNode === t, "BR" !== h.nodeName ? (k && (m = h.style, N || d || (h._x += h.parentNode._x, h._y += h.parentNode._y), m.left = h._x + "px", m.top = h._y + "px", m.position = "absolute", m.display = "block", m.width = h._w + 1 + "px", m.height = h._h + "px"), !N && z ? h._isSplit ? (h._next = h.nextSibling, h.parentNode.appendChild(h)) : h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && U.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), u.splice(o--, 1), c--) : d || (y = !h.nextSibling && Lv(h.parentNode, t, P), h.parentNode._parent && h.parentNode._parent.appendChild(h), y && h.parentNode.appendChild(gv.createTextNode(" ")), "span" === O && (h.style.display = "inline"), E.push(h)) : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? A.push(h) : z && !h._isSplit && ("span" === O && (h.style.display = "inline"), E.push(h))) : F || k ? (h.parentNode && h.parentNode.removeChild(h), u.splice(o--, 1), c--) : N || t.appendChild(h);
				for (o = U.length; --o > -1;) U[o].parentNode.removeChild(U[o]);
				if (F) {
					for (k && (g = gv.createElement(O), t.appendChild(g), v = g.offsetWidth + "px", y = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), m = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
					for (f = " " === P && (!k || !N && !z), o = 0; o < F.length; o++) {
						for (p = F[o], (g = gv.createElement(O)).style.cssText = "display:block;text-align:" + C + ";position:" + (k ? "absolute;" : "relative;"), R && (g.className = R + (B ? o + 1 : "")), L.push(g), c = p.length, l = 0; l < c; l++) "BR" !== p[l].nodeName && (h = p[l], g.appendChild(h), f && h._wordEnd && g.appendChild(gv.createTextNode(" ")), k && (0 === l && (g.style.top = h._y + "px", g.style.left = _ + y + "px"), h.style.top = "0px", y && (h.style.left = h._x - y + "px")));
						0 === c ? g.innerHTML = "&nbsp;" : N || z || (Pv(g), Ev(g, String.fromCharCode(160), " ")), k && (g.style.width = v, g.style.height = h._h + "px"), t.appendChild(g)
					}
					t.style.cssText = m
				}
				k && (a > t.clientHeight && (t.style.height = a - S + "px", t.clientHeight < a && (t.style.height = a + b + "px")), s > t.clientWidth && (t.style.width = s - D + "px", t.clientWidth < s && (t.style.width = s + M + "px"))), Av(i, E), N && Av(n, A), Av(r, L)
			},
			Fv = function (t, e, i, n) {
				var r, s, a, o, l, c, h, u, d = e.tag ? e.tag : e.span ? "span" : "div",
					p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
					f = Dv(e),
					m = e.wordDelimiter || " ",
					g = " " !== m ? "" : f ? "&#173; " : " ",
					v = "</" + d + ">",
					y = 1,
					x = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : Tv : null,
					_ = gv.createElement("div"),
					w = t.parentNode;
				for (w.insertBefore(_, t), _.textContent = t.nodeValue, w.removeChild(t), h = -1 !== (r = mv(t = _)).indexOf("<"), !1 !== e.reduceWhiteSpace && (r = r.replace(_v, " ").replace(xv, "")), h && (r = r.split("<").join("{{LT}}")), l = r.length, s = (" " === r.charAt(0) ? g : "") + i(), a = 0; a < l; a++)
					if (c = r.charAt(a), x && (u = x(r.substr(a), e.specialChars))) c = r.substr(a, u || 1), s += p && " " !== c ? n() + c + "</" + d + ">" : c, a += u - 1;
					else if (c === m && r.charAt(a - 1) !== m && a) {
					for (s += y ? v : "", y = 0; r.charAt(a + 1) === m;) s += g, a++;
					a === l - 1 ? s += g : ")" !== r.charAt(a + 1) && (s += g + i(), y = 1)
				} else "{" === c && "{{LT}}" === r.substr(a, 6) ? (s += p ? n() + "{{LT}}</" + d + ">" : "{{LT}}", a += 5) : c.charCodeAt(0) >= 55296 && c.charCodeAt(0) <= 56319 || r.charCodeAt(a + 1) >= 65024 && r.charCodeAt(a + 1) <= 65039 ? (o = ((r.substr(a, 12).split(fv) || [])[1] || "").length || 2, s += p && " " !== c ? n() + r.substr(a, o) + "</" + d + ">" : r.substr(a, o), a += o - 1) : s += p && " " !== c ? n() + c + "</" + d + ">" : c;
				t.outerHTML = s + (y ? v : ""), h && Ev(w, "{{LT}}", "<")
			},
			Nv = function t(e, i, n, r) {
				var s, a, o = Sv(e.childNodes),
					l = o.length,
					c = Dv(i);
				if (3 !== e.nodeType || l > 1) {
					for (i.absolute = !1, s = 0; s < l; s++)(3 !== (a = o[s]).nodeType || /\S+/.test(a.nodeValue)) && (c && 3 !== a.nodeType && "inline" === wv(a).display && (a.style.display = "inline-block", a.style.position = "relative"), a._isSplit = !0, t(a, i, n, r));
					return i.absolute = c, void(e._isSplit = !0)
				}
				Fv(e, i, n, r)
			},
			zv = function () {
				function t(t, e) {
					yv || function () {
						gv = document, vv = window, yv = 1
					}(), this.elements = Sv(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
				}
				var e = t.prototype;
				return e.split = function (t) {
					this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
					for (var e, i, n, r = this.elements.length, s = t.tag ? t.tag : t.span ? "span" : "div", a = Cv(t.wordsClass, s), o = Cv(t.charsClass, s); --r > -1;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, Nv(n, t, a, o), Iv(n, t, this.chars, this.words, this.lines, i, e);
					return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
				}, e.revert = function () {
					var t = this._originals;
					if (!t) throw "revert() call wasn't scoped properly.";
					return this.elements.forEach((function (e, i) {
						return e.innerHTML = t[i]
					})), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
				}, t.create = function (e, i) {
					return new t(e, i)
				}, t
			}();
		zv.version = "3.5.1", Rr.registerPlugin(zv);
		var kv = (t, e) => {
			const i = new zv(t, e),
				n = i[e.split],
				{
					split: r
				} = e;
			return i.wrappers = [], "chars" === r || n && n.forEach((t => {
				const e = t,
					n = document.createElement("div"),
					r = e.innerHTML;
				n.classList.add("splitter-wrap"), e.innerHTML = "", e.appendChild(n), n.innerHTML = r, i.wrappers.push(n)
			})), i
		};
		class Rv extends mo {
			init() {
				super.init(), this.splitter = kv(this.holder, this.settings), this.scrollDependant = this.holder.hasAttribute("data-scroll-dependant"), Rr.set(this.elements, {
					overflow: "hidden"
				});
				const {
					start: t
				} = this.getAnimationSettings();
				this.splitter.wrappers.length ? Rr.set(this.splitter.wrappers, t) : (this.splitter.chars.length && Rr.set(this.splitter.chars, t), this.splitter.words.length && Rr.set(this.splitter.words, t)), this.animation = this.getAnimationByType(), this.holder.splitter = this, this.attachEvents()
			}
			attachEvents() {
				this.scrollDependant && this.splitter.chars.length && this.addScrollBehaviorEvents(), super.attachEvents()
			}
			addScrollBehaviorEvents() {
				this.charsTotal = this.splitter.chars.length, this.onScrollData = {
					cache: 0,
					current: 0
				}, this.scrollBehaviorListener = t => this.onScrollBehavior(t), document.addEventListener(f.scrolling, this.scrollBehaviorListener)
			}
			onScrollBehavior({
				detail: t
			}) {
				const {
					scroll: e
				} = t;
				this.onScrollData.current = e.y;
				const {
					chars: i
				} = this.splitter, n = this.onScrollData.current - this.onScrollData.cache, r = Rr.utils.mapRange(200, -200, -50, 50, n);
				this.onScrollData.cache = this.onScrollData.current, i.forEach(((t, e) => {
					const i = e < Math.ceil(this.charsTotal / 2) ? e : Math.ceil(this.charsTotal / 2) - Math.abs(Math.floor(this.charsTotal / 2) - e) - 1;
					Rr.set(t, {
						y: i * r
					})
				}))
			}
			getAnimationSettings() {
				const t = {
					fade: {
						start: {
							opacity: 0
						},
						end: {
							opacity: 1,
							ease: this.ease,
							duration: this.animationSpeed,
							stagger: {
								each: this.interval,
								from: "center"
							}
						}
					},
					default: {
						start: {
							yPercent: 150,
							willChange: "transform",
							opacity: 0
						},
						end: {
							opacity: 1,
							yPercent: 0,
							ease: this.ease,
							clearProps: "y",
							duration: this.animationSpeed,
							stagger: this.interval
						}
					}
				};
				return t[this.settings.animationType] || t.default
			}
			show() {
				return this.animation
			}
			onShow() {
				this.animation.play().timeScale(1)
			}
			onLeave() {
				return this.animation.timeScale(2).delay(0).reverse().yoyo(!0)
			}
			getAnimationByType() {
				const {
					start: t,
					end: e
				} = this.getAnimationSettings(), i = Rr.timeline({
					paused: !0,
					delay: this.animationDelay
				});
				switch (this.settings.split) {
					case "chars":
						i.fromTo(this.splitter.chars, t, e);
						break;
					case "chars, lines":
						for (let n = 0; n < this.splitter.lines.length; n++) {
							const r = `.splitter-row__${n+1}`,
								s = this.splitter.chars.filter((t => t.closest(r))),
								a = 2 * this.interval * n;
							i.fromTo(s, t, e, a)
						}
						break;
					case "words, lines":
						for (let n = 0; n < this.splitter.lines.length; n++) {
							const r = `.splitter-row__${n+1}`,
								s = this.splitter.words.filter((t => t.closest(r))),
								a = 2 * this.interval * n;
							i.fromTo(s, t, e, a)
						}
						break;
					default:
						i.fromTo(this.splitter.wrappers, t, e)
				}
				return i
			}
			get elements() {
				return "chars" === this.settings.split ? this.splitter.chars : this.splitter.lines
			}
		}
		class Bv extends mo {
			init() {
				super.init(), this.target = document.querySelector("[data-sticky-heading]")
			}
			onShow() {
				this.target && this.target.splitter.onShow()
			}
			onLeave() {
				this.target && this.target.splitter.onLeave()
			}
		}

		function Uv() {
			! function () {
				document.querySelectorAll('[data-scroll-call="fadeIn"]').forEach((t => {
					new So({
						holder: t
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call^="scale"]').forEach((t => {
					new pv({
						holder: t
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call^="sticky-heading"]').forEach((t => {
					new Bv({
						holder: t,
						settings: {
							activeClass: "footer-visible"
						}
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call^="move"]').forEach((t => {
					new uv({
						holder: t,
						settings: {
							movementValue: 60
						}
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call="css-animation"]').forEach((t => {
					new Mo({
						holder: t
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call="progress-scale"]').forEach((t => {
					new wo({
						holder: t
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call="ambient-move"]').forEach((t => {
					new _o({
						holder: t
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call="split"]').forEach((t => {
					new Rv({
						holder: t,
						settings: {
							reduceWhiteSpace: t.hasAttribute("data-no-whitespace") || !1,
							split: t.getAttribute("data-split") || "lines",
							linesClass: "splitter-row splitter-row__++",
							animationType: t.getAttribute("data-animation-type") || "default"
						}
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call="magnetic"]').forEach((t => {
					new hv({
						holder: t
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call="reveal-random"]').forEach((t => {
					new dv({
						holder: t,
						settings: {
							chars: t.querySelectorAll(t.getAttribute("data-target-selector"))
						}
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call="container-mask"]').forEach((t => {
					new bo({
						holder: t
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll(".webgl-canvas").forEach((t => {
					new lv(t, {
						selectors: '[data-component="webgl-light"]'
					}).init()
				}))
			}(),
			function () {
				document.querySelectorAll('[data-scroll-call^="footer-inview"]').forEach((t => {
					new Do({
						holder: t,
						settings: {
							activeClass: "footer-visible"
						}
					}).init()
				}))
			}()
		}
		class Vv {
			constructor({
				holder: t
			}) {
				this.holder = t, this.target = this.holder.getAttribute("data-smooth-scroll") || this.holder.getAttribute("href"), this.targetNode = document.querySelector(this.target), this.onClick = t => this.clickListener(t)
			}
			init() {
				this.holder.addEventListener("click", this.onClick)
			}
			clickListener(t) {
				t.preventDefault(), h(f.scrollTo, {
					target: this.target,
					duration: 1e3 * this.duration,
					offset: -105
				})
			}
			get duration() {
				return parseFloat(this.holder.getAttribute("data-duration")) || 1
			}
		}
		class Wv {
			constructor({
				holder: t,
				settings: e
			}) {
				this.holder = t, this.settings = {
					activeClass: "video-modal--active",
					DOM: {
						trigger: '[data-component="fullscreen-video"]',
						modalContent: "[data-content]",
						modalClose: "[data-modal-close]"
					},
					video: {
						vimeo: "vimeo",
						youtube: "youtube"
					},
					...e
				}, this.togglers = [...document.querySelectorAll(this.settings.DOM.trigger)], this.videoContent = this.holder.querySelector(this.settings.DOM.modalContent), this.videoClose = this.holder.querySelector(this.settings.DOM.modalClose), this.clickListener = () => this.toggleState()
			}
			init() {
				this.togglers.length && (this.els = this.togglers.map((t => {
					const e = t.getAttribute("data-video-id"),
						i = t.getAttribute("data-player-type") || this.settings.video.vimeo;
					return {
						el: t,
						videoID: e,
						videoType: i,
						videoTemplate: this.getPlayerByType({
							videoType: i,
							videoID: e
						})
					}
				})), this.attachEvents())
			}
			attachEvents() {
				this.els.forEach((t => {
					t.el.addEventListener("click", (() => {
						this.activeData = { ...t
						}, this.toggleState()
					}))
				})), this.videoClose.addEventListener("click", this.clickListener)
			}
			getPlayerByType({
				videoType: t,
				videoID: e
			}) {
				switch (t) {
					case this.settings.video.youtube:
						return `<iframe src="https://www.youtube.com/embed/${e}?&autoplay=1" frameborder="0" allow="autoplay; fullscreen"></iframe>`;
					default:
						return `<iframe src="https://player.vimeo.com/video/${e}?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay; fullscreen"></iframe>`
				}
			}
			toggleState() {
				this.isActive ? this.close() : this.open()
			}
			insertPlayer() {
				const {
					videoTemplate: t
				} = this.activeData;
				t && (this.videoContent.innerHTML = t)
			}
			removePlayer() {
				this.videoContent.innerHTML = ""
			}
			open() {
				a.classList.add(this.settings.activeClass), this.insertPlayer(), h(C.opened, this.activeData)
			}
			close() {
				a.classList.remove(this.settings.activeClass), this.removePlayer(), h(C.closed, this.activeData)
			}
			get isActive() {
				return a.classList.contains(this.settings.activeClass)
			}
		}
		var Gv = i(24),
			Hv = i.n(Gv);
		class jv {
			constructor({
				holder: t,
				settings: e
			}) {
				this.holder = t, this.settings = {
					passedClass: "preloader-passed",
					DOM: {
						content: ".preloader-holder",
						image: "[data-preloader-image]",
						imageOverlay: "[data-image-overlay]",
						logo: "[data-preloader-logo]",
						progressValue: "[data-progress-value]"
					},
					...e
				}
			}
			init() {
				this.holder && (window.sessionStorage.getItem(S) ? this.skip() : (this.image = this.holder.querySelector(this.settings.DOM.image), this.imageOverlay = this.holder.querySelector(this.settings.DOM.imageOverlay), this.content = this.holder.querySelector(this.settings.DOM.content), this.progressValue = this.holder.querySelector(this.settings.DOM.progressValue), this.logo = this.holder.querySelector(this.settings.DOM.logo), this.animation = Rr.timeline({
					duration: 3,
					onUpdate: () => {
						this.updateImageOverlay(), this.updateProgressValue()
					},
					onComplete: () => this.hidePreloader()
				}), this.animate(), window.sessionStorage.setItem(S, !0)))
			}
			skip() {
				this.holder.remove(), a.classList.add(this.settings.passedClass), Rr.delayedCall(.5, (() => h(M)))
			}
			hidePreloader() {
				Rr.to(this.content, {
					opacity: 0,
					duration: 1
				}), Rr.fromTo(this.holder, {
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
				}, {
					delay: .3,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
					webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
					duration: 2,
					ease: "circ.inOut",
					onComplete: () => this.holder.remove()
				}), Rr.delayedCall(.3, (() => h(M)))
			}
			updateImageOverlay() {
				Rr.set(this.imageOverlay, {
					scaleX: 1 - this.animation.progress()
				})
			}
			updateProgressValue() {
				this.progressValue.innerHTML = `${(100*this.animation.progress()).toFixed(0).toString().padStart(3,"0")}`
			}
			animateLogo() {
				const t = [...this.logo.querySelectorAll("path")];
				Rr.fromTo(Rr.utils.shuffle(t), {
					opacity: 0
				}, {
					opacity: 1,
					stagger: {
						each: .25,
						from: "random"
					}
				})
			}
			showImage() {
				Rr.from(this.image, {
					scale: 0,
					duration: 1
				})
			}
			animate() {
				Rr.to(this.content, {
					opacity: 1,
					duration: .2
				}), this.showImage(), this.animateLogo(), this.animation.play().delay(.3)
			}
		}
		const qv = () => {
			! function (t) {
				const e = "[data-scroller]",
					i = t ? t.querySelector(e) : document.querySelector(e),
					n = new ja,
					r = new qa({
						el: i,
						smooth: !0,
						repeat: !1,
						getDirection: !0,
						getSpeed: !0,
						lerp: .05,
						multiplier: .8,
						touchMultiplier: 2,
						firefoxMultiplier: 100,
						scrollTreshold: 30,
						offTopClass: "is-not-top",
						onTopClass: "is-top"
					});
				n.init(), r.init()
			}(),
			function () {
				document.querySelectorAll('[data-component="horizontal-scroll-section"]').forEach((t => {
					new go({
						holder: t
					}).init()
				}))
			}(), (() => {
				a.classList.add("is-loaded"), a.classList.remove("is-loading")
			})(), h(f.update)
		};
		if ((() => !!document.documentMode)())(() => {
			const t = document.querySelector('[data-component="preloader"]'),
				e = document.querySelector("[data-page-layout]"),
				i = document.createElement("div"),
				n = document.createElement("div");
			n.setAttribute("class", "w-full max-w-screen-lg mx-auto"), i.setAttribute("class", "absolute w-full h-full z-50 text-xl lg:text-3xl flex items-center justify-center flex-col text-center p-60"), n.innerHTML = "Your browser is not supported. <br> Please use the latest version of Chrome, Safari, Firefox or Edge for the best experience on this site.", t.remove(), e.innerHTML = "", i.appendChild(n), e.appendChild(i)
		})();
		else try {
			! function () {
				new jv({
					holder: document.querySelector('[data-component="preloader"]')
				}).init()
			}(),
			function () {
				const t = new Hv.a({
					container: o,
					elements_selector: '[data-component="lazyload"]',
					threshold: 2 * window.innerHeight,
					unobserve_entered: !0
				});
				document.addEventListener(D, (() => t.update())), document.addEventListener(v, (() => t.update())), document.addEventListener(T, (({
					detail: t
				}) => {
					t.length && t.forEach((t => Hv.a.load(t, {
						unobserve_entered: !0
					})))
				}))
			}(),
			function () {
				const t = co.map((t => new lo.a(t).load()));
				return Promise.all(t)
			}().then((() => {
				! function () {
					document.querySelectorAll('[data-component="header"]').forEach((t => {
						const e = t.querySelector('[data-component="nav-toggle"]');
						new ao(e, t).init()
					}))
				}(),
				function () {
					const t = {
						draggable: {
							Instance: Ur,
							settings: {
								modifier: "drag",
								selector: '[data-component="drag-carousel"]'
							}
						}
					};
					Vr.init(), Object.values(t).forEach((({
						Instance: t,
						...e
					}) => {
						const i = new t({
							cursor: Vr,
							...e
						});
						c() || i.init()
					}))
				}(),
				function () {
					document.querySelectorAll('[data-component="products-carousel"]').forEach((t => {
						const e = "draggable--pressed",
							i = t.querySelector("[data-carousel]"),
							n = t.querySelector("[data-slide-current]"),
							r = t.querySelector("[data-slide-total]"),
							s = [...t.querySelectorAll(".swiper-slide")],
							o = new Mt(i, {
								init: !1,
								speed: 700,
								spaceBetween: 45,
								slidesPerView: 1,
								watchSlidesProgress: !0,
								touchStartPreventDefault: !1,
								breakpoints: {
									768: {
										slidesPerView: 2,
										spaceBetween: 45
									},
									1024: {
										slidesPerView: "auto",
										freeMode: !0,
										spaceBetween: 100
									}
								},
								pagination: {
									dynamicBullets: !0,
									dynamicMainBullets: 6,
									el: t.querySelector(".carousel-pagination")
								}
							});
						r && (r.innerHTML = s.length), o.on("slideChange", (({
							realIndex: t
						}) => {
							n && (n.innerHTML = t + 1)
						})), o.on("beforeSlideChangeStart", (() => {
							o.updateSlidesClasses()
						})), o.on("init", (() => {
							h(D)
						})), t.addEventListener("mousedown", (() => {
							a.classList.add(e)
						})), t.addEventListener("mouseup", (() => {
							a.classList.remove(e)
						})), o.init()
					}))
				}(), yo(), fo(),
					function () {
						document.querySelectorAll("[data-video-modal]").forEach((t => {
							new Wv({
								holder: t
							}).init()
						}))
					}(),
					function () {
						document.querySelectorAll("[data-smooth-scroll]").forEach((t => {
							new Vv({
								holder: t
							}).init()
						}))
					}(), Uv(),
					function () {
						document.querySelectorAll("[data-cookies-popup]").forEach((t => {
							new Br({
								holder: t
							}).init()
						}))
					}(),
					function () {
						document.querySelectorAll("[data-product-added-panel]").forEach((t => {
							new xo({
								holder: t
							}).init()
						}))
					}()
			})), document.addEventListener(M, (() => qv()), {
				once: !0
			})
		} catch (t) {}
	}
});