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
UserControlle → UserServiceInterface
                ↑
                UserService → UserRepositoryInterface
                              ↑
                              UserRdbRepository
```
