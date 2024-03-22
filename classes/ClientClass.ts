// import { eventsService } from '@/services/EventsService'
// import { ENUM_EVENTS, type TypeOnWindowResizeProps } from '@/types'

export class ClientClass {
  clientWidth: number
  clientHeight: number

  constructor () {
    this.clientWidth = window.innerWidth || 0
    this.clientHeight = window.innerHeight || 0

    window.addEventListener('resize', () => {
      this.update()

      // eventsService.trigger<TypeOnWindowResizeProps>(ENUM_EVENTS.onWindowResize, {
      //   clientWidth: this.clientWidth,
      //   clientHeight: this.clientHeight
      // })
    })
  }

  update (): void {
    this.clientWidth = window.innerWidth || 0
    this.clientHeight = window.innerHeight || 0
  }
}
