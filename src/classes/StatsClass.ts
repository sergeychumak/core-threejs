import Stats from 'three/examples/jsm/libs/stats.module'

export class StatsClass {
  statsFPS: Stats // FPS − Frames rendered in the last second (0).
  statsMS: Stats // MS − Milliseconds needed to render a frame (1).
  statsMB: Stats // MB − MBytes of allocated memory (2) (Run Chrome with --enable-precise-memoryinfo)

  constructor () {
    this.statsFPS = new Stats()
    this.statsMS = new Stats()
    this.statsMB = new Stats()
  }

  init (): void {
    this.setPanelAndStyle([
      this.statsFPS,
      this.statsMS,
      this.statsMB
    ])

    document.body.appendChild(this.statsFPS.dom)
    document.body.appendChild(this.statsMS.dom)
    document.body.appendChild(this.statsMB.dom)
  }

  update (): void {
    this.statsFPS.update()
    this.statsMS.update()
    this.statsMB.update()
  }

  private setPanelAndStyle (stats: Stats[]): void {
    const offsetStep = 90
    let offset = 20
    stats.forEach((statsElement: Stats, index: number) => {
      offset = offset + (index === 0 ? 0 : offsetStep)
      statsElement.showPanel(index)
      statsElement.dom.style.cssText = `position:absolute;bottom:20px;left:${offset}px;z-index: 999`
    })
  }
}
