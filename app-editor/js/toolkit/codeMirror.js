define(["jquery",
        '../../node_modules/codemirror/lib/codemirror',
        '../../node_modules/codemirror/addon/search/searchcursor',
        '../../node_modules/codemirror/addon/search/search',
        '../../node_modules/codemirror/addon/dialog/dialog',
        '../../node_modules/codemirror/addon/edit/matchbrackets',
        '../../node_modules/codemirror/addon/edit/closebrackets',
        '../../node_modules/codemirror/addon/comment/comment',
        '../../node_modules/codemirror/addon/wrap/hardwrap',
        '../../node_modules/codemirror/addon/fold/foldcode',
        '../../node_modules/codemirror/addon/fold/brace-fold',
        '../../node_modules/codemirror/mode/javascript/javascript',
        '../../node_modules/codemirror/keymap/sublime'
    ],
    function($, CodeMirror){
        var cm = {};
        var editor;
        cm.init = init;
        cm.setValue = setValue;
        cm.getValue = getValue;
        function init(){
            var value = "// The bindings defined specifically in the Sublime Text mode\nvar bindings = {\n";
            var dom = document.body.getElementsByTagName("codemirror")[0];
            var map = CodeMirror.keyMap.sublime;
            for (var key in map) {
                var val = map[key];
                if (key != "fallthrough" && val != "..." && (!/find/.test(val) || /findUnder/.test(val)))
                    value += "  \"" + key + "\": \"" + val + "\",\n";
            }
            value += "}\n\n// The implementation of joinLines\n";
            value += CodeMirror.commands.joinLines.toString().replace(/^function\s*\(/, "function joinLines(").replace(/\n  /g, "\n") + "\n";
            editor = CodeMirror(dom, {
                value: value,
                lineNumbers: true,
                mode: {name: "javascript", json: true},
                keyMap: "sublime",
                autoCloseBrackets: true,
                matchBrackets: true,
                showCursorWhenSelecting: true,
                theme: "monokai",
                tabSize: 2
            });
        }
        function setValue(value){
            editor.setValue(JSON.stringify(value, null, 2));
            setTimeout(delay);
            function delay(){
                editor.refresh();
            }
        }
        function getValue(){
            return editor.getValue();
        }
        return cm;
    }
);