! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.vPikaday = t() : e.vPikaday = t()
}(this, function() {
    return function(e) {
        function t(a) {
            if (n[a]) return n[a].exports;
            var s = n[a] = {
                exports: {},
                id: a,
                loaded: !1
            };
            return e[a].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(113),
            r = a(s),
            i = n(112);
        if (!i) throw new Error("[vue-pikaday] cannot locate the Pikaday library.");
        var d = {
            config: {},
            install: function(e) {
                e.directive('date', {
                    twoWay: !0,
                    params: ["options"],
                    bind: function(e) {
                        var t = e.directive('date',''),
                            n = (0, r["default"])({
                                field: 'indexchamadosmovimentos',
                                onSelect: function() {
                                    t.set(t.toString())
                                }
                            }, t.params.options);
                        t.picker = new i(n), t.arg && !t.vm.datepicker && (t.vm.datepicker = {}), t.arg && t.vm.datepicker[this.arg] ? console.warn("[vue-datepicker] cannot set already defined datepicker id: '" + t.arg + "'") : t.arg && (t.vm.datepicker[t.arg] = t.picker)
                    },
                    update: function(e) {
                        e && t.picker.setDate(e, !0)
                    },
                    unbind: function() {
                        t.picker.destroy()
                    }
                })
            }
        };
        window.Vue && (window.vPikaday = d, Vue.use(d)), t["default"] = d
    }, function(e, t, n) {
        (function(e) {
            ! function(t, n) {
                e.exports = n()
            }(this, function() {
                "use strict";

                function t() {
                    return Ma.apply(null, arguments)
                }

                function a(e) {
                    Ma = e
                }

                function s(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }

                function r(e) {
                    return "[object Object]" === Object.prototype.toString.call(e)
                }

                function i(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }

                function d(e) {
                    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                }

                function _(e, t) {
                    var n, a = [];
                    for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
                    return a
                }

                function o(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function u(e, t) {
                    for (var n in t) o(t, n) && (e[n] = t[n]);
                    return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function m(e, t, n, a) {
                    return yt(e, t, n, a, !0).utc()
                }

                function l() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null
                    }
                }

                function c(e) {
                    return null == e._pf && (e._pf = l()), e._pf
                }

                function h(e) {
                    if (null == e._isValid) {
                        var t = c(e),
                            n = La.call(t.parsedDateParts, function(e) {
                                return null != e
                            });
                        e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
                    }
                    return e._isValid
                }

                function M(e) {
                    var t = m(NaN);
                    return null != e ? u(c(t), e) : c(t).userInvalidated = !0, t
                }

                function L(e) {
                    return void 0 === e
                }

                function f(e, t) {
                    var n, a, s;
                    if (L(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), L(t._i) || (e._i = t._i), L(t._f) || (e._f = t._f), L(t._l) || (e._l = t._l), L(t._strict) || (e._strict = t._strict), L(t._tzm) || (e._tzm = t._tzm), L(t._isUTC) || (e._isUTC = t._isUTC), L(t._offset) || (e._offset = t._offset), L(t._pf) || (e._pf = c(t)), L(t._locale) || (e._locale = t._locale), fa.length > 0)
                        for (n in fa) a = fa[n], s = t[a], L(s) || (e[a] = s);
                    return e
                }

                function y(e) {
                    f(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), ya === !1 && (ya = !0, t.updateOffset(this), ya = !1)
                }

                function Y(e) {
                    return e instanceof y || null != e && null != e._isAMomentObject
                }

                function p(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function D(e) {
                    var t = +e,
                        n = 0;
                    return 0 !== t && isFinite(t) && (n = p(t)), n
                }

                function k(e, t, n) {
                    var a, s = Math.min(e.length, t.length),
                        r = Math.abs(e.length - t.length),
                        i = 0;
                    for (a = 0; a < s; a++)(n && e[a] !== t[a] || !n && D(e[a]) !== D(t[a])) && i++;
                    return i + r
                }

                function g(e) {
                    t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function T(e, n) {
                    var a = !0;
                    return u(function() {
                        return null != t.deprecationHandler && t.deprecationHandler(null, e), a && (g(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), a = !1), n.apply(this, arguments)
                    }, n)
                }

                function w(e, n) {
                    null != t.deprecationHandler && t.deprecationHandler(e, n), Ya[e] || (g(n), Ya[e] = !0)
                }

                function v(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function b(e) {
                    var t, n;
                    for (n in e) t = e[n], v(t) ? this[n] = t : this["_" + n] = t;
                    this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
                }

                function S(e, t) {
                    var n, a = u({}, e);
                    for (n in t) o(t, n) && (r(e[n]) && r(t[n]) ? (a[n] = {}, u(a[n], e[n]), u(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
                    for (n in e) o(e, n) && !o(t, n) && r(e[n]) && (a[n] = u({}, a[n]));
                    return a
                }

                function H(e) {
                    null != e && this.set(e)
                }

                function j(e, t, n) {
                    var a = this._calendar[e] || this._calendar.sameElse;
                    return v(a) ? a.call(t, n) : a
                }

                function x(e) {
                    var t = this._longDateFormat[e],
                        n = this._longDateFormat[e.toUpperCase()];
                    return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
                }

                function P() {
                    return this._invalidDate
                }

                function W(e) {
                    return this._ordinal.replace("%d", e)
                }

                function E(e, t, n, a) {
                    var s = this._relativeTime[n];
                    return v(s) ? s(e, t, n, a) : s.replace(/%d/i, e)
                }

                function F(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return v(n) ? n(t) : n.replace(/%s/i, t)
                }

                function A(e, t) {
                    var n = e.toLowerCase();
                    Sa[n] = Sa[n + "s"] = Sa[t] = e
                }

                function O(e) {
                    return "string" == typeof e ? Sa[e] || Sa[e.toLowerCase()] : void 0
                }

                function z(e) {
                    var t, n, a = {};
                    for (n in e) o(e, n) && (t = O(n), t && (a[t] = e[n]));
                    return a
                }

                function J(e, t) {
                    Ha[e] = t
                }

                function R(e) {
                    var t = [];
                    for (var n in e) t.push({
                        unit: n,
                        priority: Ha[n]
                    });
                    return t.sort(function(e, t) {
                        return e.priority - t.priority
                    }), t
                }

                function C(e, n) {
                    return function(a) {
                        return null != a ? (I(this, e, a), t.updateOffset(this, n), this) : N(this, e)
                    }
                }

                function N(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function I(e, t, n) {
                    e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
                }

                function G(e) {
                    return e = O(e), v(this[e]) ? this[e]() : this
                }

                function U(e, t) {
                    if ("object" == typeof e) {
                        e = z(e);
                        for (var n = R(e), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
                    } else if (e = O(e), v(this[e])) return this[e](t);
                    return this
                }

                function V(e, t, n) {
                    var a = "" + Math.abs(e),
                        s = t - a.length,
                        r = e >= 0;
                    return (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + a
                }

                function B(e, t, n, a) {
                    var s = a;
                    "string" == typeof a && (s = function() {
                        return this[a]()
                    }), e && (Wa[e] = s), t && (Wa[t[0]] = function() {
                        return V(s.apply(this, arguments), t[1], t[2])
                    }), n && (Wa[n] = function() {
                        return this.localeData().ordinal(s.apply(this, arguments), e)
                    })
                }

                function q(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                }

                function K(e) {
                    var t, n, a = e.match(ja);
                    for (t = 0, n = a.length; t < n; t++) Wa[a[t]] ? a[t] = Wa[a[t]] : a[t] = q(a[t]);
                    return function(t) {
                        var s, r = "";
                        for (s = 0; s < n; s++) r += a[s] instanceof Function ? a[s].call(t, e) : a[s];
                        return r
                    }
                }

                function Z(e, t) {
                    return e.isValid() ? (t = $(t, e.localeData()), Pa[t] = Pa[t] || K(t), Pa[t](e)) : e.localeData().invalidDate()
                }

                function $(e, t) {
                    function n(e) {
                        return t.longDateFormat(e) || e
                    }
                    var a = 5;
                    for (xa.lastIndex = 0; a >= 0 && xa.test(e);) e = e.replace(xa, n), xa.lastIndex = 0, a -= 1;
                    return e
                }

                function Q(e, t, n) {
                    $a[e] = v(t) ? t : function(e, a) {
                        return e && n ? n : t
                    }
                }

                function X(e, t) {
                    return o($a, e) ? $a[e](t._strict, t._locale) : new RegExp(ee(e))
                }

                function ee(e) {
                    return te(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, s) {
                        return t || n || a || s
                    }))
                }

                function te(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function ne(e, t) {
                    var n, a = t;
                    for ("string" == typeof e && (e = [e]), "number" == typeof t && (a = function(e, n) {
                            n[t] = D(e)
                        }), n = 0; n < e.length; n++) Qa[e[n]] = a
                }

                function ae(e, t) {
                    ne(e, function(e, n, a, s) {
                        a._w = a._w || {}, t(e, a._w, a, s)
                    })
                }

                function se(e, t, n) {
                    null != t && o(Qa, e) && Qa[e](t, n._a, n, e)
                }

                function re(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                }

                function ie(e, t) {
                    return s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || _s).test(t) ? "format" : "standalone"][e.month()]
                }

                function de(e, t) {
                    return s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[_s.test(t) ? "format" : "standalone"][e.month()]
                }

                function _e(e, t, n) {
                    var a, s, r, i = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) r = m([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(r, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? (s = Da.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = Da.call(this._longMonthsParse, i), s !== -1 ? s : null) : "MMM" === t ? (s = Da.call(this._shortMonthsParse, i), s !== -1 ? s : (s = Da.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = Da.call(this._longMonthsParse, i), s !== -1 ? s : (s = Da.call(this._shortMonthsParse, i), s !== -1 ? s : null))
                }

                function oe(e, t, n) {
                    var a, s, r;
                    if (this._monthsParseExact) return _e.call(this, e, t, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
                        if (s = m([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[a] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
                        if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
                        if (!n && this._monthsParse[a].test(e)) return a
                    }
                }

                function ue(e, t) {
                    var n;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = D(t);
                        else if (t = e.localeData().monthsParse(t), "number" != typeof t) return e;
                    return n = Math.min(e.date(), re(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
                }

                function me(e) {
                    return null != e ? (ue(this, e), t.updateOffset(this, !0), this) : N(this, "Month")
                }

                function le() {
                    return re(this.year(), this.month())
                }

                function ce(e) {
                    return this._monthsParseExact ? (o(this, "_monthsRegex") || Me.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = ms), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }

                function he(e) {
                    return this._monthsParseExact ? (o(this, "_monthsRegex") || Me.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (o(this, "_monthsRegex") || (this._monthsRegex = ls), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }

                function Me() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, n, a = [],
                        s = [],
                        r = [];
                    for (t = 0; t < 12; t++) n = m([2e3, t]), a.push(this.monthsShort(n, "")), s.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
                    for (a.sort(e), s.sort(e), r.sort(e), t = 0; t < 12; t++) a[t] = te(a[t]), s[t] = te(s[t]);
                    for (t = 0; t < 24; t++) r[t] = te(r[t]);
                    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
                }

                function Le(e) {
                    return fe(e) ? 366 : 365
                }

                function fe(e) {
                    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
                }

                function ye() {
                    return fe(this.year())
                }

                function Ye(e, t, n, a, s, r, i) {
                    var d = new Date(e, t, n, a, s, r, i);
                    return e < 100 && e >= 0 && isFinite(d.getFullYear()) && d.setFullYear(e), d
                }

                function pe(e) {
                    var t = new Date(Date.UTC.apply(null, arguments));
                    return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                }

                function De(e, t, n) {
                    var a = 7 + t - n,
                        s = (7 + pe(e, 0, a).getUTCDay() - t) % 7;
                    return -s + a - 1
                }

                function ke(e, t, n, a, s) {
                    var r, i, d = (7 + n - a) % 7,
                        _ = De(e, a, s),
                        o = 1 + 7 * (t - 1) + d + _;
                    return o <= 0 ? (r = e - 1, i = Le(r) + o) : o > Le(e) ? (r = e + 1, i = o - Le(e)) : (r = e, i = o), {
                        year: r,
                        dayOfYear: i
                    }
                }

                function ge(e, t, n) {
                    var a, s, r = De(e.year(), t, n),
                        i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                    return i < 1 ? (s = e.year() - 1, a = i + Te(s, t, n)) : i > Te(e.year(), t, n) ? (a = i - Te(e.year(), t, n), s = e.year() + 1) : (s = e.year(), a = i), {
                        week: a,
                        year: s
                    }
                }

                function Te(e, t, n) {
                    var a = De(e, t, n),
                        s = De(e + 1, t, n);
                    return (Le(e) - a + s) / 7
                }

                function we(e) {
                    return ge(e, this._week.dow, this._week.doy).week
                }

                function ve() {
                    return this._week.dow
                }

                function be() {
                    return this._week.doy
                }

                function Se(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }

                function He(e) {
                    var t = ge(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }

                function je(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
                }

                function xe(e, t) {
                    return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                }

                function Pe(e, t) {
                    return s(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
                }

                function We(e) {
                    return this._weekdaysShort[e.day()]
                }

                function Ee(e) {
                    return this._weekdaysMin[e.day()]
                }

                function Fe(e, t, n) {
                    var a, s, r, i = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) r = m([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(r, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? (s = Da.call(this._weekdaysParse, i), s !== -1 ? s : null) : "ddd" === t ? (s = Da.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = Da.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : "dddd" === t ? (s = Da.call(this._weekdaysParse, i), s !== -1 ? s : (s = Da.call(this._shortWeekdaysParse, i), s !== -1 ? s : (s = Da.call(this._minWeekdaysParse, i), s !== -1 ? s : null))) : "ddd" === t ? (s = Da.call(this._shortWeekdaysParse, i), s !== -1 ? s : (s = Da.call(this._weekdaysParse, i), s !== -1 ? s : (s = Da.call(this._minWeekdaysParse, i), s !== -1 ? s : null))) : (s = Da.call(this._minWeekdaysParse, i), s !== -1 ? s : (s = Da.call(this._weekdaysParse, i), s !== -1 ? s : (s = Da.call(this._shortWeekdaysParse, i), s !== -1 ? s : null)))
                }

                function Ae(e, t, n) {
                    var a, s, r;
                    if (this._weekdaysParseExact) return Fe.call(this, e, t, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
                        if (s = m([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[a] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[a] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
                        if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
                        if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
                        if (!n && this._weekdaysParse[a].test(e)) return a
                    }
                }

                function Oe(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = je(e, this.localeData()), this.add(e - t, "d")) : t
                }

                function ze(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }

                function Je(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        var t = xe(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }

                function Re(e) {
                    return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || Ie.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = ys), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }

                function Ce(e) {
                    return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || Ie.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (o(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ys), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }

                function Ne(e) {
                    return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || Ie.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ps), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }

                function Ie() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, n, a, s, r, i = [],
                        d = [],
                        _ = [],
                        o = [];
                    for (t = 0; t < 7; t++) n = m([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), i.push(a), d.push(s), _.push(r), o.push(a), o.push(s), o.push(r);
                    for (i.sort(e), d.sort(e), _.sort(e), o.sort(e), t = 0; t < 7; t++) d[t] = te(d[t]), _[t] = te(_[t]), o[t] = te(o[t]);
                    this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
                }

                function Ge() {
                    return this.hours() % 12 || 12
                }

                function Ue() {
                    return this.hours() || 24
                }

                function Ve(e, t) {
                    B(e, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function Be(e, t) {
                    return t._meridiemParse
                }

                function qe(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }

                function Ke(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }

                function Ze(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function $e(e) {
                    for (var t, n, a, s, r = 0; r < e.length;) {
                        for (s = Ze(e[r]).split("-"), t = s.length, n = Ze(e[r + 1]), n = n ? n.split("-") : null; t > 0;) {
                            if (a = Qe(s.slice(0, t).join("-"))) return a;
                            if (n && n.length >= t && k(s, n, !0) >= t - 1) break;
                            t--
                        }
                        r++
                    }
                    return null
                }

                function Qe(t) {
                    var a = null;
                    if (!ws[t] && "undefined" != typeof e && e && e.exports) try {
                        a = Ds._abbr, n(141)("./" + t), Xe(a)
                    } catch (s) {}
                    return ws[t]
                }

                function Xe(e, t) {
                    var n;
                    return e && (n = L(t) ? nt(e) : et(e, t), n && (Ds = n)), Ds._abbr
                }

                function et(e, t) {
                    if (null !== t) {
                        var n = Ts;
                        return t.abbr = e, null != ws[e] ? (w("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ws[e]._config) : null != t.parentLocale && (null != ws[t.parentLocale] ? n = ws[t.parentLocale]._config : w("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), ws[e] = new H(S(n, t)), Xe(e), ws[e]
                    }
                    return delete ws[e], null
                }

                function tt(e, t) {
                    if (null != t) {
                        var n, a = Ts;
                        null != ws[e] && (a = ws[e]._config), t = S(a, t), n = new H(t), n.parentLocale = ws[e], ws[e] = n, Xe(e)
                    } else null != ws[e] && (null != ws[e].parentLocale ? ws[e] = ws[e].parentLocale : null != ws[e] && delete ws[e]);
                    return ws[e]
                }

                function nt(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ds;
                    if (!s(e)) {
                        if (t = Qe(e)) return t;
                        e = [e]
                    }
                    return $e(e)
                }

                function at() {
                    return pa(ws)
                }

                function st(e) {
                    var t, n = e._a;
                    return n && c(e).overflow === -2 && (t = n[es] < 0 || n[es] > 11 ? es : n[ts] < 1 || n[ts] > re(n[Xa], n[es]) ? ts : n[ns] < 0 || n[ns] > 24 || 24 === n[ns] && (0 !== n[as] || 0 !== n[ss] || 0 !== n[rs]) ? ns : n[as] < 0 || n[as] > 59 ? as : n[ss] < 0 || n[ss] > 59 ? ss : n[rs] < 0 || n[rs] > 999 ? rs : -1, c(e)._overflowDayOfYear && (t < Xa || t > ts) && (t = ts), c(e)._overflowWeeks && t === -1 && (t = is), c(e)._overflowWeekday && t === -1 && (t = ds), c(e).overflow = t), e
                }

                function rt(e) {
                    var t, n, a, s, r, i, d = e._i,
                        _ = vs.exec(d) || bs.exec(d);
                    if (_) {
                        for (c(e).iso = !0, t = 0, n = Hs.length; t < n; t++)
                            if (Hs[t][1].exec(_[1])) {
                                s = Hs[t][0], a = Hs[t][2] !== !1;
                                break
                            }
                        if (null == s) return void(e._isValid = !1);
                        if (_[3]) {
                            for (t = 0, n = js.length; t < n; t++)
                                if (js[t][1].exec(_[3])) {
                                    r = (_[2] || " ") + js[t][0];
                                    break
                                }
                            if (null == r) return void(e._isValid = !1)
                        }
                        if (!a && null != r) return void(e._isValid = !1);
                        if (_[4]) {
                            if (!Ss.exec(_[4])) return void(e._isValid = !1);
                            i = "Z"
                        }
                        e._f = s + (r || "") + (i || ""), mt(e)
                    } else e._isValid = !1
                }

                function it(e) {
                    var n = xs.exec(e._i);
                    return null !== n ? void(e._d = new Date((+n[1]))) : (rt(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
                }

                function dt(e, t, n) {
                    return null != e ? e : null != t ? t : n
                }

                function _t(e) {
                    var n = new Date(t.now());
                    return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
                }

                function ot(e) {
                    var t, n, a, s, r = [];
                    if (!e._d) {
                        for (a = _t(e), e._w && null == e._a[ts] && null == e._a[es] && ut(e), e._dayOfYear && (s = dt(e._a[Xa], a[Xa]), e._dayOfYear > Le(s) && (c(e)._overflowDayOfYear = !0), n = pe(s, 0, e._dayOfYear), e._a[es] = n.getUTCMonth(), e._a[ts] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = a[t];
                        for (; t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[ns] && 0 === e._a[as] && 0 === e._a[ss] && 0 === e._a[rs] && (e._nextDay = !0, e._a[ns] = 0), e._d = (e._useUTC ? pe : Ye).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ns] = 24)
                    }
                }

                function ut(e) {
                    var t, n, a, s, r, i, d, _;
                    t = e._w, null != t.GG || null != t.W || null != t.E ? (r = 1, i = 4, n = dt(t.GG, e._a[Xa], ge(Yt(), 1, 4).year), a = dt(t.W, 1), s = dt(t.E, 1), (s < 1 || s > 7) && (_ = !0)) : (r = e._locale._week.dow, i = e._locale._week.doy, n = dt(t.gg, e._a[Xa], ge(Yt(), r, i).year), a = dt(t.w, 1), null != t.d ? (s = t.d, (s < 0 || s > 6) && (_ = !0)) : null != t.e ? (s = t.e + r, (t.e < 0 || t.e > 6) && (_ = !0)) : s = r), a < 1 || a > Te(n, r, i) ? c(e)._overflowWeeks = !0 : null != _ ? c(e)._overflowWeekday = !0 : (d = ke(n, a, s, r, i), e._a[Xa] = d.year, e._dayOfYear = d.dayOfYear)
                }

                function mt(e) {
                    if (e._f === t.ISO_8601) return void rt(e);
                    e._a = [], c(e).empty = !0;
                    var n, a, s, r, i, d = "" + e._i,
                        _ = d.length,
                        o = 0;
                    for (s = $(e._f, e._locale).match(ja) || [], n = 0; n < s.length; n++) r = s[n], a = (d.match(X(r, e)) || [])[0], a && (i = d.substr(0, d.indexOf(a)), i.length > 0 && c(e).unusedInput.push(i), d = d.slice(d.indexOf(a) + a.length), o += a.length), Wa[r] ? (a ? c(e).empty = !1 : c(e).unusedTokens.push(r), se(r, a, e)) : e._strict && !a && c(e).unusedTokens.push(r);
                    c(e).charsLeftOver = _ - o, d.length > 0 && c(e).unusedInput.push(d), e._a[ns] <= 12 && c(e).bigHour === !0 && e._a[ns] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[ns] = lt(e._locale, e._a[ns], e._meridiem), ot(e), st(e)
                }

                function lt(e, t, n) {
                    var a;
                    return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n), a && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
                }

                function ct(e) {
                    var t, n, a, s, r;
                    if (0 === e._f.length) return c(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (s = 0; s < e._f.length; s++) r = 0, t = f({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], mt(t), h(t) && (r += c(t).charsLeftOver, r += 10 * c(t).unusedTokens.length, c(t).score = r, (null == a || r < a) && (a = r, n = t));
                    u(e, n || t)
                }

                function ht(e) {
                    if (!e._d) {
                        var t = z(e._i);
                        e._a = _([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                            return e && parseInt(e, 10)
                        }), ot(e)
                    }
                }

                function Mt(e) {
                    var t = new y(st(Lt(e)));
                    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                }

                function Lt(e) {
                    var t = e._i,
                        n = e._f;
                    return e._locale = e._locale || nt(e._l), null === t || void 0 === n && "" === t ? M({
                        nullInput: !0
                    }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), Y(t) ? new y(st(t)) : (s(n) ? ct(e) : d(t) ? e._d = t : n ? mt(e) : ft(e), h(e) || (e._d = null), e))
                }

                function ft(e) {
                    var n = e._i;
                    void 0 === n ? e._d = new Date(t.now()) : d(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? it(e) : s(n) ? (e._a = _(n.slice(0), function(e) {
                        return parseInt(e, 10)
                    }), ot(e)) : "object" == typeof n ? ht(e) : "number" == typeof n ? e._d = new Date(n) : t.createFromInputFallback(e)
                }

                function yt(e, t, n, a, d) {
                    var _ = {};
                    return "boolean" == typeof n && (a = n, n = void 0), (r(e) && i(e) || s(e) && 0 === e.length) && (e = void 0), _._isAMomentObject = !0, _._useUTC = _._isUTC = d, _._l = n, _._i = e, _._f = t, _._strict = a, Mt(_)
                }

                function Yt(e, t, n, a) {
                    return yt(e, t, n, a, !1)
                }

                function pt(e, t) {
                    var n, a;
                    if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return Yt();
                    for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]);
                    return n
                }

                function Dt() {
                    var e = [].slice.call(arguments, 0);
                    return pt("isBefore", e)
                }

                function kt() {
                    var e = [].slice.call(arguments, 0);
                    return pt("isAfter", e)
                }

                function gt(e) {
                    var t = z(e),
                        n = t.year || 0,
                        a = t.quarter || 0,
                        s = t.month || 0,
                        r = t.week || 0,
                        i = t.day || 0,
                        d = t.hour || 0,
                        _ = t.minute || 0,
                        o = t.second || 0,
                        u = t.millisecond || 0;
                    this._milliseconds = +u + 1e3 * o + 6e4 * _ + 1e3 * d * 60 * 60, this._days = +i + 7 * r, this._months = +s + 3 * a + 12 * n, this._data = {}, this._locale = nt(), this._bubble()
                }

                function Tt(e) {
                    return e instanceof gt
                }

                function wt(e, t) {
                    B(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            n = "+";
                        return e < 0 && (e = -e, n = "-"), n + V(~~(e / 60), 2) + t + V(~~e % 60, 2)
                    })
                }

                function vt(e, t) {
                    var n = (t || "").match(e) || [],
                        a = n[n.length - 1] || [],
                        s = (a + "").match(Fs) || ["-", 0, 0],
                        r = +(60 * s[1]) + D(s[2]);
                    return "+" === s[0] ? r : -r
                }

                function bt(e, n) {
                    var a, s;
                    return n._isUTC ? (a = n.clone(), s = (Y(e) || d(e) ? e.valueOf() : Yt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + s), t.updateOffset(a, !1), a) : Yt(e).local()
                }

                function St(e) {
                    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                }

                function Ht(e, n) {
                    var a, s = this._offset || 0;
                    return this.isValid() ? null != e ? ("string" == typeof e ? e = vt(qa, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (a = St(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), s !== e && (!n || this._changeInProgress ? Vt(this, Rt(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? s : St(this) : null != e ? this : NaN
                }

                function jt(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }

                function xt(e) {
                    return this.utcOffset(0, e)
                }

                function Pt(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(St(this), "m")), this
                }

                function Wt() {
                    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(vt(Ba, this._i)), this
                }

                function Et(e) {
                    return !!this.isValid() && (e = e ? Yt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0)
                }

                function Ft() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function At() {
                    if (!L(this._isDSTShifted)) return this._isDSTShifted;
                    var e = {};
                    if (f(e, this), e = Lt(e), e._a) {
                        var t = e._isUTC ? m(e._a) : Yt(e._a);
                        this._isDSTShifted = this.isValid() && k(e._a, t.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                }

                function Ot() {
                    return !!this.isValid() && !this._isUTC
                }

                function zt() {
                    return !!this.isValid() && this._isUTC
                }

                function Jt() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function Rt(e, t) {
                    var n, a, s, r = e,
                        i = null;
                    return Tt(e) ? r = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : "number" == typeof e ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (i = As.exec(e)) ? (n = "-" === i[1] ? -1 : 1, r = {
                        y: 0,
                        d: D(i[ts]) * n,
                        h: D(i[ns]) * n,
                        m: D(i[as]) * n,
                        s: D(i[ss]) * n,
                        ms: D(i[rs]) * n
                    }) : (i = Os.exec(e)) ? (n = "-" === i[1] ? -1 : 1, r = {
                        y: Ct(i[2], n),
                        M: Ct(i[3], n),
                        w: Ct(i[4], n),
                        d: Ct(i[5], n),
                        h: Ct(i[6], n),
                        m: Ct(i[7], n),
                        s: Ct(i[8], n)
                    }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = It(Yt(r.from), Yt(r.to)), r = {}, r.ms = s.milliseconds, r.M = s.months), a = new gt(r), Tt(e) && o(e, "_locale") && (a._locale = e._locale), a
                }

                function Ct(e, t) {
                    var n = e && parseFloat(e.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * t
                }

                function Nt(e, t) {
                    var n = {
                        milliseconds: 0,
                        months: 0
                    };
                    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
                }

                function It(e, t) {
                    var n;
                    return e.isValid() && t.isValid() ? (t = bt(t, e), e.isBefore(t) ? n = Nt(e, t) : (n = Nt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function Gt(e) {
                    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
                }

                function Ut(e, t) {
                    return function(n, a) {
                        var s, r;
                        return null === a || isNaN(+a) || (w(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = a, a = r), n = "string" == typeof n ? +n : n, s = Rt(n, a), Vt(this, s, e), this
                    }
                }

                function Vt(e, n, a, s) {
                    var r = n._milliseconds,
                        i = Gt(n._days),
                        d = Gt(n._months);
                    e.isValid() && (s = null == s || s, r && e._d.setTime(e._d.valueOf() + r * a), i && I(e, "Date", N(e, "Date") + i * a), d && ue(e, N(e, "Month") + d * a), s && t.updateOffset(e, i || d))
                }

                function Bt(e, t) {
                    var n = e.diff(t, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }

                function qt(e, n) {
                    var a = e || Yt(),
                        s = bt(a, this).startOf("day"),
                        r = t.calendarFormat(this, s) || "sameElse",
                        i = n && (v(n[r]) ? n[r].call(this, a) : n[r]);
                    return this.format(i || this.localeData().calendar(r, this, Yt(a)))
                }

                function Kt() {
                    return new y(this)
                }

                function Zt(e, t) {
                    var n = Y(e) ? e : Yt(e);
                    return !(!this.isValid() || !n.isValid()) && (t = O(L(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
                }

                function $t(e, t) {
                    var n = Y(e) ? e : Yt(e);
                    return !(!this.isValid() || !n.isValid()) && (t = O(L(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
                }

                function Qt(e, t, n, a) {
                    return a = a || "()", ("(" === a[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
                }

                function Xt(e, t) {
                    var n, a = Y(e) ? e : Yt(e);
                    return !(!this.isValid() || !a.isValid()) && (t = O(t || "millisecond"), "millisecond" === t ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
                }

                function en(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }

                function tn(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }

                function nn(e, t, n) {
                    var a, s, r, i;
                    return this.isValid() ? (a = bt(e, this), a.isValid() ? (s = 6e4 * (a.utcOffset() - this.utcOffset()), t = O(t), "year" === t || "month" === t || "quarter" === t ? (i = an(this, a), "quarter" === t ? i /= 3 : "year" === t && (i /= 12)) : (r = this - a, i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - s) / 864e5 : "week" === t ? (r - s) / 6048e5 : r), n ? i : p(i)) : NaN) : NaN
                }

                function an(e, t) {
                    var n, a, s = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                        r = e.clone().add(s, "months");
                    return t - r < 0 ? (n = e.clone().add(s - 1, "months"), a = (t - r) / (r - n)) : (n = e.clone().add(s + 1, "months"), a = (t - r) / (n - r)), -(s + a) || 0
                }

                function sn() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function rn() {
                    var e = this.clone().utc();
                    return 0 < e.year() && e.year() <= 9999 ? v(Date.prototype.toISOString) ? this.toDate().toISOString() : Z(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Z(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }

                function dn(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var n = Z(this, e);
                    return this.localeData().postformat(n)
                }

                function _n(e, t) {
                    return this.isValid() && (Y(e) && e.isValid() || Yt(e).isValid()) ? Rt({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function on(e) {
                    return this.from(Yt(), e)
                }

                function un(e, t) {
                    return this.isValid() && (Y(e) && e.isValid() || Yt(e).isValid()) ? Rt({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function mn(e) {
                    return this.to(Yt(), e)
                }

                function ln(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (t = nt(e), null != t && (this._locale = t), this)
                }

                function cn() {
                    return this._locale
                }

                function hn(e) {
                    switch (e = O(e)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                        case "date":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
                }

                function Mn(e) {
                    return e = O(e), void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }

                function Ln() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function fn() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function yn() {
                    return new Date(this.valueOf())
                }

                function Yn() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }

                function pn() {
                    var e = this;
                    return {
                        years: e.year(),
                        months: e.month(),
                        date: e.date(),
                        hours: e.hours(),
                        minutes: e.minutes(),
                        seconds: e.seconds(),
                        milliseconds: e.milliseconds()
                    }
                }

                function Dn() {
                    return this.isValid() ? this.toISOString() : null
                }

                function kn() {
                    return h(this)
                }

                function gn() {
                    return u({}, c(this))
                }

                function Tn() {
                    return c(this).overflow
                }

                function wn() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function vn(e, t) {
                    B(0, [e, e.length], 0, t)
                }

                function bn(e) {
                    return xn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function Sn(e) {
                    return xn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function Hn() {
                    return Te(this.year(), 1, 4)
                }

                function jn() {
                    var e = this.localeData()._week;
                    return Te(this.year(), e.dow, e.doy)
                }

                function xn(e, t, n, a, s) {
                    var r;
                    return null == e ? ge(this, a, s).year : (r = Te(e, a, s), t > r && (t = r), Pn.call(this, e, t, n, a, s))
                }

                function Pn(e, t, n, a, s) {
                    var r = ke(e, t, n, a, s),
                        i = pe(r.year, 0, r.dayOfYear);
                    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
                }

                function Wn(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }

                function En(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }

                function Fn(e, t) {
                    t[rs] = D(1e3 * ("0." + e))
                }

                function An() {
                    return this._isUTC ? "UTC" : ""
                }

                function On() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function zn(e) {
                    return Yt(1e3 * e)
                }

                function Jn() {
                    return Yt.apply(null, arguments).parseZone();
                }

                function Rn(e) {
                    return e
                }

                function Cn(e, t, n, a) {
                    var s = nt(),
                        r = m().set(a, t);
                    return s[n](r, e)
                }

                function Nn(e, t, n) {
                    if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return Cn(e, t, n, "month");
                    var a, s = [];
                    for (a = 0; a < 12; a++) s[a] = Cn(e, a, n, "month");
                    return s
                }

                function In(e, t, n, a) {
                    "boolean" == typeof e ? ("number" == typeof t && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, "number" == typeof t && (n = t, t = void 0), t = t || "");
                    var s = nt(),
                        r = e ? s._week.dow : 0;
                    if (null != n) return Cn(t, (n + r) % 7, a, "day");
                    var i, d = [];
                    for (i = 0; i < 7; i++) d[i] = Cn(t, (i + r) % 7, a, "day");
                    return d
                }

                function Gn(e, t) {
                    return Nn(e, t, "months")
                }

                function Un(e, t) {
                    return Nn(e, t, "monthsShort")
                }

                function Vn(e, t, n) {
                    return In(e, t, n, "weekdays")
                }

                function Bn(e, t, n) {
                    return In(e, t, n, "weekdaysShort")
                }

                function qn(e, t, n) {
                    return In(e, t, n, "weekdaysMin")
                }

                function Kn() {
                    var e = this._data;
                    return this._milliseconds = Ks(this._milliseconds), this._days = Ks(this._days), this._months = Ks(this._months), e.milliseconds = Ks(e.milliseconds), e.seconds = Ks(e.seconds), e.minutes = Ks(e.minutes), e.hours = Ks(e.hours), e.months = Ks(e.months), e.years = Ks(e.years), this
                }

                function Zn(e, t, n, a) {
                    var s = Rt(t, n);
                    return e._milliseconds += a * s._milliseconds, e._days += a * s._days, e._months += a * s._months, e._bubble()
                }

                function $n(e, t) {
                    return Zn(this, e, t, 1)
                }

                function Qn(e, t) {
                    return Zn(this, e, t, -1)
                }

                function Xn(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function ea() {
                    var e, t, n, a, s, r = this._milliseconds,
                        i = this._days,
                        d = this._months,
                        _ = this._data;
                    return r >= 0 && i >= 0 && d >= 0 || r <= 0 && i <= 0 && d <= 0 || (r += 864e5 * Xn(na(d) + i), i = 0, d = 0), _.milliseconds = r % 1e3, e = p(r / 1e3), _.seconds = e % 60, t = p(e / 60), _.minutes = t % 60, n = p(t / 60), _.hours = n % 24, i += p(n / 24), s = p(ta(i)), d += s, i -= Xn(na(s)), a = p(d / 12), d %= 12, _.days = i, _.months = d, _.years = a, this
                }

                function ta(e) {
                    return 4800 * e / 146097
                }

                function na(e) {
                    return 146097 * e / 4800
                }

                function aa(e) {
                    var t, n, a = this._milliseconds;
                    if (e = O(e), "month" === e || "year" === e) return t = this._days + a / 864e5, n = this._months + ta(t), "month" === e ? n : n / 12;
                    switch (t = this._days + Math.round(na(this._months)), e) {
                        case "week":
                            return t / 7 + a / 6048e5;
                        case "day":
                            return t + a / 864e5;
                        case "hour":
                            return 24 * t + a / 36e5;
                        case "minute":
                            return 1440 * t + a / 6e4;
                        case "second":
                            return 86400 * t + a / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + a;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                }

                function sa() {
                    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12)
                }

                function ra(e) {
                    return function() {
                        return this.as(e)
                    }
                }

                function ia(e) {
                    return e = O(e), this[e + "s"]()
                }

                function da(e) {
                    return function() {
                        return this._data[e]
                    }
                }

                function _a() {
                    return p(this.days() / 7)
                }

                function oa(e, t, n, a, s) {
                    return s.relativeTime(t || 1, !!n, e, a)
                }

                function ua(e, t, n) {
                    var a = Rt(e).abs(),
                        s = mr(a.as("s")),
                        r = mr(a.as("m")),
                        i = mr(a.as("h")),
                        d = mr(a.as("d")),
                        _ = mr(a.as("M")),
                        o = mr(a.as("y")),
                        u = s < lr.s && ["s", s] || r <= 1 && ["m"] || r < lr.m && ["mm", r] || i <= 1 && ["h"] || i < lr.h && ["hh", i] || d <= 1 && ["d"] || d < lr.d && ["dd", d] || _ <= 1 && ["M"] || _ < lr.M && ["MM", _] || o <= 1 && ["y"] || ["yy", o];
                    return u[2] = t, u[3] = +e > 0, u[4] = n, oa.apply(null, u)
                }

                function ma(e) {
                    return void 0 === e ? mr : "function" == typeof e && (mr = e, !0)
                }

                function la(e, t) {
                    return void 0 !== lr[e] && (void 0 === t ? lr[e] : (lr[e] = t, !0))
                }

                function ca(e) {
                    var t = this.localeData(),
                        n = ua(this, !e, t);
                    return e && (n = t.pastFuture(+this, n)), t.postformat(n)
                }

                function ha() {
                    var e, t, n, a = cr(this._milliseconds) / 1e3,
                        s = cr(this._days),
                        r = cr(this._months);
                    e = p(a / 60), t = p(e / 60), a %= 60, e %= 60, n = p(r / 12), r %= 12;
                    var i = n,
                        d = r,
                        _ = s,
                        o = t,
                        u = e,
                        m = a,
                        l = this.asSeconds();
                    return l ? (l < 0 ? "-" : "") + "P" + (i ? i + "Y" : "") + (d ? d + "M" : "") + (_ ? _ + "D" : "") + (o || u || m ? "T" : "") + (o ? o + "H" : "") + (u ? u + "M" : "") + (m ? m + "S" : "") : "P0D"
                }
                var Ma, La;
                La = Array.prototype.some ? Array.prototype.some : function(e) {
                    for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
                        if (a in t && e.call(this, t[a], a, t)) return !0;
                    return !1
                };
                var fa = t.momentProperties = [],
                    ya = !1,
                    Ya = {};
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
                var pa;
                pa = Object.keys ? Object.keys : function(e) {
                    var t, n = [];
                    for (t in e) o(e, t) && n.push(t);
                    return n
                };
                var Da, ka = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    ga = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    Ta = "Invalid date",
                    wa = "%d",
                    va = /\d{1,2}/,
                    ba = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    Sa = {},
                    Ha = {},
                    ja = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    xa = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    Pa = {},
                    Wa = {},
                    Ea = /\d/,
                    Fa = /\d\d/,
                    Aa = /\d{3}/,
                    Oa = /\d{4}/,
                    za = /[+-]?\d{6}/,
                    Ja = /\d\d?/,
                    Ra = /\d\d\d\d?/,
                    Ca = /\d\d\d\d\d\d?/,
                    Na = /\d{1,3}/,
                    Ia = /\d{1,4}/,
                    Ga = /[+-]?\d{1,6}/,
                    Ua = /\d+/,
                    Va = /[+-]?\d+/,
                    Ba = /Z|[+-]\d\d:?\d\d/gi,
                    qa = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    Ka = /[+-]?\d+(\.\d{1,3})?/,
                    Za = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    $a = {},
                    Qa = {},
                    Xa = 0,
                    es = 1,
                    ts = 2,
                    ns = 3,
                    as = 4,
                    ss = 5,
                    rs = 6,
                    is = 7,
                    ds = 8;
                Da = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                    var t;
                    for (t = 0; t < this.length; ++t)
                        if (this[t] === e) return t;
                    return -1
                }, B("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), B("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), B("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), A("month", "M"), J("month", 8), Q("M", Ja), Q("MM", Ja, Fa), Q("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), Q("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), ne(["M", "MM"], function(e, t) {
                    t[es] = D(e) - 1
                }), ne(["MMM", "MMMM"], function(e, t, n, a) {
                    var s = n._locale.monthsParse(e, a, n._strict);
                    null != s ? t[es] = s : c(n).invalidMonth = e
                });
                var _s = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
                    os = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    us = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    ms = Za,
                    ls = Za;
                B("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), B(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), J("year", 1), Q("Y", Va), Q("YY", Ja, Fa), Q("YYYY", Ia, Oa), Q("YYYYY", Ga, za), Q("YYYYYY", Ga, za), ne(["YYYYY", "YYYYYY"], Xa), ne("YYYY", function(e, n) {
                    n[Xa] = 2 === e.length ? t.parseTwoDigitYear(e) : D(e)
                }), ne("YY", function(e, n) {
                    n[Xa] = t.parseTwoDigitYear(e)
                }), ne("Y", function(e, t) {
                    t[Xa] = parseInt(e, 10)
                }), t.parseTwoDigitYear = function(e) {
                    return D(e) + (D(e) > 68 ? 1900 : 2e3)
                };
                var cs = C("FullYear", !0);
                B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), J("week", 5), J("isoWeek", 5), Q("w", Ja), Q("ww", Ja, Fa), Q("W", Ja), Q("WW", Ja, Fa), ae(["w", "ww", "W", "WW"], function(e, t, n, a) {
                    t[a.substr(0, 1)] = D(e)
                });
                var hs = {
                    dow: 0,
                    doy: 6
                };
                B("d", 0, "do", "day"), B("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), B("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), B("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), J("day", 11), J("weekday", 11), J("isoWeekday", 11), Q("d", Ja), Q("e", Ja), Q("E", Ja), Q("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), Q("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), Q("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), ae(["dd", "ddd", "dddd"], function(e, t, n, a) {
                    var s = n._locale.weekdaysParse(e, a, n._strict);
                    null != s ? t.d = s : c(n).invalidWeekday = e
                }), ae(["d", "e", "E"], function(e, t, n, a) {
                    t[a] = D(e)
                });
                var Ms = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Ls = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    fs = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    ys = Za,
                    Ys = Za,
                    ps = Za;
                B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, Ge), B("k", ["kk", 2], 0, Ue), B("hmm", 0, 0, function() {
                    return "" + Ge.apply(this) + V(this.minutes(), 2)
                }), B("hmmss", 0, 0, function() {
                    return "" + Ge.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2)
                }), B("Hmm", 0, 0, function() {
                    return "" + this.hours() + V(this.minutes(), 2)
                }), B("Hmmss", 0, 0, function() {
                    return "" + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2)
                }), Ve("a", !0), Ve("A", !1), A("hour", "h"), J("hour", 13), Q("a", Be), Q("A", Be), Q("H", Ja), Q("h", Ja), Q("HH", Ja, Fa), Q("hh", Ja, Fa), Q("hmm", Ra), Q("hmmss", Ca), Q("Hmm", Ra), Q("Hmmss", Ca), ne(["H", "HH"], ns), ne(["a", "A"], function(e, t, n) {
                    n._isPm = n._locale.isPM(e), n._meridiem = e
                }), ne(["h", "hh"], function(e, t, n) {
                    t[ns] = D(e), c(n).bigHour = !0
                }), ne("hmm", function(e, t, n) {
                    var a = e.length - 2;
                    t[ns] = D(e.substr(0, a)), t[as] = D(e.substr(a)), c(n).bigHour = !0
                }), ne("hmmss", function(e, t, n) {
                    var a = e.length - 4,
                        s = e.length - 2;
                    t[ns] = D(e.substr(0, a)), t[as] = D(e.substr(a, 2)), t[ss] = D(e.substr(s)), c(n).bigHour = !0
                }), ne("Hmm", function(e, t, n) {
                    var a = e.length - 2;
                    t[ns] = D(e.substr(0, a)), t[as] = D(e.substr(a))
                }), ne("Hmmss", function(e, t, n) {
                    var a = e.length - 4,
                        s = e.length - 2;
                    t[ns] = D(e.substr(0, a)), t[as] = D(e.substr(a, 2)), t[ss] = D(e.substr(s))
                });
                var Ds, ks = /[ap]\.?m?\.?/i,
                    gs = C("Hours", !0),
                    Ts = {
                        calendar: ka,
                        longDateFormat: ga,
                        invalidDate: Ta,
                        ordinal: wa,
                        ordinalParse: va,
                        relativeTime: ba,
                        months: os,
                        monthsShort: us,
                        week: hs,
                        weekdays: Ms,
                        weekdaysMin: fs,
                        weekdaysShort: Ls,
                        meridiemParse: ks
                    },
                    ws = {},
                    vs = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                    bs = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                    Ss = /Z|[+-]\d\d(?::?\d\d)?/,
                    Hs = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/]
                    ],
                    js = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    xs = /^\/?Date\((\-?\d+)/i;
                t.createFromInputFallback = T("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function() {};
                var Ps = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Yt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : M()
                    }),
                    Ws = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Yt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : M()
                    }),
                    Es = function() {
                        return Date.now ? Date.now() : +new Date
                    };
                wt("Z", ":"), wt("ZZ", ""), Q("Z", qa), Q("ZZ", qa), ne(["Z", "ZZ"], function(e, t, n) {
                    n._useUTC = !0, n._tzm = vt(qa, e)
                });
                var Fs = /([\+\-]|\d\d)/gi;
                t.updateOffset = function() {};
                var As = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
                    Os = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                Rt.fn = gt.prototype;
                var zs = Ut(1, "add"),
                    Js = Ut(-1, "subtract");
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Rs = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });
                B(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), B(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), vn("gggg", "weekYear"), vn("ggggg", "weekYear"), vn("GGGG", "isoWeekYear"), vn("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), J("weekYear", 1), J("isoWeekYear", 1), Q("G", Va), Q("g", Va), Q("GG", Ja, Fa), Q("gg", Ja, Fa), Q("GGGG", Ia, Oa), Q("gggg", Ia, Oa), Q("GGGGG", Ga, za), Q("ggggg", Ga, za), ae(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) {
                    t[a.substr(0, 2)] = D(e)
                }), ae(["gg", "GG"], function(e, n, a, s) {
                    n[s] = t.parseTwoDigitYear(e)
                }), B("Q", 0, "Qo", "quarter"), A("quarter", "Q"), J("quarter", 7), Q("Q", Ea), ne("Q", function(e, t) {
                    t[es] = 3 * (D(e) - 1)
                }), B("D", ["DD", 2], "Do", "date"), A("date", "D"), J("date", 9), Q("D", Ja), Q("DD", Ja, Fa), Q("Do", function(e, t) {
                    return e ? t._ordinalParse : t._ordinalParseLenient
                }), ne(["D", "DD"], ts), ne("Do", function(e, t) {
                    t[ts] = D(e.match(Ja)[0], 10)
                });
                var Cs = C("Date", !0);
                B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), J("dayOfYear", 4), Q("DDD", Na), Q("DDDD", Aa), ne(["DDD", "DDDD"], function(e, t, n) {
                    n._dayOfYear = D(e)
                }), B("m", ["mm", 2], 0, "minute"), A("minute", "m"), J("minute", 14), Q("m", Ja), Q("mm", Ja, Fa), ne(["m", "mm"], as);
                var Ns = C("Minutes", !1);
                B("s", ["ss", 2], 0, "second"), A("second", "s"), J("second", 15), Q("s", Ja), Q("ss", Ja, Fa), ne(["s", "ss"], ss);
                var Is = C("Seconds", !1);
                B("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), B(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), B(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), B(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), B(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), B(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), B(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), A("millisecond", "ms"), J("millisecond", 16), Q("S", Na, Ea), Q("SS", Na, Fa), Q("SSS", Na, Aa);
                var Gs;
                for (Gs = "SSSS"; Gs.length <= 9; Gs += "S") Q(Gs, Ua);
                for (Gs = "S"; Gs.length <= 9; Gs += "S") ne(Gs, Fn);
                var Us = C("Milliseconds", !1);
                B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
                var Vs = y.prototype;
                Vs.add = zs, Vs.calendar = qt, Vs.clone = Kt, Vs.diff = nn, Vs.endOf = Mn, Vs.format = dn, Vs.from = _n, Vs.fromNow = on, Vs.to = un, Vs.toNow = mn, Vs.get = G, Vs.invalidAt = Tn, Vs.isAfter = Zt, Vs.isBefore = $t, Vs.isBetween = Qt, Vs.isSame = Xt, Vs.isSameOrAfter = en, Vs.isSameOrBefore = tn, Vs.isValid = kn, Vs.lang = Rs, Vs.locale = ln, Vs.localeData = cn, Vs.max = Ws, Vs.min = Ps, Vs.parsingFlags = gn, Vs.set = U, Vs.startOf = hn, Vs.subtract = Js, Vs.toArray = Yn, Vs.toObject = pn, Vs.toDate = yn, Vs.toISOString = rn, Vs.toJSON = Dn, Vs.toString = sn, Vs.unix = fn, Vs.valueOf = Ln, Vs.creationData = wn, Vs.year = cs, Vs.isLeapYear = ye, Vs.weekYear = bn, Vs.isoWeekYear = Sn, Vs.quarter = Vs.quarters = Wn, Vs.month = me, Vs.daysInMonth = le, Vs.week = Vs.weeks = Se, Vs.isoWeek = Vs.isoWeeks = He, Vs.weeksInYear = jn, Vs.isoWeeksInYear = Hn, Vs.date = Cs, Vs.day = Vs.days = Oe, Vs.weekday = ze, Vs.isoWeekday = Je, Vs.dayOfYear = En, Vs.hour = Vs.hours = gs, Vs.minute = Vs.minutes = Ns, Vs.second = Vs.seconds = Is, Vs.millisecond = Vs.milliseconds = Us, Vs.utcOffset = Ht, Vs.utc = xt, Vs.local = Pt, Vs.parseZone = Wt, Vs.hasAlignedHourOffset = Et, Vs.isDST = Ft, Vs.isLocal = Ot, Vs.isUtcOffset = zt, Vs.isUtc = Jt, Vs.isUTC = Jt, Vs.zoneAbbr = An, Vs.zoneName = On, Vs.dates = T("dates accessor is deprecated. Use date instead.", Cs), Vs.months = T("months accessor is deprecated. Use month instead", me), Vs.years = T("years accessor is deprecated. Use year instead", cs), Vs.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", jt), Vs.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", At);
                var Bs = Vs,
                    qs = H.prototype;
                qs.calendar = j, qs.longDateFormat = x, qs.invalidDate = P, qs.ordinal = W, qs.preparse = Rn, qs.postformat = Rn, qs.relativeTime = E, qs.pastFuture = F, qs.set = b, qs.months = ie, qs.monthsShort = de, qs.monthsParse = oe, qs.monthsRegex = he, qs.monthsShortRegex = ce, qs.week = we, qs.firstDayOfYear = be, qs.firstDayOfWeek = ve, qs.weekdays = Pe, qs.weekdaysMin = Ee, qs.weekdaysShort = We, qs.weekdaysParse = Ae, qs.weekdaysRegex = Re, qs.weekdaysShortRegex = Ce, qs.weekdaysMinRegex = Ne, qs.isPM = qe, qs.meridiem = Ke, Xe("en", {
                    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10,
                            n = 1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                        return e + n
                    }
                }), t.lang = T("moment.lang is deprecated. Use moment.locale instead.", Xe), t.langData = T("moment.langData is deprecated. Use moment.localeData instead.", nt);
                var Ks = Math.abs,
                    Zs = ra("ms"),
                    $s = ra("s"),
                    Qs = ra("m"),
                    Xs = ra("h"),
                    er = ra("d"),
                    tr = ra("w"),
                    nr = ra("M"),
                    ar = ra("y"),
                    sr = da("milliseconds"),
                    rr = da("seconds"),
                    ir = da("minutes"),
                    dr = da("hours"),
                    _r = da("days"),
                    or = da("months"),
                    ur = da("years"),
                    mr = Math.round,
                    lr = {
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    },
                    cr = Math.abs,
                    hr = gt.prototype;
                hr.abs = Kn, hr.add = $n, hr.subtract = Qn, hr.as = aa, hr.asMilliseconds = Zs, hr.asSeconds = $s, hr.asMinutes = Qs, hr.asHours = Xs, hr.asDays = er, hr.asWeeks = tr, hr.asMonths = nr, hr.asYears = ar, hr.valueOf = sa, hr._bubble = ea, hr.get = ia, hr.milliseconds = sr, hr.seconds = rr, hr.minutes = ir, hr.hours = dr, hr.days = _r, hr.weeks = _a, hr.months = or, hr.years = ur, hr.humanize = ca, hr.toISOString = ha, hr.toString = ha, hr.toJSON = ha, hr.locale = ln, hr.localeData = cn, hr.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ha), hr.lang = Rs, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), Q("x", Va), Q("X", Ka), ne("X", function(e, t, n) {
                    n._d = new Date(1e3 * parseFloat(e, 10))
                }), ne("x", function(e, t, n) {
                    n._d = new Date(D(e))
                }), t.version = "2.14.1", a(Yt), t.fn = Bs, t.min = Dt, t.max = kt, t.now = Es, t.utc = m, t.unix = zn, t.months = Gn, t.isDate = d, t.locale = Xe, t.invalid = M, t.duration = Rt, t.isMoment = Y, t.weekdays = Vn, t.parseZone = Jn, t.localeData = nt, t.isDuration = Tt, t.monthsShort = Un, t.weekdaysMin = qn, t.defineLocale = et, t.updateLocale = tt, t.locales = at, t.weekdaysShort = Bn, t.normalizeUnits = O, t.relativeTimeRounding = ma, t.relativeTimeThreshold = la, t.calendarFormat = Bt, t.prototype = Bs;
                var Mr = t;
                return Mr
            })
        }).call(t, n(142)(e))
    }, function(e, t, n) {
        e.exports = !n(3)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }, function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function(e, t) {
        var n = e.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    }, function(e, t) {
        e.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function(e, t, n) {
        var a = n(118);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == a(e) ? e.split("") : Object(e)
        }
    }, function(e, t) {
        var n = Math.ceil,
            a = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? a : n)(e)
        }
    }, function(e, t, n) {
        var a = n(8),
            s = n(7);
        e.exports = function(e) {
            return a(s(e))
        }
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                },
                a = e.defineLocale("ar-sa", {
                    months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, t, n) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    preparse: function(e) {
                        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                            return n[e]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                },
                a = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                s = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                },
                r = function(e) {
                    return function(t, n, r, i) {
                        var d = a(t),
                            _ = s[e][a(t)];
                        return 2 === d && (_ = _[n ? 0 : 1]), _.replace(/%d/i, t)
                    }
                },
                i = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"],
                d = e.defineLocale("ar", {
                    months: i,
                    monthsShort: i,
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/‏M/‏YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, t, n) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم عند الساعة] LT",
                        nextDay: "[غدًا عند الساعة] LT",
                        nextWeek: "dddd [عند الساعة] LT",
                        lastDay: "[أمس عند الساعة] LT",
                        lastWeek: "dddd [عند الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "بعد %s",
                        past: "منذ %s",
                        s: r("s"),
                        m: r("m"),
                        mm: r("m"),
                        h: r("h"),
                        hh: r("h"),
                        d: r("d"),
                        dd: r("d"),
                        M: r("M"),
                        MM: r("M"),
                        y: r("y"),
                        yy: r("y")
                    },
                    preparse: function(e) {
                        return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                            return n[e]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            return d
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "-inci",
                    5: "-inci",
                    8: "-inci",
                    70: "-inci",
                    80: "-inci",
                    2: "-nci",
                    7: "-nci",
                    20: "-nci",
                    50: "-nci",
                    3: "-üncü",
                    4: "-üncü",
                    100: "-üncü",
                    6: "-ncı",
                    9: "-uncu",
                    10: "-uncu",
                    30: "-uncu",
                    60: "-ıncı",
                    90: "-ıncı"
                },
                n = e.defineLocale("az", {
                    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                    weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                    weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                    weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bugün saat] LT",
                        nextDay: "[sabah saat] LT",
                        nextWeek: "[gələn həftə] dddd [saat] LT",
                        lastDay: "[dünən] LT",
                        lastWeek: "[keçən həftə] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s əvvəl",
                        s: "birneçə saniyyə",
                        m: "bir dəqiqə",
                        mm: "%d dəqiqə",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir il",
                        yy: "%d il"
                    },
                    meridiemParse: /gecə|səhər|gündüz|axşam/,
                    isPM: function(e) {
                        return /^(gündüz|axşam)$/.test(e)
                    },
                    meridiem: function(e, t, n) {
                        return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
                    },
                    ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                    ordinal: function(e) {
                        if (0 === e) return e + "-ıncı";
                        var n = e % 10,
                            a = e % 100 - n,
                            s = e >= 100 ? 100 : null;
                        return e + (t[n] || t[a] || t[s])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var s = {
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                };
                return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(s[a], +e)
            }
            var a = e.defineLocale("be", {
                months: {
                    format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                    standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                },
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: {
                    format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                    standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
                },
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function() {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "дзень",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function(e) {
                    return /^(дня|вечара)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                },
                ordinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
                        case "D":
                            return e + "-га";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[В изминалата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[В изминалия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дни",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "১",
                    2: "২",
                    3: "৩",
                    4: "৪",
                    5: "৫",
                    6: "৬",
                    7: "৭",
                    8: "৮",
                    9: "৯",
                    0: "০"
                },
                n = {
                    "১": "1",
                    "২": "2",
                    "৩": "3",
                    "৪": "4",
                    "৫": "5",
                    "৬": "6",
                    "৭": "7",
                    "৮": "8",
                    "৯": "9",
                    "০": "0"
                },
                a = e.defineLocale("bn", {
                    months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                    monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
                    weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"),
                    weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),
                    weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
                    longDateFormat: {
                        LT: "A h:mm সময়",
                        LTS: "A h:mm:ss সময়",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm সময়",
                        LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                    },
                    calendar: {
                        sameDay: "[আজ] LT",
                        nextDay: "[আগামীকাল] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[গতকাল] LT",
                        lastWeek: "[গত] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s পরে",
                        past: "%s আগে",
                        s: "কয়েক সেকেন্ড",
                        m: "এক মিনিট",
                        mm: "%d মিনিট",
                        h: "এক ঘন্টা",
                        hh: "%d ঘন্টা",
                        d: "এক দিন",
                        dd: "%d দিন",
                        M: "এক মাস",
                        MM: "%d মাস",
                        y: "এক বছর",
                        yy: "%d বছর"
                    },
                    preparse: function(e) {
                        return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
                    },
                    meridiem: function(e, t, n) {
                        return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "༡",
                    2: "༢",
                    3: "༣",
                    4: "༤",
                    5: "༥",
                    6: "༦",
                    7: "༧",
                    8: "༨",
                    9: "༩",
                    0: "༠"
                },
                n = {
                    "༡": "1",
                    "༢": "2",
                    "༣": "3",
                    "༤": "4",
                    "༥": "5",
                    "༦": "6",
                    "༧": "7",
                    "༨": "8",
                    "༩": "9",
                    "༠": "0"
                },
                a = e.defineLocale("bo", {
                    months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                    monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                    weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                    weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                    weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[དི་རིང] LT",
                        nextDay: "[སང་ཉིན] LT",
                        nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                        lastDay: "[ཁ་སང] LT",
                        lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ལ་",
                        past: "%s སྔན་ལ",
                        s: "ལམ་སང",
                        m: "སྐར་མ་གཅིག",
                        mm: "%d སྐར་མ",
                        h: "ཆུ་ཚོད་གཅིག",
                        hh: "%d ཆུ་ཚོད",
                        d: "ཉིན་གཅིག",
                        dd: "%d ཉིན་",
                        M: "ཟླ་བ་གཅིག",
                        MM: "%d ཟླ་བ",
                        y: "ལོ་གཅིག",
                        yy: "%d ལོ"
                    },
                    preparse: function(e) {
                        return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
                    },
                    meridiem: function(e, t, n) {
                        return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = {
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                };
                return e + " " + s(a[n], e)
            }

            function n(e) {
                switch (a(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }

            function a(e) {
                return e > 9 ? a(e % 10) : e
            }

            function s(e, t) {
                return 2 === t ? r(e) : e
            }

            function r(e) {
                var t = {
                    m: "v",
                    b: "v",
                    d: "z"
                };
                return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
            }
            var i = e.defineLocale("br", {
                months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h[e]mm A",
                    LTS: "h[e]mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY h[e]mm A",
                    LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warc'hoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Dec'h da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s 'zo",
                    s: "un nebeud segondennoù",
                    m: "ur vunutenn",
                    mm: t,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: t,
                    M: "ur miz",
                    MM: t,
                    y: "ur bloaz",
                    yy: n
                },
                ordinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function(e) {
                    var t = 1 === e ? "añ" : "vet";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return i
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return a += 1 === e ? "dan" : "dana";
                    case "MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            var n = e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ca", {
                months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "fa %s",
                    s: "uns segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                ordinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (n = "a"), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5 && 1 !== ~~(e / 10)
            }

            function n(e, n, a, s) {
                var r = e + " ";
                switch (a) {
                    case "s":
                        return n || s ? "pár sekund" : "pár sekundami";
                    case "m":
                        return n ? "minuta" : s ? "minutu" : "minutou";
                    case "mm":
                        return n || s ? r + (t(e) ? "minuty" : "minut") : r + "minutami";
                    case "h":
                        return n ? "hodina" : s ? "hodinu" : "hodinou";
                    case "hh":
                        return n || s ? r + (t(e) ? "hodiny" : "hodin") : r + "hodinami";
                    case "d":
                        return n || s ? "den" : "dnem";
                    case "dd":
                        return n || s ? r + (t(e) ? "dny" : "dní") : r + "dny";
                    case "M":
                        return n || s ? "měsíc" : "měsícem";
                    case "MM":
                        return n || s ? r + (t(e) ? "měsíce" : "měsíců") : r + "měsíci";
                    case "y":
                        return n || s ? "rok" : "rokem";
                    case "yy":
                        return n || s ? r + (t(e) ? "roky" : "let") : r + "lety"
                }
            }
            var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                s = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
                r = e.defineLocale("cs", {
                    months: a,
                    monthsShort: s,
                    monthsParse: function(e, t) {
                        var n, a = [];
                        for (n = 0; n < 12; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                        return a
                    }(a, s),
                    shortMonthsParse: function(e) {
                        var t, n = [];
                        for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                        return n
                    }(s),
                    longMonthsParse: function(e) {
                        var t, n = [];
                        for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                        return n
                    }(a),
                    weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                    weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                    weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm",
                        l: "D. M. YYYY"
                    },
                    calendar: {
                        sameDay: "[dnes v] LT",
                        nextDay: "[zítra v] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v neděli v] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [v] LT";
                                case 3:
                                    return "[ve středu v] LT";
                                case 4:
                                    return "[ve čtvrtek v] LT";
                                case 5:
                                    return "[v pátek v] LT";
                                case 6:
                                    return "[v sobotu v] LT"
                            }
                        },
                        lastDay: "[včera v] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulou neděli v] LT";
                                case 1:
                                case 2:
                                    return "[minulé] dddd [v] LT";
                                case 3:
                                    return "[minulou středu v] LT";
                                case 4:
                                case 5:
                                    return "[minulý] dddd [v] LT";
                                case 6:
                                    return "[minulou sobotu v] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "před %s",
                        s: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return r
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
                        return e + t
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                ordinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function(e) {
                    var t = e,
                        n = "",
                        a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[I dag kl.] LT",
                    nextDay: "[I morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[I går kl.] LT",
                    lastWeek: "[sidste] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var s = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? s[n][0] : s[n][1]
            }
            var n = e.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var s = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? s[n][0] : s[n][1]
            }
            var n = e.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
                n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"],
                a = e.defineLocale("dv", {
                    months: t,
                    monthsShort: t,
                    weekdays: n,
                    weekdaysShort: n,
                    weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/M/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /މކ|މފ/,
                    isPM: function(e) {
                        return "މފ" === e
                    },
                    meridiem: function(e, t, n) {
                        return e < 12 ? "މކ" : "މފ"
                    },
                    calendar: {
                        sameDay: "[މިއަދު] LT",
                        nextDay: "[މާދަމާ] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[އިއްޔެ] LT",
                        lastWeek: "[ފާއިތުވި] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ތެރޭގައި %s",
                        past: "ކުރިން %s",
                        s: "ސިކުންތުކޮޅެއް",
                        m: "މިނިޓެއް",
                        mm: "މިނިޓު %d",
                        h: "ގަޑިއިރެއް",
                        hh: "ގަޑިއިރު %d",
                        d: "ދުވަހެއް",
                        dd: "ދުވަސް %d",
                        M: "މަހެއް",
                        MM: "މަސް %d",
                        y: "އަހަރެއް",
                        yy: "އަހަރު %d"
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 7,
                        doy: 12
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            var n = e.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(e, t) {
                    return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                },
                isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 6:
                                return "[το προηγούμενο] dddd [{}] LT";
                            default:
                                return "[την προηγούμενη] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function(e, n) {
                    var a = this._calendarEl[e],
                        s = n && n.hours();
                    return t(a) && (a = a.apply(n)), a.replace("{}", s % 12 === 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                ordinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
                weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
                weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D[-an de] MMMM, YYYY",
                    LLL: "D[-an de] MMMM, YYYY HH:mm",
                    LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function(e) {
                    return "p" === e.charAt(0).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd [je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasinta] dddd [je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "je %s",
                    past: "antaŭ %s",
                    s: "sekundoj",
                    m: "minuto",
                    mm: "%d minutoj",
                    h: "horo",
                    hh: "%d horoj",
                    d: "tago",
                    dd: "%d tagoj",
                    M: "monato",
                    MM: "%d monatoj",
                    y: "jaro",
                    yy: "%d jaroj"
                },
                ordinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                a = e.defineLocale("es-do", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, a) {
                        return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
                    },
                    monthsParseExact: !0,
                    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY h:mm A",
                        LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    ordinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                a = e.defineLocale("es", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, a) {
                        return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
                    },
                    monthsParseExact: !0,
                    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    ordinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var s = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                return t ? s[n][2] ? s[n][2] : s[n][1] : a ? s[n][0] : s[n][1]
            }
            var n = e.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: "%d päeva",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "۱",
                    2: "۲",
                    3: "۳",
                    4: "۴",
                    5: "۵",
                    6: "۶",
                    7: "۷",
                    8: "۸",
                    9: "۹",
                    0: "۰"
                },
                n = {
                    "۱": "1",
                    "۲": "2",
                    "۳": "3",
                    "۴": "4",
                    "۵": "5",
                    "۶": "6",
                    "۷": "7",
                    "۸": "8",
                    "۹": "9",
                    "۰": "0"
                },
                a = e.defineLocale("fa", {
                    months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /قبل از ظهر|بعد از ظهر/,
                    isPM: function(e) {
                        return /بعد از ظهر/.test(e)
                    },
                    meridiem: function(e, t, n) {
                        return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                    },
                    calendar: {
                        sameDay: "[امروز ساعت] LT",
                        nextDay: "[فردا ساعت] LT",
                        nextWeek: "dddd [ساعت] LT",
                        lastDay: "[دیروز ساعت] LT",
                        lastWeek: "dddd [پیش] [ساعت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "در %s",
                        past: "%s پیش",
                        s: "چندین ثانیه",
                        m: "یک دقیقه",
                        mm: "%d دقیقه",
                        h: "یک ساعت",
                        hh: "%d ساعت",
                        d: "یک روز",
                        dd: "%d روز",
                        M: "یک ماه",
                        MM: "%d ماه",
                        y: "یک سال",
                        yy: "%d سال"
                    },
                    preparse: function(e) {
                        return e.replace(/[۰-۹]/g, function(e) {
                            return n[e]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "،")
                    },
                    ordinalParse: /\d{1,2}م/,
                    ordinal: "%dم",
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, a, s) {
                var r = "";
                switch (a) {
                    case "s":
                        return s ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return s ? "minuutin" : "minuutti";
                    case "mm":
                        r = s ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return s ? "tunnin" : "tunti";
                    case "hh":
                        r = s ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return s ? "päivän" : "päivä";
                    case "dd":
                        r = s ? "päivän" : "päivää";
                        break;
                    case "M":
                        return s ? "kuukauden" : "kuukausi";
                    case "MM":
                        r = s ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return s ? "vuoden" : "vuosi";
                    case "yy":
                        r = s ? "vuoden" : "vuotta"
                }
                return r = n(e, s) + " " + r
            }

            function n(e, t) {
                return e < 10 ? t ? s[e] : a[e] : e
            }
            var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                s = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]],
                r = e.defineLocale("fi", {
                    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                    monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM[ta] YYYY",
                        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                        l: "D.M.YYYY",
                        ll: "Do MMM YYYY",
                        lll: "Do MMM YYYY, [klo] HH.mm",
                        llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                    },
                    calendar: {
                        sameDay: "[tänään] [klo] LT",
                        nextDay: "[huomenna] [klo] LT",
                        nextWeek: "dddd [klo] LT",
                        lastDay: "[eilen] [klo] LT",
                        lastWeek: "[viime] dddd[na] [klo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s päästä",
                        past: "%s sitten",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return r
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    m: "ein minutt",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaði",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e) {
                    return e + (1 === e ? "er" : "e")
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e) {
                    return e + (1 === e ? "er" : "e")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|)/,
                ordinal: function(e) {
                    return e + (1 === e ? "er" : "")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                a = e.defineLocale("fy", {
                    months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                    monthsShort: function(e, a) {
                        return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
                    },
                    monthsParseExact: !0,
                    weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                    weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                    weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[hjoed om] LT",
                        nextDay: "[moarn om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[juster om] LT",
                        lastWeek: "[ôfrûne] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oer %s",
                        past: "%s lyn",
                        s: "in pear sekonden",
                        m: "ien minút",
                        mm: "%d minuten",
                        h: "ien oere",
                        hh: "%d oeren",
                        d: "ien dei",
                        dd: "%d dagen",
                        M: "ien moanne",
                        MM: "%d moannen",
                        y: "ien jier",
                        yy: "%d jierren"
                    },
                    ordinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
                n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
                a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                s = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
                r = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
                i = e.defineLocale("gd", {
                    months: t,
                    monthsShort: n,
                    monthsParseExact: !0,
                    weekdays: a,
                    weekdaysShort: s,
                    weekdaysMin: r,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[An-diugh aig] LT",
                        nextDay: "[A-màireach aig] LT",
                        nextWeek: "dddd [aig] LT",
                        lastDay: "[An-dè aig] LT",
                        lastWeek: "dddd [seo chaidh] [aig] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ann an %s",
                        past: "bho chionn %s",
                        s: "beagan diogan",
                        m: "mionaid",
                        mm: "%d mionaidean",
                        h: "uair",
                        hh: "%d uairean",
                        d: "latha",
                        dd: "%d latha",
                        M: "mìos",
                        MM: "%d mìosan",
                        y: "bliadhna",
                        yy: "%d bliadhna"
                    },
                    ordinalParse: /\d{1,2}(d|na|mh)/,
                    ordinal: function(e) {
                        var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
                        return e + t
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return i
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("gl", {
                months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
                monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
                weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
                weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return "uns segundos" === e ? "nuns segundos" : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function(e) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                },
                a = e.defineLocale("hi", {
                    months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                    monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm बजे",
                        LTS: "A h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm बजे",
                        LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[कल] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[कल] LT",
                        lastWeek: "[पिछले] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s में",
                        past: "%s पहले",
                        s: "कुछ ही क्षण",
                        m: "एक मिनट",
                        mm: "%d मिनट",
                        h: "एक घंटा",
                        hh: "%d घंटे",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महीने",
                        MM: "%d महीने",
                        y: "एक वर्ष",
                        yy: "%d वर्ष"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /रात|सुबह|दोपहर|शाम/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, n) {
                        return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return a += 1 === e ? "dan" : "dana";
                    case "MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            var n = e.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var s = e;
                switch (n) {
                    case "s":
                        return a || t ? "néhány másodperc" : "néhány másodperce";
                    case "m":
                        return "egy" + (a || t ? " perc" : " perce");
                    case "mm":
                        return s + (a || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (a || t ? " óra" : " órája");
                    case "hh":
                        return s + (a || t ? " óra" : " órája");
                    case "d":
                        return "egy" + (a || t ? " nap" : " napja");
                    case "dd":
                        return s + (a || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (a || t ? " hónap" : " hónapja");
                    case "MM":
                        return s + (a || t ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (a || t ? " év" : " éve");
                    case "yy":
                        return s + (a || t ? " év" : " éve")
                }
                return ""
            }

            function n(e) {
                return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
            }
            var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "),
                s = e.defineLocale("hu", {
                    months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                    monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                    weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                    weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm"
                    },
                    meridiemParse: /de|du/i,
                    isPM: function(e) {
                        return "u" === e.charAt(1).toLowerCase()
                    },
                    meridiem: function(e, t, n) {
                        return e < 12 ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function() {
                            return n.call(this, !0)
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function() {
                            return n.call(this, !1)
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s múlva",
                        past: "%s",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return s
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function() {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function(e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e)
                },
                meridiem: function(e) {
                    return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                },
                ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e) {
                return e % 100 === 11 || e % 10 !== 1
            }

            function n(e, n, a, s) {
                var r = e + " ";
                switch (a) {
                    case "s":
                        return n || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "m":
                        return n ? "mínúta" : "mínútu";
                    case "mm":
                        return t(e) ? r + (n || s ? "mínútur" : "mínútum") : n ? r + "mínúta" : r + "mínútu";
                    case "hh":
                        return t(e) ? r + (n || s ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                    case "d":
                        return n ? "dagur" : s ? "dag" : "degi";
                    case "dd":
                        return t(e) ? n ? r + "dagar" : r + (s ? "daga" : "dögum") : n ? r + "dagur" : r + (s ? "dag" : "degi");
                    case "M":
                        return n ? "mánuður" : s ? "mánuð" : "mánuði";
                    case "MM":
                        return t(e) ? n ? r + "mánuðir" : r + (s ? "mánuði" : "mánuðum") : n ? r + "mánuður" : r + (s ? "mánuð" : "mánuði");
                    case "y":
                        return n || s ? "ár" : "ári";
                    case "yy":
                        return t(e) ? r + (n || s ? "ár" : "árum") : r + (n || s ? "ár" : "ári")
                }
            }
            var a = e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: n,
                    m: n,
                    mm: n,
                    h: "klukkustund",
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
                weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
                weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ja", {
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "Ah時m分",
                    LTS: "Ah時m分s秒",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日Ah時m分",
                    LLLL: "YYYY年M月D日Ah時m分 dddd"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(e) {
                    return "午後" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: "[来週]dddd LT",
                    lastDay: "[昨日] LT",
                    lastWeek: "[前週]dddd LT",
                    sameElse: "L"
                },
                ordinalParse: /\d{1,2}日/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ka", {
                months: {
                    standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                    format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                },
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                    },
                    past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                    },
                    s: "რამდენიმე წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    0: "-ші",
                    1: "-ші",
                    2: "-ші",
                    3: "-ші",
                    4: "-ші",
                    5: "-ші",
                    6: "-шы",
                    7: "-ші",
                    8: "-ші",
                    9: "-шы",
                    10: "-шы",
                    20: "-шы",
                    30: "-шы",
                    40: "-шы",
                    50: "-ші",
                    60: "-шы",
                    70: "-ші",
                    80: "-ші",
                    90: "-шы",
                    100: "-ші"
                },
                n = e.defineLocale("kk", {
                    months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                    monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                    weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                    weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                    weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бүгін сағат] LT",
                        nextDay: "[Ертең сағат] LT",
                        nextWeek: "dddd [сағат] LT",
                        lastDay: "[Кеше сағат] LT",
                        lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ішінде",
                        past: "%s бұрын",
                        s: "бірнеше секунд",
                        m: "бір минут",
                        mm: "%d минут",
                        h: "бір сағат",
                        hh: "%d сағат",
                        d: "бір күн",
                        dd: "%d күн",
                        M: "бір ай",
                        MM: "%d ай",
                        y: "бір жыл",
                        yy: "%d жыл"
                    },
                    ordinalParse: /\d{1,2}-(ші|шы)/,
                    ordinal: function(e) {
                        var n = e % 10,
                            a = e >= 100 ? 100 : null;
                        return e + (t[e] || t[n] || t[a])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h시 m분",
                    LTS: "A h시 m분 s초",
                    L: "YYYY.MM.DD",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h시 m분",
                    LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "일분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                ordinalParse: /\d{1,2}일/,
                ordinal: "%d일",
                meridiemParse: /오전|오후/,
                isPM: function(e) {
                    return "오후" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "오전" : "오후"
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    0: "-чү",
                    1: "-чи",
                    2: "-чи",
                    3: "-чү",
                    4: "-чү",
                    5: "-чи",
                    6: "-чы",
                    7: "-чи",
                    8: "-чи",
                    9: "-чу",
                    10: "-чу",
                    20: "-чы",
                    30: "-чу",
                    40: "-чы",
                    50: "-чү",
                    60: "-чы",
                    70: "-чи",
                    80: "-чи",
                    90: "-чу",
                    100: "-чү"
                },
                n = e.defineLocale("ky", {
                    months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                    monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                    weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                    weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бүгүн саат] LT",
                        nextDay: "[Эртең саат] LT",
                        nextWeek: "dddd [саат] LT",
                        lastDay: "[Кече саат] LT",
                        lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ичинде",
                        past: "%s мурун",
                        s: "бирнече секунд",
                        m: "бир мүнөт",
                        mm: "%d мүнөт",
                        h: "бир саат",
                        hh: "%d саат",
                        d: "бир күн",
                        dd: "%d күн",
                        M: "бир ай",
                        MM: "%d ай",
                        y: "бир жыл",
                        yy: "%d жыл"
                    },
                    ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                    ordinal: function(e) {
                        var n = e % 10,
                            a = e >= 100 ? 100 : null;
                        return e + (t[e] || t[n] || t[a])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var s = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? s[n][0] : s[n][1]
            }

            function n(e) {
                var t = e.substr(0, e.indexOf(" "));
                return s(t) ? "a " + e : "an " + e
            }

            function a(e) {
                var t = e.substr(0, e.indexOf(" "));
                return s(t) ? "viru " + e : "virun " + e
            }

            function s(e) {
                if (e = parseInt(e, 10), isNaN(e)) return !1;
                if (e < 0) return !0;
                if (e < 10) return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10,
                        n = e / 10;
                    return s(0 === t ? n : t)
                }
                if (e < 1e4) {
                    for (; e >= 10;) e /= 10;
                    return s(e)
                }
                return e /= 1e3, s(e)
            }
            var r = e.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: n,
                    past: a,
                    s: "e puer Sekonnen",
                    m: t,
                    mm: "%d Minutten",
                    h: t,
                    hh: "%d Stonnen",
                    d: t,
                    dd: "%d Deeg",
                    M: t,
                    MM: "%d Méint",
                    y: t,
                    yy: "%d Joer"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return r
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function(e) {
                    return "ຕອນແລງ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                ordinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function(e) {
                    return "ທີ່" + e
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n, a) {
                return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
            }

            function n(e, t, n, a) {
                return t ? s(n)[0] : a ? s(n)[1] : s(n)[2]
            }

            function a(e) {
                return e % 10 === 0 || e > 10 && e < 20
            }

            function s(e) {
                return i[e].split("_")
            }

            function r(e, t, r, i) {
                var d = e + " ";
                return 1 === e ? d + n(e, t, r[0], i) : t ? d + (a(e) ? s(r)[1] : s(r)[0]) : i ? d + s(r)[1] : d + (a(e) ? s(r)[1] : s(r)[2])
            }
            var i = {
                    m: "minutė_minutės_minutę",
                    mm: "minutės_minučių_minutes",
                    h: "valanda_valandos_valandą",
                    hh: "valandos_valandų_valandas",
                    d: "diena_dienos_dieną",
                    dd: "dienos_dienų_dienas",
                    M: "mėnuo_mėnesio_mėnesį",
                    MM: "mėnesiai_mėnesių_mėnesius",
                    y: "metai_metų_metus",
                    yy: "metai_metų_metus"
                },
                d = e.defineLocale("lt", {
                    months: {
                        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                        standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                        isFormat: /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/
                    },
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: {
                        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                        standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                        isFormat: /dddd HH:mm/
                    },
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                    },
                    calendar: {
                        sameDay: "[Šiandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[Praėjusį] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prieš %s",
                        s: t,
                        m: n,
                        mm: r,
                        h: n,
                        hh: r,
                        d: n,
                        dd: r,
                        M: n,
                        MM: r,
                        y: n,
                        yy: r
                    },
                    ordinalParse: /\d{1,2}-oji/,
                    ordinal: function(e) {
                        return e + "-oji"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return d
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n) {
                return n ? t % 10 === 1 && t % 100 !== 11 ? e[2] : e[3] : t % 10 === 1 && t % 100 !== 11 ? e[0] : e[1]
            }

            function n(e, n, a) {
                return e + " " + t(r[a], e, n)
            }

            function a(e, n, a) {
                return t(r[a], e, n)
            }

            function s(e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm"
            }
            var r = {
                    m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    h: "stundas_stundām_stunda_stundas".split("_"),
                    hh: "stundas_stundām_stunda_stundas".split("_"),
                    d: "dienas_dienām_diena_dienas".split("_"),
                    dd: "dienas_dienām_diena_dienas".split("_"),
                    M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    y: "gada_gadiem_gads_gadi".split("_"),
                    yy: "gada_gadiem_gads_gadi".split("_")
                },
                i = e.defineLocale("lv", {
                    months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY.",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, HH:mm",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                    },
                    calendar: {
                        sameDay: "[Šodien pulksten] LT",
                        nextDay: "[Rīt pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[Pagājušā] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "pēc %s",
                        past: "pirms %s",
                        s: s,
                        m: a,
                        mm: n,
                        h: a,
                        hh: n,
                        d: a,
                        dd: n,
                        M: a,
                        MM: n,
                        y: a,
                        yy: n
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return i
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    words: {
                        m: ["jedan minut", "jednog minuta"],
                        mm: ["minut", "minuta", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mjesec", "mjeseca", "mjeseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, n, a) {
                        var s = t.words[a];
                        return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
                    }
                },
                n = e.defineLocale("me", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sjutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() {
                            var e = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                            return e[this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "nekoliko sekundi",
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mjesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "после %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    M: "месец",
                    MM: "%d месеци",
                    y: "година",
                    yy: "%d години"
                },
                ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                monthsParseExact: !0,
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var s = "";
                if (t) switch (n) {
                    case "s":
                        s = "काही सेकंद";
                        break;
                    case "m":
                        s = "एक मिनिट";
                        break;
                    case "mm":
                        s = "%d मिनिटे";
                        break;
                    case "h":
                        s = "एक तास";
                        break;
                    case "hh":
                        s = "%d तास";
                        break;
                    case "d":
                        s = "एक दिवस";
                        break;
                    case "dd":
                        s = "%d दिवस";
                        break;
                    case "M":
                        s = "एक महिना";
                        break;
                    case "MM":
                        s = "%d महिने";
                        break;
                    case "y":
                        s = "एक वर्ष";
                        break;
                    case "yy":
                        s = "%d वर्षे"
                } else switch (n) {
                    case "s":
                        s = "काही सेकंदां";
                        break;
                    case "m":
                        s = "एका मिनिटा";
                        break;
                    case "mm":
                        s = "%d मिनिटां";
                        break;
                    case "h":
                        s = "एका तासा";
                        break;
                    case "hh":
                        s = "%d तासां";
                        break;
                    case "d":
                        s = "एका दिवसा";
                        break;
                    case "dd":
                        s = "%d दिवसां";
                        break;
                    case "M":
                        s = "एका महिन्या";
                        break;
                    case "MM":
                        s = "%d महिन्यां";
                        break;
                    case "y":
                        s = "एका वर्षा";
                        break;
                    case "yy":
                        s = "%d वर्षां"
                }
                return s.replace(/%d/i, e)
            }
            var n = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                a = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                },
                s = e.defineLocale("mr", {
                    months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm वाजता",
                        LTS: "A h:mm:ss वाजता",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm वाजता",
                        LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[उद्या] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[काल] LT",
                        lastWeek: "[मागील] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमध्ये",
                        past: "%sपूर्वी",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return n[e]
                        })
                    },
                    meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, n) {
                        return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            return s
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "၁",
                    2: "၂",
                    3: "၃",
                    4: "၄",
                    5: "၅",
                    6: "၆",
                    7: "၇",
                    8: "၈",
                    9: "၉",
                    0: "၀"
                },
                n = {
                    "၁": "1",
                    "၂": "2",
                    "၃": "3",
                    "၄": "4",
                    "၅": "5",
                    "၆": "6",
                    "၇": "7",
                    "၈": "8",
                    "၉": "9",
                    "၀": "0"
                },
                a = e.defineLocale("my", {
                    months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                    monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                    weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                    weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[ယနေ.] LT [မှာ]",
                        nextDay: "[မနက်ဖြန်] LT [မှာ]",
                        nextWeek: "dddd LT [မှာ]",
                        lastDay: "[မနေ.က] LT [မှာ]",
                        lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "လာမည့် %s မှာ",
                        past: "လွန်ခဲ့သော %s က",
                        s: "စက္ကန်.အနည်းငယ်",
                        m: "တစ်မိနစ်",
                        mm: "%d မိနစ်",
                        h: "တစ်နာရီ",
                        hh: "%d နာရီ",
                        d: "တစ်ရက်",
                        dd: "%d ရက်",
                        M: "တစ်လ",
                        MM: "%d လ",
                        y: "တစ်နှစ်",
                        yy: "%d နှစ်"
                    },
                    preparse: function(e) {
                        return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                },
                a = e.defineLocale("ne", {
                    months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                    monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                    weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                    weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "Aको h:mm बजे",
                        LTS: "Aको h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, Aको h:mm बजे",
                        LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, n) {
                        return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[भोलि] LT",
                        nextWeek: "[आउँदो] dddd[,] LT",
                        lastDay: "[हिजो] LT",
                        lastWeek: "[गएको] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमा",
                        past: "%s अगाडि",
                        s: "केही क्षण",
                        m: "एक मिनेट",
                        mm: "%d मिनेट",
                        h: "एक घण्टा",
                        hh: "%d घण्टा",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महिना",
                        MM: "%d महिना",
                        y: "एक बर्ष",
                        yy: "%d बर्ष"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                a = e.defineLocale("nl", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, a) {
                        return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
                    },
                    monthsParseExact: !0,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        m: "één minuut",
                        mm: "%d minuten",
                        h: "één uur",
                        hh: "%d uur",
                        d: "één dag",
                        dd: "%d dagen",
                        M: "één maand",
                        MM: "%d maanden",
                        y: "één jaar",
                        yy: "%d jaar"
                    },
                    ordinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "੧",
                    2: "੨",
                    3: "੩",
                    4: "੪",
                    5: "੫",
                    6: "੬",
                    7: "੭",
                    8: "੮",
                    9: "੯",
                    0: "੦"
                },
                n = {
                    "੧": "1",
                    "੨": "2",
                    "੩": "3",
                    "੪": "4",
                    "੫": "5",
                    "੬": "6",
                    "੭": "7",
                    "੮": "8",
                    "੯": "9",
                    "੦": "0"
                },
                a = e.defineLocale("pa-in", {
                    months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                    monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                    weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                    weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                    weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm ਵਜੇ",
                        LTS: "A h:mm:ss ਵਜੇ",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                        LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                    },
                    calendar: {
                        sameDay: "[ਅਜ] LT",
                        nextDay: "[ਕਲ] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ਕਲ] LT",
                        lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ਵਿੱਚ",
                        past: "%s ਪਿਛਲੇ",
                        s: "ਕੁਝ ਸਕਿੰਟ",
                        m: "ਇਕ ਮਿੰਟ",
                        mm: "%d ਮਿੰਟ",
                        h: "ਇੱਕ ਘੰਟਾ",
                        hh: "%d ਘੰਟੇ",
                        d: "ਇੱਕ ਦਿਨ",
                        dd: "%d ਦਿਨ",
                        M: "ਇੱਕ ਮਹੀਨਾ",
                        MM: "%d ਮਹੀਨੇ",
                        y: "ਇੱਕ ਸਾਲ",
                        yy: "%d ਸਾਲ"
                    },
                    preparse: function(e) {
                        return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, n) {
                        return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
            }

            function n(e, n, a) {
                var s = e + " ";
                switch (a) {
                    case "m":
                        return n ? "minuta" : "minutę";
                    case "mm":
                        return s + (t(e) ? "minuty" : "minut");
                    case "h":
                        return n ? "godzina" : "godzinę";
                    case "hh":
                        return s + (t(e) ? "godziny" : "godzin");
                    case "MM":
                        return s + (t(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return s + (t(e) ? "lata" : "lat")
                }
            }
            var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
                r = e.defineLocale("pl", {
                    months: function(e, t) {
                        return "" === t ? "(" + s[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? s[e.month()] : a[e.month()]
                    },
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                    weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                    weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
                    weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Dziś o] LT",
                        nextDay: "[Jutro o] LT",
                        nextWeek: "[W] dddd [o] LT",
                        lastDay: "[Wczoraj o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W zeszłą niedzielę o] LT";
                                case 3:
                                    return "[W zeszłą środę o] LT";
                                case 6:
                                    return "[W zeszłą sobotę o] LT";
                                default:
                                    return "[W zeszły] dddd [o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "%s temu",
                        s: "kilka sekund",
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: "1 dzień",
                        dd: "%d dni",
                        M: "miesiąc",
                        MM: n,
                        y: "rok",
                        yy: n
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return r
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("pt-br", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "%s atrás",
                    s: "poucos segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº"
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("pt", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = {
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        MM: "luni",
                        yy: "ani"
                    },
                    s = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (s = " de "), e + s + a[n]
            }
            var n = e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    m: "un minut",
                    mm: t,
                    h: "o oră",
                    hh: t,
                    d: "o zi",
                    dd: t,
                    M: "o lună",
                    MM: t,
                    y: "un an",
                    yy: t
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var s = {
                    mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                return "m" === a ? n ? "минута" : "минуту" : e + " " + t(s[a], +e)
            }
            var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
                s = e.defineLocale("ru", {
                    months: {
                        format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                        standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                    },
                    monthsShort: {
                        format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                        standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                    },
                    weekdays: {
                        standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                        format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                    },
                    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    monthsParse: a,
                    longMonthsParse: a,
                    shortMonthsParse: a,
                    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., HH:mm",
                        LLLL: "dddd, D MMMM YYYY г., HH:mm"
                    },
                    calendar: {
                        sameDay: "[Сегодня в] LT",
                        nextDay: "[Завтра в] LT",
                        lastDay: "[Вчера в] LT",
                        nextWeek: function(e) {
                            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[В следующее] dddd [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[В следующий] dddd [в] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[В следующую] dddd [в] LT"
                            }
                        },
                        lastWeek: function(e) {
                            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[В прошлое] dddd [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[В прошлый] dddd [в] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[В прошлую] dddd [в] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "через %s",
                        past: "%s назад",
                        s: "несколько секунд",
                        m: n,
                        mm: n,
                        h: "час",
                        hh: n,
                        d: "день",
                        dd: n,
                        M: "месяц",
                        MM: n,
                        y: "год",
                        yy: n
                    },
                    meridiemParse: /ночи|утра|дня|вечера/i,
                    isPM: function(e) {
                        return /^(дня|вечера)$/.test(e)
                    },
                    meridiem: function(e, t, n) {
                        return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                    },
                    ordinalParse: /\d{1,2}-(й|го|я)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                                return e + "-й";
                            case "D":
                                return e + "-го";
                            case "w":
                            case "W":
                                return e + "-я";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return s
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("se", {
                months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mánnu",
                    MM: "%d mánut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                ordinalParse: /\d{1,2} වැනි/,
                ordinal: function(e) {
                    return e + " වැනි"
                },
                meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                isPM: function(e) {
                    return "ප.ව." === e || "පස් වරු" === e
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5
            }

            function n(e, n, a, s) {
                var r = e + " ";
                switch (a) {
                    case "s":
                        return n || s ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return n ? "minúta" : s ? "minútu" : "minútou";
                    case "mm":
                        return n || s ? r + (t(e) ? "minúty" : "minút") : r + "minútami";
                    case "h":
                        return n ? "hodina" : s ? "hodinu" : "hodinou";
                    case "hh":
                        return n || s ? r + (t(e) ? "hodiny" : "hodín") : r + "hodinami";
                    case "d":
                        return n || s ? "deň" : "dňom";
                    case "dd":
                        return n || s ? r + (t(e) ? "dni" : "dní") : r + "dňami";
                    case "M":
                        return n || s ? "mesiac" : "mesiacom";
                    case "MM":
                        return n || s ? r + (t(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                    case "y":
                        return n || s ? "rok" : "rokom";
                    case "yy":
                        return n || s ? r + (t(e) ? "roky" : "rokov") : r + "rokmi"
                }
            }
            var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                s = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
                r = e.defineLocale("sk", {
                    months: a,
                    monthsShort: s,
                    weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[dnes o] LT",
                        nextDay: "[zajtra o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v nedeľu o] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [o] LT";
                                case 3:
                                    return "[v stredu o] LT";
                                case 4:
                                    return "[vo štvrtok o] LT";
                                case 5:
                                    return "[v piatok o] LT";
                                case 6:
                                    return "[v sobotu o] LT"
                            }
                        },
                        lastDay: "[včera o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulú nedeľu o] LT";
                                case 1:
                                case 2:
                                    return "[minulý] dddd [o] LT";
                                case 3:
                                    return "[minulú stredu o] LT";
                                case 4:
                                case 5:
                                    return "[minulý] dddd [o] LT";
                                case 6:
                                    return "[minulú sobotu o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pred %s",
                        s: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return r
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var s = e + " ";
                switch (n) {
                    case "s":
                        return t || a ? "nekaj sekund" : "nekaj sekundami";
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
                    case "d":
                        return t || a ? "en dan" : "enim dnem";
                    case "dd":
                        return s += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
                    case "M":
                        return t || a ? "en mesec" : "enim mesecem";
                    case "MM":
                        return s += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
                    case "y":
                        return t || a ? "eno leto" : "enim letom";
                    case "yy":
                        return s += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
                }
            }
            var n = e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[prejšnjo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejšnjo] [sredo] [ob] LT";
                            case 6:
                                return "[prejšnjo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function(e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    words: {
                        m: ["један минут", "једне минуте"],
                        mm: ["минут", "минуте", "минута"],
                        h: ["један сат", "једног сата"],
                        hh: ["сат", "сата", "сати"],
                        dd: ["дан", "дана", "дана"],
                        MM: ["месец", "месеца", "месеци"],
                        yy: ["година", "године", "година"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, n, a) {
                        var s = t.words[a];
                        return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
                    }
                },
                n = e.defineLocale("sr-cyrl", {
                    months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                    monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                    weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                    weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[данас у] LT",
                        nextDay: "[сутра у] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[у] [недељу] [у] LT";
                                case 3:
                                    return "[у] [среду] [у] LT";
                                case 6:
                                    return "[у] [суботу] [у] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[у] dddd [у] LT"
                            }
                        },
                        lastDay: "[јуче у] LT",
                        lastWeek: function() {
                            var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                            return e[this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "пре %s",
                        s: "неколико секунди",
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "дан",
                        dd: t.translate,
                        M: "месец",
                        MM: t.translate,
                        y: "годину",
                        yy: t.translate
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    words: {
                        m: ["jedan minut", "jedne minute"],
                        mm: ["minut", "minute", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mesec", "meseca", "meseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, n, a) {
                        var s = t.words[a];
                        return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
                    }
                },
                n = e.defineLocale("sr", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() {
                            var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                            return e[this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "nekoliko sekundi",
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function(e, t, n) {
                    return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
                },
                ordinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}(e|a)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "masiku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "௧",
                    2: "௨",
                    3: "௩",
                    4: "௪",
                    5: "௫",
                    6: "௬",
                    7: "௭",
                    8: "௮",
                    9: "௯",
                    0: "௦"
                },
                n = {
                    "௧": "1",
                    "௨": "2",
                    "௩": "3",
                    "௪": "4",
                    "௫": "5",
                    "௬": "6",
                    "௭": "7",
                    "௮": "8",
                    "௯": "9",
                    "௦": "0"
                },
                a = e.defineLocale("ta", {
                    months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                    weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                    weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, HH:mm",
                        LLLL: "dddd, D MMMM YYYY, HH:mm"
                    },
                    calendar: {
                        sameDay: "[இன்று] LT",
                        nextDay: "[நாளை] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[நேற்று] LT",
                        lastWeek: "[கடந்த வாரம்] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s இல்",
                        past: "%s முன்",
                        s: "ஒரு சில விநாடிகள்",
                        m: "ஒரு நிமிடம்",
                        mm: "%d நிமிடங்கள்",
                        h: "ஒரு மணி நேரம்",
                        hh: "%d மணி நேரம்",
                        d: "ஒரு நாள்",
                        dd: "%d நாட்கள்",
                        M: "ஒரு மாதம்",
                        MM: "%d மாதங்கள்",
                        y: "ஒரு வருடம்",
                        yy: "%d ஆண்டுகள்"
                    },
                    ordinalParse: /\d{1,2}வது/,
                    ordinal: function(e) {
                        return e + "வது"
                    },
                    preparse: function(e) {
                        return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                    meridiem: function(e, t, n) {
                        return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
                    },
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            return a
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                monthsParseExact: !0,
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                ordinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H นาฬิกา m นาที",
                    LTS: "H นาฬิกา m นาที s วินาที",
                    L: "YYYY/MM/DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ngayon sa] LT",
                    nextDay: "[Bukas sa] LT",
                    nextWeek: "dddd [sa] LT",
                    lastDay: "[Kahapon sa] LT",
                    lastWeek: "dddd [huling linggo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                ordinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e) {
                var t = e;
                return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "leS" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "waQ" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "nem" : t + " pIq"
            }

            function n(e) {
                var t = e;
                return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "Hu’" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "wen" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "ben" : t + " ret"
            }

            function a(e, t, n, a) {
                var r = s(e);
                switch (n) {
                    case "mm":
                        return r + " tup";
                    case "hh":
                        return r + " rep";
                    case "dd":
                        return r + " jaj";
                    case "MM":
                        return r + " jar";
                    case "yy":
                        return r + " DIS"
                }
            }

            function s(e) {
                var t = Math.floor(e % 1e3 / 100),
                    n = Math.floor(e % 100 / 10),
                    a = e % 10,
                    s = "";
                return t > 0 && (s += r[t] + "vatlh"), n > 0 && (s += ("" !== s ? " " : "") + r[n] + "maH"), a > 0 && (s += ("" !== s ? " " : "") + r[a]), "" === s ? "pagh" : s
            }
            var r = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"),
                i = e.defineLocale("tlh", {
                    months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                    monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                    monthsParseExact: !0,
                    weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[DaHjaj] LT",
                        nextDay: "[wa’leS] LT",
                        nextWeek: "LLL",
                        lastDay: "[wa’Hu’] LT",
                        lastWeek: "LLL",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: t,
                        past: n,
                        s: "puS lup",
                        m: "wa’ tup",
                        mm: a,
                        h: "wa’ rep",
                        hh: a,
                        d: "wa’ jaj",
                        dd: a,
                        M: "wa’ jar",
                        MM: a,
                        y: "wa’ DIS",
                        yy: a
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return i
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'üncü",
                    4: "'üncü",
                    100: "'üncü",
                    6: "'ncı",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'ıncı",
                    90: "'ıncı"
                },
                n = e.defineLocale("tr", {
                    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bugün saat] LT",
                        nextDay: "[yarın saat] LT",
                        nextWeek: "[haftaya] dddd [saat] LT",
                        lastDay: "[dün] LT",
                        lastWeek: "[geçen hafta] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s önce",
                        s: "birkaç saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir yıl",
                        yy: "%d yıl"
                    },
                    ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                    ordinal: function(e) {
                        if (0 === e) return e + "'ıncı";
                        var n = e % 10,
                            a = e % 100 - n,
                            s = e >= 100 ? 100 : null;
                        return e + (t[n] || t[a] || t[s])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var s = {
                    s: ["viensas secunds", "'iensas secunds"],
                    m: ["'n míut", "'iens míut"],
                    mm: [e + " míuts", "" + e + " míuts"],
                    h: ["'n þora", "'iensa þora"],
                    hh: [e + " þoras", "" + e + " þoras"],
                    d: ["'n ziua", "'iensa ziua"],
                    dd: [e + " ziuas", "" + e + " ziuas"],
                    M: ["'n mes", "'iens mes"],
                    MM: [e + " mesen", "" + e + " mesen"],
                    y: ["'n ar", "'iens ar"],
                    yy: [e + " ars", "" + e + " ars"]
                };
                return a ? s[n][0] : t ? s[n][0] : s[n][1]
            }
            var n = e.defineLocale("tzl", {
                months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiemParse: /d\'o|d\'a/i,
                isPM: function(e) {
                    return "d'o" === e.toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
                },
                calendar: {
                    sameDay: "[oxhi à] LT",
                    nextDay: "[demà à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[ieiri à] LT",
                    lastWeek: "[sür el] dddd [lasteu à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var s = {
                    mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: n ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                };
                return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(s[a], +e)
            }

            function a(e, t) {
                var n = {
                        nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                        accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                        genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                    },
                    a = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
                return n[a][e.day()]
            }

            function s(e) {
                return function() {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            var r = e.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: a,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: s("[Сьогодні "),
                    nextDay: s("[Завтра "),
                    lastDay: s("[Вчора "),
                    nextWeek: s("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return s("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return s("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    m: n,
                    mm: n,
                    h: "годину",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "місяць",
                    MM: n,
                    y: "рік",
                    yy: n
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                },
                ordinalParse: /\d{1,2}-(й|го)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return r
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function(e) {
                    return /^ch$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                ordinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("x-pseudo", {
                months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                monthsParseExact: !0,
                weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~ódá~ý át] LT",
                    nextDay: "[T~ómó~rró~w át] LT",
                    nextWeek: "dddd [át] LT",
                    lastDay: "[Ý~ést~érdá~ý át] LT",
                    lastWeek: "[L~ást] dddd [át] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "í~ñ %s",
                    past: "%s á~gó",
                    s: "á ~féw ~sécó~ñds",
                    m: "á ~míñ~úté",
                    mm: "%d m~íñú~tés",
                    h: "á~ñ hó~úr",
                    hh: "%d h~óúrs",
                    d: "á ~dáý",
                    dd: "%d d~áýs",
                    M: "á ~móñ~th",
                    MM: "%d m~óñt~hs",
                    y: "á ~ýéár",
                    yy: "%d ý~éárs"
                },
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah点mm分",
                    LTS: "Ah点m分s秒",
                    L: "YYYY-MM-DD",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日Ah点mm分",
                    LLLL: "YYYY年MMMD日ddddAh点mm分",
                    l: "YYYY-MM-DD",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日Ah点mm分",
                    llll: "YYYY年MMMD日ddddAh点mm分"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: function() {
                        return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                    },
                    nextDay: function() {
                        return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                    },
                    lastDay: function() {
                        return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                    },
                    nextWeek: function() {
                        var t, n;
                        return t = e().startOf("week"), n = this.diff(t, "days") >= 7 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                    },
                    lastWeek: function() {
                        var t, n;
                        return t = e().startOf("week"), n = this.unix() < t.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                    },
                    sameElse: "LL"
                },
                ordinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }, function(e, t, n) {
        ! function(e, t) {
            t(n(1))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah點mm分",
                    LTS: "Ah點m分s秒",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日Ah點mm分",
                    LLLL: "YYYY年MMMD日ddddAh點mm分",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日Ah點mm分",
                    llll: "YYYY年MMMD日ddddAh點mm分"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                ordinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            });
            return t
        })
    }, function(e, t, n) {
        /*!
         * Pikaday
         *
         * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
         */
        ! function(t, a) {
            "use strict";
            var s;
            try {
                s = n(1)
            } catch (r) {}
            e.exports = a(s)
        }(this, function(e) {
            "use strict";
            var t = "function" == typeof e,
                n = !!window.addEventListener,
                a = window.document,
                s = window.setTimeout,
                r = function(e, t, a, s) {
                    n ? e.addEventListener(t, a, !!s) : e.attachEvent("on" + t, a)
                },
                i = function(e, t, a, s) {
                    n ? e.removeEventListener(t, a, !!s) : e.detachEvent("on" + t, a)
                },
                d = function(e, t, n) {
                    var s;
                    a.createEvent ? (s = a.createEvent("HTMLEvents"), s.initEvent(t, !0, !1), s = Y(s, n), e.dispatchEvent(s)) : a.createEventObject && (s = a.createEventObject(), s = Y(s, n), e.fireEvent("on" + t, s))
                },
                _ = function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                o = function(e, t) {
                    return (" " + e.className + " ").indexOf(" " + t + " ") !== -1
                },
                u = function(e, t) {
                    o(e, t) || (e.className = "" === e.className ? t : e.className + " " + t)
                },
                m = function(e, t) {
                    e.className = _((" " + e.className + " ").replace(" " + t + " ", " "))
                },
                l = function(e) {
                    return /Array/.test(Object.prototype.toString.call(e))
                },
                c = function(e) {
                    return /Date/.test(Object.prototype.toString.call(e)) && !isNaN(e.getTime())
                },
                h = function(e) {
                    var t = e.getDay();
                    return 0 === t || 6 === t
                },
                M = function(e) {
                    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
                },
                L = function(e, t) {
                    return [31, M(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                },
                f = function(e) {
                    c(e) && e.setHours(0, 0, 0, 0)
                },
                y = function(e, t) {
                    return e.getTime() === t.getTime()
                },
                Y = function(e, t, n) {
                    var a, s;
                    for (a in t) s = void 0 !== e[a], s && "object" == typeof t[a] && null !== t[a] && void 0 === t[a].nodeName ? c(t[a]) ? n && (e[a] = new Date(t[a].getTime())) : l(t[a]) ? n && (e[a] = t[a].slice(0)) : e[a] = Y({}, t[a], n) : !n && s || (e[a] = t[a]);
                    return e
                },
                p = function(e) {
                    return e.month < 0 && (e.year -= Math.ceil(Math.abs(e.month) / 12), e.month += 12), e.month > 11 && (e.year += Math.floor(Math.abs(e.month) / 12), e.month -= 12), e
                },
                D = {
                    field: null,
                    bound: void 0,
                    position: "bottom left",
                    reposition: !0,
                    format: "YYYY-MM-DD",
                    defaultDate: null,
                    setDefaultDate: !1,
                    firstDay: 0,
                    minDate: null,
                    maxDate: null,
                    yearRange: 10,
                    showWeekNumber: !1,
                    minYear: 0,
                    maxYear: 9999,
                    minMonth: void 0,
                    maxMonth: void 0,
                    startRange: null,
                    endRange: null,
                    isRTL: !1,
                    yearSuffix: "",
                    showMonthAfterYear: !1,
                    numberOfMonths: 1,
                    mainCalendar: "left",
                    container: void 0,
                    i18n: {
                        previousMonth: "Previous Month",
                        nextMonth: "Next Month",
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                    },
                    theme: null,
                    onSelect: null,
                    onOpen: null,
                    onClose: null,
                    onDraw: null
                },
                k = function(e, t, n) {
                    for (t += e.firstDay; t >= 7;) t -= 7;
                    return n ? e.i18n.weekdaysShort[t] : e.i18n.weekdays[t]
                },
                g = function(e) {
                    if (e.isEmpty) return '<td class="is-empty"></td>';
                    var t = [];
                    return e.isDisabled && t.push("is-disabled"), e.isToday && t.push("is-today"), e.isSelected && t.push("is-selected"), e.isInRange && t.push("is-inrange"), e.isStartRange && t.push("is-startrange"), e.isEndRange && t.push("is-endrange"), '<td data-day="' + e.day + '" class="' + t.join(" ") + '"><button class="pika-button pika-day" type="button" data-pika-year="' + e.year + '" data-pika-month="' + e.month + '" data-pika-day="' + e.day + '">' + e.day + "</button></td>"
                },
                T = function(e, t, n) {
                    var a = new Date(n, 0, 1),
                        s = Math.ceil(((new Date(n, t, e) - a) / 864e5 + a.getDay() + 1) / 7);
                    return '<td class="pika-week">' + s + "</td>"
                },
                w = function(e, t) {
                    return "<tr>" + (t ? e.reverse() : e).join("") + "</tr>"
                },
                v = function(e) {
                    return "<tbody>" + e.join("") + "</tbody>"
                },
                b = function(e) {
                    var t, n = [];
                    for (e.showWeekNumber && n.push("<th></th>"), t = 0; t < 7; t++) n.push('<th scope="col"><abbr title="' + k(e, t) + '">' + k(e, t, !0) + "</abbr></th>");
                    return "<thead>" + (e.isRTL ? n.reverse() : n).join("") + "</thead>"
                },
                S = function(e, t, n, a, s) {
                    var r, i, d, _, o, u = e._o,
                        m = n === u.minYear,
                        c = n === u.maxYear,
                        h = '<div class="pika-title">',
                        M = !0,
                        L = !0;
                    for (d = [], r = 0; r < 12; r++) d.push('<option value="' + (n === s ? r - t : 12 + r - t) + '"' + (r === a ? " selected" : "") + (m && r < u.minMonth || c && r > u.maxMonth ? "disabled" : "") + ">" + u.i18n.months[r] + "</option>");
                    for (_ = '<div class="pika-label">' + u.i18n.months[a] + '<select class="pika-select pika-select-month" tabindex="-1">' + d.join("") + "</select></div>", l(u.yearRange) ? (r = u.yearRange[0], i = u.yearRange[1] + 1) : (r = n - u.yearRange, i = 1 + n + u.yearRange), d = []; r < i && r <= u.maxYear; r++) r >= u.minYear && d.push('<option value="' + r + '"' + (r === n ? " selected" : "") + ">" + r + "</option>");
                    return o = '<div class="pika-label">' + n + u.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + d.join("") + "</select></div>", h += u.showMonthAfterYear ? o + _ : _ + o, m && (0 === a || u.minMonth >= a) && (M = !1), c && (11 === a || u.maxMonth <= a) && (L = !1), 0 === t && (h += '<button class="pika-prev' + (M ? "" : " is-disabled") + '" type="button">' + u.i18n.previousMonth + "</button>"), t === e._o.numberOfMonths - 1 && (h += '<button class="pika-next' + (L ? "" : " is-disabled") + '" type="button">' + u.i18n.nextMonth + "</button>"), h += "</div>"
                },
                H = function(e, t) {
                    return '<table cellpadding="0" cellspacing="0" class="pika-table">' + b(e) + v(t) + "</table>"
                },
                j = function(i) {
                    var d = this,
                        _ = d.config(i);
                    d._onMouseDown = function(e) {
                        if (d._v) {
                            e = e || window.event;
                            var t = e.target || e.srcElement;
                            if (t)
                                if (o(t, "is-disabled") || (o(t, "pika-button") && !o(t, "is-empty") ? (d.setDate(new Date(t.getAttribute("data-pika-year"), t.getAttribute("data-pika-month"), t.getAttribute("data-pika-day"))), _.bound && s(function() {
                                        d.hide(), _.field && _.field.blur()
                                    }, 100)) : o(t, "pika-prev") ? d.prevMonth() : o(t, "pika-next") && d.nextMonth()), o(t, "pika-select")) d._c = !0;
                                else {
                                    if (!e.preventDefault) return e.returnValue = !1, !1;
                                    e.preventDefault()
                                }
                        }
                    }, d._onChange = function(e) {
                        e = e || window.event;
                        var t = e.target || e.srcElement;
                        t && (o(t, "pika-select-month") ? d.gotoMonth(t.value) : o(t, "pika-select-year") && d.gotoYear(t.value))
                    }, d._onInputChange = function(n) {
                        var a;
                        n.firedBy !== d && (t ? (a = e(_.field.value, _.format), a = a && a.isValid() ? a.toDate() : null) : a = new Date(Date.parse(_.field.value)), c(a) && d.setDate(a), d._v || d.show())
                    }, d._onInputFocus = function() {
                        d.show()
                    }, d._onInputClick = function() {
                        d.show()
                    }, d._onInputBlur = function() {
                        var e = a.activeElement;
                        do
                            if (o(e, "pika-single")) return; while (e = e.parentNode);
                        d._c || (d._b = s(function() {
                            d.hide()
                        }, 50)), d._c = !1
                    }, d._onClick = function(e) {
                        e = e || window.event;
                        var t = e.target || e.srcElement,
                            a = t;
                        if (t) {
                            !n && o(t, "pika-select") && (t.onchange || (t.setAttribute("onchange", "return;"), r(t, "change", d._onChange)));
                            do
                                if (o(a, "pika-single") || a === _.trigger) return; while (a = a.parentNode);
                            d._v && t !== _.trigger && a !== _.trigger && d.hide()
                        }
                    }, d.el = a.createElement("div"), d.el.className = "pika-single" + (_.isRTL ? " is-rtl" : "") + (_.theme ? " " + _.theme : ""), r(d.el, "mousedown", d._onMouseDown, !0), r(d.el, "touchend", d._onMouseDown, !0), r(d.el, "change", d._onChange), _.field && (_.container ? _.container.appendChild(d.el) : _.bound ? a.body.appendChild(d.el) : _.field.parentNode.insertBefore(d.el, _.field.nextSibling), r(_.field, "change", d._onInputChange), _.defaultDate || (t && _.field.value ? _.defaultDate = e(_.field.value, _.format).toDate() : _.defaultDate = new Date(Date.parse(_.field.value)), _.setDefaultDate = !0));
                    var u = _.defaultDate;
                    c(u) ? _.setDefaultDate ? d.setDate(u, !0) : d.gotoDate(u) : d.gotoDate(new Date), _.bound ? (this.hide(), d.el.className += " is-bound", r(_.trigger, "click", d._onInputClick), r(_.trigger, "focus", d._onInputFocus), r(_.trigger, "blur", d._onInputBlur)) : this.show()
                };
            return j.prototype = {
                config: function(e) {
                    this._o || (this._o = Y({}, D, !0));
                    var t = Y(this._o, e, !0);
                    t.isRTL = !!t.isRTL, t.field = t.field && t.field.nodeName ? t.field : null, t.theme = "string" == typeof t.theme && t.theme ? t.theme : null, t.bound = !!(void 0 !== t.bound ? t.field && t.bound : t.field), t.trigger = t.trigger && t.trigger.nodeName ? t.trigger : t.field, t.disableWeekends = !!t.disableWeekends, t.disableDayFn = "function" == typeof t.disableDayFn ? t.disableDayFn : null;
                    var n = parseInt(t.numberOfMonths, 10) || 1;
                    if (t.numberOfMonths = n > 4 ? 4 : n, c(t.minDate) || (t.minDate = !1), c(t.maxDate) || (t.maxDate = !1), t.minDate && t.maxDate && t.maxDate < t.minDate && (t.maxDate = t.minDate = !1), t.minDate && this.setMinDate(t.minDate), t.maxDate && this.setMaxDate(t.maxDate), l(t.yearRange)) {
                        var a = (new Date).getFullYear() - 10;
                        t.yearRange[0] = parseInt(t.yearRange[0], 10) || a, t.yearRange[1] = parseInt(t.yearRange[1], 10) || a
                    } else t.yearRange = Math.abs(parseInt(t.yearRange, 10)) || D.yearRange, t.yearRange > 100 && (t.yearRange = 100);
                    return t
                },
                toString: function(n) {
                    return c(this._d) ? t ? e(this._d).format(n || this._o.format) : this._d.toDateString() : ""
                },
                getMoment: function() {
                    return t ? e(this._d) : null
                },
                setMoment: function(n, a) {
                    t && e.isMoment(n) && this.setDate(n.toDate(), a)
                },
                getDate: function() {
                    return c(this._d) ? new Date(this._d.getTime()) : null
                },
                setDate: function(e, t) {
                    if (!e) return this._d = null, this._o.field && (this._o.field.value = "", d(this._o.field, "change", {
                        firedBy: this
                    })), this.draw();
                    if ("string" == typeof e && (e = new Date(Date.parse(e))), c(e)) {
                        var n = this._o.minDate,
                            a = this._o.maxDate;
                        c(n) && e < n ? e = n : c(a) && e > a && (e = a), this._d = new Date(e.getTime()), f(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), d(this._o.field, "change", {
                            firedBy: this
                        })), t || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
                    }
                },
                gotoDate: function(e) {
                    var t = !0;
                    if (c(e)) {
                        if (this.calendars) {
                            var n = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                                a = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                                s = e.getTime();
                            a.setMonth(a.getMonth() + 1), a.setDate(a.getDate() - 1), t = s < n.getTime() || a.getTime() < s
                        }
                        t && (this.calendars = [{
                            month: e.getMonth(),
                            year: e.getFullYear()
                        }], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), this.adjustCalendars()
                    }
                },
                adjustCalendars: function() {
                    this.calendars[0] = p(this.calendars[0]);
                    for (var e = 1; e < this._o.numberOfMonths; e++) this.calendars[e] = p({
                        month: this.calendars[0].month + e,
                        year: this.calendars[0].year
                    });
                    this.draw()
                },
                gotoToday: function() {
                    this.gotoDate(new Date)
                },
                gotoMonth: function(e) {
                    isNaN(e) || (this.calendars[0].month = parseInt(e, 10), this.adjustCalendars())
                },
                nextMonth: function() {
                    this.calendars[0].month++, this.adjustCalendars()
                },
                prevMonth: function() {
                    this.calendars[0].month--, this.adjustCalendars()
                },
                gotoYear: function(e) {
                    isNaN(e) || (this.calendars[0].year = parseInt(e, 10), this.adjustCalendars())
                },
                setMinDate: function(e) {
                    f(e), this._o.minDate = e, this._o.minYear = e.getFullYear(), this._o.minMonth = e.getMonth(), this.draw()
                },
                setMaxDate: function(e) {
                    f(e), this._o.maxDate = e, this._o.maxYear = e.getFullYear(), this._o.maxMonth = e.getMonth(), this.draw()
                },
                setStartRange: function(e) {
                    this._o.startRange = e
                },
                setEndRange: function(e) {
                    this._o.endRange = e
                },
                draw: function(e) {
                    if (this._v || e) {
                        var t = this._o,
                            n = t.minYear,
                            a = t.maxYear,
                            r = t.minMonth,
                            i = t.maxMonth,
                            d = "";
                        this._y <= n && (this._y = n, !isNaN(r) && this._m < r && (this._m = r)), this._y >= a && (this._y = a, !isNaN(i) && this._m > i && (this._m = i));
                        for (var _ = 0; _ < t.numberOfMonths; _++) d += '<div class="pika-lendar">' + S(this, _, this.calendars[_].year, this.calendars[_].month, this.calendars[0].year) + this.render(this.calendars[_].year, this.calendars[_].month) + "</div>";
                        if (this.el.innerHTML = d, t.bound && "hidden" !== t.field.type && s(function() {
                                t.trigger.focus()
                            }, 1), "function" == typeof this._o.onDraw) {
                            var o = this;
                            s(function() {
                                o._o.onDraw.call(o)
                            }, 0)
                        }
                    }
                },
                adjustPosition: function() {
                    var e, t, n, s, r, i, d, _, o, u;
                    if (!this._o.container) {
                        if (this.el.style.position = "absolute", e = this._o.trigger, t = e, n = this.el.offsetWidth, s = this.el.offsetHeight, r = window.innerWidth || a.documentElement.clientWidth, i = window.innerHeight || a.documentElement.clientHeight, d = window.pageYOffset || a.body.scrollTop || a.documentElement.scrollTop, "function" == typeof e.getBoundingClientRect) u = e.getBoundingClientRect(), _ = u.left + window.pageXOffset, o = u.bottom + window.pageYOffset;
                        else
                            for (_ = t.offsetLeft, o = t.offsetTop + t.offsetHeight; t = t.offsetParent;) _ += t.offsetLeft, o += t.offsetTop;
                        (this._o.reposition && _ + n > r || this._o.position.indexOf("right") > -1 && _ - n + e.offsetWidth > 0) && (_ = _ - n + e.offsetWidth), (this._o.reposition && o + s > i + d || this._o.position.indexOf("top") > -1 && o - s - e.offsetHeight > 0) && (o = o - s - e.offsetHeight), this.el.style.left = _ + "px", this.el.style.top = o + "px"
                    }
                },
                render: function(e, t) {
                    var n = this._o,
                        a = new Date,
                        s = L(e, t),
                        r = new Date(e, t, 1).getDay(),
                        i = [],
                        d = [];
                    f(a), n.firstDay > 0 && (r -= n.firstDay, r < 0 && (r += 7));
                    for (var _ = s + r, o = _; o > 7;) o -= 7;
                    _ += 7 - o;
                    for (var u = 0, m = 0; u < _; u++) {
                        var l = new Date(e, t, 1 + (u - r)),
                            M = !!c(this._d) && y(l, this._d),
                            Y = y(l, a),
                            p = u < r || u >= s + r,
                            D = n.startRange && y(n.startRange, l),
                            k = n.endRange && y(n.endRange, l),
                            v = n.startRange && n.endRange && n.startRange < l && l < n.endRange,
                            b = n.minDate && l < n.minDate || n.maxDate && l > n.maxDate || n.disableWeekends && h(l) || n.disableDayFn && n.disableDayFn(l),
                            S = {
                                day: 1 + (u - r),
                                month: t,
                                year: e,
                                isSelected: M,
                                isToday: Y,
                                isDisabled: b,
                                isEmpty: p,
                                isStartRange: D,
                                isEndRange: k,
                                isInRange: v
                            };
                        d.push(g(S)), 7 === ++m && (n.showWeekNumber && d.unshift(T(u - r, t, e)), i.push(w(d, n.isRTL)), d = [], m = 0)
                    }
                    return H(n, i)
                },
                isVisible: function() {
                    return this._v
                },
                show: function() {
                    this._v || (m(this.el, "is-hidden"), this._v = !0, this.draw(), this._o.bound && (r(a, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this))
                },
                hide: function() {
                    var e = this._v;
                    e !== !1 && (this._o.bound && i(a, "click", this._onClick), this.el.style.position = "static", this.el.style.left = "auto", this.el.style.top = "auto", u(this.el, "is-hidden"), this._v = !1, void 0 !== e && "function" == typeof this._o.onClose && this._o.onClose.call(this))
                },
                destroy: function() {
                    this.hide(), i(this.el, "mousedown", this._onMouseDown, !0), i(this.el, "touchend", this._onMouseDown, !0), i(this.el, "change", this._onChange), this._o.field && (i(this._o.field, "change", this._onInputChange), this._o.bound && (i(this._o.trigger, "click", this._onInputClick), i(this._o.trigger, "focus", this._onInputFocus), i(this._o.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el)
                }
            }, j
        })
    }, function(e, t, n) {
        e.exports = {
            "default": n(114),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(140), e.exports = n(6).Object.assign
    }, function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function(e, t, n) {
        var a = n(5);
        e.exports = function(e) {
            if (!a(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function(e, t, n) {
        var a = n(10),
            s = n(136),
            r = n(135);
        e.exports = function(e) {
            return function(t, n, i) {
                var d, _ = a(t),
                    o = s(_.length),
                    u = r(i, o);
                if (e && n != n) {
                    for (; o > u;)
                        if (d = _[u++], d != d) return !0
                } else
                    for (; o > u; u++)
                        if ((e || u in _) && _[u] === n) return e || u || 0;
                return !e && -1
            }
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }, function(e, t, n) {
        var a = n(115);
        e.exports = function(e, t, n) {
            if (a(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, a) {
                        return e.call(t, n, a)
                    };
                case 3:
                    return function(n, a, s) {
                        return e.call(t, n, a, s)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }, function(e, t, n) {
        var a = n(5),
            s = n(4).document,
            r = a(s) && a(s.createElement);
        e.exports = function(e) {
            return r ? s.createElement(e) : {}
        }
    }, function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(e, t, n) {
        var a = n(4),
            s = n(6),
            r = n(119),
            i = n(124),
            d = "prototype",
            _ = function(e, t, n) {
                var o, u, m, l = e & _.F,
                    c = e & _.G,
                    h = e & _.S,
                    M = e & _.P,
                    L = e & _.B,
                    f = e & _.W,
                    y = c ? s : s[t] || (s[t] = {}),
                    Y = y[d],
                    p = c ? a : h ? a[t] : (a[t] || {})[d];
                c && (n = t);
                for (o in n) u = !l && p && void 0 !== p[o], u && o in y || (m = u ? p[o] : n[o], y[o] = c && "function" != typeof p[o] ? n[o] : L && u ? r(m, a) : f && p[o] == m ? function(e) {
                    var t = function(t, n, a) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, a)
                        }
                        return e.apply(this, arguments)
                    };
                    return t[d] = e[d], t
                }(m) : M && "function" == typeof m ? r(Function.call, m) : m, M && ((y.virtual || (y.virtual = {}))[o] = m, e & _.R && Y && !Y[o] && i(Y, o, m)))
            };
        _.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128, e.exports = _
    }, function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }, function(e, t, n) {
        var a = n(127),
            s = n(132);
        e.exports = n(2) ? function(e, t, n) {
            return a.f(e, t, s(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    }, function(e, t, n) {
        e.exports = !n(2) && !n(3)(function() {
            return 7 != Object.defineProperty(n(120)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, n) {
        "use strict";
        var a = n(130),
            s = n(128),
            r = n(131),
            i = n(137),
            d = n(8),
            _ = Object.assign;
        e.exports = !_ || n(3)(function() {
            var e = {},
                t = {},
                n = Symbol(),
                a = "abcdefghijklmnopqrst";
            return e[n] = 7, a.split("").forEach(function(e) {
                t[e] = e
            }), 7 != _({}, e)[n] || Object.keys(_({}, t)).join("") != a
        }) ? function(e, t) {
            for (var n = i(e), _ = arguments.length, o = 1, u = s.f, m = r.f; _ > o;)
                for (var l, c = d(arguments[o++]), h = u ? a(c).concat(u(c)) : a(c), M = h.length, L = 0; M > L;) m.call(c, l = h[L++]) && (n[l] = c[l]);
            return n
        } : _
    }, function(e, t, n) {
        var a = n(116),
            s = n(125),
            r = n(138),
            i = Object.defineProperty;
        t.f = n(2) ? Object.defineProperty : function(e, t, n) {
            if (a(e), t = r(t, !0), a(n), s) try {
                return i(e, t, n)
            } catch (d) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function(e, t, n) {
        var a = n(123),
            s = n(10),
            r = n(117)(!1),
            i = n(133)("IE_PROTO");
        e.exports = function(e, t) {
            var n, d = s(e),
                _ = 0,
                o = [];
            for (n in d) n != i && a(d, n) && o.push(n);
            for (; t.length > _;) a(d, n = t[_++]) && (~r(o, n) || o.push(n));
            return o
        }
    }, function(e, t, n) {
        var a = n(129),
            s = n(121);
        e.exports = Object.keys || function(e) {
            return a(e, s)
        }
    }, function(e, t) {
        t.f = {}.propertyIsEnumerable
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function(e, t, n) {
        var a = n(134)("keys"),
            s = n(139);
        e.exports = function(e) {
            return a[e] || (a[e] = s(e))
        }
    }, function(e, t, n) {
        var a = n(4),
            s = "__core-js_shared__",
            r = a[s] || (a[s] = {});
        e.exports = function(e) {
            return r[e] || (r[e] = {})
        }
    }, function(e, t, n) {
        var a = n(9),
            s = Math.max,
            r = Math.min;
        e.exports = function(e, t) {
            return e = a(e), e < 0 ? s(e + t, 0) : r(e, t)
        }
    }, function(e, t, n) {
        var a = n(9),
            s = Math.min;
        e.exports = function(e) {
            return e > 0 ? s(a(e), 9007199254740991) : 0
        }
    }, function(e, t, n) {
        var a = n(7);
        e.exports = function(e) {
            return Object(a(e))
        }
    }, function(e, t, n) {
        var a = n(5);
        e.exports = function(e, t) {
            if (!a(e)) return e;
            var n, s;
            if (t && "function" == typeof(n = e.toString) && !a(s = n.call(e))) return s;
            if ("function" == typeof(n = e.valueOf) && !a(s = n.call(e))) return s;
            if (!t && "function" == typeof(n = e.toString) && !a(s = n.call(e))) return s;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(e, t) {
        var n = 0,
            a = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + a).toString(36))
        }
    }, function(e, t, n) {
        var a = n(122);
        a(a.S + a.F, "Object", {
            assign: n(126)
        })
    }, function(e, t, n) {
        function a(e) {
            return n(s(e))
        }

        function s(e) {
            return r[e] || function() {
                throw new Error("Cannot find module '" + e + "'.")
            }()
        }
        var r = {
            "./af": 11,
            "./af.js": 11,
            "./ar": 15,
            "./ar-ma": 12,
            "./ar-ma.js": 12,
            "./ar-sa": 13,
            "./ar-sa.js": 13,
            "./ar-tn": 14,
            "./ar-tn.js": 14,
            "./ar.js": 15,
            "./az": 16,
            "./az.js": 16,
            "./be": 17,
            "./be.js": 17,
            "./bg": 18,
            "./bg.js": 18,
            "./bn": 19,
            "./bn.js": 19,
            "./bo": 20,
            "./bo.js": 20,
            "./br": 21,
            "./br.js": 21,
            "./bs": 22,
            "./bs.js": 22,
            "./ca": 23,
            "./ca.js": 23,
            "./cs": 24,
            "./cs.js": 24,
            "./cv": 25,
            "./cv.js": 25,
            "./cy": 26,
            "./cy.js": 26,
            "./da": 27,
            "./da.js": 27,
            "./de": 29,
            "./de-at": 28,
            "./de-at.js": 28,
            "./de.js": 29,
            "./dv": 30,
            "./dv.js": 30,
            "./el": 31,
            "./el.js": 31,
            "./en-au": 32,
            "./en-au.js": 32,
            "./en-ca": 33,
            "./en-ca.js": 33,
            "./en-gb": 34,
            "./en-gb.js": 34,
            "./en-ie": 35,
            "./en-ie.js": 35,
            "./en-nz": 36,
            "./en-nz.js": 36,
            "./eo": 37,
            "./eo.js": 37,
            "./es": 39,
            "./es-do": 38,
            "./es-do.js": 38,
            "./es.js": 39,
            "./et": 40,
            "./et.js": 40,
            "./eu": 41,
            "./eu.js": 41,
            "./fa": 42,
            "./fa.js": 42,
            "./fi": 43,
            "./fi.js": 43,
            "./fo": 44,
            "./fo.js": 44,
            "./fr": 47,
            "./fr-ca": 45,
            "./fr-ca.js": 45,
            "./fr-ch": 46,
            "./fr-ch.js": 46,
            "./fr.js": 47,
            "./fy": 48,
            "./fy.js": 48,
            "./gd": 49,
            "./gd.js": 49,
            "./gl": 50,
            "./gl.js": 50,
            "./he": 51,
            "./he.js": 51,
            "./hi": 52,
            "./hi.js": 52,
            "./hr": 53,
            "./hr.js": 53,
            "./hu": 54,
            "./hu.js": 54,
            "./hy-am": 55,
            "./hy-am.js": 55,
            "./id": 56,
            "./id.js": 56,
            "./is": 57,
            "./is.js": 57,
            "./it": 58,
            "./it.js": 58,
            "./ja": 59,
            "./ja.js": 59,
            "./jv": 60,
            "./jv.js": 60,
            "./ka": 61,
            "./ka.js": 61,
            "./kk": 62,
            "./kk.js": 62,
            "./km": 63,
            "./km.js": 63,
            "./ko": 64,
            "./ko.js": 64,
            "./ky": 65,
            "./ky.js": 65,
            "./lb": 66,
            "./lb.js": 66,
            "./lo": 67,
            "./lo.js": 67,
            "./lt": 68,
            "./lt.js": 68,
            "./lv": 69,
            "./lv.js": 69,
            "./me": 70,
            "./me.js": 70,
            "./mk": 71,
            "./mk.js": 71,
            "./ml": 72,
            "./ml.js": 72,
            "./mr": 73,
            "./mr.js": 73,
            "./ms": 75,
            "./ms-my": 74,
            "./ms-my.js": 74,
            "./ms.js": 75,
            "./my": 76,
            "./my.js": 76,
            "./nb": 77,
            "./nb.js": 77,
            "./ne": 78,
            "./ne.js": 78,
            "./nl": 79,
            "./nl.js": 79,
            "./nn": 80,
            "./nn.js": 80,
            "./pa-in": 81,
            "./pa-in.js": 81,
            "./pl": 82,
            "./pl.js": 82,
            "./pt": 84,
            "./pt-br": 83,
            "./pt-br.js": 83,
            "./pt.js": 84,
            "./ro": 85,
            "./ro.js": 85,
            "./ru": 86,
            "./ru.js": 86,
            "./se": 87,
            "./se.js": 87,
            "./si": 88,
            "./si.js": 88,
            "./sk": 89,
            "./sk.js": 89,
            "./sl": 90,
            "./sl.js": 90,
            "./sq": 91,
            "./sq.js": 91,
            "./sr": 93,
            "./sr-cyrl": 92,
            "./sr-cyrl.js": 92,
            "./sr.js": 93,
            "./ss": 94,
            "./ss.js": 94,
            "./sv": 95,
            "./sv.js": 95,
            "./sw": 96,
            "./sw.js": 96,
            "./ta": 97,
            "./ta.js": 97,
            "./te": 98,
            "./te.js": 98,
            "./th": 99,
            "./th.js": 99,
            "./tl-ph": 100,
            "./tl-ph.js": 100,
            "./tlh": 101,
            "./tlh.js": 101,
            "./tr": 102,
            "./tr.js": 102,
            "./tzl": 103,
            "./tzl.js": 103,
            "./tzm": 105,
            "./tzm-latn": 104,
            "./tzm-latn.js": 104,
            "./tzm.js": 105,
            "./uk": 106,
            "./uk.js": 106,
            "./uz": 107,
            "./uz.js": 107,
            "./vi": 108,
            "./vi.js": 108,
            "./x-pseudo": 109,
            "./x-pseudo.js": 109,
            "./zh-cn": 110,
            "./zh-cn.js": 110,
            "./zh-tw": 111,
            "./zh-tw.js": 111
        };
        a.keys = function() {
            return Object.keys(r)
        }, a.resolve = s, e.exports = a, a.id = 141
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }])
});
//# sourceMappingURL=assets/js/vue/vue-pikaday.js.map
