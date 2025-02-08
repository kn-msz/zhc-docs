import { Component } from 'vue'
import VPDemo from './components/VPDemo.vue'
import ApiTyping from './components/globals/vp-api-typing.vue'


export const globals: [string, Component][] = [
    ['Demo', VPDemo],
    ['ApiTyping', ApiTyping],
]
