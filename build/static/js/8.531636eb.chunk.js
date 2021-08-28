(this['webpackJsonpgoit-react-hw-08-phonebook'] =
  this['webpackJsonpgoit-react-hw-08-phonebook'] || []).push([
  [8],
  {
    167: function (e, t, i) {
      e.exports = {
        container: 'app_container__2JKVN',
        title: 'app_title__2fbQI',
        title_home: 'app_title_home__3W2zi',
        subtitle: 'app_subtitle__23EHX',
      };
    },
    199: function (e, t, i) {
      i.r(t);
      i(0);
      var c = i(14),
        n = i(15),
        a = i(167),
        o = i.n(a),
        s = i.p + 'static/media/photo1.21ece22d.jpg',
        p = i.p + 'static/media/photo2.5096727e.jpg',
        l = i(2),
        r = {
          container: {
            minHeight: 'calc(100vh - 200px)',
            maxWidth: 'calc(100vh - 200px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '700px',
            position: 'relative',
          },
        };
      t.default = function () {
        var e = Object(c.c)(n.c.getIsLoggedIn);
        return Object(l.jsxs)(l.Fragment, {
          children: [
            !e &&
              Object(l.jsxs)(l.Fragment, {
                children: [
                  Object(l.jsx)('h1', {
                    className: o.a.title_home,
                    children: 'Welcome to Phonebook.app!',
                  }),
                  Object(l.jsx)('div', {
                    className: r.container,
                    children: Object(l.jsx)('img', {
                      src: s,
                      alt: 'telephone',
                    }),
                  }),
                ],
              }),
            e &&
              Object(l.jsx)('div', {
                className: r.container,
                children: Object(l.jsx)('img', { src: p, alt: 'telephone' }),
              }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=8.531636eb.chunk.js.map
