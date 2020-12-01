<template>
    <div class="progress-bar" ref="progressBar" @click="progressClick">
        <div class="bar-inner">
            <div class="progress" ref="progress"></div>
            <div class="progress-btn" ref="progressBtn" @mousedown.prevent="progressMouseDown"></div>
        </div>
    </div>
</template>

<script>
  import { throttle } from 'common/js/util'

  const progressBtnWidth = 10

  export default {
    name: 'progress-bar',
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    created () {
      this.click = {}
    },
    methods: {
      progressMouseDown (e) {
        this.click.initiated = true
        this.click.startX = e.pageX
        this.click.left = this.$refs.progress.clientWidth
        document.onmousemove = this.throttle(e => {
          if (!this.click.initiated) {
            return
          }
          const deltaX = e.pageX - this.click.startX
          const offsetWidth = Math.min(this.$refs.progressBar.clientWidth, Math.max(0, this.click.left + deltaX))
          this._offset(offsetWidth)
        }, 20)
        document.onmouseup = () => {
          document.onmousemove = document.onmouseup = null
          this.click.initiated = false
          this._triggerPercent()
        }
      },
      progressClick (e) {
        console.log('click')
        const rect = this.$refs.progressBar.getBoundingClientRect()
        const offsetWidth = e.pageX - rect.left
        this._offset(offsetWidth)
        this._triggerPercent()
      },
      _offset (offsetWidth) {
        this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth - progressBtnWidth / 2}px, -50%, 0)`
      },
      _triggerPercent () {
        const barWidth = this.$refs.progressBar.clientWidth
        const percent = this.$refs.progress.clientWidth / barWidth
        this.$emit('percentChange', percent)
      },
      throttle
    },
    watch: {
      percent (newPercent) {
        if (newPercent > 0) {
          const barWidth = this.$refs.progressBar.clientWidth
          const offsetWidth = newPercent * barWidth
          this._offset(offsetWidth)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .progress-bar
        width 100%
        height 10px
        position relative
        cursor pointer
        .bar-inner
            width 100%
            height 4px
            background $color-border
            border-radius 2px
            position absolute
            top 50%
            transform translateY(-50%)
            .progress
                position absolute
                height 100%
                background-color $color-background
            .progress-btn
                width 10px
                height @width
                border-radius 50%
                background-color $color-background
                position absolute
                left 0
                top 50%
                transform translate3d(-50%, -50%, 0)
                opacity 0
        &:hover
            .bar-inner
                height 6px
                border-radius 3px
            .progress-btn
                opacity 1
</style>
