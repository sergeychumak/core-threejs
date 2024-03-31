import * as THREE from 'three'

export class RendererClass {
  renderer: THREE.WebGLRenderer

  rendererDom: HTMLElement

  constructor (containerWidth: number, containerHeight: number) {
    this.renderer = new THREE.WebGLRenderer({ antialias: false })
    this.rendererDom = this.renderer.domElement
    this.setSize(containerWidth, containerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio * 1)
  }

  setSize (containerWidth: number, containerHeight: number) {
    this.renderer.setSize(containerWidth, containerHeight)
  }
}
