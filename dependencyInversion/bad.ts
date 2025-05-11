export {}

class User {}

class UserController {
  private userController = new UserService()

  create(user: User): User {
    return this.userController.create(user)
  }

  findById(id: string): User {
    return this.userController.findById(id)
  }
}

class UserService {
  private userRepository = new UserRdbRepository()

  create(user: User): User {
    return this.userRepository.create(user)
  }

  findById(id: string): User {
    return this.userRepository.findById(id)
  }
}

class UserRdbRepository {
  create(user: User): User {
    console.log("RDBでのユーザー作成処理")
    return user
  }

  findById(id: string): User {
    console.log("RDBでのユーザー検索処理")
    return new User()
  }
}
