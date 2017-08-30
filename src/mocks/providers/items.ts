import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "mainPic": "assets/img/vacation-sample/item1.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let pictures = ["assets/img/vacation-sample/item1.jpg",
    "assets/img/vacation-sample/item2.jpg",
    "assets/img/vacation-sample/item3.jpg",
    "assets/img/vacation-sample/item4.jpg",
    "assets/img/vacation-sample/item5.jpg",
    "assets/img/vacation-sample/item6.jpg",
    "assets/img/vacation-sample/item7.jpg",];


    
    let items = [
      {
        "name": "美国佩奇羚羊峡谷+马蹄湾一日游【中文团+拉斯维加斯出发】",
        "mainPicture": "assets/img/vacation-sample/item1.jpg",
        "allPictures":pictures,
        "oldPrice":"2000/人",
        "newPrice":"1000/人",
        "leftDays":"1天",
        "about": "   ❤ 拥有蓝色的泻湖和仿似白砂糖般的天然白沙滩	<br>❤ 专业潜水设备，拥有马尔代夫第二大的潜水中心，丰富的水上运动	<br>❤ 全岛覆盖免费wifi，大岛，私密性好	<br>❤ 世界著名的“英国忠诚舰残骸址” 	<br>"
      },
      {
        "name": "【9元换购萤火虫夜游/主题公园门票】黄金海岸日出热气球之旅（酒庄香槟早餐可选）",
        "mainPicture": "assets/img/vacation-sample/item2.jpg",
        "allPictures":pictures,
        "oldPrice":"3888/人",
        "newPrice":"2999/人",
        "leftDays":"2天",
        "about": "   ❤ 拥有蓝色的泻湖和仿似白砂糖般的天然白沙滩	<br>❤ 专业潜水设备，拥有马尔代夫第二大的潜水中心，丰富的水上运动	<br>❤ 全岛覆盖免费wifi，大岛，私密性好	<br>❤ 世界著名的“英国忠诚舰残骸址” 	<br>"
      },
      {
        "name": "芽庄三岛豪华快艇/特色木船一日游（中文导游+拼车接送含午餐，浮潜/深潜可选）",
        "mainPicture": "assets/img/vacation-sample/item3.jpg",
        "allPictures":pictures,
        "oldPrice":"6999/人",
        "newPrice":"5999/人",
        "leftDays":"3天",
        "about": "   ❤ 拥有蓝色的泻湖和仿似白砂糖般的天然白沙滩	<br>❤ 专业潜水设备，拥有马尔代夫第二大的潜水中心，丰富的水上运动	<br>❤ 全岛覆盖免费wifi，大岛，私密性好	<br>❤ 世界著名的“英国忠诚舰残骸址” 	<br>"
      },
      {
        "name": "日本九州4日跟团游(4钻)·【限时2999】A线纯玩+3晚连住 B线希尔顿",
        "mainPicture": "assets/img/vacation-sample/item4.jpg",
        "allPictures":pictures,
        "oldPrice":"888/人",
        "newPrice":"666/人",
        "leftDays":"4天",
        "about": "   ❤ 拥有蓝色的泻湖和仿似白砂糖般的天然白沙滩	<br>❤ 专业潜水设备，拥有马尔代夫第二大的潜水中心，丰富的水上运动	<br>❤ 全岛覆盖免费wifi，大岛，私密性好	<br>❤ 世界著名的“英国忠诚舰残骸址” 	<br>"
      },
      {
        "name": "湖州2日自由行(5钻)·【自助晚餐+温泉】住湖州喜来登+可加选套餐 ",
        "mainPicture": "assets/img/vacation-sample/item5.jpg",
        "allPictures":pictures,
        "oldPrice":"899/人",
        "newPrice":"788/人",
        "leftDays":"5天",
        "about": "   ❤ 拥有蓝色的泻湖和仿似白砂糖般的天然白沙滩	<br>❤ 专业潜水设备，拥有马尔代夫第二大的潜水中心，丰富的水上运动	<br>❤ 全岛覆盖免费wifi，大岛，私密性好	<br>❤ 世界著名的“英国忠诚舰残骸址” 	<br>"
      },
      {
        "name": "【城市观光 自由行首选】香港水晶巴士观光美食游【荣获米芝莲推荐地道点心餐】（可选午餐团/晚餐团/夜游团）",
        "mainPicture": "assets/img/vacation-sample/item6.jpg",
        "allPictures":pictures,
        "oldPrice":"999/人",
        "newPrice":"879/人",
        "leftDays":"6天",
        "about": "   ❤ 拥有蓝色的泻湖和仿似白砂糖般的天然白沙滩	<br>❤ 专业潜水设备，拥有马尔代夫第二大的潜水中心，丰富的水上运动	<br>❤ 全岛覆盖免费wifi，大岛，私密性好	<br>❤ 世界著名的“英国忠诚舰残骸址” 	<br>"
      },
      {
        "name": "上海龙之梦大酒店（贵宾房＋双人冰淇淋火锅）",
        "mainPicture": "assets/img/vacation-sample/item7.jpg",
        "allPictures":pictures,
        "oldPrice":"567/人",
        "newPrice":"123/人",
        "leftDays":"7天",
        "about": "   ❤ 拥有蓝色的泻湖和仿似白砂糖般的天然白沙滩	<br>❤ 专业潜水设备，拥有马尔代夫第二大的潜水中心，丰富的水上运动	<br>❤ 全岛覆盖免费wifi，大岛，私密性好	<br>❤ 世界著名的“英国忠诚舰残骸址” 	<br>"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
