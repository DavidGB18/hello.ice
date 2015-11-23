// **********************************************************************
//
// Copyright (c) 2003-2015 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6.1
//
// <auto-generated>
//
// Generated from file `Callback.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var Slice = Ice.Slice;

    var Example = __M.module("Example");

    Example.Callback = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Example::Callback",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Example.CallbackPrx = Slice.defineProxy(Ice.ObjectPrx, Example.Callback.ice_staticId, undefined);

    Slice.defineOperations(Example.Callback, Example.CallbackPrx,
    {
        "attach": [, , , , , , [[Ice.Identity]], , , , ]
    });
    exports.Example = Example;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : window.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : window));
