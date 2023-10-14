export default [
  {
    id: 1,
    title: '菜单1'
  },
  {
    id: 2,
    title: '菜单2',
    children: [
      {
        id: 21,
        title: '菜单2-1'
      },
      {
        id: 22,
        title: '菜单2-2',
        children: [
          {
            id: 221,
            title: '菜单2-2-1',
            children: [
              {
                id: 2211,
                title: '菜单2-2-1-1'
              },
              {
                id: 2212,
                title: '菜单2-2-1-2'
              },
              {
                id: 2213,
                title: '菜单2-2-1-3',
                children: [
                  {
                    id: 22131,
                    title: '菜单2-2-1-3-1'
                  },
                  {
                    id: 22132,
                    title: '菜单2-2-1-3-2'
                  },
                  {
                    id: 22133,
                    title: '菜单2-2-1-3-3'
                  },
                ]
              },
            ]
          },
          {
            id: 222,
            title: '菜单2-2-2'
          },
          {
            id: 223,
            title: '菜单2-2-3'
          },
        ]
      },
      {
        id: 23,
        title: '菜单2-3'
      }
    ]
  },
  {
    id: 3,
    title: '菜单3'
  }
]