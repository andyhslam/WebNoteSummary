import axios from './request'

export function getNavData(){
    return axios({
        method:'get',
        url:'get_navData'
    })
}
