import { TYPE } from "../Utils/Values/enum";

export default class NewsPost {
  uuid: string;
  latitude: number;
  longitude: number;
  avatar: string;
  label: string;
  type: TYPE;
  duration: Date;
  content: string;
  image: string | undefined;
  image_height: number | undefined;
  nickname: string;
  view: number;
  share: number;
  notice: number;
  name: string | undefined;
  create_ts: Date;


  constructor(uuid: string,latitude: number, longitude: number, avatar: string, label: string, type: TYPE, duration: Date, content: string, nickname: string, view: number, share: number, notice: number, create_ts: Date, name?: string, image?: string,image_height?:number) {
    this.uuid = uuid;
    this.latitude = latitude;
    this.longitude = longitude;
    this.avatar = avatar;
    this.label = label;
    this.type = type;
    this.duration = duration;
    this.content = content;
    this.image = image;
    this.nickname = nickname;
    this.view = view;
    this.share = share;
    this.notice = notice;
    this.create_ts = create_ts;
    this.name = name;
    this.image_height = image_height;
  }
}
