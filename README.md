# @apochromat/animation

[![][ci-badge]][ci-link] [![][version-badge]][version-link]
[![][license-badge]][license-link]

[ci-badge]:
  https://github.com/clebert/apochromat-animation/workflows/CI/badge.svg
[ci-link]: https://github.com/clebert/apochromat-animation
[version-badge]: https://badgen.net/npm/v/@apochromat/animation
[version-link]: https://www.npmjs.com/package/@apochromat/animation
[license-badge]: https://badgen.net/npm/license/@apochromat/animation
[license-link]:
  https://github.com/clebert/apochromat-animation/blob/master/LICENSE.md

Dynamic text animations for interactive command line apps.

## Installation

```
npm install @apochromat/animation --save
```

## Usage

```js
import {AnimationLens} from '@apochromat/animation';
import {print} from '@apochromat/print';
import {Lens} from 'apochromat';

const greeting = new Lens();
const spinner = new AnimationLens();

print(greeting);
greeting.render`Hello, World! ${spinner}`;
spinner.startAnimation(['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'], 80);
setTimeout(() => greeting.render`Hello, World!`, 2000);
```

```
Hello, World! ⠋
```

```
Hello, World! ⠴
```

```
Hello, World!
```

## Types

```ts
class AnimationLens extends Lens {
  startAnimation(frames: readonly string[], interval: number): () => void;
}
```

---

Copyright 2021 Clemens Akens. All rights reserved.
[MIT license](https://github.com/clebert/apochromat-animation/blob/master/LICENSE.md).
