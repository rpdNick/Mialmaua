export function parseList(value: string | null): string[] {
  return value ? value.split(",").filter(Boolean) : []
}

type CatalogUrlState = {
  category: string,
  sizes: string[],
  materials: string[],
  colors: string[],
  query: string,
}

export function buildCatalogQueryString(state: CatalogUrlState): string {
  const params = new URLSearchParams();

  if (state.category) params.set("category", state.category);
  if (state.sizes.length) params.set("sizes", state.sizes.join(","));
  if (state.materials.length) params.set("materials", state.materials.join(","));
  if (state.colors.length) params.set("colors", state.colors.join(","));
  if (state.query) params.set("query", state.query);

  return params.toString();
}