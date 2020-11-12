import Vue from 'vue';
import {
  Button,
  Overlay,
  Toast,
  Popup,
  Notify,
  Tab,
  Tabs,
  Tag,
  NoticeBar,
  Icon ,
  Divider ,
  Lazyload,
  Image,
  Loading ,
  Empty ,
  Dialog 

} from 'vant';
Vue.use(Button);
Vue.use(Overlay);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(Notify);
Vue.use(NoticeBar);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Dialog);
Vue.use(Empty);



// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
})
