import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import axios from 'axios'
import { Message } from 'view-ui-plus'

const useStore = defineStore('main', {
  state() {
    return {
      id: '' as string,
      isCollapsible: false as boolean,
      datetime: [
        dayjs().startOf('day').toDate(),
        dayjs().add(1, 'day').startOf('day').toDate(),
      ] as [Date, Date],
      stagelist: {} as { [key: string]: any },
      taglist: [] as Array<string>,
      skiplist: [] as Array<string>,
      isspin: false as boolean,
    }
  },
  getters: {
    tmstart(): number {
      return dayjs(this.datetime[0]).valueOf()
    },
    tmstop(): number {
      return dayjs(this.datetime[1]).valueOf()
    },
  },
  actions: {
    tmfoward() {
      let d1 = dayjs(this.datetime[0]).add(1, 'day').toDate()
      let d2 = dayjs(this.datetime[1]).add(1, 'day').toDate()
      this.datetime = [d1, d2]
    },
    today() {
      this.datetime = [
        dayjs().startOf('day').toDate(),
        dayjs().add(1, 'day').startOf('day').toDate(),
      ]
    },
    tmback() {
      let d1 = dayjs(this.datetime[0]).subtract(1, 'day').toDate()
      let d2 = dayjs(this.datetime[1]).subtract(1, 'day').toDate()
      this.datetime = [d1, d2]
    },
    onSearch() {
      if (this.id === '') {
        Message.error({
          content: 'ID为空！',
          duration: 2,
          background: true,
        })
      } else {
        this.isspin = true
        this.getstagedata()
        this.gettagdata()
        this.getskipdata()
        this.isspin = false
      }
    },
    async getstagedata() {
      await axios
        .get('http://114.116.41.110:4004/stagedata', {
          params: {
            sourceid: this.id,
          },
        })
        .then((res) => {
          this.stagelist = res.data.result
        })
    },
    async gettagdata() {
      await axios
        .get('http://114.116.41.110:4004/tagdata', {
          params: {
            sourceid: this.id,
            tmstart: this.tmstart,
            tmstop: this.tmstop,
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            let a = res.data.result
            this.taglist = a.splice(0, a.length - 2)
            console.log(111)
          } else {
            this.taglist = []
            console.log(111)
          }
        })
    },
    async getskipdata() {
      await axios
        .get('http://114.116.41.110:4004/skipdata', {
          params: {
            sourceid: this.id,
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.skiplist = res.data.result
          } else {
            this.skiplist = []
          }
          console.log(111)
        })
    },
  },
})

export { useStore }
