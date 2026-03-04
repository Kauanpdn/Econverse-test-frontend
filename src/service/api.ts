export async function getProducts() {
    const response = await fetch("COLE_AQUI_O_LINK_DO_JSON");
    const data = await response.json();
    return data.products || data;
}