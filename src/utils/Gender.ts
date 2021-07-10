import { GENDER } from "../values";

export function getColorGender(gender:GENDER) {
  switch (gender){
    case GENDER.CUSTOM: return '#F5B120';
    case GENDER.MEN:return '#24A8AF';
    case GENDER.WOMEN:return '#DE3576';
  }
}

export function getIconGender(gender:GENDER) {
  switch (gender){
    case GENDER.CUSTOM: return 'gender-male-female-variant';
    case GENDER.MEN:return 'gender-male';
    case GENDER.WOMEN:return 'gender-female';
  }
}
