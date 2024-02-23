export default {
    style: `
        .tooltip-container {
          position: relative;
          display: inline-block;
        }

        .tooltip-content {
          position: absolute;
          background-color: black;
          color: white;
          padding: 5px;
          border-radius: 4px;
          white-space: nowrap;
          z-index: 1000;
        }
    `,
    template: `
        .tooltip-container 
            
  <div class="tooltip-container" @mouseover="show = true" @mouseleave="show = false">
    <slot name="display">
      <span>{{ display }}</span>
    </slot>
    <div v-if="show" class="tooltip-content" :style="tooltipStyle">
      <slot>{{ content }}</slot>
    </div>
  </div>
    `,
    name: 'v-tooltip',
  props: {
    content: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'S',
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    tooltipStyle() {
      switch (this.direction) {
        case 'N':
          return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
        case 'NE':
          return { bottom: '100%', left: '100%' };
        case 'E':
          return { left: '100%', top: '50%', transform: 'translateY(-50%)' };
        case 'SE':
          return { top: '100%', left: '100%' };
        case 'S':
          return { top: '100%', left: '50%', transform: 'translateX(-50%)' };
        case 'SW':
          return { top: '100%', right: '100%' };
        case 'W':
          return { right: '100%', top: '50%', transform: 'translateY(-50%)' };
        case 'NW':
          return { bottom: '100%', right: '100%' };
      }
    }
  },
}
