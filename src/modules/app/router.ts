import { AppComponent } from './app.component';
import { MenuComponent } from '../../components/menu/menu.component';

// 只是参考，在实际开发中请不要路由到公共组件
// 请配置所有的地址都是modules目录下的
export	const appRoutes = [
  	{ path: '', component: AppComponent },
  	{ path: 'menu', component: MenuComponent },
];

