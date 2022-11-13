export async function handleResponse(response: any) {
  if (response.ok) return response.json();
  if (response.status === 401) {
    const error = await response.text();
    throw new Error(error);
  }
  //   if (response.status === 400) {
  //     // So, a server-side validation error occurred.
  //     // Server side validation returns a string error message, so parse as text instead of json.
  //     const error = await response.json();
  //     throw new Error(error.message);
  //   }

  const error = await response.json();
  if (error) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    throw new Error(error.message);
  }
  throw new Error('Network response was not ok.');
}

// In a real app, would likely call an error logging service.
export function handleError(error: any): any {
  // eslint-disable-next-line no-console
  console.error('API call failed. ', error);
  let msg = error.response.errors ? error.response.errors[0]?.message : error;
  throw new Error(msg);
}
