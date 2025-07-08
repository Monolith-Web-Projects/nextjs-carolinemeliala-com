
// Products List
const callProducts = async () => {
    const response = await fetch("http://localhost:8000/api/products/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        }
    })
    const data = await response.json()
    return data
}

export {callProducts}