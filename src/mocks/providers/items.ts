import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/vacation-sample/item1.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "美国佩奇羚羊峡谷+马蹄湾一日游【中文团+拉斯维加斯出发】",
        "profilePic": "assets/img/vacation-sample/item1.jpg",
        "about": "酒店接送，全程中文导游陪同，超值享受探秘羚羊谷，欣赏仿佛在流淌的砂岩，感受光影交织的美丽俯瞰科罗拉多河，马蹄形的U型河道，如油画般绚丽"
      },
      {
        "name": "【9元换购萤火虫夜游/主题公园门票】黄金海岸日出热气球之旅（酒庄香槟早餐可选）",
        "profilePic": "assets/img/vacation-sample/item2.jpg",
        "about": "在如画的田野上乘热气球轻轻随风飘行，看日出的光芒投向大地. 免费获取飞行证书，参与打包热气球，在酒庄享用丰盛的香槟早餐.黄金海岸市区酒店往返接送，方便你的出行"
      },
      {
        "name": "芽庄三岛豪华快艇/特色木船一日游（中文导游+拼车接送含午餐，浮潜/深潜可选）",
        "profilePic": "assets/img/vacation-sample/item3.jpg",
        "about": "全程中文导游服务，专车和快艇接送，可能遇见导游“越南林更新.这里是芽庄的潜水胜地，可以看见芽庄最美的碧海蓝天，和小鱼亲密互动，遇见最美的珊瑚"
      },
      {
        "name": "日本九州4日跟团游(4钻)·【限时2999】A线纯玩+3晚连住 B线希尔顿",
        "profilePic": "assets/img/vacation-sample/item4.jpg",
        "about": "长崎（Nagasaki），是日本九州岛西岸著名港市，长崎县首府。长崎市位于日本的西端，与我国上海相隔仅800公里，自古以来就是沟通中国与日本的桥梁。长崎市是日本锁国时代少数对外开放的港口之一，是一个交通枢纽城市，英国、葡萄牙、荷兰都是通过它与日本有了密切的往来。长崎与朝鲜半岛也有很深的渊源。长崎也是继广岛之后世界上第二个被原子弹毁灭的城市。"
      },
      {
        "name": "湖州2日自由行(5钻)·【自助晚餐+温泉】住湖州喜来登+可加选套餐 ",
        "profilePic": "assets/img/vacation-sample/item5.jpg",
        "about": "中国第一家水上白金七星酒店，与迪拜帆船酒店齐名，再赠五重礼包，尊贵尊享赏月泡温泉,品味自助早晚餐,另可购买游古木博物馆,玩陶艺,品三款湖州产贡茶.购买整个套餐价，就可享受温泉、自助早晚餐，相当于花一间房的钱。"
      },
      {
        "name": "【城市观光 自由行首选】香港水晶巴士观光美食游【荣获米芝莲推荐地道点心餐】（可选午餐团/晚餐团/夜游团）",
        "profilePic": "assets/img/vacation-sample/item6.jpg",
        "about": "9月特惠，夜游香港璀璨夜景！置身于十多万粒Swarovski 水晶的车厢中，同时享受米芝连及Tripadvisor推荐点心餐！只需2.5小时就能游览香港20多个代表性景点，推荐上层观光更佳！"
      },
      {
        "name": "上海龙之梦大酒店（贵宾房＋双人冰淇淋火锅）",
        "profilePic": "assets/img/vacation-sample/item7.jpg",
        "about": "双人冰淇淋火锅” 2位，酒店大堂吧1楼，营业时间：10:00am-21:00pm “冰淇淋火锅”使用时间：12:00pm-21:00pm免费健身：酒店26楼健身中心（6:00-23:00）免费游泳：酒店26楼无边泳池 6:00-23:00 （温馨"
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
