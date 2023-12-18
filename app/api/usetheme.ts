import { useLocalStorage } from "./uselocalstorage";

export function useTheme() {
    return useLocalStorage<Theme>("theme", "light");
}
