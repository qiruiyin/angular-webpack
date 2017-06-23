import { OnInit, Component, Input } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
	@Input()
	count: number = 0;

	title = '菜单测试';

	constructor () {
		console.log("菜单成功");
	}

	ngOnInit () {
		console.log(this.count);
	}
	
	onSelect(): void {
		console.log(1);
	}
}
