// PRawie gotowy do V2 trzeba ogarnac i opisac

class FetchCache {
    constructor(limit) {
        this.limit = limit;
        this.cache = new Map(); // Map trzyma kolejność wstawiania
    }

    async get(url) {
        // Jeśli jest w cache, zwróć od razu
        if (this.cache.has(url)) {
            const cached = this.cache.get(url);

            // Jeśli to Promise (fetch w toku), poczekaj
            if (cached instanceof Promise) {
                return await cached;
            }

            // Odśwież kolejność w LRU
            this.cache.delete(url);
            this.cache.set(url, cached);
            return cached;
        }

        // Jeśli nie ma w cache, fetchujemy
        const fetchPromise = fetch(url)
            .then(res => res.json())
            .then(data => {
                this.cache.set(url, data);
                return data;
            })

        // Zapisz Promise do Map, żeby kolejne wywołania czekały na ten sam fetch
        this.cache.set(url, fetchPromise);

        // Limit LRU
        if (this.cache.size > this.limit) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        return fetchPromise;
    }
}

const listaCache = new FetchCache(3);