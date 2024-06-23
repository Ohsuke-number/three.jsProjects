function aa(a) {
    throw a
}
var fa = void 0
  , ia = !0
  , na = null
  , oa = !1;
function pa() {
    return (function() {}
    )
}
try {
    this.Module = Module
} catch (aaa) {
    this.Module = Module = {}
}
var qa = "object" === typeof process
  , sa = "object" === typeof window
  , va = "function" === typeof importScripts
  , baa = !sa && !qa && !va;
if (qa) {
    Module.print = (function(a) {
        process.stdout.write(a + "\n")
    }
    );
    Module.printErr = (function(a) {
        process.stderr.write(a + "\n")
    }
    );
    var caa = require("fs")
      , daa = require("path");
    Module.read = (function(a) {
        var a = daa.normalize(a)
          , d = caa.readFileSync(a).toString();
        !d && a != daa.resolve(a) && (a = path.join(__dirname, "..", "src", a),
        d = caa.readFileSync(a).toString());
        return d
    }
    );
    Module.load = (function(a) {
        eaa(read(a))
    }
    );
    Module.arguments || (Module.arguments = process.argv.slice(2))
}
baa && (Module.print = print,
"undefined" != typeof printErr && (Module.printErr = printErr),
Module.read = "undefined" != typeof read ? read : (function(a) {
    snarf(a)
}
),
Module.arguments || ("undefined" != typeof scriptArgs ? Module.arguments = scriptArgs : "undefined" != typeof arguments && (Module.arguments = arguments)));
sa && !va && (Module.print || (Module.print = (function(a) {
    console.log(a)
}
)),
Module.printErr || (Module.printErr = (function(a) {
    console.log(a)
}
)));
if (sa || va) {
    Module.read = (function(a) {
        var d = new XMLHttpRequest;
        d.open("GET", a, oa);
        d.send(na);
        return d.responseText
    }
    ),
    Module.arguments || "undefined" != typeof arguments && (Module.arguments = arguments)
}
va && (Module.print || (Module.print = pa()),
Module.load = importScripts);
!va && !sa && !qa && !baa && aa("Unknown runtime environment. Where are we?");
function eaa(a) {
    eval.call(na, a)
}
"undefined" == !Module.load && Module.read && (Module.load = (function(a) {
    eaa(Module.read(a))
}
