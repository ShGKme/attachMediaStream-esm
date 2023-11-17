import require$$0 from 'webrtc-adapter';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var adapter = require$$0;

var attachmediastream = function (stream, el, options) {
    var item;
    var element = el;
    var opts = {
        autoplay: true,
        mirror: false,
        muted: false,
        audio: false,
        disableContextMenu: false
    };

    if (options) {
        for (item in options) {
            opts[item] = options[item];
        }
    }

    if (!element) {
        element = document.createElement(opts.audio ? 'audio' : 'video');
    } else if (element.tagName.toLowerCase() === 'audio') {
        opts.audio = true;
    }

    if (opts.disableContextMenu) {
        element.oncontextmenu = function (e) {
            e.preventDefault();
        };
    }

    if (opts.autoplay) element.autoplay = 'autoplay';
    element.muted = !!opts.muted;
    if (!opts.audio) {
        ['', 'moz', 'webkit', 'o', 'ms'].forEach(function (prefix) {
            var styleName = prefix ? prefix + 'Transform' : 'transform';
            element.style[styleName] = opts.mirror ? 'scaleX(-1)' : 'scaleX(1)';
        });
    }

    if (adapter.browserDetails.browser === 'safari') {
        element.setAttribute('playsinline', true);
    }

    element.srcObject = stream;
    return element;
};

var attachmediastream$1 = /*@__PURE__*/getDefaultExportFromCjs(attachmediastream);

export { attachmediastream$1 as default };
