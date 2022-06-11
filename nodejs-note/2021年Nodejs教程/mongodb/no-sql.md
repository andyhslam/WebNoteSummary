# MongoDB

## 数据库常用命令

1. 运行 MongoDB 服务器

-   mongod --dbpath D:\MyProject\MongoDB\db

2. MongoDB 命令行管理 Shell

-   mongo

3. 查询当前数据库

-   db/db.getName()

4. 查询所有数据库

-   show dbs

5. 创建/切换数据库

-   use music

6. 删除数据库

-   db.dropDatabase()

## Collection 集合操作

1. 创建一个集合

-   db.createCollection("collName",{size:20,capped:true,max:100})
-   db.collName.isCapped() 判断集合是否为定容量

2. 得到当前 db 的所有集合

-   db.getCollectionNames()

## 添加、修改与删除集合数据

1. 添加

-   db.FeyWong.insertOne({songTitle: 'RedBean',release: '1999-5-1'})
-   db.FeyWong.insert([{songTitle: 'FleetingYear',release: '1999-6-1'},{songTitle: 'ZeroOfTheWorld',release: '1999-7-1'}])
-   db.FeyWong.save([{songTitle: 'Monsoon',release: '1999-8-1'},{songTitle: 'LikeTheWind',release: '1999-9-10'}])
-   db.FeyWong.insertOne({albumName:'Everything',release:'1990-6',circulation: 200000})

2. 修改

-   db.FeyWong.update({songTitle:'RedBean'}, {$set:{release:'1999-3-1'}}) 第一个参数表示修改的条件(即要修改哪条数据)；第二个参数表示要修改成什么内容；
-   db.FeyWong.update({songTitle:'RedBean'}, {$inc:{circulation:50000}},true,true) 第一个参数表示修改的条件；第二个参数表示对整型数据进行增值；第三个参数 true 表示如果没有该数据，就新建一条；第四个参数 true 表示凡是符合条件的数据都进行修改。

3. 删除

-   db.FeyWong.remove({songTitle: 'FleetingYear'})

4. 查询

-   db.FeyWong.find() 查询所有记录
-   db.FeyWong.distinct('songTitle') 查询去重后数据
-   db.FeyWong.find({songTitle: 'RedBean'}) 查询 songTitle='RedBean'的记录
-   db.FeyWong.find({songTitle: 'RedBean', circulation: 50000 }) 查询 songTitle='RedBean'、circulation=50000 的记录
-   db.FeyWong.find({release: {$gt: '1999-6-1'}}) 查询 release > '1999-6-1'的记录
-   db.FeyWong.find({release: {$gte: '1999-6-1'}}) 查询 release >= '1999-6-1'的记录
-   db.FeyWong.find({release: {$lt: '1999-6-1'}}) 查询 release < '1999-6-1'的记录
-   db.FeyWong.find({release: {$lte: '1999-6-1'}}) 查询 release <= '1999-6-1'的记录
-   db.FeyWong.find({release: {$lte: '1999-6-1'}}) 查询 release <= '1999-6-1'的记录
-   db.FeyWong.find({release: {$gte: '1999-6-1', $lte: '1999-8-1'}}) 查询 release >= '1999-6-1'并且 release <= '1999-8-1'的记录
-   db.FeyWong.find({songTitle:/r/i}) 查询 songTitle 中包含 r 的数据
-   db.FeyWong.find({songTitle:/^r/i}) 查询 songTitle 中以 r 开头的数据
-   db.FeyWong.find({},{songTitle:1, release:1}) 查询显示指定列 songTitle、release 的数据，1 指明显示
-   db.FeyWong.find({},{\_id:0, circulation:0}) 查询不显示指定列\_id、circulation 的数据，0 指明不显示
-   db.FeyWong.find({songTitle:/d$/},{songTitle:1, release:1}) 查询指定列 songTitle、release 的数据，并且 songTitle 以 d 结尾
-   db.FeyWong.find().sort({release: 1}) 按照 release 升序排序
-   db.FeyWong.find().sort({release: -1}) 按照 release 降序排序
-   db.FeyWong.find().limit(3) 查询前 3 条数据
-   db.FeyWong.find().skip(2) 查询 2 条以后的数据
-   db.FeyWong.find().limit(3).skip(2) 查询在 3-6 之间的数据
-   db.FeyWong.find().sort({release: -1}).limit(3).skip(1) sort 的优先级高
-   db.FeyWong.find().limit(3).skip(1).sort({release: -1}) sort 的优先级高
-   db.FeyWong.find({$or: [{songTitle : "Monsoon"}, {albumName : "Everything"}]}) or 与查询
-   db.FeyWong.findOne(); db.FeyWong.find().limit(1) 查询第 1 条数据
-   db.FeyWong.find().count() 查询某个结果集的记录条数
