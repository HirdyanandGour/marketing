
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchMenus() {
  const response = await fetch(`${API_BASE_URL}/menus`);
  if (!response.ok) {
    throw new Error("Failed to fetch menus");
  }
  return response.json();
}
