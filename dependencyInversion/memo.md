## 実行

`npx ts-node dependencyInversion/good.ts `

# 構成

## bad

```
UserController
↓
UserService
↓
UserRdbRepository
```

## good

```
UserController → UserServiceInterface
                ↑
                UserService → UserRepositoryInterface
                              ↑
                              UserRdbRepository
```
