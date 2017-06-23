import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import 'assets/css/common.scss';
// import 'modules/app/demo.scss';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})

export class AppComponent {
	// 父子组件参数传递
	initialCount: number = 5;
}
