!function(n,o,i){"use strict";var t=["dialogue","$timeout",function(t,n){return{restrict:"A",priority:600,templateUrl:"../partials/dialogue.html",link:function(i,n,o){t.onOpen=function(n){i.dialogBox=n},t.onClose=function(){i.dialogBox=void 0},t.onSetDisabled=function(n){i.dialogBox.fnlist[n].disabled=!0},t.onSetEnabled=function(n){i.dialogBox.fnlist[n].disabled=!1},t.onSetError=function(n,o){i.dialogBox.input[n].error=o}}}}];angular.module("ngAngularDialogue",[]).directive("dialogue",t).provider("dialogue",function(){this.$get=["$timeout",function(i){var t={open:function(n){i(function(){t.onOpen(n)})},close:function(){i(function(){t.onClose()})},setDisabled:function(n){i(function(){t.onSetDisabled(n)})},setEnabled:function(n){i(function(){t.onSetEnabled(n)})},setError:function(n,o){i(function(){t.onSetError(n,o)})}};return t}]})}(window);
//# sourceMappingURL=../../map/toolkit/angular-custom/angular-dialogue.js.map
