import { Commit } from 'vuex';
import * as func from '../function';
import api from '../../api/index';

const state: ModuleState = func.local.get() || {
  user: {},
  openId: '',
  unBindSuccess: '',

  // 由于微信会会加参数，前端路由匹配出问题，在这储存获取到的链接，方便跳转
  skipUrl: ''
};
interface ModuleState {
  user: object;
  openId: string;
  unBindSuccess: string;
  skipUrl: string;
}


const getters = {
  user: (state: ModuleState) => state.user,
  openId: (state: ModuleState) => state.openId,
  unBindSuccess: (state: ModuleState) => state.unBindSuccess,
  skipUrl: (state: ModuleState) => state.skipUrl
};

const actions = {
  async actionsUser({commit, state}: {commit: Commit, state: ModuleState}) {

    return api.login.getBindInfo();
  }
};

const mutations = {

  // 公共接口
  setUser(state: ModuleState, data: object) {
    state.user = data;
    func.local.set(state);
  },
  setOpenId(state: ModuleState, data: string) {
    state.openId = data;
    func.local.set(state);
  },
  setUnBindSucces(state: ModuleState, data: string) {
    state.unBindSuccess = data;
    func.local.set(state);
  },
  setSkipUrl(state: ModuleState, data: string) {
    state.skipUrl = data;
    func.local.set(state);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
