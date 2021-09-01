const updateDynamicCache = (dynamicCache, req, res) => {
    if (res.ok) {
        caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone())
            return res.clone()
        })
    }

    return res.clone()
}