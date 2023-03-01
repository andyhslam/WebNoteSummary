export interface ChinaAdd {
  confirm: number;
  heal: number;
  nowSevere: number;
  importedCase: number;
  noInfect: number;
  dead: number;
  nowConfirm: number;
  suspect: number;
  localConfirm: number;
  noInfectH5: number;
  localConfirmH5: number;
}

export interface ShowAddSwitch {
  noInfect: boolean;
  localConfirm: boolean;
  heal: boolean;
  importedCase: boolean;
  suspect: boolean;
  dead: boolean;
  nowConfirm: boolean;
  nowSevere: boolean;
  localinfeciton: boolean;
  all: boolean;
  confirm: boolean;
}

export interface Today {
  confirm: number;
  isUpdated: boolean;
}

export interface Total {
  nowConfirm: number;
  confirm: number;
  dead: number;
  showRate: boolean;
  heal: number;
  showHeal: boolean;
  wzz: number;
  provinceLocalConfirm: number;
}

export interface Today {
  wzz_add: number;
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  tip: string;
}

export interface Total {
  showHeal: boolean;
  wzz: number;
  provinceLocalConfirm: number;
  nowConfirm: number;
  confirm: number;
  dead: number;
  showRate: boolean;
  heal: number;
}

export interface Today {
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
}

export interface Total {
  showHeal: boolean;
  wzz: number;
  provinceLocalConfirm: number;
  nowConfirm: number;
  confirm: number;
  dead: number;
  showRate: boolean;
  heal: number;
}

export interface Children {
  name: string;
  today: Today;
  total: Total;
}

export interface Children {
  today: Today;
  total: Total;
  children: Children[];
  name: string;
}

export interface AreaTree {
  name: string;
  today: Today;
  total: Total;
  children: Children[];
}

export interface ChinaTotal {
  dead: number;
  nowConfirm: number;
  showLocalConfirm: number;
  noInfectH5: number;
  localConfirmH5: number;
  confirm: number;
  nowSevere: number;
  importedCase: number;
  heal: number;
  suspect: number;
  noInfect: number;
  showlocalinfeciton: number;
  localConfirm: number;
  local_acc_confirm: number;
}

export interface Diseaseh5Shelf {
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
  areaTree: AreaTree[];
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
}

export interface StatisGradeCityDetail {
  confirm: number;
  syear: number;
  province: string;
  city: string;
  nowConfirm: number;
  confirmAdd: number;
  sdate: string;
  dead: number;
  heal: number;
  grade: string;
  date: string;
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf;
  statisGradeCityDetail: StatisGradeCityDetail[];
}