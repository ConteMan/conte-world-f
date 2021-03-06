<template>
  <div class="layout-container">
    <div class="base-container" :style="{ 'max-width': layoutWidth, width: layoutWidth }">
      <template v-if="sideShow">
        <div ref="sideDom" class="side-container" :style="{ width: sideWidth + 'px' }">
          <sidebar />
        </div>
        <div ref="moveDom" class="touch-div">
          <span></span>
        </div>
      </template>

      <a-drawer
        placement="left"
        wrapClassName="sidebar-drawer"
        width="40%"
        :closable="false"
        :visible="menuStatus && isDrawer"
        @close="drawerClose"
      >
        <sidebar />
      </a-drawer>

      <div ref="content-container" class="content-container">
        <a-affix class="affix" :offset-top="0" :target="contentContainerRef">
          <content-header class="content-header" />
        </a-affix>
        <router-view class="router-container" :class="{ 'header-pin': headerPin }" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from '@/layout/components/ContentHeader';
import Sidebar from '@/components/header/Sidebar';

import { mixin } from '@/utils/mixin';
import { mapMutations } from 'vuex';
import * as MT from '@/store/mutation-types';

export default {
  name: 'BaseLayout',
  components: {
    ContentHeader,
    Sidebar,
  },
  mixins: [mixin],
  beforeRouteLeave(to, from, next) {
    if (this.isDrawer) {
      this.menuAction(false);
    }
    next();
  },
  data() {
    return {
      timer: false,
      drawerVisible: false,

      sideWidth: 300,
      sideMaxWidth: 500,
      sideMinWidth: 220,
      clientStartX: 0,

      scrollTop: 0,
    };
  },
  
  computed: {
    isDrawer: function() {
      return this.isMobile;
    },
    sideShow: function() {
      return !this.isMobile && this.menuStatus;
    },
    layoutWidth: function() {
      return this.layoutMode === 'static' ? this.$config.staticWidth + 'px' : '100%';
    },
    contentContainerRef: function() {
      return this.$refs['content-container'];
    }
  },
  watch: {
    sideShow(target) {
      if (target) {
        // sure the side dom exist
        this.$nextTick(() => {
          this.dragControllerDeal();
        });
      }
    },
    '$route': 'deal'
  },
  created() {
    window.addEventListener('resize', () => {
      if (!this.timer) {
        this.timer = true;
        setTimeout(
          () => {
            this.setContentHeight();
            this.timer = false;
          }, 400);
      }
    }, false);
    window.addEventListener('scroll', this.throttle(this.scrollDeal, 200), true);
  },
  mounted() {
    if (this.sideShow) {
      this.dragControllerDeal();
    }
    this.setContentHeight();
  },
  methods: {
    ...mapMutations('app', {
      menuAction: MT.MENU_STATUS,
      contentHeightAction: MT.CONTENT_HEIGHT,
    }),
    drawerClose() {
      this.menuAction(false);
    },
    dragControllerDeal() {
      const moveDom = this.$refs.moveDom;
      moveDom.onmousedown = e => {
        this.clientStartX = e.clientX;
        e.preventDefault();
        document.onmousemove = e => {
          this.moveHandle(e.clientX);
        };

        document.onmouseup = e => {
          document.onmouseup = null;
          document.onmousemove = null;
        };
      };
    },
    moveHandle(nowClientX) {
      const computedX = nowClientX - this.clientStartX;
      let changeWidth = this.sideWidth + computedX;

      if (changeWidth < this.sideMinWidth) {
        changeWidth = this.sideMinWidth;
      }

      if (changeWidth > this.sideMaxWidth) {
        changeWidth = this.sideMaxWidth;
      }
      this.sideWidth = changeWidth;
      this.clientStartX = nowClientX;
    },
    setContentHeight() {
      const contentDom = document.querySelector('.content-container');
      const height = window.getComputedStyle(contentDom).getPropertyValue('height');
      this.contentHeightAction(parseInt(height, 10));
    },
    scrollDeal(event) {
      const className = event.target.className;
      const classes = className ? className.split(' ') : [];
      if (classes.includes('infinite-list') && !this.headerPin) {
        this.scrollHandle(event);
      }
    },
    // 滚动处理
    scrollHandle(event) {
      const headerHeight = this.$config.headerHeight;
      const headerHideHeight = this.$config.headerHideHeight;
      const show = this.headerHeight === headerHeight;
      const currentScrollTop = event.target.scrollTop;
      if (!show) {
        if (currentScrollTop - headerHeight <= 0 || currentScrollTop < this.scrollTop) {
          this.headerHeightAction(headerHeight);
        }
      } else {
        if (currentScrollTop > this.scrollTop && currentScrollTop - headerHeight > 0) {
          this.headerHeightAction(headerHideHeight);
        }
      }
      this.scrollTop = currentScrollTop;
    },
    throttle(fn, interval = 300) {
      let canRun = true;
      return function() {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
          // eslint-disable-next-line no-invalid-this
          fn.apply(this, arguments);
          canRun = true;
        }, interval);
      };
    },
    deal() {
      this.scrollTop = 0;
    },
  },
};
</script>

<style scoped lang="less">
@import './index.less';
</style>
