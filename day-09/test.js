const pc = {
  image: 123,
  cpu: "I5-12400f",
  vga: "RTX 3060",
  mainboard: "B660m",
  ram: "8GB",
  ssd: "240GB",
  price: "25,145,000",
};

for (let property in pc) {
  console.log(property);
}

// npx json-server db.json
