# 5. 获取指定账户在对应链上一定高度范围内的交易信息(GetTransactions)

请求参数

:tada: :100:
           
| 参数名 | 类型 | 是否必须| 含义 |
| :------:| :------: | :------: | :------: |
| method | string | true | 调用的方法 |
| params | dict | true | 参数 |
  
params:
           
| 参数名 | 类型 | 是否必须| 含义 |
| :------:| :------: | :------: | :------: |
| chainId | string | true | 链id |
| address | string | true | 链地址 |
| startHeight | string | true | 查询的起始块高 |
| endHeight | string | true | 查询的截止块高 |


响应参数:
           
| 参数名 | 类型 | 是否必须| 含义 |
| :------:| :------: | :------: | :------: |
| chainId | string | true | 链id |
| height | int | true | 查询的起始块高 |
| from | string | true | 交易发起账户地址 |
| to | string | true | 交易接受账户地址 |
| nonce | int | true | 交易的发起者在之前进行过的交易数量 |
| value | int | true | 转账金额 |
| timestamp | int | true | 交易的时间戳 |
| input | string | true | 调用合约时的参数 |
| hash | string | true | 交易hash |


请求示例:
```
URL : test.thinkey.xyz
method : POST
request body :
{
"method": "GetTransactions",
"params": {"chainId":"2","address":"0x2c7536e3605d9c16a7a3d7b1898e529396a65c23", "startHeight":"50", "endHeight":"100"}
}
response:
[
{
"chainid": 2,
"from": "0x2c7536e3605d9c16a7a3d7b1898e529396a65c23",
"to": “0x0000000000000000000000000000000000020000”,
"nonce": 0,
"value": 0,
"input": "0x000000022c7536e3605d9c16a7a3d7b1898e529396a65c230000000000000000000000034fa1c4e6182b6b7f3bca273390cf587b50b4731100000000000456440101",
"hash": "0x0ea5dad47833fc6286357b6bd6c1a4e910def5f4432a1a59bde0f816c3dd18e0",
"timestamp": 1560425588
},
{
"chainid": 2,
"from": "0x2c7536e3605d9c16a7a3d7b1898e529396a65c23",
"to": "0x133c5bfef5d486052b061b44af113f20057341a8",
"nonce": 1,
"value": 0,
"input": "0xa9059cbb00000000000000000000000066261e3faf00ef1537b22f37d8db85f57066f58f0000000000000000000000000000000000000000000000000000000000004e20",
"hash": "0x1dbbda2d229db82ff12b3bea82d49225e6bebd645def4c06da157ddbe5660066",
"timestamp": 1560425596
}
]
```