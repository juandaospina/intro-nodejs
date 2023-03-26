const loadData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log("[DATA]", data)
}

loadData();

