var user = {
  name: '毛晓彤',
  birth: '1990-6-1',
}

observe(user)

// 显示姓氏
function showFirstName () {
  document.querySelector('#firstName').textContent = '姓：' + user.name[0]
}

// 显示名字
function showLastName () {
  document.querySelector('#lastName').textContent = '名：' + user.name.slice(1)
}

// 显示年龄
function showAge () {
  document.querySelector('#age').textContent = '出生日期：' + user.birth
}

autoRun(showFirstName)
autoRun(showLastName)
autoRun(showAge)
