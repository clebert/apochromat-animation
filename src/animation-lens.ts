import {Lens} from 'apochromat';

export class AnimationLens extends Lens {
  #stopAnimation?: () => void;

  startAnimation(frames: readonly string[], interval: number): () => void {
    this.#stopAnimation?.();

    let index = 0;

    const renderNext = () => {
      this.render`${frames[index < frames.length ? index : (index = 0)] ?? ''}`;

      index += 1;
    };

    const intervalId = setInterval(renderNext, interval);

    renderNext();

    const unsubscribe = this.subscribe((event) => {
      if (event === 'detach') {
        unsubscribe();
        clearInterval(intervalId);
      }
    });

    return (this.#stopAnimation = () => {
      unsubscribe();
      clearInterval(intervalId);
    });
  }
}
