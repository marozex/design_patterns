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
