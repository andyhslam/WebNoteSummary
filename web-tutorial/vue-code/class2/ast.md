```js
function fn(a, b) {}
```

<!-- 通过树形结构描述出fn函数：先把源代码变成树结构，再通过其它代码改变优化树结构，最后形成源代码 -->

```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "fn"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": []
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
}
```

```json
{
  "tag": "div",
  "type": 1,
  "attrs": [
    { "name": "id", "value": "app" },
    { "name": "style", "value": { "color": "red", "font-size": "20px" } }
  ],
  "children": [
    {
      "type": 3,
      "text": "hello {{name}}"
    },
    {
      "tag": "h1",
      "type": 1,
      "attrs": null,
      "children": [
        {
          "type": 3,
          "text": "{{name}}"
        }
      ]
    },
    {
      "tag": "ul",
      "type": 1,
      "attrs": null,
      "children": [
        {
          "tag": "li",
          "type": 1,
          "attrs": [{ "name": "style", "value": { "color": "green" } }],
          "children": [
            {
              "type": 3,
              "text": "{{age}}"
            }
          ]
        },
        {
          "tag": "li",
          "type": 1,
          "attrs": null,
          "children": [
            {
              "type": 3,
              "text": "{{info.job}}"
            }
          ]
        }
      ]
    }
  ]
}
```

## 先把源代码转成 AST 树进行解释，再转化成最终的源代码的例子，说到底就是字符串拼接

- webpack 打包：import -> require()
- ts -> js
- eslint
