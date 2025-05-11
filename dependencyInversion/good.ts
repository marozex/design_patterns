export {}

class User {}

interface IUserService {
  create(user: User): User

  findById(id: string): User
}

interface IUserRepository {
  create(user: User): User

  findById(id: string): User
}

class UserController {
  // private userService = new UserService()
  constructor(private userService: IUserService) {
    this.userService = userService
  }

  create(user: User): User {
    return this.userService.create(user)
  }

  findById(id: string): User {
    return this.userService.findById(id)
  }
}

class UserService implements IUserService {
  //   private userRepository = new UserRdbRepository()
  constructor(private userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  create(user: User): User {
    return this.userRepository.create(user)
  }

  findById(id: string): User {
    return this.userRepository.findById(id)
  }
}

class UserRdbRepository implements IUserRepository {
  create(user: User): User {
    console.log("RDBでのユーザー作成処理")
    return user
  }

  findById(id: string): User {
    console.log("RDBでのユーザー検索処理")
    return new User()
  }
}

function run() {
  const repository = new UserRdbRepository()
  const service = new UserService(repository)
  const controller = new UserController(service)

  return controller.findById("1234")
}

run()
