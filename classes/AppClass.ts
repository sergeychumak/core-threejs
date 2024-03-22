export class AppClass {
  app2: HTMLElement | null
  app3: HTMLElement | null

  constructor (name2: string, name3: string) {
    this.app2 = document.getElementById(name2) as HTMLElement | null
    this.app3 = document.getElementById(name3) as HTMLElement | null
  }

  appendChild (to: HTMLElement, element: HTMLElement): void {
    to.appendChild(element)
  }
}
