export async function getProducts() {
    const response = await fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74", {
      method: "GET",
    });

    // const response = await fetch("https://.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74", {
    //   method: "GET",
    // });
    const data = await response.json();
    return data;
}
  