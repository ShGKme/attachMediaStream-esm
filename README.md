# attachMediaStream ESM

> 📦 ESM build of `attachMediaStream` package

[attachmediastream](https://github.com/otalk/attachMediaStream) is a tiny browser module for attaching a media stream to a video (or audio) element with some options handling the differences between browsers.

Unfortunately, the original `attachmediastream` provides only CJS and AMD module, primary for **Browserify**:
- It doesn't directly work in ESM environment.
- It requires `webrtc-adapter` with issues around ESM-CJS interop, which requires additional configuration like `babel-plugin-add-module-exports`.
- In our environment, `AMD` doesn't work in Safari with no errors. Video and audio stream just don't work.

This package simply builds ESM version of the library with a direct ESM import of `webrtc-adapter`.

## Installing

```sh
npm install attachmediastream-esm
```

## Usage

```js
import attachMediaStream from 'attachmediastream-esm'
```

See details: https://github.com/otalk/attachMediaStream

## License

MIT
