## key的作用
- 渲染列表数据时，会根据key进行索引；如果key发生变化，才会重新渲染，相反如果key不发生变化，就不会重新渲染，只会去渲染未被添加key的元素；因此使用key可以节省内存

### 当要同时启动后台服务，和前端服务的时候，我们可以使用concurrently模块。

- 预加载：提前加载
- 懒加载：先进去，进去之后，什么时候需要再重新请求，并不是请求完成之后再显示

### v-show和v-if的区别
v-show: css的切换隐藏；
v-if: 节点的删除和添加；先删除再添加，就相当于重新渲染，利用该特性，可以完成页面刷新的效果

### 推送到码云
- git push -u origin user(此时云端没有user分支)
- 把本地的user分支推送到云端仓库origin，同时以user分支来进行保存
origin: 云端仓库的别名
user: 云端仓库的user分支
- 如果云端已经有user分支，就直接用 git push
- git checkout -b rights 从master分支上创建出一个新的子分支