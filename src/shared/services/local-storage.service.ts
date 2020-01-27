class LocalStorageService {
    public getItem(key: string): string {
        const item: string | null = localStorage.getItem(key);
        if (!item) {
            return '';
        }
        return item;
    }

    public setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}

const localStorageService = new LocalStorageService();

export default localStorageService;