import * as THREE from 'three'

export class RendererClass {
  renderer2: THREE.WebGLRenderer
  renderer3: THREE.WebGLRenderer

  renderer2Dom: HTMLElement
  renderer3Dom: HTMLElement

  constructor (containerWidth: number, containerHeight: number) {
    this.renderer2 = new THREE.WebGLRenderer({ antialias: false })
    this.renderer3 = new THREE.WebGLRenderer({ antialias: true })

    this.renderer2Dom = this.renderer2.domElement
    this.renderer3Dom = this.renderer3.domElement

    this.setSize(containerWidth, containerHeight)

    this.renderer2.setPixelRatio(window.devicePixelRatio * 1)
    this.renderer3.setPixelRatio(window.devicePixelRatio * 1)
  }

  setSize (containerWidth: number, containerHeight: number) {
    this.renderer2.setSize(containerWidth, containerHeight)
    this.renderer3.setSize(containerWidth, containerHeight)
  }
}
