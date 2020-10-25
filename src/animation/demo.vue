<template>
  <div id="demo">
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition
      enter-active-class="enter-active-class"
      leave-active-class="leave-active-class"
    >
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true
    }
  }
}
</script>

<style lang="less" scoped>
#demo{
  padding-left: 100px;
}
</style>

<style lang="less" scoped>
// fade transition
.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter {
  opacity: 0;
  transform: translateX(2px) scale(6);
}
.fade-enter-to {

}
.fade-leave {

}
.fade-leave-to {
  opacity: 0;
  transform: translateX(2px) scale(6);
}
</style>

<style lang="less" scoped>
// animation 动画
.bounce-enter-active {
  animation: bounce 1s;
}
.bounce-leave-active {
  animation: bounce 1s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<style lang="less" scoped>
// 和animate.css 动画库
.enter-active-class {
  animation-duration: 10s;
  animation-fill-mode: both;
  animation-name: bounceOutRight;

}
.leave-active-class {
  animation-duration: 10s;
  animation-fill-mode: both;
  animation-name: tada;
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
  }
  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
  }
  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
</style>
