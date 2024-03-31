import * as THREE from 'three'

export class SceneClass {
  scene: THREE.Scene

  constructor (name: string, background: string) {
    this.scene = new THREE.Scene()
    this.scene.name = name
    this.scene.background = new THREE.Color(background)
  }

  init () {
    this.initLights()
  }

  clearScenes () {
    this.scene.clear()
  }

  initLights () {
    const zPos = 100
    const light1 = new THREE.DirectionalLight()
    light1.position.set(0, 0, zPos)
    this.scene.add(light1)
  }
}
