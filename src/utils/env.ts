export function getEnvValue<T = string>(key: keyof ImportMetaEnv): T {
  const envValue = import.meta.env[key]
  return (envValue === 'true' ? true : envValue === 'false' ? false : envValue) as unknown as T
}

export function getBaseUrl(): string {
  return getEnvValue<string>('VITE_BASE_URL')
}
