/* 
    AlfaScript (Source) - v0.11 (Release: 11-12-2022) 
    ~ An experimental javascript featured language ~

    [OpenSource Project - Under The MIT License] 
     - https://www.github.com/equneko/alfascript -
*/
'use strict'; ES5Polyfills();

/* Alfa Module */
 var alfa = {
    NAME: 'AlfaModule', VERSION: 'v0.11', CODE: 0.11,
    win: window, doc: document, nav: navigator, math: Math,
    /* Invite - append javascript
        @param _src - not null, string, args */
    invite: function (_src) {
        if (_src === null) return null; var js, i;
        if (arguments.length > 1) {
            _src = arguments;
            for (i = 0; i < _src.length; i++) {
                alfa.invite(_src[i]);
            } return alfa;
        }
        js = alfa.doc.createElement('script'); js.src = _src + ".js";
        alfa.doc.head.appendChild(js); return alfa;
    },
    /* Use - namespacing alfa
        @param _ns - not null, string, args */
    use: function (_ns) {
        _ns = _ns.trim();
        if (_ns === null) return null;
        if (arguments.length > 1) {
            _ns = arguments;
            var i; for (i = 0; i < _ns.length; i++) { alfa.use(_ns[i]); } return alfa;
        }
        /* Standard Namespace */
        if (_ns[0] === '#') {
            _ns = _ns.substring(1);
            var i, ht = eval('Object.keys(alfa.' + _ns + ')');
            for (i = 0; i < ht.length; i++) {
                alfa.use(_ns + '.' + ht[i]);
            }
            return alfa;
        }
        var _es = _ns.split('.'), e = "var " + _es[_es.length - 1] + " = alfa." + _ns + ";";
        if (window != null) window.eval(e);
        else eval(e); return alfa;
    },
    /* Standard Functions - namespace */
    std: {
        /* Log - prints something
        @param _obj - any types, args 
        @variation info, debug, warning, error - types. */
        log: function (_obj) {
            var e = "if (_obj != null){" +
                "if (arguments.length > 1) {" +
                "_obj = arguments;" +
                "var i; for (i = 0; i < _obj.length; i++)" +
                "{ if (_obj[i] === null) continue; $b } }else{$a} }",
                f = e.split('$a').join('console.$c(_obj);')
                    .split('$b').join('console.$c(_obj[i]);');

            if (_obj == null) { return { ex: e, fn: f } };
            eval(f.split('$c').join('log')); return alfa;
        },
        /* Information */
        info: function (_obj) { eval(alfa.log().fn.split('$c').join('info')); return alfa; },
        /* Debugging */
        debug: function (_obj) { eval(alfa.log().fn.split('$c').join('debug')); return alfa; },
        /* Warning */
        warn: function (_obj) { eval(alfa.log().fn.split('$c').join('warn')); return alfa; },
        /* Error */
        err: function (_obj) { eval(alfa.log().fn.split('$c').join('error')); return alfa; },
        /* CLS - Clear Logging Section */
        cls: function () { console.clear(); return alfa; },
        /* Show - window alert 
            @param _obj - not null, any types, args */
        show: function (_obj) {
            eval(alfa.std.log().ex.split('$a').join('alert(_obj);')
                .split('$b').join('alert(_obj[i]);')); return alfa;
        },
        /* Put - input from user window */
        put: function (_txt) { return prompt(_txt); },
        /* Time - window time management */
        wait: function (_fn, _t) { return window.setTimeout(_fn, _t); },
        timer: function (_fn, _t) { return window.setInterval(_fn, _t); },
        remit: function (_it) {
            if (arguments.length > 1) {
                _it = arguments;
                var i; for (i = 0; i < _it.length; i++) {
                    alfa.std.remit(_it[i]);
                }
                return;
            }
            return window.clearInterval(_it);
        }
    },
    /* Document Object Model - namespace */
    dom: {
        /* Element Initializer
            @param _el - element not null */
        init: function (_el) {
            if (arguments.length > 1) {
                _el = arguments;
                var i; for (i = 0; i < _el.length; i++) {
                    alfa.dom.init(_el[i]);
                }
                return;
            }
            window.eval('var ' + _el + ' = '+
            'function(_val,_prop){ return alfa.dom.el("'+ _el + '",_val,_prop);};');
        },
        /* Element - create element
            @param _tag, _val - string not null, _prop - object */
        el: function (_tag, _val, _prop) {
            if (_tag === null && _prop === null) return null;
            var k, e = document.createElement(_tag.toLowerCase());
            for (k in _prop) {
                e.setAttribute(k, _prop[k]);
            } e.innerHTML = _val; return e;
        },
        /* Render - rendering element
            @param _r - root/parent element, _el - element*/
        render: function (_el) {
            var a = _el, b = null, c =false;
            if (arguments.length > 1) {
                _el = arguments; 
                var i; for (i = 0; i < _el.length; i++) {
                    alfa.dom.render(_el[i]);
                }
                return;
            }
            if (b == null) {
                var bi = document.body, h = bi.children, l = h.length, i = 0, el = h[i];
                for (i = 0; i < l; i++) {
                    el = h[i]; //Find - last element at html.body
                    if (el.constructor == "function HTMLScriptElement() { [native code] }") break;
                }
                //Render - at html.body (DOM)
                if (a.constructor == Array) {
                    bi.insertBefore(a[0], el);
                } else {
                    bi.insertBefore(a, el);
                }
                return;
            }

            //Render - at html.#id (DOM-Spesific)
            var x = b;
            if (b.constructor == String) x = _doc.querySelector(b);
            if (a.constructor == Array) {
                if (c) x.insertAdjacentElement("afterend", a[0]); //Insert after spesific element
                else x.appendChild(a[0]);
            } else {
                if (c) x.insertAdjacentElement("afterend", a);
                else x.appendChild(a);
            }
            return;
        }
    }

}; /* Alfa - END */

/* ES5 Polyfills */
function ES5Polyfills(){
    if (!Object.keys) {
        Object.keys = function (_obj) {
            var keys = [];
            for (var i in _obj) {
                if (_obj.hasOwnProperty(i)) {
                    keys.push(i);
                }
            }
            return keys;
        };
    }
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    }
    if (!String.prototype.includes) {
        String.prototype.includes = function (_obj) {
            return this.indexOf(_obj) > -1;
        }
    }
}/* END */