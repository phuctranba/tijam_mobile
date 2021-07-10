import { moderateScale } from "react-native-size-matters";
import { COLOR_TYPE, ICON_TYPE } from "./enum";

export const DATA_TYPE_POST_HOME=[
  {
    title:'Giao thông',
    icon:ICON_TYPE.TRAFFIC,
    typeIcon:'MaterialCommunityIcons',
    color:COLOR_TYPE.TRAFFIC,
    sizeIcon:moderateScale(17,0.3)
  },
  {
    title:'Tình cảm',
    icon:'cards-heart',
    typeIcon:'MaterialCommunityIcons',
    color:COLOR_TYPE.AFFECTION,
    sizeIcon:moderateScale(17,0.3)
  },
  {
    title:'Ẩm thực',
    icon:ICON_TYPE.CUISINE,
    typeIcon:'MaterialCommunityIcons',
    color:COLOR_TYPE.CUISINE,
    sizeIcon:moderateScale(17,0.3)
  },
  {
    title:'Tâm linh',
    icon:ICON_TYPE.SPIRITUALITY,
    typeIcon:'MaterialCommunityIcons',
    color:COLOR_TYPE.SPIRITUALITY,
    sizeIcon:moderateScale(17,0.3)
  },
  {
    title:'Học đường',
    icon:ICON_TYPE.SCHOOL,
    typeIcon:'MaterialCommunityIcons',
    color:COLOR_TYPE.SCHOOL,
    sizeIcon:moderateScale(17,0.3)
  },
  {
    title:'Sức khỏe',
    icon:ICON_TYPE.HEALTH,
    typeIcon:'MaterialCommunityIcons',
    color:COLOR_TYPE.HEALTH,
    sizeIcon:moderateScale(17,0.3)
  },
]
