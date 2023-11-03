import { AppUser, IPingUser, PingUserMapper } from "@lmes/bff-pingid";

/**
 * Define User in Cookie
 */
export class User extends AppUser {
    /** Add desired user attributes (ldap & name already included) */
}

/**
 * Maps Ldap info of user to yoyr own User class.
 */
export class UserMapper implements PingUserMapper<User> {
    toUser = (pingUser: IPingUser): User => {
        const user: User = new User()
        user.ldap = pingUser.uid
        user.name = pingUser.cn
        
        // Add desired mapping of attributes

        return user
    }
}