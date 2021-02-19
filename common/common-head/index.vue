<template>
  <div class="common-head-outer" :class="{ absolute, fixed: isFixed }">
    <header class="common-header" :class="{ ghost: isGhost, fixed: isFixed}">
      <div class="header middle-flex" :class="{ghost: isGhost}">
        <img
          src="https://img1.halobear.com/wedding/Fqxm1sbaD2fAkK4PNtAJLJ0htqpa.jpeg"
          alt
          class="logo"
        />
        <div class="nav-list flex">
          <div class="nav-item" v-for="item in navsList" :key="item.title">
            <router-link
              :to="item.to"
              class="nav-title"
              :class="{active: item.to.name == $route.name}"
            >{{ item.title}}</router-link>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    ghost: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: true
    },
    absolute: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFixed: false,
      navsList: [
        {
          title: '首页',
          to: { name: 'index' }
        },
        {
          title: '博客园',
          to: { name: 'blog' }
        },
        {
          title: '关于',
          to: { name: '' }
        }
      ]
    };
  },
  computed: {
    isGhost() {
      return this.ghost && !this.isFixed;
    }
  },
  mounted() {
    if (!this.fixed) return;
    window.addEventListener('scroll', this.scroll);
    this.scroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll);
  },
  methods: {
    scroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const newFixed = scrollTop > 500;
      if (this.isFixed !== newFixed) this.isFixed = newFixed;
    }
  }
};
</script>

<style lang="less" scoped>
.common-head-outer {
  height: 80px;
  position: relative;
  z-index: 199;
  &.absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
.common-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
  animation: fadeInDown linear 0.3s;
}
.common-header.ghost {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.22) 0%,
    rgba(0, 0, 0, 0.06) 55%,
    rgba(0, 0, 0, 0) 100%
  );
  border: none;
}

.header.ghost {
  .nav-title {
    color: #fff;
    opacity: 0.6;
    &.active {
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
  }
}

.header {
  height: 80px;
  padding: 0 60px;
  justify-content: space-between;
}
.logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.nav-item {
  margin-left: 30px;
  cursor: pointer;
}
.nav-title {
  color: #323038;
  font-size: 14px;
  font-weight: bold;
  opacity: 0.6;
  &.active {
    color: #323038;
    opacity: 1;
  }
  &:hover {
    color: #323038;
    opacity: 1;
  }
}
</style>