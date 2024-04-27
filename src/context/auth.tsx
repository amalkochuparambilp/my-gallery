/* import { User, onAuthStateChanged } from 'firebase/auth'
import { children, createContext, useInsertionEffect, useState } from "react";

interface AuthContextType {
    user: User | null,
    isLoading: boolean
}
export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: false,
});

interface AuthProviderProps {
    children: React.ReactElement;
}
export const AuthProvider: FC <AuthProviderProps> = ({ Children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useInsertionEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false)
        })

        return unsubscribe
    }, []);

    const value = {
        user,
        isLoading,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
*/