import { O as x, A as _e, t as l, v as V, bl as te, B as ne, b6 as ye, P as T, V as L, Y as M, ab as X, a6 as Ce, _ as Z, Z as pe, a2 as q, C as le, ac as ue, w as Te, D as Fe, Q as G, a5 as J, R as ee, T as ae, X as Se, W as Ae } from "./vendor-b2024301.js"
const se = Symbol()
var oe = (a, t) => {
   const u = a.__vccOpts || a
   for (const [c, o] of t) u[c] = o
   return u
}
const $e = x({
      name: "FunTabItem",
      props: { title: String, name: [String, Number], badge: [String, Number] },
      setup(a) {
         const t = _e(se),
            u = l(),
            c = V(() => ((t == null ? void 0 : t.activeValue.value) === a.name ? { color: t == null ? void 0 : t.activeColor.value } : {})),
            o = () => {
               t == null || t.setActiveValue(a.name)
            },
            s = { name: te(a, "name"), el: u }
         return (
            ne(() => {
               var m
               ;(m = t.addItem) == null || m.call(t, s)
            }),
            ye(() => {
               var m
               ;(m = t.removeItem) == null || m.call(t, s)
            }),
            { el: u, style: c, handleClick: o }
         )
      },
   }),
   ke = { class: "fun-tab-item__wrap" },
   Ee = { class: "fun-tab-item__label" },
   Ne = { key: 0, class: "fun-tab-item__badge" }
function Be(a, t, u, c, o, s) {
   return T(), L("div", { ref: "el", style: q(a.style), class: "fun-tab-item", onClick: t[0] || (t[0] = (...m) => a.handleClick && a.handleClick(...m)) }, [M("div", ke, [X(a.$slots, "icon"), M("div", Ee, [X(a.$slots, "default", {}, () => [Ce(Z(a.title), 1)])]), a.badge ? (T(), L("div", Ne, Z(a.badge), 1)) : pe("v-if", !0)])], 4)
}
var Ie = oe($e, [
   ["render", Be],
   ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tab-item.vue"],
])
const R = window
function Ve() {
   let a = 0
   const t = ["webkit", "moz"]
   for (let u = 0; u < t.length && !window.requestAnimationFrame; ++u) (window.requestAnimationFrame = R[t[u] + "RequestAnimationFrame"]), (window.cancelAnimationFrame = R[t[u] + "CancelAnimationFrame"] || R[t[u] + "CancelRequestAnimationFrame"])
   window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (u) {
         const c = Date.now(),
            o = c - a,
            s = Math.max(0, 16.7 - o),
            m = window.setTimeout(function () {
               u(o)
            }, s)
         return (a = c + s), m
      }),
      window.cancelAnimationFrame ||
         (window.cancelAnimationFrame = function (u) {
            clearTimeout(u)
         })
}
const Le = x({
      name: "FunTabs",
      props: {
         modelValue: { type: [String, Number], default: "" },
         lineWidth: { type: [Number, String], default: 30 },
         lineHeight: { type: Number, default: 3 },
         activeColor: { type: String, default: "#1677ff" },
         additionalX: { type: Number, default: 50 },
         reBoundExponent: {
            type: Number,
            default: 10,
            validator(a) {
               return a > 0
            },
         },
         inertialDuration: {
            type: Number,
            default: 1e3,
            validator(a) {
               return a > 0
            },
         },
         reBoundingDuration: { type: Number, default: 360 },
      },
      emits: ["update:modelValue", "change"],
      setup(a, { emit: t, expose: u }) {
         let c = null
         const o = [],
            s = l(),
            m = l(),
            r = l(a.modelValue),
            g = l(0),
            b = l(0),
            f = l(0),
            v = l(0),
            d = l(0),
            k = l(!1),
            _ = l(!1),
            n = l(0),
            E = l(0),
            w = l(0),
            y = l(0),
            D = l(0),
            F = l(0),
            S = l(16.7),
            N = l(0),
            B = l(0),
            A = l(0),
            z = l(0.001),
            C = l(0.001),
            ie = V(() => {
               const e = _.value && !k.value ? a.reBoundingDuration : 0
               return { transitionTimingFunction: _.value ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.1, 0.57, 0.1, 1)", transitionDuration: `${e}ms`, transform: `translate3d(${n.value}px, 0px, 0px)` }
            }),
            re = V(() => ({ transition: "all 300ms", width: `${b.value}px`, height: `${a.lineHeight}px`, transform: `translate3d(${g.value}px, 0, 0)`, backgroundColor: a.activeColor })),
            W = V(() => y.value <= E.value)
         le(
            () => a.modelValue,
            e => {
               ;(r.value = e), I()
            },
         )
         const I = () => {
               c ||
                  (c = new Promise(e => {
                     ue(() => {
                        P(), e(), (c = null)
                     })
                  }))
            },
            ve = e => {
               ;(r.value = e), t("update:modelValue", e), t("change", e)
            },
            ce = e => {
               o.push(e), I()
            },
            me = e => {
               const i = o.findIndex(h => h.name === e.name)
               i !== -1 && (o.splice(i, 1), I())
            },
            de = { activeValue: r, activeColor: te(a, "activeColor"), addItem: ce, removeItem: me, setActiveValue: ve }
         Te(se, de)
         const P = () => {
               var e, i
               s.value && ((f.value = ((e = s.value) == null ? void 0 : e.offsetWidth) || 0), (v.value = ((i = m.value) == null ? void 0 : i.offsetWidth) - f.value), be(), he())
            },
            U = () => ((_.value = !1), n.value > 0 ? ((_.value = !0), (n.value = 0)) : n.value < -v.value && ((_.value = !0), (n.value = -v.value)), _.value),
            fe = () => {
               W.value ? ((n.value <= 0 && n.value + v.value > 0) || n.value > 0 ? (n.value += y.value - w.value) : n.value + v.value <= 0 && (n.value += (a.additionalX * (y.value - w.value)) / (f.value + Math.abs(n.value + v.value)))) : n.value >= 0 ? (n.value += (a.additionalX * (y.value - w.value)) / (f.value + n.value)) : ((n.value <= 0 && n.value + v.value >= 0) || n.value + v.value <= 0) && (n.value += y.value - w.value), (w.value = y.value)
            },
            O = () => {
               if (((B.value = Date.now()), (S.value = B.value - N.value), W.value ? (n.value <= -v.value ? ((C.value *= (a.reBoundExponent + Math.abs(n.value + v.value)) / a.reBoundExponent), (d.value = Math.min(d.value - C.value, 0))) : (d.value = Math.min(d.value - C.value * S.value, 0))) : n.value >= 0 ? ((C.value *= (a.reBoundExponent + n.value) / a.reBoundExponent), (d.value = Math.max(d.value - C.value, 0))) : (d.value = Math.max(d.value - C.value * S.value, 0)), (n.value += (d.value * S.value) / 2), Math.abs(d.value) <= z.value)) {
                  U()
                  return
               }
               ;(N.value = B.value), (A.value = requestAnimationFrame(O))
            },
            j = () => {
               if (!o.length) return
               const e = o.find(i => i.name.value === r.value)
               return e && e.el.value
            },
            he = () => {
               const e = j()
               if (!e) return
               const i = e.offsetWidth,
                  h = e.offsetLeft,
                  { lineWidth: p } = a
               p === "auto" ? (b.value = i) : p < 1 ? (b.value = i * p) : (b.value = p), (g.value = h + (i - b.value) / 2)
            },
            be = () => {
               const e = j()
               if (!e) return
               const i = e.offsetLeft,
                  h = (f.value - e.offsetWidth) / 2
               let p = 0
               const Q = Math.abs(n.value)
               i <= Q + h ? (p = h - (i + n.value)) : (p = -(i - Q - h))
               let $ = p + n.value
               $ > 0 && ($ = 0), $ < -v.value && ($ = -v.value), (_.value = !0), (n.value = $)
            },
            Y = e => {
               e.stopPropagation(), cancelAnimationFrame(A.value), (w.value = e.touches[0].clientX)
            },
            H = e => {
               v.value <= 0 || (e.preventDefault(), e.stopPropagation(), (k.value = !0), (D.value = F.value), (E.value = w.value), (y.value = e.touches[0].clientX), fe(), (F.value = e.timeStamp))
            },
            K = e => {
               if (((k.value = !1), U())) cancelAnimationFrame(A.value)
               else {
                  let i = e.timeStamp - F.value,
                     h = F.value - D.value
                  if (((h = h > 0 ? h : 8), i > 100)) return
                  ;(d.value = (w.value - E.value) / h), (C.value = d.value / a.inertialDuration), (N.value = Date.now()), (A.value = requestAnimationFrame(O))
               }
            },
            we = () => {
               const e = s.value
               e.addEventListener("touchstart", Y, !1), e.addEventListener("touchmove", H, !1), e.addEventListener("touchend", K, !1)
            },
            ge = () => {
               const e = s.value
               e.removeEventListener("touchstart", Y), e.removeEventListener("touchmove", H), e.removeEventListener("touchend", K)
            }
         return (
            ne(() => {
               Ve(), we(), I()
            }),
            Fe(() => {
               ge()
            }),
            u({ resize: P }),
            { viewAreaRef: s, listRef: m, activeValue: r, lineOffset: g, activeLineWidth: b, viewAreaWidth: f, offsetX: v, speed: d, touching: k, reBounding: _, translateX: n, startX: E, lastX: w, currentX: y, startMoveTime: D, endMoveTime: F, frameTime: S, frameStartTime: N, frameEndTime: B, inertiaFrame: A, zeroSpeed: z, acceleration: C, listStyle: ie, activeBarStyle: re, isMoveLeft: W }
         )
      },
   }),
   Me = { ref: "viewAreaRef", class: "fun-tabs" }
function Xe(a, t, u, c, o, s) {
   return T(), L("div", Me, [M("div", { ref: "listRef", style: q(a.listStyle), class: "fun-tabs__tab-list" }, [X(a.$slots, "default"), M("div", { style: q(a.activeBarStyle), class: "fun-tabs__active-line" }, null, 4)], 4)], 512)
}
var De = oe(Le, [
   ["render", Xe],
   ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tabs.vue"],
])
const Re = x({
   __name: "NavBar",
   props: { list: {}, tabClassName: {}, active: { default: 0 }, tabItemClassName: {} },
   emits: ["update:active", "onClickTab"],
   setup(a, { expose: t, emit: u }) {
      const c = a,
         o = l(),
         s = l(0),
         m = (r, g) => {
            u("update:active", s.value), u("onClickTab", { item: r, index: g })
         }
      return (
         le(
            () => c.active,
            r => {
               ue(() => (s.value = r))
            },
            { immediate: !0 },
         ),
         t({ funtabRef: o }),
         (r, g) => (
            T(),
            G(
               ae(De),
               { modelValue: s.value, "onUpdate:modelValue": g[0] || (g[0] = b => (s.value = b)), class: ee(r.tabClassName), lineWidth: "0", ref_key: "funtabRef", ref: o },
               {
                  default: J(() => [
                     (T(!0),
                     L(
                        Ae,
                        null,
                        Se(r.list, (b, f) => (T(), G(ae(Ie), { name: f, key: f, class: ee([r.tabItemClassName, { activeClassName: r.active === f }]), onClick: v => m(b, f) }, { default: J(() => [X(r.$slots, "default", { item: b, index: f })]), _: 2 }, 1032, ["name", "class", "onClick"]))),
                        128,
                     )),
                  ]),
                  _: 3,
               },
               8,
               ["modelValue", "class"],
            )
         )
      )
   },
})
export { Ie as F, Re as _, De as a }
