export default class AnimationUtils {
  static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static getElement(selector: string): HTMLElement {
    return document.querySelector(selector) as HTMLElement;
  }
}