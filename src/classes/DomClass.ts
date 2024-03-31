export class DomClass {
  element: HTMLElement | null

  constructor (name: string) {
    this.element = document.getElementById(name)
  }

  init (rendererDom: HTMLElement) {
    if (this.element) {
      this.element.appendChild(rendererDom)
    }
  }
}
