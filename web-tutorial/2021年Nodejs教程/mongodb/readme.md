# MongoDB是什么

- MongoDB是一个基于分布式文件存储的数据库。由C++语言编写，旨在为WEB应用提供可扩展的高性能数据存储解决方案。
- 它的特点：高性能、易部署、易使用，存储数据非常方便。

## MongoDB术语/概念

| SQL术语/概念   | MongoDB术语/概念   | 解释/说明                                  |
| :-----------: | :---------------: | -------------------------------------------|
|   database    |     database      | 数据库                                      |
|     table     |    collection     | 数据库表/集合                                |
|      row      |     document      | 数据记录行/文档                              |
|    column     |       field       | 数据字段/域                                  |
|     index     |       index       | 索引                                        |
|  table joins  |                   | 表连接，MongoDB不支持(MongoDB不支持多表查询)  |
|  primary key  |    primary key    | 主键，MongoDB自动将_id字段设置为主键          |


## Mongoose
- 它是nodejs操作数据库的驱动程序。(http://www.mongoosejs.net/docs/guide.html)