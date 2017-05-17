# wxapp-storage
[![Build Status](https://travis-ci.org/axetroy/wxapp-storage.svg?branch=master)](https://travis-ci.org/axetroy/wxapp-storage)
[![Dependency](https://david-dm.org/axetroy/wxapp-storage.svg)](https://david-dm.org/axetroy/wxapp-storage)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/wxapp-storage.svg)](https://badge.fury.io/js/wxapp-storage)

Git Package Manager, make you manage the repository easier

## Installation
```bash
npm install @axetroy/wxapp-storage
```

## Features

- [x] 存储绝大多数的数据类型(微信原生对象只支持object/string)
- [x] 设置有存储时限
- [x] 优雅的API

## Usage

```javascript
// usage
import Storage from '@axetroy/wxapp-storage';
const store = new Storage(wx);

store.set('userinfo',{
  username: 'axetroy',
  age: 'Forever Young'
});

console.log(store.get('userinfo'));

```

## API

#### store.set(key:string, value:any, expiration:number):this

存储

#### store.get(key:string):any

#### store.remove(key:string):this

#### store.clear():this

## Contributing

```bash
git clone https://github.com/axetroy/wxapp-storage.git
cd ./wxapp-storage
yarn
```

You can flow [Contribute Guide](https://github.com/axetroy/wxapp-storage/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/wxapp-storage/blob/master/LICENSE)