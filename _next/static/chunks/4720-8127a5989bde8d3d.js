(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4720],
  {
    64333: function (e, n, t) {
      "use strict";
      t.d(n, {
        z: function () {
          return a;
        },
      });
      var r = t(85893),
        o = t(83985),
        i = t.n(o);
      function a(e) {
        let {
          onClick: n,
          children: t,
          type: o,
          size: a,
          className: s,
          disable: l,
          notAllow: c,
        } = e;
        return (0, r.jsx)("button", {
          className: ""
            .concat(o ? i()[o] : i().button, " ")
            .concat(a ? i()[a] : "", " ")
            .concat(s || "", " ")
            .concat(c ? i().notAllow : ""),
          onClick: n,
          disabled: l,
          children: t,
        });
      }
    },
    84356: function (e, n, t) {
      "use strict";
      t.d(n, {
        $: function () {
          return d;
        },
      });
      var r = t(85893),
        o = t(59647),
        i = t.n(o),
        a = t(35547),
        s = t(87799),
        l = t(41664),
        c = t.n(l),
        h = t(39332);
      function d() {
        let e = (0, h.usePathname)();
        return (0, r.jsx)("footer", {
          className: ""
            .concat(i().footer, " ")
            .concat(
              e.includes("/wl-node") ? i().backImageBlue : i().backImageCyan
            ),
          children: (0, r.jsxs)("div", {
            className: ""
              .concat(i().container, " ")
              .concat(i().footerContainer),
            children: [
              (0, r.jsxs)("div", {
                className: "flex-horizontal",
                children: [
                  (0, r.jsxs)("h1", {
                    className: "h1 ".concat(i().maxWidth445),
                    children: [
                      "Your Knowledge IS",
                      " ",
                      (0, r.jsx)("span", {
                        className: i().textWrapper,
                        children: (0, r.jsxs)("span", {
                          className: i().textAnimation,
                          children: [
                            (0, r.jsx)("span", {
                              className: i().cyanglowy,
                              children: "Property",
                            }),
                            (0, r.jsx)("span", {
                              className: i().yellowglowy,
                              children: "PROVENANCE",
                            }),
                            (0, r.jsx)("span", {
                              className: i().megentaglowy,
                              children: "Power",
                            }),
                            (0, r.jsx)("span", {
                              className: i().cyanglowy,
                              children: "Property",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: i().footLinksDiv,
                    children: [
                      (0, r.jsxs)("div", {
                        className: ""
                          .concat(i().flex_vertical, " ")
                          .concat(i().gap_16),
                        children: [
                          (0, r.jsx)("p", {
                            className: i().menuLabel,
                            children: "Company",
                          }),
                          (0, r.jsx)("p", {}),
                          s.he.map((e) =>
                            (0, r.jsx)(
                              c(),
                              {
                                href: e.href,
                                className: i().navLink,
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: e.name,
                              },
                              e.name
                            )
                          ),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: ""
                          .concat(i().flex_vertical, " ")
                          .concat(i().gap_16),
                        children: [
                          (0, r.jsx)("p", {
                            className: i().menuLabel,
                            children: "Community",
                          }),
                          (0, r.jsx)("p", {}),
                          s.n0.map((e) =>
                            (0, r.jsx)(
                              c(),
                              {
                                href: e.href,
                                className: i().navLink,
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: e.name,
                              },
                              e.name
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: ""
                  .concat(i().bodyXs, " ")
                  .concat(i().marginLeftAuto),
                children: ["\xa9 ", (0, a.D)(), " Voltix AI. All rights reserved."],
              }),
            ],
          }),
        });
      }
    },
    39715: function (e, n, t) {
      "use strict";
      t.d(n, {
        h: function () {
          return x;
        },
      });
      var r = t(85893),
        o = t(59647),
        i = t.n(o),
        a = t(64333),
        s = t(41664),
        l = t.n(s),
        c = t(7015),
        h = t(92321),
        d = t(68107),
        m = t(67294),
        u = t(49922),
        _ = t(65009),
        f = t(87799),
        p = t(51038);
      function x() {
        let { openConnectModal: e } = (0, c.We)(),
          { openAccountModal: n } = (0, c.Ap)(),
          { address: t } = (0, h.m)(),
          o = (0, u.Fs)(),
          s = (0, m.useRef)(null),
          p = (0, m.useRef)(null),
          [x, w] = (0, m.useState)(!1);
        (0, m.useEffect)(() => {
          var e;
          o &&
            p.current &&
            (k("index"),
            w(!1),
            null === (e = s.current) ||
              void 0 === e ||
              e.classList.remove(i().hamburgerOpen),
            o.sm
              ? ((p.current.style.display = "flex"),
                (p.current.style.opacity = "1"))
              : ((p.current.style.display = "none"),
                (p.current.style.opacity = "0")));
        }, [null == o ? void 0 : o.sm]);
        let { whiteCheckNode: v } = (0, _.O)(),
          {
            openMenu: H,
            toggleMenu: L,
            solutionRef: j,
            docRef: b,
          } = (function () {
            let [e, n] = (0, m.useState)(null),
              t = (0, m.useRef)(null),
              r = (0, m.useRef)(null),
              o = (e) => {
                ((t.current && !t.current.contains(e.target)) ||
                  (r.current && !r.current.contains(e.target))) &&
                  n(null);
              };
            return (
              (0, m.useEffect)(
                () => (
                  document.addEventListener("click", o, !0),
                  () => {
                    document.removeEventListener("click", o, !0);
                  }
                ),
                []
              ),
              {
                openMenu: e,
                toggleMenu: (e) => {
                  n((n) => (n === e ? null : e));
                },
                solutionRef: t,
                docRef: r,
              }
            );
          })(),
          [V, k] = (0, m.useState)("index"),
          y = (e) => {
            o.sm ? L(e) : k(e);
          },
          C = () => {
            k("index");
          };
        return (0, r.jsx)("nav", {
          className: i().navbarComponent,
          children: (0, r.jsxs)("div", {
            className: i().navbarContainer,
            children: [
              (0, r.jsx)(l(), {
                "aria-current": "page",
                href: d.fy,
                rel: "noopener noreferrer",
                target: "_blank",
                className: "zIndex999 ".concat(i().navbarLogoLink),
                children: [
                  (0, r.jsx)("img", {
                    src: "/logo.1ad77578.png",
                    style: {width: 200}
                  })
                ],
                style: {color:'white',fontWeight:"bold",fontSize: 40}
              }),
              (0, r.jsxs)("div", {
                className: "flex",
                children: [
                  (0, r.jsx)("div", {
                    className: "".concat(i().navbarMenu),
                    ref: p,
                    children: (0, r.jsx)("div", {
                      className: i().navListWrapper,
                      children: (0, r.jsx)("div", {
                        className: "".concat(i().navList, " flex"),
                        children:
                          "index" === V
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(l(), {
                                    href: "/",
                                    className: ""
                                      .concat(i().navLink, " marginRight24 ")
                                      .concat(i().navFontSize),
                                    children: (0, r.jsx)(a.z, {
                                      children: "Checker Nodes",
                                    }),
                                  }),
                                  (0, r.jsx)(l(), {
                                    href: "https://dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    className: ""
                                      .concat(i().navLink, " marginRight24 ")
                                      .concat(i().navFontSize),
                                    children: "Chart",
                                  }),
                                  (0, r.jsx)(l(), {
                                    href: "https://x.com/VoltixAI",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    className: ""
                                      .concat(i().navLink, " marginRight24 ")
                                      .concat(i().navFontSize),
                                    children: "Twitter",
                                  }),
                                  (0, r.jsx)(l(), {
                                    href: "https://t.me/voltixai_eth",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    className: ""
                                      .concat(i().navLink, " marginRight24 ")
                                      .concat(i().navFontSize),
                                    children: "Telegram",
                                  }),
                                  (0, r.jsx)(l(), {
                                    href: "https://docs.voltixai.pro",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    className: ""
                                      .concat(i().navLink, " ")
                                      .concat(i().navFontSize),
                                    children: "Documentation",
                                  }),
                                ],
                              })
                            : "solution" === V
                            ? (0, r.jsx)(g, { data: f.JT, backIndex: C })
                            : (0, r.jsx)(g, { data: f.fy, backIndex: C }),
                      }),
                    }),
                  }),
                  v &&
                    (0, r.jsxs)(l(), {
                      href: "/whitelist",
                      className: "".concat(i().whitelist, " zIndex999"),
                      children: [
                        (0, r.jsx)("div", {
                          children: "Your Whitelist Purchases",
                        }),
                        (0, r.jsx)("div", {
                          className: i().whiteEnd,
                          children: "Check here",
                        }),
                      ],
                    }),
                  (0, r.jsx)("span", {
                    className: "zIndex999",
                    children: t
                      ? (0, r.jsx)(a.z, { onClick: n, children: (0, d.Xe)(t) })
                      : (0, r.jsx)(a.z, {
                          onClick: e,
                          children: "Connect Wallet",
                        }),
                  }),
                  (0, r.jsx)("div", {
                    className: i().hamburger,
                    children: (0, r.jsx)("div", {
                      className: i().hamburgerBtn,
                      onClick: () => {
                        var e;
                        p.current &&
                          (x
                            ? ((p.current.style.display = "none"),
                              (p.current.style.opacity = "0"))
                            : ((p.current.style.display = "flex"),
                              (p.current.style.opacity = "1")),
                          k("index"),
                          w((e) => !e),
                          null === (e = s.current) ||
                            void 0 === e ||
                            e.classList.toggle(i().hamburgerOpen));
                      },
                      ref: s,
                      children: (0, r.jsx)("div", {
                        className: i().hamburgerIcon,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function g(e) {
        let { data: n, backIndex: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: i().mobileLeft,
              onClick: t,
              children: (0, r.jsx)(p.Y4, {}),
            }),
            n.map((e, n) =>
              (0, r.jsx)(
                l(),
                {
                  href: e.href,
                  rel: "noopener noreferrer",
                  target: "_blank",
                  className: i().navLink,
                  style: { fontSize: "18px" },
                  children: e.name,
                },
                n
              )
            ),
          ],
        });
      }
    },
    51038: function (e, n, t) {
      "use strict";
      t.d(n, {
        Ey: function () {
          return m;
        },
        TI: function () {
          return i;
        },
        Tw: function () {
          return l;
        },
        V_: function () {
          return s;
        },
        Y4: function () {
          return d;
        },
        b0: function () {
          return o;
        },
        m9: function () {
          return u;
        },
        ol: function () {
          return c;
        },
        pO: function () {
          return a;
        },
        zg: function () {
          return h;
        },
      });
      var r = t(85893);
      let o = () =>
          (0, r.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("rect", {
                width: "24",
                height: "24",
                rx: "12",
                fill: "#F7F4F1",
                fillOpacity: "0.1",
              }),
              (0, r.jsx)("path", {
                d: "M13.1416 11.0812L17.6089 6H16.5503L12.6714 10.4119L9.57328 6H6L10.6849 12.6716L6 18H7.05866L11.1549 13.3409L14.4267 18H18L13.1416 11.0812ZM11.6917 12.7304L11.217 12.066L7.44011 6.77981H9.06615L12.1141 11.046L12.5888 11.7103L16.5508 17.2556H14.9248L11.6917 12.7304Z",
                fill: "white",
              }),
            ],
          }),
        i = () =>
          (0, r.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("rect", {
                width: "24",
                height: "24",
                rx: "12",
                fill: "#F7F4F1",
                fillOpacity: "0.1",
              }),
              (0, r.jsx)("path", {
                d: "M8.66656 7.8V5.7C8.66656 5.3134 8.96505 5 9.33324 5H17.3333C17.7015 5 18 5.3134 18 5.7V15.5C18 15.8866 17.7015 16.2 17.3333 16.2H15.3333V18.2994C15.3333 18.6863 15.0334 19 14.6621 19H6.67111C6.3004 19 6 18.6888 6 18.2994L6.00173 8.50061C6.0018 8.11368 6.30176 7.8 6.67295 7.8H8.66656ZM9.99991 7.8H15.3333V14.8H16.6667V6.4H9.99991V7.8ZM8.66656 11.3V12.7H12.6666V11.3H8.66656ZM8.66656 14.1V15.5H12.6666V14.1H8.66656Z",
                fill: "white",
              }),
            ],
          }),
        a = (e) => {
          let { onClick: n } = e;
          return (0, r.jsx)("div", {
            style: { cursor: "pointer" },
            onClick: n,
            children: (0, r.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("rect", {
                  width: "24",
                  height: "24",
                  rx: "12",
                  fill: "#F7F4F1",
                  fillOpacity: "0.1",
                }),
                (0, r.jsx)("path", {
                  d: "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z",
                  fill: "#F7F4F1",
                }),
              ],
            }),
          });
        },
        s = (e) => {
          let { onClick: n } = e;
          return (0, r.jsx)("div", {
            style: { cursor: "pointer" },
            onClick: n,
            children: (0, r.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("rect", {
                  width: "24",
                  height: "24",
                  rx: "12",
                  fill: "#F7F4F1",
                  fillOpacity: "0.1",
                }),
                (0, r.jsx)("path", { d: "M5 11V13H19V11H5Z", fill: "white" }),
              ],
            }),
          });
        },
        l = () =>
          (0, r.jsxs)("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("rect", {
                x: "1",
                y: "1",
                width: "38",
                height: "38",
                rx: "19",
                stroke: "#353945",
                strokeWidth: "2",
              }),
              (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z",
                fill: "#FCFCFD",
              }),
            ],
          }),
        c = () =>
          (0, r.jsx)("svg", {
            width: "17",
            height: "15",
            viewBox: "0 0 17 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M0.5 6.5L0.5 8.5L12.5 8.5L12.5 10.5L14.5 10.5L14.5 8.5L16.5 8.5L16.5 6.5L14.5 6.5L14.5 4.5L12.5 4.5L12.5 6.5L0.5 6.5ZM10.5 2.5L12.5 2.5L12.5 4.5L10.5 4.5L10.5 2.5ZM10.5 2.5L8.5 2.5L8.5 0.5L10.5 0.5L10.5 2.5ZM10.5 12.5L12.5 12.5L12.5 10.5L10.5 10.5L10.5 12.5ZM10.5 12.5L8.5 12.5L8.5 14.5L10.5 14.5L10.5 12.5Z",
              fill: "#7c4dff",
            }),
          }),
        h = () =>
          (0, r.jsx)("svg", {
            width: "18",
            height: "19",
            viewBox: "0 0 18 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M9 0.97998H10.5V6.97998H16.5V9.97998H15V8.47998H9V3.97998H7.5V2.47998H9V0.97998ZM6 5.47998V3.97998H7.5V5.47998H6ZM4.5 6.97998V5.47998H6V6.97998H4.5ZM3 8.47998V6.97998H4.5V8.47998H3ZM10.5 14.48V15.98H9V17.48H7.5V11.48H1.5V8.47998H3V9.97998H9V14.48H10.5ZM12 12.98V14.48H10.5V12.98H12ZM13.5 11.48V12.98H12V11.48H13.5ZM13.5 11.48H15V9.97998H13.5V11.48Z",
              fill: "#74F6E1",
            }),
          }),
        d = () =>
          (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "19",
            height: "22",
            viewBox: "0 0 19 22",
            fill: "none",
            children: (0, r.jsx)("path", {
              d: "M11.44 8.56L7.24 4.32C6.88 3.88 6.68 3.44 6.68 2.96C6.68 1.84 7.64 0.96 8.76 0.96C9.24 0.96 9.76 1.12 10.12 1.48L18 9.4C18.44 9.84 18.76 10.28 18.76 11.04C18.76 11.56 18.6 12.12 18.24 12.48L10.16 20.56C9.8 20.92 9.24 21.08 8.72 21.08C7.56 21.08 6.76 20.24 6.76 19.08C6.76 18.48 6.92 18.04 7.28 17.68L11.56 13.4C11.68 13.28 11.72 13.2 11.72 13.12C11.72 13 11.6 12.96 11.4 12.96H2.8C1.72 12.96 0.84 12.12 0.84 10.96C0.84 9.84 1.72 9 2.8 9H11.28C11.48 9 11.6 8.96 11.6 8.84C11.6 8.76 11.56 8.68 11.44 8.56Z",
              fill: "white",
            }),
          }),
        m = () =>
          (0, r.jsx)("svg", {
            width: "17",
            height: "16",
            viewBox: "0 0 17 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M14.0124 8.6665V7.33317H6.01237V5.99984H4.67904V7.33317H3.3457V8.6665H4.67904V9.99984H6.01237V8.6665H14.0124ZM7.3457 11.3332H6.01237V9.99984H7.3457V11.3332ZM7.3457 11.3332H8.67904V12.6665H7.3457V11.3332ZM7.3457 4.6665H6.01237V5.99984H7.3457V4.6665ZM7.3457 4.6665H8.67904V3.33317H7.3457V4.6665Z",
              fill: "currentColor",
            }),
          }),
        u = () =>
          (0, r.jsx)("svg", {
            width: "17",
            height: "16",
            viewBox: "0 0 17 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M14.0124 8.6665V7.33317H6.01237V5.99984H4.67904V7.33317H3.3457V8.6665H4.67904V9.99984H6.01237V8.6665H14.0124ZM7.3457 11.3332H6.01237V9.99984H7.3457V11.3332ZM7.3457 11.3332H8.67904V12.6665H7.3457V11.3332ZM7.3457 4.6665H6.01237V5.99984H7.3457V4.6665ZM7.3457 4.6665H8.67904V3.33317H7.3457V4.6665Z",
              fill: "currentColor",
            }),
          });
    },
    49922: function (e, n, t) {
      "use strict";
      let r;
      t.d(n, {
        Fs: function () {
          return d;
        },
      });
      var o = t(67294);
      let i = !!window.document && !!window.document.createElement,
        a = new Set(),
        s = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 };
      function l() {
        let e = r;
        if ((h(), e !== r)) for (let e of a) e();
      }
      let c = !1;
      function h() {
        let e = window.innerWidth,
          n = {},
          t = !1;
        for (let o of Object.keys(s))
          (n[o] = e >= s[o]), n[o] !== r[o] && (t = !0);
        t && (r = n);
      }
      function d() {
        i &&
          !c &&
          ((r = {}), h(), window.addEventListener("resize", l), (c = !0));
        let [e, n] = (0, o.useState)(r);
        return (
          (0, o.useEffect)(() => {
            if (!i) return;
            c || window.addEventListener("resize", l);
            let e = () => {
              n(r);
            };
            return (
              a.add(e),
              () => {
                a.delete(e),
                  0 === a.size &&
                    (window.removeEventListener("resize", l), (c = !1));
              }
            );
          }, []),
          e
        );
      }
    },
    87799: function (e, n, t) {
      "use strict";
      t.d(n, {
        JT: function () {
          return i;
        },
        fy: function () {
          return a;
        },
        he: function () {
          return r;
        },
        n0: function () {
          return o;
        },
      });
      let r = [
          {
            name: "Documentation",
            href: "https://docs.voltixai.pro/",
          },
          { name: "Dextools", href: "https://dextools.io/app/en/ether/pair-explorer/0xcomingsoon" },
          { name: "Dexscreener", href: "https://dexscreener.com/ethereum/0xcomingsoon" },
        ],
        o = [
          { name: "Telegram", href: "https://t.me/voltixai_eth" },
          { name: "X", href: "https://x.com/VoltixAI" },
        ],
        i = [
          {
            name: "For data + Knowledge owners",
            href: "https://www.kip.pro/solutions-data-knowledge-owner",
          },
          {
            name: "For ai app owners",
            href: "https://www.kip.pro/solutions-ai-app-owners",
          },
          {
            name: "For AI model owners",
            href: "https://www.kip.pro/solutions-ai-model-owner",
          },
        ],
        a = [
          { name: "Whitepaper", href: "https://kipprotocol.gitbook.io/wp" },
          {
            name: "Voltix AI Node documentation",
            href: "https://kipprotocol.gitbook.io/kip-node-documentation",
          },
        ];
    },
    35547: function (e, n, t) {
      "use strict";
      t.d(n, {
        D: function () {
          return a;
        },
        c: function () {
          return s;
        },
      });
      var r = t(27484),
        o = t.n(r),
        i = t(89515);
      function a() {
        return o()().year();
      }
      function s() {
        var e;
        return null === (e = i.v4.find((e) => 1 === e.tier)) || void 0 === e
          ? void 0
          : e.start_time;
      }
    },
    59647: function (e) {
      e.exports = {
        container: "Home_container__d256j",
        flexCenter: "Home_flexCenter__ZjhFa",
        contactText: "Home_contactText__evgwf",
        hero: "Home_hero__VkeT1",
        loaded: "Home_loaded__KVTWZ",
        heroContent: "Home_heroContent__aWtjQ",
        mobileLeft: "Home_mobileLeft__LWgVT",
        animateH1: "Home_animateH1__yeGU8",
        slideInLeft: "Home_slideInLeft__tlmuz",
        animateP: "Home_animateP__PzIeU",
        slideInRight: "Home_slideInRight__75z_m",
        dropdown: "Home_dropdown__1dIW0",
        menuLabel: "Home_menuLabel__OsoEZ",
        loadingWrapper: "Home_loadingWrapper__okNfx",
        info: "Home_info__Lr5gE",
        subHeader: "Home_subHeader__IaPtY",
        navbarMenu: "Home_navbarMenu__ktahu",
        hamburger: "Home_hamburger__XTGnS",
        hamburgerBtn: "Home_hamburgerBtn__2ttp0",
        hamburgerIcon: "Home_hamburgerIcon__r29dB",
        hamburgerOpen: "Home_hamburgerOpen__1VeYq",
        marginLeftAuto: "Home_marginLeftAuto__PrSgd",
        bodyS: "Home_bodyS__hjbBZ",
        bodyXs: "Home_bodyXs__ZmTxm",
        footerContainer: "Home_footerContainer__pmYEU",
        footer: "Home_footer__yFiaX",
        backImageCyan: "Home_backImageCyan__QdvzE",
        backImageBlue: "Home_backImageBlue__Ye5Dw",
        navbarComponent: "Home_navbarComponent__iNh2N",
        navbarContainer: "Home_navbarContainer__JPpKN",
        navbarLogoLink: "Home_navbarLogoLink__tVK4j",
        navLink: "Home_navLink__SvGJP",
        marginBottom14: "Home_marginBottom14__FhOYC",
        maxWidth390: "Home_maxWidth390__kfCJ5",
        maxWidth445: "Home_maxWidth445__JoYRg",
        footLinksDiv: "Home_footLinksDiv__ZXM5e",
        gap_16: "Home_gap_16__qdxPz",
        flex_vertical: "Home_flex_vertical__EceIs",
        navFontSize: "Home_navFontSize__EByiV",
        whitelist: "Home_whitelist__n3Vu0",
        whiteColor: "Home_whiteColor__8W_5H",
        whiteEnd: "Home_whiteEnd__LlhJv",
        textWrapper: "Home_textWrapper__8MOoV",
        textAnimation: "Home_textAnimation__C24mJ",
        footerTextLoop: "Home_footerTextLoop__D_IXM",
        cyanglowy: "Home_cyanglowy__wwrya",
        yellowglowy: "Home_yellowglowy__oUv6e",
        megentaglowy: "Home_megentaglowy__YWSZ7",
        navListWrapper: "Home_navListWrapper__9ffm2",
        navList: "Home_navList__J3K_I",
      };
    },
    83985: function (e) {
      e.exports = {
        button: "button_button__rjx3x",
        notAllow: "button_notAllow__f7yv1",
        primary: "button_primary__IiIpN",
        large: "button_large__phhtf",
        big: "button_big__3m55O",
        text: "button_text__s6_2P",
      };
    },
  },
]);
