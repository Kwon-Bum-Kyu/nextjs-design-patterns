type fetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit | null;
};
/** API 공용 호출 모듈 */
export async function fetchAPI<T>(
  url: string,
  options?: fetchOptions
): Promise<T> {
  const response = await fetch(url, {
    method: options?.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    body: options?.body ? JSON.stringify(options.body) : null,
  });

  if (!response.ok) {
    const error = new Error("API 호출 중 오류가 발생했습니다.") as Error & {
      info: any;
      status: number;
    };
    error.info = await response.json(); // 에러 객체에 info 속성 추가
    error.status = response.status; // 에러 객체에 status 속성 추가

    throw error;
  }

  return response.json() as Promise<T>;
}
